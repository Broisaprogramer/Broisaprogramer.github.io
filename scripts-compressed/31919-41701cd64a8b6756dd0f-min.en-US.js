"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [31919], {
        291508: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return Y
                }
            }), e(44658), e(246857), e(259559);
            var r = b(e(174161)),
                c = e(394659),
                y = b(e(247718)),
                f = e(892342),
                g = e(153146),
                h = e(359530),
                E = e(955896),
                p = H(e(868192)),
                s = b(e(782506)),
                O = b(e(207925)),
                S = b(e(717464)),
                l = b(e(299706)),
                M = b(e(452274)),
                A = b(e(91526)),
                o = b(e(842252)),
                a = b(e(105721)),
                t = e(721384),
                n = b(e(828657)),
                i = b(e(704115)),
                P = b(e(908046)),
                R = e(548362);

            function u(d) {
                if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return d
            }

            function v(d, T) {
                if (!(d instanceof T)) throw new TypeError("Cannot call a class as a function")
            }

            function D() {
                return D = Object.assign || function(d) {
                    for (var T = 1; T < arguments.length; T++) {
                        var N = arguments[T];
                        for (var w in N) Object.prototype.hasOwnProperty.call(N, w) && (d[w] = N[w])
                    }
                    return d
                }, D.apply(this, arguments)
            }

            function I(d) {
                return I = Object.setPrototypeOf ? Object.getPrototypeOf : function(N) {
                    return N.__proto__ || Object.getPrototypeOf(N)
                }, I(d)
            }

            function C(d, T) {
                if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function");
                d.prototype = Object.create(T && T.prototype, {
                    constructor: {
                        value: d,
                        writable: !0,
                        configurable: !0
                    }
                }), T && j(d, T)
            }

            function b(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function x(d) {
                if (typeof WeakMap != "function") return null;
                var T = new WeakMap,
                    N = new WeakMap;
                return (x = function(w) {
                    return w ? N : T
                })(d)
            }

            function H(d, T) {
                if (!T && d && d.__esModule) return d;
                if (d === null || typeof d != "object" && typeof d != "function") return {
                    default: d
                };
                var N = x(T);
                if (N && N.has(d)) return N.get(d);
                var w = {},
                    B = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var L in d)
                    if (L !== "default" && Object.prototype.hasOwnProperty.call(d, L)) {
                        var G = B ? Object.getOwnPropertyDescriptor(d, L) : null;
                        G && (G.get || G.set) ? Object.defineProperty(w, L, G) : w[L] = d[L]
                    }
                return w.default = d, N && N.set(d, w), w
            }

            function V(d, T) {
                return T && (U(T) === "object" || typeof T == "function") ? T : u(d)
            }

            function j(d, T) {
                return j = Object.setPrototypeOf || function(w, B) {
                    return w.__proto__ = B, w
                }, j(d, T)
            }
            var U = function(d) {
                "@swc/helpers - typeof";
                return d && typeof Symbol != "undefined" && d.constructor === Symbol ? "symbol" : typeof d
            };

            function K() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (d) {
                    return !1
                }
            }

            function $(d) {
                var T = K();
                return function() {
                    var w = I(d),
                        B;
                    if (T) {
                        var L = I(this).constructor;
                        B = Reflect.construct(w, arguments, L)
                    } else B = w.apply(this, arguments);
                    return V(this, B)
                }
            }
            var J, z = function(d) {
                "use strict";
                C(N, d);
                var T = $(N);

                function N() {
                    v(this, N);
                    var B;
                    return B = T.apply(this, arguments), B.handleConfirmMoveSuccess = function() {
                        A.default.load()
                    }, B.handleGetADomainClick = function() {
                        s.default.clickGetDomain(B.props.currencyCode), (0, c.OpenUC)(y.default.DOMAIN, c.CheckoutTypes.NEW_PURCHASE, {
                            productCheckoutVariant: o.default.IN_APP
                        })
                    }, B.handleUseADomainClick = function() {
                        s.default.clickUseDomain(), M.default.setIsTransferConnectOpen(!0)
                    }, B
                }
                var w = N.prototype;
                return w.componentDidMount = function() {
                    s.default.viewRootPanel()
                }, w.render = function() {
                    var L, G, F = this.props,
                        Z = F.isConfirmMoveOpen,
                        _ = F.isTransferConnectOpen,
                        k = F.domainsByType,
                        q = F.registrations,
                        ee = F.registrationsByStatus,
                        te = F.transfersList,
                        re = F.isLoading,
                        ne = F.hasLoadingError,
                        oe = F.isPurchaseComplete,
                        Q = F.location,
                        ae = {
                            transfers: te,
                            registrationsByStatus: ee,
                            domainsByType: k,
                            error: ne,
                            selectedDomain: ((L = Q.params) === null || L === void 0 ? void 0 : L.name) || ((G = Q.params) === null || G === void 0 ? void 0 : G.id) || ""
                        },
                        X = (0, n.default)() ? {
                            whiteSpace: "nowrap"
                        } : {};
                    return r.default.createElement(r.default.Fragment, null, r.default.createElement(t.SettingsWrapper, {
                        isInSidebar: !(0, n.default)()
                    }, r.default.createElement(P.default, null, function(ie) {
                        return r.default.createElement(R.Breadcrumbs, D({}, ie))
                    }), r.default.createElement(t.SettingsTitle, null, (0, h.t)("Domains")), r.default.createElement(t.SettingsDescription, null, r.default.createElement(E.T, {
                        link: r.default.createElement("a", {
                            target: "_blank",
                            href: p.DOMAIN_INTRO
                        }, r.default.createElement(E.T, {
                            project: "scripts-v6.domains"
                        }, "Learn more")),
                        project: "scripts-v6.domains"
                    }, "Buy, connect, and manage domains associated with your website. {link}")), r.default.createElement(g.Stack, {
                        mt: 2,
                        space: 2,
                        direction: (0, n.default)() ? "row" : "column"
                    }, r.default.createElement(f.Button.Primary, {
                        "data-test": "get-a-domain-button",
                        size: "medium",
                        width: "100%",
                        onClick: this.handleGetADomainClick,
                        sx: X
                    }, r.default.createElement(E.T, {
                        project: "scripts-v6.domains"
                    }, "Get a Domain")), r.default.createElement(f.Button.Secondary, {
                        "data-test": "use-domain-i-own-button",
                        size: "medium",
                        width: "100%",
                        onClick: this.handleUseADomainClick,
                        sx: X
                    }, r.default.createElement(E.T, {
                        project: "scripts-v6.domains"
                    }, "Use a Domain I Own"))), re ? r.default.createElement(g.ActivityIndicator, {
                        sx: {
                            mt: 6,
                            mx: "auto"
                        }
                    }) : r.default.createElement(O.default, D({}, ae))), r.default.createElement(S.default, {
                        registrations: q,
                        isPurchaseComplete: oe
                    }), r.default.createElement(i.default, {
                        isOpen: Z,
                        onMoveSuccess: this.handleConfirmMoveSuccess,
                        onRequestClose: function() {
                            return A.default.closeConfirmMove()
                        }
                    }), r.default.createElement(l.default, {
                        isConnectEligible: !0,
                        isTransferConnectOpen: _
                    }), r.default.createElement(a.default, null))
                }, N
            }(J = r.default.Component);
            z.displayName = "DomainsRoot";
            var Y = z
        },
        253943: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            var r = E(e(943035)),
                c = E(e(964354));

            function y(o) {
                if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return o
            }

            function f(o, a) {
                if (!(o instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function g(o) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(o)
            }

            function h(o, a) {
                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                o.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: o,
                        writable: !0,
                        configurable: !0
                    }
                }), a && s(o, a)
            }

            function E(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function p(o, a) {
                return a && (O(a) === "object" || typeof a == "function") ? a : y(o)
            }

            function s(o, a) {
                return s = Object.setPrototypeOf || function(n, i) {
                    return n.__proto__ = i, n
                }, s(o, a)
            }
            var O = function(o) {
                "@swc/helpers - typeof";
                return o && typeof Symbol != "undefined" && o.constructor === Symbol ? "symbol" : typeof o
            };

            function S() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (o) {
                    return !1
                }
            }

            function l(o) {
                var a = S();
                return function() {
                    var n = g(o),
                        i;
                    if (a) {
                        var P = g(this).constructor;
                        i = Reflect.construct(n, arguments, P)
                    } else i = n.apply(this, arguments);
                    return p(this, i)
                }
            }
            var M = function(o) {
                    "use strict";
                    h(t, o);
                    var a = l(t);

                    function t() {
                        f(this, t);
                        var n;
                        return n = a.call(this), n.generateActions("dismissError"), n
                    }
                    return t
                }(c.default),
                A = r.default.createActions(M)
        },
        925617: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            }), e(246857);
            var r = E(e(174161)),
                c = E(e(253943)),
                y = e(548362),
                f = e(153146),
                g = e(651604),
                h = e(955896);

            function E(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }
            var p = function(S) {
                    var l = S.domainsRootError,
                        M = (0, g.getDomainsRootErrorConfig)(l);
                    return r.default.createElement(f.Modal, {
                        onRequestClose: c.default.dismissError
                    }, r.default.createElement(f.Modal.Overlay, null), r.default.createElement(f.Modal.Position, {
                        position: "center"
                    }, r.default.createElement(y.AlertDialog, {
                        title: M.title,
                        message: M.body,
                        buttons: [function() {
                            return r.default.createElement(y.AlertDialog.Button, {
                                key: "OK",
                                onClick: c.default.dismissError
                            }, r.default.createElement(h.T, {
                                project: "apps.App"
                            }, "OK"))
                        }]
                    })))
                },
                s = function(S) {
                    var l = S.domainsRootError;
                    return r.default.createElement(f.Modal.Transition, null, l && r.default.createElement(p, {
                        domainsRootError: l
                    }))
                },
                O = s
        },
        105721: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var r = f(e(374335)),
                c = f(e(779138)),
                y = f(e(925617));

            function f(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var g = (0, r.default)({
                getStores: function() {
                    return [c.default]
                },
                getPropsFromStores: function() {
                    return c.default.getState()
                }
            }, y.default)
        },
        651604: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            });

            function r(p, s) {
                for (var O in s) Object.defineProperty(p, O, {
                    enumerable: !0,
                    get: s[O]
                })
            }
            r(m, {
                DomainsRootError: function() {
                    return f
                },
                getDomainsRootErrorConfig: function() {
                    return E
                }
            });
            var c = e(359530);

            function y(p, s, O) {
                return s in p ? Object.defineProperty(p, s, {
                    value: O,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : p[s] = O, p
            }
            var f;
            (function(p) {
                p.LOAD_DOMAIN_BY_NAME = "LOAD_DOMAIN_BY_NAME", p.LOAD_THIRD_PARTY_DOMAIN_PROVIDERS = "LOAD_THIRD_PARTY_DOMAIN_PROVIDERS"
            })(f || (f = {}));
            var g, h = (g = {}, y(g, f.LOAD_DOMAIN_BY_NAME, {
                    title: (0, c.t)("Domain does not exist"),
                    body: (0, c.t)("This domain is not in our system.")
                }), y(g, f.LOAD_THIRD_PARTY_DOMAIN_PROVIDERS, {
                    title: (0, c.t)("Page not loading"),
                    body: (0, c.t)("Try again later. If this problem continues, contact Customer Support.")
                }), g),
                E = function(p) {
                    return h[p]
                }
        },
        231919: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return P
                }
            });
            var r = n(e(374335)),
                c = n(e(448718)),
                y = e(480689),
                f = n(e(291508)),
                g = n(e(346479)),
                h = n(e(992090)),
                E = n(e(135012)),
                p = n(e(169569)),
                s = n(e(965350)),
                O = n(e(206746)),
                S = n(e(91526)),
                l = n(e(973928)),
                M = n(e(936506)),
                A = n(e(880964)),
                o = n(e(477317)),
                a = n(e(958360)),
                t = n(e(638286));

            function n(R) {
                return R && R.__esModule ? R : {
                    default: R
                }
            }
            var i = "domainMoveRequestId",
                P = (0, r.default)({
                    componentDidConnect: function(u) {
                        var v = u.shouldSkipRefreshOnMount,
                            D = O.default.getState().domainsByType;
                        setTimeout(function() {
                            E.default.getAcceptedCurrencies()
                        }, 0), (!v || !D[c.default.APPLICATION]) && (S.default.load.defer(), M.default.loadRegistrations.defer(), o.default.load.defer()), t.default.get(i) && setTimeout(function() {
                            g.default.load().then(h.default.openConfirmMove)
                        }, 0)
                    },
                    getStores: function() {
                        return [E.default, p.default, s.default, O.default, A.default, l.default]
                    },
                    getPropsFromStores: function() {
                        var u = E.default.getState(),
                            v = u.acceptedCurrencies,
                            D = u.isLoading,
                            I = v.length === 1 ? v[0].code : null,
                            C = p.default.getState().isConfirmMoveOpen,
                            b = s.default.getState().isTransferConnectOpen,
                            x = O.default.getState(),
                            H = x.domainsByType,
                            V = x.loading,
                            j = x.errorLoading,
                            U = l.default.getState(),
                            K = U.registrations,
                            $ = U.registrationsByStatus,
                            J = U.isLoadingRegistrations,
                            z = U.loadRegistrationsError,
                            Y = A.default.getState(),
                            d = Y.transfersList,
                            T = Y.isLoading,
                            N = Y.loadTransfersFailed,
                            w = a.default.getState().isPurchaseComplete,
                            B = V || J || T || D,
                            L = j || z || N;
                        return {
                            isConfirmMoveOpen: C,
                            isTransferConnectOpen: b,
                            domainsByType: H,
                            registrations: K,
                            registrationsByStatus: $,
                            transfersList: d,
                            isLoading: B,
                            hasLoadingError: L,
                            isPurchaseComplete: w,
                            currencyCode: I
                        }
                    }
                }, (0, y.withRouter)(f.default))
        },
        779138: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return R
                }
            });
            var r = l(e(943035)),
                c = l(e(888489)),
                y = l(e(91526)),
                f = e(651604),
                g = l(e(354417)),
                h = l(e(253943));

            function E(u) {
                if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return u
            }

            function p(u, v) {
                if (!(u instanceof v)) throw new TypeError("Cannot call a class as a function")
            }

            function s(u, v, D) {
                return v in u ? Object.defineProperty(u, v, {
                    value: D,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[v] = D, u
            }

            function O(u) {
                return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(D) {
                    return D.__proto__ || Object.getPrototypeOf(D)
                }, O(u)
            }

            function S(u, v) {
                if (typeof v != "function" && v !== null) throw new TypeError("Super expression must either be null or a function");
                u.prototype = Object.create(v && v.prototype, {
                    constructor: {
                        value: u,
                        writable: !0,
                        configurable: !0
                    }
                }), v && o(u, v)
            }

            function l(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function M(u) {
                for (var v = 1; v < arguments.length; v++) {
                    var D = arguments[v] != null ? arguments[v] : {},
                        I = Object.keys(D);
                    typeof Object.getOwnPropertySymbols == "function" && (I = I.concat(Object.getOwnPropertySymbols(D).filter(function(C) {
                        return Object.getOwnPropertyDescriptor(D, C).enumerable
                    }))), I.forEach(function(C) {
                        s(u, C, D[C])
                    })
                }
                return u
            }

            function A(u, v) {
                return v && (a(v) === "object" || typeof v == "function") ? v : E(u)
            }

            function o(u, v) {
                return o = Object.setPrototypeOf || function(I, C) {
                    return I.__proto__ = C, I
                }, o(u, v)
            }
            var a = function(u) {
                "@swc/helpers - typeof";
                return u && typeof Symbol != "undefined" && u.constructor === Symbol ? "symbol" : typeof u
            };

            function t() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (u) {
                    return !1
                }
            }

            function n(u) {
                var v = t();
                return function() {
                    var I = O(u),
                        C;
                    if (v) {
                        var b = O(this).constructor;
                        C = Reflect.construct(I, arguments, b)
                    } else C = I.apply(this, arguments);
                    return A(this, C)
                }
            }
            var i = {
                    domainsRootError: null
                },
                P = function(u) {
                    "use strict";
                    S(D, u);
                    var v = n(D);

                    function D() {
                        p(this, D);
                        var C;
                        return C = v.call(this), C.state = M({}, i), C.bindActions(h.default), C.bindAction(y.default.getDomainByNameFailure, C.bindErrorType(f.DomainsRootError.LOAD_DOMAIN_BY_NAME)), C.bindAction(c.default.loadFailure, C.bindErrorType(f.DomainsRootError.LOAD_THIRD_PARTY_DOMAIN_PROVIDERS)), C
                    }
                    var I = D.prototype;
                    return I.bindErrorType = function(b) {
                        var x = this;
                        return function() {
                            x.setState({
                                domainsRootError: b
                            })
                        }
                    }, I.onDismissError = function() {
                        this.setState({
                            domainsRootError: null
                        })
                    }, D
                }(g.default),
                R = r.default.createStore(P, "DomainsRootErrorsStore")
        },
        888489: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var r = s(e(943035)),
                c = s(e(964354)),
                y = s(e(590351)),
                f = s(e(321414));

            function g(t) {
                if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function E(t) {
                return E = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
                    return i.__proto__ || Object.getPrototypeOf(i)
                }, E(t)
            }

            function p(t, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), n && S(t, n)
            }

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function O(t, n) {
                return n && (l(n) === "object" || typeof n == "function") ? n : g(t)
            }

            function S(t, n) {
                return S = Object.setPrototypeOf || function(P, R) {
                    return P.__proto__ = R, P
                }, S(t, n)
            }
            var l = function(t) {
                "@swc/helpers - typeof";
                return t && typeof Symbol != "undefined" && t.constructor === Symbol ? "symbol" : typeof t
            };

            function M() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }

            function A(t) {
                var n = M();
                return function() {
                    var P = E(t),
                        R;
                    if (n) {
                        var u = E(this).constructor;
                        R = Reflect.construct(P, arguments, u)
                    } else R = P.apply(this, arguments);
                    return O(this, R)
                }
            }
            var o = function(t) {
                    "use strict";
                    p(i, t);
                    var n = A(i);

                    function i() {
                        h(this, i);
                        var R;
                        return R = n.call(this), R.generateActions("loadSuccess", "loadFailure"), R
                    }
                    var P = i.prototype;
                    return P.load = function() {
                        var u = this;
                        return function(v) {
                            return v(), y.default.getProviders().then(function(D) {
                                var I = (0, f.default)(D.data.results, "id");
                                u.loadSuccess(I)
                            }).catch(u.loadFailure)
                        }
                    }, i
                }(c.default),
                a = r.default.createActions(o)
        },
        433605: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            }), e(246857);
            var r = E(e(174161)),
                c = e(359530),
                y = E(e(267115)),
                f = e(892342),
                g = e(363437),
                h = e(955896);

            function E(O) {
                return O && O.__esModule ? O : {
                    default: O
                }
            }
            var p = function(O) {
                    var S = O.sourceWebsite,
                        l = O.targetWebsite;
                    return !S || !l ? r.default.createElement(f.Text.Body, null, r.default.createElement(h.T, {
                        project: "domains"
                    }, "There was a problem with moving your domain. Please try again later")) : r.default.createElement(f.Flex, {
                        "data-testid": "confirm-details-container",
                        p: 0,
                        justifyContent: "space-between",
                        alignItems: "start",
                        flexDirection: {
                            default: "column",
                            "desktop-50": "row",
                            "desktop-100": "row"
                        },
                        sx: {
                            columnGap: g.space[4]
                        }
                    }, r.default.createElement(y.default, {
                        title: (0, c.t)("From"),
                        websiteName: S.siteTitle,
                        identifier: S.identifier,
                        imageUrl: S.screenshotInfo.url
                    }), r.default.createElement(y.default, {
                        title: (0, c.t)("To"),
                        websiteName: l.siteTitle,
                        identifier: l.identifier,
                        imageUrl: l.screenshotInfo.url
                    }))
                },
                s = p
        },
        485519: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return t
                }
            }), e(246857);
            var r = o(e(174161)),
                c = e(153146),
                y = e(892342),
                f = e(955896),
                g = e(359530),
                h = o(e(940046)),
                E = o(e(958854)),
                p = o(e(992090)),
                s = o(e(433605)),
                O = o(e(164749)),
                S = o(e(777097)),
                l = o(e(782506)),
                M = e(785529),
                A = e(872582);

            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }
            var a = function(n) {
                    var i = n.isOpen,
                        P = n.isLoading,
                        R = n.isRedirecting,
                        u = n.isConfirmed,
                        v = n.onMoveSuccess,
                        D = n.onRequestClose,
                        I = n.sourceWebsite,
                        C = n.targetWebsite,
                        b = n.moveRequest,
                        x = n.currentWebsiteIdentifier,
                        H = n.confirmMoveError,
                        V = n.strategy;
                    if (!b || b.targetWebsiteIdentifier !== x) return null;
                    var j = b.targetDomain,
                        U = function() {
                            P || (p.default.confirm(b), l.default.completeDomainMove({
                                targetWebsite: C,
                                entryPoint: V === M.DomainMoveStrategy.REDIRECT ? A.DomainMoveEntryPoint.DOMAIN_DETAILS : A.DomainMoveEntryPoint.USE_A_DOMAIN_I_OWN
                            }))
                        },
                        K = function() {
                            P || (p.default.clearCookie(), p.default.delete(b, V === M.DomainMoveStrategy.REDIRECT))
                        },
                        $ = function() {
                            p.default.clearCookie(), p.default.closeConfirmMove(), v()
                        },
                        J = function() {
                            p.default.closeFailureAlert()
                        },
                        z = {
                            px: {
                                _: 6,
                                "mobile-0": 3
                            }
                        },
                        Y = {
                            width: "100%",
                            maxWidth: {
                                _: "580px",
                                "mobile-0": "390px"
                            },
                            px: {
                                _: 3,
                                "desktop-100": 0
                            }
                        },
                        d = !P && !R && !u,
                        T = C && I;
                    return r.default.createElement(r.default.Fragment, null, r.default.createElement(c.Modal.Transition, null, i && !u && r.default.createElement(c.Modal, null, r.default.createElement(c.Modal.Overlay, null), r.default.createElement(c.Modal.Position, {
                        position: "center",
                        onRequestClose: D
                    }, r.default.createElement(c.Modal.Dialog.ResponsiveProvider, null, r.default.createElement(c.Modal.Dialog, {
                        "aria-label": (0, g.t)("Confirm that you want to move your domain here")
                    }, r.default.createElement(y.Flex, {
                        flexDirection: "column",
                        "data-testid": "modal-content-wrapper"
                    }, r.default.createElement(c.Stack, {
                        direction: "row",
                        justifyContent: "space-between",
                        space: 1,
                        py: 4,
                        sx: z
                    }, r.default.createElement(y.Button.Tertiary, {
                        onClick: K
                    }, r.default.createElement(f.T, {
                        project: "domains"
                    }, "Close")), r.default.createElement(y.Button.Tertiary, {
                        onClick: U,
                        disabled: !T
                    }, r.default.createElement(f.T, {
                        project: "domains"
                    }, "Confirm"))), r.default.createElement(y.Box, {
                        pb: 6,
                        mx: "auto",
                        sx: Y,
                        "data-testid": "modal-content"
                    }, r.default.createElement(y.Text.Title, {
                        sx: {
                            wordBreak: "break-word",
                            display: "inline"
                        }
                    }, r.default.createElement(f.T, {
                        project: "domains",
                        domainname: j.name
                    }, "Move {domainname}")), (P || R) && r.default.createElement(E.default, null), d && r.default.createElement(r.default.Fragment, null, r.default.createElement(S.default, {
                        moveRequest: b
                    }), r.default.createElement(O.default, {
                        moveRequest: b
                    }), r.default.createElement(s.default, {
                        sourceWebsite: I,
                        targetWebsite: C
                    }))))))))), r.default.createElement(h.default, {
                        isOpen: !!H,
                        title: (0, g.t)("Unable to move domain"),
                        message: (0, g.t)("There was a problem with moving your domain. Please try again later"),
                        dismissText: (0, g.t)("OK"),
                        onDismiss: J
                    }), r.default.createElement(h.default, {
                        isOpen: u && i,
                        title: (0, g.t)("Your domain has been moved"),
                        message: (0, g.t)("{domainName} has been successfully moved to {siteTitle}.", {
                            domainName: j.name,
                            siteTitle: C.siteTitle
                        }),
                        dismissText: (0, g.t)("Done"),
                        onDismiss: $
                    }))
                },
                t = a
        },
        267115: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            }), e(246857);
            var r = h(e(174161)),
                c = e(892342),
                y = e(153146),
                f = h(e(149321)),
                g = h(e(978170));

            function h(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }
            var E = function(s) {
                    var O = s.title,
                        S = s.websiteName,
                        l = s.imageUrl,
                        M = s.identifier,
                        A = (0, g.default)().isMobile;
                    return r.default.createElement(c.Flex, {
                        as: "figure",
                        m: 0,
                        sx: {
                            flexDirection: "column",
                            width: "100%",
                            minWidth: A ? "320px" : "250px"
                        }
                    }, r.default.createElement(c.Text.Subtitle, null, O), r.default.createElement(y.Image, {
                        src: l,
                        my: 2,
                        sx: {
                            backgroundImage: "url(".concat(f.default, ")"),
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "auto",
                            display: "block",
                            aspectRatio: "16/9"
                        }
                    }), r.default.createElement(c.Flex, {
                        as: "figcaption",
                        sx: {
                            flexDirection: "column"
                        }
                    }, r.default.createElement(c.Text.Body, {
                        m: 0
                    }, S), r.default.createElement(c.Text.Caption, null, M)))
                },
                p = E
        },
        777097: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            }), e(246857);
            var r = g(e(174161)),
                c = e(892342),
                y = e(359530),
                f = e(955896);

            function g(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }
            var h = function(p) {
                    var s = p.moveRequest,
                        O = s.basePrice,
                        S = s.renewsOn,
                        l = s.targetDomain,
                        M = l.autoRenew,
                        A = l.managedDomainExpiration,
                        o = (0, y.formatDateTime)(A),
                        a = (0, y.formatDateTime)(S),
                        t = (0, y.formatMoney)(O);
                    return s ? M ? r.default.createElement(c.Text.Subtitle, {
                        color: "gray.300"
                    }, r.default.createElement(f.T, {
                        renewalPrice: t,
                        renewalDate: a,
                        project: "domains"
                    }, "This domain will renew on {renewalDate} for {renewalPrice}.")) : r.default.createElement(c.Text.Subtitle, {
                        color: "gray.300"
                    }, r.default.createElement(f.T, {
                        renewalPrice: t,
                        expirationDate: o,
                        project: "domains"
                    }, "This domain will expire on {expirationDate} unless you renew it for {renewalPrice} or turn on auto-renew.")) : null
                },
                E = h
        },
        164749: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return S
                }
            }), e(246857);
            var r = h(e(174161)),
                c = e(892342),
                y = e(955896),
                f = e(408146),
                g = p(e(868192));

            function h(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }

            function E(l) {
                if (typeof WeakMap != "function") return null;
                var M = new WeakMap,
                    A = new WeakMap;
                return (E = function(o) {
                    return o ? A : M
                })(l)
            }

            function p(l, M) {
                if (!M && l && l.__esModule) return l;
                if (l === null || typeof l != "object" && typeof l != "function") return {
                    default: l
                };
                var A = E(M);
                if (A && A.has(l)) return A.get(l);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var t in l)
                    if (t !== "default" && Object.prototype.hasOwnProperty.call(l, t)) {
                        var n = a ? Object.getOwnPropertyDescriptor(l, t) : null;
                        n && (n.get || n.set) ? Object.defineProperty(o, t, n) : o[t] = l[t]
                    }
                return o.default = l, A && A.set(l, o), o
            }
            var s = r.default.createElement("a", {
                    href: g.MOVE_DOMAIN,
                    target: "_blank"
                }, r.default.createElement(y.T, {
                    project: "apps.App"
                }, "Learn more")),
                O = function(l) {
                    var M = l.moveRequest,
                        A = M.hasGoogleApps,
                        o = M.googleAppsMovePreview,
                        a = M.targetDomain;
                    return A && !o ? r.default.createElement(c.Text.Body, null, r.default.createElement(y.T, {
                        domainName: a.name,
                        googleProduct: f.GOOGLE_WORKSPACE_NAME,
                        siteIdentifier: M.sourceWebsiteIdentifier,
                        learnMoreLink: s,
                        project: "apps.App"
                    }, "Your {googleProduct} account cannot be moved with this domain and will stay on {siteIdentifier}. {learnMoreLink}")) : o ? r.default.createElement(c.Text.Body, null, r.default.createElement(y.T, {
                        domainName: a.name,
                        googleProduct: f.GOOGLE_WORKSPACE_NAME,
                        project: "domains"
                    }, "Your {googleProduct} account on @{domainName} will move with the domain.")) : null
                },
                S = O
        },
        704115: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return A
                }
            });
            var r = s(e(374335)),
                c = s(e(169569)),
                y = s(e(992090)),
                f = s(e(150565)),
                g = s(e(346479)),
                h = s(e(914699)),
                E = s(e(485519));

            function p(o, a, t) {
                return a in o ? Object.defineProperty(o, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = t, o
            }

            function s(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function O(o) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a] != null ? arguments[a] : {},
                        n = Object.keys(t);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(i) {
                        return Object.getOwnPropertyDescriptor(t, i).enumerable
                    }))), n.forEach(function(i) {
                        p(o, i, t[i])
                    })
                }
                return o
            }

            function S(o, a) {
                var t = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(o);
                    a && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(o, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function l(o, a) {
                return a = a != null ? a : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : S(Object(a)).forEach(function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t))
                }), o
            }

            function M(o, a) {
                return o.find(function(t) {
                    return t.identifier === a
                })
            }
            var A = (0, r.default)({
                componentDidConnect: function() {
                    y.default.loadRequestFromCookie.defer();
                    var a = f.default.getWebsiteSummaries();
                    a || g.default.load()
                },
                getStores: function() {
                    return [c.default]
                },
                getPropsFromStores: function() {
                    var a = c.default.getState(),
                        t = f.default.getWebsiteSummaries(),
                        n = f.default.getState(),
                        i = n.loading,
                        P = {},
                        R = {};
                    return a.moveRequest && t && (P = M(t, a.moveRequest.sourceWebsiteIdentifier), R = M(t, a.moveRequest.targetWebsiteIdentifier)), l(O({}, a), {
                        isLoading: i || !t || a.isLoading,
                        sourceWebsite: P,
                        targetWebsite: R,
                        currentWebsiteIdentifier: h.default.getState().get("identifier")
                    })
                }
            }, E.default)
        },
        303203: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            var r = O(e(174161)),
                c = p(e(565206)),
                y = e(370075),
                f = p(e(183173)),
                g = p(e(351689));

            function h(t, n) {
                (n == null || n > t.length) && (n = t.length);
                for (var i = 0, P = new Array(n); i < n; i++) P[i] = t[i];
                return P
            }

            function E(t) {
                if (Array.isArray(t)) return t
            }

            function p(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t) {
                if (typeof WeakMap != "function") return null;
                var n = new WeakMap,
                    i = new WeakMap;
                return (s = function(P) {
                    return P ? i : n
                })(t)
            }

            function O(t, n) {
                if (!n && t && t.__esModule) return t;
                if (t === null || typeof t != "object" && typeof t != "function") return {
                    default: t
                };
                var i = s(n);
                if (i && i.has(t)) return i.get(t);
                var P = {},
                    R = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var u in t)
                    if (u !== "default" && Object.prototype.hasOwnProperty.call(t, u)) {
                        var v = R ? Object.getOwnPropertyDescriptor(t, u) : null;
                        v && (v.get || v.set) ? Object.defineProperty(P, u, v) : P[u] = t[u]
                    }
                return P.default = t, i && i.set(t, P), P
            }

            function S(t, n) {
                var i = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (i != null) {
                    var P = [],
                        R = !0,
                        u = !1,
                        v, D;
                    try {
                        for (i = i.call(t); !(R = (v = i.next()).done) && (P.push(v.value), !(n && P.length === n)); R = !0);
                    } catch (I) {
                        u = !0, D = I
                    } finally {
                        try {
                            !R && i.return != null && i.return()
                        } finally {
                            if (u) throw D
                        }
                    }
                    return P
                }
            }

            function l() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function M(t, n) {
                return E(t) || S(t, n) || A(t, n) || l()
            }

            function A(t, n) {
                if (t) {
                    if (typeof t == "string") return h(t, n);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(i);
                    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return h(t, n)
                }
            }
            var o = function(t) {
                    var n = t.registrations,
                        i = t.suppressAlert,
                        P = t.isPurchaseComplete,
                        R = M((0, r.useState)(!1), 2),
                        u = R[0],
                        v = R[1],
                        D = (0, r.useRef)(!(0, y.isImpersonatedSession)() && !(0, y.hasSeenSurvey)());
                    return (0, r.useEffect)(function() {
                        i && g.default.setPurchaseComplete.defer(!1)
                    }, []), (0, r.useEffect)(function() {
                        P && (i || v(!0))
                    }, [i, P]), r.default.createElement(r.default.Fragment, null, D.current && r.default.createElement(c.default, {
                        onRequestClose: function() {
                            v(!1), g.default.setPurchaseComplete(!1)
                        },
                        isOpen: u,
                        markSurveyShownCallback: f.default.grantAchievement
                    }))
                },
                a = o
        },
        717464: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return y
                }
            });
            var r = c(e(303203));

            function c(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var y = r.default
        },
        590351: function(W, m, e) {
            Object.defineProperty(m, "__esModule", {
                value: !0
            }), Object.defineProperty(m, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var r = c(e(808847));

            function c(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
            var y = "/api/domain-providers",
                f = {
                    getProviders: function() {
                        return r.default.get(y)
                    }
                },
                g = f
        },
        149321: function(W, m, e) {
            W.exports = e.p + "movedomain-website-placeholder-5036bd57f0e74f1ed2fb.png"
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/d909235baf7c12956050e9faa0b8f6f3/31919-41701cd64a8b6756dd0f-min.en-US.js.map