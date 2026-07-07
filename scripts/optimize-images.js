const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const backupDir = path.join(rootDir, "image-originals");
const reportPath = path.join(publicDir, "image-optimization-report.json");
const isAudit = process.argv.includes("--audit");

const PHOTO_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const GENERATED_EXTENSIONS = new Set([".webp", ".avif"]);
const PHOTO_WEBP_QUALITY = 80;
const PHOTO_AVIF_QUALITY = 56;

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function fileSize(filePath) {
  return fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function backupOriginal(filePath) {
  const relative = path.relative(rootDir, filePath);
  const backupPath = path.join(backupDir, relative);

  if (!fs.existsSync(backupPath)) {
    ensureDir(path.dirname(backupPath));
    fs.copyFileSync(filePath, backupPath);
  }
}

function classify(filePath) {
  const relative = toPosix(path.relative(rootDir, filePath));

  if (relative.startsWith("public/images/")) return "photo";
  if (relative.startsWith("public/brand/")) return "brand";
  return "other";
}

function maxPhotoWidth(filePath, width) {
  const relative = toPosix(path.relative(rootDir, filePath));

  if (relative.startsWith("public/images/services/")) {
    return Math.min(width, 1200);
  }

  return Math.min(width, 1920);
}

async function optimizePhoto(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!PHOTO_EXTENSIONS.has(ext)) return null;

  const metadata = await sharp(filePath).metadata();
  const width = metadata.width || 0;
  const targetWidth = maxPhotoWidth(filePath, width);
  const resize =
    targetWidth > 0 && targetWidth < width
      ? { width: targetWidth, withoutEnlargement: true }
      : undefined;

  const base = filePath.slice(0, -ext.length);
  const webpPath = `${base}.webp`;
  const avifPath = `${base}.avif`;

  if (!isAudit) {
    ensureDir(path.dirname(webpPath));
    await sharp(filePath)
      .rotate()
      .resize(resize)
      .webp({ quality: PHOTO_WEBP_QUALITY, effort: 5 })
      .toFile(webpPath);

    await sharp(filePath)
      .rotate()
      .resize(resize)
      .avif({ quality: PHOTO_AVIF_QUALITY, effort: 5 })
      .toFile(avifPath);
  }

  return {
    type: "photo",
    source: toPosix(path.relative(rootDir, filePath)),
    originalBytes: fileSize(filePath),
    dimensions: `${width}x${metadata.height || 0}`,
    targetWidth,
    outputs: [
      {
        format: "webp",
        quality: PHOTO_WEBP_QUALITY,
        path: toPosix(path.relative(rootDir, webpPath)),
        bytes: fileSize(webpPath),
      },
      {
        format: "avif",
        quality: PHOTO_AVIF_QUALITY,
        path: toPosix(path.relative(rootDir, avifPath)),
        bytes: fileSize(avifPath),
      },
    ],
  };
}

async function optimizePngInPlace(filePath, type) {
  if (path.extname(filePath).toLowerCase() !== ".png") return null;

  const originalBytes = fileSize(filePath);
  const metadata = await sharp(filePath).metadata();
  const tmpPath = `${filePath}.tmp`;

  if (!isAudit) {
    await sharp(filePath)
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: false,
        quality: 100,
      })
      .toFile(tmpPath);

    if (fileSize(tmpPath) < originalBytes) {
      backupOriginal(filePath);
      fs.copyFileSync(tmpPath, filePath);
    }

    fs.rmSync(tmpPath, { force: true });
  }

  return {
    type,
    source: toPosix(path.relative(rootDir, filePath)),
    originalBytes,
    optimizedBytes: fileSize(filePath),
    dimensions: `${metadata.width || 0}x${metadata.height || 0}`,
    transparency: Boolean(metadata.hasAlpha),
  };
}

async function createWebpForBrandLogo(filePath) {
  if (!/logo-kerem-teknik-servis.*\.png$/i.test(path.basename(filePath))) {
    return null;
  }

  const webpPath = filePath.replace(/\.png$/i, ".webp");

  if (!isAudit) {
    await sharp(filePath)
      .webp({ quality: 92, nearLossless: true, effort: 5 })
      .toFile(webpPath);
  }

  return {
    format: "webp",
    quality: 92,
    path: toPosix(path.relative(rootDir, webpPath)),
    bytes: fileSize(webpPath),
  };
}

