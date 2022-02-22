/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={910:(e,o,t)=>{t.r(o),t.d(o,{Properties:()=>r,VariableDescriptor:()=>n,bootstrapExtra:()=>X,findLayerBoundaries:()=>l,findLayersBoundaries:()=>c,getLayersMap:()=>u,getVariables:()=>i,initDoors:()=>Q,initPropertiesTemplates:()=>V,initVariableActionLayer:()=>$});class r{constructor(e){this.properties=null!=e?e:[]}get(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.value));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,o){const t=this.get(e);if(void 0!==t){if(typeof t!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return t}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,o){const t=this.get(e);if(void 0===t)throw new Error('Property "'+e+'" is missing');if(typeof t!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return t}getType(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.type));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}}class n{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new r(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function i(e,o){const t=await WA.room.getTiledMap(),r=new Map;return s(t.layers,r,e,o),r}function s(e,o,t,r){for(const i of e)if("objectgroup"===i.type){for(const e of i.objects)if("variable"===e.type){if(t&&i.name!==t)continue;if(r&&!r.includes(e.name))continue;o.set(e.name,new n(e))}}else"group"===i.type&&s(i.layers,o,t,r)}let a;async function u(){return void 0===a&&(a=async function(){return function(e){const o=new Map;return p(e.layers,"",o),o}(await WA.room.getTiledMap())}()),a}function p(e,o,t){for(const r of e)"group"===r.type?p(r.layers,o+r.name+"/",t):(r.name=o+r.name,t.set(r.name,r))}function l(e){let o=1/0,t=1/0,r=0,n=0;const i=e.data;if("string"==typeof i)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++)0!==i[a+s*e.width]&&(o=Math.min(o,a),n=Math.max(n,a),t=Math.min(t,s),r=Math.max(r,s));return{top:t,left:o,right:n+1,bottom:r+1}}function c(e){let o=1/0,t=1/0,r=0,n=0;for(const i of e){const e=l(i);e.left<o&&(o=e.left),e.top<t&&(t=e.top),e.right>n&&(n=e.right),e.bottom>r&&(r=e.bottom)}return{top:t,left:o,right:n,bottom:r}}var h=Object.prototype.toString,m=Array.isArray||function(e){return"[object Array]"===h.call(e)};function g(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function f(e,o){return null!=e&&"object"==typeof e&&o in e}var v=RegExp.prototype.test,y=/\S/;var A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},b=/\s*/,W=/\s+/,w=/\s*=/,S=/\s*\}/,P=/#|\^|\/|>|\{|&|=|!/;function L(e){this.string=e,this.tail=e,this.pos=0}function E(e,o){this.view=e,this.cache={".":this.view},this.parent=o}function C(){this.templateCache={_cache:{},set:function(e,o){this._cache[e]=o},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}L.prototype.eos=function(){return""===this.tail},L.prototype.scan=function(e){var o=this.tail.match(e);if(!o||0!==o.index)return"";var t=o[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t},L.prototype.scanUntil=function(e){var o,t=this.tail.search(e);switch(t){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=o.length,o},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var o,t,r,n=this.cache;if(n.hasOwnProperty(e))o=n[e];else{for(var i,s,a,u=this,p=!1;u;){if(e.indexOf(".")>0)for(i=u.view,s=e.split("."),a=0;null!=i&&a<s.length;)a===s.length-1&&(p=f(i,s[a])||(t=i,r=s[a],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(r))),i=i[s[a++]];else i=u.view[e],p=f(u.view,e);if(p){o=i;break}u=u.parent}n[e]=o}return g(o)&&(o=o.call(this.view)),o},C.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},C.prototype.parse=function(e,o){var t=this.templateCache,r=e+":"+(o||x.tags).join(":"),n=void 0!==t,i=n?t.get(r):void 0;return null==i&&(i=function(e,o){if(!e)return[];var t,r,n,i,s=!1,a=[],u=[],p=[],l=!1,c=!1,h="",g=0;function f(){if(l&&!c)for(;p.length;)delete u[p.pop()];else p=[];l=!1,c=!1}function A(e){if("string"==typeof e&&(e=e.split(W,2)),!m(e)||2!==e.length)throw new Error("Invalid tags: "+e);t=new RegExp(d(e[0])+"\\s*"),r=new RegExp("\\s*"+d(e[1])),n=new RegExp("\\s*"+d("}"+e[1]))}A(o||x.tags);for(var E,C,B,M,T,V,_=new L(e);!_.eos();){if(E=_.pos,B=_.scanUntil(t))for(var Z=0,k=B.length;Z<k;++Z)i=M=B.charAt(Z),function(e,o){return v.call(e,o)}(y,i)?(c=!0,s=!0,h+=" "):(p.push(u.length),h+=M),u.push(["text",M,E,E+1]),E+=1,"\n"===M&&(f(),h="",g=0,s=!1);if(!_.scan(t))break;if(l=!0,C=_.scan(P)||"name",_.scan(b),"="===C?(B=_.scanUntil(w),_.scan(w),_.scanUntil(r)):"{"===C?(B=_.scanUntil(n),_.scan(S),_.scanUntil(r),C="&"):B=_.scanUntil(r),!_.scan(r))throw new Error("Unclosed tag at "+_.pos);if(T=">"==C?[C,B,E,_.pos,h,g,s]:[C,B,E,_.pos],g++,u.push(T),"#"===C||"^"===C)a.push(T);else if("/"===C){if(!(V=a.pop()))throw new Error('Unopened section "'+B+'" at '+E);if(V[1]!==B)throw new Error('Unclosed section "'+V[1]+'" at '+E)}else"name"===C||"{"===C||"&"===C?c=!0:"="===C&&A(B)}if(f(),V=a.pop())throw new Error('Unclosed section "'+V[1]+'" at '+_.pos);return function(e){for(var o,t=[],r=t,n=[],i=0,s=e.length;i<s;++i)switch((o=e[i])[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":n.pop()[5]=o[2],r=n.length>0?n[n.length-1][4]:t;break;default:r.push(o)}return t}(function(e){for(var o,t,r=[],n=0,i=e.length;n<i;++n)(o=e[n])&&("text"===o[0]&&t&&"text"===t[0]?(t[1]+=o[1],t[3]=o[3]):(r.push(o),t=o));return r}(u))}(e,o),n&&t.set(r,i)),i},C.prototype.render=function(e,o,t,r){var n=this.getConfigTags(r),i=this.parse(e,n),s=o instanceof E?o:new E(o,void 0);return this.renderTokens(i,s,t,e,r)},C.prototype.renderTokens=function(e,o,t,r,n){for(var i,s,a,u="",p=0,l=e.length;p<l;++p)a=void 0,"#"===(s=(i=e[p])[0])?a=this.renderSection(i,o,t,r,n):"^"===s?a=this.renderInverted(i,o,t,r,n):">"===s?a=this.renderPartial(i,o,t,n):"&"===s?a=this.unescapedValue(i,o):"name"===s?a=this.escapedValue(i,o,n):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(u+=a);return u},C.prototype.renderSection=function(e,o,t,r,n){var i=this,s="",a=o.lookup(e[1]);if(a){if(m(a))for(var u=0,p=a.length;u<p;++u)s+=this.renderTokens(e[4],o.push(a[u]),t,r,n);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(e[4],o.push(a),t,r,n);else if(g(a)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(o.view,r.slice(e[3],e[5]),(function(e){return i.render(e,o,t,n)})))&&(s+=a)}else s+=this.renderTokens(e[4],o,t,r,n);return s}},C.prototype.renderInverted=function(e,o,t,r,n){var i=o.lookup(e[1]);if(!i||m(i)&&0===i.length)return this.renderTokens(e[4],o,t,r,n)},C.prototype.indentPartial=function(e,o,t){for(var r=o.replace(/[^ \t]/g,""),n=e.split("\n"),i=0;i<n.length;i++)n[i].length&&(i>0||!t)&&(n[i]=r+n[i]);return n.join("\n")},C.prototype.renderPartial=function(e,o,t,r){if(t){var n=this.getConfigTags(r),i=g(t)?t(e[1]):t[e[1]];if(null!=i){var s=e[6],a=e[5],u=e[4],p=i;0==a&&u&&(p=this.indentPartial(i,u,s));var l=this.parse(p,n);return this.renderTokens(l,o,t,p,r)}}},C.prototype.unescapedValue=function(e,o){var t=o.lookup(e[1]);if(null!=t)return t},C.prototype.escapedValue=function(e,o,t){var r=this.getConfigEscape(t)||x.escape,n=o.lookup(e[1]);if(null!=n)return"number"==typeof n&&r===x.escape?String(n):r(n)},C.prototype.rawValue=function(e){return e[1]},C.prototype.getConfigTags=function(e){return m(e)?e:e&&"object"==typeof e?e.tags:void 0},C.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!m(e)?e.escape:void 0};var x={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){B.templateCache=e},get templateCache(){return B.templateCache}},B=new C;x.clearCache=function(){return B.clearCache()},x.parse=function(e,o){return B.parse(e,o)},x.render=function(e,o,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(m(n=e)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)');var n;return B.render(e,o,t,r)},x.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return A[e]}))},x.Scanner=L,x.Context=E,x.Writer=C;const M=x;class T{constructor(e,o){this.template=e,this.state=o,this.ast=M.parse(e)}getValue(){return void 0===this.value&&(this.value=M.render(this.template,this.state)),this.value}onChange(e){const o=[];for(const t of this.getUsedVariables().values())o.push(this.state.onVariableChange(t).subscribe((()=>{const o=M.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))})));return{unsubscribe:()=>{for(const e of o)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,o){for(const t of e){const e=t[0],r=t[1],n=t[4];["name","&","#","^"].includes(e)&&o.add(r),void 0!==n&&"string"!=typeof n&&this.recursiveGetUsedVariables(n,o)}}}async function V(){var e;const o=await u();for(const[t,r]of o.entries()){const o=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of o){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const o=new T(e.value,WA.state);if(o.isPureString())continue;const r=o.getValue();_(t,e.name,r),o.onChange((o=>{_(t,e.name,o)}))}}}function _(e,o,t){WA.room.setProperty(e,o,t),"visible"===o&&(t?WA.room.showLayer(e):WA.room.hideLayer(e))}const Z="https://unpkg.com/@workadventure/scripting-api-extra@1.2.0/dist";let k,U,G=0,R=0;function j(e){if(WA.state[e.name]){let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.showLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.hideLayer(e)}else{let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.hideLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.showLayer(e)}}function D(e){return e.map((e=>k.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function q(e){const o=c(D(e)),t=32*((o.right-o.left)/2+o.left),r=32*((o.bottom-o.top)/2+o.top);return Math.sqrt(Math.pow(G-t,2)+Math.pow(R-r,2))}function z(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const o=e.properties.getString("openSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=q(e.properties.mustGetString("openLayer").split("\n"));if(o>t)return;r=1-o/t}o&&WA.sound.loadSound(o).play({volume:r})}(e):function(e){const o=e.properties.getString("closeSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=q(e.properties.mustGetString("closeLayer").split("\n"));if(o>t)return;r=1-o/t}o&&WA.sound.loadSound(o).play({volume:r})}(e),j(e)})),j(e)}function O(e,o,t,r){const n=e.name;let i,s,a=!1;const u=t.getString("tag");let p=!0;u&&!WA.player.tags.includes(u)&&(p=!1);const l=!!u;function h(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=t.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[o.name]=!1,m()}})}function m(){var e;i&&i.remove(),i=WA.ui.displayActionMessage({message:null!==(e=t.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[o.name]=!0,h()}})}function g(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(n).subscribe((()=>{a=!0,t.getBoolean("autoOpen")&&p?WA.state[o.name]=!0:WA.state[o.name]||(!l||p)&&l||!t.getString("code")&&!t.getString("codeVariable")?p&&(WA.state[o.name]?h():m()):function(e){const t=c(D(o.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*t.right,y:32*t.top,width:96,height:128},allowApi:!0})}(n)})),WA.room.onLeaveLayer(n).subscribe((()=>{a=!1,t.getBoolean("autoClose")&&(WA.state[o.name]=!1),i&&i.remove(),g()})),WA.state.onVariableChange(o.name).subscribe((()=>{a&&(t.getBoolean("autoClose")||!0!==WA.state[o.name]||h(),s&&!0===WA.state[o.name]&&g(),t.getBoolean("autoOpen")||!1!==WA.state[o.name]||m())}))}function I(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const o=e.properties.mustGetString("bellSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(e.x-G,2)+Math.pow(e.y-R,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(o).play({volume:r})}(e)}))}function N(e,o,t){let r;const n=o.getString("bellPopup");WA.room.onEnterLayer(t).subscribe((()=>{var t;n?r=WA.ui.openPopup(n,"",[{label:null!==(t=o.getString("bellButtonText"))&&void 0!==t?t:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveLayer(t).subscribe((()=>{r&&(r.close(),r=void 0)}))}async function Q(e){e=null!=e?e:Z;const o=await i();k=await u();for(const e of o.values())e.properties.get("door")&&z(e),e.properties.get("bell")&&I(e);for(const t of k.values()){const n=new r(t.properties),i=n.getString("doorVariable");if(i&&"tilelayer"===t.type){const r=o.get(i);if(void 0===r)throw new Error('Cannot find variable "'+i+'" referred in the "doorVariable" property of layer "'+t.name+'"');O(t,r,n,e)}const s=n.getString("bellVariable");s&&N(s,n,t.name)}WA.player.onPlayerMove((e=>{G=e.x,R=e.y}))}function $(e,o){const t=e.getString("bindVariable");t&&function(e,o,t,r,n,i){i&&!WA.player.tags.includes(i)||(void 0!==t&&WA.room.onEnterLayer(o).subscribe((()=>{n||(WA.state[e]=t)})),void 0!==r&&WA.room.onLeaveLayer(o).subscribe((()=>{WA.state[e]=r})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}function F(e,o){let t;const r=o.getString("zone");if(!r)throw new Error('Missing "zone" property');const n=o.getString("openConfigAdminTag");let i=!0;function s(){WA.nav.closeCoWebSite()}n&&!WA.player.tags.includes(n)&&(i=!1),WA.room.onEnterZone(r,(()=>{const r=o.getString("openConfigTrigger");var n;i&&(r&&"onaction"===r?(t&&t.remove(),t=WA.ui.displayActionMessage({message:null!==(n=o.getString("openConfigTriggerMessage"))&&void 0!==n?n:"Press SPACE or touch here to configure",callback:()=>H(e)})):H(e))})),WA.room.onLeaveZone(r,(()=>{t?(t.remove(),s()):s()}))}function H(e){const o=e?"#"+e:"";WA.nav.openCoWebSite(Z+"/configuration.html"+o,!0)}const K=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],J=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];function X(){return WA.onInit().then((()=>{Q().catch((e=>console.error(e))),async function(){const e=await u();for(const o of e.values())$(new r(o.properties),o.name)}().catch((e=>console.error(e))),async function(e){const o=await WA.room.getTiledMap();e=null!=e?e:Z,U=await u();const t=o.layers.find((e=>"configuration"===e.name));if(t){const o=new r(t.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of U.values()){const o=new r(e.properties),t=o.getString("openConfig");t&&"tilelayer"===e.type&&F(t,o)}}}().catch((e=>console.error(e))),V().catch((e=>console.error(e))),async function(){var e,o;const t=WA.player.state.tutorialDone,r=/Mobi|Android/i.test(navigator.userAgent),n=await WA.room.getTiledMap(),i=null!==(o=(await(null===(e=n.properties)||void 0===e?void 0:e.find((e=>"tutorial"===e.name)))).value)&&void 0!==o&&o;if(!t&&i){!function(e){let o={allow:"",name:"tutorial",url:"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};e&&(o={...o,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(o)}(r);let e,o=await WA.player.getPosition();const t=await WA.room.website.get("tutorial"),n=()=>{const r=o.x+t.x+t.width>e.x+e.width,n=o.x+t.x<e.x,i=o.y+t.y+t.height>e.y+e.height,s=o.y+t.y<e.y;r?t.x=-t.width-24:n&&(t.x=24),i?t.y=-t.height:s&&(t.y=16)},i=e=>{t.width=e.width,t.height=e.height,t.scale=e.scale},s=e=>{const o=(r?K:J).filter((o=>{if(o.lowerBound&&o.uppperBound)return o.lowerBound<e&&e<=o.uppperBound;if(o.lowerBound&&!o.uppperBound)return o.lowerBound<e;if(!o.lowerBound&&o.uppperBound)return e<=o.uppperBound;throw new Error(`Zoom level of: ${e} could not fit in any of the desktopConfig's ranges.`)}));i(o[0].config)},a=()=>{if(void 0===e)return;const o=e.zoom;s(o),n()};WA.player.onPlayerMove((e=>{o=e,a()})),WA.camera.onCameraUpdate().subscribe((o=>{e=o,a()})),WA.player.state.tutorialDone=!0}}().catch((e=>console.error(e)))})).catch((e=>console.error(e)))}}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,t(910).bootstrapExtra)().catch((e=>console.error(e))),WA.onInit().then((()=>{let o,t=(new Date).getTime(),r=!1;WA.room.onEnterZone("room1_question",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room1QuestionPopup","Das Passwort ist die richtige Reihenfolge der Shader",[])})),WA.room.onLeaveZone("room1_question",n),WA.room.onEnterZone("room1_answer1",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room1_text","Fragmentshader: 7",[])})),WA.room.onLeaveZone("room1_answer1",n),WA.room.onEnterZone("room1_answer2",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room1_text","Vertexshader: 1",[])})),WA.room.onLeaveZone("room1_answer2",n),WA.room.onEnterZone("room1_answer3",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room1_text","Geometryshader: 2",[])})),WA.room.onLeaveZone("room1_answer3",n),WA.room.onEnterZone("room2_questions",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("roomQuestionPopup","Raum2! Die gesuchten Gegenstände sind: Prozessor, PSU, Motherboard",[])})),WA.room.onLeaveZone("room2_questions",n),WA.room.onEnterZone("room2_questions2",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room2AnswerPopup","Die Aufgabe befindet sich im Startraum",[])})),WA.room.onLeaveZone("room2_questions2",n),WA.room.onEnterZone("room2_zone1",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room2AnswerPopup","Prozessor: 5",[])})),WA.room.onLeaveZone("room2_zone1",n),WA.room.onEnterZone("room2_zone2",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room2AnswerPopup","Motherboard: 2",[])})),WA.room.onLeaveZone("room2_zone2",n),WA.room.onEnterZone("room2_zone3",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room2AnswerPopup","Graphicscard: 8",[])})),WA.room.onLeaveZone("room2_zone3",n),WA.room.onEnterZone("room2_zone4",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room2AnswerPopup","PSU: 6",[])})),WA.room.onLeaveZone("room2_zone4",n),WA.room.onEnterZone("room3_questions",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("roomQuestionPopup","Raum3! Das Passwort ist auf dem Bildschirm des sehr alten Monitors",[])})),WA.room.onLeaveZone("room3_questions",n),WA.room.onEnterZone("room4_questions",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room4QuestionPopup","Das Passwort ist die Kombination an Inputs für das Logic gate welches 1 als Ausgabe hat",[])})),WA.room.onLeaveZone("room4_questions",n),WA.room.onEnterLayer("room5/Statement1-1").subscribe((()=>{void 0!==e&&(e.close(),e=void 0),e=WA.ui.openPopup("room5Popup","Statement1-1: Wrong",[]),WA.state.saveVariable("state",!1).then()})),WA.room.onLeaveLayer("room5/Statement1-1").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement1-2").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement1-2: Right",[]),WA.state.saveVariable("state",!0).then()})),WA.room.onLeaveLayer("room5/Statement1-2").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement3-1").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement3-1: Right",[]),WA.state.saveVariable("state",!0).then()})),WA.room.onLeaveLayer("room5/Statement3-1").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement3-2").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement3-2: Wrong",[]),WA.state.saveVariable("state",!1).then()})),WA.room.onLeaveLayer("room5/Statement3-2").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement5-1").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement5-1: Wrong",[]),WA.state.saveVariable("state",!1).then()})),WA.room.onLeaveLayer("room5/Statement5-1").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement5-2").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement5-2: Right",[]),WA.state.saveVariable("state",!0).then()})),WA.room.onLeaveLayer("room5/Statement5-2").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement7-1").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement7-1: Right",[]),WA.state.saveVariable("state",!0).then()})),WA.room.onLeaveLayer("room5/Statement7-1").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/Statement7-2").subscribe((()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("room5Popup","Statement7-2: Wrong",[]),WA.state.saveVariable("state",!1).then()})),WA.room.onLeaveLayer("room5/Statement7-2").subscribe((()=>{void 0!==e&&(e.close(),e=void 0)})),WA.room.onEnterLayer("room5/submit").subscribe((()=>{console.log("State: "+WA.state.loadVariable("state")),WA.state.loadVariable("state")?WA.chat.sendChatMessage("Alle Anworten correkt!","Mr Robot"):WA.chat.sendChatMessage("Es sind nicht alle Anworten correkt!","Mr Robot")})),WA.room.onEnterZone("room_final",(()=>{void 0!==e&&e.close(),console.log("finished escape room"),console.log(r),r||(o=(new Date).getTime(),r=!0);const n=new Date(o-t);e=WA.ui.openPopup("room_final_popup","Zeit für den Escaperoom: "+n.getUTCHours()+"h:"+n.getUTCMinutes()+"m:"+n.getUTCSeconds()+"s",[])})),WA.room.onLeaveZone("room_final",n)}));const o=new Date,r=o.getHours()+":"+o.getMinutes();function n(){void 0!==e&&(console.log("close"),e.close(),void 0!==e&&e.close(),e=void 0)}WA.room.onEnterZone("clock",(()=>{void 0!==e&&e.close(),e=WA.ui.openPopup("clockPopup","It's "+r,[])})),WA.room.onLeaveZone("clock",n)})()})();
//# sourceMappingURL=script.js.map