(function(sttc) {
    'use strict';
    var aa, ba = Object.create,
        ca = Object.defineProperty,
        da = globalThis,
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        fa = {},
        ha = {};

    function ia(a, b, c) {
        if (!c || a != null) {
            c = ha[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ca(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ha[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ha[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var la = Object.setPrototypeOf;

    function na(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        la(a, b);
        a.Kn = b.prototype
    }
    ka("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    ka("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        na(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new fa.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    ka("Promise.withResolvers", function(a) {
        return a ? a : function() {
            var b, c;
            return {
                promise: new Promise(function(d, e) {
                    b = d;
                    c = e
                }),
                resolve: b,
                reject: c
            }
        }
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function oa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = t, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function pa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function qa(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ra(a) {
        return Object.prototype.hasOwnProperty.call(a, sa) && a[sa] || (a[sa] = ++ua)
    }
    var sa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        ua = 0;

    function va(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function wa(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ya(a, b, c) {
        ya = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? va : wa;
        return ya.apply(null, arguments)
    }

    function Aa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ba(a, b, c) {
        a = a.split(".");
        c = c || t;
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ca(a) {
        return a
    }

    function Da(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Kn = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.kp = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var Ea = {
        Yo: 0,
        Xo: 1,
        Wo: 2
    };
    var Fa;
    let Ga;

    function Ha(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };

    function Ia(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    var Ja = oa(610401301, !1),
        Ka = oa(748402147, !0);

    function La() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ma;
    const Na = t.navigator;
    Ma = Na ? Na.userAgentData || null : null;

    function Oa(a) {
        if (!Ja || !Ma) return !1;
        for (let b = 0; b < Ma.brands.length; b++) {
            let {
                brand: c
            } = Ma.brands[b];
            if (c && c.indexOf(a) != -1) return !0
        }
        return !1
    }

    function Pa(a) {
        return La().indexOf(a) != -1
    };

    function Qa() {
        return Ja ? !!Ma && Ma.brands.length > 0 : !1
    }

    function Ra() {
        return Qa() ? !1 : Pa("Opera")
    }

    function Sa() {
        return Pa("Firefox") || Pa("FxiOS")
    }

    function Ta() {
        return Pa("Safari") && !(Ua() || (Qa() ? 0 : Pa("Coast")) || Ra() || (Qa() ? 0 : Pa("Edge")) || (Qa() ? Oa("Microsoft Edge") : Pa("Edg/")) || (Qa() ? Oa("Opera") : Pa("OPR")) || Sa() || Pa("Silk") || Pa("Android"))
    }

    function Ua() {
        return Qa() ? Oa("Chromium") : (Pa("Chrome") || Pa("CriOS")) && !(Qa() ? 0 : Pa("Edge")) || Pa("Silk")
    };

    function Xa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Za(a, b) {
        var c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function $a(a, b) {
        var c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function ab(a, b) {
        var c = a.length,
            d = [],
            e = 0,
            f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                let h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function bb(a, b) {
        var c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function cb(a, b) {
        var c = 1;
        Za(a, function(d, e) {
            c = b.call(void 0, c, d, e, a)
        });
        return c
    }

    function db(a, b) {
        var c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function fb(a, b) {
        return Xa(a, b) >= 0
    }

    function gb(a, b) {
        b = Xa(a, b);
        var c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function hb(a, b) {
        var c = 0;
        $a(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function ib(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function kb(a) {
        var b = a.length;
        if (b > 0) {
            let c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function lb(a, b) {
        for (let d = 1; d < arguments.length; d++) {
            let e = arguments[d];
            var c = pa(e);
            if (c == "array" || c == "object" && typeof e.length == "number") {
                c = a.length || 0;
                let f = e.length || 0;
                a.length = c + f;
                for (let g = 0; g < f; g++) a[c + g] = e[g]
            } else a.push(e)
        }
    }

    function mb(a, b, c) {
        c = c || nb;
        for (var d = 0, e = a.length, f; d < e;) {
            let g = d + (e - d >>> 1),
                h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function nb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ob(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            let d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function pb(a) {
        pb[" "](a);
        return a
    }
    pb[" "] = function() {};

    function qb(a, b) {
        try {
            return pb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var rb = Qa() ? !1 : Pa("Trident") || Pa("MSIE"),
        sb = Pa("Edge") || rb,
        tb = Pa("Gecko") && !(La().toLowerCase().indexOf("webkit") != -1 && !Pa("Edge")) && !(Pa("Trident") || Pa("MSIE")) && !Pa("Edge"),
        vb = La().toLowerCase().indexOf("webkit") != -1 && !Pa("Edge");
    const wb = {};
    let xb = null;

    function yb(a, b) {
        b === void 0 && (b = 0);
        zb();
        b = wb[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Ab(a) {
        var b = [];
        Db(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Db(a, b) {
        function c(e) {
            for (; d < a.length;) {
                let f = a.charAt(d++),
                    g = xb[f];
                if (g != null) return g;
                if (!/^[\s\xa0]*$/.test(f)) throw Error("Unknown base64 encoding at char: " + f);
            }
            return e
        }
        zb();
        for (var d = 0;;) {
            let e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function zb() {
        if (!xb) {
            xb = {};
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                b = ["+/=", "+/", "-_=", "-_.", "-_"];
            for (let c = 0; c < 5; c++) {
                let d = a.concat(b[c].split(""));
                wb[c] = d;
                for (let e = 0; e < d.length; e++) {
                    let f = d[e];
                    xb[f] === void 0 && (xb[f] = e)
                }
            }
        }
    };
    var Eb = typeof structuredClone != "undefined";

    function Fb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Gb = void 0,
        Hb;

    function Ib(a) {
        if (Hb) throw Error("");
        Hb = b => {
            t.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Jb(a) {
        if (Hb) try {
            Hb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Kb() {
        var a = Error();
        Fb(a, "incident");
        Hb ? Jb(a) : Ha(a)
    }

    function Lb(a) {
        a = Error(a);
        Fb(a, "warning");
        Jb(a);
        return a
    }

    function Mb(a, b) {
        if (a != null) {
            var c = Gb ? ? (Gb = {});
            var d = c[a] || 0;
            d >= b || (c[a] = d + 1, Kb())
        }
    };

    function Nb(a, b = !1) {
        return b && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol()
    }
    var Ob = Nb(),
        Pb = Nb(),
        Qb = Nb(),
        Rb = Nb(),
        Sb = Nb(),
        Tb = Nb("m_m", !0);
    const u = Nb("jas", !0);
    var Ub;
    const Vb = [];
    Vb[u] = 7;
    Ub = Object.freeze(Vb);

    function Wb(a, b) {
        a[u] |= b
    }

    function Xb(a) {
        if (4 & a) return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }

    function Yb(a) {
        Wb(a, 34);
        return a
    }

    function Zb(a) {
        Wb(a, 8192);
        return a
    }

    function $b(a) {
        Wb(a, 32);
        return a
    };
    var ac = {};

    function bc(a, b) {
        return b === void 0 ? a.j !== cc && !!(2 & (a.aa[u] | 0)) : !!(2 & b) && a.j !== cc
    }
    const cc = {};
    class dc {
        constructor(a, b, c) {
            this.i = a;
            this.j = b;
            this.l = c
        }
        next() {
            var a = this.i.next();
            a.done || (a.value = this.j.call(this.l, a.value));
            return a
        }[Symbol.iterator]() {
            return this
        }
    }
    var ec = Object.freeze({});

    function fc(a, b, c) {
        var d = b & 128 ? 0 : -1,
            e = a.length,
            f;
        if (f = !!e) f = a[e - 1], f = f != null && typeof f === "object" && f.constructor === Object;
        var g = e + (f ? -1 : 0);
        for (b = b & 128 ? 1 : 0; b < g; b++) c(b - d, a[b]);
        if (f) {
            a = a[e - 1];
            for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && !isNaN(h) && c(+h, a[h])
        }
    }
    var hc = {};

    function ic(a) {
        a.wp = !0;
        return a
    };
    var jc = ic(a => typeof a === "number"),
        kc = ic(a => typeof a === "string"),
        lc = ic(a => typeof a === "boolean"),
        mc = ic(a => typeof a === "function"),
        nc = ic(a => !!a && (typeof a === "object" || typeof a === "function"));

    function oc() {
        return pc(ic((a, b) => a === void 0 ? !0 : kc(a, b)))
    }

    function pc(a) {
        a.ym = !0;
        return a
    }
    var qc = ic(a => Array.isArray(a));

    function rc() {
        return ic(a => qc(a) ? a.every(b => jc(b)) : !1)
    };

    function sc(a) {
        if (kc(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (jc(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var wc = ic(a => a >= tc && a <= uc);
    const tc = BigInt(Number.MIN_SAFE_INTEGER),
        uc = BigInt(Number.MAX_SAFE_INTEGER);
    let xc = 0,
        yc = 0,
        zc;

    function Ac(a) {
        var b = a >>> 0;
        xc = b;
        yc = (a - b) / 4294967296 >>> 0
    }

    function Bc(a) {
        if (a < 0) {
            Ac(-a);
            a = xc;
            var b = yc;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            let [c, d] = [a, b];
            xc = c >>> 0;
            yc = d >>> 0
        } else Ac(a)
    }

    function Cc(a, b) {
        var c = b * 4294967296 + (a >>> 0);
        return Number.isSafeInteger(c) ? c : Dc(a, b)
    }

    function Dc(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Ec() {
        var a = xc,
            b = yc,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Dc(a, b);
        return c
    }

    function Fc(a) {
        a.length < 16 ? Bc(Number(a)) : (a = BigInt(a), xc = Number(a & BigInt(4294967295)) >>> 0, yc = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Gc(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Hc = typeof BigInt === "function" ? BigInt.asIntN : void 0,
        Ic = typeof BigInt === "function" ? BigInt.asUintN : void 0,
        Jc = Number.isSafeInteger,
        Kc = Number.isFinite,
        Lc = Math.trunc;

    function Mc(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function Nc(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function Oc(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${pa(a)}: ${a}`);
        return a
    }

    function Pc(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const Qc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Rc(a) {
        switch (typeof a) {
            case "bigint":
                return !0;
            case "number":
                return Kc(a);
            case "string":
                return Qc.test(a);
            default:
                return !1
        }
    }

    function Sc(a) {
        if (!Kc(a)) throw Lb("enum");
        return a | 0
    }

    function Tc(a) {
        return a == null ? a : Kc(a) ? a | 0 : void 0
    }

    function Uc(a) {
        if (typeof a !== "number") throw Lb("int32");
        if (!Kc(a)) throw Lb("int32");
        return a | 0
    }

    function Vc(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return Kc(a) ? a | 0 : void 0
    }

    function Wc(a) {
        if (typeof a !== "number") throw Lb("uint32");
        if (!Kc(a)) throw Lb("uint32");
        return a >>> 0
    }

    function Xc(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return Kc(a) ? a >>> 0 : void 0
    }

    function Yc(a, b) {
        b ? ? (b = 1024);
        if (!Rc(a)) throw Lb("int64");
        var c = typeof a;
        switch (b) {
            case 512:
                switch (c) {
                    case "string":
                        return Zc(a);
                    case "bigint":
                        return String(Hc(64, a));
                    default:
                        return $c(a)
                }
            case 1024:
                switch (c) {
                    case "string":
                        return ad(a);
                    case "bigint":
                        return sc(Hc(64, a));
                    default:
                        return bd(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return Zc(a);
                    case "bigint":
                        return sc(Hc(64, a));
                    default:
                        return cd(a)
                }
            default:
                return Gc(b, "Unknown format requested type for int64")
        }
    }

    function cd(a) {
        a = Lc(a);
        if (!Jc(a)) {
            Bc(a);
            var b = xc,
                c = yc;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = Cc(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }

    function dd(a) {
        a = Lc(a);
        a >= 0 && Jc(a) || (Bc(a), a = Cc(xc, yc));
        return a
    }

    function $c(a) {
        a = Lc(a);
        Jc(a) ? a = String(a) : (Bc(a), a = Ec());
        return a
    }

    function ed(a) {
        a = Lc(a);
        a >= 0 && Jc(a) ? a = String(a) : (Bc(a), a = Dc(xc, yc));
        return a
    }

    function Zc(a) {
        var b = Lc(Number(a));
        if (Jc(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        b = a.length;
        (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807") || (Fc(a), a = Ec());
        return a
    }

    function ad(a) {
        var b = Lc(Number(a));
        if (Jc(b)) return sc(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return sc(Hc(64, BigInt(a)))
    }

    function bd(a) {
        return Jc(a) ? sc(cd(a)) : sc($c(a))
    }

    function fd(a) {
        return Jc(a) ? sc(dd(a)) : sc(ed(a))
    }

    function gd(a) {
        var b = Lc(Number(a));
        if (Jc(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        a[0] === "-" ? b = !1 : (b = a.length, b = b < 20 ? !0 : b === 20 && a <= "18446744073709551615");
        b || (Fc(a), a = Dc(xc, yc));
        return a
    }

    function hd(a) {
        var b = Lc(Number(a));
        if (Jc(b) && b >= 0) return sc(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return sc(Ic(64, BigInt(a)))
    }

    function id(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return wc(a) ? a = Number(a) : (a = Hc(64, a), a = wc(a) ? Number(a) : String(a)), a;
        if (Rc(a)) {
            var b;
            typeof a === "number" ? b = cd(a) : b = Zc(a);
            return b
        }
    }

    function jd(a) {
        var b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return sc(Hc(64, a));
        if (Rc(a)) return b === "string" ? ad(a) : bd(a)
    }

    function kd(a, b) {
        b ? ? (b = 1024);
        if (!Rc(a)) throw Lb("uint64");
        var c = typeof a;
        switch (b) {
            case 512:
                switch (c) {
                    case "string":
                        return gd(a);
                    case "bigint":
                        return String(Ic(64, a));
                    default:
                        return ed(a)
                }
            case 1024:
                switch (c) {
                    case "string":
                        return hd(a);
                    case "bigint":
                        return sc(Ic(64, a));
                    default:
                        return fd(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return gd(a);
                    case "bigint":
                        return sc(Ic(64, a));
                    default:
                        return dd(a)
                }
            default:
                return Gc(b, "Unknown format requested type for int64")
        }
    }

    function ld(a) {
        var b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return sc(Ic(64, a));
        if (Rc(a)) return b === "string" ? hd(a) : fd(a)
    }

    function md(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(Hc(64, a));
        if (Rc(a)) {
            if (b === "string") return Zc(a);
            if (b === "number") return cd(a)
        }
    }

    function od(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(Ic(64, a));
        if (Rc(a)) {
            if (b === "string") return gd(a);
            if (b === "number") return dd(a)
        }
    }

    function pd(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function qd(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function rd(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function sd(a, b, c, d) {
        if (a != null && a[Tb] === ac) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? b[Ob] || (b[Ob] = td(b)) : new b : void 0;
        c = a[u] | 0;
        d = c | d & 32 | d & 2;
        d !== c && (a[u] = d);
        return new b(a)
    }

    function td(a) {
        a = new a;
        Yb(a.aa);
        return a
    }

    function ud(a, b, c) {
        return b ? pd(a) : rd(a) ? ? (c ? "" : void 0)
    }

    function vd(a, b, c) {
        a = b ? Sc(a) : Tc(a);
        return a == null ? c ? 0 : void 0 : a
    };

    function wd(a) {
        return a
    };
    const xd = {},
        yd = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function zd(a) {
        return a
    }

    function Ad(a) {
        if (a.dd & 2) throw Error("Cannot mutate an immutable Map");
    }
    var Dd = class extends yd {
        constructor(a, b, c = zd, d = zd) {
            super();
            this.dd = a[u] | 0;
            this.Uc = b;
            this.Tf = c;
            this.sk = this.Uc ? Bd : d;
            for (let e = 0; e < a.length; e++) {
                let f = a[e],
                    g = c(f[0], !1, !0),
                    h = f[1];
                b ? h === void 0 && (h = null) : h = d(f[1], !1, !0, void 0, void 0, this.dd);
                super.set(g, h)
            }
        }
        Ii(a) {
            return Zb(Array.from(super.entries(), a))
        }
        clear() {
            Ad(this);
            super.clear()
        }
        delete(a) {
            Ad(this);
            return super.delete(this.Tf(a, !0, !1))
        }
        entries() {
            if (this.Uc) {
                var a = super.keys();
                a = new dc(a, Cd, this)
            } else a = super.entries();
            return a
        }
        values() {
            if (this.Uc) {
                var a =
                    super.keys();
                a = new dc(a, Dd.prototype.get, this)
            } else a = super.values();
            return a
        }
        forEach(a, b) {
            this.Uc ? super.forEach((c, d, e) => {
                a.call(b, e.get(d), d, e)
            }) : super.forEach(a, b)
        }
        set(a, b) {
            Ad(this);
            a = this.Tf(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.sk(b, !0, !0, this.Uc, !1, this.dd))
        }
        has(a) {
            return super.has(this.Tf(a, !1, !1))
        }
        get(a) {
            a = this.Tf(a, !1, !1);
            var b = super.get(a);
            if (b !== void 0) {
                var c = this.Uc;
                return c ? (c = this.sk(b, !1, !0, c, this.kl, this.dd), c !== b && super.set(a, c), c) : b
            }
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    Dd.prototype.toJSON = void 0;

    function Bd(a, b, c, d, e, f) {
        a = sd(a, d, c, f);
        e && (a = Ed(a));
        return a
    }

    function Cd(a) {
        return [a, this.get(a)]
    }
    let Fd;

    function Gd() {
        return Fd || (Fd = new Dd(Yb([]), void 0, void 0, void 0, xd))
    };

    function Hd(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        var f = [],
            g = a.length,
            h = 4294967295,
            k = !1,
            l = !!(b & 64),
            m = l ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1)) {
            var n = g && a[g - 1];
            n != null && typeof n === "object" && n.constructor === Object ? (g--, h = g) : n = void 0;
            !l || b & 128 || e || (k = !0, h = (Id ? ? wd)(h - m, m, a, n, void 0) + m)
        }
        b = void 0;
        for (e = 0; e < g; e++) {
            let p = a[e];
            if (p != null && (p = c(p, d)) != null)
                if (l && e >= h) {
                    let q = e - m;
                    (b ? ? (b = {}))[q] = p
                } else f[e] = p
        }
        if (n)
            for (let p in n) {
                if (!Object.prototype.hasOwnProperty.call(n, p)) continue;
                a = n[p];
                if (a == null || (a = c(a, d)) == null) continue;
                g = +p;
                let q;
                l && !Number.isNaN(g) && (q = g + m) < h ? f[q] = a : (b ? ? (b = {}))[p] = a
            }
        b && (k ? f.push(b) : f[h] = b);
        return f
    }

    function Jd(a) {
        a[0] = Kd(a[0]);
        a[1] = Kd(a[1]);
        return a
    }

    function Kd(a) {
        switch (typeof a) {
            case "number":
                return Number.isFinite(a) ? a : "" + a;
            case "bigint":
                return wc(a) ? Number(a) : "" + a;
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (Array.isArray(a)) {
                    let b = a[u] | 0;
                    return a.length === 0 && b & 1 ? void 0 : Hd(a, b, Kd)
                }
                if (a != null && a[Tb] === ac) return Ld(a);
                if (a instanceof Dd) return a = a.size !== 0 ? a.Ii(Jd) : void 0, a;
                return
        }
        return a
    }
    var Pd = Eb ? structuredClone : a => Hd(a, 0, Kd);
    let Id;

    function Ld(a) {
        a = a.aa;
        return Hd(a, a[u] | 0, Kd)
    };
    let Qd, Rd;

    function Sd(a) {
        switch (typeof a) {
            case "boolean":
                return Qd || (Qd = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? Rd || (Rd = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function Td(a, b, c, d = 0) {
        if (a == null) {
            var e = 32;
            c ? (a = [c], e |= 128) : a = [];
            b && (e = e & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = a[u] | 0;
            if (Ka && 1 & e) throw Error("rfarr");
            2048 & e && !(2 & e) && Ud();
            if (e & 256) throw Error("farr");
            if (e & 64) return (e | d) !== e && (a[u] = e | d), a;
            if (c && (e |= 128, c !== a[0])) throw Error("mid");
            a: {
                c = a;e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1;
                    let k = c[g];
                    if (k != null && typeof k === "object" && k.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024) throw Error("pvtlmt");
                        for (var h in k) {
                            if (!Object.prototype.hasOwnProperty.call(k,
                                    h)) continue;
                            f = +h;
                            if (f < g) c[f + b] = k[h], delete k[h];
                            else break
                        }
                        e = e & -16760833 | (g & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    h = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (h > 1024) throw Error("spvt");
                    e = e & -16760833 | (h & 1023) << 14
                }
            }
        }
        a[u] = e | 64 | d;
        return a
    }

    function Ud() {
        if (Ka) throw Error("carr");
        Mb(Sb, 5)
    };

    function Vd(a, b) {
        if (typeof a !== "object") return a;
        if (Array.isArray(a)) {
            var c = a[u] | 0;
            return a.length === 0 && c & 1 ? void 0 : Wd(a, c, b)
        }
        if (a != null && a[Tb] === ac) return Xd(a);
        if (a instanceof Dd) {
            c = a.dd;
            if (c & 2) return a;
            if (a.size) {
                b = Yb(a.Ii());
                if (a.Uc)
                    for (a = 0; a < b.length; a++) {
                        let d = b[a],
                            e = d[1];
                        e == null || typeof e !== "object" ? e = void 0 : e != null && e[Tb] === ac ? e = Xd(e) : Array.isArray(e) ? e = Wd(e, e[u] | 0, !!(c & 32)) : e = void 0;
                        d[1] = e
                    }
                return b
            }
        }
    }

    function Wd(a, b, c) {
        if (b & 2) return a;
        !c || 4096 & b || 16 & b ? a = Yd(a, b, !1, c && !(b & 16)) : (Wb(a, 34), b & 4 && Object.freeze(a));
        return a
    }

    function Zd(a, b, c) {
        a = new a.constructor(b);
        c && (a.j = cc);
        a.B = cc;
        return a
    }

    function Xd(a) {
        var b = a.aa,
            c = b[u] | 0;
        return bc(a, c) ? a : $d(a, b, c) ? Zd(a, b) : Yd(b, c)
    }

    function ae(a) {
        var b = a.aa,
            c = b[u] | 0;
        return $d(a, b, c) ? Zd(a, b, !0) : new a.constructor(Yd(b, c, !1))
    }

    function Yd(a, b, c, d) {
        d ? ? (d = !!(34 & b));
        a = Hd(a, b, Vd, d);
        d = 32;
        c && (d |= 2);
        b = b & 16769217 | d;
        a[u] = b;
        return a
    }

    function Ed(a) {
        var b = a.aa,
            c = b[u] | 0;
        return bc(a, c) ? $d(a, b, c) ? Zd(a, b, !0) : new a.constructor(Yd(b, c, !1)) : a
    }

    function be(a) {
        var b = a.aa,
            c = b[u] | 0;
        return bc(a, c) ? a : $d(a, b, c) ? Zd(a, b) : new a.constructor(Yd(b, c, !0))
    }

    function ce(a) {
        if (a.j !== cc) return !1;
        var b = a.aa;
        b = Yd(b, b[u] | 0);
        Wb(b, 2048);
        a.aa = b;
        a.j = void 0;
        a.B = void 0;
        return !0
    }

    function de(a) {
        if (!ce(a) && bc(a, a.aa[u] | 0)) throw Error();
    }

    function ee(a, b) {
        b === void 0 && (b = a[u] | 0);
        b & 32 && !(b & 4096) && (a[u] = b | 4096)
    }

    function $d(a, b, c) {
        return c & 2 ? !0 : c & 32 && !(c & 4096) ? (b[u] = c | 2, a.j = cc, !0) : !1
    };
    const fe = sc(0),
        ge = {};

    function he(a, b, c, d, e) {
        b = ie(a.aa, b, c, e);
        if (b !== null || d && a.B !== cc) return b
    }

    function ie(a, b, c, d) {
        if (b === -1) return null;
        var e = b + (c ? 0 : -1),
            f = a.length - 1;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f) {
                var g = a[f];
                if (g != null && typeof g === "object" && g.constructor === Object) {
                    c = g[b];
                    var h = !0
                } else if (e === f) c = g;
                else return
            } else c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null) return d;
                if (!Object.is(d, c)) return h ? g[b] = d : a[e] = d, d
            }
            return c
        }
    }

    function je(a, b, c) {
        de(a);
        var d = a.aa;
        ke(d, d[u] | 0, b, c);
        return a
    }

    function ke(a, b, c, d, e) {
        var f = c + (e ? 0 : -1),
            g = a.length - 1;
        if (g >= 1 + (e ? 0 : -1) && f >= g) {
            let h = a[g];
            if (h != null && typeof h === "object" && h.constructor === Object) return h[c] = d, b
        }
        if (f <= g) return a[f] = d, b;
        d !== void 0 && (g = (b ? ? (b = a[u] | 0)) >> 14 & 1023 || 536870912, c >= g ? d != null && (a[g + (e ? 0 : -1)] = {
            [c]: d
        }) : a[f] = d);
        return b
    }

    function le(a, b, c) {
        a = a.aa;
        return me(a, a[u] | 0, b, c) !== void 0
    }

    function ne(a, b, c, d) {
        var e = a.aa;
        return me(e, e[u] | 0, b, pe(a, d, c)) !== void 0
    }

    function qe(a, b, c) {
        return he(a, b, void 0, c, Nc)
    }

    function re(a) {
        return a === ec ? 2 : 4
    }

    function se(a, b, c, d, e, f, g) {
        var h = a.aa,
            k = h[u] | 0;
        d = bc(a, k) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && ce(a) && (h = a.aa, k = h[u] | 0);
        var l = te(h, b, g),
            m = l === Ub ? 7 : l[u] | 0,
            n = ue(m, k);
        var p = n;
        4 & p ? f == null ? a = !1 : (!e && f === 0 && (512 & p || 1024 & p) && (a.constructor[Qb] = (a.constructor[Qb] | 0) + 1) < 5 && Kb(), a = f === 0 ? !1 : !(f & p)) : a = !0;
        if (a) {
            4 & n && (l = [...l], m = 0, n = ve(n, k), k = ke(h, k, b, l, g));
            let q = p = 0;
            for (; p < l.length; p++) {
                let r = c(l[p]);
                r != null && (l[q++] = r)
            }
            q < p && (l.length = q);
            c = (n | 4) & -513;
            n = c &= -1025;
            f && (n |= f);
            n &= -4097
        }
        n !== m && (l[u] = n, 2 & n && Object.freeze(l));
        return l =
            we(l, n, h, k, b, g, d, a, e)
    }

    function we(a, b, c, d, e, f, g, h, k) {
        var l = b;
        g === 1 || (g !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? xe(b) || (b |= !a.length || h && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== l && (a[u] = b), Object.freeze(a)) : (g === 2 && xe(b) && (a = [...a], l = 0, b = ve(b, d), d = ke(c, d, e, a, f)), xe(b) || (k || (b |= 16), b !== l && (a[u] = b)));
        2 & b || !(4096 & b || 16 & b) || ee(c, d);
        return a
    }

    function te(a, b, c) {
        a = ie(a, b, c);
        return Array.isArray(a) ? a : Ub
    }

    function ue(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }

    function xe(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }

    function ye(a, b, c, d) {
        var e = a.aa,
            f = e[u] | 0;
        var g = bc(a, f);
        a: {!g && ce(a) && (e = a.aa, f = e[u] | 0);
                var h = ie(e, b);a = !1;
                if (h == null) {
                    if (g) {
                        b = Gd();
                        break a
                    }
                    h = []
                } else if (h.constructor === Dd)
                    if (h.dd & 2 && !g) h = h.Ii();
                    else {
                        b = h;
                        break a
                    }
                else Array.isArray(h) ? a = !!((h[u] | 0) & 2) : h = [];
                if (g) {
                    if (!h.length) {
                        b = Gd();
                        break a
                    }
                    a || (a = !0, Yb(h))
                } else if (a) {
                    a = !1;
                    Zb(h);
                    h = [...h];
                    for (let k = 0; k < h.length; k++) {
                        let l = h[k] = [...h[k]];
                        Array.isArray(l[1]) && (l[1] = Yb(l[1]))
                    }
                    h = Zb(h)
                }!a && f & 32 && $b(h);d = new Dd(h, c, ud, d);f = ke(e, f, b, d);a || ee(e, f);b = d
            }!g && c &&
            (b.kl = !0);
        return b
    }

    function ze(a, b) {
        this.set(b, a)
    }

    function Ae(a, b, c, d) {
        de(a);
        var e = a.aa,
            f = e[u] | 0;
        if (c == null) return ke(e, f, b), a;
        var g = c === Ub ? 7 : c[u] | 0,
            h = g,
            k = xe(g),
            l = k || Object.isFrozen(c);
        k || (g = 0);
        l || (c = [...c], h = 0, g = ve(g, f), l = !1);
        g |= 5;
        k = Xb(g) ? ? 1024;
        g |= k;
        for (let m = 0; m < c.length; m++) {
            let n = c[m],
                p = d(n, k);
            Object.is(n, p) || (l && (c = [...c], h = 0, g = ve(g, f), l = !1), c[m] = p)
        }
        g !== h && (l && (c = [...c], g = ve(g, f)), c[u] = g);
        ke(e, f, b, c);
        return a
    }

    function Be(a, b, c, d) {
        de(a);
        var e = a.aa;
        ke(e, e[u] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Ce(a, b, c, d) {
        de(a);
        var e = a.aa,
            f = e[u] | 0;
        if (d == null) {
            var g = De(e);
            if (Ee(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = De(e);
            let h = Ee(g, e, f, c);
            h !== b && (h && (f = ke(e, f, h)), g.set(c, b))
        }
        ke(e, f, b, d);
        return a
    }

    function pe(a, b, c) {
        return Fe(a, b) === c ? c : -1
    }

    function Fe(a, b) {
        a = a.aa;
        return Ee(De(a), a, void 0, b)
    }

    function De(a) {
        return a[Pb] ? ? (a[Pb] = new Map)
    }

    function Ee(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            let g = d[f];
            ie(b, g) != null && (e !== 0 && (c = ke(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function me(a, b, c, d) {
        var e = !1;
        d = ie(a, d, void 0, f => {
            var g = sd(f, c, !1, b);
            e = g !== f && g != null;
            return g
        });
        if (d != null) return e && !bc(d) && ee(a, b), d
    }

    function Ge(a, b, c) {
        a = a.aa;
        return me(a, a[u] | 0, b, c) || b[Ob] || (b[Ob] = td(b))
    }

    function He(a, b, c) {
        a = a.aa;
        return me(a, a[u] | 0, b, c)
    }

    function z(a, b, c) {
        var d = a.aa,
            e = d[u] | 0;
        b = me(d, e, b, c);
        if (b == null) return b;
        e = d[u] | 0;
        if (!bc(a, e)) {
            let f = Ed(b);
            f !== b && (ce(a) && (d = a.aa, e = d[u] | 0), b = f, e = ke(d, e, c, b), ee(d, e))
        }
        return b
    }

    function Ie(a, b, c, d, e, f, g, h, k) {
        var l = bc(a, c);
        f = l ? 1 : f;
        h = !!h || f === 3;
        l = k && !l;
        (f === 2 || l) && ce(a) && (b = a.aa, c = b[u] | 0);
        a = te(b, e, g);
        var m = a === Ub ? 7 : a[u] | 0,
            n = ue(m, c);
        if (k = !(4 & n)) {
            var p = a,
                q = c;
            let r = !!(2 & n);
            r && (q |= 2);
            let v = !r,
                y = !0,
                G = 0,
                w = 0;
            for (; G < p.length; G++) {
                let x = sd(p[G], d, !1, q);
                if (x instanceof d) {
                    if (!r) {
                        let C = bc(x);
                        v && (v = !C);
                        y && (y = C)
                    }
                    p[w++] = x
                }
            }
            w < G && (p.length = w);
            n |= 4;
            n = y ? n & -4097 : n | 4096;
            n = v ? n | 8 : n & -9
        }
        n !== m && (a[u] = n, 2 & n && Object.freeze(a));
        if (l && !(8 & n || !a.length && (f === 1 || (f !== 4 ? 0 : 2 & n || !(16 & n) && 32 & c)))) {
            xe(n) && (a = [...a], n = ve(n, c), c = ke(b, c, e, a, g));
            d = a;
            l = n;
            for (m = 0; m < d.length; m++) p = d[m], n = Ed(p), p !== n && (d[m] = n);
            l |= 8;
            n = l = d.length ? l | 4096 : l & -4097;
            a[u] = n
        }
        return a = we(a, n, b, c, e, g, f, k, h)
    }

    function Je(a, b, c, d) {
        var e = a.aa;
        return Ie(a, e, e[u] | 0, b, c, d, void 0, !1, !0)
    }

    function Ke(a) {
        a == null && (a = void 0);
        return a
    }

    function A(a, b, c) {
        c = Ke(c);
        je(a, b, c);
        c && !bc(c) && ee(a.aa);
        return a
    }

    function B(a, b, c, d) {
        d = Ke(d);
        Ce(a, b, c, d);
        d && !bc(d) && ee(a.aa);
        return a
    }

    function Le(a, b, c) {
        de(a);
        var d = a.aa,
            e = d[u] | 0;
        if (c == null) return ke(d, e, b), a;
        var f = c === Ub ? 7 : c[u] | 0,
            g = f,
            h = xe(f),
            k = h || Object.isFrozen(c),
            l = !0,
            m = !0;
        for (let p = 0; p < c.length; p++) {
            var n = c[p];
            h || (n = bc(n), l && (l = !n), m && (m = n))
        }
        h || (f = l ? 13 : 5, f = m ? f & -4097 : f | 4096);
        k && f === g || (c = [...c], g = 0, f = ve(f, e));
        f !== g && (c[u] = f);
        e = ke(d, e, b, c);
        2 & f || !(4096 & f || 16 & f) || ee(d, e);
        return a
    }

    function ve(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }

    function Me(a, b, c, d, e, f, g, h) {
        de(a);
        b = se(a, b, e, 2, !0, void 0, f);
        e = Xb(b === Ub ? 7 : b[u] | 0) ? ? 1024;
        if (h)
            if (Array.isArray(d))
                for (g = d.length, h = 0; h < g; h++) b.push(c(d[h], e));
            else
                for (let k of d) b.push(c(k, e));
        else {
            if (g) throw Error();
            b.push(c(d, e))
        }
        return a
    }

    function Ne(a, b, c, d) {
        var e = d;
        de(a);
        d = a.aa;
        b = Ie(a, d, d[u] | 0, c, b, 2, void 0, !0);
        e = e != null ? e : new c;
        b.push(e);
        var f = c = b === Ub ? 7 : b[u] | 0;
        (e = bc(e)) ? (c &= -9, b.length === 1 && (c &= -4097)) : c |= 4096;
        c !== f && (b[u] = c);
        e || ee(d);
        return a
    }

    function Oe(a, b) {
        var c = Pe;
        de(a);
        var d = a.aa;
        c = Ie(a, d, d[u] | 0, c, 2, 2, void 0, !0);
        var e = 0,
            f = 0;
        if (Array.isArray(b)) {
            var g = b.length;
            for (let k = 0; k < g; k++) {
                var h = b[k];
                c.push(h);
                (h = bc(h)) && !e++ && (c[u] &= -9);
                h || f++ || Wb(c, 4096)
            }
        } else
            for (g of b) b = g, c.push(b), (b = bc(b)) && !e++ && (c[u] &= -9), b || f++ || Wb(c, 4096);
        f && ee(d);
        return a
    }

    function Qe(a, b) {
        return id(he(a, b, void 0, void 0, jd))
    }

    function Re(a, b, c) {
        return he(a, b, void 0, c, jd)
    }

    function Se(a, b) {
        return se(a, b, jd, 1, void 0, 1024)
    }

    function Te(a, b, c) {
        return Vc(he(a, b, void 0, c))
    }

    function Ue(a, b, c, d) {
        return rd(he(a, b, c, d))
    }

    function D(a, b) {
        return Pc(he(a, b)) ? ? !1
    }

    function Ve(a, b) {
        return Te(a, b) ? ? 0
    }

    function We(a, b) {
        return Re(a, b) ? ? fe
    }

    function Xe(a, b, c = 0) {
        return qe(a, b) ? ? c
    }

    function E(a, b) {
        return Ue(a, b) ? ? ""
    }

    function F(a, b) {
        return Tc(he(a, b)) ? ? 0
    }

    function Ye(a) {
        {
            a = he(a, 10, void 0, void 0, ld);
            let b = typeof a;
            a = a == null ? a : b === "bigint" ? String(Ic(64, a)) : Rc(a) ? b === "string" ? gd(a) : dd(a) : void 0
        }
        return a ? ? "0"
    }

    function Ze(a, b) {
        return se(a, b, Vc, re())
    }

    function $e(a, b) {
        return se(a, b, Tc, re())
    }

    function af(a, b, c, d) {
        return z(a, b, pe(a, d, c))
    }

    function bf(a, b) {
        return Pc(he(a, b, void 0, ge))
    }

    function cf(a, b) {
        return Ue(a, b, void 0, ge)
    }

    function df(a, b) {
        return Tc(he(a, b, void 0, ge))
    }

    function ef(a, b, c) {
        return je(a, b, c == null ? c : Oc(c))
    }

    function ff(a, b, c) {
        return Be(a, b, c == null ? c : Oc(c), !1)
    }

    function gf(a, b, c) {
        return je(a, b, c == null ? c : Uc(c))
    }

    function hf(a, b, c) {
        return Be(a, b, c == null ? c : Uc(c), 0)
    }

    function jf(a, b, c) {
        return je(a, b, c == null ? c : Yc(c, void 0))
    }

    function kf(a, b, c) {
        return Be(a, b, c == null ? c : Yc(c, void 0), "0")
    }

    function mf(a, b, c, d) {
        return Ce(a, b, c, d == null ? d : Yc(d, void 0))
    }

    function nf(a, b, c) {
        return Be(a, b, c == null ? c : kd(c, void 0), "0")
    }

    function of (a, b, c) {
        return je(a, b, qd(c))
    }

    function pf(a, b, c) {
        return Be(a, b, qd(c), "")
    }

    function qf(a, b, c) {
        return je(a, b, c == null ? c : Sc(c))
    }

    function I(a, b, c) {
        return Be(a, b, c == null ? c : Sc(c), 0)
    }

    function rf(a, b) {
        b = pe(a, sf, b);
        return Ue(a, b) != null
    };

    function tf(a) {
        return new uf(a & 4294967295, Math.floor(a / 4294967296))
    }

    function vf(a) {
        if (!a) return wf || (wf = new uf(0, 0));
        if (!/^\d+$/.test(a)) return null;
        Fc(a);
        return new uf(xc, yc)
    }
    var uf = class {
        constructor(a, b) {
            this.j = a >>> 0;
            this.i = b >>> 0
        }
    };
    let wf;

    function xf(a) {
        return new yf(a & 4294967295, Math.floor(a / 4294967296))
    }

    function zf(a) {
        if (!a) return Af || (Af = new yf(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Fc(a);
        return new yf(xc, yc)
    }
    var yf = class {
        constructor(a, b) {
            this.j = a >>> 0;
            this.i = b >>> 0
        }
    };
    let Af, Bf, Cf, Df, Ef, Ff, Gf, Hf;

    function If(a, b, c) {
        if (typeof BigInt64Array !== "undefined") return Gf || (Gf = new BigInt64Array(1), Hf = new Uint32Array(Gf.buffer), Gf[0] = BigInt(1), Ff = Hf[0] === 1), Gf[0] = a, a = Ff ? 0 : 1, new b(Hf[a], Hf[1 - a]);
        Ef || (Bf = BigInt(Number.MIN_SAFE_INTEGER), Cf = BigInt(Number.MAX_SAFE_INTEGER), Df = BigInt(4294967295), Ef = BigInt(32));
        if (a >= Bf && a <= Cf) return c(Number(a));
        a = BigInt.asUintN(64, a);
        return new b(Number(a & Df), Number(a >> Ef))
    };

    function Jf(a, b, c) {
        for (; c > 0 || b > 127;) a.i.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.i.push(b)
    }

    function Kf(a, b) {
        for (; b > 127;) a.i.push(b & 127 | 128), b >>>= 7;
        a.i.push(b)
    }

    function Lf(a, b) {
        if (b >= 0) Kf(a, b);
        else {
            for (let c = 0; c < 9; c++) a.i.push(b & 127 | 128), b >>= 7;
            a.i.push(1)
        }
    }
    var Mf = class {
        constructor() {
            this.i = []
        }
        length() {
            return this.i.length
        }
        end() {
            var a = this.i;
            this.i = [];
            return a
        }
    };

    function Nf(a, b) {
        b.length !== 0 && (a.l.push(b), a.j += b.length)
    }

    function Of(a, b, c) {
        Kf(a.i, b * 8 + c)
    }

    function Pf(a, b) {
        Of(a, b, 2);
        b = a.i.end();
        Nf(a, b);
        b.push(a.j);
        return b
    }

    function Qf(a, b) {
        var c = b.pop();
        for (c = a.j + a.i.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.j++;
        b.push(c);
        a.j++
    }
    var Rf = class {
        constructor() {
            this.l = [];
            this.j = 0;
            this.i = new Mf
        }
    };

    function Sf() {
        var a = class {
            constructor() {
                throw Error();
            }
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Tf = Sf(),
        Uf = Sf(),
        Vf = Sf(),
        Wf = Sf(),
        Xf = Sf(),
        Yf = Sf(),
        Zf = Sf(),
        $f = Sf(),
        ag = Sf();

    function bg(a) {
        return Ed(a)
    }

    function cg(a) {
        return JSON.stringify(Ld(a))
    }

    function dg(a) {
        return be(a)
    }
    var J = class {
        constructor(a) {
            this.aa = Td(a, void 0, void 0, 2048)
        }
        toJSON() {
            return Ld(this)
        }
    };
    J.prototype[Tb] = ac;

    function eg(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error();
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error();
        return new a($b(b))
    };
    var fg = class {
        constructor(a, b) {
            this.i = a;
            a = Ca(Tf);
            this.j = !!a && b === a || !1
        }
    };

    function gg(a, b, c, d, e) {
        b = hg(b, d);
        b != null && (c = Pf(a, c), e(b, a), Qf(a, c))
    }
    const ig = new fg(gg, Tf),
        jg = new fg(gg, Tf);
    var kg = Symbol(),
        lg = Symbol();
    let mg, ng;

    function og(a) {
        var b = pg,
            c = qg,
            d = a[kg];
        if (d) return d;
        d = {};
        d.lp = a;
        d.Fj = Sd(a[0]);
        var e = a[1],
            f = 1;
        e && e.constructor === Object && (d.Sl = e, e = a[++f], typeof e === "function" && (d.xm = !0, mg ? ? (mg = e), ng ? ? (ng = a[f + 1]), e = a[f += 2]));
        for (var g = {}; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
            for (var h = 0; h < e.length; h++) g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0;) {
            typeof e === "number" && (h += e, e = a[++f]);
            let m;
            var k = void 0;
            e instanceof fg ? m = e : (m = ig, f--);
            if (m ? .j) {
                e = a[++f];
                k = a;
                var l = f;
                typeof e === "function" && (e = e(), k[l] =
                    e);
                k = e
            }
            e = a[++f];
            l = h + 1;
            typeof e === "number" && e < 0 && (l -= e, e = a[++f]);
            for (; h < l; h++) {
                let n = g[h];
                k ? c(d, h, m, k, n) : b(d, h, m, n)
            }
        }
        return a[kg] = d
    }

    function hg(a, b) {
        if (a instanceof J) return a.aa;
        if (Array.isArray(a)) return Td(a, b[0], b[1])
    };

    function pg(a, b, c) {
        a[b] = c.i
    }

    function qg(a, b, c, d) {
        var e, f, g = c.i;
        a[b] = (h, k, l) => g(h, k, l, f || (f = og(d).Fj), e || (e = rg(d)))
    }

    function rg(a) {
        var b = a[lg];
        if (!b) {
            let c = og(a);
            b = (d, e) => sg(d, e, c);
            a[lg] = b
        }
        return b
    }

    function sg(a, b, c) {
        fc(a, a[u] | 0, (d, e) => {
            if (e != null) {
                var f = tg(c, d);
                f ? f(b, e, d) : d < 500 || Mb(Rb, 3)
            }
        })
    }

    function tg(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Sl)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof fg ? c : [jg, c] : [c, void 0];
                var d = c[0].i;
                if (c = c[1]) {
                    let e = rg(c),
                        f = og(c).Fj;
                    c = a.xm ? ng(f, e) : (g, h, k) => d(g, h, k, f, e)
                } else c = d;
                return a[b] = c
            }
    };
    var ug = (a, b) => {
        var c = new Rf;
        sg(a.aa, c, og(b));
        Nf(c, c.i.end());
        a = new Uint8Array(c.j);
        b = c.l;
        var d = b.length,
            e = 0;
        for (let f = 0; f < d; f++) {
            let g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.l = [a];
        return a
    };

    function vg(a, b) {
        return new fg(a, b)
    }
    var wg = vg(function(a, b, c) {
            b = Nc(b);
            b != null && (Of(a, c, 5), a = a.i, c = zc || (zc = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), yc = 0, b = xc = c.getUint32(0, !0), a.i.push(b >>> 0 & 255), a.i.push(b >>> 8 & 255), a.i.push(b >>> 16 & 255), a.i.push(b >>> 24 & 255))
        }, $f),
        xg = vg(function(a, b, c) {
            b = md(b);
            if (b != null) {
                switch (typeof b) {
                    case "string":
                        zf(b)
                }
                if (b != null) switch (Of(a, c, 0), typeof b) {
                    case "number":
                        a = a.i;
                        Bc(b);
                        Jf(a, xc, yc);
                        break;
                    case "bigint":
                        c = If(b, yf, xf);
                        Jf(a.i, c.j, c.i);
                        break;
                    default:
                        c = zf(b), Jf(a.i, c.j, c.i)
                }
            }
        }, Yf),
        yg = vg(function(a,
            b, c) {
            b = od(b);
            if (b != null) {
                switch (typeof b) {
                    case "string":
                        vf(b)
                }
                if (b != null) switch (Of(a, c, 0), typeof b) {
                    case "number":
                        a = a.i;
                        Bc(b);
                        Jf(a, xc, yc);
                        break;
                    case "bigint":
                        c = If(b, uf, tf);
                        Jf(a.i, c.j, c.i);
                        break;
                    default:
                        c = vf(b), Jf(a.i, c.j, c.i)
                }
            }
        }, Zf),
        zg = vg(function(a, b, c) {
            b = Vc(b);
            b != null && b != null && (Of(a, c, 0), Lf(a.i, b))
        }, Wf),
        Ag = vg(function(a, b, c) {
            b = Pc(b);
            b != null && (Of(a, c, 0), a.i.i.push(b ? 1 : 0))
        }, Uf),
        Bg = vg(function(a, b, c) {
            b = rd(b);
            b != null && (b = (Ga || (Ga = new TextEncoder)).encode(b), Of(a, c, 2), Kf(a.i, b.length), Nf(a, a.i.end()),
                Nf(a, b))
        }, Vf),
        Cg = function(a, b, c = Tf) {
            return new fg(b, c)
        }(function(a, b, c, d, e) {
            if (a.i() !== 2) return !1;
            var f = a.j;
            d = Td(void 0, d[0], d[1]);
            var g = b[u] | 0;
            if (g & 2) throw Error();
            var h = g & 128 ? hc : void 0,
                k = te(b, c, h),
                l = k === Ub ? 7 : k[u] | 0,
                m = ue(l, g);
            if (2 & m || xe(m) || 16 & m) m === l || xe(m) || (k[u] = m), k = [...k], l = 0, m = ve(m, g), ke(b, g, c, k, h);
            m &= -13;
            m !== l && (k[u] = m);
            k.push(d);
            f.call(a, d, e);
            return !0
        }, function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (let l = 0; l < b.length; l++) {
                    var f = a,
                        g = c,
                        h = e,
                        k = hg(b[l], d);
                    k != null && (g = Pf(f, g), h(k, f), Qf(f, g))
                }
                a = b[u] |
                    0;
                a & 1 || (b[u] = a | 1)
            }
        }),
        Dg = vg(function(a, b, c) {
            b = Xc(b);
            b != null && b != null && (Of(a, c, 0), Kf(a.i, b))
        }, Xf),
        Eg = vg(function(a, b, c) {
            b = Vc(b);
            b != null && (b = parseInt(b, 10), Of(a, c, 0), Lf(a.i, b))
        }, ag),
        Fg;
    Fg = new fg(function(a, b, c) {
        if (Array.isArray(b)) {
            var d = b[u] | 0;
            if (!(d & 4)) {
                for (var e = 0, f = 0; e < b.length; e++) {
                    let g = Vc(b[e]);
                    g != null && (b[f++] = g)
                }
                f < e && (b.length = f);
                e = (d | 5) & -1537;
                e !== d && (b[u] = e);
                e & 2 && Object.freeze(b)
            }
        } else b = void 0;
        if (b != null && b.length) {
            c = Pf(a, c);
            for (d = 0; d < b.length; d++) Lf(a.i, b[d]);
            Qf(a, c)
        }
    }, ag);

    function Gg(a) {
        return () => a[Ob] || (a[Ob] = td(a))
    }

    function Hg(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = new a($b(b))
            }
            return b
        }
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Ig = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i
        }
    };

    function Jg(a) {
        return new Ig(a[0].toLowerCase())
    };
    let Kg = globalThis.trustedTypes,
        Lg;

    function Mg() {
        var a = null;
        if (!Kg) return a;
        try {
            let b = c => c;
            a = Kg.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }

    function Ng() {
        Lg === void 0 && (Lg = Mg());
        return Lg
    };
    var Og = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i + ""
        }
    };

    function Pg(a) {
        var b = Ng();
        a = b ? b.createHTML(a) : a;
        return new Og(a)
    }

    function Qg(a) {
        if (a instanceof Og) return a.i;
        throw Error("");
    };
    var Rg = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i
        }
    };

    function Sg(a) {
        if (a instanceof Rg) return a.i;
        throw Error("");
    };

    function Tg(a, ...b) {
        var c = "";
        for (let d = 0; d < a.length; d++) c += a[d], d < b.length && (c += Sg(b[d]));
        return new Rg(c)
    };
    var Ug = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i + ""
        }
    };

    function Vg(a) {
        var b = Ng();
        a = b ? b.createScriptURL(a) : a;
        return new Ug(a)
    }

    function Wg(a) {
        if (a instanceof Ug) return a.i;
        throw Error("");
    };
    var Xg = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Yg(a) {
        if (Xg.test(a)) return a
    };

    function Zg(a) {
        return a instanceof Og ? a : Pg(String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"))
    }

    function $g(a) {
        return ah(a)
    }

    function ah(a) {
        var b = Zg("");
        return Pg(a.map(c => Qg(Zg(c))).join(Qg(b).toString()))
    }
    const bh = /^[a-z][a-z\d-]*$/i,
        ch = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var dh = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const eh = ["action", "formaction", "href"];

    function fh(a) {
        if (!bh.test(a)) throw Error("");
        if (ch.indexOf(a.toUpperCase()) !== -1) throw Error("");
    }

    function gh(a, b, c) {
        fh(a);
        var d = `<${a}`;
        b && (d += hh(b));
        Array.isArray(c) || (c = c === void 0 ? [] : [c]);
        dh.indexOf(a.toUpperCase()) !== -1 ? d += ">" : (b = $g(c.map(e => e instanceof Og ? e : Zg(String(e)))), d += ">" + b.toString() + "</" + a + ">");
        return Pg(d)
    }

    function hh(a) {
        var b = "",
            c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!bh.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on./i.test(d)) throw Error("");
                eh.indexOf(d.toLowerCase()) !== -1 && (e = Yg(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Zg(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function ih(a) {
        var b = Tg `* { pointer-events: none; }`;
        a.textContent = Sg(b)
    };

    function jh(a, ...b) {
        if (b.length === 0) return Vg(a[0]);
        var c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Vg(c)
    }

    function kh(a, b) {
        a = Wg(a).toString();
        var c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return lh(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function lh(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return Vg(a + b + c)
    };
    jh `https://www.google.com/recaptcha/api2/aframe`;
    let mh = [];

    function nh() {
        var a = mh;
        mh = [];
        for (let b of a) try {
            b()
        } catch {}
    };

    function oh() {
        return !1
    }

    function ph() {
        return !0
    }

    function qh(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function rh(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function sh(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function th(a) {
        var b = a;
        return function() {
            if (b) {
                let c = b;
                b = null;
                c()
            }
        }
    }

    function uh(a, b) {
        var c = 0;
        return function(d) {
            t.clearTimeout(c);
            var e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function vh(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            var h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        var e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function wh(a, b) {
        return Math.min(Math.max(a, 0), b)
    }

    function xh(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function yh(a) {
        return xh.apply(null, arguments) / arguments.length
    };

    function zh(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    zh.prototype.equals = function(a) {
        return a instanceof zh && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    zh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    zh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    zh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Ah(a, b) {
        this.width = a;
        this.height = b
    }

    function Bh(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    Ah.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Ah.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    Ah.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Ah.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Ah.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ch(a, b) {
        for (let c in a) b.call(void 0, a[c], c, a)
    }

    function Dh(a, b) {
        var c = {};
        for (let d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Eh(a, b) {
        for (let c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Fh(a) {
        var b = Gh;
        a: {
            for (let c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Hh(a) {
        var b = [],
            c = 0;
        for (let d in a) b[c++] = a[d];
        return b
    }

    function Ih(a) {
        var b = {};
        for (let c in a) b[c] = a[c];
        return b
    }
    const Lh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Mh(a, b) {
        for (let e = 1; e < arguments.length; e++) {
            var c = arguments[e];
            for (d in c) a[d] = c[d];
            for (let f = 0; f < Lh.length; f++) {
                var d = Lh[f];
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
        }
    };

    function Nh(a, b) {
        b = Yg(b);
        b !== void 0 && (a.href = b)
    };

    function Oh(a, b) {
        a.src = Wg(b).toString()
    };

    function Ph(a = document) {
        a = a.querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function Qh(a, b) {
        a.src = Wg(b);
        (b = Ph(a.ownerDocument)) && a.setAttribute("nonce", b)
    };

    function Rh(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = Qg(b)
    }

    function Sh(a, b, c) {
        var d = [Jg `width`, Jg `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Ig) f = f.i;
            else throw Error("");
            return f
        });
        var e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    }

    function Th(a, b, c) {
        if (a.namespaceURI !== "http://www.w3.org/1999/xhtml") throw Error(`Cannot set attribute '${b}' on '${a.tagName}'.Element is not in the HTML namespace`);
        b = b.toLowerCase();
        switch (`${a.tagName} ${b}`) {
            case "A href":
                Nh(a, c);
                break;
            case "AREA href":
                b = Yg(c);
                b !== void 0 && (a.href = b);
                break;
            case "BASE href":
                a.href = Wg(c);
                break;
            case "BUTTON formaction":
                b = Yg(c);
                b !== void 0 && (a.formAction = b);
                break;
            case "EMBED src":
                a.src = Wg(c);
                break;
            case "FORM action":
                b = Yg(c);
                b !== void 0 && (a.action = b);
                break;
            case "IFRAME src":
                Oh(a,
                    c);
                break;
            case "IFRAME srcdoc":
                a.srcdoc = Qg(c);
                break;
            case "IFRAME sandbox":
                throw Error("Can't set 'sandbox' on iframe tags. Use setIframeSrcWithIntent or setIframeSrcdocWithIntent instead");
            case "INPUT formaction":
                b = Yg(c);
                b !== void 0 && (a.formAction = b);
                break;
            case "LINK href":
                throw Error("Can't set 'href' attribute on link tags. Use setLinkHrefAndRel instead");
            case "LINK rel":
                throw Error("Can't set 'rel' attribute on link tags. Use setLinkHrefAndRel instead");
            case "OBJECT data":
                a.data = Wg(c);
                break;
            case "SCRIPT src":
                Qh(a,
                    c);
                break;
            default:
                if (/^on./.test(b)) throw Error(`Attribute "${b}" looks like an event handler attribute. Please use a safe alternative like addEventListener instead.`);
                a.setAttribute(b, c)
        }
    };

    function Uh(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Vh, function(e, f) {
            var g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (Rh(d, Pg(e + " ")), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Vh = /&([^;\s<&]+);?/g;

    function Wh(a) {
        var b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Xh(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Yh(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function bi(a) {
        return a ? new ci(di(a)) : Fa || (Fa = new ci)
    }

    function ei(a, b) {
        Ch(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : fi.hasOwnProperty(d) ? a.setAttribute(fi[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var fi = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function gi(a) {
        return a ? a.defaultView : window
    }

    function hi(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ii(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function di(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var ji = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ki = {
            IMG: " ",
            BR: "\n"
        };

    function li(a) {
        var b = [];
        mi(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function mi(a, b, c) {
        if (!(a.nodeName in ji))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ki) b.push(ki[a.nodeName]);
        else
            for (a = a.firstChild; a;) mi(a, b, c), a = a.nextSibling
    }

    function ni(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return oi(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && fb(e.className.split(/\s+/), c))
        })
    }

    function oi(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ci(a) {
        this.i = a || t.document || document
    }
    ci.prototype.j = function(a) {
        var b = this.i;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    ci.prototype.l = ci.prototype.j;

    function pi(a, b) {
        return hi(a.i, b)
    }

    function qi(a, b) {
        var c = a.i;
        a = hi(c, "DIV");
        Rh(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    ci.prototype.Ma = function() {
        return this.i.defaultView
    };
    ci.prototype.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };

    function ri(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ri.prototype.getWidth = function() {
        return this.right - this.left
    };
    ri.prototype.getHeight = function() {
        return this.bottom - this.top
    };

    function si(a) {
        return new ri(a.top, a.right, a.bottom, a.left)
    }
    ri.prototype.contains = function(a) {
        return this && a ? a instanceof ri ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    ri.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    ri.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    ri.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function ti(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    ti.prototype.contains = function(a) {
        return a instanceof zh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    ti.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ti.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ti.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function ui(a, b, c) {
        if (typeof b === "string") vi(a, c, b);
        else
            for (let d in b) vi(a, b[d], d)
    }
    var wi = /^--.+/;

    function vi(a, b, c) {
        (c = xi(a, c)) && (wi.test(c) ? a.style.setProperty(c, b) : a.style[c] = b)
    }
    var yi = {};

    function xi(a, b) {
        var c = yi[b];
        if (!c) {
            var d = Xh(b);
            c = d;
            a.style[d] === void 0 && (d = (vb ? "Webkit" : tb ? "Moz" : null) + Yh(d), a.style[d] !== void 0 && (c = d));
            yi[b] = c
        }
        return c
    }

    function zi(a, b) {
        var c = a.style[Xh(b)];
        return typeof c !== "undefined" ? c : a.style[xi(a, b)] || ""
    }

    function Ai(a, b) {
        a: {
            var c = di(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Bi(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Ci(a) {
        var b = di(a),
            c = new zh(0, 0);
        if (a == (b ? di(b) : document).documentElement) return c;
        a = Bi(a);
        var d = bi(b).i;
        b = d.scrollingElement ? d.scrollingElement : vb || d.compatMode != "CSS1Compat" ? d.body || d.documentElement : d.documentElement;
        d = d.defaultView;
        b = new zh(d ? .pageXOffset || b.scrollLeft, d ? .pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Di(a) {
        typeof a == "number" && (a = Math.round(a) + "px");
        return a
    }

    function Ei(a) {
        var b = Fi;
        if (Ai(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Fi(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = vb && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Bi(a), new Ah(a.right - a.left, a.bottom - a.top)) : new Ah(b, c)
    };
    var Gi = {
            passive: !0
        },
        Hi = sh(() => {
            var a = !1;
            try {
                let b = Object.defineProperty({}, "passive", {
                    get() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ii(a) {
        return a ? a.passive && Hi() ? a : a.capture || !1 : !1
    }

    function Ji(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, Ii(d)), !0) : !1
    }

    function Ki(a, b, c, d) {
        return typeof a.removeEventListener === "function" ? (a.removeEventListener(b, c, Ii(d)), !0) : !1
    }

    function Li(a, b) {
        a.document.readyState === "complete" ? (mh.push(b), mh.length === 1 && (window.Promise ? Promise.resolve().then(nh) : (a = window.setImmediate, mc(a) ? a(nh) : setTimeout(nh, 0)))) : a.addEventListener("load", b)
    };

    function Mi(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            var f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Qh(f, a);
            b.document.readyState !== "complete" ? Ji(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function Ni() {
        Oi || (Oi = new Pi);
        return Oi
    }
    async function Qi() {
        try {
            await window.android.webview.getExperimentalMediaIntegrityTokenProvider({
                cloudProjectNumber: 187810013193
            })
        } catch (b) {
            if (b && typeof b === "object" && typeof b.mediaIntegrityErrorName !== "string") {
                var a = b.code;
                if (typeof a === "function") try {
                    a()
                } catch (c) {}
            }
        }
    }
    var Pi = class {
            constructor() {
                this.Mb = !1
            }
        },
        Oi;
    async function Ri(a) {
        var b = `${a.qc?"https://ep1.adtrafficquality.google/getconfig/sodar":"https://pagead2.googlesyndication.com/getconfig/sodar"}?sv=200&tid=${a.j}&tv=${a.l}&st=${a.i==="cr"&&a.nc==="env"?a.i+"_"+a.nc:a.nc}${a.Ic?`&sjk=${a.Ic}`:""}${a.A?"&sde=1":""}`,
            c = void 0;
        try {
            c = await Si(b)
        } catch (g) {}
        if (c && !a.D) {
            b = a.Ic || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.B ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename &&
                c.bg_binary) return c = {
                context: a.i,
                el: c.bg_hash_basename,
                dl: c.bg_binary,
                Em: a.j + "_" + a.l,
                Ic: b,
                nc: a.nc,
                Sf: d,
                rg: e,
                Pf: f,
                qc: a.qc,
                Ne: a.Ne
            }, a.Mb ? { ...c,
                Mb: !0
            } : c
        }
    }
    let Si = a => new Promise((b, c) => {
        var d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(Object.assign(Object.create(null), JSON.parse(d.responseText))) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ti(a) {
        if (a.Mb) {
            Ni().Mb = !0;
            var b = Ni();
            window.android && window.android.webview && window.android.webview.getExperimentalMediaIntegrityTokenProvider && b.Mb && Qi()
        }
        if (a = await Ri(a)) {
            b = window;
            var c = b.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = b.GoogleGcLKhOms = []);
            let d = {
                _ctx_: a.context,
                _bgv_: a.el,
                _bgp_: a.dl,
                _li_: a.Em,
                _jk_: a.Ic,
                _st_: a.nc,
                _rc_: a.Sf,
                _dl_: a.rg,
                _g2_: a.Pf,
                _atqg_: a.qc ? "1" : "0",
                _sic_: a.Ne ? "1" : "0"
            };
            a.Mb && (d._wvp_ = "1");
            c.push(d);
            if (c = b.GoogleDX5YKUSkRag) {
                if (c.length > 0 && (b = c.shift())) try {
                    b()
                } catch (e) {}
            } else if (c =
                b.GoogleDX5YKUSk) b.GoogleDX5YKUSk = void 0, c[1]();
            a = a.qc ? jh `https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js` : jh `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            Mi(a)
        }
    };
    var Ui = class extends J {
        i() {
            return E(this, 1)
        }
    };
    var Vi = class extends J {};

    function Wi(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            case 8:
                return "afs";
            case 9:
                return "oos";
            default:
                return "unk"
        }
    }
    var Xi = class {
            constructor(a) {
                this.j = a.A;
                this.l = a.B;
                this.i = a.D;
                this.Ic = a.Ic;
                this.win = a.Ma();
                this.nc = a.nc;
                this.Sf = a.Sf;
                this.rg = a.rg;
                this.Pf = a.Pf;
                this.B = a.j;
                this.qc = a.qc;
                this.Mb = a.Mb;
                this.A = a.i;
                this.Ne = a.Ne;
                this.D = a.l
            }
        },
        Yi = class {
            constructor(a, b, c) {
                this.A = a;
                this.B = b;
                this.D = c;
                this.win = window;
                this.nc = "env";
                this.Sf = "n";
                this.rg = "0";
                this.Pf = "1";
                this.j = !0;
                this.l = this.Ne = this.i = this.Mb = this.qc = !1
            }
            Ma() {
                return this.win
            }
            build() {
                return new Xi(this)
            }
        };
    var Zi = class extends J {
            lb() {
                return E(this, 1)
            }
        },
        sf = [2, 3, 5];

    function $i() {
        var a = new aj;
        return of(a, 1, "")
    }

    function bj(a) {
        return Je(a, Zi, 2, re())
    }

    function cj(a, b) {
        return Le(a, 2, b)
    }
    var aj = class extends J {};
    var dj = class extends J {};
    var ej = class extends J {
        getValue() {
            return E(this, 1)
        }
        clearValue() {
            return je(this, 1)
        }
        getVersion() {
            return F(this, 5)
        }
    };
    var fj = class extends J {};

    function gj(a) {
        var b = new hj;
        return qf(b, 1, a)
    }
    var hj = class extends J {};

    function ij(a, b) {
        return of(a, 1, b)
    }

    function jj(a) {
        var b = window.Date.now();
        b = Number.isFinite(b) ? Math.round(b) : 0;
        return jf(a, 3, b)
    }
    var kj = class extends J {
            lb() {
                return cf(this, 1)
            }
            i() {
                return Ue(this, 2) != null
            }
            l() {
                return Ue(this, 2)
            }
            setError(a) {
                return A(this, 10, a)
            }
        },
        lj = Hg(kj);
    var mj = class extends J {};
    mj.prototype.i = function(a) {
        return function() {
            return ug(this, a)
        }
    }([0, Cg, [0, 1, [0, yg, -2], -1, Bg, -1, Ag, [0, 3, Eg, Bg], xg, Fg, Dg], Cg, [0, Bg, -1, xg, zg, -2, xg, wg, Ag, [0, Eg], Ag]]);
    var nj = class extends J {};

    function oj(a, b) {
        if (a)
            for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function pj(a) {
        var b = [];
        oj(a, c => {
            b.push(c)
        });
        return b
    };

    function qj(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            Uh: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b ? .indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Uh: c
        }
    }

    function rj(a) {
        try {
            return !!a && a.location.href != null && qb(a, "foo")
        } catch {
            return !1
        }
    }

    function sj(a, b = t) {
        b = tj(b);
        for (var c = 0; b && c++ < 40 && !a(b);) b = tj(b)
    }

    function tj(a) {
        try {
            let b = a.parent;
            if (b && b !== a) return b
        } catch {}
        return null
    }

    function uj(a) {
        return rj(a.top) ? a.top : null
    }

    function vj(a) {
        for (var b = a; a && a !== a.parent;) a = a.parent, rj(a) && (b = a);
        return b
    };

    function wj() {
        return Ja && Ma ? Ma.mobile : !xj() && (Pa("iPod") || Pa("iPhone") || Pa("Android") || Pa("IEMobile"))
    }

    function xj() {
        return Ja && Ma ? !Ma.mobile && (Pa("iPad") || Pa("Android") || Pa("Silk")) : Pa("iPad") || Pa("Android") && !Pa("Mobile") || Pa("Silk")
    };

    function yj(a) {
        return La().indexOf(a) != -1
    }

    function zj(a) {
        return Ua() && wj() ? Aj(a) : 1
    }
    var Bj = sh(() => wj() ? 2 : xj() ? 1 : 0);

    function Aj(a) {
        var b = uj(a);
        if (!b) return 1;
        a = Bj() === 0;
        var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
            d = b.innerWidth;
        b = b.outerWidth;
        if (d === 0) return 1;
        var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
        return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
    }
    var Cj = sh(() => {
        var a = Math.random;
        return ["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"].some(yj) || a() < 1E-4
    });

    function Dj() {
        if (!globalThis.crypto) return Math.random();
        try {
            let a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    };
    let Ej, Fj = 64;

    function Gj() {
        try {
            return Ej ? ? (Ej = new Uint32Array(64)), Fj >= 64 && (crypto.getRandomValues(Ej), Fj = 0), Ej[Fj++]
        } catch (a) {
            return Math.floor(Math.random() * 2 ** 32)
        }
    };

    function Hj(a, b) {
        if (!jc(a.goog_pvsid)) try {
            let c = Gj() + (Gj() & 2 ** 21 - 1) * 2 ** 32;
            Object.defineProperty(a, "goog_pvsid", {
                value: c,
                configurable: !1
            })
        } catch (c) {
            b.Aa({
                methodName: 784,
                Ha: c
            })
        }
        a = Number(a.goog_pvsid);
        (!a || a <= 0) && b.Aa({
            methodName: 784,
            Ha: Error(`Invalid correlator, ${a}`)
        });
        return a || -1
    };

    function Ij(a, b) {
        var c = Jj("SCRIPT", a);
        Qh(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Kj(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    var Lj = /^([0-9.]+)px$/,
        Mj = /^(-?[0-9.]{1,30})$/;

    function Nj(a) {
        if (!Mj.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Oj(a) {
        return (a = Lj.exec(a)) ? +a[1] : null
    }
    var Pj = {
        Xn: "allow-forms",
        Yn: "allow-modals",
        Zn: "allow-orientation-lock",
        ao: "allow-pointer-lock",
        bo: "allow-popups",
        co: "allow-popups-to-escape-sandbox",
        eo: "allow-presentation",
        fo: "allow-same-origin",
        ho: "allow-scripts",
        io: "allow-top-navigation",
        jo: "allow-top-navigation-by-user-activation"
    };
    const Qj = sh(() => pj(Pj));

    function Rj(a) {
        var b = Qj();
        return a.length ? ab(b, c => !fb(a, c)) : b
    }

    function Sj() {
        var a = Jj("IFRAME"),
            b = {};
        Za(Qj(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Tj = () => {
            var a = Sj();
            return !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"])
        },
        Uj = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Vj = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Uj(a, b)) return a;
                if (!(a = tj(a))) break
            }
            return null
        },
        K = (a, b) => {
            oj(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Xj = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                let c = a.length;
                for (let d = 0; d < c; d++) {
                    let e = a[d];
                    b(a[e], e, a)
                }
            } else a = Wj(a.style.cssText), oj(a, b)
        },
        Wj = a => {
            var b = {};
            if (a) {
                let c = /\s*:\s*/;
                Za((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Yj = a => {
            var b = /!\s*important/i;
            Xj(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Zj = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        ak = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        bk = /.*domain\.test$/,
        ck = /\.prod\.google\.com(:\d+)?$/;
    var dk = a => Zj[a] || ak.test(a) || bk.test(a) || ck.test(a),
        ek = (a, b) => Hj(a, {
            Aa: c => {
                var d = c.methodName;
                c = c.Ha;
                b ? .Ea(d, c)
            }
        }),
        fk = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        }),
        gk = a => a.top == a ? 0 : rj(a.top) ? 1 : 2;

    function Jj(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function hk(a, b, c = null, d = !1, e = !1) {
        ik(a, b, c, d, e)
    }

    function ik(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        var f = Jj("IMG", a.document);
        if (c || d) {
            let g = h => {
                c && c(h);
                d && gb(a.google_image_requests, f);
                Ki(f, "load", g);
                Ki(f, "error", g)
            };
            Ji(f, "load", g);
            Ji(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function jk(a, b) {
        var c = `https://pagead2.googlesyndication.com/pagead/gen_204?id=${b}`;
        oj(a, (d, e) => {
            if (d || d === 0) c += `&${e}=${encodeURIComponent(String(d))}`
        });
        kk(c)
    }

    function kk(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : hk(b, a, void 0, !1, !1)
    };
    let Nk = null;
    var Ok = window;
    var Pk = class extends J {};
    var Qk = class extends J {
        getCorrelator() {
            return We(this, 1)
        }
        setCorrelator(a) {
            return kf(this, 1, a)
        }
    };
    var Rk = class extends J {};
    let Sk = null,
        Tk = null;

    function Uk() {
        if (Sk != null) return Sk;
        Sk = !1;
        try {
            let a = uj(t);
            a && a.location.hash.indexOf("google_logging") !== -1 && (Sk = !0)
        } catch (a) {}
        return Sk
    }

    function Vk() {
        if (Tk != null) return Tk;
        Tk = !1;
        try {
            let a = uj(t);
            a && a.location.hash.indexOf("auto_ads_logging") !== -1 && (Tk = !0)
        } catch (a) {}
        return Tk
    }
    var Wk = (a, b = []) => {
        var c = !1;
        t.google_logging_queue || (c = !0, t.google_logging_queue = []);
        t.google_logging_queue.push([a, b]);
        c && Uk() && Ij(t.document, jh `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };
    var Xk = class {
        constructor(a, b) {
            this.error = a;
            this.meta = {};
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror"
        }
    };

    function Yk(a) {
        return new Xk(a, {
            message: Zk(a)
        })
    }

    function Zk(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = $k(a.stack, b));
        return b
    }

    function $k(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    };
    const al = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var bl = class {
            constructor(a, b) {
                this.i = a;
                this.j = b
            }
        },
        cl = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.i = !!c;
                this.depth = null
            }
        };
    let dl = null;

    function el() {
        var a = window;
        if (dl === null) {
            dl = "";
            try {
                let b = "";
                try {
                    b = a.top.location.hash
                } catch (c) {
                    b = a.location.hash
                }
                if (b) {
                    let c = b.match(/\bdeid=([\d,]+)/);
                    dl = c ? c[1] : ""
                }
            } catch (b) {}
        }
        return dl
    };

    function fl() {
        var a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function gl() {
        var a = t.performance;
        return a && a.now ? a.now() : null
    };
    var hl = class {
        constructor(a, b) {
            var c = gl() || fl();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const il = t.performance,
        jl = !!(il && il.mark && il.measure && il.clearMarks),
        kl = sh(() => {
            var a;
            if (a = jl) a = el(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function wl(a) {
        a && il && kl() && (il.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), il.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function xl(a) {
        a.i = !1;
        a.events !== a.j.google_js_reporting_queue && (kl() && Za(a.events, wl), a.events.length = 0)
    }
    var yl = class {
        constructor(a) {
            this.events = [];
            this.j = a || t;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.i = kl() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.i) return null;
            a = new hl(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            il && kl() && il.mark(b);
            return a
        }
        end(a) {
            if (this.i && jc(a.value)) {
                a.duration = (gl() || fl()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                il && kl() && il.mark(b);
                !this.i || this.events.length >
                    2048 || this.events.push(a)
            }
        }
    };

    function zl(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Al(a, b, c, d, e) {
        var f = [];
        oj(a, (g, h) => {
            (g = Bl(g, b, c, d, e)) && f.push(`${encodeURIComponent(h)}=${g}`)
        });
        return f.join(b)
    }

    function Bl(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        kc(c) && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                let f = [];
                for (let g = 0; g < a.length; g++) f.push(Bl(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Al(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Cl(a) {
        var b = 1;
        for (let c in a.j) c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    }

    function Dl(a, b) {
        var c = Cl(a) - b.length;
        if (c < 0) return "";
        b = "";
        a.i.sort((f, g) => f - g);
        var d = null,
            e = "";
        for (let f = 0; f < a.i.length; f++) {
            let g = a.i[f],
                h = a.j[g];
            for (let k = 0; k < h.length; k++) {
                if (!c) {
                    d = d == null ? g : d;
                    break
                }
                let l = Al(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (c >= l.length) {
                        c -= l.length;
                        b += l;
                        e = a.l;
                        break
                    }
                    d = d == null ? g : d
                }
            }
        }
        a = "";
        d != null && (a = `${e}trn=${d}`);
        return b + a
    }

    function El(a, b, c, d) {
        return Cl(a) - d.length < 0 ? "" : b + "//" + c + d + Dl(a, d)
    }
    var Fl = class {
        constructor() {
            this.l = "&";
            this.j = {};
            this.A = 0;
            this.i = []
        }
    };
    const Gl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Hl(a, b, c) {
        if (Array.isArray(b))
            for (let d = 0; d < b.length; d++) Hl(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Il(a, b, c) {
        c = c != null ? "=" + encodeURIComponent(String(c)) : "";
        if (b += c) {
            c = a.indexOf("#");
            c < 0 && (c = a.length);
            let d = a.indexOf("?"),
                e;
            d < 0 || d > c ? (d = c, e = "") : e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    }
    const Jl = /#|$/;

    function Kl(a, b) {
        var c = a.search(Jl);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };
    var Nl = class {
        constructor(a = null) {
            this.G = Ll;
            this.j = a;
            this.i = null;
            this.A = !1;
            this.va = this.Ea
        }
        l(a) {
            this.i = a
        }
        B(a) {
            this.A = a
        }
        jc(a, b, c) {
            try {
                if (this.j && this.j.i) {
                    var d = this.j.start(a.toString(), 3);
                    var e = b();
                    this.j.end(d)
                } else e = b()
            } catch (f) {
                b = !0;
                try {
                    wl(d), b = this.va(a, Yk(f), void 0, c)
                } catch (g) {
                    this.Ea(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return e
        }
        kc(a, b, c, d) {
            return (...e) => this.jc(a, () => b.apply(c, e), d)
        }
        Ea(a, b, c, d, e) {
            e = e || "jserror";
            var f = void 0;
            try {
                let C = new Fl;
                var g = C;
                g.i.push(1);
                g.j[1] = zl("context",
                    a);
                b.error && b.meta && b.id || (b = Yk(b));
                g = b;
                if (g.msg) {
                    b = C;
                    var h = g.msg.substring(0, 512);
                    b.i.push(2);
                    b.j[2] = zl("msg", h)
                }
                var k = g.meta || {};
                h = k;
                if (this.i) try {
                    this.i(h)
                } catch (xa) {}
                if (d) try {
                    d(h)
                } catch (xa) {}
                d = C;
                k = [k];
                d.i.push(3);
                d.j[3] = k;
                var l;
                if (!(l = p)) {
                    d = t;
                    k = [];
                    h = null;
                    do {
                        var m = d;
                        if (rj(m)) {
                            var n = m.location.href;
                            h = m.document && m.document.referrer || null
                        } else n = h, h = null;
                        k.push(new cl(n || "", m));
                        try {
                            d = m.parent
                        } catch (xa) {
                            d = null
                        }
                    } while (d && m !== d);
                    for (let xa = 0, Ya = k.length - 1; xa <= Ya; ++xa) k[xa].depth = Ya - xa;
                    m = t;
                    if (m.location &&
                        m.location.ancestorOrigins && m.location.ancestorOrigins.length === k.length - 1)
                        for (n = 1; n < k.length; ++n) {
                            let xa = k[n];
                            xa.url || (xa.url = m.location.ancestorOrigins[n - 1] || "", xa.i = !0)
                        }
                    l = k
                }
                var p = l;
                let H = new cl(t.location.href, t, !1);
                l = null;
                let O = p.length - 1;
                for (m = O; m >= 0; --m) {
                    var q = p[m];
                    !l && al.test(q.url) && (l = q);
                    if (q.url && !q.i) {
                        H = q;
                        break
                    }
                }
                q = null;
                let ja = p.length && p[O].url;
                H.depth !== 0 && ja && (q = p[O]);
                f = new bl(H, q);
                if (f.j) {
                    p = C;
                    var r = f.j.url || "";
                    p.i.push(4);
                    p.j[4] = zl("top", r)
                }
                var v = {
                    url: f.i.url || ""
                };
                if (f.i.url) {
                    let xa =
                        f.i.url.match(Gl);
                    var y = xa[1],
                        G = xa[3],
                        w = xa[4];
                    r = "";
                    y && (r += y + ":");
                    G && (r += "//", r += G, w && (r += ":" + w));
                    var x = r
                } else x = "";
                y = C;
                v = [v, {
                    url: x
                }];
                y.i.push(5);
                y.j[5] = v;
                Ml(this.G, e, C, this.A, c)
            } catch (C) {
                try {
                    Ml(this.G, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Zk(C),
                        url: f ? .i.url ? ? ""
                    }, this.A, c)
                } catch (H) {}
            }
            return !0
        }
        Fa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.Ea(a, d instanceof Error ? d : Error(d), void 0, c || this.i || void 0)
            })
        }
    };
    var Ol = class extends J {};

    function Pl(a, b) {
        try {
            let c = d => [{
                [d.vg]: d.Zf
            }];
            return JSON.stringify([a.filter(d => d.ue).map(c), Ld(b), a.filter(d => !d.ue).map(c)])
        } catch (c) {
            return Ql(c, b), ""
        }
    }

    function Ql(a, b) {
        try {
            jk({
                m: Zk(a instanceof Error ? a : Error(String(a))),
                b: F(b, 1) || null,
                v: E(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }

    function Rl(a) {
        if (a.D) {
            var b = a.A,
                c = Set;
            var d = Ze(a.A, 3);
            c = [...(new c([...d, ...a.D()]))];
            Ae(b, 3, c, Uc)
        }
        return be(a.A)
    }
    var Sl = class {
        constructor(a, b, c) {
            this.D = c;
            c = new Ol;
            a = I(c, 1, a);
            this.A = pf(a, 2, b)
        }
    };

    function Tl(a) {
        return Math.round(a)
    }

    function Ul(a) {
        var b = new CompressionStream("gzip"),
            c = (new Response(b.readable)).arrayBuffer(),
            d = b.writable.getWriter(),
            e = typeof a === "string" ? (new TextEncoder).encode(a) : a;
        return d.ready.then(() => d.write(e)).then(() => d.close()).then(() => c).then(f => new Uint8Array(f))
    };

    function Vl(a, b) {
        return Ce(a, 1, Wl, qd(b))
    }

    function Xl(a, b) {
        return mf(a, 2, Wl, b)
    }

    function Yl(a, b) {
        return Ce(a, 3, Wl, b == null ? b : Oc(b))
    }
    var L = class extends J {},
        Wl = [1, 2, 3];

    function Zl(a, b) {
        return mf(a, 2, $l, b)
    }

    function am(a, b) {
        return Ce(a, 4, $l, Mc(b))
    }
    var bm = class extends J {},
        $l = [2, 4];

    function cm(a) {
        var b = new dm;
        return pf(b, 1, a)
    }

    function em(a, b) {
        return A(a, 3, b)
    }

    function M(a, b) {
        return Ne(a, 4, L, b)
    }
    var dm = class extends J {};
    var fm = class extends J {
        getValue() {
            return F(this, 1)
        }
        clearValue() {
            return je(this, 1)
        }
    };

    function gm(a, b) {
        return qf(a, 1, b)
    }
    var hm = class extends J {
        getValue() {
            return F(this, 1)
        }
        clearValue() {
            return je(this, 1)
        }
    };
    var im = class extends J {
        getValue() {
            return F(this, 1)
        }
        clearValue() {
            return je(this, 1)
        }
    };
    var jm = class extends J {
        getHeight() {
            return Ve(this, 2)
        }
    };

    function km(a, b) {
        return gf(a, 1, b)
    }

    function lm(a, b) {
        return Le(a, 2, b)
    }
    var mm = class extends J {};
    var nm = class extends J {};
    var om = class extends J {};
    var qm = class extends J {
            setError(a) {
                return B(this, 3, pm, a)
            }
        },
        pm = [2, 3];

    function rm(a, b) {
        return kf(a, 1, b)
    }

    function sm(a, b) {
        return kf(a, 2, b)
    }

    function tm(a, b) {
        return kf(a, 3, b)
    }

    function um(a, b) {
        return kf(a, 4, b)
    }

    function vm(a, b) {
        return kf(a, 5, b)
    }

    function wm(a, b) {
        return Be(a, 8, Mc(b), 0)
    }

    function xm(a, b) {
        return Be(a, 9, Mc(b), 0)
    }
    var ym = class extends J {};

    function zm(a, b) {
        return kf(a, 1, b)
    }

    function Am(a, b) {
        return kf(a, 2, b)
    }
    var Bm = class extends J {};

    function Cm(a, b) {
        Ne(a, 1, Bm, b)
    }
    var Dm = class extends J {};
    var Em = class extends J {};

    function Fm(a, b) {
        return Ae(a, 1, b, pd)
    }

    function Gm(a, b) {
        return Ae(a, 12, b, kd)
    }

    function Hm() {
        var a = new Im;
        return Me(a, 2, pd, "irr", rd)
    }

    function Jm(a, b) {
        return ff(a, 3, b)
    }

    function Km(a, b) {
        return ff(a, 4, b)
    }

    function Lm(a, b) {
        return ff(a, 5, b)
    }

    function Mm(a, b) {
        return ff(a, 7, b)
    }

    function Nm(a, b) {
        return ff(a, 8, b)
    }

    function Om(a, b) {
        return kf(a, 9, b)
    }

    function Pm(a, b) {
        return Le(a, 10, b)
    }

    function Qm(a, b) {
        return Ae(a, 11, b, Yc)
    }
    var Im = class extends J {};

    function Rm(a) {
        var b = Sm();
        A(a, 1, b)
    }

    function Tm(a, b) {
        return kf(a, 2, b)
    }

    function Um(a, b) {
        return Le(a, 3, b)
    }

    function Vm(a, b) {
        return Le(a, 4, b)
    }

    function Wm(a, b) {
        return Ne(a, 4, hm, b)
    }

    function Xm(a, b) {
        return Le(a, 5, b)
    }

    function Ym(a, b) {
        return Ae(a, 6, b, pd)
    }

    function Zm(a, b) {
        return kf(a, 7, b)
    }

    function $m(a, b) {
        return kf(a, 8, b)
    }

    function an(a, b) {
        A(a, 9, b)
    }

    function bn(a, b) {
        return ff(a, 10, b)
    }

    function cn(a, b) {
        return ff(a, 11, b)
    }

    function dn(a, b) {
        return ff(a, 12, b)
    }
    var en = class extends J {};
    var fn = class extends J {};
    var gn = class extends J {};
    var hn = class extends J {
        setLocation(a) {
            return I(this, 2, a)
        }
    };

    function jn(a, b) {
        return of(a, 1, b)
    }

    function kn(a, b) {
        return of(a, 2, b)
    }
    var ln = class extends J {};
    var mn = class extends J {};

    function nn(a) {
        var b = new on;
        return I(b, 1, a)
    }
    var on = class extends J {};
    var pn = class extends J {};
    var qn = class extends J {};
    var rn = class extends J {};
    var sn = class extends J {},
        tn = [1, 2];
    var un = class extends J {};
    var vn = class extends J {},
        wn = [1];
    var xn = class extends J {};
    var yn = class extends J {};
    var zn = class extends J {};
    var An = class extends J {};
    var Bn = class extends J {};
    var Cn = class extends J {};

    function Dn(a, b) {
        return je(a, 2, b == null ? b : kd(b, void 0))
    }

    function En(a, b) {
        return pf(a, 4, b)
    }
    var Fn = class extends J {};
    var Gn = class extends J {
        getContentUrl() {
            return E(this, 1)
        }
    };
    var Hn = class extends J {};

    function In(a) {
        var b = new Jn;
        return Ae(b, 1, a, Sc)
    }
    var Jn = class extends J {};
    var Kn = class extends J {};

    function Ln() {
        var a = new Mn,
            b = new Kn;
        return B(a, 1, Nn, b)
    }

    function On() {
        var a = new Mn,
            b = new Kn;
        return B(a, 9, Nn, b)
    }

    function Pn() {
        var a = new Mn,
            b = new Kn;
        return B(a, 13, Nn, b)
    }

    function Qn(a, b) {
        return B(a, 14, Nn, b)
    }
    var Mn = class extends J {},
        Nn = [1, 9, 13, 14];

    function Rn(a) {
        var b = new Sn;
        return Le(b, 1, a)
    }
    var Sn = class extends J {};
    var Tn = class extends J {};
    var Un = class extends J {};
    var Vn = class extends J {};

    function Wn(a, b) {
        return nf(a, 10, b)
    }

    function Xn(a, b) {
        return I(a, 1, b)
    }

    function Yn(a, b) {
        return pf(a, 4, b)
    }
    var Pe = class extends J {};

    function Zn(a) {
        return Je(a, Pe, 2, re())
    }
    var $n = class extends J {};
    var ao = class extends J {};
    var co = class extends J {
            l() {
                return af(this, $n, 4, bo)
            }
            i() {
                return ne(this, $n, 4, bo)
            }
        },
        bo = [4, 5];
    var eo = class extends J {};
    var fo = class extends J {
        Hf() {
            return F(this, 2)
        }
    };
    var go = class extends J {},
        ho = [3];

    function io(a, b) {
        return pf(a, 4, b)
    }

    function jo(a, b) {
        return je(a, 6, b == null ? b : kd(b, void 0))
    }

    function ko(a, b) {
        return A(a, 10, b)
    }
    var lo = class extends J {};
    var mo = class extends J {};
    var no = class extends J {},
        oo = [3];
    var po = class extends J {};
    var qo = class extends J {
        l() {
            return z(this, $n, 1)
        }
        i() {
            return le(this, $n, 1)
        }
    };
    var ro = class extends J {};
    var so = class extends J {};
    var to = class extends J {};
    var uo = class extends J {};
    var vo = class extends J {};
    var wo = class extends J {};
    var xo = class extends J {};
    var yo = class extends J {};
    var zo = class extends J {};
    var Ao = class extends J {
            getClickPageEventIndex() {
                return We(this, 1)
            }
            setClickPageEventIndex(a) {
                return kf(this, 1, a)
            }
        },
        Bo = [2, 3, 4, 5, 6, 7];
    var Do = class extends J {
            l() {
                return af(this, $n, 4, Co)
            }
            i() {
                return ne(this, $n, 4, Co)
            }
        },
        Co = [4, 6];
    var Eo = class extends J {},
        Fo = [3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26];

    function Go(a, b) {
        return kf(a, 3, b)
    }
    var Ho = class extends J {},
        Io = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var Jo = class extends J {};

    function Ko() {
        var a = bg(Lo());
        return pf(a, 1, Mo())
    }
    var No = class extends J {};
    var Oo = class extends J {};
    var Po = class extends J {
        getTagSessionCorrelator() {
            return We(this, 1)
        }
    };
    var Qo = class extends J {},
        Ro = [1, 7],
        So = [4, 6, 8];
    var To = class extends J {
            getTagSessionCorrelator() {
                return We(this, 2)
            }
        },
        Uo = [6, 7];
    class Vo {
        constructor(a) {
            this.G = a;
            this.Se = new Wo(this.G)
        }
    }
    class Wo {
        constructor(a) {
            this.G = a;
            this.We = new Xo(this.G);
            this.Jk = new Yo(this.G)
        }
    }
    class Xo {
        constructor(a) {
            this.G = a;
            this.i = new Zo(this.G);
            this.dk = new $o(this.G)
        }
    }
    class Zo {
        constructor(a) {
            this.G = a;
            this.j = new ap(this.G);
            this.i = new bp(this.G)
        }
    }
    class ap {
        constructor(a) {
            this.G = a
        }
        Kd(a) {
            cp(this.G, em(M(cm("xR0Czf"), Vl(new L, a.status)), am(new bm, a.Pc)))
        }
    }
    class bp {
        constructor(a) {
            this.G = a
        }
        Kd(a) {
            cp(this.G, em(M(cm("jM4CPd"), Xl(new L, Tl(a.On))), am(new bm, a.Pc)))
        }
    }
    class $o {
        constructor(a) {
            this.G = a;
            this.Kk = new dp(this.G);
            this.Ok = new ep(this.G);
            this.Pg = new fp(this.G);
            this.Pk = new gp(this.G);
            this.Qk = new hp(this.G);
            this.Rk = new ip(this.G);
            this.Sk = new jp(this.G);
            this.Rg = new kp(this.G);
            this.pl = new lp(this.G);
            this.Yl = new mp(this.G);
            this.kn = new np(this.G);
            this.Dn = new op(this.G);
            this.zi = new pp(this.G);
            this.En = new qp(this.G);
            this.Bi = new rp(this.G);
            this.Fn = new sp(this.G)
        }
    }
    class dp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(cm("VEDP7d"), Vl(new L, a.language)), Xl(new L, a.Ta)), Zl(new bm, Tl(a.ia))))
        }
    }
    class ep {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(cm("igjuhc"), Vl(new L, a.language)), Xl(new L, a.Ta)), Zl(new bm, Tl(a.ia))))
        }
    }
    class fp {
        constructor(a) {
            this.G = a
        }
        Kd(a) {
            cp(this.G, em(M(M(M(M(M(cm("i3zJEd"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.outcome)), Yl(new L, a.dc)), Yl(new L, a.Dc)), am(new bm, a.Pc)))
        }
    }
    class gp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(M(M(cm("JN0hVd"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.outcome)), Yl(new L, a.dc)), Yl(new L, a.Dc)), Zl(new bm, Tl(a.ia))))
        }
    }
    class hp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("rmHfOd"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.reason)), Zl(new bm, Tl(a.ia))))
        }
    }
    class ip {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("VEyQic"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.format)), Zl(new bm, Tl(a.ia))))
        }
    }
    class jp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("QFcNxc"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.format)), Zl(new bm, Tl(a.ia))))
        }
    }
    class kp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(M(cm("SIhp4"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.format)), Yl(new L, a.dc)), Zl(new bm, Tl(a.ia))))
        }
    }
    class lp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("Eeiun"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.format)), Zl(new bm, Tl(a.ia))))
        }
    }
    class mp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(M(cm("pVNWme"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.Vb)), Xl(new L, a.format)), Zl(new bm, Tl(a.ia))))
        }
    }
    class np {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("pYLGPe"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.type)), Zl(new bm, Tl(a.ia))))
        }
    }
    class op {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(cm("OyfJgf"), Vl(new L, a.language)), Xl(new L, a.Ta)), Zl(new bm, Tl(a.ia))))
        }
    }
    class pp {
        constructor(a) {
            this.G = a
        }
        Kd(a) {
            cp(this.G, em(M(M(M(M(cm("vkypFe"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.outcome)), Yl(new L, a.Dc)), am(new bm, a.Pc)))
        }
    }
    class qp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(M(cm("U2cYzb"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.outcome)), Yl(new L, a.Dc)), Zl(new bm, Tl(a.ia))))
        }
    }
    class rp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("PsAR8b"), Vl(new L, a.language)), Xl(new L, a.Ta)), Xl(new L, a.format)), Zl(new bm, Tl(a.ia))))
        }
    }
    class sp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(cm("Ah4H"), Vl(new L, a.language)), Xl(new L, a.Ta)), Zl(new bm, Tl(a.ia))))
        }
    }
    class Yo {
        constructor(a) {
            this.G = a;
            this.xl = new tp(this.G)
        }
    }
    class tp {
        constructor(a) {
            this.G = a
        }
        Wa(a) {
            cp(this.G, em(M(M(M(cm("pA20Lb"), Vl(new L, a.Ek)), Vl(new L, a.wl)), Vl(new L, a.operation)), Zl(new bm, Tl(a.ia))))
        }
    }
    class up extends Sl {
        constructor() {
            super(...arguments);
            this.xe = new Vo(this)
        }
    }

    function cp(a, ...b) {
        a.l(...b.map(c => ({
            ue: !1,
            vg: 1,
            Zf: Ld(c)
        })))
    }

    function vp(a, ...b) {
        a.l(...b.map(c => ({
            ue: !0,
            vg: 3,
            Zf: Ld(c)
        })))
    }

    function wp(a, ...b) {
        a.l(...b.map(c => ({
            ue: !0,
            vg: 7,
            Zf: Ld(c)
        })))
    }

    function xp(a, ...b) {
        a.l(...b.map(c => ({
            ue: !0,
            vg: 37,
            Zf: Ld(c)
        })))
    }
    var yp = class extends up {};

    function zp(a, b) {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    }

    function Ap(a, b, c = 1, d = !1) {
        if (d) {
            d = typeof CompressionStream === "function";
            var e = b.length > 1024;
            typeof document !== "undefined" && document.visibilityState !== "hidden" && d && e ? Ul(b).then(f => {
                var g = c === 1 ? 5 : 6;
                f = yb(f);
                zp(`${a}?e=${g}`, f)
            }).catch(() => {
                zp(`${a}?e=${c}`, b)
            }) : zp(`${a}?e=${c}`, b)
        } else zp(`${a}?e=${c}`, b)
    }
    var Bp = class extends yp {
            constructor(a) {
                super(2, a, void 0);
                this.i = Ap
            }
            l(...a) {
                try {
                    let b = Pl(a, Rl(this));
                    this.i("https://pagead2.googlesyndication.com/pagead/ping", b, 1, !1)
                } catch (b) {
                    Ql(b, Rl(this))
                }
            }
        },
        Cp = class extends Bp {};

    function Yq(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.i.length) {
            var b = Pl(a.i, Rl(a));
            a.J("https://pagead2.googlesyndication.com/pagead/ping", b, 1, !1);
            a.i = []
        }
    }
    var ar = class extends yp {
            constructor(a, b, c, d, e) {
                super(2, a, Zq);
                this.J = Ap;
                this.Z = b;
                this.O = c;
                this.U = d;
                this.B = e;
                this.i = [];
                this.j = null;
                this.C = !1
            }
            l(...a) {
                try {
                    this.U && Pl(this.i.concat(a), Rl(this)).length >= 65536 && Yq(this), this.B && !this.C && (this.C = !0, $q(this.B, () => {
                        Yq(this)
                    })), this.i.push(...a), this.i.length >= this.O && Yq(this), this.i.length && this.j === null && (this.j = setTimeout(() => {
                        Yq(this)
                    }, this.Z))
                } catch (b) {
                    Ql(b, Rl(this))
                }
            }
        },
        br = class extends ar {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var cr = a => {
        var b = "Gc";
        if (a.Gc && a.hasOwnProperty(b)) return a.Gc;
        b = new a;
        return a.Gc = b
    };

    function dr(a, b, c) {
        return b[a] || c
    };

    function er(a, b) {
        a.j = (c, d) => dr(2, b, () => [])(c, 1, d);
        a.i = c => dr(3, b, () => [])(c ? ? 1)
    }
    class fr {
        j() {
            return []
        }
        i() {
            return []
        }
    }

    function gr(a, b) {
        return cr(fr).j(a, b)
    }

    function Zq(a) {
        return cr(fr).i(a)
    };

    function Ml(a, b, c, d = !1, e) {
        if ((d ? a.i : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Fl ? f = c : (f = new Fl, oj(c, (h, k) => {
                var l = f,
                    m = l.A++;
                h = zl(k, h);
                l.i.push(m);
                l.j[m] = h
            }));
            let g = El(f, a.protocol, a.domain, a.path + b + "&");
            g && hk(t, g)
        } catch (f) {}
    }

    function hr(a, b) {
        b >= 0 && b <= 1 && (a.i = b)
    }
    var ir = class {
        constructor() {
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204?id=";
            this.protocol = "https:";
            this.i = Math.random()
        }
    };
    let Ll, jr;
    const kr = new yl(window);
    (function(a) {
        Ll = a ? ? new ir;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        hr(Ll, window.google_srt);
        jr = new Nl(kr);
        jr.l(() => {});
        jr.B(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || xl(kr) : kr.i && Ji(window, "load", () => {
            window.google_measure_js_timing || xl(kr)
        })
    })();

    function lr(a) {
        jr.Fa(1085, a)
    };
    const mr = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function nr(a = t) {
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function or(a = nr()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function pr(a = nr()) {
        if (a && a.container) {
            a = a.container.split(",");
            let b = [];
            for (let c = 0; c < a.length; c++) b.push(mr[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function qr() {
        var a = nr();
        return a && a.initialIntersection
    }

    function rr() {
        var a = qr();
        return a && a.rootBounds && qa(a.rootBounds) ? new Ah(a.rootBounds.width, a.rootBounds.height) : null
    }

    function sr(a = nr()) {
        return a ? rj(a.master) ? a.master : null : null
    }

    function tr(a, b) {
        var c = a.ampInaboxIframes = a.ampInaboxIframes || [],
            d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            gb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        var f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) ||
                    a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Ij(a.document, g ? jh `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : jh `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Ji(a, "message", f), d = () => {
            Ki(a, "message", f)
        });
        return e
    };

    function ur(a, b) {
        a = vr(a);
        if (!a) return b;
        var c = b.slice(-1);
        return b + (c === "?" || c === "#" ? "" : "&") + a
    }

    function vr(a) {
        var b = {};
        oj(a, (c, d) => {
            if (c || c === 0 || c === !1) lc(c) && (c = c ? 1 : 0), b[d] = c
        });
        return Object.entries(b).map(([c, d]) => `${c}=${encodeURIComponent(String(d))}`).join("&")
    }

    function wr(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        var b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };
    var xr = a => {
            a = a.google_unique_id;
            return jc(a) ? a : 0
        },
        yr = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        zr = a => {
            var b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        let e = String(a.google_ad_format);
                        if (e && e.match) {
                            let f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                let g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h > 0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Ar = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    let Br = (new Date).getTime();
    var Cr = {
        Io: 0,
        Ho: 1,
        Eo: 2,
        zo: 3,
        Fo: 4,
        Ao: 5,
        Go: 6,
        Co: 7,
        Do: 8,
        yo: 9,
        Bo: 10,
        Jo: 11
    };
    var Dr = {
        Lo: 0,
        Mo: 1,
        Ko: 2
    };

    function Er(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Fr(a) {
        a = a.map(b => new ri(b.top, b.right, b.bottom, b.left));
        a = Gr(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Gr(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return a.slice(1).reduce((b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, si(a[0]))
    };
    var Gh = {
        Zo: 0,
        qo: 1,
        uo: 2,
        ro: 3,
        so: 4,
        xo: 8,
        ep: 9,
        So: 10,
        To: 11,
        cp: 16,
        po: 17,
        oo: 24,
        Ro: 25,
        lo: 26,
        ko: 27,
        Ak: 30,
        Oo: 32,
        Qo: 40,
        gp: 41,
        fp: 42,
        no: 43,
        Uo: 44
    };
    var Hr = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            in_page_banner: 8,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Ir = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 8,
            [40]: 8,
            [9]: 4,
            [30]: 5
        };
    var Jr = 728 * 1.38;

    function Kr(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = Lr(a, !0, !0),
                    d = Mr(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Nr(a, b = 420, c = !1, d = !1) {
        return (a = Lr(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Or(a) {
        return Math.max(0, Pr(a, !0) - Mr(a))
    }

    function Qr(a) {
        a = a.document;
        var b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Mr(a, b = !1) {
        var c = Qr(a).clientHeight;
        return b ? c * zj(a) : c
    }

    function Lr(a, b = !1, c = !1) {
        c = Qr(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * zj(a) : c
    }

    function Pr(a, b) {
        var c = Qr(a);
        return b ? (a = Mr(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function Rr(a, b) {
        return Sr(b) || b === 10 || !a.adCount ? !1 : b === 1 || b === 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function Tr(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function Ur(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function Vr(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function Wr(a) {
        var b = {},
            c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                let d = c[a];
                if ("key" in d && "value" in d) {
                    let e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function Xr(a, b, c, d) {
        Ml(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function Yr(a) {
        var b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Za(Object.keys(b), c => {
            zi(a, c) || ui(a, c, b[c])
        });
        Yj(a)
    }

    function Sr(a) {
        return a === 26 || a === 27 || a === 40 || a === 41 || a === 44
    };

    function Zr(a, b) {
        $r(a).forEach(b, void 0)
    }

    function $r(a) {
        var b = [],
            c = a.length;
        for (let d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function as(a, b) {
        return a.i[bs(b)] !== void 0
    }

    function cs(a) {
        var b = [];
        for (let c in a.i) a.i[c] !== void 0 && a.i.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }

    function ds(a) {
        var b = [];
        for (let c in a.i) a.i[c] !== void 0 && a.i.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }
    var es = class {
        constructor() {
            this.i = {};
            this.j = {}
        }
        set(a, b) {
            var c = bs(a);
            this.i[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = bs(a);
            return this.i[a] !== void 0 ? this.i[a] : b
        }
        pe() {
            return cs(this).length
        }
        clear() {
            this.i = {};
            this.j = {}
        }
    };

    function bs(a) {
        return a instanceof Object ? String(ra(a)) : a + ""
    };
    var fs = class {
        constructor(a) {
            this.i = new es;
            if (a)
                for (let b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.i.set(a, !0)
        }
        contains(a) {
            return as(this.i, a)
        }
    };
    const gs = new fs("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function hs(a) {
        pb(a.document.body.offsetHeight)
    };

    function is(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function N() {
        this.ka = this.ka;
        this.D = this.D
    }
    N.prototype.ka = !1;
    N.prototype.dispose = function() {
        this.ka || (this.ka = !0, this.W())
    };
    N.prototype[ia(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function xs(a, b) {
        ys(a, Aa(is, b))
    }

    function ys(a, b) {
        a.ka ? b() : (a.D || (a.D = []), a.D.push(b))
    }
    N.prototype.W = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function zs(a) {
        a.i.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function As(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.i.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.i.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Bs = class extends N {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.i = b
        }
        W() {
            zs(this);
            super.W()
        }
    };

    function Cs(a) {
        var b = new P(a.getValue());
        a.listen(c => b.i(c));
        return b
    }

    function Ds(a, b) {
        var c = new P({
            first: a.V,
            second: b.V
        });
        a.listen(() => c.i({
            first: a.V,
            second: b.V
        }));
        b.listen(() => c.i({
            first: a.V,
            second: b.V
        }));
        return c
    }

    function Es(...a) {
        var b = [...a],
            c = () => b.every(f => f.V),
            d = new P(c()),
            e = () => {
                d.i(c())
            };
        b.forEach(f => f.listen(e));
        return Fs(d)
    }

    function Gs(...a) {
        var b = [...a],
            c = () => b.findIndex(f => f.V) !== -1,
            d = new P(c()),
            e = () => {
                d.i(c())
            };
        b.forEach(f => f.listen(e));
        return Fs(d)
    }

    function Fs(a, b = Hs) {
        var c = a.V,
            d = new P(a.V);
        a.listen(e => {
            b(e, c) || (c = e, d.i(e))
        });
        return d
    }

    function Is(a, b, c) {
        return a.j(d => {
            d === b && c()
        })
    }

    function Js(a, b, c) {
        if (a.V === b) return c(), () => {};
        var d = {
            Sd: null
        };
        d.Sd = Is(a, b, () => {
            d.Sd && (d.Sd(), d.Sd = null);
            c()
        });
        return d.Sd
    }

    function Ks(a, b, c) {
        Fs(a).listen(d => {
            d === b && c()
        })
    }

    function Ls(a, b) {
        a.A && a.A();
        a.A = b.listen(c => a.i(c), !0)
    }

    function Ms(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.V
        }
    }
    var P = class {
        constructor(a) {
            this.V = a;
            this.l = new Map;
            this.D = 1;
            this.A = null
        }
        listen(a, b = !1) {
            var c = this.D++;
            this.l.set(c, a);
            b && a(this.V);
            return () => {
                this.l.delete(c)
            }
        }
        j(a) {
            return this.listen(a, !0)
        }
        B() {
            return this.V
        }
        i(a) {
            this.V = a;
            this.l.forEach(b => {
                b(this.V)
            })
        }
        map(a) {
            var b = new P(a(this.V));
            this.listen(c => b.i(a(c)));
            return b
        }
    };

    function Hs(a, b) {
        return a == b
    };

    function Ns(a) {
        return new Os(a)
    }

    function Ps(a, b) {
        Za(a.i, c => {
            c(b)
        })
    }
    var Qs = class {
        constructor() {
            this.i = []
        }
    };
    class Os {
        constructor(a) {
            this.i = a
        }
        listen(a) {
            this.i.i.push(a)
        }
        map(a) {
            var b = new Qs;
            this.listen(c => Ps(b, a(c)));
            return Ns(b)
        }
        delay(a, b) {
            var c = new Qs;
            this.listen(d => {
                a.setTimeout(() => {
                    Ps(c, d)
                }, b)
            });
            return Ns(c)
        }
    }

    function Rs(...a) {
        var b = new Qs;
        a.forEach(c => {
            c.listen(d => {
                Ps(b, d)
            })
        });
        return Ns(b)
    };

    function Ss(a) {
        return Fs(Ds(a.i, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Ts(c, b)
        }))
    }
    var Vs = class {
        constructor(a) {
            this.j = a;
            this.i = new P(null);
            this.l = new P(null);
            this.A = new Qs;
            this.C = b => {
                this.i.V == null && b.touches.length == 1 && this.i.i(b.touches[0])
            };
            this.B = b => {
                var c = this.i.V;
                c != null && (b = Us(c, b.changedTouches), b != null && (this.i.i(null), this.l.i(null), Ps(this.A, Ts(c, b))))
            };
            this.D = b => {
                var c = this.i.V;
                c != null && (c = Us(c, b.changedTouches), c != null && (this.l.i(c), b.preventDefault()))
            }
        }
    };

    function Ts(a, b) {
        return {
            uk: b.pageX - a.pageX,
            vk: b.pageY - a.pageY
        }
    }

    function Us(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Ws(a) {
        return Fs(Ds(a.i, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Xs(c, b)
        }))
    }
    var Ys = class {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.i = new P(null);
            this.j = new P(null);
            this.l = new Qs;
            this.J = c => {
                this.i.i(c)
            };
            this.D = c => {
                var d = this.i.V;
                d != null && (this.i.i(null), this.j.i(null), Ps(this.l, Xs(d, c)))
            };
            this.C = c => {
                this.i.V != null && (this.j.i(c), c.preventDefault())
            }
        }
    };

    function Xs(a, b) {
        return {
            uk: b.screenX - a.screenX,
            vk: b.screenY - a.screenY
        }
    };
    var at = (a, b, c) => {
        var d = new Zs(a, b, c);
        return () => $s(d)
    };

    function $s(a) {
        if (a.i) return !1;
        if (a.j == null) return bt(a), !0;
        var b = a.j + a.B - (new Date).getTime();
        if (b < 1) return bt(a), !0;
        ct(a, b);
        return !0
    }

    function bt(a) {
        a.j = (new Date).getTime();
        a.A()
    }

    function ct(a, b) {
        a.i = !0;
        a.l.setTimeout(() => {
            a.i = !1;
            bt(a)
        }, b)
    }
    class Zs {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = null;
            this.i = !1
        }
    };

    function dt(a) {
        return et(Ws(a.i), Ss(a.j))
    }

    function ft(a) {
        return Rs(Ns(a.i.l), Ns(a.j.A))
    }
    var gt = class {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
    };

    function et(a, b) {
        return Ds(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function ht(a, b, c) {
        return new it(a, b, c)
    }

    function jt(a) {
        a.win.requestAnimationFrame(() => {
            if (!a.ka) try {
                a.j.i(new Ah(a.element.offsetWidth, a.element.offsetHeight))
            } catch (b) {
                throw a.ha ? .Aa({
                    methodName: 1809,
                    Ha: b
                }), b;
            }
        })
    }

    function kt(a) {
        a.i || (a.i = !0, a.l.observe(a.element));
        return Fs(a.j, Bh)
    }
    var it = class extends N {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.element = b;
            this.ha = c;
            this.i = !1;
            this.j = new P(new Ah(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                jt(this)
            })
        }
        W() {
            this.l.disconnect();
            super.W()
        }
    };

    function lt(a, b) {
        return {
            top: a.i - b,
            right: a.l + a.j,
            bottom: a.i + b,
            left: a.l
        }
    }
    var mt = class {
        constructor(a, b, c) {
            this.l = a;
            this.i = b;
            this.j = c
        }
    };

    function nt(a, b) {
        a = a.getBoundingClientRect();
        return new ot(a.top + Ur(b), a.bottom - a.top)
    }

    function pt(a) {
        return new ot(Math.round(a.i), Math.round(a.j))
    }
    var ot = class {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        getHeight() {
            return this.j
        }
    };
    var rt = (a, b) => {
        var c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new fs(c);
        b = b.filter(e => !d.contains(e));
        b.length && (qt(a, b), lb(c, b))
    };

    function qt(a, b) {
        for (let d of b) {
            let e = Jj("LINK", a.document);
            e.type = "text/css";
            b = e;
            var c = jh `//fonts.googleapis.com/css?family=${d}`;
            b.href = Wg(c).toString();
            b.rel = "stylesheet";
            (a.document.head ? ? a.document.body).append(e)
        }
    };

    function st(a, b) {
        a.C ? b(a.l) : a.j.push(b)
    }

    function tt(a, b) {
        a.C = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    var ut = class extends N {
        constructor(a) {
            super();
            this.i = a;
            this.j = [];
            this.C = !1;
            this.B = this.l = null;
            this.J = at(a, 1E3, () => {
                if (this.B != null) {
                    var b = Pr(this.i, !0) - this.B;
                    b > 1E3 && tt(this, b)
                }
            });
            this.A = null
        }
        init(a, b) {
            a == null ? (this.B = a = Pr(this.i, !0), this.i.addEventListener("scroll", this.J), b != null && b(a)) : this.A = this.i.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        W() {
            this.A != null && this.i.clearTimeout(this.A);
            this.i.removeEventListener("scroll", this.J);
            this.j = [];
            this.l = null;
            super.W()
        }
    };
    var vt = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    var wt = class {
        constructor(a = 1) {
            this.i = a
        }
        next() {
            var a = 48271 * this.i % 2147483647;
            this.i = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.i / 2147483647
        }
    };

    function xt(a, b, c) {
        var d = [];
        for (let e of a.i) b(e) ? d.push(e) : c(e);
        return new yt(d)
    }

    function zt(a) {
        return a.i.slice(0)
    }

    function At(a, b = 1) {
        a = zt(a);
        var c = new wt(b);
        ob(a, () => c.next());
        return new yt(a)
    }
    var yt = class {
        constructor(a) {
            this.i = a.slice(0)
        }
        forEach(a) {
            this.i.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new yt(ab(this.i, a))
        }
        apply(a) {
            return new yt(a(zt(this)))
        }
        sort(a) {
            return new yt(zt(this).sort(a))
        }
        get(a) {
            return this.i[a]
        }
        add(a) {
            var b = zt(this);
            b.push(a);
            return new yt(b)
        }
        count() {
            return this.i.length
        }
    };
    var Bt = class {
        constructor(a) {
            this.i = new fs(a)
        }
        contains(a) {
            return this.i.contains(a)
        }
    };

    function Ct(a) {
        return new Dt({
            value: a
        }, null)
    }

    function Et(a) {
        return new Dt(null, a)
    }

    function Ft(a) {
        try {
            return Ct(a())
        } catch (b) {
            return Et(b)
        }
    }

    function Gt(a) {
        return a.j != null
    }

    function Ht(a) {
        return Gt(a) ? a.getValue() : null
    }

    function It(a, b) {
        Gt(a) && b(a.getValue());
        return a
    }

    function Jt(a, b) {
        return Gt(a) ? a : Et(b(a.i))
    }

    function Kt(a, b) {
        return Jt(a, c => Error(`${b}${c.message}`))
    }

    function Lt(a, b) {
        Gt(a) || b(a.i);
        return a
    }
    var Dt = class {
        constructor(a, b) {
            this.j = a;
            this.i = b
        }
        getValue() {
            return this.j.value
        }
        map(a) {
            return Gt(this) ? (a = a(this.getValue()), a instanceof Dt ? a : Ct(a)) : this
        }
    };
    var Mt = class {
        constructor() {
            this.i = new es
        }
        set(a, b) {
            var c = this.i.get(a);
            c || (c = new fs, this.i.set(a, c));
            c.add(b)
        }
    };

    function Nt(a) {
        return b => {
            for (let c of a) c(b)
        }
    };
    var Ot = class extends J {
        getId() {
            return cf(this, 3)
        }
    };
    var Pt = class {
        constructor(a, {
            Ti: b,
            Hk: c,
            qm: d,
            Xj: e
        }) {
            this.B = a;
            this.l = c;
            this.A = new yt(b || []);
            this.j = e;
            this.i = d
        }
    };

    function Qt(a) {
        var b = a.length;
        if (b === 0) return 0;
        var c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    };
    var Rt = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new es;
            for (let c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Tt = a => {
            var b = St(a);
            a = [];
            for (let c of b) b = String(c.Vd), a.push(c.Sc + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const St = a => {
            var b = [],
                c = a.A;
            c && c.count() && b.push({
                Sc: "a",
                Vd: Ut(c)
            });
            a.l != null && b.push({
                Sc: "as",
                Vd: a.l
            });
            a.i != null && b.push({
                Sc: "i",
                Vd: String(a.i)
            });
            a.j != null && b.push({
                Sc: "rp",
                Vd: String(a.j)
            });
            b.sort(function(d, e) {
                return d.Sc.localeCompare(e.Sc)
            });
            b.unshift({
                Sc: "t",
                Vd: Vt(a.B)
            });
            return b
        },
        Vt = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Ut = a => {
            a = zt(a).map(Wt);
            a = JSON.stringify(a);
            return Qt(a)
        },
        Wt = a => {
            var b = {};
            Ue(a, 7) != null && (b.q = cf(a, 7));
            Te(a, 2) != null &&
                (b.o = Te(a, 2, ge));
            Te(a, 5) != null && (b.p = Te(a, 5, ge));
            return b
        };

    function Xt() {
        var a = new Yt;
        return qf(a, 2, 1)
    }
    var Yt = class extends J {
        setLocation(a) {
            return qf(this, 1, a)
        }
        i() {
            return Tc(he(this, 1))
        }
    };

    function Zt(a) {
        var b = [].slice.call(arguments).filter(rh(e => e === null));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Yi || []);
            d = Object.assign(d, e.qe())
        });
        return new $t(c, d)
    }

    function au(a) {
        switch (a) {
            case 1:
                return new $t(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new $t(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new $t(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new $t(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function bu(a) {
        return a == null ? null : new $t(null, {
            google_ml_rank: a
        })
    }

    function cu(a) {
        return a == null ? null : new $t(null, {
            google_placement_id: Tt(a)
        })
    }

    function du({
        Al: a,
        Rl: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new $t(null, a)
    }
    var $t = class {
        constructor(a, b) {
            this.Yi = a;
            this.i = b
        }
        qe() {
            return this.i
        }
    };
    var eu = class extends J {};
    var fu = class extends J {};
    var gu = class extends J {
        l() {
            return cf(this, 2)
        }
        i() {
            return cf(this, 5)
        }
        A() {
            return Je(this, fu, 3, re())
        }
        D() {
            return Te(this, 4)
        }
        C() {
            return qe(this, 6)
        }
        J() {
            return le(this, eu, 7)
        }
    };
    var hu = class extends J {};
    var iu = class extends J {
        A() {
            return D(this, 12)
        }
        l() {
            return Re(this, 13)
        }
        i() {
            return Pc(he(this, 23))
        }
    };
    var ju = class extends J {};

    function ku(a) {
        return qe(a, 1, ge)
    }
    var lu = class extends J {
        i() {
            return df(this, 3)
        }
        l() {
            return bf(this, 6)
        }
    };
    var mu = class extends J {};
    var nu = class extends J {};
    var ou = class extends J {
        Da() {
            return z(this, Ot, 1)
        }
        i() {
            return df(this, 2)
        }
    };
    var pu = class extends J {};
    var qu = class extends J {};
    var ru = class extends J {
            getName() {
                return cf(this, 4)
            }
        },
        su = [1, 2, 3];
    var tu = class extends J {
        i() {
            return z(this, lu, 10)
        }
    };

    function uu(a) {
        return bf(a, 1)
    }
    var vu = class extends J {
        i() {
            return bf(this, 2)
        }
        l() {
            return bf(this, 3)
        }
    };
    var wu = class extends J {
        i() {
            return Re(this, 1, ge)
        }
    };
    var xu = class extends J {
        i() {
            return We(this, 1)
        }
    };
    var yu = class extends J {
        i() {
            return E(this, 1)
        }
        l() {
            return E(this, 2)
        }
    };
    var zu = class extends J {
        A() {
            return D(this, 1)
        }
        D() {
            return D(this, 3)
        }
        C() {
            return D(this, 7)
        }
        i() {
            return D(this, 4)
        }
        l() {
            return D(this, 5)
        }
    };
    var Au = class extends J {
        i() {
            return z(this, xu, 6)
        }
        A() {
            return D(this, 14)
        }
        l() {
            return z(this, zu, 12)
        }
    };
    var Bu = class extends J {};
    var Cu = class extends J {};
    var Du = class extends J {};
    var Eu = class extends J {
        i() {
            return Je(this, Du, 1, re())
        }
    };
    var Fu = class extends J {
        setProperty(a) {
            return of(this, 1, a)
        }
        getValue() {
            return cf(this, 2)
        }
        clearValue() {
            return je(this, 2)
        }
    };
    var Gu = class extends J {};
    var Hu = class extends J {};
    var Iu = class extends J {
        Da() {
            return z(this, Ot, 1)
        }
        i() {
            return df(this, 2)
        }
    };
    var Ju = class extends J {},
        Ku = Hg(Ju);
    var Lu = class extends J {
        i() {
            return We(this, 1)
        }
    };
    var Mu = class extends J {};
    var Ou = class extends J {
            i() {
                return af(this, Mu, 2, Nu)
            }
        },
        Nu = [1, 2];
    var Pu = class extends J {
        i() {
            return z(this, Ou, 3)
        }
    };
    var Qu = class extends J {};
    var Ru = class extends J {
        i() {
            return Je(this, Qu, 1, re())
        }
    };
    var Su = class extends J {
        i() {
            return se(this, 1, rd, re())
        }
        l() {
            return z(this, Pu, 3)
        }
    };
    var Tu = class extends J {};
    var Uu = class extends J {};
    var Vu = class extends J {};
    var Wu = class extends J {
        getLevel() {
            return F(this, 1)
        }
    };
    var Xu = class extends J {};
    var Yu = class extends J {};
    var Zu = class extends J {},
        $u = [1, 2, 3, 5];
    var av = class extends J {};
    var bv = class extends J {
        Lb() {
            return z(this, av, 1)
        }
        setContent(a) {
            return A(this, 1, a)
        }
        pj() {
            return He(this, av, 1)
        }
        Hf() {
            return F(this, 3)
        }
    };
    var cv = class extends J {
        Lb() {
            return z(this, bv, 10)
        }
        setContent(a) {
            return A(this, 10, a)
        }
        pj() {
            return He(this, bv, 10)
        }
    };

    function dv(a) {
        return Je(a, cv, 15, re())
    }
    var ev = class extends J {
            i() {
                return Ze(this, 24)
            }
        },
        fv = Hg(ev);
    var gv = Hg(class extends J {
        i() {
            return z(this, iu, 15)
        }
    });
    var hv = class extends J {},
        iv = Hg(hv);

    function jv(a) {
        try {
            let b = a.localStorage.getItem("google_ama_settings");
            return b ? iv(b) : null
        } catch (b) {
            return null
        }
    }

    function kv(a, b) {
        if (a.jh !== void 0) {
            var c = jv(b);
            c || (c = new hv);
            a.jh !== void 0 && ef(c, 2, a.jh);
            a = Date.now() + 864E5;
            Number.isFinite(a) && jf(c, 1, Math.round(a));
            c = cg(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else {
            if (c = a = jv(b)) c = We(a, 1), c = BigInt(c) < Date.now();
            if (c) try {
                b.localStorage.removeItem("google_ama_settings")
            } catch (d) {}
        }
    };
    var lv = {
            rd: "ama_success",
            lc: .1,
            Fc: !0,
            wd: !0
        },
        mv = {
            rd: "ama_failure",
            lc: .1,
            Fc: !0,
            wd: !0
        },
        nv = {
            rd: "ama_coverage",
            lc: .1,
            Fc: !0,
            wd: !0
        },
        ov = {
            rd: "ama_opt",
            lc: .1,
            Fc: !0,
            wd: !1
        },
        pv = {
            rd: "ama_auto_rs",
            lc: 1,
            Fc: !0,
            wd: !1
        },
        qv = {
            rd: "ama_constraints",
            lc: 0,
            Fc: !0,
            wd: !0
        };

    function rv(a) {
        if (a != null) return sv(a)
    }

    function tv(a) {
        return a == null ? null : sv(a)
    }

    function sv(a) {
        return wc(a) ? Number(a) : String(a)
    };

    function uv(a, b) {
        vv(a.ha, pv, { ...b,
            evt: "place",
            vh: Mr(a.win),
            eid: rv(a.i.i() ? .i()) || 0,
            hl: z(a.i, yu, 5) ? .i() || ""
        })
    }

    function wv(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && $k(c.stack, "") || "");
        uv(a, b)
    }
    var xv = class {
        constructor(a, b, c) {
            this.win = a;
            this.ha = b;
            this.i = c
        }
    };
    const yv = ["-webkit-text-fill-color"];

    function zv(a) {
        if (sb) {
            {
                let c = Kj(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Av(a)
                } else a = Bv()
            }
        } else a = Bv();
        return a
    }

    function Bv() {
        var a = {
            all: "initial"
        };
        Za(yv, b => {
            a[b] = "unset"
        });
        return a
    }

    function Av(a) {
        Za(yv, b => {
            delete a[b]
        });
        return a
    };
    var Cv = class {
        constructor(a) {
            this.i = a
        }
        Lb(a) {
            var b = a.document.createElement("div");
            K(b, zv(a));
            K(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.i);
            var c = a.document.createElement("div");
            K(c, zv(a));
            K(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function Dv(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];
            var c = a.className ? a.className.split(/\s+/) : [];a = {};
            for (let d = 0; d < c.length; ++d) a[c[d]] = !0;
            for (c = 0; c < b.length; ++c)
                if (!a[b[c]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Ev(a) {
        return $r(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Fv(a, b) {
        a = pi(new ci(a), "DIV");
        var c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Gv(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    let d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Dv(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Hv(a) {
        if (a && a.parentNode) {
            let b = a.parentNode;
            b.removeChild(a);
            Dv(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Q = class {
            constructor(a, b = !1) {
                this.i = a;
                this.defaultValue = b
            }
        },
        R = class {
            constructor(a, b = 0) {
                this.i = a;
                this.defaultValue = b
            }
        },
        Iv = class {
            constructor(a, b = "") {
                this.i = a;
                this.defaultValue = b
            }
        },
        Jv = class {
            constructor(a, b = []) {
                this.i = a;
                this.defaultValue = b
            }
        };
    var Kv = new R(619278254, 10),
        Lv = new R(45696523),
        Mv = new R(1386),
        Nv = new Jv(1385),
        Ov = new R(1359),
        Pv = new R(1358),
        Qv = new Q(1360),
        Rv = new R(1357),
        Sv = new Q(1345),
        Tv = new Jv(1387),
        Uv = new Q(687716473),
        Vv = new Q(45693370),
        Wv = new Q(745713445),
        Xv = new R(1130, 100),
        Yv = new R(1340, .2),
        Zv = new R(1338, .3),
        $v = new R(1339, .3),
        aw = new R(1032, 200),
        bw = new Q(736254284),
        cw = new Iv(14),
        dw = new R(1224, .01),
        ew = new R(1346, 6),
        fw = new R(1347, 3),
        gw = new Q(1344),
        hw = new R(846334470, 1E3),
        iw = new Q(986016310),
        jw = new Q(987654321),
        kw = new Q(1260),
        lw =
        new Q(1393, !0),
        mw = new R(1394, 120),
        nw = new R(1396, 1E3),
        ow = new R(1395, 500),
        pw = new Q(316),
        qw = new Q(1290),
        rw = new Q(1389),
        sw = new Q(1390),
        tw = new Q(334),
        uw = new Q(1383),
        vw = new R(1263, -1),
        ww = new R(1388),
        xw = new R(54),
        yw = new R(1323, -1),
        zw = new R(1265, -1),
        Aw = new R(1264, -1),
        Bw = new Q(1291),
        Cw = new Q(1267, !0),
        Dw = new Q(1266),
        Ew = new Q(313),
        Fw = new R(66, -1),
        Gw = new R(65, -1),
        Hw = new Q(942075621),
        Iw = new Q(1256),
        Jw = new Q(369),
        Kw = new Q(368),
        Lw = new Q(1300, !0),
        Mw = new Jv(1273, ["en", "de", "fr", "es", "ja"]),
        Nw = new Jv(1261, ["44786015",
            "44786016"
        ]),
        Ow = new Q(1361),
        Pw = new Q(290),
        Qw = new R(770241922, 1E3),
        Rw = new Q(1354),
        Sw = new Q(45719801),
        Tw = new Q(823552246),
        Uw = new Q(1350),
        Vw = new Q(1356),
        Ww = new R(992342422),
        Xw = new R(992342421),
        Yw = new Q(966532578, !0),
        Zw = new Q(954673024),
        $w = new Q(993571682),
        ax = new Q(987550831),
        bx = new Q(969848357),
        cx = new Q(566279275),
        dx = new Q(987550324),
        ex = new Q(622128248),
        fx = new Q(566279276),
        gx = new Q(992306509),
        hx = new Q(986968464),
        ix = new R(978678850),
        jx = new Q(990448773),
        kx = new Q(903704925),
        lx = new Q(933719197),
        mx = new Q(987566419),
        nx = new Q(944081220),
        ox = new Q(842638817, !0),
        px = new Q(992218248),
        qx = new Q(767123927, !0),
        rx = new Q(917171616),
        sx = new Q(990268434),
        tx = new Jv(712458671, " ar bn en es fr hi id ja ko mr pt ru sr te th tr uk vi zh".split(" ")),
        ux = new R(989487836),
        vx = new class {
            constructor(a, b = []) {
                this.i = a;
                this.defaultValue = b
            }
        }(683929765, ["14"]),
        wx = new Q(960476382),
        xx = new Q(991129681),
        yx = new Iv(834418651, "calc(max(<DH> - 150px, 50px))"),
        zx = new Q(506914611),
        Ax = new Q(991629756),
        Bx = new Q(987379248),
        Cx = new Q(989564944),
        Dx = new Q(994461380),
        Ex = new R(775999093, 1),
        Fx = new R(618163195, 8E3),
        Gx = new R(624950166, 3E3),
        Hx = new R(623405755, 300),
        Ix = new R(508040914, 622),
        Jx = new R(547455356, 49),
        Kx = new R(9603, 4),
        Lx = new R(650548030, 3),
        Mx = new R(650548032, 300),
        Nx = new R(650548031, 1),
        Ox = new R(469675170, 45E3),
        Px = new R(836239785, .6),
        Qx = new Q(45721294),
        Rx = new Q(947021890),
        Sx = new Q(934276257),
        Tx = new Q(982535665),
        Ux = new Q(970757386),
        Vx = new R(824002820),
        Wx = new Q(732272249),
        Xx = new Q(827615816),
        Yx = new Jv(754933824),
        Zx = new Iv(754933823, "1-0-45"),
        $x = new Q(834350237),
        ay = new R(63, 30),
        by = new R(550718588, 250),
        cy = new R(624290870, 50),
        dy = new R(815871887, .8),
        ey = new Q(77),
        fy = new Q(78),
        gy = new Q(83),
        hy = new Q(80),
        iy = new Q(76),
        jy = new Q(84),
        ky = new R(1976),
        ly = new Q(188);
    var my = class {
        constructor() {
            var a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => {
                var d = a[b];
                if (typeof d === "string" && b != null) try {
                    return JSON.parse(d)
                } catch {}
                try {
                    return JSON.parse(c)
                } catch {
                    return null
                }
            };
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.B = (b, c) => a[b] != null ? a[b] : c;
            this.D = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function S(a) {
        return cr(my).j(a.i, a.defaultValue)
    }

    function T(a) {
        return cr(my).A(a.i, a.defaultValue)
    }

    function ny(a) {
        return cr(my).B(a.i, a.defaultValue)
    }

    function oy(a) {
        return cr(my).D(a.i, a.defaultValue)
    };
    var qy = (a, b, c, d = 0) => {
            var e = py(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Gf(c);) b = c;
                e = {
                    anchor: b,
                    position: e.fg
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Gv(a, e.anchor, e.position)
        },
        ry = (a, b, c, d = 0) => {
            S(Ew) ? qy(a, b, c, d) : Gv(a, b, c)
        };

    function py(a, b, c) {
        var d = f => {
                f = sy(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = sy(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: ty(a.previousSibling, d),
                    Gf: f => ty(f.previousSibling, d),
                    fg: 0
                };
            case 2:
                return {
                    init: ty(a.lastChild, d),
                    Gf: f => ty(f.previousSibling, d),
                    fg: 0
                };
            case 3:
                return {
                    init: ty(a.nextSibling, e),
                    Gf: f => ty(f.nextSibling, e),
                    fg: 3
                };
            case 1:
                return {
                    init: ty(a.firstChild, e),
                    Gf: f => ty(f.nextSibling, e),
                    fg: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function sy(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function ty(a, b) {
        return a && b(a) ? a : null
    };

    function uy(a, b) {
        do {
            let c = Kj(a, b);
            if (c && c.position === "fixed") return !1
        } while (a = a.parentElement);
        return !0
    }

    function vy(a, b, c) {
        var d;
        return a.style && !!a.style[c] && Oj(a.style[c]) || (d = Kj(a, b)) && !!d[c] && Oj(d[c]) || null
    }

    function wy(a, b) {
        try {
            let c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function xy(a, b) {
        return (a = wy(a, b)) ? a.y : 0
    }

    function yy(a, b) {
        var c = vy(b, a, "height");
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = vy(b, a, "height");
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && Oj(b.style.height)) && (c = Math.min(c, d)), (d = vy(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
        return c
    };

    function zy(a, b) {
        var c;
        return a.style && a.style.zIndex || (c = Kj(a, b)) && c.zIndex || null
    };
    const Ay = RegExp("(^| )adsbygoogle($| )");

    function By(a, b) {
        for (let c = 0; c < b.length; c++) {
            let d = b[c],
                e = Xh(d.property);
            a[e] = d.value
        }
    }

    function Cy(a, b, c, d, e, f) {
        a = Dy(a, e);
        a.Gb.setAttribute("data-ad-format", d ? d : "auto");
        Ey(a, b, c, f);
        return a
    }

    function Fy(a, b, c = null) {
        a = Dy(a, {});
        Ey(a, b, null, c);
        return a
    }

    function Ey(a, b, c, d) {
        var e = [];
        if (d = d && d.Yi) a.ld.className = d.join(" ");
        a = a.Gb;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Dy(a, b) {
        var c = Fv(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.eg && By(d, b.eg);
        a = pi(new ci(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Ji && (d.marginTop = b.Ji);
        b.Ug && (d.marginBottom = b.Ug);
        b.Pd && By(d, b.Pd);
        c.appendChild(a);
        return {
            ld: c,
            Gb: a
        }
    }

    function Gy(a, b, c, d = null) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var e = {
            element: b
        };
        c = c && c.qe();
        if (d) c = d.LmpfC ? ? c, e.ofxVI = {
            recYb: d
        };
        else if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (f) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (e.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(e)
    }

    function Hy(a) {
        var b = a.fqjyf;
        if (b != null)
            for (let e of Ev(a.document)) {
                var c = a,
                    d = xy(e, c);
                c = Mr(c);
                if (d < c) continue;
                if (d = Iy(e, b)) e.removeAttribute("height"), e.style.removeProperty("height"), e.removeAttribute("width"), e.style.removeProperty("width"), Gy(a, e, null, d), e.classList && S(Hw) && e.classList.remove("adsbygoogle-ablated-ad-slot")
            }
    }

    function Iy(a, b) {
        return (a = a.getAttribute("google_element_uid")) ? b && b[a] || null : null
    };
    var Ky = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement,
            e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (Jy(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Jy = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? Uh(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && gs.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Jy(a, b[c])) return !0
        }
        return !1
    };
    var Ly = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    var My = class {
        constructor() {
            this.i = {
                clearBoth: !0
            }
        }
        j(a, b, c, d) {
            return Cy(d.document, a, null, null, this.i, b)
        }
        l(a) {
            return Ly(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Ny(a) {
        var b = [];
        Zr(a.getElementsByTagName("p"), function(c) {
            Oy(c) >= 100 && b.push(c)
        });
        return b
    }

    function Oy(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        Zr(a.childNodes, function(c) {
            b += Oy(c)
        });
        return b
    }

    function Py(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Qy(a, b) {
        if (a.i == null) return b;
        switch (a.i) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.i);
        }
    }

    function Ry(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.A)
        } catch (d) {}
        if (!c.length) return [];
        b = kb(c);
        b = Qy(a, b);
        typeof a.j === "number" && (c = a.j, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.l === "number") {
            c = [];
            for (let d = 0; d < b.length; d++) {
                let e = Ny(b[d]),
                    f = a.l;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    var Sy = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.j = b;
            this.l = c;
            this.i = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.A,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.i
            })
        }
    };
    var Ty = class {
        constructor() {
            this.i = jh `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        Ea(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            b.error && b.meta && b.id || (b = new Xk(b, {
                context: a,
                id: d
            }));
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Ij(t.document, this.i), t.error_rep_loaded = !0);
            return !1
        }
        jc(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.Ea(a, c, .01, "jserror")) throw c;
            }
        }
        kc(a, b, c) {
            return (...d) => this.jc(a, () => b.apply(c, d))
        }
        Fa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.Ea(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };

    function Uy(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    }

    function Vy(a, b, c, d, e = !1) {
        var f = d || window,
            g = typeof queueMicrotask !== "undefined";
        return function(...h) {
            e && g && queueMicrotask(() => {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var k = gl(),
                l = 3;
            try {
                var m = b.apply(this, h)
            } catch (n) {
                l = 13;
                if (!c) throw n;
                c(a, n)
            } finally {
                f.google_measure_js_timing && k && Uy({
                    label: a.toString(),
                    value: k,
                    duration: (gl() || 0) - k,
                    type: l,
                    ...(e && g && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    })
                }, f)
            }
            return m
        }
    }

    function Wy(a, b) {
        return Vy(754, a, (c, d) => {
            (new Ty).Ea(c, d)
        }, b, !0)
    };

    function Xy(a, b, c) {
        return Vy(a, b, void 0, c, !0).apply()
    }

    function Yy(a, b) {
        return Wy(a, b).apply()
    }

    function Zy(a) {
        if (!a) return null;
        var b = cf(a, 7);
        if (cf(a, 1) || a.getId() || se(a, 4, rd, re()).length > 0) {
            var c = a.getId(),
                d = cf(a, 1),
                e = se(a, 4, rd, re());
            b = Te(a, 2, ge);
            var f = Te(a, 5, ge);
            a = $y(df(a, 6));
            let g = "";
            d && (g += d);
            c && (g += "#" + Py(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Py(e[c]);
            b = (e = g) ? new Sy(e, b, f, a) : null
        } else b = b ? new Sy(b, Te(a, 2, ge), Te(a, 5, ge), $y(df(a, 6))) : null;
        return b
    }
    const az = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function $y(a) {
        return a == null ? a : az[a]
    }

    function bz(a) {
        var b = [];
        for (let c = 0; c < a.length; c++) {
            let d = cf(a[c], 1),
                e = a[c].getValue();
            d && e != null && b.push({
                property: d,
                value: e
            })
        }
        return b
    }

    function cz(a, b) {
        var c = {};
        a && (c.Ji = cf(a, 1), c.Ug = cf(a, 2), c.clearBoth = !!bf(a, 3));
        b && (c.eg = bz(Je(b, Fu, 3, re()).map(d => Ed(d))), c.Pd = bz(Je(b, Fu, 4, re()).map(d => Ed(d))));
        return c
    }
    const dz = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        ez = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var fz = class {
        constructor(a) {
            this.i = a
        }
        j(a, b, c, d) {
            return Cy(d.document, a, null, null, this.i, b)
        }
        l() {
            return null
        }
    };
    var gz = class {
        constructor(a) {
            this.j = a
        }
        i(a) {
            a = Math.floor(a.j);
            var b = Ly(a);
            return new $t(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.j,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    var hz = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            return this.A
        }
        i() {
            return this.l
        }
    };
    var iz = class {
        constructor(a) {
            this.i = a
        }
        j(a, b, c, d) {
            var e = Je(this.i, Gu, 9, re()).length > 0 ? Je(this.i, Gu, 9, re())[0] : null,
                f = cz(Ge(this.i, Hu, 3), e);
            if (!e) return null;
            if (e = cf(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = pi(new ci(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.eg && By(c.style, f.eg);
                d = pi(new ci(d), "INS");
                f.Pd && By(d.style, f.Pd);
                c.appendChild(d);
                f = {
                    ld: c,
                    Gb: d
                };
                f.Gb.setAttribute("data-ad-type", "text");
                f.Gb.setAttribute("data-native-settings-key",
                    e);
                Ey(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        l() {
            var a = Je(this.i, Gu, 9, re()).length > 0 ? Je(this.i, Gu, 9, re())[0] : null;
            if (!a) return null;
            a = Je(a, Fu, 3, re());
            for (let b = 0; b < a.length; b++) {
                let c = a[b];
                if (cf(c, 1) == "height" && parseInt(c.getValue(), 10) > 0) return parseInt(c.getValue(), 10)
            }
            return null
        }
    };
    var jz = class {
        constructor(a) {
            this.i = a
        }
        j(a, b, c, d) {
            if (!this.i) return null;
            var e = this.i.google_ad_format || null,
                f = this.i.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    let k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Pd: g
                }
            } else c = {};
            a = Cy(d.document, a, f, e, c, b);
            a.Gb.setAttribute("data-pub-vars", JSON.stringify(this.i));
            return a
        }
        l() {
            return this.i ? parseInt(this.i.google_ad_height, 10) || null : null
        }
        qe() {
            return this.i
        }
    };
    var kz = class {
        constructor(a) {
            this.j = a
        }
        i() {
            return new $t([], {
                google_ad_type: this.j,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    var lz = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        i() {
            return this.l
        }
        j(a) {
            a = Ry(this.A, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function mz(a, b, c) {
        var d = [];
        for (let p = 0; p < a.length; p++) {
            a: {
                var e = a[p];
                var f = p,
                    g = b,
                    h = c,
                    k = e.Da();
                if (!k) {
                    e = null;
                    break a
                }
                var l = Zy(k);
                if (!l) {
                    e = null;
                    break a
                }
                var m = e.i();m = dz[m];
                var n = m === void 0 ? null : m;
                if (n === null) {
                    e = null;
                    break a
                }
                m = (m = z(e, Hu, 3)) ? bf(m, 3) : null;l = new lz(l, n);n = $e(e, 10).slice(0);Te(k, 5) != null && n.push(1);k = Te(e, 12, ge);
                let q = le(e, Yt, 4) ? z(e, Yt, 4) : null;Tc(he(e, 8)) == 1 ? (h = h && h.bl || null, e = new nz(l, new fz(cz(z(e, Hu, 3), null)), h, m, 0, n, q, g, f, k, e)) : e = Tc(he(e, 8)) == 2 ? new nz(l, new iz(e), h && h.rm || new kz("text"),
                    m, 1, n, q, g, f, k, e) : null
            }
            e !== null && d.push(e)
        }
        return d
    }

    function oz(a) {
        return a.A
    }

    function pz(a) {
        return a.tb
    }

    function qz(a) {
        return a.C instanceof jz ? a.C.qe() : null
    }

    function rz(a, b, c) {
        as(a.Z, b) || a.Z.set(b, []);
        a.Z.get(b).push(c)
    }

    function sz(a) {
        return a.C.l(a.j)
    }

    function tz(a, b = null) {
        return new nz(a.J, new uz, b || a.ma, a.O, a.yd, a.te, a.pg, a.j, a.Za, a.D, a.l, a.B, a.qa)
    }
    var nz = class {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.J = a;
            this.C = b;
            this.ma = c;
            this.O = d;
            this.yd = e;
            this.te = f;
            this.pg = g ? g : new Yt;
            this.j = h;
            this.Za = k;
            this.D = l;
            this.l = m;
            (a = !m) || ((a = !m.Da()) || (m = m.Da(), a = Te(m, 5) == null), a = !!a);
            this.tb = !a;
            this.B = n;
            this.qa = p;
            this.U = [];
            this.A = !1;
            this.Z = new es
        }
        Ma() {
            return this.j
        }
        i() {
            return this.J.i()
        }
    };

    function vz(a, b, c, d, e, f) {
        var g = Xt();
        return new nz(new hz(c, e), new My, new gz(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function wz(a, b, c, d, e) {
        var f = Xt();
        return new nz(new hz(b, d), new fz({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var xz = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        Ma() {
            return this.win
        }
        B(a) {
            return vz(a, this.articleStructure, this.element, this.win, 3, null)
        }
        l() {
            return wz(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const yz = {
        TABLE: {
            be: new Bt([1, 2])
        },
        THEAD: {
            be: new Bt([0, 3, 1, 2])
        },
        TBODY: {
            be: new Bt([0, 3, 1, 2])
        },
        TR: {
            be: new Bt([0, 3, 1, 2])
        },
        TD: {
            be: new Bt([0, 3])
        }
    };

    function zz(a, b, c, d) {
        var e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (let f of c) c = Xa(e, f), c < 0 || b.push(new Az(a, [f], c, f, 3, li(f).trim(), d));
        return b
    }

    function Bz(a, b, c) {
        var d = [],
            e = [],
            f = b.childNodes,
            g = f.length,
            h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType != 1 && l.nodeType != 3) continue;
            a: {
                if (l.nodeType != 1) {
                    var m = null;
                    break a
                }
                if (l.tagName == "BR") {
                    m = l;
                    break a
                }
                m = c.getComputedStyle(l).getPropertyValue("display");m = m == "inline" || m == "inline-block" ? null : l
            }
            if (m) {
                d.length && k && e.push(new Az(a, d, n - 1, m, 0, k, c));
                d = [];
                h = n + 1;
                k = "";
                continue
            }
            d.push(l);
            l = li(l).trim();
            k += l && k ? " " + l : l
        }
        d.length && k && e.push(new Az(a, d, h, b, 2, k, c));
        return e
    }

    function Cz(a, b) {
        return a.i - b.i
    }
    var Az = class {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.hf = b.slice(0);
            this.i = c;
            this.zg = d;
            this.Ag = e;
            this.D = f;
            this.j = g
        }
        Ma() {
            return this.j
        }
        B(a) {
            return vz(a, this.A, this.zg, this.j, this.Ag, this.i)
        }
        l() {
            return wz(this.A, this.zg, this.j, this.Ag, this.i)
        }
    };

    function Dz(a) {
        return ib(a.D ? Bz(a.i, a.l, a.j) : [], a.B ? zz(a.i, a.B, a.l, a.j) : []).filter(b => {
            var c = b.zg.tagName;
            c ? (c = yz[c.toUpperCase()], b = c != null && c.be.contains(b.Ag)) : b = !1;
            return !b
        })
    }
    var Ez = class {
        constructor(a, b, c) {
            this.l = a;
            this.B = b.ef;
            this.D = b.kj;
            this.i = b.articleStructure;
            this.j = c;
            this.A = b.Si
        }
    };

    function Fz(a, b) {
        if (!b) return !1;
        var c = ra(b),
            d = a.i.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.j.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.i.set(c, !0), !0;
        b = Fz(a, b.parentNode);
        a.i.set(c, b);
        return b
    }

    function Gz(a, b) {
        return db(b.hf, c => Fz(a, c))
    }
    var Hz = class {
        constructor(a) {
            this.i = new es;
            this.j = a
        }
    };
    var Iz = class {
        constructor(a, b) {
            this.A = a;
            this.i = [];
            this.j = [];
            this.l = b
        }
    };
    var Kz = (a, {
            wj: b = !1,
            yi: c = !1,
            Hj: d = c ? 2 : 3,
            xi: e = null
        } = {}) => {
            a = Dz(a);
            return Jz(a, {
                wj: b,
                yi: c,
                Hj: d,
                xi: e
            })
        },
        Jz = (a, {
            wj: b = !1,
            yi: c = !1,
            Hj: d = c ? 2 : 3,
            xi: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(Cz);
            a = [];
            b = new Iz(b, e);
            for (let g of f) {
                e = {
                    gg: g,
                    Of: g.D.length < 51 ? !1 : b.l != null ? !Gz(b.l, g) : !0
                };
                if (b.A || e.Of) {
                    a: {
                        if (!b.i.length) {
                            f = !0;
                            break a
                        }
                        f = b.i[b.i.length - 1].gg;f = Ky(f.Ma(), f.hf[f.hf.length - 1], e.gg.hf[0])
                    }
                    f ? (b.i.push(e), e.Of && b.j.push(e.gg)) : (b.i = [e], b.j = e.Of ? [e.gg] : [])
                }
                if (b.j.length >= d) {
                    a: {
                        e = b;f = c ? 0 : 1;
                        if (f < 0 || f >= e.j.length) {
                            e = null;
                            break a
                        }
                        for (f = e.j[f]; e.i.length && !e.i[0].Of;) e.i.shift();e.i.shift();e.j.shift();e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Mz = (a, b, c = !1) => {
            a = Lz(a, b);
            var d = new Hz(b);
            return vt(a, e => Kz(e, {
                yi: c,
                xi: d
            }))
        },
        Nz = (a, b) => {
            a = Lz(a, b);
            var c = new Hz(b);
            return vt(a, d => {
                if (d.A) {
                    var e = d.i;
                    var f = d.j;
                    d = d.l.querySelectorAll(d.A);
                    var g = [];
                    for (var h of d) g.push(new xz(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        let m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k = h.element.tagName;
                            k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !Fz(c, f.element) && Ky(m.Ma(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        Lz = (a, b) => {
            var c = new es;
            a.forEach(d => {
                var e = Zy(Ge(d, Ot, 1));
                if (e) {
                    var f = e.toString();
                    as(c, f) || c.set(f, {
                        articleStructure: d,
                        Vk: e,
                        ef: null,
                        kj: !1,
                        Si: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, Ot, 2)) ? cf(f, 7) : null) ? e.ef = e.ef ? e.ef + "," + f : f: e.kj = !0;
                    d = z(d, Ot, 4);
                    e.Si = d ? cf(d, 7) : null
                }
            });
            return ds(c).map(d => {
                var e = Ry(d.Vk, b.document);
                return e.length ? new Ez(e[0], d, b) : null
            }).filter(d =>
                d != null)
        };
    var Oz = a => a ? .google_ad_slot ? Ct(new Pt(1, {
            Hk: a.google_ad_slot
        })) : Et(Error("Missing dimension when creating placement id")),
        Qz = a => {
            switch (a.yd) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.Da(), a == null ? a = null : (b = b.i(), a = b == null ? null : new Pt(0, {
                        Ti: [a],
                        Xj: b
                    })));
                    return a != null ? Ct(a) : Et(Error("Missing dimension when creating placement id"));
                case 2:
                    return a = Pz(a), a != null ? Ct(a) : Et(Error("Missing dimension when creating placement id"));
                default:
                    return Et(Error("Invalid type: " + a.yd))
            }
        };
    const Pz = a => {
        if (a == null || a.B == null) return null;
        var b = z(a.B, Ot, 1),
            c = z(a.B, Ot, 2);
        if (b == null || c == null) return null;
        var d = a.qa;
        if (d == null) return null;
        a = a.i();
        return a == null ? null : new Pt(0, {
            Ti: [b, c],
            qm: d,
            Xj: ez[a]
        })
    };

    function Rz(a) {
        var b = qz(a.Ba);
        return (b ? Oz(b) : Qz(a.Ba)).map(c => Tt(c))
    }

    function Sz(a) {
        a.i = a.i || Rz(a);
        return a.i
    }

    function Tz(a, b) {
        if (a.Ba.A) throw Error("AMA:AP:AP");
        ry(b, a.Da(), a.Ba.i());
        a = a.Ba;
        a.A = !0;
        b != null && a.U.push(b)
    }
    const Uz = class {
        constructor(a, b, c) {
            this.Ba = a;
            this.j = b;
            this.Qa = c;
            this.i = null
        }
        Da() {
            return this.j
        }
        fill(a, b) {
            var c = this.Ba;
            (a = c.C.j(a, b, this.j, c.j)) && Tz(this, a.ld);
            return a
        }
    };

    function Vz(a, b) {
        return Yy(() => {
            var c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.J.j(g.j);
                    h && e.push({
                        Tj: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var k = f.push; {
                        var l = e[g];
                        let r = l.anchorElement,
                            v = l.Tj;
                        var m = v.O;
                        let y = v.j.document.createElement("div");
                        y.className = "google-auto-placed";
                        let G = y.style;
                        G.textAlign = "center";
                        G.width = "100%";
                        G.height = "0px";
                        G.clear = m ? "both" : "none";
                        h = y;
                        try {
                            ry(h, r, v.i());
                            var n = h
                        } catch (w) {
                            throw Hv(h), w;
                        }
                    }
                    k.call(f, n)
                }
                let p = Ur(b),
                    q = Vr(b);
                for (k = 0; k < d.length; k++) {
                    let r =
                        d[k].getBoundingClientRect(),
                        v = e[k];
                    c.push(new Uz(v.Tj, v.anchorElement, new mt(r.left + q, r.top + p, r.right - r.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Hv(d[e])
            }
            return c
        }, b)
    };
    const Wz = {
            1: "0.5vp",
            2: "300px"
        },
        Xz = [1E3, 930, 880, 830, 780, 730, 680, 630, 580, 530, 480, 430, 380, 350, 330, 310, 290, 270, 250, 230, 220, 210, 200, 190, 180, 170, 160, 150, 140, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
        Yz = {
            1: 700,
            2: 1200
        },
        Zz = {
            [1]: {
                jk: "3vp",
                Ci: "1vp",
                ik: "0.3vp"
            },
            [2]: {
                jk: "900px",
                Ci: "300px",
                ik: "90px"
            }
        };

    function $z(a) {
        return Xz.reduce((b, c) => {
            var d = Math.abs(b - a),
                e = Math.abs(c - a);
            return e === d ? c < b ? c : b : e < d ? c : b
        }, 530)
    }

    function aA(a, b, c) {
        var d = bA(a),
            e = Mr(a) || Yz[d];
        if (S(lw)) {
            var f = T(nw),
                g = T(ow);
            let h = T(mw);
            if (f && g && h) return b = b ? ? .5, b = $z(b < .5 ? g + (1 - 2 * b) * (f - g) : h + (2 - 2 * b) * (g - h)), a = new lu, a = jf(a, 4, 8), b = je(a, 5, Mc(b)), cA(b, dA(d, e))
        }
        f = void 0;
        c && (f = (c = (c = eA(Je(c, gu, 2, re()), d)) ? z(c, eu, 7) : void 0) ? fA(c, e) : void 0);
        c = f;
        f = bA(a);
        a = Mr(a) || Yz[f];
        g = gA(Zz[f].Ci, a);
        a = g === null ? dA(f, a) : new hA(g, g, iA(g, 8), 8, .3, c);
        c = gA(Zz[d].jk, e);
        f = gA(Zz[d].Ci, e);
        d = gA(Zz[d].ik, e);
        e = a.l;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        d = new hA(e,
            e, iA(e, a.j), a.j, a.D, a.i);
        return jA(d, null, b ? ? null)
    }

    function cA(a, b) {
        var c = rv(Re(a, 4, ge)),
            d = qe(a, 5, ge);
        return c == null || d == null ? b : jA(new hA(d, 0, [], c, 1), a, null)
    }

    function kA(a, b) {
        var c = bA(a),
            d = Mr(a) || Yz[c];
        if (S(qw)) return aA(a, .5);
        if (!b) return dA(c, d);
        if (a = eA(Je(b, gu, 2, re()), c))
            if (a = lA(a, d)) return a;
        return dA(c, d)
    }

    function mA(a) {
        var b = bA(a);
        a = Mr(a) || Yz[b];
        return dA(b, a)
    }

    function jA(a, b, c) {
        b = nA(b, c);
        return b == null ? a : new hA(a.l, a.B, a.A, a.j, b, a.i)
    }

    function oA(a, b) {
        var c = {
            ye: a.l,
            Mc: a.B
        };
        for (let d of a.A) d.adCount <= b && (c = d.Pe);
        return c
    }

    function nA(a, b) {
        var c = T(ww);
        if (c <= 0) return null;
        if (S(rw)) return c;
        if (!S(sw) || !a && !b) return null;
        if (a && a.i() === 2) a = String(Re(a, 4, ge)) === "8" && qe(a, 5, ge) === 530;
        else {
            if (!b) return null;
            a = b === .5
        }
        return a ? c : null
    }

    function pA(a, b, c) {
        var d = bf(b, 2);
        b = z(b, gu, 1);
        var e = bA(c);
        var f = Mr(c) || Yz[e];
        c = gA(b ? .l(), f) ? ? a.l;
        e = gA(b ? .i(), f) ? ? a.B;
        d = d ? [] : qA(b ? .A(), f) ? ? a.A;
        var g = b ? .D() ? ? a.j,
            h = b ? .C() ? ? a.D;
        a = (b ? .J() ? fA(z(b, eu, 7), f) : null) ? ? a.i;
        return new hA(c, e, d, g, h, a)
    }

    function rA(a, b) {
        var c = bA(b),
            d = new hu,
            e = new gu,
            f = !1,
            g = T(vw);
        g >= 0 && (gf(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = T(Aw), c >= 0 && (g = c + "vp")) : (c = T(zw), c >= 0 && (g = c + "px"));
        c = T(yw);
        c >= 0 && (g = c + "px");
        g !== null && ( of (e, 2, g), f = !0);
        c = S(Cw) ? "0px" : null;
        c !== null && ( of (e, 5, c), f = !0);
        if (S(Dw)) ef(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            let m = [];
            for (let n of a.A) {
                var h = m,
                    k = h.push;
                var l = new fu;
                l = gf(l, 1, n.adCount);
                l = of (l, 3, c ? ? n.Pe.Mc + "px");
                l = of (l, 2, g ? ? n.Pe.ye + "px");
                k.call(h, l)
            }
            Le(e, 3, m)
        }
        return f ? (A(d, 1, e), pA(a, d, b)) : a
    }
    var hA = class {
        constructor(a, b, c, d, e, f) {
            this.l = a;
            this.B = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.j = d;
            this.D = e;
            this.i = f
        }
    };

    function eA(a, b) {
        for (let c of a)
            if (Tc(he(c, 1)) == b) return c;
        return null
    }

    function qA(a, b) {
        if (a === void 0) return null;
        var c = [];
        for (let d of a) {
            a = Te(d, 1, ge);
            let e = gA(cf(d, 2), b),
                f = gA(cf(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Pe: {
                    ye: e,
                    Mc: f
                }
            })
        }
        return c
    }

    function lA(a, b) {
        var c = gA(a.l(), b),
            d = gA(a.i(), b);
        if (c === null) return null;
        var e = Te(a, 4, ge);
        if (e == null) return null;
        var f = a.A();
        f = qA(f, b);
        if (f === null) return null;
        var g = z(a, eu, 7);
        b = g ? fA(g, b) : void 0;
        return new hA(c, d, f, e, qe(a, 6, ge), b)
    }

    function dA(a, b) {
        a = gA(Wz[a], b);
        return S(qw) ? new hA(a === null ? Infinity : a, null, [], 8, .3) : new hA(a === null ? Infinity : a, null, [], 3, null)
    }

    function gA(a, b) {
        if (!a) return null;
        var c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function bA(a) {
        a = Lr(a) >= 900;
        return wj() && !a ? 1 : 2
    }

    function iA(a, b) {
        if (b < 4) return [];
        var c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Pe: {
                ye: a * 2,
                Mc: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Pe: {
                ye: a * 3,
                Mc: a * 3
            }
        }]
    }

    function fA(a, b) {
        var c = gA(cf(a, 2), b) || 0,
            d = Te(a, 3, ge) || 1;
        a = gA(cf(a, 1), b) || 0;
        return {
            Ij: c,
            Dj: d,
            Td: a
        }
    };

    function sA(a, b, c) {
        return Er({
            top: a.i.top - (c + 1),
            right: a.i.right + (c + 1),
            bottom: a.i.bottom + (c + 1),
            left: a.i.left - (c + 1)
        }, b.i)
    }

    function tA(a) {
        if (!a.length) return null;
        var b = Fr(a.map(c => c.i));
        a = a.reduce((c, d) => c + d.j, 0);
        return new uA(b, a)
    }
    var uA = class {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
    };

    function Mo() {
        return "m202610080101"
    };
    var vA = Gg(Jo);
    var Lo = Gg(No);

    function wA(a, b) {
        return b(a) ? a : void 0
    }

    function xA(a, b, c, d, e) {
        c = c instanceof Xk ? c.error : c;
        var f = new Qo,
            g = new Po;
        try {
            var h = ek(window);
            kf(g, 1, h)
        } catch (p) {}
        try {
            var k = Zq();
            Ae(g, 2, k, Uc)
        } catch (p) {}
        try {
            pf(g, 3, window.document.URL)
        } catch (p) {}
        h = A(f, 2, g);
        k = new Oo;
        b = I(k, 1, b);
        try {
            var l = kc(c ? .name) ? c.name : "Unknown error";
            pf(b, 2, l)
        } catch (p) {}
        try {
            var m = kc(c ? .message) ? c.message : `Caught ${c}`;
            pf(b, 3, m)
        } catch (p) {}
        try {
            var n = kc(c ? .stack) ? c.stack : Error().stack;
            n && Ae(b, 4, n.split(/\n\s*/), pd)
        } catch (p) {}
        l = B(h, 1, Ro, b);
        if (e) {
            m = 0;
            switch (e.errSrc) {
                case "LCC":
                    m = 1;
                    break;
                case "PVC":
                    m = 2
            }
            n = Ko();
            b = wA(e.shv, kc);
            n = pf(n, 2, b);
            m = I(n, 6, m);
            n = bg(vA());
            b = wA(e.es, rc());
            n = Ae(n, 1, b, Uc);
            n = be(n);
            m = A(m, 4, n);
            n = wA(e.client, kc);
            m = of (m, 3, n);
            n = wA(e.slotname, kc);
            m = pf(m, 7, n);
            e = wA(e.tag_origin, kc);
            e = pf(m, 8, e);
            e = be(e)
        } else e = dg(Ko());
        e = B(l, 6, So, e);
        d = kf(e, 5, d ? ? 1);
        vp(a, d)
    };

    function yA(a) {
        var b = (new zA).i();
        return a > 0 && b.Rm * a <= b.Cl
    }
    var zA = class {
        constructor() {
            this.i = AA
        }
    };

    function AA() {
        return {
            Rm: Gj() + (Gj() & 2 ** 21 - 1) * 2 ** 32,
            Cl: Number.MAX_SAFE_INTEGER
        }
    };
    var DA = class {
        constructor(a = !1) {
            var b = BA;
            this.G = CA;
            this.j = a;
            this.A = b;
            this.i = null;
            this.va = this.Ea
        }
        l(a) {
            this.i = a
        }
        B() {}
        jc(a, b, c) {
            try {
                var d = b()
            } catch (e) {
                b = this.j;
                try {
                    b = this.va(a, Yk(e), void 0, c)
                } catch (f) {
                    this.Ea(217, f)
                }
                if (b) window.console ? .error ? .(e);
                else throw e;
            }
            return d
        }
        kc(a, b, c, d) {
            return (...e) => this.jc(a, () => b.apply(c, e), d)
        }
        Fa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.Ea(a, d instanceof Error ? d : Error(d), void 0, c)
            })
        }
        Ea(a, b, c, d) {
            try {
                let f = c === void 0 ? 1 / this.A : c === 0 ? 0 : 1 / c;
                if (yA(f)) {
                    var e = this.G;
                    c = {};
                    if (this.i) try {
                        this.i(c)
                    } catch (g) {}
                    if (d) try {
                        d(c)
                    } catch (g) {}
                    xA(e, a, b, f, c)
                }
            } catch (f) {}
            return this.j
        }
    };
    var EA = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, EA) : this.stack = Error().stack || ""
        }
    };
    let CA, FA, GA, HA, BA;
    const IA = new yl(t);
    (function(a, b, c = !0) {
        ({
            on: BA,
            dm: GA
        } = JA());
        FA = a || new ir;
        hr(FA, GA);
        CA = b || new br(Mo(), 1E3);
        HA = new DA(c);
        t.document.readyState === "complete" ? t.google_measure_js_timing || xl(IA) : IA.i && Ji(t, "load", () => {
            t.google_measure_js_timing || xl(IA)
        })
    })();

    function KA(a, b, c) {
        return HA.jc(a, b, c)
    }

    function LA(a, b) {
        return HA.kc(a, b)
    }

    function MA(a, b, c) {
        HA.Fa(a, b, c)
    }

    function NA(a, b, c = .01) {
        var d = Zq();
        !b.eid && d.length && (b.eid = d.toString());
        Ml(FA, a, b, !0, c)
    }

    function OA(a, b, c = BA, d) {
        return HA.Ea(a, b, c, d, void 0)
    }

    function JA() {
        if (jc(t.google_srt)) {
            var a = t.google_srt;
            var b = t.google_srt === 0 ? 1 : .01
        } else a = Math.random(), b = .01;
        return {
            on: b,
            dm: a
        }
    };

    function PA(a, b) {
        var c = QA(b, ".google-auto-placed"),
            d = RA(b),
            e = SA(b),
            f = TA(b),
            g = UA(b),
            h = VA(b),
            k = QA(b, "div.googlepublisherpluginad"),
            l = QA(b, "html > ins.adsbygoogle"),
            m = [].concat(...QA(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ...QA(b, "body ins.adsbygoogle")),
            n = [];
        a.np && (n = n.concat(QA(b, "ins.adsbygoogle[data-ad-hi]")));
        for (let [p, q] of [
                [a.Nf, c],
                [a.vd, d],
                [a.om, e],
                [a.Lh, f],
                [a.Mh, g],
                [a.km, h],
                [a.nm, k],
                [a.pm, l]
            ]) b = q, p === !1 ? n = n.concat(b) : m = m.concat(b);
        m = WA(m);
        n = WA(n);
        m = m.slice(0);
        for (let p of n)
            for (n =
                0; n < m.length; n++)(p.contains(m[n]) || m[n].contains(p)) && m.splice(n, 1);
        return a.Pl ? XA(m) : m
    }

    function YA(a) {
        return !!a.className && a.className.indexOf("google-auto-placed") != -1
    }

    function ZA(a) {
        var b = a.googletag ? .apiReady ? a.googletag : void 0;
        return b ? ab(bb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    }

    function QA(a, b) {
        return kb(a.document.querySelectorAll(b))
    }

    function RA(a) {
        return QA(a, "ins.adsbygoogle[data-anchor-status]")
    }

    function SA(a) {
        return QA(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
    }

    function TA(a) {
        return (ZA(a) || QA(a, "div[id^=div-gpt-ad],.google-gpt-auto-placed")).concat(QA(a, "iframe[id^=google_ads_iframe]"))
    }

    function UA(a) {
        return QA(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
    }

    function VA(a) {
        return QA(a, "ins.adsbygoogle-ablated-ad-slot")
    }

    function XA(a) {
        return a.filter(b => !b.querySelector('[data-google-ad-efd="true"]'))
    }

    function WA(a) {
        var b = [];
        for (let c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                let e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var $A = LA(453, PA),
        aB = LA(454, function(a, b) {
            var c = QA(b, ".google-auto-placed"),
                d = RA(b),
                e = SA(b),
                f = TA(b),
                g = UA(b),
                h = VA(b),
                k = QA(b, "div.googlepublisherpluginad");
            b = QA(b, "html > ins.adsbygoogle");
            return WA([...(a.Nf === !0 ? c : []), ...(a.vd === !0 ? d : []), ...(a.om === !0 ? e : []), ...(a.Lh === !0 ? f : []), ...(a.Mh === !0 ? g : []), ...(a.km === !0 ? h : []), ...(a.nm === !0 ? k : []), ...(a.pm === !0 ? b : [])])
        });

    function bB(a, b, c, d = !1) {
        d = cB(a, d);
        b = dB(d, b, c);
        return new eB(a, d, b)
    }

    function fB(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function gB(a) {
        return a.i.map(b => b.box)
    }

    function hB(a) {
        return a.i.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    var eB = class {
        constructor(a, b, c) {
            this.l = a;
            this.i = b.slice(0);
            this.A = c.slice(0);
            this.j = null
        }
    };

    function cB(a, b = !1) {
        b = $A({
            vd: !1,
            Pl: b
        }, a);
        var c = Vr(a),
            d = Ur(a);
        return b.map(e => {
            var f = e.getBoundingClientRect();
            return (e = YA(e)) || fB(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                hp: e ? 1 : 0
            } : null
        }).filter(rh(e => e === null))
    }

    function dB(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? iB(a, b) : bb(a, d => new uA(d.box, 1))
    }

    function iB(a, b) {
        a = bb(a, d => new uA(d.box, 1));
        for (var c = []; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (sA(d, a[f], b)) {
                        d = tA([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function jB(a, b, c) {
        var d = lt(c, b);
        return !db(a, e => Er(e, d))
    }

    function kB(a, b, c, d, e) {
        e = e.Qa;
        var f = lt(e, b),
            g = lt(e, c),
            h = lt(e, d);
        return !db(a, k => Er(k, g) || Er(k, f) && !Er(k, h))
    }

    function lB(a, b, c, d) {
        var e = gB(a);
        if (jB(e, b, d.Qa)) return !0;
        if (!kB(e, b, c.Ij, c.Td, d)) return !1;
        var f = new uA(lt(d.Qa, 0), 1);
        a = ab(a.A, g => sA(g, f, c.Td));
        b = cb(a, (g, h) => g + h.j);
        return a.length === 0 || b > c.Dj ? !1 : !0
    };
    var mB = (a, b) => {
        var c = [],
            d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function nB(a, b) {
        var c = new Mt,
            d = new fs;
        b.forEach(e => {
            if (af(e, pu, 1, su)) {
                e = af(e, pu, 1, su);
                if (z(e, ou, 1) && z(e, ou, 1).Da() && z(e, ou, 2) && z(e, ou, 2).Da()) {
                    let g = oB(a, z(e, ou, 1).Da()),
                        h = oB(a, z(e, ou, 2).Da());
                    if (g && h)
                        for (var f of mB({
                                anchor: g,
                                position: z(e, ou, 1).i()
                            }, {
                                anchor: h,
                                position: z(e, ou, 2).i()
                            })) c.set(ra(f.anchor), f.position)
                }
                z(e, ou, 3) && z(e, ou, 3).Da() && (f = oB(a, z(e, ou, 3).Da())) && c.set(ra(f), z(e, ou, 3).i())
            } else af(e, qu, 2, su) ? pB(a, af(e, qu, 2, su), c) : af(e, nu, 3, su) && qB(a, af(e, nu, 3, su), d)
        });
        return new rB(c, d)
    }
    var rB = class {
        constructor(a, b) {
            this.j = a;
            this.i = b
        }
    };
    const pB = (a, b, c) => {
            z(b, ou, 2) ? (b = z(b, ou, 2), (a = oB(a, b.Da())) && c.set(ra(a), b.i())) : z(b, Ot, 1) && (a = sB(a, z(b, Ot, 1))) && a.forEach(d => {
                d = ra(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        qB = (a, b, c) => {
            z(b, Ot, 1) && (a = sB(a, z(b, Ot, 1))) && a.forEach(d => {
                c.add(ra(d))
            })
        },
        oB = (a, b) => (a = sB(a, b)) && a.length > 0 ? a[0] : null,
        sB = (a, b) => (b = Zy(b)) ? Ry(b, a) : null;
    var tB = class {
        constructor() {
            var a = Math.random;
            this.i = Math.floor(a() * 2 ** 52);
            this.j = 0
        }
    };

    function uB(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (vB(b)) return !0;
            if (a.i.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.i.add(d));
        return !1
    }

    function wB(a) {
        a = xB(a);
        return a.has("all") || a.has("after")
    }

    function yB(a) {
        a = xB(a);
        return a.has("all") || a.has("before")
    }

    function xB(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function vB(a) {
        var b = xB(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var zB = class {
        constructor() {
            this.i = new Set;
            this.j = new tB
        }
    };

    function AB(a) {
        return function(b) {
            return Vz(b, a)
        }
    }

    function BB(a) {
        var b = Mr(a);
        return b ? Aa(CB, b + Ur(a)) : oh
    }

    function DB(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return oh;
        var d = gB(c || bB(b));
        return e => jB(d, a, e.Qa)
    }

    function EB(a, b, c, d) {
        if (a < 0 || b.Ij < 0 || b.Dj < 0 || b.Td < 0) throw Error("ama::ead:nd");
        return a === Infinity ? oh : e => lB(d || bB(c, b.Td), a, b, e)
    }

    function FB(a) {
        if (!a.length) return oh;
        var b = new Bt(a);
        return c => b.contains(c.yd)
    }

    function GB(a) {
        return function(b) {
            for (let c of b.te)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function HB(a) {
        return a.length ? function(b) {
            var c = b.te;
            return a.some(d => c.indexOf(d) > -1)
        } : ph
    }

    function IB(a, b) {
        if (a <= 0) return ph;
        var c = Qr(b).scrollHeight - a;
        return function(d) {
            return d.Qa.i <= c
        }
    }

    function JB(a) {
        var b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[df(c.pg, 2) || 0]
        }
    }

    function KB(a) {
        return a.length ? b => a.includes(df(b.pg, 1) || 0) : ph
    }

    function LB(a, b) {
        var c = nB(a, b);
        return function(d) {
            var e = d.Da();
            d = d.Ba.i();
            d = ez[d];
            var f = c.j,
                g = ra(e);
            f = f.i.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.i.contains(ra(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.i.contains(ra(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function MB() {
        var a = new zB;
        return function(b) {
            var c = b.Da();
            b = b.Ba.i();
            var d = ez[b];
            a: switch (d) {
                case 1:
                    b = wB(c.previousElementSibling) || yB(c);
                    break a;
                case 4:
                    b = wB(c) || yB(c.nextElementSibling);
                    break a;
                case 2:
                    b = yB(c.firstElementChild);
                    break a;
                case 3:
                    b = wB(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = uB(a, c, d);
            d = a.j;
            NA("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.i,
                num: d.j++,
                dvc: Bj()
            }, .1);
            return !(b || c)
        }
    }
    const CB = (a, b) => b.Qa.i >= a,
        NB = (a, b, c) => {
            c = c.Qa.j;
            return a <= c && c <= b
        };

    function OB(a, b, c, d, e) {
        var f = PB(QB(a, b), a);
        if (f.length === 0) {
            var g = !!z(b, Eu, 6) ? .i() ? .length;
            f = z(b, Au, 28) ? .l() ? .l() && g ? PB(RB(a, b), a) : f
        }
        if (f.length === 0) return wv(d, "pfno"), [];
        b = f;
        a = e.uf ? SB(a, b, c) : {
            tc: b,
            wf: null
        };
        var {
            tc: h,
            wf: k
        } = a;
        f = h;
        return f.length === 0 && k ? (wv(d, k), []) : [f[e.Sn ? 0 : e.Pn ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function SB(a, b, c) {
        c = c ? Je(c, ru, 5, re()) : [];
        var d = LB(a.document, c),
            e = MB();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            tc: [],
            wf: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            tc: [],
            wf: "pfet"
        } : {
            tc: b,
            wf: null
        }
    }

    function TB(a, b) {
        return a.Qa.i - b.Qa.i
    }

    function QB(a, b) {
        var c = z(b, Eu, 6);
        if (!c) return [];
        b = z(b, Au, 28) ? .l();
        return (b ? .i() ? Nz(c.i(), a) : Mz(c.i(), a, !!b ? .A())).map(d => d.l())
    }

    function RB(a, b) {
        b = Je(b, Iu, 1, re()) || [];
        return mz(b, a, {}).filter(c => !c.te.includes(6))
    }

    function PB(a, b) {
        a = Vz(a, b);
        var c = BB(b);
        a = a.filter(d => c(d));
        return a.sort(TB)
    };
    var UB = class {
        constructor(a) {
            this.da = a.da;
            this.ac = a.ac;
            this.cd = a.cd;
            this.host = a.location.host;
            this.origin = a.location.origin;
            this.language = a.language;
            this.Zh = a.Zh;
            this.Ah = a.Ah;
            this.Fe = a.Fe;
            this.ek = !!a.ek;
            this.alwaysSetAdSafeHigh = !!a.alwaysSetAdSafeHigh
        }
        postMessage(a, b) {
            a ? .postMessage(b, "https://www.gstatic.com")
        }
        init() {
            this.da.setAttribute("id", "prose-iframe");
            this.da.setAttribute("width", "100%");
            this.da.setAttribute("height", "100%");
            this.da.style.cssText = "box-sizing:border-box;border:unset;";
            var a =
                this.da;
            var b = jh `https://www.gstatic.com/prose/protected/${this.Fe||"558153351"}/iframe.html?cx=${this.ac}&host=${this.host}&hl=${this.language}&lrh=${this.Zh}&client=${this.cd}&origin=${this.origin}`;
            b = this.ek ? kh(b, {
                soo: 1
            }) : b;
            Oh(a, b)
        }
    };
    var VB = class {
        constructor() {
            this.A = this.B = 1;
            this.l = new Map;
            this.j = new Set;
            this.i = new Map;
            this.isDrawerVisible = !1
        }
        takeNextPageEventIndex() {
            return this.B++
        }
        takeNextAnnotationEntryId() {
            return this.A++
        }
        getTermUsageCount(a) {
            return this.l.get(a) ? ? 0
        }
        incrementTermUsageCount(a) {
            var b = this.l.get(a) ? ? 0;
            this.l.set(a, b + 1)
        }
        onDrawerCollapse(a) {
            this.j.add(a)
        }
        removeOnDrawerCollapse(a) {
            this.j.delete(a)
        }
        getClickPageEventIndex(a) {
            return this.i.get(a)
        }
        setClickPageEventIndex(a, b) {
            this.i.set(a, b)
        }
        removeClickPageEventIndex(a) {
            this.i.delete(a)
        }
        notifyDrawerCollapsed() {
            for (let a of this.j) a()
        }
    };

    function WB(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = []), a.google_reactive_ads_global_state.adIntentsPageState == null && (a.google_reactive_ads_global_state.adIntentsPageState = new VB), a.google_reactive_ads_global_state.wasAutoRewardedContentGateShown == null && (a.google_reactive_ads_global_state.wasAutoRewardedContentGateShown = !1)) : a.google_reactive_ads_global_state = new XB;
        return a.google_reactive_ads_global_state
    }
    var XB = class {
            constructor() {
                this.wasPlaTagProcessed = !1;
                this.wasReactiveAdConfigReceived = {};
                this.adCount = {};
                this.wasReactiveAdVisible = {};
                this.stateForType = {};
                this.reactiveTypeEnabledInAsfe = {};
                this.wasReactiveTagRequestSent = !1;
                this.reactiveTypeDisabledByPublisher = {};
                this.tagSpecificState = {};
                this.messageValidationEnabled = !1;
                this.floatingAdsStacking = new YB;
                this.sideRailProcessedFixedElements = new Set;
                this.sideRailAvailableSpace = new Map;
                this.sideRailPlasParam = new Map;
                this.sideRailMutationCallbacks = [];
                this.i =
                    null;
                this.clickTriggeredInterstitialMayBeDisplayed = !1;
                this.adIntentsPageState = new VB;
                this.wasAutoRewardedContentGateShown = !1
            }
        },
        YB = class {
            constructor() {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = []
            }
        };

    function ZB(a, b) {
        return new $B(a, b)
    }

    function aC(a) {
        var b = bC(a);
        Za(a.floatingAdsStacking.maxZIndexListeners, c => c(b))
    }

    function bC(a) {
        a = pj(a.floatingAdsStacking.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function cC(a, b) {
        hb(a.floatingAdsStacking.maxZIndexListeners, c => c === b)
    }
    var dC = class {
        constructor(a) {
            this.floatingAdsStacking = WB(a).floatingAdsStacking
        }
    };

    function eC(a) {
        if (a.i == null) {
            var b = a.controller,
                c = a.Lc;
            let d = b.floatingAdsStacking.nextRestrictionId++;
            b.floatingAdsStacking.maxZIndexRestrictions[d] = c;
            aC(b);
            a.i = d
        }
    }

    function fC(a) {
        if (a.i != null) {
            var b = a.controller;
            delete b.floatingAdsStacking.maxZIndexRestrictions[a.i];
            aC(b);
            a.i = null
        }
    }
    var $B = class {
        constructor(a, b) {
            this.controller = a;
            this.Lc = b;
            this.i = null
        }
    };

    function gC(a) {
        a = a.activeElement;
        var b = a ? .shadowRoot;
        return b ? gC(b) || a : a
    }

    function hC(a, b) {
        return iC(b, a.document.documentElement).flatMap(c => jC(c)).filter(c => c !== a.document.head)
    }

    function iC(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function jC(a) {
        var b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function kC(a) {
        a.state !== null && (a.state.Ll.forEach(b => {
            b.inert = !1
        }), a.state.jn ? .focus(), a.state = null)
    }

    function lC(a, b) {
        kC(a);
        var c = gC(a.win.document);
        b = hC(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.state = {
            jn: c,
            Ll: b
        }
    }
    var mC = class {
        constructor(a) {
            this.win = a;
            this.state = null
        }
    };

    function nC(a) {
        return new oC(a, new Bs(a, a.document.body), new Bs(a, a.document.documentElement), new Bs(a, a.document.documentElement))
    }

    function pC(a) {
        zs(a.i);
        zs(a.j);
        var b = qC(a.win);
        b.activePageScrollPreventers.delete(a) && b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        zs(a.l)
    }

    function rC(a) {
        As(a.l, "scroll-behavior", "auto");
        var b = qC(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        As(a.i, "position", "fixed");
        As(a.i, "top", `${-b.previousWindowScroll}px`);
        As(a.i, "width", "100%");
        As(a.i, "overflow-x", "hidden");
        As(a.i, "overflow-y", "hidden");
        b = getComputedStyle(a.win.document.documentElement);
        sC(b.overflowX) && As(a.j, "overflow-x", "unset");
        sC(b.overflowY) && As(a.j, "overflow-y", "unset")
    }

    function sC(a) {
        return a === "scroll" || a === "auto"
    }
    var oC = class extends N {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.i = b;
            this.j = c;
            this.l = d;
            xs(this, b);
            xs(this, c);
            xs(this, d)
        }
        W() {
            pC(this);
            super.W()
        }
    };

    function qC(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function tC(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function uC(a, b) {
        return vC(`#${a}`, b)
    }

    function wC(a, b) {
        return vC(`.${a}`, b)
    }

    function vC(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function xC(a, b) {
        var c = a.document.createElement("div");
        K(c, zv(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Nb: c,
            shadowRoot: a
        }
    };

    function yC(a, b) {
        b = xC(a, b);
        a.document.documentElement.appendChild(b.Nb);
        return b
    }

    function zC(a, b, c, d) {
        var e = new P(b.V);
        Ks(b, !0, () => void e.i(!0));
        Ks(b, !1, () => {
            a.setTimeout(() => {
                if (!b.V) try {
                    e.i(!1)
                } catch (f) {
                    throw d ? .Aa({
                        methodName: 1811,
                        Ha: f
                    }), f;
                }
            }, (c + .2) * 1E3)
        });
        return Fs(e)
    };
    var AC = {},
        BC = {},
        CC = {},
        DC = {},
        EC = {};

    function FC() {
        throw Error("Do not instantiate directly");
    }
    FC.prototype.aj = null;
    FC.prototype.Lb = function() {
        return this.content
    };
    FC.prototype.toString = function() {
        return this.content
    };
    FC.prototype.Fb = function() {
        if (this.bj !== AC) throw Error("Sanitized content was not of kind HTML.");
        return Pg(this.toString())
    };

    function GC() {
        FC.call(this)
    }
    Da(GC, FC);
    GC.prototype.bj = AC;

    function HC(a) {
        if (a != null) switch (a.aj) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function IC(a) {
        return JC(a, AC) ? a : a instanceof Og ? KC(Qg(a).toString()) : KC(String(String(a)).replace(LC, MC), HC(a))
    }
    var KC = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.aj = d);
            return c
        }
    }(GC);

    function NC(a, b) {
        for (let c in b) c in a || (a[c] = b[c]);
        return a
    }

    function OC(a) {
        return IC(a)
    }

    function PC(a) {
        return QC(String(a), () => "").replace(RC, "&lt;")
    }
    const SC = RegExp.prototype.hasOwnProperty("sticky"),
        TC = new RegExp((SC ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", SC ? "gy" : "g");

    function QC(a, b) {
        for (var c = [], d = a.length, e = 0, f = [], g, h, k = 0; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, SC ? (TC.lastIndex = k, l = TC.exec(a)) : (TC.lastIndex = 0, l = TC.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function UC(a, b) {
        a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
        return b ? a.replace(/{/g, " \\{").replace(/}/g, " \\}").replace(/\/\*/g, "/ *").replace(/\\$/, "\\ ") : a
    }

    function U(a) {
        JC(a, AC) ? (a = PC(a.Lb()), a = String(a).replace(VC, MC)) : a = String(a).replace(LC, MC);
        return a
    }

    function WC(a) {
        a = String(a);
        for (var b = (d, e, f) => {
                var g = Math.min(e.length - f, d.length);
                for (let k = 0; k < g; k++) {
                    var h = e[f + k];
                    if (d[k] !== ("A" <= h && h <= "Z" ? h.toLowerCase() : h)) return !1
                }
                return !0
            }, c = 0;
            (c = a.indexOf("<", c)) != -1;) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function XC(a) {
        if (a == null) return " null ";
        if (JC(a, BC)) return a.Lb();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(YC, ZC) + "'"
        }
    }
    const $C = /['()]/g;

    function aD(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function V(a) {
        return JC(a, EC) ? UC(a.Lb(), !1) : a == null ? "" : a instanceof Rg ? UC(Sg(a), !1) : UC(String(a), !0)
    }

    function JC(a, b) {
        return a != null && a.bj === b
    }

    function bD(a, b) {
        a.i !== void 0 ? a.i.push(b) : a.content += b;
        return a
    }

    function cD(a, b) {
        a.i !== void 0 ? a.i.push(b) : b instanceof dD ? b.content !== void 0 ? a.content += b.Lb() : (a.i = [a.content, b], a.content = void 0) : a.content += b;
        return a
    }
    class dD extends GC {
        Lb() {
            if (this.content !== void 0) return this.content;
            var a = "";
            for (let b of this.i) a += b;
            return a
        }
        toString() {
            return this.Lb()
        }
    }
    const eD = (() => {
            function a() {
                this.content = ""
            }
            a.prototype = dD.prototype;
            return function() {
                return new a
            }
        })(),
        fD = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };

    function MC(a) {
        return fD[a]
    }
    const gD = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function ZC(a) {
        return gD[a]
    }
    const hD = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function iD(a) {
        return hD[a]
    }
    const LC = /[\x00\x22\x26\x27\x3c\x3e]/g,
        VC = /[\x00\x22\x27\x3c\x3e]/g,
        YC = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        jD = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        kD = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        lD = /^[a-zA-Z0-9+\/_-]+={0,2}$/;

    function mD(a) {
        a = String(a);
        return lD.test(a) ? a : "zSoyz"
    }
    const RC = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function nD(a, b) {
        b = b || bi();
        var c = a && a.Bg ? a.Bg() : null;
        if (!c) {
            var d = oD(a);
            c = pi(b, "DIV");
            c.innerHTML = Qg(d);
            d = c.childNodes
        }
        if (d.length == 1 && (a = d[0], a.nodeType == 1)) return a;
        c || (c = pi(b, "DIV"), c.append(...d));
        return c
    }

    function oD(a) {
        return qa(a) ? a.Fb && (a = a.Fb(), a instanceof Og) ? a : Zg("zSoyz") : Zg(String(a))
    }
    const pD = {};

    function qD(a, b, c, d, e) {
        a = a && a.Sb;
        return KC("<style" + (a ? ' nonce="' + U(mD(a)) + '"' : "") + ">.drawer-back-arrow-button {float: " + V(d ? "right" : "left") + "; border: none; background: none; cursor: pointer;" + (d ? "transform: scaleX(-1);" : "") + '}\x3c/style><button id="' + U(b) + '" class="drawer-back-arrow-button' + (e ? " " + U(e) : "") + '" aria-label="' + U(c) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5f6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button>')
    };

    function rD(a, b, c, d, e) {
        a = a && a.Sb;
        return KC("<style" + (a ? ' nonce="' + U(mD(a)) + '"' : "") + ">.drawer-close-button {float: " + V(d ? "left" : "right") + '; border: none; background: none; cursor: pointer;}\x3c/style><button id="' + U(b) + '" class="drawer-close-button' + (e ? " " + U(e) : "") + '" aria-label="' + U(c) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5f6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button>')
    };

    function sD(a) {
        var b = {},
            c = a.Cf,
            d = a.wi,
            e = a.vf,
            f = a.rb,
            g = a.uc,
            h = a.zIndex;
        a = a.Og;
        var k = b && b.Sb;
        c = bD(eD(), "<style" + (k ? ' nonce="' + U(mD(k)) + '"' : "") + ">#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(h) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(c) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ");
        d = d ? 20 : 0;
        bD(cD(cD(bD(c, V(d) + "px; transition: transform " + V(a) + "s ease-in-out;" + (e ? "left: 0; border-top-right-radius: " + V(d) + "px; border-bottom-right-radius: " + V(d) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(d) + "px; border-bottom-left-radius: " + V(d) + "px; transform: translateX(100%);") + '}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}\x3c/style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar">'),
            qD(b, "hd-back-arrow-button", g, e, "hd-hidden")), rD(b, "hd-close-button", f, e)), '</div><div id="hd-content-container"></div></div></div>');
        return c
    };

    function tD(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && mc(b.pushState) ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new uD(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function vD(a, b) {
        a = wD(a, a.history.state);
        return !!a && a.googNavStackId === b.googNavStackId && a.googNavStackStateId === b.googNavStackStateId
    }

    function wD(a, b) {
        return b ? b.googNavStackId === a.i ? b : null : null
    }

    function xD(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            let d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].xn({
                isFinal: d
            }))
        }
    }

    function yD(a, b) {
        b = mb(a.stack, b, (c, d) => c - d.Fh.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class uD extends N {
        constructor(a, b) {
            super();
            this.K = a;
            this.history = b;
            this.stack = [];
            this.i = Math.random() * 1E9 >>> 0;
            this.l = 0;
            this.j = c => {
                (c = wD(this, c.state)) ? xD(this, yD(this, c.googNavStackStateId + .5)): xD(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            var a = this.stack.length > 0 && vD(this, this.stack[this.stack.length - 1].Fh),
                b = {
                    googNavStackId: this.i,
                    googNavStackStateId: this.l++
                },
                c = new Promise(d => {
                    this.stack.push({
                        xn: d,
                        Fh: b,
                        hn: a
                    })
                });
            this.history.pushState(b, "");
            return {
                navigatedBack: c,
                triggerNavigateBack: () => {
                    var d = yD(this, b.googNavStackStateId);
                    if (d.length > 0 && vD(this, d[d.length - 1].Fh)) {
                        let e = 1;
                        for (let f = d.length - 1; f > 0 && d[f].hn; f--) e++;
                        this.history.go(-e)
                    }
                    xD(this, d)
                }
            }
        }
        init() {
            this.K.addEventListener("popstate", this.j)
        }
        W() {
            this.K.removeEventListener("popstate", this.j);
            super.W()
        }
    };

    function zD(a, b) {
        return (a = tD(a)) ? new AD(a, b) : null
    }

    function BD(a) {
        if (!a.i) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.i = c;
            b.then(() => {
                try {
                    a.i && !a.ka && (a.i = null, Ps(a.j))
                } catch (d) {
                    throw a.ha ? .Aa({
                        methodName: 1810,
                        Ha: d
                    }), d;
                }
            })
        }
    }

    function CD(a) {
        a.i && (a.i(), a.i = null)
    }
    var AD = class extends N {
        constructor(a, b) {
            super();
            this.l = a;
            this.ha = b;
            this.j = new Qs;
            this.i = null
        }
    };

    function DD(a, b, c) {
        var d = new mC(a),
            e = ZB(new dC(a), c.zIndex - 1);
        b = ED(a, b, c);
        d = new FD(a, b, d, nC(a), e);
        d.init();
        (c.ge || c.ge === void 0) && d.Oh();
        c.zc && ((a = zD(a)) ? d.se(a, c.hi) : c.hi ? .(Error("Unable to create closeNavigator")));
        return d
    }
    var FD = class extends N {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.R = b;
            this.xb = c;
            this.ua = new P(!1);
            xs(this, d);
            this.ob = zC(a, this.ua, .5);
            Ks(this.ob, !0, () => {
                rC(d);
                eC(e)
            });
            Ks(this.ob, !1, () => {
                pC(d);
                fC(e)
            })
        }
        show({
            mh: a = !1
        } = {}) {
            if (this.ka) throw Error("Cannot show drawer after disposal");
            this.he();
            this.L().Ua.classList.add("hd-revealed");
            this.ua.i(!0);
            lC(this.xb, this.L().Cb.Nb);
            this.ke();
            a && Ks(this.ob, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            this.L().Ua.classList.remove("hd-revealed");
            this.ua.i(!1);
            kC(this.xb)
        }
        isVisible() {
            return this.ob
        }
        re() {
            if (!this.mc) {
                let {
                    Qb: b,
                    content: c
                } = this.L(), d = () => ({
                    scrollTop: b.scrollTop,
                    ng: Math.max(0, b.scrollHeight - b.clientHeight)
                }), e = new P(d());
                b.addEventListener("scroll", () => {
                    e.i(d())
                });
                var a = ht(this.win, b);
                kt(a).listen(() => {
                    e.i(d())
                });
                xs(this, a);
                a = ht(this.win, c);
                kt(a).listen(() => {
                    e.i(d())
                });
                xs(this, a);
                this.mc = Fs(e)
            }
            return this.mc
        }
        Oc() {
            this.L().Qb.scrollTop = 0
        }
        oj() {
            if (this.Rd) return this.Rd;
            var {
                Tg: a
            } = this.L(), b = new P(!1);
            Ks(b, !0, () => {
                a.classList.remove("hd-hidden")
            });
            Ks(b, !1, () => {
                a.classList.add("hd-hidden")
            });
            var c = new Qs;
            a.addEventListener("click",
                () => void Ps(c));
            return this.Rd = {
                isVisible: b,
                gf: Ns(c)
            }
        }
        init() {
            this.Nh();
            this.He()
        }
        Nh() {
            var {
                fi: a,
                kd: b
            } = this.L();
            a.addEventListener("click", () => void this.collapse());
            b.addEventListener("click", () => void this.collapse())
        }
        Oh() {
            this.Cc = a => {
                a.key === "Escape" && this.ua.V && this.collapse()
            };
            this.win.document.body.addEventListener("keydown", this.Cc)
        }
        se(a, b) {
            Ks(this.ua, !0, () => {
                try {
                    BD(a)
                } catch (c) {
                    b ? .(c)
                }
            });
            Ks(this.ua, !1, () => {
                try {
                    CD(a)
                } catch (c) {
                    b ? .(c)
                }
            });
            Ns(a.j).listen(() => void this.collapse());
            xs(this, a)
        }
        He() {
            Ks(this.ob, !1, () => {
                this.ae()
            })
        }
        he() {
            this.L().Ua.classList.remove("hd-hidden");
            hs(this.win)
        }
        ae() {
            this.L().Ua.classList.add("hd-hidden")
        }
        ke() {
            this.win.setTimeout(() => void this.me(), 500)
        }
        me() {
            this.ua.V && this.L().Ua.focus()
        }
        L() {
            if (this.ka) throw Error("Accessing domItems after disposal");
            return this.R
        }
        W() {
            this.Cc && this.win.document.body.removeEventListener("keydown", this.Cc);
            var a = this.R.Cb.Nb,
                b = a.parentNode;
            b && b.removeChild(a);
            kC(this.xb);
            super.W()
        }
    };

    function ED(a, b, c) {
        var d = yC(a, c.Xd),
            e = d.shadowRoot;
        e.appendChild(qi(new ci(a.document), sD({
            Cf: c.Cf,
            wi: c.wi ? ? !0,
            vf: c.vf || !1,
            rb: c.rb,
            uc: c.uc || "",
            zIndex: c.zIndex,
            Og: .5
        }).Fb()));
        var f = uC("hd-drawer-container", e);
        c.ce ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = uC("hd-content-container", e);
        c.appendChild(b);
        hs(a);
        return {
            Ua: f,
            fi: uC("hd-modal-background", e),
            Qb: c,
            content: b,
            kd: uC("hd-close-button", e),
            Tg: uC("hd-back-arrow-button", e),
            Cb: d
        }
    };

    function GD(a) {
        var b = {},
            c = a.cn,
            d = a.am,
            e = a.zIndex,
            f = a.Og,
            g = a.fe,
            h = a.X;
        a = a.rb;
        var k = b && b.Sb;
        return bD(cD(cD(bD(cD(cD(bD(eD(), "<style" + (k ? ' nonce="' + U(mD(k)) + '"' : "") + ">#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(e) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
                V(d) + "%; transition: transform " + V(f) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(20) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
                V(c / d * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((d - c) / d * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
                V(c / d * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(c / d * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
                V(20) + "px " + V(20) + "px 0 0; background: white; display: flex; height: " + V(30) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; width: 50px; border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}#ved-moving-close-button, #ved-fixed-close-button {margin-top: -29px;}\x3c/style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">'),
            HD("ved-moving-handle")), g ? rD(b, "ved-moving-close-button", a, h) : ""), '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">'), HD("ved-fixed-handle")), g ? rD(b, "ved-fixed-close-button", a, h) : ""), "</div></div></div>")
    }

    function HD(a) {
        return KC('<div class="ved-handle" id="' + U(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function ID(a) {
        return dt(a.i).map(b => b ? JD(a, b) : 0)
    }

    function JD(a, b) {
        switch (a.direction) {
            case 0:
                return KD(-b.vk);
            case 1:
                return KD(-b.uk);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function LD(a) {
        return ft(a.i).map(b => JD(a, b))
    }
    var MD = class {
        constructor(a) {
            this.i = a;
            this.direction = 0
        }
    };

    function KD(a) {
        return a === 0 ? 0 : a
    };

    function ND(a) {
        a.he();
        var {
            Oa: b,
            ec: c
        } = a.L();
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || OD(a);
        a.L().Ua.classList.add("ved-revealed");
        a.ua.i(!0);
        lC(a.xb, a.L().Cb.Nb);
        a.ke()
    }

    function PD(a, b) {
        var c = new P(b());
        Ns(a.B).listen(() => void c.i(b()));
        return Fs(c)
    }

    function QD(a) {
        var {
            Oa: b,
            Dd: c
        } = a.L();
        return PD(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function RD(a) {
        var {
            Oa: b,
            Dd: c
        } = a.L();
        return PD(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function SD(a) {
        var {
            Oa: b
        } = a.L();
        return PD(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function TD(a) {
        return Gs(QD(a), SD(a))
    }

    function UD(a) {
        var {
            Oa: b,
            ec: c
        } = a.L();
        return PD(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function VD(a, b) {
        return WD(a, XD(a, b))
    }

    function YD(a) {
        var b = VD(a, a.L().Dd);
        a.i !== null && a.win.clearTimeout(a.i);
        a.i = a.win.setTimeout(() => {
            a.i = null;
            b()
        }, 100)
    }

    function XD(a, b) {
        ({
            Le: a
        } = a.L());
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function OD(a) {
        a.L().ec.classList.add("ved-snap-point-top");
        var b = XD(a, a.L().ec);
        a.L().Oa.scrollTop = b;
        ZD(a)
    }

    function $D(a) {
        Is(QD(a), !0, () => {
            var {
                mj: b,
                Le: c
            } = a.L();
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Is(QD(a), !1, () => {
            var {
                mj: b,
                Le: c
            } = a.L();
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function aE(a) {
        var b = ht(a.win, a.L().Qb);
        kt(b).j(() => void bE(a));
        xs(a, b)
    }

    function cE(a) {
        Is(dE(a), !0, () => {
            a.L().Nj.classList.remove("ved-hidden")
        });
        Is(dE(a), !1, () => {
            a.L().Nj.classList.add("ved-hidden")
        })
    }

    function eE(a) {
        var b = () => void Ps(a.A),
            {
                fi: c,
                ec: d,
                Zl: e,
                Om: f,
                Wl: g
            } = a.L();
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        f && f.addEventListener("click", b);
        g && g.addEventListener("click", b);
        Ks(fE(a), !0, b)
    }

    function ZD(a) {
        Js(Gs(a.j, a.l), !1, () => {
            a.ka || Ps(a.B)
        })
    }

    function bE(a) {
        if (!a.l.V) {
            var {
                cj: b,
                Qb: c
            } = a.L(), d = c.getBoundingClientRect().height;
            d = Math.max(gE(a), d);
            a.l.i(!0);
            var e = a.j.V ? () => {} : wF(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.i(!1)
                })
            })
        }
    }

    function dE(a) {
        var {
            Oa: b,
            ec: c
        } = a.L();
        return PD(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function fE(a) {
        return PD(a, () => a.L().Oa.scrollTop === 0)
    }

    function WD(a, b) {
        a.j.i(!0);
        var {
            Le: c,
            Oa: d
        } = a.L();
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void xF(a, b)
    }

    function xF(a, b) {
        var {
            Le: c,
            Oa: d
        } = a.L();
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        a.L().Oa.scrollTop = b;
        ZD(a);
        a.j.i(!1)
    }

    function wF(a) {
        var b = a.L().Oa.scrollTop;
        WD(a, b);
        return () => void xF(a, b)
    }

    function gE(a) {
        var {
            Oa: b,
            Dd: c,
            cj: d,
            ec: e
        } = a.L();
        a = b.getBoundingClientRect();
        var f = c.getBoundingClientRect(),
            g = d.getBoundingClientRect(),
            h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var yF = class extends N {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.R = b;
            this.C = c;
            this.xb = d;
            this.A = new Qs;
            this.B = new Qs;
            this.ua = new P(!1);
            this.j = new P(!1);
            this.l = new P(!1);
            this.i = null;
            this.ob = zC(this.win, this.ua, .5)
        }
        isDrawerVisible() {
            return this.ob
        }
        re() {
            if (!this.mc) {
                let {
                    Oa: a,
                    Dd: b,
                    Qb: c
                } = this.L();
                this.mc = PD(this, () => this.ua.V && a.clientHeight !== 0 ? {
                    scrollTop: Math.max(0, a.scrollTop - b.offsetTop),
                    ng: Math.max(0, c.offsetHeight - (a.clientHeight - b.offsetHeight))
                } : {
                    scrollTop: 0,
                    ng: 0
                })
            }
            return this.mc
        }
        Oc() {
            if (QD(this).V &&
                !this.j.V) {
                var a = XD(this, this.L().Dd);
                this.L().Oa.scrollTop = a;
                ZD(this)
            }
        }
        init() {
            OD(this);
            $D(this);
            aE(this);
            cE(this);
            eE(this);
            this.He();
            this.L().Oa.addEventListener("scroll", () => void ZD(this))
        }
        ke() {
            this.win.setTimeout(() => void this.me(), 500)
        }
        me() {
            this.ua.V && this.L().Ua.focus()
        }
        He() {
            Ks(this.isDrawerVisible(), !1, () => {
                OD(this);
                this.ae()
            })
        }
        he() {
            this.L().Ua.classList.remove("ved-hidden");
            hs(this.win)
        }
        ae() {
            this.L().Ua.classList.add("ved-hidden")
        }
        L() {
            if (this.ka) throw Error("Accessing domItems after disposal");
            return this.R
        }
        W() {
            var a = this.R.Cb.Nb,
                b = a.parentNode;
            b && b.removeChild(a);
            kC(this.xb);
            this.i !== null && this.win.clearTimeout(this.i);
            super.W()
        }
    };

    function zF(a, b, c) {
        var d = yC(a, c.Xd),
            e = d.shadowRoot;
        e.appendChild(qi(new ci(a.document), GD({
            cn: c.Rj * 100,
            am: c.nj * 100,
            zIndex: c.zIndex,
            Og: .5,
            fe: c.fe ? ? !1,
            X: c.X || !1,
            rb: c.rb || ""
        }).Fb()));
        var f = uC("ved-drawer-container", e);
        c.ce ? .j(h => {
            f.setAttribute("aria-label", h)
        });
        var g = uC("ved-content-container", e);
        g.appendChild(b);
        hs(a);
        return {
            Ua: f,
            fi: uC("ved-modal-background", e),
            qk: uC("ved-ui-revealer", e),
            Oa: uC("ved-scroller", e),
            Le: uC("ved-scrolled-stack", e),
            Zl: uC("ved-fully-closed-anchor", e),
            ec: uC("ved-partially-extended-anchor",
                e),
            cj: uC("ved-content-sizer", e),
            Qb: g,
            Om: c.fe ? uC("ved-moving-close-button", e) : void 0,
            xp: uC("ved-moving-handle", e),
            Dd: uC("ved-moving-handle-holder", e),
            Wl: c.fe ? uC("ved-fixed-close-button", e) : void 0,
            Xl: uC("ved-fixed-handle", e),
            mj: uC("ved-fixed-handle-holder", e),
            Nj: uC("ved-over-scroll-block", e),
            Cb: d
        }
    };

    function AF(a, b, c) {
        var d = ZB(new dC(a), c.zIndex - 1);
        b = zF(a, b, c);
        var e = new mC(a);
        var f = b.Xl;
        f = new gt(new Ys(a, f), new Vs(f));
        var g = f.i;
        g.B.addEventListener("mousedown", g.J);
        g.A.addEventListener("mouseup", g.D);
        g.A.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.j;
        g.j.addEventListener("touchstart", g.C);
        g.j.addEventListener("touchend", g.B);
        g.j.addEventListener("touchmove", g.D, {
            passive: !1
        });
        b = new yF(a, b, new MD(f), e);
        b.init();
        d = new BF(a, b, nC(a), d);
        xs(d, b);
        d.init();
        c.zc && ((a = zD(a)) ? d.se(a, c.hi) : c.hi ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function CF(a) {
        Ks(Es(TD(a.Ca), UD(a.Ca)), !0, () => {
            a.Ca.L().ec.classList.remove("ved-snap-point-top")
        });
        Is(RD(a.Ca), !0, () => {
            a.Ca.L().Oa.classList.add("ved-no-snap")
        });
        Is(RD(a.Ca), !1, () => {
            a.Ca.L().Oa.classList.remove("ved-no-snap")
        });
        Ks(RD(a.Ca), !1, () => {
            YD(a.Ca)
        })
    }

    function DF(a) {
        var b = a.Ca.C;
        ID(b).listen(c => {
            c = -c;
            if (c > 0) {
                let {
                    qk: d
                } = a.Ca.L();
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                qk: c
            } = a.Ca.L()), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        LD(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var BF = class extends N {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.Ca = b;
            xs(this, c);
            Ks(b.isDrawerVisible(), !0, () => {
                rC(c);
                eC(d)
            });
            Ks(b.isDrawerVisible(), !1, () => {
                pC(c);
                fC(d)
            })
        }
        show({
            mh: a = !1
        } = {}) {
            if (this.ka) throw Error("Cannot show drawer after disposal");
            ND(this.Ca);
            a && Ks(this.Ca.isDrawerVisible(), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.Ca;
            a.L().Ua.classList.remove("ved-revealed");
            a.ua.i(!1);
            kC(a.xb)
        }
        isVisible() {
            return this.Ca.isDrawerVisible()
        }
        re() {
            return this.Ca.re()
        }
        Oc() {
            this.Ca.Oc()
        }
        init() {
            Ns(this.Ca.A).listen(() => {
                this.collapse()
            });
            CF(this);
            DF(this);
            hs(this.win)
        }
        se(a, b) {
            Ks(this.Ca.ua, !0, () => {
                try {
                    BD(a)
                } catch (c) {
                    b ? .(c)
                }
            });
            Ks(this.Ca.ua, !1, () => {
                try {
                    CD(a)
                } catch (c) {
                    b ? .(c)
                }
            });
            Ns(a.j).listen(() => void this.collapse());
            xs(this, a)
        }
    };

    function EF(a, b) {
        return Bj() === 2 ? AF(a.win, b, {
            Rj: .95,
            nj: .95,
            zIndex: 2147483645,
            zc: !0
        }) : DD(a.win, b, {
            Cf: "min(65vw, 768px)",
            rb: "",
            vf: !1,
            zIndex: 2147483645,
            zc: !0,
            wi: !1
        })
    }

    function FF(a) {
        ((c, d) => {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = (new Date).getTime()
        })(a.win, "_googCsa");
        var b = a.jf.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.win._googCsa("relatedsearch", {
            pubId: a.cd,
            styleId: "5134551505",
            hl: a.language,
            fexp: a.j.join(","),
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.C.bind(a),
            relatedSearchUseResultCallback: !0,
            adLoadedCallback: a.B.bind(a),
            cx: a.ac
        }, b)
    }

    function GF(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.i.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var HF = class extends N {
        constructor(a) {
            super();
            this.win = a.win;
            this.jf = a.jf;
            this.Kb = a.Kb;
            this.li = a.li ? ? (() => {});
            this.language = a.Bj ? .i() || "en";
            this.cd = a.webPropertyCode.replace("ca", "partner");
            this.l = new ci(this.win.document);
            this.i = pi(this.l, "IFRAME");
            this.ac = a.wk.i ? a.wk.ac : "9d449ff4a772956c6";
            this.j = Zq().concat(a.experimentId ? a.experimentId : []);
            var b = a.Bj ? .l() || "Search results from ${website}";
            this.A = new UB({
                da: this.i,
                ac: this.ac,
                cd: this.cd,
                location: this.win.location,
                language: this.language,
                Zh: b,
                Ah: this.j,
                Fe: a.Fe,
                alwaysSetAdSafeHigh: a.alwaysSetAdSafeHigh
            });
            this.mf = EF(this, this.i);
            xs(this, this.mf)
        }
        init() {
            this.jf.length !== 0 && (Xy(1076, () => {
                var a = pi(this.l, "SCRIPT");
                Qh(a, jh `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), FF(this), uv(this.Kb, {
                sts: "ok"
            }), GF(this))
        }
        B(a, b) {
            b ? Xy(1075, () => {
                this.A.init()
            }, this.win) : (this.li(), wv(this.Kb, "pfns"))
        }
        C(a, b) {
            var c = this.A,
                d = c.da.contentWindow;
            a = {
                action: "search",
                searchTerm: a,
                rsToken: b
            };
            a.experimentId = c.Ah;
            c.alwaysSetAdSafeHigh &&
                (a.alwaysSetAdSafeHigh = "1");
            c.postMessage(d, a);
            this.mf.show()
        }
    };
    var IF = class {
        constructor(a, b) {
            this.i = a;
            this.ac = b
        }
    };
    var JF = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.D = c;
            this.A = "autors-widget";
            this.i = null;
            this.l = new P(null)
        }
        init() {
            var a = this.j.Ba;
            a = Fv(a.j.document, a.O || !1);
            var b = this.D.Lb(this.B);
            a.appendChild(b);
            this.A && (a.className = this.A);
            this.i = a;
            Tz(this.j, this.i);
            this.l.i(b)
        }
    };
    async function KF(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    LF(a)
                } catch (c) {
                    wv(a.Kb, "pfere", c)
                }
                b()
            })
        })
    }

    function LF(a) {
        if ((!a.uf || !MF(a.config, a.sa, a.Kb)) && NF(z(a.i, yu, 5), a.Kb)) {
            var b = a.i.l();
            b = OB(a.win, a.config, a.sa, a.Kb, {
                Sn: !!b ? .D(),
                uf: a.uf,
                yp: !!b ? .i(),
                Pn: !!b ? .C()
            });
            b = OF(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = rv(a.i.i() ? .i()),
                f = PF(a.i),
                g = String(E(a.i, 13));
            b = z(a.config, vu, 25) ? .i() || !1;
            var h = a.i ? .A() || !1;
            if (!b) {
                var k = () => {
                    d.forEach(l => {
                        l.i && l.i.parentNode && l.i.parentNode.removeChild(l.i);
                        l.i = null;
                        l.l.i(null)
                    })
                };
                Xy(1074, () => {
                    var l = {
                        win: a.win,
                        jf: c,
                        webPropertyCode: a.webPropertyCode,
                        Bj: z(a.i,
                            yu, 5),
                        Kb: a.Kb,
                        experimentId: e,
                        wk: f,
                        Fe: g,
                        li: k,
                        alwaysSetAdSafeHigh: h
                    };
                    (new HF(l)).init()
                }, a.win)
            }
        }
    }
    var QF = class {
        constructor(a, b, c, d, e) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.sa = e;
            this.uf = !0;
            this.i = z(this.config, Au, 28);
            this.Kb = new xv(a, b, this.i)
        }
    };

    function MF(a, b, c) {
        a = rv(z(a, Au, 28) ? .i() ? .i());
        var d = oy(Nw);
        return d && a && d.includes(a.toString()) ? !1 : (b ? $e(b, 2) : []).length === 0 ? (wv(c, "pfeu"), !0) : !1
    }

    function NF(a, b) {
        var c = oy(Mw);
        a = a ? .i() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (wv(b, "pflna"), !1) : !0
    }

    function OF(a, b) {
        var c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            let f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new JF(b, d, new Cv(g));
            d.init();
            c[f] = d
        }
        return c
    }

    function PF(a) {
        var b = D(a, 11) || !1;
        a = E(a, 8) || "";
        return new IF(b, a)
    };
    var RF = (a, b) => {
        var c = [];
        z(a, Ju, 18) && c.push(2);
        b.sa && c.push(0);
        if (b = z(a, Au, 28)) b = z(a, Au, 28), b = F(b, 1) == 1;
        b && c.push(1);
        z(a, Tu, 38) && c.push(4);
        return c
    };
    var SF = a => a.googlefc = a.googlefc || {},
        TF = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        UF = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Bu;
                b = of (b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = of (b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = of (b, 3, a.defaultFloatingToolbarDismissPrivacySettings);
                a = be(a)
            } else a = null;
            return a
        };

    function VF(a, b) {
        b = b.filter(c => z(c, Yt, 4) ? .i() === 5 && Tc(he(c, 8)) === 1);
        b = mz(b, a);
        a = Vz(b, a);
        a.sort((c, d) => d.Qa.i - c.Qa.i);
        return a[0] || null
    };

    function WF(a, b) {
        var c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new Set(c);
        b = b.filter(e => !d.has(e));
        b.length && (XF(a, b), c.push(...b))
    }

    function XF(a, b) {
        for (let d of b) {
            let e = Jj("LINK", a.document);
            e.type = "text/css";
            b = e;
            var c = jh `//fonts.googleapis.com/css?family=${d}`;
            b.href = Wg(c).toString();
            b.rel = "stylesheet";
            (a.document.head ? ? a.document.body).append(e)
        }
    };

    function YF(a) {
        return a ? ic(b => {
            try {
                if (b instanceof a) return !0;
                let c = b ? .ownerDocument ? .defaultView ? .[a.name];
                return mc(c) && b instanceof c
            } catch {
                return !1
            }
        }) : ic(() => !1)
    }
    YF(Node);
    var ZF = YF(globalThis.Element),
        $F = YF(globalThis.HTMLElement);
    YF(globalThis.SVGElement);

    function aG(a) {
        return ic(b => $F(b) && b.tagName.toLowerCase() === a)
    };

    function bG({
        tg: a,
        sf: b,
        ag: c,
        ug: d,
        tf: e,
        bg: f
    }) {
        var g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function cG(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function dG(a, b, c) {
        var d = bG({
            tg: b.left,
            sf: b.right,
            ag: 10,
            ug: b.top,
            tf: b.bottom,
            bg: 10
        });
        b = new Set;
        for (let e of d)(d = eG(a, e, c)) && b.add(d);
        return b
    }

    function fG(a, b, c = !1) {
        for (let d of b)
            if (b = gG(a, d, c)) return b;
        return null
    }

    function hG(a, b, c = !1) {
        return fG(a, b, c) != null
    }

    function iG(a, b, c) {
        if (Ai(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || Ei(b).width <= 1 && Ei(b).height <= 1 || a.i.ee && !a.i.ee(b) ? !0 : !1;
        a.i.lj && a.i.lj(b, c, d);
        return d ? null : b
    }

    function eG(a, b, c) {
        var d = cG(a.K.document, b);
        if (d) {
            var e;
            if (!(e = iG(a, d, b))) {
                if (c) a: {
                    for (d = jG(d); d && d !== a.K.document.body; d = jG(d))
                        if (c = iG(a, d, b)) {
                            a = c;
                            break a
                        }
                    a = null
                }
                else a: {
                    c = a.K.document;
                    for (d = d.offsetParent; d && d !== c.body; d = d.offsetParent)
                        if (e = iG(a, d, b)) {
                            a = e;
                            break a
                        }
                    a = null
                }
                e = a
            }
            a = e || null
        } else a = null;
        return a
    }

    function gG(a, b, c = !1) {
        b = eG(a, b);
        return !b || b.hasAttribute("google-allow-overlap") || c && (c = b.getBoundingClientRect(), c.width >= a.K.innerWidth && c.height >= a.K.innerHeight) ? null : b
    }
    var kG = class {
        constructor(a, b = {}) {
            this.K = a;
            this.i = b
        }
    };

    function jG(a) {
        return $F(a) ? a.offsetParent : a.parentElement
    };

    function lG(a, b) {
        return a.position.kf(b, a.Te, a.i)
    }
    var mG = class {
        constructor(a, b, c) {
            this.position = a;
            this.Te = b;
            this.i = c
        }
    };

    function nG(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function oG(a, b, c, d) {
        var e = Mr(a);
        e = lG(new mG(b.Jd.ze(b.xc), b.Te + 2 * b.xc, Math.min(e, b.Yf) - b.Jd.oe() + 2 * b.xc), a);
        var f = Lr(a),
            g = Mr(a);
        c = pG(a, new ri(wh(e.top, g - 1), wh(e.right, f - 1), wh(e.bottom, g - 1), wh(e.left, f - 1)), c, d);
        f = qG(c);
        g = e.top;
        d = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && d.push(new nG(g, f[h].start)), g = f[h].end;
        g < e.bottom && d.push(new nG(g, e.bottom));
        a = Mr(a);
        e = [];
        for (f = d.length - 1; f >= 0; f--) e.push(new nG(a - d[f].end, a - d[f].start));
        a: {
            for (let h of e) {
                b: {
                    a = h.start + b.xc;
                    if (a > b.Jd.oe() + b.bi) {
                        a = null;
                        break b
                    }
                    e =
                    Math.min(h.end - b.xc, b.Yf) - a;a = e < b.di ? null : {
                        position: b.Jd.tk(a),
                        Cd: e
                    }
                }
                if (a) {
                    b = a;
                    break a
                }
            }
            b = null
        }
        return {
            Sg: b,
            jp: c
        }
    }

    function pG(a, b, c, d) {
        var e = dG(new kG(a), b, d);
        c.forEach(f => void e.delete(f));
        return e
    }

    function qG(a) {
        return [...a].map(rG).sort((b, c) => b.start - c.start)
    }

    function rG(a) {
        a = a.getBoundingClientRect();
        return new nG(a.top, a.bottom)
    };

    function sG({
        ra: a,
        ya: b
    }) {
        return new tG(a, b)
    }
    var tG = class {
        constructor(a, b) {
            this.ra = a;
            this.ya = b
        }
        ze(a) {
            return new tG(this.ra - a, this.ya - a)
        }
        kf(a, b, c) {
            a = Mr(a) - this.ra - c;
            return new ri(a, this.ya + b, a + c, this.ya)
        }
        af(a) {
            a.bottom = `${this.ra}px`;
            a.left = `${this.ya}px`;
            a.right = ""
        }
        Ff() {
            return 0
        }
        oe() {
            return this.ra
        }
        tk(a) {
            return new tG(a, this.ya)
        }
    };

    function uG({
        ra: a,
        Ga: b
    }) {
        return new vG(a, b)
    }
    var vG = class {
            constructor(a, b) {
                this.ra = a;
                this.Ga = b
            }
            ze(a) {
                return new vG(this.ra - a, this.Ga - a)
            }
            kf(a, b, c) {
                var d = Lr(a);
                a = Mr(a) - this.ra - c;
                d = d - this.Ga - b;
                return new ri(a, d + b, a + c, d)
            }
            af(a) {
                a.bottom = `${this.ra}px`;
                a.right = `${this.Ga}px`;
                a.left = ""
            }
            Ff() {
                return 1
            }
            oe() {
                return this.ra
            }
            tk(a) {
                return new vG(a, this.Ga)
            }
        },
        wG = class {
            constructor(a, b) {
                this.oa = a;
                this.ya = b
            }
            ze(a) {
                return new wG(this.oa - a, this.ya - a)
            }
            kf(a, b, c) {
                a = this.oa;
                return new ri(a, this.ya + b, a + c, this.ya)
            }
            af(a) {
                a.top = `${this.oa}px`;
                a.left = `${this.ya}px`;
                a.right =
                    ""
            }
            Ff() {
                return 0
            }
            If() {
                return this.oa
            }
            i(a) {
                return new wG(a, this.ya)
            }
        },
        xG = class {
            constructor(a, b) {
                this.oa = a;
                this.Ga = b
            }
            ze(a) {
                return new xG(this.oa - a, this.Ga - a)
            }
            kf(a, b, c) {
                var d = Lr(a);
                a = this.oa;
                d = d - this.Ga - b;
                return new ri(a, d + b, a + c, d)
            }
            af(a) {
                a.top = `${this.oa}px`;
                a.right = `${this.Ga}px`;
                a.left = ""
            }
            Ff() {
                return 1
            }
            If() {
                return this.oa
            }
            i(a) {
                return new xG(a, this.Ga)
            }
        };

    function yG(a) {
        var b = {},
            c = a.Ql,
            d = a.tl,
            e = a.gl,
            f = a.Bn,
            g = a.il;
        a = a.fl;
        b = b && b.Sb;
        return KC('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' + (b ? ' nonce="' + U(mD(b)) + '"' : "") + '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"' + (b ? ' nonce="' + U(mD(b)) + '"' : "") + "><style" + (b ? ' nonce="' + U(mD(b)) + '"' : "") + ">.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: " +
            V(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " + V(e) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + V(a) + "px; border-radius: " + V(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " +
            V(a) + "px; margin: 0; border-radius: " + V(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            V(e) + "px; height: " + V(e) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + V(e) + "px; margin-bottom: " + V(g) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + V(e) + "px; width: " + V(e) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            V(e - 6) + "px; width: " + V(e - 6) + "px; border-radius: " + V(e / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            V(f) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + V(e) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            V(16) + "px; max-width: calc(90vw - " + V(e * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + V(e + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + V(e + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            V(e * 2) + "px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto; max-height: calc(100vh - var(--ft-toolbar-bottom-position) - " + V(40) + 'px); overflow-y: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message-custom h1 {display: flex; align-items: center; gap: 5px; font-weight: 500; font-size: 14px; line-height: 14px; margin: 0 0 10px 0; padding: 0;}.ft-reg-message-custom p {margin: 10px 0 0 0; padding: 0;}.ft-reg-message-custom a, .ft-reg-message-custom a:link, .ft-reg-message-custom a:visited, .ft-reg-message-custom a:hover, .ft-reg-message-custom a:active {color: #0b57d0; text-decoration: none;}.ft-reg-message:last-of-type {border-bottom: none; padding-bottom: 0; margin-bottom: 0;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}\x3c/style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            U(c) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + U(d) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function zG(a) {
        var b = a.googleIconName,
            c = a.backgroundColorCss,
            d = a.iconColorCss;
        return KC('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + U(a.ariaLabel) + '" style="background-color: ' + U(V(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + U(V(d)) + '" aria-hidden="true">' + IC(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const AG = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function BG(a, b) {
        a = new CG(a, b, DG(a, b));
        a.init();
        return a
    }

    function EG() {
        ({
            Ud: a
        } = {
            Ud: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function FG(a, b, c) {
        GG(a) === 0 && b.classList.remove("ft-collapsed");
        HG(b, c);
        hs(a.win);
        b.classList.remove("ft-collapsed");
        IG(a);
        return () => void JG(a, b, c)
    }

    function KG(a) {
        if (LG(a.R.ta.we).length === 0) a.j.V ? .un(), a.j.i(null), a.R.ta.sj.i(!1), a.R.ta.Sh.i(!1), a.R.ta.Qh.i(!1);
        else {
            a.R.ta.sj.i(!0);
            MG(a);
            a: {
                for ([, b] of a.R.ta.Md)
                    if (b.hideCloseButton) {
                        var b = !0;
                        break a
                    }
                b = !1
            }
            b ? a.R.ta.kd.classList.add("ft-display-none") : a.R.ta.kd.classList.remove("ft-display-none")
        }
    }

    function NG(a, {
        Ik: b = 0,
        ip: c = 0
    }) {
        b = Math.max(LG(a.R.hd).length + b, 0);
        c = Math.max(LG(a.R.wc).length + c, 0);
        var d = b + c,
            e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.i.Ud && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function GG(a) {
        var b = a.R.wc;
        return LG(a.R.hd).length + LG(b).length
    }

    function IG(a) {
        var b = a.R.wc,
            c = a.R.separator;
        LG(a.R.hd).length > 0 && LG(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        GG(a) >= a.i.Ud ? a.R.xj.i(!0) : a.R.xj.i(!1);
        GG(a) > 1 ? a.R.tj.i(!0) : a.R.tj.i(!1);
        GG(a) > 0 ? a.R.isVisible.i(!0) : a.R.isVisible.i(!1);
        OG(a);
        PG(a)
    }

    function JG(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), IG(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function OG(a) {
        var b = LG(a.R.hd).concat(LG(a.R.wc));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        GG(a) >= a.i.Ud || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function PG(a) {
        var b = LG(a.R.hd).concat(LG(a.R.wc)).filter(c => !c.classList.contains("ft-reg-button"));
        a.B.i(b.length > 0)
    }

    function QG(a) {
        Zr(a.R.ta.we.children, b => {
            var c = a.R.ta.Md;
            JG(a, b, a.R.ta.we);
            var d = c.get(b);
            c.delete(b);
            d ? .isDismissed.i(!0)
        });
        KG(a)
    }

    function MG(a) {
        if (!a.j.V) {
            var b = RG(a.win, {
                googleIconName: "verified_user",
                ariaLabel: E(a.i.messages, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.R.ta.Sh.i(!a.R.ta.isVisible.V);
                    for (let [, c] of a.R.ta.Md) c.Vh = !0;
                    a.R.ta.Qh.i(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.df.classList.add("ft-reg-button");
            FG(a, b.df, a.R.wc);
            Ls(b.wm, a.R.ta.isVisible);
            a.j.i({
                mp: b,
                un: () => void JG(a, b.df, a.R.wc)
            })
        }
    }

    function SG(a) {
        var b = a.R.ta.Qh,
            c = b.i;
        a: {
            for ([, d] of a.R.ta.Md)
                if (a = d, a.showUnlessUserInControl && !a.Vh) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function TG(a) {
        a.R.ta.rl.listen(() => {
            QG(a)
        })
    }
    var CG = class extends N {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.i = b;
            this.R = c;
            this.j = new P(null);
            this.B = new P(!1)
        }
        addButton(a) {
            a = RG(this.win, a);
            return FG(this, a.df, this.R.hd)
        }
        addRegulatoryMessage(a) {
            var b = this.R.ta.we,
                c = UG(this.win, a);
            HG(c.ci, b);
            this.R.ta.Md.set(c.ci, c);
            KG(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    SG(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    SG(this)
                },
                showAndGiveUserControl: () => void this.showAndGiveUserControl(c),
                isDismissed: Ms(c.isDismissed),
                removeCallback: () => {
                    var d = c.ci,
                        e = this.R.ta.we;
                    d.parentNode === e && e.removeChild(d);
                    this.R.ta.Md.delete(d);
                    KG(this)
                }
            }
        }
        C() {
            return Fs(this.j.map(a => a != null))
        }
        A() {
            return Fs(this.B)
        }
        l() {
            return [this.R.container]
        }
        W() {
            var a = this.R.Cb.Nb;
            a.parentNode ? .removeChild(a);
            super.W()
        }
        showAndGiveUserControl(a) {
            a.Vh = !0;
            this.R.ta.Sh.i(!0);
            SG(this)
        }
        init() {
            WF(this.win, AG);
            Ls(this.R.Wn, this.i.Lc);
            this.win.document.body.appendChild(this.R.Cb.Nb);
            TG(this)
        }
    };

    function DG(a, b) {
        var c = xC(a),
            d = c.shadowRoot;
        d.appendChild(qi(new ci(a.document), yG({
            Ql: E(b.messages, 1),
            tl: E(b.messages, 3),
            gl: 50,
            Bn: 11,
            il: 10,
            fl: 5
        }).Fb()));
        var e = wC("ft-container", d),
            f = wC("ft-expand-toggle", d),
            g = wC("ft-expand-toggle-container", d),
            h = new P(null);
        h.j(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        var k = new P(!0);
        Is(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Is(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.i(!k.V)
            });
        var l = new P(!1);
        Is(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Is(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.i(!0)
        });
        var m = new P(!1);
        Is(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Is(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.j(p => {
            if (p) {
                p.af(e.style);
                var q = p.Ff();
                switch (q) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${q}`);
                }
                e.style.setProperty("--ft-toolbar-bottom-position", `${p.oe()}px`);
                hs(a)
            }
        });
        var n = new P(!1);
        b = Es(VG(a, d), n, b.position.map(p => p !== null));
        Is(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Is(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = WG(a, wC("ft-reg-bubble", d));
        return {
            container: e,
            hd: wC("ft-button-holder", d),
            wc: wC("ft-bottom-button-holder", d),
            separator: wC("ft-separator", d),
            Cb: c,
            Wn: h,
            vp: k,
            xj: l,
            tj: m,
            isVisible: n,
            ta: b
        }
    }

    function WG(a, b) {
        var c = new P(!1),
            d = new P(!1),
            e = Gs(c, d);
        Is(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Is(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        var f = new P(!1);
        Is(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Is(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        var g = wC("ft-reg-bubble-close", b),
            h = new Qs;
        g.addEventListener("click", () => {
            Ps(h)
        });
        var k = wC("ft-reg-message-holder", b);
        kt(ht(a, k)).j(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            we: k,
            kd: g,
            Sh: c,
            Qh: d,
            isVisible: e,
            sj: f,
            Md: new Map,
            rl: Ns(h)
        }
    }

    function RG(a, b) {
        var c = qi(new ci(a.document), zG({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        }).Fb());
        b.buttonExtension ? .styleSheet && c.appendChild(b.buttonExtension.styleSheet);
        if (b.cornerNumber !== void 0) {
            let d = wh(Math.round(b.cornerNumber), 99);
            wC("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick &&
            vC("BUTTON", c).addEventListener("click", b.onClick);
        a = new P(!1);
        Is(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Is(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            df: c,
            wm: a
        }
    }

    function UG(a, b) {
        a: {
            var c = b.regulatoryMessage;
            var d = c.kind;
            if (d) switch (d) {
                case "standard":
                    c = XG(a, c);
                    break a;
                case "custom":
                    a = new ci(a.document);
                    d = KC('<div class="ft-reg-message ft-reg-message-custom"></div>');
                    a = qi(a, d.Fb());
                    a.appendChild(c.content);
                    c = a;
                    break a;
                default:
                    throw Error(`Unknown regulatory message kind: ${d}`);
            } else c = XG(a, c)
        }
        c.orderingIndex = b.orderingIndex;
        return {
            ci: c,
            showUnlessUserInControl: !1,
            Vh: !1,
            isDismissed: new P(!1),
            hideCloseButton: b.hideCloseButton
        }
    }

    function XG(a, b) {
        a = new ci(a.document);
        var c = KC('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = qi(a, c.Fb());
        c = wC("ft-reg-message-button", a);
        b.actionButton ? (c.appendChild(b.actionButton.buttonText), c.addEventListener("click", b.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = wC("ft-reg-message-info", a);
        b.informationText ? c.appendChild(b.informationText) : c.classList.add("ft-display-none");
        return a
    }

    function HG(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function LG(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function VG(a, b) {
        var c = new P(!1),
            d = wC("ft-symbol-font-load-test", b);
        b = wC("ft-symbol-reference", d);
        var e = wC("ft-text-reference", d),
            f = ht(a, b);
        Js(kt(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.i(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function YG(a) {
        var b = new Qs,
            c = at(a, 2500, () => void Ps(b));
        return new ZG(a, () => void $G(a, () => void c()), Ns(b))
    }

    function aH(a) {
        a.j || (bH(a), cH(a), a.j = !0);
        return a.l
    }

    function bH(a) {
        var b = new MutationObserver(() => {
            a.i()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        ys(a, () => void b.disconnect())
    }

    function cH(a) {
        a.win.addEventListener("resize", a.i);
        ys(a, () => void a.win.removeEventListener("resize", a.i))
    }
    var ZG = class extends N {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.i = b;
            this.l = c;
            this.j = !1
        }
    };

    function $G(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function dH(a) {
        return a.i[a.i.length - 1]
    }
    var fH = class {
        constructor() {
            this.l = eH;
            this.i = [];
            this.j = new Set
        }
        add(a) {
            if (this.j.has(a)) return !1;
            var b = mb(this.i, a, this.l);
            this.i.splice(b >= 0 ? b : -b - 1, 0, a);
            this.j.add(a);
            return !0
        }
        first() {
            return this.i[0]
        }
        has(a) {
            return this.j.has(a)
        }
        delete(a) {
            hb(this.i, b => b === a);
            return this.j.delete(a)
        }
        clear() {
            this.j.clear();
            return this.i.splice(0, this.i.length)
        }
        size() {
            return this.i.length
        }
    };

    function gH(a) {
        for (var b = a.Cd.V, c; a.l.zl() > b && (c = a.j.first());) {
            var d = a,
                e = c;
            hH(d, e);
            d.i.add(e)
        }
        for (;
            (d = dH(a.i)) && a.l.hm() <= b;) iH(a, d);
        for (;
            (d = dH(a.i)) && (c = a.j.first()) && d.priority > c.priority;) b = a, e = c, hH(b, e), b.i.add(e), iH(a, d)
    }

    function iH(a, b) {
        a.i.delete(b);
        a.j.add(b) && (b.Ki = a.l.addButton(b.buttonSpec));
        b.isInToolbar.i(!0)
    }

    function hH(a, b) {
        b.Ki && b.Ki();
        b.Ki = void 0;
        a.j.delete(b);
        b.isInToolbar.i(!1)
    }
    var jH = class {
        constructor(a, b) {
            this.Cd = a;
            this.l = b;
            this.i = new fH;
            this.j = new fH;
            this.A = 0;
            this.Cd.listen(() => void gH(this))
        }
        addButton(a) {
            var b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Mi: this.A++,
                isInToolbar: new P(!1)
            };
            this.i.add(b);
            gH(this);
            return {
                isInToolbar: Ms(Fs(b.isInToolbar)),
                removeCallback: () => {
                    hH(this, b);
                    this.i.delete(b);
                    gH(this)
                }
            }
        }
    };

    function eH(a, b) {
        return a.priority === b.priority ? b.Mi - a.Mi : a.priority - b.priority
    };

    function kH(a) {
        if (!tC(a.win)) {
            if (a.j.V) {
                let b = Ur(a.win);
                if (b > a.i + 100 || b < a.i - 100) a.j.i(!1), a.i = Or(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void lH(a), 200)
        }
    }

    function lH(a) {
        if (!tC(a.win)) {
            var b = Or(a.win);
            a.i && a.i > b && (a.i = b);
            b = Ur(a.win);
            b >= a.i - 100 && (a.i = Math.max(a.i, b), a.j.i(!0))
        }
    }
    var mH = class extends N {
        constructor(a) {
            super();
            this.win = a;
            this.j = new P(!1);
            this.i = 0;
            this.l = null;
            this.A = () => void kH(this)
        }
        init() {
            this.win.addEventListener("scroll", this.A);
            this.i = Or(this.win);
            lH(this)
        }
        W() {
            this.win.removeEventListener("scroll", this.A);
            this.j.i(!1);
            super.W()
        }
    };

    function nH(a, b) {
        var c = a.j.addRegulatoryMessage(b);
        c.showAndGiveUserControl();
        return {
            removeCallback: () => void c.removeCallback(),
            isDismissed: c.isDismissed
        }
    }

    function oH(a, b) {
        var c = new P(!1),
            d = new P(!1),
            e = Js(pH(a), !0, () => {
                qH(a, b, c, d)
            });
        return {
            removeCallback: () => {
                c.i(!0);
                e()
            },
            isDismissed: Ms(Fs(d))
        }
    }

    function pH(a) {
        if (!a.i) {
            var b = new mH(a.win);
            b.init();
            a.i = Fs(b.j);
            xs(a, b)
        }
        return a.i
    }

    function qH(a, b, c, d) {
        var e = a.j.addRegulatoryMessage(b);
        rH(a, e, c);
        Js(c, !0, () => {
            e.removeCallback()
        });
        Ls(d, Cs(e.isDismissed))
    }

    function rH(a, b, c) {
        a = pH(a);
        var d = Is(a, !0, () => void b.showUnlessUserInControl()),
            e = Is(a, !1, () => void b.hideUnlessUserInControl());
        Is(Cs(b.isDismissed), !0, () => {
            d();
            e()
        });
        Js(c, !0, () => {
            d();
            e()
        })
    }
    var sH = class extends N {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null
        }
        addRegulatoryMessage(a) {
            return a.displayImmediately ? nH(this, a.messageSpec) : oH(this, a.messageSpec)
        }
    };

    function tH(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new uH(a, b));
        return a.googFloatingToolbarManager
    }

    function vH(a) {
        a.i || (a.i = wH(a.win, a.j, a.Lc), xs(a, a.i.pd), xs(a, a.i.Wj), xH(a), yH(a, a.i.pd));
        return a.i
    }

    function zH(a) {
        a.Lc.V === null && a.i ? .position.i(AH(a))
    }

    function BH(a) {
        a.win.requestAnimationFrame(() => void zH(a))
    }

    function AH(a) {
        var b = [];
        a.i ? .pd ? .A().B() ? (b.push(() => CH(a)), b.push(() => DH(a))) : (b.push(() => DH(a)), b.push(() => CH(a)));
        a.i ? .pd ? .C() ? .B() && b.push(() => {
            var c = Mr(a.win);
            return {
                position: sG({
                    ra: Math.floor(c / 3),
                    ya: 10
                }),
                Cd: 0
            }
        });
        for (let c of b)
            if (b = c()) return b;
        return null
    }

    function xH(a) {
        a.win.googFloatingToolbarManagerAsyncPositionUpdate ? BH(a) : zH(a)
    }

    function yH(a, b) {
        var c = YG(a.win);
        aH(c).listen(() => void xH(a));
        xs(a, c);
        b.C().listen(() => void xH(a));
        b.A().listen(() => void xH(a));
        a.Lc.listen(() => void xH(a))
    }

    function CH(a) {
        var b = a.win,
            c = Mr(a.win);
        return oG(b, {
            Jd: uG({
                ra: 50,
                Ga: 10
            }),
            bi: Math.floor(c / 3),
            Te: 60,
            di: EG(),
            Yf: Math.floor(c / 2),
            xc: 20
        }, [...(a.i ? .pd.l() ? ? []), a.win.document.body]).Sg
    }

    function DH(a) {
        var b = a.win,
            c = Mr(a.win);
        return oG(b, {
            Jd: sG({
                ra: 50,
                ya: 10
            }),
            bi: Math.floor(c / 3),
            Te: 60,
            di: EG(),
            Yf: Math.floor(c / 2),
            xc: 40
        }, [...(a.i ? .pd.l() ? ? []), a.win.document.body]).Sg
    }
    class uH extends N {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.i = null;
            this.Lc = EH(this.win, this)
        }
        addButton(a) {
            return vH(this).Qm.addButton(a)
        }
        addRegulatoryMessage(a) {
            return vH(this).Wj.addRegulatoryMessage(a)
        }
    }

    function wH(a, b, c) {
        var d = new P(null),
            e = BG(a, {
                Ud: 2,
                position: d.map(f => f ? .position ? ? null),
                messages: b,
                Lc: c
            });
        b = new jH(d.map(f => f ? .Cd || 0), {
            addButton: f => e.addButton(f),
            zl: () => NG(e, {}),
            hm: () => NG(e, {
                Ik: 1
            })
        });
        a = new sH(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            pd: e,
            position: d,
            Qm: b,
            Wj: a
        }
    }

    function EH(a, b) {
        var c = new dC(a),
            d = new P(null),
            e = f => void d.i(f);
        ys(b, () => {
            cC(c, e)
        });
        c.floatingAdsStacking.maxZIndexListeners.push(e);
        e(bC(c));
        return d
    };
    const FH = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function GH(a, b, c, d) {
        a = new HH(a, b, c, d);
        if (a.j) {
            WF(a.win, FH);
            var e = a.win;
            b = a.message;
            c = xC(e);
            var f = c.shadowRoot;
            d = f.appendChild;
            e = new ci(e.document);
            var g = (g = {}, g.Sb);
            g = KC('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' + (g ? ' nonce="' + U(mD(g)) + '"' : "") + '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"' + (g ? ' nonce="' + U(mD(g)) + '"' : "") + "><style" + (g ? ' nonce="' + U(mD(g)) +
                '"' : "") + '>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}\x3c/style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(f, qi(e, g.Fb()));
            d = wC("ipr-container", f);
            f = wC("ipr-button", d);
            b.actionButton ? (f.appendChild(b.actionButton.buttonText), f.addEventListener("click", b.actionButton.onClick)) : f.classList.add("ipr-display-none");
            d = wC("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.i = c.Nb;
            Tz(a.j, a.i);
            IH(a)
        } else JH(a);
        return a
    }

    function IH(a) {
        var b = new ut(a.win);
        b.init(2E3);
        xs(a, b);
        st(b, () => {
            KH(a);
            JH(a);
            b.dispose()
        })
    }

    function JH(a) {
        var b = tH(a.win, a.l).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        ys(a, () => void b.removeCallback())
    }

    function KH(a) {
        a.i && (a.i.parentNode ? .removeChild(a.i), a.i = null)
    }
    var HH = class extends N {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            this.message = c;
            this.l = d;
            this.i = null
        }
        W() {
            KH(this);
            super.W()
        }
    };
    var MH = (a, b, c, d) => LH(a, b, c, d);

    function LH(a, b, c, d) {
        var e = GH(a, VF(a, d), {
            kind: "standard",
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, NH(a));
        return () => e.dispose()
    }

    function NH(a) {
        if (a = UF(a)) return a;
        OA(1234, Error("No messages"));
        return dg(new Bu)
    };

    function OH(a, b) {
        b && (a.i = MH(a.j, b.localizedDnsText, () => PH(a, b), a.A))
    }

    function QH(a) {
        var b = SF(a.j);
        b.callbackQueue = b.callbackQueue || [];
        TF(a.j).overrideDnsLink = !0;
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => OH(a, c)
        })
    }

    function PH(a, b) {
        eC(a.l);
        b.openConfirmationDialog(c => {
            c && a.i && (a.i(), a.i = null);
            fC(a.l)
        })
    }
    var RH = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = ZB(b, 2147483643);
            this.A = c;
            this.i = null
        }
    };

    function SH(a) {
        a.l.si(b => {
            var c = a.j,
                d = b.revocationText,
                e = b.attestationText,
                f = b.showRevocationMessage;
            b = VF(c, a.A);
            d = {
                kind: "standard",
                actionButton: {
                    buttonText: c.document.createTextNode(d),
                    onClick: f
                },
                informationText: c.document.createTextNode(e)
            };
            e = UF(c);
            e || (OA(1233, Error("No messages")), e = dg(new Bu));
            GH(c, b, d, e)
        }, () => {
            fC(a.i);
            TH(a)
        })
    }

    function UH(a) {
        eC(a.i);
        SH(a)
    }

    function TH(a) {
        a.j.__tcfapi ? a.j.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? eC(a.i) : fC(a.i)
        }) : OA(1250, Error("No TCF API function"))
    }
    var VH = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.i = ZB(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var WH = a => {
            if (!a || Tc(he(a, 1)) == null) return !1;
            a = F(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        XH = a => {
            if (!a || Tc(he(a, 3)) == null) return !1;
            a = F(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        YH = a => a ? D(a, 5) === !0 : !1;

    function ZH(a, b) {
        oj(a, (c, d) => {
            b[d] = c
        })
    }

    function $H(a) {
        if (a === a.top) return 0;
        for (; a && a !== a.top && rj(a); a = a.parent) {
            let b = a;
            if (b.sf_) return 2;
            if (b.$sf) return 3;
            if (b.inGptIF) return 4;
            if (b.inDapIF) return 5
        }
        return 1
    };

    function aI() {
        if (bI) return bI;
        var a = sr() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? bI = b : a.google_persistent_state_async = bI = new cI
    }

    function dI(a, b, c) {
        b = eI[b] || `google_ps_${b}`;
        a = a.S;
        var d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function fI(a, b, c) {
        return dI(a, b, () => c)
    }

    function gI(a, b, c) {
        return a.S[eI[b] || `google_ps_${b}`] = c
    }

    function hI(a, b) {
        return gI(a, b, fI(a, b, 0) + 1)
    }

    function iI() {
        var a = aI();
        return fI(a, 20, {})
    }

    function jI() {
        var a = aI(),
            b = fI(a, 41, !1);
        b || gI(a, 41, !0);
        return !b
    }

    function kI(a) {
        return fI(a, 24)
    }

    function lI() {
        var a = aI();
        return fI(a, 28, [])
    }
    var cI = class {
            constructor() {
                this.S = {}
            }
        },
        bI = null;
    const eI = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function mI(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function nI(a, b) {
        a = mI(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        var c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function oI(a) {
        return a.google_ad_client ? String(a.google_ad_client) : mI(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? ""
    };

    function $q(a, b, c = 0) {
        pI(a);
        var d = Math.min(Math.max(0, c), 9);
        (c = a.i.get(d)) ? c.push(b): a.i.set(d, [b]);
        var e = !1;
        return () => {
            if (!e) {
                e = !0;
                var f = a.i.get(d);
                if (f) {
                    let g = f.indexOf(b);
                    g !== -1 && f.splice(g, 1);
                    f.length === 0 && a.i.delete(d)
                }
            }
        }
    }

    function qI(a, b, c, d) {
        Ji(b, c, d);
        ys(a, () => Ki(b, c, d))
    }

    function rI(a, b) {
        a.state !== 1 && (a.state = 1, a.i.size > 0 && sI(a, b))
    }

    function pI(a) {
        a.j || (a.j = !0, a.win.document.visibilityState ? qI(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && rI(a, b);
            a.win.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.win ? (qI(a, a.win, "pagehide", b => {
            rI(a, b)
        }), qI(a, a.win, "pageshow", () => {
            a.state = 0
        })) : qI(a, a.win, "beforeunload", b => {
            rI(a, b)
        }))
    }

    function sI(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .slice().forEach(d => void d(b))
    }
    var tI = class extends N {
        constructor(a) {
            super();
            this.win = a;
            this.j = !1;
            this.state = 0;
            this.i = new Map
        }
    };
    async function uI(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} 200`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            var f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function vI(a) {
        var b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = ek(a.win)
    }

    function wI(a) {
        var b = a.state.wpc;
        return b !== null && b !== "" ? b : a.state.wpc = oI(a.win)
    }

    function xI(a, b) {
        var c = new Ho;
        var d = vI(a);
        c = kf(c, 1, d);
        d = wI(a);
        c = pf(c, 2, d);
        c = Go(c, a.state.sd);
        return kf(c, 7, Math.round(b || a.win.performance.now()))
    }

    function yI(a, b, c) {
        b(a.G.xe.Se.We).Wa(c)
    }

    function zI(a, b, c) {
        b(a.G.xe.Se.We).Kd(c)
    }
    async function AI(a) {
        try {
            return await uI(a.win, () => !(!vI(a) || !wI(a))), !0
        } catch (b) {
            return !1
        }
    }

    function BI(a) {
        var b = cr(CI);
        if (b.i) {
            var c = b.l;
            a(c);
            b.state.cc = Ld(c)
        }
    }
    async function DI(a, b, c) {
        if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            if (await AI(a)) {
                var e = a.G;
                a = xI(a, d);
                d = new gn;
                b = I(d, 1, b);
                c = Ae(b, 2, c, Uc);
                c = B(a, 9, Io, c);
                wp(e, c)
            }
        }
    }
    async function EI(a, b) {
        if (await AI(a)) {
            var c = xI(a);
            b = B(c, 5, Io, b);
            a.i && !a.state.le.includes(2) && (a.state.le.push(2), wp(a.G, b))
        }
    }
    async function FI(a, b, c) {
        if (await AI(a)) {
            var d = a.G;
            a = Go(xI(a, c), 1);
            b = B(a, 6, Io, b);
            wp(d, b)
        }
    }

    function GI(a, b, c) {
        return $q(a.j, () => {
            var d = b();
            for (let g of d) {
                d = wp;
                var e = a.G;
                var f = Go(xI(a, c ? .()), 1);
                f = B(f, 6, Io, g);
                d(e, f)
            }
        }, 9)
    }
    async function HI(a, b, c) {
        await AI(a) && yI(a, d => b(d.dk), c)
    }
    async function II(a, b, c) {
        await AI(a) && zI(a, d => b(d.dk), c)
    }
    async function JI(a, b) {
        if (await AI(a)) {
            var c = a.G;
            a = Go(xI(a), 1);
            b = B(a, 13, Io, b);
            wp(c, b)
        }
    }
    async function KI(a, b) {
        if (a.i && await AI(a)) {
            var c = a.G;
            a = xI(a);
            b = B(a, 11, Io, b);
            wp(c, b)
        }
    }
    async function LI(a, b) {
        if (await AI(a)) {
            var c = a.G;
            a = Go(xI(a), 1);
            b = B(a, 19, Io, b);
            wp(c, b)
        }
    }
    async function MI(a) {
        var b = cr(CI),
            c = T(Vx);
        if (c > 0 && Dj() < 1 / c && await AI(b)) {
            var d = new fn;
            d = I(d, 1, a);
            a = b.G;
            b = xI(b);
            b = B(b, 23, Io, d);
            wp(a, Go(b, c))
        }
    }
    var CI = class {
        constructor(a, b) {
            this.win = sr() || window;
            this.j = b ? ? new tI(this.win);
            this.G = a ? ? new br(Mo(), 100, 100, !0, this.j);
            this.state = dI(aI(), 33, () => {
                var c = T(Xv);
                return {
                    sd: c,
                    ssp: c > 0 && Dj() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null,
                    gmi: null
                }
            })
        }
        get i() {
            return this.state.ssp
        }
        get Zb() {
            return this.state.cu
        }
        set Zb(a) {
            this.state.cu = a
        }
        get l() {
            return KA(1227, () => eg(mn, Pd(this.state.cc || []))) || new mn
        }
    };

    function NI(a) {
        if (a.j.adsbygoogle_ama_fc_has_run !== !0) {
            var b = WH(a.i),
                c = XH(a.i),
                d = !1;
            if (b || a.D) UH(new VH(a.j, a.B, a.A || Je(a.i, Iu, 4, re()), a.l)), d = !0;
            c && (QH(new RH(a.j, a.B, a.A || Je(a.i, Iu, 4, re()))), d = !0);
            BI(e => {
                e = ff(e, 9, !0);
                e = ff(e, 10, b);
                ff(e, 11, c)
            });
            YH(a.i) && (d = !0);
            d && (a.l.start(!0), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    var OI = class {
        constructor(a, b, c, d, e, f = !1) {
            this.j = a;
            this.l = b;
            this.i = c;
            this.B = d;
            this.A = e || null;
            this.D = f
        }
    };

    function PI(a, b, c, d, e, f, g = "") {
        try {
            let h = a.i,
                k = Jj("SCRIPT", h);
            k.async = !0;
            g && k.setAttribute("fetchpriority", g);
            Qh(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", () => {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", () => {
                c > 0 ? PI(a, b, c - 1, d, e, f, g) : (d && h.head.removeChild(k), f())
            })
        } catch (h) {
            f()
        }
    }

    function QI(a, b, c = () => {}, d = () => {}, e = "") {
        PI(bi(a), b, 0, !1, c, d, e)
    };

    function RI(a = null) {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Hh(Cr).map(a => Number(a));
    Hh(Dr).map(a => Number(a));
    const SI = t.URL;

    function TI(a) {
        var b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function UI(a) {
        var b = (new SI(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function VI(a) {
        var b = "ab gdpr consent gdpr_limited soft_cmp_bottom_pinned soft_cmp_floating_toolbar ccpa monetization usnat usfl".split(" ");
        return (a = (new SI(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function WI(a) {
        return (a = (new SI(a.location.href)).searchParams.get("hl")) ? a : null
    }

    function XI(a) {
        var b = new SI(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + TI(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new SI(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function YI(a, b) {
        var c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        let e = Jj("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var ZI = Hg(class extends J {});

    function $I(a) {
        if (a.i) return a.i;
        a.O && a.O(a.j) ? a.i = a.j : a.i = Vj(a.j, a.U);
        return a.i ? ? null
    }

    function aJ(a) {
        a.l || (a.l = b => {
            if (b.source === a.i) try {
                var c = a.J ? a.J(b) : void 0;
                if (c) {
                    var d = c.mi,
                        e = a.C.get(d);
                    e && (e.fn || a.C.delete(d), e.Ed ? .(e.Dl, c.payload))
                }
            } catch (f) {}
        }, Ji(a.j, "message", a.l))
    }

    function bJ(a, b, c) {
        if ($I(a))
            if (a.i === a.j)(b = a.B.get(b)) && b(a.i, c);
            else {
                var d = a.A.get(b);
                if (d && d.ve) {
                    aJ(a);
                    var e = ++a.Z;
                    a.C.set(e, {
                        Ed: d.Ed,
                        Dl: d.Wf(c),
                        fn: b === "addEventListener"
                    });
                    a.i.postMessage(d.ve(c, e), "*")
                }
            }
    }
    var cJ = class extends N {
        constructor(a, b, c, d) {
            super();
            this.U = b;
            this.O = c;
            this.J = d;
            this.B = new Map;
            this.Z = 0;
            this.A = new Map;
            this.C = new Map;
            this.l = void 0;
            this.j = a
        }
        W() {
            delete this.i;
            this.B.clear();
            this.A.clear();
            this.C.clear();
            this.l && (Ki(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.J;
            super.W()
        }
    };
    const dJ = (a, b) => {
            var c = {
                cb: d => {
                    d = ZI(d);
                    b.Ib({
                        Wd: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        eJ = {
            Wf: a => a.Ib,
            ve: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Ed: (a, b) => {
                a({
                    Wd: b
                })
            }
        };

    function fJ(a) {
        a = ZI(a.data.__fciReturn);
        return {
            payload: a,
            mi: sv(We(a, 1))
        }
    }

    function gJ(a, b = !1) {
        if (b) return !1;
        a.j || (a.i = !!$I(a.caller), a.j = !0);
        return a.i
    }

    function hJ(a) {
        return new Promise(b => {
            gJ(a) && bJ(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ib: c => {
                    b(c.Wd)
                }
            })
        })
    }

    function iJ(a, b) {
        gJ(a) && bJ(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: cg(b),
            Ib: () => {}
        })
    }
    var jJ = class extends N {
        constructor(a) {
            super();
            this.i = this.j = !1;
            this.caller = new cJ(a, "googlefcPresent", void 0, fJ);
            this.caller.B.set("getDataWithCallback", dJ);
            this.caller.A.set("getDataWithCallback", eJ)
        }
        W() {
            this.caller.dispose();
            super.W()
        }
    };
    var kJ = class extends J {};

    function lJ(a) {
        a.addtlConsent === void 0 || kc(a.addtlConsent) || (a.addtlConsent = void 0);
        a.gdprApplies === void 0 || lc(a.gdprApplies) || (a.gdprApplies = void 0);
        return a.tcString !== void 0 && !kc(a.tcString) || a.listenerId !== void 0 && !jc(a.listenerId) ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }

    function mJ(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = lJ(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (jk({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function nJ(a, b = {}) {
        return mJ(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.qp) && (b.idpcApplies || kc(a.tcString) && a.tcString.length) ? oJ(a, "1") : !0 : !1
    }

    function oJ(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (c !== void 0) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (c === 0) return !1;a = a.purpose && a.vendor ? (c = pJ(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && pJ(a.purpose.consents, b) : !0;
        return a
    }

    function pJ(a, b) {
        return !(!a || !a[b])
    }

    function qJ(a) {
        var b = ["3", "4"];
        return a.gdprApplies === !1 ? !0 : b.every(c => oJ(a, c))
    }

    function rJ(a) {
        if (a.i) return a.i;
        a.i = Vj(a.j, "__tcfapiLocator");
        return a.i
    }

    function sJ(a) {
        return typeof a.j.__tcfapi === "function" || rJ(a) != null
    }

    function tJ(a, b, c, d) {
        c || (c = () => {});
        var e = a.j;
        typeof e.__tcfapi === "function" ? (a = e.__tcfapi, a(b, 2, c, d)) : rJ(a) ? (uJ(a), e = ++a.B, a.A[e] = c, a.i && a.i.postMessage({
            __tcfapiCall: {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }
        }, "*")) : c({}, !1)
    }

    function vJ(a, b) {
        var c = {
                internalErrorState: 0,
                internalBlockOnErrors: a.gd
            },
            d = th(() => {
                b(c)
            }),
            e = 0;
        a.timeoutMs !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.timeoutMs));
        tJ(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = lJ(c), c.internalBlockOnErrors = a.gd, mJ(c) ? (c.internalErrorState !== 0 && (c.tcString = "tcunavailable"), tJ(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function uJ(a) {
        if (!a.l) {
            var b = c => {
                if (c.source === a.i) try {
                    var d = (kc(c.data) ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                    a.A[d.callId](d.returnValue, d.success)
                } catch (e) {}
            };
            a.l = b;
            Ji(a.j, "message", b)
        }
    }
    var wJ = class extends N {
        constructor(a, b = {}) {
            super();
            this.i = null;
            this.A = {};
            this.B = 0;
            this.l = null;
            this.j = a;
            this.timeoutMs = b.timeoutMs ? ? 500;
            this.gd = b.gd ? ? !1
        }
        W() {
            this.A = {};
            this.l && (Ki(this.j, "message", this.l), delete this.l);
            delete this.A;
            delete this.j;
            delete this.i;
            super.W()
        }
        addEventListener(a) {
            var b = {
                    internalBlockOnErrors: this.gd
                },
                c = th(() => {
                    a(b)
                }),
                d = 0;
            this.timeoutMs !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.timeoutMs));
            var e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState =
                    lJ(b), b.internalBlockOnErrors = this.gd, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                tJ(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && tJ(this, "removeEventListener", null, a.listenerId)
        }
    };

    function xJ(a, b = !1, c, d = "") {
        c || (c = new kJ);
        jf(c, 2, Math.round(performance.now()));
        var e = {};
        try {
            let g = UI(a.win),
                h = VI(a.win);
            e.fc = g;
            e.fctype = h;
            let k = WI(a.win);
            k && (e.hl = k)
        } catch (g) {}
        try {
            var f = XI(a.win.location.href)
        } catch (g) {}
        b && f && (e.href = f);
        b = yJ(a.i, e);
        QI(a.win, b, () => {}, () => {}, d);
        c && iJ(new jJ(a.win), c)
    }
    var zJ = class {
        constructor(a, b) {
            this.win = a;
            this.i = b;
            this.ha = null
        }
        start(a = !1, b, c = "") {
            if (this.win === this.win.top) try {
                YI(this.win, "googlefcPresent"), xJ(this, a, b, c)
            } catch (d) {}
        }
        si(a, b) {
            var c = RI(this.win);
            c.callbackQueue = c.callbackQueue || [];
            c.callbackQueue.push({
                CONSENT_DATA_READY: () => {
                    var d = RI(this.win),
                        e = new wJ(this.win);
                    sJ(e) && vJ(e, f => {
                        f.cmpId === 300 && f.tcString && f.tcString !== "tcunavailable" && f.gdprApplies && a({
                            revocationText: (0, d.getDefaultConsentRevocationText)(),
                            closeText: (0, d.getDefaultConsentRevocationCloseText)(),
                            attestationText: (0, d.getDefaultConsentRevocationAttestationText)(),
                            showRevocationMessage: () => {
                                (0, d.showRevocationMessage)()
                            }
                        })
                    });
                    b()
                }
            })
        }
    };

    function yJ(a, b) {
        a = jh `https://fundingchoicesmessages.google.com/i/${a}`;
        return kh(a, { ...b,
            ers: 2
        })
    };

    function AJ() {
        BJ || (BJ = new CJ);
        return BJ
    }
    var CJ = class {
            constructor() {
                this.B = new Date(Date.now());
                this.l = this.i = null;
                this.A = !1;
                this.j = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.j[3] = {
                    [71]: (...a) => {
                        var b = this.i;
                        var c = this.B,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? Qt(`w5uHecUBa2S:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    },
                    [112]: () => this.A
                };
                this.j[4] = {
                    [15]: () => {
                        var a = Number(this.l || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        BJ;
    class DJ {
        constructor(a, b) {
            this.win = a;
            this.i = new zJ(a, b)
        }
        start(a, b, c) {
            !c && S(Ux) && (c = this.win.document.currentScript ? .getAttribute ? .("fetchpriority") ? ? "high");
            AJ().A = !0;
            this.i.start(a, b, c)
        }
        si(a, b) {
            this.i.si(a, b)
        }
    };

    function EJ(a, b, c) {
        return (a = a.i()) && bf(a, 11) ? c.map(d => d.l()) : c.map(d => d.B(b))
    };
    var FJ = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            var c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            var c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            var a = 0;
            for (let b of this.map.values()) a += b.size;
            return a
        }
        values() {
            var a = this.map;
            return function() {
                return function*() {
                    for (let b of a.values()) yield* b
                }()
            }()
        }[Symbol.iterator]() {
            var a = this.map;
            return function() {
                return function*() {
                    for (let [b, c] of a) {
                        let d = b,
                            e = c;
                        for (let f of e) yield [d, f]
                    }
                }()
            }()
        }
    };

    function GJ(a) {
        return [a[0],
            [...a[1]]
        ]
    };
    const HJ = new Set([7, 1]);
    var IJ = class {
        constructor() {
            this.l = new FJ;
            this.A = []
        }
        i(a, b) {
            HJ.has(b) || Lt(It(Sz(a), c => void this.l.add(c, b)), c => void this.A.push(c))
        }
        j(a, b) {
            for (let c of a) this.i(c, b)
        }
    };

    function JJ(a) {
        return new $t(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    var KJ = class {
        i(a) {
            return JJ(Math.floor(a.j))
        }
    };
    var LJ = class extends J {};

    function MJ(a, b) {
        var c = b.adClient;
        if (!kc(c) || !c) return !1;
        a.Dg = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        qa(c) && (a.I = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.A = {};
            for (let d of b.fillMessage) a.A[d.key] = d.value
        }
        a.bd = b.adWidth;
        a.Xc = b.adHeight;
        jc(a.bd) && a.bd > 0 && jc(a.Xc) && a.Xc > 0 || NA("rctnosize", b);
        return !0
    }
    var NJ = class {
        constructor() {
            this.A = this.I = this.j = this.Dg = null;
            this.Xc = this.bd = 0
        }
        B() {
            return !0
        }
    };

    function OJ(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            let b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function PJ(a, b = []) {
        var c = Date.now();
        return ab(b, d => c - d < a * 1E3)
    }

    function QJ(a, b, c) {
        try {
            let d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || db(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = PJ(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function RJ(a, b) {
        return SJ(a, b, "__lsv__")
    }

    function TJ(a, b) {
        return SJ(a, b, "__lsr__")
    }

    function SJ(a, b, c) {
        return b <= 0 || a == null || !OJ(a) ? null : QJ(a, b, c)
    };

    function UJ(a, b, c) {
        var d = 0;
        try {
            var e = d |= Kr(a);
            let h = Lr(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Nr(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = RJ(c, 3600) ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var VJ = class extends NJ {
        constructor() {
            super(...arguments);
            this.l = !1;
            this.i = null
        }
        B(a) {
            this.l = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = gv(a)
            } catch (c) {
                b = null
            } else b = null;
            this.i = b;
            return !0
        }
    };
    var WJ = {};

    function XJ(a, b, c) {
        var d = YJ(a, c, b);
        if (!d) return !0;
        for (var e = c.C.j; d.Hd && d.Hd.length;) {
            let f = d.Hd.shift(),
                g = sz(f.Ba);
            if (g && !(typeof d.ed === "number" && g <= d.ed)) c.D ? .i(f, 18);
            else if (ZJ(c, f, {
                    Xf: d.ed
                })) {
                if (d.Ve.i.length + 1 >= e) return c.D ? .j(d.Hd, 19), !0;
                d = YJ(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const YJ = (a, b, c) => {
        var d = b.C.j,
            e = b.C.D,
            f = b.C;
        f = bB(b.Ma(), f.i ? f.i.Td : void 0, d, !0);
        if (f.i.length >= d) return b.D ? .j($J(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.j || (f.j = Qr(f.l).scrollHeight || null), e = !d || d < 0 ? -1 : d * e - hB(f)) : e = void 0;
        var g = (d = e == null || e >= 50) ? $J(b, f, {
            types: a
        }, c) : null;
        d || b.D ? .j($J(b, f, {
            types: a
        }, c), 18);
        return {
            Ve: f,
            ed: e,
            Hd: g
        }
    };
    WJ[2] = Aa(function(a, b) {
        a = $J(b, bB(b.Ma()), {
            types: a,
            sc: mA(b.Ma())
        }, 2);
        if (a.length == 0) return !0;
        for (let c = 0; c < a.length; c++)
            if (ZJ(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    WJ[5] = Aa(XJ, [0], 5);
    WJ[10] = Aa(function(a, b) {
        a = [];
        var c = b.Ue;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && a.push(1);
        return XJ(a, 10, b)
    }, 10);
    WJ[3] = function(a) {
        if (!a.l) return !1;
        var b = $J(a, bB(a.Ma()), {
            types: [0],
            sc: mA(a.Ma())
        }, 3);
        if (b.length == 0) return !0;
        for (let c = b.length - 1; c >= 0; c--)
            if (ZJ(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const bK = a => {
            var b = a.Ma().document.body.getBoundingClientRect().width;
            aK(a, JJ(b))
        },
        dK = (a, b) => {
            var c = {
                types: [0],
                sc: new hA(0, null, [], 3, null),
                wn: [5]
            };
            c = $J(a, bB(a.Ma()), c, 8);
            cK(a, c.reverse(), b)
        },
        cK = (a, b, c) => {
            for (let d of b)
                if (b = c.i(d.Qa), ZJ(a, d, {
                        Eg: b
                    })) return !0;
            return !1
        };
    WJ[8] = function(a) {
        var b = a.Ma().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => WJ[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.Rf()) return !0;
        b = {
            types: [0],
            sc: new hA(0, null, [], 3, null),
            ti: [2, 4, 5]
        };
        b = $J(a, bB(a.Ma()), b, 8);
        var c = new KJ;
        if (cK(a, b, c)) return !0;
        if (a.B.ij) switch (a.B.Sj || 0) {
            case 1:
                dK(a, c);
                break;
            default:
                bK(a)
        }
        return !0
    };
    WJ[6] = Aa(XJ, [2], 6);
    WJ[7] = Aa(XJ, [1], 7);
    WJ[9] = function(a) {
        var b = YJ([0, 2], a, 9);
        if (!b || !b.Hd) return a.A.push(17), a.l;
        for (var c of b.Hd) {
            a: {
                var d = a.B.Ch || null;
                if (d == null) {
                    d = null;
                    break a
                }
                d = tz(c.Ba, new eK(d, a.Ma()));d = new Uz(d, c.Da(), c.Qa)
            }
            if (!d) continue;
            let e = sz(d.Ba);
            if (e === null) continue;
            if (typeof b.ed === "number" && e > b.ed) continue;
            if (!ZJ(a, d, {
                    Xf: b.ed,
                    Wg: !0
                })) continue;a = d.Ba.U;c = c.Ba;a = a.length > 0 ? a[0] : null;c.A = !0;a != null && c.U.push(a);
            return !0
        }
        a.A.push(17);
        return a.l
    };
    var uz = class {
        j(a, b, c, d) {
            return Fy(d.document, a, b)
        }
        l(a) {
            return Mr(a) || 0
        }
    };
    var fK = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.Ve = c
        }
        pb(a) {
            return this.i ? EB(this.j, this.i, a, this.Ve) : DB(this.j, a, this.Ve)
        }
        mb() {
            return this.i ? 16 : 9
        }
    };
    var gK = class {
        constructor(a) {
            this.Fg = a
        }
        pb(a) {
            return LB(a.document, this.Fg)
        }
        mb() {
            return 11
        }
    };
    var hK = class {
        constructor(a) {
            this.Mc = a
        }
        pb(a) {
            return IB(this.Mc, a)
        }
        mb() {
            return 13
        }
    };
    var iK = class {
        pb(a) {
            return BB(a)
        }
        mb() {
            return 12
        }
    };
    var jK = class {
        constructor(a) {
            this.je = a
        }
        pb() {
            return GB(this.je)
        }
        mb() {
            return 2
        }
    };
    var kK = class {
        constructor(a) {
            this.i = a
        }
        pb() {
            return JB(this.i)
        }
        mb() {
            return 3
        }
    };
    var lK = class {
        pb() {
            return MB()
        }
        mb() {
            return 17
        }
    };
    var mK = class {
        constructor(a) {
            this.i = a
        }
        pb() {
            return FB(this.i)
        }
        mb() {
            return 1
        }
    };
    var nK = class {
        pb() {
            return rh(oz)
        }
        mb() {
            return 7
        }
    };
    var oK = class {
        constructor(a) {
            this.ti = a
        }
        pb() {
            return HB(this.ti)
        }
        mb() {
            return 6
        }
    };
    var pK = class {
        constructor(a) {
            this.i = a
        }
        pb() {
            return KB(this.i)
        }
        mb() {
            return 5
        }
    };
    var qK = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        pb() {
            return Aa(NB, this.minWidth, this.maxWidth)
        }
        mb() {
            return 10
        }
    };
    var rK = class {
        constructor(a) {
            this.A = a.j.slice(0);
            this.j = a.i.slice(0);
            this.l = a.l;
            this.B = a.A;
            this.i = a.B
        }
    };

    function sK(a) {
        var b = new tK;
        b.B = a;
        b.j.push(new mK(a));
        return b
    }

    function uK(a, b) {
        a.j.push(new oK(b));
        return a
    }

    function vK(a, b) {
        a.j.push(new jK(b));
        return a
    }

    function wK(a, b) {
        a.j.push(new pK(b));
        return a
    }

    function xK(a, b) {
        a.j.push(new kK(b));
        return a
    }

    function yK(a) {
        a.j.push(new nK);
        return a
    }

    function zK(a) {
        a.i.push(new iK);
        return a
    }

    function AK(a, b = 0, c, d) {
        a.i.push(new fK(b, c, d));
        return a
    }

    function BK(a, b = 0, c = Infinity) {
        a.i.push(new qK(b, c));
        return a
    }

    function CK(a) {
        a.i.push(new lK);
        return a
    }

    function DK(a, b = 0) {
        a.i.push(new hK(b));
        return a
    }

    function EK(a, b) {
        a.l = b;
        return a
    }
    var tK = class {
        constructor() {
            this.l = 0;
            this.A = !1;
            this.j = [].slice(0);
            this.i = [].slice(0)
        }
        build() {
            return new rK(this)
        }
    };
    var eK = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        i() {
            var a = this.j,
                b = this.l,
                c = a.I || {};
            c.google_ad_client = a.Dg;
            c.google_ad_height = Mr(b) || 0;
            c.google_ad_width = Lr(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new LJ;
            b = ef(b, 1, a.l);
            a.i && A(b, 2, a.i);
            c.google_rasc = cg(b);
            a.j && (c.google_adtest = "on");
            return new $t(["fsi_container"], c)
        }
    };
    var FK = Tt(new Pt(0, {})),
        GK = Tt(new Pt(1, {})),
        HK = a => a === FK || a === GK;

    function IK(a, b, c) {
        as(a.i, b) || a.i.set(b, []);
        a.i.get(b).push(c)
    }
    var JK = class {
        constructor() {
            this.i = new es
        }
    };

    function KK(a, b) {
        a.D.wpc = b;
        return a
    }

    function LK(a, b) {
        for (let c = 0; c < a.A.length; c++)
            if (a.A[c] == b) return a;
        a.A.push(b);
        return a
    }

    function MK(a, b) {
        for (let c = 0; c < b.length; c++) LK(a, b[c]);
        return a
    }

    function NK(a, b) {
        a.l = a.l ? a.l : b;
        return a
    }
    var OK = class {
        constructor(a) {
            this.D = {};
            this.D.c = a;
            this.A = [];
            this.l = null;
            this.B = [];
            this.C = 0
        }
        getData(a) {
            var b = Ih(this.D);
            this.C > 0 && (b.t = this.C);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.l && (b.excp_n = this.l.name, b.excp_m = this.l.message && this.l.message.substring(0, 512), b.excp_s = this.l.stack && $k(this.l.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function PK(a, b) {
        b && (a.i.apv = cf(b, 4), le(b, wu, 23) && (a.i.sat = "" + z(b, wu, 23).i()));
        return a
    }

    function QK(a, b) {
        a.i.afm = b.join(",");
        return a
    }
    var RK = class extends OK {
        constructor(a) {
            super(a);
            this.i = {}
        }
        getData(a) {
            try {
                this.i.su = a.location.hostname
            } catch (b) {
                this.i.su = "_ex"
            }
            a = super.getData(a);
            Mh(a, this.i);
            return a
        }
    };

    function SK(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function TK(a, b, c, d = 30) {
        c.length <= d ? a[b] = UK(c) : (a[b] = UK(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function UK(a) {
        var b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ia(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function VK(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function WK(a, b) {
        a.j.op = VK(b)
    }

    function XK(a, b, c) {
        TK(a.j, "fap", b);
        a.j.fad = VK(c)
    }

    function YK(a, b, c) {
        TK(a.j, "fmp", b);
        a.j.fmd = VK(c)
    }

    function ZK(a, b, c) {
        TK(a.j, "vap", b);
        a.j.vad = VK(c)
    }

    function $K(a, b, c) {
        TK(a.j, "vmp", b);
        a.j.vmd = VK(c)
    }

    function aL(a, b, c) {
        TK(a.j, "pap", b);
        a.j.pad = VK(c)
    }

    function bL(a, b, c) {
        TK(a.j, "pmp", b);
        a.j.pmd = VK(c)
    }

    function cL(a, b) {
        TK(a.j, "psq", b)
    }
    var dL = class extends RK {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {};
            this.errors = []
        }
        getData(a) {
            a = super.getData(a);
            Object.assign(a, this.j);
            this.errors.length > 0 && (a.e = UK(this.errors));
            return a
        }
    };

    function eL(a, b, c) {
        var d = b.Ba;
        as(a.i, d) || a.i.set(d, new fL(Ht(Sz(b)) ? ? ""));
        c(a.i.get(d))
    }

    function gL(a, b) {
        eL(a, b, c => {
            c.i = !0
        })
    }

    function hL(a, b) {
        eL(a, b, c => {
            c.j = !0
        })
    }

    function iL(a, b) {
        eL(a, b, c => {
            c.l = !0
        });
        a.Z.push(b.Ba)
    }

    function jL(a, b, c) {
        eL(a, b, d => {
            d.zd = c
        })
    }

    function kL(a, b, c) {
        var d = [],
            e = 0;
        for (let f of c.filter(b)) HK(f.zd ? ? "") ? ++e : (b = a.j.get(f.zd ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Ad: e
        }
    }

    function lL(a, b) {
        WK(b, a.j.pe());
        var c = ds(a.i).filter(f => (f.Rc.startsWith(FK) ? 0 : 1) === 0),
            d = ds(a.i).filter(f => (f.Rc.startsWith(FK) ? 0 : 1) === 1),
            e = kL(a, f => f.i, c);
        XK(b, e.list, e.Ad);
        e = kL(a, f => f.i, d);
        YK(b, e.list, e.Ad);
        e = kL(a, f => f.j, c);
        ZK(b, e.list, e.Ad);
        e = kL(a, f => f.j, d);
        $K(b, e.list, e.Ad);
        c = kL(a, f => f.l, c);
        aL(b, c.list, c.Ad);
        d = kL(a, f => f.l, d);
        bL(b, d.list, d.Ad);
        cL(b, a.Z.map(f => a.i.get(f) ? .zd).map(f => a.j.get(f) ? ? null))
    }

    function Sm() {
        var a = cr(mL);
        if (!a.B) return Hm();
        var b = Qm(Pm(Om(Nm(Mm(Lm(Km(Jm(Gm(Fm(new Im, a.B ? ? []), a.U ? ? []), a.D), a.J), a.O), a.ma), a.qa), a.C ? ? 0), ds(a.i).map(c => {
            var d = new Em;
            d = pf(d, 1, c.Rc);
            var e = a.j.get(c.zd ? ? "", -1);
            d = kf(d, 2, e);
            d = ff(d, 3, c.i);
            return ff(d, 4, c.j)
        })), a.Z.map(c => a.i.get(c) ? .zd).map(c => a.j.get(c) ? ? -1));
        a.l != null && ff(b, 6, a.l);
        a.A != null && nf(b, 13, a.A);
        return b
    }
    var mL = class {
        constructor() {
            this.A = this.U = this.B = null;
            this.O = this.J = !1;
            this.l = null;
            this.qa = this.D = this.ma = !1;
            this.C = null;
            this.j = new es;
            this.i = new es;
            this.Z = []
        }
    };
    class fL {
        constructor(a) {
            this.l = this.j = this.i = !1;
            this.zd = null;
            this.Rc = a
        }
    };
    var nL = class {
        constructor(a) {
            this.j = a;
            this.i = -1
        }
    };

    function oL(a) {
        for (var b = 0; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function pL(a, b) {
        var c = a.U.filter(d => cs(d.lf).every(e => d.lf.get(e) === b.get(e)));
        return c.length === 0 ? (a.j.push(19), null) : c.reduce((d, e) => d.lf.pe() > e.lf.pe() ? d : e, c[0])
    }

    function qL(a, b) {
        b = Sz(b);
        if (!Gt(b)) return a.j.push(18), null;
        b = b.getValue();
        if (as(a.l, b)) return a.l.get(b);
        var c = Rt(b);
        c = pL(a, c);
        a.l.set(b, c);
        return c
    }
    var rL = class {
        constructor(a) {
            this.i = a;
            this.l = new es;
            this.U = (z(a, Ru, 2) ? .i() || []).map(b => {
                var c = Rt(E(b, 1)),
                    d = sv(We(b, 2));
                return {
                    lf: c,
                    Uj: d,
                    Rc: E(b, 1)
                }
            });
            this.j = []
        }
        O() {
            var a = cr(mL),
                b = this.A();
            a.B = b;
            b = this.D();
            a.U = b;
            b = this.B();
            b != null && (a.A = b);
            b = !!this.i.l() ? .i() ? .i();
            a.O = b;
            b = new es;
            for (let c of z(this.i, Ru, 2) ? .i() ? ? []) b.set(E(c, 1), sv(We(c, 2)));
            a.j = b
        }
        C() {
            return [...this.j]
        }
        A() {
            return [...this.i.i()]
        }
        D() {
            return [...Se(this.i, 4).map(sv)]
        }
        B() {
            return rv(z(this.i, Lu, 5) ? .i()) ? ? null
        }
        J(a) {
            var b = qL(this, a);
            b ? .Rc != null &&
                jL(cr(mL), a, b.Rc)
        }
        Z(a) {
            return a.length == 0 ? !0 : .75 <= (new yt(a)).filter(b => {
                b = qL(this, b) ? .Rc || "";
                return b != "" && !(b === FK || b === GK)
            }).count() / a.length
        }
    };

    function sL(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => (qL(a.i, c) ? .Uj ? ? Number.MAX_VALUE) - (qL(a.i, d) ? .Uj ? ? Number.MAX_VALUE))
    }

    function tL(a, b) {
        var c = b.Qa.i,
            d = Math,
            e = d.min,
            f = b.Da(),
            g = b.Ba.i();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? oL(f.parentElement) : oL(f));
        a = a.j;
        a.i < 0 && (a.i = Qr(a.j).scrollHeight || 0);
        a = a.i - b.Qa.i;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.Da();
        return a
    }

    function uL(a, b) {
        return b.count() == 0 ? b : b.sort((c, d) => tL(a, c) - tL(a, d))
    }

    function vL(a, b) {
        return b.sort((c, d) => {
            var e = c.Ba.D,
                f = d.Ba.D,
                g;
            e == null || f == null ? g = e == null && f == null ? tL(a, c) - tL(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    var wL = class {
        constructor(a, b = null) {
            this.j = new nL(a);
            this.i = b && new rL(b)
        }
    };

    function xL(a, b, c = 0, d) {
        var e = a.j;
        for (var f of b.A) e = xt(e, f.pb(a.l), yL(f.mb(), c));
        f = e = e.apply(AB(a.l));
        for (let g of b.j) f = xt(f, g.pb(a.l), Nt([zL(g.mb(), c), h => {
            d ? .i(h, g.mb())
        }]));
        switch (b.l) {
            case 1:
                f = uL(a.i, f);
                break;
            case 2:
                f = vL(a.i, f);
                break;
            case 3:
                let g = cr(mL);
                f = sL(a.i, f);
                e.forEach(h => {
                    gL(g, h);
                    a.i.i ? .J(h)
                });
                f.forEach(h => hL(g, h))
        }
        b.B && (f = At(f, Wh(a.l.location.href + a.l.localStorage.google_experiment_mod)));
        b.i ? .length === 1 && IK(a.A, b.i[0], {
            tc: e.count(),
            rk: f.count()
        });
        return zt(f)
    }
    var AL = class {
        constructor(a, b, c = null) {
            this.j = new yt(a);
            this.i = new wL(b, c);
            this.l = b;
            this.A = new JK
        }
        count() {
            return this.j.count()
        }
    };
    const yL = (a, b) => c => rz(c, b, a),
        zL = (a, b) => c => rz(c.Ba, b, a);

    function BL(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = CL(DL(c), a);
                    break a;
                case 3:
                    a = CL(c, a);
                    break a;
                case 2:
                    let e = c.lastChild;
                    a = CL(e ? e.nodeType == 1 ? e : DL(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !EL(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !Dv(b) && b.offsetWidth <= 0);
        return d
    }

    function CL(a, b) {
        if (!a) return !1;
        a = Kj(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function DL(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function EL(a) {
        return !!a.nextSibling || !!a.parentNode && EL(a.parentNode)
    };
    var FL = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function GL(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            let f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = Oj(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function HL(a, b) {
        return !((Mj.test(b.google_ad_width) || Lj.test(a.style.width)) && (Mj.test(b.google_ad_height) || Lj.test(a.style.height)))
    }

    function IL(a, b) {
        var c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function JL(a, b, c, d, e) {
        if (a !== a.top) return uj(a) ? 3 : 16;
        if (!(Lr(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Lr(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = Lr(a); c; c = c.parentElement) {
                    d = Kj(c, a);
                    if (!d) continue;
                    if ((e = Oj(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function KL(a, b, c, d) {
        var e = JL(b, c, a, T($v), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || uy(c, b) ? (b = Lr(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function LL(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function ML(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = Kj(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function NL(a, b, c) {
        a = wy(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function OL(a, b) {
        b = b.parentElement;
        return b ? (a = Kj(b, a)) ? a.direction : "" : ""
    }

    function PL(a, b, c) {
        if (NL(a, b, c) !== 0) {
            LL(b, c, "0px");
            var d = NL(a, b, c);
            LL(b, c, `${-1*d}px`);
            a = NL(a, b, c);
            a !== 0 && a !== d && LL(b, c, `${d/(a-d)*d}px`)
        }
    }

    function QL(a, b) {
        var c = OL(a, b);
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            LL(b, c, "0px");
            d.width = `${Lr(a)}px`;
            PL(a, b, c);
            d.zIndex = "30"
        }
    };
    const RL = !rb && !Ta();

    function SL(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (RL && a.dataset) {
            if (!(!Pa("Android") || Ua() || Sa() || Ra() || Pa("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };

    function TL(a, b, c) {
        if (!b) return null;
        var d = Jj("INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c),
                f = "";
            if (e && e.position !== "static") {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g !== c;) {
                    if (a.getComputedStyle(g).display !== "none") {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f) d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height = "2000px";
            c = Mr(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && c > 0 && g > 0 && (f = g - h);
            a = k - h >= .8 * f
        } else a = !1;
        return a ? d : (b.removeChild(d), null)
    }

    function UL(a) {
        var b = a.document.body,
            c = TL(a, b, null);
        if (c) return c;
        if (a.document.body) {
            c = Math.floor(a.document.body.getBoundingClientRect().width);
            for (var d = [{
                    element: a.document.body,
                    depth: 0,
                    height: 0
                }], e = -1, f = null; d.length > 0;) {
                let h = d.pop(),
                    k = h.element;
                var g = h.height;
                h.depth > 0 && g > e && (e = g, f = k);
                if (h.depth < 5)
                    for (g = 0; g < k.children.length; g++) {
                        let l = k.children[g],
                            m = l.getBoundingClientRect().width;
                        (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                            element: l,
                            depth: h.depth + 1,
                            height: l.getBoundingClientRect().height
                        })
                    }
            }
            c =
                f
        } else c = null;
        return c ? TL(a, c.parentNode || b, c) : null
    }

    function VL(a) {
        var b = 0;
        try {
            b |= Kr(a), wj() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), WL(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }

    function WL(a) {
        a = a.document.getElementsByClassName("adsbygoogle");
        for (let b = 0; b < a.length; b++)
            if (SL(a[b]) === "autorelaxed") return !0;
        return !1
    };

    function XL(a) {
        var b = Pr(a, !0),
            c = Qr(a).scrollWidth,
            d = Qr(a).scrollHeight,
            e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Ur(a),
            g = [],
            h = [],
            k = [],
            l = [],
            m = [],
            n = [],
            p = [],
            q = 0,
            r = 0,
            v = Infinity,
            y = Infinity,
            G = null,
            w = PA({
                vd: !1
            }, a);
        for (var x of w) {
            w = x.getBoundingClientRect();
            let O = b - (w.bottom + f);
            var C = void 0,
                H = void 0;
            if (x.className && x.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                C = x.getAttribute("google_element_uid");
                let ja;
                if (H = a.fqjyf) {
                    if (C && H[C] && (ja = H[C].LmpfC), !ja) continue
                } else continue;
                C = (H = zr(ja)) ? H.height : 0;
                H = H ? H.width : 0
            } else if (C = w.bottom - w.top, H = w.right - w.left, C <= 1 || H <= 1) continue;
            g.push(C);
            k.push(H);
            l.push(C * H);
            YA(x) ? (r += 1, x.className && x.className.indexOf("pedestal_container") != -1 && (G = C)) : (v = Math.min(v, O), n.push(w), q += 1, h.push(C), m.push(C * H));
            y = Math.min(y, O);
            p.push(w)
        }
        v = v === Infinity ? null : v;
        y = y === Infinity ? null : y;
        f = YL(n);
        p = YL(p);
        h = ZL(b, h);
        n = ZL(b, g);
        m = ZL(b * c, m);
        x = ZL(b * c, l);
        return new $L(a, {
            Kl: e,
            ji: b,
            bn: c,
            Ym: d,
            Fm: q,
            Wk: r,
            Zk: aM(g),
            al: aM(k),
            Yk: aM(l),
            Mm: f,
            Lm: p,
            Km: v,
            Jm: y,
            hh: h,
            gh: n,
            Uk: m,
            Tk: x,
            dn: G
        })
    }

    function bM(a, b, c, d) {
        var e = wj() && !(Lr(a.win) >= 900);
        d = ab(d, f => fb(a.j, f)).join(",");
        b = {
            wpc: b,
            su: c,
            eid: d,
            doc: a.i.Kl ? ? null,
            pg_h: cM(a.i.ji),
            pg_w: cM(a.i.bn),
            pg_hs: cM(a.i.Ym),
            c: cM(a.i.Fm),
            aa_c: cM(a.i.Wk),
            av_h: cM(a.i.Zk),
            av_w: cM(a.i.al),
            av_a: cM(a.i.Yk),
            s: cM(a.i.Mm),
            all_s: cM(a.i.Lm),
            b: cM(a.i.Km),
            all_b: cM(a.i.Jm),
            d: cM(a.i.hh),
            all_d: cM(a.i.gh),
            ard: cM(a.i.Uk),
            all_ard: cM(a.i.Tk),
            pd_h: cM(a.i.dn),
            dt: e ? "m" : "d"
        };
        c = {};
        for (let f of Object.keys(b)) b[f] !== null && (c[f] = b[f]);
        return c
    }
    var $L = class {
        constructor(a, b) {
            this.j = [];
            this.win = a;
            this.i = b
        }
    };

    function aM(a) {
        return yh.apply(null, ab(a, b => b > 0)) || null
    }

    function ZL(a, b) {
        return a <= 0 ? null : xh.apply(null, b) / a
    }

    function YL(a) {
        var b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function cM(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function dM(a) {
        var b = $A({
            vd: !1,
            Nf: !1
        }, a);
        a = (Mr(a) || 0) - Ur(a);
        var c = 0;
        for (let d = 0; d < b.length; d++) {
            let e = b[d].getBoundingClientRect();
            fB(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function eM(a) {
        var b = {},
            c = $A({
                vd: !1,
                Nf: !1,
                Lh: !1,
                Mh: !1
            }, a).map(d => d.getBoundingClientRect()).filter(fB);
        b.Ni = c.length;
        c = aB({
            Lh: !0
        }, a).map(d => d.getBoundingClientRect()).filter(fB);
        b.gj = c.length;
        c = aB({
            Mh: !0
        }, a).map(d => d.getBoundingClientRect()).filter(fB);
        b.Jj = c.length;
        c = aB({
            Nf: !0
        }, a).map(d => d.getBoundingClientRect()).filter(fB);
        b.Ri = c.length;
        c = (Mr(a) || 0) - Ur(a);
        c = $A({
            vd: !1
        }, a).map(d => d.getBoundingClientRect()).filter(fB).filter(ya(fM, null, c));
        b.Oi = c.length;
        a = XL(a);
        c = a.i.hh != null ? a.i.hh : null;
        c != null &&
            (b.Cj = c);
        a = a.i.gh != null ? a.i.gh : null;
        a != null && (b.Pi = a);
        return b
    }

    function ZJ(a, b, {
        Xf: c,
        Eg: d,
        Wg: e
    } = {}) {
        return Xy(997, () => gM(a, b, {
            Xf: c,
            Eg: d,
            Wg: e
        }), a.i)
    }

    function $J(a, b, c, d) {
        var e = c.sc ? c.sc : a.C,
            f = oA(e, b.i.length);
        e = a.B.Qi ? e.i : void 0;
        var g = CK(DK(zK(BK(AK(yK(wK(xK(uK(vK(sK(c.types), a.tb), c.ti || []), a.Za), c.wn || [])), f.ye || void 0, e, b), c.minWidth, c.maxWidth)), f.Mc || void 0));
        a.qa && g.i.push(new gK(a.qa));
        b = 1;
        a.Hc() && (b = 3);
        EK(g, b);
        a.B.fk && (g.A = !0);
        return Xy(995, () => xL(a.j, g.build(), d, a.D || void 0), a.i)
    }

    function aK(a, b) {
        var c = UL(a.i);
        if (c) {
            let d = Zt(a.ma, b),
                e = Cy(a.i.document, a.O, null, null, {}, d);
            e && (ry(e.ld, c, 2, 256), Xy(996, () => hM(a, e, d), a.i))
        }
    }

    function iM(a) {
        return a.U ? a.U : a.U = a.i.google_ama_state
    }

    function gM(a, b, {
        Xf: c,
        Eg: d,
        Wg: e
    } = {}) {
        var f = b.Ba;
        if (f.A) return !1;
        var g = b.Da(),
            h = f.i();
        if (!BL(a.i, h, g, a.l)) return !1;
        h = null;
        f.te ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new $t(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new $t(null, {
            google_max_responsive_height: c
        });
        c = au(df(f.pg, 2) || 0);
        g = bu(f.D);
        var k = jM(a, f),
            l = kM(a),
            m = Zt(a.ma, f.ma ? f.ma.i(b.Qa) : null, h, d || null, c, g, k, l),
            n = b.fill(a.O, m);
        if (e && !lM(a, n, m) || !Xy(996,
                () => hM(a, n, m), a.i)) return !1;
        Wk(9, [f.D, f.yd]);
        a.Hc() && iL(cr(mL), b);
        return !0
    }

    function jM(a, b) {
        return Ht(Lt(Qz(b).map(cu), () => {
            a.A.push(18)
        }))
    }

    function kM(a) {
        if (!a.Hc()) return null;
        var b = a.j.i.i ? .D();
        if (b == null) return null;
        b = b.join("~");
        a = a.j.i.i ? .B() ? ? null;
        return du({
            Al: b,
            Rl: a
        })
    }

    function lM(a, b, c) {
        if (!b) return !1;
        var d = b.Gb,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        if (KL(f, a.i, b.Gb, c && c.qe() || {})) return QL(a.i, b.Gb), !0;
        Hv(b.ld);
        return !1
    }

    function hM(a, b, c) {
        if (!b) return !1;
        try {
            Gy(a.i, b.Gb, c)
        } catch (d) {
            return Hv(b.ld), a.A.push(6), !1
        }
        return !0
    }
    var mM = class {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.j = a;
            this.O = b;
            this.i = c;
            this.C = d.sc;
            this.tb = d.je || [];
            this.ma = d.Tl || null;
            this.Za = d.Il || [];
            this.qa = d.Fg || [];
            this.B = e;
            this.l = !1;
            this.J = [];
            this.A = [];
            this.Z = this.U = void 0;
            this.Ue = f;
            this.D = g ? new IJ : null
        }
        Ma() {
            return this.i
        }
        Hc() {
            if ((this.j.i.i ? .A().length ? ? 0) == 0) return !1;
            if (this.Z === void 0) {
                let a = EK(zK(yK(sK([0, 1, 2]))), 1).build(),
                    b = Xy(995, () => xL(this.j, a), this.i);
                this.Z = this.j.i.i ? .Z(b) || !1
            }
            return this.Z
        }
        Th() {
            return !!this.B.ak
        }
        Rf() {
            return !WL(this.i)
        }
        Wc() {
            return this.D
        }
    };
    const fM = (a, b) => b.top <= a;

    function nM(a, b, c, d, e, f = 0, g = 0) {
        this.Wb = a;
        this.ig = f;
        this.hg = g;
        this.errors = b;
        this.Vc = c;
        this.i = d;
        this.j = e
    };
    var oM = (a, {
        Rf: b = !1,
        Th: c = !1,
        yn: d = !1,
        Hc: e = !1
    } = {}) => {
        var f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2);
            let g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function pM(a, b, c) {
        a = oM(a, {
            Rf: b.Rf(),
            Th: b.Th(),
            yn: !!b.B.Ch,
            Hc: b.Hc()
        });
        return new qM(a, b, c)
    }

    function rM(a, b) {
        var c = WJ[b];
        return c ? Xy(998, () => c(a.i), a.B) : (a.i.J.push(12), !0)
    }

    function sM(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(rM(a, b))
            })
        })
    }

    function tM(a) {
        a.i.l = !0;
        return Promise.all(a.j.map(b => sM(a, b))).then(b => {
            b.includes(!1) && a.i.J.push(5);
            a.j.splice(0, a.j.length)
        })
    }
    var qM = class {
        constructor(a, b, c) {
            this.A = a.slice(0);
            this.j = a.slice(0);
            this.l = gb(this.j, 1);
            this.i = b;
            this.B = c
        }
    };
    var uM = class {
        constructor(a) {
            this.i = a;
            this.exception = void 0
        }
    };

    function vM(a) {
        return tM(a).then(() => {
            var b = a.i.j.j.filter(oz).count();
            var c = a.i.J.slice(0);
            var d = a.i;
            d = [...d.A, ...(d.j.i.i ? .C() || [])];
            b = new nM(b, c, d, a.i.j.count(), a.i.j.A.i, a.i.j.j.filter(oz).filter(pz).count(), a.i.j.j.filter(pz).count());
            return new uM(b)
        })
    };
    var wM = class {
        i() {
            return new $t([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    var xM = class {
        i() {
            return new $t(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function yM(a) {
        return Ev(a.i.document).map(b => {
            var c = new hz(b, 3);
            b = Iy(b, a.i.fqjyf ? ? {}) ? .LmpfC;
            return new nz(c, new jz(b), a.j, !1, 0, [], null, a.i, null)
        })
    }
    var zM = class {
        constructor(a) {
            var b = new xM;
            this.i = a;
            this.j = b || null
        }
    };
    const AM = {
        Ji: "10px",
        Ug: "10px"
    };

    function BM(a) {
        return $r(a.i.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new nz(new hz(b, 1), new fz(AM), a.j, !1, 0, [], null, a.i, null))
    }
    var CM = class {
        constructor(a, b) {
            this.i = a;
            this.j = b || null
        }
    };

    function DM(a, b) {
        var c = [];
        b.forEach((d, e) => {
            c.push(ia(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        TK(a.i, "cnstr", c, 80)
    }
    var EM = class extends OK {
        constructor() {
            super(-1);
            this.i = {}
        }
        getData(a) {
            a = super.getData(a);
            Object.assign(a, this.i);
            return a
        }
    };
    var FM = class extends Error {
        constructor(a, b, c) {
            super(a);
            this.i = b;
            this.j = c
        }
    };

    function GM(a, b, c) {
        return a == null ? new FM(b + "ShouldNotBeNull", 2, c) : a == 0 ? new FM(b + "ShouldNotBeZero", 3, c) : a < -1 ? new FM(b + "ShouldNotBeLessMinusOne", 4, c) : null
    }

    function HM(a, b, c) {
        var d = GM(c.ne, "gapsMeasurementWindow", 1) || GM(c.qd, "gapsPerMeasurementWindow", 2) || GM(c.Bd, "maxGapsToReport", 3);
        return d != null ? Et(d) : c.Kg || c.qd != -1 || c.Bd != -1 ? Ct(new IM(a, b, c)) : Et(new FM("ShouldHaveLimits", 1, 0))
    }

    function JM(a) {
        return iM(a.l) && iM(a.l).placed || []
    }

    function KM(a) {
        return JM(a).map(b => pt(nt(b.element, a.i)))
    }

    function LM(a) {
        return JM(a).map(b => b.index)
    }

    function MM(a, b) {
        var c = b.Ba;
        return !a.D && c.l && Tc(he(c.l, 8)) != null && df(c.l, 8) == 1 ? [] : c.A ? (c.U || []).map(d => pt(nt(d, a.i))) : [pt(new ot(b.Qa.i, 0))]
    }

    function NM(a) {
        a.sort((e, f) => e.i - f.i);
        var b = [],
            c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.i;
            d = d.i + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new ot(c, f - c)), c = d)
        }
        return b
    }

    function OM(a, b) {
        b = b.map(c => {
            var d = new jm;
            d = gf(d, 1, c.i);
            c = c.getHeight();
            return gf(d, 2, c)
        });
        return lm(km(new mm, a), b)
    }

    function PM(a) {
        var b = Je(a, jm, 2, re()).map(c => `G${Ve(c,1)}~${c.getHeight()}`);
        return `W${Ve(a,1)}${b.join("")}`
    }

    function QM(a, b) {
        var c = [],
            d = 0;
        for (let e of cs(b)) {
            let f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.O || f.splice(a.B, f.length);
            !a.C && d + f.length > a.j && f.splice(a.j - d, f.length);
            c.push(OM(e, f));
            d += f.length;
            if (!a.C && d >= a.j) break
        }
        return c
    }

    function RM(a) {
        var b = Je(a, mm, 5, re()).map(c => PM(c));
        return `M${Ve(a,1)}H${Ve(a,2)}C${Ve(a,3)}B${Number(!!D(a,4))}${b.join("")}`
    }

    function SM(a) {
        var b = Vz(zt(a.l.j.j), a.i),
            c = KM(a),
            d = new fs(LM(a));
        for (var e = 0; e < b.length; ++e) {
            if (d.contains(e)) continue;
            var f = MM(a, b[e]);
            c.push(...f)
        }
        c.push(new ot(0, 0));
        c.push(pt(new ot(Qr(a.i).scrollHeight, 0)));
        b = NM(c);
        c = new es;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.J ? 0 : Math.floor(e.i / a.A), as(c, f) || c.set(f, []), c.get(f).push(e);
        b = QM(a, c);
        c = new nm;
        c = gf(c, 1, a.j);
        c = gf(c, 2, a.A);
        c = gf(c, 3, a.B);
        a = ef(c, 4, a.D);
        return Le(a, 5, b)
    }

    function TM(a) {
        a = SM(a);
        return RM(a)
    }
    var IM = class {
        constructor(a, b, c) {
            this.J = c.ne == -1;
            this.A = c.ne;
            this.O = c.qd == -1;
            this.B = c.qd;
            this.C = c.Bd == -1;
            this.j = c.Bd;
            this.D = c.Kh;
            this.l = b;
            this.i = a
        }
    };

    function vv(a, b, c) {
        var d = b.lc;
        b.wd && S(Iw) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Fc || "pvc" in c || (c.pvc = ek(a.i)), NA(b.rd, c, d))
    }

    function UM(a, b, c) {
        c = c.getData(a.i);
        b.Fc && (c.pvc = ek(a.i));
        0 <= b.lc && (c.r = b.lc, vv(a, b, c))
    }
    var VM = class {
        constructor(a) {
            this.i = a
        }
    };
    const WM = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function XM(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        NA("ama", b, .01)
    }

    function YM(a) {
        var b = {};
        oj(WM, (c, d) => {
            a.hasOwnProperty(d) && (b[d] = a[d])
        });
        return b
    };

    function ZM(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                let e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function $M(a) {
        var b = "",
            c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            let e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function aN(a, b) {
        a = $e(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function bN(a, b) {
        a = $M(ZM(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Qt(a),
            d = cN(a);
        return b.find(e => {
            if (le(e, mu, 7)) {
                var f = z(e, mu, 7);
                f = Xc(he(f, 1, void 0, ge))
            } else f = Xc(he(e, 1, void 0, ge));
            le(e, mu, 7) ? (e = z(e, mu, 7), e = df(e, 2)) : e = 2;
            if (!jc(f)) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function cN(a) {
        for (var b = {};;) {
            b[Qt(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function dN(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            XM(a, {
                lserr: 1
            })
        }
    };
    var fN = (a, b, c, d, e, f = null, g = null) => {
            eN(a, new VM(a), b, c, d, e, f, g)
        },
        eN = (a, b, c, d, e, f, g = null, h = null) => {
            if (c)
                if (d) {
                    var k = RF(d, e);
                    try {
                        let l = new gN(a, b, c, d, e, k, f, g, h);
                        Ue(d, 35) != null && c !== cf(d, 35) ? LI(cr(CI), dg(jn(kn(new ln, cf(d, 35)), c))) : Xy(990, () => hN(l), a)
                    } catch (l) {
                        Vk() && Wk(15, [l]), UM(b, mv, NK(LK(KK(QK(PK(new RK(0), d), k), c), 1), l)), EI(cr(CI), Wm(new en, gm(new hm, 1)))
                    }
                } else UM(b, mv, LK(KK(new RK(0), c), 8)), EI(cr(CI), Wm(new en, gm(new hm, 8)));
            else UM(b, mv, LK(new RK(0), 9)), EI(cr(CI), Wm(new en, gm(new hm, 9)))
        };

    function hN(a) {
        a.U.forEach(b => {
            switch (b) {
                case 0:
                    Xy(991, () => iN(a), a.i);
                    break;
                case 1:
                    Xy(1073, () => {
                        KF(new QF(a.i, a.D, a.A, a.B, a.j.sa))
                    }, a.i);
                    break;
                case 2:
                    jN(a);
                    break;
                case 4:
                    Xy(1680, () => {
                        var c = z(a.A, Tu, 38);
                        c && a.tb.runVideoFeed({
                            win: a.i,
                            Un: be(c),
                            webPropertyCode: a.B
                        })
                    }, a.i)
            }
        })
    }

    function iN(a) {
        var b = S(qw) ? void 0 : a.j.gn,
            c = null;
        c = S(qw) ? mA(a.i) : kA(a.i, b);
        if (a.j.sa && le(a.j.sa, lu, 10)) {
            var d = ku(a.j.sa.i());
            d !== null && d !== void 0 && (c = aA(a.i, d, b));
            S(Lw) && (b = a.j.sa.i(), b ? .i() === 2 && (c = cA(b, c)))
        }
        le(a.A, hu, 26) && (c = pA(c, z(a.A, hu, 26), a.i));
        c = rA(c, a.i);
        b = a.j.sa ? $e(a.j.sa, 6) : [];
        d = a.j.sa ? Je(a.j.sa, ru, 5, re()) : [];
        var e = a.j.sa ? $e(a.j.sa, 2) : [],
            f = Xy(993, () => {
                var g = a.A,
                    h = Je(g, Iu, 1, re()),
                    k = a.j.sa && aN(a.j.sa, 1) ? "text_image" : "text",
                    l = new wM,
                    m = mz(h, a.i, {
                        bl: l,
                        rm: new kz(k)
                    });
                h.length != m.length && a.O.push(13);
                m = m.concat(BM(new CM(a.i, l)));
                h = S(Jw);
                l = z(g, Su, 24) ? .l() ? .i() ? .i() || !1;
                if (h || l) h = yM(new zM(a.i)), l = cr(mL), m = m.concat(h), l.ma = !0, l.C = h.length, a.J === "n" && (a.J = z(g, Su, 24) ? .i() ? .length ? "o" : "p");
                h = S(Lw) && a.j.sa.i() ? .i() === 2 && a.j.sa.i() ? .l();
                h = S(kw) || h;
                a: {
                    if (l = z(g, Eu, 6))
                        for (n of l.i())
                            if (le(n, Ot, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.i, (l = z(g, Eu, 6)) ? (h = Nz(l.i(), h), k = EJ(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.i, (l = z(g, Eu, 6)) ? (h = Mz(l.i(), h), k = EJ(g, k, h)) : k = [], k = n.call(m, k));
                m = k;
                g = z(g, Su, 24);
                return new AL(m,
                    a.i, g)
            }, a.i);
        a.l = new mM(f, a.B, a.i, {
            sc: c,
            Tl: a.ma,
            je: a.j.je,
            Il: b,
            Fg: d
        }, kN(a), e, S(Iw));
        iM(a.l) ? .optimization ? .ablatingThisPageview && !a.l.Hc() && (Hy(a.i), cr(mL).D = !0, a.J = "f");
        a.C = pM(e, a.l, a.i);
        Xy(992, () => vM(a.C), a.i).then(Xy(994, () => a.Za.bind(a), a.i), a.qa.bind(a))
    }

    function jN(a) {
        var b = z(a.A, Ju, 18);
        b && NI(new OI(a.i, new DJ(a.i, a.B), b, new dC(a.i), Je(a.A, Iu, 1, re())))
    }

    function kN(a) {
        var b = S(Kw);
        if (!a.A.i()) return {
            fk: b,
            ij: !1,
            ak: !1,
            en: 0,
            Sj: 0,
            Qi: lN(a),
            Ch: a.Z
        };
        var c = a.A.i();
        return {
            fk: b || D(c, 14),
            ij: D(c, 5),
            ak: D(c, 6),
            en: Xe(c, 8),
            Sj: df(c, 10),
            Qi: lN(a),
            Ch: a.Z
        }
    }

    function lN(a) {
        return S(Bw) || S(Lw) && a.j.sa ? .i() ? .i() === 2 ? !1 : a.j.sa && le(a.j.sa, lu, 10) ? (ku(a.j.sa.i()) || 0) >= .5 : !0
    }

    function mN(a, b) {
        var c = new RK(b.Wb);
        c.i.pp = b.hg;
        c.i.ppp = b.ig;
        c.i.ppos = b.placementPositionDiffs;
        c.i.eatf = b.Yd;
        c.i.eatfAbg = b.Zd;
        c.i.reatf = b.ud;
        c.i.a = a.C.A.slice(0).join(",");
        c = QK(PK(c, a.A), a.U);
        var d = b.ub;
        d && (c.i.as_count = d.Ni, c.i.d_count = d.gj, c.i.ng_count = d.Jj, c.i.am_count = d.Ri, c.i.atf_count = d.Oi, c.i.mdns = SK(d.Cj), c.i.alldns = SK(d.Pi));
        d = b.Gd;
        d != null && (c.i.allp = d);
        if (d = b.Bf) {
            var e = [];
            for (var f of cs(d))
                if (d.get(f).length > 0) {
                    var g = d.get(f)[0];
                    e.push("(" + [f, g.tc, g.rk].join() + ")")
                }
            c.i.fd = e.join(",")
        }
        f =
            b.ji;
        f != null && (c.i.pgh = f);
        c.i.abl = b.rj;
        c.i.rr = a.J;
        a = MK(MK(KK(c, a.B), b.errors), a.O);
        c = b.Vc;
        for (e = 0; e < c.length; e++) a: {
            f = a;d = c[e];
            for (g = 0; g < f.B.length; g++)
                if (f.B[g] == d) break a;f.B.push(d)
        }
        b.exception !== void 0 && LK(NK(a, b.exception), 1);
        return a
    }

    function nN(a, b) {
        var c = mN(a, b);
        UM(a.D, b.errors.length > 0 || a.O.length > 0 || b.exception !== void 0 ? mv : lv, c);
        if (z(a.A, Su, 24)) {
            a.l.j.i.i ? .O();
            b = iM(a.l);
            let d = cr(mL);
            d.l = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.J = !0);
            d.qa = !!b ? .optimization ? .availableAbg;
            b = cr(mL);
            c = new dL(c);
            b.B ? (c.j.sl = UK(b.B ? ? []), c.j.daaos = UK(b.U ? ? []), c.j.ab = VK(b.J), c.j.rr = VK(b.ma), c.j.oab = VK(b.O), b.l != null && (c.j.sab = VK(b.l)), b.D && (c.j.fb = VK(b.D)), c.j.ls = VK(b.qa), WK(c, b.j.pe()), b.C != null && (c.j.rp = VK(b.C)),
                b.A != null && (c.j.expl = VK(b.A)), lL(b, c)) : c.errors.push("irr");
            UM(a.D, ov, c)
        }
        c = a.l ? .Wc();
        S(Iw) && c != null && (c = new Map([...c.l.map.entries()].map(GJ)), b = new EM, DM(b, c), UM(a.D, qv, b))
    }

    function oN(a, b) {
        if (S(uw) && a.l != null) {
            var c = HM(a.i, a.l, {
                ne: T(Gw),
                qd: T(Fw),
                Bd: T(xw),
                Kh: !0,
                Kg: !1
            });
            if (Gt(c)) a = new qm, c = SM(c.getValue()), a = B(a, 2, pm, c), A(b, 16, a);
            else {
                var d = c.i;
                a = new qm;
                c = a.setError;
                var e = new om;
                e = qf(e, 2, d.j);
                d = qf(e, 1, d.i);
                a = c.call(a, d);
                A(b, 16, a)
            }
        }
    }

    function pN(a, b) {
        var c = cr(CI);
        if (c.i) {
            var d = new en,
                e = b.Vc.filter(g => g !== null),
                f = a.O.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            an(Ym(dn(cn(bn($m(Zm(Tm(Vm(Xm(Um(d, a.C.A.slice(0).map(g => {
                var h = new fm;
                return qf(h, 1, g)
            })), e.map(g => {
                var h = new im;
                return qf(h, 1, g)
            })), f.map(g => gm(new hm, g))), z(a.A, wu, 23) ? .i()), b.Wb), b.Gd), b.ud), b.Yd), b.Zd), a.U.map(g => g.toString())), xm(wm(vm(um(tm(sm(rm(new ym, b.ub ? .Ni), b.ub ? .gj), b.ub ? .Jj), b.ub ? .Ri), b.ub ? .Oi), b.ub ? .Cj), b.ub ? .Pi));
            if (b.Bf)
                for (let g of cs(b.Bf)) {
                    e =
                        new Dm;
                    for (let h of b.Bf.get(g)) Cm(e, Am(zm(new Bm, h.tc), h.rk));
                    ye(d, 14, Dm).set(g.toString(), e)
                }
            z(a.A, Su, 24) && Rm(d);
            oN(a, d);
            EI(c, d)
        }
    }

    function qN(a, b, c) {
        {
            var d = iM(a.l),
                e = b.i;
            let f = e.i,
                g = e.hg,
                h = e.Wb,
                k = e.ig,
                l = e.errors.slice(),
                m = e.Vc.slice(),
                n = b.exception,
                p = mI(a.i).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.C.l && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Wb: h,
                hg: g,
                ig: k,
                Gd: f,
                errors: e.errors.slice(),
                Vc: m,
                exception: n,
                ud: c,
                Yd: !!d.eatf,
                Zd: !!d.eatfAbg,
                rj: p
            }) : (m.push(12), a.C.l && m.push(13), c = {
                Wb: h,
                hg: g,
                ig: k,
                Gd: f,
                errors: l,
                Vc: m,
                exception: n,
                ud: c,
                Yd: !1,
                Zd: !1,
                rj: p
            })
        }
        c.ub = eM(a.l.i);
        if (b = b.i.j) c.Bf = b;
        c.ji = Qr(a.i).scrollHeight;
        if (Vk() || z(a.A, vu, 25) ? .l()) {
            d = zt(a.l.j.j);
            b = [];
            for (let f of d) {
                d = {};
                e = f.Z;
                for (let g of cs(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.J.j(f.j),
                    position: f.i(),
                    clearBoth: f.O,
                    locationType: f.yd,
                    placed: f.A,
                    placementProto: f.l ? Ld(f.l) : null,
                    articleStructure: f.B ? Ld(f.B) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Wk(14, [{
                placementIdentifiers: b
            }, a.l.O, c.ub])
        }
        return c
    }

    function rN(a, b) {
        var c = a.l.i;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Gd;
        c.numAutoAdsPlaced = b.Wb;
        c.hasAtfAd = b.ud;
        b.exception !== void 0 && (c.exception = b.exception);
        if (a.l != null)
            if (a = HM(a.i, a.l, {
                    ne: -1,
                    qd: -1,
                    Bd: -1,
                    Kh: !0,
                    Kg: !0
                }), Gt(a)) c.placementPositionDiffs = TM(a.getValue()), b = SM(a.getValue()), a = new qm, a = B(a, 2, pm, b), c.placementPositionDiffsReport = cg(a);
            else {
                c.placementPositionDiffs = "E" + a.i.message;
                var d = a.i;
                a = new qm;
                b = a.setError;
                var e = new om;
                e = qf(e, 2, d.j);
                d = qf(e,
                    1, d.i);
                a = b.call(a, d);
                c.placementPositionDiffsReport = cg(a)
            }
    }

    function sN(a, b) {
        nN(a, {
            Wb: 0,
            Gd: void 0,
            errors: [],
            Vc: [],
            exception: b,
            ud: void 0,
            Yd: void 0,
            Zd: void 0,
            ub: void 0
        });
        pN(a, {
            Wb: 0,
            Gd: void 0,
            errors: [],
            Vc: [],
            exception: b,
            ud: void 0,
            Yd: void 0,
            Zd: void 0,
            ub: void 0
        })
    }
    var gN = class {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.i = a;
            this.D = b;
            this.B = c;
            this.A = d;
            this.j = e;
            this.U = f;
            this.tb = g;
            this.ma = h || null;
            this.O = [];
            this.Z = k;
            this.J = "n"
        }
        Za(a) {
            try {
                let b = dM(this.l.i) || void 0;
                kv({
                    jh: b
                }, this.i);
                let c = qN(this, a, dM(this.l.i));
                le(this.A, vu, 25) && uu(z(this.A, vu, 25)) && rN(this, c);
                nN(this, c);
                pN(this, c);
                LA(753, () => {
                    if (S(tw) && this.l != null) {
                        var d = HM(this.i, this.l, {
                                ne: T(Gw),
                                qd: T(Fw),
                                Bd: T(xw),
                                Kh: !0,
                                Kg: !1
                            }),
                            e = Ih(c);
                        Gt(d) ? (d = TM(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" +
                            d.i.message;
                        e = mN(this, e);
                        UM(this.D, nv, e)
                    }
                })()
            } catch (b) {
                sN(this, b)
            }
        }
        qa(a) {
            sN(this, a)
        }
    };
    var tN = class extends J {},
        uN = Hg(tN);
    var vN = (a, b, c, d = !1) => {
        !c || WH(b) || d ? b = null : (b = new tN, b = qf(b, 1, 1));
        try {
            if (b) {
                let e = cg(b);
                a.localStorage.setItem("google_auto_fc_cmp_setting", e)
            } else S(Tx) && a.localStorage.removeItem("google_auto_fc_cmp_setting")
        } catch (e) {}
    };

    function wN(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Ft(() => uN(c)) : Ct(null)
    };

    function xN(a) {
        this.i = a || {
            cookie: ""
        }
    }
    xN.prototype.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.sameSite;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ai
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.i.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ?
            ";samesite=" + e : "")
    };
    xN.prototype.get = function(a, b) {
        var c = a + "=",
            d = (this.i.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ia(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function yN(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            ai: 0,
            path: c,
            domain: d
        })
    }
    xN.prototype.isEmpty = function() {
        return !this.i.cookie
    };
    xN.prototype.pe = function() {
        return this.i.cookie ? (this.i.cookie || "").split(";").length : 0
    };
    xN.prototype.clear = function() {
        var a = (this.i.cookie || "").split(";"),
            b = [],
            c = [];
        for (let f = 0; f < a.length; f++) {
            var d = Ia(a[f]);
            var e = d.indexOf("=");
            e == -1 ? (b.push(""), c.push(d)) : (b.push(d.substring(0, e)), c.push(d.substring(e + 1)))
        }
        for (a = b.length - 1; a >= 0; a--) yN(this, b[a])
    };

    function zN(a, b = window) {
        if (a.ga()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function AN(a) {
        return a.origin !== "null"
    }
    let BN;

    function CN(a) {
        return BN ? BN : AN(a) ? BN = DN(a) : BN = !1
    }

    function DN(a) {
        if (!a.navigator.cookieEnabled) return !1;
        var b = new xN(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            ai: 60,
            sameSite: a.isSecureContext ? "none" : void 0,
            secure: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        yN(b, "TESTCOOKIESENABLED");
        return !0
    }

    function EN(a, b) {
        b = AN(b) ? b.document.cookie : null;
        return b === null ? null : (new xN({
            cookie: b
        })).get(a) || ""
    }

    function FN(a, b, c, d) {
        AN(d) && (d.isSecureContext && (c = { ...c,
            sameSite: "none",
            secure: !0
        }), (new xN(d.document)).set(a, b, c))
    }

    function GN(a, b, c) {
        AN(b) && yN(new xN(b.document), a, "/", c)
    };

    function HN(a, b) {
        return ef(a, 5, b)
    }
    var IN = class extends J {
        A() {
            return Ue(this, 1) != null
        }
        l() {
            return Ue(this, 2) != null
        }
        i() {
            return D(this, 3)
        }
        ga() {
            return D(this, 5)
        }
    };
    var MN = ({
            Ib: a,
            win: b,
            gb: c,
            Lf: d = !1,
            Mf: e = !1
        }) => {
            JN({
                win: b,
                gb: c,
                Lf: d,
                Mf: e
            }) ? (b = (b = kI(aI())) ? KN(b) : void 0) ? a(Ct(b)) : LN().then(f => f.map(KN)).then(a) : a(Ct(HN(new IN, !0)))
        },
        ON = ({
            win: a,
            gb: b,
            Lf: c = !1,
            Mf: d = !1
        }) => JN({
            win: a,
            gb: b,
            Lf: c,
            Mf: d
        }) ? (b = kI(aI())) ? NN(a, KN(b)) : Et(Error("tcunav")) : NN(a, HN(new IN, !0));

    function JN({
        win: a,
        gb: b,
        Lf: c,
        Mf: d
    }) {
        if (!(d = !d && sJ(new wJ(a)))) {
            if (c = !c) {
                if (b) {
                    a = wN(a);
                    if (Gt(a))
                        if ((a = a.getValue()) && Tc(he(a, 1)) != null) b: switch (a = F(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else OA(806, a.i), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function LN() {
        return (new Promise(a => {
            var b = aI();
            a = {
                resolve: a
            };
            var c = fI(b, 25, []);
            c.push(a);
            gI(b, 25, c)
        })).then(PN)
    }

    function PN(a) {
        return a ? Ct(a) : Et(Error("tcnull"))
    }

    function KN(a) {
        return HN(new IN, nJ(a))
    }

    function NN(a, b) {
        return (a = zN(b, a)) ? Ct(a) : Et(Error("unav"))
    };
    var QN = class {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.D = b;
            this.B = c;
            this.l = !1;
            this.j = d;
            this.A = e
        }
    };
    var RN = class extends J {
        getName() {
            return F(this, 1)
        }
        getVersion() {
            return E(this, 3)
        }
    };
    var SN = [0, Eg, -1, Bg];
    var TN = class extends J {
        fm() {
            return F(this, 3)
        }
    };
    const UN = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var VN = class extends J {
        getVersion() {
            return Ve(this, 2)
        }
    };

    function WN(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function XN(a) {
        return Ab(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function YN(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function ZN(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        var b = [1, 2, 3, 5],
            c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function $N(a, b) {
        a = XN(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function aO(a) {
        var b = XN(a),
            c = YN(b.slice(0, 6));
        a = YN(b.slice(6, 12));
        var d = new VN;
        c = hf(d, 1, c);
        a = hf(c, 2, a);
        b = b.slice(12);
        c = YN(b.slice(0, 12));
        d = [];
        var e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = YN(e[0]) === 0;
            e = e.slice(1);
            var g = bO(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = ZN(g) + h;
            e = e.slice(g.length);
            if (f) {
                d.push(h);
                continue
            }
            f = bO(e, b);
            g = ZN(f);
            for (let l = 0; l <= g; l++) d.push(h + l);
            e = e.slice(f.length)
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Ae(a, 3, d, Uc)
    }

    function bO(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var cO = class extends J {
        i() {
            return F(this, 1)
        }
        l() {
            return F(this, 2)
        }
    };
    var dO = class extends J {};
    var eO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    var fO = class extends J {};

    function gO(a) {
        var b = new hO;
        return A(b, 1, a)
    }
    var hO = class extends J {};
    const iO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        jO = 6 + iO.reduce((a, b) => a + b);
    var kO = class extends J {};
    var lO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    var mO = class extends J {};

    function nO(a) {
        var b = new oO;
        return A(b, 1, a)
    }
    var oO = class extends J {};
    const pO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        qO = 6 + pO.reduce((a, b) => a + b);
    var rO = class extends J {
        i() {
            return F(this, 1)
        }
        l() {
            return F(this, 2)
        }
        A() {
            return F(this, 3)
        }
    };
    var sO = class extends J {};
    var tO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    var uO = class extends J {};

    function vO(a) {
        var b = new wO;
        return A(b, 1, a)
    }
    var wO = class extends J {};
    const xO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        yO = 6 + xO.reduce((a, b) => a + b);
    var zO = class extends J {
        i() {
            return F(this, 1)
        }
        l() {
            return F(this, 2)
        }
        A() {
            return F(this, 3)
        }
    };
    var AO = class extends J {};
    var BO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    const CO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        DO = 6 + CO.reduce((a, b) => a + b);
    var EO = class extends J {
        l() {
            return F(this, 1)
        }
        A() {
            return F(this, 2)
        }
        i() {
            return F(this, 3)
        }
    };
    var FO = class extends J {};

    function GO(a) {
        var b = new HO;
        return hf(b, 1, a)
    }
    var HO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    var IO = class extends J {};

    function JO(a) {
        var b = new KO;
        return A(b, 1, a)
    }
    var KO = class extends J {};
    const LO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        MO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        NO = 6 + MO.reduce((a, b) => a + b);

    function OO(a, b = [1]) {
        if (a.length === 0) throw Error("Cannot decode empty USNat section string.");
        var c = a.split(".");
        if (c.length > 2) throw Error(`Expected at most 2 segments but got ${c.length} when decoding ${a}.`);
        a = PO(c[0], b);
        if (c.length === 1) a = JO(a);
        else {
            a = JO(a);
            c = c[1];
            if (c.length === 0) throw Error("Cannot decode empty GPC segment string.");
            b = $N(c, 3);
            c = YN(b.slice(0, 2));
            if (c < 0 || c > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${c}.`);
            c += 1;
            b = YN(b.charAt(2));
            var d = new IO;
            c = I(d, 2,
                c);
            c = ff(c, 1, !!b);
            a = A(a, 2, c)
        }
        return a
    }

    function PO(a, b = [1]) {
        if (a.length === 0) throw Error("Cannot decode empty core segment string.");
        var c = $N(a, NO),
            d = YN(c.slice(0, 6));
        c = c.slice(6);
        if (!b.includes(d)) throw Error(`Unable to decode unsupported USNat Section specification version ${d} - only version${b.length>1?"s":""} ${b.join(", ")} ${b.length>1?"are":"is"} supported.`);
        var e = 0,
            f = [],
            g = d === 1 ? LO : MO;
        for (let Jh = 0; Jh < g.length; Jh++) {
            let lk = g[Jh];
            f.push(YN(c.slice(e, e + lk)));
            e += lk
        }
        if (d === 1) {
            var h = GO(d),
                k = f.shift();
            var l = I(h, 2, k);
            var m = f.shift();
            var n =
                I(l, 3, m);
            var p = f.shift();
            var q = I(n, 4, p);
            var r = f.shift();
            var v = I(q, 5, r);
            var y = f.shift();
            var G = I(v, 6, y);
            var w = f.shift();
            var x = I(G, 7, w);
            var C = f.shift();
            var H = I(x, 8, C);
            var O = f.shift();
            var ja = I(H, 9, O);
            var xa = f.shift();
            var Ya = I(ja, 10, xa);
            var vc = new FO,
                oe = f.shift();
            var Md = I(vc, 1, oe);
            var Nd = f.shift();
            var za = I(Md, 2, Nd);
            var Od = f.shift();
            var mk = I(za, 3, Od);
            var Dp = f.shift();
            var Ep = I(mk, 4, Dp);
            var Fp = f.shift();
            var Gp = I(Ep, 5, Fp);
            var Hp = f.shift();
            var Ip = I(Gp, 6, Hp);
            var Jp = f.shift();
            var Kp = I(Ip, 7, Jp);
            var Lp = f.shift();
            var Mp = I(Kp, 8, Lp);
            var Np = f.shift();
            var Op = I(Mp, 9, Np);
            var Pp = f.shift();
            var nk = I(Op, 10, Pp);
            var ok = f.shift();
            var pk = I(nk, 11, ok);
            var qk = f.shift();
            var rk = I(pk, 12, qk);
            var sk = A(Ya, 11, rk);
            var tk = new EO,
                uk = f.shift();
            var vk = I(tk, 1, uk);
            var wk = f.shift();
            var xk = I(vk, 2, wk);
            var yk = A(sk, 12, xk);
            var zk = f.shift();
            var Ak = I(yk, 13, zk);
            var Bk = f.shift();
            var Ck = I(Ak, 14, Bk);
            var Dk = f.shift();
            var Ek = I(Ck, 15, Dk);
            var Fk = f.shift();
            var Kh = I(Ek, 16, Fk)
        } else {
            var Gk = GO(d),
                Hk = f.shift();
            var Ik = I(Gk, 2, Hk);
            var Qp = f.shift();
            var Rp = I(Ik,
                3, Qp);
            var Sp = f.shift();
            var Tp = I(Rp, 4, Sp);
            var Up = f.shift();
            var Vp = I(Tp, 5, Up);
            var Wp = f.shift();
            var Xp = I(Vp, 6, Wp);
            var Yp = f.shift();
            var Zp = I(Xp, 7, Yp);
            var $p = f.shift();
            var aq = I(Zp, 8, $p);
            var bq = f.shift();
            var cq = I(aq, 9, bq);
            var dq = f.shift();
            var eq = I(cq, 10, dq);
            var fq = new FO,
                gq = f.shift();
            var hq = I(fq, 1, gq);
            var iq = f.shift();
            var jq = I(hq, 2, iq);
            var kq = f.shift();
            var lq = I(jq, 3, kq);
            var Jk = f.shift();
            var mq = I(lq, 4, Jk);
            var Kk = f.shift();
            var Lk = I(mq, 5, Kk);
            var Mk = f.shift();
            var nq = I(Lk, 6, Mk);
            var oq = f.shift();
            var pq = I(nq,
                7, oq);
            var qq = f.shift();
            var rq = I(pq, 8, qq);
            var sq = f.shift();
            var tq = I(rq, 9, sq);
            var uq = f.shift();
            var vq = I(tq, 10, uq);
            var wq = f.shift();
            var xq = I(vq, 11, wq);
            var yq = f.shift();
            var zq = I(xq, 12, yq);
            var Aq = f.shift();
            var Bq = I(zq, 13, Aq);
            var Cq = f.shift();
            var Dq = I(Bq, 14, Cq);
            var Eq = f.shift();
            var Fq = I(Dq, 15, Eq);
            var Gq = f.shift();
            var Hq = I(Fq, 16, Gq);
            var Iq = A(eq, 11, Hq);
            var Jq = new EO,
                Kq = f.shift();
            var Lq = I(Jq, 1, Kq);
            var Mq = f.shift();
            var Nq = I(Lq, 2, Mq);
            var Oq = f.shift();
            var Pq = I(Nq, 3, Oq);
            var Qq = A(Iq, 12, Pq);
            var Rq = f.shift();
            var Sq =
                I(Qq, 13, Rq);
            var Tq = f.shift();
            var Uq = I(Sq, 14, Tq);
            var Vq = f.shift();
            var Wq = I(Uq, 15, Vq);
            var Xq = f.shift();
            Kh = I(Wq, 16, Xq)
        }
        return Kh
    };
    var QO = class extends J {};
    var RO = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    const SO = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        TO = 6 + SO.reduce((a, b) => a + b);

    function UO(a, b) {
        return Ae(a, 1, b, Uc)
    }
    var VO = class extends J {};
    var WO = class extends J {};

    function XO(a, b) {
        return Ae(a, 1, b, Sc)
    }

    function YO(a, b) {
        return Ae(a, 2, b, Sc)
    }

    function ZO(a, b) {
        return Ae(a, 3, b, Uc)
    }

    function $O(a, b) {
        Ae(a, 4, b, Uc)
    }
    var aP = class extends J {};
    var bP = class extends J {};

    function cP(a, b) {
        return hf(a, 1, b)
    }

    function dP(a, b) {
        return A(a, 2, b)
    }

    function eP(a, b) {
        return A(a, 3, b)
    }

    function fP(a, b) {
        return hf(a, 4, b)
    }

    function gP(a, b) {
        return hf(a, 5, b)
    }

    function hP(a, b) {
        return hf(a, 6, b)
    }

    function iP(a, b) {
        return pf(a, 7, b)
    }

    function jP(a, b) {
        return hf(a, 8, b)
    }

    function kP(a, b) {
        return hf(a, 9, b)
    }

    function lP(a, b) {
        return ff(a, 10, b)
    }

    function mP(a, b) {
        return ff(a, 11, b)
    }

    function nP(a, b) {
        return Ae(a, 12, b, Sc)
    }

    function oP(a, b) {
        return Ae(a, 13, b, Sc)
    }

    function pP(a, b) {
        return Ae(a, 14, b, Sc)
    }

    function qP(a, b) {
        return ff(a, 15, b)
    }

    function rP(a, b) {
        return pf(a, 16, b)
    }

    function sP(a, b) {
        return Ae(a, 17, b, Uc)
    }

    function tP(a, b) {
        return Ae(a, 18, b, Uc)
    }

    function uP(a, b) {
        return Le(a, 19, b)
    }
    var vP = class extends J {
        getVersion() {
            return Ve(this, 1)
        }
    };
    var wP = class extends J {};
    var xP = Hh(Cr).map(a => Number(a)),
        yP = Hh(Dr).map(a => Number(a));

    function zP(a, b) {
        if (a.i + b > a.j.length) throw Error(`Requested length ${b} is past end of string.`);
        var c = a.j.substring(a.i, a.i + b);
        a.i += b;
        return parseInt(c, 2)
    }

    function AP(a) {
        a = zP(a, 36);
        var b = new bP;
        b = kf(b, 1, Math.floor(a / 10));
        return hf(b, 2, a % 10 * 1E8)
    }

    function BP(a) {
        var b = () => {
            var c = zP(a, 6);
            if (c > 25 || c < 0) throw Error(`Invalid character code, expected in range [0,25], got: ${c}`);
            return String.fromCharCode(97 + c)
        };
        return b() + b()
    }

    function CP(a) {
        for (var b = zP(a, 12), c = []; b--;) {
            var d = !!zP(a, 1) === !0,
                e = zP(a, 16);
            if (d)
                for (d = zP(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function DP(a, b, c) {
        var d = [];
        for (let e = 0; e < b; e++)
            if (zP(a, 1)) {
                let f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function EP(a) {
        var b = zP(a, 16);
        if (!!zP(a, 1) === !0) {
            a = CP(a);
            for (let c of a)
                if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
            return a
        }
        return DP(a, b)
    }

    function FP(a) {
        for (var b = [], c = zP(a, 12); c--;) {
            let k = zP(a, 6);
            var d = zP(a, 2),
                e = CP(a),
                f = b,
                g = f.push;
            var h = new WO;
            h = I(h, 1, k);
            d = I(h, 2, d);
            e = Ae(d, 3, e, Uc);
            g.call(f, e)
        }
        return b
    }
    var GP = class {
        constructor(a) {
            this.j = a;
            this.i = 0;
            if (/[^01]/.test(this.j)) throw Error(`Input bitstring ${this.j} is malformed!`);
        }
        skip(a) {
            this.i += a
        }
    };

    function HP(a) {
        try {
            let b = Ab(a).map(d => d.toString(2).padStart(8, "0")).join(""),
                c = new GP(b);
            return zP(c, 3) !== 1 ? null : UO(new VO, EP(c))
        } catch (b) {
            return null
        }
    };

    function IP(a) {
        try {
            let b = Ab(a).map(f => f.toString(2).padStart(8, "0")).join(""),
                c = new GP(b);
            if (zP(c, 3) !== 3) return null;
            let d = YO(XO(new aP, DP(c, 24, xP)), DP(c, 24, xP)),
                e = zP(c, 6);
            e !== 0 && $O(ZO(d, DP(c, e)), DP(c, e));
            return d
        } catch (b) {
            return null
        }
    };

    function JP(a) {
        try {
            let b = Ab(a).map(d => d.toString(2).padStart(8, "0")).join(""),
                c = new GP(b);
            return uP(tP(sP(rP(qP(pP(oP(nP(mP(lP(kP(jP(iP(hP(gP(fP(eP(dP(cP(new vP, zP(c, 6)), AP(c)), AP(c)), zP(c, 12)), zP(c, 12)), zP(c, 6)), BP(c)), zP(c, 12)), zP(c, 6)), !!zP(c, 1)), !!zP(c, 1)), DP(c, 12, yP)), DP(c, 24, xP)), DP(c, 24, xP)), !!zP(c, 1)), BP(c)), EP(c)), EP(c)), FP(c))
        } catch (b) {
            return null
        }
    };

    function KP(a) {
        if (!a) return null;
        a = a.split(".");
        if (a.length > 4) return null;
        var b = JP(a[0]);
        if (!b) return null;
        var c = new wP;
        b = A(c, 1, b);
        a.shift();
        for (let d of a) switch (LP(d)) {
            case 1:
                a = HP(d);
                if (!a) return null;
                A(b, 3, a);
                break;
            case 2:
                break;
            case 3:
                a = IP(d);
                if (!a) return null;
                A(b, 2, a);
                break;
            default:
                return null
        }
        return b
    }

    function LP(a) {
        try {
            let b = Ab(a).map(c => c.toString(2).padStart(8, "0")).join("");
            return zP(new GP(b), 3)
        } catch (b) {
            return -1
        }
    };

    function MP(a, b) {
        var c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (let d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (let d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var NP = Gg(bv);
    var OP = class extends J {
        i() {
            return Ue(this, 2) != null
        }
    };
    var PP = class extends J {};
    var QP = Hg(class extends J {});

    function RP(a) {
        a = SP(a);
        try {
            var b = a ? QP(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, PP, 4) || null : null
    }

    function SP(a) {
        a = AN({
            document: a,
            origin: a ? .location ? .origin,
            navigator: {
                cookieEnabled: !0
            },
            isSecureContext: !0
        }) ? (new xN(a)).get("FCCDCF", "") : "";
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function TP(a) {
        a.__tcfapiPostMessageReady || UP(new VP(a))
    }

    function UP(a) {
        a.i = b => {
            var c = typeof b.data === "string";
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, g) => {
                var h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.i);
        a.win.__tcfapiPostMessageReady = !0
    }
    var VP = class {
        constructor(a) {
            this.win = a
        }
    };

    function WP(a) {
        a.__uspapiPostMessageReady || XP(new YP(a))
    }

    function XP(a) {
        a.i = b => {
            var c = typeof b.data === "string";
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, g) => {
                var h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.i);
        a.win.__uspapiPostMessageReady = !0
    }
    var YP = class {
        constructor(a) {
            this.win = a;
            this.i = null
        }
    };
    var ZP = class extends J {};
    var $P = Hg(class extends J {
        i() {
            return Ue(this, 1) != null
        }
    });

    function aQ(a, b) {
        try {
            let c = a.split("."),
                d = Ab(c[0]).map(g => g.toString(2).padStart(8, "0")).join(""),
                e = new GP(d);
            a = {
                tcString: a ? ? void 0,
                gdprApplies: b
            };
            e.skip(78);
            a.cmpId = zP(e, 12);
            a.cmpVersion = zP(e, 12);
            e.skip(30);
            a.tcfPolicyVersion = zP(e, 6);
            a.isServiceSpecific = !!zP(e, 1);
            a.useNonStandardStacks = !!zP(e, 1);
            a.specialFeatureOptins = bQ(DP(e, 12, yP), yP);
            a.purpose = {
                consents: bQ(DP(e, 24, xP), xP),
                legitimateInterests: bQ(DP(e, 24, xP), xP)
            };
            a.purposeOneTreatment = !!zP(e, 1);
            a.publisherCC = BP(e);
            a.vendor = {
                consents: bQ(EP(e), null),
                legitimateInterests: bQ(EP(e), null)
            };
            let f = cQ(c);
            f && (a.vendor.disclosedVendors = f);
            return a
        } catch (c) {
            return null
        }
    }

    function cQ(a) {
        a.shift();
        for (let b of a)
            if (a = Ab(b).map(c => c.toString(2).padStart(8, "0")).join(""), a = new GP(a), zP(a, 3) === 1) return bQ(EP(a), null)
    }

    function bQ(a, b) {
        var c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (let d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (let d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function dQ(a, b) {
        function c(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 4));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function d(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function e(n) {
            if (n.length < 12) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(8, 12));
            n = l(n);
            return "1" + p + n + "N"
        }

        function f(n) {
            if (n.length < 18) return null;
            var p = h(n.slice(0, 8));
            p = k(p);
            n = h(n.slice(12, 18));
            n = l(n);
            return "1" + p + n + "N"
        }

        function g(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function h(n) {
            var p = [],
                q = 0;
            for (let r = 0; r < n.length / 2; r++) p.push(YN(n.slice(q, q + 2))), q += 2;
            return p
        }

        function k(n) {
            return n.every(p => p === 1) ? "Y" : "N"
        }

        function l(n) {
            return n.some(p => p === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = XN(a[0]);
        var m = YN(a.slice(0, 6));
        a = a.slice(6);
        if (m !== 1) return null;
        switch (b) {
            case 8:
                return c(a);
            case 10:
            case 12:
            case 9:
                return d(a);
            case 11:
                return e(a);
            case 7:
                return f(a);
            case 13:
                return g(a);
            default:
                return null
        }
    };

    function eQ(a, b) {
        a === a.top && (a = new fQ(a, b), gQ(a), hQ(a))
    }

    function gQ(a) {
        !a.l || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", YI(a.win, "__uspapiLocator"), Ba("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = D(a.j, 3), d({
                version: 1,
                uspString: b ? a.l : "1---"
            }, !0))
        }, a.win), WP(a.win))
    }

    function hQ(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", YI(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], Ba("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.3 || c <= 1)) d(null, !1);
                else {
                    var f = a.win.__tcfapiEventListeners;
                    c = a.j.i();
                    switch (b) {
                        case "ping":
                            d({
                                gdprApplies: c,
                                cmpLoaded: !0,
                                cmpStatus: "loaded",
                                displayStatus: "disabled",
                                apiVersion: "2.3",
                                cmpVersion: 2,
                                cmpId: 300
                            });
                            break;
                        case "addEventListener":
                            b = f.push(d) -
                                1;
                            a.tcString ? (e = aQ(a.tcString, c), e.addtlConsent = a.i != null ? a.i : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                            d(b, !0);
                            break;
                        case "removeEventListener":
                            e !== void 0 && f[e] ? (f[e] = null, d(!0)) : d(!1);
                            break;
                        case "getInAppTCData":
                        case "getVendorList":
                            d(null, !1);
                            break;
                        case "getTCData":
                            d(null, !1)
                    }
                }
        }, a.win), TP(a.win))
    }

    function iQ(a) {
        a = jQ(a);
        if (!a ? .i() || E(a, 1).length === 0 || Je(a, ZP, 2, re()).length === 0) return null;
        var b = E(a, 1);
        try {
            var c = aO(b.split("~")[0]);
            var d = WN(b)
        } catch (e) {
            return null
        }
        a = Je(a, ZP, 2, re()).reduce((e, f) => {
            var g = kQ(e);
            g = We(g, 1);
            g = sv(g);
            var h = kQ(f);
            h = We(h, 1);
            return g > sv(h) ? e : f
        });
        c = Ze(c, 3).indexOf(Ve(a, 1));
        return c === -1 || c >= d.length ? null : dQ(d[c], Ve(a, 1))
    }

    function lQ(a) {
        a = a.find(b => b && F(b, 1) === 13);
        if (a ? .i()) try {
            return $P(E(a, 2))
        } catch (b) {}
        return null
    }

    function jQ(a) {
        a = SP(a.win.document);
        try {
            var b = a ? QP(a) : null
        } catch (c) {
            b = null
        }
        if (!b) return null;
        b = Je(b, OP, 7, re());
        return lQ(b ? ? [])
    }

    function kQ(a) {
        le(a, bP, 2) ? a = z(a, bP, 2) : (a = new bP, a = kf(a, 1, 0));
        return a
    }
    var fQ = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            this.l = iQ(this);
            this.tcString = (b = RP(a.document)) && Ue(b, 1) != null ? E(b, 1) : null;
            this.i = (a = RP(a.document)) && Ue(a, 2) != null ? E(a, 2) : null
        }
    };

    function mQ(a) {
        var b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var nQ = (a, b) => {
        a = mQ(a);
        b = mQ(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };

    function oQ(a, b, c, d = null) {
        var e = g => {
            try {
                var h = JSON.parse(g.data)
            } catch (k) {
                return
            }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        };
        Ji(a, "message", e);
        var f = !1;
        return () => {
            var g = !1;
            f || (f = !0, g = Ki(a, "message", e));
            return g
        }
    }

    function pQ(a, b, c, d = null) {
        var e = oQ(a, b, qh(c, () => e()), d);
        return e
    }

    function qQ(a, b, c, d) {
        c.googMsgType = b;
        a.postMessage(JSON.stringify(c), d)
    }

    function rQ(a, b, c, d, e) {
        if (!(e <= 0) && (qQ(a, b, c, d), a = a.frames))
            for (let f = 0; f < a.length; ++f) e > 1 && rQ(a[f], b, c, d, --e)
    };

    function sQ(a, b, c, d) {
        return oQ(a, "fullscreen", d.kc(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class tQ {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };
    async function uQ(a) {
        return a.l.promise
    }
    async function vQ(a) {
        return a.i.promise
    }
    async function wQ(a) {
        return a.j.promise
    }

    function xQ(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.A.Ln;
        b.version = a.A.version;
        Ml(a.G, "fullscreen_tag", b, !1, .25)
    }
    class yQ extends N {
        constructor(a, b, c) {
            var d = HA,
                e = FA,
                f = {
                    Ln: 2,
                    version: Mo()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.fh = c;
            this.Va = d;
            this.G = e;
            this.A = f;
            this.state = 1;
            this.qem = null;
            this.l = new tQ;
            this.i = new tQ;
            this.j = new tQ
        }
        init() {
            var a = sQ(this.pubWin, this.fh, b => {
                if (b.eventType === "adError") this.j.resolve(), this.state = 4;
                else if (b.eventType === "adReady" && this.state === 1) this.qem = b.qem, b.slotType !== this.slotType && (xQ(this, {
                        cur_st: this.state,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }), this.state = 4), this.l.resolve(),
                    this.state = 2;
                else if (b.eventType === "adClosed" && this.state === 2) this.i.resolve(b.result), this.state = 3;
                else if (b.eventType !== "adClosed" || this.state !== 3) b.eventType === "adClosed" && b.closeAfterError && (this.i.resolve(b.result), this.state = 3), xQ(this, {
                    cur_st: this.state,
                    evt: b.eventType
                }), this.state = 4
            }, this.Va);
            ys(this, a)
        }
    };
    var zQ = Promise;
    class AQ {
        constructor(a) {
            this.l = a
        }
        i(a, b, c) {
            this.l.then(d => {
                d.i(a, b, c)
            })
        }
        j(a, b) {
            return this.l.then(c => c.j(a, b))
        }
    };
    class BQ {
        constructor(a) {
            this.data = a
        }
    };

    function CQ(a, b) {
        DQ(a, b);
        return new EQ(a)
    }
    class EQ {
        constructor(a) {
            this.l = a
        }
        i(a, b, c = []) {
            var d = new MessageChannel;
            DQ(d.port1, b);
            this.l.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new zQ(c => {
                this.i(a, c, b)
            })
        }
    }

    function DQ(a, b) {
        b && (a.onmessage = c => {
            b(new BQ(c.data, CQ(c.ports[0])))
        })
    };
    var FQ = class {
        constructor(a) {
            this.i = a
        }
    };
    const GQ = a => {
        var b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var IQ = ({
        destination: a,
        da: b,
        origin: c,
        Vg: d = "ZNWN1d",
        onMessage: e,
        Lj: f
    }) => HQ({
        destination: a,
        Hf: () => b.contentWindow,
        Um: c instanceof FQ ? c : typeof c === "function" ? new FQ(c) : new FQ(GQ(c)),
        Vg: d,
        onMessage: e,
        Lj: f
    });
    const HQ = ({
        destination: a,
        Hf: b,
        Um: c,
        Bp: d,
        Vg: e,
        onMessage: f,
        Lj: g
    }) => new AQ(new zQ((h, k) => {
        var l = m => {
            m.source && m.source === b() && c.i(m.origin) && (m.data.n || m.data) === e && (a.removeEventListener("message", l, !1), d && m.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${m.data.t}.`)) : (h(CQ(m.ports[0], f)), g && g(m)))
        };
        a.addEventListener("message", l, !1)
    }));

    function JQ() {
        var {
            promise: a,
            resolve: b
        } = new tQ;
        return {
            promise: a,
            resolve: b
        }
    };

    function KQ(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        var d = b[a];
        if (d) return d;
        d = JQ();
        b[a] = d;
        c();
        return d
    }

    function LQ(a, b, c) {
        return KQ(a, b, () => {
            Ij(b.document, c)
        }).promise
    };
    var MQ = class {
        constructor(a) {
            this.yg = a
        }
        runVideoFeed({
            win: a,
            Un: b,
            webPropertyCode: c
        }) {
            MA(1678, LQ(13, a, this.yg).then(d => {
                d.runVideoFeed({
                    win: a,
                    serializedVideoFeedConfig: cg(b),
                    webPropertyCode: c
                })
            }))
        }
    };

    function NQ(a, b, c, d, e, f, g = null) {
        if (e) {
            if (S(pw)) var h = null;
            else try {
                h = e.getItem("google_ama_config")
            } catch (m) {
                h = null
            }
            try {
                var k = h ? gv(h) : null
            } catch (m) {
                k = null
            }
        } else k = null;
        a: {
            if (d) try {
                var l = gv(d);
                break a
            } catch (m) {
                XM(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            l = null
        }
        if (d = l) {
            if (e) {
                l = new ju;
                A(d, 3, l);
                k = rv(d ? .i() ? .l()) || 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && jf(l, 1, Math.round(k));
                l = ae(d);
                d.i() && (k = new iu, h = d ? .i() ? .i(), k = ef(k, 23, h), h = d ? .i() ? .A(), k = ef(k, 12, h), A(l, 15, k));
                k = Je(l, Iu, 1, re());
                for (h = 0; h < k.length; h++) je(k[h], 11);
                je(l, 22);
                if (S(pw)) dN(a, e);
                else try {
                    e.setItem("google_ama_config", cg(l))
                } catch (m) {
                    XM(a, {
                        lserr: 1
                    })
                }
            }
            e = bN(a, Je(d, tu, 7, re()));
            l = {};
            S(qw) || (l.gn = z(d, Cu, 8) || new Cu);
            e && (l.sa = e);
            e && aN(e, 3) && (l.je = [1]);
            e = l;
            nI(a, 2) && (Wk(5, [Ld(d)]), c = YM(c), f = new MQ(f), l = (l = e.sa) && cf(l, 4) || "", c.google_package = l, fN(a, b, d, e, f, new $t(["google-auto-placed"], c), g));
            return !0
        }
        k && (XM(a, {
            cfg: 1,
            cl: 1
        }), e != null && dN(a, e));
        return !1
    };

    function OQ(a) {
        var b = new P(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.i(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Fs(b)
    };

    function PQ(a) {
        a.i != null || a.ka || (a.i = new MutationObserver(b => {
            for (let c of b)
                for (let d of c.addedNodes) qa(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Ps(b.j, d))
        }), a.i.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var QQ = class extends N {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Qs;
            this.i = null;
            ys(this, () => {
                this.i ? .disconnect();
                this.i = null
            })
        }
    };

    function RQ(a, b) {
        b.addEventListener("click", () => {
            var c = a.j;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Ct(nn(4)) : d.startsWith("#") ? Ct(nn(5)) : SQ(d, c) : Et(Error("Empty href"));
            if (Gt(c)) {
                d = c.getValue();
                c = a.i;
                var e = new pn;
                d = A(e, 1, d);
                c.call(a, d)
            } else a.l(c.i)
        })
    }
    var UQ = class {
        constructor(a, b, c) {
            var d = TQ();
            this.win = a;
            this.j = b;
            this.i = c;
            this.l = d
        }
        init() {
            var a = new QQ(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                RQ(this, b)
            });
            PQ(a);
            Ns(a.j).listen(b => {
                RQ(this, b)
            })
        }
    };

    function SQ(a, b) {
        return VQ(a, b).map(c => VQ(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = nn(2);
                e = pf(e, 2, `${c.host}${c.pathname}`);
                d = pf(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? nn(3) : nn(1);
            return d
        }))
    }

    function VQ(a, b) {
        return Jt(Ft(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function WQ(a) {
        if (a < 0 || !Number.isInteger(a)) return Et(Error(`Not a non-negative integer: ${a}`));
        var b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Ct(b.reverse().join(""))
    };
    class XQ {
        constructor() {
            this.zk = 5E3
        }
        vl() {
            return 5E3
        }
    }

    function YQ(a, b) {
        return a.quantizer ? Math.floor(b / 5E3) * 5E3 / a.quantizer.zk : b
    }

    function ZQ(a, b) {
        b = b.map(c => YQ(a, c));
        return $Q(b, a.i === void 0 ? void 0 : YQ(a, a.i)).map(c => {
            a: {
                var d = aR;
                let e = [];
                for (let f of c) {
                    c = d(f);
                    if (!Gt(c)) {
                        d = Et(c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Ct(e)
            }
            return d
        }).map(c => c.join(".")).map(c => bR(c, a.quantizer ? .vl()))
    }
    var cR = class {
        constructor(a, b) {
            this.quantizer = a;
            this.i = b
        }
    };

    function aR(a) {
        var b = WQ(a.value);
        if (!Gt(b)) return b;
        var c = b.getValue();
        return a.kg === 1 ? Ct(`${c}`) : a.kg === 2 ? Ct(`${c}~`) : Lt(WQ(a.kg - 2), d => {
            throw d;
        }).map(d => `${c}~${d}`)
    }

    function $Q(a, b) {
        var c = [];
        for (let d = 0; d < a.length; d++) {
            let e = a[d] ? ? b;
            if (e === void 0) return Et(Error("Sparse but no default"));
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                kg: 1
            }) : c[c.length - 1].kg++
        }
        return Ct(c)
    }

    function bR(a, b) {
        return a === "" ? Ct("") : dR(b).map(c => `${c}${a}`)
    }

    function dR(a) {
        return a === void 0 || a === 1 ? Ct("") : Kt(WQ(a), "ComFactor: ").map(b => `~${b}.`)
    };
    var eR = class extends N {
        constructor(a) {
            super();
            this.win = a;
            this.j = new P(!1);
            this.i = () => {
                this.j.i(this.win.document.hasFocus())
            }
        }
        init() {
            this.win.addEventListener("focus", this.i);
            this.win.addEventListener("blur", this.i);
            ys(this, () => void this.win.removeEventListener("focus", this.i));
            ys(this, () => void this.win.removeEventListener("blur", this.i));
            this.j.i(this.win.document.hasFocus())
        }
    };

    function fR(a) {
        a = new gR(a);
        a.init();
        return a
    }

    function hR(a) {
        a.i.i(a.win.document.visibilityState === "visible")
    }
    var gR = class extends N {
        constructor(a) {
            super();
            this.win = a;
            this.i = new P(!1);
            this.j = () => void hR(this)
        }
        init() {
            this.win.addEventListener("visibilitychange", this.j);
            ys(this, () => void this.win.removeEventListener("visibilitychange", this.j));
            hR(this)
        }
    };

    function iR(a) {
        a.i !== null && (a.j += a.l() - a.i);
        a.i = null
    }

    function jR(a) {
        return a.i !== null ? a.j + a.l() - a.i : a.j
    }
    var lR = class {
        constructor(a) {
            this.win = a;
            this.j = 0;
            this.i = null;
            this.l = kR(this.win)
        }
        start() {
            this.i === null && (this.i = this.l())
        }
    };

    function kR(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function mR(a) {
        a = new nR(a);
        a.init();
        return a
    }

    function oR(a) {
        var b = at(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function pR(a) {
        var b = qR(a.win),
            c = () => {
                var d = qR(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.O = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function rR(a) {
        a.A = !a.i.V;
        Js(a.i, !1, () => {
            a.win.setTimeout(() => {
                a.A = !0
            }, 100)
        })
    }

    function sR(a) {
        Is(a.i, !0, () => void a.l.start());
        Is(a.i, !1, () => void iR(a.l));
        a.J.start()
    }

    function tR(a) {
        var b = a.win.scrollY;
        var c = Mr(a.win);
        b = {
            sg: Math.floor(b / 100),
            rf: Math.floor((b + c) / 100),
            lk: a.win.performance.now()
        };
        if (b.sg < 0 || b.rf < 0 || b.sg > 1E3 || b.rf > 1E3) a.C = !0, a.j = null;
        else {
            if (a.j) {
                c = a.j;
                var d = new nG(c.sg, c.rf),
                    e = new nG(b.sg, b.rf);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new nG(f, d) : null)
                    for (c = b.lk - c.lk, d = f.start; d <= f.end; d++) a.D[d] = (a.D[d] ? ? 0) + c
            }
            a.j = a.B.V ? b : null
        }
    }
    var nR = class {
        constructor(a) {
            this.win = a;
            this.D = [];
            this.O = this.A = this.C = !1;
            this.j = null;
            var b = this.win;
            a = new eR(b);
            a.init();
            a = Fs(a.j);
            b = fR(b);
            b = Fs(b.i);
            this.B = this.i = Es(a, b);
            this.l = new lR(this.win);
            this.J = new lR(this.win);
            this.U = new cR((new cR(new XQ)).quantizer, 0)
        }
        init() {
            oR(this);
            pR(this);
            rR(this);
            sR(this);
            this.B.listen(() => void tR(this));
            t.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.B.V && tR(this)
        }
    };

    function qR(a) {
        return new Ah(Lr(a), Mr(a))
    };

    function uR(a, {
        gb: b
    }) {
        a = new vR(a, b);
        if (!a.gb && S(Uw)) {
            b = a.win;
            var c = wR(xR(a));
            (new UQ(b, b.document.baseURI, c)).init()
        }
        yR(a)
    }

    function yR(a) {
        if (S(Vw)) {
            var b = mR(a.win);
            $q(new tI(a.win), zR(() => {
                var c = xR(a),
                    d = new sn,
                    e = ZQ(b.U, b.D);
                if (!Gt(e)) throw Kt(e, "PVDC: ").i;
                var f = new rn;
                f = hf(f, 2, 5E3);
                f = hf(f, 1, 100);
                e = e.getValue();
                e = pf(f, 3, e);
                f = qR(b.win);
                var g = new qn;
                g = hf(g, 1, f.width);
                f = hf(g, 2, f.height);
                e = A(e, 4, f);
                f = new qn;
                f = hf(f, 1, Qr(b.win).scrollWidth);
                f = hf(f, 2, Qr(b.win).scrollHeight);
                e = A(e, 5, f);
                e = ff(e, 6, b.A);
                f = Math.round(jR(b.J) / 1E3);
                e = hf(e, 8, f);
                f = Math.round(jR(b.l) / 1E3);
                e = hf(e, 9, f);
                b.C && Me(e, 7, Sc, 1, Tc);
                b.O && Me(e, 7, Sc, 2, Tc);
                d = B(d, 2, tn,
                    e);
                c(d)
            }))
        }
    }

    function xR(a) {
        if (!a.i) {
            let b = cr(CI);
            a.i = c => {
                JI(b, c)
            }
        }
        return a.i
    }
    var vR = class {
        constructor(a, b) {
            this.win = a;
            this.gb = b;
            this.i = null
        }
    };

    function wR(a) {
        return b => {
            var c = new sn;
            b = B(c, 1, tn, b);
            return void a(b)
        }
    }

    function TQ() {
        return a => {
            OA(1243, a, void 0, AR("LCC"))
        }
    }

    function zR(a) {
        return () => void KA(1243, a, AR("PVC"))
    }

    function AR(a) {
        return b => {
            b.errSrc = a
        }
    };
    const BR = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };

    function CR(a) {
        if (S(Sx)) return !1;
        var b = a.google_page_location || a.google_page_url;
        "EMPTY" === b && (b = a.google_page_url);
        if (!b) return !1;
        a = b.toString();
        a.indexOf("http://") == 0 ? a = a.substring(7, a.length) : a.indexOf("https://") == 0 && (a = a.substring(8, a.length));
        b = a.indexOf("/");
        b === -1 && (b = a.length);
        a = a.substring(0, b).split(".");
        b = !1;
        a.length >= 3 && (b = a[a.length - 3] in BR);
        a.length >= 2 && (b = b || a[a.length - 2] in BR);
        return b
    };

    function DR(a, b = !1) {
        try {
            if (b) var c = (new Ah(a.innerWidth, a.innerHeight)).round();
            else {
                let d = (a || window).document,
                    e = d.compatMode == "CSS1Compat" ? d.documentElement : d.body;
                c = (new Ah(e.clientWidth, e.clientHeight)).round()
            }
            return c
        } catch (d) {
            return new Ah(-12245933, -12245933)
        }
    }

    function ER(a = t) {
        a = a.devicePixelRatio;
        return jc(a) ? +a.toFixed(3) : null
    }

    function FR(a, b = t) {
        a = a.scrollingElement || (a.compatMode === "CSS1Compat" ? a.documentElement : a.body);
        return new zh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function GR(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function HR(a, b) {
        var c = HA,
            d;
        var e;
        d = (e = (e = nr()) && (d = e.initialLayoutRect) && jc(d.top) && jc(d.left) && jc(d.width) && jc(d.height) ? new ti(d.left, d.top, d.width, d.height) : null) ? new zh(e.left, e.top) : (d = qr()) && d.rootBounds && qa(d.rootBounds) ? new zh(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            {
                let h = new zh(0, 0),
                    k = gi(di(b));
                if (qb(k, "parent")) {
                    do {
                        if (k == a) var f = Ci(b);
                        else {
                            let l = Bi(b);
                            f = new zh(l.left, l.top)
                        }
                        d = f;
                        h.x += d.x;
                        h.y += d.y
                    } while (k && k != a && k != k.parent &&
                        (b = k.frameElement) && (k = k.parent))
                }
                var g = h
            }
            return g
        } catch (h) {
            return c.Ea(888, h), new zh(-12245933, -12245933)
        }
    }

    function IR(a, b, c, d = !1) {
        a = HR(a, c);
        c = rr() || DR(b.top);
        if (!a || a.y === -12245933 || c.width === -12245933 || c.height === -12245933 || !c.height) return 0;
        var e = 0;
        try {
            let f = b.top;
            e = FR(f.document, f).y
        } catch (f) {
            return 0
        }
        b = e + c.height;
        return a.y < e ? d ? 0 : (e - a.y) / c.height : a.y > b ? (a.y - b) / c.height : 0
    };

    function JR(a) {
        a.asro = S(zx);
        a.aimartd = T(Kx);
        var b = cr(my).l(vx.i, vx.defaultValue);
        a.aiof = b.length ? b.join("~") : void 0
    };

    function KR(a) {
        a = SJ(a, 600, "__lsa__");
        var b = T(Kv);
        return a ? .length ? Math.floor((Date.now() - Math.max(...a)) / 6E4) <= b : !1
    };
    var LR = {
            mo: "google_ads_preview",
            wo: "google_anchor_debug",
            vo: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            No: "google_scr_debug",
            Po: "google_ia_debug_allow_onclick",
            Vo: "googleads",
            Ak: "google_pedestal_debug",
            bp: "google_responsive_slot_preview",
            ap: "google_responsive_dummy_ad"
        },
        MR = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var NR = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function OR(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        var c = "";
        for (let d of b.split("_")) c += d.substring(0, 2);
        b = c;
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function PR() {
        var a = t.location,
            b = !1;
        oj(LR, c => {
            OR(a, c) && (b = !0)
        });
        return b
    }

    function QR(a, b) {
        switch (a) {
            case 1:
                return OR(b, "google_ia_debug");
            case 2:
                return OR(b, "google_bottom_anchor_debug");
            case 3:
                return OR(b, "google_anchor_debug") || OR(b, "googleads")
        }
    };

    function RR({
        K: a,
        Nm: b,
        Hm: c,
        ll: d,
        Dp: e,
        Ep: f,
        G: g,
        jm: h
    }) {
        var k = 0;
        try {
            k |= Kr(a, f);
            let n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && SR(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                let p = a.innerHeight;
                var l = zj(a) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= Nr(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                TR(a, g, h) && (k |= 16777216);
                break;
            case 1:
                UR(a, g, h) && (k |= 16777216)
        }
        return k
    }

    function SR(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }

    function TR(a, b = null, c = !1) {
        var d = bG({
            tg: 0,
            sf: a.innerWidth,
            ag: 3,
            ug: 0,
            tf: Math.min(Math.round(a.innerWidth / 320 * 50), VR) + 15,
            bg: 3
        });
        return WR(a, d, b, c)
    }

    function UR(a, b = null, c = !1) {
        var d = a.innerWidth,
            e = a.innerHeight,
            f = Math.min(Math.round(a.innerWidth / 320 * 50), VR) + 15,
            g = bG({
                tg: 0,
                sf: d,
                ag: 3,
                ug: e - f,
                tf: e,
                bg: 3
            });
        f > 25 && g.push({
            x: d - 25,
            y: e - 25
        });
        return WR(a, g, b, c)
    }

    function WR(a, b, c, d) {
        return hG(YR(a, c, e => e.getAttribute("google-anchor-overlappable") !== "true"), b, d)
    }

    function YR(a, b = null, c) {
        return new kG(a, {
            lj: ZR(a, b),
            ee: c
        })
    }

    function ZR(a, b = null) {
        if (b) return (c, d, e) => {
            Ml(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const VR = 90 * 1.38;

    function $R(a, b) {
        return RR({
            K: a,
            Hm: 3E3,
            Nm: a.innerWidth > Jr ? 450 : 0,
            G: FA,
            ll: b,
            jm: S(bw)
        })
    };

    function aS(a) {
        var b = 0;
        try {
            b |= Kr(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function bS(a) {
        var b = 0;
        try {
            b |= Kr(a), b |= Nr(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function cS() {
        var a = {};
        ny(cw) && (a.bust = ny(cw));
        return a
    };

    function dS(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] ? ? 0
    }

    function eS(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function fS(a, b) {
        if (dS(b) === 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            let d = () => {
                Ki(b, "prerenderingchange", d);
                a()
            };
            Ji(b, "prerenderingchange", d)
        }
    };
    Array.from({
        length: 11
    }, (a, b) => b / 10);

    function gS(a, b = !1) {
        var c = 0;
        try {
            c |= Kr(a);
            var d;
            if (!(d = !a.navigator)) {
                var e = a.navigator;
                d = "brave" in e && "isBrave" in e.brave || !1
            }
            c |= d || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            c |= Nr(a, b ? Number.MAX_SAFE_INTEGER : 2500, !0)
        } catch (f) {
            c |= 32
        }
        return c
    };
    const hS = ["body", "html"];

    function iS(a, b = null, c) {
        var d = Kr(a);
        SR(a.navigator ? .userAgent) && (d |= 1048576);
        var e = a.innerWidth;
        e < 1200 && (d |= 65536);
        var f = a.innerHeight;
        f < 650 && (d |= 2097152);
        b && d === 0 && (b = b === 3 ? "left" : "right", (c = jS({
            K: a,
            zn: 1,
            position: b,
            ba: e,
            ca: f,
            nd: new Set,
            minWidth: 120,
            minHeight: 500,
            flags: c
        })) ? WB(a).sideRailPlasParam.set(b, `${c.width}x${c.height}_${String(b).charAt(0)}`) : d |= 16);
        return d
    }

    function kS(a) {
        a = WB(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function lS(a, b) {
        return oi(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function mS(a) {
        return oi(a, b => b.nodeType === Node.ELEMENT_NODE && b.hasAttribute("google-side-rail-overlap")) ? .getAttribute("google-side-rail-overlap") || null
    }

    function nS(a, b) {
        return oi(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function oS(a) {
        var b = [];
        for (let c of a.document.querySelectorAll("*")) {
            let d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function pS(a, b) {
        var {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function qS(a, b, c = !1) {
        var d = mS(a);
        if (d === "true") return !0;
        if (d === "false" || c && !b.flags.Oj && !b.flags.oi) return !1;
        if (b.flags.Pj && hS.includes(a.tagName.toLowerCase())) return !0;
        if (b.flags.oi) {
            let {
                width: e,
                height: f,
                top: g
            } = a.getBoundingClientRect();
            a = f >= b.ca * .25;
            d = e >= b.ba * .9;
            return c ? d && a : d ? a ? !0 : g + (b.K.scrollY || b.K.pageYOffset) > b.ca * .15 : !1
        }
        c = a.offsetHeight >= b.ca * .25;
        return a.offsetWidth >= b.ba * .9 && c
    }

    function rS(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function sS(a) {
        return `${a.position}-${rS(a.ba)}x${rS(a.ca)}-${rS(a.scrollY+a.Id)}Y`
    }

    function tS(a) {
        return `f-${sS({position:a.position,Id:a.Id,scrollY:0,ba:a.ba,ca:a.ca})}`
    }

    function uS(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function vS(a, b, c) {
        var d = WB(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.ca),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.ba);
                for (var k = c.ba * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = tS({
                            position: "left",
                            Id: f,
                            ba: c.ba,
                            ca: c.ca
                        });
                        b.set(l, uS(b.get(l), h))
                    }
                    if (h < c.ba && e > c.ba - k) {
                        l = tS({
                            position: "right",
                            Id: f,
                            ba: c.ba,
                            ca: c.ca
                        });
                        let m = c.ba - e;
                        b.set(l, uS(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function wS(a, b) {
        var c = b.K,
            d = b.flags,
            e = `f-${rS(b.ba)}x${rS(b.ca)}`;
        a.has(e) || (a.set(e, 0), e = oS(c), d.vj || d.ii ? (xS(a, b, e.filter(f => pS(c, f))), yS(c, e.filter(f => !pS(c, f)).concat(d.ii ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : xS(a, b, e))
    }

    function xS(a, b, c) {
        var d = b.nd,
            e = b.K;
        WB(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (let f of c) lS(f, d) || qS(f, b, !0) || vS(f, a, b)
    }

    function zS(a) {
        if (a.ba < 1200 || a.ca < 650) return null;
        var b = WB(a.K).sideRailAvailableSpace;
        wS(b, {
            K: a.K,
            ba: a.ba,
            ca: a.ca,
            nd: a.nd,
            flags: a.flags
        });
        var c = [],
            d = a.ca * .9,
            e = Ur(a.K),
            f = (a.ca - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    q = b,
                    r = {
                        K: a.K,
                        ba: a.ba,
                        ca: a.ca,
                        nd: a.nd,
                        flags: a.flags
                    };
                let y = tS({
                        position: p,
                        Id: n,
                        ba: r.ba,
                        ca: r.ca
                    }),
                    G = sS({
                        position: p,
                        Id: n,
                        scrollY: e,
                        ba: r.ba,
                        ca: r.ca
                    });
                if (q.has(G)) {
                    n = uS(q.get(y), q.get(G));
                    break a
                }
                let w = p === "left" ? 20 : r.ba - 20,
                    x = w;p = r.ba * .3 / 5 * (p === "left" ?
                    1 : -1);
                let C = 0,
                    H = !1;
                for (let O = 0; O < 6; O++) {
                    var v = cG(r.K.document, {
                        x: Math.round(x),
                        y: Math.round(n)
                    });
                    let ja = nS(v, r.K),
                        xa = lS(v, r.nd);
                    v = qS(v, r) || xa;
                    if (ja === null || xa)
                        if (v) C = Math.round(Math.abs(x - w) + 20);
                        else if (x !== w) x -= p, p /= 2;
                    else {
                        C = 0;
                        break
                    } else {
                        q.delete(G);
                        H = !0;
                        if (!ja || !qS(ja, r, !0)) {
                            vS(ja, q, r);
                            C = q.get(y) ? ? 0;
                            break
                        }
                        C = Math.round(Math.abs(x - w) + 20)
                    }
                    x += p
                }
                H || q.set(G, C);n = C
            }
            m.call(l, n);
            g += h
        }
        b = a.zn;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l <
            c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: f + h[k] * d
                }, q = n.width >= g && n.height >= a, b === 0 && q) {
                m = n;
                break
            } else b === 1 && q && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function yS(a, b) {
        var c = WB(a);
        if (b.length && !c.i) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    AS(a);
                    for (let e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (let e of b) d.observe(e, {
                attributes: !0
            });
            c.i = d
        }
    }

    function AS(a) {
        ({
            sideRailAvailableSpace: a
        } = WB(a));
        var b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (let c of b) a.delete(c)
    }

    function jS(a) {
        if (a.Va) return a.Va.jc(1228, () => zS(a)) || null;
        try {
            return zS(a)
        } catch {}
        return null
    };
    const BS = {
        [27]: 512,
        [26]: 128
    };
    var CS = (a, b, c, d) => {
            d = zN(d);
            switch (c) {
                case 1:
                case 2:
                    return $R(a, c) === 0;
                case 3:
                case 4:
                    return iS(a, c, {
                        vj: !0,
                        ii: !0,
                        Pj: !0,
                        Oj: S(Sw),
                        oi: S(Tw)
                    }) === 0;
                case 8:
                    return gS(a, S(Uv)) === 0;
                case 9:
                    return b = !(b.google_adtest === "on" || OR(a.location, "google_scr_debug")), !UJ(a, b, d);
                case 30:
                    return VL(a) === 0;
                case 26:
                    return bS(a) === 0;
                case 27:
                    return aS(a) === 0;
                case 40:
                    return !0;
                case 11:
                    return S(Rx);
                default:
                    return !1
            }
        },
        DS = (a, b, c, d) => {
            d = d ? zN(d) : null;
            switch (c) {
                case 0:
                case 40:
                case 10:
                    return 0;
                case 11:
                    if (S(Rx)) {
                        b = 0;
                        try {
                            b |= Kr(a), b |=
                                !a.navigator || a.navigator.i ? .up || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
                        } catch (e) {
                            b |= 32
                        }
                        a = b
                    } else a = 0;
                    return a;
                case 1:
                case 2:
                    return $R(a, c);
                case 3:
                case 4:
                    return iS(a, c, {
                        vj: !1,
                        ii: !1,
                        Pj: !1,
                        Oj: S(Sw),
                        oi: S(Tw)
                    });
                case 8:
                    return gS(a, S(Uv));
                case 9:
                    return UJ(a, !(b.google_adtest === "on" || OR(a.location, "google_scr_debug")), d);
                case 16:
                    return IL(b, a) ? 0 : 8388608;
                case 30:
                    return VL(a);
                case 26:
                    return bS(a);
                case 27:
                    return aS(a);
                default:
                    return 32
            }
        },
        ES = a => {
            if (!a.hash) return null;
            var b = null;
            oj(LR, c => {
                !b && OR(a,
                    c) && (b = MR[c] || null)
            });
            return b
        },
        GS = (a, b) => {
            var c = WB(a).tagSpecificState[1] || null;
            c !== null && c.debugCard == null && oj(NR, d => {
                !c.debugCardRequested && jc(d) && QR(d, a.location) && (c.debugCardRequested = !0, FS(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        IS = (a, b, c) => {
            if (!b) return null;
            var d = WB(b),
                e = 0;
            oj(Gh, f => {
                var g = BS[f];
                g && HS(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? `${e}` : null
        },
        JS = (a, b, c) => {
            var d = [];
            oj(Gh, e => {
                var f = HS(b, a, e, c);
                f !== 0 && d.push(`${e}:${f}`)
            });
            return d.join(",") || null
        },
        KS = a => {
            var b = [],
                c = {};
            oj(a, (d, e) => {
                if ((e = Hr[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(`${e}:${d}`)
                }
            });
            return b.join(",")
        };

    function LS(a) {
        a = a.overlays;
        if (!a) return "";
        a = a.bottom;
        return lc(a) ? a ? "1" : "0" : ""
    }

    function MS(a) {
        return (a = a.overlays) ? a["collapsed-bottom"] === !0 : !1
    }
    var HS = (a, b, c, d) => {
            if (!b) return 256;
            var e = 0,
                f = WB(b),
                g = Rr(f, c);
            if (a.google_reactive_ad_format === c || g) e |= 64;
            var h = !1;
            oj(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            return h && ES(b.location) !== c && (e |= 128, c === 2 || c === 1 || c === 3 || c === 4 || c === 8) ? e : e | DS(b, a, c, d)
        },
        NS = (a, b) => {
            if (a) {
                var c = WB(a),
                    d = {};
                oj(b, (e, f) => {
                    (f = Hr[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                oj(Gh, e => {
                    d[Ir[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        OS = (a, b, c) => {
            b = LA(b, c);
            c = { ...cS()
            };
            return LQ(1, window,
                kh(a, new Map(Object.entries(c)))).then(b)
        },
        FS = (a, b, c) => {
            c = LA(212, c);
            LQ(3, a, b).then(c)
        },
        PS = a => {
            a = a.google_reactive_ad_format;
            return Fh(a) ? `${a}` : null
        },
        QS = a => !!PS(a) || a.google_pgb_reactive != null,
        RS = a => {
            a = Number(PS(a));
            return a === 26 || a === 27 || a === 30 || a === 16 || a === 40 || a === 41 || a === 44
        };

    function SS(a) {
        return jc(a.google_reactive_sra_index)
    }

    function TS(a) {
        return S(Qx) ? (a = a.google_ama_state = a.google_ama_state || {}, (a.numAutoAdsPlaced ? ? 0) > 0 || (a.eatf ? ? !1) || (a.eatfAbg ? ? !1)) : !1
    }

    function US(a, b, c, d) {
        c && OJ(c) ? (c = d(c, 86400), c ? .length && (c = Math.floor((Date.now() - Math.max(...c)) / 6E4), c >= 0 && (a[b] = c))) : a[b] = -1
    }

    function VS(a, b, c) {
        var d = b.K || b.pubWin,
            e = b.I,
            f = zN(c);
        c = JS(d, e, c);
        e.google_reactive_plat = c;
        (c = KS(a)) && (e.google_reactive_plaf = c);
        (c = LS(a)) && (e.google_reactive_fba = c);
        WS(a, e);
        c = ES(b.pubWin.location);
        XS(a, c, e);
        c ? (e.fra = c, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        JR(e);
        e.fsapi = !0;
        c !== 8 && US(e, "vmsli", f, RJ);
        S(Rx) && c !== 11 && US(e, "rmsi", f, TJ);
        MS(a) ? e.dap = 2 : KR(f) && (e.dap = 3);
        TS(d) && !e.dap && (e.dap = 5);
        rr() || DR(b.pubWin.top);
        c = pQ(b.pubWin, "rsrai", LA(429, (g, h) => YS(b, d, e.google_ad_client, a, g, h, f)), LA(430,
            (g, h) => Xr(b.pubWin, "431", FA, h)));
        b.Ia.push(c);
        WB(d).wasReactiveTagRequestSent = !0;
        ZS(b, a, f)
    }

    function ZS(a, b, c) {
        var d = a.I,
            e = qa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = pQ(a.pubWin, "apcnf", LA(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.Sa.yg;
            return dk(g.origin) ? NQ(h, k, e, f.config, c, l, null) : !1
        }), LA(353, (f, g) => Xr(a.pubWin, "353", FA, g)));
        a.Ia.push(b)
    }

    function YS(a, b, c, d, e, f, g) {
        if (!dk(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!nI(b, 1)) return !0;
        f && Wk(6, [f]);
        e = e.amaConfig;
        var h = [],
            k = WB(b),
            l = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            let p = f[n];
            var m = p.adFormat;
            k && p.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[m] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (m === 9 && e && (p.pubVars = Object.assign(p.pubVars || {}, $S(d, p)), m = new VJ, MJ(m, p) && m.B(p))) {
                    l = m;
                    continue
                }
                h.push(p)
            }
        }
        h.length && OS(a.Sa.Vj, 522, n => {
            aT(h, b, n, d, g)
        });
        e &&
            NQ(b, c, d, e, g, a.Sa.yg, l);
        return !0
    }

    function $S(a, b) {
        var c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        var e = {};
        a = a.page_level_pubvars;
        qa(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function aT(a, b, c, d, e) {
        for (let f = 0; f < a.length; f++) {
            let g = a[f],
                h = g.adFormat,
                k = g.adKey,
                l = c.configProcessorForAdFormat(h);
            h && l && k && (g.pubVars = $S(d, g), delete g.google_reactive_sra_index, KA(466, () => l.verifyAndProcessConfig(b, g, e)))
        }
    }

    function WS(a, b) {
        var c = [],
            d = !1;
        oj(Hr, (e, f) => {
            var g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function XS(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    const bT = /^blogger$/,
        cT = /^wordpress(.|\s|$)/i,
        dT = /^joomla!/i,
        eT = /^drupal/i,
        fT = /\/wp-content\//,
        gT = /\/wp-content\/plugins\/advanced-ads/,
        hT = /\/wp-content\/themes\/genesis/,
        iT = /\/wp-content\/plugins\/genesis/;

    function jT(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (gT.test(e)) return 5;
                if (iT.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", hT.test(e) || iT.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (bT.test(f)) return 1;
                if (cT.test(f)) return 2;
                if (dT.test(f)) return 3;
                if (eT.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", fT.test(d))) return 2;
        return 0
    };
    var kT = class extends Error {
            constructor(a) {
                super(a)
            }
        },
        lT = class {
            constructor(a) {
                this.reason = a
            }
        };
    class mT {
        constructor() {
            this.i = !1
        }
    }

    function nT(a, b) {
        a.i || (a.i = !0, a.A = b, a.l.resolve(b))
    }

    function oT(a, b, c) {
        a.i = !0;
        a.j = b;
        c && c(a.j);
        a.l.reject(b)
    }
    class pT extends mT {
        constructor() {
            super(...arguments);
            this.l = new tQ
        }
        get promise() {
            return this.l.promise
        }
        get Zj() {
            return this.i
        }
        get error() {
            return this.j
        }
    }

    function qT(a, b) {
        nT(a, b)
    }

    function rT(a, b) {
        b.then(c => {
            nT(a, c)
        }).catch(c => {
            a.setError(c, void 0)
        })
    }
    var sT = class extends pT {
        setError(a, b) {
            this.i || (this.i = !0, this.A = null, this.j = a, b && b(this.j), this.l.reject(a))
        }
    };
    class tT extends mT {
        constructor(a) {
            super();
            this.l = a
        }
        get error() {
            return this.l.j
        }
        Zj() {
            return this.l.i
        }
    }
    var uT = class extends tT {
        constructor(a) {
            super(a);
            this.l = a
        }
        get value() {
            return this.l.A ? ? null
        }
    };

    function vT(a, b, c) {
        b.then(() => {
            a.notify()
        }).catch(d => {
            oT(a, d, c)
        })
    }
    var wT = class extends pT {
            notify() {
                nT(this, null)
            }
        },
        xT = class extends sT {
            constructor(a, b = !1) {
                super();
                a = a.map(c => c.promise.then(d => {
                    if (b || d != null) return d;
                    throw d;
                }, d => {
                    oT(this, d);
                    return null
                }));
                ia(Promise, "any").call(Promise, a).then(c => {
                    this.i || nT(this, c)
                }, () => {
                    this.i || nT(this, null)
                })
            }
        };

    function yT(a, b) {
        a.i.push({
            Ze: !1,
            ih: b
        })
    }
    var zT = class extends N {
        constructor() {
            super(...arguments);
            this.j = [];
            this.i = [];
            this.l = []
        }
        Ze(a) {
            var b = this.i.find(c => c.ih === a);
            b && (b.Ze = !0)
        }
        W() {
            this.j.length = 0;
            this.l.length = 0;
            this.i.length = 0;
            super.W()
        }
    };
    async function AT(a, b) {
        var c = b ? a.filter(d => !d.Ze) : a;
        await Promise.all(c.map(({
            ih: d
        }) => d.promise));
        a.length !== c.length && (a = a.filter(d => d.Ze), await Promise.race([Promise.all(a.map(({
            ih: d
        }) => d.promise)), new Promise(d => void setTimeout(d, b))]))
    }

    function BT(a, b = new sT) {
        a.j.j.push(b);
        return b
    }
    var CT = class extends N {
        constructor(a, b) {
            super();
            this.id = a;
            this.C = b;
            this.timeoutMs = void 0;
            this.B = !1;
            this.j = new zT;
            xs(this, this.j)
        }
        async start() {
            if (!this.B) {
                this.B = !0;
                try {
                    if (await AT(this.j.i, this.Z ? ? this.timeoutMs), !this.ka) {
                        let a = 0;
                        for (let b of this.j.l) {
                            if (b.l.A == null) throw Error(`missing input: ${this.id}/${a}`);
                            ++a
                        }
                        this.U()
                    }
                } catch (a) {
                    this.ka || (a instanceof kT ? this.O(a) : a instanceof Error && (this.C.Aa({
                        methodName: this.id,
                        Ha: a
                    }), this.i(a)))
                }
            }
        }
        O() {}
        i(a) {
            if (this.j.j.length) {
                var b = new kT(a.message);
                for (let c of this.j.j) c.Zj || oT(c, b)
            }
            a instanceof kT || console ? .error(a)
        }
    };

    function DT(a) {
        var b = {};
        for (let [c, d] of Object.entries(a.inputs)) b[c] = d.value;
        return b
    }

    function W(a, b) {
        if (a.B) throw Error("Invalid operation: producer has already started");
        yT(a.j, b);
        return a
    }
    var ET = class extends CT {
        constructor(a, b, c, d, e) {
            super(a, c);
            this.f = b;
            this.J = e;
            a = {};
            for (let [f, g] of Object.entries(d))
                if (d = g) yT(this.j, d), a[f] = new uT(d);
            this.inputs = a
        }
        U() {
            var a = this.f(DT(this), ...this.J);
            this.l(a)
        }
        O(a) {
            this.i(a)
        }
        reportError() {}
    };
    class FT extends ET {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, c, d, g);
            this.va = f;
            this.finished = new wT;
            a = Object.keys(e);
            for (let h of a) this[h] = BT(this)
        }
        l(a) {
            for (let [b, c] of Object.entries(a)) {
                a = b;
                let d = c;
                d instanceof Error && this[a].setError(d);
                d instanceof lT || nT(this[a], d)
            }
            this.finished.notify()
        }
        i(a) {
            this.va ? this.l(this.va(a)) : super.i(a)
        }
    }

    function X(a, b) {
        a.id = b.id;
        a.H = b.H;
        a.va = b.va;
        return a
    }

    function GT(a, b, c, ...d) {
        return new FT(a.id, a, b, c, a.H, a.va, d)
    };

    function HT(a, b) {
        a = b.PygXN.map(c => {
            var d = new Zi;
            d = of (d, 1, c.aJhyn);
            c = Ce(d, 2, sf, qd(c.ihulF));
            return ef(c, 4, !1)
        });
        a = a.length > 0 ? cj($i(), a) : cj(new aj, []);
        return {
            Me: a,
            og: [a]
        }
    }
    var IT = X(HT, {
        id: 1377,
        H: {
            Me: void 0,
            og: void 0
        }
    });
    var JT = {
        Zi: [],
        Wi: 0,
        ej: [],
        zp: !1,
        Yj: !1
    };

    function KT(a, b = window, c = () => {}) {
        try {
            return b.localStorage.getItem(a)
        } catch (d) {
            return c(d), null
        }
    }

    function LT(a, b, c = window, d = () => {}) {
        return b.ga() ? KT(a, c, d) : null
    }

    function MT(a, b, c = window, d = () => {}) {
        try {
            return c.localStorage.setItem(a, b), !0
        } catch (e) {
            d(e)
        }
        return !1
    }

    function NT(a, b, c, d = window, e = () => {}) {
        return c.ga() ? MT(a, b, d, e) : !1
    }

    function OT(a, b = window, c = () => {}) {
        try {
            b.localStorage.removeItem(a)
        } catch (d) {
            c(d)
        }
    }

    function PT(a, b, c = window, d = () => {}) {
        b.ga() && OT(a, c, d)
    }

    function QT(a = window, b = () => {}) {
        try {
            return a.localStorage.length
        } catch (c) {
            b(c)
        }
        return null
    }

    function RT(a) {
        var b = window,
            c = () => {};
        return a.ga() ? QT(b, c) : null
    }

    function ST(a, b = window, c = () => {}) {
        try {
            return b.localStorage.key(a)
        } catch (d) {
            c(d)
        }
        return null
    }

    function TT(a, b) {
        var c = window,
            d = () => {};
        return b.ga() ? ST(a, c, d) : null
    }

    function UT(a = window, b = () => {}) {
        try {
            return Object.keys(a.localStorage)
        } catch (c) {
            b(c)
        }
        return null
    }

    function VT(a) {
        var b = window,
            c = () => {};
        return a.ga() ? UT(b, c) : null
    };
    class WT {
        static qj() {
            throw Error("Must be overridden");
        }
    }
    class XT extends WT {
        constructor() {
            super(...arguments);
            this.i = 0
        }
    }(function() {
        var a = XT;
        a.Gc = void 0;
        a.qj = function() {
            return a.Gc ? a.Gc : a.Gc = new a
        }
    })();

    function YT(a, b, c = null, d = {}, e) {
        var f = XT.qj(),
            g = e ? .bk ? ? 1E3;
        f.i === 0 && (f.i = Math.random() < 1 / g ? 2 : 1);
        f.i === 2 && (e && xp(e.G, ZT(a, b, c, d, e.Wh, g)), e ? .gk || jk({
            c: String(a),
            pc: String(ek(window)),
            em: c,
            lid: b,
            eids: Zq().join(),
            ...d
        }, "esp"))
    }

    function ZT(a, b, c = null, d = {}, e, f) {
        var g = new To;
        a = I(g, 1, a);
        e = Hj(window, e);
        e = kf(a, 2, e);
        c = pf(e, 3, c);
        b = pf(c, 4, b);
        c = Zq();
        b = Ae(b, 5, c, Uc);
        f = hf(b, 8, f);
        d.sl && mf(f, 6, Uo, Number(d.sl));
        d.url && Ce(f, 7, Uo, qd(d.url));
        return f
    };

    function $T(a, b = () => {}) {
        return new Promise(c => {
            var d = () => {
                c(b());
                Ki(a, "load", d)
            };
            Ji(a, "load", d)
        })
    }

    function aU(a) {
        var b = () => {};
        return a.document ? .readyState === "complete" ? Promise.resolve(void 0) : $T(a, b)
    }

    function bU(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$"),
            d = RT(a);
        for (let f = 0; f < (d ? ? 0); f++) {
            var e = TT(f, a);
            if (e === null) continue;
            (e = (c.exec(e) || [])[1]) && b.push(e)
        }
        return b
    };

    function cU() {
        dU || (dU = new eU);
        return dU
    }

    function fU(a) {
        var b = tv(Re(a, 3));
        if (!b) return 3;
        if (cf(a, 2) === void 0) return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    }

    function gU(a, b, c, d) {
        function e(g) {
            YT(8, b, g ? .message, {}, f)
        }
        var f;
        d ? OT(`_GESPSK-${b}`, window, e) : PT(`_GESPSK-${b}`, c, window, e);
        delete a.cache[b]
    }
    var eU = class {
            constructor() {
                this.cache = {}
            }
            get(a, b, c, d) {
                function e(h) {
                    YT(6, a, h ? .message, {}, d);
                    f = !0
                }
                if (this.cache[a]) return {
                    T: this.cache[a],
                    success: !0
                };
                var f = !1,
                    g = `_GESPSK-${a}`;
                b = c ? KT(g, window, e) : LT(g, b, window, e);
                if (f) return {
                    T: null,
                    success: !1
                };
                if (!b) return {
                    T: null,
                    success: !0
                };
                try {
                    let h = lj(b);
                    this.cache[a] = h;
                    return {
                        T: h,
                        success: !0
                    }
                } catch (h) {
                    return YT(5, a, h ? .message, {}, d), {
                        T: null,
                        success: !1
                    }
                }
            }
            set(a, b, c, d) {
                function e(h) {
                    YT(7, f, h ? .message, {}, d)
                }
                var f = a.lb(),
                    g = `_GESPSK-${f}`;
                jj(a);
                if (c ? !MT(g, cg(a), window,
                        e) : !NT(g, cg(a), b, window, e)) return !1;
                this.cache[f] = a;
                return !0
            }
        },
        dU = null;

    function hU(a, b, c) {
        return !!a.i ? .get(c) ? .get(b) ? .some(d => D(d, 4))
    }

    function iU(a, b) {
        for (let c of a.i.values())
            if (c.get(b) ? .some(d => D(d, 4))) return !0;
        return !1
    }

    function jU(a, b, c) {
        var d = new Set;
        a = a.i.get(b);
        if (!a) return d;
        for (let [e, f] of a.entries()) a = e, f.some(g => c(g)) && d.add(a);
        return d
    }

    function kU(a, b) {
        return jU(a, b, c => D(c, 4))
    }
    var lU = class {
        constructor(a) {
            var b = new Map;
            for (let c of a) {
                a = E(c, 1);
                let d = b.get(a) ? ? new Map;
                for (let e of bj(c)) {
                    let f = e.lb();
                    d.has(f) || d.set(f, []);
                    d.get(f).push(e)
                }
                b.set(a, d)
            }
            this.i = b
        }
    };

    function mU(a, b) {
        return [].some(c => hU(b, a, c))
    };

    function nU(a, b, c, d) {
        ({
            Me: a
        } = HT({}, a.pageState.jzoix)); {
            var e = [a];
            a = new Map;
            YT(56, "", null, void 0, d);
            var f = a;
            e = new lU(e ? ? []);
            var g = Array,
                h = g.from,
                k = [];
            let n = new Set(bU(c));
            for (var l of k)
                for (var m of kU(e, l)) n.add(m);
            l = h.call(g, n);
            for (let p of l) {
                if (f.get(p) ? .i()) continue;
                ({
                    T: l
                } = cU().get(p, c, mU(p, e), d));
                if (!l) continue;
                m = fU(l);
                if (m === 2 || m === 3) continue;
                ef(l, 9, !1);
                (m = cf(l, 2)) && m.length > 1024 && (YT(55, p, null, {
                    sl: String(m.length)
                }, d), m = l.setError(gj(108)), je(m, 2));
                f.set(p, l);
                l = cf(l, 2);
                YT(19, p, null, {
                    hs: l ?
                        "1" : "0",
                    sl: String(l ? .length ? ? -1)
                }, d)
            }
            c = new mj;
            for (let [, p] of a) Ne(c, 2, kj, p);
            Je(c, kj, 2, re()).length ? (YT(50, "", null, {
                ns: String(Je(c, kj, 2, re()).length)
            }, d), d = c.i(), d = yb(d, 3)) : d = null
        }
        d && (b.a3p = d)
    };

    function oU(a) {
        var b = {};
        b.dtd = pU((new Date).getTime(), Br);
        return ur(b, a)
    }

    function pU(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    const qU = pb("script");
    var rU = class {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, n = null) {
            this.C = a;
            this.Ub = b;
            this.na = c;
            this.i = d;
            this.J = e;
            this.Ja = f;
            this.zb = g;
            this.A = h;
            this.B = k;
            this.j = l;
            this.l = m;
            this.D = n
        }
        size() {
            return this.Ub
        }
    };
    var sU = class {
        constructor(a, b) {
            this.pa = a;
            this.height = b
        }
        i(a) {
            return a > 300 && this.height > 300 ? this.pa : Math.min(1200, Math.round(a))
        }
    };
    var tU = class extends sU {
        j() {}
    };
    const uU = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var vU = {
            "image-top": 0,
            "image-middle": 1,
            "image-side": 2,
            "text-only": 3,
            "in-article": 4
        },
        wU = class extends tU {
            constructor(a, b) {
                super(a, b)
            }
            i() {
                return Math.min(1200, this.pa)
            }
        };

    function xU(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = JL(b, c, g, T(Yv), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = Lr(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            let k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                let m = k[l];
                                if (m !== g && ML(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    QL(b, c)
                }
            else a = g;
            else a = g
        }
        if (a <
            250) throw new EA(`Fluid responsive ads must be at least 250px wide: availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new EA(`Fluid responsive ads must be at least 50px tall: height=${f}`);
            return new rU(11, new tU(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [], e = 0; e < d; e++) b.push(parseInt(c[e], 36) / 1E3);
            else b = null;
            if (!b) throw new EA(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new EA(`Invalid height: height=${f}`);
            if (f < 50) throw new EA(`Fluid responsive ads must be at least 50px tall: height=${f}`);
            if (f > 1200) throw new EA(`Fluid responsive ads must be at most 1200px tall: height=${f}`);
            return new rU(11, new tU(a, f))
        }
        d = uU[f];
        if (!d) throw new EA("Invalid data-ad-layout value: " + f);
        c = xy(c, b);
        e = Mr(b);
        c = c < e - 100;
        b = Lr(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) *
            1.25);
        return new rU(11, f === "in-article" ? new wU(a, b) : new tU(a, b))
    };

    function yU(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function zU(a, b = "") {
        return AU(a, b, c => db(Je(c, dj, 2, re()), d => df(d, 1) === 1))
    }

    function AU(a, b, c) {
        a = uj(a) || a;
        var d = BU(a);
        b && (b = Ar(String(b)));
        return Eh(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function BU(a) {
        a = CU(a, !1);
        var b = {};
        oj(a, (c, d) => {
            try {
                let e = eg(fj, Pd(c));
                b[d] = e
            } catch (e) {}
        });
        return b
    }

    function CU(a, b) {
        a = ON({
            win: a,
            gb: b
        });
        return Gt(a) ? DU(a.getValue()) : {}
    }

    function DU(a) {
        try {
            let b = a.getItem("google_adsense_settings");
            if (!b) return {};
            let c = JSON.parse(b);
            return c !== Object(c) ? {} : Dh(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && kc(e) && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function EU(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function FU(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    };

    function GU(a = Dj()) {
        return b => Qt(`${b} + ${a}`) % 1E3
    };

    function HU(a, b) {
        a.i = dr(14, b, () => {})
    }
    class IU {
        constructor() {
            this.i = () => {}
        }
    }

    function JU(a) {
        cr(IU).i(a)
    };

    function KU(a = EU()) {
        er(cr(fr), a);
        LU(a);
        HU(cr(IU), a);
        cr(my).i()
    }

    function LU(a) {
        var b = cr(my);
        b.j = (c, d) => dr(5, a, () => !1)(c, d, 1);
        b.C = (c, d) => dr(18, a, () => null)(c, d, 1);
        b.A = (c, d) => dr(6, a, () => 0)(c, d, 1);
        b.B = (c, d) => dr(7, a, () => "")(c, d, 1);
        b.D = (c, d) => dr(8, a, () => [])(c, d, 1);
        b.l = (c, d) => dr(17, a, () => [])(c, d, 1);
        b.i = () => {
            dr(15, a, () => {})(1)
        }
    };
    const MU = {
        gfpCookie: null,
        parsedGfpCookie: {
            id: null,
            creationTimeSeconds: null
        }
    };

    function NU(a) {
        var b = a.split(":");
        a = b.find(c => c.indexOf("ID") === 0) || null;
        b = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null;
        return {
            id: a,
            creationTimeSeconds: b
        }
    }

    function OU(a, b) {
        a = a.get("__gads", b);
        if (!a) return MU;
        b = NU(a);
        return {
            gfpCookie: a,
            parsedGfpCookie: b
        }
    };

    function PU(a, b, c, d) {
        b = {
            [0]: GU(ek(b).toString())
        };
        if (c && d) {
            c = OU(d, c);
            d = AJ();
            c.gfpCookie && !d.i && (d.i = c.parsedGfpCookie.id, d.l = c.parsedGfpCookie.creationTimeSeconds);
            JU(d.j);
            let e = c.parsedGfpCookie.id;
            b[1] = f => e ? GU(e)(f) : void 0
        }
        b = gr(a, b);
        lr(DI(cr(CI), a, b))
    }

    function QU(a) {
        var b = Zq();
        a = yU(a);
        return b.concat(a).join(",")
    }

    function RU(a) {
        var b = el();
        b && (a.debug_experiment_id = b)
    };
    var SU = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_intent_rs_token: "afdt",
        google_ad_output: "output",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_language: "hl",
        google_max_num_ads: "num_ads",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intents_encoded_verticals4_ids: "ait_v",
        google_ad_intents_encoded_browseonomy_ids: "ait_b",
        google_ad_intents_format: "ait_f",
        google_ad_intents_in_drawer_format: "ait_df",
        google_ad_intents_ad_position: "ait_pos",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        abgtt: "abgtt",
        google_ad_width: "w",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_last_modified_time: "lmt",
        google_enable_content_recommendations: "ecr",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_pucrd: "pucrd",
        google_cust_criteria: "cust_params",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_for_age_treatment: "tfat",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_kw: "kw",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_country: "gl",
        google_alternate_ad_url: "alternate_ad_url",
        google_region: "gr",
        google_image_size: "image_size",
        google_video_doc_id: "video_doc_id",
        google_content_recommendation_ui_type: "crui",
        sso: "sso",
        google_color_line: "color_line",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        google_tfs: "tfs",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        aiof: "aiof",
        asro: "asro",
        vmsli: "itsi",
        rmsi: "rmsi",
        dap: "dap",
        aimartd: "aimartd",
        aieuf: "aieuf",
        aicrs: "aicrs"
    };

    function TU(a) {
        a.i === -1 && (a.i = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.i
    }
    var UU = class {
        constructor() {
            this.data = [];
            this.i = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.i = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function VU() {
        var a = new UU;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        var b = Sj();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return TU(a)
    };

    function WU(a, b, {
        ln: c,
        mn: d
    }) {
        return D(b, 17) && (!c && b.ga() || !d) && CN(a) ? !0 : !1
    };
    var XU = class {
        constructor() {
            this.i = HA
        }
        Aa(a) {
            var b = a.Ha;
            this.i.Ea(a.methodName ? ? 0, b instanceof Error ? b : Error(String(b)))
        }
    };
    var YU = function(a) {
        return b => ug(b, a)
    }(SN);
    var ZU = () => {
        var a = new Map;
        a.set(1, "All in One SEO (AIOSEO)");
        a.set(2, "All in One SEO Pro (AIOSEO)");
        a.set(3, "AMP for WP");
        a.set(4, "Site Kit by Google");
        a.set(5, "Elementor");
        a.set(6, "Powered by WPBakery Page Builder - drag and drop page builder for WordPress.");
        return a
    };
    var $U = () => {
        var a = new Map;
        a.set(1, "WordPress");
        a.set(2, "Drupal");
        a.set(3, "MediaWiki");
        a.set(4, "Blogger");
        a.set(5, "SEOmatic");
        a.set(7, "Flutter");
        a.set(8, "Joomla! - Open Source Content Management");
        a.set(9, "React");
        a.set(10, "Angular");
        a.set(11, "Vue");
        return a
    };

    function aV(a) {
        return a.querySelector("[ng-version]") != null || a.querySelector('[class*="_ngcontent-"]') != null
    };

    function bV(a, {
        Ej: b
    }) {
        return Array.from(a.querySelectorAll("div")).slice(0, b).some(c => Object.keys(c).some(d => d.startsWith("__react")))
    };

    function cV(a) {
        return Array.from(a.querySelectorAll("*")).slice(0, 1E3).some(b => Object.keys(b).some(c => c.startsWith("__vue")))
    };

    function dV(a = document) {
        var b = {
                Ej: T(Qw)
            },
            c = [],
            d = [];
        for (var e of Array.from(a.querySelectorAll("meta[name=generator][content]"))) {
            if (!e) continue;
            var f = e.getAttribute("content") ? ? "";
            let [, l, m] = /^([^0-9]+)(?:\s([0-9]+(?:\.[0-9]+){0,2})[.0-9]*)?[^0-9]*$/.exec(f) ? ? [];
            var g = new RN;
            m && of (g, 3, m.substring(0, 20));
            var h = void 0;
            let n;
            if (l) {
                for (let [p, q] of $U().entries()) {
                    var k = p;
                    if (q === l.trim()) {
                        h = k;
                        break
                    }
                }
                for (let [p, q] of ZU().entries())
                    if (k = p, q === l.trim()) {
                        n = k;
                        break
                    }
            }
            n ? (f = qf(g, 1, 1), qf(f, 2, n)) : h ? qf(g, 1, h) : (k =
                qf(g, 1, 0), je(k, 3), d.push({
                    content: f,
                    name: l,
                    version: m
                }));
            c.push(g)
        }
        e = [];
        b.Ej > 0 && e.push({
            label: 9,
            Eh: bV
        });
        e.push({
            label: 10,
            Eh: aV
        });
        e.push({
            label: 11,
            Eh: cV
        });
        for (let l of e) l.Eh(a, b) && (e = c, g = e.push, h = new RN, h = qf(h, 1, l.label), g.call(e, h));
        return {
            labels: c,
            Cp: d
        }
    };
    var eV = class extends N {
        constructor() {
            super();
            this.value = null
        }
        get() {
            return this.value
        }
    };
    const fV = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        gV = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function hV(a) {
        try {
            let b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (a.document.prerendering || (b ? .activationStart ? ? 0) > 0) return 4;
            if (b ? .deliveryType === "navigational-prefetch") return 6;
            if (b ? .deliveryType === "cache") return 7;
            if (b ? .type) return fV.get(b.type) ? ? null
        } catch {}
        return gV.get(a.performance ? .navigation ? .type) ? ? null
    };

    function Y(a) {
        return `${a}px`
    };

    function iV(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        ui(a, "transition", b.join(","))
    }
    const jV = sh(function() {
        var a = hi(document, "DIV"),
            b = vb ? "-webkit" : tb ? "-moz" : null,
            c = "transition:opacity 1s linear;";
        b && (c += b + "-transition:opacity 1s linear;");
        Rh(a, gh("div", {
            style: c
        }));
        return zi(a.firstChild, "transition") != ""
    });

    function kV(a, b, c) {
        a.j[b].indexOf(c) < 0 && (a.j[b] += c)
    }

    function lV(a, b) {
        a.i.indexOf(b) >= 0 || (a.i = b + a.i)
    }

    function mV(a, b) {
        a.errors.indexOf(b) < 0 && (a.errors = b + a.errors)
    }

    function nV(a, b, c, d) {
        return a.errors != "" || b ? null : a.i.replace(oV, "") == "" ? c != null && a.j[0] || d != null && a.j[1] ? !1 : !0 : !1
    }

    function pV(a) {
        var b = nV(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.i;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var qV = class {
        constructor(a, b) {
            this.j = ["", ""];
            this.i = a || "";
            this.errors = b || ""
        }
        toString() {
            return [this.j[0], this.j[1], this.i, this.errors].join("|")
        }
    };

    function rV(a) {
        var b = a.qa;
        a.J = () => {};
        sV(a, a.D, b);
        var c = a.D.parentElement;
        if (!c) return a.i;
        for (var d = !0, e = null; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Kj(c, b)
            } catch (g) {
                mV(a.i, "c")
            }
            let f = tV(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.ma = !0);
            if (d && !f && uV(e)) {
                lV(a.i, "l");
                a.O = c;
                break
            }
            d = d && f;
            if (e && vV(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !rj(b)) {
                        lV(a.i, "c");
                        break
                    }
                } catch (g) {
                    lV(a.i,
                        "c");
                    break
                }
            }
        }
        a.C && a.B && wV(a);
        return a.i
    }

    function xV(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) ui(k, m[n], "0px")
        }

        function c() {
            yV(d, g, h);
            !k || l || h || (b(zV), b(AV))
        }
        var d = a.D;
        d.style.overflow = a.Ye ? "visible" : "hidden";
        a.C && (a.O ? (iV(d, BV()), iV(a.O, BV())) : iV(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.Z !== null && (d.style.opacity = String(a.Z));
        var e = a.width != null && a.l != null && (a.jg || a.l > a.width) ? a.l : null,
            f = a.height != null && a.j != null && (a.jg || a.j > a.height) ? a.j : null;
        if (a.U) {
            let m =
                a.U.length;
            for (let n = 0; n < m; n++) yV(a.U[n], e, f)
        }
        var g = a.l,
            h = a.j,
            k = a.O,
            l = a.ma;
        a.C ? t.setTimeout(c, 1E3) : c()
    }

    function CV(a) {
        if (a.B && !a.Za || a.l == null && a.j == null && a.Z == null && a.B) return a.i;
        var b = a.B;
        a.B = !1;
        rV(a);
        a.B = b;
        if (!b || a.check != null && !nV(a.i, a.check, a.l, a.j)) return a.i;
        a.i.i.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.l !== null || a.height == null && a.j !== null) a.C = !1;
        (a.l == 0 || a.j == 0) && a.i.i.indexOf("l") >= 0 && (a.l = 0, a.j = 0);
        b = a.i;
        b.j[0] = "";
        b.j[1] = "";
        b.i = "";
        b.errors = "";
        xV(a);
        return rV(a)
    }

    function vV(a, b) {
        var c = !1;
        b.display == "none" && (lV(a.i, "n"), a.B && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || lV(a.i, "v");
        b.overflow == "hidden" && lV(a.i, "o");
        b.position == "absolute" ? (lV(a.i, "a"), c = !0) : b.position == "fixed" && (lV(a.i, "f"), c = !0);
        return c
    }

    function sV(a, b, c) {
        var d = 0;
        if (!b || !b.parentElement) return !0;
        var e = !1,
            f = 0,
            g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = DV(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && kV(a.i, 0, "o"), d & 4 && kV(a.i, 1, "o"));
        return !(d & 1)
    }

    function tV(a, b, c, d) {
        var e = null;
        try {
            e = c.style
        } catch (v) {
            mV(a.i, "s")
        }
        var f = c.getAttribute("width"),
            g = Nj(f),
            h = c.getAttribute("height"),
            k = Nj(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = sV(a, c, b);
        var m = d && d.width,
            n = d && d.height,
            p = e && e.width,
            q = e && e.height,
            r = Oj(m) == a.width && Oj(n) == a.height;
        m = r ? m : p;
        q = r ? n : q;
        p = Oj(m);
        r = Oj(q);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        r = a.height !== null && (r !== null && a.height >= r || k !== null && a.height >= k);
        k = !b && uV(d);
        r = b || r || k || !(f || m || d && (!EV(String(d.minWidth)) ||
            !FV(String(d.maxWidth))));
        l = b || g || k || l || !(h || q || d && (!EV(String(d.minHeight)) || !FV(String(d.maxHeight))));
        GV(a, 0, r, c, "width", f, a.width, a.l);
        HV(a, 0, "d", r, e, d, "width", m, a.width, a.l);
        HV(a, 0, "m", r, e, d, "minWidth", e && e.minWidth, a.width, a.l);
        HV(a, 0, "M", r, e, d, "maxWidth", e && e.maxWidth, a.width, a.l);
        a.ui ? (c = /^html|body$/i.test(c.nodeName), f = Oj(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.j != null && d && f && Math.round(f) !== a.j && !h && d.minHeight !== "100%", a.B && !c && h && (e.setProperty("height", "auto", "important"),
            d && !EV(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !FV(String(d.maxHeight)) && a.j && Math.round(f) < a.j && e.setProperty("max-height", "none", "important"))) : (GV(a, 1, l, c, "height", h, a.height, a.j), HV(a, 1, "d", l, e, d, "height", q, a.height, a.j), HV(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.j), HV(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.j));
        return b
    }

    function wV(a) {
        function b() {
            if (c > 0) {
                var l = Kj(e, d) || {
                    width: 0,
                    height: 0
                };
                let m = Oj(l.width);
                l = Oj(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        var c = 31.25,
            d = a.qa,
            e = a.D,
            f = a.l,
            g = a.j,
            h = a.J,
            k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function DV(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Kj(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.A.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function GV(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (kc(f)) {
                if (f == "100%" || !f) return;
                f = Nj(f);
                f == null && (mV(a.i, "n"), kV(a.i, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.B)
                        if (a.C) {
                            let k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = (m, n) => {
                                m == b && Sh(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else Sh(d, e, String(h))
                } else kV(a.i, b, "d")
        }
    }

    function HV(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            !kc(f) || (c == "m" ? EV(f) : FV(f)) || (f = Oj(f), f == null ? lV(a.i, "p") : k != null && lV(a.i, f == k ? "E" : "e"));
            if (kc(h)) {
                if (c == "m" ? EV(h) : FV(h)) return;
                h = Oj(h);
                h == null && (mV(a.i, "p"), kV(a.i, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.B)
                        if (a.C) {
                            let m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = (p, q) => {
                                p == b && (e[g] = Y(m - q));
                                n && n(p, q)
                            }
                        } else e[g] = Y(l)
                } else kV(a.i, b, c)
        }
    }
    var MV = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.D = b;
            this.U = c;
            this.O = this.J = null;
            this.ma = !1;
            this.A = new IV(this.D);
            this.qa = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
            this.A = new IV(this.D);
            this.B = g;
            this.Za = JV(this.A, d.Ei, d.height, d.Je);
            this.width = this.B ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
            this.height = this.B ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
            this.l = KV(d.width);
            this.j = KV(d.height);
            this.Z = this.B ? KV(d.opacity) : null;
            this.check = d.check;
            this.Je = !!d.Je;
            this.C = d.Ei == "animate" && !LV(this.A, this.j, this.Je) && jV();
            this.Ye = !!d.Ye;
            this.i = new qV;
            LV(this.A, this.j, this.Je) && lV(this.i, "r");
            e = this.A;
            e.i && e.j >= e.ca && lV(this.i, "b");
            this.jg = !!d.jg;
            this.ui = !!d.ui
        }
    };

    function LV(a, b, c) {
        var d;
        (d = a.i) && !(d = !a.visible) && (c ? (b = a.j + Math.min(b, KV(a.getHeight())), a = a.i && b >= a.ca) : a = a.i && a.j >= a.ca, d = a);
        return d
    }
    var IV = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && uj(c);
            this.i = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            for (var d = a, e = 0, f = this.boundingClientRect; d;) try {
                f && (e += f.top);
                let g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.j = e;
            c = c || t;
            this.ca = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && dS(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function JV(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return LV(a, c, d)
        }
    }

    function uV(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }
    var NV = new qV("s", ""),
        oV = RegExp("[lonvafrbpEe]", "g");

    function FV(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function EV(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function yV(a, b, c) {
        b !== null && Nj(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Nj(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = Y(b));
        c !== null && (a.style.height = Y(c))
    }
    var zV = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        AV = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function BV() {
        var a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = zV;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = AV;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function KV(a) {
        return kc(a) ? Nj(a) : jc(a) && isFinite(a) ? a : null
    };

    function OV(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const PV = /[+, ]/;

    function QV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                let c = gi(a);
                if (c) {
                    let d = c.frameElement;
                    if (d && rj(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function RV(a, b) {
        var c = QU(a.pubWin);
        a.I.saaei && (c += (c === "" ? "" : ",") + a.I.saaei);
        b.eid = c
    }

    function SV(a, b) {
        a = (a = uj(a.pubWin)) && a.document ? FR(a.document, a) : new zh(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function TV(a) {
        try {
            let b = t.top.location.hash;
            if (b) {
                let c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function UV(a, b, c) {
        var d = a.I,
            e = a.pubWin,
            f = a.K,
            g = vj(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = nr(e)) && h.data && qa(h.data) && kc(h.data.type) ? (h = h.data.type.toLowerCase(), h = h === "doubleclick" || h === "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = qj(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Uh || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.Bc && (b.etu = a.Bc);
        (c = IS(d, f, c)) && (b.fc = c);
        if (!yr(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = pi(new ci(c),
                    "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    let za = h.contentWindow.document;
                    za.open();
                    var k = Pg("<!DOCTYPE html>");
                    za.write(Qg(k));
                    za.close();
                    g += za.documentMode
                } catch (za) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        try {
            var l = e.screenX;
            var m = e.screenY
        } catch (za) {}
        try {
            var n = e.outerWidth;
            var p = e.outerHeight
        } catch (za) {}
        try {
            var q = e.innerWidth;
            var r = e.innerHeight
        } catch (za) {}
        try {
            var v = e.screenLeft;
            var y = e.screenTop
        } catch (za) {}
        try {
            q = e.innerWidth,
                r = e.innerHeight
        } catch (za) {}
        try {
            var G = e.screen.availWidth;
            var w = e.screen.availTop
        } catch (za) {}
        b.brdim = [v, y, l, m, G, w, n, p, q, r].join();
        k = 0;
        t.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = dS(e.document);
        a = a.ea;
        e = QS(d) ? NV : CV(new MV(e, a, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = pV(e);
        if (!QS(d) && (e = zr(d), e !== null)) {
            a = 0;
            a: {
                try {
                    {
                        var x = d.google_async_iframe_id;
                        let za = window.document;
                        if (x) var C = za.getElementById(x);
                        else {
                            var H = za.getElementsByTagName("script"),
                                O = H[H.length - 1];
                            C = O && O.parentNode || null
                        }
                    }
                    if (C) {
                        d = [];
                        x = 0;
                        for (var ja = Date.now(); ++x <= 100 && Date.now() - ja < 50 && (C = QV(C));) C.nodeType === 1 && d.push(C);
                        var xa = d;
                        b: {
                            for (ja = 0; ja < xa.length; ja++) {
                                c: {
                                    var Ya = xa[ja];
                                    try {
                                        if (Ya.parentNode && Ya.offsetWidth > 0 && Ya.offsetHeight > 0 && Ya.style && Ya.style.display !== "none" && Ya.style.visibility !== "hidden" && (!Ya.style.opacity || Number(Ya.style.opacity) !== 0)) {
                                            let za = Ya.getBoundingClientRect();
                                            var vc = za.right > 0 && za.bottom > 0;
                                            break c
                                        }
                                    } catch (za) {}
                                    vc = !1
                                }
                                if (!vc) {
                                    var oe = !1;
                                    break b
                                }
                            }
                            oe = !0
                        }
                        if (oe) {
                            b: {
                                let za =
                                    Date.now();oe = /^html|body$/i;vc = /^fixed/i;
                                for (Ya = 0; Ya < xa.length && Date.now() - za < 50; Ya++) {
                                    let Od = xa[Ya];
                                    if (!oe.test(Od.tagName) && vc.test(Od.style.position || Ai(Od, "position"))) {
                                        var Md = Od;
                                        break b
                                    }
                                }
                                Md = null
                            }
                            break a
                        }
                    }
                } catch {}
                Md = null
            }
            Md && Md.offsetWidth * Md.offsetHeight <= e.width * e.height * 4 && (a = 1);
            b.pfx = a
        }
        a: {
            if (Math.random() < .05 && f) try {
                let za = f.document.getElementsByTagName("head")[0];
                var Nd = za ? jT(za) : 0;
                break a
            } catch (za) {}
            Nd = 0
        }
        f = Nd;
        f !== 0 && (b.cms = f)
    }

    function VV(a, b) {
        var c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : sj(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function WV(a, b) {
        var c = fI(b, 8, {});
        b = fI(b, 9, {});
        var d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function XV(a, b, c, d) {
        var e = a.I,
            f = a.I;
        b.dt = Br;
        f.google_async_iframe_id && f.google_bpp && (b.bpp = f.google_bpp);
        a: {
            try {
                var g = t.performance;
                if (g && g.timing && g.now) {
                    var h = g.timing.navigationStart + Math.round(g.now()) - g.timing.domLoading;
                    break a
                }
            } catch (m) {}
            h = null
        }(f = (f = h) ? pU(f, t.Date.now() - Br, 1E6) : null) && (b.bdt = f);
        b.idt = pU(a.A, Br);
        f = a.I;
        b.shv = a.pageState.jTCuI;
        h = a.pageState.MhIdB;
        h != null && h > 0 && (b.lgts = h);
        a.Kc && (b.mjsv = a.Kc);
        f.google_loader_used === "sd" ? b.ptt = 5 : f.google_loader_used === "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(f.google_loader_used) &&
            (b.saldr = f.google_loader_used);
        if (f = nr(a.pubWin)) b.is_amp = 1, b.amp_v = or(f), (f = pr(f)) && (b.act = f);
        f = a.pubWin;
        f === f.top && (b.abxe = 1);
        (f = d.get("__gads", c)) ? b.cookie = f: (f = a.pubWin, c.ga() && CN(f) && (b.cookie_enabled = "1"));
        f = d.get("__gpi", c);
        h = d.get("__gpi_opt_out", c);
        f && !f.includes("&") && (b.gpic = f);
        h === "1" && (b.pdopt = "1");
        (d = (c = WU(a.pubWin, c, {
            ln: !1,
            mn: !a.wb
        })) && d.get("__eoi")) ? b.eo_id_str = d: c && (b.eoidce = "1");
        d = aI();
        f = fI(d, 8, {});
        c = e.google_ad_section;
        f[c] && (b.prev_fmts = f[c]);
        f = fI(d, 9, {});
        f[c] && (b.prev_slotnames =
            f[c].toLowerCase());
        WV(e, d);
        c = fI(d, 15, 0);
        c > 0 && (b.nras = String(c));
        (f = nr(window)) ? (f ? (c = f.pageViewId, f = f.clientId, kc(f) && (c += f.replace(/\D/g, "").substring(0, 6))) : c = null, c = +c) : (c = vj(window), f = c.google_global_correlator, f || (c.google_global_correlator = f = 1 + Math.floor(Math.random() * 8796093022208)), c = f);
        b.correlator = fI(d, 7, c);
        S(gy) && (b.rume = 1);
        if (e.google_ad_channel) {
            c = fI(d, 10, {});
            f = "";
            h = e.google_ad_channel.split(PV);
            for (g = 0; g < h.length; g++) {
                var k = h[g];
                c[k] ? f += k + "+" : c[k] = !0
            }
            b.pv_ch = f
        }
        if (e.google_ad_host_channel) {
            c =
                e.google_ad_host_channel;
            f = fI(d, 11, []);
            h = c.split("|");
            d = -1;
            c = [];
            for (g = 0; g < h.length; g++) {
                k = h[g].split(PV);
                f[g] || (f[g] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    let p = k[n];
                    p !== "" && (f[g][p] ? m += "+" + p : f[g][p] = !0)
                }
                m = m.slice(1);
                c[g] = m;
                m !== "" && (d = g)
            }
            f = "";
            if (d > -1) {
                for (h = 0; h < d; h++) f += c[h] + "|";
                f += c[d]
            }
            b.pv_h_ch = f
        }
        b.frm = e.google_iframing;
        b.ife = e.google_iframing_environment;
        a: {
            d = e.google_ad_client;
            try {
                let m = vj(window),
                    n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (d in n) {
                    var l = 1;
                    break a
                }
                n[d] = !0;
                l =
                    2;
                break a
            } catch {
                l = 0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        S(Rw) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        VV(a.pubWin, b);
        (a = e.google_ad_layout) && vU[a] >= 0 && (b.rplot = vU[a])
    }

    function YV(a, b) {
        a = a.M;
        var c = aI();
        fI(c, 26) && (b.npa = 1);
        a && (Pc(he(a, 3)) != null && (b.gdpr = a.i() ? "1" : "0"), (c = cf(a, 1)) && (b.us_privacy = c), (c = cf(a, 2)) && (b.gdpr_consent = c), (c = cf(a, 4)) && (b.addtl_consent = c), (c = df(a, 7)) && (b.tcfe = c), (c = E(a, 11)) && (b.gpp = c), (a = Se(a, 10)) && a.length > 0 && (b.gpp_sid = a.join(",")))
    }

    function ZV(a, b) {
        var c = a.I;
        YV(a, b);
        oj(SU, (d, e) => {
            e !== "google_source_type" && e !== "google_tag_for_child_directed_treatment" && e !== "google_tag_for_under_age_of_consent" && (b[d] = c[e])
        });
        QS(c) && (a = PS(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Oz(c), Gt(a) && (a = Tt(a.getValue()), b.pi = a))
    }

    function $V(a, b) {
        var c = rr() || DR(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = DR(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function aW(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = DR(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Qt(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function bW(a, b) {
        (a = iI()[a.I.google_ad_client]) && (b.psts = a.join())
    }

    function cW(a, b) {
        (a = a.pageState.AyxaY) && a >= 0 && (b.tmod = a)
    }

    function dW(a, b) {
        if (a = a.pubWin.google_user_agent_client_hint) {
            let c = [],
                d = 0;
            for (let e = 0; e < a.length; e++) {
                let f = a.charCodeAt(e);
                f > 255 && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = yb(c, 3);
            b.uach = a
        }
    }

    function eW(a, b) {
        if (a.oc.OSwJs !== 2) {
            var c = a.I.google_ad_public_floor;
            a = a.I.google_ad_private_floor;
            c >= 0 && (b.pubf = c);
            a >= 0 && (b.pvtf = a)
        }
    }

    function fW(a, b) {
        var c = Number(a.I.google_traffic_source);
        c && Object.values(Ea).includes(c) && (b.trt = a.I.google_traffic_source)
    }

    function gW(a, b) {
        if (kc(a.I.google_privacy_treatments)) {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.I.google_privacy_treatments.split(",");
            var d = [];
            for (let [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function hW(a, b) {
        if (a.i) {
            a.i.sm && (b.xatf = 1);
            try {
                a.i.Hh ? .disconnect(), a.i.Hh = void 0
            } catch {}
        }
    }

    function iW(a, b = document) {
        try {
            let {
                labels: c
            } = dV(b);
            c.length && (a.pgls = c.map(d => {
                d = YU(d);
                return yb(d, 3)
            }).join("~"))
        } catch (c) {
            HA.Ea(1278, c)
        }
    }

    function jW(a, b) {
        S(Vv) && (a = a.Hb ? .get(), b.bisch = a ? .charging, b.blev = a ? .level)
    }

    function kW(a, b, c) {
        var d = {};
        ZV(a, d);
        dW(a, d);
        XV(a, d, b, c);
        d.u_tz = -(new Date).getTimezoneOffset();
        try {
            var e = Ok.history.length
        } catch (f) {
            e = 0
        }
        d.u_his = e;
        d.u_h = Ok.screen ? .height;
        d.u_w = Ok.screen ? .width;
        d.u_ah = Ok.screen ? .availHeight;
        d.u_aw = Ok.screen ? .availWidth;
        d.u_cd = Ok.screen ? .colorDepth;
        d.u_sd = ER(a.pubWin);
        d.dmc = a.pubWin.navigator ? .deviceMemory;
        KA(889, () => {
            if (a.K === null) d.adx = -12245933, d.ady = -12245933;
            else {
                var f = a.ea.parentElement,
                    g = f ? .style.display,
                    h = S($x) && f && getComputedStyle(f).display === "none";
                h && f.style.setProperty("display",
                    "block", "important");
                var k = HR(a.K, a.ea);
                d.adx && d.adx !== -12245933 && d.ady && d.ady !== -12245933 || (d.adx = Math.round(k.x), d.ady = Math.round(k.y));
                GR(a.ea) || (d.adx = -12245933, d.ady = -12245933, a.j |= 32768);
                h && (f.style.display = g || "");
                f = a.I.override_ady;
                jc(f) && (d.ady = f);
                f = a.I.override_adx;
                jc(f) && (d.adx = f)
            }
        });
        $V(a, d);
        aW(a, d);
        SV(a, d);
        RV(a, d);
        d.oid = 2;
        bW(a, d);
        S(Wv) && (c = T(hw), nU(a, d, b, c > 0 ? {
            G: CA,
            Wh: new XU,
            bk: c,
            gk: S(iw)
        } : void 0));
        d.pvsid = ek(a.pubWin, HA);
        cW(a, d);
        d.uas = OV(a.pubWin);
        (c = hV(a.pubWin)) && (d.nvt = c);
        a.l && (d.scar =
            a.l);
        hW(a, d);
        UV(a, d, b);
        d.fu = a.j;
        d.bc = VU();
        a.pageState.xujKL && (RU(d), d.creatives = TV(/\b(?:creatives)=([\d,]+)/), d.adgroups = TV(/\b(?:adgroups)=([\d,]+)/), d.adgroups || d.sso) && (d.adtest = "on", d.disable_budget_throttling = !0, d.use_budget_filtering = !1, d.retrieve_only = !0, d.disable_fcap = !0);
        Uk() && (d.atl = !0);
        (b = kS(a.K || a.pubWin)) && (d.plas = b);
        d.bz = Aj(a.pubWin);
        eW(a, d);
        fW(a, d);
        gW(a, d);
        String(a.I.google_special_category_data) === "true" && (d.scd = 1);
        iW(d, a.pubWin.document);
        jW(a, d);
        return d
    }
    const lW = /YtLoPri/;

    function mW(a) {
        var b = aI(),
            c = a.google_ad_section;
        QS(a) && hI(b, 15);
        if (yr(a)) {
            if (hI(b, 5) > 100) return !1
        } else if (hI(b, 6) - fI(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }
    var nW = X(function(a, b) {
        var c = b.I,
            d = b.Sa,
            e = b.pubWin,
            f = a.M;
        a = a.sb;
        var g = "";
        if (SS(c)) g = (f.ga() ? d.yk : d.xk).toString() + "#" + (encodeURIComponent("RS-" + c.google_reactive_sra_index + "-") + "&" + vr({
            adk: c.google_ad_unit_key,
            client: c.google_ad_client,
            fa: c.google_reactive_ad_format
        })), WV(c, aI()), mW(c);
        else if ((d = c.google_pgb_reactive === 5 && !!c.google_reactive_ads_config) || (d = c.google_reactive_ad_format, d = !(!c.google_reactive_ads_config && QS(c) && d !== 16 && d !== 10 && d !== 11 && d !== 40 && d !== 41 && d !== 42 && d !== 44)), d || (d = c.google_reactive_ad_format,
                Fh(d) ? (e = uj(e)) && CS(e, c, d, f) ? (e = WB(e), Rr(e, d) ? d = !1 : (e.adCount[d] || (e.adCount[d] = 0), e.adCount[d]++, d = !0)) : d = !1 : d = !1), d && mW(c)) {
            d = g = b.I;
            var h = b.pubWin;
            e = {};
            let r = h.document;
            var k = d.google_ad_width || h.google_ad_width || 0;
            var l = d.google_ad_height || h.google_ad_height || 0;
            var m = {
                mk: vj(h),
                Jh: !1,
                uj: "",
                zh: 1
            };
            a: if (h && h.top === h) k = !1;
                else {
                    var n = h.document,
                        p = n.documentElement;
                    if (k && l) {
                        let v = 1,
                            y = 1;
                        h.innerHeight ? (v = h.innerWidth, y = h.innerHeight) : p && p.clientHeight ? (v = p.clientWidth, y = p.clientHeight) : n.body && (v = n.body.clientWidth,
                            y = n.body.clientHeight);
                        if (y > 2 * l || v > 2 * k) {
                            k = !1;
                            break a
                        }
                    }
                    k = !0
                }
            m.Jh = k;
            k = m.Jh;
            l = qj(m.mk).Uh;
            n = gk(h);
            p = 4;
            k || n !== 1 ? k || n !== 2 ? k && n === 1 ? p = 7 : k && n === 2 && (p = 8) : p = 6 : p = 5;
            l && (p |= 16);
            m.uj = String(p);
            m.zh = $H(h);
            l = m;
            m = l.mk;
            k = l.Jh;
            n = !!d.google_page_url;
            e.google_iframing = l.uj;
            l.zh !== 0 && (e.google_iframing_environment = l.zh);
            if (!n && r.domain === "ad.yieldmanager.com") {
                for (l = r.URL.substring(r.URL.lastIndexOf("http")); l.indexOf("%") > -1;) try {
                    l = decodeURIComponent(l)
                } catch (v) {
                    break
                }
                d.google_page_url = l;
                n = !!l
            }
            n ? (e.google_page_url = d.google_page_url,
                e.google_page_location = (k ? r.referrer : r.URL) || "EMPTY") : (k && rj(h.top) && r.referrer && h.top.document.referrer === r.referrer ? e.google_page_url = h.top.document.URL : e.google_page_url = k ? r.referrer : r.URL, e.google_page_location = null);
            if (r.URL === e.google_page_url) try {
                var q = Math.round(Date.parse(r.lastModified) / 1E3) || null
            } catch {
                q = null
            } else q = null;
            e.google_last_modified_time = q;
            q = m === m.top ? m.document.referrer : (q = nr()) && q.referrer || "";
            e.google_referrer_url = q;
            ZH(e, g);
            q = f.ga() ? CR(g) ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net" :
                "pagead2.googlesyndication.com";
            f = kW(b, f, a);
            a = b.I;
            e = a.google_ad_channel;
            d = "/pagead/ads?";
            a.google_ad_client === "ca-pub-6219811747049371" && lW.test(e) && (d = "/pagead/lopri?");
            g = ur(f, `https://${q}${d}` + (b.pageState.xujKL && g.google_debug_params ? g.google_debug_params : ""))
        }
        Wk(2, [c, g]);
        return {
            bb: g,
            wa: !g
        }
    }, {
        id: 1437,
        H: {
            bb: void 0,
            wa: void 0
        }
    });
    var oW = X(function(a, b, c, d, e) {
        var f = a.Ph,
            g = a.Ec,
            h = a.Ya;
        if (!f) return {
            bb: "",
            Ya: ""
        };
        c = IR(d, c, e, !0) > 0;
        g = {
            ifi: g,
            uci: h
        };
        c && (c = aI(), g.btvi = fI(c, 21, 1), hI(c, 21));
        f = ur(g, f);
        Tj() && !SS(b) && (f = Il(f, "fsb", 1));
        return a.La ? {
            bb: Il(f, "fca", "1"),
            Ya: h
        } : {
            bb: f,
            Ya: h
        }
    }, {
        id: 1438,
        H: {
            bb: void 0,
            Ya: void 0
        }
    });
    var pW = X(function(a) {
        var b = a.url;
        if (a.wa) return {
            bb: ""
        };
        a = b;
        a.length > 61440 && (a = a.substring(0, 61432), a = a.replace(/%\w?$/, ""), a = a.replace(/&[^=]*=?$/, ""), a += "&trunc=1");
        if (a !== b) {
            let c = b.lastIndexOf("&", 61432);
            c === -1 && (c = b.lastIndexOf("?", 61432));
            NA("trn", {
                ol: b.length,
                tr: c === -1 ? "" : b.substring(c + 1),
                url: b
            }, .01)
        }
        return {
            bb: a
        }
    }, {
        id: 1374,
        H: {
            bb: void 0
        }
    });
    var qW = class extends ET {
        constructor(a, b, c, d, e, f) {
            super(a, b, c, d, f);
            this.va = e;
            this.output = BT(this, new sT);
            this.complete = new wT
        }
        l(a) {
            a.then(b => {
                b instanceof lT || (nT(this.output, b), this.complete.notify())
            }, b => {
                this.va ? nT(this.output, this.va(b)) : this.output.setError(new kT(`output error: ${b.message}`), () => {
                    this.C.Aa({
                        methodName: this.id,
                        Ha: b
                    })
                });
                this.complete.notify()
            })
        }
        i(a) {
            this.va ? (nT(this.output, this.va(a)), this.complete.notify()) : super.i(a)
        }
    };

    function rW(a, b) {
        a.id = b.id;
        a.va = b.va;
        return a
    }

    function sW(a, b, c, ...d) {
        return new qW(a.id, a, b, c, a.va, d)
    };

    function tW(a, b) {
        xs(a, b);
        a.O.push(b);
        return b
    }

    function Z(a, b, c, ...d) {
        return tW(a, GT(b, a.A, c, ...d))
    }

    function uW(a, b, c, ...d) {
        return tW(a, sW(b, a.A, c, ...d))
    }

    function vW(a, b) {
        a.U.push(b);
        xs(a, b);
        return b
    }
    async function wW(a) {
        a.l.length && await Promise.all(a.l.map(d => d.Z.promise));
        if (await a.ma()) {
            for (var b of a.O) b.start();
            for (var c of a.U) wW(c);
            if (a.B && (b = Object.keys(a.B), b.length)) {
                c = await Promise.all(Object.values(a.B).map(e => e.promise));
                let d = 0;
                for (let e of b) a.qa[e] = c[d++]
            }
        }
        a.Z.resolve(a.qa)
    }
    var xW = class extends N {
        constructor(a) {
            super();
            this.A = a;
            this.O = [];
            this.U = [];
            this.qa = {};
            this.l = [];
            this.Z = new tQ;
            this.B = {}
        }
        async ma() {
            return !0
        }
        W() {
            super.W();
            this.O.length = 0;
            this.U.length = 0;
            this.l.length = 0
        }
    };
    var yW = class extends xW {
        constructor(a, b, c, d, e, f, g, h) {
            super(a);
            a = W(Z(this, nW, {
                M: c,
                sb: f
            }, b), d);
            b = Z(this, oW, {
                Ph: a.bb,
                La: e,
                Ec: g,
                Ya: h
            }, b.I, b.pubWin, b.K, b.ea);
            this.i = {
                Vm: Z(this, pW, {
                    wa: a.wa,
                    url: b.bb
                }).bb,
                wa: a.wa,
                Ya: b.Ya
            }
        }
    };
    var zW = X(function(a, b) {
        return {
            M: b.M
        }
    }, {
        id: 1462,
        H: {
            M: void 0
        }
    });
    var AW = X(function(a, b, c, d) {
        b = a.wb;
        return a.M.ga() || b ? {
            Od: !0
        } : (NA("afc_noc_req", {
            client: c.google_ad_client,
            isGdprCountry: d.OSCLM.UWEfJ.toString()
        }, T(dw)), {
            Od: !1
        })
    }, {
        id: 1381,
        H: {
            Od: void 0
        }
    });

    function BW(a, b, c, d, e) {
        var f = oQ(a, "gpi-uoo", (g, h) => {
            h.source === c && (h = new ej, h = of (h, 1, g.userOptOut ? "1" : "0"), h = jf(h, 2, 2147483647), h = of (h, 3, "/"), h = of (h, 4, a.location.hostname), b && (e.set("__gpi_opt_out", h, b), g.userOptOut || g.clearAdsData)) && (e.delete("__gads", b), e.delete("__gpi", b))
        });
        d.push(f)
    };
    var CW = X(function(a, b) {
        var c = a.M;
        a = a.sb;
        if (c.ga()) {
            b = b.location.hostname;
            let e = a.get("__gpi_opt_out", c);
            if (e) {
                var d = new ej;
                d = of (d, 1, e);
                d = jf(d, 2, 2147483647);
                d = of (d, 3, "/");
                b = of (d, 4, b);
                a.set("__gpi_opt_out", b, c)
            }
        }
        return {}
    }, {
        id: 1382,
        H: {}
    });
    var DW = X(function(a, b, c, d) {
        b.google_async_iframe_id || (a = c, a = sr(nr(a)) || a, a.google_unique_id = (a.google_unique_id || 0) + 1, b.google_unique_id = a.google_unique_id);
        b = xr(b);
        return {
            Ec: b,
            Ya: c === d ? "a!" + b.toString(36) : `${b.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`
        }
    }, {
        id: 1722,
        H: {
            Ec: void 0,
            Ya: void 0
        }
    });
    var EW = X(function(a, b) {
        var c = a.M;
        a = a.sb;
        PU(20, b, c, a);
        PU(17, b, c, a);
        return {}
    }, {
        id: 1433,
        H: {}
    });
    var FW = X(function(a, b) {
        S(qx) && (b.aieuf = !0, b.aicrs = !0, JR(b));
        return {}
    }, {
        id: 1449,
        H: {}
    });
    var GW = X(function(a, b) {
        var c = b.I.google_reactive_ads_config;
        if (!c) return {};
        a = a.M;
        NS(b.K, c);
        VS(c, b, a);
        c = c.page_level_pubvars;
        qa(c) && Mh(b.I, c);
        return {}
    }, {
        id: 1434,
        H: {}
    });
    var HW = X(function(a, b) {
        a = a.M;
        a: {
            var c = [t.top];
            var d = [];
            let f = 0,
                g;
            for (; g = c[f++];) {
                d.push(g);
                try {
                    if (g.frames)
                        for (let h = 0; h < g.frames.length && c.length < 1024; ++h) c.push(g.frames[h])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    Nk = e;
                    break a
                }
            } catch (h) {}
            Nk = null
        }
        if (Nk) return {};
        e = Jj("IFRAME");
        e.id = "google_esf";
        e.name = "google_esf";
        Oh(e, a.ga() ? b.yk : b.xk);
        e.style.display = "none";
        e && document.documentElement.appendChild(e);
        return {}
    }, {
        id: 1441,
        H: {}
    });
    var IW = rW(async function(a, b) {
        return b.i ? .El || Promise.resolve()
    }, {
        id: 1436
    });
    var JW = class extends xW {
        async ma() {
            var a = await this.i();
            a || this.j();
            return a
        }
    };
    async function KW(a, b, c) {
        a = new LW(b.id, b, a, c, b.va);
        await a.start();
        b = await a.A.promise;
        a.dispose();
        return b
    }
    class LW extends ET {
        constructor(a, b, c, d, e) {
            super(a, b, c, d, []);
            this.va = e;
            this.A = ia(Promise, "withResolvers").call(Promise)
        }
        U() {
            var a = this.f(DT(this), ...this.J);
            this.A.resolve(a)
        }
        l() {}
        i(a) {
            this.va !== void 0 ? this.A.resolve(this.va(a)) : super.i(a)
        }
    }

    function MW(a, b) {
        a.id = b.id;
        a.va = b.va;
        return a
    };
    const NW = MW(function(a) {
        return a.eb
    }, {
        id: 1464
    });
    var OW = class extends JW {
        constructor(a, b, c, d, e, f) {
            super(a);
            this.ha = a;
            this.eb = d;
            a = W(Z(this, HW, {
                M: c
            }, b.Sa), e);
            f = W(Z(this, EW, {
                M: c,
                sb: f
            }, b.pubWin), a.finished);
            c = W(Z(this, GW, {
                M: c
            }, b), f.finished);
            c = W(uW(this, IW, {}, b), c.finished);
            c = W(Z(this, DW, {}, b.I, b.pubWin, b.K), c.complete);
            this.C = W(Z(this, FW, {}, b.I), c.finished).finished;
            this.Ec = c.Ec;
            this.Ya = c.Ya
        }
        async i() {
            return KW(this.ha, NW, {
                eb: this.eb
            })
        }
        j() {
            this.C.notify();
            nT(this.Ec, null);
            nT(this.Ya, null)
        }
    };
    var PW = X(function(a, b) {
        return S(Xx) && b.pageState.uNjDc ? {
            La: !1
        } : {
            La: S(Wx) && !!b.pubWin.fetch && !SS(b.I) && !QS(b.I)
        }
    }, {
        id: 1488,
        H: {
            La: void 0
        }
    });
    var QW = X(function(a, b) {
        var c = b.pubWin,
            d = b.ea,
            e = b.I,
            f = b.Kc;
        a = T(cy);
        e = !Sr(e.google_reactive_ad_format) && (QS(e) || e.google_reactive_ads_config);
        if (b.i ? .Hh || a <= 0 || uj(c) || !t.IntersectionObserver || e) return {};
        b.i = {};
        var g = T(dy),
            h = new Cp(f),
            k = fl();
        c = new Promise(l => {
            var m = 0,
                n = b.i,
                p = new t.IntersectionObserver(LA(1236, q => {
                    if (q = q.find(r => r.target === d)) h.xe.Se.We.i.i.Kd({
                        Pc: fl() - k,
                        On: ++m
                    }), n.sm = q.isIntersecting && q.intersectionRatio >= g, l()
                }), {
                    threshold: [g]
                });
            p.observe(d);
            n.Hh = p
        });
        b.i.El = Promise.race([c, fk(a, null)]).then(l => {
            h.xe.Se.We.i.j.Kd({
                Pc: fl() - k,
                status: l === null ? "TIMEOUT" : "OK"
            })
        });
        return {}
    }, {
        id: 1345,
        H: {}
    });

    function RW(a, b, c, d) {
        a.G ? .xe.Se.Jk.xl.Wa({
            Ek: b,
            wl: c,
            operation: d,
            ia: 1
        })
    }
    var SW = class extends N {
        constructor(a, b, c) {
            var d = ["__eoi", "__gads", "__gpi", "__gpi_opt_out"],
                e = yA(100) ? CA : void 0;
            super();
            this.win = b;
            this.ha = c;
            this.G = e;
            this.i = new Map;
            this.j = !1;
            for (let g of d) this.i.set(g, void 0);
            if (b.cookieStore && b.cookieStore.addEventListener && a.ga() && (!Ta() || gk(this.win) !== 2) && b.origin !== "null") {
                this.cookieStore = b.cookieStore;
                var f = g => {
                    if (!this.ka) {
                        for (let h of g.changed) h.name && this.i.has(h.name) && this.i.set(h.name, h.value);
                        for (let h of g.deleted) h.name && this.i.has(h.name) && this.i.set(h.name,
                            void 0)
                    }
                };
                this.cookieStore.addEventListener("change", f);
                ys(this, () => {
                    this.cookieStore ? .removeEventListener("change", f)
                });
                this.cookieStore.getAll().then(g => {
                    if (!this.ka && this.cookieStore) {
                        for (let h of g) h.name && this.i.has(h.name) && this.i.set(h.name, h.value);
                        this.j = !0
                    }
                }).catch(g => {
                    this.ha.Aa({
                        methodName: 1607,
                        Ha: g
                    })
                })
            }
        }
        get(a, b) {
            if (b && !b.ga()) return null;
            if (!this.j) return RW(this, "safe_storage", a, "read"), EN(a, this.win);
            RW(this, "cookie_store", a, "read");
            return this.i.get(a) ? ? null
        }
        set(a, b, c) {
            if (!c || c.ga()) this.j &&
                this.cookieStore ? (b = {
                    name: a,
                    value: b.getValue(),
                    expires: sv(We(b, 2)) * 1E3,
                    domain: E(b, 4) || void 0,
                    path: E(b, 3) || void 0,
                    sameSite: "none"
                }, RW(this, "cookie_store", a, "write"), this.cookieStore.set(b).catch(d => {
                    d instanceof Error && (d.message = `${d.message} (Cookie: ${a})`);
                    this.ha.Aa({
                        methodName: 1608,
                        Ha: d
                    })
                })) : (c = sv(We(b, 2)) - Date.now() / 1E3, c = {
                    ai: Math.max(c, 0),
                    path: E(b, 3),
                    domain: E(b, 4),
                    secure: !1
                }, RW(this, "safe_storage", a, "write"), FN(a, b.getValue(), c, this.win))
        }
        delete(a, b) {
            if (b.ga())
                for (let c of wr(this.win.location.hostname)) this.j &&
                    this.cookieStore ? (b = {
                        name: a,
                        path: "/",
                        domain: c
                    }, RW(this, "cookie_store", a, "delete"), this.cookieStore.delete(b).catch(d => {
                        d instanceof Error && (d.message = `${d.message} (Cookie: ${a})`);
                        this.ha.Aa({
                            methodName: 1609,
                            Ha: d
                        })
                    })) : (RW(this, "safe_storage", a, "delete"), GN(a, this.win, c))
        }
    };
    let TW = null;
    var UW = X(function(a, b, c) {
        TW || (TW = new SW(a.M, b, c));
        return {
            dj: TW
        }
    }, {
        id: 1638,
        H: {
            dj: void 0
        }
    });
    var VW = X(function(a, b, c) {
        var d = a.ja;
        d && d.setAttribute("data-google-container-id", a.Ya);
        a = b.iaaso;
        a != null && (b = c.parentElement, (b && Ay.test(b.className) ? b : c).setAttribute("data-auto-ad-size", a));
        d.setAttribute("tabindex", "0");
        d.setAttribute("title", "Advertisement");
        d.setAttribute("aria-label", "Advertisement");
        return {}
    }, {
        id: 1418,
        H: {}
    });
    var WW = X(function(a) {
        return {
            ja: a.La ? a.Ul : a.Vn
        }
    }, {
        id: 1489,
        H: {
            ja: void 0
        }
    });

    function XW(a, b) {
        var c = Jj("STYLE", a);
        ih(c);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    }

    function YW(a, b, c) {
        if (!a.body) return null;
        var d = new ZW;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && XW(b.document, e);
            ui(a.body, {
                filter: d.i,
                webkitFilter: d.i,
                overflow: d.l,
                position: d.A,
                top: d.B
            });
            b.scrollTo(0, d.j)
        }
    }
    class ZW {
        constructor() {
            this.i = this.B = this.A = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.A = a.body.style.position;
            this.B = a.body.style.top;
            this.i = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = Ur(b);
            ui(a.body, "top", `${-this.j}px`)
        }
    };

    function $W(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.i.parentElement; c;) {
                a.j.push(c);
                if (a.J(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        var d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var aX = class extends N {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.U = b;
            this.B = c;
            this.j = null;
            ys(this, () => this.j = null)
        }
        J(a) {
            return this.B === a
        }
    };

    function bX(a, b) {
        var c = a.B;
        c && (b ? (eC(a.C), K(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = YW(a.A, a.U, a.Z)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (fC(a.C), K(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function cX(a) {
        bX(a, !1);
        var b = a.B;
        if (b) {
            var c = dX(a.O);
            $W(a, d => {
                K(d, c);
                Yr(d)
            });
            a.i.setAttribute("width", "");
            a.i.setAttribute("height", "");
            ui(a.i, c);
            ui(a.i, eX);
            ui(b, fX);
            ui(b, {
                background: "transparent"
            });
            K(b, {
                display: "none",
                position: "fixed"
            });
            Yr(b);
            Yr(a.i);
            zj(a.O) <= 1 || (ui(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Yj(b))
        }
    }
    var gX = class extends aX {
            constructor(a, b, c) {
                var d = T(by);
                super(a, b, c);
                this.O = b;
                this.Z = d;
                this.l = null;
                this.A = b.document;
                this.C = ZB(new dC(b), 2147483646)
            }
        },
        fX = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        eX = {
            left: "0",
            position: "absolute",
            top: "0"
        };

    function dX(a) {
        a = zj(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    };
    var hX = class extends gX {
        constructor(a, b, c) {
            super(b, a, c);
            cX(this)
        }
        J(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : fb(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const iX = {
        [1]: "closed",
        [2]: "viewed",
        [3]: "dismissed"
    };
    async function jX(a, b, c, d, e) {
        a = new kX(a, b, c, d, e);
        await a.init();
        return a
    }

    function lX(a) {
        return setTimeout(LA(728, () => {
            mX(() => {
                a.A.reject()
            });
            a.dispose()
        }), T(ay) * 1E3)
    }

    function nX(a, b) {
        var c = uQ(a.i).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        MA(1005, c);
        c = vQ(a.i).then(d => {
            oX(a, iX[d.status], d.payload)
        });
        MA(1006, c);
        c = wQ(a.i).then(() => {
            oX(a, "error")
        });
        MA(1004, c)
    }

    function pX(a) {
        a.win.location.hash !== "" && NA("pub_hash", {
            o_url: a.win.location.href
        }, .1);
        a.win.location.hash = "goog_fullscreen_ad";
        var b = LA(950, c => {
            c.oldURL.endsWith("#goog_fullscreen_ad") && (a.j === 10 ? (oX(a, "closed"), a.win.removeEventListener("hashchange", b)) : (a.win.location.hash = "goog_fullscreen_ad", qQ(a.i.fh, "fullscreen", {
                eventType: "backButton"
            }, "*")))
        });
        a.win.addEventListener("hashchange", b);
        ys(a, () => {
            a.win.removeEventListener("hashchange", b);
            a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
        })
    }

    function mX(a) {
        try {
            a()
        } catch (b) {}
    }

    function oX(a, b, c) {
        bX(a.C, !1);
        a.l && (c && b === "viewed" ? mX(() => {
            a.l({
                status: b,
                reward: c
            })
        }) : mX(() => {
            a.l({
                status: b
            })
        }));
        a.j === 11 && NA("fs_ad", {
            tgorigin: a.I.google_tag_origin,
            client: a.I.google_ad_client,
            url: a.I.google_page_url ? ? "",
            slot: a.I.google_ad_slot ? ? "0",
            ratype: a.j,
            clostat: b
        }, 1);
        a.dispose()
    }
    var kX = class extends N {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.B = b;
            this.J = c;
            this.j = d;
            this.I = e;
            this.l = null;
            this.C = new hX(a, c, b);
            a = new yQ(this.j === 10 ? 1 : 2, this.win, this.J.contentWindow);
            a.init();
            this.i = a;
            this.A = new tQ;
            this.B.dataset["slotcar" + (this.j === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async init() {
            var a = lX(this);
            nX(this, a);
            ys(this, () => {
                this.i.dispose();
                clearTimeout(a);
                ii(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.ka || (this.l = a, bX(this.C, !0), t.IntersectionObserver || qQ(this.i.fh, "fullscreen", {
                eventType: "visible"
            }, "*"), pX(this))
        }
        disposeAd() {
            this.dispose()
        }
    };
    var qX = X(function(a, b, c, d) {
        a = a.ja;
        if (!b.google_acr) return {};
        if (b.google_wrap_fullscreen_ad) {
            let e = b.google_acr;
            jX(c, d.parentElement, a, b.google_reactive_ad_format, b).then(e).catch(() => {
                e(null)
            })
        } else b.google_acr(a);
        return {}
    }, {
        id: 1354,
        H: {}
    });
    const rX = (a, b) => {
        try {
            let p = D(b, 6) === void 0 ? !0 : D(b, 6);
            var c = Wi(F(b, 2)),
                d = E(b, 3);
            a: switch (F(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Yi(c, d, e),
                g = z(b, Ui, 5) ? .i() ? ? "";
            f.Ic = g;
            f.j = p;
            var h = !!D(b, 7);
            f.qc = h;
            var k = !!D(b, 8);
            f.Mb = k;
            var l = !!D(b, 9);
            f.i = l;
            var m = !!D(b, 10);
            f.l = m;
            f.win = a;
            var n = f.build();
            Ti(n)
        } catch {}
    };

    function sX(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? rX(a, b) : Ji(a, "load", () => void rX(a, b)))
    };
    var tX = X(function(a, b, c, d) {
        a = a.M;
        var e = cr(CI);
        e.i && (e.state.tar += 1);
        e.Zb = b.google_page_url;
        b = new Vi;
        e = new Ui;
        var f = String(ek(c));
        e = pf(e, 1, f);
        b = A(b, 5, e);
        b = I(b, 4, 1);
        b = I(b, 2, 1);
        d = pf(b, 3, d.jTCuI);
        a = a.ga();
        d = ff(d, 6, a);
        d = ff(d, 7, !0);
        d = ff(d, 8, !0);
        sX(c, d);
        return {}
    }, {
        id: 1347,
        H: {}
    });

    function uX(a, b, c) {
        var d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => {
            vX(d)
        });
        return pQ(a, "adpnt", (e, f) => {
            if (Tr(f, c.contentWindow)) {
                e = Wr(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    }

    function vX(a) {
        setTimeout(() => {
            var b = a.dataset.adStatus;
            b !== "filled" && b !== "unfill-optimized" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var wX = X(function(a, b, c, d) {
        a = a.ja;
        b && d.push(uX(b, c, a));
        return {}
    }, {
        id: 1423,
        H: {}
    });

    function xX(a) {
        if (a.location ? .ancestorOrigins) return a.location.ancestorOrigins.length;
        var b = 0;
        sj(() => {
            b++;
            return !1
        }, a);
        return b
    };
    var zX = sh(yX);

    function yX() {
        var a = "";
        for (let b of AX()) b <= 15 && (a += "0"), a += b.toString(16);
        return a
    }

    function AX() {
        if (typeof window.crypto ? .getRandomValues === "function") {
            var a = new Uint8Array(16);
            window.crypto.getRandomValues(a);
            return a
        }
        a = window;
        if (typeof a.msCrypto ? .getRandomValues === "function") {
            var b = new Uint8Array(16);
            a.msCrypto.getRandomValues(b);
            return b
        }
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(Math.random() * 255);
        return a
    };

    function BX(a, b, c) {
        try {
            if (!CX(a, c.origin) || !Tr(c, a.i.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e = null;
        kc(d) && (e = a.messageHandlers[d]) && a.Va.jc(168, () => {
            e.call(a, b, c)
        })
    }

    function CX(a, b) {
        return a.Ck.includes(b) || dk(b)
    }
    var DX = class extends N {
        constructor(a, b) {
            var c = HA,
                d = FA,
                e = S(Wx) ? [`https:${`//${zX()}.safeframe.googlesyndication.com`}`] : [];
            super();
            this.j = a;
            this.i = b;
            this.Va = c;
            this.G = d;
            this.Ck = e;
            this.messageHandlers = {};
            this.ma = [];
            this.Za = this.Va.kc(168, (f, g) => void BX(this, f, g));
            this.Ue = this.Va.kc(169, (f, g) => Xr(this.j, "ras::xsf", this.G, g));
            this.init({})
        }
        init() {
            this.Z(this.messageHandlers);
            this.ma.push(oQ(this.j, "sth", this.Za, this.Ue))
        }
        W() {
            for (let a of this.ma) a();
            this.ma.length = 0;
            super.W()
        }
    };
    var EX = class extends DX {};

    function FX(a, b, c, d, e = null) {
        return new GX(a, b, c, d, e)
    }
    var GX = class extends EX {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.gb = c;
            this.sb = d;
            this.M = e;
            this.ha = cr(CI);
            this.l = () => {};
            Ji(this.i, "load", this.l)
        }
        W() {
            Ki(this.i, "load", this.l);
            super.W()
        }
        Z(a) {
            a["adsense-labs"] = b => {
                if (b = Wr(b).settings)
                    if (b = eg(fj, JSON.parse(b)), Ue(b, 1) != null) {
                        var c = b.aa;
                        if (Ie(b, c, c[u] | 0, ej, 4, 3).length > 0) {
                            var d = Je(b, ej, 4, re(ec)),
                                e = d;
                            c = this.ha;
                            let h = new un;
                            for (var f of e) switch (f.getVersion()) {
                                case 1:
                                    ef(h, 1, !0);
                                    break;
                                case 2:
                                    ef(h, 2, !0)
                            }
                            f = new vn;
                            f = B(f, 1, wn, h);
                            KI(c, f);
                            f = d;
                            c = this.M;
                            d = this.sb;
                            if (!fI(aI(),
                                    37, !1)) {
                                if (c)
                                    for (var g of f) switch (g.getVersion()) {
                                        case 1:
                                            d.set("__gads", g, c);
                                            break;
                                        case 2:
                                            d.set("__gpi", g, c)
                                    }
                                gI(aI(), 37, !0)
                            }
                            je(b, 4)
                        }
                        if (g = z(b, ej, 5)) f = this.sb, fI(aI(), 40, !1) || (f.set("__eoi", g), gI(aI(), 40, !0));
                        je(b, 5);
                        g = this.j;
                        f = E(b, 1) || "";
                        c = this.gb;
                        if (Gt(ON({
                                win: g,
                                gb: c
                            }))) {
                            c = CU(g, c);
                            b !== null && (c[f] = Ld(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(c))
                            } catch (h) {}
                        }
                    }
            }
        }
    };
    var HX = X(function(a, b, c) {
        var d = a.ja,
            e = a.Ka,
            f = a.M;
        a = a.sb;
        b && e(FX(b, d, c.OSCLM.UWEfJ, a, f));
        return {}
    }, {
        id: 1424,
        H: {}
    });
    var IX = X(function(a, b, c, d) {
        return {
            Ka: e => {
                e && d.push(() => {
                    e.dispose()
                })
            },
            Xa: b && (!QS(c) || RS(c))
        }
    }, {
        id: 1425,
        H: {
            Ka: void 0,
            Xa: void 0
        }
    });
    var JX = X(function(a, b, c) {
        BW(b, a.M, a.ja.contentWindow, c, a.sb);
        return {}
    }, {
        id: 1429,
        H: {}
    });

    function KX(a) {
        var b = a.J.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.i.innerHeight) && !c
    }
    var LX = class extends N {
        constructor(a, b, c) {
            super();
            this.i = a;
            this.A = b;
            this.J = c;
            this.B = 0;
            this.l = KX(this);
            var d = uh(this.C, this);
            this.j = LA(433, () => {
                Ok.requestAnimationFrame ? Ok.requestAnimationFrame(d) : d()
            });
            Ji(this.i, "scroll", this.j, Gi)
        }
        C() {
            var a = KX(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                let c = this.A.contentWindow;
                c && (rQ(c, "ig", b, "*", 2), ++this.B >= 10 && this.dispose())
            }
            this.l = a
        }
        dispose() {
            this.j && Ki(this.i, "scroll", this.j, Gi)
        }
    };
    var MX = X(function(a, b, c) {
        var d = a.ja,
            e = a.Xa;
        a = a.Ka;
        b && e && a(b.IntersectionObserver ? null : new LX(b, d, c));
        return {}
    }, {
        id: 1427,
        H: {}
    });

    function NX(a, b) {
        var c = a.pubWin,
            d = a.I.google_ad_client,
            e = iI(),
            f = null,
            g = oQ(c, "pvt", (h, k) => {
                kc(h.token) && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
            });
        a.Ia.push(g);
        return () => {
            f && Array.isArray(e[d]) && (gb(e[d], f), e[d].length || delete e[d], f = null)
        }
    };
    var OX = X(function(a, b) {
        return {
            ff: NX(b, a.ja)
        }
    }, {
        id: 1430,
        H: {
            ff: void 0
        }
    });
    var PX = class extends J {},
        QX = Hg(PX);
    var TX = class extends EX {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.ea = c;
            this.I = d;
            this.Ob = e
        }
        Z(a) {
            a["resize-me"] = (b, c) => {
                if (this.Ob && this.j ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/)) {
                    var d = this.I.google_ad_client;
                    if (!kc(d)) throw new EA(`Invalid property code ${d}`);
                    c = this.Ob;
                    b = new PX;
                    b = pf(b, 2, d);
                    RX(c, b)
                } else {
                    this.Ob && (d = Wr(b), d.r_affa && d.r_affa !== "" && (d = QX(d.r_affa), SX(this.Ob, d)));
                    b = Wr(b);
                    var e = b.r_chk;
                    if (e == null || e === "") {
                        d = Nj(b.r_nw);
                        var f = Nj(b.r_nh),
                            g = Nj(b.r_no);
                        g != null || d !== 0 && f !== 0 || (g = 0);
                        var h =
                            b.r_str;
                        h = h ? h : null; {
                            var k = /^true$/.test(b.r_ao),
                                l = /^true$/.test(b.r_ifr),
                                m = /^true$/.test(b.r_cab);
                            let q = window;
                            if (q)
                                if (h === "no_rsz") b.err = "7", d = !0;
                                else {
                                    var n = new IV(this.i);
                                    if (n.i) {
                                        var p = n.getWidth();
                                        p != null && (b.w = p);
                                        p = n.getHeight();
                                        p != null && (b.h = p);
                                        JV(n, h, f, m) ? (n = this.ea, e = CV(new MV(q, n, [this.i], {
                                                width: d,
                                                height: f,
                                                opacity: g,
                                                check: e,
                                                Ei: h,
                                                Ye: k,
                                                jg: l,
                                                Je: m
                                            }, null, null, !0)), b.r_cui && /^true$/.test(b.r_cui.toString()) && K(n, {
                                                height: `${f===null?0:f-48}px`,
                                                top: "24px"
                                            }), d != null && (b.nw = d), f != null && (b.nh = f), b.rsz =
                                            e.toString(), b.abl = pV(e), b.frsz = (h === "force").toString(), b.err = "0", d = !0) : (b.err = "1", d = !1)
                                    } else b.err = "3", d = !1
                                }
                            else b.err = "2", d = !1
                        }
                        qQ(c.source, "sth", {
                            msg_type: "resize-result",
                            r_str: h,
                            r_status: d
                        }, "*");
                        this.i.dataset.googleQueryId || this.i.setAttribute("data-google-query-id", b.qid)
                    }
                }
            }
        }
    };
    var UX = X(function(a, b, c, d) {
        var e = a.ja,
            f = a.Xa,
            g = a.Ka;
        a = a.Ob;
        b && f && !c.no_resize && g(new TX(b, e, d, c, a));
        return {}
    }, {
        id: 1426,
        H: {}
    });

    function VX(a) {
        return b => !!(b.na() & a)
    }
    var WX = class extends tU {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.A = c;
            this.l = d
        }
        na() {
            return this.A
        }
        Rh() {
            return this.l
        }
        j(a, b, c) {
            c.style.height = `${this.height}px`;
            b.rpe = !0
        }
    };
    const XX = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        YX = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        };

    function ZX(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function $X(a, b) {
        return a * XX[b] + YX[b]
    };
    const aY = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var bY = class extends tU {
        constructor(a, b) {
            super(a, b)
        }
        i(a) {
            return Math.min(1200, Math.max(this.pa, Math.round(a)))
        }
    };

    function cY(a, b) {
        if (a <= 0) throw new EA(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
        if (S(Qv)) {
            var c = wj(),
                d = T(Rv);
            var e = T(Pv);
            var f = T(Ov);
            a < 468 ? c ? (f = a - 8 - 8, e = d - 1, e = Math.floor(f / 1.91 + 70) + Math.floor($X(f, "mobile_banner_image_sidebyside") * e + 8 * e + 8), a = {
                Eb: a,
                Db: e,
                cg: 1,
                dg: d,
                Vf: "mobile_banner_image_sidebyside"
            }) : (e = Math.floor($X(a - 8 - 8, "image_sidebyside") * d + 8 * d + 8), a = a > 1500 ? {
                width: 0,
                height: 0,
                Cn: `Calculated slot width is too large: ${a}`
            } : e > 1500 ? {
                width: 0,
                height: 0,
                Cn: `Calculated slot height is too large: ${e}`
            } : {
                width: a,
                height: e
            }, a = {
                Eb: a.width,
                Db: a.height,
                cg: 1,
                dg: d,
                Vf: "image_sidebyside"
            }) : (a = ZX(a), e === 1 && (a.height = Math.floor(a.height * .5)), a = {
                Eb: a.width,
                Db: a.height,
                cg: f,
                dg: e,
                Vf: "image_stacked"
            })
        } else d = ZX(a), e = 4, f = 2, a < 468 && (e = 1, f = 6, d = {
            width: a,
            height: Math.floor($X(a, "image_stacked") * f + 8 * f + 8)
        }), a = {
            Eb: d.width,
            Db: d.height,
            cg: e,
            dg: f,
            Vf: "image_stacked"
        };
        b.google_content_recommendation_ui_type =
            a.Vf;
        b.google_content_recommendation_columns_num = a.cg;
        b.google_content_recommendation_rows_num = a.dg;
        return new rU(9, new bY(a.Eb, a.Db))
    };
    var dY = class extends tU {
        constructor(a, b) {
            super(a, b)
        }
        i() {
            return this.pa
        }
        j(a, b, c) {
            QL(a, c);
            c.style.height = `${this.height}px`;
            b.rpe = !0
        }
    };
    var eY = [{
            pa: 970,
            height: 90,
            na: 2
        }, {
            pa: 728,
            height: 90,
            na: 2
        }, {
            pa: 468,
            height: 60,
            na: 2
        }, {
            pa: 336,
            height: 280,
            na: 1
        }, {
            pa: 320,
            height: 100,
            na: 2
        }, {
            pa: 320,
            height: 50,
            na: 2
        }, {
            pa: 300,
            height: 600,
            na: 4
        }, {
            pa: 300,
            height: 250,
            na: 1
        }, {
            pa: 250,
            height: 250,
            na: 1
        }, {
            pa: 234,
            height: 60,
            na: 2
        }, {
            pa: 200,
            height: 200,
            na: 1
        }, {
            pa: 180,
            height: 150,
            na: 1
        }, {
            pa: 160,
            height: 600,
            na: 4
        }, {
            pa: 125,
            height: 125,
            na: 1
        }, {
            pa: 120,
            height: 600,
            na: 4
        }, {
            pa: 120,
            height: 240,
            na: 4
        }, {
            pa: 120,
            height: 120,
            na: 1,
            Rh: !0
        }].map(a => new WX(a.pa, a.height, a.na, a.Rh ? ? !1)),
        fY = [6, 12, 3, 0, 7, 14, 1, 8,
            10, 4, 15, 2, 11, 5, 13, 9, 16
        ].map(a => eY[a]);

    function gY(a) {
        return b => b.pa <= a
    }

    function hY(a) {
        return b => b.height <= a
    };

    function iY(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function jY(a, b) {
        var c = fY.length,
            d = null;
        for (let e = 0; e < c; ++e) {
            let f = fY[e];
            if (a(f)) {
                if (b == null || b(f)) return f;
                d === null && (d = f)
            }
        }
        return d
    };

    function kY(a, b, c, d, e) {
        e.google_full_width_responsive === "false" ? c = {
            kb: a,
            Ja: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || lY(b) || e.google_ad_resize ? (b = KL(a, c, d, e), c = b !== !0 ? {
            kb: a,
            Ja: b
        } : {
            kb: Lr(c) || a,
            Ja: !0
        }) : c = {
            kb: a,
            Ja: 2
        };
        var {
            kb: f,
            Ja: g
        } = c;
        return g !== !0 ? {
            kb: a,
            Ja: g
        } : d.parentElement ? {
            kb: f,
            Ja: g
        } : {
            kb: a,
            Ja: g
        }
    }

    function mY(a, b, c, d, e) {
        var {
            kb: f,
            Ja: g
        } = KA(247, () => kY(a, b, c, d, e)), h = g === !0, k = Oj(d.style.width), l = Oj(d.style.height), {
            Ub: m,
            zb: n,
            na: p,
            yj: q
        } = nY(f, b, c, d, e, h);
        h = oY(b, p);
        var r, v = (r = vy(d, c, "marginLeft")) ? `${r}px` : "",
            y = (r = vy(d, c, "marginRight")) ? `${r}px` : "";
        r = zy(d, c) || "";
        return new rU(h, m, p, null, q, g, n, v, y, l, k, r)
    }

    function lY(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function nY(a, b, c, d, e, f) {
        b = pY(c, a, b);
        var g = Lr(c) < 488 ? uy(d, c) : void 0,
            h = [gY(a), VX(b)];
        e.google_max_responsive_height != null && h.push(hY(e.google_max_responsive_height));
        var k = [p => !p.Rh()];
        if (g) {
            let p = yy(c, d);
            k.push(hY(p))
        }
        var l = jY(iY(h), iY(k));
        if (!l) throw new EA(`No slot size for availableWidth=${a}`);
        var {
            Ub: m,
            zb: n
        } = KA(248, () => {
            var p;
            a: if (f) {
                if (e.gfwrnh && (p = Oj(e.gfwrnh))) {
                    p = {
                        Ub: new dY(a, p),
                        zb: !0
                    };
                    break a
                }
                if (e.google_resizing_allowed || e.google_full_width_responsive === "true") p = Infinity;
                else {
                    p = d;
                    let r =
                        Infinity;
                    do {
                        var q = vy(p, c, "height");
                        q && (r = Math.min(r, q));
                        (q = vy(p, c, "maxHeight")) && (r = Math.min(r, q))
                    } while (p.parentElement && (p = p.parentElement) && p.tagName !== "HTML");
                    p = r
                }
                p = Math.min(a, p);
                if (p < a * .5 || p < 100) p = a;
                p = {
                    Ub: new dY(a, Math.floor(p)),
                    zb: p < a ? 102 : !0
                }
            } else p = {
                Ub: l,
                zb: 100
            };
            return p
        });
        return e.google_ad_layout === "in-article" ? {
            Ub: qY(a, c, d, m, e),
            zb: !1,
            na: b,
            yj: g
        } : {
            Ub: m,
            zb: n,
            na: b,
            yj: g
        }
    }

    function oY(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function pY(a, b, c) {
        if (c === "auto") c = Math.min(1200, Lr(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (let d in FL) c.indexOf(d) !== -1 && (b |= FL[d])
        }
        return b
    }

    function qY(a, b, c, d, e) {
        var f = e.google_ad_height || vy(c, b, "height");
        b = xU(a, b, c, f, e).size();
        return b.pa * b.height > a * d.height ? new WX(b.pa, b.height, 1) : d
    };

    function rY(a, b, c, d, e) {
        var f;
        (f = Lr(b)) ? Lr(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, QL(b, c), f = {
            kb: f,
            Ja: !0
        }) : f = {
            kb: a,
            Ja: 5
        } : f = {
            kb: a,
            Ja: 4
        }: f = {
            kb: a,
            Ja: 10
        };
        var {
            kb: g,
            Ja: h
        } = f;
        if (h !== !0 || a === g) return new rU(12, new tU(a, d), null, null, !0, h, 100);
        var {
            Ub: k,
            zb: l,
            na: m
        } = nY(g, "auto", b, c, e, !0);
        return new rU(1, k, m, 2, !0, h, l)
    };

    function sY(a) {
        var b = a.google_ad_format;
        if (b === "autorelaxed") {
            a: {
                if (a.google_content_recommendation_ui_type !== "pedestal")
                    for (let c of aY)
                        if (a[c] != null) {
                            a = !0;
                            break a
                        }
                a = !1
            }
            return a ? 9 : 5
        }
        if (lY(b)) return 1;
        if (b === "link") return 4;
        if (b === "fluid") return a.google_ad_layout === "in-article" ? (tY(a), 1) : 8;
        if (a.google_reactive_ad_format === 27) return tY(a), 1
    }

    function uY(a, b, c, d, e = !1) {
        var f = b.offsetWidth || (c.google_ad_resize || e) && vy(b, d, "width") || c.google_ad_width || 0;
        a === 4 && (c.google_ad_format = "auto", a = 1);
        e = (e = vY(a, f, b, c, d)) ? e : mY(f, c.google_ad_format, d, b, c);
        e.size().j(d, c, b);
        e.na != null && (c.google_responsive_formats = e.na);
        e.J != null && (c.google_safe_for_responsive_override = e.J);
        e.Ja != null && (e.Ja === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.Ja));
        e.zb != null && e.zb !== !0 && (c.gfwrnher = e.zb);
        d = e.l || c.google_ad_width;
        d != null && (c.google_resizing_width = d);
        d = e.j || c.google_ad_height;
        d != null && (c.google_resizing_height = d);
        d = e.size().i(f);
        var g = e.size().height;
        c.google_ad_width = d;
        c.google_ad_height = g;
        var h = e.size();
        c.google_ad_format = `${h.i(f)}x${h.height}`;
        c.google_responsive_auto_format = e.C;
        e.i != null && (c.armr = e.i);
        c.google_ad_resizable = !0;
        c.google_override_format = 1;
        c.google_loader_features_used = 128;
        e.Ja === !0 && (c.gfwrnh = `${e.size().height}px`);
        e.A != null && (c.gfwroml = e.A);
        e.B != null && (c.gfwromr = e.B);
        e.j != null && (c.gfwroh =
            e.j);
        e.l != null && (c.gfwrow = e.l);
        e.D != null && (c.gfwroz = e.D);
        f = uj(window) || window;
        OR(f.location, "google_responsive_dummy_ad") && (fb([1, 2, 3, 4, 5, 6, 7, 8], e.C) || e.i === 1) && e.i !== 2 && (f = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = `<${qU}>window.top.postMessage('${f}', '*'); 
          </${qU}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
        a !== 1 && (a = e.size().height, b.style.height = `${a}px`)
    }

    function vY(a, b, c, d, e) {
        var f = d.google_ad_height || vy(c, e, "height") || 0;
        switch (a) {
            case 5:
                let {
                    kb: g,
                    Ja: h
                } = KA(247, () => kY(b, d.google_ad_format, e, c, d));
                h === !0 && b !== g && QL(e, c);
                h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return cY(g, d);
            case 9:
                return cY(b, d);
            case 8:
                return xU(b, e, c, f, d);
            case 10:
                return rY(b, e, c, f, d)
        }
    }

    function tY(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function wY(a, b) {
        a.google_resizing_allowed = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };
    var xY = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function yY(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };

    function zY(a, b) {
        var c = uj(b);
        if (c) {
            c = Lr(c);
            let d = Kj(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function AY(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function BY(a, b) {
        if (a = nr(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else {
            if (b.google_ad_intents_format) a: switch (Number(b.google_ad_intents_format)) {
                case 4:
                    b = 20;
                    break a;
                default:
                    b = 19
            } else b = 12;
            return b
        }
    };

    function CY(a, b, c) {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [], Ij(c.document, jh `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b,
            ...null
        })
    };

    function DY(a, b) {
        if (!IL(b, a)) return () => {};
        a = EY(b, a);
        if (!a) return () => {};
        var c = lI();
        b = Ih(b);
        var d = {
            Nc: a,
            I: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => gb(c, d)
    }

    function EY(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Ay.test(a.className);) a = a.parentElement;
        return a
    }

    function FY(a, b) {
        for (let c = 0; c < a.childNodes.length; c++) {
            let d = {},
                e = a.childNodes[c];
            GL(e.style, d);
            if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return e
        }
        return null
    }

    function GY(a, b) {
        a.style.display = b ? "inline-block" : "none";
        var c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function HY(a, b) {
        var c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.i != c) {
            a.i = c;
            a = lI();
            for (let d of a)
                if (d.Nc.offsetWidth != d.offsetWidth || d.I.google_full_width_responsive_allowed) d.offsetWidth = d.Nc.offsetWidth, KA(467, () => {
                    var e = d.Nc,
                        f = d.I,
                        g = FY(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    if (e.getAttribute("src")) {
                        var h = e.getAttribute("src") || "",
                            k = Kl(h, "client");
                        k && (f.google_ad_client = AY("google_ad_client", k));
                        (h = Kl(h, "host")) && (f.google_ad_host = AY("google_ad_host", h))
                    }
                    h = !1;
                    for (var l of e.attributes)
                        if (/data-/.test(l.name))
                            if (k = Ia(l.name.replace("data-matched-content",
                                    "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), (l.name === "data-tag-for-child-directed-treatment" || l.name === "data-tag-for-under-age-of-consent") && l.value === "1") console.warn(`${l.name} is deprecated. Use data-tag-for-age-treatment="1" instead.`), h = !0;
                            else if (!f.hasOwnProperty(k)) {
                        var m = AY(k, l.value);
                        m !== null && (f[k] = m)
                    }
                    h && (f.google_tag_for_age_treatment = 1);
                    S(jw) || !f.google_ad_intents_format || f.google_ad_intent_query || (f.google_reactive_ad_format = 40);
                    if (b.document && b.document.body &&
                        !sY(f) && !f.google_reactive_ad_format && !f.google_ad_intent_query && (k = parseInt(e.style.width, 10), h = zY(e, b), h > 0 && k > h)) {
                        l = parseInt(e.style.height, 10);
                        k = !!xY[k + "x" + l];
                        m = h;
                        if (k) {
                            let n = yY(h, l);
                            if (n) m = n, f.google_ad_format = n + "x" + l + "_0ads_al";
                            else throw new EA("No slot size for availableWidth=" + h);
                        }
                        f.google_ad_resize = !0;
                        f.google_ad_width = m;
                        k || (f.google_ad_format = null, f.google_override_format = !0);
                        h = m;
                        e.style.width = `${h}px`;
                        wY(f, 4)
                    }
                    if (S(Sv) || Lr(b) < 488) {
                        h = uj(b) || b;
                        l = e.offsetWidth || vy(e, b, "width") || f.google_ad_width ||
                            0;
                        k = f.google_ad_client;
                        if (h = OR(h.location, "google_responsive_slot_preview") || zU(h, k)) a: if (f.google_reactive_ad_format || f.google_ad_resize || sY(f) || HL(e, f)) h = !1;
                            else {
                                for (h = e; h; h = h.parentElement) {
                                    k = Kj(h, b);
                                    if (!k) {
                                        f.gfwrnwer = 18;
                                        h = !1;
                                        break a
                                    }
                                    if (!fb(["static", "relative"], k.position)) {
                                        f.gfwrnwer = 17;
                                        h = !1;
                                        break a
                                    }
                                }
                                if (!S(gw) && (h = T(Zv), l = JL(b, e, l, h, f), l !== !0)) {
                                    f.gfwrnwer = l;
                                    h = !1;
                                    break a
                                }
                                h = b === b.top ? !0 : !1
                            }
                        h && wY(f, 1)
                    }
                    if (!sY(f))
                        if (HL(e, f)) {
                            if (l = Kj(e, b)) e.style.width = l.width, e.style.height = l.height, GL(l, f);
                            f.google_ad_width ||
                                (f.google_ad_width = e.offsetWidth);
                            f.google_ad_height || (f.google_ad_height = e.offsetHeight);
                            f.google_loader_features_used = 256;
                            f.google_responsive_auto_format = BY(b, f)
                        } else GL(e.style, f);
                    l = !!f.iaaso;
                    (h = sY(f)) ? uY(h, e, f, b, l): b.location && b.location.hash === "#gfwmrp" || f.google_responsive_auto_format === 12 && f.google_full_width_responsive === "true" ? uY(10, e, f, b, !1) : Math.random() < .01 && f.google_responsive_auto_format === 12 && (l = KL(e.offsetWidth || parseInt(e.style.width, 10) || f.google_ad_width, b, e, f), l !== !0 ? (f.efwr = !1,
                        f.gfwrnwer = l) : f.efwr = !0);
                    l = FY(e, f);
                    !l && g && e.childNodes.length == 1 ? (GY(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", CY(e, f, b)) : l && g && l != g && (GY(g, !1), GY(l, !0))
                })
        }
    }
    var IY = class extends N {
        constructor() {
            super(...arguments);
            this.i = null
        }
        init(a) {
            var b = aI();
            if (!fI(b, 27, !1)) {
                gI(b, 27, !0);
                this.i = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    HY(this, a)
                };
                Ji(a, "resize", c);
                ys(this, () => {
                    Ki(a, "resize", c)
                })
            }
        }
    };
    var JY = X(function(a, b, c, d) {
        b && (d.push(DY(b, c)), cr(IY).init(b));
        return {}
    }, {
        id: 1417,
        H: {}
    });

    function KY(a) {
        a.A = a.B;
        a.C.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.i.style.transition = "height 500ms";
        LY(a)
    }

    function MY(a, b) {
        qQ(a.i.contentWindow, "sth", {
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b
        }, "*")
    }

    function LY(a) {
        var b = `rect(0px, ${a.i.width}px, ${a.A}px, 0px)`;
        a.i.style.clip = b;
        a.l.style.clip = b;
        a.i.setAttribute("height", a.A.toString());
        a.i.style.height = `${a.A}px`;
        a.l.setAttribute("height", a.A.toString());
        a.l.style.height = `${a.A}px`;
        a.C.style.height = `${a.A}px`
    }

    function NY(a, b) {
        b = Nj(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.O = Ci(a.C).y;
        a.J = Ur(a.j);
        if (a.O + a.A < a.J) return "2";
        if (a.O > Pr(a.j) - a.j.innerHeight) return "3";
        b = a.J;
        a.i.setAttribute("height", a.B.toString());
        a.i.style.height = `${a.B}px`;
        a.l.style.overflow = "hidden";
        a.C.style.position = "relative";
        a.C.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.i.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.O, a.A);
        ui(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.i.width}px, ${b}px, 0px)`;
        ui(a.i, {
            clip: b
        });
        ui(a.l, {
            clip: b
        });
        return "0"
    }
    var OY = class extends EX {
        constructor(a, b) {
            super(a.K, b);
            this.tb = this.Wc = !1;
            this.qa = this.J = this.B = 0;
            this.l = a.ea;
            this.C = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Dk = this.A / 5;
            this.O = Ci(this.C).y;
            this.Bk = vh(LA(651, () => {
                this.O = Ci(this.C).y;
                var c = this.J;
                this.J = Ur(this.j);
                this.A < this.B ? (c = this.J - c, c > 0 && (this.qa += c, this.qa >= this.Dk ? (KY(this), MY(this, this.B)) : (this.A = Math.min(this.B, this.A + c), MY(this,
                    c), LY(this)))) : Ki(this.j, "scroll", this.U)
            }), this);
            this.U = () => {
                var c = this.Bk;
                Ok.requestAnimationFrame ? Ok.requestAnimationFrame(c) : c()
            }
        }
        Z(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Wr(b);
                this.Wc || (this.Wc = !0, b = NY(this, b), b === "0" && Ji(this.j, "scroll", this.U, Gi), qQ(c.target, "sth", {
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0"
                }, "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.tb || (this.tb = !0, KY(this), Ki(this.j, "scroll", this.U))
            }
        }
        W() {
            this.U && Ki(this.j, "scroll", this.U, Gi);
            super.W()
        }
    };
    var PY = X(function(a, b) {
        var c = a.ja,
            d = a.Xa;
        a = a.Ka;
        b.K && d && a(new OY(b, c));
        return {}
    }, {
        id: 1428,
        H: {}
    });
    var QY = class extends J {},
        RY = Hg(QY);

    function SY(a, b, c, d, e, f, g, h, k, l, m, n, p, q) {
        h = h === void 0 ? 0 : h;
        k = k === void 0 ? 0 : k;
        l = l === void 0 ? "" : l;
        m = m === void 0 ? !1 : m;
        n = n === void 0 ? "" : n;
        p = p === void 0 ? -1 : p;
        q = q === void 0 ? -1 : q;
        a = a && a.Sb;
        return KC("<style" + (a ? ' nonce="' + U(mD(a)) + '"' : "") + ">#" + V(c) + " {display: inline-block; height: " + V(f) + "; width: " + V(g) + ";}\x3c/style>" + (m ? '<div id="' + U(c) + '"></div>' : '<ins id="' + U(c) + '" class="adsbygoogle" data-ad-client="' + U(l) + '" data-ad-intent-query="' + U(e) + '" data-ad-intents-ad-position="' + U(k) + '" data-ad-intents-format="' +
            U(b) + '"' + (n !== "" ? ' data-kw="' + U(n) + '"' : "") + ' data-query-targeted="' + U(d) + '"' + (p !== -1 ? ' data-override-adx="' + U(p) + '"' : "") + (q !== -1 ? ' data-override-ady="' + U(q) + '"' : "") + (h !== 0 ? ' data-ad-intents-in-drawer-format="' + U(h) + '"' : "") + "></ins>"))
    };

    function TY(a, b) {
        var c = b ? ? {},
            d = a.Qd,
            e = a.jb;
        b = a.Ml;
        var f = a.Gh,
            g = a.Qf,
            h = a.Jc,
            k = h === void 0 ? "" : h,
            l = a.gi;
        h = a.De;
        var m = h === void 0 ? -1 : h;
        h = a.Ee;
        var n = h === void 0 ? -1 : h,
            p = a.Wm,
            q = a.Xm,
            r = a.Zm,
            v = a.vn,
            y = a.Qn,
            G = a.Rn;
        h = c && c.Sb;
        var w = c && c.yl;
        a = cD(bD(eD(), "<style" + (h ? ' nonce="' + U(mD(h)) + '"' : "") + ">body {font-family: 'Google Sans', Roboto, Arial, sans-serif; margin: 0;" + (l ? "" : "padding-block-start: 8px;") + 'overflow: hidden;}.display-slot-container {line-height: 0;}#original-content {padding-block-end: 24px; overflow: hidden; background-image: linear-gradient(#e9f1fe 0px, transparent 300px); min-height: 300px;}.header {line-height: 35px; font-size: 25px; font-weight: 400; padding-inline-start: 24px; padding-inline-end: 24px; padding-block-start: 24px;}#gda-search-term {color: #4285f4;}@supports (background-clip: text) {#gda-search-term {background-image: linear-gradient(90deg, #4285f4, #33a1ce); background-clip: text; color: transparent;}}.generated-by {font-size: 14px; font-weight: 500; color: #1f1f1f; padding: 16px 24px 0; display: flex; align-items: center; gap: 8px; height: 24px;}.icon {flex-shrink: 0;}[dir="rtl"] .icon {transform: scaleX(-1);}.generated-by span {margin-bottom: -2px;}#original-content .display-slot-container {float: left; padding-block-start: 16px;}p,ul,h1,h2,h3 {margin: 0 24px; font-size: 16px; font-weight: 400; line-height: 25px; color: #5c5f5e; clear: both;}h1,h2,h3 {font-size: 20px; font-weight: 500; color: #1f1f1f; padding-block-start: 24px;}p, ul {padding-block-start: 16px;}.item-title {font-weight: 500; color: #1f1f1f;}.disclaimer-container {display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; padding: 16px 24px 0;}.disclaimer {font-size: 12px; line-height: 16px; color: #5c5f5e; padding: 0; flex-grow: 1;}.feedback-btns {display: flex; gap: 2px; flex-shrink: 0;}.feedback-btn {position: relative; background: none; border: none; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; color: #5c5f5e; cursor: pointer; transition: background-color 0.1s, border-color 0.1s, color 0.1s, opacity 0.1s; padding: 0;}.feedback-btn:hover {background-color: #f1f3f4; color: #1f1f1f;}.feedback-btn .icon-sel, .feedback-btn.selected .icon-def {display: none;}.feedback-btn.selected .icon-sel {display: block;}#feedback-neg svg {transform: rotate(180deg);}.dm-container {padding: 16px; margin: 16px 32px 0 32px; background-color: #f3f5f6; border-radius: 16px; font-size: 14px; font-weight: 500; clear: both;}.dm-title {color: #1f1f1f; display: flex; align-items: center; gap: 8px;}.dm-chips {display: flex; flex-wrap: wrap; gap: 8px; margin-block-start: 16px;}.dm-chip {display: inline-flex; align-items: center; gap: 8px; border: none; border-radius: 20px; padding: 6px 12px; background-color: #0b57d0; color: #fff; font: inherit; cursor: pointer; white-space: nowrap;}' +
            (b ? "body {font-family: 'Google Sans Text', 'Google Sans', Roboto, Arial, sans-serif;}.header, h1, h2, h3 {font-family: 'Google Sans', Roboto, Arial, sans-serif; padding: 0; margin: 0 0 8px;}.generated-by {font-size: 12px; line-height: 16px; padding: 0; margin: 0 0 8px; height: 21px;}#original-content {padding: 24px 24px 8px;}#original-content #skeleton-loader {padding: 16px 0;}#original-content .display-slot-container, p, ul {padding-block: 0; margin: 0 0 16px;}.disclaimer-container {padding: 0; margin: 0 0 16px;}.dm-container {margin: 0 0 16px;}" :
                "") + "\x3c/style>" + (q !== -1 ? "<script" + (w ? ' nonce="' + U(mD(w)) + '"' : "") + ">window[" + WC(XC(p)) + "] = " + WC(XC(q)) + ";\x3c/script>" : "") + (f !== "" ? '<meta name="google-adsense-platform-account" content="' + U(f) + '">' : "")), y ? bD(cD(bD(eD(), '<div id="drawer-content-root">'), UY(NC({
            Jc: k,
            De: m,
            Ee: n
        }, a), c)), "</div>") : UY(NC({
            Jc: k,
            De: m,
            Ee: n
        }, a), c));
        c = (d !== 4 || g ? "" : "<script" + (w ? ' nonce="' + U(mD(w)) + '"' : "") + ">(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>") + "<script" + (w ? ' nonce="' + U(mD(w)) + '"' : "") +
            ">parent.postMessage({'action':'sgda-ready'}, parent.location.origin);\x3c/script>";
        G ? b = g ? "" : "<script" + (w ? ' nonce="' + U(mD(w)) + '"' : "") + ">parent.fakeAdsByGoogle(window);\x3c/script>" : (g ? e = "" : (JC(r, CC) || JC(r, DC) ? g = String(r).replace(jD, iD) : r instanceof Ug ? (g = Wg(r).toString(), g = String(g).replace(jD, iD)) : (g = String(r), g = kD.test(g) ? g.replace(jD, iD) : "about:invalid#zSoyz"), d = '<script data-ad-intent-query="" data-page-url="' + U(g) + '" data-ad-intents-format="' + U(d) + '"' + (v ? ' data-adtest="on"' : "") + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=',
            e = encodeURIComponent(String(e)), $C.lastIndex = 0, e = $C.test(e) ? e.replace($C, aD) : e, e = d + e + '" crossorigin="anonymous"' + (w ? ' nonce="' + U(mD(w)) + '"' : "") + ">\x3c/script>"), b = e + (b ? '<link href="https://fonts.googleapis.com/css?family=Google+Sans:400,500|Google+Sans+Text:400,500" rel="stylesheet"' + (h ? ' nonce="' + U(mD(h)) + '"' : "") + ">" : '<link href="https://fonts.googleapis.com/css?family=Google+Sans:400,500" rel="stylesheet"' + (h ? ' nonce="' + U(mD(h)) + '"' : "") + ">"));
        return bD(a, c + b)
    }

    function UY(a, b) {
        var c = a.Ae,
            d = a.Fd,
            e = a.Ge,
            f = a.searchTerm,
            g = a.nk,
            h = a.pk,
            k = a.Jc,
            l = a.De,
            m = a.Ee,
            n = a.Qd,
            p = a.Zc,
            q = a.jb,
            r = a.Ef,
            v = a.Qf;
        k = k === void 0 ? "" : k;
        l = l === void 0 ? -1 : l;
        var y = m === void 0 ? -1 : m;
        m = a.yf;
        var G = a.zf;
        a = a.Df;
        f = bD(cD(eD(), c ? "" : bD(cD(bD(eD(), '<div id="display-slot-container" class="display-slot-container"' + (e ? "" : ' style="position:absolute"') + ">"), SY(b, n, "display-slot", !1, "", g, h, p, 1, q, v, k, l, y)), "</div>")), '<div id="original-content"><div class="header" role="heading" aria-level="1"><span id="gda-search-term">' +
            IC(f) + "</span></div>");
        c || e ? b = VY(r, d, m, G, a) : (b = (b = b ? ? {}) && b.Sb, b = KC("<style" + (b ? ' nonce="' + U(mD(b)) + '"' : "") + '>@keyframes skeleton-enter {0% {opacity: 0;}100% {opacity: 1;}}@keyframes skeleton-stretch-in {0% {transform: scaleX(0);}100% {transform: scaleX(1);}}@keyframes inline-shimmer {0% {background-position: 0% 0%;}100% {background-position: -200% 0%;}}#skeleton-loader {display: flex; flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px; box-sizing: border-box; width: 100%;}.loader {inline-size: var(--line-width, 100%); block-size: 16px; border-radius: 8px; animation: inline-shimmer 2100ms calc(var(--order, 0) * 100ms) linear infinite both; background: linear-gradient( 90deg, #f0f4f9 20%, #f0f4f9, #d3dbe5,  #f0f4f9); background-size: 200% 100%; transform-origin: left; animation-name: skeleton-enter, skeleton-stretch-in, inline-shimmer; animation-duration: 350ms, 600ms, 2100ms; animation-delay: 200ms, 250ms, 50ms; animation-fill-mode: both; animation-timing-function: linear, cubic-bezier(0.2, 0, 0, 1), linear; animation-iteration-count: 1, 1, infinite;}\x3c/style><div id="skeleton-loader"><div class="loader" style="--order: 1;"></div><div class="loader" style="--order: 2; --line-width: 85%"></div><div class="loader" style="--order: 3; --line-width: 65%"></div></div>'));
        return bD(cD(f, b), "</div>")
    }

    function VY(a, b, c, d, e) {
        var f = eD();
        a = bD(cD(bD(eD(), '<div class="generated-by">'), WY()), "<span>" + IC(a) + "</span></div>");
        f = cD(f, a);
        a = eD();
        b = Je(b, Zu, 1, re());
        var g = b.length;
        for (let m = 0; m < g; m++) {
            var h = b[m];
            if (af(h, Wu, 1, $u)) h = af(h, Wu, 1, $u), h = h.getLevel() === 1 ? "<h1>" + OC(E(h, 2)) + "</h1>" : h.getLevel() === 2 ? "<h2>" + OC(E(h, 2)) + "</h2>" : "<h3>" + OC(E(h, 2)) + "</h3>", bD(a, h);
            else if (af(h, Xu, 2, $u)) h = af(h, Xu, 2, $u), h = E(h, 1), bD(a, "<p>" + IC(h) + "</p>");
            else if (af(h, Yu, 3, $u)) {
                bD(a, "<ul>");
                h = af(h, Yu, 3, $u);
                h = se(h, 1, rd, re());
                var k =
                    h.length;
                for (var l = 0; l < k; l++) bD(a, "<li>" + IC(h[l]) + "</li>");
                bD(a, "</ul>")
            } else if (af(h, Vu, 5, $u)) {
                bD(a, "<ul>");
                h = af(h, Vu, 5, $u);
                h = Je(h, Uu, 1, re());
                k = h.length;
                for (l = 0; l < k; l++) {
                    let n = h[l];
                    bD(a, "<li>" + (E(n, 1) ? '<span class="item-title">' + OC(E(n, 1)) + "</span> " : "") + OC(E(n, 2)) + "</li>")
                }
                bD(a, "</ul>")
            }
        }
        cD(a, e ? bD(cD(bD(eD(), '<div class="disclaimer-container"><div class="disclaimer">' + IC(e) + "</div>"), d && c ? bD(cD(bD(cD(bD(eD(), '<div class="feedback-btns"><button id="feedback-pos" class="feedback-btn" aria-label="' +
            U(d) + '" title="' + U(d) + '">'), XY()), '</button><button id="feedback-neg" class="feedback-btn" aria-label="' + U(c) + '" title="' + U(c) + '">'), XY()), "</button></div>") : ""), "</div>") : "");
        return cD(f, a)
    }

    function WY() {
        return KC('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M14 21L11 18L14 15L17 18L14 21ZM6 18L0 12L6 6L12 12L6 18ZM15.5 11C15.5 9.46667 14.9667 8.16667 13.9 7.1C12.8333 6.03333 11.5333 5.5 10 5.5C11.5333 5.5 12.8333 4.96667 13.9 3.9C14.9667 2.83333 15.5 1.53333 15.5 0C15.5 1.53333 16.0333 2.83333 17.1 3.9C18.1667 4.96667 19.4667 5.5 21 5.5C19.4667 5.5 18.1667 6.03333 17.1 7.1C16.0333 8.16667 15.5 9.46667 15.5 11Z" fill="url(#spark-gradient)"/><defs><linearGradient id="spark-gradient" x1="0" y1="10.5" x2="21" y2="10.5" gradientUnits="userSpaceOnUse"><stop stop-color="#4285f4ff"/><stop offset="1" stop-color="#2daeb8ff"/></linearGradient></defs></svg>')
    }

    function XY() {
        return KC('<svg viewBox="0 -960 960 960" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path class="icon-def" d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/><path class="icon-sel" d="M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z"/></svg>')
    };
    const YY = [255, 255, 255];

    function ZY(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        c = document.createElement("canvas");
        c.width = c.height = 1;
        if (c = c.getContext("2d", {
                willReadFrequently: !0
            })) return c.fillStyle = a, c.fillRect(0, 0, 1, 1), a = c.getImageData(0, 0, 1, 1).data, [a[0], a[1], a[2], a[3] / 255];
        throw Error(`Invalid color: ${a}`);
    }

    function $Y(a) {
        return aZ(ZY(getComputedStyle(a).color))
    }

    function bZ(a, b) {
        var c = getComputedStyle(a);
        if (c.backgroundImage !== "none") return null;
        c = ZY(c.backgroundColor);
        var d = aZ(c);
        if (d) return d;
        b = (a = a.parentElement) ? bZ(a, b) : YY;
        if (!b) return null;
        a = c[3];
        return [Math.round(a * c[0] + (1 - a) * b[0]), Math.round(a * c[1] + (1 - a) * b[1]), Math.round(a * c[2] + (1 - a) * b[2])]
    }

    function aZ(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function cZ(a, b) {
        b = a.document.createElement(b);
        K(b, zv(a));
        K(b, {
            color: "inherit",
            cursor: "inherit",
            direction: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-weight": "inherit",
            "text-align": "inherit",
            "text-orientation": "inherit",
            visibility: "inherit",
            "writing-mode": "inherit"
        });
        return b
    }

    function dZ(a, b) {
        a = a.document.createElementNS("http://www.w3.org/2000/svg", b);
        K(a, {
            animation: "initial",
            background: "initial",
            border: "0",
            "box-shadow": "none",
            color: "inherit",
            cursor: "inherit",
            direction: "inherit",
            display: "inline",
            fill: "currentcolor",
            filter: "initial",
            "float": "none",
            margin: "0",
            opacity: "initial",
            outline: "0",
            overflow: "initial",
            padding: "0",
            stroke: "initial",
            transform: "initial",
            "vertical-align": "initial",
            visibility: "inherit"
        });
        return a
    }

    function eZ(a) {
        a.dataset.googleVignette = "false";
        a.dataset.googleInterstitial = "false"
    }

    function fZ(a) {
        return a[0] === 255 && a[1] === 255 && a[2] === 255 || a[0] === 0 && a[1] === 0 && a[2] === 0
    }

    function gZ(a, b) {
        var c = a.document.createElement("div");
        c.style.color = b;
        c.style.display = "none";
        try {
            a.document.body.appendChild(c);
            var d = a.getComputedStyle(c).color
        } catch {
            return null
        } finally {
            c.remove()
        }
        a = ZY(d);
        return a[3] > 0 ? a : null
    }

    function hZ(a, b) {
        if (!b) return null;
        var c = a.document.querySelector('meta[name="theme-color"]');
        if (c && (c = c.getAttribute("content")) && (c = gZ(a, c))) return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${b})`;
        c = a.getComputedStyle(a.document.documentElement);
        var d = ["--primary-color", "--brand-color", "--theme-color"];
        for (var e of d)
            if (d = c.getPropertyValue(e).trim())
                if (d = gZ(a, d)) return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${b})`;
        if (e = a.document.querySelector("header, nav, .header, #header"))
            if (e = a.getComputedStyle(e).backgroundColor,
                e = ZY(e), e[3] > 0 && !fZ(e)) return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${b})`;
        if (e = a.document.querySelector('button[type="submit"], .btn-primary, button'))
            if (e = a.getComputedStyle(e).backgroundColor, e = ZY(e), e[3] > 0 && !fZ(e)) return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${b})`;
        e = a.document.querySelectorAll("a");
        for (let f of e) {
            if (f.getAttribute("href") ? .startsWith("#")) continue;
            e = a.getComputedStyle(f).color;
            e = ZY(e);
            if (e[3] !== 0) return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${b})`
        }
        return `rgba(26, 115, 232, ${b})`
    };

    function iZ(a, b, c) {
        a = jZ(a, b, c);
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function kZ(a, b, c) {
        a = lZ(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        K(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }

    function jZ(a, b, c) {
        a = lZ(a, "0 -960 960 960", b, b, "M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-528q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v528q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-528H168v528Zm72-96h480v-72H240v72Zm0-144h168v-216H240v216Zm240 0h240v-72H480v72Zm0-144h240v-72H480v72ZM168-216v-528 528Z");
        K(a, {
            fill: c,
            cursor: "inherit"
        });
        return a
    }

    function lZ(a, b, c, d, e) {
        var f = dZ(a, "svg");
        f.setAttribute("viewBox", b);
        f.setAttribute("width", c);
        f.setAttribute("height", d);
        f.appendChild(dZ(a, "path")).setAttribute("d", e);
        return f
    };

    function mZ(a, b) {
        a = dv(a).filter(nZ).map(c => E(c, 1)).filter(c => c !== b);
        if (!(a.length < 2)) return a.slice(0, 4)
    }

    function nZ(a) {
        return E(a, 1).length <= 30 && (Ue(a, 5) != null || Ue(a, 7) != null || Ue(a, 12) != null)
    };

    function oZ(a, b, c = !1) {
        if (!b) return {
            Eb: "",
            Db: ""
        };
        c = c && a.F.ie ? 48 : 0;
        var d = a.fj,
            e = hi(document, "DIV");
        e.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
        var f = hi(document, "DIV"),
            g = "200px";
        if (g instanceof Ah) {
            var h = g.height;
            g = g.width
        } else h = "200px";
        f.style.width = Di(g);
        f.style.height = Di(h);
        e.appendChild(f);
        document.body.appendChild(e);
        f = e.offsetWidth - e.clientWidth;
        ii(e);
        c = Y(d - f - c);
        a = (aa = (aa = ia(b, "replaceAll").call(b, "<SW>", c), ia(aa, "replaceAll")).call(aa, "<DH>", Y(a.oh)), ia(aa,
            "replaceAll")).call(aa, "<LDH>", Y(a.Cm));
        return {
            Eb: c,
            Db: a
        }
    }

    function pZ(a) {
        if (a.contentDocument ? .body && a.contentWindow) {
            var b = () => {
                a.contentDocument ? .body && K(a, {
                    height: Y(a.contentDocument.body.scrollHeight)
                })
            };
            b();
            var c = new a.contentWindow.ResizeObserver(() => void b());
            c.observe(a.contentDocument.body);
            return () => void c.disconnect()
        }
    }

    function qZ(a, b) {
        return gh("body", {
            dir: a.X ? "rtl" : "ltr",
            lang: E(a.P, 7)
        }, b)
    }

    function rZ(a, b, c) {
        var d = a.win.document.createElement("iframe");
        d.title = b;
        K(d, {
            display: "block",
            border: "0",
            width: "100%",
            height: Y(a.oh)
        });
        d.srcdoc = Qg(c);
        return d
    };

    function sZ(a) {
        switch (a) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    };
    class tZ {
        constructor(a) {
            this.i = a || bi()
        }
    };
    const uZ = ["P", "UL"],
        vZ = ["DIV"];

    function wZ(a) {
        var b = a.j.getElementById("skeleton-loader");
        if (b || !a.Ge && !a.i.F.za)
            if (b ? .remove(), b = a.j.getElementById("original-content")) {
                var c = E(a.i.P, 9),
                    d = a.A;
                c = {
                    Ef: c,
                    Fd: a.Fd,
                    zf: E(a.i.P, 29),
                    yf: E(a.i.P, 30),
                    Df: E(a.i.P, 11)
                };
                a = d.i || bi();
                d = c || pD;
                (c = (d = VY(d.Ef, d.Fd, d.yf, d.zf, d.Df)) && d.Bg ? d.Bg() : null) ? a = c: (d = oD(d), a = qi(a, d));
                b.appendChild(a)
            }
    }

    function xZ(a) {
        var b = aG("button"),
            c = a.j.getElementById("feedback-pos"),
            d = a.j.getElementById("feedback-neg");
        b(c) && b(d) && (a.i.qb(999, c, () => {
            yZ(a, 1, c, d);
            return !1
        }), a.i.qb(999, d, () => {
            yZ(a, 2, d, c);
            return !1
        }))
    }

    function zZ(a) {
        var b = a.j.getElementById("original-content");
        if (b) {
            var c = [];
            for (var d of b.children) {
                if (!uZ.includes(d.tagName)) continue;
                var e = d.nextElementSibling;
                e && !vZ.includes(e.tagName) && c.push(d.nextElementSibling)
            }
            d = -1;
            e = b.getBoundingClientRect().top;
            for (var f = 0; f < c.length; f++)
                if (c[f].getBoundingClientRect().top - e + (a.i.F.ie ? 0 : 16) >= a.i.oh) {
                    d = f;
                    break
                }
            AZ(a, b, d === -1 ? null : c[d], a.C, "display-slot-3", 3);
            d !== -1 && c.splice(d, 1);
            e = null;
            d !== -1 && (e = AZ(a, b, null, "calc(<SW> / 1.2)", "display-slot-4", 4));
            if (a.i.F.md) {
                f =
                    a.B;
                var g = a.A,
                    h = a.i.P,
                    k = mZ(h, a.l);
                if (k)
                    if (h = {
                            Jl: Ue(h, 31) ? ? "Discover more:"
                        }, g = g.i, h = (h || pD).Jl, h = bD(cD(bD(eD(), '<div class="dm-container"><div class="dm-title">'), WY()), IC(h) + '</div><div class="dm-chips"></div></div>'), g = nD(h, g), h = g.querySelector(".dm-chips")) {
                        for (l of k) {
                            k = f;
                            let m = k.document.createElement("button");
                            m.type = "button";
                            m.classList.add("dm-chip");
                            m.setAttribute("data-dm-term", l);
                            let n = jZ(k, "16px", "#ffffff");
                            n.setAttribute("aria-hidden", "true");
                            m.appendChild(n);
                            m.appendChild(k.document.createTextNode(l));
                            h.appendChild(m)
                        }
                        var l = g
                    } else l = null;
                else l = null;
                if (l) {
                    let m;
                    switch (a.i.F.kh) {
                        case 1:
                            d !== -1 && d < c.length ? m = c[d] : m = e;
                            break;
                        case 2:
                            m = e;
                            break;
                        case 3:
                            m = null;
                            break;
                        default:
                            m = c[0] ? ? e
                    }
                    b.insertBefore(l, m)
                }
            }
        }
    }

    function AZ(a, b, c, d, e, f) {
        var {
            Eb: g,
            Db: h
        } = oZ(a.i, d, !0);
        d = a.A.i;
        e = {
            id: e,
            jb: a.jb,
            searchTerm: "",
            Qd: a.i.format,
            Zc: a.Zc,
            zm: !1,
            Jc: a.l,
            Gk: f,
            Eb: g,
            Db: h
        };
        e = SY({}, e.Qd, e.id, e.zm, e.searchTerm, e.Db, e.Eb, e.Zc, e.Gk, e.jb, e.Qf, e.Jc, e.De, e.Ee);
        d = nD(e, d);
        d.classList.add("display-slot-container");
        b.insertBefore(d, c);
        a = a.B;
        a.adsbygoogle = a.adsbygoogle || [];
        a.adsbygoogle.push({});
        return d
    }

    function yZ(a, b, c, d) {
        c.classList.contains("selected") ? (c.classList.remove("selected"), a.i.Mj ? .(0, a.l)) : (c.classList.add("selected"), d ? .classList.remove("selected"), a.i.Mj ? .(b, a.l))
    }
    var CZ = class extends N {
        constructor(a, b, c, d, e, f, g) {
            var h = ny(yx);
            super();
            this.jb = a;
            this.i = b;
            this.B = c;
            this.Fd = d;
            this.l = e;
            this.Zc = f;
            this.C = h;
            this.Ge = g;
            this.j = this.B.document;
            this.A = new tZ(new ci(this.j));
            b.Fa(999, this.init())
        }
        async init() {
            var a = this.j.getElementById("display-slot-container");
            if (this.Ge || !a && this.i.F.za) this.i.Kj();
            else {
                a = await BZ(a, b => void ys(this, b));
                if (this.ka) return;
                this.i.Kj();
                if (a === 0 && (await this.delay(), this.ka)) return
            }
            wZ(this);
            xZ(this);
            zZ(this)
        }
        delay() {
            return new Promise(a => {
                var b =
                    this.i.Bb(999, this.i.win, a, 1200);
                ys(this, () => {
                    this.i.win.clearTimeout(b);
                    a()
                })
            })
        }
    };

    function DZ(a, b) {
        var c = dv(a.i.P).find(f => E(f, 1) === b) ? .pj();
        if (!c) throw Error(`No content for term: ${b}`);
        a.A.dispose();
        a.i.Oc();
        var d = S(jx);
        EZ(a, b, c, d);
        var e = a.C.querySelectorAll("ins.adsbygoogle").length;
        a.A = new CZ(a.jb, a.i, a.B, Ge(c, av, 1), b, 2, d);
        a = a.B;
        a.adsbygoogle = a.adsbygoogle || [];
        for (c = 0; c < e; c++) a.adsbygoogle.push({})
    }

    function FZ(a, b) {
        if (a.ka || !ZF(b.target)) return !0;
        b = b.target.closest("[data-dm-term]") ? .getAttribute("data-dm-term");
        var c = a.l.V;
        if (!b || b === c) return !0;
        a.l.i(b);
        a.i.Sm(b);
        var d = tD(a.i.win) ? .pushEvent(),
            e = {
                kk: b,
                nn: d
            };
        d && a.i.Fa(999, d.navigatedBack.then(f => {
            !a.ka && GZ(a, e) && f.isFinal && a.l.i(c)
        }));
        a.j.push(e);
        a.i.cf ? .isVisible.i(a.j.length > 1);
        return !1
    }

    function GZ(a, b) {
        b = a.j.indexOf(b);
        if (b < 1) return !1;
        a.j.splice(b);
        a.i.cf ? .isVisible.i(a.j.length > 1);
        return !0
    }

    function EZ(a, b, c, d) {
        var {
            Eb: e,
            Db: f
        } = oZ(a.i, ny(yx));
        b = {
            Qd: a.i.format,
            Zc: 2,
            jb: a.jb,
            zf: E(a.i.P, 29),
            yf: E(a.i.P, 30),
            Ef: E(a.i.P, 9),
            Df: E(a.i.P, 11),
            Jc: b,
            Fd: Ge(c, av, 1),
            Ge: d,
            searchTerm: b,
            Ae: a.i.F.za && !!a.i.Ae,
            nk: f,
            pk: e,
            Qf: !1
        };
        a = a.C;
        (b = UY(b || pD, {})) && b.j && a ? b.j(a) : (b = oD(b), a.innerHTML = Qg(b))
    }
    var HZ = class extends N {
        constructor(a, b, c, d) {
            super();
            this.jb = a;
            this.i = b;
            this.B = c;
            this.C = d;
            this.l = new P(b.searchTerm);
            this.j = [{
                kk: b.searchTerm
            }];
            new tZ(new ci(c.document));
            this.A = new CZ(a, b, c, Ge(b.content, av, 1), this.l.V, 0, !1);
            Fs(this.l).listen(e => {
                DZ(this, e)
            });
            b.cf && b.cf.gf.listen(() => {
                if (!(this.ka || this.j.length <= 1)) {
                    var e = this.j[this.j.length - 1];
                    GZ(this, e);
                    this.l.i(this.j[this.j.length - 1].kk);
                    e.nn ? .triggerNavigateBack()
                }
            });
            b.qb(999, d, e => FZ(this, e));
            ys(this, () => {
                this.A.dispose()
            })
        }
    };

    function IZ(a, b, c) {
        return a ? c ? b.innerHeight - 55 : .95 * b.innerHeight - 30 : b.innerHeight - 24 - 20
    };

    function JZ(a, b) {
        return E(a, 10).replace("TERM", b)
    };
    async function BZ(a, b) {
        var c = a.querySelector("ins"),
            d = new tQ,
            e = new MutationObserver((f, g) => {
                f = c.getAttribute("data-ad-status");
                f === "filled" ? (g.disconnect(), a.style.position = "", d.resolve(0)) : f === "unfilled" && (g.disconnect(), a.style.position === "absolute" && a.remove(), d.resolve(1))
            });
        e.observe(c, {
            attributeFilter: ["data-ad-status"]
        });
        b(() => {
            e.disconnect();
            d.resolve(1)
        });
        return d.promise
    }

    function KZ(a, b) {
        var c = b.content;
        if (!le(c, av, 1)) throw Error("Original content is not available");
        var {
            Eb: d,
            Db: e
        } = oZ(b, ny(yx)), f = {
            yl: Ph(b.win.document)
        }, g = {
            searchTerm: b.searchTerm,
            jb: a.jb,
            Gh: a.Gh ? ? "",
            pk: d,
            nk: e,
            Rn: !!D(b.P, 13),
            vn: D(b.P, 3),
            Wm: "goog_pvsid",
            Xm: a.i,
            Zm: a.Zb,
            Jc: b.searchTerm,
            Qd: b.format,
            De: b.xa ? -1 : Math.round(b.win.innerWidth - b.fj),
            Ee: b.xa ? Math.round(b.win.innerHeight - IZ(b.xa, b.win, b.F.Ac)) : -1,
            Ae: b.F.za && !!b.Ae,
            Qn: b.F.md,
            zf: E(b.P, 29),
            yf: E(b.P, 30),
            Ef: E(b.P, 9),
            Df: E(b.P, 11),
            Fd: Ge(c, av, 1),
            Ge: !1,
            Zc: 0,
            Qf: !1,
            gi: b.gi,
            Ml: b.F.ie
        };
        f = TY(g, f);
        f = qZ(b, f.Fb());
        var h = rZ(b, JZ(b.P, b.searchTerm), f),
            k, l, m = b.Gg(999, b.win, n => {
                n.data.action === "sgda-ready" && h.contentWindow && n.source === h.contentWindow && !k && (l = pZ(h), n = h.contentWindow.document ? .getElementById("drawer-content-root"), b.F.md && n ? k = new HZ(a.jb, b, h.contentWindow, n) : k = new CZ(a.jb, b, h.contentWindow, Ge(c, av, 1), b.searchTerm, 0, !1))
            });
        b.Ld(() => {
            l ? .();
            k ? .dispose();
            b.win.removeEventListener("message", m)
        });
        S(gx) || (h.srcdoc = Qg(f));
        return h
    }
    var LZ = class {
        constructor(a, b, c, d) {
            this.jb = a;
            this.Gh = b;
            this.i = c;
            this.Zb = d
        }
    };
    var MZ = class {
        constructor(a) {
            this.Tb = a.Tb ? ? [];
            this.uh = !!a.uh;
            this.za = !!a.za;
            this.yh = !!a.yh;
            this.qh = !!a.qh;
            this.Jb = !!a.Jb;
            this.rh = !!a.rh;
            this.hj = !!a.hj;
            this.pf = !!a.pf;
            this.nf = !!a.nf;
            this.Pa = !!a.Pa;
            this.md = !!a.md;
            this.kh = a.kh ? ? 0;
            this.sh = !!a.sh;
            this.wh = !!a.wh;
            this.th = !!a.th;
            this.Ac = !!a.Ac;
            this.ei = a.ei ? ? 0;
            this.Di = !!a.Di;
            this.mg = !!a.mg;
            this.qf = !!a.qf;
            this.bf = !!a.bf;
            this.ie = !!a.ie;
            this.Ig = a.Ig ? ? 0;
            this.Hg = a.Hg ? ? 0;
            this.xh = !!a.xh
        }
    };

    function NZ(a) {
        return new MZ({
            Tb: a,
            uh: S(ox),
            za: S(kx),
            yh: S(rx),
            qh: S(lx),
            Jb: S(nx),
            rh: S(bx),
            pf: S(ax),
            nf: S(Yw),
            Pa: S(Zw),
            md: S(wx),
            kh: T(ix),
            sh: S(hx),
            wh: S(Bx),
            th: S(sx),
            Ac: S(mx),
            ei: T(ux),
            Di: S(Cx),
            mg: S(Ax),
            qf: S(px),
            bf: S($w),
            ie: S(xx),
            Ig: T(Xw),
            Hg: T(Ww),
            xh: S(Dx)
        })
    }

    function OZ(a, b, c, d, e, f) {
        return {
            P: PZ(a) ? ? Ge(b, ev, 1),
            Zb: c,
            td: d,
            Vb: 1,
            F: NZ(e),
            de: f
        }
    }

    function QZ() {
        return {
            Gj: new Set(oy(tx))
        }
    }

    function PZ(a) {
        try {
            let b = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
            if (!b) return null;
            let c = decodeURIComponent(b[1]),
                d = fv(c);
            for (let e of dv(d)) je(e, 10);
            return d
        } catch (b) {
            return null
        }
    };

    function RZ(a) {
        a = [42, ...Zq(), ...(a ? .i() ? ? [])].filter(b => b > 0);
        return [...(new Set(a))].sort((b, c) => b - c)
    };
    var SZ = class {
            constructor(a) {
                this.performance = a
            }
            la() {
                return this.performance.now()
            }
        },
        TZ = class {
            la() {
                return Date.now()
            }
        };

    function UZ(a, b, c, d) {
        var e = dG(new kG(a), b, !0);
        if (d) {
            b = bG({
                tg: b.left,
                sf: b.right,
                ag: 10,
                ug: b.top,
                tf: b.bottom,
                bg: 10
            });
            for (let f of b) {
                b = a.document.elementFromPoint(f.x, f.y);
                if (!b || VZ(b, c, a)) continue;
                (b = b.closest('header, nav, [class*="header"]')) && !VZ(b, c, a) && WZ(b, a) && e.add(b)
            }
        }
        c.forEach(f => void e.delete(f));
        return e
    }

    function WZ(a, b) {
        if (a.hasAttribute("google-allow-overlap") || a.closest("[google-allow-overlap]") || a.classList.contains("GoogleActiveViewInnerContainer")) return !1;
        var c = a.getBoundingClientRect();
        if (c.width <= 1 && c.height <= 1 || c.width >= b.innerWidth && c.height >= b.innerHeight) return !1;
        a = b.getComputedStyle(a);
        return a.display === "none" || a.visibility === "hidden" ? !1 : !0
    }

    function VZ(a, b, c) {
        return a === c.document.body || a === c.document.documentElement || b.some(d => d === a || d.contains(a) || a.contains(d))
    }

    function XZ(a) {
        return [...a].map(YZ).sort((b, c) => b.start - c.start)
    }

    function YZ(a) {
        a = a.getBoundingClientRect();
        return new nG(a.top, a.bottom)
    };

    function ZZ(a, b, c, d) {
        if ($Z(a) ? 0 : c.ca >= 400)
            if ((b = a_(a, b, c, d)) != null) c = b;
            else a: {
                b = c.ba;d = b_(a, c);a = 16;
                for (let e of d) {
                    d = e.start;
                    let f = e.end;
                    if (d > a) {
                        if (d - a - 16 >= 200) {
                            c = c_(c, d, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                c = b - a - 16 >= 200 ? c_(c, b, a) : null
            }
        else c = null;
        return c
    }

    function $Z(a) {
        for (a = a.document.body; a; a = a.parentElement)
            if (a.classList.contains("google-anno-skip")) return !0;
        return !1
    }

    function a_(a, b, c, d) {
        function e(h) {
            h = h.getBoundingClientRect();
            return f ? c.ba - h.right : h.left
        }
        var f = c.xa === c.X,
            g = c.ba;
        if (b.nf && d) {
            b = d_(a, c, f);
            if (!b) return null;
            b = b.position.If();
            a = e_(a, b, !0, c, e);
            return !a || a - 16 < 200 ? null : {
                ya: f ? g - a : 16,
                Ga: f ? 16 : g - a,
                oa: b
            }
        }
        b = f_(a, c, f);
        if (!b) return null;
        b = b.position.oe();
        a = e_(a, b, !1, c, e);
        return !a || a - 16 < 200 ? null : {
            ya: f ? g - a : 16,
            Ga: f ? 16 : g - a,
            ra: b
        }
    }

    function g_(a, b) {
        var c = Lr(a),
            d = Mr(a),
            e = b.ra ? ? 0;
        return dG(new kG(a, {
            ee: f => f.id !== "google-anno-sa"
        }), new ri(b.oa !== void 0 ? b.oa : d - e - 50, c - b.Ga, b.oa !== void 0 ? b.oa + 50 : d - b.ra, b.ya), !0).size > 0
    }

    function f_(a, b, c) {
        b = Math.floor(b.ca * .3);
        if (b < 66) return null;
        c = c ? uG({
            ra: 16,
            Ga: 16
        }) : sG({
            ra: 16,
            ya: 16
        });
        var d = a.document.getElementById("google-anno-sa");
        return oG(a, {
            Jd: c,
            bi: b - 66,
            Te: 200,
            di: 50,
            Yf: b,
            xc: 16
        }, d ? [a.document.body, d] : [a.document.body], !0).Sg
    }

    function d_(a, b, c) {
        b = Math.floor(b.ca * .3);
        if (b < 66) return null;
        c ? ({
            oa: e,
            Ga: c
        } = {
            oa: 16,
            Ga: 16
        }, c = new xG(e, c)) : ({
            oa: e,
            ya: c
        } = {
            oa: 16,
            ya: 16
        }, c = new wG(e, c));
        var d = a.document.getElementById("google-anno-sa");
        var e = b - 66;
        var f = d ? [a.document.body, d] : [a.document.body];
        d = Mr(a);
        d = lG(new mG(c.ze(16), 232, Math.min(d, b) - c.If() + 32), a);
        var g = Ur(a) <= 80,
            h = Lr(a),
            k = Mr(a);
        a = UZ(a, new ri(wh(d.top, k - 1), wh(d.right, h - 1), wh(d.bottom, k - 1), wh(d.left, h - 1)), f, g);
        a = XZ(a);
        f = d.top;
        g = [];
        for (h = 0; h < a.length; h++) a[h].start > f && g.push(new nG(f,
            a[h].start)), f = Math.max(f, a[h].end);
        d.bottom > f && g.push(new nG(f, d.bottom));
        a: {
            for (l of g) {
                b: {
                    a = l.start + 16;
                    if (a > c.If() + e) {
                        a = null;
                        break b
                    }
                    d = Math.min(l.end - 16, b) - a;a = d < 50 ? null : {
                        position: c.i(a),
                        Cd: d
                    }
                }
                if (a) {
                    var l = a;
                    break a
                }
            }
            l = null
        }
        return l
    }

    function e_(a, b, c, d, e) {
        a = d.xa ? h_(a, b, c, d) : i_(a, b, c, d);
        b = d.ba;
        var f = d.xa ? b : b * .35;
        a.forEach(g => {
            f = Math.min(f, e(g))
        });
        return f < 16 ? null : f - 16
    }

    function h_(a, b, c, d) {
        var e = d.ca;
        return dG(new kG(a, {
            ee: f => f.id !== "google-anno-sa"
        }), new ri(c ? b : e - b - 50, d.ba - 16, c ? b + 50 : e - b, 16), !0)
    }

    function i_(a, b, c, d) {
        var e = d.ca,
            f = d.ba;
        d = d.X;
        return dG(new kG(a, {
            ee: g => g.id !== "google-anno-sa"
        }), new ri(c ? b : e - b - 50, (d ? f * .35 : f) - 16, c ? b + 50 : e - b, (d ? 16 : f * .65) + 16), !0)
    }

    function c_(a, b, c) {
        var d = a.X;
        return {
            ya: d ? j_(a, b, c) : c,
            Ga: d ? c : j_(a, b, c),
            ra: 16
        }
    }

    function j_(a, b, c) {
        var d = a.ba;
        return a.xa ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function b_(a, b) {
        var c = b.X,
            d = b.ba;
        return [...(b.xa ? h_(a, 16, !1, b) : i_(a, 16, !1, b))].map(e => new nG(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function k_(a, b) {
        return Yn(Xn(Wn(new Pe, a), 1), b)
    }

    function l_(a, b, c) {
        b = b.getBoundingClientRect();
        a = Yn(Xn(Wn(new Pe, a), 3), c);
        a = hf(a, 6, Math.round(b.x));
        return hf(a, 7, Math.round(b.y))
    }

    function m_(a, b) {
        return Yn(Xn(Wn(new Pe, a), 4), b)
    }

    function n_(a, b, c) {
        var d = new mo;
        a = I(d, 1, a);
        b = qf(a, 2, b);
        c !== void 0 && qf(b, 3, c);
        c = new no;
        return B(c, 3, oo, b)
    }

    function o_(a, b) {
        a.placed || a.j || (a.j = !0, a.A(n_(2, 1, b)))
    }
    var p_ = class {
            constructor(a, b) {
                this.A = a;
                this.B = b;
                this.D = 0;
                this.placed = this.j = !1
            }
            l() {
                this.placed = !0
            }
            i() {
                ++this.D < 3 || o_(this, this.B())
            }
            C() {
                o_(this, 4)
            }
        },
        q_ = class {
            constructor(a) {
                this.format = 2;
                this.B = a;
                this.l = new Set;
                this.i = 0
            }
            A() {
                this.i++
            }
            D() {
                this.i > 0 && this.i--
            }
            j(a) {
                this.l.add(a)
            }
            C() {
                if (this.i === 0)
                    for (let a of this.l) this.B(n_(2, this.format, a));
                this.l.clear()
            }
        };

    function r_(a) {
        a = ZY(a);
        var b = new Un;
        b = hf(b, 1, a[0]);
        b = hf(b, 2, a[1]);
        b = hf(b, 3, a[2]);
        return Be(b, 4, Mc(a[3]), 0)
    };
    const s_ = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

    function t_(a, b, c) {
        if (c.F.xh && b) return a = window.getComputedStyle(a).top, `translateY(calc(-200% - ${a&&a!=="auto"?a:"0px"}))`;
        a = window.getComputedStyle(a).bottom;
        return `translateY(calc(200% + ${a&&a!=="auto"?a:"0px"}))`
    }

    function u_(a, b, c, d, e, f, g) {
        var h = cZ(a, "span");
        h.id = "gda";
        h.appendChild(kZ(a, E(c.P, 18), f));
        eZ(h);
        c.qb(1064, h, k => {
            e ? .();
            K(d, {
                transition: "transform 350ms ease-in",
                transform: t_(d, g, c)
            });
            c.Bb(898, a, () => {
                ii(d)
            }, 350, b);
            k.preventDefault();
            k.stopImmediatePropagation();
            return !1
        });
        return h
    }

    function v_(a, b, c, d, e, f, g, h) {
        var k = cZ(a, "span");
        K(k, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (c.X(), "50px"),
            right: c.X() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: g,
            cursor: "pointer",
            transition: "width 5s"
        });
        c.xa || K(k, {
            "justify-content": ""
        });
        if (!c.F.Jb) {
            let l = iZ(a, "20px", g),
                m = cZ(a, "span");
            K(m, {
                display: "inline-block",
                cursor: "inherit",
                "margin-left": c.X() ? "6px" : "4px",
                "margin-right": c.X() ? "4px" : "6px",
                "margin-top": "12px",
                "min-width": "initial"
            });
            k.appendChild(m);
            m.appendChild(l)
        }
        d.classList ? .add("google-anno-sa-qtx",
            "google-anno-skip");
        d.tabIndex = 0;
        d.role = "link";
        d.ariaLive = "polite";
        d.ariaLabel = w_(e.i, c);
        K(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-weight": "400",
            "font-style": "normal",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: g
        });
        c.F.za ? k.classList.add("google-anno-oc") : eZ(k);
        c.F.za && x_(c, k, () => {
            var l = e.i,
                m = y_(a, c, l),
                n = e.j;
            n && (l = jo(io(new lo, l), n), l = jf(l, 3, e.l), m = ko(I(l, 9, 1), m), h.setClickPageEventIndex(n, c.i.jd(m)))
        });
        c.qb(999, k, l => {
            l.preventDefault();
            if (!z_(f, c)) return !1;
            A_(a, b, c, e, f, l.isTrusted, h);
            return !1
        });
        k.appendChild(d);
        return k
    }

    function B_(a, b, c, d, e, f, g, h) {
        var k = cZ(a, "div");
        k.id = "google-anno-sa";
        k.dir = c.X() ? "rtl" : "ltr";
        k.tabIndex = 0;
        k.setAttribute("google-side-rail-overlap", "true");
        k.setAttribute("google-anchor-overlappable", "true");
        var l = C_(c) ? hZ(a, .4) : null;
        if (l) a: {
            if (C_(c)) {
                var m = a.document.querySelectorAll("p"),
                    n = [];
                for (var p = 0; p < Math.min(m.length, 2); p++) n.push(m[p]);
                m = ZY(l);
                p = [m[0], m[1], m[2]];
                if (m[3] < 1) {
                    p = bZ(a.document.body, c.F) || [255, 255, 255];
                    let r = m[3];
                    p = [Math.round(r * m[0] + (1 - r) * p[0]), Math.round(r * m[1] + (1 - r) * p[1]),
                        Math.round(r * m[2] + (1 - r) * p[2])
                    ]
                }
                for (q of n)
                    if ((n = $Y(q)) && p && nQ(n, p) >= 3) {
                        var q = a.getComputedStyle(q).color;
                        break a
                    }
            }
            q = null
        }
        else q = null;
        q = (n = q) ? l : null;
        l = n ? ? "#1A73E8";
        n = "#FFFFFF";
        q && (n = bZ(a.document.body, c.F), n = `linear-gradient(${q}, ${q}), ${n?`rgb(${n[0]}, ${n[1]}, ${n[2]})`:"#FFFFFF"}`);
        q = D_(d, c, a);
        K(k, {
            background: n,
            "border-style": "solid",
            ...(e.ra != null && {
                bottom: Y(e.ra)
            }),
            ...(e.oa != null && {
                top: Y(e.oa)
            }),
            "border-radius": "16px",
            height: Y(50),
            position: "fixed",
            border: "0px",
            left: Y(e.ya),
            right: Y(e.Ga),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000",
            fill: "white",
            color: l,
            cursor: "auto",
            "font-family": "Roboto",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            ...(!q && {
                overflow: "hidden"
            }),
            "text-align": "start",
            "text-orientation": "mixed",
            visibility: "visible",
            "writing-mode": "initial"
        });
        m = cZ(a, "span");
        K(m, {
            cursor: "inherit"
        });
        k.appendChild(v_(a, b, c, m, d, g, l, h));
        k.appendChild(u_(a, b, c, k, f, l, e.oa != null));
        q && (b = n, d = !!d.params ? .Jg && (c.F.pf || E_(a)), g = a.document.createElement("div"), g.id = "google-anno-sa-glow-inner-border", k.insertBefore(g,
            k.firstChild), h = a.document.createElement("div"), h.id = "google-anno-sa-glow-inner", g.appendChild(h), e = a.document.createElement("div"), e.id = "google-anno-sa-glow-border", k.insertBefore(e, k.firstChild), f = a.document.createElement("div"), f.id = "google-anno-sa-glow-aurora", e.appendChild(f), K(g, {
            position: "absolute",
            inset: "0",
            "border-radius": "16px",
            overflow: "hidden",
            "pointer-events": "none"
        }), K(h, {
            position: "absolute",
            inset: "0px",
            "border-radius": "14px",
            background: b,
            "pointer-events": "none"
        }), K(e, {
            position: "absolute",
            inset: "-3px",
            "border-radius": "36px",
            overflow: "hidden",
            "pointer-events": "none",
            filter: "blur(5px)",
            "will-change": "filter",
            ...(d ? {} : {
                opacity: "0.6"
            })
        }), a = (k.ownerDocument || a.document).createElement("style"), a.id = "google-anno-sa-glow-style", a.textContent = ` 
        @keyframes google-anno-sa-glow-rotate { 
          from { 
            transform: translate(-50%, -50%) rotate(0deg); 
          } 
          to { 
            transform: translate(-50%, -50%) rotate(${d?"180deg":"360deg"}); 
          } 
        } 
        ${d?"@keyframes google-anno-sa-glow-fade {\n          from {\n            opacity: 0.6;\n          }\n          to {\n            opacity: 0;\n          }\n        }":""} 
      `, e.appendChild(a), K(f, {
            background: "conic-gradient(\n        from 0deg at 50% 50%,\n        rgba(59, 130, 246, 0) 0deg,\n        rgba(59, 130, 246, 0.95) 12deg,\n        #8b5cf6 32deg,\n        #ec4899 55deg,\n        #f8312f 80deg,\n        #ff7a00 102deg,\n        #ffd000 125deg,\n        #84cc16 148deg,\n        #10b981 168deg,\n        rgba(6, 182, 212, 0.95) 188deg,\n        rgba(6, 182, 212, 0) 200deg,\n        transparent 200deg,\n        transparent 360deg\n      )",
            "will-change": "transform",
            width: "1000px",
            height: "1000px",
            position: "absolute",
            top: "50%",
            left: "50%"
        }), F_(e, f, c, d));
        return k
    }

    function E_(a) {
        try {
            let b = a.location ? .href ? .match(/goog_aiag=3/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }

    function F_(a, b, c, d) {
        d ? (K(b, {
            animation: "google-anno-sa-glow-rotate 4s linear 1 both"
        }), K(a, {
            animation: "google-anno-sa-glow-fade 500ms ease-out 4s 1 both"
        })) : K(b, {
            animation: `google-anno-sa-glow-rotate 8.5s linear ${c.F.hj?"1":"infinite"}`,
            "animation-fill-mode": "forwards"
        })
    }

    function D_(a, b, c) {
        if (a = !!a.params ? .Jg) {
            if (!(b = b.F.rh)) try {
                let d = c.location ? .href ? .match(/goog_aiag=1/);
                b = d !== null && d !== void 0
            } catch (d) {
                b = !1
            }
            a = b || E_(c)
        }
        return a
    }

    function G_(a, b, c, d, e, f, g, h) {
        var k = c.getElementsByClassName("google-anno-sa-qtx")[0];
        if ($F(k)) {
            if (d.F.Jb)
                for (k.classList.add("google-anno-samqc"), K(k, {
                        display: "flex",
                        "flex-direction": "row",
                        gap: "8px",
                        "align-items": "center",
                        "overflow-x": "auto",
                        "overflow-y": "hidden",
                        "scrollbar-width": "none",
                        "-ms-overflow-style": "none",
                        "flex-wrap": "nowrap",
                        "scroll-behavior": "smooth",
                        "text-overflow": "clip",
                        height: "100%",
                        "line-height": "normal"
                    }), h = 0; h < a.D.length; h++) {
                    let m = a.D[h],
                        n = a.O[h],
                        p = b.document.createElement("span");
                    p.classList.add("google-anno-sa-qtx");
                    K(p, {
                        display: "flex",
                        "flex-direction": "row",
                        "align-items": "center",
                        "justify-content": "center",
                        gap: "4px",
                        background: "#E8F0FE",
                        color: "#1A73E8",
                        "border-radius": "16px",
                        padding: "4px 12px",
                        "line-height": "normal",
                        "white-space": "nowrap"
                    });
                    let q = iZ(b, "16px", "#1A73E8");
                    var l = b.document.createElement("span");
                    K(l, {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        margin: "0",
                        padding: "0",
                        "line-height": "0"
                    });
                    K(q, {
                        display: "block",
                        margin: "0"
                    });
                    l.appendChild(q);
                    l =
                        b.document.createTextNode(m);
                    p.appendChild(q);
                    p.appendChild(l);
                    p.ariaLabel = w_(m, d);
                    d.qb(999, p, r => {
                        r.preventDefault();
                        r.stopPropagation();
                        if (!z_(f, d)) return !1;
                        A_(b, e, d, a, f, r.isTrusted, g, m, n);
                        return !1
                    });
                    k.appendChild(p)
                } else d.F.qh ? H_(a, k, d, b, c, e) : I_(a, c, k, d, b, h, e);
            c = c.getElementsByTagName("span")[0];
            d.F.za ? (c.classList.add("google-anno-oc"), c.removeAttribute("data-google-vignette"), c.removeAttribute("data-google-interstitial")) : (c.classList.remove("google-anno-oc"), eZ(c))
        }
        return d.i.Ng(En(Dn(new Fn,
            a.j), a.i))
    }

    function J_(a, b, c, d, e, f, g) {
        if (g_(b, e)) return a.J ? .C(), null;
        a.C = d.la(28);
        a.anchorElement = B_(b, c, d, a, e, () => {
            a.A = !0;
            var h = d.i,
                k = h.Lg;
            var l = new Bn;
            l = nf(l, 3, a.j);
            l = pf(l, 2, a.i);
            k.call(h, l)
        }, f, g);
        if (d.F.Jb) {
            let h = b.document.createElement("style");
            h.textContent = ".google-anno-samqc::-webkit-scrollbar{display:none;}";
            b.document.head.appendChild(h)
        }
        c = G_(a, b, a.anchorElement, d, c, f, g, e.oa != null);
        d.F.bf || b.document.documentElement.appendChild(a.anchorElement);
        a.J ? .l();
        return c
    }

    function K_(a, b, c, d, e, f, g, h, k) {
        if (d.F.Jb) {
            if (a.A) return;
            a.D = f;
            a.O = e;
            a.i = f[0];
            a.j = e[0]
        } else {
            f = f[0];
            let p = e[0];
            if (a.A || a.i === f && a.j === p) return;
            if (a.l !== null) {
                var l = a.l;
                e = d.i;
                var m = e.Mg,
                    n = new Cn;
                l = kf(n, 1, l);
                m.call(e, l)
            }
            a.params ? .Xe && !D_(a, d, b) && a.i !== "" && a.i !== f && a.B++;
            a.i = f;
            a.j = p
        }
        D(d.P, 17) || (a.l = a.anchorElement ? G_(a, b, a.anchorElement, d, c, h, k, g.oa != null) : J_(a, b, c, d, g, h, k), d.F.bf && a.anchorElement && !a.anchorElement.isConnected && b.document.documentElement.appendChild(a.anchorElement))
    }
    async function H_(a, b, c, d, e, f) {
        if (!c.F.Jb && b.textContent !== a.i)
            if (b.innerText) {
                var g = b.parentElement;
                g && K(g, {
                    perspective: "1000px",
                    "transform-style": "preserve-3d"
                });
                try {
                    K(b, {
                        display: "inline-block",
                        transition: "transform 350ms ease-in, opacity 350ms ease-in",
                        transform: "rotateX(-90deg)",
                        opacity: "0"
                    }), c.Bb(898, d, () => {
                        b.innerText = a.i;
                        a.params ? .Xe && !D_(a, c, d) && L_(a, e, c, d);
                        b.ariaLabel = w_(a.i, c);
                        K(b, {
                            transition: "none",
                            transform: "rotateX(90deg)",
                            opacity: "0"
                        });
                        b.getBoundingClientRect();
                        c.Bb(898, d, () => {
                            K(b, {
                                transition: "transform 350ms ease-out, opacity 350ms ease-out",
                                transform: "rotateX(0deg)",
                                opacity: "1"
                            })
                        }, 0, f)
                    }, 350, f)
                } catch (h) {
                    b.textContent = a.i, K(b, {
                        transition: "none",
                        transform: "rotateX(0deg)",
                        opacity: "1"
                    })
                }
            } else b.innerText = a.i, a.params ? .Xe && !D_(a, c, d) && L_(a, e, c, d), b.ariaLabel = w_(a.i, c)
    }
    async function I_(a, b, c, d, e, f, g) {
        if (!d.F.Jb && c.textContent !== a.i)
            if (c.innerText) try {
                K(b, {
                    transition: "transform 350ms ease-in",
                    transform: t_(b, f, d)
                }), d.Bb(898, e, () => {
                    M_(a, b, c, d, e, 300, f, g)
                }, 350, g)
            } catch (h) {
                c.textContent = a.i, K(b, {
                    transition: "",
                    transform: ""
                })
            } else M_(a, b, c, d, e, 0, f, g)
    }

    function M_(a, b, c, d, e, f, g, h) {
        c.innerText = a.i;
        a.params ? .Xe && !D_(a, d, e) && L_(a, b, d, e);
        c.ariaLabel = w_(a.i, d);
        K(b, {
            transition: "none",
            transform: t_(b, g, d)
        });
        d.Bb(898, e, () => {
            K(b, {
                transition: "transform 350ms ease-out",
                transform: "translateY(0px)"
            });
            if (a.params ? .Jg && (d.F.pf || E_(e))) {
                let k = b.querySelector("#google-anno-sa-glow-border"),
                    l = b.querySelector("#google-anno-sa-glow-aurora");
                k && l && (K(l, {
                    animation: "none"
                }), K(k, {
                    animation: "none"
                }), l.getBoundingClientRect(), F_(k, l, d, !0))
            }
        }, f, h)
    }

    function L_(a, b, c, d) {
        if (!Sa() || c.xa) c = b.querySelector("#google-anno-sa-glow"), c || (c = cZ(d, "div"), c.id = "google-anno-sa-glow", b.insertBefore(c, b.firstChild)), K(c, {
            position: "absolute",
            inset: "0",
            "border-radius": "16px",
            border: "2px solid transparent",
            "box-sizing": "border-box",
            background: `linear-gradient(135deg, 
                      ${s_[a.B%4]} 0%, 
                      ${s_[(a.B+1)%4]} 50%, 
                      ${s_[(a.B+2)%4]} 100%) border-box`,
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            "mask-composite": "exclude",
            "-webkit-mask": "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            "-webkit-mask-composite": "destination-out",
            "pointer-events": "none"
        })
    }

    function N_(a, b, c, d) {
        var e = a.anchorElement;
        !a.A && e && O_(d, b, () => {
            K(e, {
                transition: "all 200ms ease-in-out",
                ...(c.ra != null && {
                    bottom: Y(c.ra)
                }),
                ...(c.oa != null && {
                    top: Y(c.oa)
                }),
                left: Y(c.ya),
                right: Y(c.Ga)
            })
        })
    }
    var P_ = class {
        constructor(a, b) {
            this.J = a;
            this.params = b;
            this.i = "";
            this.j = null;
            this.D = [];
            this.O = [];
            this.l = null;
            this.A = !1;
            this.C = null;
            this.B = 0;
            this.anchorElement = null
        }
    };

    function A_(a, b, c, d, e, f, g, h, k) {
        (d.C ? ? 0) + 800 <= c.la(29) && (h = h ? ? d.i, k = k ? ? d.j, c.F.za && !f && k && g.getClickPageEventIndex(k) !== void 0 ? (d = g.getClickPageEventIndex(k), g.removeClickPageEventIndex(k)) : (g = y_(a, c, h), k = jo(io(new lo, h), k), d = jf(k, 3, d.l), d = ko(I(d, 9, 1), g), d = c.i.jd(d)), c.Fa(1401, Q_(e, a, b, c, d, h, 2, c.F.za && !f)))
    }

    function w_(a, b) {
        return E(b.P, 19).replace("TERM", a)
    };

    function R_(a, b, c) {
        a.A.push(c);
        a.B && S_(a, b)
    }

    function T_(a, b, c, d) {
        R_(a, b, [{
            Ui: c,
            searchTerm: d
        }])
    }

    function S_(a, b, c = null) {
        a.l >= a.A.length && (a.l = 0, a.C++);
        var d = a.config.F.Jb ? 1 : 3;
        a.ka || a.C >= d || (c ? ? a.j.isDrawerVisible() ? a.j.Ld(() => void S_(a, b, !1)) : (c = a.A[a.l++], a.B = !1, K_(a.J, a.win, b, a.config, c.map(e => e.Ui), c.map(e => e.searchTerm), a.i, a.j, a.pageState), a.config.Bb(898, a.win, () => {
            S_(a, b)
        }, a.Hi, b)))
    }
    var U_ = class extends N {
        constructor(a, b, c, d, e, f, g) {
            super();
            this.win = a;
            this.config = b;
            this.J = d;
            this.i = e;
            this.j = f;
            this.pageState = g;
            this.A = [];
            this.B = !0;
            this.C = this.l = 0;
            this.Hi = c.Hi
        }
    };

    function V_(a) {
        return a.maximumAnnotationsPerPage > 0 && a.i.A >= a.maximumAnnotationsPerPage
    }
    var X_ = class {
        constructor(a, b, c, d, e) {
            this.A = b;
            this.annotationsPerWindow = c;
            this.maximumAnnotationsPerPage = d;
            this.l = e;
            this.j = 0;
            this.i = new W_(a)
        }
    };

    function Y_(a, b) {
        b -= a.B;
        for (let c of a.i.keys()) {
            let d = a.i.get(c),
                e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.j -= e;
            e > 0 && a.i.set(c, d.slice(e))
        }
    }
    class W_ {
        constructor(a) {
            this.B = a;
            this.i = new Map;
            this.l = new Map;
            this.j = 0
        }
        get A() {
            return this.j
        }
    };

    function Z_(a, b, c, d, e, f, g, h, k) {
        var l = cZ(a, "div");
        l.classList.add("google-anno-skip", "google-anno-sc");
        !k && b.F.za && l.classList.add("google-anno-oc");
        d = a.getComputedStyle(d).fontSize || "16px";
        if (h = C_(b) && !h) {
            var m = c.indexOf(" "),
                n = (k = m > 0) ? c.substring(0, m) : c;
            m = k ? c.substring(m + 1) : "";
            let p = cZ(a, "span");
            K(p, {
                "white-space": "nowrap",
                display: "inline-block",
                "padding-left": b.X() ? "0" : "6px",
                "padding-right": b.X() ? "6px" : "0"
            });
            p.appendChild($_(a, d, b, f, h));
            p.appendChild(a0(a, b, n, !k));
            l.appendChild(p);
            m && l.appendChild(a0(a,
                b, m, !0))
        } else l.appendChild($_(a, d, b, f, h)), k = l.appendChild, n = cZ(a, "span"), n.appendChild(a.document.createTextNode(c)), K(n, {
            position: "relative",
            left: b.X() ? "" : "3px",
            right: b.X() ? "3px" : "",
            "padding-left": b.X() ? "6px" : "",
            "padding-right": b.X() ? "" : "6px"
        }), k.call(l, n);
        h ? K(l, {
            display: "inline",
            color: f,
            "font-family": "inherit",
            "font-weight": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            background: "transparent",
            "background-image": `linear-gradient(${e}, ${e})`,
            border: "none",
            "border-radius": "20px",
            "padding-top": Y(2),
            "padding-bottom": Y(2),
            "padding-left": "",
            "padding-right": "",
            "margin-top": "0",
            "margin-bottom": "0",
            "margin-inline-start": "0px",
            "margin-inline-end": "0",
            "box-shadow": `${b.X()?"-3px":"3px"} 0 0 0 ${e}`,
            cursor: "pointer"
        }) : (K(l, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.X() ? "7px" : "6px",
            "padding-right": b.X() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: f,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: e,
            cursor: "pointer",
            "margin-top": "-3px",
            height: "min-content"
        }), g && K(l, {
            margin: `${Y(-3)} 0`,
            "padding-top": Y(2),
            "padding-bottom": Y(2)
        }));
        l.tabIndex = 0;
        l.role = "link";
        l.ariaLabel = c;
        return l
    }

    function $_(a, b, c, d, e) {
        b = jZ(a, b, d);
        e ? K(b, {
            "vertical-align": "middle"
        }) : K(b, {
            position: "relative",
            top: "3px"
        });
        a = cZ(a, "span");
        K(a, {
            display: e ? "inline" : "inline-block",
            "padding-left": c.X() ? "" : e ? "0" : "3px",
            "padding-right": c.X() ? e ? "0" : "3px" : "",
            "white-space": e ? "nowrap" : ""
        });
        a.appendChild(b);
        return a
    }

    function a0(a, b, c, d) {
        var e = cZ(a, "span");
        e.appendChild(a.document.createTextNode(c));
        K(e, {
            "margin-left": b.X() ? "" : "3px",
            "margin-right": b.X() ? "3px" : "",
            "padding-left": d && b.X() ? "6px" : "",
            "padding-right": d && !b.X() ? "6px" : ""
        });
        return e
    }

    function b0(a, b, c, d) {
        c = ZY(c);
        d = $Y(d);
        var e;
        if (e = d !== null) {
            e = c[0];
            var f = c[1],
                g = c[2];
            c = c[3];
            c === 1 ? a = [e, f, g] : (a = bZ(a.document.body, b.F) ? ? [255, 255, 255], a = [Math.round(c * e + (1 - c) * a[0]), Math.round(c * f + (1 - c) * a[1]), Math.round(c * g + (1 - c) * a[2])]);
            e = nQ(d, a) >= 3
        }
        return e
    };
    var c0 = class {
        constructor() {
            this.i = []
        }
    };

    function d0(a) {
        var b = new to;
        var c = jR(a.l);
        b = kf(b, 1, c);
        b = kf(b, 2, a.i);
        return kf(b, 3, a.j)
    }
    var e0 = class extends N {
        constructor(a, b, c, d) {
            super();
            this.A = d;
            this.j = this.i = 0;
            this.l = new lR(a);
            a = fR(a);
            xs(this, a);
            ys(this, Fs(a.i).j(e => {
                e ? this.l.start() : iR(this.l)
            }));
            ys(this, c.re().j(e => {
                this.i = Math.max(this.i, e.scrollTop);
                this.j = Math.max(this.j, e.ng)
            }));
            ys(this, b.ri(() => {
                var e = (new Ao).setClickPageEventIndex(this.A);
                var f = new uo;
                var g = d0(this);
                f = A(f, 1, g);
                return [B(e, 5, Bo, f)]
            }))
        }
    };

    function f0(a) {
        var b = {},
            c = a.X,
            d = a.rb,
            e = a.uc,
            f = a.zIndex,
            g = a.Tm;
        a = a.ql;
        var h = b && b.Sb;
        return bD(cD(cD(bD(eD(), "<style" + (h ? ' nonce="' + U(mD(h)) + '"' : "") + ">#dd-drawer-container {position: fixed; inset: 0; z-index: " + V(f) + "; overflow: hidden; pointer-events: none; transition: background-color " + V(a) + "s linear;}#dd-drawer-container.dd-revealed {pointer-events: auto; background-color: rgba(0, 0, 0, 0.32); transition: background-color " + V(g) + "s linear;}#dd-drawer {position: absolute; inset: 0; background-color: white; overflow: hidden; display: flex; flex-direction: column; transform: translateY(100%); transition: transform " +
            V(a) + "s cubic-bezier(0.3, 0.0, 0.8, 0.15);}#dd-drawer:focus {outline: none;}.dd-revealed > #dd-drawer {transform: translateY(0); transition: transform " + V(g) + 's cubic-bezier(0.05, 0.7, 0.1, 1.0);}#dd-header-bar {display: flex; justify-content: space-between; align-items: center; padding: 8px 16px 4px; flex-shrink: 0; border-bottom: 1px solid #dadce0;}.dd-control-button {width: 42px; height: 42px; padding: 0; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;}#dd-content-container {flex-grow: 1; overflow: auto;}.dd-hidden {visibility: hidden;}\x3c/style><div id="dd-drawer-container" class="dd-hidden"><div id="dd-drawer" aria-modal="true" role="dialog" tabindex="-1"><div id="dd-header-bar" dir="' +
            U(c ? "rtl" : "ltr") + '">'), qD(b, "dd-back-arrow-button", e, c, "dd-control-button dd-hidden")), rD(b, "dd-close-button", d, c, "dd-control-button")), '</div><div id="dd-content-container"></div></div></div>')
    };

    function g0(a, b, c = 1807) {
        a.ha ? .Aa({
            methodName: c,
            Ha: b
        })
    }
    var h0 = class extends N {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.R = b;
            this.xb = c;
            this.ha = f;
            this.ua = new P(!1);
            xs(this, d);
            this.ob = zC(a, this.ua, .2, f);
            Ks(this.ob, !0, () => {
                rC(d);
                eC(e)
            });
            Ks(this.ob, !1, () => {
                pC(d);
                fC(e)
            })
        }
        show({
            mh: a = !1
        } = {}) {
            if (this.ka) throw Error("Cannot show drawer after disposal");
            this.he();
            this.L().Ua.classList.add("dd-revealed");
            this.ua.i(!0);
            lC(this.xb, this.L().Cb.Nb);
            this.ke();
            a && Ks(this.ob, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            this.L().Ua.classList.remove("dd-revealed");
            this.ua.i(!1);
            kC(this.xb)
        }
        isVisible() {
            return this.ob
        }
        re() {
            if (!this.mc) {
                let {
                    Qb: b,
                    content: c
                } = this.L(), d = () => ({
                    scrollTop: b.scrollTop,
                    ng: Math.max(0, b.scrollHeight - b.clientHeight)
                }), e = new P(d());
                b.addEventListener("scroll", () => {
                    try {
                        e.i(d())
                    } catch (f) {
                        throw g0(this, f), f;
                    }
                });
                var a = ht(this.win, b, this.ha);
                kt(a).listen(() => {
                    e.i(d())
                });
                xs(this, a);
                a = ht(this.win, c, this.ha);
                kt(a).listen(() => {
                    e.i(d())
                });
                xs(this, a);
                this.mc = Fs(e)
            }
            return this.mc
        }
        Oc() {
            this.L().Qb.scrollTop = 0
        }
        oj() {
            if (this.Rd) return this.Rd;
            var {
                Tg: a
            } = this.L(), b = new P(!1);
            Ks(b, !0, () => {
                a.classList.remove("dd-hidden")
            });
            Ks(b, !1, () => {
                a.classList.add("dd-hidden")
            });
            var c = new Qs;
            a.addEventListener("click", () => {
                try {
                    Ps(c)
                } catch (d) {
                    throw g0(this, d), d;
                }
            });
            return this.Rd = {
                isVisible: b,
                gf: Ns(c)
            }
        }
        init() {
            this.Nh();
            this.He()
        }
        Nh() {
            var {
                kd: a
            } = this.L();
            a.addEventListener("click", () => {
                try {
                    this.collapse()
                } catch (b) {
                    throw g0(this, b), b;
                }
            })
        }
        Oh() {
            this.Cc = a => {
                if (a.key === "Escape" && this.ua.V) try {
                    this.collapse()
                } catch (b) {
                    throw g0(this, b), b;
                }
            };
            this.win.addEventListener("keydown", this.Cc)
        }
        se(a) {
            Ks(this.ua, !0, () => {
                try {
                    BD(a)
                } catch (b) {
                    g0(this, b, 1808)
                }
            });
            Ks(this.ua, !1, () => {
                try {
                    CD(a)
                } catch (b) {
                    g0(this, b, 1808)
                }
            });
            Ns(a.j).listen(() => void this.collapse());
            xs(this, a)
        }
        He() {
            Ks(this.ob, !1, () => {
                this.ae()
            })
        }
        he() {
            this.L().Ua.classList.remove("dd-hidden");
            hs(this.win)
        }
        ae() {
            this.L().Ua.classList.add("dd-hidden")
        }
        ke() {
            this.win.setTimeout(() => {
                try {
                    this.me()
                } catch (a) {
                    throw g0(this, a), a;
                }
            }, 400)
        }
        me() {
            this.ua.V && this.L().mf.focus()
        }
        L() {
            if (this.ka) throw Error("Accessing domItems after disposal");
            return this.R
        }
        W() {
            this.Cc &&
                this.win.removeEventListener("keydown", this.Cc);
            var a = this.R.Cb.Nb,
                b = a.parentNode;
            b && b.removeChild(a);
            kC(this.xb);
            super.W()
        }
    };

    function i0(a, b, c) {
        var d = yC(a, c.Xd),
            e = d.shadowRoot;
        e.appendChild(qi(new ci(a.document), f0({
            X: c.X ? ? !1,
            rb: c.rb,
            uc: c.uc ? ? "",
            zIndex: c.zIndex,
            Tm: .4,
            ql: .2
        }).Fb()));
        var f = uC("dd-drawer", e);
        c.ce ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = uC("dd-content-container", e);
        c.appendChild(b);
        hs(a);
        return {
            Ua: uC("dd-drawer-container", e),
            mf: f,
            Qb: c,
            content: b,
            kd: uC("dd-close-button", e),
            Tg: uC("dd-back-arrow-button", e),
            Cb: d
        }
    };

    function j0(a, b) {
        a.config.Bb(1065, a.win, () => {
            if (!a.i) {
                var c = (new Ao).setClickPageEventIndex(a.j);
                var d = new yo;
                c = B(c, 2, Bo, d);
                a.config.i.hc(c)
            }
        }, 1E4, b)
    }
    class k0 {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.j = c;
            this.i = !1
        }
        dismiss() {
            this.i = !0
        }
    }

    function y_(a, b, c) {
        var d = b.xa ? a.innerWidth : Math.min(a.document.body.clientWidth, 670);
        a = IZ(b.xa, a, b.F.Ac);
        b = b.l.get(c) || NP();
        c = new go;
        d = hf(c, 1, d);
        d = hf(d, 2, a);
        a = new fo;
        c = He(b, eo, 2);
        a = A(a, 1, c);
        b = sZ(b.Hf());
        b = I(a, 2, b);
        return B(d, 3, ho, b)
    }

    function z_(a, b) {
        b = b.la(14);
        if (b < a.j + 1500 && a.j !== 0) return !1;
        a.j = b;
        return !0
    }

    function Q_(a, b, c, d, e, f, g, h) {
        var k = d.la(33);
        a.l();
        return new Promise(l => {
            var m = Js(a.i, !1, () => void l(l0(a, b, c, d, e, k, f, g, h)));
            a.l = () => {
                m();
                l(null)
            }
        })
    }

    function l0(a, b, c, d, e, f, g, h, k) {
        var l = new tQ;
        d.Fa(1065, l.promise.then(() => {
            var w = d.i,
                x = w.hc,
                C = d.la(34) - f;
            var H = (new Ao).setClickPageEventIndex(e);
            var O = new zo;
            C = kf(O, 1, C);
            H = B(H, 4, Bo, C);
            x.call(w, H)
        }));
        var m = d.xa ? b.innerWidth : Math.min(b.document.body.clientWidth, 670),
            n = y_(b, d, g),
            p = d.F.sh ? new Qs : void 0,
            q = p ? {
                isVisible: new P(!1),
                gf: Ns(p)
            } : void 0;
        h = KZ(d.de, {
            win: b,
            searchTerm: g,
            F: d.F,
            xa: d.xa,
            X: d.X(),
            P: d.P,
            fj: m,
            oh: IZ(d.xa, b, d.F.Ac),
            Cm: IZ(d.xa, b, !1),
            qb: d.qb.bind(d),
            Gg: d.Gg.bind(d),
            Bb: (w, x, C, H) => d.Bb(w, x, C, H,
                c),
            Fa: d.Fa.bind(d),
            Ld: w => void a.Ld(w),
            format: h,
            content: d.l.get(g) || NP(),
            Kj: l.resolve,
            Mj: (w, x) => {
                d.F.md ? d.i.hc(m0(e, x, w, y_(b, d, x))) : d.i.hc(m0(e, g, w, n))
            },
            Ae: k,
            Oc: () => {
                v ? .()
            },
            Sm: w => {
                var x = d.i,
                    C = x.hc,
                    H = y_(b, d, w);
                var O = (new Ao).setClickPageEventIndex(e);
                var ja = new xo;
                w = pf(ja, 1, w);
                H = A(w, 2, H);
                O = B(O, 7, Bo, H);
                C.call(x, O)
            },
            cf: q,
            gi: d.xa && d.F.Ac
        });
        var r = d.xa ? d.F.Ac ? n0(b, d, g, h) : o0(b, d, g, h) : p0(b, d, g, m, h);
        if (q && p) {
            let w = r.oj ? .();
            w && (a.Ld(q.isVisible.listen(x => {
                w.isVisible.i(x)
            }, !0)), w.gf.listen(() => {
                Ps(p)
            }))
        }
        var v =
            () => {
                r.Oc()
            };
        Ks(r.isVisible(), !1, () => {
            var w = a.A;
            for (let x of w.i) x();
            w.i.length = 0;
            a.i.i(!1);
            w = WB(b).adIntentsPageState;
            w.isDrawerVisible = !1;
            d.F.yh && w.notifyDrawerCollapsed()
        });
        r.show({
            mh: !0
        });
        a.i.i(!0);
        WB(b).adIntentsPageState.isDrawerVisible = !0;
        var y = new k0(b, d, e);
        j0(y, c);
        var G = new e0(b, d.i, r, e);
        a.Ld(() => {
            var w = d.i,
                x = w.hc,
                C = d0(G);
            var H = (new Ao).setClickPageEventIndex(e);
            var O = new vo;
            C = A(O, 1, C);
            H = B(H, 3, Bo, C);
            x.call(w, H);
            G.dispose();
            y.dismiss()
        });
        return r
    }

    function n0(a, b, c, d) {
        c = {
            zIndex: 2147483647,
            rb: E(b.P, 14),
            uc: E(b.P, 32),
            zc: !0,
            ge: !0,
            Xd: "adpub-drawer-root",
            X: b.X(),
            ce: new P(JZ(b.P, c))
        };
        b = b.A;
        var e = new mC(a),
            f = ZB(new dC(a), c.zIndex - 1);
        d = i0(a, d, c);
        d = new h0(a, d, e, nC(a), f, b);
        d.init();
        (c.ge || c.ge === void 0) && d.Oh();
        c.zc && (a = zD(a, b)) && d.se(a);
        return d
    }

    function o0(a, b, c, d) {
        return AF(a, d, {
            Rj: .95,
            nj: .95,
            zIndex: 2147483647,
            zc: !0,
            Xd: "adpub-drawer-root",
            fe: !0,
            X: b.X(),
            rb: E(b.P, 14),
            ce: new P(JZ(b.P, c))
        })
    }

    function p0(a, b, c, d, e) {
        return DD(a, e, {
            Cf: `${d}px`,
            vf: b.X(),
            rb: E(b.P, 14),
            uc: E(b.P, 32),
            zIndex: 2147483647,
            zc: !0,
            ge: !0,
            Xd: "adpub-drawer-root",
            ce: new P(JZ(b.P, c))
        })
    }
    var q0 = class {
        constructor() {
            this.i = new P(!1);
            this.A = new c0;
            this.l = () => {};
            this.j = 0
        }
        isDrawerVisible() {
            return this.i.V
        }
        Ld(a) {
            this.A.i.push(a)
        }
    };

    function m0(a, b, c, d) {
        a = (new Ao).setClickPageEventIndex(a);
        var e = new wo;
        c = I(e, 1, c);
        b = pf(c, 2, b);
        d = A(b, 3, d);
        return B(a, 6, Bo, d)
    };
    const r0 = ["BTN", "BUTTON", "LINK"],
        t0 = s0("banner cc cookie dialog gdpr modal notice notification pop-up popup privacy prompt slidedown-container sticky stky".split(" ")),
        u0 = s0("accept acknowledge allow close consent deny dismiss ok opt-in opt-out reject".split(" "));

    function s0(a) {
        return new RegExp(`(?:^|[_-\\s])${a.join("|(?:^|[_-\\s])")}`, "i")
    }

    function v0(a, b) {
        if (a.classList ? .contains("google-anno-skip")) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "A":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "IMG":
            case "KBD":
            case "LABEL":
            case "MENU":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
            case void 0:
                return !1;
            case "BODY":
                return !0
        }
        return !(w0(a).includes("CRUMB") &&
            a.offsetHeight <= 50) && !x0(a, b) && !y0(a) && !w0(a).includes("MENU") && !(a.tabIndex >= 0) && b.getComputedStyle(a).transform === "none" && !a.classList ? .contains("adsbygoogle")
    }

    function x0(a, b) {
        return a.role ? .toUpperCase ? .() === "BUTTON" || a.tagName ? .toUpperCase ? .() === "INPUT" && a.getAttribute("type") ? .toUpperCase ? .() === "BUTTON" || r0.some(c => w0(a).includes(c)) || b.getComputedStyle(a).cursor === "pointer" || a.childNodes.length === 1 && aG("a")(a.firstElementChild)
    }

    function z0(a, b, c) {
        var d = a.getBoundingClientRect();
        d = c.document.elementsFromPoint(d.x + d.width / 2, d.y + d.height / 2);
        for (let e of d)
            if (a.contains(e)) break;
            else if (A0(e, b, c)) return !0;
        return !1
    }

    function B0(a, b, c) {
        var d = a.getClientRects();
        if (!d.length) return !1;
        var e = !1;
        for (let f of d) {
            d = c.document.elementsFromPoint(f.x + f.width / 2, f.y + f.height / 2);
            let g = !1;
            for (let h of d)
                if (a.contains(h)) {
                    g = !0;
                    break
                } else if (A0(h, b, c)) {
                e = !0;
                g = !1;
                break
            }
            if (g) return !1
        }
        return e
    }

    function A0(a, b, c) {
        return !(a.closest(".adsbygoogle") || a.closest("#google-anno-sa") || C0(a, b, c))
    }

    function C0(a, b, c) {
        return y0(a) || c.getComputedStyle(a).position === "fixed" ? !0 : !!a.parentElement && a.parentElement.tagName !== "BODY" && C0(a.parentElement, b, c)
    }

    function y0(a) {
        var b = a.getAttribute("id") ? ? "";
        return b.match ? .(t0) || a.className ? .match ? .(t0) || a.ariaLabel ? .match ? .(t0) || a.role ? .toUpperCase ? .() === "DIALOG" || (a.tagName === "A" || a.tagName === "BUTTON") && (b.match ? .(u0) || a.className ? .match ? .(u0) || a.ariaLabel ? .match ? .(u0)) ? !0 : !1
    }

    function D0(a) {
        var b = a.textContent;
        if (!b) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "HEADER":
            case "HGROUP":
            case "TH":
            case "THEAD":
                return !0;
            case "LI":
            case "OL":
            case "TD":
            case "TR":
            case "UL":
                return !1
        }
        a: {
            for (a = 0; a < b.length; a++) {
                let c = b.charAt(a);
                if ((a === 0 || b.charAt(a - 1) === " ") && c.toLowerCase() === c) {
                    b = !1;
                    break a
                }
            }
            b = !0
        }
        return b
    }

    function w0(a) {
        return (a.id ? .toUpperCase ? .() ? ? "") + "," + (a.className ? .toUpperCase ? .() ? ? "")
    };
    const E0 = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function F0(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; c >= 0; c--) E0.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), a === "" ? 0 : a.split(/\s+/).length
        }
    }

    function G0(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || E0.test(a)
        }
    }

    function H0(a, b, c, d) {
        return G0(a.charAt(b - 1), d) && G0(a.charAt(c + 1), d)
    };

    function I0(a, b, c) {
        var d = new J0(b);
        for (let e of a) E(e, 5) && se(e, 3, rd, re()).forEach(f => {
            K0(d, f, E(e, 1), c)
        });
        L0(d);
        return new M0(d)
    }

    function N0(a, b) {
        b = a.match(b);
        a = new Map;
        for (let c of b)
            if (b = c.i, a.has(b)) {
                let d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return [...a.values()]
    }
    var M0 = class {
        constructor(a) {
            this.i = a
        }
        isEmpty() {
            return this.i.isEmpty()
        }
        match(a) {
            return this.i.match(a)
        }
    };

    function K0(a, b, c, d) {
        var e = 0;
        for (let f = 0; f < b.length; f++) {
            let g = b.charCodeAt(f);
            a.i[e].contains(g) || (a.i.push(new O0), a.i[a.size].D = e, a.i[a.size].J = g, a.i[e].l.set(g, a.size), a.size++);
            e = a.i[e].l.get(g)
        }
        d.Di && a.i[e].A || (d = a.A.has(c) ? a.A.get(c) : a.D++, a.A.set(c, d), a.l.set(d, c), a.i[e].A = !0, a.i[e].B = d, a.i[e].C = a.j.length, a.j.push(b.length))
    }

    function L0(a) {
        var b = [];
        for (b.push(0); b.length > 0;) {
            let f = b.shift();
            var c = a,
                d = c.i[f];
            if (f === 0) d.i = 0, d.j = 0;
            else if (d.D === 0) d.i = 0, d.j = d.A ? f : c.i[c.i[f].i].j;
            else {
                d = c.i[c.i[f].D].i;
                for (var e = c.i[f].J;;) {
                    if (c.i[d].contains(e)) {
                        c.i[f].i = c.i[d].l.get(e);
                        break
                    }
                    if (d === 0) {
                        c.i[f].i = 0;
                        break
                    }
                    d = c.i[d].i
                }
                c.i[f].j = c.i[f].A ? f : c.i[c.i[f].i].j
            }
            for (let g of a.i[f].Wc) b.push(g)
        }
    }
    class J0 {
        constructor(a) {
            this.B = a;
            this.size = 1;
            this.i = [new O0];
            this.j = [];
            this.A = new Map;
            this.l = new Map;
            this.D = 0
        }
        isEmpty() {
            return this.D === 0
        }
        match(a) {
            var b = 0,
                c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.i[b];
                    if (e.contains(d)) {
                        b = e.l.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.i
                }
                for (d = b;;) {
                    d = this.i[d].j;
                    if (d === 0) break;
                    e = f + 1 - this.j[this.i[d].C];
                    let g = f;
                    H0(a, e, g, this.B) && c.push(new P0(e, g, this.l.get(this.i[d].B)));
                    d = this.i[d].i
                }
            }
            return c
        }
    }
    class O0 {
        constructor() {
            this.l = new Map;
            this.Z = !1;
            this.tb = this.U = this.O = this.Za = this.ma = this.qa = -1
        }
        contains(a) {
            return this.l.has(a)
        }
        set D(a) {
            this.qa = a
        }
        get D() {
            return this.qa
        }
        set J(a) {
            this.ma = a
        }
        get J() {
            return this.ma
        }
        set A(a) {
            this.Z = a
        }
        get A() {
            return this.Z
        }
        set B(a) {
            this.U = a
        }
        get B() {
            return this.U
        }
        set i(a) {
            this.Za = a
        }
        get i() {
            return this.Za
        }
        set j(a) {
            this.O = a
        }
        get j() {
            return this.O
        }
        set C(a) {
            this.tb = a
        }
        get C() {
            return this.tb
        }
        get Wc() {
            return this.l.values()
        }
    }
    var P0 = class {
        constructor(a, b, c) {
            this.i = a;
            this.j = b;
            this.searchTerm = c
        }
        get length() {
            return this.j - this.i
        }
    };
    const Q0 = "A B EM I LI S SPAN STRONG U".split(" ");
    async function R0(a, b, c, d, e, f, g) {
        var h = I0(dv(b.P), b.j, b.F);
        if (!h.isEmpty()) {
            var k = new X_(0, 0, 0, 100, 2 * a.innerHeight),
                l = {
                    Xi: !1,
                    ki: new Set
                },
                m = new Set;
            await S0(a, a.document.body, b, h, m, c, d, e, k, new T0(a.innerHeight * .6), f, g, l);
            if (b.F.Pa)
                if (!l.Xi) b.i.nb(n_(1, 3));
                else if (!V_(k))
                for (let n of m) l.ki.has(n) || b.i.nb(n_(2, 3, 7))
        }
    }
    async function S0(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        f.i.la(9) >= f.j && await U0(f, 10);
        if (b.nodeType === Node.TEXT_NODE) N0(d, b.textContent ? ? "").forEach(q => void e.add(q.searchTerm)), c.F.Pa && e.size && (p.Xi = !0);
        else if ($F(b))
            if (V0(b, a)) {
                for (let q of b.childNodes) await S0(a, q, c, d, e, f, g, h, k, l, m, n, p);
                W0(a, b, e, l) && X0(a, e, c, g, h, b, k, l, m, n, p)
            } else b.classList ? .contains("adsbygoogle") && b.dataset.adStatus === "filled" && (l.j = Y0(a, b))
    }

    function V0(a, b) {
        return v0(a, b) && a.tagName !== "TABLE" && b.getComputedStyle(a).display !== "none"
    }

    function W0(a, b, c, d) {
        if (c = c.size && ["block", "table-cell"].includes(a.getComputedStyle(b).display)) c = Oj(a.getComputedStyle(b).fontSize), c = !(c !== null && c > 22) && !(c !== null && c < 8);
        c && (a = Y0(a, b), c = (d.i === void 0 || a - d.i > d.l) && (d.j === void 0 || a - d.j > 639));
        if (d = c && !D0(b)) {
            for (b = b.lastChild; b ? .nodeType !== Node.TEXT_NODE;)
                if ($F(b) && Q0.includes(b.tagName)) b = b.lastChild;
                else break;
            d = b ? .nodeType === Node.TEXT_NODE && !!b ? .textContent && b.textContent.trim().length > 3
        }
        return !!d
    }

    function X0(a, b, c, d, e, f, g, h, k, l, m) {
        b.size && rt(a, ["Roboto:500"]);
        var n = "#0B57D0",
            p = "#FFFFFF";
        C_(c) && (n = (p = (n = hZ(a, .6)) && b0(a, c, n, f)) ? n : "#FFFFFF", p = p ? "inherit" : "#1A73E8");
        var q = [...b];
        for (let x = 0; x < q.length; ++x) {
            let C = q[x];
            if (V_(g)) {
                c.F.Pa && !m.Dm && (m.Dm = !0, c.i.nb(n_(3, 3)));
                break
            }
            if (x === 1) break;
            b.delete(C);
            var r = g,
                v = C,
                y = f.getBoundingClientRect().bottom;
            v = r.i.l.get(v);
            if (!(v === void 0 || y - v > r.l)) {
                c.F.Pa && c.i.nb(n_(2, 3, 9));
                continue
            }
            r = l_(c.i.Xb(), f, C);
            Z0(d, r);
            e.incrementTermUsageCount(C);
            var G = g;
            v = C;
            var w =
                f.getBoundingClientRect().bottom;
            y = G.i;
            G = G.j;
            y.j++;
            let H = y.i.get(v) ? ? [];
            H.push(G);
            y.i.set(v, H);
            G = y.l.get(v) ? ? 0;
            y.l.set(v, Math.max(G, w));
            if (D(c.P, 17)) {
                c.F.Pa && m.ki.add(C);
                continue
            }
            y = Z_(a, c, C, f, n, p, !0, !1, !1);
            v = $0(y, c, Ye(r), a);
            c.F.za || eZ(y);
            a1(y, c, C, Ye(r), v, l, a, k, e);
            C_(c) && f.appendChild(a.document.createTextNode(" "));
            f.appendChild(y);
            (C_(c) ? B0(y, c.F, a) : z0(y, c.F, a)) ? (c.F.Pa && c.i.nb(n_(2, 3, 4)), y.remove()) : (h.i = Y0(a, y), c.F.Pa && m.ki.add(C))
        }
    }

    function b1(a, b, c, d, e, f, g, h, k) {
        d.size && rt(a, ["Roboto:500"]);
        var l = new q0;
        d = [...d];
        mc(g.getTermUsageCount) && d.sort((m, n) => g.getTermUsageCount(m) - g.getTermUsageCount(n));
        for (let m = 0; m < d.length && !(m >= c.Gm); ++m) {
            let n = d[m],
                p = m_(e.i.Xb(), n);
            Z0(f, p);
            let q = Z_(a, e, n, h, "#FFFFFF", "#1A73E8", !1, !0, !0),
                r = c1(q, e, Ye(p));
            e.F.za || eZ(q);
            e.qb(999, q, v => {
                try {
                    if (!z_(l, e)) return !1;
                    let w = b ? .document ? .body ? .tagName === "BODY" ? b : a,
                        x = y_(w, e, n);
                    var y = jo(io(new lo, n), Ye(p));
                    var G = jf(y, 8, r.B);
                    let C = ko(I(G, 9, 4), x),
                        H = e.i.qg(C);
                    Q_(l,
                        w, k, e, H, n, 4, !1);
                    return !1
                } finally {
                    v.preventDefault(), v.stopImmediatePropagation()
                }
            });
            h.appendChild(q);
            if (h.scrollHeight > h.clientHeight) {
                h.removeChild(q);
                break
            }
            g.incrementTermUsageCount(n)
        }
    }
    var d1 = class {
        constructor() {
            this.A = this.l = null
        }
        get B() {
            return this.l
        }
        j(a, b) {
            if (!this.l) {
                var c = a.Zg,
                    d = new yn;
                b = nf(d, 1, b);
                this.l = c.call(a, b)
            }
        }
        i(a) {
            if (this.l && !this.A) {
                var b = a.Yg;
                var c = new xn;
                c = kf(c, 1, this.l);
                this.A = b.call(a, c)
            }
        }
    };

    function $0(a, b, c, d) {
        var e = new d1;
        e1(b, 1065, f => {
            for (let g of f) g.isIntersecting ? e.B === null && (C_(b) ? B0(a, b.F, d) : z0(a, b.F, d)) ? (b.F.Pa && b.i.nb(n_(2, 3, 4)), a.remove()) : e.j(b.i, c) : e.i(b.i)
        }).observe(a);
        return e
    }

    function a1(a, b, c, d, e, f, g, h, k) {
        function l() {
            var m = y_(g, b, c);
            var n = jo(io(new lo, c), d);
            n = jf(n, 7, e.B);
            m = ko(I(n, 9, 3), m);
            return b.i.jd(m)
        }
        b.F.za && x_(b, a, () => {
            k.setClickPageEventIndex(d, l())
        });
        b.qb(999, a, m => {
            try {
                if (!z_(f, b)) return !1;
                let n;
                b.F.za && !m.isTrusted && k.getClickPageEventIndex(d) !== void 0 ? (n = k.getClickPageEventIndex(d), k.removeClickPageEventIndex(d)) : n = l();
                b.Fa(1401, Q_(f, g, h, b, n, c, 3, b.F.za && !m.isTrusted));
                return !1
            } finally {
                m.preventDefault(), m.stopImmediatePropagation()
            }
        })
    }
    class T0 {
        constructor(a) {
            this.l = a;
            this.j = this.i = void 0
        }
    }

    function Y0(a, b) {
        return b.getBoundingClientRect().bottom + a.scrollY
    }
    class f1 {
        constructor() {
            this.A = this.l = null
        }
        get B() {
            return this.l
        }
        j(a, b) {
            if (!this.l) {
                var c = a.xg,
                    d = new An;
                b = nf(d, 1, b);
                this.l = c.call(a, b)
            }
        }
        i(a) {
            if (this.l && !this.A) {
                var b = a.wg;
                var c = new zn;
                c = kf(c, 1, this.l);
                this.A = b.call(a, c)
            }
        }
    }

    function c1(a, b, c) {
        var d = new f1;
        e1(b, 1065, e => {
            for (let f of e) f.isIntersecting ? d.j(b.i, c) : d.i(b.i)
        }).observe(a);
        return d
    };

    function g1(a, b, c, d, e, f, g, h) {
        var k = c.textContent || "",
            l = N0(d, k);
        d = c.getBoundingClientRect();
        if (k.length === 0 || l.length === 0) return null;
        k = -1;
        var m = "";
        for (let w of l) {
            l = w.searchTerm;
            a: {
                var n = b;
                var p = l,
                    q = c,
                    r = d.height,
                    v = g,
                    y = h;
                let x = Z_(a, n, p, q, e, f, !0, !1, !1);q.appendChild(x);
                let C = q.getBoundingClientRect().height;q.removeChild(x);
                if (n.F.mg) {
                    r = 1 - .33 * Number(C !== r);
                    var G;
                    n.F.qf ? G = y.get(p) ? ? 0 : G = 1 - .66 * Number(!v.has(p));
                    n = G * r;
                    break a
                }
                n = v.has(p) ? .66 : 0;n = (C === r ? 1 - .66 : 0) + n
            }
            n > k && (k = n, m = l);
            if (k === 1) break
        }
        return k < 0 ?
            null : {
                lg: b.F.mg ? k * (1 - .33 * Math.min(1, Math.max(0, d.top + a.scrollY) / (a.innerHeight * 5))) : (k + Math.max(0, 1 - Math.max(d.top + a.scrollY, 0) / (a.innerHeight * 5))) / 2,
                Xg: [m]
            }
    }
    async function h1(a, b, c, d, e, f) {
        var g = I0(dv(b.P), b.j, b.F);
        if (!g.isEmpty()) {
            var h = new Set,
                k = new Map;
            for (var l of dv(b.P)) {
                let w = E(l, 1);
                D(l, 4) && h.add(w);
                b.F.qf && k.set(w, Math.max(k.get(w) ? ? 0, Xe(l, 2)))
            }
            l = [...a.document.body.getElementsByTagName("p")].filter(w => !w.closest(".google-anno-skip"));
            var m = b.F.Ig;
            m > 0 && l.push(...[...a.document.body.getElementsByTagName("li")].filter(w => !w.closest(".google-anno-skip") && !w.querySelector("p, ul, ol") && F0(w.textContent ? ? "", b.j) > m));
            var n = b.F.Hg;
            n > 0 && l.push(...[...a.document.body.getElementsByTagName("div")].filter(w =>
                w.childElementCount === 0 && !w.closest('.google-anno-skip, a, button, [contenteditable]:not([contenteditable="false"])') && F0(w.textContent ? ? "", b.j) > n));
            if (b.F.Pa && l.every(w => {
                    var x = g.i;
                    w = w.textContent ? ? "";
                    a: {
                        let H = 0;
                        for (let O = 0; O < w.length; O++) {
                            for (;;) {
                                var C = w.charCodeAt(O);
                                if (x.i[H].contains(C)) {
                                    H = x.i[H].l.get(C);
                                    break
                                }
                                if (H === 0) break;
                                H = x.i[H].i
                            }
                            for (C = H;;) {
                                C = x.i[C].j;
                                if (C === 0) break;
                                let ja = O + 1 - x.j[x.i[C].C],
                                    xa = O;
                                if (H0(w, ja, xa, x.B)) {
                                    x = new P0(ja, xa, x.l.get(x.i[C].B));
                                    break a
                                }
                                C = x.i[C].i
                            }
                        }
                        x = void 0
                    }
                    return x ===
                        void 0
                })) b.i.nb(n_(1, 3));
            else {
                var p = hZ(a, .6),
                    q = new i1(a.innerHeight * (b.F.ei || 1)),
                    r = [],
                    v = !1,
                    y = async () => {
                        if (!v) {
                            v = !0;
                            var w = b.la(12);
                            try {
                                for (; r.length > 0;) {
                                    var x = [...r];
                                    r.length = 0;
                                    let C = [];
                                    for (let H of x) {
                                        x = "#0B57D0";
                                        let O = "#FFFFFF";
                                        C_(b) && p && b0(a, b, p, H) ? (x = p, O = "inherit") : C_(b) && (x = "#FFFFFF", O = "#1A73E8");
                                        let ja = g1(a, b, H, g, x, O, h, k);
                                        ja && C.push({
                                            element: H,
                                            lg: ja.lg,
                                            Xg: ja.Xg,
                                            ml: x,
                                            nl: O
                                        })
                                    }
                                    if (C.length > 0) {
                                        C.sort((H, O) => O.lg - H.lg);
                                        for (let H of C)
                                            if (j1(q, H.element.getBoundingClientRect().bottom + a.scrollY))
                                                for (let O of H.Xg) k1(a,
                                                    O, b, c, H.element, e, f, q, H.ml, H.nl, d)
                                    }
                                }
                            } finally {
                                v = !1, w = l1(c, b.la(13) - w), w.l() && Zn(w.l()).length > 0 && b.i.Uf(w), r.length > 0 && y()
                            }
                        }
                    },
                    G = e1(b, 898, w => {
                        var x = !1;
                        for (let C of w) C.isIntersecting && C.target instanceof HTMLElement && (G.unobserve(C.target), r.push(C.target), x = !0);
                        x && y()
                    }, {
                        root: null,
                        rootMargin: "0px 0px 300% 0px",
                        threshold: 0
                    });
                for (let w of l) G.observe(w)
            }
        }
    }

    function k1(a, b, c, d, e, f, g, h, k, l, m) {
        var n = l_(c.i.Xb(), e, b);
        Z0(d, n);
        D(c.P, 17) || (d = Z_(a, c, b, e, k, l, !0, !1, !1), k = $0(d, c, Ye(n), a), c.F.za || eZ(d), a1(d, c, b, Ye(n), k, g, a, f, m), C_(c) && e.appendChild(a.document.createTextNode(" ")), e.appendChild(d), a = d.getBoundingClientRect().bottom + window.scrollY, h.i.push(a))
    }

    function j1(a, b) {
        for (let c of a.i)
            if (Math.abs(b - c) < a.j) return !1;
        return !0
    }
    class i1 {
        constructor(a) {
            this.j = a;
            this.i = []
        }
    };
    const m1 = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function n1(a, b, c, d, e, f, g) {
        e.i.la(5) >= e.j && await U0(e, 6);
        var h = new q0;
        d.Fl || o1(a, b, c, d, f, dv(c.P), h, g);
        d.Gl || (!c.F.th && (c.F.wh || c.F.uh && D(c.P, 5)) ? await c.Fa(898, h1(a, c, f, g, b, h)) : await c.Fa(898, R0(a, c, e, f, g, b, h)));
        d.Hl || await p1(a, b, c, d, e, f, g, h)
    }
    async function p1(a, b, c, d, e, f, g, h) {
        var k = dv(c.P);
        var l = c.F;
        var m = new J0(c.j);
        for (let n of k) E(n, 6) !== "" && (k = E(n, 1), K0(m, k, k, l));
        L0(m);
        l = new M0(m);
        l.isEmpty() || await c.Fa(898, q1(a, b, c, e, f, g, l, new X_(d.wordWindowSize, d.sameSearchTermPerWindow, d.annotationsPerWindow, d.maximumAnnotationsPerPage, 0), h))
    }
    async function q1(a, b, c, d, e, f, g, h, k) {
        for (var l = {
                Aj: !1,
                zj: !1,
                Tc: c.F.Pa ? new q_(n => void c.i.nb(n)) : void 0
            }, m = a.document.body; m;) {
            d.i.la(7) >= d.j && await U0(d, 8);
            if (m.nodeType === Node.TEXT_NODE && m.textContent !== "" && m.parentElement) {
                let n = m.parentElement,
                    p = r1(a, b, c, n, m.textContent, e, f, g, h, k, l);
                if (p.length && !D(c.P, 17)) {
                    for (let q of p) n.insertBefore(q, m), s1(q, c.F);
                    n.removeChild(m);
                    for (let q of n.children) q.classList ? .contains("google-anno") && q.firstElementChild && z0(q.firstElementChild, c.F, a) && (l.Tc ? .D(), l.Tc ? .j(4),
                        q.replaceWith(a.document.createTextNode(q.textContent ? .trimStart() ? ? "")));
                    for (m = p[p.length - 1]; m.lastChild;) m = m.lastChild;
                    if (V_(h)) break
                }
            }
            m = t1(a, m, h, c.j)
        }
        c.F.Pa && (l.Aj ? l.Tc ? .C() : c.i.nb(n_(1, 2)))
    }

    function t1(a, b, c, d) {
        if (b.firstChild && $F(b) && !b.classList ? .contains("google-anno-skip") && (b.offsetHeight || a.getComputedStyle(b).display === "contents")) {
            if (v0(b, a)) return b.firstChild;
            b.textContent ? .length && (a = F0(b.textContent, d), Y_(c.i, c.j + a))
        }
        for (;;) {
            if (b.nextSibling) return b.nextSibling;
            if (!b.parentNode) return null;
            b = b.parentNode
        }
    }

    function u1(a, b) {
        var c = {
            X: b.X(),
            xa: b.xa,
            ba: Lr(a),
            ca: Mr(a)
        };
        return b.F.nf ? ZZ(a, b.F, c, !1) ? ? ZZ(a, b.F, c, !0) : ZZ(a, b.F, c, !1)
    }

    function o1(a, b, c, d, e, f, g, h) {
        function k() {
            return $Z(a) ? 2 : Mr(a) < 400 ? 3 : 1
        }

        function l() {
            return n ? ? (n = v1(c, a, () => {
                if (!m) {
                    var r = c.la(12),
                        v = u1(a, c);
                    v ? (a.clearInterval(n), m = !0, w1(a, b, c, d, e, r, f, v, g, h, p)) : p ? .i()
                }
            }, d.Mk ? ? 3E3))
        }
        if (f.filter(r => E(r, 7).length).length) {
            var m = !1,
                n = void 0,
                p = c.F.Pa ? new p_(r => void c.i.nb(r), k) : void 0,
                q = x1(c, a, () => {
                    if (!(a.scrollY <= (d.Nk ? ? 300) || m)) {
                        var r = c.la(12),
                            v = u1(a, c);
                        v ? (m = !0, a.removeEventListener("scroll", q), w1(a, b, c, d, e, r, f, v, g, h, p)) : (p ? .i(), n = l())
                    }
                });
            c.Bb(898, a, () => {
                if (!m) {
                    var r =
                        c.la(12),
                        v = u1(a, c);
                    v ? (m = !0, w1(a, b, c, d, e, r, f, v, g, h, p)) : (p ? .i(), n = l())
                }
            }, d.Lk ? ? 15E3, b)
        }
    }

    function w1(a, b, c, d, e, f, g, h, k, l, m) {
        var n = new U_(a, c, d, new P_(m, d), h, k, l);
        d = g.filter(v => E(v, 7).length);
        if (c.F.Jb) {
            var p = [];
            for (var q of d) d = k_(c.i.Xb(), E(q, 1)), Z0(e, d), p.push({
                Ui: Ye(d),
                searchTerm: E(q, 1)
            });
            p.length && R_(n, b, p)
        } else
            for (p of d) q = k_(c.i.Xb(), E(p, 1)), Z0(e, q), T_(n, b, Ye(q), E(p, 1));
        var r = YG(a);
        aH(r).listen(() => {
            if (!(n.ka || r.ka || n.j.isDrawerVisible()) && g_(n.win, n.i)) {
                var v = n.i.oa != null;
                if (v = ZZ(n.win, n.config.F, {
                        X: n.config.X(),
                        xa: n.config.xa,
                        ba: Lr(n.win),
                        ca: Mr(n.win)
                    }, v)) n.i = v, N_(n.J, n.win,
                    v, n.config)
            }
        });
        c.i.Uf(l1(e, c.la(13) - f))
    }

    function s1(a, b) {
        if (ZF(a)) {
            if (a.tagName === "A") {
                var c = $Y(a.parentElement),
                    d = $Y(a);
                var e = bZ(a, b);
                if (e = c && d && e ? nQ(d, e) < Math.min(nQ(c, e), 2.5) ? c : null : c) {
                    c = e[0];
                    d = e[1];
                    e = e[2];
                    c = Number(c);
                    d = Number(d);
                    e = Number(e);
                    if (c != (c & 255) || d != (d & 255) || e != (e & 255)) throw Error('"(' + c + "," + d + "," + e + '") is not a valid RGB color');
                    d = c << 16 | d << 8 | e;
                    K(a, {
                        color: c < 16 ? "#" + (16777216 | d).toString(16).slice(1) : "#" + d.toString(16)
                    })
                }
            }
            for (c = 0; c < a.childElementCount; c++) s1(a.children[c], b)
        }
    }

    function r1(a, b, c, d, e, f, g, h, k, l, m) {
        var n = [];
        a: switch (c.j) {
            case 1:
                var p = Array(e.length);
                var q = 0;
                for (var r = 0; r < e.length; r++) E0.test(e[r]) || q++, p[r] = q;
                break a;
            default:
                for (p = Array(e.length), r = q = 0; r < e.length;) {
                    for (;
                        /\s/.test(e[r]);) p[r] = q, r++;
                    for (var v = !1; r < e.length && !/\s/.test(e[r]);) v = !0, p[r] = q, r++;
                    v && (q++, p[r - 1] = q)
                }
        }
        h = e.includes("\u00bb") ? [] : N0(h, e);
        r = -1;
        for (let ja of h) {
            c.F.Pa && (m.Aj = !0);
            q = ja.i;
            h = ja.j;
            if (q < r) {
                m.Tc ? .j(5);
                continue
            }
            v = k;
            var y = ja.searchTerm;
            Y_(v.i, v.j + p[q]);
            var G = v;
            if (!((G.i.i.get(y) ? .length ? ?
                    0) < G.A && v.i.A < v.annotationsPerWindow)) {
                m.Tc ? .j(6);
                continue
            }
            v = a.getComputedStyle(d);
            y = v.fontSize.match(/\d+/);
            if (!(y && Number(y[0]) >= 12 && Number(y[0]) <= 22 && fb(m1, v.display))) return m.Tc ? .j(7), k.j += p[p.length - 1], [];
            r += 1;
            r < q && n.push(a.document.createTextNode(e.substring(r, q)));
            r = e.substring(q, h + 1);
            v = e;
            y = q;
            G = h + 1;
            G = v.substring(Math.max(y - 30, 0), y) + "~~" + v.substring(G, Math.min(G + 30, v.length));
            y = a;
            var w = c.i.Xb();
            v = d;
            var x = r,
                C = G,
                H = ja.searchTerm,
                O = p[q];
            G = v.getBoundingClientRect();
            w = Xn(Wn(new Pe, w), 2);
            x = pf(w, 2,
                x);
            x = pf(x, 3, C);
            H = Yn(x, H);
            O = hf(H, 5, O);
            O = hf(O, 6, Math.round(G.x));
            G = hf(O, 7, Math.round(G.y));
            y = y.getComputedStyle(v);
            O = new Vn;
            O = pf(O, 1, y.fontFamily);
            H = r_(y.color);
            O = A(O, 7, H);
            H = r_(y.backgroundColor);
            O = A(O, 8, H);
            H = y.fontSize.match(/^(\d+(\.\d+)?)px$/);
            O = hf(O, 4, H ? Math.round(Number(H[1])) : 0);
            H = Math.round(Number(y.fontWeight));
            isNaN(H) || H === 400 || hf(O, 5, H);
            y.textDecorationLine !== "none" && pf(O, 6, y.textDecorationLine);
            y = A(G, 8, O);
            G = [];
            for (x = v; x && G.length < 20;) {
                v = G;
                O = v.push;
                H = x;
                C = new Tn;
                C = pf(C, 1, H.tagName);
                H.className !==
                    "" && Ae(C, 2, H.className.split(" "), pd);
                O.call(v, C);
                if (x.tagName === "BODY") break;
                x = x.parentElement
            }
            v = G.reverse();
            v = Le(y, 9, v);
            Z0(f, v);
            g.incrementTermUsageCount(r);
            n.push(y1(a, b, c, Ye(v), ja.searchTerm, r, d, l, g));
            m.Tc ? .A();
            r = k.i;
            v = ja.searchTerm;
            q = k.j + p[q];
            r.j++;
            y = r.i.get(v) ? ? [];
            y.push(q);
            r.i.set(v, y);
            r = h;
            if (V_(k)) {
                c.F.Pa && !m.zj && (m.zj = !0, c.i.nb(n_(3, 2)));
                break
            }
        }
        b = r + 1;
        b !== 0 && b < e.length && n.push(a.document.createTextNode(e.substring(b)));
        k.j += p[p.length - 1];
        return n
    }
    class z1 {
        constructor() {
            this.A = this.l = null
        }
        get B() {
            return this.l
        }
        j(a, b) {
            if (!this.l) {
                var c = a.Yh,
                    d = new so;
                b = nf(d, 2, b);
                this.l = c.call(a, b)
            }
        }
        i(a) {
            if (this.l && !this.A) {
                var b = a.Xh;
                var c = new ro;
                c = kf(c, 1, this.l);
                this.A = b.call(a, c)
            }
        }
    }

    function y1(a, b, c, d, e, f, g, h, k) {
        function l() {
            var n = y_(a, c, e);
            var p = jo(io(new lo, e), d);
            p = jf(p, 2, m.B);
            n = ko(I(p, 9, 2), n);
            return c.i.jd(n)
        }
        f = A1(a, f, g);
        f.className = "google-anno";
        c.F.za ? f.classList.add("google-anno-oc") : eZ(f);
        var m = B1(c, d, f, a);
        c.F.za && x_(c, f, () => {
            k.setClickPageEventIndex(d, l())
        });
        c.qb(999, f, n => {
            try {
                if (!z_(h, c)) return !1;
                let p;
                c.F.za && !n.isTrusted && k.getClickPageEventIndex(d) !== void 0 ? (p = k.getClickPageEventIndex(d), k.removeClickPageEventIndex(d)) : p = l();
                c.Fa(1401, Q_(h, a, b, c, p, e, 1, c.F.za && !n.isTrusted));
                return !1
            } finally {
                n.preventDefault(), n.stopImmediatePropagation()
            }
        });
        return f
    }

    function A1(a, b, c) {
        var d = cZ(a, "span");
        d.className = "google-anno-t";
        K(d, {
            "text-decoration": "underline"
        });
        K(d, {
            "text-decoration-style": "dotted"
        });
        K(d, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        K(d, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        d.appendChild(a.document.createTextNode(b));
        b = cZ(a, "a");
        K(b, {
            color: "revert-layer",
            cursor: "pointer",
            fill: "currentColor",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit",
            "line-height": "inherit",
            "text-decoration": "none"
        });
        Nh(b, "#");
        var e = b.appendChild;
        c = a.getComputedStyle(c).fontSize;
        c = lZ(a, "100 -1000 840 840", `calc(${c} - 2px)`, c, "M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-528q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v528q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-528H168v528Zm72-96h480v-72H240v72Zm0-144h168v-216H240v216Zm240 0h240v-72H480v72Zm0-144h240v-72H480v72ZM168-216v-528 528Z");
        K(c, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        e.call(b, c);
        b.appendChild(a.document.createTextNode("\u00a0"));
        b.appendChild(d);
        return b
    }

    function B1(a, b, c, d) {
        var e = new z1;
        e1(a, 1065, f => {
            for (let g of f) g.isIntersecting ? c.classList ? .contains("google-anno") && e.B === null && c.firstElementChild && z0(c.firstElementChild, a.F, d) ? (a.F.Pa && a.i.nb(n_(2, 2, 8)), c.replaceWith(d.document.createTextNode(c.textContent ? .trimStart() ? ? ""))) : e.j(a.i, b) : e.i(a.i)
        }).observe(c);
        return e
    };

    function Z0(a, b) {
        a.entries.push(ae(b))
    }

    function l1(a, b) {
        var c = a.i;
        a.i = a.entries.length;
        var d = new qo,
            e = new $n;
        a = Le(e, 2, a.entries.slice(c));
        d = A(d, 1, a);
        b !== 0 && kf(d, 2, Math.round(b));
        return d
    }

    function C1(a, b) {
        var c = new Hn;
        a = pf(c, 2, a.language);
        return pf(a, 3, b)
    }

    function D1(a) {
        var b = dv(a),
            c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0;
        a = 0;
        for (var h of b) c += E1(E(h, 6) !== "") + E1(E(h, 7) !== "") + E1(E(h, 5) !== "") + E1(E(h, 12) !== ""), d += E1(E(h, 6) !== "") + E1(E(h, 7) !== "") + E1(E(h, 5) !== "") + E1(E(h, 12) !== ""), e += E1(E(h, 6) !== ""), f += E1(E(h, 7) !== ""), g += E1(E(h, 5) !== ""), a += E1(E(h, 12) !== "");
        h = new ao;
        b = gf(h, 1, b.length);
        c = gf(b, 2, c);
        d = je(c, 3, d == null ? d : Wc(d));
        e = je(d, 4, e == null ? e : Wc(e));
        f = je(e, 5, f == null ? f : Wc(f));
        g = gf(f, 6, g);
        return gf(g, 7, a)
    }
    var F1 = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.i = 0
        }
    };

    function E1(a) {
        return a ? 1 : 0
    }

    function G1(a) {
        switch (a) {
            case 1:
                return 2;
            case 3:
                return 3;
            case 2:
                return 1;
            case 4:
                return 4;
            case 0:
                return 0;
            default:
                return 0
        }
    };

    function H1(a, b, c) {
        I1(a);
        b = J1(b);
        for (let [d, e] of b) b = d, K1(a, e, b, c), L1(a, b)
    }

    function M1(a, b, c) {
        a.j.forEach(d => {
            N1(d, { ...a.i,
                outcome: b,
                dc: !1,
                Dc: c
            })
        })
    }

    function O1(a, b, c, d) {
        a.j.forEach(e => {
            e.zi(b, { ...a.i,
                outcome: c,
                dc: !1,
                Dc: d
            })
        })
    }

    function P1(a, b, c, d) {
        a.j.forEach(e => {
            Q1(e, { ...a.i,
                outcome: b,
                dc: c,
                Dc: d
            })
        })
    }

    function R1(a, b, c, d, e) {
        a.j.forEach(f => {
            f.Pg(b, { ...a.i,
                outcome: c,
                dc: d,
                Dc: e
            })
        })
    }

    function I1(a) {
        a.A || (a.A = !0, a.j.forEach(b => {
            S1(b, a.i)
        }))
    }

    function K1(a, b, c, d) {
        a.j.forEach(e => {
            e.Rg(b, { ...a.i,
                format: c,
                dc: d
            })
        })
    }

    function L1(a, b) {
        a.B.has(b) || (a.B.add(b), a.j.forEach(c => {
            T1(c, { ...a.i,
                Vb: a.Vb,
                format: b
            })
        }))
    }

    function U1(a) {
        a.D || (a.D = !0, a.j.forEach(b => {
            V1(b, a.i)
        }))
    }

    function W1(a, b) {
        a.j.forEach(c => {
            c.Bi(b, { ...a.i,
                format: 4,
                dc: !1
            })
        })
    }

    function X1(a, b) {
        a.j.forEach(c => {
            Y1(c, { ...a.i,
                reason: Z1(b)
            })
        })
    }
    var g2 = class {
        constructor(a, b, c, d) {
            this.C = this.l = 1;
            this.D = this.A = !1;
            this.i = {
                language: a.has(b) ? b : "other",
                Ta: Ua() ? 2 : Sa() ? 4 : Ta() ? 7 : 10
            };
            this.Vb = $1(d);
            this.B = new Set;
            this.j = [...c]
        }
        Xb() {
            return this.C++
        }
        Qg(a) {
            a: switch (Fe(a, bo)) {
                case 4:
                    var b = 1;
                    break a;
                case 5:
                    b = 2;
                    break a;
                default:
                    b = 0
            }
            var c = a2(a),
                d = We(a, 3),
                e = c.length > 0;P1(this, b, !1, e);R1(this, d, b, !1, e);a.i() && c.length > 0 && H1(this, c, !1);
            if (ne(a, Sn, 5, bo)) {
                a = af(a, Sn, 5, bo);
                for (let f of Je(a, Mn, 1, re())) X1(this, f)
            }
            this.l++
        }
        Uf(a) {
            var b = a.i() ? 1 : 0,
                c = a2(a),
                d = We(a, 2),
                e =
                c.length > 0;
            P1(this, b, !0, e);
            R1(this, d, b, !0, e);
            a.i() && c.length > 0 && H1(this, c, !0);
            this.l++
        }
        Ai(a) {
            var b = a2(a),
                c = a.i() ? 1 : 2,
                d = We(a, 5),
                e = b.length > 0;
            M1(this, c, e);
            O1(this, d, c, e);
            if (a.i() && b.length > 0) {
                U1(this);
                a = J1(b);
                for (let [, f] of a) W1(this, f)
            }
            this.l++
        }
        Yh() {
            this.j.forEach(a => {
                b2(a, { ...this.i,
                    format: 2
                })
            });
            return this.l++
        }
        Xh() {
            this.j.forEach(a => {
                c2(a, { ...this.i,
                    format: 2
                })
            });
            return this.l++
        }
        Ng() {
            this.j.forEach(a => {
                b2(a, { ...this.i,
                    format: 1
                })
            });
            return this.l++
        }
        Mg() {
            this.j.forEach(a => {
                c2(a, { ...this.i,
                    format: 1
                })
            });
            this.l++
        }
        Zg() {
            this.j.forEach(a => {
                b2(a, { ...this.i,
                    format: 3
                })
            });
            return this.l++
        }
        Yg() {
            this.j.forEach(a => {
                c2(a, { ...this.i,
                    format: 3
                })
            });
            return this.l++
        }
        xg() {
            this.j.forEach(a => {
                b2(a, { ...this.i,
                    format: 4
                })
            });
            return this.l++
        }
        wg() {
            this.j.forEach(a => {
                c2(a, { ...this.i,
                    format: 4
                })
            });
            return this.l++
        }
        jd(a) {
            var b = 0;
            Qe(a, 2) != null ? b = 2 : Qe(a, 3) != null ? b = 1 : Qe(a, 7) != null && (b = 3);
            this.j.forEach(c => {
                c.click({ ...this.i,
                    format: b
                })
            });
            return this.l++
        }
        qg() {
            this.j.forEach(a => {
                d2(a, { ...this.i,
                    format: 4
                })
            });
            return this.l++
        }
        hc(a) {
            var b =
                0;
            ne(a, yo, 2, Bo) ? b = 1 : ne(a, vo, 3, Bo) && (b = 2);
            this.j.forEach(c => {
                e2(c, { ...this.i,
                    type: b
                })
            });
            this.l++
        }
        ri() {
            return () => {}
        }
        Lg() {
            this.j.forEach(a => {
                f2(a, this.i)
            });
            this.l++
        }
        nb() {
            return this.l++
        }
    };

    function $1(a) {
        switch (a) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return 0
        }
    }

    function a2(a) {
        return a.i() ? [...Zn(a.l())] : []
    }

    function Z1(a) {
        switch (Fe(a, Nn)) {
            case 1:
                return 1;
            case 9:
                return 4;
            case 13:
                return 7;
            default:
                return 0
        }
    }

    function J1(a) {
        var b = new Map;
        for (let c of a) a = h2(c), b.set(a, (b.get(a) ? ? 0) + 1);
        return b
    }

    function h2(a) {
        switch (F(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            default:
                return 0
        }
    };

    function i2(a, b) {
        var c = new Eo;
        var d = a.adIntentsPageState.takeNextPageEventIndex();
        c = kf(c, 1, d);
        b = kf(c, 2, Math.round(a.j.la(b) - a.A));
        b = A(b, 10, a.B);
        b = ef(b, 15, a.D ? !0 : void 0);
        b = I(b, 18, a.Vb);
        return jf(b, 27, a.Fi)
    }
    var j2 = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
            this.j = b;
            this.A = c;
            this.B = d;
            this.D = f;
            this.Vb = k;
            this.adIntentsPageState = l;
            this.C = m;
            this.Fi = n;
            this.l = [...g];
            this.i = h.length ? new g2(e, a, h, k) : null
        }
        Xb() {
            return this.adIntentsPageState.takeNextAnnotationEntryId()
        }
        Qg(a) {
            this.i ? .Qg(a);
            var b = this.handle,
                c = i2(this, 11);
            a = B(c, 3, Fo, a);
            b.call(this, a)
        }
        Uf(a) {
            this.i ? .Uf(a);
            var b = this.handle,
                c = i2(this, 11);
            a = B(c, 14, Fo, a);
            b.call(this, a)
        }
        Ai(a) {
            this.i ? .Ai(a);
            var b = this.handle,
                c = i2(this, 11);
            a = B(c, 22, Fo, a);
            b.call(this, a)
        }
        Yh(a) {
            this.i ? .Yh(a);
            var b = this.handle,
                c = i2(this, 15);
            a = B(c, 4, Fo, a);
            return b.call(this, a)
        }
        Xh(a) {
            this.i ? .Xh(a);
            var b = this.handle,
                c = i2(this, 16);
            a = B(c, 5, Fo, a);
            return b.call(this, a)
        }
        Ng(a) {
            this.i ? .Ng(a);
            var b = this.handle,
                c = i2(this, 17);
            a = B(c, 6, Fo, a);
            return b.call(this, a)
        }
        Mg(a) {
            this.i ? .Mg(a);
            var b = this.handle,
                c = i2(this, 18);
            a = B(c, 7, Fo, a);
            b.call(this, a)
        }
        Zg(a) {
            this.i ? .Zg(a);
            var b = this.handle,
                c = i2(this, 19);
            a = B(c, 16, Fo, a);
            return b.call(this, a)
        }
        Yg(a) {
            this.i ? .Yg(a);
            var b = this.handle,
                c = i2(this, 20);
            a = B(c, 17, Fo, a);
            return b.call(this, a)
        }
        xg(a) {
            this.i ? .xg(a);
            var b = this.handle,
                c = i2(this, 21);
            a = B(c, 20, Fo, a);
            return b.call(this, a)
        }
        wg(a) {
            this.i ? .wg(a);
            var b = this.handle,
                c = i2(this, 22);
            a = B(c, 21, Fo, a);
            return b.call(this, a)
        }
        jd(a) {
            this.i ? .jd(a);
            var b = this.handle,
                c = i2(this, 14);
            a = B(c, 8, Fo, a);
            return b.call(this, a)
        }
        qg(a) {
            this.i ? .qg(a);
            var b = this.handle,
                c = i2(this, 14);
            a = B(c, 8, Fo, a);
            return b.call(this, a)
        }
        hc(a) {
            this.i ? .hc(a);
            var b = this.handle,
                c = i2(this, 25);
            a = B(c, 9, Fo, a);
            b.call(this, a)
        }
        ri(a) {
            var b = this.i ? .ri(a),
                c = this.C ? .(() => a().map(d => {
                    var e = i2(this, 25);
                    return B(e, 9, Fo,
                        d)
                }));
            return () => {
                b ? .();
                c ? .()
            }
        }
        Lg(a) {
            this.i ? .Lg(a);
            var b = this.handle,
                c = i2(this, 27);
            a = B(c, 12, Fo, a);
            b.call(this, a)
        }
        nb(a) {
            var b = this.handle,
                c = i2(this, 30);
            a = B(c, 19, Fo, a);
            return b.call(this, a)
        }
        handle(a) {
            for (let b of this.l) b(a);
            return sv(We(a, 1))
        }
    };

    function k2(a, b) {
        return a && b ? (a = b.ga() ? EN("__gads", a) : null) ? Qt(a + "t2Z7mVic") % 20 : null : null
    };

    function l2(a) {
        return (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : ""
    };
    var m2 = class {
        constructor(a, b) {
            this.Va = a;
            this.Tb = b
        }
        Aa(a) {
            var b = a.Ha;
            this.Va.Ea(a.methodName ? ? 0, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.es = this.Tb
            })
        }
    };

    function x_(a, b, c) {
        b.addEventListener("adIntentsVignetteIntercepted", n2(a, 999, c))
    }

    function C_(a) {
        return F(a.P, 6) === 2
    }

    function O_(a, b, c) {
        b.requestAnimationFrame(n2(a, 898, c))
    }

    function e1(a, b, c, d) {
        return new IntersectionObserver(n2(a, b, c), d || {
            threshold: .98
        })
    }

    function v1(a, b, c, d) {
        return b.setInterval(n2(a, 898, c), d)
    }

    function x1(a, b, c) {
        a = n2(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function n2(a, b, c) {
        return a.Va.kc(b, c, void 0, d => {
            d.es = a.F.Tb
        })
    }
    var p2 = class {
        constructor(a, b, c, d, e, f, g) {
            this.xa = a;
            this.P = b;
            this.Va = c;
            this.i = d;
            this.B = e;
            this.F = f;
            this.de = g;
            this.l = new Map;
            this.j = fb(o2, E(b, 7)) ? 1 : 0;
            this.A = new m2(this.Va, this.F.Tb);
            for (let h of dv(this.P)) this.l.set(E(h, 1), Ge(h, bv, 10))
        }
        qb(a, b, c) {
            b.addEventListener("click", n2(this, a, c))
        }
        Gg(a, b, c) {
            a = n2(this, a, c);
            b.addEventListener("message", a);
            return a
        }
        Bb(a, b, c, d) {
            return b.setTimeout(n2(this, a, c), d)
        }
        Fa(a, b) {
            this.Va.Fa(a, b, c => {
                c.es = this.F.Tb
            });
            return b
        }
        la(a) {
            return this.B.la(a)
        }
        X() {
            return F(this.P, 12) ===
                2
        }
    };
    const o2 = ["ja", "zh_CN", "zh_TW"];

    function q2(a, b, c, d) {
        var e = cZ(a, "div");
        e.classList.add("google-anno-skip", "goog-rentry");
        var f = r2(a, c);
        e.appendChild(f);
        K(e, {
            display: "flex",
            "flex-direction": "row",
            "justify-content": "flex-start",
            "padding-inline": Y(16),
            "align-items": "center",
            "margin-bottom": Y(0),
            "box-sizing": "border-box",
            height: Y(58),
            width: "100%",
            "min-width": "0",
            color: "#3c4043",
            "font-family": "Google Sans, Roboto, Arial, sans-serif",
            "font-weight": "400",
            "font-size": Y(18),
            "font-style": "normal",
            background: "#fff",
            cursor: "pointer"
        });
        a.getComputedStyle(d);
        e.appendChild(s2(a, b));
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        e.addEventListener("mouseenter", () => {
            K(f, {
                "text-decoration": "underline",
                "-webkit-text-decoration-line": "underline"
            })
        });
        e.addEventListener("mouseleave", () => {
            K(f, {
                "text-decoration": "none",
                "-webkit-text-decoration-line": "none"
            })
        });
        return e
    }

    function s2(a, b) {
        var c = lZ(a, "0 0 24 24", "24px", "24px", "M7.59009 18.59L9.00009 20L17.0001 12L9.00009 4L7.59009 5.41L14.1701 12");
        K(c, {
            fill: "#9aa0a6",
            color: "#9aa0a6",
            cursor: "inherit"
        });
        a = cZ(a, "span");
        K(a, {
            "margin-inline-start": "auto",
            "margin-inline-end": Y(10),
            "font-weight": "bold",
            "align-items": "center",
            "justify-content": "center",
            "font-size": Y(16)
        });
        b.X() && K(a, {
            transform: "scaleX(-1)"
        });
        a.appendChild(c);
        a.ariaHidden = "true";
        a.tabIndex = -1;
        return a
    }

    function r2(a, b) {
        var c = cZ(a, "span");
        c.appendChild(a.document.createTextNode(b));
        c.title = b;
        K(c, {
            "font-size": Y(18),
            "padding-bottom": Y(14),
            "padding-inline-start": Y(5),
            "padding-inline-end": Y(10),
            "padding-top": Y(14),
            color: "#3c4043",
            width: "auto",
            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "flex-shrink": "1",
            "min-width": "0"
        });
        return c
    };

    function t2(a) {
        a = cZ(a, "div");
        a.className = "goog-rentries";
        K(a, {
            display: "flex",
            "flex-direction": "row",
            width: "100%",
            "align-self": "stretch",
            "justify-content": "flex-start",
            "align-items": "center",
            "flex-shrink": "1",
            "flex-wrap": "wrap",
            "padding-bottom": Y(5),
            margin: Y(5),
            gap: Y(2),
            "background-color": "#f8f9fa",
            "border-radius": Y(4),
            border: "1px solid #dadce0",
            "box-sizing": "border-box"
        });
        return a
    }

    function u2(a, b) {
        var c = cZ(a, "span");
        c.innerText = E(b.P, 2);
        c.ariaLabel = E(b.P, 4);
        c.tabIndex = 0;
        c.role = "heading";
        c.ariaLevel = "2";
        K(c, {
            "font-weight": "700",
            "border-radius": Y(2),
            "font-size": Y(18),
            "padding-inline-start": Y(16),
            "margin-bottom": Y(0),
            "padding-bottom": Y(14),
            "padding-top": Y(14),
            color: "#4a4a4a"
        });
        a = cZ(a, "div");
        a.appendChild(c);
        K(a, {
            cursor: "inherit",
            direction: "inherit",
            "text-orientation": "inherit",
            visibility: "inherit",
            "writing-mode": "inherit",
            "font-size": Y(18),
            "padding-inline-start": Y(5),
            color: "#4a4a4a",
            "font-family": "Google Sans, Roboto, Arial, sans-serif",
            height: Y(48),
            display: "flex",
            "flex-direction": "row",
            "justify-content": "flex-start",
            "align-items": "center",
            "background-color": "#E8F0FE",
            "border-bottom": "1px solid #DADCE0",
            "border-top-left-radius": Y(4),
            "border-top-right-radius": Y(4),
            width: "100%"
        });
        return a
    }

    function v2(a, b) {
        var c = b.clientHeight;
        c === 0 && (a = a.getComputedStyle(b), a = Number(a.maxHeight.replace("px", "")), isNaN(a) || (c = a));
        c = Math.max(Math.floor((c - 48 - 10) / 58), 0);
        return c === 0 ? 0 : Math.min(8, c)
    }

    function w2(a, b, c, d, e, f, g, h) {
        var k = v2(a, g);
        if (!(k < 2 || c.size < 2)) {
            rt(a, ["Google Sans:400", "Google Sans:700"]);
            c = [...c];
            mc(f.getTermUsageCount) && c.sort((n, p) => f.getTermUsageCount(n) - f.getTermUsageCount(p));
            var l = t2(a),
                m = u2(a, d);
            l.appendChild(m);
            m = new q0;
            for (let n = 0; n < c.length && n < k; n++) {
                let p = c[n],
                    q = x2(a, b, g, d, e, h, m, p);
                l.appendChild(q);
                f.incrementTermUsageCount(p)
            }
            g.appendChild(l);
            l.appendChild(y2(a))
        }
    }

    function x2(a, b, c, d, e, f, g, h) {
        var k = m_(d.i.Xb(), h);
        Z0(e, k);
        c = q2(a, d, h, c);
        var l = z2(c, d, Ye(k));
        eZ(c);
        d.qb(999, c, m => {
            try {
                if (!z_(g, d)) return !1;
                let q = b ? .document ? .body ? .tagName === "BODY" ? b : a,
                    r = y_(q, d, h);
                var n = jo(io(new lo, h), Ye(k));
                var p = jf(n, 8, l.Bm);
                let v = ko(I(p, 9, 4), r),
                    y = d.i.qg(v);
                Q_(g, q, f, d, y, h, 4, !1);
                return !1
            } finally {
                m.preventDefault(), m.stopImmediatePropagation()
            }
        });
        return c
    }
    class A2 {
        constructor() {
            this.A = this.l = null
        }
        get Bm() {
            return this.l
        }
        j(a, b) {
            if (!this.l) {
                var c = a.xg,
                    d = new An;
                b = nf(d, 1, b);
                this.l = c.call(a, b)
            }
        }
        i(a) {
            if (this.l && !this.A) {
                var b = a.wg;
                var c = new zn;
                c = kf(c, 1, this.l);
                this.A = b.call(a, c)
            }
        }
    }

    function y2(a) {
        a = cZ(a, "div");
        K(a, {
            "align-self": "stretch",
            width: "100%",
            "background-color": "#dadce0",
            margin: "0",
            padding: "0"
        });
        return a
    }

    function z2(a, b, c) {
        var d = new A2;
        e1(b, 1065, e => {
            for (let f of e) f.isIntersecting ? d.j(b.i, c) : d.i(b.i)
        }).observe(a);
        return d
    };
    const B2 = new Map([
        [1, 1],
        [2, 2]
    ]);
    async function C2(a, b, c, d, e, f, g, h, k, l) {
        var m = HA,
            n = k2(a, k) ? ? Math.floor(Dj() * 20),
            p = g.la(0),
            q = !!a && Lr(a) < 488;
        k = c.P;
        var r = l2(E(k, 7)),
            v = a ? WB(a).adIntentsPageState : new VB,
            y = new po;
        n = hf(y, 2, n);
        n = Me(n, 3, Yc, c.F.Tb, id, void 0, void 0, !0);
        e = new j2(r, g, p, n, d.Gj ? ? new Set, D(k, 17), e, f, c.Vb, v, l, c.Fi);
        f = new p2(q, k, m, e, g, c.F, c.de);
        m = new F1;
        m.language = r;
        d = await D2(a, b, f, d, h, m, v);
        b = e.Qg;
        h = c.Zb;
        a = a ? .location ? .hostname || "";
        c = c.td;
        g = g.la(11) - p;
        p = new co;
        r = new Gn;
        h = pf(r, 1, h);
        a = pf(h, 2, a);
        q = ff(a, 3, q);
        q = ff(q, 5, !1);
        q = A(p, 1, q);
        c = C1(m, c);
        q = A(q, 2, c);
        q = kf(q, 3, Math.round(g));
        g = D1(k);
        q = A(q, 6, g);
        for (var G of $e(k, 8)) Me(q, 7, Sc, G1(G), Tc);
        d.length ? (G = Rn(d), B(q, 5, bo, G)) : (m.i = m.entries.length, G = new $n, G = Oe(G, m.entries), B(q, 4, bo, G));
        b.call(e, q)
    }

    function E2(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        var q = HA,
            r = l2(E(d.P, 7)),
            v = h.la(0),
            y = b ? WB(b).adIntentsPageState : new VB,
            G = k2(b, k) ? ? Math.floor(Dj() * 20);
        k = d.P;
        var w = new po;
        G = hf(w, 2, G);
        G = Me(G, 3, Yc, d.F.Tb, id, void 0, void 0, !0);
        f = new j2(r, h, v, G, e.Gj ? ? new Set, D(k, 17), f, g, d.Vb, y, p, d.Fi);
        g = !!b && Lr(b) < 488;
        p = new p2(g, d.P, q, f, h, d.F, d.de);
        q = new F1;
        q.language = r;
        r = [];
        a ? .document ? .body && F2(a.document.body) || r.push(Ln());
        n || r.length || (G2(m, a) ? b1(a, b, e, l, p, q, y, m, c) : w2(a, b, l, p, q, y, m, c));
        e = h.la(11) - v;
        c = f.Ai;
        a = a !== b;
        l = d.Zb;
        m = b ? .location ? .hostname ||
            "";
        b = d.td;
        d = d.P;
        h = new Do;
        n = new Gn;
        l = pf(n, 1, l);
        l = pf(l, 2, m);
        g = ff(l, 3, g);
        a = ff(g, 5, a);
        a = A(h, 1, a);
        b = C1(q, b);
        b = A(a, 3, b);
        b = kf(b, 5, Math.round(e));
        d = D1(d);
        d = A(b, 2, d);
        r.length ? (q = Rn(r), B(d, 6, Co, q)) : (r = new $n, q = Oe(r, q.entries), B(d, 4, Co, q));
        c.call(f, d)
    }

    function G2(a, b) {
        var c = a.clientHeight;
        c === 0 && (a = b.getComputedStyle(a), a = Number(a.maxHeight.replace("px", "")), isNaN(a) || (c = a));
        return c < 184
    }
    async function D2(a, b, c, d, e, f, g) {
        if (!a) return [On()];
        var h = a.document.body;
        if (!h || !F2(h)) return [Ln()];
        e.i.la(3) >= e.j && await U0(e, 4);
        h = [];
        (Lr(a) < 250 || Mr(a) < 300) && h.push(Ln());
        if ($e(c.P, 1).length) {
            let k = $e(c.P, 1).map(l => B2.get(l) ? ? 0);
            h.push(Qn(new Mn, In(k)))
        }
        Cj() && h.push(Pn());
        h.length || await n1(a, b, c, d, e, f, g);
        return h
    }

    function F2(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new IntersectionObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    };
    async function U0(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.j = a.i.la(b) + a.l
    }
    var H2 = class {
        constructor(a, b) {
            var c = T(Jx);
            this.win = a;
            this.i = b;
            this.l = c;
            this.j = b.la(2) + c
        }
    };
    async function I2(a, b, c, d, e, f, g) {
        var h = a.performance ? .now ? new SZ(a.performance) : new TZ,
            k = new H2(a, h);
        if (!kc(e)) throw Error(`Invalid config string ${e}`);
        e = RY(e);
        var l = Ge(e, ev, 1),
            m = c.google_ad_client;
        if (!kc(m)) throw new EA(`Invalid property code ${m}`);
        E(e, 5) && m !== E(e, 5) || (c = J2(c), m = K2(a, m, c), a = cr(CI), l = RZ(l), g = {
            P: PZ(b) || Ge(e, ev, 1),
            Zb: c,
            td: g,
            Vb: 1,
            F: NZ(l),
            de: m
        }, await L2(b, d, a, g, { ...QZ(),
            Fl: S(cx),
            Hl: S(fx),
            Gl: S(ex),
            wordWindowSize: T(Ix),
            sameSearchTermPerWindow: T(Nx),
            annotationsPerWindow: T(Lx),
            maximumAnnotationsPerPage: T(Mx),
            Hi: T(Ox),
            Mk: T(Gx),
            Lk: T(Fx),
            Nk: T(Hx),
            Xe: !S(dx),
            Jg: !0
        }, h, k, f))
    }

    function M2(a, b, c, d, e, f, g, h, k) {
        var l = a.performance ? .now ? new SZ(a.performance) : new TZ,
            m = c.google_ad_client;
        if (!kc(m)) throw new EA(`Invalid property code ${m}`);
        if (m === E(e, 2)) {
            c = J2(c);
            m = K2(a, m, c, Ge(e, ev, 1));
            e = OZ(b, e, c, g, RZ(Ge(e, ev, 1)), m);
            g = e.P;
            m = new Set(dv(g).filter(p => E(p, 12)).map(p => E(p, 1)));
            c = cr(CI);
            !k && G2(h, a) && N2(a, h, g);
            var n = O2(c, l);
            E2(a, b, d, e, { ...QZ(),
                Gm: 10
            }, P2(c, l, g), [new Q2(c, g)], l, f, m, h, k, n)
        }
    }

    function N2(a, b, c) {
        rt(a, ["Google Sans Text:500"]);
        var d = a.document.createElement("div");
        K(d, zv(a));
        d.className = "goog-rtopics";
        d.innerText = E(c, 2);
        d.ariaLabel = E(c, 4);
        d.tabIndex = 0;
        K(d, {
            cursor: "inherit",
            direction: "inherit",
            "text-orientation": "inherit",
            visibility: "inherit",
            "writing-mode": "inherit",
            "font-family": "Google Sans Text",
            "font-size": "16px",
            "font-weight": "500",
            "line-height": "24px",
            "letter-spacing": "0%",
            color: "#5F6368",
            "text-align": "center",
            "border-radius": "5px",
            "padding-left": "5px",
            "padding-right": "5px",
            "padding-top": "2px",
            "padding-bottom": "2px",
            background: "#FFFFFF"
        });
        b.appendChild(d)
    }

    function P2(a, b, c) {
        return [d => {
            HA.Fa(1214, FI(a, d, b.la(26)), e => {
                e.es = RZ(c)
            })
        }]
    }

    function K2(a, b, c) {
        var d = mI(a) ? .head_tag_slot_vars ? .google_ad_host ? ? a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null;
        return new LZ(b, d, R2(a), c)
    }
    async function L2(a, b, c, d, e, f, g, h) {
        if (a) {
            let k = WB(a);
            if (k.wasReactiveAdConfigReceived[42]) return;
            k.wasReactiveAdConfigReceived[42] = !0
        }
        await C2(a, b, d, e, P2(c, f, d.P), [new Q2(c, d.P)], f, g, h, O2(c, f))
    }

    function S1(a, b) {
        S2(a, c => c.Ok, {
            ia: 1,
            ...b
        })
    }

    function V1(a, b) {
        S2(a, c => c.Dn, {
            ia: 1,
            ...b
        })
    }

    function T1(a, b) {
        S2(a, c => c.Yl, {
            ia: 1,
            ...b
        })
    }

    function Q1(a, b) {
        S2(a, c => c.Pk, {
            ia: 1,
            ...b
        })
    }

    function N1(a, b) {
        S2(a, c => c.En, {
            ia: 1,
            ...b
        })
    }

    function Y1(a, b) {
        S2(a, c => c.Qk, {
            ia: 1,
            ...b
        })
    }

    function b2(a, b) {
        S2(a, c => c.Sk, {
            ia: 1,
            ...b
        })
    }

    function c2(a, b) {
        S2(a, c => c.Rk, {
            ia: 1,
            ...b
        })
    }

    function d2(a, b) {
        S2(a, c => c.Fn, {
            ia: 1,
            ...b
        })
    }

    function e2(a, b) {
        S2(a, c => c.kn, {
            ia: 1,
            ...b
        })
    }

    function f2(a, b) {
        S2(a, c => c.Kk, {
            ia: 1,
            ...b
        })
    }

    function S2(a, b, c) {
        a.ha && a.Va.Fa(1214, HI(a.ha, b, c), d => {
            d.es = RZ(a.i)
        })
    }

    function T2(a, b, c) {
        a.ha && a.Va.Fa(1214, II(a.ha, b, c), d => {
            d.es = RZ(a.i)
        })
    }
    class Q2 {
        constructor(a, b) {
            var c = HA;
            this.ha = a;
            this.Va = c;
            this.i = b
        }
        Pg(a, b) {
            T2(this, c => c.Pg, {
                Pc: a != null && wc(a) ? Number(a) : 0,
                ...b
            })
        }
        zi(a, b) {
            T2(this, c => c.zi, {
                Pc: a != null && wc(a) ? Number(a) : 0,
                ...b
            })
        }
        Rg(a, b) {
            S2(this, c => c.Rg, {
                ia: a,
                ...b
            })
        }
        Bi(a, b) {
            S2(this, c => c.Bi, {
                ia: a,
                ...b
            })
        }
        click(a) {
            S2(this, b => b.pl, {
                ia: 1,
                ...a
            })
        }
    }

    function J2(a) {
        a = a.google_page_url;
        return kc(a) ? a : ""
    }

    function R2(a) {
        return Hj(a, {
            Aa: () => {}
        })
    }

    function O2(a, b) {
        return c => GI(a, c, () => b.la(26))
    };

    function RX(a, b) {
        var c = a.i.getBoundingClientRect();
        if (U2(c)) {
            var d = document.createElement("div");
            d.dataset.googleAdEfd = "true";
            T(Px) > 0 && (d.className = "google-aiuf");
            K(d, {
                width: `${c.width}px`,
                display: "flex",
                "flex-wrap": "wrap",
                "justify-content": "center",
                "align-items": "center",
                "align-content": "center",
                gap: "10px",
                "font-size": "initial"
            });
            c.bottom < 0 || c.top >= window.innerHeight ? (K(d, {
                height: "auto",
                "max-height": Y(a.i.offsetHeight)
            }), K(a.i.parentElement, {
                height: "auto"
            }), K(a.i.parentElement.parentElement, {
                height: "auto",
                "background-color": "transparent"
            })) : K(d, {
                height: `${c.height}px`
            });
            c = a.i.parentElement;
            c.replaceChild(d, a.i);
            (c.parentElement ? .classList.contains("adsbygoogle") ? c.parentElement : c).dataset.adStatus = "unfill-optimized";
            M2(a.pubWin, a.j, a.I, a.Ia, b, a.M, a.td, d, !1)
        } else a = a.i.closest("INS"), ZF(a) && yV(a, 0, 0)
    }

    function SX(a, b) {
        M2(a.pubWin, a.j, a.I, a.Ia, b, a.M, a.td, a.i, !0)
    }

    function V2(a, b) {
        a.i.parentElement && (b = Wr(b), b.r_affa && b.r_affa !== "" && (b = QX(b.r_affa), dv(Ge(b, ev, 1)).filter(c => E(c, 12)).length >= T(Ex) ? RX(a, b) : SX(a, b)))
    }

    function U2(a) {
        if (T(Px) <= 0) return !0;
        var b = T(Px) * window.innerHeight,
            c = document.getElementsByClassName("google-aiuf");
        if (c.length === 0) return !0;
        for (let d of c)
            if (c = d.getBoundingClientRect(), a.bottom <= c.top && c.top - a.bottom <= b || a.top >= c.bottom && a.top - c.bottom <= b) return !1;
        return !0
    }
    var W2 = class extends EX {
        constructor(a, b, c, d, e, f, g) {
            super(a, b);
            this.I = c;
            this.pubWin = d;
            this.Ia = e;
            this.M = f;
            this.td = g
        }
        Z(a) {
            a["unfill-fb"] = b => {
                V2(this, b)
            }
        }
    };
    var X2 = X(function(a, b, c, d, e, f) {
        var g = a.ja,
            h = a.Xa,
            k = a.Ka;
        a = a.M;
        if (c && h) {
            if (!(h = S(qx))) try {
                h = !!c ? .location ? .hash ? .match(/\bgoog_uffb/)
            } catch (l) {
                h = !1
            }(b = h ? new W2(c, g, d, b, e, a, f.SLqBY ? ? "") : null) && k(b);
            return {
                Ob: b
            }
        }
        return {
            Ob: null
        }
    }, {
        id: 1422,
        H: {
            Ob: void 0
        }
    });

    function Y2(a, b) {
        return new IntersectionObserver(b, a)
    }

    function Z2(a, b, c) {
        Ji(a, b, c);
        return () => Ki(a, b, c)
    }
    let $2 = null;

    function a3() {
        $2 = fl()
    }

    function b3(a, b) {
        return b ? $2 === null ? (Ji(a, "mousemove", a3, {
            passive: !0
        }), Ji(a, "scroll", a3, {
            passive: !0
        }), a3(), !1) : fl() - $2 >= b * 1E3 : !1
    }

    function c3({
        win: a,
        element: b,
        Nn: c,
        Jn: d,
        In: e = 0,
        Ib: f,
        Ol: g,
        options: h = {},
        Im: k = !0,
        tp: l = Y2
    }) {
        var m, n = !1,
            p = !1,
            q = [],
            r = l(h, (v, y) => {
                try {
                    let G = () => {
                        q.length || (d && (q.push(Z2(b, "mouseenter", () => {
                            n = !0;
                            G()
                        })), q.push(Z2(b, "mouseleave", () => {
                            n = !1;
                            G()
                        }))), q.push(Z2(a.document, "visibilitychange", () => G())));
                        var w = b3(a, e),
                            x = eS(a.document);
                        if (p && !n && !w && !x) m = m || a.setTimeout(() => {
                            b3(a, e) ? G() : (f(), y.disconnect())
                        }, c * 1E3);
                        else if (k || n || w || x) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = v[v.length - 1]);
                    G()
                } catch (G) {
                    g && g(G)
                }
            });
        r.observe(b);
        return () => {
            r.disconnect();
            for (let v of q) v();
            m != null && a.clearTimeout(m)
        }
    };

    function d3(a, b, c, d, e) {
        return new e3(a, b, c, d, e)
    }

    function f3(a, b, c) {
        var d = a.i,
            e = a.B;
        if (e != null && d != null && Tr(c, d.contentWindow) && (b = b.config, kc(b))) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = eg(nj, f)
            } catch (g) {
                return
            }
            a.dispose();
            f = Ve(a.l, 1);
            f <= 0 || (a.A = c3({
                win: a.j,
                element: e,
                Nn: f - .2,
                Jn: !wj(),
                In: Ve(a.l, 3),
                Ib: () => void g3(a, e),
                Ol: g => jr.Ea(1223, g, void 0, void 0),
                options: {
                    threshold: Xe(a.l, 2, 1)
                },
                Im: !0
            }))
        }
    }

    function g3(a, b) {
        a.C();
        setTimeout(jr.kc(1224, () => {
            var c = Number(a.I.rc);
            a.I.rc = c ? c + 1 : 1;
            c = b.parentElement || null;
            c && Ay.test(c.className) || (c = hi(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            S(Ow) ? (h3(a, c, b), a.I.no_resize = !0, Js(OQ(c), "filled", () => {
                ii(b)
            })) : ii(b);
            CY(c, a.I, a.j)
        }), 200)
    }

    function h3(a, b, c) {
        a.j.getComputedStyle(b).position === "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var e3 = class extends EX {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.I = c;
            this.B = d;
            this.C = e;
            this.l = this.A = null;
            (b = (b = b.contentWindow) && b.parent) && a !== b && this.ma.push(oQ(b, "sth", this.Za, this.Ue))
        }
        Z(a) {
            a.av_ref = (b, c) => {
                f3(this, b, c)
            }
        }
        W() {
            super.W();
            this.B = null;
            this.A && this.A()
        }
    };
    var i3 = X(function(a, b, c, d, e) {
        var f = a.ja,
            g = a.Xa,
            h = a.Ka,
            k = a.ff;
        b && g && b.IntersectionObserver && h(d3(b, f, c, d, LA(1225, () => {
            k();
            for (let l of e) l();
            e.length = 0
        })));
        return {}
    }, {
        id: 1421,
        H: {}
    });
    var j3 = class extends xW {
        constructor(a, b, c, d, e, f) {
            super(a);
            a = W(Z(this, IX, {
                ja: d
            }, b.K, b.I, b.Ia), e);
            e = W(Z(this, OX, {
                ja: d
            }, b), a.finished);
            var g = W(Z(this, JX, {
                ja: d,
                M: c,
                sb: f
            }, b.pubWin, b.Ia), e.finished);
            g = W(Z(this, X2, {
                ja: d,
                Xa: a.Xa,
                Ka: a.Ka,
                M: c
            }, b.pubWin, b.K, b.I, b.Ia, b.pageState), g.finished);
            g = W(Z(this, UX, {
                ja: d,
                Xa: a.Xa,
                Ka: a.Ka,
                Ob: g.Ob
            }, b.K, b.I, b.ea), g.finished);
            g = W(Z(this, PY, {
                ja: d,
                Xa: a.Xa,
                Ka: a.Ka
            }, b), g.finished);
            g = W(Z(this, MX, {
                ja: d,
                Xa: a.Xa,
                Ka: a.Ka
            }, b.K, b.ea), g.finished);
            e = W(Z(this, i3, {
                    ja: d,
                    Xa: a.Xa,
                    Ka: a.Ka,
                    ff: e.ff
                },
                b.K, b.I, b.ea, b.Ia), g.finished);
            c = W(Z(this, HX, {
                ja: d,
                Ka: a.Ka,
                M: c,
                sb: f
            }, b.K, b.pageState), e.finished);
            c = W(Z(this, JY, {
                ja: d
            }, b.K, b.I, b.Ia), c.finished);
            this.i = W(Z(this, wX, {
                ja: d
            }, b.K, b.ea, b.Ia), c.finished).finished
        }
    };
    var k3 = X(function(a, b, c) {
        var d = nr(b);
        if (d)
            if (d.container === "AMP-STICKY-AD") {
                let e = f => {
                    f.data === "fill_sticky" && d.renderStart ? .()
                };
                Ji(b, "message", LA(616, e));
                c.push(() => {
                    Ki(b, "message", e)
                })
            } else d.renderStart ? .();
        return {}
    }, {
        id: 1419,
        H: {}
    });
    var l3 = X(function(a) {
        var b = a.ja;
        a = a.Be;
        var c = () => {
            b && b.setAttribute("data-load-complete", "true")
        };
        a ? a.then(c) : Ji(b, "load", c);
        return {}
    }, {
        id: 1416,
        H: {}
    });
    const m3 = MW(function(a) {
        return !a.wa && a.eb
    }, {
        id: 1460
    });
    var n3 = class extends JW {
        constructor(a, b, c, d, e, f, g, h, k) {
            super(a);
            this.ha = a;
            this.C = h;
            this.J = new wT;
            this.wa = g.wa;
            this.eb = g.eb;
            g = f.Kf;
            f = f.Vl;
            ({
                ja: b
            } = Z(this, WW, {
                La: this.C.La,
                Ul: this.C.Jf,
                Vn: b
            }));
            g = W(W(Z(this, tX, {
                M: e
            }, d.I, d.pubWin, d.pageState), g), f);
            f = Z(this, qX, {
                ja: b
            }, d.I, d.pubWin, d.ea);
            W(f, g.finished);
            g = Z(this, l3, {
                ja: b,
                Be: this.C.Be
            });
            W(g, f.finished);
            a = vW(this, new j3(a, d, e, b, g.finished, k));
            c = Z(this, VW, {
                ja: b,
                Ya: c
            }, d.I, d.ea);
            W(c, a.i);
            d = Z(this, k3, {}, d.pubWin, d.Ia);
            W(d, c.finished);
            this.J = d.finished
        }
        async i() {
            return KW(this.ha,
                m3, {
                    wa: this.wa,
                    eb: this.eb
                })
        }
        j() {
            this.J.notify()
        }
    };

    function o3(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function p3(a) {
        var b = Jj("IFRAME");
        oj(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    };
    var q3 = X(function(a, b) {
        a = a.Yc;
        FU("attribution-reporting", b) && o3("attribution-reporting", a);
        FU("run-ad-auction", b) && o3("run-ad-auction", a);
        return {
            Ce: a
        }
    }, {
        id: 1380,
        H: {
            Ce: void 0
        }
    });
    var r3 = X(function(a, b, c) {
        a = a.Ph;
        var d = c.google_async_iframe_id,
            e = c.google_ad_width,
            f = c.google_ad_height;
        b = SS(c);
        d = {
            id: d,
            name: d,
            style: b ? `width:${e}px !IMPORTANT;height:${f}px !IMPORTANT;` : `left:0;position:absolute;top:0;border:0;width:${e}px;height:${f}px;`
        };
        d.style += "min-height:auto;max-height:none;min-width:auto;max-width:none;";
        Tj() && (d.sandbox = Rj(["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]).join(" "));
        c.google_video_play_muted === !1 &&
            o3("autoplay", d);
        return {
            Yc: d,
            adUrl: a,
            xd: b
        }
    }, {
        id: 1346,
        H: {
            Yc: void 0,
            adUrl: void 0,
            xd: void 0
        }
    });

    function s3(a, b, c, d, e, f, g) {
        var h = d.K,
            k = d.pubWin;
        return a.google_reactive_ad_format === 9 && ni(e, null, "fsi_container") ? (e.appendChild(f), Promise.resolve(f)) : OS(b.Vj, 525, l => {
            e.appendChild(f);
            l.createAdSlot(h, a, f, e.parentElement, cg(c), k, g);
            return f
        })
    }
    var t3 = rW(async function(a, b) {
        var c = a.Bh,
            d = a.M;
        if (!a.xd) return null;
        var e = b.I,
            f = b.Li,
            g = b.ea,
            h = b.Sa;
        b = b.oc;
        var k = f.K;
        f = f.pubWin;
        c.src = a.bb;
        a = p3(c);
        return s3(e, h, d, {
            K: k,
            pubWin: f
        }, g, a, b)
    }, {
        id: 1396
    });
    var u3 = X(function(a, b) {
        var c = a.Bh;
        if (a.xd) return {
            Qe: null
        };
        var d = b.ea,
            e = b.Ia;
        b = b.Li.pubWin;
        c.src = oU(a.bb);
        a = b === b.top;
        c = p3(c);
        a && e.push(tr(b, c));
        for (d.style.visibility = "visible"; e = d.firstChild;) d.removeChild(e);
        d.appendChild(c);
        return {
            Qe: c
        }
    }, {
        id: 1397,
        H: {
            Qe: void 0
        }
    });
    var v3 = X(function(a, b, c, d) {
        if (!b.rpe) return {};
        CV(new MV(c, d, void 0, {
            height: b.google_ad_height,
            Ei: "force",
            Ye: !0,
            ui: !0,
            Dg: b.google_ad_client
        }, null, null, !0));
        return {}
    }, {
        id: 1398,
        H: {}
    });
    var w3 = X(function(a) {
        var b = a.qn;
        return b ? {
            Cg: b
        } : {
            Cg: a.Qe
        }
    }, {
        id: 1402,
        H: {
            Cg: void 0
        }
    });
    var x3 = X(function(a, b) {
        a = a.Yc;
        var c = b.google_ad_width;
        b = b.google_ad_height;
        c != null && (a.width = String(c));
        b != null && (a.height = String(b));
        a.frameborder = "0";
        a.marginwidth = "0";
        a.marginheight = "0";
        a.vspace = "0";
        a.hspace = "0";
        a.allowtransparency = "true";
        a.scrolling = "no";
        return {
            Ce: a
        }
    }, {
        id: 1373,
        H: {
            Ce: void 0
        }
    });
    const y3 = MW(function(a) {
        return !a.wa && a.eb && !a.La
    }, {
        id: 1461
    });
    var z3 = class extends JW {
        constructor(a, b, c, d, e, f, g, h) {
            super(a);
            this.ha = a;
            this.wa = f;
            this.eb = g;
            this.La = h;
            var {
                Yc: k,
                adUrl: l,
                xd: m
            } = Z(this, r3, {
                Ph: b,
                M: d
            }, c.pubWin, c.I);
            ({
                Ce: a
            } = Z(this, x3, {
                Yc: k
            }, c.I));
            ({
                Ce: e
            } = Z(this, q3, {
                Yc: a
            }, e.document));
            d = uW(this, t3, {
                Bh: e,
                bb: l,
                xd: m,
                M: d
            }, {
                I: c.I,
                Li: {
                    pubWin: c.pubWin,
                    K: c.K
                },
                ea: c.ea,
                Sa: c.Sa,
                Ia: c.Ia,
                oc: c.oc
            });
            e = Z(this, u3, {
                Bh: e,
                bb: l,
                xd: m
            }, {
                I: c.I,
                Li: {
                    pubWin: c.pubWin,
                    K: c.K
                },
                ea: c.ea,
                Sa: c.Sa,
                Ia: c.Ia,
                oc: c.oc
            });
            d = Z(this, w3, {
                qn: d.output,
                Qe: e.Qe
            });
            this.C = d.Cg;
            c = Z(this, v3, {}, c.I, c.pubWin,
                c.ea);
            W(c, d.finished);
            this.Kf = c.finished
        }
        async i() {
            return KW(this.ha, y3, {
                La: this.La,
                wa: this.wa,
                eb: this.eb
            })
        }
        j() {
            this.Kf.notify();
            nT(this.C, null)
        }
    };
    var A3 = X(function(a) {
        if (!a.da) return {};
        var b = a.yb.Hn;
        if (b) {
            var c = a.da;
            b = Zg(b);
            c.srcdoc = Qg(b)
        }
        Th(a.da, "allowtransparency", "true");
        Th(a.da, "vspace", "0");
        Th(a.da, "hspace", "0");
        return {}
    }, {
        id: 1455,
        H: {}
    });
    var B3 = X(function(a) {
        if (!a.da) return {};
        var b = a.yb.bd,
            c = a.yb.Xc;
        a.da.style.top = "0";
        a.da.style.left = "0";
        a.da.style.position = "absolute";
        a.da.style.width = `${b}px`;
        a.da.style.height = `${c}px`;
        a.da.style.minHeight = "auto";
        a.da.style.maxHeight = "none";
        a.da.style.minWidth = "auto";
        a.da.style.maxWidth = "none";
        a.da.style.removeProperty("vertical-align");
        return {}
    }, {
        id: 1456,
        H: {}
    });
    var C3 = X(function(a, b, c) {
        var d = c.google_async_iframe_id,
            e = c.google_ad_width,
            f = c.google_ad_height,
            g = c.google_video_play_muted === !1;
        c = c.dash || "";
        var h = oy(Yx),
            k = [];
        for (let l = 0; l < h.length; l += 2) Hl(h[l], h[l + 1], k);
        return {
            yb: {
                Ih: d,
                bd: e,
                Xc: f,
                ea: b,
                Xk: g,
                Hn: c,
                jl: k.join("&"),
                Nd: a.Nd
            }
        }
    }, {
        id: 1482,
        H: {
            yb: void 0
        }
    });

    function D3(a, b = {}) {
        var c = {
            frameborder: 0,
            allowTransparency: "true",
            style: "border:0;vertical-align:bottom;",
            src: "about:blank"
        };
        Mh(c, b);
        ei(a, c)
    };

    function E3({
        Qj: a,
        size: b,
        Am: c
    }) {
        b === 1 || c || (a.style.width = Di(b.width), a.style.height = Di(b.height))
    }

    function F3(a) {
        E3(a);
        var b = a.da,
            c = a.Qj,
            d = a.jl,
            e = a.Pm,
            f = a.Ih,
            g = a.im,
            h = a.sp,
            k = a.content,
            l = a.od,
            m = a.Am,
            n = a.size,
            p = m || !b;
        k = JSON.stringify({
            creative: m || !b ? k ? ? "" : ""
        });
        var q = null;
        a.ck && (q = a.ck);
        a = G3(f, k, n, g, h, l, p, q == null ? null : q.join(" "), d ? ? "", e ? `//${e}.safeframe.googlesyndication.com` : "//tpc.googlesyndication.com", c);
        m ? (c.removeChild(b), D3(b, a), m = b) : b ? (m = b, D3(b, a)) : (b = Jj("IFRAME"), D3(b, a), m = b);
        c.appendChild(m);
        return m
    }

    function G3(a, b, c, d = "3rd party ad content", e = "Advertisement", f, g, h, k, l, m) {
        var n = 0,
            p = 0;
        c !== 1 && (n = c.width, p = c.height);
        a = {
            id: a,
            title: d,
            name: b,
            scrolling: "no",
            marginWidth: "0",
            marginHeight: "0",
            width: String(n),
            height: String(p),
            "data-is-nameframe": "true"
        };
        g && (g = gi(di(m)), k && (k = "?" + k), l = l + "/nameframe.html" + k, (g = xX(g)) && (l += `${k?"&":"?"}n=${g}`), a.src = `https:${l}`);
        h !== null && (a.sandbox = h);
        f && (a.allow = f);
        a["aria-label"] = e;
        a.tabIndex = 0;
        return a
    };

    function H3(a, b, c, d) {
        var e = a.Ih,
            f = a.bd,
            g = a.Xc;
        a = a.ea;
        var {
            promise: h,
            resolve: k
        } = ia(Promise, "withResolvers").call(Promise), l = F3({
            Qj: a,
            Ih: e,
            im: e,
            size: new Ah(f, g),
            content: b,
            ck: c ? ? void 0,
            Pm: zX(),
            od: d ? .join(";")
        }), m = Vy(415, () => {
            k();
            Ki(l, "load", m)
        });
        Ji(l, "load", m);
        return {
            Jf: l,
            Be: h
        }
    }
    var I3 = X(function(a) {
        return H3(a.yb, a.Fk, a.Ke, a.od)
    }, {
        id: 1453,
        H: {
            Jf: void 0,
            Be: void 0
        }
    });
    var J3 = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        K3 = ["allow-top-navigation"],
        L3 = ["allow-same-origin"],
        M3 = Rj([...J3, ...K3]);
    Rj([...J3, ...L3]);
    Rj([...J3, ...K3, ...L3]);
    var N3 = X(function() {
        return Tj() ? {
            Ke: M3
        } : {
            Ke: void 0
        }
    }, {
        id: 1475,
        H: {
            Ke: void 0
        }
    });
    const O3 = ["run-ad-auction", "attribution-reporting"];
    var P3 = X(function(a, b) {
        a = a.yb.Xk;
        var c = O3.filter(d => FU(d, b));
        a && c.push("autoplay");
        return {
            od: c
        }
    }, {
        id: 1476,
        H: {
            od: void 0
        }
    });
    var Q3 = class extends xW {
        constructor(a, b, c, d) {
            super(a);
            this.Wh = a;
            this.i = new wT;
            ({
                yb: a
            } = Z(this, C3, {
                Nd: d
            }, b.ea, b.I, b.pubWin));
            ({
                Ke: d
            } = Z(this, N3, {}));
            ({
                od: b
            } = Z(this, P3, {
                yb: a
            }, b.pubWin.document));
            var {
                Jf: e,
                Be: f
            } = Z(this, I3, {
                Fk: c,
                Ke: d,
                od: b,
                yb: a
            });
            c = Z(this, A3, {
                da: e,
                yb: a
            });
            c = W(Z(this, B3, {
                da: e,
                yb: a
            }), c.finished);
            this.j = e;
            this.C = f;
            this.i = c.finished
        }
    };

    function R3(a, b) {
        var c = window,
            d = e => {
                e.blockedURI === a && e.disposition === "enforce" && (MI(1), c.removeEventListener("securitypolicyviolation", d))
            };
        c.addEventListener("securitypolicyviolation", d);
        ys(b, () => {
            c.removeEventListener("securitypolicyviolation", d)
        });
        return d
    }

    function S3(a, b) {
        var c = new MutationObserver((d, e) => {
            a.isConnected || (e.disconnect(), b.abort())
        });
        c.observe(document.body, {
            childList: !0,
            subtree: !0
        });
        return c
    }
    var T3 = rW(async function(a, b, c) {
        var d = a.lm;
        a = oU(a.adUrl);
        var e;
        T(Vx) > 0 && (e = R3(a, c));
        c = !1;
        if (!b.isConnected) return {
            error: Error("Iframe wrapper element is not in the DOM at request time."),
            redirected: c
        };
        var f = new AbortController;
        b = S3(b, f);
        try {
            let g = await fetch(a, {
                credentials: d ? "include" : "omit",
                redirect: T(Vx) > 0 ? "manual" : "follow",
                signal: f.signal
            });
            if (g.type === "opaqueredirect" || g.status >= 300 && g.status < 400) {
                c = !0;
                let h = g.headers.get("Location") || a;
                g = await fetch(h, {
                    credentials: d ? "include" : "omit",
                    signal: f.signal
                })
            }
            return {
                response: g,
                redirected: c
            }
        } catch (g) {
            return {
                error: g,
                redirected: c
            }
        } finally {
            b.disconnect(), e && setTimeout(() => {
                window.removeEventListener("securitypolicyviolation", e)
            }, 0)
        }
    }, {
        id: 1452
    });

    function U3() {
        var a = ny(Zx) || "0-0-0",
            b = a.split("-").map(d => Number(d)),
            c = ["0", "0", "0"].map(d => Number(d));
        for (let d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "0-0-0"
    }
    var V3 = X(function() {
        return {
            Nd: U3()
        }
    }, {
        id: 1477,
        H: {
            Nd: void 0
        }
    });
    var W3 = X(function(a, b) {
        a = a.M.ga();
        b = !CR(b.I);
        return {
            output: a && b
        }
    }, {
        id: 1474,
        H: {
            output: void 0
        }
    });

    function X3(a, b) {
        var c = Jj("IFRAME");
        Oh(c, b);
        c.style.visibility = "hidden";
        c.style.display = "none";
        a = a.getElementsByTagName("script");
        a.length && (a = a[a.length - 1], a.parentNode && a.parentNode.insertBefore(c, a.nextSibling));
        return c
    }

    function Y3(a, b, c) {
        if (!a.i[c.toString()]) {
            a.i[c.toString()] = 1;
            var d = X3(b.document, c);
            d.addEventListener("load", () => {
                d.remove()
            })
        }
    }

    function Z3(a, b) {
        var c = new $3;
        if (!kc(b)) throw new TypeError("subdomain is not a string");
        if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(b)) throw new RangeError(`Invalid subdomain: ${b}`);
        b = Vg(`https://${b}.safeframe.googlesyndication.com/nameframe.html`);
        var d = xX(a);
        b = d ? kh(b, new Map([
            ["n", String(d)]
        ])) : b;
        Y3(c, a, b)
    }
    var $3 = class {
        constructor() {
            this.i = {}
        }
    };

    function a4(a, b, c, d) {
        var e = f => {
            f.blockedURI.startsWith(`https://${a}`) && f.disposition === "enforce" && (c(), b.removeEventListener("securitypolicyviolation", e))
        };
        b.addEventListener("securitypolicyviolation", e);
        ys(d, () => {
            b.removeEventListener("securitypolicyviolation", e)
        })
    }
    var b4 = X(function(a, b, c, d) {
        if (b.GLnKw || b.FJPve) return {};
        a = zX();
        T(Vx) > 0 && a4(a, c, () => {
            MI(3)
        }, d);
        Z3(c, a);
        b.GLnKw = !0;
        return {}
    }, {
        id: 1575,
        H: {}
    });
    const c4 = ["Failed to fetch", "Load failed"];
    var d4 = X(function(a) {
        var b = a.Af.error;
        a = a.Af.redirected;
        b && (OA(1610, b), T(Vx) > 0 && b instanceof TypeError && c4.includes(b.message) && a && MI(2));
        return {}
    }, {
        id: 1610,
        H: {}
    });
    var e4 = class extends Error {
        constructor(a) {
            super(a)
        }
    };
    e4.prototype.name = "NetworkError";
    var f4 = rW(async function(a) {
        var b = Promise.resolve(null);
        (a = a.Af.response) && (a.status >= 300 ? OA(1454, new e4(`Received non-200 response from BOW, status: ${a.status}`)) : b = a.text());
        return b
    }, {
        id: 1454
    });
    var g4 = class extends xW {
        constructor(a, b) {
            super(a);
            this.i = uW(this, f4, {
                Af: b
            }).output;
            Z(this, d4, {
                Af: b
            })
        }
    };
    const h4 = MW(function(a) {
        return a.La && !a.wa && a.eb
    }, {
        id: 1487
    });
    var i4 = class extends JW {
        constructor(a, b, c, d, e) {
            super(a);
            this.ha = a;
            this.La = e.La;
            this.wa = e.wa;
            this.Dh = e.Dh;
            ({
                Nd: e
            } = Z(this, V3, {}));
            Z(this, b4, {
                Nd: e
            }, c.pageState, c.pubWin, this);
            ({
                output: d
            } = Z(this, W3, {
                M: d
            }, c));
            ({
                output: b
            } = uW(this, T3, {
                lm: d,
                adUrl: b
            }, c.ea, this));
            ({
                i: b
            } = vW(this, new g4(a, b)));
            var {
                j: f,
                C: g,
                i: h
            } = vW(this, new Q3(a, c, b, e));
            this.C = f;
            this.Za = g;
            this.J = h
        }
        async i() {
            return KW(this.ha, h4, {
                La: this.La,
                wa: this.wa,
                eb: this.Dh
            })
        }
        j() {
            nT(this.C, null);
            nT(this.Za, null);
            this.J.notify()
        }
    };
    var j4 = class extends xW {
        constructor(a, b, c, d) {
            super(a);
            var {
                M: e
            } = W(Z(this, zW, {}, b), c), f = W(Z(this, UW, {
                M: e
            }, b.pubWin, a), c);
            c = W(Z(this, QW, {}, b), c);
            f = f.dj;
            c = W(Z(this, CW, {
                M: e,
                sb: f
            }, b.pubWin), c.finished);
            d = W(Z(this, AW, {
                M: e,
                wb: d
            }, b.pubWin, b.I, b.pageState), c.finished);
            var g = vW(this, new OW(a, b, e, d.Od, d.finished, f));
            c = W(Z(this, PW, {}, b), g.C).La;
            var h = vW(this, new yW(a, b, e, g.C, c, f, g.Ec, g.Ya)),
                k = h.i.Vm;
            g = h.i.wa;
            h = h.i.Ya;
            var l = vW(this, new i4(a, k, b, e, {
                La: c,
                wa: g,
                Dh: d.Od
            }));
            k = vW(this, new z3(a, k, b, e, b.pubWin, g, d.Od,
                c));
            this.i = vW(this, new n3(a, k.C, h, b, e, {
                Kf: k.Kf,
                Vl: l.J
            }, {
                wa: g,
                eb: d.Od
            }, {
                La: c,
                Jf: l.C
            }, f)).J
        }
    };
    var k4 = X(function(a, b) {
        b.j |= a.xf;
        return {
            hk: b
        }
    }, {
        id: 1412,
        H: {
            hk: void 0
        }
    });
    const l4 = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        m4 = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        n4 = {
            Wf: a => a.listener,
            ve: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Ed: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        o4 = {
            Wf: a => a.listener,
            ve: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Ed: (a, b) => {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function p4(a) {
        var b = {};
        kc(a.data) ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            mi: b.__gppReturn.callId
        }
    }
    var t4 = class extends N {
        constructor(a) {
            ({
                timeoutMs: b
            } = {});
            var b;
            super();
            this.caller = new cJ(a, "__gppLocator", c => typeof c.__gpp === "function", p4);
            this.caller.B.set("addEventListener", l4);
            this.caller.A.set("addEventListener", n4);
            this.caller.B.set("removeEventListener", m4);
            this.caller.A.set("removeEventListener", o4);
            this.timeoutMs = b ? ? 500
        }
        W() {
            this.caller.dispose();
            super.W()
        }
        addEventListener(a) {
            var b = th(() => {
                    a(q4, !0)
                }),
                c = this.timeoutMs === -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            bJ(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e)
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(r4, !0);
                            return
                        }
                        a(s4, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            bJ(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const s4 = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        q4 = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        r4 = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function u4(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function v4(a) {
        a = new t4(a);
        if (!$I(a.caller)) return Promise.resolve(null);
        var b = aI(),
            c = fI(b, 35);
        if (c) return Promise.resolve(c);
        var d = new Promise(e => {
            e = {
                resolve: e
            };
            var f = fI(b, 36, []);
            f.push(e);
            gI(b, 36, f)
        });
        c || c === null || (gI(b, 35, null), a.addEventListener(e => {
            if (e.pingData.signalStatus === "ready" || u4(e.pingData.applicableSections)) {
                e = e.pingData;
                gI(b, 35, e);
                for (let f of fI(b, 36, [])) f.resolve(e);
                gI(b, 36, [])
            }
        }));
        return d
    };

    function w4(a) {
        a = new wJ(a, {
            timeoutMs: -1,
            gd: !0
        });
        if (!sJ(a)) return Promise.resolve(null);
        var b = aI(),
            c = kI(b);
        if (c) return Promise.resolve(c);
        var d = new Promise(e => {
            e = {
                resolve: e
            };
            var f = fI(b, 25, []);
            f.push(e);
            gI(b, 25, f)
        });
        c || c === null || (gI(b, 24, null), a.addEventListener(e => {
            if (mJ(e)) {
                gI(b, 24, e);
                for (let f of fI(b, 25, [])) f.resolve(e);
                gI(b, 25, [])
            } else gI(b, 24, null)
        }));
        return d
    };
    const x4 = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ib({
                    Wd: c ? ? void 0,
                    jj: d ? void 0 : 2
                })
            })
        },
        y4 = {
            Wf: a => a.Ib,
            ve: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Ed: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    Wd: b.returnValue ? ? void 0,
                    jj: b.success ? void 0 : 2
                })
            }
        };

    function z4(a) {
        a = kc(a.data) ? JSON.parse(a.data) : a.data;
        return {
            payload: a,
            mi: a.__uspapiReturn.callId
        }
    }

    function A4(a, b) {
        var c = {};
        if ($I(a.caller)) {
            var d = th(() => {
                b(c)
            });
            bJ(a.caller, "getDataWithCallback", {
                Ib: e => {
                    e.jj || (c = e.Wd);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var B4 = class extends N {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new cJ(a, "__uspapiLocator", b => typeof b.__uspapi === "function", z4);
            this.caller.B.set("getDataWithCallback", x4);
            this.caller.A.set("getDataWithCallback", y4)
        }
        W() {
            this.caller.dispose();
            super.W()
        }
    };

    function C4(a) {
        var b = new B4(a);
        return new Promise(c => {
            A4(b, d => {
                d && kc(d.uspString) ? c(d.uspString) : c(null)
            })
        })
    }

    function D4(a, {
        Mn: b,
        Tn: c,
        gm: d
    }) {
        var e = new IN;
        var f = Pc(he(b, 5)) != null ? b.ga() : a.ga();
        e = HN(e, f);
        f = Pc(he(b, 17)) != null ? D(b, 17) : D(a, 17);
        e = ef(e, 17, f);
        a = Pc(he(a, 14));
        a = ef(e, 14, a);
        f = Pc(he(b, 3));
        a = ef(a, 3, f);
        f = Ue(b, 2);
        a = of (a, 2, f);
        f = Ue(b, 4);
        a = of (a, 4, f);
        f = Tc(he(b, 7));
        a = qf(a, 7, f);
        b = Pc(he(b, 9));
        b = ef(a, 9, b);
        a = Ue(c, 1);
        b = of (b, 1, a);
        c = Pc(he(c, 13));
        c = ef(b, 13, c);
        b = Ue(d, 11);
        c = of (c, 11, b);
        b = Se(d, 10);
        c = Ae(c, 10, b, Yc);
        d = Pc(he(d, 12));
        ef(c, 12, d);
        return e
    }
    async function E4(a, {
        gb: b = !1,
        vm: c
    }) {
        var [d, e, f] = await Promise.all([w4(a.pubWin), C4(a.pubWin), v4(a.pubWin)]), g = HN(new IN, !b);
        var h = ef(g, 14, c && navigator.globalPrivacyControl);
        var k = ef(h, 17, !0),
            l = new IN;
        if (d) {
            var m = HN(l, nJ(d, {
                idpcApplies: b
            }));
            var n = of (m, 2, d.tcString);
            var p = of (n, 4, d.addtlConsent || "");
            var q = qf(p, 7, d.internalErrorState);
            var r = !qJ(d);
            var v = ef(q, 9, r);
            ef(v, 17, d.gdprApplies ? d.vendor ? d.vendor.disclosedVendors === void 0 ? !0 : pJ(d.vendor.consents, "755") || pJ(d.vendor.legitimateInterests, "755") || pJ(d.vendor.disclosedVendors,
                "755") : !1 : !0);
            d.gdprApplies != null && ef(l, 3, d.gdprApplies)
        }
        var y = new IN;
        if (e) {
            var G = of (y, 1, e),
                w = e;
            w = w.toUpperCase();
            var x = w;
            if (x.length == 4 && (x.indexOf("-") == -1 || x.substring(1) === "---") && x[0] >= "1" && x[0] <= "9" && UN.hasOwnProperty(x[1]) && UN.hasOwnProperty(x[2]) && UN.hasOwnProperty(x[3])) {
                var C = new TN;
                var H = hf(C, 1, parseInt(w[0], 10));
                var O = I(H, 2, UN[w[1]]);
                var ja = I(O, 3, UN[w[2]]);
                var xa = I(ja, 4, UN[w[3]])
            } else xa = null;
            var Ya = xa ? .fm() === 2;
            ef(G, 13, Ya)
        }
        var vc = new IN;
        if (f)
            if (f.internalErrorState) of (vc, 11, f.gppString);
            else if (u4(f.applicableSections)) {
            var oe = Ae(vc, 10, f.applicableSections, Yc);
            ef(oe, 12, !1)
        } else {
            var Md = Ae(vc, 10, f.applicableSections, Yc); of (Md, 11, f.gppString);
            try {
                var Nd = f.gppString,
                    za = f.applicableSections,
                    Od = {
                        idpcApplies: b,
                        supportUsnatV2: !0
                    };
                za.includes(2);
                let nd = !1,
                    lf = !1;
                if (Nd && !Nd.startsWith("GPP_ERROR_STRING_")) {
                    let U4 = aO(Nd.split("~")[0]),
                        V4 = WN(Nd),
                        hE = Ze(U4, 3);
                    for (let ll = 0; ll < hE.length; ++ll) {
                        let iE = hE[ll];
                        if (!za.includes(iE)) continue;
                        let Bb = V4[ll];
                        switch (iE) {
                            case 2:
                                if (Od ? .supportTcfeu) {
                                    a: {
                                        let ma =
                                            KP(Bb);
                                        if (!ma || !Bb) {
                                            var mk = null;
                                            break a
                                        }
                                        let jb = z(ma, vP, 1),
                                            ml = z(ma, aP, 2) || new aP,
                                            jE = {
                                                consents: MP(Ze(jb, 17)),
                                                legitimateInterests: MP(Ze(jb, 18))
                                            };
                                        if (le(ma, VO, 3)) {
                                            var Dp = z(ma, VO, 3);
                                            var Ep = Ze(Dp, 1);
                                            jE.disclosedVendors = MP(Ep)
                                        }
                                        var Fp = Ve(jb, 9),
                                            Gp = Ve(jb, 4),
                                            Hp = Ve(jb, 5),
                                            Ip = D(jb, 10),
                                            Jp = D(jb, 11),
                                            Kp = E(jb, 16),
                                            Lp = D(jb, 15),
                                            Mp = {
                                                consents: MP($e(jb, 13), xP),
                                                legitimateInterests: MP($e(jb, 14), xP)
                                            },
                                            Np = MP($e(jb, 12), yP),
                                            Op = Je(jb, WO, 19, re());
                                        let nl = {};
                                        for (let js of Op) {
                                            let ks = F(js, 1);
                                            nl[ks] = nl[ks] || {};
                                            for (let W4 of Ze(js, 3)) nl[ks][W4] =
                                                F(js, 2)
                                        }
                                        mk = {
                                            tcString: Bb,
                                            tcfPolicyVersion: Fp,
                                            gdprApplies: !0,
                                            cmpId: Gp,
                                            cmpVersion: Hp,
                                            isServiceSpecific: Ip,
                                            useNonStandardStacks: Jp,
                                            publisherCC: Kp,
                                            purposeOneTreatment: Lp,
                                            purpose: Mp,
                                            vendor: jE,
                                            specialFeatureOptins: Np,
                                            publisher: {
                                                restrictions: nl,
                                                consents: MP($e(ml, 1), xP),
                                                legitimateInterests: MP($e(ml, 2), xP),
                                                customPurposes: {
                                                    consents: MP(Ze(ml, 3)),
                                                    legitimateInterests: MP(Ze(ml, 4))
                                                }
                                            }
                                        }
                                    }
                                    let ta = mk;
                                    if (!ta) throw Error("Cannot decode TCF V2 section string.");nJ(ta);!qJ(ta) && (nd = !0)
                                }
                                break;
                            case 7:
                                let kE = OO(Bb, Od ? .supportUsnatV2 ? [1, 2] : [1]),
                                    ol = z(kE, HO, 1),
                                    lE = z(ol, EO, 12);
                                F(ol, 8) !== 1 && F(ol, 9) !== 1 && F(ol, 10) !== 1 && lE ? .l() !== 1 && lE ? .i() !== 1 || (nd = !0);
                                var Pp = z(kE, HO, 1);
                                let mE = z(Pp, EO, 12) ? .A();
                                mE !== 1 && mE !== 2 || (lf = !0);
                                break;
                            case 8:
                                if (Bb.length === 0) throw Error("Cannot decode empty USCA section string.");
                                let Zh = Bb.split(".");
                                if (Zh.length > 2) throw Error(`Expected at most 1 sub-section but got ${Zh.length-1} when decoding ${Bb}.`);
                                var nk = void 0,
                                    ok = void 0,
                                    pk = void 0,
                                    qk = void 0,
                                    rk = void 0,
                                    sk = void 0,
                                    tk = void 0,
                                    uk = void 0,
                                    vk = void 0,
                                    wk = void 0,
                                    xk = void 0,
                                    yk = void 0,
                                    zk = void 0,
                                    Ak = void 0,
                                    Bk = void 0,
                                    Ck = void 0,
                                    Dk = void 0,
                                    Ek = void 0,
                                    Fk = void 0,
                                    Kh = void 0,
                                    Gk = void 0,
                                    Hk = void 0,
                                    Ik = Zh[0];
                                if (Ik.length === 0) throw Error("Cannot decode empty core segment string.");
                                let pl = $N(Ik, jO),
                                    ls = YN(pl.slice(0, 6));
                                pl = pl.slice(6);
                                if (ls !== 1) throw Error(`Unable to decode unsupported USCA Section specification version ${ls} - only version 1 is supported.`);
                                let ms = 0,
                                    Va = [];
                                for (let ta = 0; ta < iO.length; ta++) {
                                    let ma = iO[ta];
                                    Va.push(YN(pl.slice(ms, ms + ma)));
                                    ms += ma
                                }
                                var Qp = new eO;
                                Hk = hf(Qp, 1, ls);
                                var Rp =
                                    Va.shift();
                                Gk = I(Hk, 2, Rp);
                                var Sp = Va.shift();
                                Kh = I(Gk, 3, Sp);
                                var Tp = Va.shift();
                                Fk = I(Kh, 4, Tp);
                                var Up = Va.shift();
                                Ek = I(Fk, 5, Up);
                                var Vp = Va.shift();
                                Dk = I(Ek, 6, Vp);
                                var Wp = new dO,
                                    Xp = Va.shift();
                                Ck = I(Wp, 1, Xp);
                                var Yp = Va.shift();
                                Bk = I(Ck, 2, Yp);
                                var Zp = Va.shift();
                                Ak = I(Bk, 3, Zp);
                                var $p = Va.shift();
                                zk = I(Ak, 4, $p);
                                var aq = Va.shift();
                                yk = I(zk, 5, aq);
                                var bq = Va.shift();
                                xk = I(yk, 6, bq);
                                var cq = Va.shift();
                                wk = I(xk, 7, cq);
                                var dq = Va.shift();
                                vk = I(wk, 8, dq);
                                var eq = Va.shift();
                                uk = I(vk, 9, eq);
                                tk = A(Dk, 7, uk);
                                var fq = new cO,
                                    gq = Va.shift();
                                sk = I(fq,
                                    1, gq);
                                var hq = Va.shift();
                                rk = I(sk, 2, hq);
                                qk = A(tk, 8, rk);
                                var iq = Va.shift();
                                pk = I(qk, 9, iq);
                                var jq = Va.shift();
                                ok = I(pk, 10, jq);
                                var kq = Va.shift();
                                nk = I(ok, 11, kq);
                                var lq = Va.shift();
                                let nE = I(nk, 12, lq);
                                if (Zh.length === 1) var Jk = gO(nE);
                                else {
                                    var mq = gO(nE),
                                        Kk = void 0,
                                        Lk = void 0,
                                        Mk = Zh[1];
                                    if (Mk.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    let ta = $N(Mk, 3),
                                        ma = YN(ta.slice(0, 2));
                                    if (ma < 0 || ma > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${ma}.`);
                                    Lk = ma + 1;
                                    let jb = YN(ta.charAt(2));
                                    var nq =
                                        new fO;
                                    Kk = I(nq, 2, Lk);
                                    var oq = ff(Kk, 1, !!jb);
                                    Jk = A(mq, 2, oq)
                                }
                                let oE = Jk,
                                    pE = z(oE, eO, 1);
                                F(pE, 5) !== 1 && F(pE, 6) !== 1 || (nd = !0);
                                var pq = z(oE, eO, 1);
                                let ql = z(pq, cO, 8);
                                ql ? .i() !== 1 && ql ? .i() !== 2 && ql ? .l() !== 1 && ql ? .l() !== 2 || (lf = !0);
                                break;
                            case 9:
                                if (Bb.length === 0) throw Error("Cannot decode empty USVA section string.");
                                let rl = $N(Bb, TO),
                                    ns = YN(rl.slice(0, 6));
                                rl = rl.slice(6);
                                if (ns !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${ns} - only version 1 is supported.`);
                                let os = 0,
                                    ub = [];
                                for (let ta =
                                        0; ta < SO.length; ta++) {
                                    let ma = SO[ta];
                                    ub.push(YN(rl.slice(os, os + ma)));
                                    os += ma
                                }
                                var qq = ns,
                                    rq = new RO,
                                    sq = hf(rq, 1, qq),
                                    tq = ub.shift(),
                                    uq = I(sq, 2, tq),
                                    vq = ub.shift(),
                                    wq = I(uq, 3, vq),
                                    xq = ub.shift(),
                                    yq = I(wq, 4, xq),
                                    zq = ub.shift(),
                                    Aq = I(yq, 5, zq),
                                    Bq = ub.shift();
                                var Cq = I(Aq, 6, Bq);
                                var Dq = new QO,
                                    Eq = ub.shift(),
                                    Fq = I(Dq, 1, Eq),
                                    Gq = ub.shift(),
                                    Hq = I(Fq, 2, Gq),
                                    Iq = ub.shift(),
                                    Jq = I(Hq, 3, Iq),
                                    Kq = ub.shift(),
                                    Lq = I(Jq, 4, Kq),
                                    Mq = ub.shift(),
                                    Nq = I(Lq, 5, Mq),
                                    Oq = ub.shift(),
                                    Pq = I(Nq, 6, Oq),
                                    Qq = ub.shift(),
                                    Rq = I(Pq, 7, Qq),
                                    Sq = ub.shift();
                                var Tq = I(Rq, 8, Sq);
                                var Uq =
                                    A(Cq, 7, Tq),
                                    Vq = ub.shift(),
                                    Wq = I(Uq, 8, Vq),
                                    Xq = ub.shift(),
                                    Jh = I(Wq, 9, Xq),
                                    lk = ub.shift(),
                                    X4 = I(Jh, 10, lk),
                                    Y4 = ub.shift();
                                let ps = I(X4, 11, Y4);
                                F(ps, 5) !== 1 && F(ps, 6) !== 1 || (nd = !0);
                                let qE = F(ps, 8);
                                qE !== 1 && qE !== 2 || (lf = !0);
                                break;
                            case 10:
                                if (Bb.length === 0) throw Error("Cannot decode empty USCO section string.");
                                let $h = Bb.split(".");
                                if ($h.length > 2) throw Error(`Expected at most 2 segments but got ${$h.length} when decoding ${Bb}.`);
                                var rE = void 0,
                                    sE = void 0,
                                    tE = void 0,
                                    uE = void 0,
                                    vE = void 0,
                                    wE = void 0,
                                    xE = void 0,
                                    yE = void 0,
                                    zE = void 0,
                                    AE = void 0,
                                    BE = void 0,
                                    CE = void 0,
                                    DE = void 0,
                                    EE = void 0,
                                    FE = void 0,
                                    GE = void 0,
                                    HE = void 0,
                                    IE = $h[0];
                                if (IE.length === 0) throw Error("Cannot decode empty core segment string.");
                                let sl = $N(IE, qO),
                                    qs = YN(sl.slice(0, 6));
                                sl = sl.slice(6);
                                if (qs !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${qs} - only version 1 is supported.`);
                                let rs = 0,
                                    Cb = [];
                                for (let ta = 0; ta < pO.length; ta++) {
                                    let ma = pO[ta];
                                    Cb.push(YN(sl.slice(rs, rs + ma)));
                                    rs += ma
                                }
                                var Z4 = new lO;
                                HE = hf(Z4, 1, qs);
                                var $4 = Cb.shift();
                                GE = I(HE, 2, $4);
                                var a5 = Cb.shift();
                                FE = I(GE, 3, a5);
                                var b5 = Cb.shift();
                                EE = I(FE, 4, b5);
                                var c5 = Cb.shift();
                                DE = I(EE, 5, c5);
                                var d5 = Cb.shift();
                                CE = I(DE, 6, d5);
                                var e5 = new kO,
                                    f5 = Cb.shift();
                                BE = I(e5, 1, f5);
                                var g5 = Cb.shift();
                                AE = I(BE, 2, g5);
                                var h5 = Cb.shift();
                                zE = I(AE, 3, h5);
                                var i5 = Cb.shift();
                                yE = I(zE, 4, i5);
                                var j5 = Cb.shift();
                                xE = I(yE, 5, j5);
                                var k5 = Cb.shift();
                                wE = I(xE, 6, k5);
                                var l5 = Cb.shift();
                                vE = I(wE, 7, l5);
                                uE = A(CE, 7, vE);
                                var m5 = Cb.shift();
                                tE = I(uE, 8, m5);
                                var n5 = Cb.shift();
                                sE = I(tE, 9, n5);
                                var o5 = Cb.shift();
                                rE = I(sE, 10, o5);
                                var p5 = Cb.shift();
                                let JE = I(rE,
                                    11, p5);
                                if ($h.length === 1) var KE = nO(JE);
                                else {
                                    var q5 = nO(JE),
                                        LE = void 0,
                                        ME = void 0,
                                        NE = $h[1];
                                    if (NE.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    let ta = $N(NE, 3),
                                        ma = YN(ta.slice(0, 2));
                                    if (ma < 0 || ma > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${ma}.`);
                                    ME = ma + 1;
                                    let jb = YN(ta.charAt(2));
                                    var r5 = new mO;
                                    LE = I(r5, 2, ME);
                                    var s5 = ff(LE, 1, !!jb);
                                    KE = A(q5, 2, s5)
                                }
                                let OE = KE,
                                    PE = z(OE, lO, 1);
                                F(PE, 5) !== 1 && F(PE, 6) !== 1 || (nd = !0);
                                var t5 = z(OE, lO, 1);
                                let QE = F(t5, 8);
                                QE !== 1 && QE !== 2 || (lf = !0);
                                break;
                            case 12:
                                if (Bb.length === 0) throw Error("Cannot decode empty usct section string.");
                                let ai = Bb.split(".");
                                if (ai.length > 2) throw Error(`Expected at most 2 segments but got ${ai.length} when decoding ${Bb}.`);
                                var RE = void 0,
                                    SE = void 0,
                                    TE = void 0,
                                    UE = void 0,
                                    VE = void 0,
                                    WE = void 0,
                                    XE = void 0,
                                    YE = void 0,
                                    ZE = void 0,
                                    $E = void 0,
                                    aF = void 0,
                                    bF = void 0,
                                    cF = void 0,
                                    dF = void 0,
                                    eF = void 0,
                                    fF = void 0,
                                    gF = void 0,
                                    hF = void 0,
                                    iF = void 0,
                                    jF = void 0,
                                    kF = void 0,
                                    lF = ai[0];
                                if (lF.length === 0) throw Error("Cannot decode empty core segment string.");
                                let tl =
                                    $N(lF, yO),
                                    ss = YN(tl.slice(0, 6));
                                tl = tl.slice(6);
                                if (ss !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${ss} - only version 1 is supported.`);
                                let ts = 0,
                                    eb = [];
                                for (let ta = 0; ta < xO.length; ta++) {
                                    let ma = xO[ta];
                                    eb.push(YN(tl.slice(ts, ts + ma)));
                                    ts += ma
                                }
                                var u5 = new tO;
                                kF = hf(u5, 1, ss);
                                var v5 = eb.shift();
                                jF = I(kF, 2, v5);
                                var w5 = eb.shift();
                                iF = I(jF, 3, w5);
                                var x5 = eb.shift();
                                hF = I(iF, 4, x5);
                                var y5 = eb.shift();
                                gF = I(hF, 5, y5);
                                var z5 = eb.shift();
                                fF = I(gF, 6, z5);
                                var A5 = new sO,
                                    B5 = eb.shift();
                                eF = I(A5, 1, B5);
                                var C5 = eb.shift();
                                dF = I(eF, 2, C5);
                                var D5 = eb.shift();
                                cF = I(dF, 3, D5);
                                var E5 = eb.shift();
                                bF = I(cF, 4, E5);
                                var F5 = eb.shift();
                                aF = I(bF, 5, F5);
                                var G5 = eb.shift();
                                $E = I(aF, 6, G5);
                                var H5 = eb.shift();
                                ZE = I($E, 7, H5);
                                var I5 = eb.shift();
                                YE = I(ZE, 8, I5);
                                XE = A(fF, 7, YE);
                                var J5 = new rO,
                                    K5 = eb.shift();
                                WE = I(J5, 1, K5);
                                var L5 = eb.shift();
                                VE = I(WE, 2, L5);
                                var M5 = eb.shift();
                                UE = I(VE, 3, M5);
                                TE = A(XE, 8, UE);
                                var N5 = eb.shift();
                                SE = I(TE, 9, N5);
                                var O5 = eb.shift();
                                RE = I(SE, 10, O5);
                                var P5 = eb.shift();
                                let mF = I(RE, 11, P5);
                                if (ai.length === 1) var nF = vO(mF);
                                else {
                                    var Q5 =
                                        vO(mF),
                                        oF = void 0,
                                        pF = void 0,
                                        qF = ai[1];
                                    if (qF.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    let ta = $N(qF, 3),
                                        ma = YN(ta.slice(0, 2));
                                    if (ma < 0 || ma > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${ma}.`);
                                    pF = ma + 1;
                                    let jb = YN(ta.charAt(2));
                                    var R5 = new uO;
                                    oF = I(R5, 2, pF);
                                    var S5 = ff(oF, 1, !!jb);
                                    nF = A(Q5, 2, S5)
                                }
                                let rF = nF,
                                    us = z(rF, tO, 1),
                                    sF = z(us, rO, 8);
                                F(us, 5) !== 1 && F(us, 6) !== 1 && sF ? .l() !== 1 && sF ? .A() !== 1 || (nd = !0);
                                var T5 = z(rF, tO, 1);
                                let tF = z(T5, rO, 8);
                                tF ? .i() !== 1 && tF ? .i() !== 2 || (lf = !0);
                                break;
                            case 13:
                                if (Bb.length === 0) throw Error("Cannot decode empty USFL section string.");
                                let ul = $N(Bb, DO),
                                    vs = YN(ul.slice(0, 6));
                                ul = ul.slice(6);
                                if (vs !== 1) throw Error(`Unable to decode unsupported USFL Section specification version ${vs} - only version 1 is supported.`);
                                let ws = 0,
                                    Wa = [];
                                for (let ta = 0; ta < CO.length; ta++) {
                                    let ma = CO[ta];
                                    Wa.push(YN(ul.slice(ws, ws + ma)));
                                    ws += ma
                                }
                                var U5 = vs,
                                    V5 = new BO,
                                    W5 = hf(V5, 1, U5),
                                    X5 = Wa.shift(),
                                    Y5 = I(W5, 2, X5),
                                    Z5 = Wa.shift(),
                                    $5 = I(Y5, 3, Z5),
                                    a6 = Wa.shift(),
                                    b6 = I($5, 4, a6),
                                    c6 = Wa.shift(),
                                    d6 =
                                    I(b6, 5, c6),
                                    e6 = Wa.shift();
                                var f6 = I(d6, 6, e6);
                                var g6 = new AO,
                                    h6 = Wa.shift(),
                                    i6 = I(g6, 1, h6),
                                    j6 = Wa.shift(),
                                    k6 = I(i6, 2, j6),
                                    l6 = Wa.shift(),
                                    m6 = I(k6, 3, l6),
                                    n6 = Wa.shift(),
                                    o6 = I(m6, 4, n6),
                                    p6 = Wa.shift(),
                                    q6 = I(o6, 5, p6),
                                    r6 = Wa.shift(),
                                    s6 = I(q6, 6, r6),
                                    t6 = Wa.shift(),
                                    u6 = I(s6, 7, t6),
                                    v6 = Wa.shift();
                                var w6 = I(u6, 8, v6);
                                var x6 = A(f6, 7, w6);
                                var y6 = new zO,
                                    z6 = Wa.shift(),
                                    A6 = I(y6, 1, z6),
                                    B6 = Wa.shift(),
                                    C6 = I(A6, 2, B6),
                                    D6 = Wa.shift();
                                var E6 = I(C6, 3, D6);
                                var F6 = A(x6, 8, E6),
                                    G6 = Wa.shift(),
                                    H6 = I(F6, 9, G6),
                                    I6 = Wa.shift(),
                                    J6 = I(H6, 10, I6),
                                    K6 = Wa.shift(),
                                    L6 = I(J6,
                                        11, K6),
                                    M6 = Wa.shift();
                                let vl = I(L6, 12, M6),
                                    uF = z(vl, zO, 8);
                                F(vl, 5) !== 1 && F(vl, 6) !== 1 && uF ? .l() !== 1 && uF ? .A() !== 1 || (nd = !0);
                                let vF = z(vl, zO, 8) ? .i();
                                vF !== 1 && vF !== 2 || (lf = !0)
                        }
                    }
                }
                var N6 = nd;
                var O6 = lf;
                var P6 = ef(vc, 12, N6);
                ef(P6, 16, O6)
            } catch (nd) {
                OA(1182, nd);
                var Q6 = ef(vc, 12, !1);
                ef(Q6, 16, !1)
            }
        }
        a.M = D4(k, {
            Mn: l,
            Tn: y,
            gm: vc
        })
    };
    var F4 = Gg(class extends J {
        i() {
            return D(this, 1)
        }
    });
    async function G4(a) {
        var b = fl(),
            c = a.pageState;
        BI(f => {
            F(f, 1) === 0 && (f = ff(f, 2, !!c.OSCLM.UWEfJ), f = ff(f, 6, !!c.OmOVT), I(f, 1, 1))
        });
        eQ(a.pubWin, H4(c.OSCLM));
        I4(a.I.google_ad_client);
        BI(f => {
            F(f, 1) === 1 && I(f, 1, 2)
        });
        var d = new jJ(a.pubWin);
        await (gJ(d, (c.SLqBY || "") === ".google.cn") ? hJ(d) : Promise.resolve(null));
        BI(f => {
            F(f, 1) === 2 && (f = ff(f, 3, !0), I(f, 1, 3))
        });
        await E4(a, {
            gb: c.OSCLM.UWEfJ,
            vm: c.OSCLM.YguOd
        });
        var e = fl();
        BI(f => {
            if (F(f, 1) === 3) {
                f = ff(f, 3, e - b > 500);
                var g = !!a.M ? .i();
                f = ff(f, 4, g);
                g = !!a.M ? .ga();
                f = ff(f, 5, g);
                g = !!a.M ? .l();
                f = ff(f, 7, g);
                g = !!a.M ? .A();
                f = ff(f, 8, g);
                I(f, 1, 4)
            }
        })
    }

    function H4(a) {
        var b = bg(F4());
        b = ef(b, 1, a.UWEfJ);
        b = ef(b, 2, a.YguOd);
        a = ef(b, 3, a.SVQEK);
        return be(a)
    }

    function I4(a) {
        var b = Uj(t.top, "googlefcPresent");
        t.googlefc && !b && NA("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    };
    var J4 = rW(async function(a) {
        return G4(a.Oe)
    }, {
        id: 1404
    });

    function K4(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function L4(a) {
        if (a === a.top || rj(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && K4(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        var c = new tQ;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                Bc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function M4(a) {
        var b = fl();
        return Promise.race([L4(a), fk(200)]).then(c => {
            NA("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: fl() - b,
                tms: 200
            });
            return c ? .Bc
        })
    }
    var N4 = rW(async function(a, b) {
        return M4(b)
    }, {
        id: 1411
    });
    var O4 = X(function(a, b, c, d) {
        a = 0;
        vj(b) !== b && (a |= 4);
        dS(b.document) === 3 && (a |= 32);
        var e;
        if (e = c) e = Lr(c), e = !(Qr(c).scrollWidth <= e);
        e && (a |= 1024);
        b.Prototype ? .Version && (a |= 16384);
        d && (a |= d);
        return {
            xf: a
        }
    }, {
        id: 1379,
        H: {
            xf: void 0
        }
    });
    var P4 = X(function(a) {
        var b = a.Oe;
        b.Bc = a.Bc || "";
        return {
            Gn: b
        }
    }, {
        id: 1406,
        H: {
            Gn: void 0
        }
    });

    function Q4(a, b, c, d) {
        var e = new tQ,
            f = "",
            g = k => {
                try {
                    let l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (Ki(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (l) {}
            };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return Ji(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers : void 0;
        return c ?
            (f = String(Math.floor(Dj() * 2147483647)), Ji(a, "message", g), b(c, f), e.promise) : null
    }

    function R4(a) {
        return Q4(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return ic(b => {
            if (!nc(b)) return !1;
            for (let [c, d] of Object.entries(a)) {
                let e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.ym === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: kc,
        pn: kc,
        eid: oc(),
        vnm: oc(),
        js: kc
    }, "RawGmaSdkStaticSignalObject");

    function S4(a) {
        var b = T(aw);
        if (b <= 0) return null;
        var c = fl(),
            d = R4(a.pubWin);
        if (!d) return null;
        a.l = "0";
        return Promise.race([d, fk(b, "0")]).then(e => {
            NA("adsense_paw", {
                time: fl() - c
            });
            e ? .length > 1E4 ? OA(809, Error(`ML:${e.length}`)) : a.l = e
        }).catch(e => {
            OA(809, e)
        })
    }
    var T4 = rW(async function(a) {
        return S4(a.Oe)
    }, {
        id: 1405
    });
    var R6 = class extends xW {
        constructor(a, b, c, d) {
            super(a);
            var e = b.I.google_loader_features_used;
            e = Z(this, O4, {}, b.pubWin, b.K, e ? e : null);
            d && W(e, d);
            ({
                hk: e
            } = Z(this, k4, {
                xf: e.xf
            }, b));
            var f = uW(this, J4, {
                    Oe: e
                }),
                g = uW(this, N4, {}, b.pubWin);
            W(g, f.complete);
            d = uW(this, T4, {
                Oe: e
            });
            W(d, f.complete);
            e = Z(this, P4, {
                Oe: e,
                Bc: g.output
            });
            W(e, d.complete);
            this.i = vW(this, new j4(a, b, e.finished, c)).i
        }
    };
    var S6 = X(function(a, b) {
        PU(13, b);
        PU(11, b);
        return {}
    }, {
        id: 1486,
        H: {}
    });
    var T6 = X(function(a, b, c) {
        b.googFloatingToolbarManagerAsyncPositionUpdate = !0;
        c && c !== b && (c.googFloatingToolbarManagerAsyncPositionUpdate = !0);
        return {}
    }, {
        id: 1483,
        H: {}
    });
    var U6 = X(function() {
        return nr() || Ra() ? {
            Na: !0,
            ah: new lT
        } : {
            Na: new lT,
            ah: !0
        }
    }, {
        id: 1502,
        H: {
            Na: void 0,
            ah: void 0
        }
    });

    function V6() {
        if (!t.IntersectionObserver) return {
            hidden: 0,
            visible: -1
        };
        var a = T(ew),
            b = T(fw);
        return {
            hidden: 0,
            visible: wj() ? a : b
        }
    };
    var W6 = X(function(a, b) {
        var c = b.ea,
            d = b.I;
        a = b.pubWin;
        b = b.K;
        var e = V6().visible;
        if (!c || e < 0 || !Sr(d.google_reactive_ad_format) && (QS(d) || d.google_reactive_ads_config) || !GR(c) || IR(b, a, c) <= e) return {
            Na: !0,
            Re: new lT
        };
        b = aI();
        c = fI(b, 8, {});
        b = fI(b, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        a = !!a.google_apltlad;
        return c[d] || b[d] || a ? {
            Na: new lT,
            Re: !0
        } : {
            Na: !0,
            Re: new lT
        }
    }, {
        id: 1499,
        H: {
            Na: void 0,
            Re: void 0
        }
    });
    var X6 = X(function(a, b, c) {
        a = V6();
        return a.hidden < 0 && a.visible < 0 || !c ? {
            Na: !0,
            eh: new lT
        } : {
            Na: new lT,
            eh: !0
        }
    }, {
        id: 1491,
        H: {
            Na: void 0,
            eh: void 0
        }
    });
    var Y6 = X(function(a) {
        return a.result
    }, {
        id: 1498,
        H: {
            Rb: void 0,
            bh: void 0
        }
    });
    var Z6 = X(function(a) {
        return a.result
    }, {
        id: 1496,
        H: {
            Rb: void 0,
            Na: void 0
        }
    });
    var $6 = rW(async function(a, b, c) {
        c.notify();
        return new Promise(d => {
            b.ea.addEventListener("adsbygoogle-close-to-visible-event", () => {
                d(!0)
            })
        })
    }, {
        id: 1501
    });
    var a7 = rW(async function(a, b, c) {
        c.notify();
        return new Promise(d => {
            var e = b.ea,
                f = V6().visible;
            f = new t.IntersectionObserver((g, h) => {
                Za(g, k => {
                    k.intersectionRatio <= 0 || (h.unobserve(k.target), d(!0))
                })
            }, {
                rootMargin: `${f*100}%`
            });
            b.B = f;
            f.observe(e)
        })
    }, {
        id: 1500
    });
    var b7 = rW(async function(a, b, c) {
        var d = b.pubWin.document,
            e = dS(d) === 3;
        return new Promise(f => {
            e ? (c.notify(), fS(LA(332, () => {
                f({
                    Rb: !0,
                    bh: new lT
                })
            }), d)) : f({
                Rb: new lT,
                bh: !0
            })
        })
    }, {
        id: 1494
    });
    var c7 = rW(async function(a, b, c) {
        var d = b.I,
            e = b.pubWin;
        if (!d.google_pause_ad_requests) return !0;
        c.notify();
        var f = t.setTimeout(() => {
            NA("abg:cmppar", {
                client: d.google_ad_client,
                url: d.google_page_url
            })
        }, 1E4);
        return new Promise(g => {
            var h = LA(450, () => {
                d.google_pause_ad_requests = !1;
                t.clearTimeout(f);
                e.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", h);
                g(!0)
            });
            e.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", h)
        })
    }, {
        id: 1492
    });
    var d7 = rW(async function(a, b, c, d) {
        return new Promise(e => {
            var f = b.pubWin,
                g = b.K,
                h = b.ea,
                k = f.document;
            if (eS(k))
                if (IR(g, f, h) <= V6().hidden) e({
                    Rb: new lT,
                    Na: !0
                });
                else {
                    var l = LA(332, () => {
                        !eS(k) && l && (Ki(k, d, l), e({
                            Rb: !0,
                            Na: new lT
                        }), l = null)
                    });
                    Ji(k, d, l) ? c.notify() : e({
                        Rb: new lT,
                        Na: !0
                    })
                }
            else e({
                Rb: !0,
                Na: new lT
            })
        })
    }, {
        id: 1493
    });
    var e7 = class extends xW {
        constructor(a, b, c) {
            super(a);
            this.i = new wT;
            a = W(Z(this, U6, {}), c);
            c = W(uW(this, c7, {}, b, this.i), a.ah);
            c = W(uW(this, b7, {}, b, this.i), c.output);
            var d = Z(this, Y6, {
                result: c.output
            });
            c = b.pubWin.document;
            var e;
            c.visibilityState ? e = "visibilitychange" : c.mozVisibilityState ? e = "mozvisibilitychange" : c.webkitVisibilityState && (e = "webkitvisibilitychange");
            c = e;
            e = W(Z(this, X6, {}, b, c), d.bh);
            c = W(uW(this, d7, {}, b, this.i, c), e.eh);
            c = Z(this, Z6, {
                result: c.output
            });
            d = new xT([d.Rb, c.Rb]);
            d = W(Z(this, W6, {}, b), d);
            var f = W(uW(this, a7, {}, b, this.i), d.Re);
            b = W(uW(this, $6, {}, b, this.i), d.Re);
            b = new xT([f.output, b.output]);
            this.ni = new xT([a.Na, e.Na, d.Na, c.Na, b])
        }
    };
    var f7 = X(function(a, b, c, d) {
        var e = aI(),
            f = fI(e, 23, !1);
        f || gI(e, 23, !0);
        if (!f) {
            a = a.bm;
            try {
                var g = a ? Ku(a) : null
            } catch (h) {
                g = null
            }
            b = new QN(b, d.google_ad_client, g, !!c.OSCLM ? .UWEfJ, c.OmOVT);
            b.l = !0;
            c = b.B;
            if (d = S(Tx) && (b.j || b.A)) d = b.i, g = d.__tcfapiManager === "fc", d = !((d.__tcfapi || d.frames ? .__tcfapiLocator) && !g);
            b.l && vN(b.i, c, b.j, d);
            g = WH(c) && (b.j || b.A) || d;
            (c && g || d) && NI(new OI(b.i, new DJ(b.i, b.D), c || new Ju, new dC(b.i), void 0, d))
        }
        return {}
    }, {
        id: 1485,
        H: {}
    });
    var g7 = X(function(a, b) {
        a = a.wb;
        b.wb = a;
        return {
            wb: a
        }
    }, {
        id: 1484,
        H: {
            wb: void 0
        }
    });
    var h7 = X(function(a, b, c) {
        a = c.google_tag_partner;
        b = (a ? [a] : []).concat(mI(b).tag_partners || []).join("+");
        c.google_tag_partner = b;
        return {}
    }, {
        id: 1444,
        H: {}
    });
    var i7 = X(function(a, b, c) {
        b && GS(b, kh(c.Bl, new Map(Object.entries(cS()))));
        return {}
    }, {
        id: 1447,
        H: {}
    });
    var j7 = X(function(a, b) {
        a = b.I;
        a.google_ad_output == null && (a.google_ad_output = "html");
        a.google_ad_client != null && (a.google_ad_client = Ar(String(a.google_ad_client)));
        a.google_ad_slot != null && (a.google_ad_slot = String(a.google_ad_slot));
        a.google_ad_section = a.google_ad_section || a.google_ad_region || "";
        a.google_country = a.google_country || a.google_gl || "";
        var c = (new Date).getTime(),
            d = "google_color_bg google_color_text google_color_link google_color_url google_color_border google_color_line".split(" ");
        for (let f of d)
            if (Array.isArray(a[f])) {
                d =
                    b;
                var e = a[f];
                d.j |= 2;
                a[f] = e[c % e.length]
            }
        return {}
    }, {
        id: 1446,
        H: {}
    });
    var k7 = X(function(a, b, c, d, e, f) {
        KA(326, () => {
            if (xr(d) === 1) {
                var g = S(ly);
                if ((g || S(jy)) && b === c) {
                    var h = new Qk;
                    let m = new Rk;
                    var k = h.setCorrelator(ek(b));
                    var l = QU(b);
                    k = pf(k, 5, l);
                    I(k, 2, 1);
                    h = A(m, 1, h);
                    k = new Pk;
                    k = ff(k, 10, !0);
                    l = S(ey);
                    k = ff(k, 8, l);
                    l = S(fy);
                    k = ff(k, 12, l);
                    l = S(iy);
                    k = ff(k, 7, l);
                    l = S(hy);
                    k = ff(k, 13, l);
                    l = T(ky);
                    k = I(k, 20, l);
                    A(h, 2, k);
                    b.google_rum_config = Ld(m);
                    Ij(b.document, f.xujKL && g ? e.rn : e.sn)
                } else xl(IA)
            }
        });
        return {}
    }, {
        id: 1443,
        H: {}
    });
    var l7 = X(function(a, b, c) {
        if (!b || mI(b).ads_density_stats_processed || nr(b)) return {};
        mI(b).ads_density_stats_processed = !0;
        if (S(Pw) || Dj() < .01) {
            let d = () => {
                if (b) {
                    var e = bM(XL(b), c.google_ad_client, b.location.hostname, QU(c).split(","));
                    NA("ama_stats", e, 1)
                }
            };
            Li(b, () => {
                t.setTimeout(d, 1E3)
            })
        }
        return {}
    }, {
        id: 1445,
        H: {}
    });
    var m7 = X(function(a, b) {
        QS(b) && (PR() && (b.google_adtest = b.google_adtest || "on"), b.google_pgb_reactive = b.google_pgb_reactive || 3);
        return {}
    }, {
        id: 1448,
        H: {}
    });
    var n7 = X(function(a, b) {
        a = b.google_start_time;
        jc(a) && (Br = a, b.google_start_time = null);
        return {}
    }, {
        id: 1463,
        H: {}
    });
    var o7 = class extends xW {
        constructor(a, b, c) {
            super(a);
            this.i = new wT;
            var d = c.wb;
            c = c.ni;
            var e = Z(this, k7, {}, b.pubWin, b.K, b.I, b.Sa, b.pageState);
            c && W(e, c);
            c = W(Z(this, h7, {}, b.pubWin, b.I), e.finished);
            c = W(Z(this, l7, {}, b.K, b.I), c.finished);
            c = W(Z(this, n7, {}, b.I), c.finished);
            c = W(Z(this, j7, {}, b), c.finished);
            c = W(Z(this, i7, {}, b.K, b.Sa), c.finished);
            c = W(Z(this, m7, {}, b.I), c.finished);
            this.i = vW(this, new R6(a, b, d, c.finished)).i
        }
    };
    var p7 = class extends xW {
        constructor(a, b, c) {
            super(a);
            this.i = new sT;
            if (/_sdo/.test(b.I.google_ad_format)) nT(this.i, null);
            else {
                var d = Z(this, S6, {}, b.pubWin);
                W(d, c);
                var e = new sT;
                c = new sT;
                rT(e, b.pageState.EGzMj);
                rT(c, b.pageState.tYcft);
                d = W(Z(this, g7, {
                    wb: e
                }, b), d.finished);
                c = W(Z(this, f7, {
                    bm: c
                }, b.pubWin, b.pageState, b.I), d.finished);
                c = W(Z(this, T6, {}, b.pubWin, b.K), c.finished);
                c = vW(this, new e7(a, b, c.finished));
                a = vW(this, new o7(a, b, {
                    wb: d.wb,
                    ni: c.ni
                }));
                this.i = new xT([c.i, a.i], !0)
            }
        }
    };
    var q7 = X(function(a, b, c, d, e, f) {
        var g = a.Hb,
            h = d(b, c.stavq, c.jTCuI, c.xVQAt || "");
        f.google_sa_impl = k => e({
            Sa: h,
            Kc: b,
            slot: k,
            pageState: c,
            Hb: g
        });
        f.google_process_slots ? .();
        return {}
    }, {
        id: 1338,
        H: {}
    });
    var r7 = X(function(a, b) {
        a = (b.Prototype || {}).Version;
        a != null && NA("prtpjs", {
            version: a
        });
        return {}
    }, {
        id: 1339,
        H: {}
    });
    var s7 = class extends eV {
        constructor(a) {
            super();
            this.promise = a;
            a.then(b => {
                this.value = b
            })
        }
        i() {
            return Promise.race([this.promise, fk(T(Lv), null)]).then(a => {
                this.value = a
            })
        }
    };
    var t7 = X(function() {
        return S(Vv) ? {
            Hb: new s7(navigator.getBattery ? .() ? ? Promise.resolve(null))
        } : {
            Hb: new s7(Promise.resolve(null))
        }
    }, {
        id: 1413,
        H: {
            Hb: void 0
        }
    });
    var u7 = jh `https://pagead2.googlesyndication.com/pagead/s/eeframe.html`;
    var v7 = X(function(a) {
        var b = !1,
            c = !1;
        for (let d of bj(a.Me)) rf(d, 5) && (c = !0, D(d, 4) && (b = !0));
        if (!b && !a.M.ga() || !c) return {
            da: void 0
        };
        a = document.createElement("iframe");
        a.name = "goog_ee_frame";
        a.style.display = "none";
        Oh(a, u7);
        document.documentElement.appendChild(a);
        return {
            da: a
        }
    }, {
        id: 1389,
        H: {
            da: void 0
        }
    });
    var w7 = X(function(a) {
        return (a = a.An) ? {
            Ie: bj(a).map(b => {
                var c = rf(b, 2) ? E(b, pe(b, sf, 2)) : E(b, pe(b, sf, 5)),
                    d = b.lb();
                c = c && (c.startsWith("https://") || c.startsWith("//") || location.protocol !== "https:" && c.startsWith("http://") || c.startsWith("data:") && c.length <= 80) ? Vg(c === null ? "null" : c === void 0 ? "undefined" : c) : void 0;
                return {
                    ul: d,
                    url: c,
                    um: D(b, 4),
                    tm: rf(b, 5)
                }
            })
        } : {
            Ie: []
        }
    }, {
        id: 1040,
        H: {
            Ie: void 0
        }
    });
    var y7 = X(x7, {
        id: 1041,
        H: {}
    });

    function x7(a, b, c) {
        if (!a.T) return {};
        cU().set(a.T, a.M, b) && a.T.i() && YT(27, a.T.lb(), null, {}, c);
        return {}
    };
    var z7 = X(function(a) {
        return fU(a.T) !== 0 ? {
            T: a.T
        } : {
            T: new lT
        }
    }, {
        id: 1036,
        H: {
            T: void 0
        }
    });

    function A7(a, b) {
        a.i() && (b = kh(b, {
            gdpr: "1"
        }));
        var c = E(a, 2);
        c && (b = kh(b, {
            gdpr_consent: c
        }));
        (c = E(a, 11)) && (b = kh(b, {
            gpp: c
        }));
        (a = Se(a, 10).map(d => d.toString()).join(",")) && (b = kh(b, {
            gpp_sid: a
        }));
        return b.toString()
    }
    var B7 = rW(async function(a, b, c, d) {
        if (c) {
            var e = a.T.lb();
            b = A7(a.M, b);
            YT(59, e, null, {
                url: b
            }, d);
            var f = (new URL(u7.toString())).origin;
            c = IQ({
                destination: window,
                da: c,
                origin: f,
                Vg: "echo-endpoint-channel"
            });
            var {
                data: g
            } = await c.j({
                id: e,
                url: b
            });
            switch (g.kind) {
                case 0:
                    window.googletag ? .secureSignalProviders ? .push({
                        id: e,
                        collectorFunction: () => Promise.resolve(g.data)
                    });
                    break;
                case 1:
                    return YT(60, e, g.error, {}, d), a.T.setError(gj(114));
                default:
                    Gc(g, void 0)
            }
        }
    }, {
        id: 1391
    });
    var C7 = rW(async function(a, b, c, d) {
        var e = a.T.lb(),
            f = b.toString();
        YT(30, e, null, {
            url: f
        }, d);
        var g = document.createElement("script");
        g.setAttribute("esp-signal", "true");
        Qh(g, b);
        var {
            promise: h,
            resolve: k
        } = ia(Promise, "withResolvers").call(Promise), l = () => {
            YT(31, e, null, {
                url: f
            }, d);
            k(a.T.setError(gj(109)));
            Ki(g, "error", l)
        };
        document.head.appendChild(g);
        Ji(g, "error", l);
        return h
    }, {
        id: 1035
    });
    var D7 = X(function(a, b, c, d, e, f) {
        ({
            T: a
        } = cU().get(b, d, c, f));
        if (a) return {
            hb: a,
            Ra: new lT("CACHED_ENTRY")
        };
        a = jj(ij(new kj, b));
        return {
            hb: a,
            Ra: a.setError(gj(100))
        }
    }, {
        id: 1027,
        H: {
            hb: void 0,
            Ra: void 0
        }
    });
    var F7 = X(E7, {
        id: 1028,
        H: {
            ib: void 0
        }
    });

    function E7(a, b) {
        var c = a.T.lb();
        Qe(a.T, 3) != null || YT(35, c, null, {}, b);
        return {
            ib: a.T
        }
    };
    var G7 = class extends xW {
        constructor(a, b, c, d, e, f, g, h) {
            super(g);
            var k = Z(this, D7, {}, a, c, f, g, h);
            tW(this, k);
            a = new sT;
            nT(a, f);
            Z(this, y7, {
                T: k.Ra,
                M: a
            }, c, h);
            f = Z(this, z7, {
                T: k.hb
            });
            f = Z(this, F7, {
                T: f.T
            }, h);
            d ? {
                output: b
            } = uW(this, B7, {
                T: f.ib,
                M: a
            }, b, e, h) : {
                output: b
            } = uW(this, C7, {
                T: f.ib
            }, b, g, h);
            Z(this, y7, {
                T: b,
                M: a
            }, c, h)
        }
    };
    var H7 = new Set,
        I7 = X(function(a, b, c, d, e) {
            var f = a.Ie;
            c = a.Pb;
            a = a.Nl;
            if (!f ? .length) return {};
            var g = c.ga();
            for (let {
                    ul: h,
                    url: k,
                    um: l,
                    tm: m
                } of f) {
                if (!k || !g && !l || H7.has(k.toString())) continue;
                H7.add(k.toString());
                f = new G7(h, k, l, m, a, c, b, e);
                xs(d, f);
                wW(f)
            }
            return {}
        }, {
            id: 813,
            H: {}
        });
    var J7 = class extends xW {
        constructor(a, b, c, d) {
            super(a);
            this.j = b;
            this.i = c;
            ({
                da: b
            } = Z(this, v7, {
                M: this.i,
                Me: this.j
            }));
            ({
                Ie: c
            } = Z(this, w7, {
                An: this.j
            }));
            Z(this, I7, {
                Ie: c,
                Pb: this.i,
                Nl: b
            }, a, JT, this, d)
        }
    };
    var K7 = X(function(a) {
        var b = a.M;
        if (a = a.Qc)
            for (var c of a)
                for (let d of bj(c)) D(d, 4) && gU(cU(), d.lb(), b, !0);
        if (b.ga()) {
            if (b) {
                c = VT(b) ? ? [];
                for (let d of c) d.startsWith("_GESPSK") && PT(d, b)
            }
            dU = new eU
        }
        return {}
    }, {
        id: 1094,
        H: {}
    });
    var L7 = X(function(a, b, c) {
        var d = a.T;
        a = e => {
            YT(e, d.lb(), null, {
                tic: String(Math.round((Date.now() - tv(Re(d, 3))) / 6E4))
            }, c)
        };
        switch (fU(d)) {
            case 0:
                return a(24), {
                    Yb: new lT("FRESH_ENTRY"),
                    yc: new lT("FRESH_ENTRY")
                };
            case 1:
                return a(25), {
                    Yb: new lT("STALE_ENTRY"),
                    yc: d
                };
            case 2:
                return a(26), {
                    Yb: d,
                    yc: new lT("EXPIRED_ENTRY")
                };
            case 3:
                return YT(9, d.lb(), null, {}, c), {
                    Yb: d,
                    yc: new lT("ERROR_ENTRY")
                };
            case 4:
                return a(23), {
                    Yb: d,
                    yc: new lT("NEW_ENTRY")
                };
            default:
                return {
                    Yb: new lT("DEFAULT_ENTRY"),
                    yc: new lT("DEFAULT_ENTRY")
                }
        }
    }, {
        id: 1048,
        H: {
            Yb: void 0,
            yc: void 0
        }
    });
    var N7 = X(M7, {
        id: 1046,
        H: {
            ib: void 0
        }
    });

    function M7(a) {
        return {
            ib: a.hb
        }
    };
    var O7 = X(function(a) {
        var b = a.Vi;
        a = a.T;
        return b.Ra ? {
            Gi: a.setError(b.Ra),
            hb: new lT,
            signal: new lT
        } : {
            hb: b.hb,
            Gi: new lT,
            signal: b.signal
        }
    }, {
        id: 1479,
        H: {
            hb: void 0,
            Gi: void 0,
            signal: void 0
        }
    });

    function P7(a) {
        return kc(a) ? a : a instanceof Error ? a.message : null
    }
    var Q7 = rW(async function(a, b, c) {
        var d = fl(),
            e = Ue(a.T, 1);
        YT(18, e, null, {}, c);
        try {
            return b().then(f => {
                YT(29, e, null, {
                    delta: String(fl() - d)
                }, c);
                return {
                    hb: of (a.T, 2, f),
                    Ra: null,
                    signal: f
                }
            }).catch(f => {
                YT(28, e, P7(f), {}, c);
                return {
                    hb: null,
                    Ra: gj(106),
                    signal: null
                }
            })
        } catch (f) {
            return YT(1, e, P7(f), {}, c), {
                hb: null,
                Ra: gj(107),
                signal: null
            }
        }
    }, {
        id: 1478
    });
    var S7 = X(R7, {
        id: 1050,
        H: {
            ib: void 0
        }
    });

    function R7(a, b, c) {
        var d = a.T.lb();
        if (a.signal == null) return YT(41, d, null, {}, c), a.T.setError(gj(111)), {
            ib: a.T
        };
        if (!kc(a.signal)) return YT(21, d, null, {}, c), {
            ib: a.T.setError(gj(113))
        };
        if (a.signal.length > b) return YT(12, d, null, {
            sl: String(a.signal.length)
        }, c), b = a.T.setError(gj(108)), je(b, 2), {
            ib: a.T
        };
        a.signal.length || YT(20, d, null, {}, c);
        je(a.T, 10);
        return {
            ib: a.T
        }
    };
    var T7 = class {
        constructor(a, b) {
            this.output = new wT;
            vT(this.output, a, c => void b.Aa({
                methodName: 1046,
                Ha: c
            }))
        }
    };
    var U7 = class extends T7 {};
    var V7 = class extends xW {
        constructor(a, b, c, d, e, f = JT, g) {
            super(e);
            this.i = new sT;
            var h = Z(this, D7, {}, a, b, d, e),
                k = new sT;
            nT(k, d);
            Z(this, y7, {
                T: h.Ra,
                M: k
            }, b, g);
            d = Z(this, F7, {
                T: h.hb
            }, g);
            h = Z(this, L7, {
                T: d.ib
            }, e, g);
            d = uW(this, Q7, {
                T: h.Yb
            }, c, g);
            var {
                signal: l,
                hb: m,
                Gi: n
            } = Z(this, O7, {
                Vi: d.output,
                T: h.Yb
            });
            Z(this, y7, {
                T: n,
                M: k
            }, b, g);
            d = Z(this, S7, {
                T: m,
                signal: l
            }, 1024, g);
            Z(this, y7, {
                T: d.ib,
                M: k
            }, b, g);
            f = f.Yj ? aU(window) : $T(window);
            e = new U7(f, e);
            e = W(Z(this, N7, {
                hb: h.yc
            }), e.output);
            c = uW(this, Q7, {
                T: e.ib
            }, c, g);
            ({
                hb: c
            } = Z(this, O7, {
                Vi: c.output,
                T: e.ib
            }));
            Z(this, y7, {
                T: c,
                M: k
            }, b, g);
            b = d.ib.promise.then(p => ({
                id: a,
                collectorGeneratedData: p ? .l() ? ? null
            })).catch(() => ({
                id: a,
                collectorGeneratedData: null
            }));
            rT(this.i, b)
        }
    };
    var W7 = rW(async function(a, b, c, d = JT, e) {
        var f = new lU(a.og ? ? []),
            g = a.Ab.id,
            h = a.Ab.collectorFunction,
            k = a.Ab.networkCode ? ? g;
        f = g && iU(f, g) || iU(f, k) ? !0 : !1;
        if (!a.M.ga() && !f) return new lT("Storage consent not granted.");
        YT(42, k, null, {
            ea: String(Number(b))
        }, e);
        a = new V7(k, f, h, a.M, c, d, e);
        wW(a);
        return a.i.promise
    }, {
        id: 1059
    });
    var X7 = X(function(a, b, c, d = JT, e) {
        if (!b) return YT(39, "UNKNOWN_COLLECTOR_ID", null, {}, e), {
            Ra: ij(new kj, "UNKNOWN_COLLECTOR_ID").setError(gj(110)),
            Ab: new lT
        };
        if (typeof b !== "object") return YT(46, "UNKNOWN_COLLECTOR_ID", null, {}, e), {
            Ra: ij(new kj, "UNKNOWN_COLLECTOR_ID").setError(gj(112)),
            Ab: new lT
        };
        a = b.id;
        c = b.networkCode;
        a && c && (delete b.id, YT(47, `${a};${c}`, null, {}, e));
        a = c ? ? a;
        return kc(a) ? typeof b.collectorFunction !== "function" ? (YT(14, a, null, {}, e), {
                Ra: ij(new kj, a).setError(gj(105)),
                Ab: new lT
            }) : d.ej.includes(a) ?
            (YT(22, a, null, {}, e), {
                Ra: ij(new kj, a).setError(gj(104)),
                Ab: new lT
            }) : {
                Ra: null,
                Ab: b
            } : (YT(37, "INVALID_COLLECTOR_ID", null, {
                ii: JSON.stringify(a)
            }, e), {
                Ra: ij(new kj, "INVALID_COLLECTOR_ID").setError(gj(102)),
                Ab: new lT
            })
    }, {
        id: 1057,
        H: {
            Ra: void 0,
            Ab: void 0
        }
    });

    function Y7(a, b) {
        a.i.i.push(b)
    }
    var $7 = class {
        constructor(a, b, c, d = document, e, f, g = JT, h) {
            this.A = b;
            this.U = c;
            this.D = d;
            this.Z = e;
            this.C = f;
            this.l = g;
            this.j = h;
            this.O = [];
            this.J = [];
            this.i = new Z7;
            this.B = 0;
            for (let k of a) this.push(k)
        }
        push(a) {
            this.U || this.Z();
            var b = new xW(this.i);
            a = Z(b, X7, {}, a, this.i, this.l, this.j);
            var c = a.Ab;
            Z(b, y7, {
                T: a.Ra,
                M: this.A
            }, void 0, this.j);
            a = uW(b, W7, {
                Ab: c,
                M: this.A,
                og: void 0
            }, this.U, this.i, this.l, this.j).output.promise;
            wW(b);
            this.O.push(a);
            for (let d of this.J) a.then(d)
        }
        addOnSignalResolveCallback(a) {
            this.J.push(a);
            for (let b of this.O) b.then(a)
        }
        clearAllCache() {
            var a =
                this.D.currentScript instanceof HTMLScriptElement ? this.D.currentScript.src : "";
            if (this.B === 1) YT(49, "", null, {
                url: a
            }, this.j);
            else if (this.l.Zi.includes(String(Qt(a ? ? "")))) YT(48, "", null, {
                url: a
            }, this.j);
            else {
                this.C && this.C();
                var b = new xW(this.i),
                    c = Z(b, K7, {
                        M: this.A,
                        Qc: void 0
                    }, this.i);
                wW(b);
                this.B = 1;
                setTimeout(() => {
                    this.B = 0
                }, this.l.Wi * 1E3);
                YT(43, "", null, {
                    url: a
                }, this.j);
                return c.finished.promise
            }
        }
    };
    class Z7 {
        constructor() {
            this.i = []
        }
        Aa(a) {
            this.i.forEach(b => void b.Aa(a))
        }
    }
    var a8 = class {
        constructor(a) {
            this.push = b => {
                a.push(b)
            };
            this.addOnSignalResolveCallback = b => {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = b => {
                Y7(a, {
                    Aa: ({
                        methodName: c,
                        Ha: d
                    }) => void b(c, d)
                })
            };
            this.clearAllCache = () => {
                a.clearAllCache()
            }
        }
    };

    function b8(a, b, c, d, e, f = JT, g) {
        if (!c8(a, "encryptedSignalProviders", c) || !c8(a, "secureSignalProviders", c)) {
            YT(38, "", null, {}, g);
            var h = {
                Aa: ({
                    methodName: k,
                    Ha: l
                }) => void c(k, l)
            };
            d8(a, "encryptedSignalProviders", b, f, h, d, e, g);
            d8(a, "secureSignalProviders", b, f, h, () => {}, e, g)
        }
    }

    function c8(a, b, c) {
        a = b === "secureSignalProviders" ? a.secureSignalProviders : a.encryptedSignalProviders;
        if (a === void 0 || a instanceof Array) return !1;
        a.addErrorHandler(c);
        return !0
    }

    function d8(a, b, c, d, e, f, g, h) {
        var k = b === "secureSignalProviders" ? a.secureSignalProviders : a.encryptedSignalProviders;
        c = new $7(k instanceof Array ? k : [], c, b === "secureSignalProviders", document, f, g, d, h);
        d = new a8(c);
        b === "secureSignalProviders" ? a.secureSignalProviders = d : a.encryptedSignalProviders = d;
        Y7(c, e)
    }

    function e8(a, b, c, d, e, f = JT, g) {
        var h = new sT;
        nT(h, b);
        b8(a, h, c, d, e, f, g)
    };
    var g8 = X(f8, {
        id: 1049,
        H: {}
    });

    function f8(a, b) {
        var c = new Set,
            d = new Set(bU(a.Pb));
        for (var e of a.Qc ? ? [])
            for (let f of bj(e)) D(f, 4) && (d.add(f.lb()), c.add(f.lb()));
        for (let f of Array.from(d)) {
            ({
                T: d
            } = cU().get(f, a.Pb, c.has(f), b));
            if (!d) continue;
            e = fU(d);
            if (e === 2 || e === 3) gU(cU(), Ue(d, 1) ? ? "", a.Pb, c.has(f)), YT(40, f, null, {}, b)
        }
        return {}
    };
    const i8 = MW(function(a) {
        return a.Pb.ga() || h8(a.Qc)
    }, {
        id: 1415
    });
    var j8 = class extends JW {
        constructor(a, b, c, d) {
            var e = window;
            super(c);
            this.Pb = a;
            this.Qc = b;
            e = JT.Yj ? aU(e) : $T(e);
            c = new U7(e, c);
            W(Z(this, g8, {
                Pb: a,
                Qc: b
            }, d), c.output)
        }
        async i() {
            return KW(this.A, i8, {
                Pb: this.Pb,
                Qc: this.Qc
            })
        }
        j() {}
    };

    function h8(a) {
        return a.some(b => bj(b).some(c => D(c, 4)))
    };

    function k8(a, b, c, d) {
        return e => {
            if (Gt(e) && ((c.gjPrg ? ? "") === b || (c.zeuLy ? ? "") === b && a.location.host && (c.ANqoe ? ? "") === a.location.host)) {
                var f = new XU;
                e8(t.googletag ? ? (t.googletag = {
                    cmd: []
                }), e.getValue(), (l, m) => void f.Aa({
                    methodName: l,
                    Ha: m
                }), () => void t.console.warn("Using deprecated googletag.encryptedSignalProviders. Please usegoogletag.secureSignalProviders instead."), () => void t.console.warn("Calling this method may reduce the likelihood of signals being included in ad requests for the current and potentially later page views. Due to this, it should only be called when meaningful state changes occur, such as events that indicate a new user log in, log out, sign up, etc."), {
                    Zi: oy(Nv),
                    Wi: T(Mv),
                    ej: oy(Tv)
                }, d);
                var g = new sT;
                qT(g, e.getValue());
                e = new xW(f);
                var {
                    Me: h,
                    og: k
                } = Z(e, IT, {}, c.jzoix);
                vW(e, new J7(f, h, g, d));
                vW(e, new j8(g, k, f, d));
                wW(e)
            }
        }
    };
    var l8 = X(function(a, b, c, d, e) {
        if (!S(Wv)) return {};
        a = T(hw);
        MN({
            Ib: k8(window, oI(window), b, a > 0 ? {
                G: d,
                Wh: e,
                bk: a,
                gk: S(iw)
            } : void 0),
            win: c,
            gb: b.OSCLM.UWEfJ
        });
        return {}
    }, {
        id: 1378,
        H: {}
    });

    function m8(a, b, c, d) {
        var e = HA,
            f = n8,
            g = {
                Aa: k => {
                    var l = k.Ha;
                    e.Ea(k.methodName ? ? 0, l instanceof Error ? l : Error(String(l)))
                }
            },
            h = new xW(g);
        Z(h, l8, {}, a, t, d, g);
        ({
            Hb: d
        } = Z(h, t7, {}));
        a = Z(h, q7, {
            Hb: d
        }, b, a, c, f, t);
        W(Z(h, r7, {}, t), a.finished);
        wW(h)
    };
    var o8 = rW(async function(a, b) {
        !S(Vv) || T(Lv) <= 0 || await b.Hb ? .i()
    }, {
        id: 1390
    });
    var p8 = class {
        constructor(a, b) {
            this.K = a;
            this.Nc = b;
            this.i = null;
            this.l = 0
        }
        j() {
            ++this.l >= 10 && t.clearInterval(this.i);
            var a = OL(this.K, this.Nc);
            PL(this.K, this.Nc, a);
            a = wy(this.Nc, this.K);
            a != null && a.x === 0 || t.clearInterval(this.i)
        }
    };
    var q8 = X(function(a, b) {
        KA(639, () => {
            var c;
            var d = b.I;
            (c = b.K) && d.google_responsive_auto_format === 1 && d.google_full_width_responsive_allowed === !0 ? (d = (d = c.document.getElementById(d.google_async_iframe_id)) ? ni(d, "INS", "adsbygoogle") : null) ? (c = new p8(c, d), c.i = t.setInterval(ya(c.j, c), 500), c.j(), c = !0) : c = !1 : c = !1;
            return c
        });
        return {}
    }, {
        id: 1357,
        H: {}
    });
    var r8 = X(function(a, b, c) {
        a = new Map;
        for (var d of Object.keys(b)) {
            var e = a,
                f = e.set;
            var g = b[d];
            g = g === void 0 ? 1 : g === null ? 2 : g === !1 ? 3 : g === 0 ? 4 : g === "" ? 5 : Array.isArray(g) && g.length === 0 ? 6 : typeof g === "object" && Object.keys(g).length === 0 ? 7 : 8;
            f.call(e, d, g)
        }
        c.i && (b = c.G, c = xI(c, c.win.performance.now()), d = new hn, de(d), a.forEach(ze, ye(d, 1, void 0, vd)), a = d.setLocation(1), a = B(c, 21, Io, a), wp(b, a));
        return {}
    }, {
        id: 1576,
        H: {}
    });
    var s8 = X(function(a, b, c, d) {
        jI() && t.setTimeout(LA(1244, () => void uR(b || c, {
            gb: !!d.OSCLM.UWEfJ
        })), 1E3);
        return {}
    }, {
        id: 1385,
        H: {}
    });
    async function t8(a, b, c, d, e, f, g) {
        await I2(a, b, c, d, e, f, g)
    }
    var u8 = X(function(a, b, c, d, e, f) {
        var g = b.K,
            h = b.pubWin;
        g ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? MA(1008, t8(h, g, c, d, cg(new QY), e, f.SLqBY || ""), k => {
            k.es = RZ(null)
        }) : pQ(h, "affa", k => {
            MA(1008, t8(h, g, c, d, k.config, e, f.SLqBY || ""), l => {
                l.es = RZ(null)
            });
            return !0
        });
        return {}
    }, {
        id: 1384,
        H: {}
    });

    function v8(a) {
        var b = HA,
            c = {
                Aa: f => {
                    var g = f.Ha;
                    b.Ea(f.methodName ? ? 0, g instanceof Error ? g : Error(String(g)))
                }
            },
            d = new xW(c);
        Z(d, r8, {}, a.I, cr(CI));
        var e = uW(d, o8, {}, a);
        c = vW(d, new p7(c, a, e.complete));
        e = W(W(Z(d, q8, {}, a), c.i), e.complete);
        e = W(Z(d, s8, {}, a.K, a.pubWin, a.pageState), e.finished);
        a = W(Z(d, u8, {}, {
            K: a.K,
            pubWin: a.pubWin
        }, a.I, a.Ia, a.M, a.pageState), e.finished);
        wW(d);
        return a.finished.promise
    };
    var w8 = class {
        constructor(a) {
            this.j = 0;
            this.M = this.B = null;
            this.A = 0;
            this.Ia = [];
            this.Bc = this.l = "";
            this.wb = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.I = a.I;
            this.Sa = a.Sa;
            this.Kc = a.Kc;
            this.ea = a.ea;
            this.pageState = a.pageState;
            this.oc = a.oc
        }
    };

    function x8(a) {
        HA.l(b => {
            b.shv = String(a);
            b.mjsv = Mo();
            b.eid = QU(t)
        })
    };
    async function n8({
        Sa: a,
        Kc: b,
        slot: c,
        pageState: d,
        Hb: e
    }) {
        var f = c.vars,
            g = uj(c.pubWin),
            h = c.innerInsElement;
        if (!h) throw Error("no_wrapper_element_in_loader_provided_slot");
        a = new w8({
            K: g,
            pubWin: c.pubWin,
            I: f,
            Sa: a,
            Kc: b,
            ea: h,
            pageState: d,
            oc: c.KCuMo
        });
        a.A = Date.now();
        a.Hb = e;
        Wk(1, [a.I]);
        try {
            await v8(a)
        } catch (k) {
            if (!OA(159, k)) throw k;
        }
        return a
    };
    (function(a, b) {
        KA(843, () => {
            if (!t.google_sa_impl) {
                var c = null;
                c = c ? ? new br(a);
                try {
                    Ib(e => {
                        xA(c, 1192, e)
                    })
                } catch (e) {}
                var d = t.adsbygoogle && "pageState" in t.adsbygoogle && t.adsbygoogle.pageState ? t.adsbygoogle.pageState : {
                    stavq: 0,
                    jTCuI: "",
                    OmOVT: !1,
                    xujKL: !1,
                    AyxaY: void 0,
                    SLqBY: "",
                    xVQAt: "",
                    OSCLM: {
                        UWEfJ: !1,
                        YguOd: !1,
                        SVQEK: !1
                    },
                    jzoix: {
                        PygXN: []
                    },
                    FJPve: !1,
                    GLnKw: !1,
                    tYcft: Promise.resolve(void 0),
                    EGzMj: Promise.resolve(!0),
                    uNjDc: !1,
                    MhIdB: void 0
                };
                x8(d.jTCuI);
                KU(EU(t));
                m8(d, a, b, c)
            }
        })
    })(Mo(), function(a, b, c, d) {
        b = b > 2012 ? `_fy${b}` :
            "";
        return {
            sn: jh `https://pagead2.googlesyndication.com/pagead/js/${c}/${d}/rum${b}.js`,
            rn: jh `https://pagead2.googlesyndication.com/pagead/js/${c}/${d}/rum_debug${b}.js`,
            Vj: jh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${b}.js`,
            Bl: jh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${b}.js`,
            Ap: jh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
            yg: jh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/video_feed${b}.js`,
            yk: jh `https://googleads.g.doubleclick.net/pagead/html/${c}/${d}/zrt_lookup${b}.html`,
            xk: jh `https://pagead2.googlesyndication.com/pagead/html/${c}/${d}/zrt_lookup${b}.html`
        }
    });
}).call(this, "");