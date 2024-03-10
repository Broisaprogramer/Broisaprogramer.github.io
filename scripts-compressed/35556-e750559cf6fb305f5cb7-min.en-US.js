"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [35556], {
        135556: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var c = r(n(943035)),
                h = r(n(799369)),
                _ = r(n(99752)),
                d = r(n(383967)),
                t = n(401962),
                p = r(n(305378)),
                f = r(n(424949)),
                g = r(n(992636)),
                D = r(n(430325));

            function o(e, u) {
                (u == null || u > e.length) && (u = e.length);
                for (var a = 0, l = new Array(u); a < u; a++) l[a] = e[a];
                return l
            }

            function y(e) {
                if (Array.isArray(e)) return e
            }

            function P(e, u) {
                if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, u) {
                var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (a != null) {
                    var l = [],
                        v = !0,
                        A = !1,
                        w, m;
                    try {
                        for (a = a.call(e); !(v = (w = a.next()).done) && (l.push(w.value), !(u && l.length === u)); v = !0);
                    } catch (O) {
                        A = !0, m = O
                    } finally {
                        try {
                            !v && a.return != null && a.return()
                        } finally {
                            if (A) throw m
                        }
                    }
                    return l
                }
            }

            function T() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function S(e, u) {
                return y(e) || s(e, u) || k(e, u) || T()
            }

            function k(e, u) {
                if (e) {
                    if (typeof e == "string") return o(e, u);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
                    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return o(e, u)
                }
            }
            var R = function() {
                    "use strict";

                    function e() {
                        P(this, e), this.generateActions("fetchDataSuccess", "fetchDataFailure", "selectCategory", "saveSuccess", "saveFailure")
                    }
                    var u = e.prototype;
                    return u.fetchData = function(l) {
                        var v = this;
                        return function(A) {
                            A(l);
                            var w = [_.default.read(l), d.default.read(l), g.default.readAllForType(D.default.COVER_PAGE)];
                            Promise.all(w).then(function(m) {
                                var O = S(m, 3),
                                    I = O[0],
                                    M = O[1],
                                    L = O[2];
                                v.fetchDataSuccess({
                                    navTitle: I.data.navigationTitle,
                                    slide: M.data.slide,
                                    layouts: L.data.results
                                })
                            }).catch(function() {
                                return v.fetchDataFailure()
                            })
                        }
                    }, u.fetchLockScreenData = function() {
                        var l = this;
                        return function(v) {
                            v();
                            var A = [(0, t.readLockScreenSummary)(), g.default.readAllForType(D.default.LOCK_SCREEN)];
                            Promise.all(A).then(function(w) {
                                var m = S(w, 2),
                                    O = m[0],
                                    I = m[1];
                                l.fetchDataSuccess({
                                    slide: O.data.slide,
                                    layouts: I.data.results
                                })
                            }).catch(function() {
                                return l.fetchDataFailure()
                            })
                        }
                    }, u.fetchPopupOverlayData = function() {
                        var l = this;
                        return function(v) {
                            v();
                            var A = [p.default.read(), g.default.readAllForType(D.default.POPUP_OVERLAY)];
                            Promise.all(A).then(function(w) {
                                var m = S(w, 2),
                                    O = m[0],
                                    I = m[1];
                                l.fetchDataSuccess({
                                    slide: O.data.slide,
                                    layouts: I.data.results
                                })
                            }).catch(function() {
                                return l.fetchDataFailure()
                            })
                        }
                    }, u.selectLayout = function(l, v) {
                        return function(A) {
                            A(v), h.default.renderPreview(l, v)
                        }
                    }, u.save = function(l) {
                        var v = this;
                        return function(A) {
                            return A(), f.default.update(l).then(function(w) {
                                var m = w.data;
                                return v.saveSuccess(m)
                            }).catch(function(w) {
                                var m = w.response,
                                    O = m.data.message;
                                return v.saveFailure(O), Promise.reject(O)
                            })
                        }
                    }, e
                }(),
                b = c.default.createActions(R)
        },
        799369: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            var c = d(n(424949)),
                h = d(n(943035));

            function _(f, g) {
                if (!(f instanceof g)) throw new TypeError("Cannot call a class as a function")
            }

            function d(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var t = function() {
                    "use strict";

                    function f() {
                        _(this, f), this.generateActions("insert", "insertSlices", "saveSuccess", "saveFailure")
                    }
                    var g = f.prototype;
                    return g.update = function(o) {
                        var y = this;
                        return function(P) {
                            return P(o.id), c.default.update(o).then(function(r) {
                                var s = r.data;
                                return y.insert(s)
                            }).catch(function(r) {
                                var s = r.response;
                                return Promise.reject(s.data.message)
                            })
                        }
                    }, g.upsertSlices = function(o) {
                        var y = this;
                        return function(P) {
                            return P(o), c.default.upsertSlices(o).then(function(r) {
                                var s = r.data;
                                return y.insertSlices(s.slices)
                            }).catch(function(r) {
                                var s = r.response;
                                return Promise.reject(s.data.message)
                            })
                        }
                    }, g.renderPreview = function(o, y) {
                        var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                            r = this;
                        return function(s) {
                            return s(), c.default.renderPreview(o, P ? y : null).then(function(T) {
                                var S = T.data,
                                    k = S.renderedSlide,
                                    R = S.pageClasses,
                                    b = S.slideType;
                                r.renderPreviewSuccess(k, R, y, b)
                            })
                        }
                    }, g.renderPreviewSuccess = function(o, y, P, r) {
                        return function(s) {
                            s();
                            try {
                                window.Y.Global.fire("slideUpdate", {
                                    renderedSlide: o,
                                    pageClasses: y,
                                    layoutId: P,
                                    slideType: r
                                })
                            } catch (T) {
                                console.error(T)
                            }
                        }
                    }, g.save = function(o) {
                        var y = this;
                        return function(P) {
                            P();
                            var r = Object.values(o).filter(function(s) {
                                return !s.isDemo
                            });
                            return c.default.upsertSlices(r).then(function(s) {
                                var T = s.data,
                                    S = T.slices;
                                return y.saveSuccess(S), S
                            }).catch(function(s) {
                                var T = s.response,
                                    S = T.data.message;
                                return y.saveFailure(S), Promise.reject(S)
                            })
                        }
                    }, g.discard = function(o) {
                        var y = this;
                        return function(P) {
                            P(o.id);
                            var r = o.id,
                                s = o.layoutIdentifier;
                            return y.renderPreview(r, s, !1), Promise.resolve()
                        }
                    }, f
                }(),
                p = h.default.createActions(t)
        },
        383967: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var c = h(n(808847));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var _ = {
                    read: function(p) {
                        return c.default.get("/api/content-collections/".concat(p, "/slide-summary"))
                    }
                },
                d = _
        },
        401962: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "readLockScreenSummary", {
                enumerable: !0,
                get: function() {
                    return _
                }
            });
            var c = h(n(808847));

            function h(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }
            var _ = function() {
                return c.default.get("/api/lock-screen/slide-summary")
            }
        },
        305378: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var c = h(n(808847));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var _ = {
                    read: function() {
                        return c.default.get("/api/popup-overlay/slide-summary")
                    }
                },
                d = _
        },
        424949: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var c = h(n(808847));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var _ = {
                    update: function(p) {
                        return c.default.put("/api/slides/".concat(p.id), p)
                    },
                    upsertSlices: function(p) {
                        var f = p[0].slideId;
                        return c.default.put("/api/slides/".concat(f, "/slices"), {
                            slices: p
                        })
                    },
                    renderPreview: function(p) {
                        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                        return c.default.get("/api/slides/preview", {
                            params: {
                                slideId: p,
                                layoutId: f
                            }
                        })
                    }
                },
                d = _
        },
        992636: function(C, i, n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), Object.defineProperty(i, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var c = h(n(808847));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var _ = {
                    readAllForType: function(p) {
                        return c.default.get("/api/slide-layouts", {
                            params: {
                                slideTypes: p
                            }
                        })
                    }
                },
                d = _
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/032d660a1c14dfc3f20d25d2185c37cf/35556-e750559cf6fb305f5cb7-min.en-US.js.map