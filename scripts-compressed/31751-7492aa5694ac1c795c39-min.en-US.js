(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [31751], {
        605430: function(L) {
            L.exports = {
                dropdownItem: "H5SIGTKe9vV7Bo5fkgQ0",
                dropdownDisplay: "C58aghNedm9iljkg8yqu",
                dropdownHeading: "QXBrA4xQdyigQfji1s0W"
            }
        },
        21537: function(L) {
            L.exports = {
                paletteContainerV2: "GxrKf70ibW530lFlUVW9",
                name: "POr8LYUXf2T2tZUfDi2V",
                paletteSampleButton: "bXSMFv4asQuiT41Xx5uL"
            }
        },
        194105: function(L) {
            L.exports = {
                fileDropZone: "PJjuqWe_up3yHiglJ5HM",
                imgloaded: "END89tPpguCGhZAvAko_",
                label: "Fl056JLrRg9nlQhLwKQc",
                uploadIcon: "vg4FFYYOdS9DGBm1ptbP VWF9Yj_sKI35e2TyKQ2P",
                img: "NIlPcIAzgrXX8h3p0maE",
                filePicker: "ZJEhleFHi0SYNRwMMuZJ"
            }
        },
        565744: function(L) {
            L.exports = {
                palettesV2: "VoBENEfjvFOW3rC8jr9N"
            }
        },
        283727: function(L) {
            L.exports = {
                wrapper: "AqhzU8l1cgv9sWWY38zh",
                cardsWrapper: "JMdc13xPArhYirTDDxcG",
                cardsWrapperCard: "cWBMHYLPw33jffdxOewQ"
            }
        },
        78086: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return P
                }
            }), r(246857);
            var y = r(359530),
                O = r(153146),
                h = r(892342),
                w = r(480689),
                v = D(r(174161)),
                A = r(415467),
                E = r(31751),
                B = r(28603),
                S = C(r(918909)),
                m = r(705025),
                T = C(r(218921));

            function C(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function N(d) {
                if (typeof WeakMap != "function") return null;
                var I = new WeakMap,
                    b = new WeakMap;
                return (N = function(s) {
                    return s ? b : I
                })(d)
            }

            function D(d, I) {
                if (!I && d && d.__esModule) return d;
                if (d === null || typeof d != "object" && typeof d != "function") return {
                    default: d
                };
                var b = N(I);
                if (b && b.has(d)) return b.get(d);
                var s = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var f in d)
                    if (f !== "default" && Object.prototype.hasOwnProperty.call(d, f)) {
                        var l = a ? Object.getOwnPropertyDescriptor(d, f) : null;
                        l && (l.get || l.set) ? Object.defineProperty(s, f, l) : s[f] = d[f]
                    }
                return s.default = d, b && b.set(d, s), s
            }
            var x = "navigate";

            function g(d) {
                var I = d.router,
                    b = d.activePalette,
                    s = d.defaultThemeId,
                    a = (0, A.useCmsDispatch)();
                (0, v.useEffect)(function() {
                    return a((0, B.setIsColorsPanelOpen)(!0)),
                        function() {
                            a((0, B.setIsColorsPanelOpen)(!1))
                        }
                }, []);
                var f = function() {
                        I.push(S.default.PALETTE_EDITOR)
                    },
                    l = function(c) {
                        a((0, B.setAdvancedEditingThemeId)(c)), I.push(S.default.THEME_EDITOR), (0, m.sectionThemeEditClick)(x, c)
                    };
                return v.default.createElement(v.default.Fragment, null, v.default.createElement(E.PalettePreview, {
                    palette: b,
                    onClick: f
                }), v.default.createElement(O.Divider, {
                    mt: 3
                }), v.default.createElement(h.Box, {
                    my: 5
                }, v.default.createElement(h.Flex, {
                    mb: 3,
                    alignItems: "center",
                    justifyContent: "space-between"
                }, v.default.createElement(h.Text.Subtitle, null, (0, y.t)("Customize your themes")), v.default.createElement(T.default, null)), v.default.createElement(E.ThemeCards, {
                    activePalette: b,
                    defaultThemeId: s,
                    onEdit: l,
                    isGroupingEnabled: !0
                })))
            }
            var P = (0, w.withRouter)(g)
        },
        332514: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var y = N(r(174161)),
                O = r(419467),
                h = r(561527),
                w = r(805522),
                v = r(771842),
                A = r(764521),
                E = r(411063),
                B = r(31751),
                S = T(r(21537));

            function m(a, f, l) {
                return f in a ? Object.defineProperty(a, f, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[f] = l, a
            }

            function T(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function C(a) {
                if (typeof WeakMap != "function") return null;
                var f = new WeakMap,
                    l = new WeakMap;
                return (C = function(c) {
                    return c ? l : f
                })(a)
            }

            function N(a, f) {
                if (!f && a && a.__esModule) return a;
                if (a === null || typeof a != "object" && typeof a != "function") return {
                    default: a
                };
                var l = C(f);
                if (l && l.has(a)) return l.get(a);
                var c = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var e in a)
                    if (e !== "default" && Object.prototype.hasOwnProperty.call(a, e)) {
                        var n = o ? Object.getOwnPropertyDescriptor(a, e) : null;
                        n && (n.get || n.set) ? Object.defineProperty(c, e, n) : c[e] = a[e]
                    }
                return c.default = a, l && l.set(a, c), c
            }

            function D(a) {
                for (var f = 1; f < arguments.length; f++) {
                    var l = arguments[f] != null ? arguments[f] : {},
                        c = Object.keys(l);
                    typeof Object.getOwnPropertySymbols == "function" && (c = c.concat(Object.getOwnPropertySymbols(l).filter(function(o) {
                        return Object.getOwnPropertyDescriptor(l, o).enumerable
                    }))), c.forEach(function(o) {
                        m(a, o, l[o])
                    })
                }
                return a
            }
            var x = (0, v.createLoggers)("PaletteFromColor", h.constants.HEX_SALMON),
                g = x.log,
                P = x.err,
                d = function(a) {
                    return Object.values(w.PresetGeneratorId).map(function(f) {
                        var l = E.presetDisplayName[f],
                            c = h.PaletteBuilders.buildFromPreset(a, f);
                        return c ? g({
                            generatorId: f,
                            inputColor: a,
                            generatedBasePalette: c
                        }) : P("Could not generated a new base palette", {
                            generatorId: f,
                            inputColor: a
                        }), D({
                            generatorId: f,
                            generatorName: l
                        }, c)
                    })
                },
                I = function(a) {
                    var f = h.utils.getPaletteSeedColorString(a),
                        l = d(f),
                        c = l.find(function(o) {
                            return a && h.PaletteBuilders.matches(a, o)
                        });
                    return {
                        generatorPalettes: l,
                        selectedGeneratorPalette: c
                    }
                },
                b = function(a) {
                    var f = a.activePalette,
                        l = a.onGeneratePalette,
                        c = a.onSelect,
                        o = (0, y.useMemo)(function() {
                            return I(f)
                        }, [f]),
                        e = o.generatorPalettes,
                        n = o.selectedGeneratorPalette;
                    (0, y.useEffect)(function() {
                        if (n && l) {
                            var i = (0, O.pick)(n, ["colors"]);
                            l(i)
                        }
                    }, [l, n]);
                    var t = function(i, u) {
                        return function() {
                            c && c(u), (0, A.trackPaletteSample)(i, JSON.stringify(u.colors))
                        }
                    };
                    return (0, O.isEmpty)(e) ? null : e.map(function(i) {
                        var u = i.generatorName,
                            p = i.generatorId,
                            M = i.colors,
                            W = {
                                id: p,
                                colors: M
                            };
                        return y.default.createElement("div", {
                            key: p,
                            className: S.default.paletteContainerV2
                        }, y.default.createElement(B.PaletteSampleButton, {
                            className: S.default.paletteSampleButton,
                            palette: W,
                            onClick: t(p, W),
                            isActive: i === n
                        }), u && y.default.createElement("span", {
                            className: S.default.name
                        }, u))
                    })
                },
                s = b
        },
        218921: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            }), r(246857);
            var y = S(r(174161)),
                O = r(359530),
                h = r(986456),
                w = r(892342),
                v = r(153146);

            function A(g, P) {
                (P == null || P > g.length) && (P = g.length);
                for (var d = 0, I = new Array(P); d < P; d++) I[d] = g[d];
                return I
            }

            function E(g) {
                if (Array.isArray(g)) return g
            }

            function B(g) {
                if (typeof WeakMap != "function") return null;
                var P = new WeakMap,
                    d = new WeakMap;
                return (B = function(I) {
                    return I ? d : P
                })(g)
            }

            function S(g, P) {
                if (!P && g && g.__esModule) return g;
                if (g === null || typeof g != "object" && typeof g != "function") return {
                    default: g
                };
                var d = B(P);
                if (d && d.has(g)) return d.get(g);
                var I = {},
                    b = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in g)
                    if (s !== "default" && Object.prototype.hasOwnProperty.call(g, s)) {
                        var a = b ? Object.getOwnPropertyDescriptor(g, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(I, s, a) : I[s] = g[s]
                    }
                return I.default = g, d && d.set(g, I), I
            }

            function m(g, P) {
                var d = g == null ? null : typeof Symbol != "undefined" && g[Symbol.iterator] || g["@@iterator"];
                if (d != null) {
                    var I = [],
                        b = !0,
                        s = !1,
                        a, f;
                    try {
                        for (d = d.call(g); !(b = (a = d.next()).done) && (I.push(a.value), !(P && I.length === P)); b = !0);
                    } catch (l) {
                        s = !0, f = l
                    } finally {
                        try {
                            !b && d.return != null && d.return()
                        } finally {
                            if (s) throw f
                        }
                    }
                    return I
                }
            }

            function T() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function C(g, P) {
                return E(g) || m(g, P) || N(g, P) || T()
            }

            function N(g, P) {
                if (g) {
                    if (typeof g == "string") return A(g, P);
                    var d = Object.prototype.toString.call(g).slice(8, -1);
                    if (d === "Object" && g.constructor && (d = g.constructor.name), d === "Map" || d === "Set") return Array.from(d);
                    if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return A(g, P)
                }
            }
            var D = function() {
                    var g = (0, y.useRef)(null),
                        P = C((0, y.useState)(!1), 2),
                        d = P[0],
                        I = P[1],
                        b = function() {
                            return I(!d)
                        },
                        s = function(f) {
                            var l;
                            !((l = f.composedPath()) === null || l === void 0) && l.includes(g.current) || I(!1)
                        },
                        a = "colors-help-popover";
                    return y.default.createElement(y.default.Fragment, null, g.current && y.default.createElement(v.PopOver, {
                        anchor: g.current,
                        closeOnClickOutside: !0,
                        id: a,
                        isOpen: d,
                        hideArrow: !0,
                        onRequestClose: s,
                        position: "left",
                        role: "tooltip",
                        style: {
                            maxWidth: "329px"
                        }
                    }, y.default.createElement(w.Flex, {
                        backgroundColor: "gray.100",
                        boxShadow: "light.400",
                        alignItems: "center",
                        px: 3,
                        maxWidth: "495px"
                    }, y.default.createElement(w.Text.Body, {
                        color: "white",
                        my: 2
                    }, (0, O.t)("Your palette colors are combined in different ways to create 10 unique themes. You can apply these themes to sections in Edit Mode.")))), y.default.createElement(w.Touchable.Solid, {
                        onClick: b,
                        "aria-label": (0, O.t)("Colors help"),
                        "aria-describedby": a,
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                            "&:hover": {
                                cursor: "pointer",
                                backgroundColor: "transparent"
                            }
                        }
                    }, y.default.createElement(w.Box, {
                        pt: 1,
                        ref: g
                    }, y.default.createElement(h.InfoCircle, {
                        color: d ? "gray.100" : "gray.300",
                        sx: {
                            "&:hover": {
                                color: "gray.100"
                            }
                        }
                    }))))
                },
                x = D
        },
        978650: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), r(246857);
            var y = C(r(845076)),
                O = r(986456),
                h = r(359530),
                w = C(r(620477)),
                v = C(r(795478)),
                A = D(r(174161)),
                E = r(411063),
                B = C(r(430507)),
                S = D(r(69419)),
                m = C(r(605430));

            function T() {
                return T = Object.assign || function(a) {
                    for (var f = 1; f < arguments.length; f++) {
                        var l = arguments[f];
                        for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (a[c] = l[c])
                    }
                    return a
                }, T.apply(this, arguments)
            }

            function C(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function N(a) {
                if (typeof WeakMap != "function") return null;
                var f = new WeakMap,
                    l = new WeakMap;
                return (N = function(c) {
                    return c ? l : f
                })(a)
            }

            function D(a, f) {
                if (!f && a && a.__esModule) return a;
                if (a === null || typeof a != "object" && typeof a != "function") return {
                    default: a
                };
                var l = N(f);
                if (l && l.has(a)) return l.get(a);
                var c = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var e in a)
                    if (e !== "default" && Object.prototype.hasOwnProperty.call(a, e)) {
                        var n = o ? Object.getOwnPropertyDescriptor(a, e) : null;
                        n && (n.get || n.set) ? Object.defineProperty(c, e, n) : c[e] = a[e]
                    }
                return c.default = a, l && l.set(a, c), c
            }

            function x(a, f) {
                if (a == null) return {};
                var l = g(a, f),
                    c, o;
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(a);
                    for (o = 0; o < e.length; o++) c = e[o], !(f.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (l[c] = a[c])
                }
                return l
            }

            function g(a, f) {
                if (a == null) return {};
                var l = {},
                    c = Object.keys(a),
                    o, e;
                for (e = 0; e < c.length; e++) o = c[e], !(f.indexOf(o) >= 0) && (l[o] = a[o]);
                return l
            }
            var P = 16,
                d = function(a) {
                    var f = a.isSelected,
                        l = a.isFocused,
                        c = x(a, ["isSelected", "isFocused"]);
                    return A.default.createElement(A.Fragment, null, c.value === E.PaletteSelectorMode.value && A.default.createElement("div", {
                        className: m.default.dropdownHeading
                    }, (0, h.t)("Basic")), c.value === E.PaletteCustomizerMode.value && A.default.createElement("div", {
                        className: m.default.dropdownHeading
                    }, (0, h.t)("Advanced")), A.default.createElement(B.default, T({
                        accessory: f ? A.default.createElement(O.Checkmark, {
                            width: P,
                            height: P
                        }) : null,
                        className: m.default.dropdownItem,
                        focused: l,
                        focusable: !1,
                        hoverable: !0,
                        underlined: !1
                    }, c)))
                },
                I = (0, w.default)(function(a) {
                    return function(f) {
                        return A.default.createElement(S.Dropdown, T({}, f, {
                            className: a
                        }))
                    }
                }),
                b = function(a) {
                    var f = a.className,
                        l = a.dropdownClassName,
                        c = a.modes,
                        o = a.value,
                        e = a.onChange,
                        n = a.onDropdownOpen,
                        t = I(l);
                    return A.default.createElement(S.default, {
                        className: (0, y.default)(m.default.dropdownDisplay, f),
                        value: o,
                        onDropdownOpen: n,
                        options: c,
                        renderDropdown: t,
                        renderOption: d,
                        onChange: e
                    })
                };
            b.propTypes = {
                className: v.default.string,
                dropdownClassName: v.default.string,
                value: v.default.string,
                modes: v.default.arrayOf(v.default.shape({
                    label: v.default.string.isRequired,
                    value: v.default.string.isRequired
                })).isRequired,
                onChange: v.default.func.isRequired
            };
            var s = b
        },
        917812: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(887747);
            var y = x(r(174161)),
                O = N(r(795478)),
                h = r(163015),
                w = r(840593),
                v = r(548362),
                A = r(31751),
                E = r(561527),
                B = r(857180),
                S = r(764521);

            function m(t, i) {
                (i == null || i > t.length) && (i = t.length);
                for (var u = 0, p = new Array(i); u < i; u++) p[u] = t[u];
                return p
            }

            function T(t) {
                if (Array.isArray(t)) return t
            }

            function C(t, i, u) {
                return i in t ? Object.defineProperty(t, i, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = u, t
            }

            function N(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function D(t) {
                if (typeof WeakMap != "function") return null;
                var i = new WeakMap,
                    u = new WeakMap;
                return (D = function(p) {
                    return p ? u : i
                })(t)
            }

            function x(t, i) {
                if (!i && t && t.__esModule) return t;
                if (t === null || typeof t != "object" && typeof t != "function") return {
                    default: t
                };
                var u = D(i);
                if (u && u.has(t)) return u.get(t);
                var p = {},
                    M = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var W in t)
                    if (W !== "default" && Object.prototype.hasOwnProperty.call(t, W)) {
                        var G = M ? Object.getOwnPropertyDescriptor(t, W) : null;
                        G && (G.get || G.set) ? Object.defineProperty(p, W, G) : p[W] = t[W]
                    }
                return p.default = t, u && u.set(t, p), p
            }

            function g(t, i) {
                var u = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (u != null) {
                    var p = [],
                        M = !0,
                        W = !1,
                        G, F;
                    try {
                        for (u = u.call(t); !(M = (G = u.next()).done) && (p.push(G.value), !(i && p.length === i)); M = !0);
                    } catch (j) {
                        W = !0, F = j
                    } finally {
                        try {
                            !M && u.return != null && u.return()
                        } finally {
                            if (W) throw F
                        }
                    }
                    return p
                }
            }

            function P() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var u = arguments[i] != null ? arguments[i] : {},
                        p = Object.keys(u);
                    typeof Object.getOwnPropertySymbols == "function" && (p = p.concat(Object.getOwnPropertySymbols(u).filter(function(M) {
                        return Object.getOwnPropertyDescriptor(u, M).enumerable
                    }))), p.forEach(function(M) {
                        C(t, M, u[M])
                    })
                }
                return t
            }

            function I(t, i) {
                var u = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(t);
                    i && (p = p.filter(function(M) {
                        return Object.getOwnPropertyDescriptor(t, M).enumerable
                    })), u.push.apply(u, p)
                }
                return u
            }

            function b(t, i) {
                return i = i != null ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach(function(u) {
                    Object.defineProperty(t, u, Object.getOwnPropertyDescriptor(i, u))
                }), t
            }

            function s(t, i) {
                return T(t) || g(t, i) || a(t, i) || P()
            }

            function a(t, i) {
                if (t) {
                    if (typeof t == "string") return m(t, i);
                    var u = Object.prototype.toString.call(t).slice(8, -1);
                    if (u === "Object" && t.constructor && (u = t.constructor.name), u === "Map" || u === "Set") return Array.from(u);
                    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return m(t, i)
                }
            }
            var f = function(t) {
                    var i = t.hue,
                        u = t.saturation,
                        p = t.value,
                        M = t.type,
                        W = M === "rgba" || M === "hsla" ? M.slice(0, -1) : M;
                    return (0, B.stringifyColor)({
                        hue: i,
                        saturation: u,
                        value: p
                    }, W)
                },
                l = v.ColorPicker.Map,
                c = v.ColorPicker.Hue,
                o = v.ColorPicker.Input,
                e = function(t) {
                    var i = t.palette,
                        u = t.onSelect,
                        p = t.onUpdate,
                        M = s((0, y.useState)(h.SEED_COLOR_ID), 2),
                        W = M[0],
                        G = M[1],
                        F = (0, y.useMemo)(function() {
                            return E.utils.colorsArrayToMap(i.colors)
                        }, [i.colors]),
                        j, U = (j = E.utils.getPaletteColorString(i, W)) !== null && j !== void 0 ? j : h.HEX_SALMON,
                        z = function(H) {
                            var Y = H.id,
                                X = H.isReadOnly;
                            X || (G(Y), u && u(i), (0, S.userChangeCustomColorSwatch)(Y))
                        },
                        V = function(H, Y) {
                            var X = f(Y),
                                Z = b(d({}, F), C({}, W, X)),
                                $ = E.SafeAccentPaletteMappingBuilders.build(C({}, h.SystemColorId.accent, Z[h.SystemColorId.accent])),
                                J = {
                                    colors: E.utils.colorsMapToArray(d({}, Z, $))
                                };
                            p && p(J), (0, S.userChangeCustomColor)(H)
                        };
                    return y.default.createElement("div", null, y.default.createElement(A.SwatchPicker, {
                        palette: i,
                        activeSlotId: W,
                        onSelect: z
                    }), y.default.createElement("div", null, y.default.createElement(v.ColorPicker, {
                        onChange: V,
                        value: U,
                        htmlAttributes: {
                            "data-test": "palette-color-picker"
                        }
                    }, y.default.createElement(l, null), y.default.createElement(c, null), y.default.createElement(o, {
                        hideAlpha: !0
                    }))))
                };
            e.propTypes = {
                palette: w.PalettePropType,
                onUpdate: O.default.func,
                onSelect: O.default.func
            };
            var n = e
        },
        497996: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            }), r(887747), r(246857);
            var y = N(r(174161)),
                O = T(r(795478)),
                h = r(840593),
                w = r(407596),
                v = r(892342),
                A = T(r(332514)),
                E = T(r(210750)),
                B = r(764521);

            function S(s, a) {
                (a == null || a > s.length) && (a = s.length);
                for (var f = 0, l = new Array(a); f < a; f++) l[f] = s[f];
                return l
            }

            function m(s) {
                if (Array.isArray(s)) return s
            }

            function T(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function C(s) {
                if (typeof WeakMap != "function") return null;
                var a = new WeakMap,
                    f = new WeakMap;
                return (C = function(l) {
                    return l ? f : a
                })(s)
            }

            function N(s, a) {
                if (!a && s && s.__esModule) return s;
                if (s === null || typeof s != "object" && typeof s != "function") return {
                    default: s
                };
                var f = C(a);
                if (f && f.has(s)) return f.get(s);
                var l = {},
                    c = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in s)
                    if (o !== "default" && Object.prototype.hasOwnProperty.call(s, o)) {
                        var e = c ? Object.getOwnPropertyDescriptor(s, o) : null;
                        e && (e.get || e.set) ? Object.defineProperty(l, o, e) : l[o] = s[o]
                    }
                return l.default = s, f && f.set(s, l), l
            }

            function D(s, a) {
                var f = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
                if (f != null) {
                    var l = [],
                        c = !0,
                        o = !1,
                        e, n;
                    try {
                        for (f = f.call(s); !(c = (e = f.next()).done) && (l.push(e.value), !(a && l.length === a)); c = !0);
                    } catch (t) {
                        o = !0, n = t
                    } finally {
                        try {
                            !c && f.return != null && f.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return l
                }
            }

            function x() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function g(s, a) {
                return m(s) || D(s, a) || P(s, a) || x()
            }

            function P(s, a) {
                if (s) {
                    if (typeof s == "string") return S(s, a);
                    var f = Object.prototype.toString.call(s).slice(8, -1);
                    if (f === "Object" && s.constructor && (f = s.constructor.name), f === "Map" || f === "Set") return Array.from(f);
                    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)) return S(s, a)
                }
            }
            var d = 300,
                I = function(s) {
                    var a = s.activePalette,
                        f = s.onSelect,
                        l = s.onGenerate,
                        c = s.regenerateOnMount,
                        o = c === void 0 ? !0 : c,
                        e = g((0, y.useState)((0, w.getPaletteSeedColorString)(a)), 2),
                        n = e[0],
                        t = e[1],
                        i = (0, E.default)(function(u) {
                            t(u), (0, B.userChangeColor)(u)
                        }, d);
                    return (0, y.useEffect)(function() {
                        return o && t(n),
                            function() {
                                typeof i == "function" && i.flush()
                            }
                    }, []), y.default.createElement(v.Box, {
                        css: {
                            display: "grid",
                            gridTemplateColumns: "50fr 50fr",
                            columnGap: "2px"
                        }
                    }, y.default.createElement(A.default, {
                        activePalette: a,
                        onSelect: f
                    }))
                };
            I.propTypes = {
                activePalette: h.PalettePropType,
                onSelect: O.default.func,
                onGenerate: O.default.func,
                regenerateOnMount: O.default.bool
            };
            var b = I
        },
        267061: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            }), r(887747), r(818541);
            var y = d(r(845076)),
                O = r(675213),
                h = r(317836),
                w = d(r(795478)),
                v = r(840593),
                A = b(r(174161)),
                E = r(359530),
                B = r(955896),
                S = r(617385),
                m = d(r(194105)),
                T = r(561527),
                C = r(764521);

            function N(e) {
                if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function x(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function g(e) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(e)
            }

            function P(e, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && a(e, n)
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e) {
                if (typeof WeakMap != "function") return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (I = function(i) {
                    return i ? t : n
                })(e)
            }

            function b(e, n) {
                if (!n && e && e.__esModule) return e;
                if (e === null || typeof e != "object" && typeof e != "function") return {
                    default: e
                };
                var t = I(n);
                if (t && t.has(e)) return t.get(e);
                var i = {},
                    u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var p in e)
                    if (p !== "default" && Object.prototype.hasOwnProperty.call(e, p)) {
                        var M = u ? Object.getOwnPropertyDescriptor(e, p) : null;
                        M && (M.get || M.set) ? Object.defineProperty(i, p, M) : i[p] = e[p]
                    }
                return i.default = e, t && t.set(e, i), i
            }

            function s(e, n) {
                return n && (f(n) === "object" || typeof n == "function") ? n : N(e)
            }

            function a(e, n) {
                return a = Object.setPrototypeOf || function(i, u) {
                    return i.__proto__ = u, i
                }, a(e, n)
            }
            var f = function(e) {
                "@swc/helpers - typeof";
                return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function c(e) {
                var n = l();
                return function() {
                    var i = g(e),
                        u;
                    if (n) {
                        var p = g(this).constructor;
                        u = Reflect.construct(i, arguments, p)
                    } else u = i.apply(this, arguments);
                    return s(this, u)
                }
            }
            var o = function(e) {
                "use strict";
                P(t, e);
                var n = c(t);

                function t() {
                    D(this, t);
                    var u;
                    return u = n.apply(this, arguments), u.imgForAnalysis = null, u.isUnmounting = !1, u.imgRef = A.default.createRef(), u.state = {
                        imageLoaded: !1,
                        palette: {
                            colors: []
                        }
                    }, u.generateFromImage = function(p) {
                        var M = T.PaletteBuilders.buildFromImage(p);
                        M && u.setState({
                            palette: M
                        }, function() {
                            u.props.onGenerate && u.props.onGenerate(M), (0, C.systemCreateColorPickerPalette)()
                        })
                    }, u.generateFromSrc = function(p) {
                        u.imgForAnalysis = document.createElement("img"), u.imgForAnalysis.width = 256, u.imgForAnalysis.height = 256, u.imgForAnalysis.onload = function() {
                            return u.generateFromImage(u.imgForAnalysis)
                        }, u.imgForAnalysis.src = p
                    }, u.handleFileReaderLoad = function(p) {
                        if (p && p.target && p.target.result) {
                            var M = p.target.result,
                                W = function() {
                                    u.setState({
                                        imageLoaded: !0
                                    }, function() {
                                        return u.generateFromSrc(M)
                                    })
                                };
                            u.imgRef.current.onload = W, u.imgRef.current.src = M
                        }
                    }, u.handleImageUpload = function(p) {
                        (0, C.userSubmitImageUploader)(), u.setState({
                            imageLoaded: !1
                        }, function() {
                            u.reader = new FileReader, u.reader.addEventListener("load", u.handleFileReaderLoad), u.reader.readAsDataURL(p)
                        })
                    }, u
                }
                var i = t.prototype;
                return i.componentWillUnmount = function() {
                    this.reader && (this.reader.removeEventListener("load", this.handleFileReaderLoad), this.reader = null), this.imgRef.current && (this.imgRef.current.onload = null), this.imgForAnalysis && (this.imgForAnalysis.onload = null, this.imgForAnalysis = null)
                }, i.render = function() {
                    return A.default.createElement("div", null, A.default.createElement(S.FileDropZone, {
                        className: (0, y.default)(m.default.fileDropZone, x({}, m.default.imgloaded, this.state.imageLoaded)),
                        onDrop: this.handleImageUpload,
                        validMimeTypes: h.IMAGE_MIME_TYPES,
                        maxSize: O.MAX_SIZE,
                        multiple: !1
                    }, A.default.createElement(S.FilePicker, {
                        className: m.default.filePicker,
                        onChange: this.handleImageUpload,
                        validMimeTypes: h.IMAGE_MIME_TYPES,
                        maxSize: O.MAX_SIZE,
                        multiple: !1
                    }, A.default.createElement("img", {
                        ref: this.imgRef,
                        className: m.default.img,
                        "data-dis-type": "self-contained",
                        "data-dis-particle-type": "ExplodingParticle",
                        "data-dis-reduction-factor": "50",
                        alt: (0, E.t)("preview image")
                    }), A.default.createElement("div", {
                        key: "label",
                        className: m.default.label
                    }, A.default.createElement(B.T, {
                        project: "src.seven-one"
                    }, "Drop an image here, or click to browse.")), A.default.createElement("div", {
                        key: "icon",
                        className: m.default.uploadIcon
                    }))))
                }, t.getDerivedStateFromProps = function(p) {
                    var M = p.palette;
                    return {
                        palette: M
                    }
                }, t
            }(A.Component);
            o.propTypes = {
                palette: v.PalettePropType.isRequired,
                onGenerate: w.default.func
            }
        },
        351036: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return N
                }
            }), r(887747), r(246857);
            var y = T(r(174161)),
                O = T(r(795478)),
                h = r(359530),
                w = r(840593),
                v = r(31751),
                A = r(892342),
                E = r(407596),
                B = r(163015),
                S = r(761224),
                m = r(764521);

            function T(D) {
                return D && D.__esModule ? D : {
                    default: D
                }
            }
            var C = function(D) {
                var x = D.palette,
                    g = D.onClick,
                    P = (0, E.filterPaletteColorsBySystemVisible)(x, S.SYSTEM_COLOR_AS_ORDERED_ARRAY_V2),
                    d = function(b) {
                        g(b), (0, m.clickPalettePreview)()
                    },
                    I = function(b) {
                        g(b), (0, m.clickEditPaletteLink)()
                    };
                return y.default.createElement(y.default.Fragment, null, y.default.createElement(A.Flex, {
                    "data-test": "palette-preview",
                    onClick: d,
                    flexWrap: "wrap",
                    flexDirection: "column",
                    mt: 3,
                    height: 136,
                    bg: "gray.800",
                    border: 1,
                    borderColor: "gray.800",
                    borderRadius: 6,
                    overflow: "hidden",
                    sx: {
                        cursor: "pointer"
                    }
                }, P.colors.map(function(b) {
                    return y.default.createElement(v.Swatch, {
                        key: b.id,
                        color: b,
                        width: "".concat(100 / 3, "%"),
                        height: b.id === B.SystemColorId.accent ? "100%" : "50%"
                    })
                })), y.default.createElement(A.Button.Tertiary, {
                    onClick: I,
                    color: "gray.100",
                    width: "100%",
                    mx: "auto",
                    mt: 2
                }, (0, h.t)("Edit Palette")))
            };
            C.propTypes = {
                palette: w.PalettePropType.isRequired,
                onClick: O.default.func.isRequired
            };
            var N = C
        },
        871154: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            }), r(887747);
            var y = g(r(174161)),
                O = D(r(795478)),
                h = D(r(845076)),
                w = r(419467),
                v = r(561527),
                A = r(840593),
                E = r(31751),
                B = D(r(565744));

            function S(l) {
                if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return l
            }

            function m(l, c) {
                if (!(l instanceof c)) throw new TypeError("Cannot call a class as a function")
            }

            function T() {
                return T = Object.assign || function(l) {
                    for (var c = 1; c < arguments.length; c++) {
                        var o = arguments[c];
                        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (l[e] = o[e])
                    }
                    return l
                }, T.apply(this, arguments)
            }

            function C(l) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                    return o.__proto__ || Object.getPrototypeOf(o)
                }, C(l)
            }

            function N(l, c) {
                if (typeof c != "function" && c !== null) throw new TypeError("Super expression must either be null or a function");
                l.prototype = Object.create(c && c.prototype, {
                    constructor: {
                        value: l,
                        writable: !0,
                        configurable: !0
                    }
                }), c && d(l, c)
            }

            function D(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }

            function x(l) {
                if (typeof WeakMap != "function") return null;
                var c = new WeakMap,
                    o = new WeakMap;
                return (x = function(e) {
                    return e ? o : c
                })(l)
            }

            function g(l, c) {
                if (!c && l && l.__esModule) return l;
                if (l === null || typeof l != "object" && typeof l != "function") return {
                    default: l
                };
                var o = x(c);
                if (o && o.has(l)) return o.get(l);
                var e = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var t in l)
                    if (t !== "default" && Object.prototype.hasOwnProperty.call(l, t)) {
                        var i = n ? Object.getOwnPropertyDescriptor(l, t) : null;
                        i && (i.get || i.set) ? Object.defineProperty(e, t, i) : e[t] = l[t]
                    }
                return e.default = l, o && o.set(l, e), e
            }

            function P(l, c) {
                return c && (I(c) === "object" || typeof c == "function") ? c : S(l)
            }

            function d(l, c) {
                return d = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, d(l, c)
            }
            var I = function(l) {
                "@swc/helpers - typeof";
                return l && typeof Symbol != "undefined" && l.constructor === Symbol ? "symbol" : typeof l
            };

            function b() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (l) {
                    return !1
                }
            }

            function s(l) {
                var c = b();
                return function() {
                    var e = C(l),
                        n;
                    if (c) {
                        var t = C(this).constructor;
                        n = Reflect.construct(e, arguments, t)
                    } else n = e.apply(this, arguments);
                    return P(this, n)
                }
            }
            var a = (0, w.memoize)(function(l, c) {
                    var o = v.utils.colorsArrayToMap(l.colors);
                    return "".concat(c, "/").concat(v.utils.paletteMappingToCacheKey(o))
                }),
                f = function(l) {
                    "use strict";
                    N(o, l);
                    var c = s(o);

                    function o() {
                        m(this, o);
                        var n;
                        return n = c.apply(this, arguments), n.handleSelectPalette = function(t, i, u) {
                            return function(p) {
                                n.props.onSelect && n.props.onSelect({
                                    palette: t,
                                    isActive: i,
                                    index: u
                                })
                            }
                        }, n
                    }
                    var e = o.prototype;
                    return e.render = function() {
                        var t = this,
                            i = this.props,
                            u = i.className,
                            p = i.activePalette,
                            M = i.palettes,
                            W = i.PaletteSampleProps,
                            G = !1;
                        return y.default.createElement("div", {
                            "data-test": "palette-selector",
                            className: (0, h.default)(B.default.palettesV2, u)
                        }, M.map(function(F, j) {
                            var U = !G && p && v.PaletteBuilders.matches(p, F);
                            return U && (G = !0), y.default.createElement(E.PaletteSampleButton, T({
                                key: F.id || a(F, j),
                                palette: F,
                                isActive: U,
                                onClick: t.handleSelectPalette(F, U, j),
                                "data-test": "palette-selector-sample-".concat(j, "-").concat(U ? "active" : "inactive")
                            }, W))
                        }))
                    }, o
                }(y.Component);
            f.propTypes = {
                className: O.default.string,
                activePalette: A.PalettePropType,
                palettes: O.default.arrayOf(A.PalettePropType).isRequired,
                onSelect: O.default.func,
                PaletteSampleProps: O.default.object
            }
        },
        355512: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            }), r(887747), r(246857);
            var y = r(419467),
                O = r(561527),
                h = r(761224),
                w = r(411063),
                v = N(r(795478)),
                A = r(840593),
                E = x(r(174161)),
                B = r(153146),
                S = r(548362);

            function m(o, e) {
                (e == null || e > o.length) && (e = o.length);
                for (var n = 0, t = new Array(e); n < e; n++) t[n] = o[n];
                return t
            }

            function T(o) {
                if (Array.isArray(o)) return m(o)
            }

            function C(o, e, n) {
                return e in o ? Object.defineProperty(o, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[e] = n, o
            }

            function N(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function D(o) {
                if (typeof WeakMap != "function") return null;
                var e = new WeakMap,
                    n = new WeakMap;
                return (D = function(t) {
                    return t ? n : e
                })(o)
            }

            function x(o, e) {
                if (!e && o && o.__esModule) return o;
                if (o === null || typeof o != "object" && typeof o != "function") return {
                    default: o
                };
                var n = D(e);
                if (n && n.has(o)) return n.get(o);
                var t = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var u in o)
                    if (u !== "default" && Object.prototype.hasOwnProperty.call(o, u)) {
                        var p = i ? Object.getOwnPropertyDescriptor(o, u) : null;
                        p && (p.get || p.set) ? Object.defineProperty(t, u, p) : t[u] = o[u]
                    }
                return t.default = o, n && n.set(o, t), t
            }

            function g(o) {
                if (typeof Symbol != "undefined" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o)
            }

            function P() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function d(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e] != null ? arguments[e] : {},
                        t = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
                        return Object.getOwnPropertyDescriptor(n, i).enumerable
                    }))), t.forEach(function(i) {
                        C(o, i, n[i])
                    })
                }
                return o
            }

            function I(o, e) {
                var n = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(o);
                    e && (t = t.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(o, i).enumerable
                    })), n.push.apply(n, t)
                }
                return n
            }

            function b(o, e) {
                return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : I(Object(e)).forEach(function(n) {
                    Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(e, n))
                }), o
            }

            function s(o) {
                return T(o) || g(o) || a(o) || P()
            }

            function a(o, e) {
                if (o) {
                    if (typeof o == "string") return m(o, e);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(o, e)
                }
            }
            var f = function(o) {
                    var e = O.utils.stringifyPaletteColorValues(o),
                        n = O.utils.sortColorsBySystemColorOrder(e, h.SYSTEM_COLOR_AS_ORDERED_ARRAY_V2).reduce(function(i, u) {
                            var p = (0, y.find)(w.SystemColorConfigs, {
                                    id: u.id
                                }),
                                M = !!p.readonly;
                            return p.userVisible ? s(i).concat([b(d({}, u), {
                                readonly: M
                            })]) : i
                        }, []),
                        t = e.filter(function(i) {
                            var u = i.id;
                            return !O.constants.SystemColorId[u]
                        });
                    return s(n).concat(s(t))
                },
                l = function(o) {
                    var e = o.palette,
                        n = o.activeSlotId,
                        t = o.onSelect,
                        i = (0, E.useMemo)(function() {
                            return f(e)
                        }, [e]);
                    return i.length ? E.default.createElement(B.Stack, {
                        direction: "row",
                        justifyContent: "space-around",
                        my: 3,
                        mx: 2,
                        space: 2
                    }, i.map(function(u) {
                        var p = u.id,
                            M = u.value,
                            W = u.readonly,
                            G = W === void 0 ? !1 : W;
                        return E.default.createElement(S.ColorPicker.Swatch.Selectable, {
                            key: p,
                            "data-test": "palette-sample",
                            "data-color-id": p,
                            "data-color-value": M == null ? void 0 : M.toLowerCase(),
                            color: M,
                            isSelected: p === n,
                            onChange: function() {
                                return t({
                                    id: p,
                                    isReadOnly: G
                                })
                            }
                        })
                    })) : null
                };
            l.propTypes = {
                className: v.default.string,
                SwatchClassName: v.default.string,
                PaletteSampleClassName: v.default.string,
                palette: A.PalettePropType.isRequired,
                activeSlotId: v.default.string,
                onSelect: v.default.func
            };
            var c = l
        },
        139719: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            }), r(887747), r(246857);
            var y = D(r(845076)),
                O = r(359530),
                h = r(561527),
                w = r(333043),
                v = D(r(795478)),
                A = r(840593),
                E = D(r(174161)),
                B = r(892342),
                S = r(986456),
                m = D(r(515052)),
                T = D(r(11256));

            function C(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function N() {
                return N = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }, N.apply(this, arguments)
            }

            function D(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function x(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n] != null ? arguments[n] : {},
                        i = Object.keys(t);
                    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(u) {
                        return Object.getOwnPropertyDescriptor(t, u).enumerable
                    }))), i.forEach(function(u) {
                        C(e, u, t[u])
                    })
                }
                return e
            }

            function g(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter(function(u) {
                        return Object.getOwnPropertyDescriptor(e, u).enumerable
                    })), t.push.apply(t, i)
                }
                return t
            }

            function P(e, n) {
                return n = n != null ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }), e
            }
            var d = function(e) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h.constants.DEFAULT_LUMA_THRESHOLD_PERCENTAGE;
                return (0, w.toLuma)(e) > n ? "#000000" : "#ffffff"
            };

            function I(e) {
                var n = e.hasEditButton,
                    t = e.hasClickHandler;
                return !!(t || n && !t)
            }

            function b(e) {
                var n = e.hasEditButton,
                    t = e.hasClickHandler;
                return !(n && t)
            }
            var s = function(e) {
                    var n = e.headingColorId,
                        t = e.largeTextStyles;
                    return E.default.createElement(B.Flex, {
                        as: "span",
                        "data-color-id": n,
                        className: m.default.largeSample,
                        css: x({}, t),
                        alignSelf: "center"
                    }, "Aa")
                },
                a = function(e) {
                    var n = e.children,
                        t = e.cardBodyColorId,
                        i = e.cardBodyColor;
                    return E.default.createElement(B.Flex, null, E.default.createElement(B.Text.Label, {
                        "data-color-id": t,
                        color: i,
                        alignSelf: "center",
                        position: "relative",
                        ml: 2
                    }, n))
                },
                f = function(e) {
                    var n = e.bodyColor,
                        t = e.handleEdit,
                        i = e.editButtonColor;
                    return E.default.createElement(B.Flex, {
                        className: m.default.editButton,
                        justifyContent: "flex-end",
                        alignItems: "center",
                        color: n,
                        htmlAttributes: {
                            "data-test": "theme-card-edit-button"
                        },
                        onClick: t,
                        role: "button"
                    }, E.default.createElement(S.Edit, {
                        color: i
                    }))
                },
                l = function(e) {
                    var n = e.action,
                        t = e.bodyColor,
                        i = e.editButtonColor,
                        u = e.handleEdit,
                        p = e.hasEditButton,
                        M = e.isSectionThemeIndicator;
                    return p ? E.default.createElement(f, {
                        bodyColor: t,
                        handleEdit: u,
                        editButtonColor: i
                    }) : E.default.createElement(B.Flex, {
                        pl: n || M ? 0 : 8
                    }, n)
                },
                c = E.default.forwardRef(function(e, n) {
                    var t = e.capture,
                        i = e.className,
                        u = e.CardComponent,
                        p = e.isActive,
                        M = p === void 0 ? !1 : p,
                        W = e.isSectionThemeIndicator,
                        G = W === void 0 ? !1 : W,
                        F = e.cardMappings,
                        j = e.palette,
                        U = e.cardStyle,
                        z = U === void 0 ? {} : U,
                        V = e.onClick,
                        H = e.onEdit,
                        Y = e.htmlAttributes,
                        X = e.value,
                        Z = e.text,
                        $ = Z === void 0 ? (0, O.t)("Sample Text") : Z,
                        J = e.action,
                        oe = e.dataAttrKey;
                    u = u || B.Touchable.Element.WithoutFeedback;
                    var k = !!V,
                        _ = function(Q) {
                            V ? V(Q) : H && H(Q)
                        },
                        le = function(Q) {
                            H && (Q.stopPropagation(), H(Q))
                        },
                        K = !J && H,
                        ee = F.backgroundColorId,
                        q = F.headingColorId,
                        ue = F.bodyColorId,
                        ie = k ? M : !1,
                        ce = (0, y.default)(m.default.card, T.default.UNMASK_ELEMENT, C({}, m.default.cardActive, ie), C({}, m.default.cardWithEditButton, K), C({}, m.default.clickable, I({
                            hasEditButton: K,
                            hasClickHandler: k
                        })), C({}, m.default.hoverable, b({
                            hasEditButton: K,
                            hasClickHandler: k
                        })), i),
                        te = F.isBackgroundCustom ? F.backgroundColorId : h.utils.getPaletteColorString(j, ee),
                        re = F.isHeadingCustom ? F.headingColorId : h.utils.getPaletteColorString(j, q),
                        fe = {
                            color: re
                        },
                        ne = F.isBodyCustom ? F.bodyColorId : h.utils.getPaletteColorString(j, ue),
                        ae = re,
                        se = q,
                        de = ["#ffffff", "#000000"].includes(ne) ? ne : d(te);
                    return E.default.createElement(u, N({
                        className: ce,
                        css: P(x({}, z), {
                            background: te
                        }),
                        ref: n,
                        "data-color-id": ee,
                        "data-key": oe,
                        onClick: t ? void 0 : _,
                        onClickCapture: t ? _ : void 0,
                        value: X
                    }, Y), E.default.createElement(B.Flex, {
                        mx: 3,
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }, E.default.createElement(s, {
                        largeTextStyles: fe,
                        headingColorId: q
                    }), E.default.createElement(a, {
                        cardBodyColor: ae,
                        cardBodyColorId: se
                    }, $), E.default.createElement(l, {
                        action: J,
                        bodyColor: ae,
                        editButtonColor: de,
                        handleEdit: le,
                        hasEditButton: K,
                        isSectionThemeIndicator: G
                    })))
                });
            c.propTypes = {
                className: v.default.string,
                CardComponent: v.default.oneOfType([v.default.string, v.default.element]),
                htmlAttributes: v.default.object,
                isActive: v.default.bool,
                cardMappings: v.default.shape({
                    backgroundColorId: v.default.string.isRequired,
                    headingColorId: v.default.string.isRequired,
                    bodyColorId: v.default.string.isRequired
                }).isRequired,
                palette: A.PalettePropType.isRequired,
                cardStyle: v.default.object,
                onClick: v.default.func,
                onEdit: v.default.func,
                errors: v.default.object,
                fieldId: v.default.string,
                fieldIndex: v.default.number,
                formValues: v.default.object,
                presentationMode: v.default.string,
                value: v.default.string,
                text: v.default.string,
                action: v.default.node
            };
            var o = c
        },
        155500: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            }), r(246857);
            var y = C(r(845076)),
                O = C(r(795478)),
                h = C(r(174161)),
                w = r(892342),
                v = r(359530),
                A = r(405252),
                E = r(31751),
                B = C(r(31175)),
                S = C(r(840568)),
                m = C(r(283727));

            function T() {
                return T = Object.assign || function(P) {
                    for (var d = 1; d < arguments.length; d++) {
                        var I = arguments[d];
                        for (var b in I) Object.prototype.hasOwnProperty.call(I, b) && (P[b] = I[b])
                    }
                    return P
                }, T.apply(this, arguments)
            }

            function C(P) {
                return P && P.__esModule ? P : {
                    default: P
                }
            }
            var N = (0, v.t)("This Page"),
                D = (0, v.t)("Other Themes"),
                x = function(P) {
                    var d = P.onEdit,
                        I = P.onSelect,
                        b = P.activePalette,
                        s = P.defaultThemeId,
                        a = P.isSelected,
                        f = P.className,
                        l = P.isGroupingEnabled,
                        c = l === void 0 ? !1 : l,
                        o = (0, S.default)(),
                        e = o.onPage,
                        n = o.notOnPage,
                        t = function(p, M) {
                            M || I == null || I(p)
                        },
                        i = function(p) {
                            d == null || d(p)
                        },
                        u = function(p, M) {
                            var W = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                            return !p || p.length === 0 ? null : h.default.createElement(w.Box, {
                                mt: W ? 3 : 0
                            }, M ? h.default.createElement(w.Text.Label, {
                                mb: 2
                            }, M) : null, p.map(function(G) {
                                var F = G.id,
                                    j = G.label,
                                    U = s === F,
                                    z = (0, B.default)(F),
                                    V = a ? a(F) : U,
                                    H = {};
                                return I && (H.onClick = function() {
                                    return t(F, V)
                                }), d && (H.onEdit = function() {
                                    return i(F)
                                }), h.default.createElement(h.default.Fragment, null, h.default.createElement("div", {
                                    className: m.default.cardsWrapperCard,
                                    key: "card-container-".concat(F)
                                }, h.default.createElement(E.ThemeCardItem, T({
                                    key: "card-".concat(F),
                                    palette: b,
                                    cardMappings: z,
                                    isActive: V,
                                    text: j,
                                    htmlAttributes: {
                                        "data-id": F,
                                        "data-test": "theme-card-".concat(F)
                                    }
                                }, H))))
                            }))
                        };
                    return h.default.createElement("div", {
                        className: (0, y.default)(m.default.wrapper, f),
                        "data-test": "theme-cards"
                    }, h.default.createElement("div", {
                        className: m.default.cardsWrapper
                    }, c ? h.default.createElement(h.default.Fragment, null, u(e, N), u(n, D, !0)) : u(A.ThemesConfig)))
                };
            x.propTypes = {
                className: O.default.string,
                activePalette: O.default.object.isRequired,
                defaultThemeId: O.default.string,
                isSelected: O.default.func,
                onSelect: O.default.func,
                onEdit: O.default.func
            };
            var g = x
        },
        31751: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            });

            function y(D, x) {
                for (var g in x) Object.defineProperty(D, g, {
                    enumerable: !0,
                    get: x[g]
                })
            }
            y(R, {
                Swatch: function() {
                    return O.Swatch
                },
                PaletteSample: function() {
                    return O.PaletteSample
                },
                PaletteSampleButton: function() {
                    return O.PaletteSampleButton
                },
                ThemeCardItem: function() {
                    return h.default
                },
                ThemeCards: function() {
                    return w.default
                },
                ModeSelector: function() {
                    return v.default
                },
                PaletteCustomizer: function() {
                    return E.default
                },
                PaletteFromColor: function() {
                    return B.default
                },
                PaletteFromImage: function() {
                    return S.default
                },
                PaletteSelector: function() {
                    return T.default
                },
                PalettePreview: function() {
                    return m.default
                },
                SwatchPicker: function() {
                    return A.default
                },
                DesignColors: function() {
                    return C.default
                }
            }), r(887747);
            var O = r(840593),
                h = N(r(139719)),
                w = N(r(155500)),
                v = N(r(978650)),
                A = N(r(355512)),
                E = N(r(917812)),
                B = N(r(497996)),
                S = N(r(267061)),
                m = N(r(351036)),
                T = N(r(871154)),
                C = N(r(78086));

            function N(D) {
                return D && D.__esModule ? D : {
                    default: D
                }
            }
        },
        840568: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            var y = r(174161),
                O = r(405252),
                h = r(415467),
                w = r(93502),
                v = function() {
                    var E = (0, h.useCmsSelector)(w.getPageSectionColorThemes),
                        B = (0, y.useMemo)(function() {
                            return O.ThemesConfig.reduce(function(S, m) {
                                return E.includes(m.id) ? S.onPage.push(m) : S.notOnPage.push(m), S
                            }, {
                                onPage: [],
                                notOnPage: []
                            })
                        }, [E]);
                    return B
                },
                A = v
        },
        31175: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            }), Object.defineProperty(R, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            var y = r(405252),
                O = r(910276),
                h = r(415467),
                w = r(93502),
                v = r(25e4),
                A = function(B) {
                    var S = y.ThemesConfigById[B];
                    if (!S) return null;
                    var m = (0, h.getCmsReduxState)(),
                        T = {
                            siteAestheticValues: {
                                colors: (0, w.getColors)(m)
                            }
                        },
                        C = (0, O.getThemeIndex)(T, B),
                        N = (0, O.getThemeByIndex)(T, C);
                    return (0, v.extractThemeCardMappings)(N)
                },
                E = A
        },
        910276: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            });

            function y(m, T) {
                for (var C in T) Object.defineProperty(m, C, {
                    enumerable: !0,
                    get: T[C]
                })
            }
            y(R, {
                getThemes: function() {
                    return h
                },
                getThemeById: function() {
                    return w
                },
                getThemeByIndex: function() {
                    return v
                },
                getThemeIndex: function() {
                    return A
                },
                getDefaultThemeId: function() {
                    return E
                },
                getDefaultTheme: function() {
                    return B
                },
                getDefaultThemeIndex: function() {
                    return S
                }
            });
            var O = r(419467),
                h = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return (0, O.get)(m, "siteAestheticValues.colors.themes", [])
                },
                w = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        T = arguments.length > 1 ? arguments[1] : void 0;
                    return (0, O.find)(h(m), {
                        themeId: T
                    })
                },
                v = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        T = arguments.length > 1 ? arguments[1] : void 0,
                        C = h(m);
                    return T > -1 && C.length > T ? C[T] : null
                },
                A = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        T = arguments.length > 1 ? arguments[1] : void 0;
                    return (0, O.findIndex)(h(m), {
                        themeId: T
                    })
                },
                E = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return (0, O.get)(m, "siteAestheticValues.colors.defaultThemeId")
                },
                B = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return w(m, E(m))
                },
                S = function() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    return A(m, E(m))
                }
        },
        705025: function(L, R, r) {
            "use strict";
            Object.defineProperty(R, "__esModule", {
                value: !0
            });

            function y(S, m) {
                for (var T in m) Object.defineProperty(S, T, {
                    enumerable: !0,
                    get: m[T]
                })
            }
            y(R, {
                toggleTransparentHeader: function() {
                    return v
                },
                toggleIsDefaultTheme: function() {
                    return A
                },
                applyThemeToSection: function() {
                    return E
                },
                sectionThemeEditClick: function() {
                    return B
                }
            });
            var O = w(r(830651)),
                h = r(750775);

            function w(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }
            var v = function(S) {
                    O.default.track({
                        actor: h.ACTOR.USER,
                        action: "change",
                        object_type: "setting",
                        object_identifier: "transparency",
                        object_value: S ? "on" : "off",
                        product_area: h.PAGES,
                        product_page: "section-editor",
                        product_section: "header"
                    })
                },
                A = function(S) {
                    var m = S.sectionId,
                        T = S.location,
                        C = S.isEnabled;
                    O.default.track({
                        actor: h.ACTOR.USER,
                        action: "change",
                        object_type: "setting",
                        object_identifier: "global-theme-override",
                        object_display_name: C ? "on" : "off",
                        indirect_object_id: m,
                        product_area: h.PAGES,
                        product_page: "section-editor",
                        product_section: T
                    })
                },
                E = function(S, m) {
                    O.default.track({
                        actor: h.ACTOR.USER,
                        action: h.ACTION.SELECT,
                        object_type: "section",
                        object_identifier: "theme",
                        object_display_name: S,
                        object_value: m,
                        product_area: h.PAGES,
                        product_page: "section-editor",
                        product_section: "themes"
                    })
                },
                B = function(S, m) {
                    O.default.track({
                        actor: h.ACTOR.USER,
                        action: h.ACTION.CLICK,
                        indirect_object_value: m,
                        object_type: "button",
                        object_identifier: "edit-theme-".concat(S),
                        product_area: h.PAGES,
                        product_page: "section-editor",
                        product_section: "themes"
                    })
                }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/f57cef9fbe68e998de4a49f439bdd9a7/31751-7492aa5694ac1c795c39-min.en-US.js.map