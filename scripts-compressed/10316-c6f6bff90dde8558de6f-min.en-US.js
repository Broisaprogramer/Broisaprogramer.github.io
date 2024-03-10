(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [10316], {
        318410: function(D) {
            D.exports = {
                helpHomeContainer: "q0NdXXUM7lYLJODizY_N",
                loadingPanel: "wSdhYlOex1v5gDJ7c0kQ",
                loadingContainer: "eOfQeo_Ht1afhaX3BJTQ",
                navMenu: "VR5vFzIsdBl2iR8tn39F",
                versionWrapper: "Vk_Oyhky1cq2b8FENi3t",
                versionHeading: "M0C6kQG_idnPWGtxxD3y",
                squarespace: "bAwRE34i8ufg86pSB4rA",
                codename: "y50Xn8q0aI_NaBMAVg1Q",
                version: "Eyi58UMlmO8di5DdVSdr"
            }
        },
        725298: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            }), e(246857);
            var v = P(e(174161)),
                a = e(892342),
                y = e(480689),
                g = e(955896),
                c = e(359530),
                C = P(e(503615)),
                f = P(e(233590));

            function r() {
                return r = Object.assign || function(t) {
                    for (var p = 1; p < arguments.length; p++) {
                        var o = arguments[p];
                        for (var M in o) Object.prototype.hasOwnProperty.call(o, M) && (t[M] = o[M])
                    }
                    return t
                }, r.apply(this, arguments)
            }

            function P(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function A(t, p) {
                if (t == null) return {};
                var o = i(t, p),
                    M, b;
                if (Object.getOwnPropertySymbols) {
                    var I = Object.getOwnPropertySymbols(t);
                    for (b = 0; b < I.length; b++) M = I[b], !(p.indexOf(M) >= 0) && Object.prototype.propertyIsEnumerable.call(t, M) && (o[M] = t[M])
                }
                return o
            }

            function i(t, p) {
                if (t == null) return {};
                var o = {},
                    M = Object.keys(t),
                    b, I;
                for (I = 0; I < M.length; I++) b = M[I], !(p.indexOf(b) >= 0) && (o[b] = t[b]);
                return o
            }
            var d = function(t) {
                    var p = t.router,
                        o = t.shouldShowCommentsMenu,
                        M = t.shouldShowTrashMenu,
                        b = A(t, ["router", "shouldShowCommentsMenu", "shouldShowTrashMenu"]),
                        I = [{
                            label: (0, c.t)("System Pages"),
                            to: f.default.forPagesPanel() + "/system-pages"
                        }, {
                            label: (0, c.t)("Website Tools"),
                            to: f.default.forPagesPanel() + "/website-tools"
                        }, M && {
                            label: (0, c.t)("Trash"),
                            to: f.default.forPagesPanel() + "/recycle-bin"
                        }, o && {
                            label: (0, c.t)("Manage Comments"),
                            to: f.default.forPagesPanel() + "/comment-settings"
                        }].filter(Boolean);
                    return I.length ? v.default.createElement(a.Box, r({
                        mt: 6,
                        mx: 6
                    }, b), v.default.createElement(a.Text.Subtitle, {
                        py: 1,
                        my: 0
                    }, v.default.createElement(g.T, {
                        project: "apps.App"
                    }, "Utilities")), I.map(function(H) {
                        return v.default.createElement(C.default, {
                            key: H.label,
                            label: H.label,
                            onClick: function() {
                                return p.push(H.to)
                            }
                        })
                    })) : null
                },
                O = (0, y.withRouter)(d)
        },
        446675: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var v = c(e(374335)),
                a = c(e(725298)),
                y = c(e(270216)),
                g = c(e(192628));

            function c(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var C = (0, v.default)({
                    getStores: function() {
                        return [y.default]
                    },
                    getPropsFromStores: function() {
                        var P = y.default.getState(),
                            A = P.commentsEnabled,
                            i = P.disqusShortname;
                        return {
                            shouldShowCommentsMenu: !i && A
                        }
                    }
                }, a.default),
                f = (0, g.default)(C, a.default)
        },
        440301: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            var v = r(e(752114)),
                a = r(e(825357)),
                y = r(e(990538)),
                g = e(590785),
                c = r(e(333232)),
                C = r(e(948125));

            function f(i, d) {
                return d != null && typeof Symbol != "undefined" && d[Symbol.hasInstance] ? !!d[Symbol.hasInstance](i) : i instanceof d
            }

            function r(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }
            var P = function(i) {
                    var d = i.isCommerceOnboardingRedirect,
                        O = i[g.ADD_MEMBER_AREA_QUERY_PARAM],
                        t = i[g.ADD_MEMBER_AREA_PAGE_QUERY_PARAM],
                        p = i[g.EDIT_MEMBER_AREA_QUERY_PARAM];
                    if (d) {
                        (0, c.default)({
                            withPageSectionStoreInitialized: !0
                        }).then(function() {
                            (0, v.default)(a.default.STORE)
                        });
                        return
                    }
                    if (O) {
                        if (C.default.isSevenOne()) return;
                        y.default.setIsUserClickSimulated(!0), (0, c.default)({
                            withPageSectionStoreInitialized: !1
                        }).then(function() {
                            var o = document.querySelector(g.ADD_MEMBER_AREA_SELECTOR);
                            f(o, HTMLElement) && o.click()
                        });
                        return
                    }
                    t && (0, c.default)({
                        withPageSectionStoreInitialized: !0
                    }).then(function() {
                        if (document.querySelector(g.ADD_MEMBER_AREA_PAGE_SELECTOR)) {
                            var o = document.querySelector(g.ADD_MEMBER_AREA_PAGE_SELECTOR);
                            f(o, HTMLElement) && o.click()
                        }
                    }), p && (y.default.setIsUserClickSimulated(!0), (0, c.default)({
                        withPageSectionStoreInitialized: !0
                    }).then(function() {
                        if (document.querySelector(g.EDIT_MEMBER_AREA_SELECTOR)) {
                            var o = document.querySelector(g.EDIT_MEMBER_AREA_SELECTOR);
                            f(o, HTMLElement) && o.click()
                        }
                    }))
                },
                A = P
        },
        132219: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            var v = C(e(174161)),
                a = e(955896),
                y = e(359530),
                g = C(e(948125)),
                c = C(e(318410));

            function C(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }
            var f = {
                wright: (0, y.t)("Brine"),
                dossier: (0, y.t)("Farro"),
                bureau: (0, y.t)("Skye"),
                endeavor: (0, y.t)("Tremont"),
                doncab: (0, y.t)("York")
            };

            function r(d) {
                var O = d.toLowerCase().trim();
                return f.hasOwnProperty(O) ? f[O] : d
            }

            function P(d) {
                return d.templateWebsiteTaxonomy ? d.templateWebsiteTaxonomy.displayName : d.templateWebsite ? d.templateWebsite.siteTitle : null
            }
            var A = function(d) {
                    var O = d.previewInstallation,
                        t = d.liveInstallation,
                        p = d.liveInstallationTemplateName,
                        o = d.previewInstallationTemplateName,
                        M = (0, y.t)("7.0"),
                        b = null,
                        I = null;
                    return g.default.isSevenOne() ? M = (0, y.t)("7.1") : t && p && (b = v.default.createElement(a.T, {
                        project: "apps.App",
                        templateName: r(p),
                        variantName: r(P(t))
                    }, "\u2013 {templateName} family ({variantName} template)"), O && o && (I = v.default.createElement(a.T, {
                        project: "apps.App",
                        templateName: r(o),
                        variantName: r(P(O))
                    }, "Previewing: {templateName} family ({variantName} template)"))), v.default.createElement("div", {
                        className: c.default.versionWrapper
                    }, v.default.createElement("div", {
                        className: c.default.version
                    }, v.default.createElement(a.T, {
                        project: "apps.App",
                        versionNumber: M
                    }, "Version {versionNumber}"), b, I ? v.default.createElement("br", null) : null, I))
                },
                i = A
        },
        797418: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var v = C(e(374335)),
                a = C(e(347862)),
                y = C(e(356288)),
                g = C(e(497265)),
                c = C(e(132219));

            function C(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var f = (0, v.default)({
                getStores: function() {
                    return [a.default, g.default]
                },
                componentDidConnect: function() {
                    var P = a.default.getState(),
                        A = P.liveInstallation,
                        i = P.previewInstallation;
                    y.default.loadNames(A, i)
                },
                getPropsFromStores: function() {
                    var P = a.default.getState(),
                        A = P.liveInstallation,
                        i = P.previewInstallation,
                        d = g.default.getState(),
                        O = d.previewInstallationTemplateName,
                        t = d.liveInstallationTemplateName;
                    return {
                        liveInstallation: A,
                        previewInstallation: i,
                        previewInstallationTemplateName: O,
                        liveInstallationTemplateName: t
                    }
                }
            }, c.default)
        },
        347170: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            }), e(246857);
            var v = C(e(174161)),
                a = e(359530),
                y = e(548362),
                g = e(153146),
                c = e(986456);

            function C(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function f(r) {
                var P = r.isOpen,
                    A = r.onCancel,
                    i = r.onClose,
                    d = r.onRemind;
                return v.default.createElement(g.Modal.Transition, null, P && v.default.createElement(g.Modal, {
                    onRequestClose: A
                }, v.default.createElement(g.Modal.Overlay, null), v.default.createElement(g.Modal.Position, {
                    position: "center"
                }, v.default.createElement(y.AlertDialog, {
                    title: (0, a.t)("Hide Steps?"),
                    message: (0, a.t)("You won't be able to see the steps required to complete set up. We can remind you again in 6 hours."),
                    buttons: [function() {
                        return v.default.createElement(y.AlertDialog.Button, {
                            key: "remind",
                            onClick: d
                        }, (0, a.t)("Remind Me"))
                    }, function() {
                        return v.default.createElement(y.AlertDialog.Button, {
                            key: "save",
                            onClick: i
                        }, (0, a.t)("Hide Steps"))
                    }]
                }), v.default.createElement(c.CrossLarge, {
                    sx: {
                        position: "absolute",
                        cursor: "pointer",
                        size: "22px",
                        right: "33px",
                        top: "27px"
                    },
                    onClick: A
                }))))
            }
        },
        356288: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return C
                }
            });
            var v = g(e(943035)),
                a = g(e(808847));

            function y(f, r) {
                if (!(f instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var c = function() {
                    "use strict";

                    function f() {
                        y(this, f), this.generateActions("setPreviewInstallationTemplateName", "setLiveInstallationTemplateName")
                    }
                    var r = f.prototype;
                    return r.loadNames = function(A, i) {
                        var d = this;
                        return function(O) {
                            i && a.default.get("/api/template/GetTemplate?templateId=" + i.templateId).then(function(t) {
                                d.setPreviewInstallationTemplateName(t.data.template.name)
                            }), A && a.default.get("/api/template/GetTemplate?templateId=" + A.templateId).then(function(t) {
                                d.setLiveInstallationTemplateName(t.data.template.name)
                            })
                        }
                    }, f
                }(),
                C = v.default.createActions(c)
        },
        586967: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            var v = A(e(174161)),
                a = A(e(374335)),
                y = A(e(990538)),
                g = A(e(504747)),
                c = A(e(435563)),
                C = A(e(315844)),
                f = e(652271),
                r = e(680671);

            function P(t, p, o) {
                return p in t ? Object.defineProperty(t, p, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[p] = o, t
            }

            function A(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t) {
                for (var p = 1; p < arguments.length; p++) {
                    var o = arguments[p] != null ? arguments[p] : {},
                        M = Object.keys(o);
                    typeof Object.getOwnPropertySymbols == "function" && (M = M.concat(Object.getOwnPropertySymbols(o).filter(function(b) {
                        return Object.getOwnPropertyDescriptor(o, b).enumerable
                    }))), M.forEach(function(b) {
                        P(t, b, o[b])
                    })
                }
                return t
            }
            var d = function(t) {
                var p = t.isShowingChecklistWizard,
                    o = v.default.createElement(c.default, {
                        isOpen: p,
                        entrypoint: C.default.PAGES_PANEL_CARD,
                        onRequestClose: function() {
                            return y.default.setIsShowingChecklistWizard(!1)
                        },
                        productArea: "pages-panel"
                    });
                return o
            };
            d.getStores = function() {
                return [g.default]
            }, d.getPropsFromStores = function() {
                return i({}, g.default.getState())
            };
            var O = (0, r.withEnsureOnboardingPreferences)((0, f.withMemberAreas)((0, a.default)(d)))
        },
        459447: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            });

            function v(n, m) {
                for (var l in m) Object.defineProperty(n, l, {
                    enumerable: !0,
                    get: m[l]
                })
            }
            v(h, {
                SYNC_PAGES_PANEL_UI: function() {
                    return k
                },
                default: function() {
                    return me
                }
            }), e(246857), e(17662);
            var a = X(e(174161)),
                y = w(e(103372)),
                g = w(e(545334)),
                c = e(359530),
                C = w(e(374335)),
                f = e(892342),
                r = e(153146),
                P = e(459362),
                A = e(246116),
                i = e(986456),
                d = e(590785),
                O = w(e(990538)),
                t = w(e(504747)),
                p = e(990920),
                o = w(e(347170)),
                M = e(652271),
                b = e(919093),
                I = X(e(680671)),
                H = e(84529),
                Z = e(218795),
                K = w(e(870424)),
                _ = e(55865),
                q = e(686449),
                ee = e(415467),
                te = e(630284),
                ne = w(e(948125)),
                re = w(e(78783)),
                ae = w(e(586967));

            function z(n, m) {
                (m == null || m > n.length) && (m = n.length);
                for (var l = 0, s = new Array(m); l < m; l++) s[l] = n[l];
                return s
            }

            function le(n) {
                if (Array.isArray(n)) return n
            }

            function Y(n, m, l, s, u, T, S) {
                try {
                    var R = n[T](S),
                        N = R.value
                } catch (E) {
                    l(E);
                    return
                }
                R.done ? m(N) : Promise.resolve(N).then(s, u)
            }

            function F(n) {
                return function() {
                    var m = this,
                        l = arguments;
                    return new Promise(function(s, u) {
                        var T = n.apply(m, l);

                        function S(N) {
                            Y(T, s, u, S, R, "next", N)
                        }

                        function R(N) {
                            Y(T, s, u, S, R, "throw", N)
                        }
                        S(void 0)
                    })
                }
            }

            function ue(n, m, l) {
                return m in n ? Object.defineProperty(n, m, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[m] = l, n
            }

            function w(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function Q(n) {
                if (typeof WeakMap != "function") return null;
                var m = new WeakMap,
                    l = new WeakMap;
                return (Q = function(s) {
                    return s ? l : m
                })(n)
            }

            function X(n, m) {
                if (!m && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var l = Q(m);
                if (l && l.has(n)) return l.get(n);
                var s = {},
                    u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var T in n)
                    if (T !== "default" && Object.prototype.hasOwnProperty.call(n, T)) {
                        var S = u ? Object.getOwnPropertyDescriptor(n, T) : null;
                        S && (S.get || S.set) ? Object.defineProperty(s, T, S) : s[T] = n[T]
                    }
                return s.default = n, l && l.set(n, s), s
            }

            function ie(n, m) {
                var l = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (l != null) {
                    var s = [],
                        u = !0,
                        T = !1,
                        S, R;
                    try {
                        for (l = l.call(n); !(u = (S = l.next()).done) && (s.push(S.value), !(m && s.length === m)); u = !0);
                    } catch (N) {
                        T = !0, R = N
                    } finally {
                        try {
                            !u && l.return != null && l.return()
                        } finally {
                            if (T) throw R
                        }
                    }
                    return s
                }
            }

            function oe() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function se(n) {
                for (var m = 1; m < arguments.length; m++) {
                    var l = arguments[m] != null ? arguments[m] : {},
                        s = Object.keys(l);
                    typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(l).filter(function(u) {
                        return Object.getOwnPropertyDescriptor(l, u).enumerable
                    }))), s.forEach(function(u) {
                        ue(n, u, l[u])
                    })
                }
                return n
            }

            function V(n, m) {
                return le(n) || ie(n, m) || ce(n, m) || oe()
            }

            function ce(n, m) {
                if (n) {
                    if (typeof n == "string") return z(n, m);
                    var l = Object.prototype.toString.call(n).slice(8, -1);
                    if (l === "Object" && n.constructor && (l = n.constructor.name), l === "Map" || l === "Set") return Array.from(l);
                    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return z(n, m)
                }
            }
            var U = function(n, m) {
                    var l, s, u, T, S = {
                        label: 0,
                        sent: function() {
                            if (u[0] & 1) throw u[1];
                            return u[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return T = {
                        next: R(0),
                        throw: R(1),
                        return: R(2)
                    }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
                        return this
                    }), T;

                    function R(E) {
                        return function(G) {
                            return N([E, G])
                        }
                    }

                    function N(E) {
                        if (l) throw new TypeError("Generator is already executing.");
                        for (; S;) try {
                            if (l = 1, s && (u = E[0] & 2 ? s.return : E[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, E[1])).done) return u;
                            switch (s = 0, u && (E = [E[0] & 2, u.value]), E[0]) {
                                case 0:
                                case 1:
                                    u = E;
                                    break;
                                case 4:
                                    return S.label++, {
                                        value: E[1],
                                        done: !1
                                    };
                                case 5:
                                    S.label++, s = E[1], E = [0];
                                    continue;
                                case 7:
                                    E = S.ops.pop(), S.trys.pop();
                                    continue;
                                default:
                                    if (u = S.trys, !(u = u.length > 0 && u[u.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                                        S = 0;
                                        continue
                                    }
                                    if (E[0] === 3 && (!u || E[1] > u[0] && E[1] < u[3])) {
                                        S.label = E[1];
                                        break
                                    }
                                    if (E[0] === 6 && S.label < u[1]) {
                                        S.label = u[1], u = E;
                                        break
                                    }
                                    if (u && S.label < u[2]) {
                                        S.label = u[2], S.ops.push(E);
                                        break
                                    }
                                    u[2] && S.ops.pop(), S.trys.pop();
                                    continue
                            }
                            E = m.call(n, S)
                        } catch (G) {
                            E = [6, G], s = 0
                        } finally {
                            l = u = 0
                        }
                        if (E[0] & 5) throw E[1];
                        return {
                            value: E[0] ? E[1] : void 0,
                            done: !0
                        }
                    }
                },
                k = "SYNC_PAGES_PANEL_UI",
                fe = function(n, m) {
                    return Math.abs((0, g.default)(m).diff((0, g.default)(n), "hours"))
                },
                de = function() {
                    var n = F(function(m, l, s) {
                        var u, T, S, R, N;
                        return U(this, function(E) {
                            switch (E.label) {
                                case 0:
                                    return ne.default.isSevenOne() ? [2, !1] : m ? [2, !1] : [4, (0, p.getChecklistState)({
                                        digitalProductsPlanStatus: s
                                    })];
                                case 1:
                                    return u = E.sent(), T = Object.values(u).every(function(G) {
                                        return G
                                    }), l && (S = new Date(l), R = new Date, N = fe(S, R), N < 6) ? [2, !1] : [2, !T]
                            }
                        })
                    });
                    return function(l, s, u) {
                        return n.apply(this, arguments)
                    }
                }(),
                j = function(n) {
                    var m = n.isInYuiPagesPanel,
                        l = V((0, a.useState)(null), 2),
                        s = l[0],
                        u = l[1],
                        T = V((0, a.useState)(null), 2),
                        S = T[0],
                        R = T[1],
                        N = V((0, a.useState)(!1), 2),
                        E = N[0],
                        G = N[1],
                        J = (0, I.default)().preferences,
                        $ = (0, ee.useCmsSelector)(te.getDigitalProductsPlanStatus),
                        ve = $ === H.DigitalProductsPlanStatus.INACTIVE;
                    return (0, a.useEffect)(function() {
                        function B() {
                            return L.apply(this, arguments)
                        }

                        function L() {
                            return L = F(function() {
                                var W;
                                return U(this, function(x) {
                                    switch (x.label) {
                                        case 0:
                                            return [4, de(J.memberAreasGuidanceCardHide, J.memberAreaGuidanceCardHideRemind, $)];
                                        case 1:
                                            return W = x.sent(), R(W), [2]
                                    }
                                })
                            }), L.apply(this, arguments)
                        }
                        B()
                    }, []), (0, a.useEffect)(function() {
                        function B() {
                            return L.apply(this, arguments)
                        }

                        function L() {
                            return L = F(function() {
                                var W;
                                return U(this, function(x) {
                                    switch (x.label) {
                                        case 0:
                                            return [4, q.MemberSiteApi.getTotalMemberSitesCount()];
                                        case 1:
                                            return W = x.sent(), u(W > 0), [2]
                                    }
                                })
                            }), L.apply(this, arguments)
                        }
                        return B(), t.default.listen(B),
                            function() {
                                t.default.unlisten(B)
                            }
                    }, []), (0, a.useEffect)(function() {
                        !(0, y.default)(s) && !(0, y.default)(S) && (document.dispatchEvent(new CustomEvent(k)), S && (0, b.trackViewMemberAreasGuidanceCard)(s ? "continue-setup" : "create-member-area"))
                    }, [s, S]), S ? a.default.createElement(a.default.Fragment, null, a.default.createElement(f.Box, {
                        sx: m ? {
                            px: 6,
                            marginBottom: s ? 6 : 2
                        } : {
                            my: 2
                        }
                    }, a.default.createElement(P.ThemeContext.Provider, {
                        theme: A.rosetta.white
                    }, a.default.createElement(r.Card, null, a.default.createElement(f.Flex, {
                        flexDirection: "column",
                        padding: 4
                    }, a.default.createElement(f.Flex, {
                        justifyContent: "spaceBetween"
                    }, a.default.createElement(f.Text.Body, {
                        margin: 0,
                        paddingBottom: 1,
                        fontWeight: "semibold"
                    }, s ? (0, c.t)("Get your member site ready to publish") : (0, c.t)("Sell access to exclusive content")), a.default.createElement(i.CrossLarge, {
                        sx: {
                            cursor: "pointer",
                            paddingLeft: "11px"
                        },
                        onClick: function() {
                            return G(!0)
                        }
                    })), a.default.createElement(f.Text.Body, {
                        margin: 0,
                        paddingBottom: 1
                    }, s ? (0, c.t)("Now that you\u2019ve created a member site, finish setting it up.") : (0, c.t)("Get started by adding your first member site.")), ve ? a.default.createElement(Z.GatedButton.Primary, {
                        onClick: function() {
                            return K.default.dispatch((0, _.openDigitalProductsUpgradeModal)())
                        }
                    }, s ? (0, c.t)("Continue setup") : (0, c.t)("Create member site")) : a.default.createElement(f.Button.Primary, {
                        onClick: function() {
                            if (s)(0, b.trackClickMemberAreasGuidanceCard)("continue-setup"), O.default.setIsShowingChecklistWizard(!0);
                            else {
                                var B;
                                (0, b.trackClickMemberAreasGuidanceCard)("create-member-area"), O.default.setMACreationEntryPoint(H.MemberAreasEntryPoints.PAGES_PANEL), O.default.setMAEntryPointLevel2(H.PagesPanelEntryPoints.CREATE_CARD_CTA), O.default.setMAEntryPointPath(window.location.pathname), O.default.setIsUserClickSimulated(!0), (B = document.querySelector(d.ADD_MEMBER_AREA_SELECTOR)) === null || B === void 0 || B.click()
                            }
                        }
                    }, s ? (0, c.t)("Continue setup") : (0, c.t)("Create member site")))))), a.default.createElement(o.default, {
                        isOpen: E,
                        onClose: function() {
                            (0, b.trackCloseMemberAreasGuidanceCard)("close-do-not-show-again"), (0, I.setOnboardingPreferences)({
                                memberAreasGuidanceCardHide: !0
                            }), G(!1), R(!1)
                        },
                        onRemind: F(function() {
                            return U(this, function(B) {
                                return (0, b.trackCloseMemberAreasGuidanceCard)("close-remind-me-later"), (0, I.setOnboardingPreferences)({
                                    memberAreaGuidanceCardHideRemind: Date.now()
                                }), G(!1), R(!1), [2]
                            })
                        }),
                        onCancel: function() {
                            return G(!1)
                        }
                    }), !(0, re.default)() && a.default.createElement(ae.default, null)) : null
                };
            j.getStores = function() {
                return [t.default]
            }, j.getPropsFromStores = function() {
                return se({}, t.default.getState())
            };
            var me = (0, I.withEnsureOnboardingPreferences)((0, M.withMemberAreas)((0, C.default)(j)))
        },
        503615: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return A
                }
            }), e(246857);
            var v = f(e(174161)),
                a = e(153146),
                y = e(986456),
                g = e(892342),
                c = e(997220),
                C = f(e(962513));

            function f(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }
            var r = function(i) {
                    var d = i.label,
                        O = i.onClick,
                        t = i.dataTest,
                        p = i.onFocus,
                        o = i.onBlur;
                    return v.default.createElement(g.Touchable.Element.WithoutFeedback, {
                        onBlur: o,
                        onClick: O,
                        onFocus: p
                    }, v.default.createElement(a.Cell, {
                        "data-test": t,
                        label: d,
                        exteriorAccessory: v.default.createElement(y.ChevronSmallRight, {
                            color: (0, C.default)() ? "gray.300" : "gray.600"
                        })
                    }))
                },
                P = (0, c.withFocusManagedDivider)(r, a.Divider),
                A = P
        },
        497265: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var v = g(e(943035)),
                a = g(e(356288));

            function y(r, P) {
                if (!(r instanceof P)) throw new TypeError("Cannot call a class as a function")
            }

            function g(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var c = function() {
                    return {
                        previewInstallationTemplateName: null,
                        liveInstallationTemplateName: null
                    }
                },
                C = function() {
                    "use strict";

                    function r() {
                        y(this, r), this.state = c(), this.bindActions(a.default)
                    }
                    var P = r.prototype;
                    return P.onSetPreviewInstallationTemplateName = function(i) {
                        this.setState({
                            previewInstallationTemplateName: i
                        })
                    }, P.onSetLiveInstallationTemplateName = function(i) {
                        this.setState({
                            liveInstallationTemplateName: i
                        })
                    }, r
                }(),
                f = v.default.createStore(C, "HelpHomeStore")
        },
        962513: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var v = e(898229),
                a = y(e(700769));

            function y(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var g = function() {
                return v.legacyV6Flags.isFeatureEnabled(a.default.COLLECTION_PANEL_REVAMP)
            }
        },
        919093: function(D, h, e) {
            "use strict";
            Object.defineProperty(h, "__esModule", {
                value: !0
            });

            function v(t, p) {
                for (var o in p) Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: p[o]
                })
            }
            v(h, {
                trackViewMemberAreasGuidanceCard: function() {
                    return i
                },
                trackClickMemberAreasGuidanceCard: function() {
                    return d
                },
                trackCloseMemberAreasGuidanceCard: function() {
                    return O
                }
            });
            var a = C(e(897071)),
                y = C(e(461761)),
                g = C(e(100528));

            function c(t, p, o) {
                return p in t ? Object.defineProperty(t, p, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[p] = o, t
            }

            function C(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t) {
                for (var p = 1; p < arguments.length; p++) {
                    var o = arguments[p] != null ? arguments[p] : {},
                        M = Object.keys(o);
                    typeof Object.getOwnPropertySymbols == "function" && (M = M.concat(Object.getOwnPropertySymbols(o).filter(function(b) {
                        return Object.getOwnPropertyDescriptor(o, b).enumerable
                    }))), M.forEach(function(b) {
                        c(t, b, o[b])
                    })
                }
                return t
            }
            var r = new a.default({
                    customSchemaName: "commerce_setup"
                }, f({
                    event_owner_team: "commerce",
                    event_source: "web",
                    product_area: "commerce_onboarding",
                    user_website_id: (0, y.default)(window, "Static.SQUARESPACE_CONTEXT.website.id", null)
                }, (0, g.default)())),
                P = "member-areas-guidance-card",
                A = "pages-panel";

            function i(t) {
                r.track({
                    actor: "user",
                    action: "view",
                    object_type: "card",
                    object_identifier: P,
                    object_value: "".concat(t, "-card"),
                    product_page: A
                })
            }

            function d(t) {
                r.track({
                    actor: "user",
                    action: "click",
                    object_type: "card",
                    object_identifier: P,
                    object_value: "".concat(t, "-button"),
                    product_page: A
                })
            }

            function O(t) {
                r.track({
                    actor: "user",
                    action: "close",
                    object_type: "card",
                    object_identifier: P,
                    object_value: t,
                    product_page: A
                })
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/7748d49dc3cef0eff92eccb237ce13be/10316-c6f6bff90dde8558de6f-min.en-US.js.map