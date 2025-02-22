// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n){var s,d,i,a,o;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(s=n,i=0,a=0,o=0;o<r;o++)(d=e[s])==d&&(i+=d,a+=1),s+=t;return i/a}function n(r,n,s){return t(r,n,s,e(r,s))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
