"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [8049], {
        93829: function(t, n, e) {
            e.r(n);
            e(92338);
            var r = e(57048);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function c(t, n) {
                return c = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                }, c(t, n)
            }

            function u(t) {
                var n = function() {
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
                    var e, r = i(t);
                    if (n) {
                        var o = i(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return f(this, e)
                }
            }

            function f(t, n) {
                return !n || "object" !== o(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function i(t) {
                return i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, i(t)
            }
            var a = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && c(t, n)
                }(e, t);
                var n = u(e);

                function e(t) {
                    return function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n.call(this, t, r.Z)
                }
                return e
            }(e(64581).Z);
            n.default = function(t) {
                return new a(t)
            }
        },
        48335: function(t, n, e) {
            e.r(n);
            e(92338);
            var r = e(57048);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function c(t, n) {
                return c = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                }, c(t, n)
            }

            function u(t) {
                var n = function() {
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
                    var e, r = i(t);
                    if (n) {
                        var o = i(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return f(this, e)
                }
            }

            function f(t, n) {
                return !n || "object" !== o(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function i(t) {
                return i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, i(t)
            }
            var a = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && c(t, n)
                }(e, t);
                var n = u(e);

                function e(t) {
                    return function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n.call(this, t, r.Z)
                }
                return e
            }(e(46325).Z);
            n.default = function(t) {
                return new a(t)
            }
        }
    }
]);