(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 201928, e => {
    "use strict";
    let t = (0, e.i(475254).default)("shopping-cart", [
        ["circle", {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }],
        ["circle", {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }],
        ["path", {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }]
    ]);
    e.s(["ShoppingCart", () => t], 201928)
}, 503116, e => {
    "use strict";
    let t = (0, e.i(475254).default)("clock", [
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ]);
    e.s(["Clock", () => t], 503116)
}, 112414, e => {
    "use strict";
    var t = e.i(652749);

    function r(e) {
        if (!e) return "";
        if (e.startsWith("http://") || e.startsWith("https://")) return e;
        let r = (e.startsWith("/") ? e : `/${e}`).split("/").map((e, t) => 0 === t && "" === e ? "" : encodeURIComponent(e)).join("/"),
            a = (0, t.getBackendBaseUrl)();
        return `${a}${r}`
    }

    function a(e) {
        return !!e && (!(!(e.startsWith("http://") || e.startsWith("https://")) || e.startsWith("https://server.haddadkuwait.com")) || !1)
    }
    e.s(["getImageUrl", () => r, "shouldUnoptimizeImage", () => a])
}, 310542, 591994, e => {
    "use strict";
    let t, r;
    var a = e.i(486427),
        i = e.i(965566),
        n = e.i(271645),
        s = e.i(260830),
        l = e.i(287022);

    function o(e, t) {
        let r, a = () => {
            let {
                currentTime: a
            } = t, i = (null === a ? 0 : a.value) / 100;
            r !== i && e(i), r = i
        };
        return l.frame.preUpdate(a, !0), () => (0, l.cancelFrame)(a)
    }
    var c = e.i(930551),
        d = e.i(889026),
        f = e.i(749652);
    let m = new WeakMap,
        h = (e, t, r) => (a, i) => i && i[0] ? i[0][e + "Size"] : (0, d.isSVGElement)(a) && "getBBox" in a ? a.getBBox()[t] : a[r],
        u = h("inline", "width", "offsetWidth"),
        g = h("block", "height", "offsetHeight");

    function x({
        target: e,
        borderBoxSize: t
    }) {
        m.get(e)?.forEach(r => {
            r(e, {
                get width() {
                    return u(e, t)
                },
                get height() {
                    return g(e, t)
                }
            })
        })
    }

    function p(e) {
        e.forEach(x)
    }
    let b = new Set;
    var v = e.i(783920),
        w = e.i(325791);
    let y = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        j = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function k(e, t, r, a) {
        let i = r[t],
            {
                length: n,
                position: s
            } = j[t],
            l = i.current,
            o = r.time;
        i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${n}`] - e[`client${n}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, v.progress)(0, i.scrollLength, i.current);
        let c = a - o;
        i.velocity = c > 50 ? 0 : (0, w.velocityPerSecond)(i.current - l, c)
    }
    e.i(247167);
    var N = e.i(344230),
        E = e.i(515923),
        S = e.i(476959),
        C = e.i(772846);
    let B = {
        start: 0,
        center: .5,
        end: 1
    };

    function L(e, t, r = 0) {
        let a = 0;
        if (e in B && (e = B[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? a = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? a = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? a = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (a = t * e), r + a
    }
    let W = [0, 0],
        z = [
            [0, 0],
            [1, 1]
        ],
        M = {
            x: 0,
            y: 0
        },
        T = new WeakMap,
        D = new WeakMap,
        H = new WeakMap,
        O = e => e === document.scrollingElement ? window : e;

    function V(e, {
        container: a = document.scrollingElement,
        ...i
    } = {}) {
        if (!a) return s.noop;
        let n = H.get(a);
        n || (n = new Set, H.set(a, n));
        let o = function(e, t, r, a = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let a = t;
                            for (; a && a !== e;) r.x.targetOffset += a.offsetLeft, r.y.targetOffset += a.offsetTop, a = a.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, a.target, r), k(e, "x", r, t), k(e, "y", r, t), r.time = t, (a.offset || a.target) && function(e, t, r) {
                        let {
                            offset: a = z
                        } = r, {
                            target: i = e,
                            axis: n = "y"
                        } = r, s = "y" === n ? "height" : "width", l = i !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                a = e;
                            for (; a && a !== t;)
                                if ((0, C.isHTMLElement)(a)) r.x += a.offsetLeft, r.y += a.offsetTop, a = a.offsetParent;
                                else if ("svg" === a.tagName) {
                                let e = a.getBoundingClientRect(),
                                    t = (a = a.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (a instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = a.getBBox();
                                r.x += e, r.y += t;
                                let i = null,
                                    n = a.parentNode;
                                for (; !i;) "svg" === n.tagName && (i = n), n = a.parentNode;
                                a = i
                            } else break;
                            return r
                        }(i, e) : M, o = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, c = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[n].offset.length = 0;
                        let d = !t[n].interpolate,
                            f = a.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, a) {
                                let i = Array.isArray(e) ? e : W,
                                    n = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, B[e] ? e : "0"]), (n = L(i[0], r, a)) - L(i[1], t)
                            }(a[e], c[s], o[s], l[n]);
                            d || r === t[n].interpolatorOffsets[e] || (d = !0), t[n].offset[e] = r
                        }
                        d && (t[n].interpolate = (0, N.interpolate)(t[n].offset, (0, E.defaultOffset)(a), {
                            clamp: !1
                        }), t[n].interpolatorOffsets = [...t[n].offset]), t[n].progress = (0, S.clamp)(0, 1, t[n].interpolate(t[n].current))
                    }(e, r, a)
                },
                notify: () => t(r)
            }
        }(a, e, {
            time: 0,
            x: y(),
            y: y()
        }, i);
        if (n.add(o), !T.has(a)) {
            let e, i = () => {
                    for (let e of n) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(s)
                },
                s = () => {
                    for (let e of n) e.notify()
                },
                o = () => l.frame.read(i);
            T.set(a, o);
            let c = O(a);
            window.addEventListener("resize", o, {
                passive: !0
            }), a !== document.documentElement && D.set(a, "function" == typeof a ? (b.add(a), r || (r = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                b.forEach(t => t(e))
            }, window.addEventListener("resize", r)), () => {
                b.delete(a), b.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (t || "undefined" != typeof ResizeObserver && (t = new ResizeObserver(p)), (e = (0, f.resolveElements)(a)).forEach(e => {
                let r = m.get(e);
                r || (r = new Set, m.set(e, r)), r.add(o), t?.observe(e)
            }), () => {
                e.forEach(e => {
                    let r = m.get(e);
                    r?.delete(o), r?.size || t?.unobserve(e)
                })
            })), c.addEventListener("scroll", o, {
                passive: !0
            }), o()
        }
        let c = T.get(a);
        return l.frame.read(c, !1, !0), () => {
            (0, l.cancelFrame)(c);
            let e = H.get(a);
            if (!e || (e.delete(o), e.size)) return;
            let t = T.get(a);
            T.delete(a), t && (O(a).removeEventListener("scroll", t), D.get(a)?.(), window.removeEventListener("resize", t))
        }
    }
    let R = new Map;

    function P({
        source: e,
        container: t,
        ...r
    }) {
        var a;
        let i, n, {
            axis: s
        } = r;
        e && (t = e);
        let l = R.get(t) ?? new Map;
        R.set(t, l);
        let o = r.target ?? "self",
            d = l.get(o) ?? {},
            f = s + (r.offset ?? []).join(",");
        return d[f] || (d[f] = !r.target && (0, c.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: s
        }) : (a = {
            container: t,
            ...r
        }, i = {
            value: 0
        }, n = V(e => {
            i.value = 100 * e[a.axis].progress
        }, a), {
            currentTime: i,
            cancel: n
        })), d[f]
    }
    var A = e.i(947414),
        I = e.i(674008);
    let U = () => ({
            scrollX: (0, a.motionValue)(0),
            scrollY: (0, a.motionValue)(0),
            scrollXProgress: (0, a.motionValue)(0),
            scrollYProgress: (0, a.motionValue)(0)
        }),
        $ = e => !!e && !e.current;

    function F({
        container: e,
        target: t,
        ...r
    } = {}) {
        let a = (0, A.useConstant)(U),
            l = (0, n.useRef)(null),
            c = (0, n.useRef)(!1),
            d = (0, n.useCallback)(() => (l.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...a
            } = {}) {
                var i, n;
                let l;
                if (!r) return s.noop;
                let c = {
                    axis: t,
                    container: r,
                    ...a
                };
                return "function" == typeof e ? (i = e, n = c, 2 === i.length ? V(e => {
                    i(e[n.axis].progress, e)
                }, n) : o(i, P(n))) : (l = P(c), e.attachTimeline({
                    timeline: c.target ? void 0 : l,
                    observe: e => (e.pause(), o(t => {
                        e.time = e.iterationDuration * t
                    }, l))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                a.scrollX.set(t.current), a.scrollXProgress.set(t.progress), a.scrollY.set(r.current), a.scrollYProgress.set(r.progress)
            }, {
                ...r,
                container: e?.current || void 0,
                target: t?.current || void 0
            }), () => {
                l.current?.()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, I.useIsomorphicLayoutEffect)(() => {
            if (c.current = !1, !($(e) || $(t))) return d();
            c.current = !0
        }, [d]), (0, n.useEffect)(() => c.current ? ((0, i.invariant)(!$(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!$(t), "Target ref is defined but not hydrated", "use-scroll-ref"), d()) : void 0, [d]), a
    }
    e.s(["useScroll", () => F], 310542);
    var q = e.i(83352),
        X = e.i(83411);

    function _(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var Y = e.i(737806);

    function G(e) {
        let t = (0, A.useConstant)(() => (0, a.motionValue)(e)),
            {
                isStatic: r
            } = (0, n.useContext)(Y.MotionConfigContext);
        if (r) {
            let [, r] = (0, n.useState)(e);
            (0, n.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function J(e, t) {
        let r = G(t()),
            a = () => r.set(t());
        return a(), (0, I.useIsomorphicLayoutEffect)(() => {
            let t = () => l.frame.preRender(a, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, l.cancelFrame)(a)
            }
        }), r
    }

    function K(e, t) {
        let r = (0, A.useConstant)(() => []);
        return J(e, () => {
            r.length = 0;
            let a = e.length;
            for (let t = 0; t < a; t++) r[t] = e[t].get();
            return t(r)
        })
    }

    function Q(e, t = {}) {
        let {
            isStatic: r
        } = (0, n.useContext)(Y.MotionConfigContext), i = () => (0, X.isMotionValue)(e) ? e.get() : e;
        if (r) return function(e, t, r, i) {
            if ("function" == typeof e) {
                let t;
                return a.collectMotionValues.current = [], e(), t = J(a.collectMotionValues.current, e), a.collectMotionValues.current = void 0, t
            }
            let n = function(...e) {
                let t = !Array.isArray(e[0]),
                    r = t ? 0 : -1,
                    a = e[0 + r],
                    i = e[1 + r],
                    n = e[2 + r],
                    s = e[3 + r],
                    l = (0, N.interpolate)(i, n, s);
                return t ? l(a) : l
            }(void 0, void 0, void 0);
            return Array.isArray(e) ? K(e, n) : K([e], ([e]) => n(e))
        }(i);
        let s = G(i());
        return (0, n.useInsertionEffect)(() => (function(e, t, r) {
            let a, i = e.get(),
                n = null,
                s = i,
                o = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
                c = () => {
                    n && (n.stop(), n = null)
                },
                d = () => {
                    c(), n = new q.JSAnimation({
                        keyframes: [_(e.get()), _(s)],
                        velocity: e.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...r,
                        onUpdate: a
                    })
                };
            if (e.attach((e, t) => {
                    s = e, a = e => {
                        var r, a;
                        return t((r = e, (a = o) ? r + a : r))
                    }, l.frame.postRender(d)
                }, c), (0, X.isMotionValue)(t)) {
                let r = t.on("change", t => {
                        var r, a;
                        return e.set((r = t, (a = o) ? r + a : r))
                    }),
                    a = e.on("destroy", r);
                return () => {
                    r(), a()
                }
            }
            return c
        })(s, e, t), [s, JSON.stringify(t)]), s
    }
    e.s(["useSpring", () => Q], 591994)
}, 662031, e => {
    "use strict";
    let t = (0, e.i(475254).default)("share-2", [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ]);
    e.s(["Share2", () => t], 662031)
}, 271709, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(437902),
        a = e.i(657688),
        i = e.i(503116),
        n = e.i(662031),
        s = e.i(201928),
        l = e.i(463059),
        o = e.i(618566);
    e.i(64107);
    var c = e.i(932006),
        d = e.i(846932),
        f = e.i(310542),
        m = e.i(591994),
        h = e.i(424154),
        u = e.i(522016),
        g = e.i(271645),
        x = e.i(366977),
        p = e.i(112414);
    e.s(["default", 0, ({
        blog: e
    }) => {
        (0, o.useRouter)();
        let [b, v] = (0, g.useState)(!1), {
            scrollYProgress: w
        } = (0, f.useScroll)(), y = (0, m.useSpring)(w, {
            stiffness: 100,
            damping: 30,
            restDelta: .001
        }), [j, k] = (0, g.useState)(!1), N = async () => {
            let t = {
                title: e.title,
                text: e.excerpt || `Check out this insight: ${e.title}`,
                url: window.location.href
            };
            if (navigator.share) try {
                await navigator.share(t);
                return
            } catch (e) {
                console.log("Error sharing:", e)
            }
            k(!0)
        };
        (0, g.useEffect)(() => {
            v(!0)
        }, []);
        let E = b ? h.default.sanitize(e.content) : "";
        return (0, t.jsxs)("section", {
            className: "jsx-4473aaae01bde86c w-full min-h-screen bg-white",
            children: [(0, t.jsx)(d.motion.div, {
                className: "fixed top-0 left-0 right-0 h-1.5 bg-[#3DB246] origin-left z-100",
                style: {
                    scaleX: y
                }
            }), (0, t.jsxs)("header", {
                className: "jsx-4473aaae01bde86c relative w-full h-[35vh] min-h-[300px] flex items-end pb-10 overflow-hidden",
                children: [(0, t.jsx)(a.default, {
                    src: (e.image ? (0, p.getImageUrl)(e.image) : null) || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
                    alt: e.title,
                    fill: !0,
                    className: "object-cover",
                    priority: !0
                }), (0, t.jsx)("div", {
                    className: "jsx-4473aaae01bde86c absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-0"
                }), (0, t.jsx)("div", {
                    className: "jsx-4473aaae01bde86c container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: (0, t.jsxs)(d.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "max-w-4xl",
                        children: [(0, t.jsxs)("div", {
                            className: "jsx-4473aaae01bde86c flex flex-wrap items-center gap-4 mb-6",
                            children: [(0, t.jsx)("span", {
                                className: "jsx-4473aaae01bde86c px-4 py-1.5 bg-[#3DB246] text-white text-[11px] font-black uppercase tracking-[0.15em] rounded-md shadow-lg shadow-green-600/20",
                                children: e.category
                            }), (0, t.jsxs)("div", {
                                className: "jsx-4473aaae01bde86c flex items-center gap-2 text-white/90 text-[11px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md",
                                children: [(0, t.jsx)(i.Clock, {
                                    className: "w-3.5 h-3.5"
                                }), (0, t.jsx)("span", {
                                    className: "jsx-4473aaae01bde86c",
                                    children: e.readingTime || "8 min read"
                                })]
                            })]
                        }), (0, t.jsx)("h1", {
                            className: "jsx-4473aaae01bde86c text-2xl md:text-4xl lg:text-4xl font-black text-white leading-[1.2] tracking-tight mb-8",
                            children: e.title
                        }), (0, t.jsx)("div", {
                            className: "jsx-4473aaae01bde86c flex items-center gap-6",
                            children: (0, t.jsxs)("div", {
                                className: "jsx-4473aaae01bde86c flex items-center gap-3",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-4473aaae01bde86c w-11 h-11 rounded-full bg-[#3DB246] border-2 border-white/20 flex items-center justify-center text-white text-base font-black shadow-lg",
                                    children: e.author?.[0] || "F"
                                }), (0, t.jsxs)("div", {
                                    className: "jsx-4473aaae01bde86c",
                                    children: [(0, t.jsx)("p", {
                                        className: "jsx-4473aaae01bde86c text-xs md:text-sm font-black text-white uppercase tracking-widest",
                                        children: e.author || "Haddad Kuwait Team"
                                    }), (0, t.jsx)("p", {
                                        className: "jsx-4473aaae01bde86c text-[10px] font-bold text-white/70 uppercase tracking-widest",
                                        children: (0, c.formatDateFromString)(e.createdAt)
                                    })]
                                })]
                            })
                        })]
                    })
                })]
            }), (0, t.jsx)("div", {
                className: "jsx-4473aaae01bde86c container mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: (0, t.jsxs)("div", {
                    className: "jsx-4473aaae01bde86c flex flex-col lg:flex-row gap-16",
                    children: [(0, t.jsxs)("main", {
                        className: "jsx-4473aaae01bde86c lg:w-[65%]",
                        children: [(0, t.jsx)("div", {
                            className: "jsx-4473aaae01bde86c mb-12",
                            children: (0, t.jsx)("p", {
                                className: "jsx-4473aaae01bde86c text-xl md:text-2xl font-bold text-gray-700 italic leading-relaxed border-l-8 border-[#3DB246] pl-8 bg-green-50/50 py-6 rounded-r-2xl",
                                children: e.excerpt || "Innovative strategies gathered from years of industry expertise to help you build a resilient business infrastructure."
                            })
                        }), (0, t.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: E
                            },
                            className: "jsx-4473aaae01bde86c premium-content mt-12 pb-20 border-b border-gray-100 mb-12"
                        }), (0, t.jsxs)("div", {
                            className: "jsx-4473aaae01bde86c flex flex-col sm:flex-row items-center justify-between gap-8 py-12 bg-gray-900 rounded-[2.5rem] px-10 mb-20 text-white shadow-2xl",
                            children: [(0, t.jsxs)("div", {
                                className: "jsx-4473aaae01bde86c text-center sm:text-left",
                                children: [(0, t.jsx)("h4", {
                                    className: "jsx-4473aaae01bde86c text-xl font-black mb-2 tracking-tight",
                                    children: "Found this insight valuable?"
                                }), (0, t.jsx)("p", {
                                    className: "jsx-4473aaae01bde86c text-xs text-white/50 font-bold uppercase tracking-[0.2em]",
                                    children: "Share the knowledge with your network."
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "jsx-4473aaae01bde86c flex items-center gap-4",
                                children: [
                                    [{
                                        name: "X",
                                        icon: "𝕏",
                                        color: "bg-white text-black"
                                    }, {
                                        name: "LinkedIn",
                                        icon: "in",
                                        color: "bg-[#0077b5]"
                                    }, {
                                        name: "Facebook",
                                        icon: "f",
                                        color: "bg-[#1877f2]"
                                    }].map(e => (0, t.jsx)("button", {
                                        onClick: N,
                                        className: `jsx-4473aaae01bde86c w-12 h-12 ${e.color} rounded-xl flex items-center justify-center font-black text-lg transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer`,
                                        children: e.icon
                                    }, e.name)), (0, t.jsx)("button", {
                                        onClick: N,
                                        className: "jsx-4473aaae01bde86c w-12 h-12 bg-white/10 text-white border border-white/10 rounded-xl flex items-center justify-center transition-all hover:bg-white/20 cursor-pointer",
                                        children: (0, t.jsx)(n.Share2, {
                                            className: "w-5 h-5"
                                        })
                                    })
                                ]
                            })]
                        }), e.tags && e.tags.length > 0 && (0, t.jsx)("div", {
                            className: "jsx-4473aaae01bde86c mt-20 pt-12 border-t border-gray-100 flex flex-wrap gap-4",
                            children: e.tags.map((e, r) => (0, t.jsxs)("span", {
                                className: "jsx-4473aaae01bde86c px-6 py-3 bg-gray-100 text-gray-700 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#3DB246] hover:text-white transition-all cursor-pointer shadow-sm",
                                children: ["#", e]
                            }, r))
                        })]
                    }), (0, t.jsx)("aside", {
                        className: "jsx-4473aaae01bde86c lg:w-[35%]",
                        children: (0, t.jsx)("div", {
                            className: "jsx-4473aaae01bde86c sticky top-28 space-y-10",
                            children: e.relatedProducts && e.relatedProducts.length > 0 && (0, t.jsxs)("div", {
                                className: "jsx-4473aaae01bde86c bg-[#050C1D] rounded-3xl p-8 text-white overflow-hidden relative shadow-2xl border border-white/5",
                                children: [(0, t.jsx)("div", {
                                    className: "jsx-4473aaae01bde86c absolute -top-10 -right-10 p-4 opacity-[0.03]",
                                    children: (0, t.jsx)(s.ShoppingCart, {
                                        className: "w-64 h-64 rotate-12"
                                    })
                                }), (0, t.jsxs)("h3", {
                                    className: "jsx-4473aaae01bde86c text-2xl font-black uppercase tracking-tighter mb-8 border-b border-white/10 pb-6 flex items-center gap-3",
                                    children: [(0, t.jsx)("span", {
                                        className: "jsx-4473aaae01bde86c text-[#3DB246]",
                                        children: "⚡"
                                    }), "Shop the Tech"]
                                }), (0, t.jsx)("div", {
                                    className: "jsx-4473aaae01bde86c space-y-6",
                                    children: e.relatedProducts.map(e => (0, t.jsx)(d.motion.div, {
                                        whileHover: {
                                            x: 8
                                        },
                                        className: "group bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all cursor-pointer shadow-lg",
                                        children: (0, t.jsxs)(u.default, {
                                            href: `/product/${e.slug}`,
                                            className: "flex gap-5",
                                            children: [(0, t.jsx)("div", {
                                                className: "jsx-4473aaae01bde86c relative w-24 h-24 shrink-0 rounded-xl overflow-hidden shadow-2xl bg-white/5",
                                                children: (0, t.jsx)(a.default, {
                                                    src: (e.gallery_images?.[0] ? (0, p.getImageUrl)(e.gallery_images[0]) : null) || "https://via.placeholder.com/200",
                                                    alt: e.name,
                                                    fill: !0,
                                                    className: "object-cover group-hover:scale-110 transition-transform duration-500"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "jsx-4473aaae01bde86c flex flex-col justify-center min-w-0",
                                                children: [(0, t.jsx)("h4", {
                                                    className: "jsx-4473aaae01bde86c font-bold text-base truncate mb-2 group-hover:text-[#3DB246] transition-colors",
                                                    children: e.name
                                                }), (0, t.jsxs)("div", {
                                                    className: "jsx-4473aaae01bde86c flex items-center gap-4",
                                                    children: [(0, t.jsxs)("p", {
                                                        className: "jsx-4473aaae01bde86c text-[#3DB246] font-black text-lg",
                                                        children: ["$", e.price]
                                                    }), (0, t.jsxs)("span", {
                                                        className: "jsx-4473aaae01bde86c text-[10px] uppercase font-black tracking-widest text-white/40 group-hover:text-white flex items-center gap-1.5 transition-colors",
                                                        children: ["View Details", (0, t.jsx)(l.ChevronRight, {
                                                            className: "w-3.5 h-3.5"
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    }, e._id))
                                })]
                            })
                        })
                    })]
                })
            }), (0, t.jsx)(r.default, {
                id: "4473aaae01bde86c",
                children: '.premium-content{color:#2d3748;font-family:inherit;font-size:1.25rem;line-height:2}.premium-content h1,.premium-content h2,.premium-content h3{color:#111827;letter-spacing:-.025em;margin-top:4rem;margin-bottom:2rem;font-weight:900;line-height:1.2}.premium-content h2{border-bottom:4px solid #e8f5e9;padding-bottom:.5rem;font-size:2.25rem;display:inline-block}.premium-content h3{font-size:1.75rem}.premium-content p{margin-bottom:2rem}.premium-content img{border-radius:2.5rem;margin:3.5rem 0;box-shadow:0 25px 50px -12px #00000026}.premium-content ul{background:#f1fcf2;border:1px solid #e8f5e9;border-radius:2rem;margin-bottom:2.5rem;padding:2rem;list-style-type:none}.premium-content li{margin-bottom:1rem;padding-left:2rem;font-weight:500;position:relative}.premium-content li:before{content:"→";color:#3db246;font-weight:900;position:absolute;left:0}.premium-content blockquote{background-color:#111827;border-radius:2.5rem;margin:4rem 0;padding:3.5rem;position:relative}.premium-content blockquote p{color:#fff;letter-spacing:-.02em;margin-bottom:0;font-size:1.75rem;font-style:italic;font-weight:900;line-height:1.4}.premium-content blockquote:after{content:"\\"";color:#ffffff1a;font-family:serif;font-size:8rem;position:absolute;top:1rem;right:3rem}'
            }), (0, t.jsx)(x.default, {
                isOpen: j,
                onClose: () => k(!1),
                url: window.location.href,
                title: e.title,
                subject: "Article"
            })]
        })
    }])
}]);