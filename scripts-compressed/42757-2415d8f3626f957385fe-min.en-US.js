"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [42757], {
        642757: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            }), Object.defineProperty(F, "default", {
                enumerable: !0,
                get: function() {
                    return k
                }
            });
            var _ = j(v(943035)),
                m = j(v(354030));

            function R(a) {
                if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a
            }

            function A(a, g) {
                if (!(a instanceof g)) throw new TypeError("Cannot call a class as a function")
            }

            function M(a) {
                return M = Object.setPrototypeOf ? Object.getPrototypeOf : function(c) {
                    return c.__proto__ || Object.getPrototypeOf(c)
                }, M(a)
            }

            function N(a, g) {
                if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function");
                a.prototype = Object.create(g && g.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), g && o(a, g)
            }

            function j(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function I(a, g) {
                return g && (y(g) === "object" || typeof g == "function") ? g : R(a)
            }

            function o(a, g) {
                return o = Object.setPrototypeOf || function(h, p) {
                    return h.__proto__ = p, h
                }, o(a, g)
            }
            var y = function(a) {
                "@swc/helpers - typeof";
                return a && typeof Symbol != "undefined" && a.constructor === Symbol ? "symbol" : typeof a
            };

            function w() {
                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == "function") return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (a) {
                    return !1
                }
            }

            function C(a) {
                var g = w();
                return function() {
                    var h = M(a),
                        p;
                    if (g) {
                        var e = M(this).constructor;
                        p = Reflect.construct(h, arguments, e)
                    } else p = h.apply(this, arguments);
                    return I(this, p)
                }
            }
            var E = function(a) {
                    "use strict";
                    N(c, a);
                    var g = C(c);

                    function c() {
                        A(this, c);
                        var h;
                        return h = g.call(this), h.generateActions("setMainContentItemLayoutKey", "reset", "updateFrameFromContentBrowserSave"), h
                    }
                    return c
                }(m.default),
                k = _.default.createActions(E)
        },
        354030: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            }), Object.defineProperty(F, "default", {
                enumerable: !0,
                get: function() {
                    return y
                }
            });
            var _ = I(v(874471)),
                m = I(v(456896)),
                R = v(987766),
                A = I(v(305541));

            function M(w, C, E, k, a, g, c) {
                try {
                    var h = w[g](c),
                        p = h.value
                } catch (e) {
                    E(e);
                    return
                }
                h.done ? C(p) : Promise.resolve(p).then(k, a)
            }

            function N(w) {
                return function() {
                    var C = this,
                        E = arguments;
                    return new Promise(function(k, a) {
                        var g = w.apply(C, E);

                        function c(p) {
                            M(g, k, a, c, h, "next", p)
                        }

                        function h(p) {
                            M(g, k, a, c, h, "throw", p)
                        }
                        c(void 0)
                    })
                }
            }

            function j(w, C) {
                if (!(w instanceof C)) throw new TypeError("Cannot call a class as a function")
            }

            function I(w) {
                return w && w.__esModule ? w : {
                    default: w
                }
            }
            var o = function(w, C) {
                    var E, k, a, g, c = {
                        label: 0,
                        sent: function() {
                            if (a[0] & 1) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: h(0),
                        throw: h(1),
                        return: h(2)
                    }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function h(e) {
                        return function(t) {
                            return p([e, t])
                        }
                    }

                    function p(e) {
                        if (E) throw new TypeError("Generator is already executing.");
                        for (; c;) try {
                            if (E = 1, k && (a = e[0] & 2 ? k.return : e[0] ? k.throw || ((a = k.return) && a.call(k), 0) : k.next) && !(a = a.call(k, e[1])).done) return a;
                            switch (k = 0, a && (e = [e[0] & 2, a.value]), e[0]) {
                                case 0:
                                case 1:
                                    a = e;
                                    break;
                                case 4:
                                    return c.label++, {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++, k = e[1], e = [0];
                                    continue;
                                case 7:
                                    e = c.ops.pop(), c.trys.pop();
                                    continue;
                                default:
                                    if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (e[0] === 6 || e[0] === 2)) {
                                        c = 0;
                                        continue
                                    }
                                    if (e[0] === 3 && (!a || e[1] > a[0] && e[1] < a[3])) {
                                        c.label = e[1];
                                        break
                                    }
                                    if (e[0] === 6 && c.label < a[1]) {
                                        c.label = a[1], a = e;
                                        break
                                    }
                                    if (a && c.label < a[2]) {
                                        c.label = a[2], c.ops.push(e);
                                        break
                                    }
                                    a[2] && c.ops.pop(), c.trys.pop();
                                    continue
                            }
                            e = C.call(w, c)
                        } catch (t) {
                            e = [6, t], k = 0
                        } finally {
                            E = a = 0
                        }
                        if (e[0] & 5) throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }
                },
                y = function() {
                    "use strict";

                    function w() {
                        j(this, w), this.generateActions("setTweakDefinitionsForSection", "setTweakValues", "loadCatalogSuccess", "loadCatalogHTMLSuccess", "setControllerInitialized", "setCollectionAndItemId", "setCollectionId", "setActiveTab", "setIsColorPanelOpen", "setIsThemeEditorOpen", "setIsSectionThemesPanelOpen")
                    }
                    var C = w.prototype;
                    return C.setIsSettingsOpen = function(k) {
                        var a = k.openSettingsId,
                            g = k.isSettingsOpen,
                            c = k.openSectionToolbarRect,
                            h = k.isMainContent,
                            p = k.tweakDefinitions,
                            e = k.typeName,
                            t = k.itemLayoutKey,
                            s = k.jsonSchemaSectionSubUiSchema;
                        return function() {
                            var f = N(function(u) {
                                var T, d, O, H, x;
                                return o(this, function(U) {
                                    return T = _.default.getState(), p = p != null ? p : T.tweakDefinitions, d = (0, R.getSectionElById)(a), O = g ? (0, m.default)({
                                        isMainContent: h,
                                        sectionNode: d,
                                        tweakDefinitions: p,
                                        typeName: e,
                                        itemLayoutKey: t
                                    }) : {}, H = g ? {
                                        type: "themecards",
                                        $mapping: "#/styles/sectionTheme"
                                    } : {
                                        type: "hidden"
                                    }, x = A.default.SPACING, u({
                                        activeTab: x,
                                        isSettingsOpen: g,
                                        openSectionToolbarRect: c,
                                        openSettingsId: a,
                                        themeUISchema: H,
                                        tweakDefinitionsForSection: O,
                                        itemLayoutKey: t,
                                        jsonSchemaSectionSubUiSchema: s
                                    }), [2]
                                })
                            });
                            return function(u) {
                                return f.apply(this, arguments)
                            }
                        }()
                    }, C.setIsGalleryContentEditorOpen = function(k) {
                        var a = k.isGalleryContentEditorOpen,
                            g = k.sectionId;
                        return {
                            isGalleryContentEditorOpen: a,
                            sectionId: g
                        }
                    }, w
                }()
        },
        400579: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            }), Object.defineProperty(F, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var _ = v(769078),
                m = v(159773),
                R = C(v(943035)),
                A = v(579888),
                M = v(946093),
                N = v(771842),
                j = C(v(948125)),
                I = C(v(379805));

            function o(c, h, p, e, t, s, f) {
                try {
                    var u = c[s](f),
                        T = u.value
                } catch (d) {
                    p(d);
                    return
                }
                u.done ? h(T) : Promise.resolve(T).then(e, t)
            }

            function y(c) {
                return function() {
                    var h = this,
                        p = arguments;
                    return new Promise(function(e, t) {
                        var s = c.apply(h, p);

                        function f(T) {
                            o(s, e, t, f, u, "next", T)
                        }

                        function u(T) {
                            o(s, e, t, f, u, "throw", T)
                        }
                        f(void 0)
                    })
                }
            }

            function w(c, h) {
                if (!(c instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function C(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var E = function(c, h) {
                    var p, e, t, s, f = {
                        label: 0,
                        sent: function() {
                            if (t[0] & 1) throw t[1];
                            return t[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function u(d) {
                        return function(O) {
                            return T([d, O])
                        }
                    }

                    function T(d) {
                        if (p) throw new TypeError("Generator is already executing.");
                        for (; f;) try {
                            if (p = 1, e && (t = d[0] & 2 ? e.return : d[0] ? e.throw || ((t = e.return) && t.call(e), 0) : e.next) && !(t = t.call(e, d[1])).done) return t;
                            switch (e = 0, t && (d = [d[0] & 2, t.value]), d[0]) {
                                case 0:
                                case 1:
                                    t = d;
                                    break;
                                case 4:
                                    return f.label++, {
                                        value: d[1],
                                        done: !1
                                    };
                                case 5:
                                    f.label++, e = d[1], d = [0];
                                    continue;
                                case 7:
                                    d = f.ops.pop(), f.trys.pop();
                                    continue;
                                default:
                                    if (t = f.trys, !(t = t.length > 0 && t[t.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                                        f = 0;
                                        continue
                                    }
                                    if (d[0] === 3 && (!t || d[1] > t[0] && d[1] < t[3])) {
                                        f.label = d[1];
                                        break
                                    }
                                    if (d[0] === 6 && f.label < t[1]) {
                                        f.label = t[1], t = d;
                                        break
                                    }
                                    if (t && f.label < t[2]) {
                                        f.label = t[2], f.ops.push(d);
                                        break
                                    }
                                    t[2] && f.ops.pop(), f.trys.pop();
                                    continue
                            }
                            d = h.call(c, f)
                        } catch (O) {
                            d = [6, O], e = 0
                        } finally {
                            p = t = 0
                        }
                        if (d[0] & 5) throw d[1];
                        return {
                            value: d[0] ? d[1] : void 0,
                            done: !0
                        }
                    }
                },
                k = (0, N.createLogger)("TweakActions", "red"),
                a = function() {
                    "use strict";

                    function c() {
                        w(this, c), this.generateActions("fetchDataSuccess", "fetchDataFailure", "saving", "saveSuccess", "saveFailure", "resetSuccess", "resetFailure", "discard", "discardSiteFonts", "fetchCleanCssSuccess", "hydrate", "updateField", "updateMultipleFontFields", "updateMultipleFields", "revertFields", "setFilterProperty", "typekitFontsLoaded", "addFont", "selectFont", "setActiveFonts", "loadTypekitKitSuccess", "enableUndo", "disableUndo", "setUndoStack", "resetUndoStack", "applyUndoStackTweaks", "requestAddToHistoryStack"), this.tweakApi = null, this.fetchingApi = null
                    }
                    var h = c.prototype;
                    return h.fetchData = function(e) {
                        var t = e.pageType,
                            s = e.tweakApi,
                            f = e.typekitId,
                            u = this;
                        return function() {
                            var T = y(function(d) {
                                var O, H, x, U;
                                return E(this, function(L) {
                                    switch (L.label) {
                                        case 0:
                                            if (s !== u.tweakApi && (u.tweakApi = s), u.fetchingApi === u.tweakApi) return [2];
                                            d(u.tweakApi), k("fetchData - initiating new fetch"), (0, _.mark)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_DATA, {
                                                tracer: m.tracer
                                            }), u.fetchingApi = u.tweakApi, O = [u.fetchTemplateTweakSettings(), u.fetchCustomCss()], f || O.push(u.fetchTypekitData()), t === A.TweakPageTypes.STYLE && u.fetchTweakEngineProperties(), L.label = 1;
                                        case 1:
                                            return L.trys.push([1, 3, , 4]), [4, Promise.all(O)];
                                        case 2:
                                            return H = L.sent(), u.fetchingApi === u.tweakApi && (x = (0, _.measure)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_DATA, {
                                                requireStart: !0,
                                                tracer: m.tracer
                                            }), x && k("fetchData - completed in ".concat(x.duration, "ms")), u.fetchingApi = null, u.fetchDataSuccess.defer(H)), [3, 4];
                                        case 3:
                                            return U = L.sent(), u.fetchingApi === u.tweakApi && (u.fetchingApi = null, u.fetchDataFailure.defer(U)), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            });
                            return function(d) {
                                return T.apply(this, arguments)
                            }
                        }()
                    }, h.save = function() {
                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                            t = this;
                        return function() {
                            var s = y(function(f) {
                                var u, T, d, O, H, x;
                                return E(this, function(U) {
                                    switch (U.label) {
                                        case 0:
                                            f(), (0, I.default)("tweakactions_save", {
                                                source: e.source || "unknown",
                                                withAesthetics: "siteAestheticValues" in e
                                            }), t.saving(), u = e.tweakValues, T = e.fontsUsed, k(j.default ? "#save WITH FONTS" : "#save", e), U.label = 1;
                                        case 1:
                                            if (U.trys.push([1, 3, , 4]), !u) throw new Error("No tweakValues to save.");
                                            return d = [], O = t.tweakApi.save({
                                                tweakValues: u,
                                                fontsUsed: T
                                            }), d.push(O), [4, Promise.all(d)];
                                        case 2:
                                            return H = U.sent(), k("#save success"), t.saveSuccess(u), [2, H];
                                        case 3:
                                            throw x = U.sent(), k("#save failed"), t.saveFailure(), x;
                                        case 4:
                                            return [2]
                                    }
                                })
                            });
                            return function(f) {
                                return s.apply(this, arguments)
                            }
                        }()
                    }, h.resetTweakValues = function() {
                        return this.tweakApi.reset().then(this.resetSuccess).catch(this.resetFailure)
                    }, h.fetchCleanCss = function() {
                        return this.tweakApi.fetchCleanCss().then(this.fetchCleanCssSuccess).catch(function(e) {
                            console.error(e)
                        })
                    }, h.fetchTemplateTweakSettings = function() {
                        return (0, _.mark)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TEMPLATE_TWEAK_SETTINGS, {
                            tracer: m.tracer
                        }), this.tweakApi.fetchTemplateTweakSettings().then(this.fetchTemplateTweakSettingsSuccess).catch(function(e) {
                            console.error(e)
                        })
                    }, h.fetchTemplateTweakSettingsSuccess = function(e) {
                        return (0, _.measure)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TEMPLATE_TWEAK_SETTINGS, {
                            requireStart: !0,
                            tracer: m.tracer
                        }), e
                    }, h.fetchTypekitData = function() {
                        return (0, _.mark)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TYPEKIT_DATA, {
                            tracer: m.tracer
                        }), (0, M.getTypekitData)().then(this.fetchTypekitDataSuccess).catch(function(e) {
                            console.error(e)
                        })
                    }, h.fetchTypekitDataSuccess = function(e) {
                        return (0, _.measure)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TYPEKIT_DATA, {
                            requireStart: !0,
                            tracer: m.tracer
                        }), e
                    }, h.fetchCustomCss = function() {
                        return (0, _.mark)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_CUSTOM_CSS, {
                            tracer: m.tracer
                        }), this.tweakApi.fetchCustomCss().then(this.fetchCustomCssSuccess).catch(function(e) {
                            console.error(e)
                        })
                    }, h.fetchCustomCssSuccess = function() {
                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                        return (0, _.measure)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_CUSTOM_CSS, {
                            requireStart: !0,
                            tracer: m.tracer
                        }), e
                    }, h.fetchTweakEngineProperties = function() {
                        return (0, _.mark)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TWEAK_ENGINE_PROPERTIES, {
                            tracer: m.tracer
                        }), this.tweakApi.fetchTweakEngineProperties().then(this.fetchTweakEnginePropertiesSuccess).catch(function(e) {
                            console.error(e)
                        })
                    }, h.fetchTweakEnginePropertiesSuccess = function(e) {
                        return (0, _.measure)(A.CMSPerformanceEvents.TWEAKACTION_FETCH_TWEAK_ENGINE_PROPERTIES, {
                            requireStart: !0,
                            tracer: m.tracer
                        }), e
                    }, c
                }(),
                g = R.default.createActions(a)
        },
        305541: function(Y, F) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            }), Object.defineProperty(F, "default", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            var v;
            (function(m) {
                m.SPACING = "spacing", m.BACKGROUND = "background", m.COLOR = "color"
            })(v || (v = {}));
            var _ = v
        },
        825930: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            });

            function _(I, o) {
                for (var y in o) Object.defineProperty(I, y, {
                    enumerable: !0,
                    get: o[y]
                })
            }
            _(F, {
                default: function() {
                    return j
                },
                HookOperations: function() {
                    return N
                }
            });
            var m = v(419467),
                R = v(771842);

            function A(I, o) {
                if (!(I instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            var M = (0, R.createLogger)("UndoStack", "#448"),
                N = {
                    POP: "pop",
                    PUSH: "push",
                    UNDO: "undo",
                    REDO: "redo"
                },
                j = function I() {
                    "use strict";
                    var o = this;
                    A(this, I), this._operations = [], this._position = 0, this._hooks = new Set, this.getState = function() {
                        return {
                            operations: o._operations,
                            position: o._position
                        }
                    }, this.getStack = function() {
                        return o._operations
                    }, this.getPosition = function() {
                        return o._position
                    }, this.isAtBeginning = function() {
                        return o._position === 0
                    }, this.canUndo = function() {
                        return !o.isAtBeginning() && !(0, m.get)(o.peekState(), "options.isInitial", !1)
                    }, this.isAtEnd = function() {
                        return o._position === o._operations.length
                    }, this.canRedo = function() {
                        return !o.isAtEnd()
                    }, this.isValidPosition = function(y) {
                        return y === parseInt(y, 10) && y >= 0 && y <= o._operations.length
                    }, this._runHooks = function(y) {
                        var w = y.operation,
                            C = y.state;
                        return o._hooks.forEach(function(E) {
                            return E({
                                operation: w,
                                state: C
                            })
                        })
                    }, this.addHook = function(y) {
                        return o._hooks.add(y),
                            function() {
                                return o._hooks.delete(y)
                            }
                    }, this.reset = function() {
                        return o._position = 0, o._trim(), o
                    }, this._trim = function() {
                        return o._position < o._operations.length && (o._operations.length = o._position), o
                    }, this.pushState = function(y, w) {
                        return M("pushState", {
                            value: y,
                            options: w
                        }), o._trim(), o._operations.push({
                            value: y,
                            options: w
                        }), o._position++, o._runHooks({
                            operation: N.PUSH,
                            state: o.getState()
                        }), {
                            value: y,
                            options: w
                        }
                    }, this.peekState = function() {
                        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o._position;
                        return y === 0 ? {} : o.isValidPosition(y) ? o._operations[y - 1] : {}
                    }, this.popState = function() {
                        if (o.isAtBeginning()) return null;
                        o._trim();
                        var y = o._operations.pop();
                        return o._position = o._operations.length, o._runHooks({
                            operation: N.POP,
                            state: o.getState()
                        }), y
                    }, this.undo = function() {
                        return o.canUndo() ? (o._position--, o._runHooks({
                            operation: N.UNDO,
                            state: o.getState()
                        }), !0) : !1
                    }, this.redo = function() {
                        return o.isAtEnd() ? !1 : (o._position++, o._runHooks({
                            operation: N.REDO,
                            state: o.getState()
                        }), !0)
                    }
                }
        },
        874471: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            }), Object.defineProperty(F, "default", {
                enumerable: !0,
                get: function() {
                    return Q
                }
            });
            var _ = v(419467),
                m = v(771842),
                R = t(v(943035)),
                A = t(v(111477)),
                M = t(v(190307)),
                N = t(v(825930)),
                j = v(426307),
                I = v(635608),
                o = t(v(106727)),
                y = v(144734),
                w = v(640797),
                C = t(v(503017)),
                E = t(v(429368)),
                k = t(v(746371)),
                a = t(v(497984)),
                g = t(v(400579));

            function c(l, r) {
                (r == null || r > l.length) && (r = l.length);
                for (var i = 0, n = new Array(r); i < r; i++) n[i] = l[i];
                return n
            }

            function h(l) {
                if (Array.isArray(l)) return l
            }

            function p(l, r) {
                if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function e(l, r, i) {
                return r in l ? Object.defineProperty(l, r, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : l[r] = i, l
            }

            function t(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }

            function s(l, r) {
                var i = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
                if (i != null) {
                    var n = [],
                        S = !0,
                        b = !1,
                        D, P;
                    try {
                        for (i = i.call(l); !(S = (D = i.next()).done) && (n.push(D.value), !(r && n.length === r)); S = !0);
                    } catch (V) {
                        b = !0, P = V
                    } finally {
                        try {
                            !S && i.return != null && i.return()
                        } finally {
                            if (b) throw P
                        }
                    }
                    return n
                }
            }

            function f() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function u(l) {
                for (var r = 1; r < arguments.length; r++) {
                    var i = arguments[r] != null ? arguments[r] : {},
                        n = Object.keys(i);
                    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(S) {
                        return Object.getOwnPropertyDescriptor(i, S).enumerable
                    }))), n.forEach(function(S) {
                        e(l, S, i[S])
                    })
                }
                return l
            }

            function T(l, r) {
                var i = Object.keys(l);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(l);
                    r && (n = n.filter(function(S) {
                        return Object.getOwnPropertyDescriptor(l, S).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function d(l, r) {
                return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function(i) {
                    Object.defineProperty(l, i, Object.getOwnPropertyDescriptor(r, i))
                }), l
            }

            function O(l, r) {
                return h(l) || s(l, r) || H(l, r) || f()
            }

            function H(l, r) {
                if (l) {
                    if (typeof l == "string") return c(l, r);
                    var i = Object.prototype.toString.call(l).slice(8, -1);
                    if (i === "Object" && l.constructor && (i = l.constructor.name), i === "Map" || i === "Set") return Array.from(i);
                    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(l, r)
                }
            }
            var x = (0, m.createLogger)("TweakStore", "#ff00ff"),
                U = 100,
                L = function() {
                    "use strict";

                    function l() {
                        var i = this;
                        p(this, l), this.getIsDirtyByTweaks = function(n) {
                            var S = n.tweakValuesCurrent,
                                b = n.tweakValuesSaved,
                                D = (0, M.default)({
                                    prev: b,
                                    next: S
                                }),
                                P = Object.keys(D).filter(function(V) {
                                    return i.state.tweakDefinitions[V]
                                });
                            return P.length > 0
                        }, this.state = {
                            filterString: "",
                            groupType: j.GroupTypeTypes[0],
                            groupsExpandedState: "expanded",
                            showExperimental: !1,
                            showOnlyWhenPresent: !0,
                            isUndoEnabled: !1,
                            lastState: null,
                            undoPosition: null,
                            undoStack: null,
                            loading: !1,
                            loaded: !1,
                            saving: !1,
                            visibleDefinitions: [],
                            definitionVisibility: {},
                            selectedDefinitions: [],
                            numTweaksAvailable: 0,
                            numTweaksDisplayed: 0,
                            fieldGroups: {},
                            tweakValuesSaved: {},
                            tweakValuesCurrent: {},
                            tweakDefinitions: {},
                            mixinTweakDefinitions: {},
                            fonts: A.default,
                            activeFonts: {},
                            changedFontTweaks: [],
                            customCss: null,
                            rawData: {},
                            tweakApi: null
                        }, this.onRequestAddToHistoryStack = (0, _.debounce)(this.onRequestAddToHistoryStack.bind(this), U), this.bindActions(g.default), this.exportPublicMethods({
                            getIsDirtyByTweaks: this.getIsDirtyByTweaks
                        })
                    }
                    var r = l.prototype;
                    return r.setMultipleValues = function(n) {
                        var S = this.state,
                            b = S.tweakValuesSaved,
                            D = S.tweakApi,
                            P = this.state.activeFonts,
                            V = (0, E.default)(d(u({}, this.state), {
                                tweakValues: n,
                                noValidate: !0
                            })),
                            W = V.activeFonts,
                            z = V.changedFontTweaks,
                            B = V.tweakValues,
                            G = V.tweakDefinitions,
                            K = B;
                        if (D && D.getFrameWindow()) {
                            var X = Object.keys(W).filter(function($) {
                                return !P[$]
                            }).map(function($) {
                                return W[$]
                            });
                            (0, w.loadFonts)({
                                fonts: X,
                                tweakWindowNode: D.getFrameWindow()
                            })
                        }
                        var J = this.getIsDirtyByTweaks({
                            tweakValuesCurrent: K,
                            tweakValuesSaved: b
                        });
                        return {
                            activeFonts: W,
                            changedFontTweaks: z,
                            tweakDefinitions: G,
                            tweakValuesCurrent: K,
                            isDirty: J
                        }
                    }, r.changeMultipleValues = function(n) {
                        return this.setMultipleValues(u({}, this.state.tweakValuesCurrent, n))
                    }, r.getUpdatedDefinitions = function(n) {
                        var S = this.state,
                            b = S.fonts,
                            D = S.tweakDefinitions;
                        return Object.values(D).reduce(function(P, V) {
                            return P[V.variableName] = (0, k.default)(V, {
                                fonts: b,
                                tweakValues: n
                            }), P
                        }, {})
                    }, r.onFetchData = function(n) {
                        this.setState({
                            loading: !0,
                            loaded: !1,
                            saving: !1,
                            tweakApi: n
                        })
                    }, r.onFetchDataSuccess = function() {
                        if (this.setState({
                                loading: !1,
                                loaded: !0
                            }), this.state.isUndoEnabled) {
                            var n = this.getUndoPatch();
                            this.state.undoStack.pushState(n, {
                                isInitial: !0
                            }), this.setState({
                                undoPosition: this.state.undoStack.getPosition()
                            }), x("Initialized undoStack")
                        }
                    }, r.onFetchDataFailure = function(n) {
                        console.error(n), this.setState({
                            loading: !1,
                            error: "There was an error loading the data for this store"
                        })
                    }, r.onFetchTemplateTweakSettingsSuccess = function(n) {
                        var S = u({}, n),
                            b = (0, I.patchDefinitions)(n.tweakDefinitions),
                            D = (0, C.default)(n.availableFonts, u({}, this.state.fonts)),
                            P = (0, E.default)({
                                tweakValues: n.tweakValues,
                                mixinTweakDefinitions: b.mixinTweakDefinitions,
                                tweakDefinitions: b.tweakDefinitions,
                                rawData: S,
                                fonts: D
                            }),
                            V = P.tweakValues,
                            W = P.changedFontTweaks,
                            z = P.activeFonts,
                            B = P.tweakDefinitions,
                            G = (0, o.default)({
                                tweakDefinitions: B,
                                tweakValuesCurrent: V,
                                visibleDefinitions: this.state.visibleDefinitions,
                                filterString: this.state.filterString,
                                selectedDefinitions: this.state.selectedDefinitions,
                                showOnlyWhenPresent: this.state.showOnlyWhenPresent,
                                groupType: this.state.groupType
                            }),
                            K = Object.assign({
                                isDirty: !1,
                                tweakValuesCurrent: V,
                                tweakValuesSaved: V,
                                activeFonts: z,
                                changedFontTweaks: W,
                                fonts: D,
                                tweakDefinitions: B,
                                mixinTweakDefinitions: b.mixinTweakDefinitions,
                                rawData: Object.assign(S, {
                                    tweakValues: V
                                })
                            }, G);
                        this.setState(K)
                    }, r.onFetchTweakEnginePropertiesSuccess = function() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        this.setState({
                            rawData: n
                        })
                    }, r.onFetchTypekitDataSuccess = function(n) {
                        this.setState({
                            fonts: (0, C.default)(n, this.state.fonts)
                        })
                    }, r.onLoadTypekitKitSuccess = function(n) {
                        this.setState({
                            typekitKitFonts: n
                        })
                    }, r.onUpdateMultipleFields = function(n) {
                        this.setState(this.changeMultipleValues(n)), this.onRequestAddToHistoryStack()
                    }, r.onUpdateMultipleFontFields = function(n) {
                        var S = this.state,
                            b = S.fonts,
                            D = S.tweakDefinitions,
                            P = S.tweakValuesCurrent,
                            V = S.tweakValuesSaved,
                            W = S.mixinTweakDefinitions,
                            z = u({}, P, n),
                            B = Object.entries(n).reduce(function(X, J) {
                                var $ = O(J, 2),
                                    q = $[0],
                                    ee = $[1],
                                    Z = D[q];
                                return Z.parentName && (X[Z.parentName] = (0, I.getUpdatedParentValue)({
                                    def: Z,
                                    mixinTweakDefinitions: W,
                                    tweakValuesCurrent: z
                                })), X
                            }, {}),
                            G = u({}, z, B),
                            K = (0, y.updateActiveFonts)({
                                tweakDefinitions: D,
                                tweakValuesCurrent: G,
                                fonts: b
                            });
                        this.setState({
                            changedFontTweaks: [],
                            activeFonts: K,
                            tweakValuesCurrent: G,
                            isDirty: this.getIsDirtyByTweaks({
                                tweakValuesCurrent: G,
                                tweakValuesSaved: V
                            })
                        })
                    }, r.onUpdateField = function(n) {
                        var S = n.variableName,
                            b = n.value,
                            D = n.options,
                            P = D === void 0 ? {} : D,
                            V = this.state.tweakValuesSaved,
                            W = (0, a.default)(d(u({}, this.state), {
                                variableName: S,
                                value: b,
                                options: P
                            })),
                            z = W.activeFonts,
                            B = W.tweakValuesCurrent,
                            G = W.tweakDefinitions,
                            K = W.updatedTweakAsSideEffect;
                        this.setState({
                            tweakValuesCurrent: B,
                            tweakDefinitions: G,
                            activeFonts: z,
                            isDirty: this.getIsDirtyByTweaks({
                                tweakValuesCurrent: B,
                                tweakValuesSaved: V
                            })
                        }), P.ignoreHistory || this.onRequestAddToHistoryStack(), K && !P.noSideEffects && this.onUpdateField((0, _.pick)(K, ["variableName", "value", "options"]))
                    }, r.onRevertFields = function(n) {
                        var S = this;
                        n.forEach(function(b) {
                            S.onUpdateField({
                                variableName: b,
                                value: S.state.tweakValuesSaved[b]
                            })
                        })
                    }, r.onHydrate = function(n) {
                        var S = n.tweakValuesSaved,
                            b = n.tweakValuesCurrent,
                            D = n.tweakDefinitions;
                        this.setState({
                            tweakDefinitions: u({}, D),
                            tweakValuesCurrent: u({}, b),
                            tweakValuesSaved: u({}, S),
                            isDirty: this.getIsDirtyByTweaks({
                                tweakValuesCurrent: b,
                                tweakValuesSaved: S
                            })
                        })
                    }, r.onSaving = function() {
                        this.setState({
                            cleanCss: void 0,
                            saving: !0
                        })
                    }, r.onSaveSuccess = function(n) {
                        this.setState({
                            isDirty: !1,
                            saving: !1,
                            tweakValuesCurrent: u({}, n),
                            tweakValuesSaved: u({}, n)
                        }), this.onRequestAddToHistoryStack()
                    }, r.onSaveFailure = function() {
                        this.setState({
                            error: "There was an error saving your data",
                            saving: !1
                        })
                    }, r.onResetSuccess = function(n) {
                        this.setState(this.setMultipleValues(n)), this.onRequestAddToHistoryStack()
                    }, r.onResetFailure = function(n) {
                        console.error(n), this.setState({
                            error: "There was an error resetting your tweaks"
                        })
                    }, r.onFetchCustomCssSuccess = function(n) {
                        this.setState({
                            customCss: n
                        })
                    }, r.onDiscard = function() {
                        this.setState(u({}, this.changeMultipleValues(this.state.tweakValuesSaved))), this.onResetUndoStack()
                    }, r.onFetchCleanCssSuccess = function(n) {
                        this.setState({
                            cleanCss: n
                        })
                    }, r.onSetFilterProperty = function() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                            S = (0, o.default)(Object.assign({
                                tweakDefinitions: this.state.tweakDefinitions,
                                selectedDefinitions: this.state.selectedDefinitions,
                                tweakValuesCurrent: this.state.tweakValuesCurrent,
                                filterString: this.state.filterString,
                                showOnlyWhenPresent: this.state.showOnlyWhenPresent,
                                groupType: this.state.groupType,
                                visibleDefinitions: this.state.visibleDefinitions
                            }, n)),
                            b = Object.assign({}, S, n);
                        this.setState(b)
                    }, r.onEnableUndo = function() {
                        this.state.isUndoEnabled || (this.setState({
                            isUndoEnabled: !0
                        }), this.state.undoStack || this.setState({
                            undoStack: new N.default
                        }))
                    }, r.onDisableUndo = function() {
                        this.state.isUndoEnabled && this.setState({
                            isUndoEnabled: !1
                        })
                    }, r.getUndoPatch = function() {
                        var n = this.state.tweakValuesCurrent;
                        return {
                            type: "tweaks",
                            tweaks: n
                        }
                    }, r.onRequestAddToHistoryStack = function() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        !this.state.isUndoEnabled || !this.state.undoStack || (this.state.undoStack.pushState(this.getUndoPatch()), this.setState({
                            undoPosition: this.state.undoStack.getPosition()
                        }))
                    }, r.onApplyUndoStackTweaks = function(n) {
                        var S = n.tweaks;
                        this.setState(u({}, this.changeMultipleValues(S)))
                    }, r.onResetUndoStack = function() {
                        !this.state.isUndoEnabled || !this.state.undoStack || (this.state.undoStack.reset(), this.setState({
                            undoPosition: this.state.undoStack.getPosition()
                        }))
                    }, l
                }(),
                Q = R.default.createStore(L, "TweakStore")
        },
        456896: function(Y, F, v) {
            Object.defineProperty(F, "__esModule", {
                value: !0
            });

            function _(e, t) {
                for (var s in t) Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: t[s]
                })
            }
            _(F, {
                makeCollectionFilter: function() {
                    return w
                },
                layoutEngineFilter: function() {
                    return C
                },
                makeQueryFilter: function() {
                    return k
                },
                default: function() {
                    return p
                }
            });
            var m = N(v(700769)),
                R = v(898229);

            function A(e, t) {
                (t == null || t > e.length) && (t = e.length);
                for (var s = 0, f = new Array(t); s < t; s++) f[s] = e[s];
                return f
            }

            function M(e) {
                if (Array.isArray(e)) return e
            }

            function N(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function j(e, t) {
                var s = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (s != null) {
                    var f = [],
                        u = !0,
                        T = !1,
                        d, O;
                    try {
                        for (s = s.call(e); !(u = (d = s.next()).done) && (f.push(d.value), !(t && f.length === t)); u = !0);
                    } catch (H) {
                        T = !0, O = H
                    } finally {
                        try {
                            !u && s.return != null && s.return()
                        } finally {
                            if (T) throw O
                        }
                    }
                    return f
                }
            }

            function I() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function o(e, t) {
                return M(e) || j(e, t) || y(e, t) || I()
            }

            function y(e, t) {
                if (e) {
                    if (typeof e == "string") return A(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    if (s === "Object" && e.constructor && (s = e.constructor.name), s === "Map" || s === "Set") return Array.from(s);
                    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return A(e, t)
                }
            }
            var w = function(e) {
                    return function(t, s) {
                        var f = s.category,
                            u = f === void 0 ? "" : f,
                            T = s.tweakFilter;
                        return e === "products" ? T === "products" || T === "product-item" : u.match(/Blog:|Products:|Blog\s:/) ? !0 : !(!t.includes(e) || t.toLowerCase().includes("font") || u.match(/Colors:|Typography/))
                    }
                },
                C = function(e, t) {
                    var s = t.category,
                        f = s === void 0 ? "" : s;
                    return !(f.match(/(Announcement Bar|Blog:|Colors:|Font Sizes|Header|Heading Sizes|Portfolio|Products|Site|Text Sizes|Typography)/) || e.match(/(tweak-)?.*?(album|blog|body-font|gallery|navigationLink|project|siteBackground|site-navigation|site-title|siteTitle)-/i))
                },
                E = function(e, t, s) {
                    if (t === "product-item") {
                        var f;
                        return !!e.querySelector(s) || !!(!((f = e.closest("html")) === null || f === void 0) && f.querySelector(s))
                    }
                    return !!e.querySelector(s)
                },
                k = function(e) {
                    return function() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
                            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                            f = s.showOnlyWhenPresent,
                            u = s.tweakFilter;
                        if (!e || !f) return !0;
                        var T = f;
                        t === "tweak-products-mobile-columns" && R.legacyV6Flags.isFeatureEnabled(m.default.SHOW_MOBILE_COLUMN_IN_PLP_EDITOR) && (T = ".sqs-device-view-phone .products.products-list"), t === "tweak-products-columns" && R.legacyV6Flags.isFeatureEnabled(m.default.SHOW_MOBILE_COLUMN_IN_PLP_EDITOR) && (T = ".sqs-device-view-desktop .products.products-list");
                        var d = E(e, u, T);
                        return d
                    }
                },
                a = ["tweak-blog-masonry-read-more-style", "tweak-blog-masonry-excerpt", "tweak-blog-basic-grid-read-more-style", "tweak-blog-basic-grid-excerpt", "tweak-blog-single-column-read-more-style", "tweak-blog-alternating-side-by-side-read-more-style", "tweak-blog-alternating-side-by-side-excerpt", "tweak-blog-side-by-side-read-more-style", "tweak-blog-side-by-side-excerpt"],
                g = ["tweak-blog-alternating-side-by-side-text-alignment", "tweak-blog-basic-grid-text-alignment", "tweak-blog-masonry-text-alignment", "tweak-blog-side-by-side-text-alignment", "tweak-blog-single-column-text-alignment"],
                c = ["tweak-blog-alternating-side-by-side-image-text-alignment", "tweak-blog-side-by-side-image-text-alignment"];

            function h(e) {
                return R.legacyV6Flags.isFeatureEnabled(m.default.BC_PSS_SHOWHIDE_FIELD) && a.forEach(function(t) {
                    var s = e[t];
                    s && (s.jsfFieldType = "showhide")
                }), R.legacyV6Flags.isFeatureEnabled(m.default.BC_PSS_ALIGNMENT_FIELDS) && (g.forEach(function(t) {
                    var s = e[t];
                    s && (s.jsfFieldType = "compacttextalignment")
                }), c.forEach(function(t) {
                    var s = e[t];
                    s && (s.jsfFieldType = "compactimagetextalignment")
                })), e
            }
            var p = function(e) {
                var t = e.isMainContent,
                    s = e.sectionNode,
                    f = e.tweakDefinitions,
                    u = e.typeName;
                if (!s) return {};
                var T = t ? w(u) : function() {
                        return !1
                    },
                    d = k(s),
                    O = function(U, L) {
                        return T(U, L) && d(U, L)
                    },
                    H = Object.entries(f).reduce(function(U, L) {
                        var Q = o(L, 2),
                            l = Q[0],
                            r = Q[1];
                        return O(l, r) && (U[l] = r), U
                    }, {}),
                    x = h(H);
                return x
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/4734771fab5a5dcf797e8705b0c1b39f/42757-2415d8f3626f957385fe-min.en-US.js.map