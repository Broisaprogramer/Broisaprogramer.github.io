(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [14758], {
        14758: function(O, X, i) {
            "use strict";
            i.d(X, {
                Z: function() {
                    return Ce
                }
            });
            var Ue = i(392338),
                Y = i(346797),
                m = i.n(Y),
                G = i(987195),
                g = i.n(G),
                Q = i(432405),
                U = i.n(Q),
                l = i(174161),
                k = i(795478),
                n = i.n(k),
                T = i(528538),
                C = i(420055),
                w = i(845076),
                Z = i.n(w),
                q = i(723589),
                N = i(907629),
                _ = i(74001),
                ee = i.n(_),
                te = i(340756),
                ne = ["className", "dataField", "htmlAttributes", "onMouseEnter", "children"],
                ae = function(e) {
                    var r = e.className,
                        t = e.dataField,
                        s = e.htmlAttributes,
                        o = e.onMouseEnter,
                        d = e.children,
                        u = U()(e, ne),
                        c = l.useContext(te.W);
                    return l.createElement(N.Z, g()({}, u, (0, q.Z)(u), s, {
                        className: Z()(ee().container, r),
                        "data-field": t,
                        onMouseEnter: o,
                        sx: {
                            margin: c ? 0 : void 0
                        }
                    }), d)
                },
                re = ae,
                ie = i(858240),
                j = i.n(ie),
                se = i(4636),
                x = i.n(se),
                oe = i(699467),
                E = i.n(oe),
                le = i(506051),
                v = i.n(le),
                ue = i(177928),
                ce = i.n(ue),
                me = i(721854),
                S = i.n(me),
                de = i(103372),
                pe = i.n(de),
                fe = i(988548),
                ve = i(153146);

            function ye(a, e, r) {
                return e = v()(e), E()(a, R() ? Reflect.construct(e, r || [], v()(a).constructor) : e.apply(a, r))
            }

            function R() {
                try {
                    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (R = function() {
                    return !!a
                })()
            }
            var b = function(a) {
                S()(e, a);

                function e() {
                    return j()(this, e), ye(this, e, arguments)
                }
                return x()(e, [{
                    key: "getFormattedTime",
                    value: function() {
                        var t = this.props,
                            s = t.DateUtil,
                            o = t.unixValue;
                        return s.isValidTime(o) ? s.getFormattedTime(o) : ""
                    }
                }, {
                    key: "renderSlider",
                    value: function(t) {
                        var s = this.props,
                            o = s.DateUtil,
                            d = s.isDisabled,
                            u = s.onChange,
                            c = s.unixTimeStep,
                            p = s.unixValue,
                            f = o.isValidTime(p) ? p : o.getStartOf(void 0, "day"),
                            y = o.getStartOf(f, "day"),
                            h = o.getEndOf(f, "day") - c + 1;
                        return l.createElement(ve.Slider, g()({}, t, {
                            isDisabled: d,
                            max: h,
                            min: y,
                            onChange: u,
                            step: c,
                            value: f
                        }))
                    }
                }]), e
            }(l.Component);
            m()(b, "propTypes", {
                DateUtil: n().object.isRequired,
                isDisabled: n().bool.isRequired,
                onChange: n().func.isRequired,
                timeLabel: n().string.isRequired,
                unixTimeStep: n().number.isRequired,
                unixValue: n().number
            }), m()(b, "defaultProps", {
                unixTimeStep: 1
            });
            var he = i(715837),
                M = i.n(he);

            function V(a, e) {
                var r = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(a);
                    e && (t = t.filter(function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })), r.push.apply(r, t)
                }
                return r
            }

            function Te(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {};
                    e % 2 ? V(Object(r), !0).forEach(function(t) {
                        m()(a, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function(t) {
                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return a
            }

            function Oe(a, e, r) {
                return e = v()(e), E()(a, A() ? Reflect.construct(e, r || [], v()(a).constructor) : e.apply(a, r))
            }

            function A() {
                try {
                    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (A = function() {
                    return !!a
                })()
            }
            var I = function(a) {
                S()(e, a);

                function e() {
                    return j()(this, e), Oe(this, e, arguments)
                }
                return x()(e, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            s = t.isDisabled,
                            o = t.timeLabel;
                        return l.createElement("div", {
                            className: M().container
                        }, l.createElement("div", {
                            className: Z()(M().display, m()({}, M().displayDisabled, s))
                        }, l.createElement("span", null, o), l.createElement("time", {
                            "data-test": "time-text"
                        }, this.getFormattedTime())), this.renderSlider({
                            ariaLabel: o
                        }))
                    }
                }]), e
            }(b);
            m()(I, "propTypes", Te({}, b.propTypes));
            var D = i(725773);

            function L(a, e) {
                var r = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(a);
                    e && (t = t.filter(function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })), r.push.apply(r, t)
                }
                return r
            }

            function P(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {};
                    e % 2 ? L(Object(r), !0).forEach(function(t) {
                        m()(a, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function(t) {
                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return a
            }

            function ge(a, e, r) {
                return e = v()(e), E()(a, B() ? Reflect.construct(e, r || [], v()(a).constructor) : e.apply(a, r))
            }

            function B() {
                try {
                    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (B = function() {
                    return !!a
                })()
            }
            var be = {
                    ISO_8601: "iso-8601",
                    UNIX_TIMESTAMP: "unix-timestamp"
                },
                F = function(a) {
                    S()(e, a);

                    function e() {
                        var r;
                        j()(this, e);
                        for (var t = arguments.length, s = new Array(t), o = 0; o < t; o++) s[o] = arguments[o];
                        return r = ge(this, e, [].concat(s)), m()(ce()(r), "handleTimeChange", function(d) {
                            var u = r.props,
                                c = u.DateUtil,
                                p = u.onChange,
                                f = u.valueType,
                                y = f === be.ISO_8601 ? c.getISOString(d) : d;
                            y !== r.props.value && p(y)
                        }), r
                    }
                    return x()(e, [{
                        key: "render",
                        value: function() {
                            var t = this.props,
                                s = t.boundaryMessages,
                                o = t.DateUtil,
                                d = t.disable,
                                u = t.errors,
                                c = t.fromMonth,
                                p = t.hideOutsideDays,
                                f = t.isDateDisabled,
                                y = t.locale,
                                h = t.mode,
                                je = t.onChange,
                                J = t.timeLabel,
                                K = t.timeStep,
                                xe = t.timeZone,
                                Ee = t.toMonth,
                                H = t.unixSelectedDateFrom,
                                Se = t.unixValue,
                                Me = t.value,
                                Fe = t.valueType;
                            return (0, C.a1)('DateTimeField from @sqs/core-components has been deprecated. Please use "Date Picker with a Time Input Cell", available as a pattern in Rosetta.https://design-platform.squarespace.net/develop/patterns/components/cells/TimeInput/?story=with-a-datepicker'), l.createElement(l.Fragment, null, h === "datetime" || h === "date" ? l.createElement(N.Z, {
                                pl: "5px",
                                pr: "5px"
                            }, l.createElement(T.Z, {
                                boundaryMessages: s,
                                disable: d,
                                errors: u,
                                fromMonth: c,
                                hideOutsideDays: p,
                                locale: y,
                                mode: T.Z.MODE.DATE,
                                onChange: je,
                                timeLabel: J,
                                timeStep: K,
                                timeZone: xe,
                                toMonth: Ee,
                                value: Me,
                                valueType: Fe
                            })) : null, h === "datetime" || h === "time" ? l.createElement(I, {
                                DateUtil: o,
                                isDisabled: pe()(H) ? !0 : f(H),
                                onChange: this.handleTimeChange,
                                timeLabel: J,
                                unixTimeStep: K * 1e3 * 60,
                                unixValue: Se[0]
                            }) : null)
                        }
                    }]), e
                }(D.Z);
            m()(F, "propTypes", P(P({}, D.Z.propTypes), {}, {
                boundaryMessages: n().shape({
                    before: n().oneOfType([n().string, n().element]),
                    after: n().oneOfType([n().string, n().element])
                }),
                disable: n().oneOfType([n().object, n().arrayOf(n().object)]),
                fromMonth: n().oneOfType([n().number, n().string]),
                hideOutsideDays: n().bool,
                isValueUTC: n().bool,
                locale: n().string,
                mode: n().oneOf(["date", "time", "datetime"]),
                timeLabel: n().string,
                timeStep: n().number,
                toMonth: n().oneOfType([n().number, n().string]),
                value: n().oneOfType([n().number, n().string]),
                valueType: n().oneOf(["iso-8601", "unix-timestamp"])
            })), m()(F, "defaultProps", P(P({}, D.Z.defaultProps), {}, {
                boundaryMessages: {},
                disable: [],
                hideOutsideDays: !1,
                isValueUTC: !1,
                mode: "datetime",
                timeLabel: (0, fe.t)("Time", {}, {
                    project: "core-components"
                }),
                timeStep: 30,
                valueType: "unix-timestamp"
            }));
            var De = function(a) {
                    var e = l.useContext(T.Z.DateUtilContext);
                    return l.createElement(F, g()({
                        DateUtil: e
                    }, T.Z.useUnixValues(a.value, a.fromMonth, a.toMonth, a.disable), a))
                },
                Pe = ["className", "dataField", "htmlAttributes", "isValueUTC", "onMouseEnter", "timeZone"];

            function W(a, e) {
                var r = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(a);
                    e && (t = t.filter(function(s) {
                        return Object.getOwnPropertyDescriptor(a, s).enumerable
                    })), r.push.apply(r, t)
                }
                return r
            }

            function $(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e] != null ? arguments[e] : {};
                    e % 2 ? W(Object(r), !0).forEach(function(t) {
                        m()(a, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(t) {
                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return a
            }
            var z = function(e) {
                var r = e.className,
                    t = e.dataField,
                    s = e.htmlAttributes,
                    o = e.isValueUTC,
                    d = e.onMouseEnter,
                    u = e.timeZone,
                    c = U()(e, Pe);
                (0, C.a1)('\n      DateTimeField is deprecated. Please use the "Date Picker with a Time Input Cell" pattern.\n      https://design-platform.squarespace.net/develop/patterns/components/cells/TimeInput/?story=with-a-datepicker\n    ');
                var p = u;
                return o && ((0, C.a1)('DateTimePicker prop "isValueUTC" is deprecated. Please use the prop timeZone="Etc/UTC" instead.'), p = "Etc/UTC"), l.createElement(re, {
                    className: r,
                    dataField: t,
                    htmlAttributes: s,
                    onMouseEnter: d
                }, l.createElement(T.Z.DateUtilProvider, {
                    locale: c.locale,
                    timeZone: p
                }, l.createElement(De, g()({}, c, {
                    timeZone: p
                }))))
            };
            z.propTypes = $($({}, D.Z.propTypes), {}, {
                boundaryMessages: n().shape({
                    before: n().oneOfType([n().string, n().element]),
                    after: n().oneOfType([n().string, n().element])
                }),
                disable: n().oneOfType([n().object, n().arrayOf(n().object)]),
                fromMonth: n().oneOfType([n().number, n().string]),
                hideOutsideDays: n().bool,
                isValueUTC: n().bool,
                locale: n().string,
                mode: n().oneOf(["date", "time", "datetime"]),
                timeLabel: n().string,
                timeStep: n().number,
                toMonth: n().oneOfType([n().number, n().string]),
                value: n().oneOfType([n().number, n().string]),
                valueType: n().oneOf(["iso-8601", "unix-timestamp"])
            });
            var Ce = z
        },
        74001: function(O) {
            O.exports = {
                container: "voxMSOarhHWX8Ef9O4VJ"
            }
        },
        715837: function(O) {
            O.exports = {
                container: "iHNGIhCCcQTWpsP5ghsf",
                display: "ldxAsgaMvJIOs3MU7CLE",
                displayDisabled: "dJ3dmylY9MmbAf9n3x06"
            }
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/0be1e69847512eb29c6c5a7663af6f48/14758-dad016ce9b0a19ca2ba9-min.en-US.js.map