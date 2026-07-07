const fs = require("fs");
const sharp = require("sharp");
const { optimize } = require("svgo");

const input = "public/brand/preview-logo-trace-64.svg";
const source = fs.readFileSync(input, "utf8");
const precisions = [3, 2, 1];

async function rmseAgainstBaseline(candidatePng) {
  const baseline = await sharp(input).ensureAlpha().raw().toBuffer();
  const candidate = await sharp(candidatePng).ensureAlpha().raw().toBuffer();

  let mse = 0;
  for (let index = 0; index < baseline.length; index += 1) {
    const delta = baseline[index] - candidate[index];
    mse += delta * delta;
  }

  return Math.sqrt(mse / baseline.length);
}

async function main() {
  for (const floatPrecision of precisions) {
    const result = optimize(source, {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,
              cleanupIds: false,
              convertShapeToPath: false,
              mergePaths: false,
              removeUnknownsAndDefaults: false,
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
    });

    const outSvg = `public/brand/preview-logo-trace-64.optimized-fp${floatPrecision}.svg`;
    const outPng = `public/brand/preview-logo-trace-64.optimized-fp${floatPrecision}.png`;
    fs.writeFileSync(outSvg, result.data);
    await sharp(Buffer.from(result.data)).png().toFile(outPng);

    const rmse = await rmseAgainstBaseline(outPng);
    console.log(
      JSON.stringify({
        floatPrecision,
        bytes: fs.statSync(outSvg).size,
        rmse: Number(rmse.toFixed(4)),
        svg: outSvg,
        png: outPng,
      }),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
