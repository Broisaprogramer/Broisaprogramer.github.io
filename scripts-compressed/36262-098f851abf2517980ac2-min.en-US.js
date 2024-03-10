(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [36262], {
        877953: function(X) {
            function A(G, U) {
                return U || (U = G.slice(0)), Object.freeze(Object.defineProperties(G, {
                    raw: {
                        value: Object.freeze(U)
                    }
                }))
            }
            X.exports = A, X.exports.__esModule = !0, X.exports.default = X.exports
        },
        284532: function(X, A) {
            "use strict";

            function G(s, i) {
                (i == null || i > s.length) && (i = s.length);
                for (var r = 0, e = new Array(i); r < i; r++) e[r] = s[r];
                return e
            }

            function U(s) {
                if (Array.isArray(s)) return s
            }

            function He(s) {
                if (Array.isArray(s)) return G(s)
            }

            function Le(s, i) {
                if (i.has(s)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function M(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }

            function fe(s, i, r) {
                if (!i.has(s)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }

            function me(s, i) {
                Le(s, i), i.add(s)
            }

            function ye(s, i) {
                for (var r = 0; r < i.length; r++) {
                    var e = i[r];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e)
                }
            }

            function Be(s, i, r) {
                return i && ye(s.prototype, i), r && ye(s, r), s
            }

            function Ne(s, i, r) {
                return i in s ? Object.defineProperty(s, i, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : s[i] = r, s
            }

            function Fe(s) {
                if (typeof Symbol != "undefined" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s)
            }

            function Ge(s, i) {
                var r = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
                if (r != null) {
                    var e = [],
                        t = !0,
                        a = !1,
                        n, o;
                    try {
                        for (r = r.call(s); !(t = (n = r.next()).done) && (e.push(n.value), !(i && e.length === i)); t = !0);
                    } catch (l) {
                        a = !0, o = l
                    } finally {
                        try {
                            !t && r.return != null && r.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return e
                }
            }

            function We() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function Xe() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function q(s) {
                for (var i = 1; i < arguments.length; i++) {
                    var r = arguments[i] != null ? arguments[i] : {},
                        e = Object.keys(r);
                    typeof Object.getOwnPropertySymbols == "function" && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    }))), e.forEach(function(t) {
                        Ne(s, t, r[t])
                    })
                }
                return s
            }

            function Ue(s, i) {
                var r = Object.keys(s);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(s);
                    i && (e = e.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(s, t).enumerable
                    })), r.push.apply(r, e)
                }
                return r
            }

            function J(s, i) {
                return i = i != null ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : Ue(Object(i)).forEach(function(r) {
                    Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(i, r))
                }), s
            }

            function Je(s, i) {
                return U(s) || Ge(s, i) || xe(s, i) || We()
            }

            function V(s) {
                return He(s) || Fe(s) || xe(s) || Xe()
            }

            function xe(s, i) {
                if (s) {
                    if (typeof s == "string") return G(s, i);
                    var r = Object.prototype.toString.call(s).slice(8, -1);
                    if (r === "Object" && s.constructor && (r = s.constructor.name), r === "Map" || r === "Set") return Array.from(r);
                    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return G(s, i)
                }
            }

            function ae() {
                return {
                    async: !1,
                    breaks: !1,
                    extensions: null,
                    gfm: !0,
                    hooks: null,
                    pedantic: !1,
                    renderer: null,
                    silent: !1,
                    tokenizer: null,
                    walkTokens: null
                }
            }
            A.defaults = ae();

            function $e(s) {
                A.defaults = s
            }
            var ze = /[&<>"']/,
                Ve = new RegExp(ze.source, "g"),
                Ae = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                Ye = new RegExp(Ae.source, "g"),
                Ke = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Re = function(s) {
                    return Ke[s]
                };

            function P(s, i) {
                if (i) {
                    if (ze.test(s)) return s.replace(Ve, Re)
                } else if (Ae.test(s)) return s.replace(Ye, Re);
                return s
            }
            var et = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

            function tt(s) {
                return s.replace(et, function(i, r) {
                    return r = r.toLowerCase(), r === "colon" ? ":" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : ""
                })
            }
            var nt = /(^|[^\[])\^/g;

            function z(s, i) {
                var r = typeof s == "string" ? s : s.source;
                i = i || "";
                var e = {
                    replace: function(t, a) {
                        var n = typeof a == "string" ? a : a.source;
                        return n = n.replace(nt, "$1"), r = r.replace(t, n), e
                    },
                    getRegex: function() {
                        return new RegExp(r, i)
                    }
                };
                return e
            }

            function Se(s) {
                try {
                    s = encodeURI(s).replace(/%25/g, "%")
                } catch (i) {
                    return null
                }
                return s
            }
            var Y = {
                exec: function() {
                    return null
                }
            };

            function Te(s, i) {
                var r = s.replace(/\|/g, function(a, n, o) {
                        for (var l = !1, u = n; --u >= 0 && o[u] === "\\";) l = !l;
                        return l ? "|" : " |"
                    }),
                    e = r.split(/ \|/),
                    t = 0;
                if (e[0].trim() || e.shift(), e.length > 0 && !e[e.length - 1].trim() && e.pop(), i)
                    if (e.length > i) e.splice(i);
                    else
                        for (; e.length < i;) e.push("");
                for (; t < e.length; t++) e[t] = e[t].trim().replace(/\\\|/g, "|");
                return e
            }

            function ie(s, i, r) {
                var e = s.length;
                if (e === 0) return "";
                for (var t = 0; t < e;) {
                    var a = s.charAt(e - t - 1);
                    if (a === i && !r) t++;
                    else if (a !== i && r) t++;
                    else break
                }
                return s.slice(0, e - t)
            }

            function rt(s, i) {
                if (s.indexOf(i[1]) === -1) return -1;
                for (var r = 0, e = 0; e < s.length; e++)
                    if (s[e] === "\\") e++;
                    else if (s[e] === i[0]) r++;
                else if (s[e] === i[1] && (r--, r < 0)) return e;
                return -1
            }

            function Ie(s, i, r, e) {
                var t = i.href,
                    a = i.title ? P(i.title) : null,
                    n = s[1].replace(/\\([\[\]])/g, "$1");
                if (s[0].charAt(0) !== "!") {
                    e.state.inLink = !0;
                    var o = {
                        type: "link",
                        raw: r,
                        href: t,
                        title: a,
                        text: n,
                        tokens: e.inlineTokens(n)
                    };
                    return e.state.inLink = !1, o
                }
                return {
                    type: "image",
                    raw: r,
                    href: t,
                    title: a,
                    text: P(n)
                }
            }

            function at(s, i) {
                var r = s.match(/^(\s+)(?:```)/);
                if (r === null) return i;
                var e = r[1];
                return i.split("\n").map(function(t) {
                    var a = t.match(/^\s+/);
                    if (a === null) return t;
                    var n = Je(a, 1),
                        o = n[0];
                    return o.length >= e.length ? t.slice(e.length) : t
                }).join("\n")
            }
            var K = function() {
                    function s(r) {
                        M(this, s), this.options = r || A.defaults
                    }
                    var i = s.prototype;
                    return i.space = function(e) {
                        var t = this.rules.block.newline.exec(e);
                        if (t && t[0].length > 0) return {
                            type: "space",
                            raw: t[0]
                        }
                    }, i.code = function(e) {
                        var t = this.rules.block.code.exec(e);
                        if (t) {
                            var a = t[0].replace(/^ {1,4}/gm, "");
                            return {
                                type: "code",
                                raw: t[0],
                                codeBlockStyle: "indented",
                                text: this.options.pedantic ? a : ie(a, "\n")
                            }
                        }
                    }, i.fences = function(e) {
                        var t = this.rules.block.fences.exec(e);
                        if (t) {
                            var a = t[0],
                                n = at(a, t[3] || "");
                            return {
                                type: "code",
                                raw: a,
                                lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                                text: n
                            }
                        }
                    }, i.heading = function(e) {
                        var t = this.rules.block.heading.exec(e);
                        if (t) {
                            var a = t[2].trim();
                            if (/#$/.test(a)) {
                                var n = ie(a, "#");
                                (this.options.pedantic || !n || / $/.test(n)) && (a = n.trim())
                            }
                            return {
                                type: "heading",
                                raw: t[0],
                                depth: t[1].length,
                                text: a,
                                tokens: this.lexer.inline(a)
                            }
                        }
                    }, i.hr = function(e) {
                        var t = this.rules.block.hr.exec(e);
                        if (t) return {
                            type: "hr",
                            raw: t[0]
                        }
                    }, i.blockquote = function(e) {
                        var t = this.rules.block.blockquote.exec(e);
                        if (t) {
                            var a = ie(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
                                n = this.lexer.state.top;
                            this.lexer.state.top = !0;
                            var o = this.lexer.blockTokens(a);
                            return this.lexer.state.top = n, {
                                type: "blockquote",
                                raw: t[0],
                                tokens: o,
                                text: a
                            }
                        }
                    }, i.list = function(e) {
                        var t = this.rules.block.list.exec(e);
                        if (t) {
                            var a = this,
                                n = function() {
                                    var R = !1;
                                    if (!(t = f.exec(e)) || a.rules.block.hr.test(e)) return "break";
                                    p = t[0], e = e.substring(p.length);
                                    var I = t[2].split("\n", 1)[0].replace(/^\t+/, function(j) {
                                            return " ".repeat(3 * j.length)
                                        }),
                                        c = e.split("\n", 1)[0],
                                        v = 0;
                                    a.options.pedantic ? (v = 2, h = I.trimStart()) : (v = t[2].search(/[^ ]/), v = v > 4 ? 1 : v, h = I.slice(v), v += t[1].length);
                                    var T = !1;
                                    if (!I && /^ *$/.test(c) && (p += c + "\n", e = e.substring(c.length + 1), R = !0), !R)
                                        for (var O = new RegExp("^ {0,".concat(Math.min(3, v - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))")), $ = new RegExp("^ {0,".concat(Math.min(3, v - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")), x = new RegExp("^ {0,".concat(Math.min(3, v - 1), "}(?:```|~~~)")), w = new RegExp("^ {0,".concat(Math.min(3, v - 1), "}#")); e;) {
                                            var g = e.split("\n", 1)[0];
                                            if (c = g, a.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), x.test(c) || w.test(c) || O.test(c) || $.test(e)) break;
                                            if (c.search(/[^ ]/) >= v || !c.trim()) h += "\n" + c.slice(v);
                                            else {
                                                if (T || I.search(/[^ ]/) >= 4 || x.test(I) || w.test(I) || $.test(I)) break;
                                                h += "\n" + c
                                            }!T && !c.trim() && (T = !0), p += g + "\n", e = e.substring(g.length + 1), I = c.slice(v)
                                        }
                                    u.loose || (y ? u.loose = !0 : /\n *\n *$/.test(p) && (y = !0));
                                    var Z = null,
                                        L = void 0;
                                    a.options.gfm && (Z = /^\[[ xX]\] /.exec(h), Z && (L = Z[0] !== "[ ] ", h = h.replace(/^\[[ xX]\] +/, ""))), u.items.push({
                                        type: "list_item",
                                        raw: p,
                                        task: !!Z,
                                        checked: L,
                                        loose: !1,
                                        text: h,
                                        tokens: []
                                    }), u.raw += p
                                },
                                o = t[1].trim(),
                                l = o.length > 1,
                                u = {
                                    type: "list",
                                    raw: "",
                                    ordered: l,
                                    start: l ? +o.slice(0, -1) : "",
                                    loose: !1,
                                    items: []
                                };
                            o = l ? "\\d{1,9}\\".concat(o.slice(-1)) : "\\".concat(o), this.options.pedantic && (o = l ? o : "[*+-]");
                            for (var f = new RegExp("^( {0,3}".concat(o, ")((?:[	 ][^\\n]*)?(?:\\n|$))")), p = "", h = "", y = !1; e;) {
                                var k = n();
                                if (k === "break") break
                            }
                            u.items[u.items.length - 1].raw = p.trimEnd(), u.items[u.items.length - 1].text = h.trimEnd(), u.raw = u.raw.trimEnd();
                            for (var b = 0; b < u.items.length; b++)
                                if (this.lexer.state.top = !1, u.items[b].tokens = this.lexer.blockTokens(u.items[b].text, []), !u.loose) {
                                    var S = u.items[b].tokens.filter(function(R) {
                                            return R.type === "space"
                                        }),
                                        d = S.length > 0 && S.some(function(R) {
                                            return /\n.*\n/.test(R.raw)
                                        });
                                    u.loose = d
                                }
                            if (u.loose)
                                for (var E = 0; E < u.items.length; E++) u.items[E].loose = !0;
                            return u
                        }
                    }, i.html = function(e) {
                        var t = this.rules.block.html.exec(e);
                        if (t) {
                            var a = {
                                type: "html",
                                block: !0,
                                raw: t[0],
                                pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                                text: t[0]
                            };
                            return a
                        }
                    }, i.def = function(e) {
                        var t = this.rules.block.def.exec(e);
                        if (t) {
                            var a = t[1].toLowerCase().replace(/\s+/g, " "),
                                n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                                o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                            return {
                                type: "def",
                                tag: a,
                                raw: t[0],
                                href: n,
                                title: o
                            }
                        }
                    }, i.table = function(e) {
                        var t = this,
                            a = this.rules.block.table.exec(e);
                        if (a && /[:|]/.test(a[2])) {
                            var n = Te(a[1]),
                                o = a[2].replace(/^\||\| *$/g, "").split("|"),
                                l = a[3] && a[3].trim() ? a[3].replace(/\n[ \t]*$/, "").split("\n") : [],
                                u = {
                                    type: "table",
                                    raw: a[0],
                                    header: [],
                                    align: [],
                                    rows: []
                                };
                            if (n.length === o.length) {
                                var f = !0,
                                    p = !1,
                                    h = void 0;
                                try {
                                    for (var y = o[Symbol.iterator](), k; !(f = (k = y.next()).done); f = !0) {
                                        var b = k.value;
                                        /^ *-+: *$/.test(b) ? u.align.push("right") : /^ *:-+: *$/.test(b) ? u.align.push("center") : /^ *:-+ *$/.test(b) ? u.align.push("left") : u.align.push(null)
                                    }
                                } catch (g) {
                                    p = !0, h = g
                                } finally {
                                    try {
                                        !f && y.return != null && y.return()
                                    } finally {
                                        if (p) throw h
                                    }
                                }
                                var S = !0,
                                    d = !1,
                                    E = void 0;
                                try {
                                    for (var R = n[Symbol.iterator](), I; !(S = (I = R.next()).done); S = !0) {
                                        var c = I.value;
                                        u.header.push({
                                            text: c,
                                            tokens: this.lexer.inline(c)
                                        })
                                    }
                                } catch (g) {
                                    d = !0, E = g
                                } finally {
                                    try {
                                        !S && R.return != null && R.return()
                                    } finally {
                                        if (d) throw E
                                    }
                                }
                                var v = !0,
                                    T = !1,
                                    O = void 0;
                                try {
                                    for (var $ = l[Symbol.iterator](), x; !(v = (x = $.next()).done); v = !0) {
                                        var w = x.value;
                                        u.rows.push(Te(w, u.header.length).map(function(g) {
                                            return {
                                                text: g,
                                                tokens: t.lexer.inline(g)
                                            }
                                        }))
                                    }
                                } catch (g) {
                                    T = !0, O = g
                                } finally {
                                    try {
                                        !v && $.return != null && $.return()
                                    } finally {
                                        if (T) throw O
                                    }
                                }
                                return u
                            }
                        }
                    }, i.lheading = function(e) {
                        var t = this.rules.block.lheading.exec(e);
                        if (t) return {
                            type: "heading",
                            raw: t[0],
                            depth: t[2].charAt(0) === "=" ? 1 : 2,
                            text: t[1],
                            tokens: this.lexer.inline(t[1])
                        }
                    }, i.paragraph = function(e) {
                        var t = this.rules.block.paragraph.exec(e);
                        if (t) {
                            var a = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
                            return {
                                type: "paragraph",
                                raw: t[0],
                                text: a,
                                tokens: this.lexer.inline(a)
                            }
                        }
                    }, i.text = function(e) {
                        var t = this.rules.block.text.exec(e);
                        if (t) return {
                            type: "text",
                            raw: t[0],
                            text: t[0],
                            tokens: this.lexer.inline(t[0])
                        }
                    }, i.escape = function(e) {
                        var t = this.rules.inline.escape.exec(e);
                        if (t) return {
                            type: "escape",
                            raw: t[0],
                            text: P(t[1])
                        }
                    }, i.tag = function(e) {
                        var t = this.rules.inline.tag.exec(e);
                        if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                            type: "html",
                            raw: t[0],
                            inLink: this.lexer.state.inLink,
                            inRawBlock: this.lexer.state.inRawBlock,
                            block: !1,
                            text: t[0]
                        }
                    }, i.link = function(e) {
                        var t = this.rules.inline.link.exec(e);
                        if (t) {
                            var a = t[2].trim();
                            if (!this.options.pedantic && /^</.test(a)) {
                                if (!/>$/.test(a)) return;
                                var n = ie(a.slice(0, -1), "\\");
                                if ((a.length - n.length) % 2 === 0) return
                            } else {
                                var o = rt(t[2], "()");
                                if (o > -1) {
                                    var l = t[0].indexOf("!") === 0 ? 5 : 4,
                                        u = l + t[1].length + o;
                                    t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, u).trim(), t[3] = ""
                                }
                            }
                            var f = t[2],
                                p = "";
                            if (this.options.pedantic) {
                                var h = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(f);
                                h && (f = h[1], p = h[3])
                            } else p = t[3] ? t[3].slice(1, -1) : "";
                            return f = f.trim(), /^</.test(f) && (this.options.pedantic && !/>$/.test(a) ? f = f.slice(1) : f = f.slice(1, -1)), Ie(t, {
                                href: f && f.replace(this.rules.inline.anyPunctuation, "$1"),
                                title: p && p.replace(this.rules.inline.anyPunctuation, "$1")
                            }, t[0], this.lexer)
                        }
                    }, i.reflink = function(e, t) {
                        var a;
                        if ((a = this.rules.inline.reflink.exec(e)) || (a = this.rules.inline.nolink.exec(e))) {
                            var n = (a[2] || a[1]).replace(/\s+/g, " "),
                                o = t[n.toLowerCase()];
                            if (!o) {
                                var l = a[0].charAt(0);
                                return {
                                    type: "text",
                                    raw: l,
                                    text: l
                                }
                            }
                            return Ie(a, o, a[0], this.lexer)
                        }
                    }, i.emStrong = function(e, t) {
                        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "",
                            n = this.rules.inline.emStrongLDelim.exec(e);
                        if (n && !(n[3] && a.match(RegExp("[\\p{L}\\p{N}]", "u")))) {
                            var o = n[1] || n[2] || "";
                            if (!o || !a || this.rules.inline.punctuation.exec(a)) {
                                var l = V(n[0]).length - 1,
                                    u, f, p = l,
                                    h = 0,
                                    y = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                                for (y.lastIndex = 0, t = t.slice(-1 * e.length + l);
                                    (n = y.exec(t)) != null;)
                                    if (u = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !!u) {
                                        if (f = V(u).length, n[3] || n[4]) {
                                            p += f;
                                            continue
                                        } else if ((n[5] || n[6]) && l % 3 && !((l + f) % 3)) {
                                            h += f;
                                            continue
                                        }
                                        if (p -= f, !(p > 0)) {
                                            f = Math.min(f, f + p + h);
                                            var k = V(n[0])[0].length,
                                                b = e.slice(0, l + n.index + k + f);
                                            if (Math.min(l, f) % 2) {
                                                var S = b.slice(1, -1);
                                                return {
                                                    type: "em",
                                                    raw: b,
                                                    text: S,
                                                    tokens: this.lexer.inlineTokens(S)
                                                }
                                            }
                                            var d = b.slice(2, -2);
                                            return {
                                                type: "strong",
                                                raw: b,
                                                text: d,
                                                tokens: this.lexer.inlineTokens(d)
                                            }
                                        }
                                    }
                            }
                        }
                    }, i.codespan = function(e) {
                        var t = this.rules.inline.code.exec(e);
                        if (t) {
                            var a = t[2].replace(/\n/g, " "),
                                n = /[^ ]/.test(a),
                                o = /^ /.test(a) && / $/.test(a);
                            return n && o && (a = a.substring(1, a.length - 1)), a = P(a, !0), {
                                type: "codespan",
                                raw: t[0],
                                text: a
                            }
                        }
                    }, i.br = function(e) {
                        var t = this.rules.inline.br.exec(e);
                        if (t) return {
                            type: "br",
                            raw: t[0]
                        }
                    }, i.del = function(e) {
                        var t = this.rules.inline.del.exec(e);
                        if (t) return {
                            type: "del",
                            raw: t[0],
                            text: t[2],
                            tokens: this.lexer.inlineTokens(t[2])
                        }
                    }, i.autolink = function(e) {
                        var t = this.rules.inline.autolink.exec(e);
                        if (t) {
                            var a, n;
                            return t[2] === "@" ? (a = P(t[1]), n = "mailto:" + a) : (a = P(t[1]), n = a), {
                                type: "link",
                                raw: t[0],
                                text: a,
                                href: n,
                                tokens: [{
                                    type: "text",
                                    raw: a,
                                    text: a
                                }]
                            }
                        }
                    }, i.url = function(e) {
                        var t;
                        if (t = this.rules.inline.url.exec(e)) {
                            var a, n;
                            if (t[2] === "@") a = P(t[0]), n = "mailto:" + a;
                            else {
                                var o;
                                do {
                                    var l;
                                    o = t[0];
                                    var u;
                                    t[0] = (u = (l = this.rules.inline._backpedal.exec(t[0])) === null || l === void 0 ? void 0 : l[0]) !== null && u !== void 0 ? u : ""
                                } while (o !== t[0]);
                                a = P(t[0]), t[1] === "www." ? n = "http://" + t[0] : n = t[0]
                            }
                            return {
                                type: "link",
                                raw: t[0],
                                text: a,
                                href: n,
                                tokens: [{
                                    type: "text",
                                    raw: a,
                                    text: a
                                }]
                            }
                        }
                    }, i.inlineText = function(e) {
                        var t = this.rules.inline.text.exec(e);
                        if (t) {
                            var a;
                            return this.lexer.state.inRawBlock ? a = t[0] : a = P(t[0]), {
                                type: "text",
                                raw: t[0],
                                text: a
                            }
                        }
                    }, s
                }(),
                it = /^(?: *(?:\n|$))+/,
                lt = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                st = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                ee = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
                ot = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                Oe = /(?:[*+-]|\d{1,9}[.)])/,
                Ee = z(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Oe).getRegex(),
                pe = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                ut = /^[^\n]+/,
                he = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
                ct = z(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", he).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
                ft = z(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Oe).getRegex(),
                le = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
                ve = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
                pt = z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ve).replace("tag", le).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
                Pe = z(pe).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", le).getRegex(),
                ht = z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Pe).getRegex(),
                ge = {
                    blockquote: ht,
                    code: lt,
                    def: ct,
                    fences: st,
                    heading: ot,
                    hr: ee,
                    html: pt,
                    lheading: Ee,
                    list: ft,
                    newline: it,
                    paragraph: Pe,
                    table: Y,
                    text: ut
                },
                _e = z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", le).getRegex(),
                vt = J(q({}, ge), {
                    table: _e,
                    paragraph: z(pe).replace("hr", ee).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", _e).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", le).getRegex()
                }),
                gt = J(q({}, ge), {
                    html: z("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", ve).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                    heading: /^(#{1,6})(.*)(?:\n+|$)/,
                    fences: Y,
                    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                    paragraph: z(pe).replace("hr", ee).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Ee).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
                }),
                qe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                dt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                Ze = /^( {2,}|\\)\n(?!\s*$)/,
                kt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                te = "\\p{P}\\p{S}",
                bt = z(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, te).getRegex(),
                wt = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
                mt = z(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, te).getRegex(),
                yt = z("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, te).getRegex(),
                xt = z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, te).getRegex(),
                $t = z(/\\([punct])/, "gu").replace(/punct/g, te).getRegex(),
                zt = z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
                At = z(ve).replace("(?:-->|$)", "-->").getRegex(),
                Rt = z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", At).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
                se = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
                St = z(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", se).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
                je = z(/^!?\[(label)\]\[(ref)\]/).replace("label", se).replace("ref", he).getRegex(),
                Ce = z(/^!?\[(ref)\](?:\[\])?/).replace("ref", he).getRegex(),
                Tt = z("reflink|nolink(?!\\()", "g").replace("reflink", je).replace("nolink", Ce).getRegex(),
                de = {
                    _backpedal: Y,
                    anyPunctuation: $t,
                    autolink: zt,
                    blockSkip: wt,
                    br: Ze,
                    code: dt,
                    del: Y,
                    emStrongLDelim: mt,
                    emStrongRDelimAst: yt,
                    emStrongRDelimUnd: xt,
                    escape: qe,
                    link: St,
                    nolink: Ce,
                    punctuation: bt,
                    reflink: je,
                    reflinkSearch: Tt,
                    tag: Rt,
                    text: kt,
                    url: Y
                },
                It = J(q({}, de), {
                    link: z(/^!?\[(label)\]\((.*?)\)/).replace("label", se).getRegex(),
                    reflink: z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", se).getRegex()
                }),
                ke = J(q({}, de), {
                    escape: z(qe).replace("])", "~|])").getRegex(),
                    url: z(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
                    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
                }),
                Ot = J(q({}, ke), {
                    br: z(Ze).replace("{2,}", "*").getRegex(),
                    text: z(ke.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                }),
                oe = {
                    normal: ge,
                    gfm: vt,
                    pedantic: gt
                },
                ne = {
                    normal: de,
                    gfm: ke,
                    breaks: Ot,
                    pedantic: It
                },
                C = function() {
                    function s(r) {
                        M(this, s), this.tokens = [], this.tokens.links = Object.create(null), this.options = r || A.defaults, this.options.tokenizer = this.options.tokenizer || new K, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                            inLink: !1,
                            inRawBlock: !1,
                            top: !0
                        };
                        var e = {
                            block: oe.normal,
                            inline: ne.normal
                        };
                        this.options.pedantic ? (e.block = oe.pedantic, e.inline = ne.pedantic) : this.options.gfm && (e.block = oe.gfm, this.options.breaks ? e.inline = ne.breaks : e.inline = ne.gfm), this.tokenizer.rules = e
                    }
                    var i = s.prototype;
                    return i.lex = function(e) {
                        e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
                        for (var t = 0; t < this.inlineQueue.length; t++) {
                            var a = this.inlineQueue[t];
                            this.inlineTokens(a.src, a.tokens)
                        }
                        return this.inlineQueue = [], this.tokens
                    }, i.blockTokens = function(e) {
                        var t = this,
                            a = function() {
                                if (t.options.extensions && t.options.extensions.block && t.options.extensions.block.some(function(d) {
                                        return (l = d.call({
                                            lexer: o
                                        }, e, n)) ? (e = e.substring(l.raw.length), n.push(l), !0) : !1
                                    })) return "continue";
                                if (l = t.tokenizer.space(e)) return e = e.substring(l.raw.length), l.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += "\n" : n.push(l), "continue";
                                if (l = t.tokenizer.code(e)) return e = e.substring(l.raw.length), u = n[n.length - 1], u && (u.type === "paragraph" || u.type === "text") ? (u.raw += "\n" + l.raw, u.text += "\n" + l.text, t.inlineQueue[t.inlineQueue.length - 1].src = u.text) : n.push(l), "continue";
                                if ((l = t.tokenizer.fences(e)) || (l = t.tokenizer.heading(e)) || (l = t.tokenizer.hr(e)) || (l = t.tokenizer.blockquote(e)) || (l = t.tokenizer.list(e)) || (l = t.tokenizer.html(e))) return e = e.substring(l.raw.length), n.push(l), "continue";
                                if (l = t.tokenizer.def(e)) return e = e.substring(l.raw.length), u = n[n.length - 1], u && (u.type === "paragraph" || u.type === "text") ? (u.raw += "\n" + l.raw, u.text += "\n" + l.raw, t.inlineQueue[t.inlineQueue.length - 1].src = u.text) : t.tokens.links[l.tag] || (t.tokens.links[l.tag] = {
                                    href: l.href,
                                    title: l.title
                                }), "continue";
                                if ((l = t.tokenizer.table(e)) || (l = t.tokenizer.lheading(e))) return e = e.substring(l.raw.length), n.push(l), "continue";
                                if (f = e, t.options.extensions && t.options.extensions.startBlock) {
                                    var y = 1 / 0,
                                        k = e.slice(1),
                                        b = void 0;
                                    t.options.extensions.startBlock.forEach(function(d) {
                                        b = d.call({
                                            lexer: o
                                        }, k), typeof b == "number" && b >= 0 && (y = Math.min(y, b))
                                    }), y < 1 / 0 && y >= 0 && (f = e.substring(0, y + 1))
                                }
                                if (t.state.top && (l = t.tokenizer.paragraph(f))) return u = n[n.length - 1], p && u.type === "paragraph" ? (u.raw += "\n" + l.raw, u.text += "\n" + l.text, t.inlineQueue.pop(), t.inlineQueue[t.inlineQueue.length - 1].src = u.text) : n.push(l), p = f.length !== e.length, e = e.substring(l.raw.length), "continue";
                                if (l = t.tokenizer.text(e)) return e = e.substring(l.raw.length), u = n[n.length - 1], u && u.type === "text" ? (u.raw += "\n" + l.raw, u.text += "\n" + l.text, t.inlineQueue.pop(), t.inlineQueue[t.inlineQueue.length - 1].src = u.text) : n.push(l), "continue";
                                if (e) {
                                    var S = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (t.options.silent) return console.error(S), "break";
                                    throw new Error(S)
                                }
                            },
                            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                            o = this;
                        this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, function(y, k, b) {
                            return k + "    ".repeat(b.length)
                        });
                        for (var l, u, f, p; e;) {
                            var h = a();
                            if (h === "break") break
                        }
                        return this.state.top = !0, n
                    }, i.inline = function(e) {
                        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                        return this.inlineQueue.push({
                            src: e,
                            tokens: t
                        }), t
                    }, i.inlineTokens = function(e) {
                        var t = this,
                            a = function() {
                                if (y || (k = ""), y = !1, t.options.extensions && t.options.extensions.inline && t.options.extensions.inline.some(function(c) {
                                        return (l = c.call({
                                            lexer: o
                                        }, e, n)) ? (e = e.substring(l.raw.length), n.push(l), !0) : !1
                                    })) return "continue";
                                if (l = t.tokenizer.escape(e)) return e = e.substring(l.raw.length), n.push(l), "continue";
                                if (l = t.tokenizer.tag(e)) return e = e.substring(l.raw.length), u = n[n.length - 1], u && l.type === "text" && u.type === "text" ? (u.raw += l.raw, u.text += l.text) : n.push(l), "continue";
                                if (l = t.tokenizer.link(e)) return e = e.substring(l.raw.length), n.push(l), "continue";
                                if (l = t.tokenizer.reflink(e, t.tokens.links)) return e = e.substring(l.raw.length), u = n[n.length - 1], u && l.type === "text" && u.type === "text" ? (u.raw += l.raw, u.text += l.text) : n.push(l), "continue";
                                if ((l = t.tokenizer.emStrong(e, p, k)) || (l = t.tokenizer.codespan(e)) || (l = t.tokenizer.br(e)) || (l = t.tokenizer.del(e)) || (l = t.tokenizer.autolink(e)) || !t.state.inLink && (l = t.tokenizer.url(e))) return e = e.substring(l.raw.length), n.push(l), "continue";
                                if (f = e, t.options.extensions && t.options.extensions.startInline) {
                                    var d = 1 / 0,
                                        E = e.slice(1),
                                        R = void 0;
                                    t.options.extensions.startInline.forEach(function(c) {
                                        R = c.call({
                                            lexer: o
                                        }, E), typeof R == "number" && R >= 0 && (d = Math.min(d, R))
                                    }), d < 1 / 0 && d >= 0 && (f = e.substring(0, d + 1))
                                }
                                if (l = t.tokenizer.inlineText(f)) return e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (k = l.raw.slice(-1)), y = !0, u = n[n.length - 1], u && u.type === "text" ? (u.raw += l.raw, u.text += l.text) : n.push(l), "continue";
                                if (e) {
                                    var I = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (t.options.silent) return console.error(I), "break";
                                    throw new Error(I)
                                }
                            },
                            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                            o = this,
                            l, u, f, p = e,
                            h, y, k;
                        if (this.tokens.links) {
                            var b = Object.keys(this.tokens.links);
                            if (b.length > 0)
                                for (;
                                    (h = this.tokenizer.rules.inline.reflinkSearch.exec(p)) != null;) b.includes(h[0].slice(h[0].lastIndexOf("[") + 1, -1)) && (p = p.slice(0, h.index) + "[" + "a".repeat(h[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                        }
                        for (;
                            (h = this.tokenizer.rules.inline.blockSkip.exec(p)) != null;) p = p.slice(0, h.index) + "[" + "a".repeat(h[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                        for (;
                            (h = this.tokenizer.rules.inline.anyPunctuation.exec(p)) != null;) p = p.slice(0, h.index) + "++" + p.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                        for (; e;) {
                            var S = a();
                            if (S === "break") break
                        }
                        return n
                    }, s.lex = function(e, t) {
                        var a = new s(t);
                        return a.lex(e)
                    }, s.lexInline = function(e, t) {
                        var a = new s(t);
                        return a.inlineTokens(e)
                    }, Be(s, null, [{
                        key: "rules",
                        get: function() {
                            return {
                                block: oe,
                                inline: ne
                            }
                        }
                    }]), s
                }(),
                re = function() {
                    function s(r) {
                        M(this, s), this.options = r || A.defaults
                    }
                    var i = s.prototype;
                    return i.code = function(r, e, t) {
                        var a, n = (a = (e || "").match(/^\S*/)) === null || a === void 0 ? void 0 : a[0];
                        return r = r.replace(/\n$/, "") + "\n", n ? '<pre><code class="language-' + P(n) + '">' + (t ? r : P(r, !0)) + "</code></pre>\n" : "<pre><code>" + (t ? r : P(r, !0)) + "</code></pre>\n"
                    }, i.blockquote = function(e) {
                        return "<blockquote>\n".concat(e, "</blockquote>\n")
                    }, i.html = function(r, e) {
                        return r
                    }, i.heading = function(e, t, a) {
                        return "<h".concat(t, ">").concat(e, "</h").concat(t, ">\n")
                    }, i.hr = function() {
                        return "<hr>\n"
                    }, i.list = function(e, t, a) {
                        var n = t ? "ol" : "ul",
                            o = t && a !== 1 ? ' start="' + a + '"' : "";
                        return "<" + n + o + ">\n" + e + "</" + n + ">\n"
                    }, i.listitem = function(e, t, a) {
                        return "<li>".concat(e, "</li>\n")
                    }, i.checkbox = function(e) {
                        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
                    }, i.paragraph = function(e) {
                        return "<p>".concat(e, "</p>\n")
                    }, i.table = function(e, t) {
                        return t && (t = "<tbody>".concat(t, "</tbody>")), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                    }, i.tablerow = function(e) {
                        return "<tr>\n".concat(e, "</tr>\n")
                    }, i.tablecell = function(e, t) {
                        var a = t.header ? "th" : "td",
                            n = t.align ? "<".concat(a, ' align="').concat(t.align, '">') : "<".concat(a, ">");
                        return n + e + "</".concat(a, ">\n")
                    }, i.strong = function(e) {
                        return "<strong>".concat(e, "</strong>")
                    }, i.em = function(e) {
                        return "<em>".concat(e, "</em>")
                    }, i.codespan = function(e) {
                        return "<code>".concat(e, "</code>")
                    }, i.br = function() {
                        return "<br>"
                    }, i.del = function(e) {
                        return "<del>".concat(e, "</del>")
                    }, i.link = function(e, t, a) {
                        var n = Se(e);
                        if (n === null) return a;
                        e = n;
                        var o = '<a href="' + e + '"';
                        return t && (o += ' title="' + t + '"'), o += ">" + a + "</a>", o
                    }, i.image = function(e, t, a) {
                        var n = Se(e);
                        if (n === null) return a;
                        e = n;
                        var o = '<img src="'.concat(e, '" alt="').concat(a, '"');
                        return t && (o += ' title="'.concat(t, '"')), o += ">", o
                    }, i.text = function(r) {
                        return r
                    }, s
                }(),
                ue = function() {
                    function s() {
                        M(this, s)
                    }
                    var i = s.prototype;
                    return i.strong = function(e) {
                        return e
                    }, i.em = function(e) {
                        return e
                    }, i.codespan = function(e) {
                        return e
                    }, i.del = function(e) {
                        return e
                    }, i.html = function(e) {
                        return e
                    }, i.text = function(r) {
                        return r
                    }, i.link = function(e, t, a) {
                        return "" + a
                    }, i.image = function(e, t, a) {
                        return "" + a
                    }, i.br = function() {
                        return ""
                    }, s
                }(),
                D = function() {
                    function s(r) {
                        M(this, s), this.options = r || A.defaults, this.options.renderer = this.options.renderer || new re, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ue
                    }
                    var i = s.prototype;
                    return i.parse = function(e) {
                        for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = "", n = 0; n < e.length; n++) {
                            var o = e[n];
                            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
                                var l = o,
                                    u = this.options.extensions.renderers[l.type].call({
                                        parser: this
                                    }, l);
                                if (u !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type)) {
                                    a += u || "";
                                    continue
                                }
                            }
                            switch (o.type) {
                                case "space":
                                    continue;
                                case "hr":
                                    {
                                        a += this.renderer.hr();
                                        continue
                                    }
                                case "heading":
                                    {
                                        var f = o;a += this.renderer.heading(this.parseInline(f.tokens), f.depth, tt(this.parseInline(f.tokens, this.textRenderer)));
                                        continue
                                    }
                                case "code":
                                    {
                                        var p = o;a += this.renderer.code(p.text, p.lang, !!p.escaped);
                                        continue
                                    }
                                case "table":
                                    {
                                        for (var h = o, y = "", k = "", b = 0; b < h.header.length; b++) k += this.renderer.tablecell(this.parseInline(h.header[b].tokens), {
                                            header: !0,
                                            align: h.align[b]
                                        });y += this.renderer.tablerow(k);
                                        for (var S = "", d = 0; d < h.rows.length; d++) {
                                            var E = h.rows[d];
                                            k = "";
                                            for (var R = 0; R < E.length; R++) k += this.renderer.tablecell(this.parseInline(E[R].tokens), {
                                                header: !1,
                                                align: h.align[R]
                                            });
                                            S += this.renderer.tablerow(k)
                                        }
                                        a += this.renderer.table(y, S);
                                        continue
                                    }
                                case "blockquote":
                                    {
                                        var I = o,
                                            c = this.parse(I.tokens);a += this.renderer.blockquote(c);
                                        continue
                                    }
                                case "list":
                                    {
                                        for (var v = o, T = v.ordered, O = v.start, $ = v.loose, x = "", w = 0; w < v.items.length; w++) {
                                            var g = v.items[w],
                                                Z = g.checked,
                                                L = g.task,
                                                j = "";
                                            if (g.task) {
                                                var B = this.renderer.checkbox(!!Z);
                                                $ ? g.tokens.length > 0 && g.tokens[0].type === "paragraph" ? (g.tokens[0].text = B + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && g.tokens[0].tokens[0].type === "text" && (g.tokens[0].tokens[0].text = B + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                                                    type: "text",
                                                    text: B + " "
                                                }) : j += B + " "
                                            }
                                            j += this.parse(g.tokens, $), x += this.renderer.listitem(j, L, !!Z)
                                        }
                                        a += this.renderer.list(x, T, O);
                                        continue
                                    }
                                case "html":
                                    {
                                        var ce = o;a += this.renderer.html(ce.text, ce.block);
                                        continue
                                    }
                                case "paragraph":
                                    {
                                        var we = o;a += this.renderer.paragraph(this.parseInline(we.tokens));
                                        continue
                                    }
                                case "text":
                                    {
                                        for (var _ = o, N = _.tokens ? this.parseInline(_.tokens) : _.text; n + 1 < e.length && e[n + 1].type === "text";) _ = e[++n],
                                        N += "\n" + (_.tokens ? this.parseInline(_.tokens) : _.text);a += t ? this.renderer.paragraph(N) : N;
                                        continue
                                    }
                                default:
                                    {
                                        var Q = 'Token with "' + o.type + '" type was not found.';
                                        if (this.options.silent) return console.error(Q), "";
                                        throw new Error(Q)
                                    }
                            }
                        }
                        return a
                    }, i.parseInline = function(e, t) {
                        t = t || this.renderer;
                        for (var a = "", n = 0; n < e.length; n++) {
                            var o = e[n];
                            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
                                var l = this.options.extensions.renderers[o.type].call({
                                    parser: this
                                }, o);
                                if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
                                    a += l || "";
                                    continue
                                }
                            }
                            switch (o.type) {
                                case "escape":
                                    {
                                        var u = o;a += t.text(u.text);
                                        break
                                    }
                                case "html":
                                    {
                                        var f = o;a += t.html(f.text);
                                        break
                                    }
                                case "link":
                                    {
                                        var p = o;a += t.link(p.href, p.title, this.parseInline(p.tokens, t));
                                        break
                                    }
                                case "image":
                                    {
                                        var h = o;a += t.image(h.href, h.title, h.text);
                                        break
                                    }
                                case "strong":
                                    {
                                        var y = o;a += t.strong(this.parseInline(y.tokens, t));
                                        break
                                    }
                                case "em":
                                    {
                                        var k = o;a += t.em(this.parseInline(k.tokens, t));
                                        break
                                    }
                                case "codespan":
                                    {
                                        var b = o;a += t.codespan(b.text);
                                        break
                                    }
                                case "br":
                                    {
                                        a += t.br();
                                        break
                                    }
                                case "del":
                                    {
                                        var S = o;a += t.del(this.parseInline(S.tokens, t));
                                        break
                                    }
                                case "text":
                                    {
                                        var d = o;a += t.text(d.text);
                                        break
                                    }
                                default:
                                    {
                                        var E = 'Token with "' + o.type + '" type was not found.';
                                        if (this.options.silent) return console.error(E), "";
                                        throw new Error(E)
                                    }
                            }
                        }
                        return a
                    }, s.parse = function(e, t) {
                        var a = new s(t);
                        return a.parse(e)
                    }, s.parseInline = function(e, t) {
                        var a = new s(t);
                        return a.parseInline(e)
                    }, s
                }(),
                W = function() {
                    function s(r) {
                        M(this, s), this.options = r || A.defaults
                    }
                    var i = s.prototype;
                    return i.preprocess = function(e) {
                        return e
                    }, i.postprocess = function(e) {
                        return e
                    }, i.processAllTokens = function(e) {
                        return e
                    }, s
                }();
            W.passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
            var be = new WeakSet,
                De = new WeakSet,
                Qe = function() {
                    function s() {
                        for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                        M(this, s), me(this, be), me(this, De), this.defaults = ae(), this.options = this.setOptions, this.parse = fe(this, be, Me).call(this, C.lex, D.parse), this.parseInline = fe(this, be, Me).call(this, C.lexInline, D.parseInline), this.Parser = D, this.Renderer = re, this.TextRenderer = ue, this.Lexer = C, this.Tokenizer = K, this.Hooks = W, this.use.apply(this, V(e))
                    }
                    var i = s.prototype;
                    return i.walkTokens = function(e, t) {
                        var a = this,
                            n = [],
                            o = !0,
                            l = !1,
                            u = void 0;
                        try {
                            for (var f = this, p = function() {
                                    var k = y.value;
                                    switch (n = n.concat(t.call(f, k)), k.type) {
                                        case "table":
                                            {
                                                var b = k,
                                                    S = !0,
                                                    d = !1,
                                                    E = void 0;
                                                try {
                                                    for (var R = b.header[Symbol.iterator](), I; !(S = (I = R.next()).done); S = !0) {
                                                        var c = I.value;
                                                        n = n.concat(f.walkTokens(c.tokens, t))
                                                    }
                                                } catch (F) {
                                                    d = !0, E = F
                                                } finally {
                                                    try {
                                                        !S && R.return != null && R.return()
                                                    } finally {
                                                        if (d) throw E
                                                    }
                                                }
                                                var v = !0,
                                                    T = !1,
                                                    O = void 0;
                                                try {
                                                    for (var $ = b.rows[Symbol.iterator](), x; !(v = (x = $.next()).done); v = !0) {
                                                        var w = x.value,
                                                            g = !0,
                                                            Z = !1,
                                                            L = void 0;
                                                        try {
                                                            for (var j = w[Symbol.iterator](), B; !(g = (B = j.next()).done); g = !0) {
                                                                var ce = B.value;
                                                                n = n.concat(f.walkTokens(ce.tokens, t))
                                                            }
                                                        } catch (F) {
                                                            Z = !0, L = F
                                                        } finally {
                                                            try {
                                                                !g && j.return != null && j.return()
                                                            } finally {
                                                                if (Z) throw L
                                                            }
                                                        }
                                                    }
                                                } catch (F) {
                                                    T = !0, O = F
                                                } finally {
                                                    try {
                                                        !v && $.return != null && $.return()
                                                    } finally {
                                                        if (T) throw O
                                                    }
                                                }
                                                break
                                            }
                                        case "list":
                                            {
                                                var we = k;n = n.concat(f.walkTokens(we.items, t));
                                                break
                                            }
                                        default:
                                            {
                                                var _, N, Q = k;!((_ = f.defaults.extensions) === null || _ === void 0 || (N = _.childTokens) === null || N === void 0) && N[Q.type] ? f.defaults.extensions.childTokens[Q.type].forEach(function(F) {
                                                    var Mt = Q[F].flat(1 / 0);
                                                    n = n.concat(a.walkTokens(Mt, t))
                                                }) : Q.tokens && (n = n.concat(f.walkTokens(Q.tokens, t)))
                                            }
                                    }
                                }, h = e[Symbol.iterator](), y; !(o = (y = h.next()).done); o = !0) p()
                        } catch (k) {
                            l = !0, u = k
                        } finally {
                            try {
                                !o && h.return != null && h.return()
                            } finally {
                                if (l) throw u
                            }
                        }
                        return n
                    }, i.use = function() {
                        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        var n = this,
                            o = this.defaults.extensions || {
                                renderers: {},
                                childTokens: {}
                            };
                        return t.forEach(function(l) {
                            var u = q({}, l);
                            if (u.async = n.defaults.async || u.async || !1, l.extensions && (l.extensions.forEach(function(c) {
                                    if (!c.name) throw new Error("extension name required");
                                    if ("renderer" in c) {
                                        var v = o.renderers[c.name];
                                        v ? o.renderers[c.name] = function() {
                                            for (var O = arguments.length, $ = new Array(O), x = 0; x < O; x++) $[x] = arguments[x];
                                            var w = c.renderer.apply(this, $);
                                            return w === !1 && (w = v.apply(this, $)), w
                                        } : o.renderers[c.name] = c.renderer
                                    }
                                    if ("tokenizer" in c) {
                                        if (!c.level || c.level !== "block" && c.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                                        var T = o[c.level];
                                        T ? T.unshift(c.tokenizer) : o[c.level] = [c.tokenizer], c.start && (c.level === "block" ? o.startBlock ? o.startBlock.push(c.start) : o.startBlock = [c.start] : c.level === "inline" && (o.startInline ? o.startInline.push(c.start) : o.startInline = [c.start]))
                                    }
                                    "childTokens" in c && c.childTokens && (o.childTokens[c.name] = c.childTokens)
                                }), u.extensions = o), l.renderer) {
                                var f = function(c) {
                                        if (!(c in p)) throw new Error("renderer '".concat(c, "' does not exist"));
                                        if (c === "options") return "continue";
                                        var v = c,
                                            T = l.renderer[v],
                                            O = p[v];
                                        p[v] = function() {
                                            for (var $ = arguments.length, x = new Array($), w = 0; w < $; w++) x[w] = arguments[w];
                                            var g = T.apply(p, x);
                                            return g === !1 && (g = O.apply(p, x)), g || ""
                                        }
                                    },
                                    p = n.defaults.renderer || new re(n.defaults);
                                for (var h in l.renderer) f(h);
                                u.renderer = p
                            }
                            if (l.tokenizer) {
                                var y = function(c) {
                                        if (!(c in k)) throw new Error("tokenizer '".concat(c, "' does not exist"));
                                        if (["options", "rules", "lexer"].includes(c)) return "continue";
                                        var v = c,
                                            T = l.tokenizer[v],
                                            O = k[v];
                                        k[v] = function() {
                                            for (var $ = arguments.length, x = new Array($), w = 0; w < $; w++) x[w] = arguments[w];
                                            var g = T.apply(k, x);
                                            return g === !1 && (g = O.apply(k, x)), g
                                        }
                                    },
                                    k = n.defaults.tokenizer || new K(n.defaults);
                                for (var b in l.tokenizer) y(b);
                                u.tokenizer = k
                            }
                            if (l.hooks) {
                                var S = function(c) {
                                        if (!(c in d)) throw new Error("hook '".concat(c, "' does not exist"));
                                        if (c === "options") return "continue";
                                        var v = c,
                                            T = l.hooks[v],
                                            O = d[v];
                                        W.passThroughHooks.has(c) ? d[v] = function($) {
                                            if (n.defaults.async) return Promise.resolve(T.call(d, $)).then(function(w) {
                                                return O.call(d, w)
                                            });
                                            var x = T.call(d, $);
                                            return O.call(d, x)
                                        } : d[v] = function() {
                                            for (var $ = arguments.length, x = new Array($), w = 0; w < $; w++) x[w] = arguments[w];
                                            var g = T.apply(d, x);
                                            return g === !1 && (g = O.apply(d, x)), g
                                        }
                                    },
                                    d = n.defaults.hooks || new W;
                                for (var E in l.hooks) S(E);
                                u.hooks = d
                            }
                            if (l.walkTokens) {
                                var R = n.defaults.walkTokens,
                                    I = l.walkTokens;
                                u.walkTokens = function(c) {
                                    var v = [];
                                    return v.push(I.call(this, c)), R && (v = v.concat(R.call(this, c))), v
                                }
                            }
                            n.defaults = q({}, n.defaults, u)
                        }), this
                    }, i.setOptions = function(e) {
                        return this.defaults = q({}, this.defaults, e), this
                    }, i.lexer = function(e, t) {
                        return C.lex(e, t != null ? t : this.defaults)
                    }, i.parser = function(e, t) {
                        return D.parse(e, t != null ? t : this.defaults)
                    }, s
                }();

            function Me(s, i) {
                var r = this;
                return function(e, t) {
                    var a = q({}, t),
                        n = q({}, r.defaults, a);
                    r.defaults.async === !0 && a.async === !1 && (n.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), n.async = !0);
                    var o = fe(r, De, Et).call(r, !!n.silent, !!n.async);
                    if (typeof e == "undefined" || e === null) return o(new Error("marked(): input parameter is undefined or null"));
                    if (typeof e != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
                    if (n.hooks && (n.hooks.options = n), n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(e) : e).then(function(f) {
                        return s(f, n)
                    }).then(function(f) {
                        return n.hooks ? n.hooks.processAllTokens(f) : f
                    }).then(function(f) {
                        return n.walkTokens ? Promise.all(r.walkTokens(f, n.walkTokens)).then(function() {
                            return f
                        }) : f
                    }).then(function(f) {
                        return i(f, n)
                    }).then(function(f) {
                        return n.hooks ? n.hooks.postprocess(f) : f
                    }).catch(o);
                    try {
                        n.hooks && (e = n.hooks.preprocess(e));
                        var l = s(e, n);
                        n.hooks && (l = n.hooks.processAllTokens(l)), n.walkTokens && r.walkTokens(l, n.walkTokens);
                        var u = i(l, n);
                        return n.hooks && (u = n.hooks.postprocess(u)), u
                    } catch (f) {
                        return o(f)
                    }
                }
            }

            function Et(s, i) {
                return function(r) {
                    if (r.message += "\nPlease report this to https://github.com/markedjs/marked.", s) {
                        var e = "<p>An error occurred:</p><pre>" + P(r.message + "", !0) + "</pre>";
                        return i ? Promise.resolve(e) : e
                    }
                    if (i) return Promise.reject(r);
                    throw r
                }
            }
            var H = new Qe;

            function m(s, i) {
                return H.parse(s, i)
            }
            m.options = m.setOptions = function(s) {
                return H.setOptions(s), m.defaults = H.defaults, $e(m.defaults), m
            }, m.getDefaults = ae, m.defaults = A.defaults, m.use = function() {
                for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
                var e;
                return (e = H).use.apply(e, V(i)), m.defaults = H.defaults, $e(m.defaults), m
            }, m.walkTokens = function(s, i) {
                return H.walkTokens(s, i)
            }, m.parseInline = H.parseInline, m.Parser = D, m.parser = D.parse, m.Renderer = re, m.TextRenderer = ue, m.Lexer = C, m.lexer = C.lex, m.Tokenizer = K, m.Hooks = W, m.parse = m;
            var Pt = m.options,
                _t = m.setOptions,
                qt = m.use,
                Zt = m.walkTokens,
                jt = m.parseInline,
                Ct = m,
                Dt = D.parse,
                Qt = C.lex;
            A.Hooks = W, A.Lexer = C, A.Marked = Qe, A.Parser = D, A.Renderer = re, A.TextRenderer = ue, A.Tokenizer = K, A.getDefaults = ae, A.lexer = Qt, A.marked = m, A.options = Pt, A.parse = Ct, A.parseInline = jt, A.parser = Dt, A.setOptions = _t, A.use = qt, A.walkTokens = Zt
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/ee3d3bb93f37f17a74d5f52c605a6dd9/36262-098f851abf2517980ac2-min.en-US.js.map