async function createFavicons() {
  const source = path.join(publicDir, "brand", "favicon-512.png");
  if (!fs.existsSync(source)) return [];

  const sizes = [
    { size: 16, file: "favicon-16.png" },
    { size: 32, file: "favicon-32.png" },
    { size: 48, file: "favicon-48.png" },
    { size: 180, file: "apple-touch-icon.png" },
    { size: 192, file: "favicon-192.png" },
    { size: 512, file: "favicon-512.png" },
  ];

  const created = [];
  for (const item of sizes) {
    const output = path.join(publicDir, "brand", item.file);
    const tmpPath = `${output}.tmp`;
    const hadExisting = fs.existsSync(output);
    if (!isAudit && hadExisting) backupOriginal(output);

    if (!isAudit) {
      await sharp(source)
        .resize(item.size, item.size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(tmpPath);

      if (!hadExisting || fileSize(tmpPath) < fileSize(output)) {
        fs.copyFileSync(tmpPath, output);
      }

      fs.rmSync(tmpPath, { force: true });
    }

    created.push({
      size: `${item.size}x${item.size}`,
      path: toPosix(path.relative(rootDir, output)),
      bytes: fileSize(output),
    });
  }

  const icoPath = path.join(publicDir, "favicon.ico");
  if (!isAudit) {
    if (fs.existsSync(icoPath)) backupOriginal(icoPath);

    const pngBuffers = await Promise.all(
      [16, 32, 48].map((size) =>
        sharp(source)
          .resize(size, size, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          })
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer(),
      ),
    );

    fs.writeFileSync(icoPath, buildIco([16, 32, 48], pngBuffers));
  }

  created.push({
    size: "16x16,32x32,48x48",
    path: toPosix(path.relative(rootDir, icoPath)),
    bytes: fileSize(icoPath),
  });

  return created;
}

function buildIco(sizes, pngBuffers) {
  const count = sizes.length;
  const headerSize = 6;
  const directorySize = 16 * count;
  const header = Buffer.alloc(headerSize + directorySize);
  let imageOffset = headerSize + directorySize;

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  pngBuffers.forEach((buffer, index) => {
    const offset = headerSize + index * 16;
    const size = sizes[index];
    header.writeUInt8(size === 256 ? 0 : size, offset);
    header.writeUInt8(size === 256 ? 0 : size, offset + 1);
    header.writeUInt8(0, offset + 2);
    header.writeUInt8(0, offset + 3);
    header.writeUInt16LE(1, offset + 4);
    header.writeUInt16LE(32, offset + 6);
    header.writeUInt32LE(buffer.length, offset + 8);
    header.writeUInt32LE(imageOffset, offset + 12);
    imageOffset += buffer.length;
  });

  return Buffer.concat([header, ...pngBuffers]);
}

function summarize(items, usedPhotoOutput = "webp") {
  const photos = items.filter((item) => item.type === "photo");
  const brand = items.filter((item) => item.type === "brand");
  const originalPhotoBytes = photos.reduce(
    (sum, item) => sum + item.originalBytes,
    0,
  );
  const optimizedPhotoBytes = photos.reduce((sum, item) => {
    const output = item.outputs.find((entry) => entry.format === usedPhotoOutput);
    return sum + (output ? output.bytes : 0);
  }, 0);
  const originalBrandBytes = brand.reduce(
    (sum, item) => sum + item.originalBytes,
    0,
  );
  const optimizedBrandBytes = brand.reduce(
    (sum, item) => sum + item.optimizedBytes,
    0,
  );

  const originalBytes = originalPhotoBytes + originalBrandBytes;
  const optimizedBytes = optimizedPhotoBytes + optimizedBrandBytes;

  return {
    originalBytes,
    optimizedBytes,
    savedBytes: originalBytes - optimizedBytes,
    reductionPercent:
      originalBytes > 0
        ? Number((((originalBytes - optimizedBytes) / originalBytes) * 100).toFixed(2))
        : 0,
    photoOriginalBytes: originalPhotoBytes,
    photoWebpBytes: optimizedPhotoBytes,
    brandOriginalBytes: originalBrandBytes,
    brandOptimizedBytes: optimizedBrandBytes,
  };
}

async function main() {
  const files = walk(publicDir);
  const rasterFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return PHOTO_EXTENSIONS.has(ext) && !GENERATED_EXTENSIONS.has(ext);
  });

  const optimized = [];
  const brandOutputs = [];

  for (const file of rasterFiles) {
    const kind = classify(file);

    if (kind === "photo") {
      optimized.push(await optimizePhoto(file));
      continue;
    }

    if (kind === "brand") {
      const result = await optimizePngInPlace(file, "brand");
      if (result) {
        const webp = await createWebpForBrandLogo(file);
        if (webp) result.outputs = [webp];
        optimized.push(result);
      }
    }
  }

  brandOutputs.push(...(await createFavicons()));

  const report = {
    generatedAt: new Date().toISOString(),
    mode: isAudit ? "audit" : "optimize",
    settings: {
      photo: {
        avifQuality: PHOTO_AVIF_QUALITY,
        webpQuality: PHOTO_WEBP_QUALITY,
        heroMaxWidth: 1920,
        serviceMaxWidth: 1200,
      },
      brand: {
        pngCompressionLevel: 9,
        preserveTransparency: true,
        logoWebpQuality: 92,
      },
    },
    summary: summarize(optimized),
    optimized,
    favicons: brandOutputs,
  };

  if (!isAudit) {
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  }

  console.log(JSON.stringify(report.summary, null, 2));
  console.log(`Report: ${toPosix(path.relative(rootDir, reportPath))}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
