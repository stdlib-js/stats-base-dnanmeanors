"use strict";var o=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=o(function(w,q){
function l(r,a,i){var v,e,n,u,t;if(r<=0)return NaN;if(r===1||i===0)return a[0];for(i<0?v=(1-r)*i:v=0,n=0,u=0,t=0;t<r;t++)e=a[v],e===e&&(n+=e,u+=1),v+=i;return n/u}q.exports=l
});var p=o(function(z,c){
function R(r,a,i,v){var e,n,u,t,s;if(r<=0)return NaN;if(r===1||i===0)return a[v];for(e=v,u=0,t=0,s=0;s<r;s++)n=a[e],n===n&&(u+=n,t+=1),e+=i;return u/t}c.exports=R
});var y=o(function(A,x){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),E=p();_(d,"ndarray",E);x.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),f,j=b(O(__dirname,"./native.js"));g(j)?f=h:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
