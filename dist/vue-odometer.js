!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("odometer"));else if("function"==typeof define&&define.amd)define(["odometer"],t);else{var e=t("object"==typeof exports?require("odometer"):n.Odometer);for(var i in e)("object"==typeof exports?exports:n)[i]=e[i]}}("undefined"!=typeof self?self:this,function(n){return function(n){function t(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),a=e.n(i),r=e(4),o=e.n(r),s={__odometer__:o.a,name:"IOdometer",props:{minIntegerLen:{type:Number,required:!1,default:0},value:{type:Number,required:!1,default:0},format:{type:String,required:!1},theme:{type:String,required:!1,default:"default"},duration:{type:Number,required:!1},animation:{type:String,required:!1},formatFunction:{type:Function,required:!1}},data:function(){return{instance:null}},watch:{value:{handler:function(n){var t=this;t.instance&&a()(t.instance.update)&&t.instance.update(n)},deep:!1}},methods:{auto:function(){"undefined"!=typeof window&&(window.odometerOptions?window.odometerOptions.auto=!1:window.odometerOptions={auto:!1})},init:function(){var n=this;if(!n.instance){n.auto();var t=n.$el,e=new o.a({el:t,value:n.value,minIntegerLen:n.minIntegerLen,format:n.format,theme:n.theme,duration:n.duration,animation:n.animation,formatFunction:n.formatFunction});e.render(),n.$emit("ready",e,o.a),n.instance=e}},uninit:function(){this.instance=null},renderInside:function(){var n=this;n.instance&&a()(n.instance.renderInside)&&n.instance.renderInside()},watchForMutations:function(){var n=this;n.instance&&a()(n.instance.watchForMutations)&&n.instance.watchForMutations()},startWatchingMutations:function(){var n=this;n.instance&&a()(n.instance.startWatchingMutations)&&n.instance.startWatchingMutations()},stopWatchingMutations:function(){var n=this;n.instance&&a()(n.instance.stopWatchingMutations)&&n.instance.stopWatchingMutations()},cleanValue:function(n){var t=this;t.instance&&a()(t.instance.cleanValue)&&t.instance.cleanValue(n)},bindTransitionEnd:function(){var n=this;n.instance&&a()(n.instance.bindTransitionEnd)&&n.instance.bindTransitionEnd()},resetFormat:function(){var n=this;n.instance&&a()(n.instance.resetFormat)&&n.instance.resetFormat()},renderDigit:function(){var n=this;n.instance&&a()(n.instance.renderDigit)&&n.instance.renderDigit()},formatDigits:function(n){var t=this;t.instance&&a()(t.instance.formatDigits)&&t.instance.formatDigits(n)},insertDigit:function(n,t){var e=this;e.instance&&a()(e.instance.insertDigit)&&e.instance.insertDigit(n,t)},addDigit:function(n,t){var e=this;e.instance&&a()(e.instance.addDigit)&&e.instance.addDigit(n,t)},addSpacer:function(n,t,e){var i=this;i.instance&&a()(i.instance.addSpacer)&&i.instance.addSpacer(n,t,e)},animate:function(n){var t=this;t.instance&&a()(t.instance.animate)&&t.instance.animate(n)},animateCount:function(n){var t=this;t.instance&&a()(t.instance.animateCount)&&t.instance.animateCount(n)},getDigitCount:function(){var n=this;n.instance&&a()(n.instance.getDigitCount)&&n.instance.getDigitCount()},getFractionalDigitCount:function(){var n=this;n.instance&&a()(n.instance.getFractionalDigitCount)&&n.instance.getFractionalDigitCount()},resetDigits:function(){var n=this;n.instance&&a()(n.instance.resetDigits)&&n.instance.resetDigits()},animateSlide:function(n){var t=this;t.instance&&a()(t.instance.animateSlide)&&t.instance.animateSlide(n)},render:function(n){var t=this;t.instance&&a()(t.instance.render)&&t.instance.render(n)},update:function(n){var t=this;t.instance&&a()(t.instance.update)&&t.instance.update(n)}},mounted:function(){this.init()},beforeDestroy:function(){this.uninit()},render:function(n){return n("span",{})}};t.default=s},function(n,t,e){function i(n){if(!r(n))return!1;var t=a(n);return t==s||t==c||t==o||t==u}var a=e(2),r=e(3),o="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";n.exports=i},function(n,t){function e(n){return a.call(n)}var i=Object.prototype,a=i.toString;n.exports=e},function(n,t){function e(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}n.exports=e},function(t,e){t.exports=n}])});
//# sourceMappingURL=vue-odometer.js.map
