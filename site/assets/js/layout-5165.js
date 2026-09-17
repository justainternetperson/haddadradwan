(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 676525, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(522016);
    e.s(["default", 0, ({
        children: e,
        href: a,
        onClick: l,
        variant: s = "primary",
        size: o = "md",
        className: i = "",
        fullWidth: n = !1,
        type: d = "button",
        disabled: c = !1,
        loading: h = !1,
        target: x,
        rel: g,
        icon: m
    }) => {
        let u = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center relative overflow-hidden",
            p = i.match(/(?:^|\s)(?:sm:|md:|lg:|xl:|2xl:)?(hidden|flex|block|inline|inline-flex|inline-block|grid)(?:\s|$)/) ? u.replace(/\binline-flex\b/, "").trim() : u,
            b = `${p} ${({primary:"bg-[#3DB246] hover:bg-[#2e8a34] text-white shadow-lg hover:shadow-xl hover:scale-105",secondary:"border border-gray-400 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:scale-105",outline:"border-2 border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-gray-500",ghost:"bg-transparent hover:bg-gray-100 text-gray-700",gradient:"bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105",dark:"bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl hover:scale-105","purple-outline":"border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white backdrop-blur-sm bg-white/50 hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105",purple:"bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105",brand:"bg-[#2091F9] hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105",orange:"text-orange-500 hover:text-white rounded-full font-semibold bg-gray-50 hover:bg-orange-500 hover:shadow-lg hover:scale-105"})[s]} ${({sm:"px-6 py-2 text-sm",md:"px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base",lg:"px-10 py-4 text-lg"})[o]} ${n?"w-full sm:w-auto":""} ${i} ${c||h?"opacity-70 cursor-not-allowed pointer-events-none":""}`.trim().replace(/\s+/g, " "),
            v = (0, t.jsxs)(t.Fragment, {
                children: [h && (0, t.jsxs)("svg", {
                    className: "animate-spin -ml-1 mr-3 h-4 w-4 text-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, t.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0, t.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                }), (0, t.jsxs)("span", {
                    className: `flex items-center gap-2 ${h?"opacity-80":""}`,
                    children: [e, m]
                })]
            });
        return a && !h ? (0, t.jsx)(r.default, {
            href: a,
            className: b,
            target: x,
            rel: g,
            onClick: l,
            children: v
        }) : (0, t.jsx)("button", {
            type: d,
            className: b,
            onClick: l,
            disabled: c || h,
            children: v
        })
    }])
}, 514764, e => {
    "use strict";
    let t = (0, e.i(475254).default)("send", [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ]);
    e.s(["Send", () => t], 514764)
}, 934657, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(846932),
        a = e.i(514764),
        l = e.i(271645),
        s = e.i(676525),
        o = e.i(39793);
    e.s(["default", 0, () => {
        let [e, i] = (0, l.useState)(!1);
        return (0, t.jsxs)("section", {
            className: "consultation-banner-section relative w-full overflow-hidden",
            children: [(0, t.jsx)("div", {
                className: "consultation-banner-bg absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 w-full h-full bg-gradient-to-r from-[#1a1f3a]/90 via-[#2a1f2e]/85 to-[#8b4513]/80"
            }), (0, t.jsx)("div", {
                className: "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8",
                    children: [(0, t.jsxs)(r.motion.div, {
                        className: "flex-1 text-center lg:text-left",
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8,
                            ease: "easeOut"
                        },
                        children: [(0, t.jsx)("h2", {
                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 leading-tight",
                            children: "Ready to move your business forward with confidence?"
                        }), (0, t.jsx)("p", {
                            className: "text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0",
                            children: "Get software solutions built around how your business actually operates, designed for stability, clarity, and long term success."
                        })]
                    }), (0, t.jsx)(r.motion.div, {
                        className: "flex-shrink-0",
                        initial: {
                            opacity: 0,
                            x: 30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8,
                            delay: .2,
                            ease: "easeOut"
                        },
                        children: (0, t.jsxs)(s.default, {
                            onClick: () => {
                                i(!0)
                            },
                            variant: "gradient",
                            size: "md",
                            className: "group shadow-lg hover:shadow-xl",
                            children: [(0, t.jsx)(a.Send, {
                                className: "w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform"
                            }), "Free Consultation"]
                        })
                    })]
                })
            }), (0, t.jsx)(o.default, {
                isOpen: e,
                onClose: () => {
                    i(!1)
                }
            })]
        })
    }])
}]);