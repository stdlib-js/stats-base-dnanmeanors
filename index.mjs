// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e){var t,a,i,f,u;if(r<=0)return NaN;if(1===r||0===e)return n[0];for(t=e<0?(1-r)*e:0,i=0,f=0,u=0;u<r;u++)(a=n[t])==a&&(i+=a,f+=1),t+=e;return i/f}function e(r,n,e,t){var a,i,f,u,o;if(r<=0)return NaN;if(1===r||0===e)return n[t];for(a=t,f=0,u=0,o=0;o<r;o++)(i=n[a])==i&&(f+=i,u+=1),a+=e;return f/u}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
