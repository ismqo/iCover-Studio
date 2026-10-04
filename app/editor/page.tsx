"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDownToLine, Check, ImagePlus, Music2, RotateCcw, X } from "lucide-react";
import { CoverSettings, defaults, loadImage, releaseImage, renderCover } from "@/lib/render-cover";

const corners = ["top-left", "top-right", "bottom-left", "bottom-right"] as const;
const tintColors = ["#b8b0da", "#efa1ad", "#8bc8b3", "#e9bb75", "#8ebde7", "#ffffff"];
const rangeProgress = (value: number, min: number, max: number) => ({
  "--range-progress": `${((value - min) / (max - min)) * 100}%`,
} as CSSProperties);

export default function Home() {
  const [settings, setSettings] = useState<CoverSettings>(defaults);
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [exporting, setExporting] = useState(false);
  const [rendering, setRendering] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const uploadId = useRef(0);
  const essentials = settings.mode === "essentials";
  const bottomLogoUnavailable = essentials && (settings.photoMargin > 0 || settings.photoRadius > 0);
  const bandHeightMin = settings.corner.startsWith("bottom") ? Math.max(18, Math.ceil((settings.essentialsFontSize + 40) / 12)) : 27;
  const classicTitleYMax = Math.max(15, Math.floor((900 - settings.classicFontSize - settings.classicSubtitleFontSize) / 12));
  const update = <K extends keyof CoverSettings>(key: K, value: CoverSettings[K]) => {
    setSettings(s => ({ ...s, [key]: value })); setStatus("");
  };
  const updatePhotoFrame = (key: "photoMargin" | "photoRadius", value: number) => {
    setSettings(s => ({
      ...s,
      [key]: value,
      corner: value > 0 && s.corner.startsWith("bottom") ? (s.corner === "bottom-left" ? "top-left" : "top-right") : s.corner,
    }));
    setStatus("");
  };
  const updateClassicFontSize = (key: "classicFontSize" | "classicSubtitleFontSize", value: number) => {
    setSettings(s => {
      const totalSize = key === "classicFontSize" ? value + s.classicSubtitleFontSize : s.classicFontSize + value;
      const maxTitleY = Math.max(15, Math.floor((900 - totalSize) / 12));
      return { ...s, [key]: value, classicTitleY: Math.min(s.classicTitleY, maxTitleY) };
    });
    setStatus("");
  };

  useEffect(() => {
    let cancelled = false;
    setRendering(true);
    const buffer = document.createElement("canvas");
    renderCover(buffer, settings, photo).then(() => {
      if (!cancelled && canvas.current) {
        canvas.current.width = canvas.current.height = 1200;
        canvas.current.getContext("2d")!.drawImage(buffer, 0, 0);
        setRendering(false);
      }
    }).catch((e: Error) => { if (!cancelled) { setError(e.message); setRendering(false); } });
    return () => { cancelled = true; };
  }, [settings, photo]);

  useEffect(() => {
    if (essentials && bottomLogoUnavailable && settings.corner.startsWith("bottom")) {
      setSettings(s => ({ ...s, corner: s.corner === "bottom-left" ? "top-left" : "top-right" }));
    }
  }, [bottomLogoUnavailable, essentials, settings.corner]);

  useEffect(() => () => { if (photo) releaseImage(photo); }, [photo]);

  async function upload(file?: File) {
    if (!file) return;
    const id = ++uploadId.current;
    setError(""); setStatus("");
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { setError("Choose a JPG, PNG, or WebP image."); return; }
    if (file.size > 20 * 1024 * 1024) { setError("Please choose an image smaller than 20 MB."); return; }
    setUploading(true);
    const url = URL.createObjectURL(file);
    try {
      const image = await loadImage(url);
      if (image.width * image.height > 60_000_000) throw new Error("This photo is too large. Resize it to under 60 megapixels first.");
      if (id !== uploadId.current) { releaseImage(url); return; }
      setPhoto(url); setPhotoName(file.name);
      setSettings(s => ({ ...s, zoom: 1, offsetX: 50, offsetY: 50 }));
    } catch (e) { releaseImage(url); if (id === uploadId.current) setError((e as Error).message); }
    finally { if (id === uploadId.current) setUploading(false); }
  }

  async function download() {
    setExporting(true); setError("");
    try {
      const output = document.createElement("canvas");
      await renderCover(output, settings, photo);
      const blob = await new Promise<Blob>((resolve, reject) => output.toBlob(b => b ? resolve(b) : reject(new Error("Export failed. Please try again.")), "image/png"));
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `icover-${essentials ? settings.essentialsTitle : settings.title}`.replace(/[^a-z0-9-]/gi, "-").slice(0, 100) + ".png";
      link.click(); setTimeout(() => URL.revokeObjectURL(url), 10000);
      setStatus("Your 1200 × 1200 PNG is ready.");
    } catch (e) { setError((e as Error).message); }
    finally { setExporting(false); }
  }

  function reset() {
    uploadId.current++; setUploading(false); setSettings(defaults); setPhoto(null); setPhotoName(""); setError(""); setStatus("Cover reset.");
  }

  return <div className="app-shell">
    <header className="app-header">
      <nav className="editor-nav" aria-label="Main navigation">
      <a href="/" className="brand" aria-label="iCover home"><span className="brand-mark"><img src="/assets/brand/icover-icon.png" alt=""/></span>iCover<span className="studio-label">STUDIO</span></a>
      <span className="editor-nav-caption">YOUR MUSIC. YOUR ARTWORK.</span>
      <button className="download mobile-download" onClick={download} disabled={exporting || rendering || uploading}><ArrowDownToLine size={16}/>{exporting ? "Exporting…" : "Download cover"}</button>
      </nav>
    </header>

    <main>
      <div className="workspace">
        <section className="preview-panel" aria-label="Cover preview">
          <div className="section-top"><span><span className="live-dot"/> LIVE PREVIEW</span><button className="icon-button" onClick={reset} title="Reset cover" aria-label="Reset cover"><RotateCcw size={15}/></button></div>
          <div className="preview-stage"><canvas ref={canvas} width="1200" height="1200" aria-label={`${essentials ? settings.essentialsTitle : settings.title} cover preview`} role="img"/></div>
          <div className="preview-download"><button className="download" onClick={download} disabled={exporting || rendering || uploading}><ArrowDownToLine size={16}/>{exporting ? "Exporting…" : "Download cover"}</button></div>
        </section>

        <section className="controls" aria-label="Cover settings" tabIndex={0}>
          <div className="control-section first-section"><div className="section-heading"><h2>Cover style</h2></div>
            <div className="style-options">
              <button className={`style-option ${!essentials ? "selected" : ""}`} aria-pressed={!essentials} onClick={() => setSettings(s => ({ ...s, mode: "classic", textColor: "#ffffff" }))}><span className="style-thumb classic-thumb">Aa</span><span><strong>Original</strong><small>Color & gradients</small></span>{!essentials && <Check size={15}/>}</button>
              <button className={`style-option ${essentials ? "selected" : ""}`} aria-pressed={essentials} onClick={() => setSettings(s => ({ ...s, mode: "essentials", corner: "top-right", textColor: "#111111" }))}><span className="style-thumb essentials-thumb"><span>Essentials</span><Music2 size={19}/></span><span><strong>Essentials</strong><small>Photo & title band</small></span>{essentials && <Check size={15}/>}</button>
            </div>
          </div>

          <div className="control-section"><div className="section-heading"><h2>{essentials ? "Title band" : "Typography"}</h2></div>
            {essentials ? <label className="field">Title<input maxLength={100} value={settings.essentialsTitle} onChange={e => update("essentialsTitle", e.target.value)} placeholder="Essentials"/></label> : <><div className="fields"><label className="field">Big title<input maxLength={100} value={settings.title} onChange={e => update("title", e.target.value)} placeholder="Big Title"/></label><label className="range-label title-size-range">Big title size<span>{settings.classicFontSize}px</span><input type="range" min="96" max="216" step="4" value={settings.classicFontSize} style={rangeProgress(settings.classicFontSize, 96, 216)} onChange={e => updateClassicFontSize("classicFontSize", +e.target.value)}/></label><div className="field-label weight-label">Big title weight</div><div className="segmented weight-options">{([['normal','Normal'],['bold','Bold']] as const).map(([value,label]) => <button key={value} className={settings.classicTitleWeight === value ? "active" : ""} aria-pressed={settings.classicTitleWeight === value} onClick={() => update("classicTitleWeight", value)}>{label}</button>)}</div><label className="field">Subtitle<input maxLength={100} value={settings.subtitle} onChange={e => update("subtitle", e.target.value)} placeholder="Sub Title"/></label><label className="range-label title-size-range">Subtitle size<span>{settings.classicSubtitleFontSize}px</span><input type="range" min="72" max="180" step="4" value={settings.classicSubtitleFontSize} style={rangeProgress(settings.classicSubtitleFontSize, 72, 180)} onChange={e => updateClassicFontSize("classicSubtitleFontSize", +e.target.value)}/></label><div className="field-label weight-label">Subtitle weight</div><div className="segmented weight-options">{([['normal','Normal'],['bold','Bold']] as const).map(([value,label]) => <button key={value} className={settings.classicSubtitleWeight === value ? "active" : ""} aria-pressed={settings.classicSubtitleWeight === value} onClick={() => update("classicSubtitleWeight", value)}>{label}</button>)}</div><label className="field">Footer<input maxLength={150} value={settings.footer} onChange={e => update("footer", e.target.value)} placeholder="Footer"/></label></div><div className="field-label">Title alignment</div><div className="segmented typography-alignment">{([['left','Left'],['center','Center']] as const).map(([value,label]) => <button key={value} className={settings.classicAlign === value ? "active" : ""} aria-pressed={settings.classicAlign === value} onClick={() => update("classicAlign", value)}>{label}</button>)}</div><label className="range-label">Title group vertical position<span>{settings.classicTitleY}%</span><input type="range" min="15" max={classicTitleYMax} value={settings.classicTitleY} style={rangeProgress(settings.classicTitleY, 15, classicTitleYMax)} onChange={e => update("classicTitleY", +e.target.value)}/></label></>}
            <div className="color-row"><label className="color-control"><input type="color" value={settings.textColor} onChange={e => update("textColor", e.target.value)}/><span>Text & logo</span></label>{essentials && <label className="color-control"><input type="color" value={settings.bandColor} onChange={e => update("bandColor", e.target.value)}/><span>Band color</span></label>}</div>
            {essentials && <><label className="range-label">Title size<span>{settings.essentialsFontSize}px</span><input type="range" min="72" max="180" step="2" value={settings.essentialsFontSize} style={rangeProgress(settings.essentialsFontSize, 72, 180)} onChange={e => { const fontSize = +e.target.value; setSettings(s => ({ ...s, essentialsFontSize: fontSize, bandHeight: Math.max(s.bandHeight, s.corner.startsWith("bottom") ? Math.max(18, Math.ceil((fontSize + 40) / 12)) : 27) })); }}/></label><label className="range-label">Band height<span>{settings.bandHeight}%</span><input type="range" min={bandHeightMin} max="42" value={settings.bandHeight} style={rangeProgress(settings.bandHeight, bandHeightMin, 42)} onChange={e => update("bandHeight", +e.target.value)}/></label></>}
          </div>

          {essentials && <div className="control-section"><div className="section-heading"><h2>Your photo</h2></div>
            <input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp" className="hidden-input" aria-label="Upload cover photo" onChange={e => { void upload(e.target.files?.[0]); e.target.value = ""; }}/>
            <button className={`upload-zone ${dragging ? "dragging" : ""}`} onClick={() => fileInput.current?.click()} onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={e => { e.preventDefault(); setDragging(false); void upload(e.dataTransfer.files[0]); }}><ImagePlus size={23}/><strong>{uploading ? "Opening photo…" : photo ? "Replace your photo" : "Add your favorite photo"}</strong><span>Drop an image or click to browse</span><small>JPG, PNG, WebP · up to 20 MB</small></button>
            {photo && <div className="file-row"><span>{photoName}</span><button className="icon-button" aria-label="Remove photo" onClick={() => { uploadId.current++; setUploading(false); setPhoto(null); setPhotoName(""); }}><X size={14}/></button></div>}
            <div className="photo-frame-controls"><div className="field-label">Photo frame</div><label className="range-label">Side & bottom margin<span>{settings.photoMargin}%</span><input type="range" min="0" max="12" step="1" value={settings.photoMargin} style={rangeProgress(settings.photoMargin, 0, 12)} onChange={e => updatePhotoFrame("photoMargin", +e.target.value)}/></label><label className="toggle-row compact frame-toggle"><span>Include top margin</span><input type="checkbox" role="switch" checked={settings.photoTopMargin} onChange={e => update("photoTopMargin", e.target.checked)}/></label><label className="range-label">Rounded corners<span>{settings.photoRadius}%</span><input type="range" min="0" max="10" step="1" value={settings.photoRadius} style={rangeProgress(settings.photoRadius, 0, 10)} onChange={e => updatePhotoFrame("photoRadius", +e.target.value)}/></label></div>
            <div className="field-label">Photo treatment</div><div className="segmented treatments">{([['original','Original'],['mono','Mono'],['duotone','Duotone']] as const).map(([value,label]) => <button key={value} aria-pressed={settings.treatment === value} className={settings.treatment === value ? "active" : ""} onClick={() => update("treatment", value)}>{label}</button>)}</div>
            {settings.treatment === "duotone" && <div className="tint-row">{tintColors.map(color => <button key={color} className={`tint ${settings.tint === color ? "active" : ""}`} style={{ background: color }} aria-label={`Duotone ${color}`} aria-pressed={settings.tint === color} onClick={() => update("tint", color)}/>)}<label className="custom-tint"><input aria-label="Custom duotone color" type="color" value={settings.tint} onChange={e => update("tint", e.target.value)}/></label></div>}
            {photo ? <div className="crop-controls"><label className="range-label">Zoom<span>{settings.zoom.toFixed(1)}×</span><input type="range" min="1" max="3" step="0.05" value={settings.zoom} style={rangeProgress(settings.zoom, 1, 3)} onChange={e => update("zoom", +e.target.value)}/></label><label className="range-label">Horizontal position<span>{settings.offsetX}%</span><input type="range" min="0" max="100" value={settings.offsetX} style={rangeProgress(settings.offsetX, 0, 100)} onChange={e => update("offsetX", +e.target.value)}/></label><label className="range-label">Vertical position<span>{settings.offsetY}%</span><input type="range" min="0" max="100" value={settings.offsetY} style={rangeProgress(settings.offsetY, 0, 100)} onChange={e => update("offsetY", +e.target.value)}/></label></div> : <p className="help-text">Add a photo to apply treatments and adjust its crop.</p>}
          </div>}

          <div className={`control-section ${essentials ? "last-section" : ""}`}><div className="section-heading"><h2>Apple Music logo</h2></div><label className="toggle-row"><span>Show logo</span><input type="checkbox" role="switch" checked={settings.showLogo} onChange={e => update("showLogo", e.target.checked)}/></label>
            <div className={`corner-options ${!settings.showLogo ? "disabled" : ""}`}>{corners.map(corner => { const disabled = !settings.showLogo || (bottomLogoUnavailable && corner.startsWith("bottom")); return <button disabled={disabled} key={corner} className={settings.corner === corner ? "active" : ""} aria-pressed={settings.corner === corner} title={disabled && settings.showLogo ? "Set photo margin and rounded corners to 0% to use a bottom corner" : undefined} onClick={() => setSettings(s => ({ ...s, corner, bandHeight: essentials && corner.startsWith("top") ? Math.max(s.bandHeight, 27) : s.bandHeight }))}><span className={`corner-icon ${corner}`}><i/></span>{corner.replace("-", " ")}</button>; })}</div>
            {bottomLogoUnavailable && <p className="help-text">Bottom corners require photo margin and rounded corners to be 0%.</p>}
          </div>

          {!essentials && <div className="control-section last-section"><div className="section-heading"><h2>Background</h2></div><div className="segmented">{([['gradients','Gradient'],['colors','Color'],['custom','Custom']] as const).map(([value,label]) => <button key={value} className={settings.backgroundType === value ? "active" : ""} aria-pressed={settings.backgroundType === value} onClick={() => update("backgroundType", value)}>{label}</button>)}</div>
            {settings.backgroundType === "custom" ? <label className="color-control custom-background"><input type="color" value={settings.customColor} onChange={e => update("customColor", e.target.value)}/><span>Background color</span><code>{settings.customColor}</code></label> : <div className="swatches">{Array.from({ length: settings.backgroundType === "gradients" ? 40 : 7 }, (_, i) => <button key={`${settings.backgroundType}-${i}`} title={`${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`} aria-label={`${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`} aria-pressed={(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i} className={`swatch ${(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i ? "selected" : ""}`} onClick={() => update(settings.backgroundType === "gradients" ? "gradient" : "color", i)}><img src={`/assets/${settings.backgroundType}/${i}.png`} alt=""/>{(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i && <Check size={15}/>}</button>)}</div>}
          </div>}
        </section>
      </div>
      {(error || status) && <div className={`toast ${error ? "error" : ""}`} role={error ? "alert" : "status"}>{error || status}<button aria-label="Dismiss notification" onClick={() => { setError(""); setStatus(""); }}><X size={15}/></button></div>}
    </main>
  </div>;
}
