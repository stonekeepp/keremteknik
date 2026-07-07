const fs = require("fs");
const { PNG } = require("pngjs");
const ImageTracer = require("imagetracerjs");
const sharp = require("sharp");

const input = "public/brand/logo-kerem-teknik-servis.png";
const png = PNG.sync.read(fs.readFileSync(input));
const imageData = { width: png.width, height: png.height, data: png.data };

const variants = [64, 128, 192, 256];
const baseOptions = {
  ltres: 0.1,
  qtres: 0.1,
  pathomit: 0,
  rightangleenhance: true,
  colorsampling: 2,
  mincolorratio: 0,
  colorquantcycles: 8,
  layering: 0,
  strokewidth: 0,
  linefilter: false,
  scale: 1,
  roundcoords: 2,
  viewbox: true,
  desc: false,
  blurradius: 0,
};

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
  for (const colors of variants) {
    const options = { ...baseOptions, numberofcolors: colors };
    const svg = ImageTracer.imagedataToSVG(imageData, options).replace(
      "<svg ",
      '<svg role="img" aria-label="Kerem Teknik Servis traced logo" ',
    );
    const svgPath = `public/brand/preview-logo-trace-${colors}.svg`;
    const pngPath = `public/brand/preview-logo-trace-${colors}.png`;

    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).png().toFile(pngPath);

    const rmse = await rmseAgainstOriginal(pngPath);
    console.log(
      JSON.stringify({
        colors,
        rmse: Number(rmse.toFixed(3)),
        svgBytes: fs.statSync(svgPath).size,
        pngBytes: fs.statSync(pngPath).size,
        svgPath,
        pngPath,
      }),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
