/**
 * Converts details/summary tags into working elements in browsers that don't yet support them.
 * @return {void}
 */
export default () => {

  const isDetailsSupported = (() => {
    // https://mathiasbynens.be/notes/html5-details-jquery#comment-35
    // Detect if details is supported in the browser
    const el = document.createElement("details")
    let fake = false

    if (!("open" in el)) {
      return false
    }

    const root = document.body || (() => {
      const de = document.documentElement
      fake = true
      return de.insertBefore(document.createElement("body"), de.firstElementChild || de.firstChild)
    })()

    el.innerHTML = "<summary>a</summary>b"
    el.style.display = "block"
    root.appendChild(el)
    let diff = el.offsetHeight
    el.open = true
    diff = diff !== el.offsetHeight
    root.removeChild(el)

    if (fake) {
      root.parentNode.removeChild(root)
    }

    return diff
  })()

  if (!isDetailsSupported) {
    const blocks = document.querySelectorAll("details>summary")
    for (let i = 0; i < blocks.length; i++) {
      const summary = blocks[i]
      const details = summary.parentNode

      // Apply "no-details" to for unsupported details tags
      if (!details.className.match(new RegExp("(\\s|^)no-details(\\s|$)"))) {
        details.className += " no-details"
      }

      summary.addEventListener("click", e => {
        const node = e.target.parentNode
        if (node.hasAttribute("open")) {
          node.removeAttribute("open")
        } else {
          node.setAttribute("open", "open")
        }
      })
    }
  }
}

! function() {
	"use strict";
	var e = function(e, t, n) {
			for (var r = document.querySelectorAll("article"), o = document.querySelectorAll("pre." + t + ",div." + t), a = void 0 === n ? {} : n, i = 0; i < o.length; i++) {
				var d = o[i],
					l = document.createElement("div");
				l.className = t, l.style.visibility = "hidden", l.style.position = "absolute";
				var s = "pre" === d.tagName.toLowerCase() ? function(e) {
					for (var t = "", n = 0; n < e.childNodes.length; n++) {
						var r = e.childNodes[n];
						if ("code" === r.tagName.toLowerCase())
							for (var o = 0; o < r.childNodes.length; o++) {
								var a = r.childNodes[o],
									i = /^\s*$/;
								if ("#text" === a.nodeName && !i.test(a.nodeValue)) {
									t = a.nodeValue;
									break
								}
							}
					}
					return t
				}(d) : function(e) {
					return e.textContent || e.innerText
				}(d);
				r[0].appendChild(l), e.parse(s).drawSVG(l, a), l.style.visibility = "visible", l.style.position = "static", d.parentNode.insertBefore(l, d), d.parentNode.removeChild(d)
			}
		},
		t = function() {
			if (! function() {
					var e = document.createElement("details"),
						t = !1;
					if (!("open" in e)) return !1;
					var n = document.body || function() {
						var e = document.documentElement;
						return t = !0, e.insertBefore(document.createElement("body"), e.firstElementChild || e.firstChild)
					}();
					e.innerHTML = "<summary>a</summary>b", e.style.display = "block", n.appendChild(e);
					var r = e.offsetHeight;
					return e.open = !0, r = r !== e.offsetHeight, n.removeChild(e), t && n.parentNode.removeChild(n), r
				}())
				for (var e = document.querySelectorAll("details>summary"), t = 0; t < e.length; t++) {
					var n = e[t],
						r = n.parentNode;
					r.className.match(new RegExp("(\\s|^)no-details(\\s|$)")) || (r.className += " no-details"), n.addEventListener("click", function(e) {
						var t = e.target.parentNode;
						t.hasAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "open")
					})
				}
		};
	! function(e) {
		document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
			"interactive" === document.readyState && e()
		})
	}(function() {
		t(), "undefined" != typeof flowchart && e(flowchart, "uml-flowchart"), "undefined" != typeof Diagram && e(Diagram, "uml-sequence-diagram", {
			theme: "simple"
		})
	})
}();

(function () {
'use strict';
/**
 * Converts details/summary tags into working elements in browsers that don't yet support them.
 * @return {void}
 */
var details = (function () {

  var isDetailsSupported = function () {
    // https://mathiasbynens.be/notes/html5-details-jquery#comment-35
    // Detect if details is supported in the browser
    var el = document.createElement("details");
    var fake = false;

    if (!("open" in el)) {
      return false;
    }

    var root = document.body || function () {
      var de = document.documentElement;
      fake = true;
      return de.insertBefore(document.createElement("body"), de.firstElementChild || de.firstChild);
    }();

    el.innerHTML = "<summary>a</summary>b";
    el.style.display = "block";
    root.appendChild(el);
    var diff = el.offsetHeight;
    el.open = true;
    diff = diff !== el.offsetHeight;
    root.removeChild(el);

    if (fake) {
      root.parentNode.removeChild(root);
    }

    return diff;
  }();

  if (!isDetailsSupported) {
    var blocks = document.querySelectorAll("details>summary");
    for (var i = 0; i < blocks.length; i++) {
      var summary = blocks[i];
      var details = summary.parentNode;

      // Apply "no-details" to for unsupported details tags
      if (!details.className.match(new RegExp("(\\s|^)no-details(\\s|$)"))) {
        details.className += " no-details";
      }

      summary.addEventListener("click", function (e) {
        var node = e.target.parentNode;
        if (node.hasAttribute("open")) {
          node.removeAttribute("open");
        } else {
          node.setAttribute("open", "open");
        }
      });
    }
  }
});

(function () {
  var onReady = function onReady(fn) {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState === "interactive") {
          fn();
        }
      });
    }
  };

  onReady(function () {
    details();
  });
})();

}());