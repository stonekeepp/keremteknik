import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, "../public/brand/logo-kerem-teknik-servis.png");
const output = join(__dirname, "../public/brand/logo-kerem-teknik-servis-footer.png");

function isBlackBackground(r, g, b) {
  return r < 28 && g < 28 && b < 28;
}

/** Lacivert (#001e40 ve antialias tonları) — altın/turuncu hariç */
function isNavyBlue(r, g, b) {
  if (isBlackBackground(r, g, b)) return false;
  // Altın / turuncu / sarı koru
  if (r > 140 && g > 90 && b < 120) return false;
  if (r > 180 && g > 140) return false;

  const sum = r + g + b;
  if (sum > 280) return false;

  // Koyu mavi: B baskın, R düşük
  if (b >= r && b >= g && r < 95 && g < 110 && b > 35) {
    return true;
  }

  return r < 70 && g < 85 && b > 45 && b < 160;
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  if (isBlackBackground(r, g, b)) {
    data[i + 3] = 0;
    continue;
  }

  if (isNavyBlue(r, g, b)) {
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Footer logo saved: ${output}`);
