"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9344], {
        39030: function(e, t, n) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function l() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? p(e) : t
            }

            function v(e) {
                return function() {
                    var t, n = f(e);
                    if (l()) {
                        var r = f(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return d(this, t)
                }
            }

            function g(e, t, n) {
                return g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                }, g(e, t, n || e)
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, {
                _: function() {
                    return r
                },
                a: function() {
                    return y
                },
                b: function() {
                    return o
                },
                c: function() {
                    return u
                },
                d: function() {
                    return v
                },
                e: function() {
                    return s
                },
                f: function() {
                    return c
                },
                g: function() {
                    return g
                },
                h: function() {
                    return f
                },
                i: function() {
                    return p
                }
            })
        },
        61905: function(e, t, n) {
            var r = n(39030),
                i = n(98440);
            t.Z = function e(t) {
                var n = t.array,
                    o = t.itemSize,
                    s = t.normalized,
                    a = void 0 !== s && s,
                    c = t.usage,
                    u = void 0 === c ? i.MB : c,
                    f = t.name,
                    h = void 0 === f ? "" : f,
                    l = t.divisor,
                    p = void 0 === l ? 0 : l;
                (0, r._)(this, e), this.array = n, this.itemSize = o, this.normalized = a, this.usage = u, this.name = h, this.divisor = p, this.count = n ? n.length / o : 0, this.needsUpdate = !1
            }
        },
        55886: function(e, t, n) {
            var r = n(39030),
                i = function(e) {
                    (0, r.c)(n, e);
                    var t = (0, r.d)(n);

                    function n(e) {
                        var i = e.geometry,
                            o = e.material,
                            s = e.offset,
                            a = void 0 === s ? 0 : s,
                            c = e.count,
                            u = void 0 === c ? i.attributes.values().next().value.count : c;
                        return (0, r._)(this, n), t.call(this, {
                            geometry: i,
                            material: o,
                            offset: a,
                            count: u
                        })
                    }
                    return (0, r.b)(n, [{
                        key: "draw",
                        value: function(e) {
                            e.drawArrays(this.mode, this.offset, this.count)
                        }
                    }]), n
                }(n(59359).Z);
            t.Z = i
        },
        59359: function(e, t, n) {
            var r = n(39030),
                i = function() {
                    function e(t) {
                        var n = t.geometry,
                            i = t.material,
                            o = t.offset,
                            s = t.count;
                        (0, r._)(this, e), this.geometry = n, this.material = i, this.offset = o, this.count = s
                    }
                    return (0, r.b)(e, [{
                        key: "draw",
                        value: function(e) {}
                    }, {
                        key: "uniforms",
                        get: function() {
                            return this.material.uniforms
                        }
                    }, {
                        key: "program",
                        get: function() {
                            return this.material.program
                        },
                        set: function(e) {
                            this.material.program = e
                        }
                    }, {
                        key: "mode",
                        get: function() {
                            return this.material.mode
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this.material.options
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return this.geometry.attributes
                        }
                    }, {
                        key: "index",
                        get: function() {
                            return this.geometry.index
                        }
                    }]), e
                }();
            t.Z = i
        },
        2860: function(e, t, n) {
            var r = n(55886),
                i = n(70439),
                o = n(3205);
            t.Z = function(e) {
                var t = e.geometry,
                    n = e.vert,
                    s = e.frag,
                    a = e.precision,
                    c = e.program,
                    u = e.uniforms,
                    f = e.options,
                    h = e.mode,
                    l = e.material,
                    p = e.DrawInfoClass,
                    d = void 0 === p ? r.Z : p,
                    v = e.offset,
                    g = e.count,
                    y = e.primcount;
                return c = c || new o.Z({
                    vert: n,
                    frag: s,
                    precision: a
                }), new d({
                    geometry: t,
                    material: l = l || new i.Z({
                        program: c,
                        uniforms: u,
                        options: f,
                        mode: h
                    }),
                    offset: v,
                    count: g,
                    primcount: y
                })
            }
        },
        16619: function(e, t, n) {
            var r = n(39030);
            t.Z = function e() {
                (0, r._)(this, e), this.attributes = new Map, this.index = null
            }
        },
        457: function(e, t) {
            t.Z = function(e, t, n) {
                return n.name = t, e.attributes.set(t, n), n
            }
        },
        98440: function(e, t, n) {
            n.d(t, {
                Ae: function() {
                    return g
                },
                Bx: function() {
                    return s
                },
                GY: function() {
                    return _
                },
                Ln: function() {
                    return P
                },
                MB: function() {
                    return o
                },
                O6: function() {
                    return E
                },
                Oo: function() {
                    return O
                },
                QP: function() {
                    return d
                },
                RF: function() {
                    return m
                },
                Uc: function() {
                    return x
                },
                Uy: function() {
                    return S
                },
                VK: function() {
                    return h
                },
                VS: function() {
                    return f
                },
                Vi: function() {
                    return A
                },
                Xx: function() {
                    return R
                },
                bB: function() {
                    return y
                },
                bW: function() {
                    return p
                },
                cX: function() {
                    return i
                },
                fV: function() {
                    return L
                },
                fj: function() {
                    return l
                },
                gl: function() {
                    return T
                },
                h1: function() {
                    return C
                },
                jX: function() {
                    return a
                },
                lx: function() {
                    return w
                },
                mY: function() {
                    return u
                },
                qO: function() {
                    return r
                },
                qu: function() {
                    return j
                },
                r1: function() {
                    return b
                },
                t$: function() {
                    return c
                },
                tM: function() {
                    return k
                },
                wg: function() {
                    return v
                }
            });
            var r = 34962,
                i = 34963,
                o = 35044,
                s = 3553,
                a = 9728,
                c = 9729,
                u = 33071,
                f = 6408,
                h = 33984,
                l = 36160,
                p = 36161,
                d = 4,
                v = 5121,
                g = 5123,
                y = 5124,
                b = 5125,
                m = 5126,
                w = 35664,
                O = 35665,
                C = 35666,
                E = 35667,
                S = 35668,
                P = 35669,
                A = 35670,
                x = 35671,
                R = 35672,
                _ = 35673,
                k = 35674,
                T = 35675,
                L = 35676,
                j = 35678,
                Z = {
                    BLEND: 3042,
                    DEPTH_TEST: 2929,
                    STENCIL_TEST: 2960,
                    CULL_FACE: 2884,
                    ARRAY_BUFFER: r,
                    ELEMENT_ARRAY_BUFFER: i,
                    STATIC_DRAW: o,
                    DYNAMIC_DRAW: 35048,
                    ZERO: 0,
                    ONE: 1,
                    SRC_COLOR: 768,
                    ONE_MINUS_SRC_COLOR: 769,
                    SRC_ALPHA: 770,
                    ONE_MINUS_SRC_ALPHA: 771,
                    DST_ALPHA: 772,
                    ONE_MINUS_DST_ALPHA: 773,
                    DST_COLOR: 774,
                    ONE_MINUS_DST_COLOR: 775,
                    SRC_ALPHA_SATURATE: 776,
                    CONSTANT_COLOR: 32769,
                    ONE_MINUS_CONSTANT_COLOR: 32770,
                    CONSTANT_ALPHA: 32771,
                    ONE_MINUS_CONSTANT_ALPHA: 32772,
                    FUNC_ADD: 32774,
                    FUNC_SUBTRACT: 32774,
                    FUNC_REVERSE_SUBTRACT: 32774,
                    NEVER: 512,
                    ALWAYS: 519,
                    LESS: 513,
                    EQUAL: 514,
                    LEQUAL: 515,
                    GREATER: 516,
                    GEQUAL: 518,
                    NOTEQUAL: 517,
                    FRONT: 1028,
                    BACK: 1029,
                    FRONT_AND_BACK: 1032,
                    TEXTURE_2D: s,
                    NEAREST: a,
                    LINEAR: c,
                    NEAREST_MIPMAP_NEAREST: 9984,
                    LINEAR_MIPMAP_NEAREST: 9985,
                    NEAREST_MIPMAP_LINEAR: 9986,
                    LINEAR_MIPMAP_LINEAR: 9987,
                    CLAMP_TO_EDGE: u,
                    REPEAT: 10497,
                    MIRRORED_REPEAT: 33648,
                    RGB: 6407,
                    RGBA: f,
                    TEXTURE0: h,
                    FRAMEBUFFER: l,
                    RENDERBUFFER: p,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: d,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    BYTE: 5120,
                    UNSIGNED_BYTE: v,
                    SHORT: 5122,
                    UNSIGNED_SHORT: g,
                    INT: y,
                    UNSIGNED_INT: b,
                    FLOAT: m,
                    FLOAT_VEC2: w,
                    FLOAT_VEC3: O,
                    FLOAT_VEC4: C,
                    INT_VEC2: E,
                    INT_VEC3: S,
                    INT_VEC4: P,
                    BOOL: A,
                    BOOL_VEC2: x,
                    BOOL_VEC3: R,
                    BOOL_VEC4: _,
                    FLOAT_MAT2: k,
                    FLOAT_MAT3: T,
                    FLOAT_MAT4: L,
                    SAMPLER_2D: j,
                    SAMPLER_CUBE: 35680,
                    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
                    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                    MAX_TEXTURE_IMAGE_UNITS: 34930,
                    NONE: 0
                };
            t.ZP = Z
        },
        70439: function(e, t, n) {
            var r = n(39030),
                i = n(98440);
            t.Z = function e(t) {
                var n = t.program,
                    o = t.uniforms,
                    s = void 0 === o ? {} : o,
                    a = t.options,
                    c = void 0 === a ? {} : a,
                    u = t.mode,
                    f = void 0 === u ? i.QP : u;
                (0, r._)(this, e), this.program = n, this.uniforms = s, this.options = c, this.mode = f
            }
        },
        3205: function(e, t, n) {
            var r = n(39030);
            t.Z = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.vert,
                    i = t.frag,
                    o = t.precision;
                (0, r._)(this, e), this.vert = n, this.frag = i, this.precision = o
            }
        },
        65358: function(e, t) {
            t.Z = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    i = e.gl,
                    o = 0;
                t && (o |= i.COLOR_BUFFER_BIT), n && (o |= i.DEPTH_BUFFER_BIT), r && (o |= i.STENCIL_BUFFER_BIT), i.clear(o)
            }
        },
        52871: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = function(e, t) {
                var n = e.properties.get(t);
                n.glBuffer && (e.gl.deleteBuffer(n.glBuffer), delete n.glBuffer), e.properties.remove(t)
            };
            var i = function(e, t) {
                t.attributes.forEach((function(t) {
                    return r(e, t)
                })), t.index && r(e, t.index)
            }
        },
        35861: function(e, t) {
            t.Z = function(e, t) {
                var n = e.properties.get(t);
                n && (e.gl.deleteProgram(n.glProgram), e.properties.remove(t))
            }
        },
        98414: function(e, t) {
            t.Z = function(e, t) {
                var n = e.properties.get(t);
                n.glTexture && (e.gl.deleteTexture(n.glTexture), delete n.glTexture, e.properties.remove(t))
            }
        },
        40780: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return A
                }
            });
            var r = n(98440);
            var i = function(e, t, n) {
                var r = "buffer-".concat(t);
                e.get(r) !== n && (e.gl.bindBuffer(t, n), e.set(r, n))
            };
            var o = function(e, t, n) {
                var r = e.properties.get(n);
                return r.glBuffer || (r.glBuffer = e.gl.createBuffer(), n.needsUpdate = !0), i(e.state, t, r.glBuffer), n.needsUpdate && (e.gl.bufferData(t, n.array, n.usage), n.needsUpdate = !1), r.glBuffer
            };
            var s = function(e, t, n) {
                var i = [];
                return n.forEach((function(n, s) {
                    var a = t.attributes.get(s),
                        c = o(e, r.qO, a);
                    i[n(a, c)] = 1
                })), t.index && o(e, r.cX, t.index), i
            };
            var a = function(e, t, n) {
                var r = e.createShader(n);
                if (e.shaderSource(r, t), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw new Error("could not compile shader: ".concat(e.getShaderInfoLog(r)));
                return r
            };
            var c = function(e, t) {
                return "precision" !== e.substring(0, 9) ? "precision ".concat(t, " float;\n").concat(e) : e
            };
            var u = function(e, t) {
                    var n = e.gl,
                        r = n.createProgram(),
                        i = t.vert,
                        o = c(t.frag, t.precision || e.defaultPrecision),
                        s = a(n, i, n.VERTEX_SHADER),
                        u = a(n, o, n.FRAGMENT_SHADER);
                    if (n.attachShader(r, s), n.attachShader(r, u), n.linkProgram(r), !n.getProgramParameter(r, n.LINK_STATUS)) throw new Error("could not link shader: ".concat(n.getProgramInfoLog(r)));
                    return n.deleteShader(s), n.deleteShader(u), r
                },
                f = "enabledAttributes";
            var h = function(e, t) {
                e.get(f) || e.set(f, []);
                var n = e.get(f);
                1 !== n[t] && (e.gl.enableVertexAttribArray(t), n[t] = 1)
            };
            var l = function(e, t) {
                return function(n, o) {
                    return i(e.state, r.qO, o), h(e.state, t), e.gl.vertexAttribPointer(t, n.itemSize, n.type || r.RF, n.normalize || !1, n.stride || 0, n.offset || 0), e.gl.vertexAttribDivisor && e.gl.vertexAttribDivisor(t, n.divisor), t
                }
            };
            var p = function(e, t) {
                for (var n = new Map, r = e.gl, i = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES), o = 0; o < i; o++) {
                    var s = r.getActiveAttrib(t, o),
                        a = r.getAttribLocation(t, s.name);
                    n.set(s.name, l(e, a))
                }
                return n
            };

            function d(e) {
                switch (e) {
                    case r.RF:
                        return function(e, t, n) {
                            e.uniform1f(t, n)
                        };
                    case r.lx:
                        return function(e, t, n) {
                            e.uniform2f(t, n[0], n[1])
                        };
                    case r.Oo:
                        return function(e, t, n) {
                            e.uniform3f(t, n[0], n[1], n[2])
                        };
                    case r.h1:
                        return function(e, t, n) {
                            e.uniform4f(t, n[0], n[1], n[2], n[3])
                        };
                    case r.bB:
                    case r.Vi:
                    case r.qu:
                        return function(e, t, n) {
                            e.uniform1i(t, n)
                        };
                    case r.O6:
                    case r.Uc:
                        return function(e, t, n) {
                            e.uniform2i(t, n[0], n[1])
                        };
                    case r.Uy:
                    case r.Xx:
                        return function(e, t, n) {
                            e.uniform3i(t, n[0], n[1], n[2])
                        };
                    case r.Ln:
                    case r.GY:
                        return function(e, t, n) {
                            e.uniform4i(t, n[0], n[1], n[2], n[3])
                        };
                    case r.tM:
                        return function(e, t, n) {
                            e.uniformMatrix2fv(t, !1, n)
                        };
                    case r.gl:
                        return function(e, t, n) {
                            e.uniformMatrix3fv(t, !1, n)
                        };
                    case r.fV:
                        return function(e, t, n) {
                            e.uniformMatrix4fv(t, !1, n)
                        }
                }
            }

            function v(e) {
                switch (e) {
                    case r.RF:
                        return function(e, t, n) {
                            e.uniform1fv(t, n)
                        };
                    case r.lx:
                        return function(e, t, n) {
                            e.uniform2fv(t, n)
                        };
                    case r.Oo:
                        return function(e, t, n) {
                            e.uniform3fv(t, n)
                        };
                    case r.h1:
                        return function(e, t, n) {
                            e.uniform4fv(t, n)
                        };
                    case r.bB:
                    case r.Vi:
                    case r.qu:
                        return function(e, t, n) {
                            e.uniform1iv(t, n)
                        };
                    case r.O6:
                    case r.Uc:
                        return function(e, t, n) {
                            e.uniform2iv(t, n)
                        };
                    case r.Uy:
                    case r.Xx:
                        return function(e, t, n) {
                            e.uniform3iv(t, n)
                        };
                    case r.Ln:
                    case r.GY:
                        return function(e, t, n) {
                            e.uniform4iv(t, n)
                        }
                }
            }
            var g = function(e, t, n) {
                var r = e.getUniformLocation(t, n.name),
                    i = (1 === n.size ? d : v)(n.type);
                return function(t) {
                    i(e, r, t.call ? t() : t)
                }
            };
            var y = function(e, t) {
                    for (var n = new Map, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), i = 0; i < r; i++) {
                        var o = e.getActiveUniform(t, i),
                            s = o.name.replace(/\[.*?\]/, "");
                        n.set(s, g(e, t, o))
                    }
                    return n
                },
                b = n(39030),
                m = function e(t, n) {
                    (0, b._)(this, e), this.attributeSetters = t, this.uniformSetters = n
                };
            var w = function(e, t) {
                var n = p(e, t),
                    r = y(e.gl, t);
                return new m(n, r)
            };
            var O = function(e, t) {
                    var n = e.properties.get(t);
                    return n.glProgram || (n.glProgram = u(e, t), n.setters = w(e, n.glProgram)), n
                },
                C = "program";
            var E = function(e, t) {
                return e.get(C) !== t && (e.gl.useProgram(t), e.cache.set(C, t), !0)
            };
            var S = function(e, t) {
                e.forEach((function(e, n) {
                    e(t.get(n))
                }))
            };
            var P = function(e, t) {
                var n = e.get("enabledAttributes");
                0 !== n[t] && (e.gl.disableVertexAttribArray(t), n[t] = 0)
            };
            var A = function(e, t) {
                if (!0 !== e.isContextLost) {
                    var n = O(e, t.program),
                        r = n.glProgram,
                        i = n.setters;
                    E(e.state, r), e.onBeforeRender.dispatch(t);
                    var o = s(e, t, i.attributeSetters);
                    for (var a in e.state.get("enabledAttributes").forEach((function(t, n) {
                            o[n] || P(e.state, n)
                        })), t.uniforms) e.uniformValues.set(a, t.uniforms[a]);
                    S(i.uniformSetters, e.uniformValues), t.draw(e.gl)
                }
            }
        },
        88538: function(e, t) {
            t.Z = function(e, t, n) {
                e.uniformValues.set(t, n)
            }
        },
        24388: function(e, t, n) {
            var r = n(39030),
                i = n(83890),
                o = n(33026),
                s = "clearColor";
            t.Z = function(e, t) {
                var n, a = e.get(s) || [];
                (0, i.Z)(a, t) || ((n = e.gl).clearColor.apply(n, (0, r.a)(t)), e.cache.set(s, (0, o.Z)(t, a)))
            }
        },
        72979: function(e, t, n) {
            var r = n(83890),
                i = n(33026),
                o = "viewport",
                s = [];
            t.Z = function(e, t, n, a, c) {
                var u = e.get(o) || [];
                s[0] = t, s[1] = n, s[2] = a, s[3] = c, (0, r.Z)(u, s) || (e.gl.viewport(t, n, a, c), e.cache.set(o, (0, i.Z)(s, u)))
            }
        },
        33026: function(e, t) {
            t.Z = function(e, t) {
                for (var n = 0; n < e.length; n++) t[n] = e[n];
                return t.length = e.length, t
            }
        },
        4347: function(e, t) {
            t.Z = function(e, t) {
                var n = e.indexOf(t);
                return -1 !== n && e.splice(n, 1), t
            }
        },
        83890: function(e, t) {
            t.Z = function(e, t) {
                if (!e || !t) return !1;
                if (e === t) return !0;
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; ++n)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        },
        88130: function(e, t) {
            t.Z = void 0;
            var n = [],
                r = 0,
                i = !1,
                o = !1,
                s = !1,
                a = function() {
                    var e = !1;
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                e = {
                                    passive: !0
                                }
                            }
                        }))
                    } catch (e) {}
                    return e
                }(),
                c = {
                    scroll: function(e) {
                        o || (o = !0, requestAnimationFrame(this.executeCallbacks))
                    },
                    executeCallbacks: function() {
                        for (var e = 0; e < r; e += 1) n[e]();
                        o = !1
                    },
                    registerCallback: function(e) {
                        var t = n.indexOf(e);
                        !e || t > -1 || (n.push(e), r += 1)
                    },
                    removeCallback: function(e) {
                        if (e) {
                            var t = n.indexOf(e); - 1 !== t && (n.splice(t, 1), r -= 1)
                        }
                    },
                    bindMethods: function() {
                        i || (this.scroll = this.scroll.bind(this), i = !0)
                    },
                    trigger: function() {
                        this.scroll()
                    },
                    on: function(e) {
                        s || (s = !0, this.bindMethods(), window.addEventListener("scroll", this.scroll, a)), this.registerCallback(e)
                    },
                    off: function(e) {
                        this.removeCallback(e), r || (this.bindMethods(), s = !1, window.removeEventListener("scroll", this.scroll))
                    }
                };
            t.Z = c
        },
        38139: function(e, t, n) {
            n.d(t, {
                UI: function() {
                    return i
                },
                uZ: function() {
                    return r
                }
            });
            var r = function(e, t, n) {
                    return e < t ? t : e > n ? n : e
                },
                i = function(e, t, n, r, i) {
                    return (e - t) * (i - r) / (n - t) + r
                }
        },
        66953: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return W
                }
            });
            n(92338);
            var r = n(15671),
                i = n(43144),
                o = n(4942),
                s = n(6370),
                a = n(88130);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        f(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var g = v((function(e) {
                    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = t)
                })),
                y = v((function(e) {
                    var t = e.exports = {
                        version: "2.6.12"
                    };
                    "number" == typeof __e && (__e = t)
                })),
                b = (y.version, function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }),
                m = function(e) {
                    if (!b(e)) throw TypeError(e + " is not an object!");
                    return e
                },
                w = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                },
                O = !w((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })),
                C = g.document,
                E = b(C) && b(C.createElement),
                S = !O && !w((function() {
                    return 7 != Object.defineProperty((e = "div", E ? C.createElement(e) : {}), "a", {
                        get: function() {
                            return 7
                        }
                    }).a;
                    var e
                })),
                P = Object.defineProperty,
                A = {
                    f: O ? Object.defineProperty : function(e, t, n) {
                        if (m(e), t = function(e, t) {
                                if (!b(e)) return e;
                                var n, r;
                                if (t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                                if ("function" == typeof(n = e.valueOf) && !b(r = n.call(e))) return r;
                                if (!t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                                throw TypeError("Can't convert object to primitive value")
                            }(t, !0), m(n), S) try {
                            return P(e, t, n)
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (e[t] = n.value), e
                    }
                },
                x = O ? function(e, t, n) {
                    return A.f(e, t, function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                },
                R = {}.hasOwnProperty,
                _ = function(e, t) {
                    return R.call(e, t)
                },
                k = 0,
                T = Math.random(),
                L = v((function(e) {
                    var t = "__core-js_shared__",
                        n = g[t] || (g[t] = {});
                    (e.exports = function(e, t) {
                        return n[e] || (n[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: y.version,
                        mode: "global",
                        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                    })
                }))("native-function-to-string", Function.toString),
                j = v((function(e) {
                    var t, n = "Symbol(".concat(void 0 === (t = "src") ? "" : t, ")_", (++k + T).toString(36)),
                        r = "toString",
                        i = ("" + L).split(r);
                    y.inspectSource = function(e) {
                        return L.call(e)
                    }, (e.exports = function(e, t, r, o) {
                        var s = "function" == typeof r;
                        s && (_(r, "name") || x(r, "name", t)), e[t] !== r && (s && (_(r, n) || x(r, n, e[t] ? "" + e[t] : i.join(String(t)))), e === g ? e[t] = r : o ? e[t] ? e[t] = r : x(e, t, r) : (delete e[t], x(e, t, r)))
                    })(Function.prototype, r, (function() {
                        return "function" == typeof this && this[n] || L.call(this)
                    }))
                })),
                Z = function(e, t, n) {
                    if (function(e) {
                            if ("function" != typeof e) throw TypeError(e + " is not a function!")
                        }(e), void 0 === t) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                I = function(e, t, n) {
                    var r, i, o, s, a = e & I.F,
                        c = e & I.G,
                        u = e & I.S,
                        f = e & I.P,
                        h = e & I.B,
                        l = c ? g : u ? g[t] || (g[t] = {}) : (g[t] || {}).prototype,
                        p = c ? y : y[t] || (y[t] = {}),
                        d = p.prototype || (p.prototype = {});
                    for (r in c && (n = t), n) o = ((i = !a && l && void 0 !== l[r]) ? l : n)[r], s = h && i ? Z(o, g) : f && "function" == typeof o ? Z(Function.call, o) : o, l && j(l, r, o, e & I.U), p[r] != o && x(p, r, s), f && d[r] != o && (d[r] = o)
                };
            g.core = y, I.F = 1, I.G = 2, I.S = 4, I.P = 8, I.B = 16, I.W = 32, I.U = 64, I.R = 128;
            var M = I;
            M(M.S + M.F * !O, "Object", {
                defineProperty: A.f
            });
            var D = function() {},
                N = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                }), !0),
                F = !!("ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch),
                U = function(e) {
                    var t = e,
                        n = 0;
                    do {
                        n = t.offsetTop + n
                    } while (t = t.offsetParent);
                    return n
                },
                B = function() {
                    function e(t, n) {
                        var r = this;
                        c(this, e), f(this, "onResize", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.shouldSkipUpdate,
                                n = void 0 !== t && t,
                                i = r.props.scrollEvents;
                            r.computePositionData(), r.pos.offsetTop = U(r.node), r.pos.offsetBottom = document.body.scrollHeight - r.pos.offsetTop - r.pos.clientHeight, !i || N && n || r.onUpdate(!0)
                        })), f(this, "onScroll", (function() {
                            r.onUpdate(!F)
                        })), f(this, "onIntersect", (function(e) {
                            var t = p(e, 1)[0].isIntersecting;
                            (0, r.props.onIntersection)(t), r.onUpdate(), t ? a.Z.on(r.onScroll) : a.Z.off(r.onScroll)
                        })), f(this, "destroy", (function() {
                            r.unbindListeners()
                        })), this.props = l(l({}, this.constructor.defaultProps), n), this.node = t, this.observer = {
                            intersection: null
                        };
                        var i = window.pageYOffset;
                        this.pos = {
                            scrollTop: i,
                            top: 0,
                            bottom: 0,
                            progress: 0,
                            intersectionProgress: 0,
                            windowHeight: 0,
                            clientHeight: 0,
                            offsetTop: 0,
                            offsetBottom: 0,
                            initial: this.getNodePositionData(this.node, i),
                            isIntersecting: !1
                        }
                    }
                    var t, n, r;
                    return t = e, n = [{
                        key: "start",
                        value: function() {
                            this.bindListeners()
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            if (s.Z.on(this.onResize), this.onResize({
                                    shouldSkipUpdate: !0
                                }), N) return this.observer.intersection = new IntersectionObserver(this.onIntersect, {
                                rootMargin: "0px 0px 0px 0px"
                            }), void this.observer.intersection.observe(this.node);
                            this.onUpdate(!0), a.Z.on(this.onScroll)
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            this.observer.intersection && this.observer.intersection.unobserve(this.node), s.Z.off(this.onResize), a.Z.off(this.onScroll)
                        }
                    }, {
                        key: "onUpdate",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.props,
                                n = t.scrollEvents,
                                r = t.normalize;
                            e ? this.pos.scrollTop = window.pageYOffset : this.computePositionData();
                            var i = this.props,
                                o = i.onIntersection,
                                s = i.onUpdate,
                                a = this.pos,
                                c = a.clientHeight,
                                u = a.windowHeight,
                                f = a.initial;
                            this.pos.top = f.top - this.pos.scrollTop, this.pos.bottom = f.bottom - this.pos.scrollTop - u;
                            var h = r ? Math.min(this.pos.offsetTop, u) : u,
                                l = r ? Math.min(this.pos.offsetBottom, u) : u,
                                p = -this.pos.top + h,
                                d = h + c + l - u,
                                v = 1 - (this.pos.top + c) / (u + c),
                                g = p === d ? 1 : (-this.pos.top + h) / (h + c + l - u);
                            this.pos.progress = g < 0 ? 0 : g > 1 ? 1 : g, this.pos.intersectionProgress = v < 0 ? 0 : v > 1 ? 1 : v, N || (this.pos.intersectionProgress > 0 && this.pos.intersectionProgress < 1 ? this.pos.isIntersecting || (this.pos.isIntersecting = !0, o(this.pos.isIntersecting), this.onResize()) : this.pos.isIntersecting && (this.pos.isIntersecting = !1, o(this.pos.isIntersecting))), n && s(this.pos)
                        }
                    }, {
                        key: "computePositionData",
                        value: function() {
                            this.pos.windowHeight = window.innerHeight, this.pos.clientHeight = this.node.clientHeight, this.pos.scrollTop = window.pageYOffset, this.pos.initial = this.getNodePositionData(this.node, this.pos.scrollTop)
                        }
                    }, {
                        key: "getNodePositionData",
                        value: function(e, t) {
                            var n = e.getBoundingClientRect(),
                                r = n.top,
                                i = n.right,
                                o = n.bottom,
                                s = n.left;
                            return {
                                top: Math.round(r) + t,
                                right: i,
                                bottom: Math.round(o) + t,
                                left: s
                            }
                        }
                    }], n && u(t.prototype, n), r && u(t, r), e
                }();
            f(B, "defaultProps", {
                scrollEvents: !0,
                onIntersection: D,
                onUpdate: D
            });
            var z = function e(t, n) {
                var r = this;
                c(this, e), f(this, "onIntersection", (function(e) {
                    var t = r.props.onIntersection;
                    r.state.isIntersecting = e, t(e)
                })), f(this, "onUpdate", (function(e) {
                    var t = e.progress;
                    r.onProgress(t)
                })), f(this, "onProgress", (function(e) {
                    var t = r.props.onProgress;
                    r.state.progress !== e && (r.state.progress = e, t(r.state.progress))
                })), f(this, "destroy", (function() {
                    r.intersection.destroy()
                })), this.props = l(l({}, this.constructor.defaultProps), n);
                var i = this.props.normalize;
                if (t) {
                    var o = this.props,
                        s = o.progressEvents,
                        a = o.onProgress;
                    this.state = {
                        normalize: i,
                        progressEvents: s && a,
                        progress: -1,
                        isIntersecting: !1
                    }, this.intersection = new B(t, {
                        normalize: i,
                        scrollEvents: this.state.progressEvents,
                        onIntersection: this.onIntersection,
                        onUpdate: this.onUpdate
                    }), this.intersection.start()
                } else console.error("Error: No valid HTMLElement node was supplied!")
            };
            f(z, "defaultProps", {
                progressEvents: !0,
                normalize: !0,
                onIntersection: D,
                onProgress: null
            });
            var H = z;

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var W = function() {
                function e(t, n, i) {
                    var s = this,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    (0, r.Z)(this, e), (0, o.Z)(this, "isPaused", !1), (0, o.Z)(this, "isIntersecting", !1), (0, o.Z)(this, "onIntersection", (function(e) {
                        s.isIntersecting = e, s.updatePlayState(), s.instance.onIntersection && s.instance.onIntersection(e), s.isIntersecting && s.isPaused && s.instance.renderFrame()
                    })), (0, o.Z)(this, "setPaused", (function(e) {
                        s.isPaused = e, s.updatePlayState()
                    })), (0, o.Z)(this, "togglePaused", (function() {
                        s.setPaused(!s.isPaused)
                    })), (0, o.Z)(this, "onResize", (function() {
                        s.instance.refresh()
                    })), this.instance = new t(n, i), this.node = n, this.options = V(V({}, e.defaultOptions), a), !0 === this.options.reduceMotion && (this.isPaused = !0), this.bindListeners()
                }
                return (0, i.Z)(e, [{
                    key: "bindListeners",
                    value: function() {
                        this.intersectionScroll = new H(this.node, {
                            onIntersection: this.onIntersection,
                            onProgress: this.instance.onScrollProgress,
                            normalize: this.options.normalizeScroll,
                            windowRef: this.options.scrollWindowRef
                        }), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.node)
                    }
                }, {
                    key: "unbindListeners",
                    value: function() {
                        this.intersectionScroll.destroy(), this.resizeObserver.disconnect()
                    }
                }, {
                    key: "detach",
                    value: function() {
                        this.unbindListeners(), this.instance.detach(), this.node = null
                    }
                }, {
                    key: "attach",
                    value: function(e) {
                        this.node = e, this.bindListeners(), this.instance.attach(e)
                    }
                }, {
                    key: "updatePlayState",
                    value: function() {
                        !this.isIntersecting || this.isPaused ? this.instance.stop() : this.instance.start()
                    }
                }, {
                    key: "setProps",
                    value: function(e) {
                        this.instance.setProps(e)
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        this.instance.refresh()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.unbindListeners(), this.instance.destroy()
                    }
                }, {
                    key: "props",
                    get: function() {
                        return this.instance.props
                    }
                }, {
                    key: "autoUpdate",
                    get: function() {
                        return this.instance.autoUpdate
                    }
                }, {
                    key: "isSupported",
                    get: function() {
                        return this.instance.isSupported
                    }
                }]), e
            }();
            (0, o.Z)(W, "defaultOptions", {
                scrollWindowRef: window,
                normalizeScroll: !0,
                reduceMotion: !1
            })
        },
        83027: function(e, t) {
            var n = !0;
            try {
                var r = document.createElement("canvas"),
                    i = {
                        failIfMajorPerformanceCaveat: !0
                    };
                r.getContext("webgl", i) || r.getContext("experimental-webgl", i) || (n = !1)
            } catch (e) {
                n = !1
            }
            t.Z = n
        },
        25079: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return $
                }
            });
            n(92338);
            var r = n(15671),
                i = n(43144),
                o = n(4942),
                s = n(83027),
                a = function() {
                    function e(t) {
                        var n = this;
                        (0, r.Z)(this, e), (0, o.Z)(this, "ticking", !1), (0, o.Z)(this, "raf", -1), (0, o.Z)(this, "tick", (function(e) {
                            n.raf = requestAnimationFrame(n.tick), n.callback(e)
                        })), this.callback = t
                    }
                    return (0, i.Z)(e, [{
                        key: "start",
                        value: function() {
                            this.ticking || (this.raf = requestAnimationFrame(this.tick), this.ticking = !0)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.ticking && (cancelAnimationFrame(this.raf), this.ticking = !1)
                        }
                    }]), e
                }(),
                c = n(39030),
                u = n(4347),
                f = function() {
                    function e() {
                        (0, c._)(this, e), this.listeners = []
                    }
                    return (0, c.b)(e, [{
                        key: "add",
                        value: function(e) {
                            this.listeners.push(e)
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            (0, u.Z)(this.listeners, e)
                        }
                    }, {
                        key: "dispatch",
                        value: function() {
                            var e = arguments;
                            this.listeners.forEach((function(t) {
                                t.apply(void 0, (0, c.a)(e))
                            }))
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            this.listeners.length = 0
                        }
                    }]), e
                }(),
                h = f,
                l = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map, n.enabledCapabilities = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onDispose.remove(n.dispose), n.cache.clear(), n.enabledCapabilities.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            return this.cache.get(e)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            this.cache.set(e, t)
                        }
                    }, {
                        key: "enable",
                        value: function(e) {
                            this.enabledCapabilities.get(e) || (this.enabledCapabilities.set(e, !0), this.gl.enable(e))
                        }
                    }, {
                        key: "disable",
                        value: function(e) {
                            this.enabledCapabilities.get(e) && (this.enabledCapabilities.set(e, !1), this.gl.disable(e))
                        }
                    }, {
                        key: "gl",
                        get: function() {
                            return this.renderer.gl
                        }
                    }]), e
                }();
            (0, c.e)(l, "NAME", "state");
            var p = l,
                d = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onDispose.remove(n.dispose), n.cache.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.cache.get(e);
                            return t || (t = {}, this.cache.set(e, t)), t
                        }
                    }, {
                        key: "update",
                        value: function(e, t, n) {
                            this.cache.get(e)[t] = n
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            this.cache.delete(e)
                        }
                    }]), e
                }();
            (0, c.e)(d, "NAME", "properties");
            var v = d,
                g = function(e) {
                    return e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0 ? "highp" : e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                },
                y = function() {
                    function e(t) {
                        var n = this,
                            r = t.canvas,
                            i = t.alpha,
                            o = void 0 !== i && i,
                            s = t.antialias,
                            a = void 0 !== s && s,
                            u = t.depth,
                            f = void 0 !== u && u,
                            h = t.stencil,
                            l = void 0 !== h && h,
                            p = t.premultipliedAlpha,
                            d = void 0 !== p && p,
                            v = t.preserveDrawingBuffer,
                            g = void 0 !== v && v,
                            y = t.failIfMajorPerformanceCaveat,
                            b = void 0 !== y && y,
                            m = t.pixelRatio,
                            w = void 0 === m ? 1 : m,
                            O = t.plugins,
                            C = void 0 === O ? [] : O,
                            E = t.onContextCreate,
                            S = t.onContextLoss;
                        (0, c._)(this, e), (0, c.e)(this, "uniformValues", new Map), (0, c.e)(this, "viewport", [0, 0, 2, 2]), (0, c.e)(this, "handleContextLost", (function(e) {
                            n.isContextLost = !0, n.onContextLoss.dispatch(), e.preventDefault()
                        })), (0, c.e)(this, "handleContextRestored", (function() {
                            n.isContextLost = !1, n.createContext()
                        })), this.contextAttributes = {
                            alpha: o,
                            antialias: a,
                            depth: f,
                            stencil: l,
                            premultipliedAlpha: d,
                            preserveDrawingBuffer: g,
                            failIfMajorPerformanceCaveat: b
                        }, this.canvas = r, this.pixelRatio = w, this.isContextLost = !1, this.initSignals(), this.initPlugins(C), E && this.onContextCreate.add(E), S && this.onContextLoss.add(S), this.createContext()
                    }
                    return (0, c.b)(e, [{
                        key: "initPlugins",
                        value: function(t) {
                            var n = this;
                            [].concat((0, c.a)(e.corePlugins), (0, c.a)(t)).forEach((function(e) {
                                n[e.NAME] = new e(n)
                            }))
                        }
                    }, {
                        key: "initSignals",
                        value: function() {
                            this.onContextCreate = new h, this.onContextLoss = new h, this.onBeforeRender = new h, this.onDispose = new h
                        }
                    }, {
                        key: "createContext",
                        value: function() {
                            if (this.gl = this.canvas.getContext("webgl", this.contextAttributes) || this.canvas.getContext("experimental-webgl", this.contextAttributes), !this.gl) throw this.isContextLost = !0, new Error("Error creating WebGL context");
                            this.canvas.addEventListener("webglcontextlost", this.handleContextLost), this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored), this.defaultPrecision = g(this.gl), this.onContextCreate.dispatch(this)
                        }
                    }]), e
                }();
            (0, c.e)(y, "corePlugins", [p, v]);
            var b = y,
                m = n(72979);
            var w = function(e, t, n, r, i) {
                    e.viewport[0] = t, e.viewport[1] = n, e.viewport[2] = r, e.viewport[3] = i, m.Z.apply(void 0, [e.state].concat((0, c.a)(e.viewport)))
                },
                O = n(24388),
                C = n(65358),
                E = n(88538);
            var S = function(e, t, n) {
                !0 !== e.isContextLost && (t = t || e.canvas.clientWidth * e.pixelRatio, n = n || e.canvas.clientHeight * e.pixelRatio, e.canvas.width = t, e.canvas.height = n, w(e, 0, 0, t, n))
            };
            var P = function(e) {
                var t = e.gl;
                e.properties.cache.forEach((function(e) {
                    Object.values(e).forEach((function(n) {
                        switch (n.constructor.name) {
                            case "WebGLFramebuffer":
                                t.deleteFramebuffer(n);
                                break;
                            case "WebGLRenderbuffer":
                                t.deleteRenderbuffer(n);
                                break;
                            case "WebGLTexture":
                                t.deleteTexture(n);
                                break;
                            case "WebGLBuffer":
                                t.deleteBuffer(n);
                                break;
                            case "WebGLProgram":
                                t.deleteProgram(n)
                        }
                        delete e[n]
                    }))
                })), e.properties.cache.clear()
            };
            var A = function(e) {
                    P(e), e.onDispose.dispatch(), e.uniformValues.clear(), e.onContextCreate.dispose(), e.onContextLoss.dispose(), e.onBeforeRender.dispose(), e.onDispose.dispose(), e.canvas.removeEventListener("webglcontextlost", e.handleContextLost), e.canvas.removeEventListener("webglcontextrestored", e.handleContextRestored), e.canvas = null, e.gl = null
                },
                x = n(38139),
                R = n(98414),
                _ = n(35861),
                k = n(52871),
                T = function() {
                    function e(t) {
                        var n = t.renderer,
                            i = t.instance,
                            s = t.disposeMethod;
                        (0, r.Z)(this, e), (0, o.Z)(this, "usageCount", 0), this.renderer = n, this.instance = i, this.disposeMethod = s
                    }
                    return (0, i.Z)(e, [{
                        key: "dispose",
                        value: function() {
                            this.disposeMethod(this.renderer, this.instance)
                        }
                    }]), e
                }(),
                L = function() {
                    function e(t) {
                        (0, r.Z)(this, e), (0, o.Z)(this, "resources", new Map), this.renderer = t
                    }
                    return (0, i.Z)(e, [{
                        key: "getResource",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory,
                                r = e.disposeMethod,
                                i = this.resources.get(t);
                            return i || (i = new T({
                                renderer: this.renderer,
                                instance: n(),
                                disposeMethod: r
                            }), this.resources.set(t, i)), i.usageCount++, i.instance
                        }
                    }, {
                        key: "getTexture",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: R.Z
                            })
                        }
                    }, {
                        key: "getProgram",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: _.Z
                            })
                        }
                    }, {
                        key: "getGeometry",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: k.Z
                            })
                        }
                    }, {
                        key: "releaseResource",
                        value: function(e) {
                            var t = this.resources.get(e);
                            t && 0 == --t.usageCount && (t.dispose(), this.resources.delete(e))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.resources.clear(), this.renderer = null
                        }
                    }]), e
                }();

            function j(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Z(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        a = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var M = [1, .79, .62, .5, .4, .31, .25],
                D = function() {
                    function e(t) {
                        var n = t.attributes,
                            i = t.plugins;
                        (0, r.Z)(this, e), (0, o.Z)(this, "width", 0), (0, o.Z)(this, "height", 0), (0, o.Z)(this, "rendererWidth", 0), (0, o.Z)(this, "rendererHeight", 0), (0, o.Z)(this, "scaleStep", 0), (0, o.Z)(this, "maxStep", 3), (0, o.Z)(this, "avgFrameDuration", 50), (0, o.Z)(this, "isWebGLSupported", !0), (0, o.Z)(this, "content", []), (0, o.Z)(this, "multipleActiveContent", !1), (0, o.Z)(this, "renderedLastFrame", !1), (0, o.Z)(this, "viewport", []), s.Z ? (this.webglCanvas = document.createElement("canvas"), Object.assign(this.webglCanvas.style, {
                            position: "absolute",
                            left: 0,
                            top: 0
                        }), this.renderer = new b(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? I(Object(n), !0).forEach((function(t) {
                                    (0, o.Z)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            canvas: this.webglCanvas,
                            plugins: i
                        }, n)), this.resourceCache = new L(this.renderer)) : this.isWebGLSupported = !1
                    }
                    return (0, i.Z)(e, [{
                        key: "register",
                        value: function(e) {
                            e.updateSize();
                            var t = Math.ceil(e.width * e.pixelRatio * M[this.scaleStep]),
                                n = Math.ceil(e.height * e.pixelRatio * M[this.scaleStep]);
                            e.setContextSize(t, n), this.content.push(e)
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            var t = this.content.indexOf(e); - 1 !== t && (this.content.splice(t, 1), e.removeCanvas())
                        }
                    }, {
                        key: "tick",
                        value: function(e, t) {
                            var n = this;
                            this.renderedLastFrame && (this.updateScaleStep(t), this.renderedLastFrame = !1), this.countActiveScenes(), this.updateRendererSize(), 0 !== this.rendererWidth && 0 !== this.rendererHeight && this.content.forEach((function(r) {
                                (r.needsForceRender || r.isActive) && (r.update(e, t), r.autoUpdate && (r.isDirty = !0), n.renderContent(r))
                            }))
                        }
                    }, {
                        key: "updateScaleStep",
                        value: function(e) {
                            var t = this.scaleStep;
                            this.avgFrameDuration += (0, x.uZ)(.2 * (e - this.avgFrameDuration), -5, 5), this.avgFrameDuration > 60 ? ++this.scaleStep : this.avgFrameDuration < 40 && this.scaleStep > 0 && --this.scaleStep, this.scaleStep = Math.min(this.scaleStep, this.maxStep), t !== this.scaleStep && (this.avgFrameDuration = 50)
                        }
                    }, {
                        key: "countActiveScenes",
                        value: function() {
                            var e, t, n = 0,
                                r = j(this.content);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value;
                                    (i.isActive || i.needsForceRender) && n++, i.node === this.webglCanvas.parentElement && (e = i)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var o = n > 1;
                            if (e) {
                                var s = o && !this.multipleActiveContent,
                                    a = !e.isActive;
                                if (s || a) {
                                    var c = this.getScaledContentSize(e),
                                        u = c.width,
                                        f = c.height;
                                    this.copyPixels(e, u, f), e.removeCanvas(), e.show()
                                }
                            }
                            this.multipleActiveContent = o
                        }
                    }, {
                        key: "updateRendererSize",
                        value: function() {
                            var e, t = 0,
                                n = 0,
                                r = 0,
                                i = 0,
                                o = M[this.scaleStep],
                                s = j(this.content);
                            try {
                                for (s.s(); !(e = s.n()).done;) {
                                    var a = e.value;
                                    t = Math.max(t, a.width), n = Math.max(n, a.height), r = Math.max(r, Math.ceil(a.width * a.pixelRatio * o)), i = Math.max(i, Math.ceil(a.height * a.pixelRatio * o))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            r === this.rendererWidth && i === this.rendererHeight || (this.width = t, this.height = n, this.resizeRenderer(r, i))
                        }
                    }, {
                        key: "renderContent",
                        value: function(e) {
                            var t = e.clearColor,
                                n = e.isActive,
                                r = e.isDirty;
                            if (e.needsForceRender || n && r) {
                                var i = this.getScaledContentSize(e),
                                    o = i.width,
                                    s = i.height;
                                w(this.renderer, 0, this.rendererHeight - s, o, s), (0, O.Z)(this.renderer.state, t), (0, C.Z)(this.renderer), e.setContextSize(o, s), this.updateViewport(e, o, s), e.render(), this.multipleActiveContent ? (this.copyPixels(e, o, s), e.show()) : (this.resizeWebGLCanvasForContent(e), e.appendCanvas(this.webglCanvas), e.hide()), e.isDirty = !1, e.needsForceRender = !1, this.renderedLastFrame = !0
                            }
                        }
                    }, {
                        key: "updateViewport",
                        value: function(e, t, n) {
                            this.viewport[0] = 0, this.viewport[1] = this.rendererHeight - n, this.viewport[2] = e.canvas.width, this.viewport[3] = e.canvas.height, (0, E.Z)(this.renderer, "uViewport", this.viewport)
                        }
                    }, {
                        key: "copyPixels",
                        value: function(e, t, n) {
                            var r = e.context,
                                i = e.canvas.width,
                                o = e.canvas.height;
                            r && 0 !== t && 0 !== n && 0 !== i && 0 !== o && (r.clearRect(0, 0, i, o), r.drawImage(this.webglCanvas, 0, 0, t, n, 0, 0, i, o))
                        }
                    }, {
                        key: "getScaledContentSize",
                        value: function(e) {
                            return {
                                width: Math.ceil(e.width * e.pixelRatio * M[this.scaleStep]),
                                height: Math.ceil(e.height * e.pixelRatio * M[this.scaleStep])
                            }
                        }
                    }, {
                        key: "resizeRenderer",
                        value: function(e, t) {
                            this.rendererWidth = e, this.rendererHeight = t, S(this.renderer, this.rendererWidth, this.rendererHeight)
                        }
                    }, {
                        key: "resizeWebGLCanvasForContent",
                        value: function(e) {
                            var t = e.pixelRatio * M[this.scaleStep];
                            this.webglCanvas.style.width = Math.ceil(this.rendererWidth / t) + "px", this.webglCanvas.style.height = Math.ceil(this.rendererHeight / t) + "px"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.renderer && (A(this.renderer), this.resourceCache.destroy(), this.renderer = null)
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return 0 === this.content.length
                        }
                    }, {
                        key: "isContextLost",
                        value: function() {
                            return this.renderer.gl.isContextLost()
                        }
                    }]), e
                }(),
                N = "undefined" != typeof window ? window : {};
            N.__sqsWebGL || (N.__sqsWebGL = {
                initialized: !1,
                ticker: null,
                controllerPool: [],
                controllers: [],
                contentCount: 0,
                sharedController: null,
                dedicatedControllers: [],
                dedicatedControllerPool: [],
                dedicatedContextLimit: 3
            });
            var F = N.__sqsWebGL,
                U = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onContextCreate.remove(n.handleContextCreate), n.renderer.onDispose.remove(n.dispose), n.cache.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.cache.get(e);
                            if (!t) {
                                if (!(t = this.renderer.gl.getExtension(e))) throw new Error("WebGLExtensions: ".concat(e, " extension not supported."));
                                this.cache.set(e, t)
                            }
                            return t
                        }
                    }]), e
                }();
            (0, c.e)(U, "NAME", "extensions");
            var B = U,
                z = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "nextTextureUnit", 1), (0, c.e)(this, "reset", (function() {
                            n.nextTextureUnit = 1
                        })), this.renderer = t, this.renderer.onBeforeRender.add(this.reset), this.textureBindings = new WeakMap
                    }
                    return (0, c.b)(e, [{
                        key: "dispose",
                        value: function() {
                            this.renderer.onBeforeRender.remove(this.reset), this.renderer = null
                        }
                    }]), e
                }();
            (0, c.e)(z, "NAME", "textures");
            var H = {
                    plugins: [B, z],
                    attributes: {
                        alpha: !0,
                        antialias: !0,
                        depth: !0,
                        stencil: !1,
                        premultipliedAlpha: !0,
                        preserveDrawingBuffer: !0,
                        failIfMajorPerformanceCaveat: !0
                    }
                },
                G = {
                    contextLimit: 4
                },
                V = G;

            function W(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function X() {
                F.ticker.stop(), F.initialized = !1
            }
            var Y = function(e) {
                    var t, n = function(e) {
                            return void 0 !== e.controllers || (e.controllers = [], e.controllerPool = [], e.contentCount = 0), e
                        }(F),
                        r = n.initialized,
                        i = n.controllers,
                        s = n.controllerPool,
                        c = n.contentCount,
                        u = V.contextLimit;
                    r || (t = performance.now(), F.ticker = new a((function(e) {
                        var n = e - t;
                        t = e, F.controllers.forEach((function(t) {
                            t.tick(e, n)
                        }))
                    })), F.ticker.start(), F.initialized = !0);
                    var f = i[c % u];
                    return f || ((f = s.pop()) && !f.isContextLost() || (f = new D(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? W(Object(n), !0).forEach((function(t) {
                                (0, o.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, H))), i.push(f)), f.register(e), F.contentCount++, f
                },
                q = function(e) {
                    var t = F.controllers,
                        n = F.controllerPool,
                        r = t.find((function(t) {
                            return t.content.find((function(t) {
                                return e === t
                            }))
                        }));
                    r && (r.unregister(e), F.contentCount--, r.isEmpty() && (t.splice(t.indexOf(r), 1), n.push(r)), t.every((function(e) {
                        return e.isEmpty()
                    })) && X())
                };

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var $ = function() {
                function e(t, n) {
                    var i = this;
                    (0, r.Z)(this, e), (0, o.Z)(this, "width", 0), (0, o.Z)(this, "height", 0), (0, o.Z)(this, "contextWidth", 0), (0, o.Z)(this, "contextHeight", 0), (0, o.Z)(this, "isActive", !1), (0, o.Z)(this, "isSupported", !0), (0, o.Z)(this, "autoUpdate", !0), (0, o.Z)(this, "isDirty", !0), (0, o.Z)(this, "needsForceRender", !1), (0, o.Z)(this, "clearColor", [1, 1, 1, 1]), (0, o.Z)(this, "resourceKeys", []), (0, o.Z)(this, "appendedCanvas", null), (0, o.Z)(this, "start", (function() {
                        return !i.isSupported || i.isActive || (i.isActive = !0), i
                    })), (0, o.Z)(this, "stop", (function() {
                        return i.isSupported && i.isActive ? (i.isActive = !1, i) : i
                    })), (0, o.Z)(this, "refresh", (function() {
                        if (i.isSupported) return i.updateSize(), i.onRefresh(), i
                    })), this.node = t, this.props = Q(Q(Q({}, e.defaultProps), this.constructor.defaultProps), n), this.isSupported = s.Z, this.isSupported && (this.node.style.overflow = "hidden", this.clearNode(), this.createCanvas(), this.renderController = Y(this), this.renderer = this.renderController.renderer, this.resourceCache = this.renderController.resourceCache, this.updateSize())
                }
                return (0, i.Z)(e, [{
                    key: "createCanvas",
                    value: function() {
                        this.canvas = document.createElement("canvas"), Object.assign(this.canvas.style, {
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), this.node.appendChild(this.canvas)
                    }
                }, {
                    key: "setProps",
                    value: function(e) {
                        if (!this.isSupported) return this;
                        var t = Q({}, this.props);
                        return this.props = Q(Q({}, this.props), e), this.onUpdateProps(t), this.needsForceRender = !0, this
                    }
                }, {
                    key: "onUpdateProps",
                    value: function(e) {}
                }, {
                    key: "detach",
                    value: function() {
                        this.isSupported && (this.node.removeChild(this.canvas), this.appendedCanvas && this.appendedCanvas.parentElement === this.node && this.node.removeChild(this.appendedCanvas), this.onDetach(), this.node = null)
                    }
                }, {
                    key: "onDetach",
                    value: function() {}
                }, {
                    key: "attach",
                    value: function(e) {
                        this.isSupported && this.canvas && (this.node = e, this.clearNode(), this.node.appendChild(this.canvas), this.appendedCanvas && this.node.appendChild(this.appendedCanvas), this.onAttach())
                    }
                }, {
                    key: "onAttach",
                    value: function() {}
                }, {
                    key: "updateSize",
                    value: function() {
                        var e = this.node.getBoundingClientRect(),
                            t = e.width,
                            n = e.height;
                        t === this.width && n === this.height || (this.width = t, this.height = n, this.needsForceRender = !0)
                    }
                }, {
                    key: "setContextSize",
                    value: function(e, t) {
                        this.contextWidth === e && this.contextHeight === t || (this.contextWidth = e, this.contextHeight = t, this.canvas.width = this.contextWidth, this.canvas.height = this.contextHeight)
                    }
                }, {
                    key: "onRefresh",
                    value: function() {}
                }, {
                    key: "update",
                    value: function(e) {}
                }, {
                    key: "render",
                    value: function() {}
                }, {
                    key: "renderFrame",
                    value: function() {
                        if (this.isSupported) return this.needsForceRender = !0, this.canvas
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.isSupported && this.renderController) return !1 === t && q(this), this.renderController = null, this.resourceKeys.forEach((function(t) {
                            e.resourceCache.releaseResource(t)
                        })), this.clearNode(), this.onDestroy(), this
                    }
                }, {
                    key: "clearNode",
                    value: function() {
                        this.node && (this.node.innerHTML = "")
                    }
                }, {
                    key: "onDestroy",
                    value: function() {}
                }, {
                    key: "getTexture",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getTexture({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "getProgram",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getProgram({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "getGeometry",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getGeometry({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "releaseResource",
                    value: function(e) {
                        var t = this.resourceKeys.indexOf(e); - 1 !== t && (this.resourceKeys.splice(t, 1), this.resourceCache.releaseResource(e))
                    }
                }, {
                    key: "appendCanvas",
                    value: function(e) {
                        e.parentElement !== this.node && (this.node.appendChild(e), this.appendedCanvas = e)
                    }
                }, {
                    key: "removeCanvas",
                    value: function() {
                        this.appendedCanvas && this.appendedCanvas.parentElement === this.node && (this.node.removeChild(this.appendedCanvas), this.appendedCanvas = null)
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.canvas.style.display = "block"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.canvas.style.display = "none"
                    }
                }, {
                    key: "pixelRatio",
                    get: function() {
                        return this.props.pixelRatio || 1
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.canvas.getContext("2d")
                    }
                }]), e
            }();
            (0, o.Z)($, "defaultProps", {
                pixelRatio: 1
            })
        },
        97326: function(e, t, n) {
            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        15671: function(e, t, n) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        43144: function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        4942: function(e, t, n) {
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        61120: function(e, t, n) {
            function r(e) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, r(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        60136: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(89611);

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && (0, r.Z)(e, t)
            }
        },
        6215: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(97326);

            function o(e, t) {
                if (t && ("object" === r(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, i.Z)(e)
            }
        },
        89611: function(e, t, n) {
            function r(e, t) {
                return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, r(e, t)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);