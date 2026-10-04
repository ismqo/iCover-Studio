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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/landing.module.css [app-ssr] (css module)");
"use client";
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
                lineNumber: 25,
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
                    lineNumber: 26,
                    columnNumber: 83
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 24,
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
                                lineNumber: 35,
                                columnNumber: 11
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cover, {
                                index: column * 3 + row
                            }, row, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this))
                    }, copy, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 28
                    }, this))
            }, column, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 44
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 32,
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
            document.documentElement.style.background = "#f5f5f7";
            document.body.style.background = "#f5f5f7";
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
                                        lineNumber: 140,
                                        columnNumber: 106
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 77
                                }, this),
                                "iCover",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "studio-label",
                                    children: "STUDIO"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 168
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 140,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navActions,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/ismqo/iCover-Studio",
                                target: "_blank",
                                rel: "noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navCta,
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 141,
                                columnNumber: 44
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero} ${paused ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paused : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverWall, {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverWall, {
                        empty: true
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 147,
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
                                            lineNumber: 149,
                                            columnNumber: 88
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 43
                                    }, this),
                                    "iCover Studio"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "hero-title",
                                children: [
                                    "For the love",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 41
                                    }, this),
                                    "of your playlists."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 150,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "You found the perfect songs.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileBreak
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 40
                                    }, this),
                                    " Now give them the perfect cover."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/editor",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroCta,
                                onClick: openEditor,
                                children: "Create your cover"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 152,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$landing$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomBar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "YOUR MUSIC. YOUR ARTWORK."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
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
                                    lineNumber: 154,
                                    columnNumber: 257
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 16,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 297
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 145,
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
                lineNumber: 156,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 137,
        columnNumber: 10
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
];

//# sourceMappingURL=_06xawwn._.js.map