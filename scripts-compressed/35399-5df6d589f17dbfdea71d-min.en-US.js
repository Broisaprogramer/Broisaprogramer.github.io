"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [35399], {
        477317: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            });
            var n = O(t(943035)),
                g = O(t(964354)),
                S = O(t(509345)),
                D = O(t(556767)),
                h = O(t(99016)),
                f = O(t(569082)),
                c = O(t(580225));

            function l(m) {
                if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return m
            }

            function b(m, r) {
                if (!(m instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function u(m) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
                    return s.__proto__ || Object.getPrototypeOf(s)
                }, u(m)
            }

            function y(m, r) {
                if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
                m.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: m,
                        writable: !0,
                        configurable: !0
                    }
                }), r && T(m, r)
            }

            function O(m) {
                return m && m.__esModule ? m : {
                    default: m
                }
            }

            function R(m, r) {
                return r && (C(r) === "object" || typeof r == "function") ? r : l(m)
            }

            function T(m, r) {
                return T = Object.setPrototypeOf || function(a, p) {
                    return a.__proto__ = p, a
                }, T(m, r)
            }
            var C = function(m) {
                "@swc/helpers - typeof";
                return m && typeof Symbol != "undefined" && m.constructor === Symbol ? "symbol" : typeof m
            };

            function N() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (m) {
                    return !1
                }
            }

            function _(m) {
                var r = N();
                return function() {
                    var a = u(m),
                        p;
                    if (r) {
                        var I = u(this).constructor;
                        p = Reflect.construct(a, arguments, I)
                    } else p = a.apply(this, arguments);
                    return R(this, p)
                }
            }
            var M = function(m) {
                    "use strict";
                    y(s, m);
                    var r = _(s);

                    function s() {
                        b(this, s);
                        var p;
                        return p = r.call(this), p.generateActions("loadSuccess", "loadFailure", "loadByIdSuccess", "loadByIdFailure", "cancelSuccess", "cancelFailure", "resetLoadCancelFailed", "resetLoadCancelSucceeded", "transferKitLoaded", "transferKitFailed"), p
                    }
                    var a = s.prototype;
                    return a.load = function() {
                        var I = this;
                        return function(i) {
                            return i(), c.default.loadTransfers().then(I.loadSuccess).catch(I.loadFailure)
                        }
                    }, a.loadById = function(I) {
                        var i = this;
                        return function(d) {
                            return d(), c.default.loadTransferById(I).then(i.loadByIdSuccess).catch(i.loadByIdFailure)
                        }
                    }, a.cancelTransfer = function(I) {
                        var i = this;
                        return function(d) {
                            return d(), c.default.cancelTransfer(I).then(function() {
                                var E = D.default.getState().isParkingPage;
                                E ? S.default.getStatus().then(i.cancelSuccess) : i.cancelSuccess()
                            }).catch(i.cancelFailure)
                        }
                    }, a.getAdminEmail = function(I) {
                        var i = this;
                        return function(d) {
                            d(), h.default.getTransferKit(I).then(i.transferKitLoaded).catch(i.transferKitFailed)
                        }
                    }, a.logoutParkingPage = function() {
                        f.default.logout()
                    }, s
                }(g.default),
                j = n.default.createActions(M)
        },
        509345: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var n = D(t(943035)),
                g = D(t(893296));

            function S(c, l) {
                if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
            }

            function D(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var h = function() {
                    "use strict";

                    function c() {
                        S(this, c), this.generateActions("loadSuccess", "loadFailure")
                    }
                    var l = c.prototype;
                    return l.getStatus = function() {
                        var u = this;
                        return function(y) {
                            return g.default.getStatus().then(function(O) {
                                u.loadSuccess(O.data)
                            }, function(O) {
                                u.loadFailure(O.data)
                            })
                        }
                    }, c
                }(),
                f = n.default.createActions(h)
        },
        369859: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return m
                }
            }), t(246857);
            var n = O(t(174161)),
                g = t(359530),
                S = t(955896),
                D = t(153146),
                h = t(892342),
                f = t(363437),
                c = O(t(670058)),
                l = O(t(233590)),
                b = O(t(73004)),
                u = O(t(198219));

            function y(r, s, a) {
                return s in r ? Object.defineProperty(r, s, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[s] = a, r
            }

            function O(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var R = (0, g.t)("Transfer in progress"),
                T, C = (T = {}, y(T, u.default.UNINITIATED, f.colors.gray[300]), y(T, u.default.AWAITING_PROCESSING, f.colors.gray[300]), y(T, u.default.AWAITING_UNLOCKING, f.colors.red[300]), y(T, u.default.AWAITING_AUTH_CODE, f.colors.red[300]), y(T, u.default.PROCESSING, f.colors.gray[300]), y(T, u.default.PENDING_CUSTOMER_APPROVAL, f.colors.red[300]), y(T, u.default.PENDING_WINNER_APPROVAL, f.colors.gray[300]), y(T, u.default.PENDING_LOSER_APPROVAL, f.colors.gray[300]), y(T, u.default.PENDING_IPS_TAG_UPDATE, f.colors.gray[300]), y(T, u.default.FAILED, f.colors.red[300]), y(T, u.default.CANCELED, f.colors.red[300]), T),
                N, _ = (N = {}, y(N, u.default.UNINITIATED, R), y(N, u.default.AWAITING_PROCESSING, R), y(N, u.default.AWAITING_UNLOCKING, (0, g.t)("Domain Needs to be Unlocked")), y(N, u.default.AWAITING_AUTH_CODE, (0, g.t)("Authorization Code Needed")), y(N, u.default.PROCESSING, R), y(N, u.default.PENDING_CUSTOMER_APPROVAL, (0, g.t)("Email verification required")), y(N, u.default.PENDING_WINNER_APPROVAL, R), y(N, u.default.PENDING_LOSER_APPROVAL, R), y(N, u.default.PENDING_IPS_TAG_UPDATE, R), y(N, u.default.CANCELED, (0, g.t)("Transfer Canceled")), y(N, u.default.FAILED, (0, g.t)("Transfer Failed")), N),
                M = function(r) {
                    var s = r.transfer,
                        a = r.selectedDomain;
                    return n.default.createElement(c.default, {
                        key: s.id,
                        to: "".concat(l.default.forDomainsFullWidth(), "transfer/").concat(s.id)
                    }, n.default.createElement(b.default, {
                        key: s.id,
                        label: s.domainName,
                        omitChevron: !0,
                        isSelected: s.id === a,
                        description: n.default.createElement(h.Text.Caption, {
                            color: C[s.status]
                        }, _[s.status])
                    }))
                },
                j = function(r) {
                    var s = r.transfers,
                        a = r.selectedDomain;
                    return s.length ? n.default.createElement(n.default.Fragment, null, n.default.createElement(h.Text.Label, {
                        "data-test": "transferred-domains-label",
                        mt: 6
                    }, n.default.createElement(S.T, {
                        project: "apps.ia-missing-required"
                    }, "Transfers In Progress")), n.default.createElement(D.Stack, {
                        "data-test": "transferring-domains-list",
                        mt: 2
                    }, s.map(function(p) {
                        return n.default.createElement(M, {
                            key: p.id,
                            transfer: p,
                            selectedDomain: a
                        })
                    }))) : null
                },
                m = j
        },
        842252: function(B, v) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            var t;
            (function(g) {
                g.IN_APP = "in-app", g.FRONTSITE = "frontsite", g.REACTIVATION = "reactivation"
            })(t || (t = {}));
            var n = t
        },
        880964: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });
            var n = y(t(943035)),
                g = y(t(354417)),
                S = y(t(477317));

            function D(i, d) {
                (d == null || d > i.length) && (d = i.length);
                for (var E = 0, e = new Array(d); E < d; E++) e[E] = i[E];
                return e
            }

            function h(i) {
                if (Array.isArray(i)) return D(i)
            }

            function f(i) {
                if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return i
            }

            function c(i, d) {
                if (!(i instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function l(i, d, E) {
                return d in i ? Object.defineProperty(i, d, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[d] = E, i
            }

            function b(i) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
                    return E.__proto__ || Object.getPrototypeOf(E)
                }, b(i)
            }

            function u(i, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
                i.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: i,
                        writable: !0,
                        configurable: !0
                    }
                }), d && M(i, d)
            }

            function y(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i) {
                if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i)
            }

            function R() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function T(i) {
                for (var d = 1; d < arguments.length; d++) {
                    var E = arguments[d] != null ? arguments[d] : {},
                        e = Object.keys(E);
                    typeof Object.getOwnPropertySymbols == "function" && (e = e.concat(Object.getOwnPropertySymbols(E).filter(function(o) {
                        return Object.getOwnPropertyDescriptor(E, o).enumerable
                    }))), e.forEach(function(o) {
                        l(i, o, E[o])
                    })
                }
                return i
            }

            function C(i, d) {
                var E = Object.keys(i);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(i);
                    d && (e = e.filter(function(o) {
                        return Object.getOwnPropertyDescriptor(i, o).enumerable
                    })), E.push.apply(E, e)
                }
                return E
            }

            function N(i, d) {
                return d = d != null ? d : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(d)) : C(Object(d)).forEach(function(E) {
                    Object.defineProperty(i, E, Object.getOwnPropertyDescriptor(d, E))
                }), i
            }

            function _(i, d) {
                return d && (m(d) === "object" || typeof d == "function") ? d : f(i)
            }

            function M(i, d) {
                return M = Object.setPrototypeOf || function(e, o) {
                    return e.__proto__ = o, e
                }, M(i, d)
            }

            function j(i) {
                return h(i) || O(i) || r(i) || R()
            }
            var m = function(i) {
                "@swc/helpers - typeof";
                return i && typeof Symbol != "undefined" && i.constructor === Symbol ? "symbol" : typeof i
            };

            function r(i, d) {
                if (i) {
                    if (typeof i == "string") return D(i, d);
                    var E = Object.prototype.toString.call(i).slice(8, -1);
                    if (E === "Object" && i.constructor && (E = i.constructor.name), E === "Map" || E === "Set") return Array.from(E);
                    if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return D(i, d)
                }
            }

            function s() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (i) {
                    return !1
                }
            }

            function a(i) {
                var d = s();
                return function() {
                    var e = b(i),
                        o;
                    if (d) {
                        var P = b(this).constructor;
                        o = Reflect.construct(e, arguments, P)
                    } else o = e.apply(this, arguments);
                    return _(this, o)
                }
            }
            var p = function(i) {
                    "use strict";
                    u(E, i);
                    var d = a(E);

                    function E() {
                        c(this, E);
                        var o;
                        return o = d.call(this), o.state = {
                            isLoading: !1,
                            isLoadingSingleTransfer: !1,
                            transfers: {},
                            transfersList: [],
                            loadTransfersFailed: !1,
                            loadingCanceling: !1,
                            loadCancelSucceeded: !1,
                            loadCancelFailed: !1,
                            adminEmailAddress: ""
                        }, o.bindActions(S.default), o
                    }
                    var e = E.prototype;
                    return e.onLoad = function() {
                        this.setState({
                            isLoading: !0,
                            transfers: {}
                        })
                    }, e.onLoadSuccess = function(P) {
                        var A = P.reduce(function(L, F) {
                            return L[F.id] = F, L
                        }, {});
                        this.setState({
                            isLoading: !1,
                            loadTransfersFailed: !1,
                            transfers: A,
                            transfersList: P
                        })
                    }, e.onLoadFailure = function() {
                        this.setState({
                            isLoading: !1,
                            loadTransfersFailed: !0
                        })
                    }, e.onLoadById = function() {
                        this.setState({
                            isLoadingSingleTransfer: !0
                        })
                    }, e.onLoadByIdSuccess = function(P) {
                        var A = P.data;
                        this.setState(function(L) {
                            var F = j(L.transfersList),
                                w = F.findIndex(function(G) {
                                    return G.id === A.id
                                });
                            return w === -1 ? F.push(A) : F[w] = A, {
                                transfers: N(T({}, L.transfers), l({}, A.id, A)),
                                transfersList: F,
                                isLoadingSingleTransfer: !1
                            }
                        })
                    }, e.onLoadByIdFailure = function() {
                        this.setState({
                            isLoadingSingleTransfer: !1
                        })
                    }, e.onCancelTransfer = function() {
                        this.setState({
                            loadingCanceling: !0
                        })
                    }, e.onCancelSuccess = function() {
                        this.setState({
                            loadingCanceling: !1,
                            loadCancelSucceeded: !0,
                            loadCancelFailed: !1
                        })
                    }, e.onCancelFailure = function() {
                        this.setState({
                            loadingCanceling: !1,
                            loadCancelSucceeded: !1,
                            loadCancelFailed: !0
                        })
                    }, e.onResetLoadCancelFailed = function() {
                        this.setState({
                            loadCancelFailed: !1
                        })
                    }, e.onResetLoadCancelSucceeded = function() {
                        this.setState({
                            loadCancelSucceeded: !1
                        })
                    }, e.onGetAdminEmail = function() {
                        this.setState({
                            isLoading: !0
                        })
                    }, e.onTransferKitLoaded = function(P) {
                        this.setState({
                            adminEmailAddress: P.adminEmailAddress,
                            isLoading: !1
                        })
                    }, e.onTransferKitFailed = function() {
                        this.setState({
                            adminEmailAddress: "",
                            isLoading: !1
                        })
                    }, E
                }(g.default),
                I = n.default.createStore(p, "TransferManagementStore")
        },
        556767: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var n = h(t(509345)),
                g = h(t(472970)),
                S = h(t(672534));

            function D(l, b) {
                if (!(l instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function h(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }
            var f = function() {
                    "use strict";

                    function l() {
                        D(this, l), this.isParkingPage = !1, this.isRemovable = !1, this.bindActions(n.default)
                    }
                    var b = l.prototype;
                    return b.getStateFromContext = function(y) {
                        var O = y.website;
                        return {
                            isParkingPage: O.websiteType === S.default.PARKING_PAGE
                        }
                    }, b.onLoadFailure = function() {
                        this.isParkingPage = !1, this.isRemovable = !1
                    }, b.onLoadSuccess = function(y) {
                        var O = y.isParkingPage,
                            R = y.isRemovable;
                        this.isParkingPage = O, this.isRemovable = R
                    }, l
                }(),
                c = (0, g.default)(f, "ParkingPageStatusStore")
        },
        580225: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var n = g(t(808847));

            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var S = "/api/domain-transfer-in",
                D = {
                    loadTransfers: function() {
                        return n.default.get(S).then(function(c) {
                            return c.data.results
                        }, function(c) {
                            return c && c.message
                        })
                    },
                    loadTransferById: function(c) {
                        return n.default.get("".concat(S, "/").concat(c))
                    },
                    checkTransferLockStatus: function(c) {
                        return n.default.put("".concat(S, "/").concat(c, "/lock-status"))
                    },
                    checkAuthCode: function(c, l) {
                        return n.default.put("".concat(S, "/").concat(c, "/auth-code"), {
                            authCode: l
                        })
                    },
                    cancelTransfer: function(c) {
                        return n.default.delete("".concat(S, "/").concat(c))
                    },
                    resendApprovalEmail: function(c) {
                        return n.default.post("".concat(S, "/").concat(c, "/approval-email"))
                    },
                    dismissTransfer: function(c) {
                        return n.default.put("".concat(S, "/").concat(c, "/dismiss"))
                    }
                },
                h = D
        },
        893296: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var n = g(t(808847));

            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var S = "/api/parking-page-status",
                D = {
                    getStatus: function() {
                        return n.default.get(S)
                    }
                },
                h = D
        },
        207925: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            }), t(246857);
            var n = y(t(174161)),
                g = t(955896),
                S = t(892342),
                D = t(153146),
                h = t(733436),
                f = y(t(369859)),
                c = y(t(448718)),
                l = y(t(198219)),
                b = y(t(383914));

            function u(m, r, s) {
                return r in m ? Object.defineProperty(m, r, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : m[r] = s, m
            }

            function y(m) {
                return m && m.__esModule ? m : {
                    default: m
                }
            }

            function O(m) {
                for (var r = 1; r < arguments.length; r++) {
                    var s = arguments[r] != null ? arguments[r] : {},
                        a = Object.keys(s);
                    typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(s).filter(function(p) {
                        return Object.getOwnPropertyDescriptor(s, p).enumerable
                    }))), a.forEach(function(p) {
                        u(m, p, s[p])
                    })
                }
                return m
            }

            function R(m, r) {
                var s = Object.keys(m);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(m);
                    r && (a = a.filter(function(p) {
                        return Object.getOwnPropertyDescriptor(m, p).enumerable
                    })), s.push.apply(s, a)
                }
                return s
            }

            function T(m, r) {
                return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach(function(s) {
                    Object.defineProperty(m, s, Object.getOwnPropertyDescriptor(r, s))
                }), m
            }
            var C = [{
                    statuses: [b.default.PENDING, b.default.PENDING_AUTHENTICATION, b.default.PROCESSING_PAYMENT],
                    label: n.default.createElement(g.T, {
                        project: "apps.doms-async"
                    }, "Pending Registration"),
                    testId: "pending-registrations-label",
                    key: "pending-registration"
                }, {
                    statuses: [b.default.FAILED],
                    label: n.default.createElement(g.T, {
                        project: "apps.doms-async"
                    }, "Failed Registration"),
                    testId: "failed-registrations-label",
                    key: "failed-registration"
                }],
                N = [{
                    type: c.default.SQUARESPACE,
                    label: n.default.createElement(g.T, {
                        project: "apps.ia-missing-required"
                    }, "Domains Managed by Squarespace"),
                    testId: "managed-domains-label"
                }, {
                    type: c.default.RESOLD,
                    label: n.default.createElement(g.T, {
                        project: "domains"
                    }, "Domains Billed by Reseller"),
                    testId: "resold-domain-label"
                }, {
                    type: c.default.LINKED,
                    label: n.default.createElement(g.T, {
                        project: "apps.ia-missing-required"
                    }, "Domains Managed by Third-Party"),
                    testId: "linked-domains-label"
                }, {
                    type: c.default.APPLICATION,
                    label: n.default.createElement(g.T, {
                        project: "apps.ia-missing-required"
                    }, "Built-in Domain"),
                    testId: "application-domain-label"
                }],
                _ = [l.default.COMPLETED, l.default.UNKNOWN_STATUS, l.default.USER_CANCELED, l.default.DISMISSED],
                M = function(m) {
                    var r = m.registrationsByStatus,
                        s = m.transfers,
                        a = m.domainsByType,
                        p = m.error,
                        I = m.selectedDomain;
                    if (p) return n.default.createElement(g.T, {
                        project: "scripts-v6.domains"
                    }, "There was an error loading your domains. Please try again later.");
                    var i = s.filter(function(e) {
                            return !_.includes(e.status)
                        }),
                        d = T(O({}, a), u({}, c.default.SQUARESPACE, a[c.default.SQUARESPACE] && r[b.default.PENDING] ? a[c.default.SQUARESPACE].filter(function(e) {
                            return !r[b.default.PENDING].find(function(o) {
                                return o.domainName === e.name
                            })
                        }) : a[c.default.SQUARESPACE])),
                        E = function(e) {
                            return e.reduce(function(o, P) {
                                var A = r[P];
                                return A ? o.concat(A) : o
                            }, [])
                        };
                    return n.default.createElement(n.default.Fragment, null, C.map(function(e) {
                        var o = E(e.statuses);
                        return e && o && o.length ? n.default.createElement(n.default.Fragment, {
                            key: e.key
                        }, n.default.createElement(S.Text.Label, {
                            mt: 6,
                            "data-test": e.testId
                        }, e.label), n.default.createElement(D.Stack, {
                            mt: 2
                        }, o.map(h.RegistrationPusher))) : null
                    }), n.default.createElement(f.default, {
                        transfers: i,
                        selectedDomain: I
                    }), N.map(function(e) {
                        var o = d[e.type];
                        return e && o && o.length ? n.default.createElement(n.default.Fragment, {
                            key: e.type
                        }, n.default.createElement(S.Text.Label, {
                            mt: 6,
                            "data-test": e.testId
                        }, e.label), n.default.createElement(D.Stack, {
                            mt: 2
                        }, o.map(function(P) {
                            return n.default.createElement(h.DomainPusher, {
                                key: P.id,
                                domain: P,
                                isSelected: P.name === I
                            })
                        }))) : null
                    }))
                },
                j = M
        },
        936506: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            var n = u(t(964354)),
                g = u(t(943035)),
                S = u(t(544768)),
                D = u(t(383914));

            function h(r) {
                if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return r
            }

            function f(r, s) {
                if (!(r instanceof s)) throw new TypeError("Cannot call a class as a function")
            }

            function c(r, s, a) {
                return s in r ? Object.defineProperty(r, s, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[s] = a, r
            }

            function l(r) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                    return a.__proto__ || Object.getPrototypeOf(a)
                }, l(r)
            }

            function b(r, s) {
                if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
                r.prototype = Object.create(s && s.prototype, {
                    constructor: {
                        value: r,
                        writable: !0,
                        configurable: !0
                    }
                }), s && C(r, s)
            }

            function u(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function y(r) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = arguments[s] != null ? arguments[s] : {},
                        p = Object.keys(a);
                    typeof Object.getOwnPropertySymbols == "function" && (p = p.concat(Object.getOwnPropertySymbols(a).filter(function(I) {
                        return Object.getOwnPropertyDescriptor(a, I).enumerable
                    }))), p.forEach(function(I) {
                        c(r, I, a[I])
                    })
                }
                return r
            }

            function O(r, s) {
                var a = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(r);
                    s && (p = p.filter(function(I) {
                        return Object.getOwnPropertyDescriptor(r, I).enumerable
                    })), a.push.apply(a, p)
                }
                return a
            }

            function R(r, s) {
                return s = s != null ? s : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : O(Object(s)).forEach(function(a) {
                    Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(s, a))
                }), r
            }

            function T(r, s) {
                return s && (N(s) === "object" || typeof s == "function") ? s : h(r)
            }

            function C(r, s) {
                return C = Object.setPrototypeOf || function(p, I) {
                    return p.__proto__ = I, p
                }, C(r, s)
            }
            var N = function(r) {
                "@swc/helpers - typeof";
                return r && typeof Symbol != "undefined" && r.constructor === Symbol ? "symbol" : typeof r
            };

            function _() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (r) {
                    return !1
                }
            }

            function M(r) {
                var s = _();
                return function() {
                    var p = l(r),
                        I;
                    if (s) {
                        var i = l(this).constructor;
                        I = Reflect.construct(p, arguments, i)
                    } else I = p.apply(this, arguments);
                    return T(this, I)
                }
            }
            var j = function(r) {
                    "use strict";
                    b(a, r);
                    var s = M(a);

                    function a() {
                        f(this, a);
                        var I;
                        return I = s.call(this), I.generateActions("loadRegistrationsSuccess", "loadRegistrationsFailure", "loadRegistrationByIdSuccess", "loadRegistrationByIdFailure", "dismissFailedRegistrationSuccess", "dismissFailedRegistrationFailure", "resetDismissError"), I
                    }
                    var p = a.prototype;
                    return p.loadRegistrations = function() {
                        var i = this;
                        return function(d) {
                            return d(), S.default.loadRegistrations().then(i.loadRegistrationsSuccess).catch(i.loadRegistrationsFailure)
                        }
                    }, p.loadRegistrationById = function(i) {
                        var d = this;
                        return function(E) {
                            return E(), S.default.loadRegistrationById(i).then(d.loadRegistrationByIdSuccess).catch(d.loadRegistrationByIdFailure)
                        }
                    }, p.dismissFailedRegistration = function(i) {
                        var d = this;
                        return function(E) {
                            return E(), S.default.dismissFailedRegistrationByName(i.domainName).then(function() {
                                d.dismissFailedRegistrationSuccess(), d.loadRegistrationByIdSuccess({
                                    data: R(y({}, i), {
                                        status: D.default.DISMISSED
                                    })
                                })
                            }).catch(d.dismissFailedRegistrationFailure)
                        }
                    }, a
                }(n.default),
                m = g.default.createActions(j)
        },
        73004: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            }), t(246857);
            var n = h(t(174161)),
                g = t(153146),
                S = t(986456);

            function D() {
                return D = Object.assign || function(u) {
                    for (var y = 1; y < arguments.length; y++) {
                        var O = arguments[y];
                        for (var R in O) Object.prototype.hasOwnProperty.call(O, R) && (u[R] = O[R])
                    }
                    return u
                }, D.apply(this, arguments)
            }

            function h(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function f(u, y) {
                if (u == null) return {};
                var O = c(u, y),
                    R, T;
                if (Object.getOwnPropertySymbols) {
                    var C = Object.getOwnPropertySymbols(u);
                    for (T = 0; T < C.length; T++) R = C[T], !(y.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(u, R) && (O[R] = u[R])
                }
                return O
            }

            function c(u, y) {
                if (u == null) return {};
                var O = {},
                    R = Object.keys(u),
                    T, C;
                for (C = 0; C < R.length; C++) T = R[C], !(y.indexOf(T) >= 0) && (O[T] = u[T]);
                return O
            }
            var l = function(u) {
                    var y = u.onClick,
                        O = u.omitChevron,
                        R = u.isSelected,
                        T = f(u, ["onClick", "omitChevron", "isSelected"]);
                    return n.default.createElement(n.default.Fragment, null, n.default.createElement(g.Cell, D({}, T, {
                        exteriorAccessory: O ? null : n.default.createElement(S.ChevronSmallRight, {
                            color: "gray.300"
                        }),
                        sx: R && {
                            backgroundColor: "gray.900",
                            mx: -3,
                            px: 3
                        }
                    })), n.default.createElement(g.Divider, null))
                },
                b = l
        },
        776044: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return C
                }
            }), t(246857);
            var n = R(t(374335)),
                g = R(t(174161)),
                S = t(359530),
                D = R(t(670058)),
                h = t(892342),
                f = t(153146),
                c = R(t(233590)),
                l = R(t(516748)),
                b = R(t(73004)),
                u = R(t(448718)),
                y = R(t(914699));

            function O(N, _, M) {
                return _ in N ? Object.defineProperty(N, _, {
                    value: M,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : N[_] = M, N
            }

            function R(N) {
                return N && N.__esModule ? N : {
                    default: N
                }
            }
            var T = function(N) {
                    var _ = N.domain,
                        M = N.isSelected,
                        j = N.primaryDomain,
                        m = _.type,
                        r = _.name,
                        s, a = (s = {}, O(s, u.default.LINKED, "".concat(c.default.forDomainsFullWidth(), "linked/").concat(r)), O(s, u.default.SQUARESPACE, "".concat(c.default.forDomainsFullWidth(), "managed/").concat(r)), O(s, u.default.RESOLD, "".concat(c.default.forDomainsFullWidth(), "resold/").concat(r)), O(s, u.default.APPLICATION, "".concat(c.default.forDomainsFullWidth(), "built-in/").concat(r)), s),
                        p, I = (p = a[m]) !== null && p !== void 0 ? p : c.default.forDomainsFullWidth(),
                        i = m === u.default.LINKED || m === u.default.RESOLD,
                        d = (0, l.default)(_, j),
                        E = d.color,
                        e = d.description,
                        o = d.isPrimaryDomain;
                    return g.default.createElement(D.default, {
                        to: I,
                        key: _.name
                    }, g.default.createElement(b.default, {
                        label: _.name,
                        interiorAccessory: o && g.default.createElement(f.Chip, {
                            usage: "badge",
                            label: (0, S.t)("Primary"),
                            sx: M && {
                                backgroundColor: "base",
                                borderColor: "base"
                            }
                        }),
                        description: g.default.createElement(h.Text.Caption, {
                            color: E
                        }, e),
                        omitChevron: i,
                        isSelected: M
                    }))
                },
                C = (0, n.default)({
                    getStores: function() {
                        return [y.default]
                    },
                    getPropsFromStores: function() {
                        var _ = y.default.getState().primaryDomain;
                        return {
                            primaryDomain: _
                        }
                    }
                }, T)
        },
        160092: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            }), t(246857);
            var n = c(t(174161)),
                g = t(892342),
                S = c(t(670058)),
                D = c(t(233590)),
                h = c(t(675558)),
                f = c(t(73004));

            function c(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            var l = function(u) {
                    var y = (0, h.default)(u),
                        O = y.color,
                        R = y.description,
                        T = "".concat(D.default.forDomainsFullWidth(), "registering/").concat(u.id);
                    return n.default.createElement(S.default, {
                        to: T,
                        key: u.id
                    }, n.default.createElement(f.default, {
                        label: u.domainName,
                        description: n.default.createElement(g.Text.Caption, {
                            color: O
                        }, R)
                    }))
                },
                b = l
        },
        733436: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            });

            function n(h, f) {
                for (var c in f) Object.defineProperty(h, c, {
                    enumerable: !0,
                    get: f[c]
                })
            }
            n(v, {
                DomainPusher: function() {
                    return g.default
                },
                RegistrationPusher: function() {
                    return S.default
                }
            });
            var g = D(t(776044)),
                S = D(t(160092));

            function D(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }
        },
        516748: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var n = t(363437),
                g = C(t(119828)),
                S = C(t(498583)),
                D = C(t(1571)),
                h = C(t(448718)),
                f = C(t(818871)),
                c = C(t(800397)),
                l = t(359530),
                b = C(t(206746)),
                u = C(t(481106)),
                y = C(t(665139)),
                O = t(195381),
                R = t(148991),
                T = t(380997);

            function C(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function N(a, p) {
                return {
                    isPrimaryDomain: (0, R.hasSameHostname)(a, p),
                    color: n.colors.gray[300],
                    description: (0, l.t)("Never Expires")
                }
            }

            function _(a, p) {
                var I = a.emailVerificationStatus,
                    i = a.managedDomainExpiration,
                    d = a.subscriptionState,
                    E = a.name,
                    e = a.tld,
                    o = a.isActivated,
                    P = e === f.default.DE && !o,
                    A = d === D.default.EXPIRED,
                    L = I === S.default.SUSPENDED,
                    F = I === S.default.PENDING;
                return !d || !I ? {
                    color: n.colors.gray[300],
                    description: (0, l.t)("Status Unavailable")
                } : A ? {
                    color: n.colors.red[300],
                    description: i ? (0, l.t)("Expired as of {date}", {
                        date: (0, l.formatDateTime)(i, "LLL")
                    }) : (0, l.t)("Expired")
                } : P ? {
                    color: n.colors.gray[300],
                    description: (0, l.t)("Registration in progress")
                } : L ? {
                    color: n.colors.red[300],
                    description: (0, l.t)("Suspended")
                } : F ? {
                    color: n.colors.red[300],
                    description: (0, l.t)("Email verification required")
                } : {
                    color: n.colors.green[300],
                    isPrimaryDomain: (0, R.hasSameHostname)(E, p),
                    description: (0, l.t)("Active")
                }
            }

            function M(a, p) {
                var I = a.autoRenew,
                    i = a.basePrice,
                    d = a.emailVerificationStatus,
                    E = a.managedDomainExpiration,
                    e = a.renewsOn,
                    o = a.subscriptionState,
                    P = a.name,
                    A = a.tld,
                    L = a.isActivated,
                    F = a.isInContention,
                    w = A === f.default.DE && !L,
                    G = o === D.default.EXPIRED,
                    U = o === D.default.PASTDUE,
                    k = d === S.default.SUSPENDED,
                    x = d === S.default.PENDING;
                if (!o || !d) return {
                    color: n.colors.gray[300],
                    description: (0, l.t)("Status Unavailable")
                };
                if (F) return {
                    color: n.colors.orange[300],
                    description: (0, l.t)("In Contention")
                };
                if (G) return {
                    color: n.colors.red[300],
                    description: E ? (0, l.t)("Expired as of {date}", {
                        date: (0, l.formatDateTime)(E, "LLL")
                    }) : (0, l.t)("Expired")
                };
                if (U) return {
                    color: n.colors.red[300],
                    description: (0, l.t)("Past Due")
                };
                if (w) return {
                    color: n.colors.orange[300],
                    description: (0, l.t)("Registration in progress")
                };
                if (k) return {
                    color: n.colors.red[300],
                    description: (0, l.t)("Suspended")
                };
                if (x) return {
                    color: n.colors.red[300],
                    description: (0, l.t)("Email verification required")
                };
                if (I) {
                    var W = c.default.fromJson(i),
                        V = (0, R.isDomainForeverFree)(a) ? new c.default(0, W.getCurrencyCode()) : W,
                        H = V.isZero() ? (0, l.t)("Free") : (0, l.formatMoney)(V),
                        K = (0, l.formatDateTime)(e);
                    return {
                        color: n.colors.gray[300],
                        isPrimaryDomain: (0, R.hasSameHostname)(P, p),
                        description: (0, l.t)("Renews on {date} for {price}", {
                            date: K,
                            price: H
                        })
                    }
                }
                return {
                    color: n.colors.gray[300],
                    isPrimaryDomain: (0, R.hasSameHostname)(P, p),
                    description: (0, l.t)("Expires on {date}", {
                        date: (0, l.formatDateTime)(E)
                    })
                }
            }

            function j(a, p) {
                if ((0, T.isDomainNsConnected)(a)) return m(a, p);
                switch (a.linkStatus) {
                    case O.LinkedDomainDnsStatus.IN_PROGRESS:
                        return {
                            color: n.colors.gray[300],
                            description: u.default[O.LinkedDomainDnsStatus.IN_PROGRESS]
                        };
                    case O.LinkedDomainDnsStatus.VERIFICATION_FAILURE:
                        return {
                            color: n.colors.red[300],
                            description: u.default[O.LinkedDomainDnsStatus.VERIFICATION_FAILURE]
                        };
                    case O.LinkedDomainDnsStatus.DNS_ERROR:
                        return {
                            color: n.colors.red[300],
                            description: u.default[O.LinkedDomainDnsStatus.DNS_ERROR]
                        };
                    case O.LinkedDomainDnsStatus.CONNECTED:
                        return {
                            isPrimaryDomain: (0, R.hasSameHostname)(a.name, p),
                            color: n.colors.green[300],
                            description: u.default[O.LinkedDomainDnsStatus.CONNECTED]
                        };
                    default:
                        return {
                            color: n.colors.gray[300],
                            description: (0, l.t)("Status Unavailable")
                        }
                }
            }

            function m(a, p) {
                switch (a.connectionStatus) {
                    case g.default.FAILED:
                        return {
                            color: n.colors.red[300],
                            description: y.default[g.default.FAILED]
                        };
                    case g.default.IN_PROGRESS:
                        return {
                            color: n.colors.gray[300],
                            description: y.default[g.default.IN_PROGRESS]
                        };
                    case g.default.CONNECTED:
                        return {
                            isPrimaryDomain: (0, R.hasSameHostname)(a.name, p),
                            color: n.colors.green[300],
                            description: y.default[g.default.CONNECTED]
                        };
                    default:
                        return {
                            color: n.colors.gray[300],
                            description: (0, l.t)("Status Unavailable")
                        }
                }
            }
            var r = function(a, p) {
                    switch (a.type) {
                        case h.default.APPLICATION:
                            return N(a.name, p);
                        case h.default.LINKED:
                            {
                                var I = b.default.getByName(a.name);
                                return j(I, p)
                            }
                        case h.default.SQUARESPACE:
                            return M(a, p);
                        case h.default.RESOLD:
                            return _(a, p);
                        default:
                            return {
                                color: n.colors.gray[300],
                                description: "",
                                isPrimaryDomain: !1
                            }
                    }
                },
                s = r
        },
        675558: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var n = t(359530),
                g = D(t(383914)),
                S = t(363437);

            function D(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }
            var h = {
                    color: S.colors.orange[300],
                    description: (0, n.t)("Registration In Progress")
                },
                f = function(l) {
                    var b = l.status,
                        u = b === void 0 ? g.default.PENDING : b;
                    switch (u) {
                        case g.default.PENDING:
                            return h;
                        case g.default.FAILED:
                            return {
                                color: S.colors.red[300],
                                description: (0, n.t)("View Details")
                            };
                        case g.default.PROCESSING_PAYMENT:
                            return {
                                color: S.colors.orange[300],
                                description: (0, n.t)("Payment Is Processing")
                            };
                        case g.default.PENDING_AUTHENTICATION:
                            return {
                                color: S.colors.red[300],
                                description: (0, n.t)("Payment Verification Required")
                            };
                        default:
                            return h
                    }
                },
                c = f
        },
        481106: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var n = t(359530),
                g = t(195381);

            function S(c, l, b) {
                return l in c ? Object.defineProperty(c, l, {
                    value: b,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : c[l] = b, c
            }
            var D, h = (D = {}, S(D, g.LinkedDomainDnsStatus.CONNECTED, (0, n.t)("Connected")), S(D, g.LinkedDomainDnsStatus.IN_PROGRESS, (0, n.t)("Connection in Progress")), S(D, g.LinkedDomainDnsStatus.VERIFICATION_FAILURE, (0, n.t)("Connection Failed")), S(D, g.LinkedDomainDnsStatus.DNS_ERROR, (0, n.t)("DNS Error")), D),
                f = h
        },
        665139: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var n = t(359530),
                g = D(t(119828));

            function S(l, b, u) {
                return b in l ? Object.defineProperty(l, b, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[b] = u, l
            }

            function D(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }
            var h, f = (h = {}, S(h, g.default.CONNECTED, (0, n.t)("Connected")), S(h, g.default.IN_PROGRESS, (0, n.t)("Connection in Progress")), S(h, g.default.FAILED, (0, n.t)("Connection Failed")), h),
                c = f
        },
        973928: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            var n = R(t(354417)),
                g = R(t(943035)),
                S = R(t(321414)),
                D = R(t(365393)),
                h = R(t(936506));

            function f(e, o) {
                (o == null || o > e.length) && (o = e.length);
                for (var P = 0, A = new Array(o); P < o; P++) A[P] = e[P];
                return A
            }

            function c(e) {
                if (Array.isArray(e)) return f(e)
            }

            function l(e) {
                if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, o, P) {
                return o in e ? Object.defineProperty(e, o, {
                    value: P,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = P, e
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(P) {
                    return P.__proto__ || Object.getPrototypeOf(P)
                }, y(e)
            }

            function O(e, o) {
                if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), o && m(e, o)
            }

            function R(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e) {
                if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
            }

            function C() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function N(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var P = arguments[o] != null ? arguments[o] : {},
                        A = Object.keys(P);
                    typeof Object.getOwnPropertySymbols == "function" && (A = A.concat(Object.getOwnPropertySymbols(P).filter(function(L) {
                        return Object.getOwnPropertyDescriptor(P, L).enumerable
                    }))), A.forEach(function(L) {
                        u(e, L, P[L])
                    })
                }
                return e
            }

            function _(e, o) {
                var P = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(e);
                    o && (A = A.filter(function(L) {
                        return Object.getOwnPropertyDescriptor(e, L).enumerable
                    })), P.push.apply(P, A)
                }
                return P
            }

            function M(e, o) {
                return o = o != null ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : _(Object(o)).forEach(function(P) {
                    Object.defineProperty(e, P, Object.getOwnPropertyDescriptor(o, P))
                }), e
            }

            function j(e, o) {
                return o && (s(o) === "object" || typeof o == "function") ? o : l(e)
            }

            function m(e, o) {
                return m = Object.setPrototypeOf || function(A, L) {
                    return A.__proto__ = L, A
                }, m(e, o)
            }

            function r(e) {
                return c(e) || T(e) || a(e) || C()
            }
            var s = function(e) {
                "@swc/helpers - typeof";
                return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
            };

            function a(e, o) {
                if (e) {
                    if (typeof e == "string") return f(e, o);
                    var P = Object.prototype.toString.call(e).slice(8, -1);
                    if (P === "Object" && e.constructor && (P = e.constructor.name), P === "Map" || P === "Set") return Array.from(P);
                    if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return f(e, o)
                }
            }

            function p() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }

            function I(e) {
                var o = p();
                return function() {
                    var A = y(e),
                        L;
                    if (o) {
                        var F = y(this).constructor;
                        L = Reflect.construct(A, arguments, F)
                    } else L = A.apply(this, arguments);
                    return j(this, L)
                }
            }
            var i = {
                    registrations: [],
                    registrationsById: {},
                    registrationsByStatus: {},
                    isLoadingRegistrations: !1,
                    isLoadingRegistrationById: !1,
                    isLoadingDismissFailedRegistration: !1,
                    loadRegistrationsError: null,
                    loadRegistrationByIdError: null,
                    loadDismissFailedRegistrationError: null
                },
                d = function(e) {
                    "use strict";
                    O(P, e);
                    var o = I(P);

                    function P() {
                        b(this, P);
                        var L;
                        return L = o.call(this), L.state = i, L.bindActions(h.default), L
                    }
                    var A = P.prototype;
                    return A.onLoadRegistrations = function() {
                        this.setState({
                            isLoadingRegistrations: !0,
                            loadRegistrationsError: null
                        })
                    }, A.onLoadRegistrationsSuccess = function(F) {
                        var w = F.data;
                        this.setState({
                            isLoadingRegistrations: !1,
                            registrations: w.results,
                            registrationsByStatus: (0, D.default)(w.results, "status"),
                            registrationsById: (0, S.default)(w.results, "id")
                        })
                    }, A.onLoadRegistrationsFailure = function(F) {
                        this.setState({
                            isLoadingRegistrations: !1,
                            loadRegistrationsError: F
                        })
                    }, A.onLoadRegistrationById = function() {
                        this.setState({
                            isLoadingRegistrationById: !0,
                            loadRegistrationByIdError: null
                        })
                    }, A.onLoadRegistrationByIdSuccess = function(F) {
                        var w = F.data;
                        this.setState(function(G) {
                            var U = G.registrations.findIndex(function(x) {
                                    return x.id === w.id
                                }),
                                k = r(G.registrations.slice(0, U)).concat([w], r(G.registrations.slice(U + 1)));
                            return {
                                isLoadingRegistrationById: !1,
                                registrationsById: M(N({}, G.registrationsById), u({}, w.id, w)),
                                registrationsByStatus: (0, D.default)(k, "status"),
                                registrations: k
                            }
                        })
                    }, A.onLoadRegistrationByIdFailure = function(F) {
                        this.setState({
                            isLoadingRegistrationById: !1,
                            loadRegistrationByIdError: F
                        })
                    }, A.onDismissFailedRegistration = function() {
                        this.setState({
                            isLoadingDismissFailedRegistration: !0
                        })
                    }, A.onDismissFailedRegistrationSuccess = function() {
                        this.setState({
                            isLoadingDismissFailedRegistration: !1
                        })
                    }, A.onDismissFailedRegistrationFailure = function(F) {
                        this.setState({
                            isLoadingDismissFailedRegistration: !1,
                            loadDismissFailedRegistrationError: F
                        })
                    }, A.onResetDismissError = function() {
                        this.setState({
                            loadDismissFailedRegistrationError: null
                        })
                    }, P
                }(n.default),
                E = g.default.createStore(d, "RegisteringDomainsStore")
        },
        544768: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var n = g(t(808847));

            function g(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var S = "/api/registering-domains",
                D = {
                    loadRegistrations: function() {
                        var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return n.default.get(S, {
                            params: c
                        })
                    },
                    loadRegistrationById: function(c) {
                        return n.default.get("".concat(S, "/single/").concat(c))
                    },
                    dismissFailedRegistrationByName: function(c) {
                        return n.default.put("".concat(S, "/").concat(c, "/dismiss"))
                    }
                },
                h = D
        },
        380997: function(B, v, t) {
            Object.defineProperty(v, "__esModule", {
                value: !0
            }), Object.defineProperty(v, "isDomainNsConnected", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var n = D(t(17523)),
                g = D(t(448718)),
                S = t(41538);

            function D(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var h = function(f) {
                return f.type === g.default.LINKED && f.dnsProvider === n.default.NS1 && Object.values(S.TransferInRegistrarToDomainProviderMap).includes(f.providerId)
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/9ed329265596b8e4deee5d099b29ff7a/35399-5df6d589f17dbfdea71d-min.en-US.js.map