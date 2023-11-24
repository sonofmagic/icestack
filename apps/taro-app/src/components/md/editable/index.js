"use strict";function t(e){"@babel/helpers - typeof";return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,i){return e=r(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(e){var r=i(e,"string");return"symbol"===t(r)?r:String(r)}function i(e,r){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,r||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(t){function r(e){if(t._edit)t._edit.insert(e);else{var r=t.data.nodes.slice(0);r.push(e),t._editVal("nodes",t.data.nodes,r,!0)}}function i(e){"string"==typeof e.src&&(e.src=[e.src]);for(var i=new a(t),n=0;n<e.src.length;n++)e.src[n]=i.getUrl(e.src[n]);r({name:"div",attrs:{style:"text-align:center"},children:[e]})}var n=this;this.vm=t,this.editHistory=[],this.editI=-1,t._mask=[];var o=function(r){var i=n.editHistory[n.editI+r];i&&(n.editI+=r,t.setData(e({},i.key,i.value)))};t.undo=function(){return o(-1)},t.redo=function(){return o(1)},t._editVal=function(r,i,s,a){for(;n.editI<n.editHistory.length-1;)n.editHistory.pop();for(;n.editHistory.length>30;)n.editHistory.pop(),n.editI--;var o=n.editHistory[n.editHistory.length-1];o&&o.key===r||(o&&(n.editHistory.pop(),n.editI--),n.editHistory.push({key:r,value:i}),n.editI++),n.editHistory.push({key:r,value:s}),n.editI++,a&&t.setData(e({},r,s))},t._getItem=function(e,r,i){var n,a;return"color"===e?s.color:("img"===e.name?(n=s.img.slice(0),t.getSrc||(a=n.indexOf("换图"),-1!==a&&n.splice(a,1),a=n.indexOf("超链接"),-1!==a&&n.splice(a,1),-1!==(a=n.indexOf("预览图"))&&n.splice(a,1)),-1!==(a=n.indexOf("禁用预览"))&&e.attrs.ignore&&(n[a]="启用预览")):"a"===e.name?(n=s.link.slice(0),t.getSrc||-1!==(a=n.indexOf("更换链接"))&&n.splice(a,1)):"video"===e.name||"audio"===e.name?(n=s.media.slice(0),a=n.indexOf("封面"),t.getSrc||-1===a||n.splice(a,1),a=n.indexOf("循环"),e.attrs.loop&&-1!==a&&(n[a]="不循环"),a=n.indexOf("自动播放"),e.attrs.autoplay&&-1!==a&&(n[a]="不自动播放")):n=s.node.slice(0),r||-1!==(a=n.indexOf("上移"))&&n.splice(a,1),i||-1!==(a=n.indexOf("下移"))&&n.splice(a,1),n)},t._tooltip=function(e){t.setData({tooltip:{top:e.top,items:e.items}}),t._tooltipcb=e.success},t._slider=function(e){t.setData({slider:{min:e.min,max:e.max,value:e.value,top:e.top}}),t._slideringcb=e.changing,t._slidercb=e.change},t._color=function(e){t.setData({color:{items:e.items,top:e.top}}),t._colorcb=e.success},t._maskTap=function(){for(;this._mask.length;)this._mask.pop()();var t={};this.data.tooltip&&(t.tooltip=null),this.data.slider&&(t.slider=null),this.data.color&&(t.color=null),(this.data.tooltip||this.data.slider||this.data.color)&&this.setData(t)},t.insertHtml=function(e){n.inserting=!0;var i=new a(t).parse(e);n.inserting=void 0;for(var s=0;s<i.length;s++)r(i[s])},t.insertImg=function(){t.getSrc&&t.getSrc("img").then(function(e){"string"==typeof e&&(e=[e]);for(var i=new a(t),n=0;n<e.length;n++)r({name:"img",attrs:{src:i.getUrl(e[n])}})}).catch(function(){})},t.insertLink=function(){t.getSrc&&t.getSrc("link").then(function(t){r({name:"a",attrs:{href:t},children:[{type:"text",text:t}]})}).catch(function(){})},t.insertTable=function(t,e){for(var i={name:"table",attrs:{style:"display:table;width:100%;margin:10px 0;text-align:center;border-spacing:0;border-collapse:collapse;border:1px solid gray"},children:[]},n=0;n<t;n++){for(var s={name:"tr",attrs:{},children:[]},a=0;a<e;a++)s.children.push({name:"td",attrs:{style:"padding:2px;border:1px solid gray"},children:[{type:"text",text:""}]});i.children.push(s)}r(i)},t.insertVideo=function(){t.getSrc&&t.getSrc("video").then(function(t){i({name:"video",attrs:{controls:"T"},src:t})}).catch(function(){})},t.insertAudio=function(){t.getSrc&&t.getSrc("audio").then(function(t){var e;t.src?(e=t.src,t.src=void 0):(e=t,t={}),t.controls="T",i({name:"audio",attrs:t,src:e})}).catch(function(){})},t.insertText=function(){r({name:"p",attrs:{},children:[{type:"text",text:""}]})},t.clear=function(){t._maskTap(),t._edit=void 0,t.setData({nodes:[{name:"p",attrs:{},children:[{type:"text",text:""}]}]})},t.getContent=function(){var e="";!function t(r,i){for(var n=0;n<r.length;n++){var s=r[n];if("text"===s.type)e+=s.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/\xa0/g,"&nbsp;");else{if("img"===s.name&&(s.attrs.src||"").includes("data:image/svg+xml;utf8,")){e+=s.attrs.src.substr(24).replace(/%23/g,"#").replace("<svg",'<svg style="'+(s.attrs.style||"")+'"');continue}if("video"===s.name||"audio"===s.name)if(s.src.length>1){s.children=[];for(var a=0;a<s.src.length;a++)s.children.push({name:"source",attrs:{src:s.src[a]}})}else s.attrs.src=s.src[0];else"div"===s.name&&(s.attrs.style||"").includes("overflow:auto")&&"table"===(s.children[0]||{}).name&&(s=s.children[0]);if("table"===s.name&&(i=s.attrs,(s.attrs.style||"").includes("display:grid"))){s.attrs.style=s.attrs.style.split("display:grid")[0];for(var o=[{name:"tr",attrs:{},children:[]}],l=0;l<s.children.length;l++)s.children[l].attrs.style=s.children[l].attrs.style.replace(/grid-[^;]+;*/g,""),s.children[l].r!==o.length?o.push({name:"tr",attrs:{},children:[s.children[l]]}):o[o.length-1].children.push(s.children[l]);s.children=o}e+="<"+s.name;for(var c in s.attrs){var d=s.attrs[c];d&&("T"!==d&&!0!==d?"t"===s.name[0]&&"style"===c&&i&&(d=d.replace(/;*display:table[^;]*/,""),i.border&&(d=d.replace(/border[^;]+;*/g,function(t){return t.includes("collapse")?t:""})),i.cellpadding&&(d=d.replace(/padding[^;]+;*/g,"")),!d)||(e+=" "+c+'="'+d.replace(/"/g,"&quot;")+'"'):e+=" "+c)}e+=">",s.children&&(t(s.children,i),e+="</"+s.name+">")}}}(t.data.nodes);for(var r=t.plugins.length;r--;)t.plugins[r].onGetContent&&(e=t.plugins[r].onGetContent(e)||e);return e}}var s=require("./config"),a=require("../parser");n.prototype.onUpdate=function(t,e){var r=this;this.vm.data.editable&&(this.vm._maskTap(),e.entities.amp="&",this.inserting||(this.vm._edit=void 0,t||setTimeout(function(){r.vm.setData({nodes:[{name:"p",attrs:{},children:[{type:"text",text:""}]}]})},0)))},n.prototype.onParse=function(t){!this.vm.data.editable||"td"!==t.name&&"th"!==t.name||this.vm.getText(t.children)||t.children.push({type:"text",text:""})},module.exports=n;