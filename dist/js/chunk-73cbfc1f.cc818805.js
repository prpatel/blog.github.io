(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73cbfc1f"],{"0a81":function(t,e,i){var s={"./adventurealtitude.jpg":"efd7","./garden.jpg":"69a6","./pigduck.jpg":"6b07","./rain.jpg":"63df","./spices.jpg":"4f85","./sunset.jpg":"4ff1"};function r(t){var e=a(t);return i(e)}function a(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="0a81"},"253d":function(t,e,i){},"4c34":function(t,e,i){},"4f85":function(t,e,i){t.exports=i.p+"img/spices.1d2c7a7a.jpg"},"4ff1":function(t,e,i){t.exports=i.p+"img/sunset.8d1393f5.jpg"},"63df":function(t,e,i){t.exports=i.p+"img/rain.9ab01c46.jpg"},"69a6":function(t,e,i){t.exports=i.p+"img/garden.de83b1a7.jpg"},"6b07":function(t,e,i){t.exports=i.p+"img/pigduck.37a6bcfd.jpg"},"7a6e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"pa-0":"","grid-list-md":""}},[s("base-subheading",[t._v("On Instagram")]),s("v-layout",{attrs:{wrap:""}},t._l(t.posts,function(e,r){return s("v-flex",{key:r,attrs:{xs4:""}},[s("base-card",{attrs:{tag:"a",href:e.href,height:"88",color:"grey lighten-2"}},[e.src?s("v-img",{attrs:{height:"100%",src:i("0a81")("./"+e.src)}}):t._e()],1)],1)}),1)],1)},r=[],a={data:function(){return{posts:[{src:"adventurealtitude.jpg"},{src:"garden.jpg"},{src:"pigduck.jpg"},{src:"rain.jpg"},{src:"spices.jpg"},{src:"sunset.jpg"}]}}},n=a,c=i("2877"),o=i("6544"),d=i.n(o),l=i("a523"),h=i("0e8f"),u=i("adda"),g=i("a722"),p=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VContainer:l["a"],VFlex:h["a"],VImg:u["a"],VLayout:g["a"]})},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bf"),r=i("58df"),a=Object(r["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=a,c=i("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,a=t.naturalWidth;r||a?e.calculatedAspectRatio=a/r:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},efd7:function(t,e,i){t.exports=i.p+"img/adventurealtitude.e337bb38.jpg"}}]);
//# sourceMappingURL=chunk-73cbfc1f.cc818805.js.map