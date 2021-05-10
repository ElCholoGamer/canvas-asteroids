(self.webpackChunkcanvas_asteroids=self.webpackChunkcanvas_asteroids||[]).push([[657],{506:function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},100:function(t,e,n){var r=n(489),i=n(67);function s(e,n,o){return i()?t.exports=s=Reflect.construct:t.exports=s=function(t,e,n){var i=[null];i.push.apply(i,e);var s=new(Function.bind.apply(t,i));return n&&r(s,n.prototype),s},s.apply(null,arguments)}t.exports=s},754:function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:function(t,e,n){var r=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},67:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},585:function(t,e,n){var r=n(8),i=n(506);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},489:function(t){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},8:function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},657:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(575),i=n.n(r),s=n(913),o=n.n(s),c=n(205),u=n.n(c),a=n(585),h=n.n(a),f=n(754),l=n.n(f),y=n(517);function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l()(t);if(e){var i=l()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h()(this,n)}}var v=function(t){u()(n,t);var e=p(n);function n(t,r){var s;return i()(this,n),(s=e.call(this,t)).ROTATION=r,s.SPEED=8,s.SIZE=4,s.life=60,s}return o()(n,[{key:"tick",value:function(){--this.life<=0&&this.destroy();var t=this.game.canvas,e=t.width,n=t.height,r=this.SIZE/2;this.x<-r?this.x=e+r:this.x>e+r&&(this.x=-r),this.y<-r?this.y=n+r:this.x>n+r&&(this.y=-r);var i=Math.radians(this.ROTATION);this.x+=Math.cos(i)*this.SPEED,this.y+=Math.sin(i)*this.SPEED}},{key:"render",value:function(t){t.fillStyle="white",t.fillRect(this.x-this.SIZE/2,this.y-this.SIZE/2,this.SIZE,this.SIZE)}}]),n}(y.Z);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l()(t);if(e){var i=l()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h()(this,n)}}var R=function(t){u()(n,t);var e=S(n);function n(){var t;return i()(this,n),(t=e.apply(this,arguments)).SPRITE=t.game.sprites.get("ship"),t.SHOOT_SOUND=t.game.sounds.get("shoot"),t.SPRITE_SIZE=.4,t.ROTATION_SPEED=6,t.ACCELERATION=.2,t.FRICTION=.02,t.WIDTH=t.SPRITE.width*t.SPRITE_SIZE,t.HEIGHT=t.SPRITE.height*t.SPRITE_SIZE,t.forces=Array(360).fill(0),t.angle=-90,t}return o()(n,[{key:"tick",value:function(){var t=this.game,e=t.controls,n=t.canvas,r=e.isKeyDown("ArrowUp")||e.isKeyDown("w"),i=e.isKeyDown("ArrowRight")||e.isKeyDown("d"),s=e.isKeyDown("ArrowLeft")||e.isKeyDown("a"),o=e.isKeyPressed(" ")||e.isKeyPressed("z");if(i&&(this.angle+=this.ROTATION_SPEED),s&&(this.angle-=this.ROTATION_SPEED),this.angle=Math.mod(this.angle,360),r){var c=Math.floor(this.angle);this.forces[c]+=this.ACCELERATION}for(var u=0;u<this.forces.length;u++){this.forces[u]=Math.max(0,this.forces[u]*(1-this.FRICTION));var a=this.forces[u],h=Math.radians(u);this.x+=Math.cos(h)*a,this.y+=Math.sin(h)*a}var f=n.width,l=n.height,y=Math.sqrt(Math.pow(this.WIDTH,2)+Math.pow(this.HEIGHT,2));if(this.x<-y?this.x=f+y:this.x>f+y&&(this.x=-y),this.y<-y?this.y=l+y:this.y>l+y&&(this.y=-y),o){var p=Math.radians(this.angle);this.game.scene.instantiate(v,this.x+8*Math.cos(p),this.y+8*Math.sin(p),this.angle),this.SHOOT_SOUND.paused||(this.SHOOT_SOUND.pause(),this.SHOOT_SOUND.currentTime=0),this.SHOOT_SOUND.play()}}},{key:"render",value:function(t){t.translate(this.x,this.y),t.rotate(Math.radians(this.angle+90)),t.drawImage(this.SPRITE,-this.WIDTH/2,-this.HEIGHT/2,this.WIDTH,this.HEIGHT)}}]),n}(y.Z);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l()(t);if(e){var i=l()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h()(this,n)}}var g=function(t){u()(n,t);var e=d(n);function n(){return i()(this,n),e.apply(this,arguments)}return o()(n,[{key:"start",value:function(){var t=this.game,e=t.scene,n=t.canvas,r=n.width,i=n.height;e.instantiate(R,r/2,i/2)}}]),n}(n(192).Z)},517:function(t,e,n){"use strict";var r=n(575),i=n.n(r),s=n(913),o=n.n(s),c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i()(this,t),this.game=e,this.layer=n,this.x=0,this.y=0}return o()(t,[{key:"destroy",value:function(){this.game.scene.destroy(this)}}]),t}();e.Z=c},192:function(t,e,n){"use strict";var r=n(100),i=n.n(r),s=n(575),o=n.n(s),c=n(913),u=n.n(c),a=function(){function t(e){o()(this,t),this.game=e,this._objects=[]}return u()(t,[{key:"instantiate",value:function(t,e,n){for(var r=arguments.length,s=new Array(r>3?r-3:0),o=3;o<r;o++)s[o-3]=arguments[o];var c=i()(t,[this.game].concat(s));return c.x=e,c.y=n,this._objects.push(c),c}},{key:"destroy",value:function(t){this._objects=this._objects.filter((function(e){return e!==t}))}},{key:"objects",get:function(){return this._objects}}]),t}();e.Z=a}}]);
//# sourceMappingURL=657.aa38a71d.chunk.js.map