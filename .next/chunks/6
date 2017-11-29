
          window.__NEXT_REGISTER_CHUNK('idyll_document_c0551f40e09448d62d9087779a403aab.js', function() {
            webpackJsonp([6],{

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(1085)

var NON_WORD_REGEXP = __webpack_require__(1108)
var CAMEL_CASE_REGEXP = __webpack_require__(1109)
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(1110)

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),

/***/ 1084:
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),

/***/ 1085:
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1084)

/**
 * Upper case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return upperCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1084)
var noCase = __webpack_require__(1083)

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_')
}


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(396);

var implementation = __webpack_require__(1091);
var getPolyfill = __webpack_require__(1099);
var shim = __webpack_require__(1132);

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(1092);
var has = __webpack_require__(414);
var bind = __webpack_require__(398);
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function entries(O) {
	var obj = ES.RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1123);


/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),

/***/ 1096:
/***/ (function(module, exports) {

var has = Object.prototype.hasOwnProperty;
module.exports = function assign(target, source) {
	if (Object.assign) {
		return Object.assign(target, source);
	}
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),

/***/ 1097:
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(1091);

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(396);

var implementation = __webpack_require__(1101);
var getPolyfill = __webpack_require__(1102);
var shim = __webpack_require__(1133);

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(1092);
var has = __webpack_require__(414);
var bind = __webpack_require__(398);
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function values(O) {
	var obj = ES.RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			vals.push(obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(1101);

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Scrollparent = factory();
  }
}(this, function () {
  var regex = /(auto|scroll)/;

  var parents = function (node, ps) {
    if (node.parentNode === null) { return ps; }

    return parents(node.parentNode, ps.concat([node]));
  };

  var style = function (node, prop) {
    return getComputedStyle(node, null).getPropertyValue(prop);
  };

  var overflow = function (node) {
    return style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x");
  };

  var scroll = function (node) {
   return regex.test(overflow(node));
  };

  var scrollParent = function (node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return ;
    }

    var ps = parents(node.parentNode, []);

    for (var i = 0; i < ps.length; i += 1) {
      if (scroll(ps[i])) {
        return ps[i];
      }
    }

    return document.scrollingElement || document.documentElement;
  };

  return scrollParent;
}));


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),u=!1;if(a)try{var w=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,w)}catch(t){}var d=!!u&&{capture:!1,passive:!0},f=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(u=a.watchers.length;u--;)a.watchers[u].recalculateLocation();p=a.documentHeight}}function c(){for(w=a.watchers.length;w--;)a.watchers[w].update();for(w=a.watchers.length;w--;)a.watchers[w].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,u,w;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,d):this.item.addEventListener("scroll",this.DOMListener,d),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,d),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,d),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)y=t[E],y.callback.call(s,e,s),y.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||w.top,bottom:i.bottom||w.bottom}:this.offsets=w,this.callbacks={};for(var d=0,f=u.length;d<f;d++)s.callbacks[u[d]]=[];this.locked=!1;var m,v,b,I,E,y;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=u.length;i<o;i++)e.callbacks[u[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_factories__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_factories___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_factories__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_change_case__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_change_case___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_change_case__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var _componentMap = new WeakMap();

var ReactJsonSchema = function () {
  function ReactJsonSchema(componentMap) {
    _classCallCheck(this, ReactJsonSchema);

    if (componentMap) this.setComponentMap(componentMap);
  }

  ReactJsonSchema.prototype.parseSchema = function parseSchema(schema) {
    var element = null;
    var elements = null;
    if (Array.isArray(schema)) {
      elements = this.parseSubSchemas(schema);
    } else {
      element = this.createComponent(schema);
    }
    return element || elements;
  };

  ReactJsonSchema.prototype.parseSubSchemas = function parseSubSchemas() {
    var subSchemas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var Components = [];
    var index = 0;
    for (var _iterator = subSchemas, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var subSchema = _ref;

      if (typeof subSchema === 'string') {
        Components.push(subSchema);
      } else {
        subSchema.key = typeof subSchema.key !== 'undefined' ? subSchema.key : index;
        Components.push(this.parseSchema(subSchema));
        index++;
      }
    }
    return Components;
  };

  ReactJsonSchema.prototype.createComponent = function createComponent(schema) {
    var component = schema.component,
        children = schema.children,
        text = schema.text,
        rest = _objectWithoutProperties(schema, ['component', 'children', 'text']);

    var Component = this.resolveComponent(schema);
    var Children = typeof text !== 'undefined' ? text : this.resolveComponentChildren(schema);
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Component, rest, Children);
  };

  ReactJsonSchema.prototype.resolveComponent = function resolveComponent(schema) {
    var componentMap = this.getComponentMap();
    var Component = void 0;

    // bail early if there is no component name
    if (!schema.hasOwnProperty('component')) {
      throw new Error('ReactJsonSchema could not resolve a component due to a missing component attribute in the schema.');
    }

    // if it's already a ref bail early
    if (schema.component === Object(schema.component)) {
      return schema.component;
    }

    var _schema$component$spl = schema.component.split('.'),
        name = _schema$component$spl[0],
        subs = _schema$component$spl.slice(1);

    // find the def in the provided map


    if (componentMap) {
      Component = componentMap[name];
      if (!Component) Component = componentMap[Object(__WEBPACK_IMPORTED_MODULE_2_change_case__["paramCase"])(name)];
      if (!Component) Component = componentMap[Object(__WEBPACK_IMPORTED_MODULE_2_change_case__["pascalCase"])(name)];

      for (var i = 0; i < subs.length; i++) {
        Component = Component[subs[i]];
      }
    }

    // if still nothing found it's a native DOM component or an error
    if (!Component) {
      if (__WEBPACK_IMPORTED_MODULE_1_react_dom_factories___default.a.hasOwnProperty(name)) {
        Component = schema.component;
      } else {
        throw new Error('ReactJsonSchema could not find an implementation for: ' + schema.component);
      }
    }

    // if there is a default prop (CommonJS) return that
    return Component.default || Component;
  };

  ReactJsonSchema.prototype.resolveComponentChildren = function resolveComponentChildren(schema) {
    var children = schema.hasOwnProperty('children') ? this.parseSchema(schema.children) : [];
    return children.length ? children : undefined;
  };

  ReactJsonSchema.prototype.getComponentMap = function getComponentMap() {
    return _componentMap.get(this);
  };

  ReactJsonSchema.prototype.setComponentMap = function setComponentMap(componentMap) {
    _componentMap.set(this, componentMap);
  };

  return ReactJsonSchema;
}();

/* harmony default export */ __webpack_exports__["a"] = (ReactJsonSchema);

/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function(f) {
  if (true) {
    module.exports = f(__webpack_require__(17));
    /* global define */
  } else if (typeof define === 'function' && define.amd) {
    define(['react'], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }

    if (typeof g.React === 'undefined') {
      throw Error('React module should be required before ReactDOMFactories');
    }

    g.ReactDOMFactories = f(g.React);
  }
})(function(React) {
  /**
   * Create a factory that creates HTML tag elements.
   */
  function createDOMFactory(type) {
    var factory = React.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    factory.type = type;
    return factory;
  };

  /**
   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
   */
  var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    var: createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),

    // SVG
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan'),
  };

  // due to wrapper and conditionals at the top, this will either become
  // `module.exports ReactDOMFactories` if that is available,
  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
  // if that is available,
  // otherwise it will be defined as global variable.
  return ReactDOMFactories;
});



/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

exports.no = exports.noCase = __webpack_require__(1083)
exports.dot = exports.dotCase = __webpack_require__(1111)
exports.swap = exports.swapCase = __webpack_require__(1112)
exports.path = exports.pathCase = __webpack_require__(1113)
exports.upper = exports.upperCase = __webpack_require__(1084)
exports.lower = exports.lowerCase = __webpack_require__(1085)
exports.camel = exports.camelCase = __webpack_require__(1088)
exports.snake = exports.snakeCase = __webpack_require__(1089)
exports.title = exports.titleCase = __webpack_require__(1114)
exports.param = exports.paramCase = __webpack_require__(1115)
exports.header = exports.headerCase = __webpack_require__(1116)
exports.pascal = exports.pascalCase = __webpack_require__(1117)
exports.constant = exports.constantCase = __webpack_require__(1118)
exports.sentence = exports.sentenceCase = __webpack_require__(1119)
exports.isUpper = exports.isUpperCase = __webpack_require__(1120)
exports.isLower = exports.isLowerCase = __webpack_require__(1121)
exports.ucFirst = exports.upperCaseFirst = __webpack_require__(1086)
exports.lcFirst = exports.lowerCaseFirst = __webpack_require__(1122)


/***/ }),

/***/ 1108:
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),

/***/ 1109:
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),

/***/ 1110:
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '.')
}


/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1084)
var lowerCase = __webpack_require__(1085)

/**
 * Swap the case of a string. Manually iterate over every character and check
 * instead of replacing certain characters for better unicode support.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  var result = ''

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    var u = upperCase(c, locale)

    result += u === c ? lowerCase(c, locale) : u
  }

  return result
}


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)

/**
 * Path case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '/')
}


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)
var upperCase = __webpack_require__(1084)

/**
 * Title case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale).replace(/^.| ./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)

/**
 * Param case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-')
}


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)
var upperCase = __webpack_require__(1084)

/**
 * Header case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-').replace(/^.|-./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

var camelCase = __webpack_require__(1088)
var upperCaseFirst = __webpack_require__(1086)

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale)
}


/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1084)
var snakeCase = __webpack_require__(1089)

/**
 * Constant case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCase(snakeCase(value, locale), locale)
}


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(1083)
var upperCaseFirst = __webpack_require__(1086)

/**
 * Sentence case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCaseFirst(noCase(value, locale), locale)
}


/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(1084)

/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return upperCase(string, locale) === string
}


/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(1085)

/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return lowerCase(string, locale) === string
}


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(1085)

/**
 * Lower case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return lowerCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES2015 = __webpack_require__(1124);
var assign = __webpack_require__(1096);

var ES2016 = assign(assign({}, ES2015), {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES2016;


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(414);
var toPrimitive = __webpack_require__(1125);

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var $isNaN = __webpack_require__(1094);
var $isFinite = __webpack_require__(1095);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(1096);
var sign = __webpack_require__(1097);
var mod = __webpack_require__(1098);
var isPrimitive = __webpack_require__(1128);
var parseInteger = parseInt;
var bind = __webpack_require__(398);
var arraySlice = bind.call(Function.call, Array.prototype.slice);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var regexExec = bind.call(Function.call, RegExp.prototype.exec);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(1129);

var hasRegExpMatcher = __webpack_require__(1131);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, Number);
		if (typeof value === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = Math.floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return typeof key === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) { return true; }
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && typeof Symbol.isConcatSpreadable === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && Symbol.species) {
				C = this.Get(C, Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = Object.getOwnPropertyDescriptor(O, P);
		var extensible = oldDesc || (typeof Object.isExtensible !== 'function' || Object.isExtensible(O));
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		var newDesc = {
			configurable: true,
			enumerable: true,
			value: V,
			writable: true
		};
		Object.defineProperty(O, P, newDesc);
		return true;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new TypeError('unable to create data property');
		}
		return success;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new TypeError('Assertion failed: Type(S) is not String');
		}
		if (!this.IsInteger(index)) {
			throw new TypeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (index < 0 || index > MAX_SAFE_INTEGER) {
			throw new RangeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(unicode) is not Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}
		var first = S.charCodeAt(index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}
		var second = S.charCodeAt(index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}
		return index + 2;
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(1093);
var isCallable = __webpack_require__(1087);
var isDate = __webpack_require__(1126);
var isSymbol = __webpack_require__(1127);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(1094);
var $isFinite = __webpack_require__(1095);

var sign = __webpack_require__(1097);
var mod = __webpack_require__(1098);

var IsCallable = __webpack_require__(1087);
var toPrimitive = __webpack_require__(1130);

var has = __webpack_require__(414);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return !!value;
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
		if (this.Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};
		// jscs:disable
		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}
		// jscs:enable
		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.1
	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.2
	IsDataDescriptor: function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.3
	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
			return true;
		}

		return false;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.4
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsDataDescriptor(Desc)) {
			return {
				value: Desc['[[Value]]'],
				writable: !!Desc['[[Writable]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else if (this.IsAccessorDescriptor(Desc)) {
			return {
				get: Desc['[[Get]]'],
				set: Desc['[[Set]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else {
			throw new TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
		}
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.5
	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
		if (this.Type(Obj) !== 'Object') {
			throw new TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (has(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
		}
		if (has(Obj, 'configurable')) {
			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
		}
		if (has(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has(Obj, 'writable')) {
			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
		}
		if (has(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
				throw new TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
				throw new TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
			throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	}
};

module.exports = ES5;


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(1093);

var isCallable = __webpack_require__(1087);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(414);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(1099);
var define = __webpack_require__(396);

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(1102);
var define = __webpack_require__(396);

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return evalExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return splitAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return scrollMonitorEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mapTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterASTForDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findWrapTargets; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _scrollMonitorEvents;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var values = __webpack_require__(1100);
var entries = __webpack_require__(1090);

var evalExpression = function evalExpression(acc, expr, key, context) {
  var e = void 0;
  if (key && (key.match(/on[A-Z].*/) || key.match(/handle[A-Z].*/))) {
    var setState = setState;
    e = '\n      (() => {\n          ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key);
    }).map(function (key) {
      if (key === 'refs') {
        // delete each ref's domNode property
        // because it can't be serialized
        values(acc[key]).forEach(function (v) {
          delete v.domNode;
        });
        // add `refs` const object graph to function scope
        return 'var ' + key + ' = JSON.parse(\'' + JSON.stringify(acc[key]) + '\')';
      }
      return 'var ' + key + ' = ' + JSON.stringify(acc[key]) + ';';
    }).join('\n') + '\n          ' + expr + ';\n          context.update({ ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key) && key !== 'refs';
    }).map(function (key) {
      return key + ': ' + key;
    }).join(', ') + '});\n      })()\n    ';

    return function () {
      eval(e);
    }.bind(context || {});
  } else {
    e = '\n      (() => {\n        ' + Object.keys(acc).filter(function (key) {
      return expr.includes(key);
    }).map(function (key) {
      if (key === 'refs') {
        // delete each ref's domNode property
        // because it can't be serialized
        values(acc[key]).forEach(function (v) {
          delete v.domNode;
        });
        // add `refs` const object graph to function scope
        return 'var ' + key + ' = JSON.parse(\'' + JSON.stringify(acc[key]) + '\')';
      }
      return 'var ' + key + ' = ' + JSON.stringify(acc[key]) + ';';
    }).join('\n') + '\n        return ' + expr + ';\n      })()\n    ';
  }

  try {
    return eval(e);
  } catch (err) {}
};

var getVars = function getVars(arr) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var evalContext = arguments[2];

  var pluck = function pluck(acc, val) {
    var variableType = val[0],
        _val$ = val[1],
        attrs = _val$ === undefined ? [] : _val$;
    var nameArr = attrs[0],
        valueArr = attrs[1];

    if (!nameArr || !valueArr) return acc;

    var _nameArr$ = nameArr[1],
        nameValue = _nameArr$[1];
    var _valueArr$ = valueArr[1],
        valueType = _valueArr$[0],
        valueValue = _valueArr$[1];


    switch (valueType) {
      case 'value':
        acc[nameValue] = valueValue;
        break;
      case 'variable':
        if (context.hasOwnProperty(valueValue)) {
          acc[nameValue] = context[valueValue];
        } else {
          acc[nameValue] = evalExpression(context, expr);
        }
        break;
      case 'expression':
        var expr = valueValue;
        if (variableType === 'var') {
          acc[nameValue] = evalExpression(context, expr);
        } else {
          acc[nameValue] = {
            value: evalExpression(context, expr),
            update: function update(newState, oldState) {
              return evalExpression(Object.assign({}, oldState, newState), expr);
            }
          };
        }
    }

    return acc;
  };

  return arr.reduce(pluck, {});
};

var getData = function getData(arr) {
  var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var pluck = function pluck(acc, val) {
    var attrs = val[1];
    var nameArr = attrs[0];
    var _nameArr$2 = nameArr[1],
        nameValue = _nameArr$2[1];


    acc[nameValue] = datasets[nameValue];

    return acc;
  };

  return arr.reduce(pluck, {});
};

var splitAST = function splitAST(ast) {
  var state = {
    vars: [],
    derived: [],
    data: [],
    elements: []
  };

  var handleNode = function handleNode(storeElements) {
    return function (node) {
      var name = node[0],
          props = node[1],
          children = node[2];

      if (name === 'var') {
        state.vars.push(node);
      } else if (state[name]) {
        state[name].push(node);
      } else if (storeElements) {
        state.elements.push(node);
      }
      if (!children || typeof children === 'string') {
        return;
      }
      children.forEach(handleNode(false));
    };
  };

  ast.forEach(handleNode(true));
  return state;
};

var hooks = ['onEnterView', 'onEnterViewFully', 'onExitView', 'onExitViewFully'];

var scrollMonitorEvents = (_scrollMonitorEvents = {
  'onEnterView': 'enterViewport',
  'onExitViewFully': 'fullyEnterViewport',
  'onExitView': 'partiallyExitViewport'
}, _scrollMonitorEvents['onExitViewFully'] = 'exitViewport', _scrollMonitorEvents);

var translate = function translate(arr) {
  var attrConvert = function attrConvert(list) {
    return list.reduce(function (acc, _ref) {
      var name = _ref[0],
          _ref$ = _ref[1],
          type = _ref$[0],
          val = _ref$[1];

      if (type === 'variable') {
        acc.__vars__ = acc.__vars__ || {};
        acc.__vars__[name] = val;
      }
      // each node keeps a list of props that are expressions
      if (type === 'expression') {
        acc.__expr__ = acc.__expr__ || {};
        acc.__expr__[name] = val;
      }
      // flag nodes that define a hook function
      if (hooks.includes(name)) {
        acc.hasHook = true;
      };

      acc[name] = val;
      return acc;
    }, {});
  };

  var tNode = function tNode(node) {
    if (typeof node === 'string') return node;

    if (node.length === 3) {
      var name = node[0],
          attrs = node[1],
          children = node[2];


      return _extends({
        component: name
      }, attrConvert(attrs), {
        children: children.map(tNode)
      });
    }
  };

  return splitAST(arr).elements.map(tNode);
};

var mapTree = function mapTree(tree, mapFn) {
  var filterFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return true;
  };

  var walkFn = function walkFn(acc, node) {
    if (typeof node !== 'string') {
      if (node.children) {
        // translated schema
        node.children = node.children.reduce(walkFn, []);
      } else {
        // compiler AST
        node[2] = node[2].reduce(walkFn, []);
      }
    }

    if (filterFn(node)) acc.push(mapFn(node));
    return acc;
  };

  return tree.reduce(walkFn, []);
};

var filterASTForDocument = function filterASTForDocument(ast) {
  return mapTree(ast, function (n) {
    return n;
  }, function (_ref2) {
    var name = _ref2[0];
    return name !== 'meta';
  });
};

var findWrapTargets = function findWrapTargets(schema, state) {
  var targets = [];
  var stateKeys = Object.keys(state);

  // always return node so we can walk the whole tree
  // but collect and ultimately return just the nodes
  // we are interested in wrapping
  mapTree(schema, function (node) {
    if (typeof node === 'string') return node;

    if (node.hasHook) {
      targets.push(node);
      return node;
    }

    // wrap all custom components
    var startsWith = node.component.charAt(0);
    if (startsWith === startsWith.toUpperCase()) {
      targets.push(node);
      return node;
    }

    // pull off the props we don't need to check

    var component = node.component,
        children = node.children,
        __vars__ = node.__vars__,
        __expr__ = node.__expr__,
        props = _objectWithoutProperties(node, ['component', 'children', '__vars__', '__expr__']);

    var expressions = Object.keys(__expr__ || {});
    var variables = Object.keys(__vars__ || {});

    // iterate over the node's prop values
    entries(props).forEach(function (_ref3) {
      var key = _ref3[0],
          val = _ref3[1];

      // avoid checking more props if we know it's a match
      if (targets.includes(node)) return;

      // Include nodes that reference a variable or expression.
      if (variables.includes(key) || expressions.includes(key)) {
        targets.push(node);
      }
    });

    return node;
  });

  return targets;
};


/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrollparent__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_scrollparent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_scrollparent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrollmonitor__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_scrollmonitor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_scrollmonitor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_schema2element__ = __webpack_require__(1105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_entries__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_values__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(1134);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }










var updatePropsCallbacks = [];
var updateRefsCallbacks = [];
var scrollWatchers = [];
var scrollOffsets = {};
var refCache = {};
var evalContext = {};
var scrollContainer = void 0;

var getRefs = function getRefs() {
  var refs = {};
  if (!scrollContainer) {
    return;
  }

  scrollWatchers.forEach(function (watcher) {
    // left and right props assume no horizontal scrolling
    var watchItem = watcher.watchItem,
        callbacks = watcher.callbacks,
        container = watcher.container,
        recalculateLocation = watcher.recalculateLocation,
        offsets = watcher.offsets,
        watcherProps = _objectWithoutProperties(watcher, ['watchItem', 'callbacks', 'container', 'recalculateLocation', 'offsets']);

    refs[watchItem.dataset.ref] = _extends({}, watcherProps, {
      domNode: watchItem
    });
  });

  return refs;
};

var wrapperKey = 0;

var Wrapper = function (_React$PureComponent) {
  _inherits(Wrapper, _React$PureComponent);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.key = wrapperKey++;
    _this.ref = {};
    _this.onUpdateRefs = _this.onUpdateRefs.bind(_this);
    _this.onUpdateProps = _this.onUpdateProps.bind(_this);

    var vars = __WEBPACK_IMPORTED_MODULE_6_object_values___default()(props.__vars__);
    var exps = __WEBPACK_IMPORTED_MODULE_6_object_values___default()(props.__expr__);

    _this.usesRefs = exps.some(function (v) {
      return v.includes('refs.');
    });

    // listen for props updates IF we care about them
    if (vars.length || exps.length) {
      // called with new doc state
      // when any component calls updateProps()
      updatePropsCallbacks.push(_this.onUpdateProps);
    }

    // listen for ref updates IF we care about them
    if (props.hasHook || _this.usesRefs) {
      updateRefsCallbacks.push(_this.onUpdateRefs);
    }

    _this.state = { hasError: false, error: null };
    return _this;
  }

  Wrapper.prototype.componentDidCatch = function componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error });
  };

  Wrapper.prototype.onUpdateProps = function onUpdateProps(newState, changedKeys) {
    var _props = this.props,
        __vars__ = _props.__vars__,
        __expr__ = _props.__expr__;

    // were there changes to any vars we track?
    // or vars our expressions reference?

    var shouldUpdate = changedKeys.some(function (k) {
      return __WEBPACK_IMPORTED_MODULE_6_object_values___default()(__vars__).includes(k) || __WEBPACK_IMPORTED_MODULE_6_object_values___default()(__expr__).some(function (expr) {
        return expr.includes(k);
      });
    });
    // if nothing we care about changed bail out and don't re-render
    if (!shouldUpdate) return;

    // update this component's state
    var nextState = {};
    // pull in the latest value for any tracked vars
    Object.keys(__vars__).forEach(function (key) {
      nextState[key] = newState[__vars__[key]];
    });
    // re-run this component's expressions using the latest doc state
    Object.keys(__expr__).forEach(function (key) {
      nextState[key] = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* evalExpression */])(newState, __expr__[key], key, evalContext);
    });
    // trigger a re-render of this component
    // and more importantly, its wrapped component
    this.setState(nextState);
  };

  Wrapper.prototype.onUpdateRefs = function onUpdateRefs(newState) {
    var __expr__ = this.props.__expr__;


    if (this.usesRefs) {
      var nextState = { refs: newState.refs };
      __WEBPACK_IMPORTED_MODULE_5_object_entries___default()(__expr__).forEach(function (_ref) {
        var key = _ref[0],
            val = _ref[1];

        if (!key.includes('refs.')) {
          return;
        }
        nextState[key] = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* evalExpression */])(newState, val, key, evalContext);
      });

      // trigger a render with latest state
      this.setState(nextState);
    }
  };

  Wrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    var propsIndex = updatePropsCallbacks.indexOf(this.onUpdateProps);
    if (propsIndex > -1) updatePropsCallbacks.splice(propsIndex, 1);

    var refsIndex = updateRefsCallbacks.indexOf(this.onUpdateRefs);
    if (refsIndex > -1) updateRefsCallbacks.splice(refsIndex, 1);
  };

  Wrapper.prototype.render = function render() {
    var _this2 = this;

    if (this.state.hasError) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { border: 'solid red 1px', padding: 10 } },
        this.state.error.message
      );
    }

    var _state = this.state,
        __expr__ = _state.__expr__,
        __vars__ = _state.__vars__,
        hasError = _state.hasError,
        state = _objectWithoutProperties(_state, ['__expr__', '__vars__', 'hasError']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, function (c, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(c, _extends({ key: _this2.key + '-' + i }, state));
    });
  };

  return Wrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

var getDerivedValues = function getDerivedValues(dVars) {
  var o = {};
  Object.keys(dVars).forEach(function (key) {
    return o[key] = dVars[key].value;
  });
  return o;
};

