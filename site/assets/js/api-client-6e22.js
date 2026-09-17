(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 112414, e => {
    "use strict";
    var t = e.i(652749);

    function r(e) {
        if (!e) return "";
        if (e.startsWith("http://") || e.startsWith("https://")) return e;
        let r = (e.startsWith("/") ? e : `/${e}`).split("/").map((e, t) => 0 === t && "" === e ? "" : encodeURIComponent(e)).join("/"),
            n = (0, t.getBackendBaseUrl)();
        return `${n}${r}`
    }

    function n(e) {
        return !!e && (!(!(e.startsWith("http://") || e.startsWith("https://")) || e.startsWith("https://server.haddadkuwait.com")) || !1)
    }
    e.s(["getImageUrl", () => r, "shouldUnoptimizeImage", () => n])
}, 871689, e => {
    "use strict";
    let t = (0, e.i(475254).default)("arrow-left", [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ]);
    e.s(["ArrowLeft", () => t], 871689)
}, 310542, 591994, e => {
    "use strict";
    let t, r;
    var n = e.i(486427),
        i = e.i(965566),
        o = e.i(271645),
        s = e.i(260830),
        l = e.i(287022);

    function a(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, i = (null === n ? 0 : n.value) / 100;
            r !== i && e(i), r = i
        };
        return l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n)
    }
    var c = e.i(930551),
        f = e.i(889026),
        d = e.i(749652);
    let u = new WeakMap,
        m = (e, t, r) => (n, i) => i && i[0] ? i[0][e + "Size"] : (0, f.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
        g = m("inline", "width", "offsetWidth"),
        p = m("block", "height", "offsetHeight");

    function h({
        target: e,
        borderBoxSize: t
    }) {
        u.get(e)?.forEach(r => {
            r(e, {
                get width() {
                    return g(e, t)
                },
                get height() {
                    return p(e, t)
                }
            })
        })
    }

    function x(e) {
        e.forEach(h)
    }
    let b = new Set;
    var v = e.i(783920),
        y = e.i(325791);
    let w = () => ({
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

    function E(e, t, r, n) {
        let i = r[t],
            {
                length: o,
                position: s
            } = j[t],
            l = i.current,
            a = r.time;
        i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, v.progress)(0, i.scrollLength, i.current);
        let c = n - a;
        i.velocity = c > 50 ? 0 : (0, y.velocityPerSecond)(i.current - l, c)
    }
    e.i(247167);
    var k = e.i(344230),
        L = e.i(515923),
        N = e.i(476959),
        W = e.i(772846);
    let S = {
        start: 0,
        center: .5,
        end: 1
    };

    function z(e, t, r = 0) {
        let n = 0;
        if (e in S && (e = S[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let B = [0, 0],
        C = [
            [0, 0],
            [1, 1]
        ],
        M = {
            x: 0,
            y: 0
        },
        O = new WeakMap,
        H = new WeakMap,
        T = new WeakMap,
        V = e => e === document.scrollingElement ? window : e;

    function R(e, {
        container: n = document.scrollingElement,
        ...i
    } = {}) {
        if (!n) return s.noop;
        let o = T.get(n);
        o || (o = new Set, T.set(n, o));
        let a = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), E(e, "x", r, t), E(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = C
                        } = r, {
                            target: i = e,
                            axis: o = "y"
                        } = r, s = "y" === o ? "height" : "width", l = i !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, W.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let i = null,
                                    o = n.parentNode;
                                for (; !i;) "svg" === o.tagName && (i = o), o = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, e) : M, a = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, c = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let f = !t[o].interpolate,
                            d = n.length;
                        for (let e = 0; e < d; e++) {
                            let r = function(e, t, r, n) {
                                let i = Array.isArray(e) ? e : B,
                                    o = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, S[e] ? e : "0"]), (o = z(i[0], r, n)) - z(i[1], t)
                            }(n[e], c[s], a[s], l[o]);
                            f || r === t[o].interpolatorOffsets[e] || (f = !0), t[o].offset[e] = r
                        }
                        f && (t[o].interpolate = (0, k.interpolate)(t[o].offset, (0, L.defaultOffset)(n), {
                            clamp: !1
                        }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, N.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: w(),
            y: w()
        }, i);
        if (o.add(a), !O.has(n)) {
            let e, i = () => {
                    for (let e of o) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(s)
                },
                s = () => {
                    for (let e of o) e.notify()
                },
                a = () => l.frame.read(i);
            O.set(n, a);
            let c = V(n);
            window.addEventListener("resize", a, {
                passive: !0
            }), n !== document.documentElement && H.set(n, "function" == typeof n ? (b.add(n), r || (r = () => {
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
                b.delete(n), b.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (t || "undefined" != typeof ResizeObserver && (t = new ResizeObserver(x)), (e = (0, d.resolveElements)(n)).forEach(e => {
                let r = u.get(e);
                r || (r = new Set, u.set(e, r)), r.add(a), t?.observe(e)
            }), () => {
                e.forEach(e => {
                    let r = u.get(e);
                    r?.delete(a), r?.size || t?.unobserve(e)
                })
            })), c.addEventListener("scroll", a, {
                passive: !0
            }), a()
        }
        let c = O.get(n);
        return l.frame.read(c, !1, !0), () => {
            (0, l.cancelFrame)(c);
            let e = T.get(n);
            if (!e || (e.delete(a), e.size)) return;
            let t = O.get(n);
            O.delete(n), t && (V(n).removeEventListener("scroll", t), H.get(n)?.(), window.removeEventListener("resize", t))
        }
    }
    let A = new Map;

    function U({
        source: e,
        container: t,
        ...r
    }) {
        var n;
        let i, o, {
            axis: s
        } = r;
        e && (t = e);
        let l = A.get(t) ?? new Map;
        A.set(t, l);
        let a = r.target ?? "self",
            f = l.get(a) ?? {},
            d = s + (r.offset ?? []).join(",");
        return f[d] || (f[d] = !r.target && (0, c.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: s
        }) : (n = {
            container: t,
            ...r
        }, i = {
            value: 0
        }, o = R(e => {
            i.value = 100 * e[n.axis].progress
        }, n), {
            currentTime: i,
            cancel: o
        })), f[d]
    }
    var P = e.i(947414),
        I = e.i(674008);
    let _ = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        D = e => !!e && !e.current;

    function F({
        container: e,
        target: t,
        ...r
    } = {}) {
        let n = (0, P.useConstant)(_),
            l = (0, o.useRef)(null),
            c = (0, o.useRef)(!1),
            f = (0, o.useCallback)(() => (l.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...n
            } = {}) {
                var i, o;
                let l;
                if (!r) return s.noop;
                let c = {
                    axis: t,
                    container: r,
                    ...n
                };
                return "function" == typeof e ? (i = e, o = c, 2 === i.length ? R(e => {
                    i(e[o.axis].progress, e)
                }, o) : a(i, U(o))) : (l = U(c), e.attachTimeline({
                    timeline: c.target ? void 0 : l,
                    observe: e => (e.pause(), a(t => {
                        e.time = e.iterationDuration * t
                    }, l))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                n.scrollX.set(t.current), n.scrollXProgress.set(t.progress), n.scrollY.set(r.current), n.scrollYProgress.set(r.progress)
            }, {
                ...r,
                container: e?.current || void 0,
                target: t?.current || void 0
            }), () => {
                l.current?.()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, I.useIsomorphicLayoutEffect)(() => {
            if (c.current = !1, !(D(e) || D(t))) return f();
            c.current = !0
        }, [f]), (0, o.useEffect)(() => c.current ? ((0, i.invariant)(!D(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!D(t), "Target ref is defined but not hydrated", "use-scroll-ref"), f()) : void 0, [f]), n
    }
    e.s(["useScroll", () => F], 310542);
    var $ = e.i(83352),
        q = e.i(83411);

    function X(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var Y = e.i(737806);

    function G(e) {
        let t = (0, P.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, o.useContext)(Y.MotionConfigContext);
        if (r) {
            let [, r] = (0, o.useState)(e);
            (0, o.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function J(e, t) {
        let r = G(t()),
            n = () => r.set(t());
        return n(), (0, I.useIsomorphicLayoutEffect)(() => {
            let t = () => l.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, l.cancelFrame)(n)
            }
        }), r
    }

    function K(e, t) {
        let r = (0, P.useConstant)(() => []);
        return J(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }

    function Q(e, t = {}) {
        let {
            isStatic: r
        } = (0, o.useContext)(Y.MotionConfigContext), i = () => (0, q.isMotionValue)(e) ? e.get() : e;
        if (r) return function(e, t, r, i) {
            if ("function" == typeof e) {
                let t;
                return n.collectMotionValues.current = [], e(), t = J(n.collectMotionValues.current, e), n.collectMotionValues.current = void 0, t
            }
            let o = function(...e) {
                let t = !Array.isArray(e[0]),
                    r = t ? 0 : -1,
                    n = e[0 + r],
                    i = e[1 + r],
                    o = e[2 + r],
                    s = e[3 + r],
                    l = (0, k.interpolate)(i, o, s);
                return t ? l(n) : l
            }(void 0, void 0, void 0);
            return Array.isArray(e) ? K(e, o) : K([e], ([e]) => o(e))
        }(i);
        let s = G(i());
        return (0, o.useInsertionEffect)(() => (function(e, t, r) {
            let n, i = e.get(),
                o = null,
                s = i,
                a = "string" == typeof i ? i.replace(/[\d.-]/g, "") : void 0,
                c = () => {
                    o && (o.stop(), o = null)
                },
                f = () => {
                    c(), o = new $.JSAnimation({
                        keyframes: [X(e.get()), X(s)],
                        velocity: e.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...r,
                        onUpdate: n
                    })
                };
            if (e.attach((e, t) => {
                    s = e, n = e => {
                        var r, n;
                        return t((r = e, (n = a) ? r + n : r))
                    }, l.frame.postRender(f)
                }, c), (0, q.isMotionValue)(t)) {
                let r = t.on("change", t => {
                        var r, n;
                        return e.set((r = t, (n = a) ? r + n : r))
                    }),
                    n = e.on("destroy", r);
                return () => {
                    r(), n()
                }
            }
            return c
        })(s, e, t), [s, JSON.stringify(t)]), s
    }
    e.s(["useSpring", () => Q], 591994)
}, 624434, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(437902),
        n = e.i(657688),
        i = e.i(871689),
        o = e.i(618566),
        s = e.i(846932),
        l = e.i(310542),
        a = e.i(591994),
        c = e.i(424154),
        f = e.i(271645),
        d = e.i(366977),
        u = e.i(112414);
    e.s(["default", 0, ({
        service: e
    }) => {
        let m = (0, o.useRouter)(),
            [g, p] = (0, f.useState)(!1),
            {
                scrollYProgress: h
            } = (0, l.useScroll)(),
            x = (0, a.useSpring)(h, {
                stiffness: 100,
                damping: 30,
                restDelta: .001
            }),
            [b, v] = (0, f.useState)(!1);
        (0, f.useEffect)(() => {
            p(!0)
        }, []);
        let y = g ? c.default.sanitize(e.content) : "";
        return (0, t.jsxs)("section", {
            className: "jsx-17181e905bdfd067 w-full min-h-screen bg-white",
            children: [(0, t.jsx)(s.motion.div, {
                className: "fixed top-0 left-0 right-0 h-1.5 bg-[#3DB246] origin-left z-[100]",
                style: {
                    scaleX: x
                }
            }), (0, t.jsxs)("header", {
                className: "jsx-17181e905bdfd067 relative w-full h-[35vh] min-h-[300px] flex items-end pb-10 overflow-hidden",
                children: [(0, t.jsx)(n.default, {
                    src: (e.img ? (0, u.getImageUrl)(e.img) : null) || "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
                    alt: e.service_name,
                    fill: !0,
                    className: "object-cover",
                    priority: !0
                }), (0, t.jsx)("div", {
                    className: "jsx-17181e905bdfd067 absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-0"
                }), (0, t.jsx)("div", {
                    className: "jsx-17181e905bdfd067 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: (0, t.jsxs)(s.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "max-w-4xl",
                        children: [(0, t.jsxs)("button", {
                            onClick: () => m.back(),
                            className: "jsx-17181e905bdfd067 flex items-center gap-2 text-white/80 hover:text-white mb-6 text-base font-bold transition-colors bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md w-fit drop-shadow-md cursor-pointer",
                            children: [(0, t.jsx)(i.ArrowLeft, {
                                className: "w-5 h-5"
                            }), "العودة"]
                        }), (0, t.jsx)("h1", {
                            className: "jsx-17181e905bdfd067 text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] tracking-tight mb-6 drop-shadow-lg",
                            children: e.service_name
                        }), e.isFeatured && (0, t.jsx)("span", {
                            className: "jsx-17181e905bdfd067 px-5 py-2 bg-yellow-500 text-white text-sm font-black uppercase tracking-[0.15em] rounded-md shadow-lg",
                            children: "خدمة مميزة"
                        })]
                    })
                })]
            }), (0, t.jsx)("div", {
                className: "jsx-17181e905bdfd067 container mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: (0, t.jsx)("div", {
                    className: "jsx-17181e905bdfd067 flex flex-col lg:flex-row gap-16 justify-center",
                    children: (0, t.jsxs)("main", {
                        className: "jsx-17181e905bdfd067 lg:w-[70%] max-w-4xl",
                        children: [e.short_description && (0, t.jsx)("div", {
                            className: "jsx-17181e905bdfd067 mb-12",
                            children: (0, t.jsx)("p", {
                                className: "jsx-17181e905bdfd067 text-2xl md:text-3xl font-extrabold text-gray-800 italic leading-relaxed border-l-8 border-[#3DB246] pl-8 bg-green-50/50 py-6 rounded-r-2xl drop-shadow-sm",
                                children: e.short_description
                            })
                        }), (0, t.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: y
                            },
                            className: "jsx-17181e905bdfd067 premium-content mt-12 pb-20 border-b border-gray-100 mb-12"
                        })]
                    })
                })
            }), (0, t.jsx)(r.default, {
                id: "17181e905bdfd067",
                children: '.premium-content{color:#2d3748;font-family:inherit;font-size:1.35rem;font-weight:500;line-height:2}.premium-content h1,.premium-content h2,.premium-content h3{color:#111827;letter-spacing:-.025em;margin-top:4rem;margin-bottom:2rem;font-weight:900;line-height:1.2}.premium-content h2{border-bottom:4px solid #e8f5e9;padding-bottom:.5rem;font-size:2.25rem;display:inline-block}.premium-content h3{font-size:1.75rem}.premium-content p{margin-bottom:2rem}.premium-content img{border-radius:2.5rem;margin:3.5rem 0;box-shadow:0 25px 50px -12px #00000026}.premium-content ul{background:#f1fcf2;border:1px solid #e8f5e9;border-radius:2rem;margin-bottom:2.5rem;padding:2rem;list-style-type:none}.premium-content li{margin-bottom:1rem;padding-left:2rem;font-weight:500;position:relative}.premium-content li:before{content:"→";color:#3db246;font-weight:900;position:absolute;left:0}.premium-content blockquote{background-color:#111827;border-radius:2.5rem;margin:4rem 0;padding:3.5rem;position:relative}.premium-content blockquote p{color:#fff;letter-spacing:-.02em;margin-bottom:0;font-size:1.75rem;font-style:italic;font-weight:900;line-height:1.4}.premium-content blockquote:after{content:"\\"";color:#ffffff1a;font-family:serif;font-size:8rem;position:absolute;top:1rem;right:3rem}'
            }), (0, t.jsx)(d.default, {
                isOpen: b,
                onClose: () => v(!1),
                url: window.location.href,
                title: e.service_name,
                subject: "Service"
            })]
        })
    }])
}]);