(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [33163], {
        158488: function(G) {
            G.exports = {
                yuiIcon: "dVmFiikK4BbZgYTiXcrg"
            }
        },
        440557: function(G) {
            G.exports = {
                message: "xXyJTKnHLsFRX2CfRuro",
                title: "js6UAX4FWkP0UavcAexV",
                subTitle: "Zt6fNYKnn6fzwl414DQD",
                upgradeButton: "aZqWIVZg_3otglouxqvA"
            }
        },
        696823: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return W
                }
            });
            var o = r(579888),
                f = U(r(118845)),
                p = r(415467),
                b = r(93502),
                y = r(3362),
                A = r(304703),
                w = r(419467),
                E = i(r(174161));

            function h(n, s, c) {
                return s in n ? Object.defineProperty(n, s, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[s] = c, n
            }

            function O() {
                return O = Object.assign || function(n) {
                    for (var s = 1; s < arguments.length; s++) {
                        var c = arguments[s];
                        for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (n[e] = c[e])
                    }
                    return n
                }, O.apply(this, arguments)
            }

            function U(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function M(n) {
                if (typeof WeakMap != "function") return null;
                var s = new WeakMap,
                    c = new WeakMap;
                return (M = function(e) {
                    return e ? c : s
                })(n)
            }

            function i(n, s) {
                if (!s && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var c = M(s);
                if (c && c.has(n)) return c.get(n);
                var e = {},
                    t = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in n)
                    if (a !== "default" && Object.prototype.hasOwnProperty.call(n, a)) {
                        var l = t ? Object.getOwnPropertyDescriptor(n, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(e, a, l) : e[a] = n[a]
                    }
                return e.default = n, c && c.set(n, e), e
            }
            var I = (0, w.invert)(o.BlockType),
                L = function(n) {
                    var s = n.blockId,
                        c = n.blockType,
                        e = (0, p.useCmsSelector)(function(t) {
                            return s ? (0, b.getFocusedBlockId)(t) === s || (0, b.getMultiselectedBlockIds)(t).includes(s) : !1
                        });
                    return E.createElement("div", null, !e && E.createElement(f.default, {
                        analyticsId: "".concat(I[c].toLowerCase(), "-block"),
                        animationDirection: "none",
                        hideDefaultText: !0,
                        htmlAttributes: h({}, A.PREMIUM_BLOCK_UPGRADE_MODAL, "")
                    }))
                },
                S = function(n) {
                    return E.createElement(y.EditorTreeProvider, {
                        frameCacheKey: "premium-block-label"
                    }, E.createElement(L, O({}, n)))
                },
                W = S
        },
        813559: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return W
                }
            }), r(246857);
            var o = h(r(174161)),
                f = r(892342),
                p = h(r(118845)),
                b = h(r(479980)),
                y = r(955896);

            function A(n, s) {
                (s == null || s > n.length) && (s = n.length);
                for (var c = 0, e = new Array(s); c < s; c++) e[c] = n[c];
                return e
            }

            function w(n) {
                if (Array.isArray(n)) return n
            }

            function E() {
                return E = Object.assign || function(n) {
                    for (var s = 1; s < arguments.length; s++) {
                        var c = arguments[s];
                        for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (n[e] = c[e])
                    }
                    return n
                }, E.apply(this, arguments)
            }

            function h(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function O(n, s) {
                var c = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (c != null) {
                    var e = [],
                        t = !0,
                        a = !1,
                        l, g;
                    try {
                        for (c = c.call(n); !(t = (l = c.next()).done) && (e.push(l.value), !(s && e.length === s)); t = !0);
                    } catch (T) {
                        a = !0, g = T
                    } finally {
                        try {
                            !t && c.return != null && c.return()
                        } finally {
                            if (a) throw g
                        }
                    }
                    return e
                }
            }

            function U() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function M(n, s) {
                if (n == null) return {};
                var c = i(n, s),
                    e, t;
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(n);
                    for (t = 0; t < a.length; t++) e = a[t], !(s.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(n, e) && (c[e] = n[e])
                }
                return c
            }

            function i(n, s) {
                if (n == null) return {};
                var c = {},
                    e = Object.keys(n),
                    t, a;
                for (a = 0; a < e.length; a++) t = e[a], !(s.indexOf(t) >= 0) && (c[t] = n[t]);
                return c
            }

            function I(n, s) {
                return w(n) || O(n, s) || L(n, s) || U()
            }

            function L(n, s) {
                if (n) {
                    if (typeof n == "string") return A(n, s);
                    var c = Object.prototype.toString.call(n).slice(8, -1);
                    if (c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set") return Array.from(c);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return A(n, s)
                }
            }
            var S = {
                mb: "4px"
            };

            function W(n) {
                var s = n.analyticsId,
                    c = n.isTrial,
                    e = n.label,
                    t = M(n, ["analyticsId", "isTrial", "label"]),
                    a = I((0, b.default)(function(g) {
                        var T = g.purchaseCompleted
                    }), 1),
                    l = a[0];
                return o.default.createElement(f.Flex, E({
                    mt: 4,
                    mx: 2,
                    px: 2,
                    flexDirection: "column",
                    alignItems: "flex-start"
                }, t, {
                    css: {
                        a: {
                            color: "blue.100"
                        }
                    }
                }), o.default.createElement(p.default, {
                    onCtaClick: l,
                    analyticsId: s,
                    isTrial: c,
                    sx: S
                }), e ? o.default.createElement(f.Text, {
                    color: "blue.100",
                    lineHeight: 1,
                    m: 0,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }) : o.default.createElement(f.Text, {
                    color: "blue.100",
                    lineHeight: 1,
                    m: 0
                }, o.default.createElement(y.T, {
                    project: "apps.App"
                }, "Upgrade to a professional plan or higher to publish your site using premium blocks")))
            }
        },
        486653: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var o = I(r(174161)),
                f = r(955896),
                p = r(218795),
                b = r(986456),
                y = M(r(998487)),
                A = M(r(864379)),
                w = M(r(379805)),
                E = M(r(158488)),
                h = r(459362);

            function O(e, t) {
                (t == null || t > e.length) && (t = e.length);
                for (var a = 0, l = new Array(t); a < t; a++) l[a] = e[a];
                return l
            }

            function U(e) {
                if (Array.isArray(e)) return e
            }

            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e) {
                if (typeof WeakMap != "function") return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (i = function(l) {
                    return l ? a : t
                })(e)
            }

            function I(e, t) {
                if (!t && e && e.__esModule) return e;
                if (e === null || typeof e != "object" && typeof e != "function") return {
                    default: e
                };
                var a = i(t);
                if (a && a.has(e)) return a.get(e);
                var l = {},
                    g = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var T in e)
                    if (T !== "default" && Object.prototype.hasOwnProperty.call(e, T)) {
                        var P = g ? Object.getOwnPropertyDescriptor(e, T) : null;
                        P && (P.get || P.set) ? Object.defineProperty(l, T, P) : l[T] = e[T]
                    }
                return l.default = e, a && a.set(e, l), l
            }

            function L(e, t) {
                var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (a != null) {
                    var l = [],
                        g = !0,
                        T = !1,
                        P, D;
                    try {
                        for (a = a.call(e); !(g = (P = a.next()).done) && (l.push(P.value), !(t && l.length === t)); g = !0);
                    } catch (k) {
                        T = !0, D = k
                    } finally {
                        try {
                            !g && a.return != null && a.return()
                        } finally {
                            if (T) throw D
                        }
                    }
                    return l
                }
            }

            function S() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function W(e, t) {
                return U(e) || L(e, t) || n(e, t) || S()
            }

            function n(e, t) {
                if (e) {
                    if (typeof e == "string") return O(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
                    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return O(e, t)
                }
            }
            var s = function(e) {
                    var t = e.iconOnly,
                        a = e.isYUILabelRender,
                        l = e.analyticsId,
                        g = e.isTrial,
                        T = W((0, o.useState)(!1), 2),
                        P = T[0],
                        D = T[1],
                        k = (0, h.useTheme)().colors,
                        N = function(x) {
                            (0, w.default)("feature_gate", {
                                action: x,
                                identifier: l,
                                isTrial: g,
                                currentPlan: A.default.getPaidWebsiteFeatureLevel()
                            })
                        };
                    return N("display"), o.default.createElement(o.default.Fragment, null, t ? o.default.createElement(b.FeatureGateLock, {
                        className: E.default.yuiIcon,
                        color: k.blue[100],
                        onClick: function() {
                            return D(!0)
                        }
                    }) : o.default.createElement(p.Label, {
                        onClick: function() {
                            return D(!0)
                        },
                        ml: a ? 6 : 0,
                        mt: a ? 2 : 0
                    }, o.default.createElement(f.T, {
                        project: "commerce-shipping-screen"
                    }, "Upgrade")), o.default.createElement(y.default, {
                        isOpen: P,
                        setIsOpen: D,
                        handleTracking: N
                    }))
                },
                c = s
        },
        998487: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            }), r(246857);
            var o = w(r(174161)),
                f = r(955896),
                p = r(892342),
                b = r(153146),
                y = r(218795),
                A = r(480689);

            function w(O) {
                return O && O.__esModule ? O : {
                    default: O
                }
            }
            var E = function(O) {
                    var U = O.isOpen,
                        M = O.setIsOpen,
                        i = O.handleTracking,
                        I = O.router;
                    return o.default.createElement(b.Modal.Transition, null, U && o.default.createElement(b.Modal, {
                        onRequestClose: function() {
                            return M(!1)
                        },
                        zIndex: 31e3
                    }, o.default.createElement(b.Modal.Overlay, null), o.default.createElement(b.Modal.Position, {
                        position: "center"
                    }, o.default.createElement(b.Modal.Dialog, null, o.default.createElement(p.Box, {
                        pb: 2,
                        pt: 5,
                        px: 6,
                        tabIndex: 0,
                        width: "sizes.700"
                    }, o.default.createElement(p.Button.Tertiary, {
                        mb: 4,
                        onClick: function() {
                            return M(!1)
                        }
                    }, o.default.createElement(f.T, {
                        project: "apps.App"
                    }, "Close")), o.default.createElement(p.Text.Title, {
                        py: 1
                    }, o.default.createElement(f.T, {
                        project: "apps.App"
                    }, "Upgrade account?")), o.default.createElement(p.Text.Subtitle, {
                        color: "gray.300",
                        pb: 4,
                        pt: 0,
                        mb: 0,
                        mt: 2
                    }, o.default.createElement(f.T, {
                        project: "apps.App"
                    }, "Access more features by upgrading to a different plan.")), o.default.createElement(y.UpgradeButton.Primary, {
                        onClick: function() {
                            I.redirect("/config/settings/billing/subscriptions/website"), M(!1), i("upgrade_click")
                        },
                        size: "large",
                        mb: 5,
                        sx: {
                            width: "100%"
                        }
                    }, o.default.createElement(f.T, {
                        project: "apps.App"
                    }, "Upgrade")))))))
                },
                h = (0, A.withRouter)(E)
        },
        479980: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            }), r(44658);
            var o = r(174161),
                f = E(r(904406)),
                p = E(r(247718)),
                b = E(r(281410)),
                y = r(898229),
                A = r(394659),
                w = E(r(658594));

            function E(O) {
                return O && O.__esModule ? O : {
                    default: O
                }
            }

            function h(O) {
                var U = (0, o.useMemo)(function() {
                        return (0, f.default)()
                    }, []),
                    M = (0, o.useCallback)(function() {
                        var i = (0, y.isBundlingExperience)() ? b.default.SQUARESPACE : p.default.WEBSITE,
                            I = w.default.isTrial() ? A.CheckoutTypes.NEW_PURCHASE : A.CheckoutTypes.BILLING_PLAN_SWITCH;
                        (0, A.OpenUC)(i, I, {
                            eventChannel: U
                        })
                    }, [U]);
                return (0, o.useEffect)(function() {
                    var i = new A.UCMessageEventEmitter(A.UCEventType.CLOSE_START, {
                        channel: U
                    });
                    return i.subscribe(O),
                        function() {
                            return i.unsubscribe()
                        }
                }, [O, U]), [M]
            }
        },
        304703: function(G, v) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            });

            function r(b, y) {
                for (var A in y) Object.defineProperty(b, A, {
                    enumerable: !0,
                    get: y[A]
                })
            }
            r(v, {
                selectDataAttr: function() {
                    return o
                },
                PREMIUM_BLOCK_LABEL_CONTAINER: function() {
                    return f
                },
                PREMIUM_BLOCK_UPGRADE_MODAL: function() {
                    return p
                }
            });
            var o = function(b) {
                    return "[".concat(b, "]")
                },
                f = "data-premium-block-label-container",
                p = "data-premium-block-upgrade-modal"
        },
        3362: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            });

            function o(i, I) {
                for (var L in I) Object.defineProperty(i, L, {
                    enumerable: !0,
                    get: I[L]
                })
            }
            o(v, {
                EditorTreeProvider: function() {
                    return U
                },
                bootstrapEditorTree: function() {
                    return M
                }
            });
            var f = O(r(174161)),
                p = r(459362),
                b = r(246116),
                y = E(r(415467)),
                A = E(r(330913)),
                w = r(264427);

            function E(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function h(i) {
                if (typeof WeakMap != "function") return null;
                var I = new WeakMap,
                    L = new WeakMap;
                return (h = function(S) {
                    return S ? L : I
                })(i)
            }

            function O(i, I) {
                if (!I && i && i.__esModule) return i;
                if (i === null || typeof i != "object" && typeof i != "function") return {
                    default: i
                };
                var L = h(I);
                if (L && L.has(i)) return L.get(i);
                var S = {},
                    W = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in i)
                    if (n !== "default" && Object.prototype.hasOwnProperty.call(i, n)) {
                        var s = W ? Object.getOwnPropertyDescriptor(i, n) : null;
                        s && (s.get || s.set) ? Object.defineProperty(S, n, s) : S[n] = i[n]
                    }
                return S.default = i, L && L.set(i, S), S
            }
            var U = function(i) {
                    var I = i.frameCacheKey,
                        L = i.theme,
                        S = i.children,
                        W = f.useMemo(function() {
                            var s;
                            return (s = (0, w.getFrameDocument)()) === null || s === void 0 ? void 0 : s.head
                        }, []),
                        n = f.createElement(p.ThemeContext.Provider, {
                            theme: L || b.rosetta.white
                        }, f.createElement(y.default, null, S));
                    return I ? f.createElement(A.default, {
                        container: W,
                        cacheKey: I
                    }, n) : n
                },
                M = function(i, I) {
                    var L = i.frameCacheKey,
                        S = i.theme;
                    return f.createElement(U, {
                        frameCacheKey: L,
                        theme: S
                    }, I)
                }
        },
        954673: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            var o = b(r(174161)),
                f = r(218795);

            function p() {
                return p = Object.assign || function(h) {
                    for (var O = 1; O < arguments.length; O++) {
                        var U = arguments[O];
                        for (var M in U) Object.prototype.hasOwnProperty.call(U, M) && (h[M] = U[M])
                    }
                    return h
                }, p.apply(this, arguments)
            }

            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }

            function y(h, O) {
                if (h == null) return {};
                var U = A(h, O),
                    M, i;
                if (Object.getOwnPropertySymbols) {
                    var I = Object.getOwnPropertySymbols(h);
                    for (i = 0; i < I.length; i++) M = I[i], !(O.indexOf(M) >= 0) && Object.prototype.propertyIsEnumerable.call(h, M) && (U[M] = h[M])
                }
                return U
            }

            function A(h, O) {
                if (h == null) return {};
                var U = {},
                    M = Object.keys(h),
                    i, I;
                for (I = 0; I < M.length; I++) i = M[I], !(O.indexOf(i) >= 0) && (U[i] = h[i]);
                return U
            }
            var w = function(h) {
                    var O = h.children,
                        U = h.onLearnMoreClick,
                        M = h.premiumFeatureLabel,
                        i = y(h, ["children", "onLearnMoreClick", "premiumFeatureLabel"]);
                    return o.default.createElement(f.Label, p({
                        onClick: U
                    }, i), M || O)
                },
                E = w
        },
        867596: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var o = p(r(954673)),
                f = p(r(749459));

            function p(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }
            var b = (0, f.default)(o.default, "feature-gate-badge")
        },
        836522: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            }), r(246857);
            var o = p(r(538706)),
                f = p(r(749459));

            function p(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }
            var b = (0, f.default)(o.default, "feature-gate-logo")
        },
        811989: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var o = i(r(174161)),
                f = U(r(440557)),
                p = U(r(795478)),
                b = U(r(845076)),
                y = r(107799),
                A = r(359530);

            function w(e) {
                if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                    return a.__proto__ || Object.getPrototypeOf(a)
                }, h(e)
            }

            function O(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && L(e, t)
            }

            function U(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function M(e) {
                if (typeof WeakMap != "function") return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (M = function(l) {
                    return l ? a : t
                })(e)
            }

            function i(e, t) {
                if (!t && e && e.__esModule) return e;
                if (e === null || typeof e != "object" && typeof e != "function") return {
                    default: e
                };
                var a = M(t);
                if (a && a.has(e)) return a.get(e);
                var l = {},
                    g = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var T in e)
                    if (T !== "default" && Object.prototype.hasOwnProperty.call(e, T)) {
                        var P = g ? Object.getOwnPropertyDescriptor(e, T) : null;
                        P && (P.get || P.set) ? Object.defineProperty(l, T, P) : l[T] = e[T]
                    }
                return l.default = e, a && a.set(e, l), l
            }

            function I(e, t) {
                return t && (S(t) === "object" || typeof t == "function") ? t : w(e)
            }

            function L(e, t) {
                return L = Object.setPrototypeOf || function(l, g) {
                    return l.__proto__ = g, l
                }, L(e, t)
            }
            var S = function(e) {
                "@swc/helpers - typeof";
                return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
            };

            function W() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function n(e) {
                var t = W();
                return function() {
                    var l = h(e),
                        g;
                    if (t) {
                        var T = h(this).constructor;
                        g = Reflect.construct(l, arguments, T)
                    } else g = l.apply(this, arguments);
                    return I(this, g)
                }
            }
            var s = function(e) {
                "use strict";
                O(a, e);
                var t = n(a);

                function a() {
                    return E(this, a), t.apply(this, arguments)
                }
                var l = a.prototype;
                return l.render = function() {
                    var T = this.props,
                        P = T.title,
                        D = T.subTitle,
                        k = T.className,
                        N = T.onRequestUpgrade,
                        x = T.upgradeLabel;
                    return o.default.createElement("div", {
                        className: (0, b.default)(f.default.message, k)
                    }, o.default.createElement("div", {
                        className: f.default.title
                    }, P), o.default.createElement("div", {
                        className: f.default.subTitle
                    }, D), o.default.createElement(y.BaseButton, {
                        onClick: N,
                        className: f.default.upgradeButton
                    }, x))
                }, a
            }(o.Component);
            s.propTypes = {
                title: p.default.string.isRequired,
                subTitle: p.default.string.isRequired,
                upgradeLabel: p.default.string.isRequired,
                onRequestUpgrade: p.default.func
            }, s.defaultProps = {
                upgradeLabel: (0, A.t)("Upgrade Now")
            };
            var c = s
        },
        483166: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var o = p(r(811989)),
                f = p(r(749459));

            function p(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }
            var b = (0, f.default)(o.default, "feature-gate-message")
        },
        543403: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            }), r(246857);
            var o = p(r(663012)),
                f = p(r(749459));

            function p(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }
            var b = (0, f.default)(o.default, "feature-gate-panel")
        },
        580042: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var o = M(r(795478)),
                f = I(r(174161)),
                p = r(455929),
                b = r(579888),
                y = M(r(379805)),
                A = r(480689);

            function w(t) {
                if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function E(t, a) {
                if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function h() {
                return h = Object.assign || function(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var l = arguments[a];
                        for (var g in l) Object.prototype.hasOwnProperty.call(l, g) && (t[g] = l[g])
                    }
                    return t
                }, h.apply(this, arguments)
            }

            function O(t) {
                return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
                    return l.__proto__ || Object.getPrototypeOf(l)
                }, O(t)
            }

            function U(t, a) {
                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), a && S(t, a)
            }

            function M(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t) {
                if (typeof WeakMap != "function") return null;
                var a = new WeakMap,
                    l = new WeakMap;
                return (i = function(g) {
                    return g ? l : a
                })(t)
            }

            function I(t, a) {
                if (!a && t && t.__esModule) return t;
                if (t === null || typeof t != "object" && typeof t != "function") return {
                    default: t
                };
                var l = i(a);
                if (l && l.has(t)) return l.get(t);
                var g = {},
                    T = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var P in t)
                    if (P !== "default" && Object.prototype.hasOwnProperty.call(t, P)) {
                        var D = T ? Object.getOwnPropertyDescriptor(t, P) : null;
                        D && (D.get || D.set) ? Object.defineProperty(g, P, D) : g[P] = t[P]
                    }
                return g.default = t, l && l.set(t, g), g
            }

            function L(t, a) {
                return a && (W(a) === "object" || typeof a == "function") ? a : w(t)
            }

            function S(t, a) {
                return S = Object.setPrototypeOf || function(g, T) {
                    return g.__proto__ = T, g
                }, S(t, a)
            }
            var W = function(t) {
                "@swc/helpers - typeof";
                return t && typeof Symbol != "undefined" && t.constructor === Symbol ? "symbol" : typeof t
            };

            function n() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function s(t) {
                var a = n();
                return function() {
                    var g = O(t),
                        T;
                    if (a) {
                        var P = O(this).constructor;
                        T = Reflect.construct(g, arguments, P)
                    } else T = g.apply(this, arguments);
                    return L(this, T)
                }
            }
            var c = function(t) {
                "use strict";
                U(l, t);
                var a = s(l);

                function l(T) {
                    E(this, l);
                    var P;
                    return P = a.call(this, T), P.handleUpgradeModalUpgradeClick = function(D) {
                        var k = P.props,
                            N = k.isTrial,
                            x = k.router,
                            Y = k.eventTracker;
                        if (Y(), D && D.stopPropagation && D.stopPropagation(), P.handleUpgradeModalDismiss(D), P.handleTrackingEvents("upgrade_click"), P.props.onUpgrade) P.props.onUpgrade();
                        else {
                            var H = N ? b.UpsellUrls[b.UpsellDestination.TRIAL_UPGRADE_PLAN] : b.UpsellUrls[b.UpsellDestination.UPGRADE_PLAN];
                            x ? x.push({
                                pathname: H
                            }) : window.location.assign("/config".concat(H))
                        }
                    }, P.handleUpgradeModalDismiss = function(D) {
                        D && D.stopPropagation && D.stopPropagation(), P.setState({
                            isUpgradeModalOpen: !1
                        }), P.props.onDismiss && P.props.onDismiss()
                    }, P.handleTrackingEvents = function(D) {
                        var k = P.props,
                            N = k.analyticsId,
                            x = k.isTrial;
                        (0, y.default)("feature_gate", {
                            action: D,
                            identifier: N,
                            isTrial: x
                        })
                    }, P.state = l.defaultState, P.handleTrackingEvents("display"), P
                }
                var g = l.prototype;
                return g.render = function() {
                    var P = this.state.isUpgradeModalOpen,
                        D = this.props.isTrial;
                    return P ? f.default.createElement(p.UpgradeModalWithLabels, h({
                        isOpen: P,
                        key: "upgrade-modal",
                        isTrial: D,
                        onRequestClose: this.handleUpgradeModalDismiss,
                        onRequestUpgrade: this.handleUpgradeModalUpgradeClick
                    }, this.props)) : null
                }, l
            }(f.Component);
            c.propTypes = {
                analyticsId: o.default.string.isRequired,
                isTrial: o.default.bool.isRequired,
                router: A.RouterPropType.isRequired,
                anchor: o.default.oneOf(["window", "mousepointer"]),
                eventTracker: o.default.func,
                onDismiss: o.default.func,
                onUpgrade: o.default.func
            }, c.defaultProps = {
                anchor: "mousepointer"
            }, c.defaultState = {
                isUpgradeModalOpen: !0
            };
            var e = (0, A.withRouter)(c)
        },
        33258: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var o = f(r(580042));

            function f(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }
        },
        533163: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            });

            function o(u, d) {
                for (var m in d) Object.defineProperty(u, m, {
                    enumerable: !0,
                    get: d[m]
                })
            }
            o(v, {
                isBlockTypeFeatureGated: function() {
                    return k
                },
                shouldShowFeatureGateForFeature: function() {
                    return N
                },
                getFeatureGatedBlockTypes: function() {
                    return x
                },
                featureGateBlockItems: function() {
                    return Y
                },
                trackInternal: function() {
                    return H
                },
                willAddFeatureGate: function() {
                    return X
                },
                renderLogo: function() {
                    return j
                },
                renderMenu: function() {
                    return J
                },
                renderBadgeWithProps: function() {
                    return Q
                },
                renderBadge: function() {
                    return $
                },
                renderBlockWrapper: function() {
                    return q
                },
                renderPanelNode: function() {
                    return ee
                },
                renderPanel: function() {
                    return te
                },
                renderMessage: function() {
                    return re
                },
                renderUpgradeModal: function() {
                    return Z
                },
                showUpsellConfirmation: function() {
                    return ne
                },
                transformUpsellCopy: function() {
                    return ae
                }
            });
            var f = l(r(174161)),
                p = l(r(233284)),
                b = l(r(311064)),
                y = l(r(176944)),
                A = r(579888),
                w = l(r(244672)),
                E = l(r(658594)),
                h = l(r(696823)),
                O = r(748206),
                U = l(r(379805)),
                M = r(359530),
                i = l(r(948125)),
                I = r(687212),
                L = l(r(813559)),
                S = l(r(836522)),
                W = l(r(543403)),
                n = l(r(867596)),
                s = l(r(483166)),
                c = l(r(33258)),
                e = r(304703),
                t = l(r(486653));

            function a(u, d, m) {
                return d in u ? Object.defineProperty(u, d, {
                    value: m,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[d] = m, u
            }

            function l(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function g(u) {
                for (var d = 1; d < arguments.length; d++) {
                    var m = arguments[d] != null ? arguments[d] : {},
                        R = Object.keys(m);
                    typeof Object.getOwnPropertySymbols == "function" && (R = R.concat(Object.getOwnPropertySymbols(m).filter(function(C) {
                        return Object.getOwnPropertyDescriptor(m, C).enumerable
                    }))), R.forEach(function(C) {
                        a(u, C, m[C])
                    })
                }
                return u
            }

            function T(u, d) {
                var m = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var R = Object.getOwnPropertySymbols(u);
                    d && (R = R.filter(function(C) {
                        return Object.getOwnPropertyDescriptor(u, C).enumerable
                    })), m.push.apply(m, R)
                }
                return m
            }

            function P(u, d) {
                return d = d != null ? d : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : T(Object(d)).forEach(function(m) {
                    Object.defineProperty(u, m, Object.getOwnPropertyDescriptor(d, m))
                }), u
            }
            var D = (0, b.default)(A.BlockType);

            function k(u) {
                var d = A.BlockTypeToFeature[u];
                return N(d)
            }

            function N(u) {
                return (0, y.default)(u) ? !1 : !!(w.default.isFeatureGated(u) || E.default.isTrial() && !w.default.isFeatureInAllPlans(u))
            }

            function x() {
                return Object.keys(A.BlockTypeToFeature).filter(function(u) {
                    return k(u)
                }).map(function(u) {
                    return parseInt(u, 10)
                })
            }
            var Y = function(u) {
                var d = u.isMainContentSection;
                return function(m) {
                    var R = x(),
                        C = [],
                        B = m.map(function(F) {
                            return P(g({}, F), {
                                items: F.items.filter(function(_) {
                                    return R.includes(_) ? (C.push(_), !1) : !(i.default.isSevenOne() && _ === A.BlockType.GALLERY && !(0, I.isCircleMember)() && !d)
                                })
                            })
                        });
                    return C.length > 0 && B.push({
                        label: (0, M.t)("Premium"),
                        items: C,
                        premium: !0,
                        meta: {
                            isTrial: E.default.isTrial()
                        }
                    }), B
                }
            };

            function H(u, d) {
                (0, U.default)(u, P(g({}, d), {
                    isTrial: E.default.isTrial()
                }))
            }

            function X(u) {
                var d = u.blockType,
                    m = u.featureGateClass,
                    R = m === void 0 ? "" : m,
                    C = u.node;
                return !(d && !k(d) || R && C.querySelector("".concat(R)))
            }

            function K(u) {
                var d = u.component,
                    m = u.featureGateClass,
                    R = m === void 0 ? "" : m,
                    C = u.node,
                    B = C.ownerDocument.createElement("div");
                if (R)
                    for (var F = R.split(" "), _ = 0; _ < F.length; ++_) B.classList.add(F[_].replace(".", ""));
                C.insertBefore(B, C.firstChild), p.default.render(d, B);
                var z = (0, O.getBlockWidgetFromNode)(C),
                    V = function() {
                        p.default.unmountComponentAtNode(B)
                    };
                z ? z.on("destroy", V) : C.ownerDocument.defaultView.addEventListener("beforeunload", V, {
                    once: !0
                })
            }

            function j(u) {
                var d = u.analyticsId,
                    m = u.blockType,
                    R = u.node,
                    C = u.featureGateClass,
                    B = u.upsellCopyOverrides,
                    F = u.renderNewLogo;
                K(F ? {
                    blockType: m,
                    node: R,
                    featureGateClass: C || ".sqs-widget .sqs-featuregate",
                    component: f.default.createElement(t.default, {
                        iconOnly: !0,
                        analyticsId: d,
                        isTrial: !1
                    })
                } : {
                    blockType: m,
                    node: R,
                    featureGateClass: C || ".sqs-widget .sqs-featuregate",
                    component: f.default.createElement(S.default, g({
                        analyticsId: d || "".concat(D[m].toLowerCase(), "-block"),
                        isTrial: E.default.isTrial()
                    }, B))
                })
            }

            function J(u) {
                var d = u.analyticsId,
                    m = u.blockType,
                    R = u.escapePadding,
                    C = u.node,
                    B = u.isEditing,
                    F = ".sqs-featuregate-menu";
                if (!X({
                        blockType: m,
                        featureGateClass: F,
                        node: C
                    })) return !1;
                var _ = d || "".concat(D[m].toLowerCase(), "-block"),
                    z = E.default.isTrial(),
                    V = f.default.createElement(L.default, {
                        mx: 4,
                        isTrial: z,
                        analyticsId: _
                    });
                return K({
                    blockType: m,
                    node: C,
                    featureGateClass: F,
                    component: V
                }), !0
            }

            function Q(u) {
                var d = u.node,
                    m = u.upsellCopyOverrides,
                    R = m === void 0 ? {} : m,
                    C = u.componentProps,
                    B = C === void 0 ? {} : C;
                K({
                    node: d,
                    featureGateClass: ".sqs-featuregate-badge",
                    component: f.default.createElement(n.default, g({
                        isTrial: E.default.isTrial()
                    }, R, B))
                })
            }

            function $(u) {
                var d = u.analyticsId,
                    m = u.blockType,
                    R = u.knockout,
                    C = u.node,
                    B = u.upsellCopyOverrides;
                K({
                    blockType: m,
                    node: C,
                    featureGateClass: ".sqs-featuregate-badge",
                    component: f.default.createElement(n.default, g({
                        analyticsId: d,
                        isTrial: E.default.isTrial(),
                        knockout: R
                    }, B))
                })
            }

            function q(u) {
                var d = u.blockId,
                    m = u.blockType,
                    R = u.node;
                if (k(m)) {
                    R.classList.add("sqs-feature-gated-wrapper");
                    var C = "sqs-feature-gated-logo-container",
                        B = R.ownerDocument.createElement("div");
                    B.setAttribute(e.PREMIUM_BLOCK_LABEL_CONTAINER, ""), B.classList.add("premium-block-label-container"), B.classList.add(C), R.insertBefore(B, R.firstChild), p.default.render(f.default.createElement(h.default, {
                        blockId: d,
                        blockType: m
                    }), B)
                }
            }

            function ee(u) {
                var d = u.blockType,
                    m = u.node,
                    R = u.analyticsId,
                    C = u.upsellCopyOverrides;
                K({
                    blockType: d,
                    node: m,
                    featureGateClass: ".sqs-featuregate-panel",
                    component: f.default.createElement(W.default, g({
                        isTrial: E.default.isTrial(),
                        analyticsId: R
                    }, C))
                })
            }

            function te(u) {
                var d = u.featureType,
                    m = u.analyticsId;
                return null
            }

            function re(u) {
                var d = u.blockType,
                    m = u.node,
                    R = u.analyticsId,
                    C = u.title,
                    B = u.subTitle,
                    F = u.upsellCopyOverrides;
                K({
                    blockType: d,
                    node: m,
                    featureGateClass: ".sqs-featuregate-message",
                    component: f.default.createElement(s.default, g({
                        isTrial: E.default.isTrial(),
                        analyticsId: R,
                        title: C,
                        subTitle: B
                    }, F))
                })
            }

            function Z(u) {
                var d = u.blockType,
                    m = u.node,
                    R = u.analyticsId,
                    C = u.upsellCopyOverrides,
                    B = u.eventTracker,
                    F = u.onDismiss,
                    _ = u.onUpgrade;
                K({
                    blockType: d,
                    node: m,
                    featureGateClass: ".sqs-featuregate-upgrade-modal",
                    component: f.default.createElement(c.default, g({
                        isOpen: !0,
                        isTrial: E.default.isTrial(),
                        analyticsId: R,
                        eventTracker: B,
                        onDismiss: F,
                        onUpgrade: _
                    }, C))
                })
            }

            function ne(u) {
                var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {},
                    m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
                return new Promise(function(R) {
                    Z({
                        analyticsId: "upgrade-modal",
                        node: document.createElement("div"),
                        upsellCopyOverrides: u,
                        eventTracker: d,
                        onDismiss: function() {
                            R()
                        },
                        onUpgrade: m
                    })
                })
            }

            function ae(u) {
                var d = E.default.isTrial();
                return {
                    isSoftWarning: d,
                    title: u.upgradeTitle,
                    message: u.upgradeDescription,
                    destination: d ? A.UpsellDestination.TRIAL_UPGRADE_PLAN : A.UpsellDestination.UPGRADE_PLAN
                }
            }
        },
        687212: function(G, v, r) {
            "use strict";
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "isCircleMember", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var o = p(r(584683)),
                f = p(r(699653));

            function p(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }
            var b = function() {
                var y = o.default.getState().toJS().guilds;
                return y && y[f.default.CIRCLE_USER]
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/0d263807c7e1031461520e483db5d199/33163-0a0cb31f885a291c994b-min.en-US.js.map