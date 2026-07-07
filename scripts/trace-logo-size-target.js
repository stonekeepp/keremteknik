const fs = require("fs");
const { PNG } = require("pngjs");
const ImageTracer = require("imagetracerjs");
const sharp = require("sharp");
const { optimize } = require("svgo");
const zlib = require("zlib");

const input = "public/brand/logo-kerem-teknik-servis.png";
const png = PNG.sync.read(fs.readFileSync(input));
const imageData = { width: png.width, height: png.height, data: png.data };

const colorsList = [8, 12, 16, 20, 24, 32, 48];
const pathOmitList = [0, 2, 4, 8, 12, 20];
const precisionList = [1, 2];

const baseOptions = {
  ltres: 0.3,
  qtres: 0.3,
  rightangleenhance: true,
  colorsampling: 2,
  mincolorratio: 0,
  colorquantcycles: 6,
  layering: 0,
  strokewidth: 0,
  linefilter: false,
  scale: 1,
  roundcoords: 1,
  viewbox: true,
  desc: false,
  blurradius: 0,
};

function optimizeSvg(source, floatPrecision) {
  return optimize(source, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: false,
            mergePaths: false,
          },
        },
      },
      "removeDimensions",
      "sortAttrs",
      {
        name: "convertPathData",
        params: {
          floatPrecision,
          transformPrecision: floatPrecision,
          noSpaceAfterFlags: false,
        },
      },
    ],
  }).data;
}

async function rmseAgainstOriginal(renderedPath) {
  const original = await sharp(input).ensureAlpha().raw().toBuffer();
  const rendered = await sharp(renderedPath)
    .resize(png.width, png.height, { fit: "fill" })
    .ensureAlpha()
    .raw()
    .toBuffer();

  let mse = 0;
  for (let index = 0; index < original.length; index += 1) {
    const delta = original[index] - rendered[index];
    mse += delta * delta;
  }

  return Math.sqrt(mse / original.length);
}

async function main() {
  const rows = [];

  for (const colors of colorsList) {
    for (const pathomit of pathOmitList) {
      const traced = ImageTracer.imagedataToSVG(imageData, {
        ...baseOptions,
        numberofcolors: colors,
        pathomit,
      }).replace(
        "<svg ",
        '<svg role="img" aria-label="Kerem Teknik Servis traced logo" ',
      );

      for (const precision of precisionList) {
        const svg = optimizeSvg(traced, precision);
        const name = `preview-logo-target-c${colors}-p${pathomit}-fp${precision}`;
        const svgPath = `public/brand/${name}.svg`;
        const pngPath = `public/brand/${name}.png`;
        fs.writeFileSync(svgPath, svg);
        await sharp(Buffer.from(svg)).png().toFile(pngPath);

        const rmse = await rmseAgainstOriginal(pngPath);
        rows.push({
          colors,
          pathomit,
          precision,
          bytes: fs.statSync(svgPath).size,
          gzipBytes: zlib.gzipSync(svg).length,
          brotliBytes: zlib.brotliCompressSync(Buffer.from(svg)).length,
          rmse: Number(rmse.toFixed(3)),
          svgPath,
          pngPath,
        });
      }
    }
  }

  rows.sort((a, b) => {
    const aPenalty = a.bytes <= 100000 ? 0 : 1000000;
    const bPenalty = b.bytes <= 100000 ? 0 : 1000000;
    return aPenalty - bPenalty || a.rmse - b.rmse || a.bytes - b.bytes;
  });

  fs.writeFileSync(
    "public/brand/preview-logo-target-report.json",
    `${JSON.stringify(rows, null, 2)}\n`,
  );

  console.log(JSON.stringify(rows.slice(0, 12), null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
