/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = [
	{
		"img": "img/1.jpg",
		"headline": "The Daydream",
		"text": "Gently pull each elbow to the opposite side overhead. Just pretend you’re under a Tahitian waterfall and need to scrub your shoulder blades."
	},
	{
		"img": "img/1a.jpg",
		"headline": "The Daydream 2",
		"text": "Gently pull each elbow to the opposite side overhead. Just pretend you’re under a Tahitian waterfall and need to scrub your shoulder blades."
	},
	{
		"img": "img/2.jpg",
		"headline": "The Carpet Gazer",
		"text": "Remaining seated, extend your legs and reach toward your toes. Stare at the purplish-gray office carpet or search for lost bits of popcorn for 20 seconds."
	},
	{
		"img": "img/3.jpg",
		"headline": "The Half-Bear Hug",
		"text": "Hug one knee at a time, pulling it toward your chest. Tell passers-by you need a mini childhood flashback, or that “this is how you roll.” "
	},
	{
		"img": "img/3a.jpg",
		"headline": "The Half-Bear Hug 2",
		"text": "Hug one knee at a time, pulling it toward your chest. Tell passers-by you need a mini childhood flashback, or that “this is how you roll.” "
	},
	{
		"img": "img/4.jpg",
		"headline": "The Olympic Diver",
		"text": "Clasp your hands in front of you and lower your head in line with your arms. Pretend you actually know how to dive correctly, and use this “proper technique” to impress your cubicle companions. "
	},
	{
		"img": "img/5.jpg",
		"headline": "The Almost-Aerobics Reach",
		"text": "Extend each arm overhead and to the opposite side as you imagine Richard Simmons goading you toward a fabulous body. "
	},
	{
		"img": "img/5a.jpg",
		"headline": "The Almost-Aerobics Reach 2",
		"text": "Extend each arm overhead and to the opposite side as you imagine Richard Simmons goading you toward a fabulous body. "
	},
	{
		"img": "img/6.jpg",
		"headline": "The “Who Cares if I’m at Work” Shrug",
		"text": "Raise both shoulders at once up toward the ears. Drop them and repeat as you explain to your boss that you are, indeed, listening with interest. "
	},
	{
		"img": "img/7.jpg",
		"headline": "The Freedom Search",
		"text": "Clasp hands behind your back, push the chest outward, and raise the chin. Count yourself lucky if you’re not looking at suspended ceiling tiles and fluorescent bulbs."
	},
	{
		"img": "img/8.jpg",
		"headline": "The Spine-Popping Chatterbox",
		"text": "Cross your legs and alternate twists toward the back of the chair. Use the rear-facing position to comment on your neighbor’s color-coded file system with near genuine admiration."
	},
	{
		"img": "img/8a.jpg",
		"headline": "The Spine-Popping Chatterbox 2",
		"text": "Cross your legs and alternate twists toward the back of the chair. Use the rear-facing position to comment on your neighbor’s color-coded file system with near genuine admiration."
	},
	{
		"img": "img/9.jpg",
		"headline": "The Happy Cheer",
		"text": "Clasp hands together above the head, stretching upward. Follow up with “spirit fingers” or some other equally cheesy high school rom-com reference to aerobic activities. "
	},
	{
		"img": "img/11.jpg",
		"headline": "The Dead Robot Dance",
		"text": "Lean your head forward and slowly roll from side to side. Picture all of the times you finished a less-than-polished robot dance with dangling head and arm, and vow to record it next time. "
	},
	{
		"img": "img/12.jpg",
		"headline": "The Sophomore Headshot",
		"text": "Gently pull your head toward each shoulder. Think of your yearbook photo—the one in which you tried to pose like a model but ended up looking off-kilter and half-blinking."
	},
	{
		"img": "img/12a.jpg",
		"headline": "The Sophomore Headshot 2",
		"text": "Gently pull your head toward each shoulder. Think of your yearbook photo—the one in which you tried to pose like a model but ended up looking off-kilter and half-blinking."
	}
];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "*{box-sizing:border-box;margin:0}body{font-family:Raleway,sans-serif;font-size:3vh;line-height:1.4;overflow:hidden}body:after,body:before{position:fixed;display:block;content:\"\";height:10vh;left:0;width:100vw;z-index:1}body:before{top:0;background:linear-gradient(0deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.7) 25%,#fff 95%)}body:after{bottom:0;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.7) 25%,#fff 95%)}#restart{font-family:Material Icons;font-style:normal;font-weight:400;position:fixed;top:1vh;right:1vw;z-index:3;cursor:pointer}#wrapper{margin-top:10vh;transition:transform 5s cubic-bezier(.1,-.2,0,1.1);padding:0 10vw}center{perspective:10px}#countdown{margin:80px 0 120px;font-size:30vh;line-height:0;animation:countdown 1s 60 forwards cubic-bezier(.22,.61,.36,1);perspective-origin:50%}@keyframes countdown{0%{transform:translateZ(-100px)}to{transform:translateZ(0)}}#intro{margin-top:20vh}section{height:65vh;margin:5vh 0;overflow:hidden}h1,h2{text-align:center;margin-bottom:3rem}.section-exercise:nth-child(odd) .exercise-body>p{order:1}.exercise-body{display:flex;flex-direction:row;justify-content:space-around}.exercise-body>p{width:30vw}.timer{--timer:15s;--size:100px;--border-width:10px;position:fixed;width:var(--size);height:var(--size);top:20vh;left:5vw;z-index:1000}.timer:after,.timer:before{content:\"\";display:inline-block;position:absolute}.timer:before{border-radius:100%;border-width:var(--border-width);border-style:solid;border-color:tomato tomato #fff #fff;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2);transform:rotate(-135deg);animation:rotate var(--timer) linear forwards}.timer:after{width:50%;height:100%;background-color:#fff;animation:rotate2 var(--timer) var(--timer) linear forwards}@keyframes rotate{to{transform:rotate(45deg)}}@keyframes rotate2{0%{background-color:transparent;border-radius:100%;border-width:var(--border-width);border-style:solid;border-color:transparent transparent tomato tomato;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2);transform:rotate(-135deg)}to{background-color:transparent;border-radius:100%;border-width:var(--border-width);border-style:solid;border-color:transparent transparent tomato tomato;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2);transform:rotate(45deg)}}#progress{position:fixed;margin:0;padding:0;bottom:1vh;width:100vw;display:flex;justify-content:space-around;list-style:none;z-index:2}#progress li{display:inline-block;flex-grow:1;margin:0 1vw;background-color:#d3d3d3;height:1vh;transition:all 1s}#progress li.done{background-color:#4682b4}#progress li.current{animation:pulsing 1s alternate infinite}@keyframes pulsing{0%{background-color:#d3d3d3}to{background-color:#4682b4}}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_json__);
__webpack_require__(1);


