module.exports = [
"[project]/app/editor/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js [app-ssr] (ecmascript) <export default as ArrowDownToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-ssr] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-ssr] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/render-cover.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const corners = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
];
const tintColors = [
    "#e8e8ed",
    "#efa1ad",
    "#8bc8b3",
    "#e9bb75",
    "#8ebde7",
    "#ffffff"
];
const rangeProgress = (value, min, max)=>({
        "--range-progress": `${(value - min) / (max - min) * 100}%`
    });
function Home() {
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]);
    const [photo, setPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoName, setPhotoName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rendering, setRendering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [handoff, setHandoff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uploadId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const essentials = settings.mode === "essentials";
    const bottomLogoUnavailable = essentials && (settings.photoMargin > 0 || settings.photoRadius > 0);
    const bandHeightMin = settings.corner.startsWith("bottom") ? Math.max(18, Math.ceil((settings.essentialsFontSize + 40) / 12)) : 27;
    const classicTitleYMax = Math.max(15, Math.floor((900 - settings.classicFontSize - settings.classicSubtitleFontSize) / 12));
    const update = (key, value)=>{
        setSettings((s)=>({
                ...s,
                [key]: value
            }));
        setStatus("");
    };
    const updatePhotoFrame = (key, value)=>{
        setSettings((s)=>({
                ...s,
                [key]: value,
                corner: value > 0 && s.corner.startsWith("bottom") ? s.corner === "bottom-left" ? "top-left" : "top-right" : s.corner
            }));
        setStatus("");
    };
    const photoFrameChanged = settings.photoMargin !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoMargin || settings.photoTopMargin !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoTopMargin || settings.photoRadius !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoRadius;
    const resetPhotoFrame = ()=>{
        setSettings((s)=>({
                ...s,
                photoMargin: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoMargin,
                photoTopMargin: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoTopMargin,
                photoRadius: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"].photoRadius
            }));
        setStatus("");
    };
    const updateClassicFontSize = (key, value)=>{
        setSettings((s)=>{
            const totalSize = key === "classicFontSize" ? value + s.classicSubtitleFontSize : s.classicFontSize + value;
            const maxTitleY = Math.max(15, Math.floor((900 - totalSize) / 12));
            return {
                ...s,
                [key]: value,
                classicTitleY: Math.min(s.classicTitleY, maxTitleY)
            };
        });
        setStatus("");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        setRendering(true);
        const buffer = document.createElement("canvas");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderCover"])(buffer, settings, photo).then(()=>{
            if (!cancelled && canvas.current) {
                canvas.current.width = canvas.current.height = 1200;
                canvas.current.getContext("2d").drawImage(buffer, 0, 0);
                setRendering(false);
            }
        }).catch((e)=>{
            if (!cancelled) {
                setError(e.message);
                setRendering(false);
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        settings,
        photo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (essentials && bottomLogoUnavailable && settings.corner.startsWith("bottom")) {
            setSettings((s)=>({
                    ...s,
                    corner: s.corner === "bottom-left" ? "top-left" : "top-right"
                }));
        }
    }, [
        bottomLogoUnavailable,
        essentials,
        settings.corner
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (photo) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releaseImage"])(photo);
        }, [
        photo
    ]);
    async function upload(file) {
        if (!file) return;
        const id = ++uploadId.current;
        setError("");
        setStatus("");
        if (![
            "image/jpeg",
            "image/png",
            "image/webp"
        ].includes(file.type)) {
            setError("Choose a JPG, PNG, or WebP image.");
            return;
        }
        if (file.size > 20 * 1024 * 1024) {
            setError("Please choose an image smaller than 20 MB.");
            return;
        }
        setUploading(true);
        const url = URL.createObjectURL(file);
        try {
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadImage"])(url);
            if (image.width * image.height > 60_000_000) throw new Error("This photo is too large. Resize it to under 60 megapixels first.");
            if (id !== uploadId.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releaseImage"])(url);
                return;
            }
            setPhoto(url);
            setPhotoName(file.name);
            setSettings((s)=>({
                    ...s,
                    zoom: 1,
                    offsetX: 50,
                    offsetY: 50
                }));
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releaseImage"])(url);
            if (id === uploadId.current) setError(e.message);
        } finally{
            if (id === uploadId.current) setUploading(false);
        }
    }
    async function download() {
        setExporting(true);
        setError("");
        try {
            const output = document.createElement("canvas");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderCover"])(output, settings, photo);
            const blob = await new Promise((resolve, reject)=>output.toBlob((b)=>b ? resolve(b) : reject(new Error("Export failed. Please try again.")), "image/png"));
            const url = URL.createObjectURL(blob);
            const filename = `icover-${essentials ? settings.essentialsTitle : settings.title}`.replace(/[^a-z0-9-]/gi, "-").slice(0, 100) + ".png";
            const rect = canvas.current?.getBoundingClientRect();
            const size = Math.min(window.innerWidth * 0.68, window.innerHeight * 0.52, 360);
            const peekOffset = window.innerWidth <= 650 ? size * 0.12 : 0;
            setHandoff({
                url,
                filename,
                size,
                x: rect ? rect.left + rect.width / 2 - window.innerWidth / 2 + peekOffset : peekOffset,
                y: rect ? rect.top + rect.height / 2 - window.innerHeight / 2 : 0,
                scale: rect && size ? rect.width / size : 1,
                leaving: false
            });
        } catch (e) {
            setError(e.message);
        } finally{
            setExporting(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!handoff || handoff.leaving) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const hold = window.setTimeout(()=>{
            setHandoff((current)=>current && !current.leaving ? {
                    ...current,
                    leaving: true
                } : current);
        }, reduced ? 900 : 3200);
        return ()=>clearTimeout(hold);
    }, [
        handoff
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!handoff?.leaving) return;
        const { url, filename } = handoff;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const done = window.setTimeout(()=>{
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            link.click();
            window.setTimeout(()=>URL.revokeObjectURL(url), 10000);
            setHandoff((current)=>current?.url === url ? null : current);
        }, reduced ? 200 : 1400);
        return ()=>clearTimeout(done);
    }, [
        handoff?.leaving,
        handoff?.url,
        handoff?.filename
    ]);
    function reset() {
        uploadId.current++;
        setUploading(false);
        setSettings(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$render$2d$cover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaults"]);
        setPhoto(null);
        setPhotoName("");
        setError("");
        setStatus("Cover reset.");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (document.documentElement.dataset.enter !== "editor") return;
        const timer = window.setTimeout(()=>{
            delete document.documentElement.dataset.enter;
            document.documentElement.style.background = "";
            document.body.style.background = "";
        }, 700);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "app-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "editor-nav",
                            "aria-label": "Main navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "brand",
                                    "aria-label": "iCover home",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "brand-mark",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/brand/icover-icon.png",
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 91
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 62
                                        }, this),
                                        "iCover",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "studio-label",
                                            children: "STUDIO"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 153
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "editor-nav-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "editor-nav-caption",
                                            children: "YOUR MUSIC. YOUR ARTWORK."
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeSwitch"], {}, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "download mobile-download",
                                            onClick: download,
                                            disabled: exporting || rendering || uploading || !!handoff,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 133
                                                }, this),
                                                exporting ? "Exporting…" : "Download cover"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 162,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/editor/page.tsx",
                        lineNumber: 161,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "workspace",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "preview-column",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "preview-panel",
                                                "aria-label": "Cover preview",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "live-dot"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 46
                                                                    }, this),
                                                                    " LIVE PREVIEW"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 40
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-button",
                                                                onClick: reset,
                                                                title: "Reset cover",
                                                                "aria-label": "Reset cover",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/page.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 187
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 94
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "preview-stage",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                            ref: canvas,
                                                            width: "1200",
                                                            height: "1200",
                                                            "aria-label": `${essentials ? settings.essentialsTitle : settings.title} cover preview`,
                                                            role: "img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 42
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "preview-download",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "download",
                                                            onClick: download,
                                                            disabled: exporting || rendering || uploading || !!handoff,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 153
                                                                }, this),
                                                                exporting ? "Exporting…" : "Download cover"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "preview-credit",
                                                children: "2026 iCover Studio."
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "controls",
                                        "aria-label": "Cover settings",
                                        tabIndex: 0,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "control-section first-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Cover style"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 91
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 58
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "style-options",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `style-option ${!essentials ? "selected" : ""}`,
                                                                "aria-pressed": !essentials,
                                                                onClick: ()=>setSettings((s)=>({
                                                                            ...s,
                                                                            mode: "classic",
                                                                            textColor: "#ffffff"
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "style-thumb classic-thumb",
                                                                        children: "Aa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 194
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Original"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 253
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: "Color & gradients"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 278
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 247
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `style-option ${essentials ? "selected" : ""}`,
                                                                "aria-pressed": essentials,
                                                                onClick: ()=>setSettings((s)=>({
                                                                            ...s,
                                                                            mode: "essentials",
                                                                            corner: "top-right",
                                                                            textColor: "#111111"
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "style-thumb essentials-thumb",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Essentials"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 263
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                                                                size: 19
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 286
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 216
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Essentials"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 318
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                children: "Photo & title band"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 345
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 312
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "control-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: essentials ? "Title band" : "Typography"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 77
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 44
                                                    }, this),
                                                    essentials ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "field",
                                                        children: [
                                                            "Title",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                maxLength: 100,
                                                                value: settings.essentialsTitle,
                                                                onChange: (e)=>update("essentialsTitle", e.target.value),
                                                                placeholder: "Essentials"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fields",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "field",
                                                                        children: [
                                                                            "Big title",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                maxLength: 100,
                                                                                value: settings.title,
                                                                                onChange: (e)=>update("title", e.target.value),
                                                                                placeholder: "Big Title"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 268
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 234
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "range-label title-size-range",
                                                                        children: [
                                                                            "Big title size",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    settings.classicFontSize,
                                                                                    "px"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 457
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "range",
                                                                                min: "96",
                                                                                max: "216",
                                                                                step: "4",
                                                                                value: settings.classicFontSize,
                                                                                style: rangeProgress(settings.classicFontSize, 96, 216),
                                                                                onChange: (e)=>updateClassicFontSize("classicFontSize", +e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 498
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 395
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "field-label weight-label",
                                                                        children: "Big title weight"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 719
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "segmented weight-options",
                                                                        children: [
                                                                            [
                                                                                'normal',
                                                                                'Normal'
                                                                            ],
                                                                            [
                                                                                'bold',
                                                                                'Bold'
                                                                            ]
                                                                        ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: settings.classicTitleWeight === value ? "active" : "",
                                                                                "aria-pressed": settings.classicTitleWeight === value,
                                                                                onClick: ()=>update("classicTitleWeight", value),
                                                                                children: label
                                                                            }, value, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 898
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 783
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "field",
                                                                        children: [
                                                                            "Subtitle",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                maxLength: 100,
                                                                                value: settings.subtitle,
                                                                                onChange: (e)=>update("subtitle", e.target.value),
                                                                                placeholder: "Sub Title"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 1146
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1113
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "range-label title-size-range",
                                                                        children: [
                                                                            "Subtitle size",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    settings.classicSubtitleFontSize,
                                                                                    "px"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 1340
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "range",
                                                                                min: "72",
                                                                                max: "180",
                                                                                step: "4",
                                                                                value: settings.classicSubtitleFontSize,
                                                                                style: rangeProgress(settings.classicSubtitleFontSize, 72, 180),
                                                                                onChange: (e)=>updateClassicFontSize("classicSubtitleFontSize", +e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 1389
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1279
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "field-label weight-label",
                                                                        children: "Subtitle weight"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1634
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "segmented weight-options",
                                                                        children: [
                                                                            [
                                                                                'normal',
                                                                                'Normal'
                                                                            ],
                                                                            [
                                                                                'bold',
                                                                                'Bold'
                                                                            ]
                                                                        ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: settings.classicSubtitleWeight === value ? "active" : "",
                                                                                "aria-pressed": settings.classicSubtitleWeight === value,
                                                                                onClick: ()=>update("classicSubtitleWeight", value),
                                                                                children: label
                                                                            }, value, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 1812
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1697
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "field",
                                                                        children: [
                                                                            "Footer",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                maxLength: 150,
                                                                                value: settings.footer,
                                                                                onChange: (e)=>update("footer", e.target.value),
                                                                                placeholder: "Footer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/page.tsx",
                                                                                lineNumber: 192,
                                                                                columnNumber: 2067
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 2036
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 210
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "field-label",
                                                                children: "Title alignment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 2199
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "segmented typography-alignment",
                                                                children: [
                                                                    [
                                                                        'left',
                                                                        'Left'
                                                                    ],
                                                                    [
                                                                        'center',
                                                                        'Center'
                                                                    ]
                                                                ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: settings.classicAlign === value ? "active" : "",
                                                                        "aria-pressed": settings.classicAlign === value,
                                                                        onClick: ()=>update("classicAlign", value),
                                                                        children: label
                                                                    }, value, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 2370
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 2249
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Title group vertical position",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.classicTitleY,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 2627
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "15",
                                                                        max: classicTitleYMax,
                                                                        value: settings.classicTitleY,
                                                                        style: rangeProgress(settings.classicTitleY, 15, classicTitleYMax),
                                                                        onChange: (e)=>update("classicTitleY", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 2665
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 2567
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 208
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "color-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "color-control",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "color",
                                                                        value: settings.textColor,
                                                                        onChange: (e)=>update("textColor", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 73
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Text & logo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 173
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 40
                                                            }, this),
                                                            essentials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "color-control",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "color",
                                                                        value: settings.bandColor,
                                                                        onChange: (e)=>update("bandColor", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 253
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Band color"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 353
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 220
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 13
                                                    }, this),
                                                    essentials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Title size",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.essentialsFontSize,
                                                                            "px"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 71
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "72",
                                                                        max: "180",
                                                                        step: "2",
                                                                        value: settings.essentialsFontSize,
                                                                        style: rangeProgress(settings.essentialsFontSize, 72, 180),
                                                                        onChange: (e)=>{
                                                                            const fontSize = +e.target.value;
                                                                            setSettings((s)=>({
                                                                                    ...s,
                                                                                    essentialsFontSize: fontSize,
                                                                                    bandHeight: Math.max(s.bandHeight, s.corner.startsWith("bottom") ? Math.max(18, Math.ceil((fontSize + 40) / 12)) : 27)
                                                                                }));
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 115
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Band height",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.bandHeight,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 544
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: bandHeightMin,
                                                                        max: "42",
                                                                        value: settings.bandHeight,
                                                                        style: rangeProgress(settings.bandHeight, bandHeightMin, 42),
                                                                        onChange: (e)=>update("bandHeight", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 579
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 502
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 11
                                            }, this),
                                            essentials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "control-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Your photo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 92
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 59
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: fileInput,
                                                        type: "file",
                                                        accept: "image/jpeg,image/png,image/webp",
                                                        className: "hidden-input",
                                                        "aria-label": "Upload cover photo",
                                                        onChange: (e)=>{
                                                            void upload(e.target.files?.[0]);
                                                            e.target.value = "";
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `upload-zone ${dragging ? "dragging" : ""}`,
                                                        onClick: ()=>fileInput.current?.click(),
                                                        onDragOver: (e)=>{
                                                            e.preventDefault();
                                                            setDragging(true);
                                                        },
                                                        onDragLeave: ()=>setDragging(false),
                                                        onDrop: (e)=>{
                                                            e.preventDefault();
                                                            setDragging(false);
                                                            void upload(e.dataTransfer.files[0]);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                                size: 23
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 316
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: uploading ? "Opening photo…" : photo ? "Replace your photo" : "Add your favorite photo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 338
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Drop an image or click to browse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 444
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: "JPG, PNG, WebP · up to 20 MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 489
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 13
                                                    }, this),
                                                    photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "file-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: photoName
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-button",
                                                                "aria-label": "Remove photo",
                                                                onClick: ()=>{
                                                                    uploadId.current++;
                                                                    setUploading(false);
                                                                    setPhoto(null);
                                                                    setPhotoName("");
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/page.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 226
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 73
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "photo-frame-controls",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "field-label",
                                                                children: [
                                                                    "Photo frame",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "icon-button",
                                                                        title: "Reset photo frame",
                                                                        "aria-label": "Reset photo frame",
                                                                        disabled: !photoFrameChanged,
                                                                        onClick: resetPhotoFrame,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/editor/page.tsx",
                                                                            lineNumber: 201,
                                                                            columnNumber: 236
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 91
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 51
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Side & bottom margin",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.photoMargin,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 324
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "12",
                                                                        step: "1",
                                                                        value: settings.photoMargin,
                                                                        style: rangeProgress(settings.photoMargin, 0, 12),
                                                                        onChange: (e)=>updatePhotoFrame("photoMargin", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 360
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 273
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "toggle-row compact frame-toggle",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Include top margin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 611
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        role: "switch",
                                                                        checked: settings.photoTopMargin,
                                                                        onChange: (e)=>update("photoTopMargin", e.target.checked)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 642
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 560
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Rounded corners",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.photoRadius,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 827
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "10",
                                                                        step: "1",
                                                                        value: settings.photoRadius,
                                                                        style: rangeProgress(settings.photoRadius, 0, 10),
                                                                        onChange: (e)=>updatePhotoFrame("photoRadius", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 863
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 781
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "field-label",
                                                        children: "Photo treatment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "segmented treatments",
                                                        children: [
                                                            [
                                                                'original',
                                                                'Original'
                                                            ],
                                                            [
                                                                'mono',
                                                                'Mono'
                                                            ],
                                                            [
                                                                'duotone',
                                                                'Duotone'
                                                            ]
                                                        ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                "aria-pressed": settings.treatment === value,
                                                                className: settings.treatment === value ? "active" : "",
                                                                onClick: ()=>update("treatment", value),
                                                                children: label
                                                            }, value, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 200
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 63
                                                    }, this),
                                                    settings.treatment === "duotone" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tint-row",
                                                        children: [
                                                            tintColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: `tint ${settings.tint === color ? "active" : ""}`,
                                                                    style: {
                                                                        background: color
                                                                    },
                                                                    "aria-label": `Duotone ${color}`,
                                                                    "aria-pressed": settings.tint === color,
                                                                    onClick: ()=>update("tint", color)
                                                                }, color, false, {
                                                                    fileName: "[project]/app/editor/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 101
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "custom-tint",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    "aria-label": "Custom duotone color",
                                                                    type: "color",
                                                                    value: settings.tint,
                                                                    onChange: (e)=>update("tint", e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 356
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 325
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 50
                                                    }, this),
                                                    photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "crop-controls",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Zoom",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.zoom.toFixed(1),
                                                                            "×"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 88
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "1",
                                                                        max: "3",
                                                                        step: "0.05",
                                                                        value: settings.zoom,
                                                                        style: rangeProgress(settings.zoom, 1, 3),
                                                                        onChange: (e)=>update("zoom", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 128
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Horizontal position",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.offsetX,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 348
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: settings.offsetX,
                                                                        style: rangeProgress(settings.offsetX, 0, 100),
                                                                        onChange: (e)=>update("offsetX", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 380
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 298
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "range-label",
                                                                children: [
                                                                    "Vertical position",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            settings.offsetY,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 599
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: settings.offsetY,
                                                                        style: rangeProgress(settings.offsetY, 0, 100),
                                                                        onChange: (e)=>update("offsetY", +e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 631
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 551
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 22
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "help-text",
                                                        children: "Add a photo to apply treatments and adjust its crop."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 811
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `control-section ${essentials ? "last-section" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Apple Music logo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 115
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 82
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "toggle-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Show logo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 176
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                role: "switch",
                                                                checked: settings.showLogo,
                                                                onChange: (e)=>update("showLogo", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 198
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 146
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `corner-options ${!settings.showLogo ? "disabled" : ""}`,
                                                        children: corners.map((corner)=>{
                                                            const disabled = !settings.showLogo || bottomLogoUnavailable && corner.startsWith("bottom");
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                disabled: disabled,
                                                                className: settings.corner === corner ? "active" : "",
                                                                "aria-pressed": settings.corner === corner,
                                                                title: disabled && settings.showLogo ? "Set photo margin and rounded corners to 0% to use a bottom corner" : undefined,
                                                                onClick: ()=>setSettings((s)=>({
                                                                            ...s,
                                                                            corner,
                                                                            bandHeight: essentials && corner.startsWith("top") ? Math.max(s.bandHeight, 27) : s.bandHeight
                                                                        })),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `corner-icon ${corner}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                            fileName: "[project]/app/editor/page.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 663
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 621
                                                                    }, this),
                                                                    corner.replace("-", " ")
                                                                ]
                                                            }, corner, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 214
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 13
                                                    }, this),
                                                    bottomLogoUnavailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "help-text",
                                                        children: "Bottom corners require photo margin and rounded corners to be 0%."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 11
                                            }, this),
                                            !essentials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "control-section last-section",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "section-heading",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Background"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 106
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 73
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "segmented",
                                                        children: [
                                                            [
                                                                'gradients',
                                                                'Gradient'
                                                            ],
                                                            [
                                                                'colors',
                                                                'Color'
                                                            ],
                                                            [
                                                                'custom',
                                                                'Custom'
                                                            ]
                                                        ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: settings.backgroundType === value ? "active" : "",
                                                                "aria-pressed": settings.backgroundType === value,
                                                                onClick: ()=>update("backgroundType", value),
                                                                children: label
                                                            }, value, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 259
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 131
                                                    }, this),
                                                    settings.backgroundType === "custom" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "color-control custom-background",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "color",
                                                                value: settings.customColor,
                                                                onChange: (e)=>update("customColor", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 104
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Background color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 208
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: settings.customColor
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 237
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 53
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "swatches",
                                                        children: Array.from({
                                                            length: settings.backgroundType === "gradients" ? 40 : 7
                                                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                title: `${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`,
                                                                "aria-label": `${settings.backgroundType === "gradients" ? "Gradient" : "Color"} ${i + 1}`,
                                                                "aria-pressed": (settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i,
                                                                className: `swatch ${(settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i ? "selected" : ""}`,
                                                                onClick: ()=>update(settings.backgroundType === "gradients" ? "gradient" : "color", i),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/assets/${settings.backgroundType}/${i}.png`,
                                                                        alt: ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 933
                                                                    }, this),
                                                                    (settings.backgroundType === "gradients" ? settings.gradient : settings.color) === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 1087
                                                                    }, this)
                                                                ]
                                                            }, `${settings.backgroundType}-${i}`, true, {
                                                                fileName: "[project]/app/editor/page.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 393
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editor/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 283
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editor/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 173,
                                columnNumber: 7
                            }, this),
                            (error || status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `toast ${error ? "error" : ""}`,
                                role: error ? "alert" : "status",
                                children: [
                                    error || status,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Dismiss notification",
                                        onClick: ()=>{
                                            setError("");
                                            setStatus("");
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 220
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 217,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/page.tsx",
                        lineNumber: 172,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 160,
                columnNumber: 3
            }, this),
            handoff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `download-reveal${handoff.leaving ? " is-leaving" : ""}`,
                role: "status",
                "aria-live": "polite",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "download-anchor",
                    style: {
                        "--case-size": `${handoff.size}px`,
                        "--from-x": `${handoff.x}px`,
                        "--from-y": `${handoff.y}px`,
                        "--from-scale": handoff.scale
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "download-case",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "download-cd",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "download-cover",
                                    src: handoff.url,
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 222,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "download-caption",
                            children: "There you go!"
                        }, void 0, false, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 226,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editor/page.tsx",
                    lineNumber: 221,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 220,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 159,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/theme-switch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSwitch",
    ()=>ThemeSwitch,
    "applyTheme",
    ()=>applyTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/locale-provider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "icover-theme";
function readTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function storedTheme() {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        return value === "light" || value === "dark" ? value : null;
    } catch  {
        return null;
    }
}
function applyTheme(theme, persist = true) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (!persist) return;
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch  {
    /* Private browsing can block storage; the choice still applies for this visit. */ }
}
function ThemeSwitch() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$locale$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const followSystem = ()=>{
            if (storedTheme()) return;
            applyTheme(media.matches ? "dark" : "light", false);
            setTheme(readTheme());
        };
        setTheme(readTheme());
        followSystem();
        media.addEventListener("change", followSystem);
        return ()=>media.removeEventListener("change", followSystem);
    }, []);
    function choose(next) {
        applyTheme(next);
        setTheme(next);
    }
    function onKeyDown(event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        choose(event.key === "ArrowLeft" ? "light" : "dark");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-switch",
        role: "radiogroup",
        "aria-label": t.nav.appearance,
        onKeyDown: onKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theme-switch-thumb"
            }, void 0, false, {
                fileName: "[project]/components/theme-switch.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "radio",
                "aria-checked": theme === "light",
                "aria-label": t.nav.light,
                onClick: ()=>choose("light"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SunIcon, {}, void 0, false, {
                    fileName: "[project]/components/theme-switch.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-switch.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "radio",
                "aria-checked": theme === "dark",
                "aria-label": t.nav.dark,
                onClick: ()=>choose("dark"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonIcon, {}, void 0, false, {
                    fileName: "[project]/components/theme-switch.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/theme-switch.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme-switch.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
function SunIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "2.35",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/components/theme-switch.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                stroke: "currentColor",
                strokeWidth: "1.4",
                strokeLinecap: "round",
                d: "M8 1.4v1.5M8 13.1v1.5M1.4 8h1.5M13.1 8h1.5M3.25 3.25l1.05 1.05M11.7 11.7l1.05 1.05M12.75 3.25l-1.05 1.05M4.3 11.7l-1.05 1.05"
            }, void 0, false, {
                fileName: "[project]/components/theme-switch.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme-switch.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function MoonIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M9.15 1.35a5.55 5.55 0 1 0 5.15 7.55 4.55 4.55 0 0 1-5.15-7.55z"
        }, void 0, false, {
            fileName: "[project]/components/theme-switch.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/theme-switch.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/apple-logo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APPLE_MUSIC_PATH",
    ()=>APPLE_MUSIC_PATH
]);
const APPLE_MUSIC_PATH = 'M35.4,20.1V6.6h-0.1l-5.4,13.5h-2.1L22.4,6.6h-0.1v13.5h-2.5V1.8H23l5.8,14.6h0.1l5.8-14.6H38v18.3L35.4,20.1L35.4,20.1z\n\t M52.1,20.1h-2.6v-2.3h-0.1c-0.7,1.6-2.1,2.5-4.1,2.5c-2.9,0-4.6-1.9-4.6-5V6.7h2.7v8.1c0,2,1,3.1,2.8,3.1c2,0,3.1-1.4,3.1-3.5V6.7\n\th2.7L52.1,20.1L52.1,20.1z M59.5,6.5c3.1,0,5,1.7,5.1,4.2h-2.5c-0.2-1.3-1.1-2.1-2.6-2.1C58,8.6,57,9.3,57,10.4c0,0.8,0.6,1.4,2,1.7\n\tl2.1,0.5c2.7,0.6,3.7,1.7,3.7,3.6c0,2.4-2.2,4.1-5.3,4.1c-3.3,0-5.3-1.6-5.5-4.2h2.7c0.2,1.4,1.2,2.1,2.8,2.1c1.6,0,2.6-0.7,2.6-1.8\n\tc0-0.9-0.5-1.4-1.9-1.7l-2.1-0.5c-2.5-0.6-3.7-1.8-3.7-3.8C54.4,8.1,56.4,6.5,59.5,6.5z M66.8,3.2c0-0.9,0.7-1.6,1.6-1.6\n\tc0.9,0,1.6,0.7,1.6,1.6c0,0.9-0.7,1.6-1.6,1.6C67.5,4.8,66.8,4.1,66.8,3.2L66.8,3.2z M67,6.7h2.7v13.4H67V6.7z M81.1,11.3\n\tc-0.3-1.4-1.3-2.6-3.1-2.6c-2.1,0-3.5,1.8-3.5,4.6c0,2.9,1.4,4.6,3.5,4.6c1.7,0,2.7-0.9,3.1-2.5h2.6c-0.3,2.8-2.5,4.8-5.7,4.8\n\tc-3.8,0-6.2-2.6-6.2-6.9c0-4.2,2.4-6.9,6.2-6.9c3.4,0,5.4,2.2,5.7,4.8L81.1,11.3L81.1,11.3z M11.5,3.6C10.8,4.4,9.7,5.1,8.6,5\n\tC8.4,3.8,9,2.6,9.6,1.9c0.7-0.9,1.9-1.5,2.9-1.5C12.6,1.5,12.2,2.7,11.5,3.6L11.5,3.6z M12.5,5.2c0.6,0,2.4,0.2,3.6,2\n\tc-0.1,0.1-2.1,1.3-2.1,3.8c0,3,2.6,4,2.6,4c0,0.1-0.4,1.4-1.3,2.8c-0.8,1.2-1.7,2.4-3,2.4c-1.3,0-1.7-0.8-3.2-0.8\n\tc-1.5,0-2,0.8-3.2,0.8c-1.3,0-2.3-1.3-3.1-2.5c-1.7-2.5-3-7-1.2-10c0.8-1.5,2.4-2.5,4-2.5c1.3,0,2.5,0.9,3.2,0.9\n\tC9.5,6.1,10.9,5.1,12.5,5.2L12.5,5.2z';
}),
"[project]/lib/render-cover.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaults",
    ()=>defaults,
    "loadImage",
    ()=>loadImage,
    "releaseImage",
    ()=>releaseImage,
    "renderCover",
    ()=>renderCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apple$2d$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apple-logo.ts [app-ssr] (ecmascript)");
;
const defaults = {
    mode: "classic",
    title: "Big Title",
    subtitle: "Sub Title",
    footer: "Footer",
    classicAlign: "left",
    classicTitleY: 22,
    classicFontSize: 192,
    classicSubtitleFontSize: 160,
    classicTitleWeight: "bold",
    classicSubtitleWeight: "normal",
    essentialsTitle: "Essentials",
    showLogo: true,
    corner: "top-left",
    backgroundType: "gradients",
    gradient: 0,
    color: 0,
    customColor: "#7865a8",
    textColor: "#ffffff",
    bandColor: "#c4c4c4",
    bandHeight: 31,
    essentialsFontSize: 148,
    treatment: "mono",
    tint: "#e8e8ed",
    photoMargin: 0,
    photoTopMargin: false,
    photoRadius: 0,
    zoom: 1,
    offsetX: 50,
    offsetY: 50
};
const images = new Map();
function loadImage(src) {
    if (!images.has(src)) images.set(src, new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image);
        image.onerror = ()=>{
            images.delete(src);
            reject(new Error("Unable to load this image. Try a JPG, PNG, or WebP file."));
        };
        image.src = src;
    }));
    return images.get(src);
}
function releaseImage(src) {
    images.delete(src);
    URL.revokeObjectURL(src);
}
function text(ctx, value, x, y, size, weight, width) {
    let fitted = size;
    ctx.font = `${weight} ${fitted}px CoverFont, Arial, sans-serif`;
    while(ctx.measureText(value).width > width && fitted > 5){
        fitted -= 1;
        ctx.font = `${weight} ${fitted}px CoverFont, Arial, sans-serif`;
    }
    ctx.fillText(value, x, y);
}
function roundedRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}
async function renderCover(canvas, s, photo) {
    const size = 1200;
    const background = s.mode === "essentials" || s.backgroundType === "custom" ? null : await loadImage(`/assets/${s.backgroundType}/${s.backgroundType === "gradients" ? s.gradient : s.color}.png`);
    const uploaded = photo ? await loadImage(photo) : null;
    await Promise.all([
        document.fonts.load('600 100px CoverFont'),
        document.fonts.load('300 100px CoverFont'),
        document.fonts.load('400 100px CoverFont')
    ]);
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.textBaseline = "top";
    ctx.fillStyle = s.customColor;
    ctx.fillRect(0, 0, size, size);
    if (background) ctx.drawImage(background, 0, 0, size, size);
    const band = Math.round(size * s.bandHeight / 100);
    if (s.mode === "essentials") {
        const inset = Math.round(size * s.photoMargin / 100);
        const photoX = inset;
        const photoY = band + (s.photoTopMargin ? inset : 0);
        const photoWidth = size - inset * 2;
        const photoHeight = size - photoY - inset;
        const photoRadius = Math.round(size * s.photoRadius / 100);
        ctx.fillStyle = s.bandColor;
        ctx.fillRect(0, 0, size, size);
        if (uploaded) {
            const photoCanvas = document.createElement("canvas");
            photoCanvas.width = photoWidth;
            photoCanvas.height = photoHeight;
            const photoCtx = photoCanvas.getContext("2d");
            const scale = Math.max(photoWidth / uploaded.width, photoHeight / uploaded.height) * s.zoom;
            const w = uploaded.width * scale, h = uploaded.height * scale;
            photoCtx.drawImage(uploaded, (photoWidth - w) * s.offsetX / 100, (photoHeight - h) * s.offsetY / 100, w, h);
            if (s.treatment !== "original") {
                const pixels = photoCtx.getImageData(0, 0, photoWidth, photoHeight);
                const tint = s.treatment === "mono" ? [
                    255,
                    255,
                    255
                ] : [
                    1,
                    3,
                    5
                ].map((i)=>parseInt(s.tint.slice(i, i + 2), 16));
                for(let i = 0; i < pixels.data.length; i += 4){
                    const luma = (pixels.data[i] * .2126 + pixels.data[i + 1] * .7152 + pixels.data[i + 2] * .0722) / 255;
                    for(let c = 0; c < 3; c++)pixels.data[i + c] = Math.round(tint[c] * luma);
                }
                photoCtx.putImageData(pixels, 0, 0);
            }
            ctx.save();
            roundedRect(ctx, photoX, photoY, photoWidth, photoHeight, photoRadius);
            ctx.clip();
            ctx.drawImage(photoCanvas, photoX, photoY);
            ctx.restore();
        } else {
            const placeholder = ctx.createLinearGradient(photoX, photoY, photoX + photoWidth, photoY + photoHeight);
            placeholder.addColorStop(0, "#777777");
            placeholder.addColorStop(1, "#262629");
            ctx.save();
            roundedRect(ctx, photoX, photoY, photoWidth, photoHeight, photoRadius);
            ctx.clip();
            ctx.fillStyle = placeholder;
            ctx.fillRect(photoX, photoY, photoWidth, photoHeight);
            ctx.restore();
        }
        ctx.fillStyle = s.bandColor;
        ctx.fillRect(0, 0, size, band);
        ctx.fillStyle = s.textColor;
        text(ctx, s.essentialsTitle, 48, Math.max(28, band - s.essentialsFontSize - 20), s.essentialsFontSize, 600, 1104);
    } else {
        ctx.fillStyle = s.textColor;
        ctx.textAlign = s.classicAlign;
        const classicX = s.classicAlign === "center" ? size / 2 : 100;
        const maxTitleY = Math.max(15, Math.floor((900 - s.classicFontSize - s.classicSubtitleFontSize) / 12));
        const titleY = Math.round(size * Math.min(s.classicTitleY, maxTitleY) / 100);
        text(ctx, s.title, classicX, titleY, s.classicFontSize, s.classicTitleWeight === "bold" ? 600 : 300, 1000);
        text(ctx, s.subtitle, classicX, titleY + s.classicFontSize, s.classicSubtitleFontSize, s.classicSubtitleWeight === "bold" ? 600 : 300, 1000);
        ctx.textAlign = "left";
        ctx.globalAlpha = .65;
        text(ctx, s.footer, 100, s.showLogo && s.corner.startsWith("bottom") ? 954 : 1060, 60, 400, 1000);
        ctx.globalAlpha = 1;
    }
    if (s.showLogo) {
        const logoCorner = s.mode === "essentials" && (s.photoMargin > 0 || s.photoRadius > 0) && s.corner.startsWith("bottom") ? s.corner === "bottom-left" ? "top-left" : "top-right" : s.corner;
        const w = s.mode === "essentials" ? 260 : 240;
        const h = w * 20.7 / 84.3;
        const padding = s.mode === "essentials" ? 48 : 100;
        const x = logoCorner.endsWith("right") ? size - padding - w : padding;
        const y = logoCorner.startsWith("bottom") ? size - 48 - h : 48;
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(w / 84.3, h / 20.7);
        ctx.fillStyle = s.textColor;
        ctx.fill(new Path2D(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apple$2d$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APPLE_MUSIC_PATH"]));
        ctx.restore();
    }
}
}),
];

//# sourceMappingURL=_06jlokz._.js.map