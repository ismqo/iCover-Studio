import { APPLE_MUSIC_PATH } from "./apple-logo";

export type CoverSettings = {
  mode: "classic" | "essentials";
  title: string; subtitle: string; footer: string; essentialsTitle: string;
  showLogo: boolean; corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  backgroundType: "gradients" | "colors" | "custom";
  gradient: number; color: number; customColor: string;
  textColor: string; bandColor: string; bandPattern: boolean; bandHeight: number;
  treatment: "original" | "mono" | "duotone"; tint: string;
  zoom: number; offsetX: number; offsetY: number;
};

export const defaults: CoverSettings = {
  mode: "classic", title: "Big Title", subtitle: "Sub Title", footer: "Footer",
  essentialsTitle: "Essentials", showLogo: true, corner: "top-left",
  backgroundType: "gradients", gradient: 0, color: 0, customColor: "#7865a8",
  textColor: "#ffffff", bandColor: "#c4c4c4", bandPattern: false, bandHeight: 31,
  treatment: "mono", tint: "#b8b0da", zoom: 1, offsetX: 50, offsetY: 50,
};

const images = new Map<string, Promise<HTMLImageElement>>();
export function loadImage(src: string): Promise<HTMLImageElement> {
  if (!images.has(src)) images.set(src, new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => { images.delete(src); reject(new Error("Unable to load this image. Try a JPG, PNG, or WebP file.")); };
    image.src = src;
  }));
  return images.get(src)!;
}
export function releaseImage(src: string) { images.delete(src); URL.revokeObjectURL(src); }

function text(ctx: CanvasRenderingContext2D, value: string, x: number, y: number, size: number, weight: number, width: number) {
  let fitted = size;
  ctx.font = `${weight} ${fitted}px CoverFont, Arial, sans-serif`;
  while (ctx.measureText(value).width > width && fitted > 5) {
    fitted -= 1;
    ctx.font = `${weight} ${fitted}px CoverFont, Arial, sans-serif`;
  }
  ctx.fillText(value, x, y);
}

// Preview and export share this renderer, including crop and pixel-level color treatment.
export async function renderCover(canvas: HTMLCanvasElement, s: CoverSettings, photo: string | null) {
  const size = 1200;
  const background = s.backgroundType === "custom" ? null : await loadImage(`/assets/${s.backgroundType}/${s.backgroundType === "gradients" ? s.gradient : s.color}.png`);
  const uploaded = photo ? await loadImage(photo) : null;
  await Promise.all([document.fonts.load('600 100px CoverFont'), document.fonts.load('300 100px CoverFont'), document.fonts.load('400 100px CoverFont')]);
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.textBaseline = "top";
  ctx.fillStyle = s.customColor;
  ctx.fillRect(0, 0, size, size);
  if (background) ctx.drawImage(background, 0, 0, size, size);
  const band = Math.round(size * s.bandHeight / 100);
  if (s.mode === "essentials") {
    if (uploaded) {
      const height = size - band;
      const scale = Math.max(size / uploaded.width, height / uploaded.height) * s.zoom;
      const w = uploaded.width * scale, h = uploaded.height * scale;
      ctx.save();
      ctx.beginPath(); ctx.rect(0, band, size, height); ctx.clip();
      ctx.drawImage(uploaded, (size - w) * s.offsetX / 100, band + (height - h) * s.offsetY / 100, w, h);
      ctx.restore();
      if (s.treatment !== "original") {
        const pixels = ctx.getImageData(0, band, size, height);
        const tint = s.treatment === "mono" ? [255, 255, 255] : [1, 3, 5].map(i => parseInt(s.tint.slice(i, i + 2), 16));
        for (let i = 0; i < pixels.data.length; i += 4) {
          const luma = (pixels.data[i] * .2126 + pixels.data[i+1] * .7152 + pixels.data[i+2] * .0722) / 255;
          for (let c = 0; c < 3; c++) pixels.data[i+c] = Math.round(tint[c] * luma);
        }
        ctx.putImageData(pixels, 0, band);
      }
    }
    ctx.fillStyle = s.bandColor;
    ctx.fillRect(0, 0, size, band);
    if (s.bandPattern) {
      if (background) ctx.drawImage(background, 0, 0, size, band);
      else { ctx.fillStyle = s.customColor; ctx.fillRect(0, 0, size, band); }
    }
    ctx.fillStyle = s.textColor;
    text(ctx, s.essentialsTitle, 48, band - 168, 148, 600, 1104);
  } else {
    ctx.fillStyle = s.textColor;
    text(ctx, s.title, 100, 260, 192, 600, 1000);
    text(ctx, s.subtitle, 100, 452, 160, 300, 1000);
    ctx.globalAlpha = .65;
    text(ctx, s.footer, 100, s.showLogo && s.corner.startsWith("bottom") ? 954 : 1060, 60, 400, 1000);
    ctx.globalAlpha = 1;
  }
  if (s.showLogo) {
    const w = s.mode === "essentials" ? 260 : 240;
    const h = w * 20.7 / 84.3;
    const padding = s.mode === "essentials" ? 48 : 100;
    const x = s.corner.endsWith("right") ? size - padding - w : padding;
    const y = s.corner.startsWith("bottom") ? size - 48 - h : 48;
    ctx.save(); ctx.translate(x, y); ctx.scale(w / 84.3, h / 20.7);
    ctx.fillStyle = s.textColor; ctx.fill(new Path2D(APPLE_MUSIC_PATH)); ctx.restore();
  }
}
