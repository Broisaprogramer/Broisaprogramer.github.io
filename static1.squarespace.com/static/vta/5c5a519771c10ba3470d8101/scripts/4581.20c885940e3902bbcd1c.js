"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [4581], {
        46325: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return g
                }
            });
            var r = n(83027),
                o = n(66953),
                i = n(45301),
                a = n(8477),
                c = n(9453),
                u = {
                    none: {
                        type: "none"
                    },
                    liquid: {
                        type: "liquid",
                        scale: 2,
                        rotation: 270,
                        intensity: 10,
                        morphSpeed: 5,
                        seed: 100,
                        shadow: 8,
                        smoothness: 100,
                        speed: 50
                    },
                    pan: {
                        type: "parallax",
                        intensity: 12,
                        rotation: 15,
                        zoomStart: 10,
                        zoomEnd: 0
                    },
                    tilt: {
                        type: "parallax",
                        intensity: 15,
                        rotation: 90,
                        zoomStart: 0,
                        zoomEnd: 0
                    },
                    zoom: {
                        type: "parallax",
                        intensity: 0,
                        rotation: 90,
                        zoomStart: 30,
                        zoomEnd: 0
                    },
                    "film-grain": {
                        type: "filmGrain",
                        intensity: 50,
                        shadow: 0,
                        speed: 30
                    },
                    "refracted-lines": {
                        type: "refractedLines",
                        intensity: -25,
                        size: 120,
                        offsetScaleX: 50,
                        offsetScaleY: 50,
                        rotation: 135,
                        scale: 80,
                        interactionType: "scroll",
                        shiftIntensity: 25,
                        shiftSpeed: 20
                    },
                    "refracted-circles": {
                        type: "refractedCircles",
                        isLimitRings: !1,
                        numRings: 5,
                        centerOffsetSize: 55,
                        size: 150,
                        rotation: 2,
                        scaleEven: 100,
                        scaleOdd: 90,
                        scaleTaperEven: 10,
                        scaleTaperOdd: -10,
                        interactionType: "mouse",
                        shiftIntensity: 50,
                        shiftSpeed: 20,
                        isStepFlipRotation: !0,
                        isStepFlipX: !1,
                        isStepFlipY: !1
                    }
                };

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function p(t, e) {
                return p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function y(t) {
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
                    var n, r = h(t);
                    if (e) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? m(t) : e
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function b(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var g = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e)
                }(h, t);
                var e, n, i, f = y(h);

                function h(t, e) {
                    var n;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h), b(m(n = f.call(this)), "onImageLoaded", (function() {
                        n.isImageLoaded && n.component ? n.component.setProps({
                            imageNeedsUpdate: !0
                        }) : (n.isImageLoaded = !0, n.initComponent())
                    })), n.node = t, n.WebGLComponent = e, n.image = t.querySelector("img"), n.focalPoint = (0, c.ik)(n.image), n.section = t.closest("section");
                    var o = n.section.dataset,
                        i = o.sectionId,
                        u = o.currentStyles,
                        s = o.currentContext;
                    return n.sectionId = i, n.state = n.resolveImageEffectProps(JSON.parse(u), JSON.parse(s).backgroundMediaEffect), n.isImageLoaded = !1, n.isEnabled = r.Z && !a.u6, n.image ? n.isEnabled ? (n.checkImageLoaded(), n) : (n.image.style.visibility = "visible", d(n)) : d(n)
                }
                return e = h, n = [{
                    key: "resolveImageEffectProps",
                    value: function(t, e) {
                        return e && "none" !== e.type ? e : t.imageEffect ? function(t) {
                            var e = u[t];
                            if (!e) throw new Error("No props found for type: ".concat(t));
                            return e
                        }(t.imageEffect) : {}
                    }
                }, {
                    key: "checkImageLoaded",
                    value: function() {
                        this.image.onload = this.onImageLoaded, this.image.complete && "" !== this.image.currentSrc && this.onImageLoaded()
                    }
                }, {
                    key: "initComponent",
                    value: function() {
                        var t = this.node.querySelector(".background-fx-canvas"),
                            e = this.state;
                        this.component = new o.Z(this.WebGLComponent, t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? s(Object(n), !0).forEach((function(e) {
                                    b(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            image: this.image,
                            focalPoint: this.focalPoint,
                            pixelRatio: Math.min(devicePixelRatio, 1.5)
                        }, e))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t;
                        null === (t = this.component) || void 0 === t || t.destroy()
                    }
                }], n && l(e.prototype, n), i && l(e, i), h
            }(i.Z)
        },
        64581: function(t, e, n) {
            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function i(t, e, n) {
                return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e);
                        return o.get ? o.get.call(n) : o.value
                    }
                }, i(t, e, n || t)
            }

            function a(t, e) {
                return a = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, a(t, e)
            }

            function c(t) {
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
                    var n, r = s(t);
                    if (e) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }

            function u(t, e) {
                return !e || "object" !== r(e) && "function" != typeof e ? f(t) : e
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function s(t) {
                return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, s(t)
            }
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var l = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && a(t, e)
                }(l, t);
                var e, n, r, u = c(l);

                function l(t, e) {
                    var n, r, o, i;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), n = u.call(this, t, e), r = f(n), i = function(t, e) {
                        var r = e.styles,
                            o = e.backgroundMediaEffect,
                            i = n.resolveImageEffectProps(r, o);
                        return i.type === n.state.type && (n.component.setProps(i), n.setState(i), !0)
                    }, (o = "sectionWillChange") in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i, n
                }
                return e = l, (n = [{
                    key: "destroy",
                    value: function() {
                        i(s(l.prototype), "destroy", this).call(this)
                    }
                }]) && o(e.prototype, n), r && o(e, r), l
            }(n(46325).Z)
        },
        9453: function(t, e, n) {
            n.d(e, {
                Ad: function() {
                    return f
                },
                g2: function() {
                    return u
                },
                ik: function() {
                    return s
                },
                qH: function() {
                    return a
                },
                vd: function() {
                    return c
                }
            });
            n(92338), n(76746);
            var r = n(1678);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var a = function(t) {
                    if (!t) return 1;
                    if (!t.dataset.imageDimensions) {
                        var e = t.getAttribute("width"),
                            n = t.getAttribute("height");
                        return e && n ? +e / +n : 1
                    }
                    var r = t.dataset.imageDimensions.split("x");
                    return r[0] && r[1] ? +r[0] / +r[1] : void 0
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                    if (t <= e) return t;
                    var n = window.innerWidth;
                    return n <= r.AV.sm ? Math.max(e, Math.round(.25 * t)) : n <= r.AV.md ? Math.max(e, Math.round(.5 * t)) : n <= r.AV.lg ? Math.max(e, Math.round(.75 * t)) : t
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = window.innerWidth,
                        n = Math.max(1, t);
                    return 1 === n ? n : e <= r.AV.sm ? 2 : e <= r.AV.md ? Math.max(Math.ceil(.5 * n), 2) : e <= r.AV.lg ? Math.ceil(.75 * n) : n
                },
                f = function(t) {
                    var e = 0,
                        n = 0,
                        r = {
                            width: e,
                            height: n
                        };
                    if (!t) return r;
                    if (t.dataset.imageDimensions) {
                        var i = o(t.dataset.imageDimensions.split("x"), 2);
                        e = i[0], n = i[1]
                    } else e = t.getAttribute("width"), n = t.getAttribute("height");
                    return e && n ? {
                        width: +e,
                        height: +n
                    } : r
                },
                s = function(t) {
                    var e = {
                        x: .5,
                        y: .5
                    };
                    if (!t) return e;
                    if (!t.dataset.imageFocalPoint) return e;
                    var n = o(t.dataset.imageFocalPoint.split(","), 2),
                        r = n[0],
                        i = n[1];
                    return r && i ? {
                        x: +r,
                        y: +i
                    } : e
                }
        }
    }
]);