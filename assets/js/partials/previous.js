"use strict";

function videoinit() {
    ! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e : t.fluidvids = e() }(this, function() {
        function t(t) {
            return new RegExp("^(https?:)?//(?:" + r.players.join("|") + ").*$", "i").test(t)
        }

        function e(t, e) {
            return parseInt(t, 10) / parseInt(e, 10) * 100 + "%"
        }

        function n(n) {
            if ((t(n.src) || t(n.data)) && !n.getAttribute("data-fluidvids")) {
                var i = document.createElement("div");
                n.parentNode.insertBefore(i, n), n.className += (n.className ? " " : "") + "fluidvids-item", n.setAttribute("data-fluidvids", "loaded"), i.className += "fluidvids", i.style.paddingTop = e(n.height, n.width), i.appendChild(n)
            }
        }

        function i() {
            var t = document.createElement("div");
            t.innerHTML = "<p>x</p><style>" + o + "</style>", s.appendChild(t.childNodes[1])
        }
        var r = { selector: ["iframe", "object"], players: ["www.youtube.com", "player.vimeo.com"] },
            o = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
            s = document.head || document.getElementsByTagName("head")[0];
        return r.render = function() {
            for (var t = document.querySelectorAll(r.selector.join()), e = t.length; e--;) n(t[e])
        }, r.init = function(t) {
            for (var e in t) r[e] = t[e];
            r.render(), i()
        }, r
    }), fluidvids.init({ selector: ["iframe", "object"], players: ["www.youtube.com", "player.vimeo.com"] })
}


var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
};
String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
    return e = e || 0, this.indexOf(t, e) === e
}), String.prototype.includes || (String.prototype.includes = function() {
    return String.prototype.indexOf.apply(this, arguments) !== -1
}), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
    var n = this.toString();
    ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
    var i = n.indexOf(t, e);
    return i !== -1 && i === e
}), "document" in self && !("classList" in document.createElement("_")) && ! function(t) {
    if ("Element" in t) {
        var e = "classList",
            n = "prototype",
            i = t.Element[n],
            r = Object,
            o = String[n].trim || function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            s = Array[n].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            l = function(t, e) { this.name = t, this.code = DOMException[t], this.message = e },
            a = function(t, e) {
                if ("" === e) throw new l("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(e)) throw new l("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return s.call(t, e)
            },
            u = function(t) {
                for (var e = o.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, r = n.length; i < r; i++) this.push(n[i]);
                this._updateClassName = function() { t.setAttribute("class", this.toString()) }
            },
            c = u[n] = [],
            d = function() {
                return new u(this)
            };
        if (l[n] = Error[n], c.item = function(t) {
                return this[t] || null
            }, c.contains = function(t) {
                return t += "", a(this, t) !== -1
            }, c.add = function() {
                var t, e = arguments,
                    n = 0,
                    i = e.length,
                    r = !1;
                do t = e[n] + "", a(this, t) === -1 && (this.push(t), r = !0); while (++n < i);
                r && this._updateClassName()
            }, c.remove = function() {
                var t, e = arguments,
                    n = 0,
                    i = e.length,
                    r = !1;
                do {
                    t = e[n] + "";
                    var o = a(this, t);
                    o !== -1 && (this.splice(o, 1), r = !0)
                } while (++n < i);
                r && this._updateClassName()
            }, c.toggle = function(t, e) {
                t += "";
                var n = this.contains(t),
                    i = n ? e !== !0 && "remove" : e !== !1 && "add";
                return i && this[i](t), !n
            }, c.toString = function() {
                return this.join(" ")
            }, r.defineProperty) {
            var p = { get: d, enumerable: !0, configurable: !0 };
            try { r.defineProperty(i, e, p) } catch (f) { f.number === -2146823252 && (p.enumerable = !1, r.defineProperty(i, e, p)) }
        } else r[n].__defineGetter__ && i.__defineGetter__(e, d)
    }
}(self), String.prototype.includes || (String.prototype.includes = function() {
    return "number" == typeof arguments[1] ? !(this.length < arguments[0].length + arguments[1].length) && this.substr(arguments[1], arguments[0].length) === arguments[0] : String.prototype.indexOf.apply(this, arguments) !== -1
}), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
    return e = e || 0, this.substr(e, t.length) === t
}), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
    var n = this.toString();
    ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
    var i = n.indexOf(t, e);
    return i !== -1 && i === e
}), window.onload = videoinit;


(function() {
    var t = location.host.replace("www.", "");
    t = new RegExp(t, "i");
    for (var e = new RegExp(/mailto:/), n = new RegExp(/(.pdf|.docx|.doc|.xlsx|.xls)$/), i = document.getElementsByTagName("a"), r = 0; r < i.length; r++) {
        var o = i[r].host;
        n.test(i[r].href) ? i[r].setAttribute("target", "_blank") : e.test(i[r].href) ? i[r].setAttribute("target", "") : t.test(o) || i[r].setAttribute("target", "_blank")
    }
})();
