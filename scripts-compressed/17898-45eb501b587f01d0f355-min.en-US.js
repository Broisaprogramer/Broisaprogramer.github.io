"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [17898], {
        187752: function(G, h, f) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return I
                }
            });
            var b = d(f(165412));

            function r(m, g, t) {
                return g in m ? Object.defineProperty(m, g, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : m[g] = t, m
            }

            function d(m) {
                return m && m.__esModule ? m : {
                    default: m
                }
            }
            var c, O = (c = {}, r(c, b.default.LEFT, -1), r(c, b.default.RIGHT, 1), c),
                I = O
        },
        727841: function(G, h, f) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return U
                }
            });
            var b = f(419467),
                r = l(f(708380)),
                d = l(f(749189)),
                c = l(f(165412)),
                O = l(f(187752)),
                I = l(f(801994)),
                m = l(f(749258)),
                g = l(f(134535)),
                t = l(f(734618));

            function i(n, a) {
                (a == null || a > n.length) && (a = n.length);
                for (var o = 0, p = new Array(a); o < a; o++) p[o] = n[o];
                return p
            }

            function s(n) {
                if (Array.isArray(n)) return i(n)
            }

            function u(n, a) {
                if (!(n instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function v(n, a, o) {
                return a in n ? Object.defineProperty(n, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[a] = o, n
            }

            function l(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function C(n) {
                if (typeof Symbol != "undefined" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n)
            }

            function H() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function S(n) {
                for (var a = 1; a < arguments.length; a++) {
                    var o = arguments[a] != null ? arguments[a] : {},
                        p = Object.keys(o);
                    typeof Object.getOwnPropertySymbols == "function" && (p = p.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(o, e).enumerable
                    }))), p.forEach(function(e) {
                        v(n, e, o[e])
                    })
                }
                return n
            }

            function k(n) {
                return s(n) || C(n) || A(n) || H()
            }

            function A(n, a) {
                if (n) {
                    if (typeof n == "string") return i(n, a);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set") return Array.from(o);
                    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return i(n, a)
                }
            }
            var _ = window.matchMedia("(prefers-reduced-motion: reduce)"),
                F = function() {
                    return _.matches
                },
                U = function() {
                    "use strict";

                    function n(o, p) {
                        var e = this;
                        u(this, n), this.defaultAnimationProps = {
                            waveFrequency: 1,
                            waveIntensity: 0,
                            animationDirection: c.default.LEFT,
                            animationSpeed: 1,
                            pausedOnHover: !1
                        }, this.info = {
                            pathLength: 0
                        }, this.prevRegionWidth = -1, this.prevTextHeight = -1, this.uniforms = {
                            hover: {
                                value: 1
                            }
                        }, this.intersectionScroll = null, this.resizeObserver = null, this.rAFID = null, this.render = function() {
                            var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                x = w.isForce,
                                M = x === void 0 ? !1 : x;
                            if (e.node) {
                                var L = e.props,
                                    B = L.waveIntensity,
                                    J = L.waveFrequency,
                                    W = (0, I.default)(250, 1e3, (0, b.clamp)(J * .1, 0, 1)),
                                    q = Math.max(e.node.clientWidth, 50),
                                    j = e.ref.measurementContainer.clientWidth,
                                    V = e.ref.originGroupItemNodes.map(function(Q) {
                                        var N = Q.clientWidth,
                                            z = window.getComputedStyle(Q),
                                            Y = parseFloat(z.marginRight) || 0;
                                        return {
                                            width: N,
                                            spacing: Y
                                        }
                                    }),
                                    D = e.ref.firstMeasuredItemNode.clientHeight,
                                    T = D * .1;
                                (q !== e.prevRegionWidth || D !== e.prevTextHeight || M) && e.redrawPath({
                                    regionWidth: q,
                                    waveFrequencyWidth: W,
                                    textHeight: D,
                                    transformYOffset: T
                                }), e.prevRegionWidth = q, e.prevTextHeight = D, e.wave.onResize({
                                    measuredItems: V,
                                    measuredWidth: Math.max(j, 50),
                                    pathLength: e.info.pathLength,
                                    regionWidth: q,
                                    padding: W
                                }), e.ref.svg.style.height = "".concat(D + B, "px"), e.ref.svg.style.transform = "translateY(".concat(T, "px)"), e.ref.svg.style.overflow = "visible", e.ref.pathHitboxFocusOutline.style.transform = "translateY(".concat(T, "px)")
                            }
                        }, this.rerender = function() {
                            e.debouncedRerender = (0, b.debounce)(e.render, 1e3), e.debouncedRerender()
                        }, this.handleMediaQueryListChange = function(w) {
                            var x = w.matches;
                            x ? e.stop() : e.start()
                        }, this.onIntersection = function(w) {
                            if (w && !F()) {
                                e.isImmediate = !0, e.start();
                                return
                            }
                            e.stop()
                        }, this.onPointerEnter = function() {
                            e.ref.pathHitbox.dataset.hover = !0, e.uniforms.hover.value = 0
                        }, this.onPointerLeave = function() {
                            e.ref.pathHitbox.dataset.hover = !1, e.uniforms.hover.value = 1
                        }, this.tick = function() {
                            e.onTick(), e.rAFID = requestAnimationFrame(e.tick)
                        }, this.destroy = function() {
                            var w, x;
                            e.unbindListeners(), e.stop(), e.wave.destroy(), (w = e.debouncedRerender) === null || w === void 0 || (x = w.cancel) === null || x === void 0 || x.call(w), delete e.node
                        }, this.node = o, this.Y = p, this.ref = (0, m.default)(this.node);
                        var R = this.node.closest(".sqs-block-marquee").id.replace("block-", "");
                        (0, g.default)(R, this.ref), this.props = S({}, this.defaultAnimationProps, JSON.parse(this.ref.props.textContent)), this.ref.wrapper.dataset.ready = !0;
                        var P = this.props,
                            y = P.animationDirection,
                            E = P.animationSpeed;
                        this.wave = new t.default({
                            container: this.ref.textPath,
                            animationDirection: y,
                            originGroupItemNodes: this.ref.originGroupItemNodes,
                            path: this.ref.path,
                            sharedUniforms: this.uniforms,
                            animationSpeed: O.default[y] * E,
                            svgGroupItemNodes: this.ref.svgGroupItemNodes,
                            trackContainer: this.ref.trackContainer
                        }), this.render(), this.bindListeners()
                    }
                    var a = n.prototype;
                    return a.redrawPath = function() {
                        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                            e = p.regionWidth,
                            R = e === void 0 ? 100 : e,
                            P = p.textHeight,
                            y = P === void 0 ? 10 : P,
                            E = p.transformYOffset,
                            w = E === void 0 ? 0 : E,
                            x = p.waveFrequencyWidth,
                            M = x === void 0 ? 0 : x,
                            L = this.props.waveIntensity,
                            B = M * .333,
                            J = Math.ceil((R + M * 2) / M) + 1,
                            W = -M,
                            q = y * .662,
                            j = function() {
                                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                                return k(Array(J).keys()).reduce(function(Q, N) {
                                    var z = W + N * M,
                                        Y = T + (N % 2 === 0 ? 0 : L);
                                    return Q + (N === 0 ? " L".concat(z, ",").concat(Y) : " S".concat(z - B, ",").concat(Y, " ").concat(z, ",").concat(Y))
                                }, "")
                            },
                            V = "M".concat(W, ",").concat(q, " ").concat(j(q)),
                            D = "\n      M".concat(W, ",").concat(L + y, "\n      ").concat(j(y - w), "\n      M").concat(W, ",").concat(Math.max(L, w), "\n      ").concat(j(w), "\n    ");
                        this.ref.path.setAttribute("d", V), this.ref.pathGroup.setAttribute("transform", "translate(0, ".concat(y * .05, ")")), this.ref.pathHitbox.setAttribute("d", V), this.ref.pathHitbox.setAttribute("stroke-width", y), this.ref.pathHitboxFocusOutline.setAttribute("d", D), this.ref.pathHitboxGroup.setAttribute("transform", "translate(0, ".concat(-q + q * .75, ")")), this.info.pathLength = this.ref.path.getTotalLength(), this.lerps = this.buildLerps(3)
                    }, a.buildLerps = function() {
                        var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3,
                            e = this,
                            R = Math.ceil(this.info.pathLength / p) + 1;
                        return k(Array(R).keys()).reduce(function(P, y) {
                            var E = y * p,
                                w = e.ref.path.getPointAtLength(E);
                            if (P.points[y] = w, P.index[y] = E, P.x[y] = w.x, P.y[y] = w.y, y > 0) {
                                var x = y - 1,
                                    M = P.points[x],
                                    L = P.points[y];
                                P.rotation[x] = Math.atan2(L.y - M.y, L.x - M.x) * 180 / Math.PI, y === R - 1 && (P.rotation[y] = P.rotation[x])
                            }
                            return P
                        }, {
                            index: [],
                            points: [],
                            x: [],
                            y: [],
                            rotation: []
                        })
                    }, a.onTick = function() {
                        this.wave.tick(this.lerps)
                    }, a.bindListeners = function() {
                        var p = this;
                        r.default.on(this.render, 0), this.resizeObserver = new ResizeObserver(this.render), this.resizeObserver.observe(this.ref.measurementContainer), _ != null && _.addEventListener ? _.addEventListener("change", this.handleMediaQueryListChange) : _.addListener(this.handleMediaQueryListChange), this.intersectionScroll = new d.default(this.node, {
                            onIntersection: this.onIntersection,
                            normalize: !1
                        }), this.ref.hitbox && this.props.pausedOnHover && (this.ref.hitbox.addEventListener("mouseenter", this.onPointerEnter), this.ref.hitbox.addEventListener("touchstart", this.onPointerEnter), this.ref.hitbox.addEventListener(["touchend", "touchcancel"], this.onPointerLeave), this.ref.hitbox.addEventListener(["mouseleave"], this.onPointerLeave)), this.tweakListener = this.Y.Global.on("tweak:change", this.rerender), document.fonts.ready.then(function() {
                            p.rerender()
                        })
                    }, a.unbindListeners = function() {
                        var p, e;
                        r.default.off(this.render, 0), this.resizeObserver.disconnect(), _ != null && _.removeEventListener ? _.removeEventListener("change", this.handleMediaQueryListChange) : _.removeListener(this.handleMediaQueryListChange), (p = this.intersectionScroll) === null || p === void 0 || p.destroy(), this.ref.hitbox && this.props.pausedOnHover && (this.ref.hitbox.removeEventListener("mouseenter", this.onPointerEnter), this.ref.hitbox.removeEventListener("touchstart", this.onPointerEnter), this.ref.hitbox.removeEventListener(["touchend", "touchcancel"], this.onPointerLeave), this.ref.hitbox.removeEventListener(["mouseleave"], this.onPointerLeave)), (e = this.tweakListener) === null || e === void 0 || e.detach()
                    }, a.start = function() {
                        this.rAFID = requestAnimationFrame(this.tick)
                    }, a.stop = function() {
                        cancelAnimationFrame(this.rAFID)
                    }, a.restart = function() {
                        this.stop(), this.start()
                    }, n
                }()
        },
        734618: function(G, h, f) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var b = c(f(537120));

            function r(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, i, s) {
                return i in t ? Object.defineProperty(t, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = s, t
            }

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function O(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var s = arguments[i] != null ? arguments[i] : {},
                        u = Object.keys(s);
                    typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(s).filter(function(v) {
                        return Object.getOwnPropertyDescriptor(s, v).enumerable
                    }))), u.forEach(function(v) {
                        d(t, v, s[v])
                    })
                }
                return t
            }

            function I(t, i) {
                var s = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(t);
                    i && (u = u.filter(function(v) {
                        return Object.getOwnPropertyDescriptor(t, v).enumerable
                    })), s.push.apply(s, u)
                }
                return s
            }

            function m(t, i) {
                return i = i != null ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach(function(s) {
                    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s))
                }), t
            }
            var g = function() {
                "use strict";

                function t(s) {
                    r(this, t), this.waveGroups = [], this.info = {
                        pathLength: 0,
                        padding: 0,
                        measuredWidth: 0,
                        numGroups: 0
                    }, this.props = s, this.uniforms = m(O({}, this.props.sharedUniforms), {
                        progress: {
                            value: 0
                        }
                    })
                }
                var i = t.prototype;
                return i.onResize = function(u) {
                    var v = u.measuredItems,
                        l = u.measuredWidth,
                        C = u.padding,
                        H = u.pathLength,
                        S = this.props,
                        k = S.path,
                        A = S.trackContainer,
                        _ = S.container,
                        F = S.originGroupItemNodes,
                        U = S.svgGroupItemNodes,
                        n = Math.ceil((H + l) / l) * l,
                        a = Math.ceil(n / l);
                    for (this.info.measuredWidth = l, this.info.pathLength = H, this.info.padding = C, k.setAttribute("stroke-dasharray", this.getStrokeDashArray(v)); this.info.numGroups < a && _.childElementCount / F.length < a;) {
                        this.info.numGroups += 1;
                        var o = new b.default({
                            container: _,
                            domContainer: A,
                            originGroupItemNodes: F,
                            path: k,
                            svgGroupItemNodes: U
                        });
                        this.waveGroups.push(o)
                    }
                    this.positionGroups(v)
                }, i.getStrokeDashArray = function(u) {
                    return u.reduce(function(v, l) {
                        return v + "".concat(l.width, " ").concat(l.spacing, " ")
                    }, "")
                }, i.positionGroups = function(u) {
                    var v = 0;
                    this.waveGroups.forEach(function(l) {
                        v = l.positionItems({
                            x: v,
                            measuredItems: u
                        })
                    })
                }, i.tick = function(u) {
                    var v = this,
                        l, C = this.props,
                        H = C.container,
                        S = C.path,
                        k = C.animationSpeed,
                        A = this.info.measuredWidth;
                    this.uniforms.progress.value -= k * this.uniforms.hover.value;
                    var _ = ((A + this.uniforms.progress.value) % A + A) % A;
                    H.setAttribute("startOffset", -_), S.setAttribute("stroke-dashoffset", _), (l = this.waveGroups) === null || l === void 0 || l.forEach(function(F) {
                        return F.updateItemVisibility(_, v.info.pathLength, v.info.padding)
                    })
                }, i.destroy = function() {
                    var u;
                    (u = this.waveGroups) === null || u === void 0 || u.forEach(function(v) {
                        return v.destroy()
                    }), this.waveGroups = null
                }, t
            }();
            g.defaultProps = {
                animationDirection: "left",
                animationSpeed: -1,
                container: null,
                originGroupItemNodes: [],
                path: null,
                sharedUniforms: {
                    hover: {
                        value: 0
                    }
                },
                svgGroupItemNodes: [],
                trackContainer: null
            }
        },
        537120: function(G, h) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });

            function f(r, d) {
                if (!(r instanceof d)) throw new TypeError("Cannot call a class as a function")
            }
            var b = function() {
                "use strict";

                function r(c) {
                    f(this, r), this.info = {
                        numItems: 0
                    }, this.props = c, this.items = this.getItems(), this.info.numItems = this.items.length
                }
                var d = r.prototype;
                return d.getItems = function() {
                    var O = this.props,
                        I = O.container,
                        m = O.svgGroupItemNodes;
                    return m.reduce(function(g, t) {
                        var i = t.cloneNode(!0),
                            s = {
                                x: 0,
                                width: 0,
                                node: i,
                                domNode: null,
                                isOffscreen: !1
                            };
                        return g.push(s), I.appendChild(i), g
                    }, [])
                }, d.positionItems = function() {
                    for (var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, I = O.x, m = O.measuredItems, g = I, t = 0; t < this.info.numItems; t += 1) {
                        var i = this.items[t],
                            s = m[t],
                            u = s.width + s.spacing;
                        i.x = g, i.width = u, i.node.setAttribute("x", i.x), g += u
                    }
                    return g
                }, d.updateItemVisibility = function(O, I, m) {
                    for (var g = 0; g < this.info.numItems; g += 1) {
                        var t = this.items[g],
                            i = t.x - O > I - m || t.x + t.width - O < m;
                        t.isOffscreen !== i && (t.node.style.display = i ? "none" : "block"), t.isOffscreen = i
                    }
                }, d.destroy = function() {
                    this.items = [], this.info.numItems = 0
                }, r
            }();
            b.defaultProps = {
                container: null,
                domContainer: null,
                originGroupItemNodes: [],
                path: null,
                svgGroupItemNodes: []
            }
        },
        749258: function(G, h) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var f = function(r) {
                    return {
                        wrapper: r.querySelector(".Marquee"),
                        display: r.querySelector(".Marquee-display"),
                        props: r.querySelector(".Marquee-props"),
                        measurementContainer: r.querySelector(".Marquee-measure"),
                        firstMeasuredItemNode: r.querySelector(".Marquee-measure h1, .Marquee-measure p"),
                        originGroupItemNodes: Array.from(r.querySelectorAll(".Marquee-measure .Marquee-item")),
                        trackContainer: r.querySelector(".Marquee-track"),
                        svg: r.querySelector(".Marquee-svg"),
                        svgGroup: r.querySelector(".Marquee-svg-group"),
                        svgGroupItemNodes: Array.from(r.querySelectorAll(".Marquee-svg-group > *")),
                        path: r.querySelector(".Marquee-path"),
                        pathGroup: r.querySelector(".Marquee-path-group"),
                        hitbox: r.querySelector("[data-hitbox]"),
                        pathHitbox: r.querySelector(".Marquee-path-hitbox"),
                        pathHitboxFocusOutline: r.querySelector(".Marquee-path-hitbox-focus-outline"),
                        pathHitboxGroup: r.querySelector(".Marquee-path-hitbox-group"),
                        textPath: r.querySelector(".Marquee-svg-text"),
                        visuallyHiddenTextContent: r.querySelector(".v6-visually-hidden")
                    }
                },
                b = f
        },
        817898: function(G, h, f) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            var b = r(f(727841));

            function r(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            var d = function(c, O) {
                return new b.default(c, O)
            }
        },
        801994: function(G, h) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var f = function(r, d, c) {
                    return r * (1 - c) + d * c
                },
                b = f
        },
        134535: function(G, h) {
            Object.defineProperty(h, "__esModule", {
                value: !0
            }), Object.defineProperty(h, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            var f = function(r, d) {
                    d.path.setAttribute("id", r), d.pathHitbox.setAttribute("id", r), d.textPath.setAttribute("href", "#" + r), d.svgGroup.setAttribute("href", "#" + r), d.visuallyHiddenTextContent.setAttribute("id", "ariaLabel" + r), d.hitbox.setAttribute("aria-labelledby", "ariaLabel" + r)
                },
                b = f
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/0b0a5e0392c0473ddf52cc775e167c8e/17898-45eb501b587f01d0f355-min.en-US.js.map