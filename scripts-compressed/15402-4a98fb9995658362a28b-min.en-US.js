"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [15402], {
        927004: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });
            var C = v(s(943035)),
                c = v(s(877739)),
                S = v(s(477586));

            function _(d, a) {
                if (!(d instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function v(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }
            var y = function() {
                    "use strict";

                    function d() {
                        _(this, d), this.generateActions("loadFromCheckoutSettingsSuccess", "loadFromSavedDataSuccess", "changeSelectedListId", "resetSelectedListId", "showValidationError", "connectSuccess", "connectFailure", "saveSuccess", "disconnect", "reset")
                    }
                    var a = d.prototype;
                    return a.loadFromSavedData = function() {
                        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                            p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                            D = this;
                        return function(L) {
                            return p ? c.default.getLists().then(D.loadFromSavedDataSuccess).catch(D.connectFailure) : f.connectionState !== S.default.CONNECTED ? D.reset() : (L({
                                savedData: f,
                                listId: f.listId
                            }), c.default.getLists().then(D.loadFromSavedDataSuccess).catch(D.connectFailure))
                        }
                    }, a.connect = function() {
                        var f = this;
                        return function(p) {
                            return p(), c.default.getLists().then(f.connectSuccess).catch(f.connectFailure)
                        }
                    }, d
                }(),
                I = C.default.createActions(y)
        },
        904899: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var C = a(s(943035)),
                c = a(s(477586)),
                S = a(s(990705)),
                _ = a(s(927004));

            function v(e, t) {
                (t == null || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function y(e) {
                if (Array.isArray(e)) return e
            }

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e, t) {
                var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (n != null) {
                    var i = [],
                        o = !0,
                        h = !1,
                        b, O;
                    try {
                        for (n = n.call(e); !(o = (b = n.next()).done) && (i.push(b.value), !(t && i.length === t)); o = !0);
                    } catch (E) {
                        h = !0, O = E
                    } finally {
                        try {
                            !o && n.return != null && n.return()
                        } finally {
                            if (h) throw O
                        }
                    }
                    return i
                }
            }

            function f() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t] != null ? arguments[t] : {},
                        i = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
                        return Object.getOwnPropertyDescriptor(n, o).enumerable
                    }))), i.forEach(function(o) {
                        d(e, o, n[o])
                    })
                }
                return e
            }

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function L(e, t) {
                return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }

            function A(e, t) {
                return y(e) || m(e, t) || w(e, t) || f()
            }

            function w(e, t) {
                if (e) {
                    if (typeof e == "string") return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }
            }
            var r = {
                    initialData: {
                        connectionState: c.default.DISCONNECTED,
                        listId: null,
                        lists: []
                    },
                    isConnecting: !1,
                    isConnected: !1,
                    isDirty: !1,
                    lists: [],
                    selectedListId: null,
                    wasRemoved: !1,
                    hasConnectionError: !1
                },
                u = function() {
                    "use strict";

                    function e() {
                        var n = this;
                        I(this, e), this.isReady = function() {
                            return n.state.hasConnectionError || n.state.isConnected
                        }, this.isConnected = function() {
                            return n.state.isConnected && n.state.selectedListId
                        }, this.getConnectionData = function() {
                            return n.isConnected() ? {
                                backendType: S.default.CAMPAIGNS,
                                connectionState: c.default.CONNECTED,
                                listId: n.state.selectedListId,
                                lists: n.state.lists
                            } : {
                                backendType: S.default.CAMPAIGNS,
                                connectionState: c.default.DISCONNECTED,
                                listId: null,
                                lists: []
                            }
                        }, this.state = p({}, r), this.bindActions(_.default), this.exportPublicMethods({
                            getConnectionData: this.getConnectionData,
                            isConnected: this.isConnected,
                            isReady: this.isReady
                        })
                    }
                    var t = e.prototype;
                    return t.onLoadFromSavedData = function(i) {
                        var o = i.savedData,
                            h = i.listId;
                        this.setState({
                            initialData: L(p({}, o), {
                                lists: []
                            }),
                            selectedListId: h
                        })
                    }, t.onLoadFromSavedDataSuccess = function(i) {
                        var o = i.results,
                            h = this.state.initialData.listId !== null;
                        this.setState({
                            isConnected: !0,
                            isDirty: !h,
                            lists: o,
                            initialData: L(p({}, this.state.initialData), {
                                lists: o
                            })
                        })
                    }, t.onLoadFromCheckoutSettingsSuccess = function(i) {
                        var o = i.storeMailingListSettings,
                            h = o.isCampaignsConnected,
                            b = o.campaignsListId,
                            O = o.campaignsMailingLists;
                        this.setState({
                            isConnected: h,
                            isDirty: !1,
                            selectedListId: b,
                            lists: O,
                            initialData: {
                                connectionState: h ? c.default.CONNECTED : c.default.DISCONNECTED,
                                listId: b,
                                lists: O
                            }
                        })
                    }, t.onChangeSelectedListId = function(i) {
                        i && this.setState({
                            isDirty: !0,
                            selectedListId: i
                        })
                    }, t.onResetSelectedListId = function() {
                        this.setState({
                            isDirty: !0,
                            selectedListId: null
                        })
                    }, t.onConnect = function() {
                        this.setState({
                            isConnecting: !0,
                            hasConnectionError: !1
                        })
                    }, t.onConnectSuccess = function(i) {
                        var o = i.results,
                            h = {
                                isConnecting: !1,
                                isConnected: !0,
                                lists: o,
                                wasRemoved: !1
                            };
                        if (!this.state.selectedListId) {
                            var b = A(o, 1),
                                O = b[0].id;
                            h.selectedListId = O, h.isDirty = !0
                        }
                        this.setState(h)
                    }, t.onConnectFailure = function() {
                        this.setState({
                            isConnecting: !1,
                            hasConnectionError: !0
                        })
                    }, t.onDisconnect = function() {
                        this.setState(L(p({}, r), {
                            initialData: this.state.initialData,
                            isDirty: !0,
                            wasRemoved: !0
                        }))
                    }, t.onSaveSuccess = function() {
                        this.setState({
                            isDirty: !1,
                            initialData: this.getConnectionData()
                        })
                    }, t.onReset = function() {
                        var i = this.state.initialData;
                        this.setState(L(p({}, r), {
                            isConnected: i.connectionState === c.default.CONNECTED,
                            selectedListId: i.listId,
                            lists: i.lists,
                            initialData: i
                        }))
                    }, e
                }(),
                g = C.default.createStore(u, "CampaignsConfigStore")
        },
        877739: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var C = _(s(808847)),
                c = _(s(700769)),
                S = s(898229);

            function _(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            var v = "/api/composer",
                y = "".concat(v, "/mailing-lists"),
                I = {
                    getLists: function() {
                        var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
                        return S.legacyV6Flags.isFeatureEnabled(c.default.CAMPAIGNS_API_MOCK) ? Promise.resolve({
                            results: [{
                                id: "ffffffffffffffffffffffff",
                                name: "Mocked Campaigns API Response",
                                count: 1
                            }],
                            hasNextPage: !1
                        }) : C.default.get(m).then(function(f) {
                            var p = f.data;
                            return p
                        })
                    }
                },
                d = I
        },
        907674: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var C = c(s(808847));

            function c(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            var S = "/api/external/GetMailChimpAccountDetail",
                _ = "/api/external/GetMailChimpLists",
                v = function(a, m) {
                    var f = a.title.toLowerCase(),
                        p = m.title.toLowerCase();
                    return f < p ? -1 : f > p ? 1 : 0
                },
                y = function(a) {
                    var m = a.data;
                    return Object.keys(m).filter(function(f) {
                        return f !== ""
                    }).map(function(f) {
                        return {
                            value: f,
                            title: m[f].title
                        }
                    }).sort(v)
                },
                I = {
                    getAccountDetail: function(m) {
                        return C.default.get(S, {
                            params: {
                                connectedAccountId: m
                            }
                        })
                    },
                    getLists: function(m) {
                        return C.default.get(_, {
                            params: {
                                connectedAccountId: m
                            }
                        }).then(y)
                    }
                },
                d = I
        },
        210581: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            var C = s(941834),
                c = d(s(67234)),
                S = d(s(45250));

            function _(r) {
                if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return r
            }

            function v(r, u) {
                if (!(r instanceof u)) throw new TypeError("Cannot call a class as a function")
            }

            function y(r) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(g) {
                    return g.__proto__ || Object.getPrototypeOf(g)
                }, y(r)
            }

            function I(r, u) {
                if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
                r.prototype = Object.create(u && u.prototype, {
                    constructor: {
                        value: r,
                        writable: !0,
                        configurable: !0
                    }
                }), u && m(r, u)
            }

            function d(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function a(r, u) {
                return u && (f(u) === "object" || typeof u == "function") ? u : _(r)
            }

            function m(r, u) {
                return m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, m(r, u)
            }
            var f = function(r) {
                "@swc/helpers - typeof";
                return r && typeof Symbol != "undefined" && r.constructor === Symbol ? "symbol" : typeof r
            };

            function p() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (r) {
                    return !1
                }
            }

            function D(r) {
                var u = p();
                return function() {
                    var e = y(r),
                        t;
                    if (u) {
                        var n = y(this).constructor;
                        t = Reflect.construct(e, arguments, n)
                    } else t = e.apply(this, arguments);
                    return a(this, t)
                }
            }
            var L = {
                    mailChimpUsername: "",
                    mailChimpUseSingleOptIn: !0,
                    isMailChimpConnected: !1,
                    mailChimpListId: "",
                    mailChimpConnectionInfo: new c.default,
                    mailChimpOAuthConfig: null
                },
                A = function(r) {
                    "use strict";
                    I(g, r);
                    var u = D(g);

                    function g() {
                        return v(this, g), u.apply(this, arguments)
                    }
                    return g.buildFromJson = function(t) {
                        var n = t.mailChimpUsername,
                            i = t.mailChimpUseSingleOptIn,
                            o = t.isMailChimpConnected,
                            h = t.mailChimpListId,
                            b = t.mailChimpConnectionInfo,
                            O = t.mailChimpOAuthConfig;
                        return new g({
                            mailChimpUsername: n || "",
                            mailChimpUseSingleOptIn: !!i,
                            isMailChimpConnected: !!o,
                            mailChimpListId: h || "",
                            mailChimpConnectionInfo: new c.default(b),
                            mailChimpOAuthConfig: O ? new S.default(O) : null
                        })
                    }, g
                }((0, C.Record)(L)),
                w = A
        },
        67234: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var C = s(941834),
                c = (0, C.Record)({
                    mailChimpLists: [],
                    mailChimpError: !1
                })
        },
        45250: function(P, l, s) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), Object.defineProperty(l, "default", {
                enumerable: !0,
                get: function() {
                    return c
                }
            });
            var C = s(941834),
                c = (0, C.Record)({
                    externalAuthenticationId: null,
                    oauthError: !1
                })
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/6e2d2c6b5a434fc4458a19d8b6a630b3/15402-4a98fb9995658362a28b-min.en-US.js.map