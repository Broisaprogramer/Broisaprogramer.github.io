"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [32013], {
        278152: function(V, O, a) {
            Object.defineProperty(O, "__esModule", {
                value: !0
            }), Object.defineProperty(O, "default", {
                enumerable: !0,
                get: function() {
                    return L
                }
            }), a(246857), a(436657);
            var u = S(a(174161)),
                v = l(a(715526)),
                t = l(a(700769)),
                h = a(898229),
                _ = a(87994),
                T = a(4567),
                B = a(892342),
                M = a(988548),
                A = a(153146),
                R = a(373745);

            function p(n, f) {
                (f == null || f > n.length) && (f = n.length);
                for (var c = 0, e = new Array(f); c < f; c++) e[c] = n[c];
                return e
            }

            function o(n) {
                if (Array.isArray(n)) return n
            }

            function s() {
                return s = Object.assign || function(n) {
                    for (var f = 1; f < arguments.length; f++) {
                        var c = arguments[f];
                        for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (n[e] = c[e])
                    }
                    return n
                }, s.apply(this, arguments)
            }

            function l(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function C(n) {
                if (typeof WeakMap != "function") return null;
                var f = new WeakMap,
                    c = new WeakMap;
                return (C = function(e) {
                    return e ? c : f
                })(n)
            }

            function S(n, f) {
                if (!f && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var c = C(f);
                if (c && c.has(n)) return c.get(n);
                var e = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var d in n)
                    if (d !== "default" && Object.prototype.hasOwnProperty.call(n, d)) {
                        var r = i ? Object.getOwnPropertyDescriptor(n, d) : null;
                        r && (r.get || r.set) ? Object.defineProperty(e, d, r) : e[d] = n[d]
                    }
                return e.default = n, c && c.set(n, e), e
            }

            function w(n, f) {
                var c = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (c != null) {
                    var e = [],
                        i = !0,
                        d = !1,
                        r, m;
                    try {
                        for (c = c.call(n); !(i = (r = c.next()).done) && (e.push(r.value), !(f && e.length === f)); i = !0);
                    } catch (g) {
                        d = !0, m = g
                    } finally {
                        try {
                            !i && c.return != null && c.return()
                        } finally {
                            if (d) throw m
                        }
                    }
                    return e
                }
            }

            function D() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function I(n, f) {
                return o(n) || w(n, f) || j(n, f) || D()
            }

            function j(n, f) {
                if (n) {
                    if (typeof n == "string") return p(n, f);
                    var c = Object.prototype.toString.call(n).slice(8, -1);
                    if (c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set") return Array.from(c);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return p(n, f)
                }
            }
            var y, N = h.legacyV6Flags.isFeatureEnabled(t.default.NESTED_CATEGORIES) ? {
                CONTENT_PICKER: {
                    websiteId: _.context === null || _.context === void 0 || (y = _.context.website) === null || y === void 0 ? void 0 : y.id,
                    versions: {
                        collection: {
                            product: T.productCollectionApiVersion
                        }
                    }
                }
            } : {};

            function G(n) {
                var f = I((0, u.useState)(n.value.url ? n.value.url.length > 0 : !1), 2),
                    c = f[0],
                    e = f[1],
                    i = I((0, u.useState)(!1), 2),
                    d = i[0],
                    r = i[1],
                    m = I((0, u.useState)(null), 2),
                    g = m[0],
                    E = m[1],
                    k = n.value,
                    b = n.onChange,
                    P = k.url,
                    x = function() {
                        return r(!0)
                    },
                    z = function() {
                        return r(!1)
                    },
                    U = (0, u.useCallback)(function() {
                        b({
                            url: "",
                            newWindow: !1
                        })
                    }, [b]);
                return (0, u.useEffect)(function() {
                    e(P ? P.length > 0 : !1)
                }, [P]), u.default.createElement(u.default.Fragment, null, u.default.createElement(A.PopOver, {
                    anchor: g,
                    anchorPoint: {
                        x: "left",
                        y: "middle"
                    },
                    offset: 22,
                    bodyStyles: {
                        borderRadius: 1
                    },
                    position: "left",
                    hideArrow: !0,
                    closeOnClickOutside: !0,
                    isOpen: d,
                    onRequestClose: z
                }, u.default.createElement(R.LinkEditor, s({}, n, {
                    onChange: b,
                    onRequestClose: z,
                    trackingPayload: (0, R.getCMSTrackingPayload)("block-editor")
                }))), u.default.createElement(B.Flex, {
                    width: "100%",
                    px: 4,
                    mt: 1,
                    ref: E
                }, c ? u.default.createElement(R.LinkPreview, {
                    customBoxCss: {
                        width: "100%",
                        backgroundColor: "gray.900",
                        borderRadius: 1
                    },
                    url: P,
                    handleOpenLinkEditor: function() {
                        return x()
                    },
                    removeLink: U,
                    trackingPayload: (0, R.getCMSTrackingPayload)("block-editor")
                }) : u.default.createElement(B.Button.Secondary, {
                    onClick: x,
                    size: "medium",
                    width: "100%",
                    backgroundColor: d ? "gray.800" : "white",
                    borderRadius: 1
                }, u.default.createElement(M.T, {
                    project: "src.seven-one"
                }, "Attach Link"))))
            }

            function L(n) {
                return h.legacyV6Flags.isFeatureEnabled(t.default.LINK_EDITOR_REDESIGN) ? u.default.createElement(G, s({}, n)) : u.default.createElement(v.default, s({}, n, {
                    componentProps: N
                }))
            }
        },
        752177: function(V, O, a) {
            Object.defineProperty(O, "__esModule", {
                value: !0
            }), Object.defineProperty(O, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            }), a(246857);
            var u = y(a(174161)),
                v = a(419467),
                t = a(548362),
                h = a(892342),
                _ = y(a(112033)),
                T = y(a(739165)),
                B = a(480689),
                M = G(a(582581)),
                A = a(214820),
                R = a(415467),
                p = a(93502),
                o = a(918909),
                s = a(359530),
                l = y(a(948125)),
                C = a(997220),
                S = a(579888),
                w = a(883411),
                D = y(a(845076)),
                I = y(a(795478));

            function j() {
                return j = Object.assign || function(r) {
                    for (var m = 1; m < arguments.length; m++) {
                        var g = arguments[m];
                        for (var E in g) Object.prototype.hasOwnProperty.call(g, E) && (r[E] = g[E])
                    }
                    return r
                }, j.apply(this, arguments)
            }

            function y(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function N(r) {
                if (typeof WeakMap != "function") return null;
                var m = new WeakMap,
                    g = new WeakMap;
                return (N = function(E) {
                    return E ? g : m
                })(r)
            }

            function G(r, m) {
                if (!m && r && r.__esModule) return r;
                if (r === null || typeof r != "object" && typeof r != "function") return {
                    default: r
                };
                var g = N(m);
                if (g && g.has(r)) return g.get(r);
                var E = {},
                    k = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var b in r)
                    if (b !== "default" && Object.prototype.hasOwnProperty.call(r, b)) {
                        var P = k ? Object.getOwnPropertyDescriptor(r, b) : null;
                        P && (P.get || P.set) ? Object.defineProperty(E, b, P) : E[b] = r[b]
                    }
                return E.default = r, g && g.set(r, E), E
            }
            var L = l.default.isVersion(_.default.SEVEN),
                n = (0, v.memoize)(function(r, m, g) {
                    var E = u.default.forwardRef(function(k, b) {
                        var P = g ? A.buttonSizeToVariantMap[k.value] : k.value;
                        return u.default.createElement(t.Dropdown.Display, j({}, k, {
                            ref: b,
                            mx: 4,
                            px: 3,
                            py: 5,
                            borderRadius: 2,
                            interiorPre: u.default.createElement(M.default, {
                                buttonVariant: P,
                                tweakColorMap: r,
                                tweakValues: m
                            })
                        }))
                    });
                    return E
                }),
                f = (0, v.memoize)(function(r) {
                    var m = function(g) {
                        return u.default.createElement(C.ZIndexStack, null, function(E) {
                            var k = Math.max(E, w.zIndexes.MODALS) + 1;
                            return u.default.createElement(t.Dropdown.Dropdown, j({}, g, {
                                className: (0, D.default)(S.LayoutEngineClassnames.NONINTERACTIVE_CLASSNAME, r),
                                sheetContainerClassName: S.LayoutEngineClassnames.NONINTERACTIVE_CLASSNAME,
                                focusLockIsDisabled: !0,
                                mountAt: g.displayRef.current.ownerDocument.body,
                                style: {
                                    border: 0,
                                    borderRadius: "8px",
                                    paddingBottom: "6px",
                                    paddingTop: "16px",
                                    top: "-16px",
                                    zIndex: k
                                },
                                zIndex: k
                            }))
                        })
                    };
                    return m.propTypes = {
                        displayRef: I.default.shape({
                            current: I.default.shape({
                                tagName: I.default.string
                            })
                        })
                    }, m
                }),
                c = function(r) {
                    var m = r.router;
                    return u.default.createElement(h.Button.Tertiary, {
                        size: "large",
                        width: "100%",
                        onClick: function() {
                            return m.push(o.SITE_STYLES_BUTTONS)
                        }
                    }, (0, s.t)("Edit Button Styles"))
                },
                e = (0, B.withRouter)(c),
                i = function(r) {
                    var m = r.value,
                        g = m === void 0 ? T.default.PRIMARY : m,
                        E = r.onChange,
                        k = r.htmlAttributes,
                        b = r.useDeprecatedButtonSizeValues,
                        P = r.popoverClassName,
                        x = (0, M.useFocusedSectionThemeTweakColorMap)(),
                        z = (0, R.useCmsSelector)(p.getTweakValuesCurrent);
                    return L ? u.default.createElement(h.Box, {
                        mt: 4,
                        mx: 4
                    }, u.default.createElement(t.Dropdown, j({
                        value: g,
                        onChange: E
                    }, k), Object.values(A.ButtonSizesDeprecated).map(function(U, W) {
                        return u.default.createElement(t.Dropdown.Option, {
                            key: W,
                            value: U
                        }, A.ButtonSizeLabelsDeprecated[U])
                    }))) : u.default.createElement(t.Dropdown.Base, j({
                        value: g,
                        onChange: E,
                        renderDisplay: n(x, z, b),
                        renderDropdown: f(P),
                        mt: 1,
                        variant: "floating"
                    }, k), Object.values(T.default).map(function(U, W) {
                        return u.default.createElement(t.Dropdown.Option, {
                            key: W,
                            value: b ? A.buttonVariantToSizeMap[U] : U,
                            interiorPre: u.default.createElement(M.default, {
                                buttonVariant: U,
                                tweakColorMap: x,
                                tweakValues: z
                            })
                        }, A.ButtonVariantExpandedLabels[U])
                    }), u.default.createElement(e, null))
                },
                d = i
        },
        453138: function(V, O, a) {
            Object.defineProperty(O, "__esModule", {
                value: !0
            }), Object.defineProperty(O, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            var u = T(a(270216)),
                v = T(a(445384)),
                t = a(829184);

            function h(o, s) {
                (s == null || s > o.length) && (s = o.length);
                for (var l = 0, C = new Array(s); l < s; l++) C[l] = o[l];
                return C
            }

            function _(o) {
                if (Array.isArray(o)) return h(o)
            }

            function T(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function B(o) {
                if (typeof Symbol != "undefined" && o[Symbol.iterator] != null || o["@@iterator"] != null) return Array.from(o)
            }

            function M() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function A(o) {
                return _(o) || B(o) || R(o) || M()
            }

            function R(o, s) {
                if (o) {
                    if (typeof o == "string") return h(o, s);
                    var l = Object.prototype.toString.call(o).slice(8, -1);
                    if (l === "Object" && o.constructor && (l = o.constructor.name), l === "Map" || l === "Set") return Array.from(l);
                    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return h(o, s)
                }
            }

            function p() {
                var o = v.default.getState().connectedAccounts,
                    s = u.default.getState(),
                    l = s.socialAccountDisplayOrder,
                    C = l === void 0 ? [] : l,
                    S = (0, t.filterConnectedAccounts)(o, {
                        showSocialLinksOnly: !0
                    }),
                    w = [],
                    D = [],
                    I = !0,
                    j = !1,
                    y = void 0;
                try {
                    for (var N = S[Symbol.iterator](), G; !(I = (G = N.next()).done); I = !0) {
                        var L = G.value,
                            n = C.indexOf(L.id);
                        n === -1 ? D.push(L) : w[n] = L
                    }
                } catch (f) {
                    j = !0, y = f
                } finally {
                    try {
                        !I && N.return != null && N.return()
                    } finally {
                        if (j) throw y
                    }
                }
                return A(w).concat(A(D)).filter(Boolean)
            }
        },
        54489: function(V, O, a) {
            Object.defineProperty(O, "__esModule", {
                value: !0
            }), Object.defineProperty(O, "default", {
                enumerable: !0,
                get: function() {
                    return R
                }
            });
            var u = T(a(174161)),
                v = a(542937),
                t = T(a(616442)),
                h = a(363437);

            function _() {
                return _ = Object.assign || function(p) {
                    for (var o = 1; o < arguments.length; o++) {
                        var s = arguments[o];
                        for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (p[l] = s[l])
                    }
                    return p
                }, _.apply(this, arguments)
            }

            function T(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }

            function B(p, o) {
                if (p == null) return {};
                var s = M(p, o),
                    l, C;
                if (Object.getOwnPropertySymbols) {
                    var S = Object.getOwnPropertySymbols(p);
                    for (C = 0; C < S.length; C++) l = S[C], !(o.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(p, l) && (s[l] = p[l])
                }
                return s
            }

            function M(p, o) {
                if (p == null) return {};
                var s = {},
                    l = Object.keys(p),
                    C, S;
                for (S = 0; S < l.length; S++) C = l[S], !(o.indexOf(C) >= 0) && (s[C] = p[C]);
                return s
            }
            var A = function(p) {
                    var o = p.children,
                        s = B(p, ["children"]);
                    return u.default.createElement(t.default, _({
                        marginX: h.space[4]
                    }, s), (o == null ? void 0 : o.length) > 0 ? u.default.createElement(v.ComponentIterator, {
                        components: o
                    }) : null)
                },
                R = A
        },
        821453: function(V, O, a) {
            Object.defineProperty(O, "__esModule", {
                value: !0
            });

            function u(e, i) {
                for (var d in i) Object.defineProperty(e, d, {
                    enumerable: !0,
                    get: i[d]
                })
            }
            u(O, {
                changeBackgroundMode: function() {
                    return M
                },
                changeBackgroundWidth: function() {
                    return A
                },
                changeImageEffect: function() {
                    return R
                },
                changeImageOverlayOpacity: function() {
                    return p
                },
                changeGenerativeBackgroundPresetType: function() {
                    return o
                },
                changeImageEffectPresetType: function() {
                    return s
                },
                enterGenerativeBackgroundPresetSettings: function() {
                    return l
                },
                enterImageEffectPresetSettings: function() {
                    return C
                },
                randomizeBackgroundConfiguration: function() {
                    return S
                },
                randomizeBackgroundConfigurationFromPreview: function() {
                    return w
                },
                selectGenerativeBackgroundImagePreset: function() {
                    return D
                },
                changeGenerativeBackgroundColor: function() {
                    return I
                },
                viewBackgroundArtIntroModal: function() {
                    return j
                },
                clickCloseBackgroundArtIntroModal: function() {
                    return y
                },
                clickLinkInBackgroundArtIntroModal: function() {
                    return N
                },
                userEntersHeaderDisclosure: function() {
                    return G
                },
                userCustomizesHeaderEffects: function() {
                    return L
                },
                userSelectsHeaderBackgroundStyle: function() {
                    return n
                },
                userTogglesHeaderEffect: function() {
                    return f
                },
                userSelectsHeaderDropShadowPreset: function() {
                    return c
                }
            });
            var v = B(a(830651)),
                t = a(750775),
                h = a(411063),
                _ = B(a(706846));

            function T(e, i, d) {
                return i in e ? Object.defineProperty(e, i, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = d, e
            }

            function B(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var M = function(e, i) {
                    var d = (0, _.default)(i),
                        r = i.id;
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickSectionSubpanel",
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "background-mode",
                        object_value: e,
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_id: r,
                        indirect_object_value: d,
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: d
                    })
                },
                A = function(e, i) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "background-width",
                        object_value: e,
                        indirect_object_id: i.id,
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: (0, _.default)(i)
                    })
                },
                R = function(e, i) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "image-effect",
                        object_value: e,
                        indirect_object_id: i.id,
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: (0, _.default)(i)
                    })
                },
                p = function(e, i) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "image-overlay-opacity",
                        object_value: e,
                        indirect_object_id: i.id,
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: (0, _.default)(i)
                    })
                },
                o = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickSectionBackground",
                        indirect_object_identifier: "section-level-custom-options",
                        object_display_name: e != null ? e : "none",
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "background-mode-preset",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                s = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickSectionBackgroundImageEffect",
                        indirect_object_identifier: "section-level-custom-options",
                        object_display_name: e != null ? e : "none",
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "background-image-effect-preset",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                l = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickSectionBackgroundSettings",
                        indirect_object_identifier: "section-level-custom-options",
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "generative-preset-settings",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                C = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickSectionBackgroundImageEffectSettings",
                        indirect_object_identifier: "section-level-custom-options",
                        object_type: t.OBJECT.MENU_ITEM,
                        object_identifier: "generative-preset-settings",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                S = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserSelectCustomSectionBackgroundSettings",
                        indirect_object_identifier: "section-level-custom-options",
                        object_type: t.OBJECT.BUTTON,
                        object_identifier: "randomize",
                        object_display_name: "Randomize",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                w = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserSelectCustomSectionBackgroundSettingsFromPreview",
                        indirect_object_identifier: "section-level-custom-options",
                        object_type: t.OBJECT.BUTTON,
                        object_identifier: "randomize",
                        object_display_name: "Randomize",
                        object_value: e != null ? e : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                D = function(e, i) {
                    var d = (0, _.default)(e);
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserSelectCustomSectionBackgroundSettings",
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_value: d,
                        object_identifier: "preset-image-shape",
                        object_type: t.OBJECT.BUTTON,
                        object_value: i,
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: d
                    })
                },
                I = function(e, i, d, r) {
                    var m = (0, _.default)(e),
                        g, E = (g = {}, T(g, h.ColorTypes.SITE_PALETTE_COLOR, "palette"), T(g, h.ColorTypes.CUSTOM_COLOR, "custom"), g);
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserSelectCustomSectionBackgroundSettings",
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_type: E[r],
                        indirect_object_value: m,
                        object_identifier: d,
                        object_type: "colorpicker",
                        object_value: i != null ? i : "none",
                        product_area: t.PAGES,
                        product_page: "section-editor",
                        editor_type: m
                    })
                },
                j = function() {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.VIEW,
                        event_name: "UserViewOnboardingModal",
                        object_type: "modal",
                        product_section: "background-art-onboarding-section-modal",
                        product_page: "section-editor",
                        product_area: t.PAGES
                    })
                },
                y = function() {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLOSE,
                        event_name: "UserCloseOnboardingModal",
                        object_type: "modal",
                        product_section: "background-art-onboarding-section-modal",
                        product_page: "section-editor",
                        product_area: t.PAGES
                    })
                },
                N = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: "UserClickLinkInOnboardingModal",
                        object_type: "link",
                        product_section: "background-art-onboarding-section-modal",
                        product_page: "section-editor",
                        product_area: t.PAGES,
                        object_value: e,
                        object_identifier: "learn-more"
                    })
                },
                G = function(e, i, d, r) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.CLICK,
                        event_name: i,
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_type: d,
                        indirect_object_value: "site-header",
                        object_display_name: r,
                        object_type: "menuitem",
                        object_identifier: "header-option",
                        object_value: e,
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                L = function(e, i, d, r) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        event_name: "UserCustomizesHeaderEffect",
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_type: e,
                        indirect_object_value: "site-header",
                        object_display_name: i,
                        object_identifier: "header-option",
                        object_type: "menuitem",
                        object_value: String(r),
                        product_area: t.PAGES,
                        product_section: d,
                        product_page: "section-editor"
                    })
                },
                n = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        event_name: "UserSelectsHeaderEffect",
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_value: "site-header",
                        object_display_name: "headerStyle",
                        object_type: "menuitem",
                        object_identifier: "header-option",
                        object_value: e,
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                f = function(e, i, d) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        event_name: "UserCustomizesHeaderEffect",
                        indirect_object_value: "site-header",
                        indirect_object_identifier: "section-level-custom-options",
                        indirect_object_type: d,
                        object_display_name: e,
                        object_identifier: "header-option",
                        object_type: "menuitem",
                        object_value: i ? "on" : "off",
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                },
                c = function(e) {
                    v.default.track({
                        actor: t.ACTOR.USER,
                        action: t.ACTION.SELECT,
                        event_name: "UserSelectsHeaderDropShadowPreset",
                        object_display_name: "dropShadow",
                        object_identifier: "header-option",
                        object_type: "menuitem",
                        object_value: e,
                        product_area: t.PAGES,
                        product_page: "section-editor"
                    })
                }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/497561223da00c35177602cef4b511c3/32013-744d51ac5d256661e583-min.en-US.js.map