var IdyllDocument = function (_React$PureComponent2) {
  _inherits(IdyllDocument, _React$PureComponent2);

  function IdyllDocument(props) {
    _classCallCheck(this, IdyllDocument);

    var _this3 = _possibleConstructorReturn(this, _React$PureComponent2.call(this, props));

    _this3.scrollListener = _this3.scrollListener.bind(_this3);
    _this3.initScrollListener = _this3.initScrollListener.bind(_this3);

    var ast = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* filterASTForDocument */])(props.ast);

    var _splitAST = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* splitAST */])(ast),
        vars = _splitAST.vars,
        derived = _splitAST.derived,
        data = _splitAST.data,
        elements = _splitAST.elements;

    var initialState = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* getVars */])(vars), Object(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* getData */])(data, props.datasets));
    var derivedVars = _this3.derivedVars = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* getVars */])(derived, initialState);

    var state = _this3.state = _extends({}, initialState, getDerivedValues(derivedVars));

    _this3.updateState = function (newState) {
      // merge new doc state with old
      var newMergedState = _extends({}, _this3.state, newState);
      // update derived values
      var newDerivedValues = getDerivedValues(Object(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* getVars */])(derived, newMergedState));
      var nextState = _extends({}, newMergedState, newDerivedValues);
      var changedKeys = Object.keys(state).reduce(function (acc, k) {
        if (state[k] !== nextState[k]) acc.push(k);
        return acc;
      }, []);
      // Update doc state reference.
      // We re-use the same object here so that
      // IdyllDocument.state can be accurately checked in tests
      state = Object.assign(state, nextState);
      // pass the new doc state to all listeners aka component wrappers
      updatePropsCallbacks.forEach(function (f) {
        return f(state, changedKeys);
      });
    };

    evalContext.update = _this3.updateState;

    var rjs = new __WEBPACK_IMPORTED_MODULE_4__utils_schema2element__["a" /* default */](_extends({}, props.components, { Wrapper: Wrapper }));
    var schema = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["j" /* translate */])(ast);

    var wrapTargets = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* findWrapTargets */])(schema, _this3.state);

    var refCounter = 0;

    var transformedSchema = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* mapTree */])(schema, function (node) {
      if (typeof node === 'string') return node;

      // transform refs from strings to functions and store them
      if (node.ref || node.hasHook) {
        node.refName = node.ref || node.component + (refCounter++).toString();
        node.ref = function (el) {
          if (!el) return;
          var domNode = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(el);
          domNode.dataset.ref = node.refName;
          scrollOffsets[node.refName] = node.scrollOffset || 0;
          refCache[node.refName] = {
            props: node,
            domNode: domNode
          };
        };
      }

      if (!wrapTargets.includes(node)) return node;

      var component = node.component,
          children = node.children,
          key = node.key,
          _node$__vars__ = node.__vars__,
          __vars__ = _node$__vars__ === undefined ? {} : _node$__vars__,
          _node$__expr__ = node.__expr__,
          __expr__ = _node$__expr__ === undefined ? {} : _node$__expr__,
          props = _objectWithoutProperties(node, ['component', 'children', 'key', '__vars__', '__expr__']);

      // assign the initial values for tracked vars and expressions


      Object.keys(props).forEach(function (k) {
        if (__vars__[k]) {
          node[k] = state[__vars__[k]];
        }
        if (__expr__[k] && !__expr__[k].includes('refs.')) {
          if (__WEBPACK_IMPORTED_MODULE_7__utils__["f" /* hooks */].indexOf(k) > -1) {
            return;
          }
          node[k] = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* evalExpression */])(state, __expr__[k], k, evalContext);
        }
      });

      // define the function wrapped components will call via this.props.updateProps
      node.updateProps = function (newProps) {
        // init new doc state object
        var newState = {};
        // iterate over passed in updates
        Object.keys(newProps).forEach(function (k) {
          // if a tracked var was updated get its new value
          if (__vars__[k]) {
            newState[__vars__[k]] = newProps[k];
          }
        });
        _this3.updateState(newState);
      };

      return {
        component: Wrapper,
        __vars__: __vars__,
        __expr__: __expr__,
        hasHook: node.hasHook,
        refName: node.refName,
        children: [node]
      };
    });

    _this3.kids = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'idyll-root', ref: _this3.initScrollListener },
      rjs.parseSchema(transformedSchema)
    );
    return _this3;
  }

  IdyllDocument.prototype.scrollListener = function scrollListener() {
    var _this4 = this;

    var refs = getRefs();
    updateRefsCallbacks.forEach(function (f) {
      return f(_extends({}, _this4.state, { refs: refs }));
    });
  };

  IdyllDocument.prototype.initScrollListener = function initScrollListener(el) {
    var _this5 = this;

    if (!el) return;

    var scroller = __WEBPACK_IMPORTED_MODULE_2_scrollparent___default()(el);
    if (scroller === document.documentElement) {
      scroller = document.body;
    }
    scrollContainer = __WEBPACK_IMPORTED_MODULE_3_scrollmonitor___default.a.createContainer(scroller);
    Object.keys(refCache).forEach(function (key) {
      var _refCache$key = refCache[key],
          props = _refCache$key.props,
          domNode = _refCache$key.domNode;

      var watcher = scrollContainer.create(domNode, scrollOffsets[key]);
      __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* hooks */].forEach(function (hook) {
        if (props[hook]) {
          watcher[__WEBPACK_IMPORTED_MODULE_7__utils__["h" /* scrollMonitorEvents */][hook]](function () {
            Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* evalExpression */])(_this5.state, props[hook], hook, evalContext)();
          });
        }
      });
      scrollWatchers.push(watcher);
    });
    if (scroller === document.body) {
      scroller = window;
    }
    scroller.addEventListener('scroll', this.scrollListener);
  };

  IdyllDocument.prototype.updateDerivedVars = function updateDerivedVars(newState) {
    var _this6 = this;

    Object.keys(this.derivedVars).forEach(function (dv) {
      _this6.derivedVars[dv].value = _this6.derivedVars[dv].update(newState, _this6.state);
    });
  };

  IdyllDocument.prototype.getDerivedVars = function getDerivedVars() {
    var _this7 = this;

    var dvs = {};
    Object.keys(this.derivedVars).forEach(function (dv) {
      dvs[dv] = _this7.derivedVars[dv].value;
    });
    return dvs;
  };

  IdyllDocument.prototype.componentDidMount = function componentDidMount() {
    var _this8 = this;

    var refs = getRefs();
    updateRefsCallbacks.forEach(function (f) {
      return f(_extends({}, _this8.state, { refs: refs }));
    });
  };

  IdyllDocument.prototype.render = function render() {
    return this.kids;
  };

  return IdyllDocument;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (IdyllDocument);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2lkeWxsX2RvY3VtZW50X2MwNTUxZjQwZTA5NDQ4ZDYyZDkwODc3NzlhNDAzYWFiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vLWNhc2Uvbm8tY2FzZS5qcz9iZDhjZDhiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cHBlci1jYXNlL3VwcGVyLWNhc2UuanM/YmQ4Y2Q4YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9sb3dlci1jYXNlLmpzP2JkOGNkOGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VwcGVyLWNhc2UtZmlyc3QvdXBwZXItY2FzZS1maXJzdC5qcz9iZDhjZDhiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1jYWxsYWJsZS9pbmRleC5qcz8wNTMyMjkxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jYW1lbC1jYXNlL2NhbWVsLWNhc2UuanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25ha2UtY2FzZS9zbmFrZS1jYXNlLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL2luZGV4LmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL2ltcGxlbWVudGF0aW9uLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2VzNy5qcz8wNTMyMjkxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy10by1wcmltaXRpdmUvaGVscGVycy9pc1ByaW1pdGl2ZS5qcz8wNTMyMjkxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvaXNGaW5pdGUuanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL3BvbHlmaWxsLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvaW5kZXguanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LnZhbHVlcy9pbXBsZW1lbnRhdGlvbi5qcz8wNTMyMjkxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QudmFsdWVzL3BvbHlmaWxsLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHBhcmVudC9zY3JvbGxwYXJlbnQuanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2Nyb2xsbW9uaXRvci9zY3JvbGxNb25pdG9yLmpzPzA1MzIyOTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lkeWxsLWRvY3VtZW50L2Rpc3QvZXMvdXRpbHMvc2NoZW1hMmVsZW1lbnQuanM/MDUzMjI5MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tLWZhY3Rvcmllcy9pbmRleC5qcz8wNTMyMjkxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFuZ2UtY2FzZS9jaGFuZ2UtY2FzZS5qcz9hNGQyMmFhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uby1jYXNlL3ZlbmRvci9ub24td29yZC1yZWdleHAuanM/YTRkMjJhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm8tY2FzZS92ZW5kb3IvY2FtZWwtY2FzZS1yZWdleHAuanM/YTRkMjJhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm8tY2FzZS92ZW5kb3IvY2FtZWwtY2FzZS11cHBlci1yZWdleHAuanM/YTRkMjJhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG90LWNhc2UvZG90LWNhc2UuanM/YTRkMjJhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dhcC1jYXNlL3N3YXAtY2FzZS5qcz9hNGQyMmFhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWNhc2UvcGF0aC1jYXNlLmpzP2E0ZDIyYWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpdGxlLWNhc2UvdGl0bGUtY2FzZS5qcz9hNGQyMmFhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJhbS1jYXNlL3BhcmFtLWNhc2UuanM/YTRkMjJhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVhZGVyLWNhc2UvaGVhZGVyLWNhc2UuanM/NmUyYjJhMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFzY2FsLWNhc2UvcGFzY2FsLWNhc2UuanM/NmUyYjJhMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc3RhbnQtY2FzZS9jb25zdGFudC1jYXNlLmpzP2VlNWZkNTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlbnRlbmNlLWNhc2Uvc2VudGVuY2UtY2FzZS5qcz9lZTVmZDU0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy11cHBlci1jYXNlL2lzLXVwcGVyLWNhc2UuanM/ZjRlZjk1NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtbG93ZXItY2FzZS9pcy1sb3dlci1jYXNlLmpzP2Y0ZWY5NTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvd2VyLWNhc2UtZmlyc3QvbG93ZXItY2FzZS1maXJzdC5qcz81YTQ0NzVkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9lczIwMTYuanM/NWE0NDc1ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvZXMyMDE1LmpzPzVhNDQ3NWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLXRvLXByaW1pdGl2ZS9lczYuanM/NWE0NDc1ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanM/NWE0NDc1ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtc3ltYm9sL2luZGV4LmpzPzRlOTYzODciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanM/NGU5NjM4NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvZXM1LmpzPzRlOTYzODciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzLXRvLXByaW1pdGl2ZS9lczUuanM/NGU5NjM4NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtcmVnZXgvaW5kZXguanM/NGU5NjM4NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LmVudHJpZXMvc2hpbS5qcz80ZTk2Mzg3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QudmFsdWVzL3NoaW0uanM/NGU5NjM4NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWR5bGwtZG9jdW1lbnQvZGlzdC9lcy91dGlscy9pbmRleC5qcz80ZTk2Mzg3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZHlsbC1kb2N1bWVudC9kaXN0L2VzL2luZGV4LmpzPzRlOTYzODciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGxvd2VyQ2FzZSA9IHJlcXVpcmUoJ2xvd2VyLWNhc2UnKVxuXG52YXIgTk9OX1dPUkRfUkVHRVhQID0gcmVxdWlyZSgnLi92ZW5kb3Ivbm9uLXdvcmQtcmVnZXhwJylcbnZhciBDQU1FTF9DQVNFX1JFR0VYUCA9IHJlcXVpcmUoJy4vdmVuZG9yL2NhbWVsLWNhc2UtcmVnZXhwJylcbnZhciBDQU1FTF9DQVNFX1VQUEVSX1JFR0VYUCA9IHJlcXVpcmUoJy4vdmVuZG9yL2NhbWVsLWNhc2UtdXBwZXItcmVnZXhwJylcblxuLyoqXG4gKiBTZW50ZW5jZSBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsZVxuICogQHBhcmFtICB7c3RyaW5nfSByZXBsYWNlbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIGxvY2FsZSwgcmVwbGFjZW1lbnQpIHtcbiAgaWYgKHN0ciA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICByZXBsYWNlbWVudCA9IHR5cGVvZiByZXBsYWNlbWVudCAhPT0gJ3N0cmluZycgPyAnICcgOiByZXBsYWNlbWVudFxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UgKG1hdGNoLCBpbmRleCwgdmFsdWUpIHtcbiAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09ICh2YWx1ZS5sZW5ndGggLSBtYXRjaC5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHN0ciA9IFN0cmluZyhzdHIpXG4gICAgLy8gU3VwcG9ydCBjYW1lbCBjYXNlIChcImNhbWVsQ2FzZVwiIC0+IFwiY2FtZWwgQ2FzZVwiKS5cbiAgICAucmVwbGFjZShDQU1FTF9DQVNFX1JFR0VYUCwgJyQxICQyJylcbiAgICAvLyBTdXBwb3J0IG9kZCBjYW1lbCBjYXNlIChcIkNBTUVMQ2FzZVwiIC0+IFwiQ0FNRUwgQ2FzZVwiKS5cbiAgICAucmVwbGFjZShDQU1FTF9DQVNFX1VQUEVSX1JFR0VYUCwgJyQxICQyJylcbiAgICAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMgYW5kIHJlcGxhY2Ugd2l0aCBhIHNpbmdsZSBzcGFjZS5cbiAgICAucmVwbGFjZShOT05fV09SRF9SRUdFWFAsIHJlcGxhY2UpXG5cbiAgLy8gTG93ZXIgY2FzZSB0aGUgZW50aXJlIHN0cmluZy5cbiAgcmV0dXJuIGxvd2VyQ2FzZShzdHIsIGxvY2FsZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vLWNhc2Uvbm8tY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKipcbiAqIFNwZWNpYWwgbGFuZ3VhZ2Utc3BlY2lmaWMgb3ZlcnJpZGVzLlxuICpcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBMQU5HVUFHRVMgPSB7XG4gIHRyOiB7XG4gICAgcmVnZXhwOiAvW1xcdTAwNjldL2csXG4gICAgbWFwOiB7XG4gICAgICAnXFx1MDA2OSc6ICdcXHUwMTMwJ1xuICAgIH1cbiAgfSxcbiAgYXo6IHtcbiAgICByZWdleHA6IC9bXFx1MDA2OV0vZyxcbiAgICBtYXA6IHtcbiAgICAgICdcXHUwMDY5JzogJ1xcdTAxMzAnXG4gICAgfVxuICB9LFxuICBsdDoge1xuICAgIHJlZ2V4cDogL1tcXHUwMDY5XFx1MDA2QVxcdTAxMkZdXFx1MDMwN3xcXHUwMDY5XFx1MDMwN1tcXHUwMzAwXFx1MDMwMVxcdTAzMDNdL2csXG4gICAgbWFwOiB7XG4gICAgICAnXFx1MDA2OVxcdTAzMDcnOiAnXFx1MDA0OScsXG4gICAgICAnXFx1MDA2QVxcdTAzMDcnOiAnXFx1MDA0QScsXG4gICAgICAnXFx1MDEyRlxcdTAzMDcnOiAnXFx1MDEyRScsXG4gICAgICAnXFx1MDA2OVxcdTAzMDdcXHUwMzAwJzogJ1xcdTAwQ0MnLFxuICAgICAgJ1xcdTAwNjlcXHUwMzA3XFx1MDMwMSc6ICdcXHUwMENEJyxcbiAgICAgICdcXHUwMDY5XFx1MDMwN1xcdTAzMDMnOiAnXFx1MDEyOCdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBVcHBlciBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgbG9jYWxlKSB7XG4gIHZhciBsYW5nID0gTEFOR1VBR0VTW2xvY2FsZV1cblxuICBzdHIgPSBzdHIgPT0gbnVsbCA/ICcnIDogU3RyaW5nKHN0cilcblxuICBpZiAobGFuZykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGxhbmcucmVnZXhwLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gbGFuZy5tYXBbbV0gfSlcbiAgfVxuXG4gIHJldHVybiBzdHIudG9VcHBlckNhc2UoKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXBwZXItY2FzZS91cHBlci1jYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8qKlxuICogU3BlY2lhbCBsYW5ndWFnZS1zcGVjaWZpYyBvdmVycmlkZXMuXG4gKlxuICogU291cmNlOiBmdHA6Ly9mdHAudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvdWNkL1NwZWNpYWxDYXNpbmcudHh0XG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xudmFyIExBTkdVQUdFUyA9IHtcbiAgdHI6IHtcbiAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICBtYXA6IHtcbiAgICAgICdcXHUwMTMwJzogJ1xcdTAwNjknLFxuICAgICAgJ1xcdTAwNDknOiAnXFx1MDEzMScsXG4gICAgICAnXFx1MDA0OVxcdTAzMDcnOiAnXFx1MDA2OSdcbiAgICB9XG4gIH0sXG4gIGF6OiB7XG4gICAgcmVnZXhwOiAvW1xcdTAxMzBdL2csXG4gICAgbWFwOiB7XG4gICAgICAnXFx1MDEzMCc6ICdcXHUwMDY5JyxcbiAgICAgICdcXHUwMDQ5JzogJ1xcdTAxMzEnLFxuICAgICAgJ1xcdTAwNDlcXHUwMzA3JzogJ1xcdTAwNjknXG4gICAgfVxuICB9LFxuICBsdDoge1xuICAgIHJlZ2V4cDogL1tcXHUwMDQ5XFx1MDA0QVxcdTAxMkVcXHUwMENDXFx1MDBDRFxcdTAxMjhdL2csXG4gICAgbWFwOiB7XG4gICAgICAnXFx1MDA0OSc6ICdcXHUwMDY5XFx1MDMwNycsXG4gICAgICAnXFx1MDA0QSc6ICdcXHUwMDZBXFx1MDMwNycsXG4gICAgICAnXFx1MDEyRSc6ICdcXHUwMTJGXFx1MDMwNycsXG4gICAgICAnXFx1MDBDQyc6ICdcXHUwMDY5XFx1MDMwN1xcdTAzMDAnLFxuICAgICAgJ1xcdTAwQ0QnOiAnXFx1MDA2OVxcdTAzMDdcXHUwMzAxJyxcbiAgICAgICdcXHUwMTI4JzogJ1xcdTAwNjlcXHUwMzA3XFx1MDMwMydcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBMb3dlcmNhc2UgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBsb2NhbGUpIHtcbiAgdmFyIGxhbmcgPSBMQU5HVUFHRVNbbG9jYWxlXVxuXG4gIHN0ciA9IHN0ciA9PSBudWxsID8gJycgOiBTdHJpbmcoc3RyKVxuXG4gIGlmIChsYW5nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXSB9KVxuICB9XG5cbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2xvd2VyLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwODVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIHVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxuXG4vKipcbiAqIFVwcGVyIGNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIGxvY2FsZSkge1xuICBpZiAoc3RyID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHN0ciA9IFN0cmluZyhzdHIpXG5cbiAgcmV0dXJuIHVwcGVyQ2FzZShzdHIuY2hhckF0KDApLCBsb2NhbGUpICsgc3RyLnN1YnN0cigxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXBwZXItY2FzZS1maXJzdC91cHBlci1jYXNlLWZpcnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzLWNhbGxhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciB1cHBlckNhc2UgPSByZXF1aXJlKCd1cHBlci1jYXNlJylcbnZhciBub0Nhc2UgPSByZXF1aXJlKCduby1jYXNlJylcblxuLyoqXG4gKiBDYW1lbCBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSAge3N0cmluZ30gW2xvY2FsZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGxvY2FsZSwgbWVyZ2VOdW1iZXJzKSB7XG4gIHZhciByZXN1bHQgPSBub0Nhc2UodmFsdWUsIGxvY2FsZSlcblxuICAvLyBSZXBsYWNlIHBlcmlvZHMgYmV0d2VlbiBudW1lcmljIGVudGl0aWVzIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgaWYgKCFtZXJnZU51bWJlcnMpIHtcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvICg/PVxcZCkvZywgJ18nKVxuICB9XG5cbiAgLy8gUmVwbGFjZSBzcGFjZXMgYmV0d2VlbiB3b3JkcyB3aXRoIGFuIHVwcGVyIGNhc2VkIGNoYXJhY3Rlci5cbiAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC8gKC4pL2csIGZ1bmN0aW9uIChtLCAkMSkge1xuICAgIHJldHVybiB1cHBlckNhc2UoJDEsIGxvY2FsZSlcbiAgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NhbWVsLWNhc2UvY2FtZWwtY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgbm9DYXNlID0gcmVxdWlyZSgnbm8tY2FzZScpXG5cbi8qKlxuICogU25ha2UgY2FzZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5vQ2FzZSh2YWx1ZSwgbG9jYWxlLCAnXycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL3NuYWtlLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwODlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVTID0gcmVxdWlyZSgnZXMtYWJzdHJhY3QvZXM3Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBpc0VudW1lcmFibGUgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW50cmllcyhPKSB7XG5cdHZhciBvYmogPSBFUy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKE8pO1xuXHR2YXIgZW50cnlzID0gW107XG5cdGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0XHRpZiAoaGFzKG9iaiwga2V5KSAmJiBpc0VudW1lcmFibGUob2JqLCBrZXkpKSB7XG5cdFx0XHRlbnRyeXMucHVzaChba2V5LCBvYmpba2V5XV0pO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZW50cnlzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC5lbnRyaWVzL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2VzMjAxNicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvZXM3LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDEwOTNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gaXNOYU4oYSkge1xuXHRyZXR1cm4gYSAhPT0gYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciAkaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgIT09IGE7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzRmluaXRlIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgISRpc05hTih4KSAmJiB4ICE9PSBJbmZpbml0eSAmJiB4ICE9PSAtSW5maW5pdHk7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYgKE9iamVjdC5hc3NpZ24pIHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSk7XG5cdH1cblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChoYXMuY2FsbChzb3VyY2UsIGtleSkpIHtcblx0XHRcdHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEwOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbW9kKG51bWJlciwgbW9kdWxvKSB7XG5cdHZhciByZW1haW4gPSBudW1iZXIgJSBtb2R1bG87XG5cdHJldHVybiBNYXRoLmZsb29yKHJlbWFpbiA+PSAwID8gcmVtYWluIDogcmVtYWluICsgbW9kdWxvKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0cmV0dXJuIHR5cGVvZiBPYmplY3QuZW50cmllcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5lbnRyaWVzIDogaW1wbGVtZW50YXRpb247XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmVudHJpZXMvcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwOTlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExMDBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczcnKTtcbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIGlzRW51bWVyYWJsZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB2YWx1ZXMoTykge1xuXHR2YXIgb2JqID0gRVMuUmVxdWlyZU9iamVjdENvZXJjaWJsZShPKTtcblx0dmFyIHZhbHMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIG9iaikge1xuXHRcdGlmIChoYXMob2JqLCBrZXkpICYmIGlzRW51bWVyYWJsZShvYmosIGtleSkpIHtcblx0XHRcdHZhbHMucHVzaChvYmpba2V5XSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWxzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC52YWx1ZXMvaW1wbGVtZW50YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDExMDFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiB0eXBlb2YgT2JqZWN0LnZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC52YWx1ZXMgOiBpbXBsZW1lbnRhdGlvbjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QudmFsdWVzL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcm9sbHBhcmVudCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcblxuICB2YXIgcGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwcykge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHsgcmV0dXJuIHBzOyB9XG5cbiAgICByZXR1cm4gcGFyZW50cyhub2RlLnBhcmVudE5vZGUsIHBzLmNvbmNhdChbbm9kZV0pKTtcbiAgfTtcblxuICB2YXIgc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgcHJvcCkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH07XG5cbiAgdmFyIG92ZXJmbG93ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gc3R5bGUobm9kZSwgXCJvdmVyZmxvd1wiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteVwiKSArIHN0eWxlKG5vZGUsIFwib3ZlcmZsb3cteFwiKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgIHJldHVybiByZWdleC50ZXN0KG92ZXJmbG93KG5vZGUpKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHZhciBwcyA9IHBhcmVudHMobm9kZS5wYXJlbnROb2RlLCBbXSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2Nyb2xsKHBzW2ldKSkge1xuICAgICAgICByZXR1cm4gcHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBzY3JvbGxQYXJlbnQ7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zY3JvbGxwYXJlbnQvc2Nyb2xscGFyZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwic2Nyb2xsTW9uaXRvclwiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc2Nyb2xsTW9uaXRvcj1lKCk6dC5zY3JvbGxNb25pdG9yPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG8pe2lmKGlbb10pcmV0dXJuIGlbb10uZXhwb3J0czt2YXIgcz1pW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gdFtvXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyxlKSxzLmxvYWRlZD0hMCxzLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIGUubT10LGUuYz1pLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89aSgxKSxzPW8uaXNJbkJyb3dzZXIsbj1pKDIpLHI9bmV3IG4ocz9kb2N1bWVudC5ib2R5Om51bGwpO3Iuc2V0U3RhdGVGcm9tRE9NKG51bGwpLHIubGlzdGVuVG9ET00oKSxzJiYod2luZG93LnNjcm9sbE1vbml0b3I9ciksdC5leHBvcnRzPXJ9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5WSVNJQklMSVRZQ0hBTkdFPVwidmlzaWJpbGl0eUNoYW5nZVwiLGUuRU5URVJWSUVXUE9SVD1cImVudGVyVmlld3BvcnRcIixlLkZVTExZRU5URVJWSUVXUE9SVD1cImZ1bGx5RW50ZXJWaWV3cG9ydFwiLGUuRVhJVFZJRVdQT1JUPVwiZXhpdFZpZXdwb3J0XCIsZS5QQVJUSUFMTFlFWElUVklFV1BPUlQ9XCJwYXJ0aWFsbHlFeGl0Vmlld3BvcnRcIixlLkxPQ0FUSU9OQ0hBTkdFPVwibG9jYXRpb25DaGFuZ2VcIixlLlNUQVRFQ0hBTkdFPVwic3RhdGVDaGFuZ2VcIixlLmV2ZW50VHlwZXM9W2UuVklTSUJJTElUWUNIQU5HRSxlLkVOVEVSVklFV1BPUlQsZS5GVUxMWUVOVEVSVklFV1BPUlQsZS5FWElUVklFV1BPUlQsZS5QQVJUSUFMTFlFWElUVklFV1BPUlQsZS5MT0NBVElPTkNIQU5HRSxlLlNUQVRFQ0hBTkdFXSxlLmlzT25TZXJ2ZXI9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdyxlLmlzSW5Ccm93c2VyPSFlLmlzT25TZXJ2ZXIsZS5kZWZhdWx0T2Zmc2V0cz17dG9wOjAsYm90dG9tOjB9fSxmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gYz8wOnQ9PT1kb2N1bWVudC5ib2R5P3dpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDp0LmNsaWVudEhlaWdodH1mdW5jdGlvbiBuKHQpe3JldHVybiBjPzA6dD09PWRvY3VtZW50LmJvZHk/TWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpOnQuc2Nyb2xsSGVpZ2h0fWZ1bmN0aW9uIHIodCl7cmV0dXJuIGM/MDp0PT09ZG9jdW1lbnQuYm9keT93aW5kb3cucGFnZVlPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6dC5zY3JvbGxUb3B9dmFyIGg9aSgxKSxjPWguaXNPblNlcnZlcixhPWguaXNJbkJyb3dzZXIsbD1oLmV2ZW50VHlwZXMscD1pKDMpLHU9ITE7aWYoYSl0cnl7dmFyIHc9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXt1PSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLG51bGwsdyl9Y2F0Y2godCl7fXZhciBkPSEhdSYme2NhcHR1cmU6ITEscGFzc2l2ZTohMH0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxpKXtmdW5jdGlvbiBoKCl7aWYoYS52aWV3cG9ydFRvcD1yKGUpLGEudmlld3BvcnRCb3R0b209YS52aWV3cG9ydFRvcCthLnZpZXdwb3J0SGVpZ2h0LGEuZG9jdW1lbnRIZWlnaHQ9bihlKSxhLmRvY3VtZW50SGVpZ2h0IT09cCl7Zm9yKHU9YS53YXRjaGVycy5sZW5ndGg7dS0tOylhLndhdGNoZXJzW3VdLnJlY2FsY3VsYXRlTG9jYXRpb24oKTtwPWEuZG9jdW1lbnRIZWlnaHR9fWZ1bmN0aW9uIGMoKXtmb3Iodz1hLndhdGNoZXJzLmxlbmd0aDt3LS07KWEud2F0Y2hlcnNbd10udXBkYXRlKCk7Zm9yKHc9YS53YXRjaGVycy5sZW5ndGg7dy0tOylhLndhdGNoZXJzW3ddLnRyaWdnZXJDYWxsYmFja3MoKX1vKHRoaXMsdCk7dmFyIGE9dGhpczt0aGlzLml0ZW09ZSx0aGlzLndhdGNoZXJzPVtdLHRoaXMudmlld3BvcnRUb3A9bnVsbCx0aGlzLnZpZXdwb3J0Qm90dG9tPW51bGwsdGhpcy5kb2N1bWVudEhlaWdodD1uKGUpLHRoaXMudmlld3BvcnRIZWlnaHQ9cyhlKSx0aGlzLkRPTUxpc3RlbmVyPWZ1bmN0aW9uKCl7dC5wcm90b3R5cGUuRE9NTGlzdGVuZXIuYXBwbHkoYSxhcmd1bWVudHMpfSx0aGlzLmV2ZW50VHlwZXM9bCxpJiYodGhpcy5jb250YWluZXJXYXRjaGVyPWkuY3JlYXRlKGUpKTt2YXIgcCx1LHc7dGhpcy51cGRhdGU9ZnVuY3Rpb24oKXtoKCksYygpfSx0aGlzLnJlY2FsY3VsYXRlTG9jYXRpb25zPWZ1bmN0aW9uKCl7dGhpcy5kb2N1bWVudEhlaWdodD0wLHRoaXMudXBkYXRlKCl9fXJldHVybiB0LnByb3RvdHlwZS5saXN0ZW5Ub0RPTT1mdW5jdGlvbigpe2EmJih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj8odGhpcy5pdGVtPT09ZG9jdW1lbnQuYm9keT93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuRE9NTGlzdGVuZXIsZCk6dGhpcy5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLkRPTUxpc3RlbmVyLGQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5ET01MaXN0ZW5lcikpOih0aGlzLml0ZW09PT1kb2N1bWVudC5ib2R5P3dpbmRvdy5hdHRhY2hFdmVudChcIm9uc2Nyb2xsXCIsdGhpcy5ET01MaXN0ZW5lcik6dGhpcy5pdGVtLmF0dGFjaEV2ZW50KFwib25zY3JvbGxcIix0aGlzLkRPTUxpc3RlbmVyKSx3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLHRoaXMuRE9NTGlzdGVuZXIpKSx0aGlzLmRlc3Ryb3k9ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcj8odGhpcy5pdGVtPT09ZG9jdW1lbnQuYm9keT8od2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLkRPTUxpc3RlbmVyLGQpLHRoaXMuY29udGFpbmVyV2F0Y2hlci5kZXN0cm95KCkpOnRoaXMuaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5ET01MaXN0ZW5lcixkKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuRE9NTGlzdGVuZXIpKToodGhpcy5pdGVtPT09ZG9jdW1lbnQuYm9keT8od2luZG93LmRldGFjaEV2ZW50KFwib25zY3JvbGxcIix0aGlzLkRPTUxpc3RlbmVyKSx0aGlzLmNvbnRhaW5lcldhdGNoZXIuZGVzdHJveSgpKTp0aGlzLml0ZW0uZGV0YWNoRXZlbnQoXCJvbnNjcm9sbFwiLHRoaXMuRE9NTGlzdGVuZXIpLHdpbmRvdy5kZXRhY2hFdmVudChcIm9ucmVzaXplXCIsdGhpcy5ET01MaXN0ZW5lcikpfSl9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt9LHQucHJvdG90eXBlLkRPTUxpc3RlbmVyPWZ1bmN0aW9uKHQpe3RoaXMuc2V0U3RhdGVGcm9tRE9NKHQpfSx0LnByb3RvdHlwZS5zZXRTdGF0ZUZyb21ET009ZnVuY3Rpb24odCl7dmFyIGU9cih0aGlzLml0ZW0pLGk9cyh0aGlzLml0ZW0pLG89bih0aGlzLml0ZW0pO3RoaXMuc2V0U3RhdGUoZSxpLG8sdCl9LHQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKHQsZSxpLG8pe3ZhciBzPWUhPT10aGlzLnZpZXdwb3J0SGVpZ2h0fHxpIT09dGhpcy5jb250ZW50SGVpZ2h0O2lmKHRoaXMubGF0ZXN0RXZlbnQ9byx0aGlzLnZpZXdwb3J0VG9wPXQsdGhpcy52aWV3cG9ydEhlaWdodD1lLHRoaXMudmlld3BvcnRCb3R0b209dCtlLHRoaXMuY29udGVudEhlaWdodD1pLHMpZm9yKHZhciBuPXRoaXMud2F0Y2hlcnMubGVuZ3RoO24tLTspdGhpcy53YXRjaGVyc1tuXS5yZWNhbGN1bGF0ZUxvY2F0aW9uKCk7dGhpcy51cGRhdGVBbmRUcmlnZ2VyV2F0Y2hlcnMobyl9LHQucHJvdG90eXBlLnVwZGF0ZUFuZFRyaWdnZXJXYXRjaGVycz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy53YXRjaGVycy5sZW5ndGg7ZS0tOyl0aGlzLndhdGNoZXJzW2VdLnVwZGF0ZSgpO2ZvcihlPXRoaXMud2F0Y2hlcnMubGVuZ3RoO2UtLTspdGhpcy53YXRjaGVyc1tlXS50cmlnZ2VyQ2FsbGJhY2tzKHQpfSx0LnByb3RvdHlwZS5jcmVhdGVDdXN0b21Db250YWluZXI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHR9LHQucHJvdG90eXBlLmNyZWF0ZUNvbnRhaW5lcj1mdW5jdGlvbihlKXtcInN0cmluZ1wiPT10eXBlb2YgZT9lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk6ZSYmZS5sZW5ndGg+MCYmKGU9ZVswXSk7dmFyIGk9bmV3IHQoZSx0aGlzKTtyZXR1cm4gaS5zZXRTdGF0ZUZyb21ET00oKSxpLmxpc3RlblRvRE9NKCksaX0sdC5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKHQsZSl7XCJzdHJpbmdcIj09dHlwZW9mIHQ/dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnQmJnQubGVuZ3RoPjAmJih0PXRbMF0pO3ZhciBpPW5ldyBwKHRoaXMsdCxlKTtyZXR1cm4gdGhpcy53YXRjaGVycy5wdXNoKGkpLGl9LHQucHJvdG90eXBlLmJlZ2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY3JlYXRlKHQsZSl9LHR9KCk7dC5leHBvcnRzPWZ9LGZ1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQsZSxpKXtmdW5jdGlvbiBvKHQsZSl7aWYoMCE9PXQubGVuZ3RoKWZvcihFPXQubGVuZ3RoO0UtLTspeT10W0VdLHkuY2FsbGJhY2suY2FsbChzLGUscykseS5pc09uZSYmdC5zcGxpY2UoRSwxKX12YXIgcz10aGlzO3RoaXMud2F0Y2hJdGVtPWUsdGhpcy5jb250YWluZXI9dCxpP2k9PT0raT90aGlzLm9mZnNldHM9e3RvcDppLGJvdHRvbTppfTp0aGlzLm9mZnNldHM9e3RvcDppLnRvcHx8dy50b3AsYm90dG9tOmkuYm90dG9tfHx3LmJvdHRvbX06dGhpcy5vZmZzZXRzPXcsdGhpcy5jYWxsYmFja3M9e307Zm9yKHZhciBkPTAsZj11Lmxlbmd0aDtkPGY7ZCsrKXMuY2FsbGJhY2tzW3VbZF1dPVtdO3RoaXMubG9ja2VkPSExO3ZhciBtLHYsYixJLEUseTt0aGlzLnRyaWdnZXJDYWxsYmFja3M9ZnVuY3Rpb24odCl7c3dpdGNoKHRoaXMuaXNJblZpZXdwb3J0JiYhbSYmbyh0aGlzLmNhbGxiYWNrc1tyXSx0KSx0aGlzLmlzRnVsbHlJblZpZXdwb3J0JiYhdiYmbyh0aGlzLmNhbGxiYWNrc1toXSx0KSx0aGlzLmlzQWJvdmVWaWV3cG9ydCE9PWImJnRoaXMuaXNCZWxvd1ZpZXdwb3J0IT09SSYmKG8odGhpcy5jYWxsYmFja3Nbbl0sdCksdnx8dGhpcy5pc0Z1bGx5SW5WaWV3cG9ydHx8KG8odGhpcy5jYWxsYmFja3NbaF0sdCksbyh0aGlzLmNhbGxiYWNrc1thXSx0KSksbXx8dGhpcy5pc0luVmlld3BvcnR8fChvKHRoaXMuY2FsbGJhY2tzW3JdLHQpLG8odGhpcy5jYWxsYmFja3NbY10sdCkpKSwhdGhpcy5pc0Z1bGx5SW5WaWV3cG9ydCYmdiYmbyh0aGlzLmNhbGxiYWNrc1thXSx0KSwhdGhpcy5pc0luVmlld3BvcnQmJm0mJm8odGhpcy5jYWxsYmFja3NbY10sdCksdGhpcy5pc0luVmlld3BvcnQhPT1tJiZvKHRoaXMuY2FsbGJhY2tzW25dLHQpLCEwKXtjYXNlIG0hPT10aGlzLmlzSW5WaWV3cG9ydDpjYXNlIHYhPT10aGlzLmlzRnVsbHlJblZpZXdwb3J0OmNhc2UgYiE9PXRoaXMuaXNBYm92ZVZpZXdwb3J0OmNhc2UgSSE9PXRoaXMuaXNCZWxvd1ZpZXdwb3J0Om8odGhpcy5jYWxsYmFja3NbcF0sdCl9bT10aGlzLmlzSW5WaWV3cG9ydCx2PXRoaXMuaXNGdWxseUluVmlld3BvcnQsYj10aGlzLmlzQWJvdmVWaWV3cG9ydCxJPXRoaXMuaXNCZWxvd1ZpZXdwb3J0fSx0aGlzLnJlY2FsY3VsYXRlTG9jYXRpb249ZnVuY3Rpb24oKXtpZighdGhpcy5sb2NrZWQpe3ZhciB0PXRoaXMudG9wLGU9dGhpcy5ib3R0b207aWYodGhpcy53YXRjaEl0ZW0ubm9kZU5hbWUpe3ZhciBpPXRoaXMud2F0Y2hJdGVtLnN0eWxlLmRpc3BsYXk7XCJub25lXCI9PT1pJiYodGhpcy53YXRjaEl0ZW0uc3R5bGUuZGlzcGxheT1cIlwiKTtmb3IodmFyIHM9MCxuPXRoaXMuY29udGFpbmVyO24uY29udGFpbmVyV2F0Y2hlcjspcys9bi5jb250YWluZXJXYXRjaGVyLnRvcC1uLmNvbnRhaW5lcldhdGNoZXIuY29udGFpbmVyLnZpZXdwb3J0VG9wLG49bi5jb250YWluZXJXYXRjaGVyLmNvbnRhaW5lcjt2YXIgcj10aGlzLndhdGNoSXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTt0aGlzLnRvcD1yLnRvcCt0aGlzLmNvbnRhaW5lci52aWV3cG9ydFRvcC1zLHRoaXMuYm90dG9tPXIuYm90dG9tK3RoaXMuY29udGFpbmVyLnZpZXdwb3J0VG9wLXMsXCJub25lXCI9PT1pJiYodGhpcy53YXRjaEl0ZW0uc3R5bGUuZGlzcGxheT1pKX1lbHNlIHRoaXMud2F0Y2hJdGVtPT09K3RoaXMud2F0Y2hJdGVtP3RoaXMud2F0Y2hJdGVtPjA/dGhpcy50b3A9dGhpcy5ib3R0b209dGhpcy53YXRjaEl0ZW06dGhpcy50b3A9dGhpcy5ib3R0b209dGhpcy5jb250YWluZXIuZG9jdW1lbnRIZWlnaHQtdGhpcy53YXRjaEl0ZW06KHRoaXMudG9wPXRoaXMud2F0Y2hJdGVtLnRvcCx0aGlzLmJvdHRvbT10aGlzLndhdGNoSXRlbS5ib3R0b20pO3RoaXMudG9wLT10aGlzLm9mZnNldHMudG9wLHRoaXMuYm90dG9tKz10aGlzLm9mZnNldHMuYm90dG9tLHRoaXMuaGVpZ2h0PXRoaXMuYm90dG9tLXRoaXMudG9wLHZvaWQgMD09PXQmJnZvaWQgMD09PWV8fHRoaXMudG9wPT09dCYmdGhpcy5ib3R0b209PT1lfHxvKHRoaXMuY2FsbGJhY2tzW2xdLG51bGwpfX0sdGhpcy5yZWNhbGN1bGF0ZUxvY2F0aW9uKCksdGhpcy51cGRhdGUoKSxtPXRoaXMuaXNJblZpZXdwb3J0LHY9dGhpcy5pc0Z1bGx5SW5WaWV3cG9ydCxiPXRoaXMuaXNBYm92ZVZpZXdwb3J0LEk9dGhpcy5pc0JlbG93Vmlld3BvcnR9dmFyIHM9aSgxKSxuPXMuVklTSUJJTElUWUNIQU5HRSxyPXMuRU5URVJWSUVXUE9SVCxoPXMuRlVMTFlFTlRFUlZJRVdQT1JULGM9cy5FWElUVklFV1BPUlQsYT1zLlBBUlRJQUxMWUVYSVRWSUVXUE9SVCxsPXMuTE9DQVRJT05DSEFOR0UscD1zLlNUQVRFQ0hBTkdFLHU9cy5ldmVudFR5cGVzLHc9cy5kZWZhdWx0T2Zmc2V0cztvLnByb3RvdHlwZT17b246ZnVuY3Rpb24odCxlLGkpe3N3aXRjaCghMCl7Y2FzZSB0PT09biYmIXRoaXMuaXNJblZpZXdwb3J0JiZ0aGlzLmlzQWJvdmVWaWV3cG9ydDpjYXNlIHQ9PT1yJiZ0aGlzLmlzSW5WaWV3cG9ydDpjYXNlIHQ9PT1oJiZ0aGlzLmlzRnVsbHlJblZpZXdwb3J0OmNhc2UgdD09PWMmJnRoaXMuaXNBYm92ZVZpZXdwb3J0JiYhdGhpcy5pc0luVmlld3BvcnQ6Y2FzZSB0PT09YSYmdGhpcy5pc0luVmlld3BvcnQmJnRoaXMuaXNBYm92ZVZpZXdwb3J0OmlmKGUuY2FsbCh0aGlzLHRoaXMuY29udGFpbmVyLmxhdGVzdEV2ZW50LHRoaXMpLGkpcmV0dXJufWlmKCF0aGlzLmNhbGxiYWNrc1t0XSl0aHJvdyBuZXcgRXJyb3IoXCJUcmllZCB0byBhZGQgYSBzY3JvbGwgbW9uaXRvciBsaXN0ZW5lciBvZiB0eXBlIFwiK3QrXCIuIFlvdXIgb3B0aW9ucyBhcmU6IFwiK3Uuam9pbihcIiwgXCIpKTt0aGlzLmNhbGxiYWNrc1t0XS5wdXNoKHtjYWxsYmFjazplLGlzT25lOml8fCExfSl9LG9mZjpmdW5jdGlvbih0LGUpe2lmKCF0aGlzLmNhbGxiYWNrc1t0XSl0aHJvdyBuZXcgRXJyb3IoXCJUcmllZCB0byByZW1vdmUgYSBzY3JvbGwgbW9uaXRvciBsaXN0ZW5lciBvZiB0eXBlIFwiK3QrXCIuIFlvdXIgb3B0aW9ucyBhcmU6IFwiK3Uuam9pbihcIiwgXCIpKTtmb3IodmFyIGksbz0wO2k9dGhpcy5jYWxsYmFja3NbdF1bb107bysrKWlmKGkuY2FsbGJhY2s9PT1lKXt0aGlzLmNhbGxiYWNrc1t0XS5zcGxpY2UobywxKTticmVha319LG9uZTpmdW5jdGlvbih0LGUpe3RoaXMub24odCxlLCEwKX0scmVjYWxjdWxhdGVTaXplOmZ1bmN0aW9uKCl7dGhpcy5oZWlnaHQ9dGhpcy53YXRjaEl0ZW0ub2Zmc2V0SGVpZ2h0K3RoaXMub2Zmc2V0cy50b3ArdGhpcy5vZmZzZXRzLmJvdHRvbSx0aGlzLmJvdHRvbT10aGlzLnRvcCt0aGlzLmhlaWdodH0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5pc0Fib3ZlVmlld3BvcnQ9dGhpcy50b3A8dGhpcy5jb250YWluZXIudmlld3BvcnRUb3AsdGhpcy5pc0JlbG93Vmlld3BvcnQ9dGhpcy5ib3R0b20+dGhpcy5jb250YWluZXIudmlld3BvcnRCb3R0b20sdGhpcy5pc0luVmlld3BvcnQ9dGhpcy50b3A8dGhpcy5jb250YWluZXIudmlld3BvcnRCb3R0b20mJnRoaXMuYm90dG9tPnRoaXMuY29udGFpbmVyLnZpZXdwb3J0VG9wLHRoaXMuaXNGdWxseUluVmlld3BvcnQ9dGhpcy50b3A+PXRoaXMuY29udGFpbmVyLnZpZXdwb3J0VG9wJiZ0aGlzLmJvdHRvbTw9dGhpcy5jb250YWluZXIudmlld3BvcnRCb3R0b218fHRoaXMuaXNBYm92ZVZpZXdwb3J0JiZ0aGlzLmlzQmVsb3dWaWV3cG9ydH0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuY29udGFpbmVyLndhdGNoZXJzLmluZGV4T2YodGhpcyksZT10aGlzO3RoaXMuY29udGFpbmVyLndhdGNoZXJzLnNwbGljZSh0LDEpO2Zvcih2YXIgaT0wLG89dS5sZW5ndGg7aTxvO2krKyllLmNhbGxiYWNrc1t1W2ldXS5sZW5ndGg9MH0sbG9jazpmdW5jdGlvbigpe3RoaXMubG9ja2VkPSEwfSx1bmxvY2s6ZnVuY3Rpb24oKXt0aGlzLmxvY2tlZD0hMX19O2Zvcih2YXIgZD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxpKXt0aGlzLm9uLmNhbGwodGhpcyx0LGUsaSl9fSxmPTAsbT11Lmxlbmd0aDtmPG07ZisrKXt2YXIgdj11W2ZdO28ucHJvdG90eXBlW3ZdPWQodil9dC5leHBvcnRzPW99XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcm9sbE1vbml0b3IuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2Nyb2xsbW9uaXRvci9zY3JvbGxNb25pdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBET00gZnJvbSAncmVhY3QtZG9tLWZhY3Rvcmllcyc7XG5pbXBvcnQgeyBwYXJhbUNhc2UsIHBhc2NhbENhc2UgfSBmcm9tICdjaGFuZ2UtY2FzZSc7XG5cbnZhciBfY29tcG9uZW50TWFwID0gbmV3IFdlYWtNYXAoKTtcblxudmFyIFJlYWN0SnNvblNjaGVtYSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVhY3RKc29uU2NoZW1hKGNvbXBvbmVudE1hcCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdEpzb25TY2hlbWEpO1xuXG4gICAgaWYgKGNvbXBvbmVudE1hcCkgdGhpcy5zZXRDb21wb25lbnRNYXAoY29tcG9uZW50TWFwKTtcbiAgfVxuXG4gIFJlYWN0SnNvblNjaGVtYS5wcm90b3R5cGUucGFyc2VTY2hlbWEgPSBmdW5jdGlvbiBwYXJzZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgdmFyIGVsZW1lbnRzID0gbnVsbDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XG4gICAgICBlbGVtZW50cyA9IHRoaXMucGFyc2VTdWJTY2hlbWFzKHNjaGVtYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChzY2hlbWEpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudCB8fCBlbGVtZW50cztcbiAgfTtcblxuICBSZWFjdEpzb25TY2hlbWEucHJvdG90eXBlLnBhcnNlU3ViU2NoZW1hcyA9IGZ1bmN0aW9uIHBhcnNlU3ViU2NoZW1hcygpIHtcbiAgICB2YXIgc3ViU2NoZW1hcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICB2YXIgQ29tcG9uZW50cyA9IFtdO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc3ViU2NoZW1hcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN1YlNjaGVtYSA9IF9yZWY7XG5cbiAgICAgIGlmICh0eXBlb2Ygc3ViU2NoZW1hID09PSAnc3RyaW5nJykge1xuICAgICAgICBDb21wb25lbnRzLnB1c2goc3ViU2NoZW1hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YlNjaGVtYS5rZXkgPSB0eXBlb2Ygc3ViU2NoZW1hLmtleSAhPT0gJ3VuZGVmaW5lZCcgPyBzdWJTY2hlbWEua2V5IDogaW5kZXg7XG4gICAgICAgIENvbXBvbmVudHMucHVzaCh0aGlzLnBhcnNlU2NoZW1hKHN1YlNjaGVtYSkpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29tcG9uZW50cztcbiAgfTtcblxuICBSZWFjdEpzb25TY2hlbWEucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChzY2hlbWEpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc2NoZW1hLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW4gPSBzY2hlbWEuY2hpbGRyZW4sXG4gICAgICAgIHRleHQgPSBzY2hlbWEudGV4dCxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzY2hlbWEsIFsnY29tcG9uZW50JywgJ2NoaWxkcmVuJywgJ3RleHQnXSk7XG5cbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5yZXNvbHZlQ29tcG9uZW50KHNjaGVtYSk7XG4gICAgdmFyIENoaWxkcmVuID0gdHlwZW9mIHRleHQgIT09ICd1bmRlZmluZWQnID8gdGV4dCA6IHRoaXMucmVzb2x2ZUNvbXBvbmVudENoaWxkcmVuKHNjaGVtYSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCByZXN0LCBDaGlsZHJlbik7XG4gIH07XG5cbiAgUmVhY3RKc29uU2NoZW1hLnByb3RvdHlwZS5yZXNvbHZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVzb2x2ZUNvbXBvbmVudChzY2hlbWEpIHtcbiAgICB2YXIgY29tcG9uZW50TWFwID0gdGhpcy5nZXRDb21wb25lbnRNYXAoKTtcbiAgICB2YXIgQ29tcG9uZW50ID0gdm9pZCAwO1xuXG4gICAgLy8gYmFpbCBlYXJseSBpZiB0aGVyZSBpcyBubyBjb21wb25lbnQgbmFtZVxuICAgIGlmICghc2NoZW1hLmhhc093blByb3BlcnR5KCdjb21wb25lbnQnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdEpzb25TY2hlbWEgY291bGQgbm90IHJlc29sdmUgYSBjb21wb25lbnQgZHVlIHRvIGEgbWlzc2luZyBjb21wb25lbnQgYXR0cmlidXRlIGluIHRoZSBzY2hlbWEuJyk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXQncyBhbHJlYWR5IGEgcmVmIGJhaWwgZWFybHlcbiAgICBpZiAoc2NoZW1hLmNvbXBvbmVudCA9PT0gT2JqZWN0KHNjaGVtYS5jb21wb25lbnQpKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICB2YXIgX3NjaGVtYSRjb21wb25lbnQkc3BsID0gc2NoZW1hLmNvbXBvbmVudC5zcGxpdCgnLicpLFxuICAgICAgICBuYW1lID0gX3NjaGVtYSRjb21wb25lbnQkc3BsWzBdLFxuICAgICAgICBzdWJzID0gX3NjaGVtYSRjb21wb25lbnQkc3BsLnNsaWNlKDEpO1xuXG4gICAgLy8gZmluZCB0aGUgZGVmIGluIHRoZSBwcm92aWRlZCBtYXBcblxuXG4gICAgaWYgKGNvbXBvbmVudE1hcCkge1xuICAgICAgQ29tcG9uZW50ID0gY29tcG9uZW50TWFwW25hbWVdO1xuICAgICAgaWYgKCFDb21wb25lbnQpIENvbXBvbmVudCA9IGNvbXBvbmVudE1hcFtwYXJhbUNhc2UobmFtZSldO1xuICAgICAgaWYgKCFDb21wb25lbnQpIENvbXBvbmVudCA9IGNvbXBvbmVudE1hcFtwYXNjYWxDYXNlKG5hbWUpXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvbXBvbmVudCA9IENvbXBvbmVudFtzdWJzW2ldXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBzdGlsbCBub3RoaW5nIGZvdW5kIGl0J3MgYSBuYXRpdmUgRE9NIGNvbXBvbmVudCBvciBhbiBlcnJvclxuICAgIGlmICghQ29tcG9uZW50KSB7XG4gICAgICBpZiAoRE9NLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIENvbXBvbmVudCA9IHNjaGVtYS5jb21wb25lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0SnNvblNjaGVtYSBjb3VsZCBub3QgZmluZCBhbiBpbXBsZW1lbnRhdGlvbiBmb3I6ICcgKyBzY2hlbWEuY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhIGRlZmF1bHQgcHJvcCAoQ29tbW9uSlMpIHJldHVybiB0aGF0XG4gICAgcmV0dXJuIENvbXBvbmVudC5kZWZhdWx0IHx8IENvbXBvbmVudDtcbiAgfTtcblxuICBSZWFjdEpzb25TY2hlbWEucHJvdG90eXBlLnJlc29sdmVDb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlc29sdmVDb21wb25lbnRDaGlsZHJlbihzY2hlbWEpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2NoaWxkcmVuJykgPyB0aGlzLnBhcnNlU2NoZW1hKHNjaGVtYS5jaGlsZHJlbikgOiBbXTtcbiAgICByZXR1cm4gY2hpbGRyZW4ubGVuZ3RoID8gY2hpbGRyZW4gOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgUmVhY3RKc29uU2NoZW1hLnByb3RvdHlwZS5nZXRDb21wb25lbnRNYXAgPSBmdW5jdGlvbiBnZXRDb21wb25lbnRNYXAoKSB7XG4gICAgcmV0dXJuIF9jb21wb25lbnRNYXAuZ2V0KHRoaXMpO1xuICB9O1xuXG4gIFJlYWN0SnNvblNjaGVtYS5wcm90b3R5cGUuc2V0Q29tcG9uZW50TWFwID0gZnVuY3Rpb24gc2V0Q29tcG9uZW50TWFwKGNvbXBvbmVudE1hcCkge1xuICAgIF9jb21wb25lbnRNYXAuc2V0KHRoaXMsIGNvbXBvbmVudE1hcCk7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0SnNvblNjaGVtYTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RKc29uU2NoZW1hO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lkeWxsLWRvY3VtZW50L2Rpc3QvZXMvdXRpbHMvc2NoZW1hMmVsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDExMDVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbihmdW5jdGlvbihmKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGYocmVxdWlyZSgncmVhY3QnKSk7XG4gICAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ3JlYWN0J10sIGYpO1xuICB9IGVsc2Uge1xuICAgIHZhciBnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZyA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBnID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBnID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZyA9IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnLlJlYWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ1JlYWN0IG1vZHVsZSBzaG91bGQgYmUgcmVxdWlyZWQgYmVmb3JlIFJlYWN0RE9NRmFjdG9yaWVzJyk7XG4gICAgfVxuXG4gICAgZy5SZWFjdERPTUZhY3RvcmllcyA9IGYoZy5SZWFjdCk7XG4gIH1cbn0pKGZ1bmN0aW9uKFJlYWN0KSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBmYWN0b3J5IHRoYXQgY3JlYXRlcyBIVE1MIHRhZyBlbGVtZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZURPTUZhY3RvcnkodHlwZSkge1xuICAgIHZhciBmYWN0b3J5ID0gUmVhY3QuY3JlYXRlRWxlbWVudC5iaW5kKG51bGwsIHR5cGUpO1xuICAgIC8vIEV4cG9zZSB0aGUgdHlwZSBvbiB0aGUgZmFjdG9yeSBhbmQgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGl0IGNhbiBiZVxuICAgIC8vIGVhc2lseSBhY2Nlc3NlZCBvbiBlbGVtZW50cy4gRS5nLiBgPEZvbyAvPi50eXBlID09PSBGb29gLlxuICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBiZSBuYW1lZCBgY29uc3RydWN0b3JgIHNpbmNlIHRoaXMgbWF5IG5vdCBiZSB0aGUgZnVuY3Rpb25cbiAgICAvLyB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQsIGFuZCBpdCBtYXkgbm90IGV2ZW4gYmUgYSBjb25zdHJ1Y3Rvci5cbiAgICBmYWN0b3J5LnR5cGUgPSB0eXBlO1xuICAgIHJldHVybiBmYWN0b3J5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbWFwcGluZyBmcm9tIHN1cHBvcnRlZCBIVE1MIHRhZ3MgdG8gYFJlYWN0RE9NQ29tcG9uZW50YCBjbGFzc2VzLlxuICAgKi9cbiAgdmFyIFJlYWN0RE9NRmFjdG9yaWVzID0ge1xuICAgIGE6IGNyZWF0ZURPTUZhY3RvcnkoJ2EnKSxcbiAgICBhYmJyOiBjcmVhdGVET01GYWN0b3J5KCdhYmJyJyksXG4gICAgYWRkcmVzczogY3JlYXRlRE9NRmFjdG9yeSgnYWRkcmVzcycpLFxuICAgIGFyZWE6IGNyZWF0ZURPTUZhY3RvcnkoJ2FyZWEnKSxcbiAgICBhcnRpY2xlOiBjcmVhdGVET01GYWN0b3J5KCdhcnRpY2xlJyksXG4gICAgYXNpZGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2FzaWRlJyksXG4gICAgYXVkaW86IGNyZWF0ZURPTUZhY3RvcnkoJ2F1ZGlvJyksXG4gICAgYjogY3JlYXRlRE9NRmFjdG9yeSgnYicpLFxuICAgIGJhc2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2Jhc2UnKSxcbiAgICBiZGk6IGNyZWF0ZURPTUZhY3RvcnkoJ2JkaScpLFxuICAgIGJkbzogY3JlYXRlRE9NRmFjdG9yeSgnYmRvJyksXG4gICAgYmlnOiBjcmVhdGVET01GYWN0b3J5KCdiaWcnKSxcbiAgICBibG9ja3F1b3RlOiBjcmVhdGVET01GYWN0b3J5KCdibG9ja3F1b3RlJyksXG4gICAgYm9keTogY3JlYXRlRE9NRmFjdG9yeSgnYm9keScpLFxuICAgIGJyOiBjcmVhdGVET01GYWN0b3J5KCdicicpLFxuICAgIGJ1dHRvbjogY3JlYXRlRE9NRmFjdG9yeSgnYnV0dG9uJyksXG4gICAgY2FudmFzOiBjcmVhdGVET01GYWN0b3J5KCdjYW52YXMnKSxcbiAgICBjYXB0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdjYXB0aW9uJyksXG4gICAgY2l0ZTogY3JlYXRlRE9NRmFjdG9yeSgnY2l0ZScpLFxuICAgIGNvZGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2NvZGUnKSxcbiAgICBjb2w6IGNyZWF0ZURPTUZhY3RvcnkoJ2NvbCcpLFxuICAgIGNvbGdyb3VwOiBjcmVhdGVET01GYWN0b3J5KCdjb2xncm91cCcpLFxuICAgIGRhdGE6IGNyZWF0ZURPTUZhY3RvcnkoJ2RhdGEnKSxcbiAgICBkYXRhbGlzdDogY3JlYXRlRE9NRmFjdG9yeSgnZGF0YWxpc3QnKSxcbiAgICBkZDogY3JlYXRlRE9NRmFjdG9yeSgnZGQnKSxcbiAgICBkZWw6IGNyZWF0ZURPTUZhY3RvcnkoJ2RlbCcpLFxuICAgIGRldGFpbHM6IGNyZWF0ZURPTUZhY3RvcnkoJ2RldGFpbHMnKSxcbiAgICBkZm46IGNyZWF0ZURPTUZhY3RvcnkoJ2RmbicpLFxuICAgIGRpYWxvZzogY3JlYXRlRE9NRmFjdG9yeSgnZGlhbG9nJyksXG4gICAgZGl2OiBjcmVhdGVET01GYWN0b3J5KCdkaXYnKSxcbiAgICBkbDogY3JlYXRlRE9NRmFjdG9yeSgnZGwnKSxcbiAgICBkdDogY3JlYXRlRE9NRmFjdG9yeSgnZHQnKSxcbiAgICBlbTogY3JlYXRlRE9NRmFjdG9yeSgnZW0nKSxcbiAgICBlbWJlZDogY3JlYXRlRE9NRmFjdG9yeSgnZW1iZWQnKSxcbiAgICBmaWVsZHNldDogY3JlYXRlRE9NRmFjdG9yeSgnZmllbGRzZXQnKSxcbiAgICBmaWdjYXB0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdmaWdjYXB0aW9uJyksXG4gICAgZmlndXJlOiBjcmVhdGVET01GYWN0b3J5KCdmaWd1cmUnKSxcbiAgICBmb290ZXI6IGNyZWF0ZURPTUZhY3RvcnkoJ2Zvb3RlcicpLFxuICAgIGZvcm06IGNyZWF0ZURPTUZhY3RvcnkoJ2Zvcm0nKSxcbiAgICBoMTogY3JlYXRlRE9NRmFjdG9yeSgnaDEnKSxcbiAgICBoMjogY3JlYXRlRE9NRmFjdG9yeSgnaDInKSxcbiAgICBoMzogY3JlYXRlRE9NRmFjdG9yeSgnaDMnKSxcbiAgICBoNDogY3JlYXRlRE9NRmFjdG9yeSgnaDQnKSxcbiAgICBoNTogY3JlYXRlRE9NRmFjdG9yeSgnaDUnKSxcbiAgICBoNjogY3JlYXRlRE9NRmFjdG9yeSgnaDYnKSxcbiAgICBoZWFkOiBjcmVhdGVET01GYWN0b3J5KCdoZWFkJyksXG4gICAgaGVhZGVyOiBjcmVhdGVET01GYWN0b3J5KCdoZWFkZXInKSxcbiAgICBoZ3JvdXA6IGNyZWF0ZURPTUZhY3RvcnkoJ2hncm91cCcpLFxuICAgIGhyOiBjcmVhdGVET01GYWN0b3J5KCdocicpLFxuICAgIGh0bWw6IGNyZWF0ZURPTUZhY3RvcnkoJ2h0bWwnKSxcbiAgICBpOiBjcmVhdGVET01GYWN0b3J5KCdpJyksXG4gICAgaWZyYW1lOiBjcmVhdGVET01GYWN0b3J5KCdpZnJhbWUnKSxcbiAgICBpbWc6IGNyZWF0ZURPTUZhY3RvcnkoJ2ltZycpLFxuICAgIGlucHV0OiBjcmVhdGVET01GYWN0b3J5KCdpbnB1dCcpLFxuICAgIGluczogY3JlYXRlRE9NRmFjdG9yeSgnaW5zJyksXG4gICAga2JkOiBjcmVhdGVET01GYWN0b3J5KCdrYmQnKSxcbiAgICBrZXlnZW46IGNyZWF0ZURPTUZhY3RvcnkoJ2tleWdlbicpLFxuICAgIGxhYmVsOiBjcmVhdGVET01GYWN0b3J5KCdsYWJlbCcpLFxuICAgIGxlZ2VuZDogY3JlYXRlRE9NRmFjdG9yeSgnbGVnZW5kJyksXG4gICAgbGk6IGNyZWF0ZURPTUZhY3RvcnkoJ2xpJyksXG4gICAgbGluazogY3JlYXRlRE9NRmFjdG9yeSgnbGluaycpLFxuICAgIG1haW46IGNyZWF0ZURPTUZhY3RvcnkoJ21haW4nKSxcbiAgICBtYXA6IGNyZWF0ZURPTUZhY3RvcnkoJ21hcCcpLFxuICAgIG1hcms6IGNyZWF0ZURPTUZhY3RvcnkoJ21hcmsnKSxcbiAgICBtZW51OiBjcmVhdGVET01GYWN0b3J5KCdtZW51JyksXG4gICAgbWVudWl0ZW06IGNyZWF0ZURPTUZhY3RvcnkoJ21lbnVpdGVtJyksXG4gICAgbWV0YTogY3JlYXRlRE9NRmFjdG9yeSgnbWV0YScpLFxuICAgIG1ldGVyOiBjcmVhdGVET01GYWN0b3J5KCdtZXRlcicpLFxuICAgIG5hdjogY3JlYXRlRE9NRmFjdG9yeSgnbmF2JyksXG4gICAgbm9zY3JpcHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ25vc2NyaXB0JyksXG4gICAgb2JqZWN0OiBjcmVhdGVET01GYWN0b3J5KCdvYmplY3QnKSxcbiAgICBvbDogY3JlYXRlRE9NRmFjdG9yeSgnb2wnKSxcbiAgICBvcHRncm91cDogY3JlYXRlRE9NRmFjdG9yeSgnb3B0Z3JvdXAnKSxcbiAgICBvcHRpb246IGNyZWF0ZURPTUZhY3RvcnkoJ29wdGlvbicpLFxuICAgIG91dHB1dDogY3JlYXRlRE9NRmFjdG9yeSgnb3V0cHV0JyksXG4gICAgcDogY3JlYXRlRE9NRmFjdG9yeSgncCcpLFxuICAgIHBhcmFtOiBjcmVhdGVET01GYWN0b3J5KCdwYXJhbScpLFxuICAgIHBpY3R1cmU6IGNyZWF0ZURPTUZhY3RvcnkoJ3BpY3R1cmUnKSxcbiAgICBwcmU6IGNyZWF0ZURPTUZhY3RvcnkoJ3ByZScpLFxuICAgIHByb2dyZXNzOiBjcmVhdGVET01GYWN0b3J5KCdwcm9ncmVzcycpLFxuICAgIHE6IGNyZWF0ZURPTUZhY3RvcnkoJ3EnKSxcbiAgICBycDogY3JlYXRlRE9NRmFjdG9yeSgncnAnKSxcbiAgICBydDogY3JlYXRlRE9NRmFjdG9yeSgncnQnKSxcbiAgICBydWJ5OiBjcmVhdGVET01GYWN0b3J5KCdydWJ5JyksXG4gICAgczogY3JlYXRlRE9NRmFjdG9yeSgncycpLFxuICAgIHNhbXA6IGNyZWF0ZURPTUZhY3RvcnkoJ3NhbXAnKSxcbiAgICBzY3JpcHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3NjcmlwdCcpLFxuICAgIHNlY3Rpb246IGNyZWF0ZURPTUZhY3RvcnkoJ3NlY3Rpb24nKSxcbiAgICBzZWxlY3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ3NlbGVjdCcpLFxuICAgIHNtYWxsOiBjcmVhdGVET01GYWN0b3J5KCdzbWFsbCcpLFxuICAgIHNvdXJjZTogY3JlYXRlRE9NRmFjdG9yeSgnc291cmNlJyksXG4gICAgc3BhbjogY3JlYXRlRE9NRmFjdG9yeSgnc3BhbicpLFxuICAgIHN0cm9uZzogY3JlYXRlRE9NRmFjdG9yeSgnc3Ryb25nJyksXG4gICAgc3R5bGU6IGNyZWF0ZURPTUZhY3RvcnkoJ3N0eWxlJyksXG4gICAgc3ViOiBjcmVhdGVET01GYWN0b3J5KCdzdWInKSxcbiAgICBzdW1tYXJ5OiBjcmVhdGVET01GYWN0b3J5KCdzdW1tYXJ5JyksXG4gICAgc3VwOiBjcmVhdGVET01GYWN0b3J5KCdzdXAnKSxcbiAgICB0YWJsZTogY3JlYXRlRE9NRmFjdG9yeSgndGFibGUnKSxcbiAgICB0Ym9keTogY3JlYXRlRE9NRmFjdG9yeSgndGJvZHknKSxcbiAgICB0ZDogY3JlYXRlRE9NRmFjdG9yeSgndGQnKSxcbiAgICB0ZXh0YXJlYTogY3JlYXRlRE9NRmFjdG9yeSgndGV4dGFyZWEnKSxcbiAgICB0Zm9vdDogY3JlYXRlRE9NRmFjdG9yeSgndGZvb3QnKSxcbiAgICB0aDogY3JlYXRlRE9NRmFjdG9yeSgndGgnKSxcbiAgICB0aGVhZDogY3JlYXRlRE9NRmFjdG9yeSgndGhlYWQnKSxcbiAgICB0aW1lOiBjcmVhdGVET01GYWN0b3J5KCd0aW1lJyksXG4gICAgdGl0bGU6IGNyZWF0ZURPTUZhY3RvcnkoJ3RpdGxlJyksXG4gICAgdHI6IGNyZWF0ZURPTUZhY3RvcnkoJ3RyJyksXG4gICAgdHJhY2s6IGNyZWF0ZURPTUZhY3RvcnkoJ3RyYWNrJyksXG4gICAgdTogY3JlYXRlRE9NRmFjdG9yeSgndScpLFxuICAgIHVsOiBjcmVhdGVET01GYWN0b3J5KCd1bCcpLFxuICAgIHZhcjogY3JlYXRlRE9NRmFjdG9yeSgndmFyJyksXG4gICAgdmlkZW86IGNyZWF0ZURPTUZhY3RvcnkoJ3ZpZGVvJyksXG4gICAgd2JyOiBjcmVhdGVET01GYWN0b3J5KCd3YnInKSxcblxuICAgIC8vIFNWR1xuICAgIGNpcmNsZTogY3JlYXRlRE9NRmFjdG9yeSgnY2lyY2xlJyksXG4gICAgY2xpcFBhdGg6IGNyZWF0ZURPTUZhY3RvcnkoJ2NsaXBQYXRoJyksXG4gICAgZGVmczogY3JlYXRlRE9NRmFjdG9yeSgnZGVmcycpLFxuICAgIGVsbGlwc2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2VsbGlwc2UnKSxcbiAgICBnOiBjcmVhdGVET01GYWN0b3J5KCdnJyksXG4gICAgaW1hZ2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2ltYWdlJyksXG4gICAgbGluZTogY3JlYXRlRE9NRmFjdG9yeSgnbGluZScpLFxuICAgIGxpbmVhckdyYWRpZW50OiBjcmVhdGVET01GYWN0b3J5KCdsaW5lYXJHcmFkaWVudCcpLFxuICAgIG1hc2s6IGNyZWF0ZURPTUZhY3RvcnkoJ21hc2snKSxcbiAgICBwYXRoOiBjcmVhdGVET01GYWN0b3J5KCdwYXRoJyksXG4gICAgcGF0dGVybjogY3JlYXRlRE9NRmFjdG9yeSgncGF0dGVybicpLFxuICAgIHBvbHlnb246IGNyZWF0ZURPTUZhY3RvcnkoJ3BvbHlnb24nKSxcbiAgICBwb2x5bGluZTogY3JlYXRlRE9NRmFjdG9yeSgncG9seWxpbmUnKSxcbiAgICByYWRpYWxHcmFkaWVudDogY3JlYXRlRE9NRmFjdG9yeSgncmFkaWFsR3JhZGllbnQnKSxcbiAgICByZWN0OiBjcmVhdGVET01GYWN0b3J5KCdyZWN0JyksXG4gICAgc3RvcDogY3JlYXRlRE9NRmFjdG9yeSgnc3RvcCcpLFxuICAgIHN2ZzogY3JlYXRlRE9NRmFjdG9yeSgnc3ZnJyksXG4gICAgdGV4dDogY3JlYXRlRE9NRmFjdG9yeSgndGV4dCcpLFxuICAgIHRzcGFuOiBjcmVhdGVET01GYWN0b3J5KCd0c3BhbicpLFxuICB9O1xuXG4gIC8vIGR1ZSB0byB3cmFwcGVyIGFuZCBjb25kaXRpb25hbHMgYXQgdGhlIHRvcCwgdGhpcyB3aWxsIGVpdGhlciBiZWNvbWVcbiAgLy8gYG1vZHVsZS5leHBvcnRzIFJlYWN0RE9NRmFjdG9yaWVzYCBpZiB0aGF0IGlzIGF2YWlsYWJsZSxcbiAgLy8gb3RoZXJ3aXNlIGl0IHdpbGwgYmUgZGVmaW5lZCB2aWEgYGRlZmluZShbJ3JlYWN0J10sIFJlYWN0RE9NRmFjdG9yaWVzKWBcbiAgLy8gaWYgdGhhdCBpcyBhdmFpbGFibGUsXG4gIC8vIG90aGVyd2lzZSBpdCB3aWxsIGJlIGRlZmluZWQgYXMgZ2xvYmFsIHZhcmlhYmxlLlxuICByZXR1cm4gUmVhY3RET01GYWN0b3JpZXM7XG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tLWZhY3Rvcmllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzLm5vID0gZXhwb3J0cy5ub0Nhc2UgPSByZXF1aXJlKCduby1jYXNlJylcbmV4cG9ydHMuZG90ID0gZXhwb3J0cy5kb3RDYXNlID0gcmVxdWlyZSgnZG90LWNhc2UnKVxuZXhwb3J0cy5zd2FwID0gZXhwb3J0cy5zd2FwQ2FzZSA9IHJlcXVpcmUoJ3N3YXAtY2FzZScpXG5leHBvcnRzLnBhdGggPSBleHBvcnRzLnBhdGhDYXNlID0gcmVxdWlyZSgncGF0aC1jYXNlJylcbmV4cG9ydHMudXBwZXIgPSBleHBvcnRzLnVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxuZXhwb3J0cy5sb3dlciA9IGV4cG9ydHMubG93ZXJDYXNlID0gcmVxdWlyZSgnbG93ZXItY2FzZScpXG5leHBvcnRzLmNhbWVsID0gZXhwb3J0cy5jYW1lbENhc2UgPSByZXF1aXJlKCdjYW1lbC1jYXNlJylcbmV4cG9ydHMuc25ha2UgPSBleHBvcnRzLnNuYWtlQ2FzZSA9IHJlcXVpcmUoJ3NuYWtlLWNhc2UnKVxuZXhwb3J0cy50aXRsZSA9IGV4cG9ydHMudGl0bGVDYXNlID0gcmVxdWlyZSgndGl0bGUtY2FzZScpXG5leHBvcnRzLnBhcmFtID0gZXhwb3J0cy5wYXJhbUNhc2UgPSByZXF1aXJlKCdwYXJhbS1jYXNlJylcbmV4cG9ydHMuaGVhZGVyID0gZXhwb3J0cy5oZWFkZXJDYXNlID0gcmVxdWlyZSgnaGVhZGVyLWNhc2UnKVxuZXhwb3J0cy5wYXNjYWwgPSBleHBvcnRzLnBhc2NhbENhc2UgPSByZXF1aXJlKCdwYXNjYWwtY2FzZScpXG5leHBvcnRzLmNvbnN0YW50ID0gZXhwb3J0cy5jb25zdGFudENhc2UgPSByZXF1aXJlKCdjb25zdGFudC1jYXNlJylcbmV4cG9ydHMuc2VudGVuY2UgPSBleHBvcnRzLnNlbnRlbmNlQ2FzZSA9IHJlcXVpcmUoJ3NlbnRlbmNlLWNhc2UnKVxuZXhwb3J0cy5pc1VwcGVyID0gZXhwb3J0cy5pc1VwcGVyQ2FzZSA9IHJlcXVpcmUoJ2lzLXVwcGVyLWNhc2UnKVxuZXhwb3J0cy5pc0xvd2VyID0gZXhwb3J0cy5pc0xvd2VyQ2FzZSA9IHJlcXVpcmUoJ2lzLWxvd2VyLWNhc2UnKVxuZXhwb3J0cy51Y0ZpcnN0ID0gZXhwb3J0cy51cHBlckNhc2VGaXJzdCA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UtZmlyc3QnKVxuZXhwb3J0cy5sY0ZpcnN0ID0gZXhwb3J0cy5sb3dlckNhc2VGaXJzdCA9IHJlcXVpcmUoJ2xvd2VyLWNhc2UtZmlyc3QnKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2hhbmdlLWNhc2UvY2hhbmdlLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMDdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHMgPSAvW15BLVphLXpcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MkZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTAtXFx1MDhCNFxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTgwXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEFGOVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzM5XFx1MEMzRFxcdTBDNTgtXFx1MEM1QVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRjFcXHUwQ0YyXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRFxcdTBENEVcXHUwRDVGLVxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y1XFx1MTNGOC1cXHUxM0ZEXFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZGMS1cXHUxNkY4XFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFFXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlCMC1cXHUxOUM5XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkQ1XFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OURcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3QURcXHVBN0IwLVxcdUE3QjdcXHVBN0Y3LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QThGRFxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBOUUwLVxcdUE5RTRcXHVBOUU2LVxcdUE5RUZcXHVBOUZBLVxcdUE5RkVcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE3RS1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQjMwLVxcdUFCNUFcXHVBQjVDLVxcdUFCNjVcXHVBQjcwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGREMwLTlcXHhCMlxceEIzXFx4QjlcXHhCQy1cXHhCRVxcdTA2NjAtXFx1MDY2OVxcdTA2RjAtXFx1MDZGOVxcdTA3QzAtXFx1MDdDOVxcdTA5NjYtXFx1MDk2RlxcdTA5RTYtXFx1MDlFRlxcdTA5RjQtXFx1MDlGOVxcdTBBNjYtXFx1MEE2RlxcdTBBRTYtXFx1MEFFRlxcdTBCNjYtXFx1MEI2RlxcdTBCNzItXFx1MEI3N1xcdTBCRTYtXFx1MEJGMlxcdTBDNjYtXFx1MEM2RlxcdTBDNzgtXFx1MEM3RVxcdTBDRTYtXFx1MENFRlxcdTBENjYtXFx1MEQ3NVxcdTBERTYtXFx1MERFRlxcdTBFNTAtXFx1MEU1OVxcdTBFRDAtXFx1MEVEOVxcdTBGMjAtXFx1MEYzM1xcdTEwNDAtXFx1MTA0OVxcdTEwOTAtXFx1MTA5OVxcdTEzNjktXFx1MTM3Q1xcdTE2RUUtXFx1MTZGMFxcdTE3RTAtXFx1MTdFOVxcdTE3RjAtXFx1MTdGOVxcdTE4MTAtXFx1MTgxOVxcdTE5NDYtXFx1MTk0RlxcdTE5RDAtXFx1MTlEQVxcdTFBODAtXFx1MUE4OVxcdTFBOTAtXFx1MUE5OVxcdTFCNTAtXFx1MUI1OVxcdTFCQjAtXFx1MUJCOVxcdTFDNDAtXFx1MUM0OVxcdTFDNTAtXFx1MUM1OVxcdTIwNzBcXHUyMDc0LVxcdTIwNzlcXHUyMDgwLVxcdTIwODlcXHUyMTUwLVxcdTIxODJcXHUyMTg1LVxcdTIxODlcXHUyNDYwLVxcdTI0OUJcXHUyNEVBLVxcdTI0RkZcXHUyNzc2LVxcdTI3OTNcXHUyQ0ZEXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQVxcdTMxOTItXFx1MzE5NVxcdTMyMjAtXFx1MzIyOVxcdTMyNDgtXFx1MzI0RlxcdTMyNTEtXFx1MzI1RlxcdTMyODAtXFx1MzI4OVxcdTMyQjEtXFx1MzJCRlxcdUE2MjAtXFx1QTYyOVxcdUE2RTYtXFx1QTZFRlxcdUE4MzAtXFx1QTgzNVxcdUE4RDAtXFx1QThEOVxcdUE5MDAtXFx1QTkwOVxcdUE5RDAtXFx1QTlEOVxcdUE5RjAtXFx1QTlGOVxcdUFBNTAtXFx1QUE1OVxcdUFCRjAtXFx1QUJGOVxcdUZGMTAtXFx1RkYxOV0rL2dcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vLWNhc2UvdmVuZG9yL25vbi13b3JkLXJlZ2V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJtb2R1bGUuZXhwb3J0cyA9IC8oW2EtelxceEI1XFx4REYtXFx4RjZcXHhGOC1cXHhGRlxcdTAxMDFcXHUwMTAzXFx1MDEwNVxcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMTBGXFx1MDExMVxcdTAxMTNcXHUwMTE1XFx1MDExN1xcdTAxMTlcXHUwMTFCXFx1MDExRFxcdTAxMUZcXHUwMTIxXFx1MDEyM1xcdTAxMjVcXHUwMTI3XFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDEyRlxcdTAxMzFcXHUwMTMzXFx1MDEzNVxcdTAxMzdcXHUwMTM4XFx1MDEzQVxcdTAxM0NcXHUwMTNFXFx1MDE0MFxcdTAxNDJcXHUwMTQ0XFx1MDE0NlxcdTAxNDhcXHUwMTQ5XFx1MDE0QlxcdTAxNERcXHUwMTRGXFx1MDE1MVxcdTAxNTNcXHUwMTU1XFx1MDE1N1xcdTAxNTlcXHUwMTVCXFx1MDE1RFxcdTAxNUZcXHUwMTYxXFx1MDE2M1xcdTAxNjVcXHUwMTY3XFx1MDE2OVxcdTAxNkJcXHUwMTZEXFx1MDE2RlxcdTAxNzFcXHUwMTczXFx1MDE3NVxcdTAxNzdcXHUwMTdBXFx1MDE3Q1xcdTAxN0UtXFx1MDE4MFxcdTAxODNcXHUwMTg1XFx1MDE4OFxcdTAxOENcXHUwMThEXFx1MDE5MlxcdTAxOTVcXHUwMTk5LVxcdTAxOUJcXHUwMTlFXFx1MDFBMVxcdTAxQTNcXHUwMUE1XFx1MDFBOFxcdTAxQUFcXHUwMUFCXFx1MDFBRFxcdTAxQjBcXHUwMUI0XFx1MDFCNlxcdTAxQjlcXHUwMUJBXFx1MDFCRC1cXHUwMUJGXFx1MDFDNlxcdTAxQzlcXHUwMUNDXFx1MDFDRVxcdTAxRDBcXHUwMUQyXFx1MDFENFxcdTAxRDZcXHUwMUQ4XFx1MDFEQVxcdTAxRENcXHUwMUREXFx1MDFERlxcdTAxRTFcXHUwMUUzXFx1MDFFNVxcdTAxRTdcXHUwMUU5XFx1MDFFQlxcdTAxRURcXHUwMUVGXFx1MDFGMFxcdTAxRjNcXHUwMUY1XFx1MDFGOVxcdTAxRkJcXHUwMUZEXFx1MDFGRlxcdTAyMDFcXHUwMjAzXFx1MDIwNVxcdTAyMDdcXHUwMjA5XFx1MDIwQlxcdTAyMERcXHUwMjBGXFx1MDIxMVxcdTAyMTNcXHUwMjE1XFx1MDIxN1xcdTAyMTlcXHUwMjFCXFx1MDIxRFxcdTAyMUZcXHUwMjIxXFx1MDIyM1xcdTAyMjVcXHUwMjI3XFx1MDIyOVxcdTAyMkJcXHUwMjJEXFx1MDIyRlxcdTAyMzFcXHUwMjMzLVxcdTAyMzlcXHUwMjNDXFx1MDIzRlxcdTAyNDBcXHUwMjQyXFx1MDI0N1xcdTAyNDlcXHUwMjRCXFx1MDI0RFxcdTAyNEYtXFx1MDI5M1xcdTAyOTUtXFx1MDJBRlxcdTAzNzFcXHUwMzczXFx1MDM3N1xcdTAzN0ItXFx1MDM3RFxcdTAzOTBcXHUwM0FDLVxcdTAzQ0VcXHUwM0QwXFx1MDNEMVxcdTAzRDUtXFx1MDNEN1xcdTAzRDlcXHUwM0RCXFx1MDNERFxcdTAzREZcXHUwM0UxXFx1MDNFM1xcdTAzRTVcXHUwM0U3XFx1MDNFOVxcdTAzRUJcXHUwM0VEXFx1MDNFRi1cXHUwM0YzXFx1MDNGNVxcdTAzRjhcXHUwM0ZCXFx1MDNGQ1xcdTA0MzAtXFx1MDQ1RlxcdTA0NjFcXHUwNDYzXFx1MDQ2NVxcdTA0NjdcXHUwNDY5XFx1MDQ2QlxcdTA0NkRcXHUwNDZGXFx1MDQ3MVxcdTA0NzNcXHUwNDc1XFx1MDQ3N1xcdTA0NzlcXHUwNDdCXFx1MDQ3RFxcdTA0N0ZcXHUwNDgxXFx1MDQ4QlxcdTA0OERcXHUwNDhGXFx1MDQ5MVxcdTA0OTNcXHUwNDk1XFx1MDQ5N1xcdTA0OTlcXHUwNDlCXFx1MDQ5RFxcdTA0OUZcXHUwNEExXFx1MDRBM1xcdTA0QTVcXHUwNEE3XFx1MDRBOVxcdTA0QUJcXHUwNEFEXFx1MDRBRlxcdTA0QjFcXHUwNEIzXFx1MDRCNVxcdTA0QjdcXHUwNEI5XFx1MDRCQlxcdTA0QkRcXHUwNEJGXFx1MDRDMlxcdTA0QzRcXHUwNEM2XFx1MDRDOFxcdTA0Q0FcXHUwNENDXFx1MDRDRVxcdTA0Q0ZcXHUwNEQxXFx1MDREM1xcdTA0RDVcXHUwNEQ3XFx1MDREOVxcdTA0REJcXHUwNEREXFx1MDRERlxcdTA0RTFcXHUwNEUzXFx1MDRFNVxcdTA0RTdcXHUwNEU5XFx1MDRFQlxcdTA0RURcXHUwNEVGXFx1MDRGMVxcdTA0RjNcXHUwNEY1XFx1MDRGN1xcdTA0RjlcXHUwNEZCXFx1MDRGRFxcdTA0RkZcXHUwNTAxXFx1MDUwM1xcdTA1MDVcXHUwNTA3XFx1MDUwOVxcdTA1MEJcXHUwNTBEXFx1MDUwRlxcdTA1MTFcXHUwNTEzXFx1MDUxNVxcdTA1MTdcXHUwNTE5XFx1MDUxQlxcdTA1MURcXHUwNTFGXFx1MDUyMVxcdTA1MjNcXHUwNTI1XFx1MDUyN1xcdTA1MjlcXHUwNTJCXFx1MDUyRFxcdTA1MkZcXHUwNTYxLVxcdTA1ODdcXHUxM0Y4LVxcdTEzRkRcXHUxRDAwLVxcdTFEMkJcXHUxRDZCLVxcdTFENzdcXHUxRDc5LVxcdTFEOUFcXHUxRTAxXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MUUwOVxcdTFFMEJcXHUxRTBEXFx1MUUwRlxcdTFFMTFcXHUxRTEzXFx1MUUxNVxcdTFFMTdcXHUxRTE5XFx1MUUxQlxcdTFFMURcXHUxRTFGXFx1MUUyMVxcdTFFMjNcXHUxRTI1XFx1MUUyN1xcdTFFMjlcXHUxRTJCXFx1MUUyRFxcdTFFMkZcXHUxRTMxXFx1MUUzM1xcdTFFMzVcXHUxRTM3XFx1MUUzOVxcdTFFM0JcXHUxRTNEXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MUU0NVxcdTFFNDdcXHUxRTQ5XFx1MUU0QlxcdTFFNERcXHUxRTRGXFx1MUU1MVxcdTFFNTNcXHUxRTU1XFx1MUU1N1xcdTFFNTlcXHUxRTVCXFx1MUU1RFxcdTFFNUZcXHUxRTYxXFx1MUU2M1xcdTFFNjVcXHUxRTY3XFx1MUU2OVxcdTFFNkJcXHUxRTZEXFx1MUU2RlxcdTFFNzFcXHUxRTczXFx1MUU3NVxcdTFFNzdcXHUxRTc5XFx1MUU3QlxcdTFFN0RcXHUxRTdGXFx1MUU4MVxcdTFFODNcXHUxRTg1XFx1MUU4N1xcdTFFODlcXHUxRThCXFx1MUU4RFxcdTFFOEZcXHUxRTkxXFx1MUU5M1xcdTFFOTUtXFx1MUU5RFxcdTFFOUZcXHUxRUExXFx1MUVBM1xcdTFFQTVcXHUxRUE3XFx1MUVBOVxcdTFFQUJcXHUxRUFEXFx1MUVBRlxcdTFFQjFcXHUxRUIzXFx1MUVCNVxcdTFFQjdcXHUxRUI5XFx1MUVCQlxcdTFFQkRcXHUxRUJGXFx1MUVDMVxcdTFFQzNcXHUxRUM1XFx1MUVDN1xcdTFFQzlcXHUxRUNCXFx1MUVDRFxcdTFFQ0ZcXHUxRUQxXFx1MUVEM1xcdTFFRDVcXHUxRUQ3XFx1MUVEOVxcdTFFREJcXHUxRUREXFx1MUVERlxcdTFFRTFcXHUxRUUzXFx1MUVFNVxcdTFFRTdcXHUxRUU5XFx1MUVFQlxcdTFFRURcXHUxRUVGXFx1MUVGMVxcdTFFRjNcXHUxRUY1XFx1MUVGN1xcdTFFRjlcXHUxRUZCXFx1MUVGRFxcdTFFRkYtXFx1MUYwN1xcdTFGMTAtXFx1MUYxNVxcdTFGMjAtXFx1MUYyN1xcdTFGMzAtXFx1MUYzN1xcdTFGNDAtXFx1MUY0NVxcdTFGNTAtXFx1MUY1N1xcdTFGNjAtXFx1MUY2N1xcdTFGNzAtXFx1MUY3RFxcdTFGODAtXFx1MUY4N1xcdTFGOTAtXFx1MUY5N1xcdTFGQTAtXFx1MUZBN1xcdTFGQjAtXFx1MUZCNFxcdTFGQjZcXHUxRkI3XFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzZcXHUxRkM3XFx1MUZEMC1cXHUxRkQzXFx1MUZENlxcdTFGRDdcXHUxRkUwLVxcdTFGRTdcXHUxRkYyLVxcdTFGRjRcXHUxRkY2XFx1MUZGN1xcdTIxMEFcXHUyMTBFXFx1MjEwRlxcdTIxMTNcXHUyMTJGXFx1MjEzNFxcdTIxMzlcXHUyMTNDXFx1MjEzRFxcdTIxNDYtXFx1MjE0OVxcdTIxNEVcXHUyMTg0XFx1MkMzMC1cXHUyQzVFXFx1MkM2MVxcdTJDNjVcXHUyQzY2XFx1MkM2OFxcdTJDNkFcXHUyQzZDXFx1MkM3MVxcdTJDNzNcXHUyQzc0XFx1MkM3Ni1cXHUyQzdCXFx1MkM4MVxcdTJDODNcXHUyQzg1XFx1MkM4N1xcdTJDODlcXHUyQzhCXFx1MkM4RFxcdTJDOEZcXHUyQzkxXFx1MkM5M1xcdTJDOTVcXHUyQzk3XFx1MkM5OVxcdTJDOUJcXHUyQzlEXFx1MkM5RlxcdTJDQTFcXHUyQ0EzXFx1MkNBNVxcdTJDQTdcXHUyQ0E5XFx1MkNBQlxcdTJDQURcXHUyQ0FGXFx1MkNCMVxcdTJDQjNcXHUyQ0I1XFx1MkNCN1xcdTJDQjlcXHUyQ0JCXFx1MkNCRFxcdTJDQkZcXHUyQ0MxXFx1MkNDM1xcdTJDQzVcXHUyQ0M3XFx1MkNDOVxcdTJDQ0JcXHUyQ0NEXFx1MkNDRlxcdTJDRDFcXHUyQ0QzXFx1MkNENVxcdTJDRDdcXHUyQ0Q5XFx1MkNEQlxcdTJDRERcXHUyQ0RGXFx1MkNFMVxcdTJDRTNcXHUyQ0U0XFx1MkNFQ1xcdTJDRUVcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHVBNjQxXFx1QTY0M1xcdUE2NDVcXHVBNjQ3XFx1QTY0OVxcdUE2NEJcXHVBNjREXFx1QTY0RlxcdUE2NTFcXHVBNjUzXFx1QTY1NVxcdUE2NTdcXHVBNjU5XFx1QTY1QlxcdUE2NURcXHVBNjVGXFx1QTY2MVxcdUE2NjNcXHVBNjY1XFx1QTY2N1xcdUE2NjlcXHVBNjZCXFx1QTY2RFxcdUE2ODFcXHVBNjgzXFx1QTY4NVxcdUE2ODdcXHVBNjg5XFx1QTY4QlxcdUE2OERcXHVBNjhGXFx1QTY5MVxcdUE2OTNcXHVBNjk1XFx1QTY5N1xcdUE2OTlcXHVBNjlCXFx1QTcyM1xcdUE3MjVcXHVBNzI3XFx1QTcyOVxcdUE3MkJcXHVBNzJEXFx1QTcyRi1cXHVBNzMxXFx1QTczM1xcdUE3MzVcXHVBNzM3XFx1QTczOVxcdUE3M0JcXHVBNzNEXFx1QTczRlxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3NDdcXHVBNzQ5XFx1QTc0QlxcdUE3NERcXHVBNzRGXFx1QTc1MVxcdUE3NTNcXHVBNzU1XFx1QTc1N1xcdUE3NTlcXHVBNzVCXFx1QTc1RFxcdUE3NUZcXHVBNzYxXFx1QTc2M1xcdUE3NjVcXHVBNzY3XFx1QTc2OVxcdUE3NkJcXHVBNzZEXFx1QTc2RlxcdUE3NzEtXFx1QTc3OFxcdUE3N0FcXHVBNzdDXFx1QTc3RlxcdUE3ODFcXHVBNzgzXFx1QTc4NVxcdUE3ODdcXHVBNzhDXFx1QTc4RVxcdUE3OTFcXHVBNzkzLVxcdUE3OTVcXHVBNzk3XFx1QTc5OVxcdUE3OUJcXHVBNzlEXFx1QTc5RlxcdUE3QTFcXHVBN0EzXFx1QTdBNVxcdUE3QTdcXHVBN0E5XFx1QTdCNVxcdUE3QjdcXHVBN0ZBXFx1QUIzMC1cXHVBQjVBXFx1QUI2MC1cXHVBQjY1XFx1QUI3MC1cXHVBQkJGXFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkY0MS1cXHVGRjVBMC05XFx4QjJcXHhCM1xceEI5XFx4QkMtXFx4QkVcXHUwNjYwLVxcdTA2NjlcXHUwNkYwLVxcdTA2RjlcXHUwN0MwLVxcdTA3QzlcXHUwOTY2LVxcdTA5NkZcXHUwOUU2LVxcdTA5RUZcXHUwOUY0LVxcdTA5RjlcXHUwQTY2LVxcdTBBNkZcXHUwQUU2LVxcdTBBRUZcXHUwQjY2LVxcdTBCNkZcXHUwQjcyLVxcdTBCNzdcXHUwQkU2LVxcdTBCRjJcXHUwQzY2LVxcdTBDNkZcXHUwQzc4LVxcdTBDN0VcXHUwQ0U2LVxcdTBDRUZcXHUwRDY2LVxcdTBENzVcXHUwREU2LVxcdTBERUZcXHUwRTUwLVxcdTBFNTlcXHUwRUQwLVxcdTBFRDlcXHUwRjIwLVxcdTBGMzNcXHUxMDQwLVxcdTEwNDlcXHUxMDkwLVxcdTEwOTlcXHUxMzY5LVxcdTEzN0NcXHUxNkVFLVxcdTE2RjBcXHUxN0UwLVxcdTE3RTlcXHUxN0YwLVxcdTE3RjlcXHUxODEwLVxcdTE4MTlcXHUxOTQ2LVxcdTE5NEZcXHUxOUQwLVxcdTE5REFcXHUxQTgwLVxcdTFBODlcXHUxQTkwLVxcdTFBOTlcXHUxQjUwLVxcdTFCNTlcXHUxQkIwLVxcdTFCQjlcXHUxQzQwLVxcdTFDNDlcXHUxQzUwLVxcdTFDNTlcXHUyMDcwXFx1MjA3NC1cXHUyMDc5XFx1MjA4MC1cXHUyMDg5XFx1MjE1MC1cXHUyMTgyXFx1MjE4NS1cXHUyMTg5XFx1MjQ2MC1cXHUyNDlCXFx1MjRFQS1cXHUyNEZGXFx1Mjc3Ni1cXHUyNzkzXFx1MkNGRFxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDM4LVxcdTMwM0FcXHUzMTkyLVxcdTMxOTVcXHUzMjIwLVxcdTMyMjlcXHUzMjQ4LVxcdTMyNEZcXHUzMjUxLVxcdTMyNUZcXHUzMjgwLVxcdTMyODlcXHUzMkIxLVxcdTMyQkZcXHVBNjIwLVxcdUE2MjlcXHVBNkU2LVxcdUE2RUZcXHVBODMwLVxcdUE4MzVcXHVBOEQwLVxcdUE4RDlcXHVBOTAwLVxcdUE5MDlcXHVBOUQwLVxcdUE5RDlcXHVBOUYwLVxcdUE5RjlcXHVBQTUwLVxcdUFBNTlcXHVBQkYwLVxcdUFCRjlcXHVGRjEwLVxcdUZGMTldKShbQS1aXFx4QzAtXFx4RDZcXHhEOC1cXHhERVxcdTAxMDBcXHUwMTAyXFx1MDEwNFxcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMTBFXFx1MDExMFxcdTAxMTJcXHUwMTE0XFx1MDExNlxcdTAxMThcXHUwMTFBXFx1MDExQ1xcdTAxMUVcXHUwMTIwXFx1MDEyMlxcdTAxMjRcXHUwMTI2XFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEyRVxcdTAxMzBcXHUwMTMyXFx1MDEzNFxcdTAxMzZcXHUwMTM5XFx1MDEzQlxcdTAxM0RcXHUwMTNGXFx1MDE0MVxcdTAxNDNcXHUwMTQ1XFx1MDE0N1xcdTAxNEFcXHUwMTRDXFx1MDE0RVxcdTAxNTBcXHUwMTUyXFx1MDE1NFxcdTAxNTZcXHUwMTU4XFx1MDE1QVxcdTAxNUNcXHUwMTVFXFx1MDE2MFxcdTAxNjJcXHUwMTY0XFx1MDE2NlxcdTAxNjhcXHUwMTZBXFx1MDE2Q1xcdTAxNkVcXHUwMTcwXFx1MDE3MlxcdTAxNzRcXHUwMTc2XFx1MDE3OFxcdTAxNzlcXHUwMTdCXFx1MDE3RFxcdTAxODFcXHUwMTgyXFx1MDE4NFxcdTAxODZcXHUwMTg3XFx1MDE4OS1cXHUwMThCXFx1MDE4RS1cXHUwMTkxXFx1MDE5M1xcdTAxOTRcXHUwMTk2LVxcdTAxOThcXHUwMTlDXFx1MDE5RFxcdTAxOUZcXHUwMUEwXFx1MDFBMlxcdTAxQTRcXHUwMUE2XFx1MDFBN1xcdTAxQTlcXHUwMUFDXFx1MDFBRVxcdTAxQUZcXHUwMUIxLVxcdTAxQjNcXHUwMUI1XFx1MDFCN1xcdTAxQjhcXHUwMUJDXFx1MDFDNFxcdTAxQzdcXHUwMUNBXFx1MDFDRFxcdTAxQ0ZcXHUwMUQxXFx1MDFEM1xcdTAxRDVcXHUwMUQ3XFx1MDFEOVxcdTAxREJcXHUwMURFXFx1MDFFMFxcdTAxRTJcXHUwMUU0XFx1MDFFNlxcdTAxRThcXHUwMUVBXFx1MDFFQ1xcdTAxRUVcXHUwMUYxXFx1MDFGNFxcdTAxRjYtXFx1MDFGOFxcdTAxRkFcXHUwMUZDXFx1MDFGRVxcdTAyMDBcXHUwMjAyXFx1MDIwNFxcdTAyMDZcXHUwMjA4XFx1MDIwQVxcdTAyMENcXHUwMjBFXFx1MDIxMFxcdTAyMTJcXHUwMjE0XFx1MDIxNlxcdTAyMThcXHUwMjFBXFx1MDIxQ1xcdTAyMUVcXHUwMjIwXFx1MDIyMlxcdTAyMjRcXHUwMjI2XFx1MDIyOFxcdTAyMkFcXHUwMjJDXFx1MDIyRVxcdTAyMzBcXHUwMjMyXFx1MDIzQVxcdTAyM0JcXHUwMjNEXFx1MDIzRVxcdTAyNDFcXHUwMjQzLVxcdTAyNDZcXHUwMjQ4XFx1MDI0QVxcdTAyNENcXHUwMjRFXFx1MDM3MFxcdTAzNzJcXHUwMzc2XFx1MDM3RlxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RVxcdTAzOEZcXHUwMzkxLVxcdTAzQTFcXHUwM0EzLVxcdTAzQUJcXHUwM0NGXFx1MDNEMi1cXHUwM0Q0XFx1MDNEOFxcdTAzREFcXHUwM0RDXFx1MDNERVxcdTAzRTBcXHUwM0UyXFx1MDNFNFxcdTAzRTZcXHUwM0U4XFx1MDNFQVxcdTAzRUNcXHUwM0VFXFx1MDNGNFxcdTAzRjdcXHUwM0Y5XFx1MDNGQVxcdTAzRkQtXFx1MDQyRlxcdTA0NjBcXHUwNDYyXFx1MDQ2NFxcdTA0NjZcXHUwNDY4XFx1MDQ2QVxcdTA0NkNcXHUwNDZFXFx1MDQ3MFxcdTA0NzJcXHUwNDc0XFx1MDQ3NlxcdTA0NzhcXHUwNDdBXFx1MDQ3Q1xcdTA0N0VcXHUwNDgwXFx1MDQ4QVxcdTA0OENcXHUwNDhFXFx1MDQ5MFxcdTA0OTJcXHUwNDk0XFx1MDQ5NlxcdTA0OThcXHUwNDlBXFx1MDQ5Q1xcdTA0OUVcXHUwNEEwXFx1MDRBMlxcdTA0QTRcXHUwNEE2XFx1MDRBOFxcdTA0QUFcXHUwNEFDXFx1MDRBRVxcdTA0QjBcXHUwNEIyXFx1MDRCNFxcdTA0QjZcXHUwNEI4XFx1MDRCQVxcdTA0QkNcXHUwNEJFXFx1MDRDMFxcdTA0QzFcXHUwNEMzXFx1MDRDNVxcdTA0QzdcXHUwNEM5XFx1MDRDQlxcdTA0Q0RcXHUwNEQwXFx1MDREMlxcdTA0RDRcXHUwNEQ2XFx1MDREOFxcdTA0REFcXHUwNERDXFx1MDRERVxcdTA0RTBcXHUwNEUyXFx1MDRFNFxcdTA0RTZcXHUwNEU4XFx1MDRFQVxcdTA0RUNcXHUwNEVFXFx1MDRGMFxcdTA0RjJcXHUwNEY0XFx1MDRGNlxcdTA0RjhcXHUwNEZBXFx1MDRGQ1xcdTA0RkVcXHUwNTAwXFx1MDUwMlxcdTA1MDRcXHUwNTA2XFx1MDUwOFxcdTA1MEFcXHUwNTBDXFx1MDUwRVxcdTA1MTBcXHUwNTEyXFx1MDUxNFxcdTA1MTZcXHUwNTE4XFx1MDUxQVxcdTA1MUNcXHUwNTFFXFx1MDUyMFxcdTA1MjJcXHUwNTI0XFx1MDUyNlxcdTA1MjhcXHUwNTJBXFx1MDUyQ1xcdTA1MkVcXHUwNTMxLVxcdTA1NTZcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEzQTAtXFx1MTNGNVxcdTFFMDBcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUxRTA4XFx1MUUwQVxcdTFFMENcXHUxRTBFXFx1MUUxMFxcdTFFMTJcXHUxRTE0XFx1MUUxNlxcdTFFMThcXHUxRTFBXFx1MUUxQ1xcdTFFMUVcXHUxRTIwXFx1MUUyMlxcdTFFMjRcXHUxRTI2XFx1MUUyOFxcdTFFMkFcXHUxRTJDXFx1MUUyRVxcdTFFMzBcXHUxRTMyXFx1MUUzNFxcdTFFMzZcXHUxRTM4XFx1MUUzQVxcdTFFM0NcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUxRTQ0XFx1MUU0NlxcdTFFNDhcXHUxRTRBXFx1MUU0Q1xcdTFFNEVcXHUxRTUwXFx1MUU1MlxcdTFFNTRcXHUxRTU2XFx1MUU1OFxcdTFFNUFcXHUxRTVDXFx1MUU1RVxcdTFFNjBcXHUxRTYyXFx1MUU2NFxcdTFFNjZcXHUxRTY4XFx1MUU2QVxcdTFFNkNcXHUxRTZFXFx1MUU3MFxcdTFFNzJcXHUxRTc0XFx1MUU3NlxcdTFFNzhcXHUxRTdBXFx1MUU3Q1xcdTFFN0VcXHUxRTgwXFx1MUU4MlxcdTFFODRcXHUxRTg2XFx1MUU4OFxcdTFFOEFcXHUxRThDXFx1MUU4RVxcdTFFOTBcXHUxRTkyXFx1MUU5NFxcdTFFOUVcXHUxRUEwXFx1MUVBMlxcdTFFQTRcXHUxRUE2XFx1MUVBOFxcdTFFQUFcXHUxRUFDXFx1MUVBRVxcdTFFQjBcXHUxRUIyXFx1MUVCNFxcdTFFQjZcXHUxRUI4XFx1MUVCQVxcdTFFQkNcXHUxRUJFXFx1MUVDMFxcdTFFQzJcXHUxRUM0XFx1MUVDNlxcdTFFQzhcXHUxRUNBXFx1MUVDQ1xcdTFFQ0VcXHUxRUQwXFx1MUVEMlxcdTFFRDRcXHUxRUQ2XFx1MUVEOFxcdTFFREFcXHUxRURDXFx1MUVERVxcdTFFRTBcXHUxRUUyXFx1MUVFNFxcdTFFRTZcXHUxRUU4XFx1MUVFQVxcdTFFRUNcXHUxRUVFXFx1MUVGMFxcdTFFRjJcXHUxRUY0XFx1MUVGNlxcdTFFRjhcXHUxRUZBXFx1MUVGQ1xcdTFFRkVcXHUxRjA4LVxcdTFGMEZcXHUxRjE4LVxcdTFGMURcXHUxRjI4LVxcdTFGMkZcXHUxRjM4LVxcdTFGM0ZcXHUxRjQ4LVxcdTFGNERcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGXFx1MUY2OC1cXHUxRjZGXFx1MUZCOC1cXHUxRkJCXFx1MUZDOC1cXHUxRkNCXFx1MUZEOC1cXHUxRkRCXFx1MUZFOC1cXHUxRkVDXFx1MUZGOC1cXHUxRkZCXFx1MjEwMlxcdTIxMDdcXHUyMTBCLVxcdTIxMERcXHUyMTEwLVxcdTIxMTJcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEzMC1cXHUyMTMzXFx1MjEzRVxcdTIxM0ZcXHUyMTQ1XFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDNjBcXHUyQzYyLVxcdTJDNjRcXHUyQzY3XFx1MkM2OVxcdTJDNkJcXHUyQzZELVxcdTJDNzBcXHUyQzcyXFx1MkM3NVxcdTJDN0UtXFx1MkM4MFxcdTJDODJcXHUyQzg0XFx1MkM4NlxcdTJDODhcXHUyQzhBXFx1MkM4Q1xcdTJDOEVcXHUyQzkwXFx1MkM5MlxcdTJDOTRcXHUyQzk2XFx1MkM5OFxcdTJDOUFcXHUyQzlDXFx1MkM5RVxcdTJDQTBcXHUyQ0EyXFx1MkNBNFxcdTJDQTZcXHUyQ0E4XFx1MkNBQVxcdTJDQUNcXHUyQ0FFXFx1MkNCMFxcdTJDQjJcXHUyQ0I0XFx1MkNCNlxcdTJDQjhcXHUyQ0JBXFx1MkNCQ1xcdTJDQkVcXHUyQ0MwXFx1MkNDMlxcdTJDQzRcXHUyQ0M2XFx1MkNDOFxcdTJDQ0FcXHUyQ0NDXFx1MkNDRVxcdTJDRDBcXHUyQ0QyXFx1MkNENFxcdTJDRDZcXHUyQ0Q4XFx1MkNEQVxcdTJDRENcXHUyQ0RFXFx1MkNFMFxcdTJDRTJcXHUyQ0VCXFx1MkNFRFxcdTJDRjJcXHVBNjQwXFx1QTY0MlxcdUE2NDRcXHVBNjQ2XFx1QTY0OFxcdUE2NEFcXHVBNjRDXFx1QTY0RVxcdUE2NTBcXHVBNjUyXFx1QTY1NFxcdUE2NTZcXHVBNjU4XFx1QTY1QVxcdUE2NUNcXHVBNjVFXFx1QTY2MFxcdUE2NjJcXHVBNjY0XFx1QTY2NlxcdUE2NjhcXHVBNjZBXFx1QTY2Q1xcdUE2ODBcXHVBNjgyXFx1QTY4NFxcdUE2ODZcXHVBNjg4XFx1QTY4QVxcdUE2OENcXHVBNjhFXFx1QTY5MFxcdUE2OTJcXHVBNjk0XFx1QTY5NlxcdUE2OThcXHVBNjlBXFx1QTcyMlxcdUE3MjRcXHVBNzI2XFx1QTcyOFxcdUE3MkFcXHVBNzJDXFx1QTcyRVxcdUE3MzJcXHVBNzM0XFx1QTczNlxcdUE3MzhcXHVBNzNBXFx1QTczQ1xcdUE3M0VcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBNzQ2XFx1QTc0OFxcdUE3NEFcXHVBNzRDXFx1QTc0RVxcdUE3NTBcXHVBNzUyXFx1QTc1NFxcdUE3NTZcXHVBNzU4XFx1QTc1QVxcdUE3NUNcXHVBNzVFXFx1QTc2MFxcdUE3NjJcXHVBNzY0XFx1QTc2NlxcdUE3NjhcXHVBNzZBXFx1QTc2Q1xcdUE3NkVcXHVBNzc5XFx1QTc3QlxcdUE3N0RcXHVBNzdFXFx1QTc4MFxcdUE3ODJcXHVBNzg0XFx1QTc4NlxcdUE3OEJcXHVBNzhEXFx1QTc5MFxcdUE3OTJcXHVBNzk2XFx1QTc5OFxcdUE3OUFcXHVBNzlDXFx1QTc5RVxcdUE3QTBcXHVBN0EyXFx1QTdBNFxcdUE3QTZcXHVBN0E4XFx1QTdBQS1cXHVBN0FEXFx1QTdCMC1cXHVBN0I0XFx1QTdCNlxcdUZGMjEtXFx1RkYzQV0pL2dcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vLWNhc2UvdmVuZG9yL2NhbWVsLWNhc2UtcmVnZXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzID0gLyhbQS1aXFx4QzAtXFx4RDZcXHhEOC1cXHhERVxcdTAxMDBcXHUwMTAyXFx1MDEwNFxcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMTBFXFx1MDExMFxcdTAxMTJcXHUwMTE0XFx1MDExNlxcdTAxMThcXHUwMTFBXFx1MDExQ1xcdTAxMUVcXHUwMTIwXFx1MDEyMlxcdTAxMjRcXHUwMTI2XFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEyRVxcdTAxMzBcXHUwMTMyXFx1MDEzNFxcdTAxMzZcXHUwMTM5XFx1MDEzQlxcdTAxM0RcXHUwMTNGXFx1MDE0MVxcdTAxNDNcXHUwMTQ1XFx1MDE0N1xcdTAxNEFcXHUwMTRDXFx1MDE0RVxcdTAxNTBcXHUwMTUyXFx1MDE1NFxcdTAxNTZcXHUwMTU4XFx1MDE1QVxcdTAxNUNcXHUwMTVFXFx1MDE2MFxcdTAxNjJcXHUwMTY0XFx1MDE2NlxcdTAxNjhcXHUwMTZBXFx1MDE2Q1xcdTAxNkVcXHUwMTcwXFx1MDE3MlxcdTAxNzRcXHUwMTc2XFx1MDE3OFxcdTAxNzlcXHUwMTdCXFx1MDE3RFxcdTAxODFcXHUwMTgyXFx1MDE4NFxcdTAxODZcXHUwMTg3XFx1MDE4OS1cXHUwMThCXFx1MDE4RS1cXHUwMTkxXFx1MDE5M1xcdTAxOTRcXHUwMTk2LVxcdTAxOThcXHUwMTlDXFx1MDE5RFxcdTAxOUZcXHUwMUEwXFx1MDFBMlxcdTAxQTRcXHUwMUE2XFx1MDFBN1xcdTAxQTlcXHUwMUFDXFx1MDFBRVxcdTAxQUZcXHUwMUIxLVxcdTAxQjNcXHUwMUI1XFx1MDFCN1xcdTAxQjhcXHUwMUJDXFx1MDFDNFxcdTAxQzdcXHUwMUNBXFx1MDFDRFxcdTAxQ0ZcXHUwMUQxXFx1MDFEM1xcdTAxRDVcXHUwMUQ3XFx1MDFEOVxcdTAxREJcXHUwMURFXFx1MDFFMFxcdTAxRTJcXHUwMUU0XFx1MDFFNlxcdTAxRThcXHUwMUVBXFx1MDFFQ1xcdTAxRUVcXHUwMUYxXFx1MDFGNFxcdTAxRjYtXFx1MDFGOFxcdTAxRkFcXHUwMUZDXFx1MDFGRVxcdTAyMDBcXHUwMjAyXFx1MDIwNFxcdTAyMDZcXHUwMjA4XFx1MDIwQVxcdTAyMENcXHUwMjBFXFx1MDIxMFxcdTAyMTJcXHUwMjE0XFx1MDIxNlxcdTAyMThcXHUwMjFBXFx1MDIxQ1xcdTAyMUVcXHUwMjIwXFx1MDIyMlxcdTAyMjRcXHUwMjI2XFx1MDIyOFxcdTAyMkFcXHUwMjJDXFx1MDIyRVxcdTAyMzBcXHUwMjMyXFx1MDIzQVxcdTAyM0JcXHUwMjNEXFx1MDIzRVxcdTAyNDFcXHUwMjQzLVxcdTAyNDZcXHUwMjQ4XFx1MDI0QVxcdTAyNENcXHUwMjRFXFx1MDM3MFxcdTAzNzJcXHUwMzc2XFx1MDM3RlxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RVxcdTAzOEZcXHUwMzkxLVxcdTAzQTFcXHUwM0EzLVxcdTAzQUJcXHUwM0NGXFx1MDNEMi1cXHUwM0Q0XFx1MDNEOFxcdTAzREFcXHUwM0RDXFx1MDNERVxcdTAzRTBcXHUwM0UyXFx1MDNFNFxcdTAzRTZcXHUwM0U4XFx1MDNFQVxcdTAzRUNcXHUwM0VFXFx1MDNGNFxcdTAzRjdcXHUwM0Y5XFx1MDNGQVxcdTAzRkQtXFx1MDQyRlxcdTA0NjBcXHUwNDYyXFx1MDQ2NFxcdTA0NjZcXHUwNDY4XFx1MDQ2QVxcdTA0NkNcXHUwNDZFXFx1MDQ3MFxcdTA0NzJcXHUwNDc0XFx1MDQ3NlxcdTA0NzhcXHUwNDdBXFx1MDQ3Q1xcdTA0N0VcXHUwNDgwXFx1MDQ4QVxcdTA0OENcXHUwNDhFXFx1MDQ5MFxcdTA0OTJcXHUwNDk0XFx1MDQ5NlxcdTA0OThcXHUwNDlBXFx1MDQ5Q1xcdTA0OUVcXHUwNEEwXFx1MDRBMlxcdTA0QTRcXHUwNEE2XFx1MDRBOFxcdTA0QUFcXHUwNEFDXFx1MDRBRVxcdTA0QjBcXHUwNEIyXFx1MDRCNFxcdTA0QjZcXHUwNEI4XFx1MDRCQVxcdTA0QkNcXHUwNEJFXFx1MDRDMFxcdTA0QzFcXHUwNEMzXFx1MDRDNVxcdTA0QzdcXHUwNEM5XFx1MDRDQlxcdTA0Q0RcXHUwNEQwXFx1MDREMlxcdTA0RDRcXHUwNEQ2XFx1MDREOFxcdTA0REFcXHUwNERDXFx1MDRERVxcdTA0RTBcXHUwNEUyXFx1MDRFNFxcdTA0RTZcXHUwNEU4XFx1MDRFQVxcdTA0RUNcXHUwNEVFXFx1MDRGMFxcdTA0RjJcXHUwNEY0XFx1MDRGNlxcdTA0RjhcXHUwNEZBXFx1MDRGQ1xcdTA0RkVcXHUwNTAwXFx1MDUwMlxcdTA1MDRcXHUwNTA2XFx1MDUwOFxcdTA1MEFcXHUwNTBDXFx1MDUwRVxcdTA1MTBcXHUwNTEyXFx1MDUxNFxcdTA1MTZcXHUwNTE4XFx1MDUxQVxcdTA1MUNcXHUwNTFFXFx1MDUyMFxcdTA1MjJcXHUwNTI0XFx1MDUyNlxcdTA1MjhcXHUwNTJBXFx1MDUyQ1xcdTA1MkVcXHUwNTMxLVxcdTA1NTZcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEzQTAtXFx1MTNGNVxcdTFFMDBcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUxRTA4XFx1MUUwQVxcdTFFMENcXHUxRTBFXFx1MUUxMFxcdTFFMTJcXHUxRTE0XFx1MUUxNlxcdTFFMThcXHUxRTFBXFx1MUUxQ1xcdTFFMUVcXHUxRTIwXFx1MUUyMlxcdTFFMjRcXHUxRTI2XFx1MUUyOFxcdTFFMkFcXHUxRTJDXFx1MUUyRVxcdTFFMzBcXHUxRTMyXFx1MUUzNFxcdTFFMzZcXHUxRTM4XFx1MUUzQVxcdTFFM0NcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUxRTQ0XFx1MUU0NlxcdTFFNDhcXHUxRTRBXFx1MUU0Q1xcdTFFNEVcXHUxRTUwXFx1MUU1MlxcdTFFNTRcXHUxRTU2XFx1MUU1OFxcdTFFNUFcXHUxRTVDXFx1MUU1RVxcdTFFNjBcXHUxRTYyXFx1MUU2NFxcdTFFNjZcXHUxRTY4XFx1MUU2QVxcdTFFNkNcXHUxRTZFXFx1MUU3MFxcdTFFNzJcXHUxRTc0XFx1MUU3NlxcdTFFNzhcXHUxRTdBXFx1MUU3Q1xcdTFFN0VcXHUxRTgwXFx1MUU4MlxcdTFFODRcXHUxRTg2XFx1MUU4OFxcdTFFOEFcXHUxRThDXFx1MUU4RVxcdTFFOTBcXHUxRTkyXFx1MUU5NFxcdTFFOUVcXHUxRUEwXFx1MUVBMlxcdTFFQTRcXHUxRUE2XFx1MUVBOFxcdTFFQUFcXHUxRUFDXFx1MUVBRVxcdTFFQjBcXHUxRUIyXFx1MUVCNFxcdTFFQjZcXHUxRUI4XFx1MUVCQVxcdTFFQkNcXHUxRUJFXFx1MUVDMFxcdTFFQzJcXHUxRUM0XFx1MUVDNlxcdTFFQzhcXHUxRUNBXFx1MUVDQ1xcdTFFQ0VcXHUxRUQwXFx1MUVEMlxcdTFFRDRcXHUxRUQ2XFx1MUVEOFxcdTFFREFcXHUxRURDXFx1MUVERVxcdTFFRTBcXHUxRUUyXFx1MUVFNFxcdTFFRTZcXHUxRUU4XFx1MUVFQVxcdTFFRUNcXHUxRUVFXFx1MUVGMFxcdTFFRjJcXHUxRUY0XFx1MUVGNlxcdTFFRjhcXHUxRUZBXFx1MUVGQ1xcdTFFRkVcXHUxRjA4LVxcdTFGMEZcXHUxRjE4LVxcdTFGMURcXHUxRjI4LVxcdTFGMkZcXHUxRjM4LVxcdTFGM0ZcXHUxRjQ4LVxcdTFGNERcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGXFx1MUY2OC1cXHUxRjZGXFx1MUZCOC1cXHUxRkJCXFx1MUZDOC1cXHUxRkNCXFx1MUZEOC1cXHUxRkRCXFx1MUZFOC1cXHUxRkVDXFx1MUZGOC1cXHUxRkZCXFx1MjEwMlxcdTIxMDdcXHUyMTBCLVxcdTIxMERcXHUyMTEwLVxcdTIxMTJcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEzMC1cXHUyMTMzXFx1MjEzRVxcdTIxM0ZcXHUyMTQ1XFx1MjE4M1xcdTJDMDAtXFx1MkMyRVxcdTJDNjBcXHUyQzYyLVxcdTJDNjRcXHUyQzY3XFx1MkM2OVxcdTJDNkJcXHUyQzZELVxcdTJDNzBcXHUyQzcyXFx1MkM3NVxcdTJDN0UtXFx1MkM4MFxcdTJDODJcXHUyQzg0XFx1MkM4NlxcdTJDODhcXHUyQzhBXFx1MkM4Q1xcdTJDOEVcXHUyQzkwXFx1MkM5MlxcdTJDOTRcXHUyQzk2XFx1MkM5OFxcdTJDOUFcXHUyQzlDXFx1MkM5RVxcdTJDQTBcXHUyQ0EyXFx1MkNBNFxcdTJDQTZcXHUyQ0E4XFx1MkNBQVxcdTJDQUNcXHUyQ0FFXFx1MkNCMFxcdTJDQjJcXHUyQ0I0XFx1MkNCNlxcdTJDQjhcXHUyQ0JBXFx1MkNCQ1xcdTJDQkVcXHUyQ0MwXFx1MkNDMlxcdTJDQzRcXHUyQ0M2XFx1MkNDOFxcdTJDQ0FcXHUyQ0NDXFx1MkNDRVxcdTJDRDBcXHUyQ0QyXFx1MkNENFxcdTJDRDZcXHUyQ0Q4XFx1MkNEQVxcdTJDRENcXHUyQ0RFXFx1MkNFMFxcdTJDRTJcXHUyQ0VCXFx1MkNFRFxcdTJDRjJcXHVBNjQwXFx1QTY0MlxcdUE2NDRcXHVBNjQ2XFx1QTY0OFxcdUE2NEFcXHVBNjRDXFx1QTY0RVxcdUE2NTBcXHVBNjUyXFx1QTY1NFxcdUE2NTZcXHVBNjU4XFx1QTY1QVxcdUE2NUNcXHVBNjVFXFx1QTY2MFxcdUE2NjJcXHVBNjY0XFx1QTY2NlxcdUE2NjhcXHVBNjZBXFx1QTY2Q1xcdUE2ODBcXHVBNjgyXFx1QTY4NFxcdUE2ODZcXHVBNjg4XFx1QTY4QVxcdUE2OENcXHVBNjhFXFx1QTY5MFxcdUE2OTJcXHVBNjk0XFx1QTY5NlxcdUE2OThcXHVBNjlBXFx1QTcyMlxcdUE3MjRcXHVBNzI2XFx1QTcyOFxcdUE3MkFcXHVBNzJDXFx1QTcyRVxcdUE3MzJcXHVBNzM0XFx1QTczNlxcdUE3MzhcXHVBNzNBXFx1QTczQ1xcdUE3M0VcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBNzQ2XFx1QTc0OFxcdUE3NEFcXHVBNzRDXFx1QTc0RVxcdUE3NTBcXHVBNzUyXFx1QTc1NFxcdUE3NTZcXHVBNzU4XFx1QTc1QVxcdUE3NUNcXHVBNzVFXFx1QTc2MFxcdUE3NjJcXHVBNzY0XFx1QTc2NlxcdUE3NjhcXHVBNzZBXFx1QTc2Q1xcdUE3NkVcXHVBNzc5XFx1QTc3QlxcdUE3N0RcXHVBNzdFXFx1QTc4MFxcdUE3ODJcXHVBNzg0XFx1QTc4NlxcdUE3OEJcXHVBNzhEXFx1QTc5MFxcdUE3OTJcXHVBNzk2XFx1QTc5OFxcdUE3OUFcXHVBNzlDXFx1QTc5RVxcdUE3QTBcXHVBN0EyXFx1QTdBNFxcdUE3QTZcXHVBN0E4XFx1QTdBQS1cXHVBN0FEXFx1QTdCMC1cXHVBN0I0XFx1QTdCNlxcdUZGMjEtXFx1RkYzQV0pKFtBLVpcXHhDMC1cXHhENlxceEQ4LVxceERFXFx1MDEwMFxcdTAxMDJcXHUwMTA0XFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAxMEVcXHUwMTEwXFx1MDExMlxcdTAxMTRcXHUwMTE2XFx1MDExOFxcdTAxMUFcXHUwMTFDXFx1MDExRVxcdTAxMjBcXHUwMTIyXFx1MDEyNFxcdTAxMjZcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTJFXFx1MDEzMFxcdTAxMzJcXHUwMTM0XFx1MDEzNlxcdTAxMzlcXHUwMTNCXFx1MDEzRFxcdTAxM0ZcXHUwMTQxXFx1MDE0M1xcdTAxNDVcXHUwMTQ3XFx1MDE0QVxcdTAxNENcXHUwMTRFXFx1MDE1MFxcdTAxNTJcXHUwMTU0XFx1MDE1NlxcdTAxNThcXHUwMTVBXFx1MDE1Q1xcdTAxNUVcXHUwMTYwXFx1MDE2MlxcdTAxNjRcXHUwMTY2XFx1MDE2OFxcdTAxNkFcXHUwMTZDXFx1MDE2RVxcdTAxNzBcXHUwMTcyXFx1MDE3NFxcdTAxNzZcXHUwMTc4XFx1MDE3OVxcdTAxN0JcXHUwMTdEXFx1MDE4MVxcdTAxODJcXHUwMTg0XFx1MDE4NlxcdTAxODdcXHUwMTg5LVxcdTAxOEJcXHUwMThFLVxcdTAxOTFcXHUwMTkzXFx1MDE5NFxcdTAxOTYtXFx1MDE5OFxcdTAxOUNcXHUwMTlEXFx1MDE5RlxcdTAxQTBcXHUwMUEyXFx1MDFBNFxcdTAxQTZcXHUwMUE3XFx1MDFBOVxcdTAxQUNcXHUwMUFFXFx1MDFBRlxcdTAxQjEtXFx1MDFCM1xcdTAxQjVcXHUwMUI3XFx1MDFCOFxcdTAxQkNcXHUwMUM0XFx1MDFDN1xcdTAxQ0FcXHUwMUNEXFx1MDFDRlxcdTAxRDFcXHUwMUQzXFx1MDFENVxcdTAxRDdcXHUwMUQ5XFx1MDFEQlxcdTAxREVcXHUwMUUwXFx1MDFFMlxcdTAxRTRcXHUwMUU2XFx1MDFFOFxcdTAxRUFcXHUwMUVDXFx1MDFFRVxcdTAxRjFcXHUwMUY0XFx1MDFGNi1cXHUwMUY4XFx1MDFGQVxcdTAxRkNcXHUwMUZFXFx1MDIwMFxcdTAyMDJcXHUwMjA0XFx1MDIwNlxcdTAyMDhcXHUwMjBBXFx1MDIwQ1xcdTAyMEVcXHUwMjEwXFx1MDIxMlxcdTAyMTRcXHUwMjE2XFx1MDIxOFxcdTAyMUFcXHUwMjFDXFx1MDIxRVxcdTAyMjBcXHUwMjIyXFx1MDIyNFxcdTAyMjZcXHUwMjI4XFx1MDIyQVxcdTAyMkNcXHUwMjJFXFx1MDIzMFxcdTAyMzJcXHUwMjNBXFx1MDIzQlxcdTAyM0RcXHUwMjNFXFx1MDI0MVxcdTAyNDMtXFx1MDI0NlxcdTAyNDhcXHUwMjRBXFx1MDI0Q1xcdTAyNEVcXHUwMzcwXFx1MDM3MlxcdTAzNzZcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFXFx1MDM4RlxcdTAzOTEtXFx1MDNBMVxcdTAzQTMtXFx1MDNBQlxcdTAzQ0ZcXHUwM0QyLVxcdTAzRDRcXHUwM0Q4XFx1MDNEQVxcdTAzRENcXHUwM0RFXFx1MDNFMFxcdTAzRTJcXHUwM0U0XFx1MDNFNlxcdTAzRThcXHUwM0VBXFx1MDNFQ1xcdTAzRUVcXHUwM0Y0XFx1MDNGN1xcdTAzRjlcXHUwM0ZBXFx1MDNGRC1cXHUwNDJGXFx1MDQ2MFxcdTA0NjJcXHUwNDY0XFx1MDQ2NlxcdTA0NjhcXHUwNDZBXFx1MDQ2Q1xcdTA0NkVcXHUwNDcwXFx1MDQ3MlxcdTA0NzRcXHUwNDc2XFx1MDQ3OFxcdTA0N0FcXHUwNDdDXFx1MDQ3RVxcdTA0ODBcXHUwNDhBXFx1MDQ4Q1xcdTA0OEVcXHUwNDkwXFx1MDQ5MlxcdTA0OTRcXHUwNDk2XFx1MDQ5OFxcdTA0OUFcXHUwNDlDXFx1MDQ5RVxcdTA0QTBcXHUwNEEyXFx1MDRBNFxcdTA0QTZcXHUwNEE4XFx1MDRBQVxcdTA0QUNcXHUwNEFFXFx1MDRCMFxcdTA0QjJcXHUwNEI0XFx1MDRCNlxcdTA0QjhcXHUwNEJBXFx1MDRCQ1xcdTA0QkVcXHUwNEMwXFx1MDRDMVxcdTA0QzNcXHUwNEM1XFx1MDRDN1xcdTA0QzlcXHUwNENCXFx1MDRDRFxcdTA0RDBcXHUwNEQyXFx1MDRENFxcdTA0RDZcXHUwNEQ4XFx1MDREQVxcdTA0RENcXHUwNERFXFx1MDRFMFxcdTA0RTJcXHUwNEU0XFx1MDRFNlxcdTA0RThcXHUwNEVBXFx1MDRFQ1xcdTA0RUVcXHUwNEYwXFx1MDRGMlxcdTA0RjRcXHUwNEY2XFx1MDRGOFxcdTA0RkFcXHUwNEZDXFx1MDRGRVxcdTA1MDBcXHUwNTAyXFx1MDUwNFxcdTA1MDZcXHUwNTA4XFx1MDUwQVxcdTA1MENcXHUwNTBFXFx1MDUxMFxcdTA1MTJcXHUwNTE0XFx1MDUxNlxcdTA1MThcXHUwNTFBXFx1MDUxQ1xcdTA1MUVcXHUwNTIwXFx1MDUyMlxcdTA1MjRcXHUwNTI2XFx1MDUyOFxcdTA1MkFcXHUwNTJDXFx1MDUyRVxcdTA1MzEtXFx1MDU1NlxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTNBMC1cXHUxM0Y1XFx1MUUwMFxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTFFMDhcXHUxRTBBXFx1MUUwQ1xcdTFFMEVcXHUxRTEwXFx1MUUxMlxcdTFFMTRcXHUxRTE2XFx1MUUxOFxcdTFFMUFcXHUxRTFDXFx1MUUxRVxcdTFFMjBcXHUxRTIyXFx1MUUyNFxcdTFFMjZcXHUxRTI4XFx1MUUyQVxcdTFFMkNcXHUxRTJFXFx1MUUzMFxcdTFFMzJcXHUxRTM0XFx1MUUzNlxcdTFFMzhcXHUxRTNBXFx1MUUzQ1xcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTFFNDRcXHUxRTQ2XFx1MUU0OFxcdTFFNEFcXHUxRTRDXFx1MUU0RVxcdTFFNTBcXHUxRTUyXFx1MUU1NFxcdTFFNTZcXHUxRTU4XFx1MUU1QVxcdTFFNUNcXHUxRTVFXFx1MUU2MFxcdTFFNjJcXHUxRTY0XFx1MUU2NlxcdTFFNjhcXHUxRTZBXFx1MUU2Q1xcdTFFNkVcXHUxRTcwXFx1MUU3MlxcdTFFNzRcXHUxRTc2XFx1MUU3OFxcdTFFN0FcXHUxRTdDXFx1MUU3RVxcdTFFODBcXHUxRTgyXFx1MUU4NFxcdTFFODZcXHUxRTg4XFx1MUU4QVxcdTFFOENcXHUxRThFXFx1MUU5MFxcdTFFOTJcXHUxRTk0XFx1MUU5RVxcdTFFQTBcXHUxRUEyXFx1MUVBNFxcdTFFQTZcXHUxRUE4XFx1MUVBQVxcdTFFQUNcXHUxRUFFXFx1MUVCMFxcdTFFQjJcXHUxRUI0XFx1MUVCNlxcdTFFQjhcXHUxRUJBXFx1MUVCQ1xcdTFFQkVcXHUxRUMwXFx1MUVDMlxcdTFFQzRcXHUxRUM2XFx1MUVDOFxcdTFFQ0FcXHUxRUNDXFx1MUVDRVxcdTFFRDBcXHUxRUQyXFx1MUVENFxcdTFFRDZcXHUxRUQ4XFx1MUVEQVxcdTFFRENcXHUxRURFXFx1MUVFMFxcdTFFRTJcXHUxRUU0XFx1MUVFNlxcdTFFRThcXHUxRUVBXFx1MUVFQ1xcdTFFRUVcXHUxRUYwXFx1MUVGMlxcdTFFRjRcXHUxRUY2XFx1MUVGOFxcdTFFRkFcXHUxRUZDXFx1MUVGRVxcdTFGMDgtXFx1MUYwRlxcdTFGMTgtXFx1MUYxRFxcdTFGMjgtXFx1MUYyRlxcdTFGMzgtXFx1MUYzRlxcdTFGNDgtXFx1MUY0RFxcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUZcXHUxRjY4LVxcdTFGNkZcXHUxRkI4LVxcdTFGQkJcXHUxRkM4LVxcdTFGQ0JcXHUxRkQ4LVxcdTFGREJcXHUxRkU4LVxcdTFGRUNcXHUxRkY4LVxcdTFGRkJcXHUyMTAyXFx1MjEwN1xcdTIxMEItXFx1MjEwRFxcdTIxMTAtXFx1MjExMlxcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTMwLVxcdTIxMzNcXHUyMTNFXFx1MjEzRlxcdTIxNDVcXHUyMTgzXFx1MkMwMC1cXHUyQzJFXFx1MkM2MFxcdTJDNjItXFx1MkM2NFxcdTJDNjdcXHUyQzY5XFx1MkM2QlxcdTJDNkQtXFx1MkM3MFxcdTJDNzJcXHUyQzc1XFx1MkM3RS1cXHUyQzgwXFx1MkM4MlxcdTJDODRcXHUyQzg2XFx1MkM4OFxcdTJDOEFcXHUyQzhDXFx1MkM4RVxcdTJDOTBcXHUyQzkyXFx1MkM5NFxcdTJDOTZcXHUyQzk4XFx1MkM5QVxcdTJDOUNcXHUyQzlFXFx1MkNBMFxcdTJDQTJcXHUyQ0E0XFx1MkNBNlxcdTJDQThcXHUyQ0FBXFx1MkNBQ1xcdTJDQUVcXHUyQ0IwXFx1MkNCMlxcdTJDQjRcXHUyQ0I2XFx1MkNCOFxcdTJDQkFcXHUyQ0JDXFx1MkNCRVxcdTJDQzBcXHUyQ0MyXFx1MkNDNFxcdTJDQzZcXHUyQ0M4XFx1MkNDQVxcdTJDQ0NcXHUyQ0NFXFx1MkNEMFxcdTJDRDJcXHUyQ0Q0XFx1MkNENlxcdTJDRDhcXHUyQ0RBXFx1MkNEQ1xcdTJDREVcXHUyQ0UwXFx1MkNFMlxcdTJDRUJcXHUyQ0VEXFx1MkNGMlxcdUE2NDBcXHVBNjQyXFx1QTY0NFxcdUE2NDZcXHVBNjQ4XFx1QTY0QVxcdUE2NENcXHVBNjRFXFx1QTY1MFxcdUE2NTJcXHVBNjU0XFx1QTY1NlxcdUE2NThcXHVBNjVBXFx1QTY1Q1xcdUE2NUVcXHVBNjYwXFx1QTY2MlxcdUE2NjRcXHVBNjY2XFx1QTY2OFxcdUE2NkFcXHVBNjZDXFx1QTY4MFxcdUE2ODJcXHVBNjg0XFx1QTY4NlxcdUE2ODhcXHVBNjhBXFx1QTY4Q1xcdUE2OEVcXHVBNjkwXFx1QTY5MlxcdUE2OTRcXHVBNjk2XFx1QTY5OFxcdUE2OUFcXHVBNzIyXFx1QTcyNFxcdUE3MjZcXHVBNzI4XFx1QTcyQVxcdUE3MkNcXHVBNzJFXFx1QTczMlxcdUE3MzRcXHVBNzM2XFx1QTczOFxcdUE3M0FcXHVBNzNDXFx1QTczRVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3NDZcXHVBNzQ4XFx1QTc0QVxcdUE3NENcXHVBNzRFXFx1QTc1MFxcdUE3NTJcXHVBNzU0XFx1QTc1NlxcdUE3NThcXHVBNzVBXFx1QTc1Q1xcdUE3NUVcXHVBNzYwXFx1QTc2MlxcdUE3NjRcXHVBNzY2XFx1QTc2OFxcdUE3NkFcXHVBNzZDXFx1QTc2RVxcdUE3NzlcXHVBNzdCXFx1QTc3RFxcdUE3N0VcXHVBNzgwXFx1QTc4MlxcdUE3ODRcXHVBNzg2XFx1QTc4QlxcdUE3OERcXHVBNzkwXFx1QTc5MlxcdUE3OTZcXHVBNzk4XFx1QTc5QVxcdUE3OUNcXHVBNzlFXFx1QTdBMFxcdUE3QTJcXHVBN0E0XFx1QTdBNlxcdUE3QThcXHVBN0FBLVxcdUE3QURcXHVBN0IwLVxcdUE3QjRcXHVBN0I2XFx1RkYyMS1cXHVGRjNBXVthLXpcXHhCNVxceERGLVxceEY2XFx4RjgtXFx4RkZcXHUwMTAxXFx1MDEwM1xcdTAxMDVcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDEwRlxcdTAxMTFcXHUwMTEzXFx1MDExNVxcdTAxMTdcXHUwMTE5XFx1MDExQlxcdTAxMURcXHUwMTFGXFx1MDEyMVxcdTAxMjNcXHUwMTI1XFx1MDEyN1xcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAxMkZcXHUwMTMxXFx1MDEzM1xcdTAxMzVcXHUwMTM3XFx1MDEzOFxcdTAxM0FcXHUwMTNDXFx1MDEzRVxcdTAxNDBcXHUwMTQyXFx1MDE0NFxcdTAxNDZcXHUwMTQ4XFx1MDE0OVxcdTAxNEJcXHUwMTREXFx1MDE0RlxcdTAxNTFcXHUwMTUzXFx1MDE1NVxcdTAxNTdcXHUwMTU5XFx1MDE1QlxcdTAxNURcXHUwMTVGXFx1MDE2MVxcdTAxNjNcXHUwMTY1XFx1MDE2N1xcdTAxNjlcXHUwMTZCXFx1MDE2RFxcdTAxNkZcXHUwMTcxXFx1MDE3M1xcdTAxNzVcXHUwMTc3XFx1MDE3QVxcdTAxN0NcXHUwMTdFLVxcdTAxODBcXHUwMTgzXFx1MDE4NVxcdTAxODhcXHUwMThDXFx1MDE4RFxcdTAxOTJcXHUwMTk1XFx1MDE5OS1cXHUwMTlCXFx1MDE5RVxcdTAxQTFcXHUwMUEzXFx1MDFBNVxcdTAxQThcXHUwMUFBXFx1MDFBQlxcdTAxQURcXHUwMUIwXFx1MDFCNFxcdTAxQjZcXHUwMUI5XFx1MDFCQVxcdTAxQkQtXFx1MDFCRlxcdTAxQzZcXHUwMUM5XFx1MDFDQ1xcdTAxQ0VcXHUwMUQwXFx1MDFEMlxcdTAxRDRcXHUwMUQ2XFx1MDFEOFxcdTAxREFcXHUwMURDXFx1MDFERFxcdTAxREZcXHUwMUUxXFx1MDFFM1xcdTAxRTVcXHUwMUU3XFx1MDFFOVxcdTAxRUJcXHUwMUVEXFx1MDFFRlxcdTAxRjBcXHUwMUYzXFx1MDFGNVxcdTAxRjlcXHUwMUZCXFx1MDFGRFxcdTAxRkZcXHUwMjAxXFx1MDIwM1xcdTAyMDVcXHUwMjA3XFx1MDIwOVxcdTAyMEJcXHUwMjBEXFx1MDIwRlxcdTAyMTFcXHUwMjEzXFx1MDIxNVxcdTAyMTdcXHUwMjE5XFx1MDIxQlxcdTAyMURcXHUwMjFGXFx1MDIyMVxcdTAyMjNcXHUwMjI1XFx1MDIyN1xcdTAyMjlcXHUwMjJCXFx1MDIyRFxcdTAyMkZcXHUwMjMxXFx1MDIzMy1cXHUwMjM5XFx1MDIzQ1xcdTAyM0ZcXHUwMjQwXFx1MDI0MlxcdTAyNDdcXHUwMjQ5XFx1MDI0QlxcdTAyNERcXHUwMjRGLVxcdTAyOTNcXHUwMjk1LVxcdTAyQUZcXHUwMzcxXFx1MDM3M1xcdTAzNzdcXHUwMzdCLVxcdTAzN0RcXHUwMzkwXFx1MDNBQy1cXHUwM0NFXFx1MDNEMFxcdTAzRDFcXHUwM0Q1LVxcdTAzRDdcXHUwM0Q5XFx1MDNEQlxcdTAzRERcXHUwM0RGXFx1MDNFMVxcdTAzRTNcXHUwM0U1XFx1MDNFN1xcdTAzRTlcXHUwM0VCXFx1MDNFRFxcdTAzRUYtXFx1MDNGM1xcdTAzRjVcXHUwM0Y4XFx1MDNGQlxcdTAzRkNcXHUwNDMwLVxcdTA0NUZcXHUwNDYxXFx1MDQ2M1xcdTA0NjVcXHUwNDY3XFx1MDQ2OVxcdTA0NkJcXHUwNDZEXFx1MDQ2RlxcdTA0NzFcXHUwNDczXFx1MDQ3NVxcdTA0NzdcXHUwNDc5XFx1MDQ3QlxcdTA0N0RcXHUwNDdGXFx1MDQ4MVxcdTA0OEJcXHUwNDhEXFx1MDQ4RlxcdTA0OTFcXHUwNDkzXFx1MDQ5NVxcdTA0OTdcXHUwNDk5XFx1MDQ5QlxcdTA0OURcXHUwNDlGXFx1MDRBMVxcdTA0QTNcXHUwNEE1XFx1MDRBN1xcdTA0QTlcXHUwNEFCXFx1MDRBRFxcdTA0QUZcXHUwNEIxXFx1MDRCM1xcdTA0QjVcXHUwNEI3XFx1MDRCOVxcdTA0QkJcXHUwNEJEXFx1MDRCRlxcdTA0QzJcXHUwNEM0XFx1MDRDNlxcdTA0QzhcXHUwNENBXFx1MDRDQ1xcdTA0Q0VcXHUwNENGXFx1MDREMVxcdTA0RDNcXHUwNEQ1XFx1MDREN1xcdTA0RDlcXHUwNERCXFx1MDRERFxcdTA0REZcXHUwNEUxXFx1MDRFM1xcdTA0RTVcXHUwNEU3XFx1MDRFOVxcdTA0RUJcXHUwNEVEXFx1MDRFRlxcdTA0RjFcXHUwNEYzXFx1MDRGNVxcdTA0RjdcXHUwNEY5XFx1MDRGQlxcdTA0RkRcXHUwNEZGXFx1MDUwMVxcdTA1MDNcXHUwNTA1XFx1MDUwN1xcdTA1MDlcXHUwNTBCXFx1MDUwRFxcdTA1MEZcXHUwNTExXFx1MDUxM1xcdTA1MTVcXHUwNTE3XFx1MDUxOVxcdTA1MUJcXHUwNTFEXFx1MDUxRlxcdTA1MjFcXHUwNTIzXFx1MDUyNVxcdTA1MjdcXHUwNTI5XFx1MDUyQlxcdTA1MkRcXHUwNTJGXFx1MDU2MS1cXHUwNTg3XFx1MTNGOC1cXHUxM0ZEXFx1MUQwMC1cXHUxRDJCXFx1MUQ2Qi1cXHUxRDc3XFx1MUQ3OS1cXHUxRDlBXFx1MUUwMVxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTFFMDlcXHUxRTBCXFx1MUUwRFxcdTFFMEZcXHUxRTExXFx1MUUxM1xcdTFFMTVcXHUxRTE3XFx1MUUxOVxcdTFFMUJcXHUxRTFEXFx1MUUxRlxcdTFFMjFcXHUxRTIzXFx1MUUyNVxcdTFFMjdcXHUxRTI5XFx1MUUyQlxcdTFFMkRcXHUxRTJGXFx1MUUzMVxcdTFFMzNcXHUxRTM1XFx1MUUzN1xcdTFFMzlcXHUxRTNCXFx1MUUzRFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTFFNDVcXHUxRTQ3XFx1MUU0OVxcdTFFNEJcXHUxRTREXFx1MUU0RlxcdTFFNTFcXHUxRTUzXFx1MUU1NVxcdTFFNTdcXHUxRTU5XFx1MUU1QlxcdTFFNURcXHUxRTVGXFx1MUU2MVxcdTFFNjNcXHUxRTY1XFx1MUU2N1xcdTFFNjlcXHUxRTZCXFx1MUU2RFxcdTFFNkZcXHUxRTcxXFx1MUU3M1xcdTFFNzVcXHUxRTc3XFx1MUU3OVxcdTFFN0JcXHUxRTdEXFx1MUU3RlxcdTFFODFcXHUxRTgzXFx1MUU4NVxcdTFFODdcXHUxRTg5XFx1MUU4QlxcdTFFOERcXHUxRThGXFx1MUU5MVxcdTFFOTNcXHUxRTk1LVxcdTFFOURcXHUxRTlGXFx1MUVBMVxcdTFFQTNcXHUxRUE1XFx1MUVBN1xcdTFFQTlcXHUxRUFCXFx1MUVBRFxcdTFFQUZcXHUxRUIxXFx1MUVCM1xcdTFFQjVcXHUxRUI3XFx1MUVCOVxcdTFFQkJcXHUxRUJEXFx1MUVCRlxcdTFFQzFcXHUxRUMzXFx1MUVDNVxcdTFFQzdcXHUxRUM5XFx1MUVDQlxcdTFFQ0RcXHUxRUNGXFx1MUVEMVxcdTFFRDNcXHUxRUQ1XFx1MUVEN1xcdTFFRDlcXHUxRURCXFx1MUVERFxcdTFFREZcXHUxRUUxXFx1MUVFM1xcdTFFRTVcXHUxRUU3XFx1MUVFOVxcdTFFRUJcXHUxRUVEXFx1MUVFRlxcdTFFRjFcXHUxRUYzXFx1MUVGNVxcdTFFRjdcXHUxRUY5XFx1MUVGQlxcdTFFRkRcXHUxRUZGLVxcdTFGMDdcXHUxRjEwLVxcdTFGMTVcXHUxRjIwLVxcdTFGMjdcXHUxRjMwLVxcdTFGMzdcXHUxRjQwLVxcdTFGNDVcXHUxRjUwLVxcdTFGNTdcXHUxRjYwLVxcdTFGNjdcXHUxRjcwLVxcdTFGN0RcXHUxRjgwLVxcdTFGODdcXHUxRjkwLVxcdTFGOTdcXHUxRkEwLVxcdTFGQTdcXHUxRkIwLVxcdTFGQjRcXHUxRkI2XFx1MUZCN1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2XFx1MUZDN1xcdTFGRDAtXFx1MUZEM1xcdTFGRDZcXHUxRkQ3XFx1MUZFMC1cXHUxRkU3XFx1MUZGMi1cXHUxRkY0XFx1MUZGNlxcdTFGRjdcXHUyMTBBXFx1MjEwRVxcdTIxMEZcXHUyMTEzXFx1MjEyRlxcdTIxMzRcXHUyMTM5XFx1MjEzQ1xcdTIxM0RcXHUyMTQ2LVxcdTIxNDlcXHUyMTRFXFx1MjE4NFxcdTJDMzAtXFx1MkM1RVxcdTJDNjFcXHUyQzY1XFx1MkM2NlxcdTJDNjhcXHUyQzZBXFx1MkM2Q1xcdTJDNzFcXHUyQzczXFx1MkM3NFxcdTJDNzYtXFx1MkM3QlxcdTJDODFcXHUyQzgzXFx1MkM4NVxcdTJDODdcXHUyQzg5XFx1MkM4QlxcdTJDOERcXHUyQzhGXFx1MkM5MVxcdTJDOTNcXHUyQzk1XFx1MkM5N1xcdTJDOTlcXHUyQzlCXFx1MkM5RFxcdTJDOUZcXHUyQ0ExXFx1MkNBM1xcdTJDQTVcXHUyQ0E3XFx1MkNBOVxcdTJDQUJcXHUyQ0FEXFx1MkNBRlxcdTJDQjFcXHUyQ0IzXFx1MkNCNVxcdTJDQjdcXHUyQ0I5XFx1MkNCQlxcdTJDQkRcXHUyQ0JGXFx1MkNDMVxcdTJDQzNcXHUyQ0M1XFx1MkNDN1xcdTJDQzlcXHUyQ0NCXFx1MkNDRFxcdTJDQ0ZcXHUyQ0QxXFx1MkNEM1xcdTJDRDVcXHUyQ0Q3XFx1MkNEOVxcdTJDREJcXHUyQ0REXFx1MkNERlxcdTJDRTFcXHUyQ0UzXFx1MkNFNFxcdTJDRUNcXHUyQ0VFXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1QTY0MVxcdUE2NDNcXHVBNjQ1XFx1QTY0N1xcdUE2NDlcXHVBNjRCXFx1QTY0RFxcdUE2NEZcXHVBNjUxXFx1QTY1M1xcdUE2NTVcXHVBNjU3XFx1QTY1OVxcdUE2NUJcXHVBNjVEXFx1QTY1RlxcdUE2NjFcXHVBNjYzXFx1QTY2NVxcdUE2NjdcXHVBNjY5XFx1QTY2QlxcdUE2NkRcXHVBNjgxXFx1QTY4M1xcdUE2ODVcXHVBNjg3XFx1QTY4OVxcdUE2OEJcXHVBNjhEXFx1QTY4RlxcdUE2OTFcXHVBNjkzXFx1QTY5NVxcdUE2OTdcXHVBNjk5XFx1QTY5QlxcdUE3MjNcXHVBNzI1XFx1QTcyN1xcdUE3MjlcXHVBNzJCXFx1QTcyRFxcdUE3MkYtXFx1QTczMVxcdUE3MzNcXHVBNzM1XFx1QTczN1xcdUE3MzlcXHVBNzNCXFx1QTczRFxcdUE3M0ZcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBNzQ3XFx1QTc0OVxcdUE3NEJcXHVBNzREXFx1QTc0RlxcdUE3NTFcXHVBNzUzXFx1QTc1NVxcdUE3NTdcXHVBNzU5XFx1QTc1QlxcdUE3NURcXHVBNzVGXFx1QTc2MVxcdUE3NjNcXHVBNzY1XFx1QTc2N1xcdUE3NjlcXHVBNzZCXFx1QTc2RFxcdUE3NkZcXHVBNzcxLVxcdUE3NzhcXHVBNzdBXFx1QTc3Q1xcdUE3N0ZcXHVBNzgxXFx1QTc4M1xcdUE3ODVcXHVBNzg3XFx1QTc4Q1xcdUE3OEVcXHVBNzkxXFx1QTc5My1cXHVBNzk1XFx1QTc5N1xcdUE3OTlcXHVBNzlCXFx1QTc5RFxcdUE3OUZcXHVBN0ExXFx1QTdBM1xcdUE3QTVcXHVBN0E3XFx1QTdBOVxcdUE3QjVcXHVBN0I3XFx1QTdGQVxcdUFCMzAtXFx1QUI1QVxcdUFCNjAtXFx1QUI2NVxcdUFCNzAtXFx1QUJCRlxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZGNDEtXFx1RkY1QV0pL2dcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vLWNhc2UvdmVuZG9yL2NhbWVsLWNhc2UtdXBwZXItcmVnZXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciBub0Nhc2UgPSByZXF1aXJlKCduby1jYXNlJylcblxuLyoqXG4gKiBEb3QgY2FzZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5vQ2FzZSh2YWx1ZSwgbG9jYWxlLCAnLicpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kb3QtY2FzZS9kb3QtY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgdXBwZXJDYXNlID0gcmVxdWlyZSgndXBwZXItY2FzZScpXG52YXIgbG93ZXJDYXNlID0gcmVxdWlyZSgnbG93ZXItY2FzZScpXG5cbi8qKlxuICogU3dhcCB0aGUgY2FzZSBvZiBhIHN0cmluZy4gTWFudWFsbHkgaXRlcmF0ZSBvdmVyIGV2ZXJ5IGNoYXJhY3RlciBhbmQgY2hlY2tcbiAqIGluc3RlYWQgb2YgcmVwbGFjaW5nIGNlcnRhaW4gY2hhcmFjdGVycyBmb3IgYmV0dGVyIHVuaWNvZGUgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHBhcmFtICB7U3RyaW5nfSBbbG9jYWxlXVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIGxvY2FsZSkge1xuICBpZiAoc3RyID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHZhciByZXN1bHQgPSAnJ1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGMgPSBzdHJbaV1cbiAgICB2YXIgdSA9IHVwcGVyQ2FzZShjLCBsb2NhbGUpXG5cbiAgICByZXN1bHQgKz0gdSA9PT0gYyA/IGxvd2VyQ2FzZShjLCBsb2NhbGUpIDogdVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3dhcC1jYXNlL3N3YXAtY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgbm9DYXNlID0gcmVxdWlyZSgnbm8tY2FzZScpXG5cbi8qKlxuICogUGF0aCBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSAge3N0cmluZ30gW2xvY2FsZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGxvY2FsZSkge1xuICByZXR1cm4gbm9DYXNlKHZhbHVlLCBsb2NhbGUsICcvJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BhdGgtY2FzZS9wYXRoLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIG5vQ2FzZSA9IHJlcXVpcmUoJ25vLWNhc2UnKVxudmFyIHVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxuXG4vKipcbiAqIFRpdGxlIGNhc2UgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtICB7c3RyaW5nfSBbbG9jYWxlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbG9jYWxlKSB7XG4gIHJldHVybiBub0Nhc2UodmFsdWUsIGxvY2FsZSkucmVwbGFjZSgvXi58IC4vZywgZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gdXBwZXJDYXNlKG0sIGxvY2FsZSlcbiAgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpdGxlLWNhc2UvdGl0bGUtY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgbm9DYXNlID0gcmVxdWlyZSgnbm8tY2FzZScpXG5cbi8qKlxuICogUGFyYW0gY2FzZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5vQ2FzZSh2YWx1ZSwgbG9jYWxlLCAnLScpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wYXJhbS1jYXNlL3BhcmFtLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMTVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIG5vQ2FzZSA9IHJlcXVpcmUoJ25vLWNhc2UnKVxudmFyIHVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxuXG4vKipcbiAqIEhlYWRlciBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSAge3N0cmluZ30gW2xvY2FsZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGxvY2FsZSkge1xuICByZXR1cm4gbm9DYXNlKHZhbHVlLCBsb2NhbGUsICctJykucmVwbGFjZSgvXi58LS4vZywgZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gdXBwZXJDYXNlKG0sIGxvY2FsZSlcbiAgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hlYWRlci1jYXNlL2hlYWRlci1jYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciBjYW1lbENhc2UgPSByZXF1aXJlKCdjYW1lbC1jYXNlJylcbnZhciB1cHBlckNhc2VGaXJzdCA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UtZmlyc3QnKVxuXG4vKipcbiAqIFBhc2NhbCBjYXNlIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBbbG9jYWxlXVxuICogQHBhcmFtICB7Ym9vbGVhbn0gW21lcmdlTnVtYmVyc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGxvY2FsZSwgbWVyZ2VOdW1iZXJzKSB7XG4gIHJldHVybiB1cHBlckNhc2VGaXJzdChjYW1lbENhc2UodmFsdWUsIGxvY2FsZSwgbWVyZ2VOdW1iZXJzKSwgbG9jYWxlKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcGFzY2FsLWNhc2UvcGFzY2FsLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMTdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIHVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxudmFyIHNuYWtlQ2FzZSA9IHJlcXVpcmUoJ3NuYWtlLWNhc2UnKVxuXG4vKipcbiAqIENvbnN0YW50IGNhc2UgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtICB7c3RyaW5nfSBbbG9jYWxlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbG9jYWxlKSB7XG4gIHJldHVybiB1cHBlckNhc2Uoc25ha2VDYXNlKHZhbHVlLCBsb2NhbGUpLCBsb2NhbGUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb25zdGFudC1jYXNlL2NvbnN0YW50LWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMThcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIG5vQ2FzZSA9IHJlcXVpcmUoJ25vLWNhc2UnKVxudmFyIHVwcGVyQ2FzZUZpcnN0ID0gcmVxdWlyZSgndXBwZXItY2FzZS1maXJzdCcpXG5cbi8qKlxuICogU2VudGVuY2UgY2FzZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHVwcGVyQ2FzZUZpcnN0KG5vQ2FzZSh2YWx1ZSwgbG9jYWxlKSwgbG9jYWxlKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2VudGVuY2UtY2FzZS9zZW50ZW5jZS1jYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciB1cHBlckNhc2UgPSByZXF1aXJlKCd1cHBlci1jYXNlJylcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBpcyB1cHBlciBjYXNlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gIHN0cmluZ1xuICogQHBhcmFtICB7U3RyaW5nfSAgW2xvY2FsZV1cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgbG9jYWxlKSB7XG4gIHJldHVybiB1cHBlckNhc2Uoc3RyaW5nLCBsb2NhbGUpID09PSBzdHJpbmdcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzLXVwcGVyLWNhc2UvaXMtdXBwZXItY2FzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgbG93ZXJDYXNlID0gcmVxdWlyZSgnbG93ZXItY2FzZScpXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgaXMgbG93ZXIgY2FzZS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBzdHJpbmdcbiAqIEBwYXJhbSAge1N0cmluZ30gIFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIGxvY2FsZSkge1xuICByZXR1cm4gbG93ZXJDYXNlKHN0cmluZywgbG9jYWxlKSA9PT0gc3RyaW5nXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1sb3dlci1jYXNlL2lzLWxvd2VyLWNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMjFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIGxvd2VyQ2FzZSA9IHJlcXVpcmUoJ2xvd2VyLWNhc2UnKVxuXG4vKipcbiAqIExvd2VyIGNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIGxvY2FsZSkge1xuICBpZiAoc3RyID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHN0ciA9IFN0cmluZyhzdHIpXG5cbiAgcmV0dXJuIGxvd2VyQ2FzZShzdHIuY2hhckF0KDApLCBsb2NhbGUpICsgc3RyLnN1YnN0cigxKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS1maXJzdC9sb3dlci1jYXNlLWZpcnN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVTMjAxNSA9IHJlcXVpcmUoJy4vZXMyMDE1Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Fzc2lnbicpO1xuXG52YXIgRVMyMDE2ID0gYXNzaWduKGFzc2lnbih7fSwgRVMyMDE1KSwge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL3B1bGwvNjBcblx0U2FtZVZhbHVlTm9uTnVtYmVyOiBmdW5jdGlvbiBTYW1lVmFsdWVOb25OdW1iZXIoeCwgeSkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHggIT09IHR5cGVvZiB5KSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTYW1lVmFsdWVOb25OdW1iZXIgcmVxdWlyZXMgdHdvIG5vbi1udW1iZXIgdmFsdWVzIG9mIHRoZSBzYW1lIHR5cGUuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLlNhbWVWYWx1ZSh4LCB5KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRVMyMDE2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvZXMyMDE2LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNicpO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBhcnJheVNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG52YXIgc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgaXNCaW5hcnkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBiWzAxXSskL2kpO1xudmFyIGlzT2N0YWwgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS50ZXN0LCAvXjBvWzAtN10rJC9pKTtcbnZhciByZWdleEV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcbnZhciBub25XUyA9IFsnXFx1MDA4NScsICdcXHUyMDBiJywgJ1xcdWZmZmUnXS5qb2luKCcnKTtcbnZhciBub25XU3JlZ2V4ID0gbmV3IFJlZ0V4cCgnWycgKyBub25XUyArICddJywgJ2cnKTtcbnZhciBoYXNOb25XUyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIG5vbldTcmVnZXgpO1xudmFyIGludmFsaWRIZXhMaXRlcmFsID0gL15bLStdMHhbMC05YS1mXSskL2k7XG52YXIgaXNJbnZhbGlkSGV4TGl0ZXJhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIGludmFsaWRIZXhMaXRlcmFsKTtcblxuLy8gd2hpdGVzcGFjZSBmcm9tOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjUuNC4yMFxuLy8gaW1wbGVtZW50YXRpb24gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vYmxvYi92My40LjAvZXM1LXNoaW0uanMjTDEzMDQtTDEzMjRcbnZhciB3cyA9IFtcblx0J1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyxcblx0J1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4Jyxcblx0J1xcdTIwMjlcXHVGRUZGJ1xuXS5qb2luKCcnKTtcbnZhciB0cmltUmVnZXggPSBuZXcgUmVnRXhwKCcoXlsnICsgd3MgKyAnXSspfChbJyArIHdzICsgJ10rJCknLCAnZycpO1xudmFyIHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciB0cmltID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiByZXBsYWNlKHZhbHVlLCB0cmltUmVnZXgsICcnKTtcbn07XG5cbnZhciBFUzUgPSByZXF1aXJlKCcuL2VzNScpO1xuXG52YXIgaGFzUmVnRXhwTWF0Y2hlciA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hYnN0cmFjdC1vcGVyYXRpb25zXG52YXIgRVM2ID0gYXNzaWduKGFzc2lnbih7fSwgRVM1KSwge1xuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1jYWxsLWYtdi1hcmdzXG5cdENhbGw6IGZ1bmN0aW9uIENhbGwoRiwgVikge1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiBbXTtcblx0XHRpZiAoIXRoaXMuSXNDYWxsYWJsZShGKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihGICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gRi5hcHBseShWLCBhcmdzKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcmltaXRpdmVcblx0VG9QcmltaXRpdmU6IHRvUHJpbWl0aXZlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2Jvb2xlYW5cblx0Ly8gVG9Cb29sZWFuOiBFUzUuVG9Cb29sZWFuLFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b251bWJlclxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIoYXJndW1lbnQpIHtcblx0XHR2YXIgdmFsdWUgPSBpc1ByaW1pdGl2ZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBOdW1iZXIpO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKGlzQmluYXJ5KHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCAyKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzT2N0YWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHBhcnNlSW50ZWdlcihzdHJTbGljZSh2YWx1ZSwgMiksIDgpKTtcblx0XHRcdH0gZWxzZSBpZiAoaGFzTm9uV1ModmFsdWUpIHx8IGlzSW52YWxpZEhleExpdGVyYWwodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBOYU47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdHJpbW1lZCA9IHRyaW0odmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpbW1lZCAhPT0gdmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih0cmltbWVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnRlZ2VyXG5cdC8vIFRvSW50ZWdlcjogRVM1LlRvTnVtYmVyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDMyXG5cdC8vIFRvSW50MzI6IEVTNS5Ub0ludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQzMlxuXHQvLyBUb1VpbnQzMjogRVM1LlRvVWludDMyLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDE2XG5cdFRvSW50MTY6IGZ1bmN0aW9uIFRvSW50MTYoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50MTZiaXQgPSB0aGlzLlRvVWludDE2KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50MTZiaXQgPj0gMHg4MDAwID8gaW50MTZiaXQgLSAweDEwMDAwIDogaW50MTZiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDE2XG5cdC8vIFRvVWludDE2OiBFUzUuVG9VaW50MTYsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50OFxuXHRUb0ludDg6IGZ1bmN0aW9uIFRvSW50OChhcmd1bWVudCkge1xuXHRcdHZhciBpbnQ4Yml0ID0gdGhpcy5Ub1VpbnQ4KGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gaW50OGJpdCA+PSAweDgwID8gaW50OGJpdCAtIDB4MTAwIDogaW50OGJpdDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OFxuXHRUb1VpbnQ4OiBmdW5jdGlvbiBUb1VpbnQ4KGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50OGNsYW1wXG5cdFRvVWludDhDbGFtcDogZnVuY3Rpb24gVG9VaW50OENsYW1wKGFyZ3VtZW50KSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPD0gMCkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPj0gMHhGRikgeyByZXR1cm4gMHhGRjsgfVxuXHRcdHZhciBmID0gTWF0aC5mbG9vcihhcmd1bWVudCk7XG5cdFx0aWYgKGYgKyAwLjUgPCBudW1iZXIpIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0aWYgKG51bWJlciA8IGYgKyAwLjUpIHsgcmV0dXJuIGY7IH1cblx0XHRpZiAoZiAlIDIgIT09IDApIHsgcmV0dXJuIGYgKyAxOyB9XG5cdFx0cmV0dXJuIGY7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvc3RyaW5nXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9vYmplY3Rcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5SZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9wcm9wZXJ0eWtleVxuXHRUb1Byb3BlcnR5S2V5OiBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGtleSA9IHRoaXMuVG9QcmltaXRpdmUoYXJndW1lbnQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnID8ga2V5IDogdGhpcy5Ub1N0cmluZyhrZXkpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aFxuXHRUb0xlbmd0aDogZnVuY3Rpb24gVG9MZW5ndGgoYXJndW1lbnQpIHtcblx0XHR2YXIgbGVuID0gdGhpcy5Ub0ludGVnZXIoYXJndW1lbnQpO1xuXHRcdGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfSAvLyBpbmNsdWRlcyBjb252ZXJ0aW5nIC0wIHRvICswXG5cdFx0aWYgKGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHsgcmV0dXJuIE1BWF9TQUZFX0lOVEVHRVI7IH1cblx0XHRyZXR1cm4gbGVuO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jYW5vbmljYWxudW1lcmljaW5kZXhzdHJpbmdcblx0Q2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nOiBmdW5jdGlvbiBDYW5vbmljYWxOdW1lcmljSW5kZXhTdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodG9TdHIuY2FsbChhcmd1bWVudCkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChhcmd1bWVudCA9PT0gJy0wJykgeyByZXR1cm4gLTA7IH1cblx0XHR2YXIgbiA9IHRoaXMuVG9OdW1iZXIoYXJndW1lbnQpO1xuXHRcdGlmICh0aGlzLlNhbWVWYWx1ZSh0aGlzLlRvU3RyaW5nKG4pLCBhcmd1bWVudCkpIHsgcmV0dXJuIG47IH1cblx0XHRyZXR1cm4gdm9pZCAwO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5cdFJlcXVpcmVPYmplY3RDb2VyY2libGU6IEVTNS5DaGVja09iamVjdENvZXJjaWJsZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNhcnJheVxuXHRJc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY2FsbGFibGVcblx0Ly8gSXNDYWxsYWJsZTogRVM1LklzQ2FsbGFibGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzY29uc3RydWN0b3Jcblx0SXNDb25zdHJ1Y3RvcjogZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdmdW5jdGlvbicgJiYgISFhcmd1bWVudC5wcm90b3R5cGU7IC8vIHVuZm9ydHVuYXRlbHkgdGhlcmUncyBubyB3YXkgdG8gdHJ1bHkgY2hlY2sgdGhpcyB3aXRob3V0IHRyeS9jYXRjaCBgbmV3IGFyZ3VtZW50YFxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2V4dGVuc2libGUtb1xuXHRJc0V4dGVuc2libGU6IGZ1bmN0aW9uIElzRXh0ZW5zaWJsZShvYmopIHtcblx0XHRpZiAoIU9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmIChpc1ByaW1pdGl2ZShvYmopKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKG9iaik7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzaW50ZWdlclxuXHRJc0ludGVnZXI6IGZ1bmN0aW9uIElzSW50ZWdlcihhcmd1bWVudCkge1xuXHRcdGlmICh0eXBlb2YgYXJndW1lbnQgIT09ICdudW1iZXInIHx8ICRpc05hTihhcmd1bWVudCkgfHwgISRpc0Zpbml0ZShhcmd1bWVudCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dmFyIGFicyA9IE1hdGguYWJzKGFyZ3VtZW50KTtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihhYnMpID09PSBhYnM7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzcHJvcGVydHlrZXlcblx0SXNQcm9wZXJ0eUtleTogZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N5bWJvbCc7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzcmVnZXhwXG5cdElzUmVnRXhwOiBmdW5jdGlvbiBJc1JlZ0V4cChhcmd1bWVudCkge1xuXHRcdGlmICghYXJndW1lbnQgfHwgdHlwZW9mIGFyZ3VtZW50ICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoaGFzU3ltYm9scykge1xuXHRcdFx0dmFyIGlzUmVnRXhwID0gYXJndW1lbnRbU3ltYm9sLm1hdGNoXTtcblx0XHRcdGlmICh0eXBlb2YgaXNSZWdFeHAgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBFUzUuVG9Cb29sZWFuKGlzUmVnRXhwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGhhc1JlZ0V4cE1hdGNoZXIoYXJndW1lbnQpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWVcblx0Ly8gU2FtZVZhbHVlOiBFUzUuU2FtZVZhbHVlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1zYW1ldmFsdWV6ZXJvXG5cdFNhbWVWYWx1ZVplcm86IGZ1bmN0aW9uIFNhbWVWYWx1ZVplcm8oeCwgeSkge1xuXHRcdHJldHVybiAoeCA9PT0geSkgfHwgKCRpc05hTih4KSAmJiAkaXNOYU4oeSkpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuMiBHZXRWIChWLCBQKVxuXHQgKiAxLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMi4gTGV0IE8gYmUgVG9PYmplY3QoVikuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KE8pLlxuXHQgKiA0LiBSZXR1cm4gTy5bW0dldF1dKFAsIFYpLlxuXHQgKi9cblx0R2V0VjogZnVuY3Rpb24gR2V0VihWLCBQKSB7XG5cdFx0Ly8gNy4zLjIuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjIuMi0zXG5cdFx0dmFyIE8gPSB0aGlzLlRvT2JqZWN0KFYpO1xuXG5cdFx0Ly8gNy4zLjIuNFxuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiA3LjMuOSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXRtZXRob2Rcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBmdW5jIGJlIEdldFYoTywgUCkuXG5cdCAqIDMuIFJldHVybklmQWJydXB0KGZ1bmMpLlxuXHQgKiA0LiBJZiBmdW5jIGlzIGVpdGhlciB1bmRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHVuZGVmaW5lZC5cblx0ICogNS4gSWYgSXNDYWxsYWJsZShmdW5jKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuXHQgKiA2LiBSZXR1cm4gZnVuYy5cblx0ICovXG5cdEdldE1ldGhvZDogZnVuY3Rpb24gR2V0TWV0aG9kKE8sIFApIHtcblx0XHQvLyA3LjMuOS4xXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS4yXG5cdFx0dmFyIGZ1bmMgPSB0aGlzLkdldFYoTywgUCk7XG5cblx0XHQvLyA3LjMuOS40XG5cdFx0aWYgKGZ1bmMgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHZvaWQgMDtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS41XG5cdFx0aWYgKCF0aGlzLklzQ2FsbGFibGUoZnVuYykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoUCArICdpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy45LjZcblx0XHRyZXR1cm4gZnVuYztcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjEgR2V0IChPLCBQKSAtIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1nZXQtby1wXG5cdCAqIDEuIEFzc2VydDogVHlwZShPKSBpcyBPYmplY3QuXG5cdCAqIDIuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAzLiBSZXR1cm4gTy5bW0dldF1dKFAsIE8pLlxuXHQgKi9cblx0R2V0OiBmdW5jdGlvbiBHZXQoTywgUCkge1xuXHRcdC8vIDcuMy4xLjFcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdC8vIDcuMy4xLjJcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4zXG5cdFx0cmV0dXJuIE9bUF07XG5cdH0sXG5cblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuICdTeW1ib2wnO1xuXHRcdH1cblx0XHRyZXR1cm4gRVM1LlR5cGUoeCk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuXHRTcGVjaWVzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcblx0XHRpZiAodGhpcy5UeXBlKE8pICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShPKSBpcyBub3QgT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBDID0gTy5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAodHlwZW9mIEMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKEMpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTy5jb25zdHJ1Y3RvciBpcyBub3QgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdHZhciBTID0gaGFzU3ltYm9scyAmJiBTeW1ib2wuc3BlY2llcyA/IENbU3ltYm9sLnNwZWNpZXNdIDogdm9pZCAwO1xuXHRcdGlmIChTID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Q29uc3RydWN0b3I7XG5cdFx0fVxuXHRcdGlmICh0aGlzLklzQ29uc3RydWN0b3IoUykpIHtcblx0XHRcdHJldHVybiBTO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdubyBjb25zdHJ1Y3RvciBmb3VuZCcpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWNvbXBsZXRlcHJvcGVydHlkZXNjcmlwdG9yXG5cdENvbXBsZXRlUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBDb21wbGV0ZVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuSXNHZW5lcmljRGVzY3JpcHRvcihEZXNjKSB8fCB0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdGlmICghaGFzKERlc2MsICdbW1ZhbHVlXV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1ZhbHVlXV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGlmICghaGFzKERlc2MsICdbW1dyaXRhYmxlXV0nKSkge1xuXHRcdFx0XHREZXNjWydbW1dyaXRhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWhhcyhEZXNjLCAnW1tHZXRdXScpKSB7XG5cdFx0XHRcdERlc2NbJ1tbR2V0XV0nXSA9IHZvaWQgMDtcblx0XHRcdH1cblx0XHRcdGlmICghaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdFx0RGVzY1snW1tTZXRdXSddID0gdm9pZCAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tFbnVtZXJhYmxlXV0nKSkge1xuXHRcdFx0RGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWhhcyhEZXNjLCAnW1tDb25maWd1cmFibGVdXScpKSB7XG5cdFx0XHREZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ10gPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIERlc2M7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2V0LW8tcC12LXRocm93XG5cdFNldDogZnVuY3Rpb24gU2V0KE8sIFAsIFYsIFRocm93KSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKFRocm93KSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaHJvdyBtdXN0IGJlIGEgQm9vbGVhbicpO1xuXHRcdH1cblx0XHRpZiAoVGhyb3cpIHtcblx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdE9bUF0gPSBWO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc293bnByb3BlcnR5XG5cdEhhc093blByb3BlcnR5OiBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzKE8sIFApO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWhhc3Byb3BlcnR5XG5cdEhhc1Byb3BlcnR5OiBmdW5jdGlvbiBIYXNQcm9wZXJ0eShPLCBQKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08gbXVzdCBiZSBhbiBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1AgbXVzdCBiZSBhIFByb3BlcnR5IEtleScpO1xuXHRcdH1cblx0XHRyZXR1cm4gUCBpbiBPO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWlzY29uY2F0c3ByZWFkYWJsZVxuXHRJc0NvbmNhdFNwcmVhZGFibGU6IGZ1bmN0aW9uIElzQ29uY2F0U3ByZWFkYWJsZShPKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMgJiYgdHlwZW9mIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHR2YXIgc3ByZWFkYWJsZSA9IHRoaXMuR2V0KE8sIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUpO1xuXHRcdFx0aWYgKHR5cGVvZiBzcHJlYWRhYmxlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub0Jvb2xlYW4oc3ByZWFkYWJsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLklzQXJyYXkoTyk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtaW52b2tlXG5cdEludm9rZTogZnVuY3Rpb24gSW52b2tlKE8sIFApIHtcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUCBtdXN0IGJlIGEgUHJvcGVydHkgS2V5Jyk7XG5cdFx0fVxuXHRcdHZhciBhcmd1bWVudHNMaXN0ID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXHRcdHJldHVybiB0aGlzLkNhbGwoZnVuYywgTywgYXJndW1lbnRzTGlzdCk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxuXHRDcmVhdGVJdGVyUmVzdWx0T2JqZWN0OiBmdW5jdGlvbiBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHZhbHVlLCBkb25lKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShkb25lKSAhPT0gJ0Jvb2xlYW4nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKGRvbmUpIGlzIG5vdCBCb29sZWFuJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRkb25lOiBkb25lXG5cdFx0fTtcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1yZWdleHBleGVjXG5cdFJlZ0V4cEV4ZWM6IGZ1bmN0aW9uIFJlZ0V4cEV4ZWMoUiwgUykge1xuXHRcdGlmICh0aGlzLlR5cGUoUikgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSIG11c3QgYmUgYW4gT2JqZWN0Jyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLlR5cGUoUykgIT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTIG11c3QgYmUgYSBTdHJpbmcnKTtcblx0XHR9XG5cdFx0dmFyIGV4ZWMgPSB0aGlzLkdldChSLCAnZXhlYycpO1xuXHRcdGlmICh0aGlzLklzQ2FsbGFibGUoZXhlYykpIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLkNhbGwoZXhlYywgUiwgW1NdKTtcblx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwgfHwgdGhpcy5UeXBlKHJlc3VsdCkgPT09ICdPYmplY3QnKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdcImV4ZWNcIiBtZXRob2QgbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhFeGVjKFIsIFMpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxuXHRBcnJheVNwZWNpZXNDcmVhdGU6IGZ1bmN0aW9uIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcblx0XHRpZiAoIXRoaXMuSXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwJyk7XG5cdFx0fVxuXHRcdHZhciBsZW4gPSBsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoO1xuXHRcdHZhciBDO1xuXHRcdHZhciBpc0FycmF5ID0gdGhpcy5Jc0FycmF5KG9yaWdpbmFsQXJyYXkpO1xuXHRcdGlmIChpc0FycmF5KSB7XG5cdFx0XHRDID0gdGhpcy5HZXQob3JpZ2luYWxBcnJheSwgJ2NvbnN0cnVjdG9yJyk7XG5cdFx0XHQvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIGEgY3Jvc3MtcmVhbG0gbm9ybWFsIEFycmF5LCBhIHNhbWUtcmVhbG0gQXJyYXlcblx0XHRcdC8vIGlmICh0aGlzLklzQ29uc3RydWN0b3IoQykpIHtcblx0XHRcdC8vIFx0aWYgQyBpcyBhbm90aGVyIHJlYWxtJ3MgQXJyYXksIEMgPSB1bmRlZmluZWRcblx0XHRcdC8vIFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXJyYXkpKSkgPT09IG51bGwgP1xuXHRcdFx0Ly8gfVxuXHRcdFx0aWYgKHRoaXMuVHlwZShDKSA9PT0gJ09iamVjdCcgJiYgaGFzU3ltYm9scyAmJiBTeW1ib2wuc3BlY2llcykge1xuXHRcdFx0XHRDID0gdGhpcy5HZXQoQywgU3ltYm9sLnNwZWNpZXMpO1xuXHRcdFx0XHRpZiAoQyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdEMgPSB2b2lkIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIEFycmF5KGxlbik7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0NvbnN0cnVjdG9yKEMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDIG11c3QgYmUgYSBjb25zdHJ1Y3RvcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEMobGVuKTsgLy8gdGhpcy5Db25zdHJ1Y3QoQywgbGVuKTtcblx0fSxcblxuXHRDcmVhdGVEYXRhUHJvcGVydHk6IGZ1bmN0aW9uIENyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblx0XHR2YXIgb2xkRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG5cdFx0dmFyIGV4dGVuc2libGUgPSBvbGREZXNjIHx8ICh0eXBlb2YgT2JqZWN0LmlzRXh0ZW5zaWJsZSAhPT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QuaXNFeHRlbnNpYmxlKE8pKTtcblx0XHR2YXIgaW1tdXRhYmxlID0gb2xkRGVzYyAmJiAoIW9sZERlc2Mud3JpdGFibGUgfHwgIW9sZERlc2MuY29uZmlndXJhYmxlKTtcblx0XHRpZiAoaW1tdXRhYmxlIHx8ICFleHRlbnNpYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBuZXdEZXNjID0ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdHZhbHVlOiBWLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9O1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBuZXdEZXNjKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1jcmVhdGVkYXRhcHJvcGVydHlvcnRocm93XG5cdENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3c6IGZ1bmN0aW9uIENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3coTywgUCwgVikge1xuXHRcdGlmICh0aGlzLlR5cGUoTykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBUeXBlKE8pIGlzIG5vdCBPYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0dmFyIHN1Y2Nlc3MgPSB0aGlzLkNyZWF0ZURhdGFQcm9wZXJ0eShPLCBQLCBWKTtcblx0XHRpZiAoIXN1Y2Nlc3MpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgZGF0YSBwcm9wZXJ0eScpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VjY2Vzcztcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcblx0QWR2YW5jZVN0cmluZ0luZGV4OiBmdW5jdGlvbiBBZHZhbmNlU3RyaW5nSW5kZXgoUywgaW5kZXgsIHVuaWNvZGUpIHtcblx0XHRpZiAodGhpcy5UeXBlKFMpICE9PSAnU3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogVHlwZShTKSBpcyBub3QgU3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5Jc0ludGVnZXIoaW5kZXgpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBsZW5ndGggbXVzdCBiZSBhbiBpbnRlZ2VyID49IDAgYW5kIDw9ICgyKio1MyAtIDEpJyk7XG5cdFx0fVxuXHRcdGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogbGVuZ3RoIG11c3QgYmUgYW4gaW50ZWdlciA+PSAwIGFuZCA8PSAoMioqNTMgLSAxKScpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5UeXBlKHVuaWNvZGUpICE9PSAnQm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUodW5pY29kZSkgaXMgbm90IEJvb2xlYW4nKTtcblx0XHR9XG5cdFx0aWYgKCF1bmljb2RlKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdH1cblx0XHR2YXIgbGVuZ3RoID0gUy5sZW5ndGg7XG5cdFx0aWYgKChpbmRleCArIDEpID49IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cdFx0dmFyIGZpcnN0ID0gUy5jaGFyQ29kZUF0KGluZGV4KTtcblx0XHRpZiAoZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYpIHtcblx0XHRcdHJldHVybiBpbmRleCArIDE7XG5cdFx0fVxuXHRcdHZhciBzZWNvbmQgPSBTLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcblx0XHRpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuXHRcdFx0cmV0dXJuIGluZGV4ICsgMTtcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4ICsgMjtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9lczIwMTUuanNcbi8vIG1vZHVsZSBpZCA9IDExMjRcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChQcmVmZXJyZWRUeXBlID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKFByZWZlcnJlZFR5cGUgPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VzLXRvLXByaW1pdGl2ZS9lczYuanNcbi8vIG1vZHVsZSBpZCA9IDExMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbnZhciAkaXNOYU4gPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNOYU4nKTtcbnZhciAkaXNGaW5pdGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNGaW5pdGUnKTtcblxudmFyIHNpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvc2lnbicpO1xudmFyIG1vZCA9IHJlcXVpcmUoJy4vaGVscGVycy9tb2QnKTtcblxudmFyIElzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnZXMtdG8tcHJpbWl0aXZlL2VzNScpO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlO1xuXHR9LFxuXHRUb051bWJlcjogZnVuY3Rpb24gVG9OdW1iZXIodmFsdWUpIHtcblx0XHRyZXR1cm4gTnVtYmVyKHZhbHVlKTtcblx0fSxcblx0VG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0aWYgKG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuXHRcdHJldHVybiBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHR9LFxuXHRUb0ludDMyOiBmdW5jdGlvbiBUb0ludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+PiAwO1xuXHR9LFxuXHRUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuXHRcdHJldHVybiB0aGlzLlRvTnVtYmVyKHgpID4+PiAwO1xuXHR9LFxuXHRUb1VpbnQxNjogZnVuY3Rpb24gVG9VaW50MTYodmFsdWUpIHtcblx0XHR2YXIgbnVtYmVyID0gdGhpcy5Ub051bWJlcih2YWx1ZSk7XG5cdFx0aWYgKCRpc05hTihudW1iZXIpIHx8IG51bWJlciA9PT0gMCB8fCAhJGlzRmluaXRlKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cblx0XHR2YXIgcG9zSW50ID0gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0XHRyZXR1cm4gbW9kKHBvc0ludCwgMHgxMDAwMCk7XG5cdH0sXG5cdFRvU3RyaW5nOiBmdW5jdGlvbiBUb1N0cmluZyh2YWx1ZSkge1xuXHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHR9LFxuXHRUb09iamVjdDogZnVuY3Rpb24gVG9PYmplY3QodmFsdWUpIHtcblx0XHR0aGlzLkNoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlKTtcblx0XHRyZXR1cm4gT2JqZWN0KHZhbHVlKTtcblx0fSxcblx0Q2hlY2tPYmplY3RDb2VyY2libGU6IGZ1bmN0aW9uIENoZWNrT2JqZWN0Q29lcmNpYmxlKHZhbHVlLCBvcHRNZXNzYWdlKSB7XG5cdFx0LyoganNoaW50IGVxbnVsbDp0cnVlICovXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3Iob3B0TWVzc2FnZSB8fCAnQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0SXNDYWxsYWJsZTogSXNDYWxsYWJsZSxcblx0U2FtZVZhbHVlOiBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuXHRcdGlmICh4ID09PSB5KSB7IC8vIDAgPT09IC0wLCBidXQgdGhleSBhcmUgbm90IGlkZW50aWNhbC5cblx0XHRcdGlmICh4ID09PSAwKSB7IHJldHVybiAxIC8geCA9PT0gMSAvIHk7IH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gJGlzTmFOKHgpICYmICRpc05hTih5KTtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOFxuXHRUeXBlOiBmdW5jdGlvbiBUeXBlKHgpIHtcblx0XHRpZiAoeCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuICdOdWxsJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuICdVbmRlZmluZWQnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ09iamVjdCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiAnTnVtYmVyJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiAnQm9vbGVhbic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnU3RyaW5nJztcblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydHktZGVzY3JpcHRvci1zcGVjaWZpY2F0aW9uLXR5cGVcblx0SXNQcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIElzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodGhpcy5UeXBlKERlc2MpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR2YXIgYWxsb3dlZCA9IHtcblx0XHRcdCdbW0NvbmZpZ3VyYWJsZV1dJzogdHJ1ZSxcblx0XHRcdCdbW0VudW1lcmFibGVdXSc6IHRydWUsXG5cdFx0XHQnW1tHZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tTZXRdXSc6IHRydWUsXG5cdFx0XHQnW1tWYWx1ZV1dJzogdHJ1ZSxcblx0XHRcdCdbW1dyaXRhYmxlXV0nOiB0cnVlXG5cdFx0fTtcblx0XHQvLyBqc2NzOmRpc2FibGVcblx0XHRmb3IgKHZhciBrZXkgaW4gRGVzYykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0XHRpZiAoaGFzKERlc2MsIGtleSkgJiYgIWFsbG93ZWRba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGpzY3M6ZW5hYmxlXG5cdFx0dmFyIGlzRGF0YSA9IGhhcyhEZXNjLCAnW1tWYWx1ZV1dJyk7XG5cdFx0dmFyIElzQWNjZXNzb3IgPSBoYXMoRGVzYywgJ1tbR2V0XV0nKSB8fCBoYXMoRGVzYywgJ1tbU2V0XV0nKTtcblx0XHRpZiAoaXNEYXRhICYmIElzQWNjZXNzb3IpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3BlcnR5IERlc2NyaXB0b3JzIG1heSBub3QgYmUgYm90aCBhY2Nlc3NvciBhbmQgZGF0YSBkZXNjcmlwdG9ycycpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjFcblx0SXNBY2Nlc3NvckRlc2NyaXB0b3I6IGZ1bmN0aW9uIElzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFoYXMoRGVzYywgJ1tbR2V0XV0nKSAmJiAhaGFzKERlc2MsICdbW1NldF1dJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjJcblx0SXNEYXRhRGVzY3JpcHRvcjogZnVuY3Rpb24gSXNEYXRhRGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5RGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRGVzYyBtdXN0IGJlIGEgUHJvcGVydHkgRGVzY3JpcHRvcicpO1xuXHRcdH1cblxuXHRcdGlmICghaGFzKERlc2MsICdbW1ZhbHVlXV0nKSAmJiAhaGFzKERlc2MsICdbW1dyaXRhYmxlXV0nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuM1xuXHRJc0dlbmVyaWNEZXNjcmlwdG9yOiBmdW5jdGlvbiBJc0dlbmVyaWNEZXNjcmlwdG9yKERlc2MpIHtcblx0XHRpZiAodHlwZW9mIERlc2MgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzQWNjZXNzb3JEZXNjcmlwdG9yKERlc2MpICYmICF0aGlzLklzRGF0YURlc2NyaXB0b3IoRGVzYykpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjEwLjRcblx0RnJvbVByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gRnJvbVByb3BlcnR5RGVzY3JpcHRvcihEZXNjKSB7XG5cdFx0aWYgKHR5cGVvZiBEZXNjID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIERlc2M7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlEZXNjcmlwdG9yKERlc2MpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdEZXNjIG11c3QgYmUgYSBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuSXNEYXRhRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IERlc2NbJ1tbVmFsdWVdXSddLFxuXHRcdFx0XHR3cml0YWJsZTogISFEZXNjWydbW1dyaXRhYmxlXV0nXSxcblx0XHRcdFx0ZW51bWVyYWJsZTogISFEZXNjWydbW0VudW1lcmFibGVdXSddLFxuXHRcdFx0XHRjb25maWd1cmFibGU6ICEhRGVzY1snW1tDb25maWd1cmFibGVdXSddXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSBpZiAodGhpcy5Jc0FjY2Vzc29yRGVzY3JpcHRvcihEZXNjKSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z2V0OiBEZXNjWydbW0dldF1dJ10sXG5cdFx0XHRcdHNldDogRGVzY1snW1tTZXRdXSddLFxuXHRcdFx0XHRlbnVtZXJhYmxlOiAhIURlc2NbJ1tbRW51bWVyYWJsZV1dJ10sXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogISFEZXNjWydbW0NvbmZpZ3VyYWJsZV1dJ11cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Zyb21Qcm9wZXJ0eURlc2NyaXB0b3IgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIGZ1bGx5IHBvcHVsYXRlZCBQcm9wZXJ0eSBEZXNjcmlwdG9yJyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTguMTAuNVxuXHRUb1Byb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gVG9Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPYmopICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVG9Qcm9wZXJ0eURlc2NyaXB0b3IgcmVxdWlyZXMgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2MgPSB7fTtcblx0XHRpZiAoaGFzKE9iaiwgJ2VudW1lcmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tFbnVtZXJhYmxlXV0nXSA9IHRoaXMuVG9Cb29sZWFuKE9iai5lbnVtZXJhYmxlKTtcblx0XHR9XG5cdFx0aWYgKGhhcyhPYmosICdjb25maWd1cmFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tDb25maWd1cmFibGVdXSddID0gdGhpcy5Ub0Jvb2xlYW4oT2JqLmNvbmZpZ3VyYWJsZSk7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAndmFsdWUnKSkge1xuXHRcdFx0ZGVzY1snW1tWYWx1ZV1dJ10gPSBPYmoudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChoYXMoT2JqLCAnd3JpdGFibGUnKSkge1xuXHRcdFx0ZGVzY1snW1tXcml0YWJsZV1dJ10gPSB0aGlzLlRvQm9vbGVhbihPYmoud3JpdGFibGUpO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ2dldCcpKSB7XG5cdFx0XHR2YXIgZ2V0dGVyID0gT2JqLmdldDtcblx0XHRcdGlmICh0eXBlb2YgZ2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKGdldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZ2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tHZXRdXSddID0gZ2V0dGVyO1xuXHRcdH1cblx0XHRpZiAoaGFzKE9iaiwgJ3NldCcpKSB7XG5cdFx0XHR2YXIgc2V0dGVyID0gT2JqLnNldDtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGVyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5Jc0NhbGxhYmxlKHNldHRlcikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignc2V0dGVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY1snW1tTZXRdXSddID0gc2V0dGVyO1xuXHRcdH1cblxuXHRcdGlmICgoaGFzKGRlc2MsICdbW0dldF1dJykgfHwgaGFzKGRlc2MsICdbW1NldF1dJykpICYmIChoYXMoZGVzYywgJ1tbVmFsdWVdXScpIHx8IGhhcyhkZXNjLCAnW1tXcml0YWJsZV1dJykpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHByb3BlcnR5IGRlc2NyaXB0b3IuIENhbm5vdCBib3RoIHNwZWNpZnkgYWNjZXNzb3JzIGFuZCBhIHZhbHVlIG9yIHdyaXRhYmxlIGF0dHJpYnV0ZScpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVzYztcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFUzU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDExMjlcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g4LjEyXG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTywgaGludCkge1xuXHRcdHZhciBhY3R1YWxIaW50ID0gaGludCB8fCAodG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyKTtcblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIFByZWZlcnJlZFR5cGUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VzLXRvLXByaW1pdGl2ZS9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDExMzBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgdHJ5UmVnZXhFeGVjQ2FsbCA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBsYXN0SW5kZXggPSB2YWx1ZS5sYXN0SW5kZXg7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gMDtcblxuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHR2YWx1ZS5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fVxuXG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdGlmICghaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRyeVJlZ2V4RXhlY0NhbGwodmFsdWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUVudHJpZXMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShPYmplY3QsIHsgZW50cmllczogcG9seWZpbGwgfSwge1xuXHRcdGVudHJpZXM6IGZ1bmN0aW9uIHRlc3RFbnRyaWVzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LmVudHJpZXMvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1WYWx1ZXMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShPYmplY3QsIHsgdmFsdWVzOiBwb2x5ZmlsbCB9LCB7XG5cdFx0dmFsdWVzOiBmdW5jdGlvbiB0ZXN0VmFsdWVzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QudmFsdWVzL3NoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDExMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zY3JvbGxNb25pdG9yRXZlbnRzO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciB2YWx1ZXMgPSByZXF1aXJlKCdvYmplY3QudmFsdWVzJyk7XG52YXIgZW50cmllcyA9IHJlcXVpcmUoJ29iamVjdC5lbnRyaWVzJyk7XG5cbmV4cG9ydCB2YXIgZXZhbEV4cHJlc3Npb24gPSBmdW5jdGlvbiBldmFsRXhwcmVzc2lvbihhY2MsIGV4cHIsIGtleSwgY29udGV4dCkge1xuICB2YXIgZSA9IHZvaWQgMDtcbiAgaWYgKGtleSAmJiAoa2V5Lm1hdGNoKC9vbltBLVpdLiovKSB8fCBrZXkubWF0Y2goL2hhbmRsZVtBLVpdLiovKSkpIHtcbiAgICB2YXIgc2V0U3RhdGUgPSBzZXRTdGF0ZTtcbiAgICBlID0gJ1xcbiAgICAgICgoKSA9PiB7XFxuICAgICAgICAgICcgKyBPYmplY3Qua2V5cyhhY2MpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZXhwci5pbmNsdWRlcyhrZXkpO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVmcycpIHtcbiAgICAgICAgLy8gZGVsZXRlIGVhY2ggcmVmJ3MgZG9tTm9kZSBwcm9wZXJ0eVxuICAgICAgICAvLyBiZWNhdXNlIGl0IGNhbid0IGJlIHNlcmlhbGl6ZWRcbiAgICAgICAgdmFsdWVzKGFjY1trZXldKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgZGVsZXRlIHYuZG9tTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBgcmVmc2AgY29uc3Qgb2JqZWN0IGdyYXBoIHRvIGZ1bmN0aW9uIHNjb3BlXG4gICAgICAgIHJldHVybiAndmFyICcgKyBrZXkgKyAnID0gSlNPTi5wYXJzZShcXCcnICsgSlNPTi5zdHJpbmdpZnkoYWNjW2tleV0pICsgJ1xcJyknO1xuICAgICAgfVxuICAgICAgcmV0dXJuICd2YXIgJyArIGtleSArICcgPSAnICsgSlNPTi5zdHJpbmdpZnkoYWNjW2tleV0pICsgJzsnO1xuICAgIH0pLmpvaW4oJ1xcbicpICsgJ1xcbiAgICAgICAgICAnICsgZXhwciArICc7XFxuICAgICAgICAgIGNvbnRleHQudXBkYXRlKHsgJyArIE9iamVjdC5rZXlzKGFjYykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBleHByLmluY2x1ZGVzKGtleSkgJiYga2V5ICE9PSAncmVmcyc7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgKyAnOiAnICsga2V5O1xuICAgIH0pLmpvaW4oJywgJykgKyAnfSk7XFxuICAgICAgfSkoKVxcbiAgICAnO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2YWwoZSk7XG4gICAgfS5iaW5kKGNvbnRleHQgfHwge30pO1xuICB9IGVsc2Uge1xuICAgIGUgPSAnXFxuICAgICAgKCgpID0+IHtcXG4gICAgICAgICcgKyBPYmplY3Qua2V5cyhhY2MpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZXhwci5pbmNsdWRlcyhrZXkpO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoa2V5ID09PSAncmVmcycpIHtcbiAgICAgICAgLy8gZGVsZXRlIGVhY2ggcmVmJ3MgZG9tTm9kZSBwcm9wZXJ0eVxuICAgICAgICAvLyBiZWNhdXNlIGl0IGNhbid0IGJlIHNlcmlhbGl6ZWRcbiAgICAgICAgdmFsdWVzKGFjY1trZXldKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgZGVsZXRlIHYuZG9tTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBgcmVmc2AgY29uc3Qgb2JqZWN0IGdyYXBoIHRvIGZ1bmN0aW9uIHNjb3BlXG4gICAgICAgIHJldHVybiAndmFyICcgKyBrZXkgKyAnID0gSlNPTi5wYXJzZShcXCcnICsgSlNPTi5zdHJpbmdpZnkoYWNjW2tleV0pICsgJ1xcJyknO1xuICAgICAgfVxuICAgICAgcmV0dXJuICd2YXIgJyArIGtleSArICcgPSAnICsgSlNPTi5zdHJpbmdpZnkoYWNjW2tleV0pICsgJzsnO1xuICAgIH0pLmpvaW4oJ1xcbicpICsgJ1xcbiAgICAgICAgcmV0dXJuICcgKyBleHByICsgJztcXG4gICAgICB9KSgpXFxuICAgICc7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBldmFsKGUpO1xuICB9IGNhdGNoIChlcnIpIHt9XG59O1xuXG5leHBvcnQgdmFyIGdldFZhcnMgPSBmdW5jdGlvbiBnZXRWYXJzKGFycikge1xuICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBldmFsQ29udGV4dCA9IGFyZ3VtZW50c1syXTtcblxuICB2YXIgcGx1Y2sgPSBmdW5jdGlvbiBwbHVjayhhY2MsIHZhbCkge1xuICAgIHZhciB2YXJpYWJsZVR5cGUgPSB2YWxbMF0sXG4gICAgICAgIF92YWwkID0gdmFsWzFdLFxuICAgICAgICBhdHRycyA9IF92YWwkID09PSB1bmRlZmluZWQgPyBbXSA6IF92YWwkO1xuICAgIHZhciBuYW1lQXJyID0gYXR0cnNbMF0sXG4gICAgICAgIHZhbHVlQXJyID0gYXR0cnNbMV07XG5cbiAgICBpZiAoIW5hbWVBcnIgfHwgIXZhbHVlQXJyKSByZXR1cm4gYWNjO1xuXG4gICAgdmFyIF9uYW1lQXJyJCA9IG5hbWVBcnJbMV0sXG4gICAgICAgIG5hbWVWYWx1ZSA9IF9uYW1lQXJyJFsxXTtcbiAgICB2YXIgX3ZhbHVlQXJyJCA9IHZhbHVlQXJyWzFdLFxuICAgICAgICB2YWx1ZVR5cGUgPSBfdmFsdWVBcnIkWzBdLFxuICAgICAgICB2YWx1ZVZhbHVlID0gX3ZhbHVlQXJyJFsxXTtcblxuXG4gICAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcbiAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgYWNjW25hbWVWYWx1ZV0gPSB2YWx1ZVZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZhcmlhYmxlJzpcbiAgICAgICAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkodmFsdWVWYWx1ZSkpIHtcbiAgICAgICAgICBhY2NbbmFtZVZhbHVlXSA9IGNvbnRleHRbdmFsdWVWYWx1ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWNjW25hbWVWYWx1ZV0gPSBldmFsRXhwcmVzc2lvbihjb250ZXh0LCBleHByKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4cHJlc3Npb24nOlxuICAgICAgICB2YXIgZXhwciA9IHZhbHVlVmFsdWU7XG4gICAgICAgIGlmICh2YXJpYWJsZVR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgYWNjW25hbWVWYWx1ZV0gPSBldmFsRXhwcmVzc2lvbihjb250ZXh0LCBleHByKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2NbbmFtZVZhbHVlXSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBldmFsRXhwcmVzc2lvbihjb250ZXh0LCBleHByKSxcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZXZhbEV4cHJlc3Npb24oT2JqZWN0LmFzc2lnbih7fSwgb2xkU3RhdGUsIG5ld1N0YXRlKSwgZXhwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH07XG5cbiAgcmV0dXJuIGFyci5yZWR1Y2UocGx1Y2ssIHt9KTtcbn07XG5cbmV4cG9ydCB2YXIgZ2V0RGF0YSA9IGZ1bmN0aW9uIGdldERhdGEoYXJyKSB7XG4gIHZhciBkYXRhc2V0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgdmFyIHBsdWNrID0gZnVuY3Rpb24gcGx1Y2soYWNjLCB2YWwpIHtcbiAgICB2YXIgYXR0cnMgPSB2YWxbMV07XG4gICAgdmFyIG5hbWVBcnIgPSBhdHRyc1swXTtcbiAgICB2YXIgX25hbWVBcnIkMiA9IG5hbWVBcnJbMV0sXG4gICAgICAgIG5hbWVWYWx1ZSA9IF9uYW1lQXJyJDJbMV07XG5cblxuICAgIGFjY1tuYW1lVmFsdWVdID0gZGF0YXNldHNbbmFtZVZhbHVlXTtcblxuICAgIHJldHVybiBhY2M7XG4gIH07XG5cbiAgcmV0dXJuIGFyci5yZWR1Y2UocGx1Y2ssIHt9KTtcbn07XG5cbmV4cG9ydCB2YXIgc3BsaXRBU1QgPSBmdW5jdGlvbiBzcGxpdEFTVChhc3QpIHtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHZhcnM6IFtdLFxuICAgIGRlcml2ZWQ6IFtdLFxuICAgIGRhdGE6IFtdLFxuICAgIGVsZW1lbnRzOiBbXVxuICB9O1xuXG4gIHZhciBoYW5kbGVOb2RlID0gZnVuY3Rpb24gaGFuZGxlTm9kZShzdG9yZUVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IG5vZGVbMF0sXG4gICAgICAgICAgcHJvcHMgPSBub2RlWzFdLFxuICAgICAgICAgIGNoaWxkcmVuID0gbm9kZVsyXTtcblxuICAgICAgaWYgKG5hbWUgPT09ICd2YXInKSB7XG4gICAgICAgIHN0YXRlLnZhcnMucHVzaChub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGVbbmFtZV0pIHtcbiAgICAgICAgc3RhdGVbbmFtZV0ucHVzaChub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RvcmVFbGVtZW50cykge1xuICAgICAgICBzdGF0ZS5lbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFjaGlsZHJlbiB8fCB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goaGFuZGxlTm9kZShmYWxzZSkpO1xuICAgIH07XG4gIH07XG5cbiAgYXN0LmZvckVhY2goaGFuZGxlTm9kZSh0cnVlKSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCB2YXIgaG9va3MgPSBbJ29uRW50ZXJWaWV3JywgJ29uRW50ZXJWaWV3RnVsbHknLCAnb25FeGl0VmlldycsICdvbkV4aXRWaWV3RnVsbHknXTtcblxuZXhwb3J0IHZhciBzY3JvbGxNb25pdG9yRXZlbnRzID0gKF9zY3JvbGxNb25pdG9yRXZlbnRzID0ge1xuICAnb25FbnRlclZpZXcnOiAnZW50ZXJWaWV3cG9ydCcsXG4gICdvbkV4aXRWaWV3RnVsbHknOiAnZnVsbHlFbnRlclZpZXdwb3J0JyxcbiAgJ29uRXhpdFZpZXcnOiAncGFydGlhbGx5RXhpdFZpZXdwb3J0J1xufSwgX3Njcm9sbE1vbml0b3JFdmVudHNbJ29uRXhpdFZpZXdGdWxseSddID0gJ2V4aXRWaWV3cG9ydCcsIF9zY3JvbGxNb25pdG9yRXZlbnRzKTtcblxuZXhwb3J0IHZhciB0cmFuc2xhdGUgPSBmdW5jdGlvbiB0cmFuc2xhdGUoYXJyKSB7XG4gIHZhciBhdHRyQ29udmVydCA9IGZ1bmN0aW9uIGF0dHJDb252ZXJ0KGxpc3QpIHtcbiAgICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZikge1xuICAgICAgdmFyIG5hbWUgPSBfcmVmWzBdLFxuICAgICAgICAgIF9yZWYkID0gX3JlZlsxXSxcbiAgICAgICAgICB0eXBlID0gX3JlZiRbMF0sXG4gICAgICAgICAgdmFsID0gX3JlZiRbMV07XG5cbiAgICAgIGlmICh0eXBlID09PSAndmFyaWFibGUnKSB7XG4gICAgICAgIGFjYy5fX3ZhcnNfXyA9IGFjYy5fX3ZhcnNfXyB8fCB7fTtcbiAgICAgICAgYWNjLl9fdmFyc19fW25hbWVdID0gdmFsO1xuICAgICAgfVxuICAgICAgLy8gZWFjaCBub2RlIGtlZXBzIGEgbGlzdCBvZiBwcm9wcyB0aGF0IGFyZSBleHByZXNzaW9uc1xuICAgICAgaWYgKHR5cGUgPT09ICdleHByZXNzaW9uJykge1xuICAgICAgICBhY2MuX19leHByX18gPSBhY2MuX19leHByX18gfHwge307XG4gICAgICAgIGFjYy5fX2V4cHJfX1tuYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICAgIC8vIGZsYWcgbm9kZXMgdGhhdCBkZWZpbmUgYSBob29rIGZ1bmN0aW9uXG4gICAgICBpZiAoaG9va3MuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgYWNjLmhhc0hvb2sgPSB0cnVlO1xuICAgICAgfTtcblxuICAgICAgYWNjW25hbWVdID0gdmFsO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdmFyIHROb2RlID0gZnVuY3Rpb24gdE5vZGUobm9kZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHJldHVybiBub2RlO1xuXG4gICAgaWYgKG5vZGUubGVuZ3RoID09PSAzKSB7XG4gICAgICB2YXIgbmFtZSA9IG5vZGVbMF0sXG4gICAgICAgICAgYXR0cnMgPSBub2RlWzFdLFxuICAgICAgICAgIGNoaWxkcmVuID0gbm9kZVsyXTtcblxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBjb21wb25lbnQ6IG5hbWVcbiAgICAgIH0sIGF0dHJDb252ZXJ0KGF0dHJzKSwge1xuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4ubWFwKHROb2RlKVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzcGxpdEFTVChhcnIpLmVsZW1lbnRzLm1hcCh0Tm9kZSk7XG59O1xuXG5leHBvcnQgdmFyIG1hcFRyZWUgPSBmdW5jdGlvbiBtYXBUcmVlKHRyZWUsIG1hcEZuKSB7XG4gIHZhciBmaWx0ZXJGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHZhciB3YWxrRm4gPSBmdW5jdGlvbiB3YWxrRm4oYWNjLCBub2RlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gdHJhbnNsYXRlZCBzY2hlbWFcbiAgICAgICAgbm9kZS5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4ucmVkdWNlKHdhbGtGbiwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29tcGlsZXIgQVNUXG4gICAgICAgIG5vZGVbMl0gPSBub2RlWzJdLnJlZHVjZSh3YWxrRm4sIFtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyRm4obm9kZSkpIGFjYy5wdXNoKG1hcEZuKG5vZGUpKTtcbiAgICByZXR1cm4gYWNjO1xuICB9O1xuXG4gIHJldHVybiB0cmVlLnJlZHVjZSh3YWxrRm4sIFtdKTtcbn07XG5cbmV4cG9ydCB2YXIgZmlsdGVyQVNURm9yRG9jdW1lbnQgPSBmdW5jdGlvbiBmaWx0ZXJBU1RGb3JEb2N1bWVudChhc3QpIHtcbiAgcmV0dXJuIG1hcFRyZWUoYXN0LCBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuO1xuICB9LCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYyWzBdO1xuICAgIHJldHVybiBuYW1lICE9PSAnbWV0YSc7XG4gIH0pO1xufTtcblxudmFyIGZpbmRXcmFwVGFyZ2V0cyA9IGZ1bmN0aW9uIGZpbmRXcmFwVGFyZ2V0cyhzY2hlbWEsIHN0YXRlKSB7XG4gIHZhciB0YXJnZXRzID0gW107XG4gIHZhciBzdGF0ZUtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZSk7XG5cbiAgLy8gYWx3YXlzIHJldHVybiBub2RlIHNvIHdlIGNhbiB3YWxrIHRoZSB3aG9sZSB0cmVlXG4gIC8vIGJ1dCBjb2xsZWN0IGFuZCB1bHRpbWF0ZWx5IHJldHVybiBqdXN0IHRoZSBub2Rlc1xuICAvLyB3ZSBhcmUgaW50ZXJlc3RlZCBpbiB3cmFwcGluZ1xuICBtYXBUcmVlKHNjaGVtYSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSByZXR1cm4gbm9kZTtcblxuICAgIGlmIChub2RlLmhhc0hvb2spIHtcbiAgICAgIHRhcmdldHMucHVzaChub2RlKTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vIHdyYXAgYWxsIGN1c3RvbSBjb21wb25lbnRzXG4gICAgdmFyIHN0YXJ0c1dpdGggPSBub2RlLmNvbXBvbmVudC5jaGFyQXQoMCk7XG4gICAgaWYgKHN0YXJ0c1dpdGggPT09IHN0YXJ0c1dpdGgudG9VcHBlckNhc2UoKSkge1xuICAgICAgdGFyZ2V0cy5wdXNoKG5vZGUpO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gcHVsbCBvZmYgdGhlIHByb3BzIHdlIGRvbid0IG5lZWQgdG8gY2hlY2tcblxuICAgIHZhciBjb21wb25lbnQgPSBub2RlLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLFxuICAgICAgICBfX3ZhcnNfXyA9IG5vZGUuX192YXJzX18sXG4gICAgICAgIF9fZXhwcl9fID0gbm9kZS5fX2V4cHJfXyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMobm9kZSwgWydjb21wb25lbnQnLCAnY2hpbGRyZW4nLCAnX192YXJzX18nLCAnX19leHByX18nXSk7XG5cbiAgICB2YXIgZXhwcmVzc2lvbnMgPSBPYmplY3Qua2V5cyhfX2V4cHJfXyB8fCB7fSk7XG4gICAgdmFyIHZhcmlhYmxlcyA9IE9iamVjdC5rZXlzKF9fdmFyc19fIHx8IHt9KTtcblxuICAgIC8vIGl0ZXJhdGUgb3ZlciB0aGUgbm9kZSdzIHByb3AgdmFsdWVzXG4gICAgZW50cmllcyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmM1swXSxcbiAgICAgICAgICB2YWwgPSBfcmVmM1sxXTtcblxuICAgICAgLy8gYXZvaWQgY2hlY2tpbmcgbW9yZSBwcm9wcyBpZiB3ZSBrbm93IGl0J3MgYSBtYXRjaFxuICAgICAgaWYgKHRhcmdldHMuaW5jbHVkZXMobm9kZSkpIHJldHVybjtcblxuICAgICAgLy8gSW5jbHVkZSBub2RlcyB0aGF0IHJlZmVyZW5jZSBhIHZhcmlhYmxlIG9yIGV4cHJlc3Npb24uXG4gICAgICBpZiAodmFyaWFibGVzLmluY2x1ZGVzKGtleSkgfHwgZXhwcmVzc2lvbnMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICB0YXJnZXRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldHM7XG59O1xuZXhwb3J0IHsgZmluZFdyYXBUYXJnZXRzIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaWR5bGwtZG9jdW1lbnQvZGlzdC9lcy91dGlscy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHNjcm9sbHBhcmVudCBmcm9tICdzY3JvbGxwYXJlbnQnO1xuaW1wb3J0IHNjcm9sbE1vbml0b3IgZnJvbSAnc2Nyb2xsbW9uaXRvcic7XG5pbXBvcnQgUmVhY3RKc29uU2NoZW1hIGZyb20gJy4vdXRpbHMvc2NoZW1hMmVsZW1lbnQnO1xuaW1wb3J0IGVudHJpZXMgZnJvbSAnb2JqZWN0LmVudHJpZXMnO1xuaW1wb3J0IHZhbHVlcyBmcm9tICdvYmplY3QudmFsdWVzJztcbmltcG9ydCB7IGdldERhdGEsIGdldFZhcnMsIGZpbHRlckFTVEZvckRvY3VtZW50LCBzcGxpdEFTVCwgdHJhbnNsYXRlLCBmaW5kV3JhcFRhcmdldHMsIG1hcFRyZWUsIGV2YWxFeHByZXNzaW9uLCBob29rcywgc2Nyb2xsTW9uaXRvckV2ZW50cyB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgdXBkYXRlUHJvcHNDYWxsYmFja3MgPSBbXTtcbnZhciB1cGRhdGVSZWZzQ2FsbGJhY2tzID0gW107XG52YXIgc2Nyb2xsV2F0Y2hlcnMgPSBbXTtcbnZhciBzY3JvbGxPZmZzZXRzID0ge307XG52YXIgcmVmQ2FjaGUgPSB7fTtcbnZhciBldmFsQ29udGV4dCA9IHt9O1xudmFyIHNjcm9sbENvbnRhaW5lciA9IHZvaWQgMDtcblxudmFyIGdldFJlZnMgPSBmdW5jdGlvbiBnZXRSZWZzKCkge1xuICB2YXIgcmVmcyA9IHt9O1xuICBpZiAoIXNjcm9sbENvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNjcm9sbFdhdGNoZXJzLmZvckVhY2goZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgICAvLyBsZWZ0IGFuZCByaWdodCBwcm9wcyBhc3N1bWUgbm8gaG9yaXpvbnRhbCBzY3JvbGxpbmdcbiAgICB2YXIgd2F0Y2hJdGVtID0gd2F0Y2hlci53YXRjaEl0ZW0sXG4gICAgICAgIGNhbGxiYWNrcyA9IHdhdGNoZXIuY2FsbGJhY2tzLFxuICAgICAgICBjb250YWluZXIgPSB3YXRjaGVyLmNvbnRhaW5lcixcbiAgICAgICAgcmVjYWxjdWxhdGVMb2NhdGlvbiA9IHdhdGNoZXIucmVjYWxjdWxhdGVMb2NhdGlvbixcbiAgICAgICAgb2Zmc2V0cyA9IHdhdGNoZXIub2Zmc2V0cyxcbiAgICAgICAgd2F0Y2hlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHdhdGNoZXIsIFsnd2F0Y2hJdGVtJywgJ2NhbGxiYWNrcycsICdjb250YWluZXInLCAncmVjYWxjdWxhdGVMb2NhdGlvbicsICdvZmZzZXRzJ10pO1xuXG4gICAgcmVmc1t3YXRjaEl0ZW0uZGF0YXNldC5yZWZdID0gX2V4dGVuZHMoe30sIHdhdGNoZXJQcm9wcywge1xuICAgICAgZG9tTm9kZTogd2F0Y2hJdGVtXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZWZzO1xufTtcblxudmFyIHdyYXBwZXJLZXkgPSAwO1xuXG52YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoV3JhcHBlciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFdyYXBwZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3JhcHBlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkUHVyZUNvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5rZXkgPSB3cmFwcGVyS2V5Kys7XG4gICAgX3RoaXMucmVmID0ge307XG4gICAgX3RoaXMub25VcGRhdGVSZWZzID0gX3RoaXMub25VcGRhdGVSZWZzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uVXBkYXRlUHJvcHMgPSBfdGhpcy5vblVwZGF0ZVByb3BzLmJpbmQoX3RoaXMpO1xuXG4gICAgdmFyIHZhcnMgPSB2YWx1ZXMocHJvcHMuX192YXJzX18pO1xuICAgIHZhciBleHBzID0gdmFsdWVzKHByb3BzLl9fZXhwcl9fKTtcblxuICAgIF90aGlzLnVzZXNSZWZzID0gZXhwcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5pbmNsdWRlcygncmVmcy4nKTtcbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiBmb3IgcHJvcHMgdXBkYXRlcyBJRiB3ZSBjYXJlIGFib3V0IHRoZW1cbiAgICBpZiAodmFycy5sZW5ndGggfHwgZXhwcy5sZW5ndGgpIHtcbiAgICAgIC8vIGNhbGxlZCB3aXRoIG5ldyBkb2Mgc3RhdGVcbiAgICAgIC8vIHdoZW4gYW55IGNvbXBvbmVudCBjYWxscyB1cGRhdGVQcm9wcygpXG4gICAgICB1cGRhdGVQcm9wc0NhbGxiYWNrcy5wdXNoKF90aGlzLm9uVXBkYXRlUHJvcHMpO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiBmb3IgcmVmIHVwZGF0ZXMgSUYgd2UgY2FyZSBhYm91dCB0aGVtXG4gICAgaWYgKHByb3BzLmhhc0hvb2sgfHwgX3RoaXMudXNlc1JlZnMpIHtcbiAgICAgIHVwZGF0ZVJlZnNDYWxsYmFja3MucHVzaChfdGhpcy5vblVwZGF0ZVJlZnMpO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UsIGVycm9yOiBudWxsIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgV3JhcHBlci5wcm90b3R5cGUuY29tcG9uZW50RGlkQ2F0Y2ggPSBmdW5jdGlvbiBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3I6IGVycm9yIH0pO1xuICB9O1xuXG4gIFdyYXBwZXIucHJvdG90eXBlLm9uVXBkYXRlUHJvcHMgPSBmdW5jdGlvbiBvblVwZGF0ZVByb3BzKG5ld1N0YXRlLCBjaGFuZ2VkS2V5cykge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBfX3ZhcnNfXyA9IF9wcm9wcy5fX3ZhcnNfXyxcbiAgICAgICAgX19leHByX18gPSBfcHJvcHMuX19leHByX187XG5cbiAgICAvLyB3ZXJlIHRoZXJlIGNoYW5nZXMgdG8gYW55IHZhcnMgd2UgdHJhY2s/XG4gICAgLy8gb3IgdmFycyBvdXIgZXhwcmVzc2lvbnMgcmVmZXJlbmNlP1xuXG4gICAgdmFyIHNob3VsZFVwZGF0ZSA9IGNoYW5nZWRLZXlzLnNvbWUoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiB2YWx1ZXMoX192YXJzX18pLmluY2x1ZGVzKGspIHx8IHZhbHVlcyhfX2V4cHJfXykuc29tZShmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICByZXR1cm4gZXhwci5pbmNsdWRlcyhrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGlmIG5vdGhpbmcgd2UgY2FyZSBhYm91dCBjaGFuZ2VkIGJhaWwgb3V0IGFuZCBkb24ndCByZS1yZW5kZXJcbiAgICBpZiAoIXNob3VsZFVwZGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gdXBkYXRlIHRoaXMgY29tcG9uZW50J3Mgc3RhdGVcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgLy8gcHVsbCBpbiB0aGUgbGF0ZXN0IHZhbHVlIGZvciBhbnkgdHJhY2tlZCB2YXJzXG4gICAgT2JqZWN0LmtleXMoX192YXJzX18pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXdTdGF0ZVtfX3ZhcnNfX1trZXldXTtcbiAgICB9KTtcbiAgICAvLyByZS1ydW4gdGhpcyBjb21wb25lbnQncyBleHByZXNzaW9ucyB1c2luZyB0aGUgbGF0ZXN0IGRvYyBzdGF0ZVxuICAgIE9iamVjdC5rZXlzKF9fZXhwcl9fKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG5leHRTdGF0ZVtrZXldID0gZXZhbEV4cHJlc3Npb24obmV3U3RhdGUsIF9fZXhwcl9fW2tleV0sIGtleSwgZXZhbENvbnRleHQpO1xuICAgIH0pO1xuICAgIC8vIHRyaWdnZXIgYSByZS1yZW5kZXIgb2YgdGhpcyBjb21wb25lbnRcbiAgICAvLyBhbmQgbW9yZSBpbXBvcnRhbnRseSwgaXRzIHdyYXBwZWQgY29tcG9uZW50XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICB9O1xuXG4gIFdyYXBwZXIucHJvdG90eXBlLm9uVXBkYXRlUmVmcyA9IGZ1bmN0aW9uIG9uVXBkYXRlUmVmcyhuZXdTdGF0ZSkge1xuICAgIHZhciBfX2V4cHJfXyA9IHRoaXMucHJvcHMuX19leHByX187XG5cblxuICAgIGlmICh0aGlzLnVzZXNSZWZzKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0geyByZWZzOiBuZXdTdGF0ZS5yZWZzIH07XG4gICAgICBlbnRyaWVzKF9fZXhwcl9fKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmWzBdLFxuICAgICAgICAgICAgdmFsID0gX3JlZlsxXTtcblxuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygncmVmcy4nKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXh0U3RhdGVba2V5XSA9IGV2YWxFeHByZXNzaW9uKG5ld1N0YXRlLCB2YWwsIGtleSwgZXZhbENvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHRyaWdnZXIgYSByZW5kZXIgd2l0aCBsYXRlc3Qgc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH07XG5cbiAgV3JhcHBlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgcHJvcHNJbmRleCA9IHVwZGF0ZVByb3BzQ2FsbGJhY2tzLmluZGV4T2YodGhpcy5vblVwZGF0ZVByb3BzKTtcbiAgICBpZiAocHJvcHNJbmRleCA+IC0xKSB1cGRhdGVQcm9wc0NhbGxiYWNrcy5zcGxpY2UocHJvcHNJbmRleCwgMSk7XG5cbiAgICB2YXIgcmVmc0luZGV4ID0gdXBkYXRlUmVmc0NhbGxiYWNrcy5pbmRleE9mKHRoaXMub25VcGRhdGVSZWZzKTtcbiAgICBpZiAocmVmc0luZGV4ID4gLTEpIHVwZGF0ZVJlZnNDYWxsYmFja3Muc3BsaWNlKHJlZnNJbmRleCwgMSk7XG4gIH07XG5cbiAgV3JhcHBlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogeyBib3JkZXI6ICdzb2xpZCByZWQgMXB4JywgcGFkZGluZzogMTAgfSB9LFxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIF9fZXhwcl9fID0gX3N0YXRlLl9fZXhwcl9fLFxuICAgICAgICBfX3ZhcnNfXyA9IF9zdGF0ZS5fX3ZhcnNfXyxcbiAgICAgICAgaGFzRXJyb3IgPSBfc3RhdGUuaGFzRXJyb3IsXG4gICAgICAgIHN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9zdGF0ZSwgWydfX2V4cHJfXycsICdfX3ZhcnNfXycsICdoYXNFcnJvciddKTtcblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgX2V4dGVuZHMoeyBrZXk6IF90aGlzMi5rZXkgKyAnLScgKyBpIH0sIHN0YXRlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFdyYXBwZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG52YXIgZ2V0RGVyaXZlZFZhbHVlcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRWYWx1ZXMoZFZhcnMpIHtcbiAgdmFyIG8gPSB7fTtcbiAgT2JqZWN0LmtleXMoZFZhcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvW2tleV0gPSBkVmFyc1trZXldLnZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIG87XG59O1xuXG52YXIgSWR5bGxEb2N1bWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKElkeWxsRG9jdW1lbnQsIF9SZWFjdCRQdXJlQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gSWR5bGxEb2N1bWVudChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJZHlsbERvY3VtZW50KTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkUHVyZUNvbXBvbmVudDIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMzLnNjcm9sbExpc3RlbmVyID0gX3RoaXMzLnNjcm9sbExpc3RlbmVyLmJpbmQoX3RoaXMzKTtcbiAgICBfdGhpczMuaW5pdFNjcm9sbExpc3RlbmVyID0gX3RoaXMzLmluaXRTY3JvbGxMaXN0ZW5lci5iaW5kKF90aGlzMyk7XG5cbiAgICB2YXIgYXN0ID0gZmlsdGVyQVNURm9yRG9jdW1lbnQocHJvcHMuYXN0KTtcblxuICAgIHZhciBfc3BsaXRBU1QgPSBzcGxpdEFTVChhc3QpLFxuICAgICAgICB2YXJzID0gX3NwbGl0QVNULnZhcnMsXG4gICAgICAgIGRlcml2ZWQgPSBfc3BsaXRBU1QuZGVyaXZlZCxcbiAgICAgICAgZGF0YSA9IF9zcGxpdEFTVC5kYXRhLFxuICAgICAgICBlbGVtZW50cyA9IF9zcGxpdEFTVC5lbGVtZW50cztcblxuICAgIHZhciBpbml0aWFsU3RhdGUgPSBfZXh0ZW5kcyh7fSwgZ2V0VmFycyh2YXJzKSwgZ2V0RGF0YShkYXRhLCBwcm9wcy5kYXRhc2V0cykpO1xuICAgIHZhciBkZXJpdmVkVmFycyA9IF90aGlzMy5kZXJpdmVkVmFycyA9IGdldFZhcnMoZGVyaXZlZCwgaW5pdGlhbFN0YXRlKTtcblxuICAgIHZhciBzdGF0ZSA9IF90aGlzMy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUsIGdldERlcml2ZWRWYWx1ZXMoZGVyaXZlZFZhcnMpKTtcblxuICAgIF90aGlzMy51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuICAgICAgLy8gbWVyZ2UgbmV3IGRvYyBzdGF0ZSB3aXRoIG9sZFxuICAgICAgdmFyIG5ld01lcmdlZFN0YXRlID0gX2V4dGVuZHMoe30sIF90aGlzMy5zdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgLy8gdXBkYXRlIGRlcml2ZWQgdmFsdWVzXG4gICAgICB2YXIgbmV3RGVyaXZlZFZhbHVlcyA9IGdldERlcml2ZWRWYWx1ZXMoZ2V0VmFycyhkZXJpdmVkLCBuZXdNZXJnZWRTdGF0ZSkpO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF9leHRlbmRzKHt9LCBuZXdNZXJnZWRTdGF0ZSwgbmV3RGVyaXZlZFZhbHVlcyk7XG4gICAgICB2YXIgY2hhbmdlZEtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGspIHtcbiAgICAgICAgaWYgKHN0YXRlW2tdICE9PSBuZXh0U3RhdGVba10pIGFjYy5wdXNoKGspO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgLy8gVXBkYXRlIGRvYyBzdGF0ZSByZWZlcmVuY2UuXG4gICAgICAvLyBXZSByZS11c2UgdGhlIHNhbWUgb2JqZWN0IGhlcmUgc28gdGhhdFxuICAgICAgLy8gSWR5bGxEb2N1bWVudC5zdGF0ZSBjYW4gYmUgYWNjdXJhdGVseSBjaGVja2VkIGluIHRlc3RzXG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICAvLyBwYXNzIHRoZSBuZXcgZG9jIHN0YXRlIHRvIGFsbCBsaXN0ZW5lcnMgYWthIGNvbXBvbmVudCB3cmFwcGVyc1xuICAgICAgdXBkYXRlUHJvcHNDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZihzdGF0ZSwgY2hhbmdlZEtleXMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGV2YWxDb250ZXh0LnVwZGF0ZSA9IF90aGlzMy51cGRhdGVTdGF0ZTtcblxuICAgIHZhciByanMgPSBuZXcgUmVhY3RKc29uU2NoZW1hKF9leHRlbmRzKHt9LCBwcm9wcy5jb21wb25lbnRzLCB7IFdyYXBwZXI6IFdyYXBwZXIgfSkpO1xuICAgIHZhciBzY2hlbWEgPSB0cmFuc2xhdGUoYXN0KTtcblxuICAgIHZhciB3cmFwVGFyZ2V0cyA9IGZpbmRXcmFwVGFyZ2V0cyhzY2hlbWEsIF90aGlzMy5zdGF0ZSk7XG5cbiAgICB2YXIgcmVmQ291bnRlciA9IDA7XG5cbiAgICB2YXIgdHJhbnNmb3JtZWRTY2hlbWEgPSBtYXBUcmVlKHNjaGVtYSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHJldHVybiBub2RlO1xuXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVmcyBmcm9tIHN0cmluZ3MgdG8gZnVuY3Rpb25zIGFuZCBzdG9yZSB0aGVtXG4gICAgICBpZiAobm9kZS5yZWYgfHwgbm9kZS5oYXNIb29rKSB7XG4gICAgICAgIG5vZGUucmVmTmFtZSA9IG5vZGUucmVmIHx8IG5vZGUuY29tcG9uZW50ICsgKHJlZkNvdW50ZXIrKykudG9TdHJpbmcoKTtcbiAgICAgICAgbm9kZS5yZWYgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgICAgdmFyIGRvbU5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShlbCk7XG4gICAgICAgICAgZG9tTm9kZS5kYXRhc2V0LnJlZiA9IG5vZGUucmVmTmFtZTtcbiAgICAgICAgICBzY3JvbGxPZmZzZXRzW25vZGUucmVmTmFtZV0gPSBub2RlLnNjcm9sbE9mZnNldCB8fCAwO1xuICAgICAgICAgIHJlZkNhY2hlW25vZGUucmVmTmFtZV0gPSB7XG4gICAgICAgICAgICBwcm9wczogbm9kZSxcbiAgICAgICAgICAgIGRvbU5vZGU6IGRvbU5vZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdyYXBUYXJnZXRzLmluY2x1ZGVzKG5vZGUpKSByZXR1cm4gbm9kZTtcblxuICAgICAgdmFyIGNvbXBvbmVudCA9IG5vZGUuY29tcG9uZW50LFxuICAgICAgICAgIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbixcbiAgICAgICAgICBrZXkgPSBub2RlLmtleSxcbiAgICAgICAgICBfbm9kZSRfX3ZhcnNfXyA9IG5vZGUuX192YXJzX18sXG4gICAgICAgICAgX192YXJzX18gPSBfbm9kZSRfX3ZhcnNfXyA9PT0gdW5kZWZpbmVkID8ge30gOiBfbm9kZSRfX3ZhcnNfXyxcbiAgICAgICAgICBfbm9kZSRfX2V4cHJfXyA9IG5vZGUuX19leHByX18sXG4gICAgICAgICAgX19leHByX18gPSBfbm9kZSRfX2V4cHJfXyA9PT0gdW5kZWZpbmVkID8ge30gOiBfbm9kZSRfX2V4cHJfXyxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhub2RlLCBbJ2NvbXBvbmVudCcsICdjaGlsZHJlbicsICdrZXknLCAnX192YXJzX18nLCAnX19leHByX18nXSk7XG5cbiAgICAgIC8vIGFzc2lnbiB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRyYWNrZWQgdmFycyBhbmQgZXhwcmVzc2lvbnNcblxuXG4gICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBpZiAoX192YXJzX19ba10pIHtcbiAgICAgICAgICBub2RlW2tdID0gc3RhdGVbX192YXJzX19ba11dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX2V4cHJfX1trXSAmJiAhX19leHByX19ba10uaW5jbHVkZXMoJ3JlZnMuJykpIHtcbiAgICAgICAgICBpZiAoaG9va3MuaW5kZXhPZihrKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGVba10gPSBldmFsRXhwcmVzc2lvbihzdGF0ZSwgX19leHByX19ba10sIGssIGV2YWxDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGRlZmluZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBjb21wb25lbnRzIHdpbGwgY2FsbCB2aWEgdGhpcy5wcm9wcy51cGRhdGVQcm9wc1xuICAgICAgbm9kZS51cGRhdGVQcm9wcyA9IGZ1bmN0aW9uIChuZXdQcm9wcykge1xuICAgICAgICAvLyBpbml0IG5ldyBkb2Mgc3RhdGUgb2JqZWN0XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgcGFzc2VkIGluIHVwZGF0ZXNcbiAgICAgICAgT2JqZWN0LmtleXMobmV3UHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAvLyBpZiBhIHRyYWNrZWQgdmFyIHdhcyB1cGRhdGVkIGdldCBpdHMgbmV3IHZhbHVlXG4gICAgICAgICAgaWYgKF9fdmFyc19fW2tdKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZVtfX3ZhcnNfX1trXV0gPSBuZXdQcm9wc1trXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczMudXBkYXRlU3RhdGUobmV3U3RhdGUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBXcmFwcGVyLFxuICAgICAgICBfX3ZhcnNfXzogX192YXJzX18sXG4gICAgICAgIF9fZXhwcl9fOiBfX2V4cHJfXyxcbiAgICAgICAgaGFzSG9vazogbm9kZS5oYXNIb29rLFxuICAgICAgICByZWZOYW1lOiBub2RlLnJlZk5hbWUsXG4gICAgICAgIGNoaWxkcmVuOiBbbm9kZV1cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBfdGhpczMua2lkcyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnaWR5bGwtcm9vdCcsIHJlZjogX3RoaXMzLmluaXRTY3JvbGxMaXN0ZW5lciB9LFxuICAgICAgcmpzLnBhcnNlU2NoZW1hKHRyYW5zZm9ybWVkU2NoZW1hKVxuICAgICk7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIElkeWxsRG9jdW1lbnQucHJvdG90eXBlLnNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gc2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgcmVmcyA9IGdldFJlZnMoKTtcbiAgICB1cGRhdGVSZWZzQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKF9leHRlbmRzKHt9LCBfdGhpczQuc3RhdGUsIHsgcmVmczogcmVmcyB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgSWR5bGxEb2N1bWVudC5wcm90b3R5cGUuaW5pdFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gaW5pdFNjcm9sbExpc3RlbmVyKGVsKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBpZiAoIWVsKSByZXR1cm47XG5cbiAgICB2YXIgc2Nyb2xsZXIgPSBzY3JvbGxwYXJlbnQoZWwpO1xuICAgIGlmIChzY3JvbGxlciA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBzY3JvbGxlciA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbE1vbml0b3IuY3JlYXRlQ29udGFpbmVyKHNjcm9sbGVyKTtcbiAgICBPYmplY3Qua2V5cyhyZWZDYWNoZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX3JlZkNhY2hlJGtleSA9IHJlZkNhY2hlW2tleV0sXG4gICAgICAgICAgcHJvcHMgPSBfcmVmQ2FjaGUka2V5LnByb3BzLFxuICAgICAgICAgIGRvbU5vZGUgPSBfcmVmQ2FjaGUka2V5LmRvbU5vZGU7XG5cbiAgICAgIHZhciB3YXRjaGVyID0gc2Nyb2xsQ29udGFpbmVyLmNyZWF0ZShkb21Ob2RlLCBzY3JvbGxPZmZzZXRzW2tleV0pO1xuICAgICAgaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICBpZiAocHJvcHNbaG9va10pIHtcbiAgICAgICAgICB3YXRjaGVyW3Njcm9sbE1vbml0b3JFdmVudHNbaG9va11dKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV2YWxFeHByZXNzaW9uKF90aGlzNS5zdGF0ZSwgcHJvcHNbaG9va10sIGhvb2ssIGV2YWxDb250ZXh0KSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNjcm9sbFdhdGNoZXJzLnB1c2god2F0Y2hlcik7XG4gICAgfSk7XG4gICAgaWYgKHNjcm9sbGVyID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBzY3JvbGxlciA9IHdpbmRvdztcbiAgICB9XG4gICAgc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XG4gIH07XG5cbiAgSWR5bGxEb2N1bWVudC5wcm90b3R5cGUudXBkYXRlRGVyaXZlZFZhcnMgPSBmdW5jdGlvbiB1cGRhdGVEZXJpdmVkVmFycyhuZXdTdGF0ZSkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5kZXJpdmVkVmFycykuZm9yRWFjaChmdW5jdGlvbiAoZHYpIHtcbiAgICAgIF90aGlzNi5kZXJpdmVkVmFyc1tkdl0udmFsdWUgPSBfdGhpczYuZGVyaXZlZFZhcnNbZHZdLnVwZGF0ZShuZXdTdGF0ZSwgX3RoaXM2LnN0YXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICBJZHlsbERvY3VtZW50LnByb3RvdHlwZS5nZXREZXJpdmVkVmFycyA9IGZ1bmN0aW9uIGdldERlcml2ZWRWYXJzKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyIGR2cyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVyaXZlZFZhcnMpLmZvckVhY2goZnVuY3Rpb24gKGR2KSB7XG4gICAgICBkdnNbZHZdID0gX3RoaXM3LmRlcml2ZWRWYXJzW2R2XS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZHZzO1xuICB9O1xuXG4gIElkeWxsRG9jdW1lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICB2YXIgcmVmcyA9IGdldFJlZnMoKTtcbiAgICB1cGRhdGVSZWZzQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKF9leHRlbmRzKHt9LCBfdGhpczguc3RhdGUsIHsgcmVmczogcmVmcyB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgSWR5bGxEb2N1bWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmtpZHM7XG4gIH07XG5cbiAgcmV0dXJuIElkeWxsRG9jdW1lbnQ7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBJZHlsbERvY3VtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lkeWxsLWRvY3VtZW50L2Rpc3QvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlDQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
          })
        