"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Check, ImagePlus, Music2, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { CoverSettings, defaults, loadImage, releaseImage, renderCover } from "@/lib/render-cover";

const corners = ["top-left", "top-right", "bottom-left", "bottom-right"] as const;
const tintColors = ["#b8b0da", "#efa1ad", "#8bc8b3", "#e9bb75", "#8ebde7", "#ffffff"];

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
  const update = <K extends keyof CoverSettings>(key: K, value: CoverSettings[K]) => {
    setSettings(s => ({ ...s, [key]: value })); setStatus("");
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
      <a href="/" className="brand" aria-label="iCover home"><span className="brand-icon"><Music2 size={19}/></span>iCover<span className="studio-label">STUDIO</span></a>
      <button className="download" onClick={download} disabled={exporting || rendering || uploading}><ArrowDownToLine size={16}/>{exporting ? "Exporting…" : "Download cover"}</button>
    </header>

    <main>
      <div className="intro"><div><div className="eyebrow">YOUR MUSIC. YOUR ARTWORK.</div><h1>Give your playlist a face.</h1><p>A little creativity. A cover that feels like you.</p></div><span className="format-badge">PNG <span>·</span> 1200 × 1200</span></div>
      <div className="workspace">
        <section className="preview-panel" aria-label="Cover preview">
          <div className="section-top"><span><span className="live-dot"/> LIVE PREVIEW</span><button className="icon-button" onClick={reset} title="Reset cover" aria-label="Reset cover"><RotateCcw size={15}/></button></div>
          <div className="preview-stage"><canvas ref={canvas} width="1200" height="1200" aria-label={`${essentials ? settings.essentialsTitle : settings.title} cover preview`} role="img"/></div>
          <div className="preview-caption"><span>{essentials ? "The Essentials collection" : "The original collection"}</span><span>01 / {essentials ? "PHOTO" : "GRADIENT"}</span></div>
          <div className="preview-note"><span className="note-icon"><SlidersHorizontal size={17}/></span><p>Make it your own.<br/><span>{essentials ? "A bold title. A favorite photo. An instant classic." : "Pick a pattern, add a title, and set the mood."}</span></p></div>
          <p className="privacy-note">Made in your browser. Your photos stay on your device.</p>
        </section>

        <section className="controls" aria-label="Cover settings">
          <div className="control-section first-section"><div className="section-heading"><h2>Cover style</h2><span>01</span></div>
            <div className="style-options">
              <button className={`style-option ${!essentials ? "selected" : ""}`} aria-pressed={!essentials} onClick={() => setSettings(s => ({ ...s, mode: "classic", textColor: "#ffffff" }))}><span className="style-thumb classic-thumb">Aa</span><span><strong>Original</strong><small>Color & gradients</small></span>{!essentials && <Check size={15}/>}</button>
              <button className={`style-option ${essentials ? "selected" : ""}`} aria-pressed={essentials} onClick={() => setSettings(s => ({ ...s, mode: "essentials", corner: "top-right", textColor: "#111111" }))}><span className="style-thumb essentials-thumb"><span>Essentials</span><Music2 size={19}/></span><span><strong>Essentials</strong><small>Photo & title band</small></span>{essentials && <Check size={15}/>}</button>
            </div>
          </div>

          <div className="control-section"><div className="section-heading"><h2>{essentials ? "Title band" : "Typography"}</h2><span>02</span></div>
            {essentials ? <label className="field">Title<input maxLength={100} value={settings.essentialsTitle} onChange={e => update("essentialsTitle", e.target.value)} placeholder="Essentials"/></label> : <div className="fields"><label className="field">Big title<input maxLength={100} value={settings.title} onChange={e => update("title", e.target.value)} placeholder="Big Title"/></label><label className="field">Subtitle<input maxLength={100} value={settings.subtitle} onChange={e => update("subtitle", e.target.value)} placeholder="Sub Title"/></label><label className="field">Footer<input maxLength={150} value={settings.footer} onChange={e => update("footer", e.target.value)} placeholder="Footer"/></label></div>}
            <div className="color-row"><label className="color-control"><input type="color" value={settings.textColor} onChange={e => update("textColor", e.target.value)}/><span>Text & logo</span></label>{essentials && <label className="color-control"><input type="color" value={settings.bandColor} onChange={e => update("bandColor", e.target.value)}/><span>Band color</span></label>}</div>
            {essentials && <><label className="range-label">Band height<span>{settings.bandHeight}%</span><input type="range" min="27" max="42" value={settings.bandHeight} onChange={e => update("bandHeight", +e.target.value)}/></label><label className="toggle-row compact"><span>Use selected pattern in band</span><input type="checkbox" role="switch" checked={settings.bandPattern} onChange={e => update("bandPattern", e.target.checked)}/></label></>}
          </div>

          {essentials && <div className="control-section"><div className="section-heading"><h2>Your photo</h2><span>03</span></div>
            <input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp" className="hidden-input" aria-label="Upload cover photo" onChange={e => { void upload(e.target.files?.[0]); e.target.value = ""; }}/>
            <button className={`upload-zone ${dragging ? "dragging" : ""}`} onClick={() => fileInput.current?.click()} onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={e => { e.preventDefault(); setDragging(false); void upload(e.dataTransfer.files[0]); }}><ImagePlus size={23}/><strong>{uploading ? "Opening photo…" : photo ? "Replace your photo" : "Add your favorite photo"}</strong><span>Drop an image or click to browse</span><small>JPG, PNG, WebP · up to 20 MB</small></button>
            {photo && <div className="file-row"><span>{photoName}</span><button className="icon-button" aria-label="Remove photo" onClick={() => { uploadId.current++; setUploading(false); setPhoto(null); setPhotoName(""); }}><X size={14}/></button></div>}
            <div className="field-label">Photo treatment</div><div className="segmented treatments">{([['original','Original'],['mono','Mono'],['duotone','Duotone']] as const).map(([value,label]) => <button key={value} aria-pressed={settings.treatment === value} className={settings.treatment === value ? "active" : ""} onClick={() => update("treatment", value)}>{label}</button>)}</div>
            {settings.treatment === "duotone" && <div className="tint-row">{tintColors.map(color => <button key={color} className={`tint ${settings.tint === color ? "active" : ""}`} style={{ background: color }} aria-label={`Duotone ${color}`} aria-pressed={settings.tint === color} onClick={() => update("tint", color)}/>)}<label className="custom-tint"><input aria-label="Custom duotone color" type="color" value={settings.tint} onChange={e => update("tint", e.target.value)}/></label></div>}
            {photo ? <div className="crop-controls"><label className="range-label">Zoom<span>{settings.zoom.toFixed(1)}×</span><input type="range" min="1" max="3" step="0.05" value={settings.zoom} onChange={e => update("zoom", +e.target.value)}/></label><label className="range-label">Horizontal position<span>{settings.offsetX}%</span><input type="range" min="0" max="100" value={settings.offsetX} onChange={e => update("offsetX", +e.target.value)}/></label><label className="range-label">Vertical position<span>{settings.offsetY}%</span><input type="range" min="0" max="100" value={settings.offsetY} onChange={e => update("offsetY", +e.target.value)}/></label></div> : <p className="help-text">Add a photo to apply treatments and adjust its crop.</p>}
          </div>}

          <div className="control-section"><div className="section-heading"><h2>Apple Music logo</h2><span>{essentials ? "04" : "03"}</span></div><label className="toggle-row"><span>Show logo</span><input type="checkbox" role="switch" checked={settings.showLogo} onChange={e => update("showLogo", e.target.checked)}/></label>
            <div className={`corner-options ${!settings.showLogo ? "disabled" : ""}`}>{corners.map(corner => <button disabled={!settings.showLogo} key={corner} className={settings.corner === corner ? "active" : ""} aria-pressed={settings.corner === corner} onClick={() => update("corner", corner)}><span className={`corner-icon ${corner}`}><i/></span>{corner.replace("-", " ")}</button>)}</div>
          </div>

          <div className="control-section last-section"><div className="section-heading"><h2>{essentials ? "Patterns & backgrounds" : "Background"}</h2><span>{essentials ? "05" : "04"}</span></div><div className="segmented">{([['gradients','Gradient'],['colors','Color'],['custom','Custom']] as const).map(([value,label]) => <button key={value} className={settings.backgroundType === value ? "active" : ""} aria-pressed={settings.backgroundType === value} onClick={() => update("backgroundType", value)}>{label}</button>)}</div>
            {settings.backgroundType === "custom" ? <label className="color-control custom-background"><input type="color" value={settings.customColor} onChange={e => update("customColor", e.target.value)}/><span>Background color</span><code>{settings.customColor}</code></label> : <div className="swatches">{Array.from({ length: settings.backgroundType === "gradients" ? 40 : 7 }, (_, i) => <button key={`${settings.backgroundType}-${i}`} title={`${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`} aria-label={`${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`} aria-pressed={(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i} className={`swatch ${(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i ? "selected" : ""}`} onClick={() => update(settings.backgroundType === "gradients" ? "gradient" : "color", i)}><img src={`/assets/${settings.backgroundType}/${i}.png`} alt=""/>{(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i && <Check size={15}/>}</button>)}</div>}
            {essentials && <p className="help-text">{photo ? "Enable “Use selected pattern in band” to pair a pattern with your photo." : "The selected background fills the cover until you add a photo."}</p>}
          </div>
        </section>
      </div>
      {(error || status) && <div className={`toast ${error ? "error" : ""}`} role={error ? "alert" : "status"}>{error || status}<button aria-label="Dismiss notification" onClick={() => { setError(""); setStatus(""); }}><X size={15}/></button></div>}
    </main>
    <footer><span>iCover <span className="muted">/ A cover for every mood.</span></span><a href="https://github.com/boostvolt/icover" target="_blank" rel="noreferrer">Based on iCover by Boostvolt <ArrowUpRight size={13}/></a></footer>
  </div>;
}
