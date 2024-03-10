"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [7048], {
        57048: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return d
                }
            });
            n(92338);
            var i = n(15671),
                o = n(43144),
                r = n(97326),
                s = n(11752),
                u = n(60136),
                a = n(6215),
                c = n(61120),
                f = n(4942),
                l = n(59875),
                p = n(67201);

            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = (0, c.Z)(t);
                    if (e) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, a.Z)(this, n)
                }
            }
            var d = function(t) {
                (0, u.Z)(n, t);
                var e = v(n);

                function n(t, o) {
                    var s;
                    return (0, i.Z)(this, n), s = e.call(this, t, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? h(Object(n), !0).forEach((function(e) {
                                (0, f.Z)(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }({
                        programKey: "refracted-circles-program",
                        frag: "\n#ifndef HALF_PI\n#define HALF_PI 1.5707963267948966\n#endif\n\nfloat easeOut(float t) {\n  return sin(t * HALF_PI);\n}\n\nuniform vec4 uViewport;\nuniform sampler2D uImage;\nuniform float uCenterRadius;\nuniform float uMaxRings;\nuniform float uRingSize;\nuniform float uRotation;\nuniform float uScaleEven;\nuniform float uScaleOdd;\nuniform float uScaleTaperEven;\nuniform float uScaleTaperOdd;\nuniform float uShiftIntensity;\nuniform float uStepFlipRotation;\nuniform float uStepFlipX;\nuniform float uStepFlipY;\nuniform vec2 uResolution;\nuniform vec2 uShift;\nvarying vec2 vUv;\n\nvec2 rotate(vec2 uv, float amount) {\n  vec2 prime = vec2(uv.x * cos(amount) + uv.y * sin(amount),\n    -uv.x * sin(amount) + uv.y * cos(amount));\n  return prime;\n}\n\nfloat getStep (vec2 uv) {\n  return (floor(max(0.0, distance(uv, vec2(0.0)) - uCenterRadius) / uRingSize));\n}\n\nvec2 getFragCoord () {\n  float scale = uResolution.x / uViewport.z;\n  vec2 coord = gl_FragCoord.xy;\n  coord.y -= uViewport.y;\n\n  return coord * scale;\n}\n\nvoid main () {\n  vec2 uv = vUv - 0.5;\n  float aspect = uResolution.x / uResolution.y;\n  vec2 stepCoord = (getFragCoord() / uResolution) - 0.5;\n\n  float step = min(getStep(stepCoord * uResolution), uMaxRings);\n  float isEven = mod(step, 2.0);\n  float flipRotation = sign((1.0 - isEven + uStepFlipRotation) * 2.0 - 1.0);\n  vec2 flipAxis = vec2(\n    sign((1.0 - isEven + uStepFlipX) * 2.0 - 1.0),\n    sign((1.0 - isEven + uStepFlipY) * 2.0 - 1.0)\n  );\n  float progress = easeOut((step + 1.0) / (uMaxRings + 1.0));\n  float progressRotation = easeOut((step) / (uMaxRings));\n  float rotation = progressRotation * (uRotation) * flipRotation;\n  float scale = mix(uScaleOdd, uScaleEven, isEven);\n  float taper = mix(uScaleTaperEven, uScaleTaperOdd, isEven);\n  float taperScale = (1.0 - progress) * taper;\n  vec2 shift = uShift * uShiftIntensity * progress;\n\n  uv.x *= aspect;\n  uv = rotate(uv, rotation);\n  uv.x /= aspect;\n  uv =\n    (uv + shift) *\n      flipAxis *\n      scale *\n      (1.0 + taperScale) +\n    0.5;\n\n  vec4 tx = texture2D(uImage, mod(uv * -sign(mod(uv, 2.0) - 1.0), 1.0));\n  tx.xyz *= tx.a;\n\n  gl_FragColor = tx;\n}\n",
                        uniforms: {
                            uCenterRadius: 100,
                            uMaxRings: -1,
                            uShift: [0, 0]
                        }
                    }, o)), (0, f.Z)((0, r.Z)(s), "isIntersecting", !1), (0, f.Z)((0, r.Z)(s), "onIntersection", (function(t) {
                        s.isIntersecting = t, s.interaction.setIsIntersecting(t)
                    })), (0, f.Z)((0, r.Z)(s), "onScrollProgress", (function(t) {
                        s.interaction.setScrollProgress(t)
                    })), s.autoUpdate = !1, s.updateInteraction(), s.setSize(), s
                }
                return (0, o.Z)(n, [{
                    key: "updateInteraction",
                    value: function() {
                        this.interaction && this.interaction.destroy();
                        var t = (0, p.Z)(this.props.interactionType);
                        this.interaction = new t({
                            shiftUniform: this.uniforms.uShift,
                            props: this.props,
                            node: this.node.closest("section") || this.node
                        }), this.interaction.setIsIntersecting(this.isIntersecting)
                    }
                }, {
                    key: "onUpdateProps",
                    value: function(t) {
                        (0, s.Z)((0, c.Z)(n.prototype), "onUpdateProps", this).call(this, t), this.props.interactionType !== t.interactionType ? this.updateInteraction() : this.interaction.setProps(this.props)
                    }
                }, {
                    key: "getUniformsFromProps",
                    value: function() {
                        var t = this.props,
                            e = t.size,
                            n = t.rotation,
                            i = t.scaleEven,
                            o = t.scaleOdd,
                            r = t.scaleTaperEven,
                            s = t.scaleTaperOdd,
                            u = t.shiftIntensity,
                            a = t.isStepFlipRotation,
                            c = t.isStepFlipX,
                            f = t.isStepFlipY,
                            l = t.contextScale;
                        return {
                            uRotation: n * Math.PI / 180,
                            uRingSize: e * l,
                            uScaleEven: .01 * i,
                            uScaleOdd: .01 * o,
                            uScaleTaperEven: .01 * r,
                            uScaleTaperOdd: .01 * s,
                            uStepFlipRotation: 1 - +a,
                            uStepFlipX: 1 - +c,
                            uStepFlipY: 1 - +f,
                            uShiftIntensity: .002 * u
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.interaction.update() && (this.isDirty = !0)
                    }
                }, {
                    key: "onRefresh",
                    value: function() {
                        (0, s.Z)((0, c.Z)(n.prototype), "onRefresh", this).call(this), this.setSize()
                    }
                }, {
                    key: "setSize",
                    value: function() {
                        var t = this.width,
                            e = this.height,
                            n = this.props,
                            i = n.centerOffsetSize,
                            o = n.isLimitRings,
                            r = n.numRings,
                            s = n.size,
                            u = n.contextScale,
                            a = .5 * Math.min(t, e),
                            c = .5 * Math.sqrt(t * t + e * e),
                            f = a * (.01 * i * u),
                            l = Math.ceil((c - i * u) / (s * u)),
                            p = o ? Math.min(r, l) : l;
                        this.uniforms.uCenterRadius = f, this.uniforms.uMaxRings = p
                    }
                }, {
                    key: "onDestroy",
                    value: function() {
                        (0, s.Z)((0, c.Z)(n.prototype), "onDestroy", this).call(this), this.interaction.destroy()
                    }
                }]), n
            }(l.Z);
            (0, f.Z)(d, "defaultProps", {
                isLimitRings: !1,
                numRings: 0,
                centerOffsetSize: 0,
                size: 0,
                rotation: 0,
                scaleEven: 0,
                scaleOdd: 0,
                scaleTaperEven: 0,
                scaleTaperOdd: 0,
                isStepFlipRotation: !1,
                isStepFlipX: !1,
                isStepFlipY: !1,
                interactionType: "none",
                shiftIntensity: 0,
                shiftSpeed: 0,
                contextScale: 1,
                scrollProgress: -1,
                mouseX: -1,
                mouseY: -1
            })
        },
        67201: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return Z
                }
            });
            var i = n(4942),
                o = !!("ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch),
                r = "none",
                s = "mouse",
                u = "scroll",
                a = n(15671),
                c = n(43144),
                f = function() {
                    function t(e) {
                        var n = e.shiftUniform,
                            i = e.props,
                            o = e.node;
                        (0, a.Z)(this, t), this.shiftUniform = n, this.props = i, this.node = o
                    }
                    return (0, c.Z)(t, [{
                        key: "setProps",
                        value: function(t) {
                            this.props = t
                        }
                    }, {
                        key: "setImmediate",
                        value: function() {}
                    }, {
                        key: "setIsIntersecting",
                        value: function() {}
                    }, {
                        key: "setScrollProgress",
                        value: function() {}
                    }, {
                        key: "update",
                        value: function() {
                            return this.shiftUniform[0] = 0, this.shiftUniform[1] = 0, !1
                        }
                    }, {
                        key: "destroy",
                        value: function() {}
                    }]), t
                }(),
                l = (n(92338), n(97326)),
                p = n(60136),
                h = n(6215),
                v = n(61120);

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = (0, v.Z)(t);
                    if (e) {
                        var o = (0, v.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, h.Z)(this, n)
                }
            }
            var m = function(t) {
                (0, p.Z)(n, t);
                var e = d(n);

                function n() {
                    var t;
                    (0, a.Z)(this, n);
                    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)), (0, i.Z)((0, l.Z)(t), "shiftTarget", [0, 0]), (0, i.Z)((0, l.Z)(t), "shiftResetTID", -1), (0, i.Z)((0, l.Z)(t), "onPointerMove", (function(e) {
                        var n = t.node.getBoundingClientRect(),
                            i = (e.clientX - n.left) / n.width,
                            o = (e.clientY - n.top) / n.height;
                        t.shiftTarget[0] = -2 * i + 1, t.shiftTarget[1] = 2 * o - 1, t.onPointerLeave()
                    })), (0, i.Z)((0, l.Z)(t), "onPointerLeave", (function() {
                        clearTimeout(t.shiftResetTID), t.shiftResetTID = setTimeout(t.resetShift, 2e3)
                    })), (0, i.Z)((0, l.Z)(t), "resetShift", (function() {
                        t.shiftTarget = [0, 0]
                    })), t
                }
                return (0, c.Z)(n, [{
                    key: "setIsIntersecting",
                    value: function(t) {
                        t ? this.enable() : this.disable()
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.node.addEventListener("mousemove", this.onPointerMove), this.node.addEventListener("mouseleave", this.onPointerLeave)
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.node.removeEventListener("mousemove", this.onPointerMove), this.node.removeEventListener("mouseleave", this.onPointerLeave)
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = this.props,
                            e = t.shiftSpeed,
                            n = t.mouseX,
                            i = t.mouseY,
                            o = this.shiftUniform,
                            r = this.shiftTarget; - 1 !== n && -1 !== i && (r = [.01 * n * -2 + 1, .01 * i * 2 - 1]);
                        var s = r[0] - o[0],
                            u = r[1] - o[1];
                        return (0 !== s || 0 !== u) && (o[0] += s * (.002 * e), o[1] += u * (.002 * e), !0)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.disable(), clearTimeout(this.shiftResetTID)
                    }
                }]), n
            }(f);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = (0, v.Z)(t);
                    if (e) {
                        var o = (0, v.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, h.Z)(this, n)
                }
            }
            var g, R = function(t) {
                    (0, p.Z)(n, t);
                    var e = y(n);

                    function n() {
                        var t;
                        (0, a.Z)(this, n);
                        for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(r)), (0, i.Z)((0, l.Z)(t), "targetProgress", 0), (0, i.Z)((0, l.Z)(t), "isImmediate", !0), t
                    }
                    return (0, c.Z)(n, [{
                        key: "setIsIntersecting",
                        value: function(t) {
                            t && this.setImmediate()
                        }
                    }, {
                        key: "setImmediate",
                        value: function() {
                            this.isImmediate = !0
                        }
                    }, {
                        key: "setScrollProgress",
                        value: function(t) {
                            this.isImmediate && (this.shiftUniform[1] = t, this.isImmediate = !1), this.targetProgress = t
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var t = this.props,
                                e = t.shiftSpeed,
                                n = t.scrollProgress,
                                i = this.shiftUniform[1],
                                o = this.targetProgress;
                            if (n >= 0 && (o = .01 * n), i === o) return !1;
                            var r = o - i;
                            return this.shiftUniform[1] = r < .01 ? o : i + r * (.01 * e), this.shiftUniform[0] = 0, !0
                        }
                    }]), n
                }(f),
                S = (g = {}, (0, i.Z)(g, r, f), (0, i.Z)(g, u, R), (0, i.Z)(g, s, m), g),
                Z = function(t) {
                    return t === s && o ? S[u] : S[t]
                }
        },
        11752: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return r
                }
            });
            var i = n(61120);

            function o(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = (0, i.Z)(t)););
                return t
            }

            function r() {
                return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var i = o(t, e);
                    if (i) {
                        var r = Object.getOwnPropertyDescriptor(i, e);
                        return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value
                    }
                }, r.apply(this, arguments)
            }
        }
    }
]);