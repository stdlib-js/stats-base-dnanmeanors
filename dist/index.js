"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(A,f){
function l(e,r,a,d){var i,n,t,s,u;if(e<=0)return NaN;if(e===1||a===0)return r[d];for(i=d,t=0,s=0,u=0;u<e;u++)n=r[i],n===n&&(t+=n,s+=1),i+=a;return t/s}f.exports=l
});var c=v(function(B,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function E(e,r,a){return _(e,r,a,R(e,a))}m.exports=E
});var x=v(function(C,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),b=o();O(p,"ndarray",b);y.exports=p
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),q,j=h(g(__dirname,"./native.js"));k(j)?q=w:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