function template({img, headline, text}, index) {
  return `<section class="section-exercise" style="z-index:${100-index};">
    <h2>${headline}</h2>
    <div class="exercise-body">
      <p>${text}</p>
      <img src="${img}" alt="${headline}">
    </div>
  </section>`;
}

let progress = document.getElementById('progress')
let currentExercise = 0;

document.getElementById('exercisesContainer').innerHTML = __WEBPACK_IMPORTED_MODULE_0__data_json___default.a
  .map((x, i) => (x.html = template(x, i)) && x)
  .reduce((a,b) => a + b.html, '');

let counter = 10;
let countdown = document.getElementById('countdown');
countdown.addEventListener('animationiteration', function () {
  countdown.innerText = --counter;
  if (!counter) {
    startExercise();
    startTimer();
  }
});
countdown.innerText = counter;
countdown.style.animationIterationCount = counter + 1;
let timer = document.createElement('div');
timer.className = 'timer';
timer.addEventListener('animationend', function (e) {
  if(e.animationName === 'rotate2') {
    stopTimer();
    if(nextExercise()) {
      startTimer();
    } else {
      exerciseFinnished();
    };
  }
});
timer.addEventListener('dblclick', function () {
  window.location.reload();
});
function startTimer() {
  document.body.prepend(timer);
  document.getElementById('nextExercise').play();
}
function stopTimer() {
  timer.remove();
}
function exerciseFinnished() {
  document.getElementById('exerciseFinished').play();
}

function startExercise() {
  moveContent();
  progress.steps = __WEBPACK_IMPORTED_MODULE_0__data_json___default.a.length;
  progress.nextStep(0);
  return (currentExercise <= __WEBPACK_IMPORTED_MODULE_0__data_json___default.a.length);
}

function nextExercise() {
  currentExercise++;
  moveContent();
  progress.nextStep();

  document.getElementById('progress').dataset.step = currentExercise;
  return (currentExercise <= __WEBPACK_IMPORTED_MODULE_0__data_json___default.a.length);
}

function moveContent() {
  document.getElementById('wrapper').style.transform = `translateY(${-70 * currentExercise}vh)`;
}

document.getElementById('restart').addEventListener('click', window.location.reload);

class ProgressBar extends HTMLElement {
  constructor(){
    super();
    this.steps = 0;
    this.step = 0;
  }

  nextStep(value) {
    if (typeof value === 'undefined') {
      this.step++;
    } else {
      this.step = value;
    }
    this.render();
  }

  render() {
    let classes = [];
    for (let i = 0; i < this.steps; i++) {
      if (i < this.step) {
        classes.push('done');
      } else if (i === this.step) {
        classes.push('current');
      } else {
        classes.push('');
      }
    }
    let lis = classes.map(x => `<li class="${x}"></li>`).reduce((a,b) => a + b, '');
    this.innerHTML = `<ul id="progress">${lis}</ul>`;
  }

  connectedCallback() {
    this.steps = this.getAttribute('steps');
    this.step = this.getAttribute('step');
    this.render();
  }
}
window.customElements.define("progress-bar", ProgressBar);



/***/ })
/******/ ]);