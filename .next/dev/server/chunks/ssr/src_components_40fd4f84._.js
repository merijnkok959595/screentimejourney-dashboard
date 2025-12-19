module.exports = [
"[project]/src/components/Home/Hero/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Hero = ({ title = "Quit Porn, Stop Doomscrolling", subtitle, ctaText = "Start now", ctaLink = "/product/screentimejourney", imageUrl = "https://cdn.shopify.com/s/files/1/0866/6749/3623/files/Untitled-20250823-050134-2733-4x-2.webp?v=1762880326", imageMobileUrl, overlayOpacity = 0.3 })=>{
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Ensure hero section is properly identified
        if (heroRef.current) {
            heroRef.current.classList.add('hero-section');
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroRef,
        className: "hero-section dbtfy-image-banner dbtfy-image-bannner__height--medium dbtfy-image-bannner__mobile-height--medium",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dbtfy-image-block",
                children: [
                    imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: title,
                        className: "dbtfy-image-banner__image--desktop",
                        loading: "eager",
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0
                        },
                        onError: (e)=>{
                            console.error('Hero image failed to load:', imageUrl);
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/Hero/index.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageMobileUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageMobileUrl,
                        alt: title,
                        className: "dbtfy-image-banner__image--mobile show-on--mobile-only",
                        loading: "eager",
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/Hero/index.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: title,
                        className: "dbtfy-image-banner__image--mobile show-on--mobile-only",
                        loading: "eager",
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home/Hero/index.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home/Hero/index.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dbtfy-image-content dbtfy-image-content__desktop--middle-center dbtfy-image-content__mobile--middle-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "banner__box content-container content-container--full-width-mobile",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title title inline-richtext text-center",
                            children: [
                                "Quit Porn,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/Home/Hero/index.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        whiteSpace: 'nowrap'
                                    },
                                    children: "Stop Doomscrolling"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home/Hero/index.tsx",
                                    lineNumber: 78,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Home/Hero/index.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-subtitle text-center",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home/Hero/index.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        ctaText && ctaLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-cta dbtfy-button--block justify-content-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: ctaLink,
                                className: "btn-primary hero-cta-button",
                                children: ctaText
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home/Hero/index.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home/Hero/index.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home/Hero/index.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Home/Hero/index.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home/Hero/index.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/src/components/Common/ScrollingBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ScrollingBanner = ({ items = [
    {
        text: "The average person spends 7+ hours daily on screens"
    },
    {
        text: "80% of phone checks are unconscious habits"
    },
    {
        text: "Social media triggers dopamine addiction"
    },
    {
        text: "Digital wellness starts with awareness"
    },
    {
        text: "Take control of your screen time"
    }
], animationDuration = 90, pauseOnHover = true, direction = "left", backgroundColor = "#1a1a1a", textColor = "#ffffff", gap = 60 })=>{
    const bannerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!listRef.current || !bannerRef.current) return;
        const list = listRef.current;
        const banner = bannerRef.current;
        // Clean up any existing animation before creating new one
        if (banner.id && banner.id.startsWith('scrolling-banner-')) {
            const existingStyle = document.querySelector(`style[data-banner-id="${banner.id}"]`);
            if (existingStyle) {
                existingStyle.remove();
            }
        }
        // Responsive animation duration
        const isMobile = window.innerWidth <= 768;
        const responsiveAnimationDuration = isMobile ? 80 : animationDuration; // Mobile: 80s, Desktop: 90s
        // Always duplicate items for seamless infinite scroll
        const originalItems = Array.from(list.children);
        const duplicateCount = 4; // Always create 4 copies for smooth infinite loop
        // Clear the list and rebuild with duplicated items
        list.innerHTML = '';
        for(let cycle = 0; cycle < duplicateCount; cycle++){
            originalItems.forEach((originalItem)=>{
                const clonedItem = originalItem.cloneNode(true);
                // Set appropriate padding for seamless looping  
                clonedItem.style.paddingLeft = `${gap}px`;
                clonedItem.style.paddingRight = `${gap}px`;
                // Add aria-hidden to duplicated items for accessibility
                if (cycle > 0) {
                    clonedItem.setAttribute('aria-hidden', 'true');
                }
                list.appendChild(clonedItem);
            });
        }
        // Calculate the width of one complete set of items
        const singleSetWidth = list.scrollWidth / duplicateCount;
        // Create dynamic CSS animation with stable ID
        const sectionId = `scrolling-banner-${Math.random().toString(36).substr(2, 9)}`;
        banner.id = sectionId;
        const animationDirection = direction === "right" ? "reverse" : "normal";
        const translateDistance = direction === "right" ? singleSetWidth : -singleSetWidth;
        const style = document.createElement('style');
        style.setAttribute('data-banner-id', sectionId);
        style.textContent = `
      #${sectionId} ul {
        animation-name: scrolling-banner-animation-${sectionId};
        animation-duration: ${responsiveAnimationDuration}s;
        animation-direction: ${animationDirection};
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-play-state: running;
      }
      
      @keyframes scrolling-banner-animation-${sectionId} {
        0% { 
          transform: translateX(0); 
        }
        100% { 
          transform: translateX(${translateDistance}px); 
        }
      }
    `;
        document.head.appendChild(style);
        // Cleanup function to prevent animation stacking
        return ()=>{
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
            // Also remove any inline styles that might conflict
            if (list && list.style.animation) {
                list.style.animation = '';
            }
        };
    }, [
        items,
        animationDuration,
        direction,
        gap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: bannerRef,
        style: {
            backgroundColor,
            color: textColor,
            padding: '30px 0'
        },
        className: "jsx-f4e6066be2ef1398" + " " + `dbtfy-scrolling-banner overflow-hidden relative block ${pauseOnHover ? 'hover-pause' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: listRef,
                className: "jsx-f4e6066be2ef1398" + " " + "inline-flex items-center list-none m-0 p-0",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            paddingLeft: `${gap}px`,
                            paddingRight: `${gap}px`
                        },
                        className: "jsx-f4e6066be2ef1398" + " " + "flex-shrink-0 relative",
                        children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "jsx-f4e6066be2ef1398" + " " + "transition-all duration-200 ease-out hover:opacity-75 focus:opacity-75",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f4e6066be2ef1398" + " " + `banner-item ${item.isStroke ? 'text-stroke' : ''}`,
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-f4e6066be2ef1398" + " " + `banner-item ${item.isStroke ? 'text-stroke' : ''}`,
                            children: item.text
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "f4e6066be2ef1398",
                children: ".hover-pause.jsx-f4e6066be2ef1398:hover ul.jsx-f4e6066be2ef1398{animation-play-state:paused}.text-stroke.jsx-f4e6066be2ef1398{-webkit-text-stroke:1px currentColor;-webkit-text-fill-color:transparent}.banner-text.jsx-f4e6066be2ef1398{white-space:nowrap;align-items:center;display:flex}.banner-emoji.jsx-f4e6066be2ef1398{flex-shrink:0;margin-right:12px;display:inline-block}.banner-text-content.jsx-f4e6066be2ef1398{white-space:nowrap;display:inline-block}.banner-item.jsx-f4e6066be2ef1398{white-space:nowrap;align-items:center;margin:0;font-family:DM Serif Display,serif;font-size:24px;font-weight:600;display:flex}@media (width<=768px){.banner-item.jsx-f4e6066be2ef1398{font-size:18px}}@media (prefers-reduced-motion:reduce){ul.jsx-f4e6066be2ef1398{animation:none!important}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/ScrollingBanner.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ScrollingBanner;
}),
"[project]/src/components/Common/MilestonesPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const MilestonesPreview = ({ showTitle = false, showButton = true, title = "Weekly Milestones" })=>{
    const [selectedGender, setSelectedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('male');
    const [milestonesData, setMilestonesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        male: [],
        female: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Disabled loading spinner
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load milestones from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadMilestones = async ()=>{
            try {
                console.log('🎯 Loading milestone preview data...');
                const apiUrl = 'https://ajvrzuyjarph5fvskles42g7ba0zxtxc.lambda-url.eu-north-1.on.aws';
                // Load both male and female milestones
                const [maleResponse, femaleResponse] = await Promise.all([
                    fetch(`${apiUrl}/get_milestones`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            gender: 'male',
                            include_all: true
                        })
                    }),
                    fetch(`${apiUrl}/get_milestones`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            gender: 'female',
                            include_all: true
                        })
                    })
                ]);
                if (maleResponse.ok && femaleResponse.ok) {
                    const maleData = await maleResponse.json();
                    const femaleData = await femaleResponse.json();
                    console.log('📊 Milestone API responses:', {
                        maleData,
                        femaleData
                    });
                    const maleMilestones = maleData.milestones || maleData.data || [];
                    const femaleMilestones = femaleData.milestones || femaleData.data || [];
                    // Filter for Level 0 (Ground Zero) and Level 10 (King/Queen) only
                    setMilestonesData({
                        male: maleMilestones.filter((m)=>m.level === 0 || m.level === 10),
                        female: femaleMilestones.filter((m)=>m.level === 0 || m.level === 10)
                    });
                    console.log('✅ Filtered preview milestones loaded');
                } else {
                    throw new Error('Failed to load milestones');
                }
            } catch (error) {
                console.error('❌ Error loading milestones:', error);
                setHasError(true);
            } finally{
                setLoading(false);
            }
        };
        loadMilestones();
    }, []);
    const handleGenderSwitch = (gender)=>{
        setSelectedGender(gender);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "stj-milestone-preview-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stj-milestone-preview-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-loading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-spinner"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading milestones..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "stj-milestone-preview-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stj-milestone-preview-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-error",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Unable to load milestones. Please try again later."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const currentMilestones = milestonesData[selectedGender] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stj-milestone-preview-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stj-milestone-preview-container",
            children: [
                showTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: '40px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: 'var(--brand-text)',
                            fontFamily: 'var(--font-heading)',
                            margin: '0'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-milestone-preview-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-gender-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `button ${selectedGender === 'male' ? 'button--primary stj-tab-active' : 'button--secondary'} default stj-tab-btn`,
                                    onClick: ()=>handleGenderSwitch('male'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid align-items-center",
                                        children: "🙋‍♂️ Men"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `button ${selectedGender === 'female' ? 'button--primary stj-tab-active' : 'button--secondary'} default stj-tab-btn`,
                                    onClick: ()=>handleGenderSwitch('female'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid align-items-center",
                                        children: "🙋‍♀️ Women"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-milestone-cards",
                            children: currentMilestones.map((milestone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stj-milestone-preview-card",
                                    "data-level": milestone.level,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-milestone-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stj-milestone-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "stj-milestone-emoji",
                                                            children: milestone.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "stj-milestone-info",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "stj-milestone-title",
                                                                children: milestone.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stj-milestone-days",
                                                    children: [
                                                        "Days ",
                                                        milestone.days_range || milestone.milestone_day
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-milestone-description",
                                            children: milestone.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        milestone.media_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-milestone-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: milestone.media_url,
                                                alt: milestone.title,
                                                loading: "lazy",
                                                width: "350",
                                                height: "350"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, milestone.level, true, {
                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-milestone-actions",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/milestones",
                                className: "button button--primary default",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid align-items-center",
                                    children: "See milestones"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/MilestonesPreview.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MilestonesPreview;
}),
"[project]/src/components/Common/LeaderboardPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const LeaderboardPreview = ({ showTitle = false, showButton = true, title = "Community Leaderboard" })=>{
    const [selectedGender, setSelectedGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('male');
    const [leaderboardData, setLeaderboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        male: [],
        female: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Disabled loading spinner
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const medals = {
        1: '🥇',
        2: '🥈',
        3: '🥉'
    };
    // Load top 3 from leaderboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadLeaderboard = async ()=>{
            try {
                console.log('🏆 Loading top 3 performers...');
                const apiUrl = 'https://ajvrzuyjarph5fvskles42g7ba0zxtxc.lambda-url.eu-north-1.on.aws';
                // Load male and female top 3
                const [maleResponse, femaleResponse] = await Promise.all([
                    fetch(`${apiUrl}/get_leaderboard`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            page: 1,
                            page_size: 3,
                            get_all_users: false,
                            gender_filter: 'male'
                        })
                    }),
                    fetch(`${apiUrl}/get_leaderboard`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            page: 1,
                            page_size: 3,
                            get_all_users: false,
                            gender_filter: 'female'
                        })
                    })
                ]);
                if (maleResponse.ok && femaleResponse.ok) {
                    const maleData = await maleResponse.json();
                    const femaleData = await femaleResponse.json();
                    console.log('📊 Leaderboard API responses:', {
                        maleData,
                        femaleData
                    });
                    setLeaderboardData({
                        male: maleData.leaderboard || [],
                        female: femaleData.leaderboard || []
                    });
                    console.log('✅ Loaded top performers');
                } else {
                    throw new Error('Failed to load leaderboard');
                }
            } catch (error) {
                console.error('❌ Error loading leaderboard:', error);
                setHasError(true);
            } finally{
                setLoading(false);
            }
        };
        loadLeaderboard();
    }, []);
    const handleGenderSwitch = (gender)=>{
        setSelectedGender(gender);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "stj-leaderboard-preview-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stj-leaderboard-preview-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-loading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-spinner"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading leaderboard..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "stj-leaderboard-preview-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stj-leaderboard-preview-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-error",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Unable to load leaderboard. Please try again later."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const currentUsers = leaderboardData[selectedGender] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "stj-leaderboard-preview-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stj-leaderboard-preview-container",
            children: [
                showTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: '40px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: 'var(--brand-text)',
                            fontFamily: 'var(--font-heading)',
                            margin: '0'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stj-preview-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-gender-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `button ${selectedGender === 'male' ? 'button--primary stj-tab-active' : 'button--secondary'} default stj-tab-btn`,
                                    onClick: ()=>handleGenderSwitch('male'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid align-items-center",
                                        children: "🙋‍♂️ Men"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `button ${selectedGender === 'female' ? 'button--primary stj-tab-active' : 'button--secondary'} default stj-tab-btn`,
                                    onClick: ()=>handleGenderSwitch('female'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid align-items-center",
                                        children: "🙋‍♀️ Women"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-preview-top-cards-grid",
                            children: currentUsers.map((user, index)=>{
                                const rank = index + 1;
                                const displayName = user.name || 'Anonymous';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stj-preview-top-card",
                                    "data-rank": rank,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-card-medal",
                                            children: medals[rank] || '🏅'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-card-username",
                                            children: displayName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-card-stats",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stj-card-days",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stj-card-days-number",
                                                            children: user.days_in_focus || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stj-card-days-label",
                                                            children: "days in focus"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stj-card-progress",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stj-card-progress-percent",
                                                            children: [
                                                                user.progress_percentage || 0,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stj-card-progress-label",
                                                            children: "of the world"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        user.current_level?.media_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stj-card-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: user.current_level.media_url,
                                                alt: user.current_level.title || 'Milestone',
                                                loading: "lazy",
                                                width: "350",
                                                height: "350"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stj-preview-actions",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/leaderboard",
                                className: "button button--primary default",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid align-items-center",
                                    children: "See leaderboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Common/LeaderboardPreview.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LeaderboardPreview;
}),
"[project]/src/components/Common/FooterCurrencySelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/countries.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const FooterCurrencySelector = ({ className = '' })=>{
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize country on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initCountry = async ()=>{
            try {
                // Try to get saved country first (browser only)
                const savedCode = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                // Auto-detect if no saved preference
                const detectedCode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectUserCountry"])();
                const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryByCode"])(detectedCode);
                if (country) {
                    setSelectedCountry(country);
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                }
            } catch (error) {
                console.log('Footer selector fallback - setting Germany as default');
                // Fallback to Germany (EUR)
                const defaultCountry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryByCode"])('DE');
                if (defaultCountry) {
                    setSelectedCountry(defaultCountry);
                } else {
                    // Ultimate fallback - set first country from list
                    console.log('No Germany found, setting first country:', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"][0]);
                    setSelectedCountry(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"][0] || null);
                }
            } finally{
                setIsLoading(false);
            }
        };
        initCountry();
    }, []);
    // Focus search input when dropdown opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && searchInputRef.current) {
            setTimeout(()=>searchInputRef.current?.focus(), 100);
        }
    }, [
        isOpen
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        isOpen
    ]);
    const handleCountrySelect = (country)=>{
        setSelectedCountry(country);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsOpen(false);
        setSearchTerm('');
        // Trigger a custom event to update other components
        window.dispatchEvent(new CustomEvent('countryChange', {
            detail: {
                country: country.code,
                currency: country.currency,
                price: country.price,
                symbol: country.symbol
            }
        }));
    };
    const filteredCountries = searchTerm ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountriesBySearch"])(searchTerm) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"];
    console.log('FooterCurrencySelector render:', {
        isOpen,
        countriesLength: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRIES"].length,
        filteredLength: filteredCountries.length,
        selectedCountry,
        isLoading
    });
    // Group countries by region for better UX
    const groupedCountries = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGIONS"]).reduce((acc, [region, codes])=>{
        const regionCountries = codes.map((code)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCountryByCode"])(code)).filter((country)=>country !== undefined).filter((country)=>!searchTerm || country.name.toLowerCase().includes(searchTerm.toLowerCase()) || country.currency.toLowerCase().includes(searchTerm.toLowerCase()));
        if (regionCountries.length > 0) {
            acc[region] = regionCountries;
        }
        return acc;
    }, {});
    if (isLoading || !selectedCountry) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `disclosure relative ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-transparent text-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "disclosure relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `disclosure__button footer-currency-selector flex items-center gap-2 px-4 py-2 border border-[#2E0456] rounded-md bg-[#2E0456] text-white hover:bg-[#3a1a5c] hover:border-[#3a1a5c] transition-all text-sm font-medium ${className}`,
                style: {
                    textAlign: 'left',
                    justifyContent: 'flex-start'
                },
                "aria-expanded": isOpen,
                onClick: ()=>{
                    console.log('Footer currency selector clicked, isOpen:', !isOpen);
                    setIsOpen(!isOpen);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "whitespace-nowrap",
                            children: [
                                selectedCountry.name,
                                " | ",
                                selectedCountry.currency
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `icon icon-caret w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`,
                        viewBox: "0 0 10 6",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M9.354.646a.5.5 0 0 0-.708 0L5 4.293 1.354.646a.5.5 0 0 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "disclosure__list-wrapper country-selector fixed bottom-20 left-4 right-4 bg-white rounded-lg shadow-2xl border-2 border-gray-300 max-w-sm max-h-[400px] overflow-hidden",
                        style: {
                            zIndex: 99999,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-b border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: searchInputRef,
                                            type: "text",
                                            placeholder: "Search countries or currencies...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "disclosure__list country-selector__list max-h-[300px] overflow-y-auto",
                                children: searchTerm ? // Show search results
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    children: filteredCountries.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        role: "list",
                                        className: "list-unstyled",
                                        children: filteredCountries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "disclosure__item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `w-full text-left disclosure__link grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 hover:text-purple-900 transition-colors ${selectedCountry.code === country.code ? "bg-purple-100 text-purple-900 font-medium" : "text-gray-900"}`,
                                                    onClick: ()=>handleCountrySelect(country),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `icon-checkmark w-4 h-4 ${selectedCountry.code === country.code ? "block" : "invisible"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 12 9",
                                                                className: "w-full h-full text-purple-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L0.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 33
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 31
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "country text-gray-900 text-sm font-bold",
                                                            children: country.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "localization-form__currency text-gray-800 text-xs whitespace-nowrap font-semibold",
                                                            children: [
                                                                country.currency,
                                                                " ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(country)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, country.code, false, {
                                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                lineNumber: 215,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                        lineNumber: 213,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 text-gray-900 text-sm text-center bg-gray-100 font-medium",
                                        children: [
                                            'No countries found for "',
                                            searchTerm,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                        lineNumber: 242,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : // Show grouped by region
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    children: Object.entries(groupedCountries).map(([region, countries])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-2 text-gray-900 text-xs font-bold uppercase tracking-wider border-t border-gray-200 first:border-t-0 bg-purple-50",
                                                    children: region
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    role: "list",
                                                    className: "list-unstyled",
                                                    children: countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "disclosure__item",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `w-full text-left disclosure__link grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2.5 text-sm hover:bg-purple-50 hover:text-purple-900 transition-colors ${selectedCountry.code === country.code ? "bg-purple-100 text-purple-900 font-bold" : "text-gray-900 hover:font-medium"}`,
                                                                onClick: ()=>handleCountrySelect(country),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `icon-checkmark w-4 h-4 ${selectedCountry.code === country.code ? "block" : "invisible"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 12 9",
                                                                            className: "w-full h-full text-purple-600",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                fillRule: "evenodd",
                                                                                d: "M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L0.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z",
                                                                                clipRule: "evenodd"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                                lineNumber: 272,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "country text-gray-900 text-sm font-bold",
                                                                        children: country.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "localization-form__currency text-gray-800 text-xs whitespace-nowrap font-semibold",
                                                                        children: [
                                                                            country.currency,
                                                                            " ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(country)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, country.code, false, {
                                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, region, true, {
                                            fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                            lineNumber: 251,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                    lineNumber: 249,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "country-selector__overlay fixed inset-0",
                        style: {
                            zIndex: 99998
                        },
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/FooterCurrencySelector.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FooterCurrencySelector;
}),
"[project]/src/components/Common/PaymentIconsMinimal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const PaymentIconsMinimal = ({ className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `payment-icons-minimal flex items-center gap-1.5 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "payment-icon bg-white border border-gray-200 rounded px-3 py-2 h-8 flex items-center justify-center min-w-[48px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-8 h-auto",
                    viewBox: "0 0 130 42",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M32.4128 41.0541H21.1928L12.7791 8.95547C12.3798 7.47894 11.5319 6.1736 10.2846 5.55837C7.17185 4.01229 3.74183 2.78185 0 2.16127V0.925479H18.0746C20.5691 0.925479 22.4401 2.78185 22.7519 4.9378L27.1174 28.0916L38.3319 0.925479H49.2401L32.4128 41.0541ZM55.4765 41.0541H44.8801L53.6056 0.925479H64.202L55.4765 41.0541ZM77.9111 12.0423C78.223 9.88101 80.0939 8.64522 82.2766 8.64522C85.7066 8.33493 89.443 8.9555 92.5612 10.4962L94.4321 1.85637C91.3139 0.620572 87.8839 0 84.7712 0C74.4866 0 67.0029 5.5584 67.0029 13.2728C67.0029 19.1415 72.3038 22.2229 76.0457 24.0793C80.0939 25.9303 81.653 27.1661 81.3411 29.0171C81.3411 31.7936 78.2229 33.0294 75.1102 33.0294C71.3684 33.0294 67.6266 32.1039 64.202 30.5578L62.3311 39.2031C66.0729 40.7438 70.1211 41.3644 73.8629 41.3644C85.3948 41.6693 92.5612 36.1162 92.5612 27.7813C92.5612 17.2851 77.9111 16.6699 77.9111 12.0423ZM129.646 41.0541L121.232 0.925479H112.195C110.324 0.925479 108.453 2.16127 107.829 4.01229L92.2494 41.0541H103.158L105.335 35.1907H118.738L119.985 41.0541H129.646ZM113.754 11.732L116.867 26.8558H108.141L113.754 11.732Z",
                        fill: "#172B85"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "payment-icon bg-white border border-gray-200 rounded px-3 py-2 h-8 flex items-center justify-center min-w-[48px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-auto",
                    viewBox: "0 0 120 74",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M59.5312 64.3305C53.2258 69.7718 45.0467 73.0566 36.1091 73.0566C16.1666 73.0566 0 56.7023 0 36.5283C0 16.3543 16.1666 0 36.1091 0C45.0467 0 53.2258 3.28481 59.5312 8.72611C65.8366 3.28481 74.0158 0 82.9534 0C102.896 0 119.062 16.3543 119.062 36.5283C119.062 56.7023 102.896 73.0566 82.9534 73.0566C74.0158 73.0566 65.8366 69.7718 59.5312 64.3305Z",
                            fill: "#ED0006"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M59.5312 64.3305C67.2952 57.6305 72.2182 47.661 72.2182 36.5283C72.2182 25.3956 67.2952 15.4261 59.5312 8.72611C65.8366 3.28481 74.0158 0 82.9534 0C102.896 0 119.062 16.3543 119.062 36.5283C119.062 56.7023 102.896 73.0566 82.9534 73.0566C74.0158 73.0566 65.8366 69.7718 59.5312 64.3305Z",
                            fill: "#F9A000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M59.5314 8.72632C67.2952 15.4263 72.2182 25.3957 72.2182 36.5284C72.2182 47.661 67.2952 57.6304 59.5314 64.3304C51.7675 57.6304 46.8445 47.661 46.8445 36.5284C46.8445 25.3957 51.7675 15.4263 59.5314 8.72632Z",
                            fill: "#FF5E00"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "payment-icon bg-white border border-gray-200 rounded px-3 py-2 h-8 flex items-center justify-center min-w-[48px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-8 h-auto",
                    viewBox: "0 0 133 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.707 10.2286C20.1943 10.4384 22.6816 8.96967 24.2362 7.10754C25.7648 5.19296 26.7753 2.62271 26.5162 0C24.3139 0.104908 21.5934 1.46872 20.0389 3.3833C18.6139 5.0356 17.3961 7.71077 17.707 10.2286ZM47.2956 44.009V3.12101H62.4525C70.2772 3.12101 75.7441 8.57624 75.7441 16.5493C75.7441 24.5223 70.1735 30.03 62.2453 30.03H53.5656V44.009H47.2956ZM26.4901 10.7269C24.2988 10.5992 22.2994 11.3939 20.6844 12.0359C19.6451 12.449 18.765 12.7988 18.0955 12.7988C17.3441 12.7988 16.4277 12.4303 15.3987 12.0165C14.0505 11.4743 12.5091 10.8545 10.8926 10.8842C7.18761 10.9367 3.74166 13.0611 1.85028 16.4444C-2.03613 23.211 0.839813 33.2297 4.59667 38.7374C6.43624 41.465 8.63853 44.4549 11.5404 44.35C12.817 44.3012 13.7354 43.9068 14.6858 43.4985C15.7799 43.0285 16.9166 42.5403 18.6914 42.5403C20.4046 42.5403 21.4916 43.0158 22.535 43.4723C23.5271 43.9063 24.4798 44.3231 25.8942 44.2975C28.8997 44.2451 30.7911 41.5699 32.6306 38.8423C34.6158 35.9148 35.4882 33.0578 35.6206 32.6242L35.6207 32.6238C35.6282 32.5992 35.6333 32.5825 35.6361 32.574C35.6329 32.5708 35.6086 32.5595 35.5655 32.5396L35.5652 32.5394L35.5651 32.5394C34.9015 32.2319 29.8292 29.8813 29.7806 23.5781C29.7317 18.2875 33.8038 15.607 34.4448 15.185C34.4838 15.1594 34.5101 15.142 34.522 15.133C31.9311 11.2514 27.8892 10.8318 26.4901 10.7269ZM87.1963 44.3238C91.1345 44.3238 94.7877 42.3043 96.4459 39.1046H96.5755V44.009H102.379V23.6568C102.379 17.7557 97.7155 13.9528 90.5386 13.9528C83.8799 13.9528 78.9571 17.8082 78.7757 23.1061H84.424C84.8903 20.5883 87.1963 18.936 90.3572 18.936C94.1918 18.936 96.3423 20.7456 96.3423 24.0765V26.332L88.5176 26.8041C81.2371 27.2499 77.2989 30.266 77.2989 35.5115C77.2989 40.8093 81.3666 44.3238 87.1963 44.3238ZM88.88 39.4718C85.5377 39.4718 83.4131 37.8457 83.4131 35.3541C83.4131 32.7839 85.4599 31.2889 89.3722 31.0529L96.3419 30.607V32.915C96.3419 36.7442 93.1291 39.4718 88.88 39.4718ZM121.63 45.6089C119.116 52.7689 116.24 55.1293 110.126 55.1293C109.659 55.1293 108.105 55.0769 107.742 54.972V50.0675C108.131 50.12 109.089 50.1724 109.582 50.1724C112.354 50.1724 113.909 48.9922 114.867 45.9236L115.437 44.114L104.814 14.3462H111.369L118.754 38.5014H118.883L126.267 14.3462H132.641L121.63 45.6089ZM53.5651 8.47134H60.7938C66.2347 8.47134 69.3439 11.4088 69.3439 16.5755C69.3439 21.7422 66.2347 24.7059 60.7679 24.7059H53.5651V8.47134Z",
                        fill: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "payment-icon bg-white border border-gray-200 rounded px-3 py-2 h-8 flex items-center justify-center min-w-[48px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-8 h-auto",
                    viewBox: "0 0 133 55",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M61.0136 42.6095V26.6236H69.2642C72.6451 26.6236 75.4987 25.4908 77.825 23.2565L78.3833 22.6901C82.6327 18.0643 82.3536 10.858 77.825 6.57834C75.5607 4.31263 72.459 3.08537 69.2642 3.1483H56.0198V42.6095H61.0136ZM61.0142 21.7775V7.99435H69.3902C71.1895 7.99435 72.8957 8.68665 74.1676 9.94538C76.8666 12.5887 76.9286 16.9943 74.3227 19.732C73.0508 21.0852 71.2515 21.8404 69.3902 21.7775H61.0142ZM101.678 17.7181C99.5373 15.7356 96.6217 14.7287 92.9306 14.7287C88.1849 14.7287 84.6179 16.4909 82.2606 19.9839L86.6651 22.7845C88.278 20.3929 90.4802 19.1972 93.2718 19.1972C95.0398 19.1972 96.7457 19.858 98.0795 21.0538C99.3822 22.1866 100.127 23.823 100.127 25.5537V26.7181C98.2036 25.6481 95.7842 25.0817 92.8065 25.0817C89.3326 25.0817 86.541 25.8999 84.4629 27.5677C82.3847 29.2355 81.3301 31.4383 81.3301 34.239C81.2681 36.7879 82.3537 39.211 84.2767 40.8473C86.2308 42.6096 88.7122 43.4907 91.6279 43.4907C95.0708 43.4907 97.8003 41.9487 99.8785 38.8648H100.096V42.6096H104.872V25.9628C104.872 22.4699 103.818 19.7006 101.678 17.7181ZM88.1238 37.6375C87.1 36.8823 86.4796 35.655 86.4796 34.3334C86.4796 32.8544 87.1621 31.6271 88.496 30.6516C89.861 29.6761 91.5673 29.1726 93.5837 29.1726C96.3757 29.1411 98.5473 29.7705 100.098 31.0292C100.098 33.169 99.2608 35.0257 97.6166 36.5991C96.1275 38.1096 94.1111 38.9592 92.0016 38.9592C90.6056 38.9907 89.2406 38.5187 88.1238 37.6375ZM115.604 54.4731L132.292 15.6098H126.864L119.14 34.9942H119.047L111.138 15.6098H105.71L116.659 40.8788L110.456 54.4731H115.604Z",
                            fill: "#3C4043"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M43.7732 23.162C43.7732 21.62 43.6491 20.0781 43.401 18.5676H22.3401V27.2843H34.4059C33.9096 30.085 32.2967 32.6025 29.9394 34.1759V39.8402H37.1355C41.3538 35.9066 43.7732 30.085 43.7732 23.162Z",
                            fill: "#4285F4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M22.3411 45.3158C28.3585 45.3158 33.4453 43.3018 37.1364 39.8403L29.9404 34.176C27.9242 35.5606 25.3498 36.3473 22.3411 36.3473C16.5098 36.3473 11.5781 32.3508 9.81007 27.0012H2.39691V32.8543C6.18104 40.5011 13.9044 45.3158 22.3411 45.3158Z",
                            fill: "#34A853"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.81088 27.0013C8.88021 24.2006 8.88021 21.1482 9.81088 18.316V12.4944H2.39654C-0.798765 18.8824 -0.798765 26.4348 2.39654 32.8229L9.81088 27.0013Z",
                            fill: "#FBBC04"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M22.3411 8.96983C25.5359 8.90689 28.6066 10.1342 30.9019 12.3684L37.2915 5.88594C33.2282 2.04681 27.8932 -0.061567 22.3411 0.00136953C13.9044 0.00136953 6.18104 4.84748 2.39691 12.4943L9.81007 18.3474C11.5781 12.9663 16.5098 8.96983 22.3411 8.96983Z",
                            fill: "#EA4335"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "payment-icon bg-white border border-gray-200 rounded px-3 py-2 h-8 flex items-center justify-center min-w-[48px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-8 h-auto",
                    viewBox: "0 0 135 57",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M73.0538 7.59039L63.6456 9.6095V1.98173L73.0538 0V7.59039ZM34.8211 4.33732L25.6752 6.28165L25.6378 36.2319C25.6378 41.7658 29.7984 45.8414 35.3458 45.8414C38.4194 45.8414 40.6684 45.2806 41.9053 44.6075V37.0171C40.7059 37.5032 34.7836 39.2232 34.7836 33.6893V20.4155H41.9053V12.4512H34.7836L34.8211 4.33732ZM134.938 28.9407C134.938 19.3686 130.29 11.8156 121.406 11.8156C112.485 11.8156 107.088 19.3686 107.088 28.8659C107.088 40.1206 113.46 45.8041 122.606 45.8041C127.066 45.8041 130.44 44.7945 132.988 43.3736V35.8954C130.44 37.1667 127.516 37.9519 123.805 37.9519C120.169 37.9519 116.946 36.6806 116.534 32.2685H134.863C134.863 32.0625 134.876 31.5948 134.892 31.0559L134.892 31.0548C134.913 30.322 134.938 29.4576 134.938 28.9407ZM116.421 25.3885C116.421 21.1634 119.007 19.406 121.369 19.406C123.655 19.406 126.091 21.1634 126.091 25.3885H116.421ZM12.6692 19.9295C10.6826 19.9295 9.48317 20.4904 9.48317 21.9486C9.48317 23.5408 11.5474 24.2412 14.1084 25.1101C18.2834 26.5266 23.7784 28.391 23.8016 35.2973C23.8016 41.9903 18.4416 45.8416 10.6451 45.8416C7.42162 45.8416 3.89823 45.2059 0.412333 43.7103V34.8112C3.56089 36.5312 7.53407 37.8025 10.6451 37.8025C12.7442 37.8025 14.2435 37.2416 14.2435 35.5216C14.2435 33.758 12.0058 32.9518 9.30425 31.9786C5.19001 30.4965 2.16166e-05 28.6268 2.16166e-05 22.3973C2.16166e-05 15.7791 5.0602 11.8156 12.6692 11.8156C15.7803 11.8156 18.8539 12.3017 21.965 13.5356V22.3225C19.1163 20.7895 15.5179 19.9295 12.6692 19.9295ZM53.563 15.2182L52.9633 12.4512H44.867V45.1684H54.2377V22.9955C56.4492 20.1164 60.1974 20.6399 61.3594 21.0512V12.4512C60.16 12.0025 55.7745 11.1799 53.563 15.2182ZM63.645 12.4513H73.0532V45.1685H63.645V12.4513ZM85.2725 14.7321C86.5844 13.5356 88.9458 11.8156 92.6191 11.8156C99.1786 11.8156 105.363 17.7234 105.401 28.5668C105.401 40.4198 99.2911 45.8041 92.5817 45.8041C89.2832 45.8041 87.2966 44.4206 85.9472 43.4485L85.9097 54.0302L76.539 56.0119V12.4138H84.7852L85.2725 14.7321ZM85.9471 35.8206C86.8467 36.7928 88.1586 37.578 90.3701 37.578C93.8185 37.578 96.1424 33.8389 96.1424 28.8285C96.1424 23.9303 93.781 20.1164 90.3701 20.1164C88.2336 20.1164 86.8842 20.8642 85.9096 21.9485L85.9471 35.8206Z",
                        fill: "#6461FC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/PaymentIconsMinimal.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PaymentIconsMinimal;
}),
];

//# sourceMappingURL=src_components_40fd4f84._.js.map