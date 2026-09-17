(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 676525, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(522016);
    e.s(["default", 0, ({
        children: e,
        href: r,
        onClick: s,
        variant: l = "primary",
        size: o = "md",
        className: i = "",
        fullWidth: n = !1,
        type: c = "button",
        disabled: d = !1,
        loading: h = !1,
        target: m,
        rel: x,
        icon: p
    }) => {
        let g = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center relative overflow-hidden",
            u = i.match(/(?:^|\s)(?:sm:|md:|lg:|xl:|2xl:)?(hidden|flex|block|inline|inline-flex|inline-block|grid)(?:\s|$)/) ? g.replace(/\binline-flex\b/, "").trim() : g,
            f = `${u} ${({primary:"bg-[#3DB246] hover:bg-[#2e8a34] text-white shadow-lg hover:shadow-xl hover:scale-105",secondary:"border border-gray-400 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:scale-105",outline:"border-2 border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-gray-500",ghost:"bg-transparent hover:bg-gray-100 text-gray-700",gradient:"bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105",dark:"bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl hover:scale-105","purple-outline":"border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white backdrop-blur-sm bg-white/50 hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105",purple:"bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105",brand:"bg-[#2091F9] hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105",orange:"text-orange-500 hover:text-white rounded-full font-semibold bg-gray-50 hover:bg-orange-500 hover:shadow-lg hover:scale-105"})[l]} ${({sm:"px-6 py-2 text-sm",md:"px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base",lg:"px-10 py-4 text-lg"})[o]} ${n?"w-full sm:w-auto":""} ${i} ${d||h?"opacity-70 cursor-not-allowed pointer-events-none":""}`.trim().replace(/\s+/g, " "),
            b = (0, t.jsxs)(t.Fragment, {
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
                    children: [e, p]
                })]
            });
        return r && !h ? (0, t.jsx)(a.default, {
            href: r,
            className: f,
            target: m,
            rel: x,
            onClick: s,
            children: b
        }) : (0, t.jsx)("button", {
            type: c,
            className: f,
            onClick: s,
            disabled: d || h,
            children: b
        })
    }])
}, 286536, e => {
    "use strict";
    let t = (0, e.i(475254).default)("eye", [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ]);
    e.s(["Eye", () => t], 286536)
}, 595468, e => {
    "use strict";
    let t = (0, e.i(475254).default)("circle-check", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }]
    ]);
    e.s(["CheckCircle2", () => t], 595468)
}, 112414, e => {
    "use strict";
    var t = e.i(652749);

    function a(e) {
        if (!e) return "";
        if (e.startsWith("http://") || e.startsWith("https://")) return e;
        let a = (e.startsWith("/") ? e : `/${e}`).split("/").map((e, t) => 0 === t && "" === e ? "" : encodeURIComponent(e)).join("/"),
            r = (0, t.getBackendBaseUrl)();
        return `${r}${a}`
    }

    function r(e) {
        return !!e && (!(!(e.startsWith("http://") || e.startsWith("https://")) || e.startsWith("https://server.haddadkuwait.com")) || !1)
    }
    e.s(["getImageUrl", () => a, "shouldUnoptimizeImage", () => r])
}, 346897, e => {
    "use strict";
    let t = (0, e.i(475254).default)("map-pin", [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]);
    e.s(["MapPin", () => t], 346897)
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
        a = e.i(846932),
        r = e.i(514764),
        s = e.i(271645),
        l = e.i(676525),
        o = e.i(39793);
    e.s(["default", 0, () => {
        let [e, i] = (0, s.useState)(!1);
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
                    children: [(0, t.jsxs)(a.motion.div, {
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
                    }), (0, t.jsx)(a.motion.div, {
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
                        children: (0, t.jsxs)(l.default, {
                            onClick: () => {
                                i(!0)
                            },
                            variant: "gradient",
                            size: "md",
                            className: "group shadow-lg hover:shadow-xl",
                            children: [(0, t.jsx)(r.Send, {
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
}, 276540, e => {
    "use strict";
    var t = e.i(843476),
        a = e.i(271645),
        r = e.i(657688),
        s = e.i(522016),
        l = e.i(871689),
        o = e.i(346897),
        i = e.i(87316),
        n = e.i(595468),
        c = e.i(286536),
        d = e.i(112414);
    let h = {
            all: {
                ar: "جميع الأعمال",
                en: "All Projects"
            },
            shades: {
                ar: "مظلات سيارات وهياكل",
                en: "Car Shades"
            },
            "car-parking": {
                ar: "مظلات سيارات",
                en: "Car Parking"
            },
            pergolas: {
                ar: "برجولات وجلسات",
                en: "Pergolas"
            },
            screens: {
                ar: "سواتر وحواجز حماية",
                en: "Screens & Fences"
            },
            pools: {
                ar: "تغطية مسابح",
                en: "Pool Enclosures"
            },
            blacksmithing: {
                ar: "حدادة وأبواب ليزر",
                en: "Wrought Iron & Gates"
            },
            residential: {
                ar: "مشاريع سكنية",
                en: "Residential"
            },
            commercial: {
                ar: "مشاريع تجارية",
                en: "Commercial"
            },
            tensile: {
                ar: "مظلات شد إنشائي",
                en: "Tensile Shades"
            },
            other: {
                ar: "أعمال أخرى",
                en: "Other Works"
            }
        },
        m = [{
            id: "proj-1",
            slug: "modern-car-parking-shades-shuwaikh",
            title: "تركيب مظلات سيارات حديثة بنظام كابولي",
            titleEn: "Modern Cantilever Car Parking Shades",
            category: "shades",
            categoryName: "مظلات سيارات",
            location: "الكويت - منطقة الشويخ",
            year: "2025",
            client: "مجمع تجاري ومكاتب",
            description: "تصميم وتنفيذ مظلات سيارات كابولي متطورة توفر حماية فائقة من أشعة الشمس الحارقة والأشعة فوق البنفسجية، مصنعة من حديد مجلفن بدهان ناري مقاوم للرطوبة وقماش ألماني عالي الكثافة.",
            features: ["قماش ألماني عالي الجودة وزن 1100 جرام", "حديد فولاذي مجلفن مقاوم للصدأ والتآكل", "تصميم انسيابي يوفر مساحة كاملة بدون أعمدة أمامية", "ضمان شامل لمدة 10 سنوات"],
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "commercial-shades"
        }, {
            id: "proj-2",
            slug: "luxury-villa-pergola-al-khiran",
            title: "برجولة حدائق فاخرة بتصميم مودرن مع إضاءة ذكية",
            titleEn: "Luxury Garden Pergola with Smart Lighting",
            category: "pergolas",
            categoryName: "برجولات وجلسات",
            location: "الكويت - شاليهات الخيران",
            year: "2025",
            client: "شاليه خاص",
            description: "تنفيذ برجولة خارجية بتشطيب خشبي فاخر على هيكل حديدي عالي الصلابة، مزودة بشرائح تحكم في الظل ونظام إضاءة LED مدمج، مما يخلق جلسة عائلية مميزة بأجواء دافئة.",
            features: ["حديد مقوى مع معالجة حرارية مقاومة للأملاح والرطوبة", "شرائح WPC معالجة ضد بهتان اللون وعوامل الطقس", "نظام إنارة مخفية LED موفرة للطاقة", "مقاومة عالية للرياح والأمطار"],
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop&auto=format", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "luxury-pergolas"
        }, {
            id: "proj-3",
            slug: "retractable-terrace-roof-mishref",
            title: "مظلة متحركة كهربائية للأسطح والتراس بالريموت",
            titleEn: "Motorized Retractable Terrace Canopy",
            category: "shades",
            categoryName: "مظلات متحركة",
            location: "الكويت - منطقة مشرف",
            year: "2024",
            client: "فيلا سكنية فاخرة",
            description: "تركيب سقف متحرك كهربائي بتقنية المحركات الفرنسية سومفي، يسمح بالفتح والإغلاق التلقائي مع حساسات ذكية للرياح والمطر لتأمين التراس في جميع الفصول.",
            features: ["محركات Somfy ذكية مع جهاز تحكم عن بعد", "قماش بلاك أوت PVC عازل للحرارة والماء 100%", "حساسات استشعار تلقائي للرياح والأمطار", "قنوات تصريف مياه أمطار مخفية داخل الأعمدة"],
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&auto=format", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "retractable-roofing"
        }, {
            id: "proj-4",
            slug: "swimming-pool-shade-sabah-alsalem",
            title: "تغطية مسبح بقماش البولي إيثيلين والألمنيوم",
            titleEn: "Swimming Pool Polyethylene Shade Cover",
            category: "pools",
            categoryName: "تغطية مسابح",
            location: "الكويت - صباح السالم",
            year: "2024",
            client: "نادي رياضي خاص",
            description: "تغطية كاملة للمسبح الخارجي لحمايته من أشعة الشمس المباشرة والأتربة مع الحفاظ على التهوية الطبيعية والإضاءة النهارية اللطيفة لراحة السباحين.",
            features: ["نسبة حجب أشعة الشمس تصل إلى 95%", "هيكل مقاوم للرطوبة وبخار الكلور", "تصميم هرمي مقوس يعطي مظهراً جمالياً راقياً", "تخفيض درجة حرارة مياه المسبح صيفاً"],
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "terrace-systems"
        }, {
            id: "proj-5",
            slug: "privacy-screens-and-fences-abdullah-alsalem",
            title: "سواتر خشبية وحديدية للخصوصية التامة للفلل",
            titleEn: "Architectural Privacy Louvers & Screens",
            category: "screens",
            categoryName: "سواتر ومبارم",
            location: "الكويت - ضاحية عبد الله السالم",
            year: "2025",
            client: "قسيمة خاصة",
            description: "تركيب سواتر شرائح ومجدول بتشطيبات عصرية تضمن حجب الرؤية بنسبة 100% مع مرور الهواء الطبيعي، وتوفر أماناً وخصوصية تامة لحدائق وأسطح المنازل.",
            features: ["حجب كامل للرؤية مع الحفاظ على حركة الهواء", "معالجة متقدمة بدهانات نارية لا تتغير مع حرارة الصيف", "تصاميم ليزر ومودرن تتناسق مع الواجهة الخارجية", "ارتفاعات مخصصة تلبي كافة اشتراطات البناء"],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "outdoor-enclosures"
        }, {
            id: "proj-6",
            slug: "custom-laser-cut-gates-hawally",
            title: "أبواب وشبابيك حديد ليزر بتصاميم هندسية حديثة",
            titleEn: "Laser-Cut Decorative Iron Gates & Doors",
            category: "blacksmithing",
            categoryName: "حدادة ليزر",
            location: "الكويت - حولي",
            year: "2024",
            client: "مبنى سكني وتجاري",
            description: "تفصيل وتركيب أبواب حديدية فاخرة مقصوصة بتقنية فايبر ليزر الدقيقة مع دهان الكتروستاتيك مقاوم للخدش وعوامل الطقس، تمنح المدخل طابعاً فخماً ومميزاً.",
            features: ["قص فايبر ليزر عالي الدقة وسماكات حديد صلب", "دهان فرن حراري الكتروستاتيك ضد الصدأ", "إكسسوارات ومفصلات ومقابض إيطالية متينة", "إمكانية تركيب أقفال إلكترونية وذكية"],
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&auto=format",
            gallery: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&auto=format"],
            relatedServiceSlug: "outdoor-enclosures"
        }].map((e, t) => ({
            _id: e.id,
            id: e.id,
            slug: e.slug,
            title: e.title,
            titleEn: e.titleEn,
            title_en: e.titleEn,
            category: e.category,
            categoryName: e.categoryName,
            location: e.location,
            year: e.year,
            client: e.client,
            description: e.description,
            features: e.features,
            image: e.image,
            gallery: e.gallery,
            relatedServiceSlug: e.relatedServiceSlug,
            order: t + 1,
            isActive: !0,
            isFeatured: !0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }));
    e.s(["default", 0, ({
        initialProjects: e,
        isPage: x = !1
    }) => {
        let [p, g] = (0, a.useState)("all"), [u, f] = (0, a.useState)(null), b = (0, a.useMemo)(() => e && e.length > 0 ? e : m, [e]), y = (0, a.useMemo)(() => {
            let e = new Set;
            b.forEach(t => {
                t.category && e.add(t.category)
            });
            let t = [{
                id: "all",
                label: "جميع الأعمال"
            }];
            return e.forEach(e => {
                let a = v(e);
                t.push({
                    id: e,
                    label: a
                })
            }), t
        }, [b]);

        function v(e, t) {
            return t || h[e]?.ar || e
        }
        let w = (0, a.useMemo)(() => "all" === p ? b : b.filter(e => e.category === p), [b, p]);
        return (0, t.jsxs)("section", {
            className: "py-20 bg-[#0F0F14] text-white relative overflow-hidden",
            id: "projects-showcase",
            children: [(0, t.jsx)("div", {
                className: "absolute top-1/4 -right-40 w-96 h-96 bg-[#3DB246]/10 rounded-full blur-3xl pointer-events-none"
            }), (0, t.jsx)("div", {
                className: "absolute bottom-1/4 -left-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"
            }), (0, t.jsxs)("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [!x && (0, t.jsxs)("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DB246]/10 border border-[#3DB246]/30 text-[#3DB246] text-xs sm:text-sm font-bold mb-4",
                            children: [(0, t.jsx)("span", {
                                children: "★"
                            }), (0, t.jsx)("span", {
                                children: "معرض المشاريع المنفذة"
                            })]
                        }), (0, t.jsxs)("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight",
                            children: ["أحدث مشاريعنا وأعمالنا في ", (0, t.jsx)("span", {
                                className: "text-[#3DB246]",
                                children: "الكويت"
                            })]
                        }), (0, t.jsx)("p", {
                            className: "text-gray-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed",
                            children: "نفخر بتقديم باقة من أرقى الهياكل الخارجية، مظلات السيارات، والبرجولات المصممة بأعلى مواصفات المتانة لتناسب أجواء الكويت."
                        })]
                    }), (0, t.jsxs)(s.default, {
                        href: "/projects",
                        className: "inline-flex items-center gap-2 text-white bg-[#1A1A22] hover:bg-[#3DB246] px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border border-[#2A2A35] shrink-0 group self-start md:self-auto",
                        children: [(0, t.jsx)("span", {
                            children: "استعراض كافة المشاريع"
                        }), (0, t.jsx)(l.ArrowLeft, {
                            className: "w-4 h-4 group-hover:-translate-x-1 transition-transform"
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none",
                    children: y.map(e => (0, t.jsx)("button", {
                        onClick: () => g(e.id),
                        className: `px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${p===e.id?"bg-[#3DB246] text-white shadow-lg shadow-[#3DB246]/20 scale-105":"bg-[#181820] text-gray-400 hover:text-white hover:bg-[#22222E] border border-[#2A2A35]"}`,
                        children: e.label
                    }, e.id))
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: w.map(e => {
                        let a = (0, d.getImageUrl)(e.image) || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format",
                            l = v(e.category, e.categoryName),
                            h = Array.isArray(e.features) ? e.features : [];
                        return (0, t.jsxs)("div", {
                            className: "group bg-[#15151C] rounded-3xl overflow-hidden border border-[#22222D] hover:border-[#3DB246]/50 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-[#3DB246]/10",
                            children: [(0, t.jsxs)("div", {
                                className: "relative h-64 w-full overflow-hidden",
                                children: [(0, t.jsx)(r.default, {
                                    src: a,
                                    alt: e.title,
                                    fill: !0,
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                    className: "object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                }), (0, t.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-[#15151C] via-transparent to-transparent opacity-80"
                                }), (0, t.jsx)("div", {
                                    className: "absolute top-4 right-4 bg-[#0F0F14]/80 backdrop-blur-md text-[#3DB246] border border-[#3DB246]/30 px-3 py-1 rounded-full text-xs font-bold",
                                    children: l
                                }), (0, t.jsx)("button", {
                                    onClick: () => f(e),
                                    className: "absolute bottom-4 left-4 bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer",
                                    title: "عرض التفاصيل",
                                    children: (0, t.jsx)(c.Eye, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "p-6 flex flex-col flex-1",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center gap-4 text-xs text-gray-400 mb-3",
                                    children: [e.location && (0, t.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, t.jsx)(o.MapPin, {
                                            className: "w-3.5 h-3.5 text-[#3DB246]"
                                        }), e.location]
                                    }), e.year && (0, t.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, t.jsx)(i.Calendar, {
                                            className: "w-3.5 h-3.5 text-yellow-500"
                                        }), e.year]
                                    })]
                                }), (0, t.jsx)("h3", {
                                    className: "text-xl font-extrabold text-white mb-3 group-hover:text-[#3DB246] transition-colors line-clamp-2",
                                    children: e.title
                                }), e.description && (0, t.jsx)("p", {
                                    className: "text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 flex-1",
                                    children: e.description
                                }), h.length > 0 && (0, t.jsx)("div", {
                                    className: "space-y-1.5 mb-6 pt-2 border-t border-[#22222E]",
                                    children: h.slice(0, 2).map((e, a) => (0, t.jsxs)("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-300",
                                        children: [(0, t.jsx)(n.CheckCircle2, {
                                            className: "w-3.5 h-3.5 text-[#3DB246] shrink-0"
                                        }), (0, t.jsx)("span", {
                                            className: "truncate",
                                            children: e
                                        })]
                                    }, a))
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center justify-between pt-4 border-t border-[#22222E] mt-auto",
                                    children: [e.relatedServiceSlug ? (0, t.jsx)(s.default, {
                                        href: `/services/${e.relatedServiceSlug}`,
                                        className: "text-xs font-bold text-[#3DB246] hover:underline",
                                        children: "تفاصيل الخدمة ذات الصلة ←"
                                    }) : (0, t.jsx)(s.default, {
                                        href: "/contact",
                                        className: "text-xs font-bold text-[#3DB246] hover:underline",
                                        children: "اطلب استشارة مجانية ←"
                                    }), (0, t.jsx)("button", {
                                        onClick: () => f(e),
                                        className: "text-xs font-bold text-gray-300 hover:text-white bg-[#1F1F2A] hover:bg-[#282836] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer",
                                        children: "معاينة العمل"
                                    })]
                                })]
                            })]
                        }, e._id || e.id || e.slug)
                    })
                }), u && (0, t.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",
                    children: (0, t.jsxs)("div", {
                        className: "bg-[#181822] border border-[#2D2D3B] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative scrollbar-thin scrollbar-thumb-[#3DB246]",
                        children: [(0, t.jsxs)("div", {
                            className: "relative h-64 sm:h-80 w-full",
                            children: [(0, t.jsx)(r.default, {
                                src: (0, d.getImageUrl)(u.image) || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&auto=format",
                                alt: u.title,
                                fill: !0,
                                className: "object-cover"
                            }), (0, t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#181822] via-transparent to-transparent"
                            }), (0, t.jsx)("button", {
                                onClick: () => f(null),
                                className: "absolute top-4 left-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer transition-colors",
                                children: "✕"
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-4 right-4 bg-[#3DB246] text-white px-3 py-1 rounded-full text-xs font-bold",
                                children: v(u.category, u.categoryName)
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "p-6 sm:p-8",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3",
                                children: [u.location && (0, t.jsxs)("span", {
                                    className: "flex items-center gap-1",
                                    children: [(0, t.jsx)(o.MapPin, {
                                        className: "w-3.5 h-3.5 text-[#3DB246]"
                                    }), u.location]
                                }), u.client && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("span", {
                                        children: "•"
                                    }), (0, t.jsxs)("span", {
                                        children: ["العميل: ", u.client]
                                    })]
                                }), u.year && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("span", {
                                        children: "•"
                                    }), (0, t.jsxs)("span", {
                                        children: ["سنة الإنجاز: ", u.year]
                                    })]
                                })]
                            }), (0, t.jsx)("h3", {
                                className: "text-2xl font-black text-white mb-3",
                                children: u.title
                            }), (u.title_en || u.titleEn) && (0, t.jsx)("p", {
                                className: "text-xs text-gray-400 mb-3 font-medium",
                                children: u.title_en || u.titleEn
                            }), u.description && (0, t.jsx)("p", {
                                className: "text-gray-300 text-sm leading-relaxed mb-6",
                                children: u.description
                            }), Array.isArray(u.features) && u.features.length > 0 && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("h4", {
                                    className: "text-sm font-bold text-white mb-3",
                                    children: "مواصفات ومميزات المشروع:"
                                }), (0, t.jsx)("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6",
                                    children: u.features.map((e, a) => (0, t.jsxs)("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-300 bg-[#121218] p-2.5 rounded-xl border border-[#262633]",
                                        children: [(0, t.jsx)(n.CheckCircle2, {
                                            className: "w-4 h-4 text-[#3DB246] shrink-0"
                                        }), (0, t.jsx)("span", {
                                            children: e
                                        })]
                                    }, a))
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#262633]",
                                children: [(0, t.jsx)(s.default, {
                                    href: "/contact",
                                    className: "w-full sm:w-auto text-center bg-[#3DB246] hover:bg-[#349B3C] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all",
                                    onClick: () => f(null),
                                    children: "طلب تنفيذ مشروع مشابه"
                                }), u.relatedServiceSlug ? (0, t.jsx)(s.default, {
                                    href: `/services/${u.relatedServiceSlug}`,
                                    className: "w-full sm:w-auto text-center bg-[#252533] hover:bg-[#303042] text-gray-200 font-bold px-6 py-3 rounded-xl text-sm transition-all",
                                    onClick: () => f(null),
                                    children: "استعراض الخدمة ذات الصلة"
                                }) : (0, t.jsx)(s.default, {
                                    href: "/services",
                                    className: "w-full sm:w-auto text-center bg-[#252533] hover:bg-[#303042] text-gray-200 font-bold px-6 py-3 rounded-xl text-sm transition-all",
                                    onClick: () => f(null),
                                    children: "كافة الخدمات"
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    }], 276540)
}]);