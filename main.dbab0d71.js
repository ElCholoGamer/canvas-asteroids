!function(){var t,e,n={228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},858:function(t){t.exports=function(t){if(Array.isArray(t))return t}},646:function(t,e,n){var r=n(228);t.exports=function(t){if(Array.isArray(t))return r(t)}},575:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:function(t){function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},884:function(t){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:function(t,e,n){var r=n(858),o=n(884),i=n(379),a=n(521);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},319:function(t,e,n){var r=n(646),o=n(860),i=n(379),a=n(206);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},379:function(t,e,n){var r=n(228);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},757:function(t,e,n){t.exports=n(666)},315:function(){"use strict";Math.degrees=function(t){return t/(Math.PI/180)},Math.radians=function(t){return t*(Math.PI/180)},Math.mod=function(t,e){return(t%e+e)%e}},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=A(a,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?v:h,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function p(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(O([])));k&&k!==n&&r.call(k,i)&&(w=k);var x=g.prototype=p.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),c(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},386:function(t,e,n){var r={"./game":[977,977],"./game.ts":[977,977],"./menu":[689,689],"./menu.ts":[689,689]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=386,t.exports=o}},r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}o.m=n,o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))},o.u=function(t){return t+"."+{689:"bf53d0a6",977:"458e6829"}[t]+".chunk.js"},o.miniCssF=function(t){},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t={},e="canvas-asteroids:",o.l=function(n,r,i,a){if(t[n])t[n].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+i){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",e+i),u.src=n),t[n]=[r];var h=function(e,r){u.onerror=u.onload=null,clearTimeout(d);var o=t[n];if(delete t[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(r)})),e)return e(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="/canvas-asteroids/",function(){var t={179:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=i);var a=o.p+o.u(e),u=new Error;o.l(a,(function(n){if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}}),"chunk-"+e,e)}};var e=function(e,n){for(var r,i,a=n[0],u=n[1],c=n[2],s=0,f=[];s<a.length;s++)i=a[s],o.o(t,i)&&t[i]&&f.push(t[i][0]),t[i]=0;for(r in u)o.o(u,r)&&(o.m[r]=u[r]);for(c&&c(o),e&&e(n);f.length;)f.shift()()},n=self.webpackChunkcanvas_asteroids=self.webpackChunkcanvas_asteroids||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),function(){"use strict";var t=o(757),e=o.n(t),n=(o(315),o(319)),r=o.n(n),i=o(575),a=o.n(i),u=o(913),c=o.n(u),s=function(){function t(){var e=this;a()(this,t),this.keys=new Set,this.keyPresses=new Set,document.addEventListener("keydown",(function(t){return e.handleKeyPress(t)})),document.addEventListener("keyup",(function(t){return e.handleKeyUp(t)})),window.addEventListener("blur",(function(){return e.handleBlur()}))}return c()(t,[{key:"tick",value:function(){this.keyPresses.clear()}},{key:"isKeyDown",value:function(t){return this.keys.has(t)}},{key:"isKeyPressed",value:function(t){return this.keyPresses.has(t)}},{key:"handleKeyPress",value:function(t){this.keys.add(t.key),this.keyPresses.add(t.key)}},{key:"handleKeyUp",value:function(t){this.keys.delete(t.key)}},{key:"handleBlur",value:function(){this.keys.clear(),this.keyPresses.clear()}}]),t}(),f=o(38),l=o.n(f),h=function(){function t(){a()(this,t),this.schedules=new Map,this.intervals=new Map,this._time=0,this.taskID=1}return c()(t,[{key:"tick",value:function(){this._time++;for(var t=0,e=Array.from(this.schedules.entries());t<e.length;t++){var n=l()(e[t],2),r=n[0],o=n[1];this._time<o.runAt||(o.run(),this.schedules.delete(r))}for(var i=0,a=Array.from(this.intervals.values());i<a.length;i++){var u=a[i];this._time<u.runAt||(u.run(),u.runAt+=u.interval)}}},{key:"schedule",value:function(t,e){this.taskID++;var n={run:t,runAt:this._time+e};return this.schedules.set(this.taskID,n),this.taskID}},{key:"scheduleRepeat",value:function(t,e,n){this.taskID++;var r={run:t,interval:null!=n?n:e,runAt:this._time+e};return this.intervals.set(this.taskID,r),this.taskID}},{key:"cancel",value:function(t){return this.schedules.delete(t)}},{key:"cancelRepeat",value:function(t){return this.intervals.delete(t)}},{key:"time",get:function(){return this._time}}]),t}(),d=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"load";a()(this,t),this.ctor=e,this.loadEvent=n,this.resouces=new Map}return c()(t,[{key:"load",value:function(t,e){var n=this;return new Promise((function(r,o){var i=new n.ctor;i.src=e,i.addEventListener(n.loadEvent,(function(){n.resouces.set(t,i),r(i)})),i.addEventListener("error",o)}))}},{key:"get",value:function(t){var e=this.resouces.get(t);if(!e)throw new Error('"'.concat(t,'" resource missing'));return e}}]),t}();function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},m=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},g=new(function(){function t(e){a()(this,t),this.canvas=e,this.scheduler=new h,this.controls=new s,this.sprites=new d(Image),this.sounds=new d(Audio,"canplaythrough")}return c()(t,[{key:"start",value:function(){var t=this;requestAnimationFrame((function(){return t.update()}))}},{key:"update",value:function(){var t=this;this.scheduler.tick();var e,n=this.scene.objects,o=v(n);try{for(o.s();!(e=o.n()).done;){e.value.tick()}}catch(t){o.e(t)}finally{o.f()}var i=r()(n).sort((function(t,e){return t.layer-e.layer})),a=this.canvas.getContext("2d"),u=this.canvas,c=u.width,s=u.height;a.clearRect(0,0,c,s);var f,l=v(i);try{for(l.s();!(f=l.n()).done;){var h=f.value;a.save(),h.render(a),a.restore()}}catch(t){l.e(t)}finally{l.f()}this.controls.tick(),requestAnimationFrame((function(){return t.update()}))}},{key:"loadScene",value:function(t){return p(this,void 0,void 0,e().mark((function n(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(386)("./".concat(t));case 2:r=e.sent.default,this.scene=new r(this),this.scene.start();case 5:case"end":return e.stop()}}),n,this)})))}}]),t}())(document.getElementById("game"));m(void 0,void 0,void 0,e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Date.now(),t.next=3,g.sprites.load("ship","/canvas-asteroids/assets/img/ship.png");case 3:return t.next=5,g.sounds.load("shoot","/canvas-asteroids/assets/sound/shoot.wav");case 5:return t.next=7,g.loadScene("game");case 7:console.log("Game loaded in ".concat(Date.now()-n,"ms")),g.start();case 9:case"end":return t.stop()}}),t)})))}()}();
//# sourceMappingURL=main.dbab0d71.js.map