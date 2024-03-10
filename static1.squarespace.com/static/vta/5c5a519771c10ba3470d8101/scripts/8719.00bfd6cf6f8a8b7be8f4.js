"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [8719], {
        18719: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            });
            n(92338);

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }
            var i = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.workFn = e, this.pending = !1, this.samples = [], this.lastCompleteExecution = null, this.sampledAverageExecution = null, this.pendingDowntime = null
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "invoke",
                    value: function() {
                        var t = this,
                            e = this.lastCompleteExecution,
                            n = this.sampledAverageExecution;
                        if (!this.pending) {
                            if (null !== e && null !== n) {
                                var o = Date.now() - e,
                                    i = 2 * n;
                                if (o < i) {
                                    var r = i - o;
                                    return this.pendingDowntime ? void 0 : void(this.pendingDowntime = setTimeout((function() {
                                        t.invoke(), t.pendingDowntime = null
                                    }), r))
                                }
                            }
                            this.doWork()
                        }
                    }
                }, {
                    key: "doWork",
                    value: function() {
                        var t = Date.now();
                        this.pending = !0;
                        try {
                            this.workFn()
                        } catch (t) {
                            console.error(t)
                        }
                        this.lastCompleteExecution = Date.now();
                        var e = this.lastCompleteExecution - t;
                        this.pending = !1;
                        var n = this.samples;
                        n.unshift(e), n.length > 22 && (this.samples = n = n.slice(0, 22)), this.sampledAverageExecution = n.reduce((function(t, e) {
                            return t + e
                        }), 0) / n.length
                    }
                }]) && o(e.prototype, n), i && o(e, i), t
            }();
            var r = function(t) {
                    var e = new i(t);
                    return function() {
                        return e.invoke()
                    }
                },
                c = n(83686),
                a = n(76746),
                l = n.n(a),
                u = n(1678);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return d(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return d(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }
            var f = function(t) {
                    return "collection-type-".concat(t)
                },
                y = Object.values(u.hr).map(f);
            var p = n(59340),
                h = n(11500),
                m = n(36871),
                g = n.n(m);

            function v(t) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, v(t)
            }

            function b(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function w(t, e, n) {
                return w = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var o = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = j(t)););
                        return t
                    }(t, e);
                    if (o) {
                        var i = Object.getOwnPropertyDescriptor(o, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }, w(t, e, n || t)
            }

            function S(t, e) {
                return S = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, S(t, e)
            }

            function k(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = j(t);
                    if (e) {
                        var i = j(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return O(this, n)
                }
            }

            function O(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? A(t) : e
            }

            function A(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t) {
                return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, j(t)
            }

            function E(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var I = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && S(t, e)
                    }(c, t);
                    var e, n, o, i = k(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), E(A(e = i.call(this, t)), "sectionWillChange", (function(t, n) {
                            var o, i, r, c;
                            e.isMainContentSection && n.typeName && n.typeName.indexOf("blog-") > -1 && function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
                                (e = n.classList).remove.apply(e, s(y)), t && n.classList.add(f(t))
                            }(n.typeName);
                            var a = {
                                    styles: n.styles || {},
                                    video: n.video || {},
                                    backgroundImageId: n.backgroundImageId || "",
                                    backgroundMediaEffect: n.backgroundMediaEffect,
                                    divider: n.divider,
                                    typeName: n.typeName || ""
                                },
                                l = e.state,
                                u = l.styles,
                                d = l.video,
                                h = l.backgroundImageId,
                                m = l.typeName,
                                g = a.styles,
                                v = a.video,
                                b = a.backgroundImageId,
                                w = a.backgroundMediaEffect,
                                S = a.divider,
                                k = a.typeName;
                            if (k && m && k !== m) return !1;
                            var O = (0, p.Z)(g, u);
                            if (e.shouldStylesChangeUpdateDOM(O)) return !1;
                            if (h !== b) return !1;
                            if ((null == w ? void 0 : w.type) !== (null === (o = e.state.backgroundMediaEffect) || void 0 === o ? void 0 : o.type)) return !1;
                            if ((null == S ? void 0 : S.enabled) !== (null === (i = e.state.divider) || void 0 === i ? void 0 : i.enabled)) return !1;
                            var A = (0, p.Z)(v || {}, d || {});
                            return !e.shouldVideoChangeUpdateDOM(A, d, v) && (!((null === (r = g.generative) || void 0 === r ? void 0 : r.type) !== (null === (c = u.generative) || void 0 === c ? void 0 : c.type)) && (e.handleImageOverlayOpacityUpdate(O, g), e.handleHeaderStyleUpdate(O, g), e.handleStylesUpdate(O, g), e.setState(a), !0))
                        })), E(A(e), "shouldStylesChangeUpdateDOM", (function(t) {
                            return !!(t.includes("backgroundMode") || t.includes("imageFocalPoint") || t.includes("imageFocalPoint.x") || t.includes("imageFocalPoint.y") || t.includes("imageEffect") || t.includes("sectionAnimation") || t.includes("sectionTheme"))
                        })), E(A(e), "shouldVideoChangeUpdateDOM", (function(t, e, n) {
                            var o = !t.includes("url"),
                                i = null === e && "" === (null == n ? void 0 : n.url),
                                r = null === (null == n ? void 0 : n.videoFallbackContentItemId) && o,
                                c = i || r;
                            return (t.includes("url") || t.includes("filter") || t.includes("filterStrength") || t.includes("playbackSpeed") || t.includes("videoFallbackContentItemId") || t.includes("videoFallbackFocalPoint") || t.includes("assetContentItemId")) && !c
                        })), E(A(e), "handleStylesUpdate", (function(t, n) {
                            if (t.includes("sectionTheme") && (0, h.O)(e.node, g(), n.sectionTheme), t.includes("backgroundWidth") && (0, h.O)(e.node, ["background-width--full-bleed", "background-width--inset"], n.backgroundWidth), t.includes("sectionHeight")) {
                                if (["section-height--small", "section-height--medium", "section-height--large"].forEach((function(t) {
                                        e.node.classList.remove(t)
                                    })), "section-height--custom" === n.sectionHeight) e.applySectionHeight(n.verticalAlignment, n.customSectionHeight);
                                else {
                                    var o = e.node.querySelector(".content-wrapper");
                                    o.style.paddingTop = "", o.style.paddingBottom = "", e.node.style.minHeight = "", e.node.classList.add(n.sectionHeight)
                                }
                            }
                            if ("section-height--custom" === n.sectionHeight && t.includes("customSectionHeight") && e.applySectionHeight(n.verticalAlignment, n.customSectionHeight), t.includes("horizontalAlignment") && (0, h.O)(e.node, ["horizontal-alignment--left", "horizontal-alignment--center", "horizontal-alignment--right"], n.horizontalAlignment), t.includes("verticalAlignment") && ((0, h.O)(e.node, ["vertical-alignment--top", "vertical-alignment--middle", "vertical-alignment--bottom"], n.verticalAlignment), "section-height--custom" === n.sectionHeight && e.applySectionHeight(n.verticalAlignment, n.customSectionHeight)), t.includes("contentWidth")) {
                                e.node.dataset.widthConstraint = n.contentWidth, ["content-width--narrow", "content-width--medium", "content-width--wide"].forEach((function(t) {
                                    e.node.classList.contains(t) && e.node.classList.remove(t)
                                })), "content-width--custom" !== n.contentWidth ? (e.node.classList.add(n.contentWidth), e.node.querySelector(".content").style.width = "") : e.node.querySelector(".content").style.width = "".concat(e.state.styles.customContentWidth, "%")
                            }
                            t.includes("customContentWidth") && "content-width--custom" === e.state.styles.contentWidth && (e.node.querySelector(".content").style.width = "".concat(n.customContentWidth, "%")), window.Y.one(window.Y.config.win).simulate("resize")
                        })), E(A(e), "handleImageOverlayOpacityUpdate", (function(t, n) {
                            if (t.includes("imageOverlayOpacity")) {
                                var o = e.node.querySelector(".section-background-overlay");
                                o && (o.style.opacity = n.imageOverlayOpacity)
                            }
                        })), E(A(e), "handleHeaderStyleUpdate", (function(t, n) {
                            var o = "true" === l().getValue("tweak-transparent-header");
                            if (e.isFirstSection && o) {
                                var i = document.querySelector(".header");
                                if (!e.node.classList.contains(u.hk) && t.includes("sectionTheme")) {
                                    var r = n.sectionTheme;
                                    (0, h.O)(i, g(), r)
                                }
                                if (t.includes("backgroundWidth")) {
                                    if (n.backgroundWidth === u.Rs) {
                                        var c = n.sectionTheme;
                                        (0, h.O)(i, g(), c)
                                    }
                                    n.backgroundWidth === u.hk && (0, h.O)(i, g())
                                }
                            }
                        })), e.sectionId = e.node.getAttribute("data-section-id"), e.isMainContentSection = e.node.classList.contains("content-collection"), e.isFirstSection = null === e.node.previousElementSibling, e.state = e.getStateFromDOM(), e.throttledRenderStyles = r((function() {
                            return e.renderStyles()
                        })), e
                    }
                    return e = c, (n = [{
                        key: "getStateFromDOM",
                        value: function() {
                            var t, e = JSON.parse(this.node.getAttribute("data-current-styles") || "{}"),
                                n = JSON.parse(this.node.getAttribute("data-current-context")),
                                o = n.video,
                                i = void 0 === o ? {} : o,
                                r = n.backgroundImageId,
                                c = void 0 === r ? "" : r,
                                a = n.backgroundMediaEffect,
                                l = void 0 === a ? {} : a,
                                u = n.divider,
                                s = void 0 === u ? {} : u,
                                d = n.typeName,
                                f = void 0 === d ? "" : d;
                            return {
                                styles: e,
                                video: i,
                                backgroundImageId: c || (null == e || null === (t = e.backgroundImage) || void 0 === t ? void 0 : t.id) || "",
                                backgroundMediaEffect: l,
                                divider: s,
                                typeName: f
                            }
                        }
                    }, {
                        key: "applySectionHeight",
                        value: function(t, e) {
                            var n = this.node.querySelector(".content-wrapper");
                            this.node.style.minHeight = "".concat(e, "vh"), "vertical-alignment--top" === t ? (n.style.paddingTop = "", n.style.paddingBottom = "calc(".concat(e, "vmax / 5)")) : "vertical-alignment--bottom" === t ? (n.style.paddingTop = "calc(".concat(e, "vmax / 5)"), n.style.paddingBottom = "") : (n.style.paddingTop = "calc(".concat(e, "vmax / 10)"), n.style.paddingBottom = "calc(".concat(e, "vmax / 10)"))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            w(j(c.prototype), "destroy", this).call(this)
                        }
                    }]) && b(e.prototype, n), o && b(e, o), c
                }(c.f),
                C = function(t) {
                    return new I(t)
                }
        },
        59340: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            n(92338);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }
            var i = function t(e, n) {
                if (e === n) return !0;
                if (o(e) !== o(n) || "object" !== o(e) || null === e || null === n) return !1;
                var i = Object.keys(e),
                    r = Object.keys(n);
                if (i.length !== r.length || i.find((function(t) {
                        return r.indexOf(t) < 0
                    }))) return !1;
                for (var c in e)
                    if (!t(e[c], n[c])) return !1;
                return !0
            };

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function c(t) {
                return t && t.constructor && "Object" === t.constructor.name
            }

            function a(t, e) {
                return !t && !e || Array.isArray(t) && Array.isArray(e) || c(t) && c(e) || "string" == typeof t && "string" == typeof e || !isNaN(t) && !isNaN(e)
            }

            function l(t) {
                var e = t.newPointer,
                    n = t.oldPointer,
                    o = new Set;
                return e.forEach((function(t) {
                    n.includes(t) || o.add(t)
                })), Array.isArray(n) && n.forEach((function(t) {
                    e.includes(t) || o.add(t)
                })), Array.from(o)
            }
            var u = function t(e, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if ("object" !== r(e) || "object" !== r(n)) throw new Error("".concat(t.name, " parameters must be Arrays or Objects, received: ").concat(e, " and ").concat(n));
                if (!i(e, n)) {
                    if (Array.isArray(e) && Array.isArray(n)) return l({
                        newPointer: e,
                        oldPointer: n
                    });
                    var u = Object.keys(e),
                        s = u.map((function(r) {
                            var u = e[r],
                                s = n[r];
                            if (!a(u, s)) return "".concat(o).concat(r);
                            if (c(u) && c(s)) return t(u, s, "".concat(o).concat(r, "."));
                            if (Array.isArray(u)) {
                                if (i(u, s)) return null;
                                var d = l({
                                    newPointer: u,
                                    oldPointer: s
                                });
                                return "".concat(o).concat(r, "[").concat(d, "]")
                            }
                            return i(u, s) ? null : "".concat(o).concat(r)
                        })).filter((function(t) {
                            return !!t
                        })),
                        d = l({
                            newPointer: Object.keys(e),
                            oldPointer: Object.keys(n)
                        });
                    return d.forEach((function(t) {
                        s.includes("".concat(o).concat(t)) || s.push("".concat(o).concat(t))
                    })), s.flat()
                }
                return []
            }
        }
    }
]);