"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [8167], {
        88167: function(e, t, n) {
            n.r(t);
            n(92338);
            var r = n(76746),
                o = n.n(r),
                i = n(91033),
                u = n(11500),
                c = n(36871),
                s = n.n(c);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, c = e[Symbol.iterator](); !(r = (u = c.next()).done) && (n.push(u.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t, n) {
                return h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = g(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(n) : o.value
                    }
                }, h(e, t, n || e)
            }

            function b(e, t) {
                return b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, b(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, g(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && b(e, t)
                }(a, e);
                var t, n, r, c = y(a);

                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), m(v(t = c.call(this, e)), "onFirstSectionChange", (function() {
                        t.updateNeighborSections(), t.onFirstSectionThemeChange()
                    })), m(v(t), "getFirstSection", (function() {
                        return f(t.getPageSections(), 1)[0]
                    })), m(v(t), "getFirstSectionId", (function() {
                        var e = t.getFirstSection();
                        if (e) return e.getAttribute("data-section-id")
                    })), m(v(t), "getFirstSectionTheme", (function() {
                        var e = t.getFirstSection();
                        return t.props.themesClasses.find((function(t) {
                            return e && e.classList.contains(t)
                        }))
                    })), m(v(t), "isFirstSectionInset", (function() {
                        var e = t.getFirstSection();
                        return e && e.classList.contains("background-width--inset")
                    })), m(v(t), "onFirstSectionThemeChange", (function() {
                        if ("true" === o().getValue("tweak-transparent-header")) {
                            if (t.isFirstSectionInset()) return void t.updateHeaderTheme();
                            t.updateHeaderTheme(t.getFirstSectionTheme())
                        }
                    })), t.editorEvents = [{
                        event: "section:first:change",
                        handler: t.onFirstSectionChange
                    }], t.bindEditorListeners(), t.destroy = t.destroy.bind(v(t)), t
                }
                return t = a, (n = [{
                    key: "bindEditorListeners",
                    value: function() {
                        var e = this;
                        o().watch(this.tweaks, this.updateNeighborSections), "complete" === document.readyState ? this.bindGlobalEvents(this.editorEvents) : (this.onWindowLoadGlobalHandler = function() {
                            return e.bindGlobalEvents(e.editorEvents)
                        }, window.addEventListener("load", this.onWindowLoadGlobalHandler)), this.resizeObserver = new i.Z((function(t) {
                            var n = t[0].contentRect.height;
                            e.onResize(n)
                        })), this.resizeObserver.observe(this.node)
                    }
                }, {
                    key: "unbindEditorListeners",
                    value: function() {
                        this.unbindGlobalEvents(this.editorEvents), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
                    }
                }, {
                    key: "sectionWillChange",
                    value: function(e, t) {
                        if (this.node.dataset.menuOverlayTheme = t.menuOverlayTheme, (0, u.O)(this.ref.menu, s(), t.menuOverlayTheme), window.Y && window.Y.Global) {
                            var n = this.node.getBoundingClientRect().height;
                            window.Y.Global.fire("headerHeight", {
                                headerHeight: n
                            })
                        }
                        return this.updateNeighborSections(), !1
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        h(g(a.prototype), "destroy", this).call(this), this.unbindEditorListeners()
                    }
                }]) && d(t.prototype, n), r && d(t, r), a
            }(n(42295).h);
            t.default = function(e) {
                return new w(e)
            }
        }
    }
]);