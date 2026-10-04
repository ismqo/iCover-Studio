module.exports = [
"[project]/app/landing.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blank": "landing-module__jDH3nq__blank",
  "bottomBar": "landing-module__jDH3nq__bottomBar",
  "centeredCover": "landing-module__jDH3nq__centeredCover",
  "column": "landing-module__jDH3nq__column",
  "cover": "landing-module__jDH3nq__cover",
  "coverGroup": "landing-module__jDH3nq__coverGroup",
  "coverLogo": "landing-module__jDH3nq__coverLogo",
  "departing": "landing-module__jDH3nq__departing",
  "emptyCover": "landing-module__jDH3nq__emptyCover",
  "emptyWall": "landing-module__jDH3nq__emptyWall",
  "freeNote": "landing-module__jDH3nq__freeNote",
  "hero": "landing-module__jDH3nq__hero",
  "heroBrand": "landing-module__jDH3nq__heroBrand",
  "heroContent": "landing-module__jDH3nq__heroContent",
  "heroCta": "landing-module__jDH3nq__heroCta",
  "landing": "landing-module__jDH3nq__landing",
  "mobileBreak": "landing-module__jDH3nq__mobileBreak",
  "motionButton": "landing-module__jDH3nq__motionButton",
  "navActions": "landing-module__jDH3nq__navActions",
  "navCta": "landing-module__jDH3nq__navCta",
  "navbar": "landing-module__jDH3nq__navbar",
  "paused": "landing-module__jDH3nq__paused",
  "rise": "landing-module__jDH3nq__rise",
  "shade": "landing-module__jDH3nq__shade",
  "wall": "landing-module__jDH3nq__wall",
  "wordmark": "landing-module__jDH3nq__wordmark",
  "zoomCover": "landing-module__jDH3nq__zoomCover",
  "zoomCoverOn": "landing-module__jDH3nq__zoomCoverOn",
  "zooming": "landing-module__jDH3nq__zooming",
});
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Landing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apple$2d$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apple-logo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/landing.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
const covers = [
    [
        "After Hours",
        "THE NIGHT IS YOURS",
        1
    ],
    [
        "On Repeat",
        "YOUR DAILY ROTATION",
        18
    ],
    [
        "Sunday\nKind of Love",
        "SLOW THINGS DOWN",
        16
    ],
    [
        "Headspace",
        "ROOM TO BREATHE",
        30
    ],
    [
        "Golden\nHour",
        "STAY A LITTLE LONGER",
        28
    ],
    [
        "Pure\nEnergy",
        "TURN IT UP",
        21
    ],
    [
        "Daydream",
        "GET LOST IN THE SOUND",
        0
    ],
    [
        "Deep\nFocus",
        "IN YOUR ELEMENT",
        23
    ],
    [
        "Feel\nGood",
        "A LITTLE MORE SUNSHINE",
        34
    ],
    [
        "Late Night\nDrive",
        "TAKE THE LONG WAY HOME",
        24
    ],
    [
        "Soft\nSounds",
        "LESS NOISE. MORE FEELING.",
        17
    ],
    [
        "Electric",
        "SOMETHING DIFFERENT",
        32
    ],
    [
        "New\nFavorites",
        "YOUR NEXT OBSESSION",
        19
    ],
    [
        "Essentials",
        "THE ONES THAT STAY",
        2
    ],
    [
        "In Bloom",
        "A FRESH START",
        39
    ],
    [
        "Good\nCompany",
        "BETTER TOGETHER",
        14
    ],
    [
        "Slow\nMornings",
        "EASE INTO THE DAY",
        26
    ],
    [
        "No\nSkips",
        "EVERY TRACK. EVERY TIME.",
        6
    ]
];
function Cover({ index }) {
    const [title, subtitle, pattern] = covers[index % covers.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover} ${index % 4 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centeredCover : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `/assets/gradients/${pattern}.png`,
                alt: "",
                width: 300,
                height: 300
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 84.3 20.7",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverLogo,
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apple$2d$logo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APPLE_MUSIC_PATH"]
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 83
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function CoverWall({ empty }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wall} ${empty ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyWall : ""}`,
        "aria-hidden": "true",
        children: Array.from({
            length: 6
        }, (_, column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].column,
                style: {
                    "--column": column
                },
                children: [
                    0,
                    1,
                    2
                ].map((copy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].coverGroup,
                        children: [
                            0,
                            1,
                            2
                        ].map((row)=>empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyCover}`,
                                "data-cover": ""
                            }, row, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cover, {
                                index: column * 3 + row
                            }, row, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this))
                    }, copy, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 28
                    }, this))
            }, column, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 34,
                columnNumber: 44
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
function coverTilt(node) {
    let angle = window.matchMedia("(max-width: 650px)").matches ? -10 : -9;
    let scale = angle === -10 ? 1 : 1.08;
    let el = node;
    while(el){
        const transform = getComputedStyle(el).transform;
        if (transform && transform !== "none" && transform.startsWith("matrix(")) {
            const [a, b] = transform.slice(7, -1).split(",").map(Number);
            const nextAngle = Math.atan2(b, a) * 180 / Math.PI;
            if (Math.abs(nextAngle) > 0.2) return {
                angle: nextAngle,
                scale: Math.hypot(a, b)
            };
        }
        el = el.parentElement;
    }
    return {
        angle,
        scale
    };
}
function nearestCover() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    let best = null;
    let bestDist = Infinity;
    for (const node of document.querySelectorAll("[data-cover]")){
        const rect = node.getBoundingClientRect();
        if (rect.width < 8) continue;
        const dist = (rect.left + rect.width / 2 - cx) ** 2 + (rect.top + rect.height / 2 - cy) ** 2;
        if (dist < bestDist) {
            bestDist = dist;
            best = node;
        }
    }
    if (!best) {
        const size = 320;
        return {
            left: cx - size / 2,
            top: cy - size / 2,
            width: size,
            height: size,
            dx: 0,
            dy: 0,
            scale: Math.max(window.innerWidth, window.innerHeight) / size * 1.2,
            angle: -9
        };
    }
    const rect = best.getBoundingClientRect();
    const { angle, scale: wallScale } = coverTilt(best);
    const size = best.offsetWidth * wallScale;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return {
        left: centerX - size / 2,
        top: centerY - size / 2,
        width: size,
        height: size,
        dx: cx - centerX,
        dy: cy - centerY,
        scale: Math.max(window.innerWidth / size, window.innerHeight / size) * 1.2,
        angle
    };
}
function Landing() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoomOn, setZoomOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const departing = phase !== "idle";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        router.prefetch("/editor");
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase === "idle") return;
        if (phase === "fade") {
            const timer = window.setTimeout(()=>setPhase("blank"), 520);
            return ()=>clearTimeout(timer);
        }
        if (phase === "blank") {
            const timer = window.setTimeout(()=>setPhase("zoom"), 980);
            return ()=>clearTimeout(timer);
        }
        let cancelled = false;
        const box = nearestCover();
        setZoom(box);
        const expandFrame = requestAnimationFrame(()=>{
            if (!cancelled) setZoomOn(true);
        });
        const timer = window.setTimeout(()=>{
            if (cancelled) return;
            document.documentElement.dataset.enter = "editor";
            const page = getComputedStyle(document.documentElement).getPropertyValue("--page").trim() || "#f5f5f7";
            document.documentElement.style.background = page;
            document.body.style.background = page;
            router.push("/editor");
        }, 980);
        return ()=>{
            cancelled = true;
            cancelAnimationFrame(expandFrame);
            clearTimeout(timer);
        };
    }, [
        phase,
        router
    ]);
    function openEditor(event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
        event.preventDefault();
        if (phase !== "idle") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            router.push("/editor");
            return;
        }
        setPhase("fade");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].landing} ${departing ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].departing : ""} ${phase === "blank" || phase === "zoom" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].blank : ""} ${phase === "zoom" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zooming : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Main navigation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wordmark,
                            "aria-label": "iCover home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-mark",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/brand/icover-icon.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 106
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 77
                                }, this),
                                "iCover",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "studio-label",
                                    children: "STUDIO"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 168
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 142,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeSwitch"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/ismqo/iCover-Studio",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCta,
                                    children: "GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 59
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 143,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 141,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 140,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero} ${paused ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paused : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverWall, {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverWall, {
                        empty: true
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shade
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                        "aria-labelledby": "hero-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroBrand,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "brand-mark brand-mark-hero",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/brand/icover-icon.png",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 88
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 43
                                    }, this),
                                    "iCover Studio"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "hero-title",
                                children: [
                                    "For the love",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 41
                                    }, this),
                                    "of your playlists."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "You found the perfect songs.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileBreak
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 40
                                    }, this),
                                    " Now give them the perfect cover."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/editor",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroCta,
                                onClick: openEditor,
                                children: "Create your cover"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "YOUR MUSIC. YOUR ARTWORK."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].motionButton,
                                onClick: ()=>setPaused((p)=>!p),
                                "aria-label": paused ? "Play cover animation" : "Pause cover animation",
                                "aria-pressed": paused,
                                children: paused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 16,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 257
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 16,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 297
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, this),
            zoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zoomCover} ${zoomOn ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].zoomCoverOn : ""}`,
                style: {
                    left: zoom.left,
                    top: zoom.top,
                    width: zoom.width,
                    height: zoom.height,
                    transform: zoomOn ? `translate(${zoom.dx}px, ${zoom.dy}px) rotate(0deg) scale(${zoom.scale})` : `translate(0px, 0px) rotate(${zoom.angle}deg) scale(1)`
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 159,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 139,
        columnNumber: 10
    }, this);
}
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
    ()=>isLocale
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
            title: "For the love of your playlists.",
            body: "You found the perfect songs.",
            bodyRest: "Now give them the perfect cover.",
            cta: "Create your cover",
            caption: "YOUR MUSIC. YOUR ARTWORK.",
            play: "Play cover animation",
            pause: "Pause cover animation"
        },
        editor: {
            caption: "YOUR MUSIC. YOUR ARTWORK.",
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
            bigTitle: "Big title",
            bigTitleSize: "Big title size",
            bigTitleWeight: "Big title weight",
            subtitle: "Subtitle",
            subtitleSize: "Subtitle size",
            subtitleWeight: "Subtitle weight",
            footer: "Footer",
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
            title: "Por el amor a tus playlists.",
            body: "Encontraste las canciones perfectas.",
            bodyRest: "Ahora dales la portada perfecta.",
            cta: "Crea tu portada",
            caption: "TU MÚSICA. TU ARTE.",
            play: "Reproducir animación",
            pause: "Pausar animación"
        },
        editor: {
            caption: "TU MÚSICA. TU ARTE.",
            livePreview: "VISTA EN VIVO",
            coverPreview: "Vista previa de la portada",
            coverPreviewNamed: (title)=>`Vista previa de ${title}`,
            resetCover: "Restablecer portada",
            download: "Descargar portada",
            exporting: "Exportando…",
            coverSettings: "Ajustes de la portada",
            coverStyle: "Estilo de portada",
            original: "Original",
            originalHint: "Color y degradados",
            essentials: "Essentials",
            essentialsHint: "Foto y banda de título",
            titleBand: "Banda de título",
            typography: "Tipografía",
            title: "Título",
            bigTitle: "Título grande",
            bigTitleSize: "Tamaño del título grande",
            bigTitleWeight: "Peso del título grande",
            subtitle: "Subtítulo",
            subtitleSize: "Tamaño del subtítulo",
            subtitleWeight: "Peso del subtítulo",
            footer: "Pie",
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
            uploadPhoto: "Subir foto de portada",
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
                reset: "Portada restablecida."
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

//# sourceMappingURL=_00nvvdl._.js.map