if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,l,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"125.e0dbd8013c11866ef658.js",revision:null},{url:"125.e0dbd8013c11866ef658.js.LICENSE.txt",revision:"c22264673466b8581ef8a74a9d4c540b"},{url:"798.2d611f7e79547462b2c2.js",revision:null},{url:"index.html",revision:"1611433786288"},{url:"lib/barlow-latin-400.d216a0a23d2052c84e6fc4f074250c50.woff2",revision:null},{url:"lib/crop-example.e9de0e49471f69deefc6b011e4a57fa1.jpg",revision:null},{url:"lib/cyber.traineddata.gz",revision:"e75dea18fd150ed9d82c035105bbdd21"},{url:"lib/example.450cf14c6c6d4f14fede9bd9f9abf560.jpg",revision:null},{url:"lib/tesseract-core.wasm.e4db7f953ac7bcf9f67bd39031e42241.js",revision:null},{url:"lib/worker.min.6ae4421cc24575c3996815e8a7e47a34.js",revision:null},{url:"lib/worker.min.6ae4421cc24575c3996815e8a7e47a34.js.LICENSE.txt",revision:"4f1f1bdb0417b72686c9419160682e9d"},{url:"main.aa593cc5586aff43a224.js",revision:null},{url:"main.aa593cc5586aff43a224.js.LICENSE.txt",revision:"b8c0ba92a91271ef423bb542e8d829c2"}],{})}));
//# sourceMappingURL=service-worker.js.map
