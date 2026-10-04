module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/locale-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    locale: "en",
    setLocale: ()=>{},
    t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaries"].en
});
function LocaleProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectLocale"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyLocale"])(next, false);
        setLocaleState(next);
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            setLocale: (next)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyLocale"])(next);
                setLocaleState(next);
            },
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaries"][locale]
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/locale-provider.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
function useI18n() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
}
}),
"[project]/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORAGE_KEY",
    ()=>STORAGE_KEY,
    "applyLocale",
    ()=>applyLocale,
    "detectLocale",
    ()=>detectLocale,
    "dictionaries",
    ()=>dictionaries,
    "isLocale",
    ()=>isLocale,
    "localizeCoverSamples",
    ()=>localizeCoverSamples
]);
const STORAGE_KEY = "icover-locale";
const dictionaries = {
    en: {
        nav: {
            main: "Main navigation",
            home: "iCover home",
            more: "More",
            settings: "Settings",
            appearance: "Appearance",
            language: "Language",
            light: "Light",
            dark: "Dark",
            english: "English",
            spanish: "Español"
        },
        landing: {
            titleLead: "For the love",
            titleRest: "of your playlists.",
            body: "You found the perfect songs.",
            bodyRest: "Now give them the perfect cover.",
            cta: "Create your cover",
            caption: "YOUR MUSIC. YOUR ARTWORK. 2026 iCover Studio.",
            play: "Play cover animation",
            pause: "Pause cover animation"
        },
        editor: {
            caption: "YOUR MUSIC. YOUR ARTWORK. 2026 iCover Studio.",
            livePreview: "LIVE PREVIEW",
            coverPreview: "Cover preview",
            coverPreviewNamed: (title)=>`${title} cover preview`,
            resetCover: "Reset cover",
            download: "Download cover",
            exporting: "Exporting…",
            coverSettings: "Cover settings",
            coverStyle: "Cover style",
            original: "Original",
            originalHint: "Color & gradients",
            essentials: "Essentials",
            essentialsHint: "Photo & title band",
            titleBand: "Title band",
            typography: "Typography",
            title: "Title",
            bigTitle: "Title",
            bigTitleSize: "Title size",
            bigTitleWeight: "Title weight",
            subtitle: "Subtitle",
            subtitleSize: "Subtitle size",
            subtitleWeight: "Subtitle weight",
            sampleTitle: "Title",
            sampleSubtitle: "Subtitle",
            sampleEssentials: "Essentials",
            footer: "Description",
            sampleFooter: "Description",
            titleAlignment: "Title alignment",
            titlePosition: "Title group vertical position",
            normal: "Normal",
            bold: "Bold",
            left: "Left",
            center: "Center",
            textAndLogo: "Text & logo",
            bandColor: "Band color",
            titleSize: "Title size",
            bandHeight: "Band height",
            yourPhoto: "Your photo",
            uploadPhoto: "Upload cover photo",
            openingPhoto: "Opening photo…",
            replacePhoto: "Replace your photo",
            addPhoto: "Add your favorite photo",
            dropPhoto: "Drop an image or click to browse",
            photoTypes: "JPG, PNG, WebP · up to 20 MB",
            removePhoto: "Remove photo",
            photoFrame: "Photo frame",
            resetPhotoFrame: "Reset photo frame",
            sideMargin: "Side & bottom margin",
            includeTopMargin: "Include top margin",
            roundedCorners: "Rounded corners",
            photoTreatment: "Photo treatment",
            originalTreatment: "Original",
            mono: "Mono",
            duotone: "Duotone",
            duotoneColor: (color)=>`Duotone ${color}`,
            customDuotone: "Custom duotone color",
            zoom: "Zoom",
            horizontal: "Horizontal position",
            vertical: "Vertical position",
            photoHelp: "Add a photo to apply treatments and adjust its crop.",
            appleLogo: "Apple Music logo",
            showLogo: "Show logo",
            bottomCornerHint: "Set photo margin and rounded corners to 0% to use a bottom corner",
            bottomCornerHelp: "Bottom corners require photo margin and rounded corners to be 0%.",
            background: "Background",
            gradient: "Gradient",
            color: "Color",
            custom: "Custom",
            backgroundColor: "Background color",
            gradientN: (n)=>`Gradient ${n}`,
            colorN: (n)=>`Color ${n}`,
            dismiss: "Dismiss notification",
            thereYouGo: "There you go!",
            corners: {
                "top-left": "Top left",
                "top-right": "Top right",
                "bottom-left": "Bottom left",
                "bottom-right": "Bottom right"
            },
            errors: {
                fileType: "Choose a JPG, PNG, or WebP image.",
                fileSize: "Please choose an image smaller than 20 MB.",
                photoTooLarge: "This photo is too large. Resize it to under 60 megapixels first.",
                exportFailed: "Export failed. Please try again.",
                reset: "Cover reset."
            }
        }
    },
    es: {
        nav: {
            main: "Navegación principal",
            home: "Inicio de iCover",
            more: "Más",
            settings: "Ajustes",
            appearance: "Apariencia",
            language: "Idioma",
            light: "Claro",
            dark: "Oscuro",
            english: "English",
            spanish: "Español"
        },
        landing: {
            titleLead: "Por el amor",
            titleRest: "a tus playlists.",
            body: "Encontraste las canciones perfectas.",
            bodyRest: "Ahora dales el cover perfecto.",
            cta: "Crea tu cover",
            caption: "YOUR MUSIC. YOUR ARTWORK. 2026 iCover Studio.",
            play: "Reproducir animación del cover",
            pause: "Pausar animación del cover"
        },
        editor: {
            caption: "YOUR MUSIC. YOUR ARTWORK. 2026 iCover Studio.",
            livePreview: "LIVE PREVIEW",
            coverPreview: "Vista previa del cover",
            coverPreviewNamed: (title)=>`Vista previa de ${title}`,
            resetCover: "Restablecer cover",
            download: "Descargar tu cover",
            exporting: "Exportando…",
            coverSettings: "Ajustes del cover",
            coverStyle: "Estilo de cover",
            original: "Original",
            originalHint: "Color y degradados",
            essentials: "Imprescindibles",
            essentialsHint: "Foto y banda de título",
            titleBand: "Banda de título",
            typography: "Tipografía",
            title: "Título",
            bigTitle: "Título",
            bigTitleSize: "Tamaño del título",
            bigTitleWeight: "Peso del título",
            subtitle: "Subtítulo",
            subtitleSize: "Tamaño del subtítulo",
            subtitleWeight: "Peso del subtítulo",
            sampleTitle: "Título",
            sampleSubtitle: "Subtítulo",
            sampleEssentials: "Imprescindibles",
            footer: "Descripción",
            sampleFooter: "Descripción",
            titleAlignment: "Alineación del título",
            titlePosition: "Posición vertical del título",
            normal: "Normal",
            bold: "Negrita",
            left: "Izquierda",
            center: "Centro",
            textAndLogo: "Texto y logo",
            bandColor: "Color de la banda",
            titleSize: "Tamaño del título",
            bandHeight: "Alto de la banda",
            yourPhoto: "Tu foto",
            uploadPhoto: "Subir foto del cover",
            openingPhoto: "Abriendo foto…",
            replacePhoto: "Reemplazar tu foto",
            addPhoto: "Añade tu foto favorita",
            dropPhoto: "Suelta una imagen o haz clic para buscar",
            photoTypes: "JPG, PNG, WebP · hasta 20 MB",
            removePhoto: "Quitar foto",
            photoFrame: "Marco de la foto",
            resetPhotoFrame: "Restablecer marco",
            sideMargin: "Margen lateral e inferior",
            includeTopMargin: "Incluir margen superior",
            roundedCorners: "Esquinas redondeadas",
            photoTreatment: "Tratamiento de la foto",
            originalTreatment: "Original",
            mono: "Mono",
            duotone: "Duotono",
            duotoneColor: (color)=>`Duotono ${color}`,
            customDuotone: "Color de duotono personalizado",
            zoom: "Zoom",
            horizontal: "Posición horizontal",
            vertical: "Posición vertical",
            photoHelp: "Añade una foto para aplicar tratamientos y ajustar el recorte.",
            appleLogo: "Logo de Apple Music",
            showLogo: "Mostrar logo",
            bottomCornerHint: "Pon el margen y las esquinas redondeadas en 0% para usar una esquina inferior",
            bottomCornerHelp: "Las esquinas inferiores requieren margen y esquinas redondeadas en 0%.",
            background: "Fondo",
            gradient: "Degradado",
            color: "Color",
            custom: "Personalizado",
            backgroundColor: "Color de fondo",
            gradientN: (n)=>`Degradado ${n}`,
            colorN: (n)=>`Color ${n}`,
            dismiss: "Cerrar aviso",
            thereYouGo: "¡Ahí la tienes!",
            corners: {
                "top-left": "Arriba izq.",
                "top-right": "Arriba der.",
                "bottom-left": "Abajo izq.",
                "bottom-right": "Abajo der."
            },
            errors: {
                fileType: "Elige una imagen JPG, PNG o WebP.",
                fileSize: "Elige una imagen de menos de 20 MB.",
                photoTooLarge: "Esta foto es demasiado grande. Redúcela a menos de 60 megapíxeles.",
                exportFailed: "No se pudo exportar. Inténtalo de nuevo.",
                reset: "Cover restablecido."
            }
        }
    }
};
function isLocale(value) {
    return value === "en" || value === "es";
}
function applyLocale(locale, persist = true) {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    if (!persist) return;
    try {
        localStorage.setItem(STORAGE_KEY, locale);
    } catch  {
    /* Private browsing can block storage; the choice still applies for this visit. */ }
}
function localizeCoverSamples(settings, locale) {
    const samples = dictionaries[locale].editor;
    const titles = new Set([
        "Big Title",
        "Title",
        "Título",
        "Titulo"
    ]);
    const subtitles = new Set([
        "Sub Title",
        "Subtitle",
        "Subtítulo",
        "Subtitulo"
    ]);
    const footers = new Set([
        "Footer",
        "Description",
        "Descripción",
        "Descripcion",
        "Pie"
    ]);
    const essentials = new Set([
        "Essentials",
        "Imprescindibles"
    ]);
    return {
        ...settings,
        title: titles.has(settings.title) ? samples.sampleTitle : settings.title,
        subtitle: subtitles.has(settings.subtitle) ? samples.sampleSubtitle : settings.subtitle,
        footer: footers.has(settings.footer) ? samples.sampleFooter : settings.footer,
        essentialsTitle: essentials.has(settings.essentialsTitle) ? samples.sampleEssentials : settings.essentialsTitle
    };
}
function detectLocale() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (isLocale(stored)) return stored;
    } catch  {
    /* Ignore storage errors and fall back to the browser language. */ }
    try {
        return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    } catch  {
        return "en";
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u_07rl._.js.map