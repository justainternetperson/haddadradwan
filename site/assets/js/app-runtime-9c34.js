(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 85641, e => {
    "use strict";
    var s = e.i(843476),
        t = e.i(271645),
        r = e.i(618566),
        a = e.i(846932),
        l = e.i(88653);
    e.s(["default", 0, () => {
        let e = (0, r.usePathname)(),
            [i, o] = (0, t.useState)(!0),
            n = "+965 6969 0261";
        return "/cart/print" === e || e.startsWith("/admin") || e.startsWith("/dashboard") ? null : (0, s.jsx)(l.AnimatePresence, {
            children: i && (0, s.jsx)(a.motion.div, {
                initial: {
                    opacity: 0,
                    scale: .5,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .5,
                    y: 20
                },
                className: "fixed left-4 md:left-10 bottom-10 z-[9999]",
                children: (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [(0, s.jsxs)("a", {
                        href: `tel:${n}`,
                        className: "relative w-12 h-12 rounded-full bg-[#0078FF] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer",
                        "aria-label": "Call Us",
                        children: [(0, s.jsx)("svg", {
                            className: "w-6 h-6 fill-current",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, s.jsx)("path", {
                                d: "M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                            })
                        }), (0, s.jsx)("span", {
                            className: "absolute inset-0 rounded-full bg-[#0078FF] animate-ping opacity-20"
                        })]
                    }), (0, s.jsxs)("button", {
                        onClick: () => {
                            let e = n.replace(/[^\d]/g, "");
                            window.open(`https://wa.me/${e}`, "_blank")
                        },
                        className: "relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer",
                        "aria-label": "Chat on WhatsApp",
                        children: [(0, s.jsx)("svg", {
                            className: "w-7 h-7 fill-current",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, s.jsx)("path", {
                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                            })
                        }), (0, s.jsx)("span", {
                            className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
                        })]
                    })]
                })
            })
        })
    }])
}, 138123, e => {
    "use strict";
    let s = {
        src: e.i(128134).default,
        width: 1250,
        height: 305,
        blurWidth: 8,
        blurHeight: 2,
        blurDataURL: "data:image/webp;base64,UklGRt4AAABXRUJQVlA4TNEAAAAvB0AAEM1VICICHgg2AQAAAIBJgAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAQfALAADAAxEgAAAAADj/GAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDY/HgjBCQAAAMD534sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBYtOGBYBMAAAAAnP/orwAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFCQ0z2d9yuOwTfvtmr/VwFJWgIKhOD9rZsGAAA="
    };
    e.s(["default", 0, s])
}, 770930, e => {
    "use strict";
    e.s(["convertToSlug", () => Y, "default", () => Z, "dropdownButtonClassName", () => H, "menuItems", () => R, "mobileDropdownButtonClassName", () => U, "mobileDropdownContainerClassName", () => V], 770930);
    var s = e.i(843476),
        t = e.i(271645),
        r = e.i(522016),
        a = e.i(652749);
    async function l() {
        try {
            let e = await (0, a.apiFetch)("company-info", {
                cache: "force-cache",
                next: {
                    tags: ["company-info"]
                }
            });
            if (e.success && Array.isArray(e.data) && e.data.length > 0) return e.data[0];
            return null
        } catch (e) {
            return e instanceof Error && ("NetworkError" === e.name || e.message.includes("NetworkError") || e.message.includes("Cannot connect to API")) || console.error("Error fetching company info from backend:", e), null
        }
    }
    let i = () => (0, s.jsx)("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            })
        }),
        o = () => (0, s.jsxs)("svg", {
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, s.jsx)("rect", {
                width: "24",
                height: "24",
                rx: "6",
                fill: "url(#ig_grad_desktop)"
            }), (0, s.jsx)("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                stroke: "white",
                strokeWidth: "1.5"
            }), (0, s.jsx)("path", {
                d: "M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z",
                stroke: "white",
                strokeWidth: "1.5"
            }), (0, s.jsx)("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1.2",
                fill: "white"
            }), (0, s.jsx)("defs", {
                children: (0, s.jsxs)("radialGradient", {
                    id: "ig_grad_desktop",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(4 20) rotate(-45) scale(26)",
                    children: [(0, s.jsx)("stop", {
                        stopColor: "#F0C24E"
                    }), (0, s.jsx)("stop", {
                        offset: "0.3",
                        stopColor: "#E95B39"
                    }), (0, s.jsx)("stop", {
                        offset: "0.7",
                        stopColor: "#CE277D"
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#4441D2"
                    })]
                })
            })]
        }),
        n = () => (0, s.jsx)("svg", {
            className: "w-5 h-5",
            fill: "#25D366",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
            })
        }),
        c = () => (0, s.jsxs)("svg", {
            className: "w-5 h-5",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, s.jsx)("path", {
                d: "M21.58 6.54C21.43 5.96 21.05 5.51 20.47 5.36C18.66 4.88 12 4.88 12 4.88C12 4.88 5.34 4.88 3.53 5.36C2.95 5.51 2.57 5.96 2.42 6.54C1.94 8.35 1.94 12 1.94 12C1.94 12 1.94 15.65 2.42 17.46C2.57 18.04 2.95 18.49 3.53 18.64C5.34 19.12 12 19.12 12 19.12C12 19.12 18.66 19.12 20.47 18.64C21.05 18.49 21.43 18.04 21.58 17.46C22.06 15.65 22.06 12 22.06 12C22.06 12 22.06 8.35 21.58 6.54Z",
                fill: "#FF0000"
            }), (0, s.jsx)("path", {
                d: "M9.99 15.11L15.22 12L9.99 8.88V15.11Z",
                fill: "white"
            })]
        }),
        d = () => (0, s.jsx)("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            })
        }),
        h = () => (0, s.jsx)("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            })
        }),
        x = () => (0, s.jsx)("svg", {
            className: "w-4 h-4",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"
            })
        }),
        m = () => (0, s.jsx)("svg", {
            className: "w-4 h-4",
            fill: "#E60023",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
                d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
            })
        }),
        p = () => {
            let [e, a] = (0, t.useState)(null), p = (0, t.useRef)(!1);
            (0, t.useEffect)(() => {
                p.current || (async () => {
                    try {
                        p.current = !0;
                        let e = await l();
                        a(e)
                    } catch (e) {
                        console.error("Error fetching company info:", e)
                    }
                })()
            }, []);
            let u = e => {
                    if (e) return e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`
                },
                f = u(e?.socialLinks?.facebook),
                g = u(e?.socialLinks?.instagram),
                w = u(e?.socialLinks?.youtube),
                b = u(e?.socialLinks?.twitter),
                j = u(e?.socialLinks?.pinterest),
                v = e?.phone?.[0] ? `https://wa.me/${e.phone[0].replace(/[^\d]/g,"")}` : void 0,
                A = [...f ? [{
                    name: "Facebook",
                    href: f,
                    icon: (0, s.jsx)(i, {})
                }] : [], ...g ? [{
                    name: "Instagram",
                    href: g,
                    icon: (0, s.jsx)(o, {})
                }] : [], ...j ? [{
                    name: "Pinterest",
                    href: j,
                    icon: (0, s.jsx)(m, {})
                }] : [], ...v ? [{
                    name: "WhatsApp",
                    href: v,
                    icon: (0, s.jsx)(n, {})
                }] : [], ...w ? [{
                    name: "YouTube",
                    href: w,
                    icon: (0, s.jsx)(c, {})
                }] : [], ...b ? [{
                    name: "X",
                    href: b,
                    icon: (0, s.jsx)(x, {})
                }] : []],
                y = e?.phone?.[0] || "",
                N = e?.email?.[0] || "";
            return (0, s.jsxs)("div", {
                className: "bg-[#0D0D11] w-full overflow-hidden border-b border-[#222227]/60 scrollbar-hide",
                children: [(0, s.jsx)("div", {
                    className: "w-full relative overflow-hidden scrollbar-hide",
                    children: (0, s.jsxs)("div", {
                        className: "flex container mx-auto relative h-10 flex-row items-center justify-center lg:justify-between py-1 px-4 lg:px-10 scrollbar-hide",
                        children: [(0, s.jsx)("div", {
                            className: "hidden lg:flex items-center gap-1.5 lg:gap-2",
                            children: A.map(e => (0, s.jsx)(r.default, {
                                href: e.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "border border-[#222227] hover:bg-[#1a1a20] rounded-md p-1.5 transition-colors cursor-pointer",
                                "aria-label": e.name,
                                children: (0, s.jsx)("div", {
                                    className: "text-white cursor-pointer",
                                    children: e.icon
                                })
                            }, e.name))
                        }), (0, s.jsxs)("div", {
                            className: "flex z-10 flex-row items-center",
                            children: [y && (0, s.jsxs)("div", {
                                className: "flex items-center gap-1.5 lg:gap-3 lg:px-6 lg:py-3 lg:border-r border-white/20 justify-start",
                                children: [(0, s.jsx)("div", {
                                    className: "text-white shrink-0 scale-75 lg:scale-100",
                                    children: (0, s.jsx)(d, {})
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-col",
                                    children: (0, s.jsx)("span", {
                                        className: "text-white text-xs lg:text-base font-normal whitespace-nowrap",
                                        dir: "ltr",
                                        children: y
                                    })
                                })]
                            }), N && (0, s.jsxs)("div", {
                                className: "hidden lg:flex items-center gap-3 pl-4 lg:pl-6 py-3 justify-start",
                                children: [(0, s.jsx)("div", {
                                    className: "text-white shrink-0",
                                    children: (0, s.jsx)(h, {})
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-col",
                                    children: (0, s.jsx)("span", {
                                        className: "text-white text-sm lg:text-base font-normal whitespace-nowrap",
                                        children: N
                                    })
                                })]
                            })]
                        })]
                    })
                }), (0, s.jsx)("div", {
                    className: "hidden lg:block bg-[#3DB246] -top-0.5 h-10 absolute overflow-hidden w-1/2 left-0",
                    style: {
                        clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)"
                    }
                })]
            })
        };
    var u = e.i(657688),
        f = e.i(618566),
        g = e.i(492161),
        w = e.i(37727),
        b = e.i(138123),
        j = e.i(155487),
        v = e.i(702878),
        A = e.i(846932),
        y = e.i(88653),
        N = e.i(150965),
        C = e.i(727612),
        k = e.i(107233),
        B = e.i(299023),
        z = e.i(972520),
        D = e.i(174080),
        M = e.i(552676);
    e.i(64107);
    var L = e.i(500066),
        _ = e.i(956625);
    let F = ({
            isOpen: e,
            onClose: a
        }) => {
            (0, j.useDispatch)();
            let l = (0, j.useSelector)(M.selectCartItems),
                i = (0, j.useSelector)(M.selectCartTotalPrice),
                {
                    updateQuantity: o,
                    removeFromCart: n
                } = (0, _.useCart)(),
                [c, d] = (0, t.useState)(!1);
            if ((0, t.useEffect)(() => (d(!0), e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
                    document.body.style.overflow = "unset"
                }), [e]), !c) return null;
            let h = (0, s.jsx)(y.AnimatePresence, {
                children: e && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(A.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        onClick: a,
                        className: "fixed inset-0 bg-black/20 z-9998 overflow-hidden cursor-pointer"
                    }), (0, s.jsxs)(A.motion.div, {
                        initial: {
                            x: "100%"
                        },
                        animate: {
                            x: 0
                        },
                        exit: {
                            x: "100%"
                        },
                        transition: {
                            type: "spring",
                            damping: 30,
                            stiffness: 300
                        },
                        className: "fixed right-0 top-0 h-full w-full max-w-[320px] bg-slate-50 shadow-2xl z-9999 flex flex-col overflow-hidden",
                        children: [(0, s.jsxs)("div", {
                            className: "px-4 py-2.5 border-b border-slate-200 flex items-center justify-between bg-white sticky top-0 z-100 shadow-sm",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, s.jsx)(N.ShoppingBag, {
                                    size: 16,
                                    className: "text-[#2091F9]"
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-sm font-extrabold text-slate-950",
                                        children: "Your Cart"
                                    }), (0, s.jsxs)("span", {
                                        className: "text-[10px] text-gray-400 font-bold",
                                        children: ["(", l.length, ")"]
                                    })]
                                })]
                            }), (0, s.jsx)("button", {
                                onClick: a,
                                className: "p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 cursor-pointer",
                                children: (0, s.jsx)(w.X, {
                                    size: 16
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50",
                            children: l.length > 0 ? l.map(e => (0, s.jsxs)("div", {
                                className: "flex gap-3 group relative bg-white rounded-lg p-2.5 shadow-sm border border-slate-100 hover:border-blue-200 transition-all",
                                children: [(0, s.jsx)("div", {
                                    className: "relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shrink-0",
                                    children: (0, s.jsx)(u.default, {
                                        src: e.product.gallery_images?.[0] || "/placeholder-product.png",
                                        alt: e.product.name,
                                        fill: !0,
                                        className: "object-contain p-2"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 min-w-0 flex flex-col justify-between",
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsx)(r.default, {
                                            href: `/product/${e.product.slug}`,
                                            onClick: a,
                                            className: "text-[13px] font-bold text-slate-950 hover:text-[#2091F9] transition-colors line-clamp-2 leading-tight mb-1",
                                            children: e.product.name
                                        }), (0, s.jsx)("p", {
                                            className: "text-[14px] font-black text-[#2091F9]",
                                            children: (0, L.formatPrice)(e.editedPrice || e.product.cash_price)
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center justify-between mt-2",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center bg-slate-100 rounded-md p-0.5 border border-slate-200",
                                            children: [(0, s.jsx)("button", {
                                                onClick: () => o(e.product._id, Math.max(0, e.quantity - 1)),
                                                className: "p-1 hover:bg-white hover:shadow-sm rounded transition-all text-slate-600 cursor-pointer",
                                                children: (0, s.jsx)(B.Minus, {
                                                    size: 12
                                                })
                                            }), (0, s.jsx)("span", {
                                                className: "w-7 text-center text-[11px] font-bold text-slate-900",
                                                children: e.quantity
                                            }), (0, s.jsx)("button", {
                                                onClick: () => o(e.product._id, e.quantity + 1),
                                                className: "p-1 hover:bg-white hover:shadow-sm rounded transition-all text-slate-600 cursor-pointer",
                                                children: (0, s.jsx)(k.Plus, {
                                                    size: 12
                                                })
                                            })]
                                        }), (0, s.jsx)("button", {
                                            onClick: () => n(e.product._id),
                                            className: "p-1 text-gray-400 hover:text-red-500 transition-colors cursor-pointer",
                                            children: (0, s.jsx)(C.Trash2, {
                                                size: 15
                                            })
                                        })]
                                    })]
                                })]
                            }, e.product._id)) : (0, s.jsxs)("div", {
                                className: "h-full flex flex-col items-center justify-center text-center py-20 bg-white",
                                children: [(0, s.jsx)("div", {
                                    className: "w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-5",
                                    children: (0, s.jsx)(N.ShoppingBag, {
                                        size: 32,
                                        className: "text-gray-300"
                                    })
                                }), (0, s.jsx)("h3", {
                                    className: "text-lg font-bold text-gray-900 mb-2",
                                    children: "Your bag is empty"
                                }), (0, s.jsx)("p", {
                                    className: "text-sm text-gray-500 max-w-[200px] mb-8 font-medium",
                                    children: "Looks like you haven't added any items to your cart yet."
                                }), (0, s.jsxs)("button", {
                                    onClick: a,
                                    className: "bg-[#2091F9] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-2 cursor-pointer",
                                    children: ["Start Shopping ", (0, s.jsx)(z.ArrowRight, {
                                        size: 16
                                    })]
                                })]
                            })
                        }), l.length > 0 && (0, s.jsxs)("div", {
                            className: "p-4 bg-white border-t border-slate-200 space-y-3 shadow-[0_-10px_20px_rgba(0,0,0,0.04)]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, s.jsx)("span", {
                                    className: "text-slate-500 font-bold uppercase text-[10px] tracking-wider",
                                    children: "Subtotal"
                                }), (0, s.jsx)("span", {
                                    className: "text-lg font-black text-slate-950",
                                    children: (0, L.formatPrice)(i)
                                })]
                            }), (0, s.jsx)("div", {
                                className: "pt-1",
                                children: (0, s.jsx)(r.default, {
                                    href: "/checkout",
                                    onClick: a,
                                    className: "w-full flex items-center justify-center py-[11px] rounded-lg bg-[#2091F9] text-white font-bold text-[13px] shadow-md shadow-blue-500/10 hover:bg-blue-600 transition-all cursor-pointer active:scale-[0.98]",
                                    children: "Proceed to Checkout"
                                })
                            })]
                        })]
                    })]
                })
            });
            return (0, D.createPortal)(h, document.body)
        },
        $ = ({
            onOpenConsultation: e
        }) => {
            let t = (0, j.useDispatch)(),
                r = (0, j.useSelector)(v.selectIsCartDrawerOpen);
            return (0, s.jsxs)("div", {
                className: "flex items-center space-x-0.5 sm:space-x-4 lg:space-x-6",
                children: [(0, s.jsx)("button", {
                    onClick: e,
                    className: "hidden md:flex group relative overflow-hidden items-center justify-center bg-gradient-to-r from-green-600 to-[#3DB246] p-px rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(61,178,70,0.3)] cursor-pointer",
                    children: (0, s.jsx)("div", {
                        className: "bg-[#0D0D11] group-hover:bg-transparent px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer",
                        children: (0, s.jsx)("span", {
                            className: "text-sm font-normal text-white tracking-wide whitespace-nowrap cursor-pointer",
                            children: "استشارة مجانية"
                        })
                    })
                }), (0, s.jsx)(F, {
                    isOpen: r,
                    onClose: () => t((0, v.setCartDrawerOpen)(!1))
                })]
            })
        };
    var E = e.i(664659);
    let S = ({
            title: e,
            services: a,
            basePath: l,
            isActive: i
        }) => {
            let [o, n] = (0, t.useState)(!1), c = (0, t.useRef)(null);
            return a && 0 !== a.length ? (0, s.jsxs)("div", {
                className: "relative",
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                children: [(0, s.jsxs)(r.default, {
                    href: l,
                    className: `flex items-center gap-1 px-4 py-2 rounded-md text-base font-normal transition-colors ${i||o?"bg-[#070709] border border-[#222227] text-white":"text-[#7E7E81] hover:text-white hover:bg-[#2a2a2a]/50"}`,
                    children: [(0, s.jsx)("span", {
                        children: e
                    }), (0, s.jsx)(E.ChevronDown, {
                        size: 14,
                        className: `transition-transform duration-300 ${o?"rotate-180 text-[#3DB246]":"text-gray-400"}`
                    })]
                }), (0, s.jsx)("div", {
                    ref: c,
                    className: "absolute top-full right-0 pt-1 z-[1000] min-w-[220px]",
                    style: {
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        opacity: +!!o,
                        transform: o ? "translateY(0)" : "translateY(8px)",
                        pointerEvents: o ? "auto" : "none"
                    },
                    children: (0, s.jsx)("div", {
                        className: "bg-[#0D0D11] rounded-xl border border-[#222227] overflow-hidden shadow-2xl py-2",
                        children: a.map(e => (0, s.jsxs)(r.default, {
                            href: `${l}/${e.slug}`,
                            className: "group flex items-center gap-2.5 px-4 py-2.5 transition-all duration-200 hover:bg-[#2a2a2a]",
                            onClick: () => n(!1),
                            children: [(0, s.jsx)("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#3DB246] transition-colors shrink-0"
                            }), (0, s.jsx)("span", {
                                className: "text-[13px] text-gray-300 group-hover:text-white transition-colors",
                                children: e.service_name
                            })]
                        }, e._id))
                    })
                })]
            }) : (0, s.jsx)(r.default, {
                href: l,
                className: `px-4 py-2 rounded-md text-base font-normal transition-colors ${i?"bg-[#070709] border border-[#222227] text-white":"text-[#7E7E81] hover:text-white hover:bg-[#2a2a2a]/50"}`,
                children: e
            })
        },
        P = ({
            categoryTree: e,
            services: a,
            onOpenConsultation: i,
            isMobileMenuOpen: o,
            onToggleMobileMenu: n
        }) => {
            let c = (0, f.usePathname)(),
                [d, h] = (0, t.useState)(null),
                x = (0, t.useRef)(!1);
            (0, t.useEffect)(() => {
                x.current || (async () => {
                    try {
                        x.current = !0;
                        let e = await l();
                        h(e)
                    } catch (e) {
                        console.error("Error fetching company info:", e)
                    }
                })()
            }, []);
            let m = e => {
                    if (e) return e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`
                },
                p = m(d?.socialLinks?.instagram),
                j = m(d?.socialLinks?.youtube),
                v = d?.phone?.[0] ? `https://wa.me/${d.phone[0].replace(/[^\d]/g,"")}` : void 0,
                A = e => "/" === e ? c === e : c.startsWith(e);
            return (0, s.jsx)("div", {
                className: "bg-[#0D0D11] h-20 w-full border-b border-[#222227]",
                children: (0, s.jsx)("div", {
                    className: "container mx-auto px-4 lg:px-10 h-full",
                    children: (0, s.jsxs)("div", {
                        className: "flex items-center justify-between h-full gap-4 md:gap-8",
                        children: [(0, s.jsx)(r.default, {
                            href: "/",
                            className: "flex items-center shrink-0",
                            children: (0, s.jsx)(u.default, {
                                src: b.default,
                                alt: "Hadad Mazallat Logo",
                                width: 240,
                                height: 72,
                                className: "h-10 sm:h-12 w-auto object-contain",
                                priority: !0
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-4 lg:gap-6",
                            children: [(0, s.jsx)("nav", {
                                className: "hidden lg:flex items-center gap-1",
                                children: [{
                                    href: "/",
                                    label: "الرئيسية"
                                }, {
                                    href: "/services",
                                    label: "الخدمات"
                                }, {
                                    href: "/projects",
                                    label: "مشاريعنا"
                                }, {
                                    href: "/about",
                                    label: "من نحن"
                                }, {
                                    href: "/blog",
                                    label: "المدونة"
                                }, {
                                    href: "/contact",
                                    label: "اتصل بنا"
                                }].map(e => "/services" === e.href ? (0, s.jsx)(S, {
                                    title: e.label,
                                    basePath: e.href,
                                    services: a || [],
                                    isActive: A(e.href)
                                }, e.href) : (0, s.jsx)(r.default, {
                                    href: e.href,
                                    className: `px-4 py-2 rounded-md text-base font-normal transition-colors ${A(e.href)?"bg-[#070709] border border-[#222227] text-white":"text-[#7E7E81] hover:text-white hover:bg-[#2a2a2a]/50"}`,
                                    children: (0, s.jsx)("span", {
                                        children: e.label
                                    })
                                }, e.href))
                            }), (0, s.jsx)($, {
                                onOpenConsultation: i
                            }), (0, s.jsxs)("div", {
                                className: "flex lg:hidden items-center gap-3 mr-2",
                                children: [p && (0, s.jsx)(r.default, {
                                    href: p,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "cursor-pointer transition-transform hover:scale-110",
                                    "aria-label": "Instagram",
                                    children: (0, s.jsxs)("svg", {
                                        className: "w-6 h-6",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, s.jsx)("rect", {
                                            width: "24",
                                            height: "24",
                                            rx: "6",
                                            fill: "url(#ig_grad_mobile)"
                                        }), (0, s.jsx)("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "5",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }), (0, s.jsx)("path", {
                                            d: "M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z",
                                            stroke: "white",
                                            strokeWidth: "1.5"
                                        }), (0, s.jsx)("circle", {
                                            cx: "17.5",
                                            cy: "6.5",
                                            r: "1.2",
                                            fill: "white"
                                        }), (0, s.jsx)("defs", {
                                            children: (0, s.jsxs)("radialGradient", {
                                                id: "ig_grad_mobile",
                                                cx: "0",
                                                cy: "0",
                                                r: "1",
                                                gradientUnits: "userSpaceOnUse",
                                                gradientTransform: "translate(4 20) rotate(-45) scale(26)",
                                                children: [(0, s.jsx)("stop", {
                                                    stopColor: "#F0C24E"
                                                }), (0, s.jsx)("stop", {
                                                    offset: "0.3",
                                                    stopColor: "#E95B39"
                                                }), (0, s.jsx)("stop", {
                                                    offset: "0.7",
                                                    stopColor: "#CE277D"
                                                }), (0, s.jsx)("stop", {
                                                    offset: "1",
                                                    stopColor: "#4441D2"
                                                })]
                                            })
                                        })]
                                    })
                                }), j && (0, s.jsx)(r.default, {
                                    href: j,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "cursor-pointer transition-transform hover:scale-110",
                                    "aria-label": "YouTube",
                                    children: (0, s.jsxs)("svg", {
                                        className: "w-7 h-7",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, s.jsx)("path", {
                                            d: "M21.58 6.54C21.43 5.96 21.05 5.51 20.47 5.36C18.66 4.88 12 4.88 12 4.88C12 4.88 5.34 4.88 3.53 5.36C2.95 5.51 2.57 5.96 2.42 6.54C1.94 8.35 1.94 12 1.94 12C1.94 12 1.94 15.65 2.42 17.46C2.57 18.04 2.95 18.49 3.53 18.64C5.34 19.12 12 19.12 12 19.12C12 19.12 18.66 19.12 20.47 18.64C21.05 18.49 21.43 18.04 21.58 17.46C22.06 15.65 22.06 12 22.06 12C22.06 12 22.06 8.35 21.58 6.54Z",
                                            fill: "#FF0000"
                                        }), (0, s.jsx)("path", {
                                            d: "M9.99 15.11L15.22 12L9.99 8.88V15.11Z",
                                            fill: "white"
                                        })]
                                    })
                                }), v && (0, s.jsx)(r.default, {
                                    href: v,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "cursor-pointer transition-transform hover:scale-110",
                                    "aria-label": "WhatsApp",
                                    children: (0, s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "#25D366",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, s.jsx)("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                        })
                                    })
                                })]
                            }), (0, s.jsx)("button", {
                                onClick: n,
                                className: "lg:hidden text-gray-300 hover:text-white transition-colors p-2 cursor-pointer",
                                children: o ? (0, s.jsx)(w.X, {
                                    size: 24
                                }) : (0, s.jsx)(g.Menu, {
                                    size: 24
                                })
                            })]
                        })]
                    })
                })
            })
        };
    var W = e.i(463059);
    let O = ({
            title: e,
            items: a,
            basePath: l,
            isOpen: i,
            toggle: o,
            closeMenu: n
        }) => {
            let [c, d] = (0, t.useState)(null);
            return (0, s.jsxs)("div", {
                className: "border-b border-white/5",
                children: [(0, s.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, s.jsx)(r.default, {
                        href: l,
                        onClick: n,
                        className: "flex-1 py-3.5 pl-4 text-sm font-normal text-gray-200 hover:text-[#3DB246] transition-colors",
                        children: (0, s.jsx)("span", {
                            children: e
                        })
                    }), (0, s.jsx)("button", {
                        onClick: o,
                        className: "p-3.5 pr-4 text-gray-500 hover:text-[#3DB246] transition-colors cursor-pointer",
                        children: (0, s.jsx)(E.ChevronDown, {
                            size: 18,
                            className: `transition-transform duration-300 ${i?"rotate-180 text-[#3DB246]":""}`
                        })
                    })]
                }), (0, s.jsx)("div", {
                    className: V(i),
                    children: (0, s.jsxs)("div", {
                        className: "grid grid-cols-1 gap-0.5 px-3 pb-3",
                        children: [(0, s.jsxs)(r.default, {
                            href: l,
                            className: "flex items-center justify-between w-full px-3 py-3 rounded-lg text-xs font-normal text-[#3DB246] bg-green-500/5 border border-green-500/10 mb-1",
                            onClick: n,
                            children: [(0, s.jsxs)("span", {
                                children: ["عرض جميع ", e]
                            }), (0, s.jsx)(W.ChevronRight, {
                                size: 12
                            })]
                        }), a.map((e, t) => (0, s.jsx)("div", {
                            children: e.children && e.children.length > 0 ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, s.jsx)(r.default, {
                                        href: `${l}/${e.slug}`,
                                        onClick: n,
                                        className: "flex-1 px-3 py-2.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-all",
                                        children: (0, s.jsx)("span", {
                                            children: e.label
                                        })
                                    }), (0, s.jsx)("button", {
                                        onClick: () => d(c === e.slug ? null : e.slug),
                                        className: "p-2.5 mr-1 text-gray-600 hover:text-[#3DB246] transition-colors cursor-pointer",
                                        children: (0, s.jsx)(W.ChevronRight, {
                                            size: 14,
                                            className: `transition-transform duration-200 ${c===e.slug?"rotate-90 text-[#3DB246]":""}`
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${c===e.slug?"max-h-[400px] opacity-100":"max-h-0 opacity-0"}`,
                                    children: (0, s.jsxs)("div", {
                                        className: "pl-4 pr-2 py-1 space-y-0.5",
                                        children: [(0, s.jsxs)(r.default, {
                                            href: `${l}/${e.slug}`,
                                            className: "flex items-center px-3 py-2 rounded-md text-[11px] font-normal text-[#3DB246] bg-white/5 mb-1",
                                            onClick: n,
                                            children: [(0, s.jsx)("span", {
                                                className: "w-1 h-1 rounded-full bg-[#3DB246] mr-2.5 shrink-0"
                                            }), (0, s.jsxs)("span", {
                                                children: ["عرض جميع ", e.label]
                                            })]
                                        }), e.children.map((t, a) => (0, s.jsxs)(r.default, {
                                            href: `${l}/${e.slug}/${Y(t)}`,
                                            className: "flex items-center px-3 py-2 rounded-md text-[11px] text-gray-500 hover:text-[#3DB246] hover:bg-white/5 transition-all",
                                            onClick: n,
                                            children: [(0, s.jsx)("span", {
                                                className: "w-1 h-1 rounded-full bg-gray-600 mr-2.5 shrink-0"
                                            }), (0, s.jsx)("span", {
                                                children: t
                                            })]
                                        }, a))]
                                    })
                                })]
                            }) : (0, s.jsx)(r.default, {
                                href: `${l}/${e.slug}`,
                                className: "block px-3 py-2.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-all",
                                onClick: n,
                                children: (0, s.jsx)("span", {
                                    children: e.label
                                })
                            })
                        }, t))]
                    })
                })]
            })
        },
        T = ({
            isMenuOpen: e,
            closeMenu: a,
            categoryTree: l,
            services: i,
            onOpenConsultation: o
        }) => {
            let [n, c] = (0, t.useState)(null);
            return (0, f.usePathname)(), (0, s.jsx)("div", {
                className: `lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${e?"max-h-[85vh] opacity-100 mt-3":"max-h-0 opacity-0 mt-0"}`,
                children: (0, s.jsx)("div", {
                    className: "flex flex-col max-h-[80vh] rounded-2xl bg-[#0D0D11]/95 backdrop-blur-2xl border border-white/10 shadow-2xl",
                    children: (0, s.jsx)("div", {
                        className: "flex-1 overflow-y-auto mobile-menu-scroll px-2 py-4",
                        children: [{
                            href: "/",
                            label: "الرئيسية"
                        }, {
                            href: "/services",
                            label: "الخدمات"
                        }, {
                            href: "/projects",
                            label: "مشاريعنا"
                        }, {
                            href: "/about",
                            label: "من نحن"
                        }, {
                            href: "/blog",
                            label: "المدونة"
                        }, {
                            href: "/contact",
                            label: "اتصل بنا"
                        }].map(e => "/services" === e.href ? (0, s.jsx)("div", {
                            className: "mb-2",
                            children: (0, s.jsx)(O, {
                                title: e.label,
                                items: (i || []).map(e => ({
                                    label: e.service_name,
                                    slug: e.slug
                                })),
                                basePath: "/services",
                                isOpen: "services" === n,
                                toggle: () => c("services" === n ? null : "services"),
                                closeMenu: a
                            })
                        }, e.href) : (0, s.jsx)(r.default, {
                            href: e.href,
                            className: "block px-4 py-3.5 mb-2 rounded-xl text-sm font-normal text-gray-200 hover:text-white hover:bg-white/10 transition-colors",
                            onClick: a,
                            children: (0, s.jsx)("span", {
                                children: e.label
                            })
                        }, e.href))
                    })
                })
            })
        };
    var I = e.i(39793);
    let R = [{
            href: "/offers",
            label: "العروض",
            subLabel: "أحدث الصفقات"
        }, {
            href: "/pre-order",
            label: "الطلب المسبق",
            subLabel: "وصل حديثاً"
        }, {
            href: "/pc-builder",
            label: "استشارة مجانية",
            subLabel: "تقدير فوري"
        }, {
            href: "/compare",
            label: "مقارنة",
            subLabel: "مقارنة المنتجات"
        }],
        H = e => `group relative flex items-center space-x-1.5 transition-all duration-300 ease-in-out cursor-pointer px-4 py-2 rounded-md border border-transparent ${e?"text-[#3DB246] bg-[#2a2a2a] border-[#333333]":"text-gray-300 hover:text-white hover:bg-[#2a2a2a]"}`,
        U = e => `w-full flex items-center justify-between px-4 py-3.5 rounded-md transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98] ${e?"text-white bg-white/10":"text-white hover:bg-white/10"}`,
        V = e => `overflow-hidden transition-all duration-500 ease-in-out ${e?"max-h-[800px] opacity-100":"max-h-0 opacity-0"}`,
        Y = e => e.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "").replace(/&/g, "and"),
        Z = ({
            categoryTree: e,
            services: r
        }) => {
            let [a, l] = (0, t.useState)(!1), [i, o] = (0, t.useState)(null), [n, c] = (0, t.useState)(!1), [d, h] = (0, t.useState)(!1), x = (0, t.useRef)(null);
            return (0, t.useEffect)(() => {
                let e = () => {
                    l(window.scrollY > 50)
                };
                return window.addEventListener("scroll", e, {
                    passive: !0
                }), () => window.removeEventListener("scroll", e)
            }, []), (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("nav", {
                    ref: x,
                    className: "w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
                    children: [(0, s.jsx)(p, {}), (0, s.jsx)(P, {
                        categoryTree: e,
                        services: r,
                        onOpenConsultation: () => h(!0),
                        isMobileMenuOpen: n,
                        onToggleMobileMenu: () => c(!n)
                    }), (0, s.jsx)(T, {
                        isMenuOpen: n,
                        closeMenu: () => c(!1),
                        categoryTree: e,
                        services: r,
                        onOpenConsultation: () => h(!0)
                    })]
                }), (0, s.jsx)(I.default, {
                    isOpen: d,
                    onClose: () => h(!1)
                })]
            })
        }
}, 166735, e => {
    "use strict";
    var s = e.i(843476),
        t = e.i(657688),
        r = e.i(522016),
        a = e.i(138123);
    let l = {
        phone: "+965 6969 0261",
        email: "info@hadadmazallat.com",
        location: "Riyadh, Saudi Arabia",
        facebook_url: "https://facebook.com/hadadmazallat",
        instagram_url: "https://www.instagram.com/haddad_muzallat_kuwait?utm_source=qr",
        whatsapp: "+96569690261",
        youtube_url: "https://youtube.com/@hadadmazallat",
        linkedin_url: "https://linkedin.com/company/hadadmazallat",
        twitter_url: "https://x.com/hadadmazallat"
    };
    e.s(["default", 0, () => {
        let e = new Date().getFullYear(),
            i = e => {
                if (e) return e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`
            },
            o = i(l?.instagram_url),
            n = i(l?.facebook_url),
            c = (e => {
                if (!e) return;
                let s = e.replace(/[^\d+]/g, "");
                return s ? `https://wa.me/${s.replace(/^\+/,"")}` : void 0
            })(l?.whatsapp),
            d = i(l?.pinterest_url || l?.pinterest),
            h = i(l?.youtube_url) || "https://youtube.com",
            x = [...n ? [{
                name: "Facebook",
                href: n,
                icon: (0, s.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    })
                })
            }] : [], ...o ? [{
                name: "Instagram",
                href: o,
                icon: (0, s.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    })
                })
            }] : [], ...d ? [{
                name: "Pinterest",
                href: d,
                icon: (0, s.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                    })
                })
            }] : [], {
                name: "YouTube",
                href: h,
                icon: (0, s.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    })
                })
            }, ...c ? [{
                name: "WhatsApp",
                href: c,
                icon: (0, s.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    })
                })
            }] : []],
            m = l?.phone || "+965 6969 0261",
            p = l?.email || "info@ecowaveconsultantstudio.com";
        return (0, s.jsx)("footer", {
            className: "relative bg-[#1A1A1A] w-full overflow-hidden",
            children: (0, s.jsxs)("div", {
                className: "container mx-auto px-4 md:px-10 sm:px-6 pt-4 pb-1 sm:pt-8 sm:pb-2",
                children: [(0, s.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-2 sm:mb-4",
                    children: [(0, s.jsxs)("div", {
                        className: "space-y-4 w-full lg:max-w-md",
                        children: [(0, s.jsx)(r.default, {
                            href: "/",
                            className: "inline-block",
                            children: (0, s.jsx)(t.default, {
                                src: a.default,
                                alt: "Hadad Mazallat Logo",
                                width: 260,
                                height: 78,
                                className: "h-10 sm:h-12 w-auto object-contain",
                                priority: !0
                            })
                        }), (0, s.jsx)("p", {
                            className: "text-[#A0A0A0] text-sm sm:text-base max-w-md leading-relaxed -mt-3 font-medium",
                            children: "حرفية عالية في الهياكل الخارجية الفاخرة. نحن متخصصون في البرجولات عالية الجودة، المظلات المتحركة، وأنظمة التظليل الذكية المصممة للحياة العصرية."
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-2 sm:gap-3 pt-2",
                            children: [(console.log("Footer - contactInfo:", l), console.log("Footer - instagramUrl:", o), console.log("Footer - facebookUrl:", n), console.log("Footer - socialLinks:", x), console.log("Footer - socialLinks length:", x?.length), null), x?.map(e => (0, s.jsx)(r.default, {
                                href: e.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "bg-[#4CAF50] hover:bg-[#45a049] rounded-full p-2 sm:p-2.5 transition-colors",
                                "aria-label": e.name,
                                children: (0, s.jsx)("div", {
                                    className: "text-white text-sm sm:text-base",
                                    children: e.icon
                                })
                            }, e.name))]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 w-full lg:w-auto",
                        children: [(0, s.jsxs)("div", {
                            className: "space-y-3 sm:space-y-4",
                            children: [(0, s.jsx)("h3", {
                                className: "text-[#4CAF50] text-lg sm:text-xl font-bold",
                                children: "روابط سريعة"
                            }), (0, s.jsx)("ul", {
                                className: "space-y-2 sm:space-y-3",
                                children: [{
                                    href: "/about",
                                    label: "من نحن"
                                }, {
                                    href: "/services",
                                    label: "الخدمات"
                                }, {
                                    href: "/projects",
                                    label: "معرض الأعمال"
                                }, {
                                    href: "/contact",
                                    label: "اتصل بنا"
                                }].map(e => (0, s.jsx)("li", {
                                    children: (0, s.jsx)(r.default, {
                                        href: e.href,
                                        className: "text-[#A0A0A0] hover:text-[#4CAF50] transition-colors text-sm sm:text-base font-medium",
                                        children: e.label
                                    })
                                }, e.href))
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-3 sm:space-y-4",
                            children: [(0, s.jsx)("h3", {
                                className: "text-[#4CAF50] text-lg sm:text-xl font-bold",
                                children: "تواصل معنا"
                            }), (0, s.jsxs)("div", {
                                className: "space-y-2 sm:space-y-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-[#A0A0A0] text-sm sm:text-base break-words font-medium",
                                    children: (0, s.jsx)("span", {
                                        dir: "ltr",
                                        children: m
                                    })
                                }), (0, s.jsx)("p", {
                                    className: "text-[#A0A0A0] text-sm sm:text-base break-words font-medium",
                                    children: p
                                })]
                            })]
                        })]
                    })]
                }), (0, s.jsx)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-2 sm:mb-2",
                    children: ["/images/footer/Banner 1.webp", "/images/footer/Banner 2.webp", "/images/footer/Banner 3.webp", "/images/footer/Banner 4.webp"].map((e, r) => (0, s.jsx)("div", {
                        className: "relative w-full aspect-[4/3] rounded overflow-hidden bg-gray-800",
                        children: (0, s.jsx)(t.default, {
                            src: e,
                            alt: `Gallery image ${r+1}`,
                            fill: !0,
                            className: "object-cover",
                            unoptimized: !0
                        })
                    }, r))
                }), (0, s.jsx)("div", {
                    className: "text-center border-t border-[#3C3C3C] pt-1 mt-1",
                    children: (0, s.jsxs)("p", {
                        className: "text-[#4CAF50] text-sm sm:text-base px-2 font-medium",
                        children: ["© ", e, " حداد الكويت. جميع الحقوق محفوظة."]
                    })
                })]
            })
        })
    }], 166735)
}]);