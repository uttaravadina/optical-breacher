(self.webpackChunkoptical_breacher=self.webpackChunkoptical_breacher||[]).push([[798],{9798:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>C});var n=i(5893),r=i(7294);const s=i.p+"lib/example.450cf14c6c6d4f14fede9bd9f9abf560.jpg",a={1:"1C",7:"7A",5:"55",B:"BD",E:"E9",F:"FF"};function o(e){const t=e.split(" ").map((e=>a[e]));return t.some((e=>!e))?[]:t}function c(e,t=!1){const{width:i,height:n}=e.canvas,r=i*n,s=e.getImageData(0,0,i,n),{data:a}=s;let o=128;if(!t){const e=Array(256).fill(0);for(let t=0;t<a.length;t+=4)a[t]=Math.round(.7*a[t]+.2*a[t+1]+.1*a[t+2]),e[a[t]]++;const t=.01;let i=0,n=0;for(let s=0;s<256;s++)if(n+=e[s]||0,n>r*t){i=s;break}let s=0,c=0;for(let i=255;i>=0;i--)if(c+=e[i]||0,c>r*t){s=i;break}let d=1/0;const l=s-i,h=i+.9*l;for(let t=i+Math.floor(.65*l);t<=h;t++)e[t]<d&&(d=e[t],o=t)}for(let e=0;e<a.length;e+=4){const t=a[e]>o?0:255;a[e]=t,a[e+1]=t,a[e+2]=t}e.putImageData(s,0,0)}const d=16/9;function l({onCapture:e}){const[t,i]=(0,r.useState)({width:240,height:320}),[a,o]=(0,r.useState)(!1),l=(0,r.useRef)(null),h=(0,r.useRef)(null),[g,u]=(0,r.useState)(!1),[f,v]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1),[x,j]=(0,r.useState)(),[b,y]=(0,r.useState)(),[w,S]=function(e,t){const i=window.localStorage.getItem(e)||"1",[n,s]=(0,r.useState)(i);return(0,r.useEffect)((()=>{"string"==typeof n&&window.localStorage.setItem(e,n)}),[n]),[n,s]}("nativeResolutionOn"),O=(0,r.useCallback)((()=>{if(l.current&&h.current){const e=h.current.clientWidth,t=e/d;l.current.width=e,l.current.height=t,i({width:e,height:t})}}),[i]);return(0,r.useEffect)((()=>(window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O)})),[O]),(0,r.useEffect)((()=>{if(l.current)try{navigator.mediaDevices.getUserMedia({audio:!1,video:Object.assign(Object.assign({},"1"===w?{width:{ideal:7680},height:{ideal:4320}}:void 0),b?{deviceId:{exact:b}}:{facingMode:"environment"})}).then((e=>{l.current.srcObject=e}))}catch(e){throw new Error("WebRTC not supported")}}),[b,w]),(0,r.useEffect)((()=>{f&&(()=>{var e,t,i,n;e=this,t=void 0,n=function*(){try{const e=yield navigator.mediaDevices.enumerateDevices();j(e.filter((({kind:e})=>"videoinput"===e)))}catch(e){throw new Error("WebRTC not supported")}},new((i=void 0)||(i=Promise))((function(r,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,o)}c((n=n.apply(e,t||[])).next())}))})()}),[f]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",Object.assign({style:{margin:16,border:"1px solid #ff606060",flexShrink:0}},{children:[(0,n.jsxs)("div",Object.assign({style:{display:"flex",justifyContent:"space-between",padding:"0 4px",color:"#cfed57"}},{children:[(0,n.jsx)("div",{children:"CODE MATRIX"},void 0),(0,n.jsx)("div",{children:"SEQUENCE"},void 0)]}),void 0),(0,n.jsxs)("div",Object.assign({ref:h,style:{position:"relative",overflow:"hidden"}},{children:[(0,n.jsx)("video",{ref:l,playsInline:!0,onCanPlay:()=>{l.current&&h.current&&(l.current.play(),o(!0),O())},style:{objectFit:"cover",display:"block"},muted:!0},void 0),a&&(0,n.jsxs)("div",Object.assign({style:{boxSizing:"border-box",position:"absolute",display:"grid",top:0,gridTemplateColumns:"5fr 2fr",padding:4,width:t.width,height:t.height}},{children:[(0,n.jsx)("div",{style:{gridColumn:1,border:"1px dashed #cfed57"}},void 0),(0,n.jsx)("div",{style:{gridColumn:2,border:"1px dashed #cfed57",borderLeft:0}},void 0)]}),void 0)]}),void 0)]}),void 0),(0,n.jsxs)("div",Object.assign({style:{margin:16,marginTop:0,overflow:"auto"}},{children:["Move the camera as close to the screen as possile. Avoid rotation or tilt.",(0,n.jsxs)("a",Object.assign({style:{marginLeft:4},href:"#",onClick:()=>{u(!g)}},{children:[g?"Hide":"Show"," the example"]}),void 0),g&&(0,n.jsx)("div",{children:(0,n.jsx)("img",{style:{width:"70%"},src:s},void 0)},void 0),(0,n.jsx)("div",Object.assign({style:{marginTop:8}},{children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:"- Specify the camera to use:"},void 0),(0,n.jsx)("select",Object.assign({onChange:e=>{y(e.target.value)},value:b},{children:x&&x.map((({label:e,deviceId:t},i)=>(0,n.jsxs)("option",Object.assign({value:t},{children:[i+1,": ",e]}),t)))}),void 0),(0,n.jsxs)("label",Object.assign({style:{display:"block",marginTop:8}},{children:["-",(0,n.jsx)("input",{type:"checkbox",checked:"1"===w,onChange:()=>{S("0"===w?"1":"0")}},void 0),"Use native resolution"," ",(0,n.jsx)("small",Object.assign({style:{fontSize:"0.6em"}},{children:"(turning it off may fix the black camera issue)"}),void 0)]}),void 0),m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["iOS user: Please use Safari browser (see"," ",(0,n.jsx)("a",Object.assign({href:"https://stackoverflow.com/a/29164511",rel:"noopener",target:"_blank"},{children:"why"}),void 0),'). Make sure you have granted access to the camera (Settings - Safari - Camera - choose "Ask")']},void 0),(0,n.jsxs)("p",{children:["Android user: If none of the options above work, please check"," ",(0,n.jsx)("a",Object.assign({href:"https://github.com/govizlora/optical-breacher/issues/7",target:"_blank",rel:"noopener"},{children:"this issue"}),void 0),"."]},void 0)]},void 0):(0,n.jsx)("a",Object.assign({onClick:()=>{p(!0)},href:"#"},{children:"Still not working?"}),void 0)]},void 0):(0,n.jsx)("a",Object.assign({onClick:()=>{v(!0)},href:"#"},{children:"Camera not working?"}),void 0)}),void 0)]}),void 0),(0,n.jsx)("button",Object.assign({className:"main",style:{margin:"auto",marginBottom:24},onClick:()=>{const t=document.createElement("canvas"),i=l.current.srcObject,{width:n=1,height:r=1}=i.getTracks()[0].getSettings();let s=0,a=0,o=n,h=r;const g=t.getContext("2d");if(n/r>d){const e=r*d;s=(n-e)/2,o=e,t.height=Math.min(r,720),t.width=t.height*d}else{const e=n/d;a=(r-e)/2,h=e,t.width=Math.min(n,1280),t.height=t.width/d}g.drawImage(l.current,s,a,o,h,0,0,t.width,t.height),c(g),e(t)}},{children:"SCAN"}),void 0)]},void 0)}var h=i(7320);const g=i.p+"lib/worker.min.6ae4421cc24575c3996815e8a7e47a34.js",u=i.p+"lib/tesseract-core.wasm.e4db7f953ac7bcf9f67bd39031e42241.js";var f=function(e,t,i,n){return new(i||(i=Promise))((function(r,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,o)}c((n=n.apply(e,t||[])).next())}))};class v{constructor(e){this.logger=e,this.terminate=()=>f(this,void 0,void 0,(function*(){return Promise.all([(yield this.targetsWorker).terminate(),(yield this.matrixWorker).terminate])})),this.matrixWorker=this.createWorker("matrix",{tessedit_pageseg_mode:"6",tessedit_ocr_engine_mode:1}),this.targetsWorker=this.createWorker("targets",{tessedit_pageseg_mode:"6",tessedit_ocr_engine_mode:1})}recognize(e,t,i){return f(this,void 0,void 0,(function*(){const n=yield this.matrixWorker,r=yield this.targetsWorker,s=yield Promise.all([n.recognize(e,{rectangle:{left:0,top:0,width:.65*t,height:i}}),r.recognize(e,{rectangle:{left:.65*t,top:0,width:.35*t,height:i}})]);return{matrixData:s[0].data,targetsData:s[1].data}}))}createWorker(e,t){return f(this,void 0,void 0,(function*(){const i=(0,h.createWorker)({langPath:"./lib",workerPath:g,corePath:u,logger:t=>this.logger(Object.assign({name:e},t))});return yield i.load(),yield i.loadLanguage("cyber"),yield i.initialize("cyber"),yield i.setParameters(t),i}))}}const m=({bufferSize:e,orientation:t,index:i,used:n,matrixSize:r})=>0===e?[[]]:Array(r).fill(null).map(((e,n)=>"row"===t?[i,n]:[n,i])).filter((e=>!n.has(e.join(",")))).map((([i,s])=>m({bufferSize:e-1,orientation:"row"===t?"col":"row",index:"row"===t?s:i,used:new Set(n).add(`${i},${s}`),matrixSize:r}).map((e=>[[i,s],...e])))).flat();function p({matrix:e,targets:t,onStartOver:i}){const s=window.localStorage.getItem("buffer_size")||"8",[a,o]=(0,r.useState)(parseInt(s,10)),[c,d]=(0,r.useState)(new Set),l=e.length>2&&t.length&&e[0].length>2,h=(0,r.useMemo)((()=>{const i=t.filter((e=>!c.has(e.join("-"))));if(l&&i.length&&a){const t=function(e,t,i){return((e,t,i)=>{const n=e.map((e=>String.fromCharCode(...e.map((([e,i])=>parseInt(t[e][i],16)))))),r=i.map((e=>String.fromCharCode(...e.map((e=>parseInt(e,16))))));let s=0;const a=n.map(((e,t)=>{let i=0,n=0;const a=[];return r.forEach(((t,r)=>{const s=e.indexOf(t);if(s>-1){i+=1+.1*r;const e=s+t.length;n=Math.max(n,e),a.push(r)}})),s=Math.max(i,s),{score:i,stringIndex:t,seqLength:n,matchedIndices:a}})).filter((({score:e})=>e===s)),o=Math.min(...a.map((({seqLength:e})=>e)));return a.filter((({seqLength:e})=>e===o)).map((({stringIndex:t,matchedIndices:i})=>({seq:e[t].slice(0,o),matchedIndices:i})))})(m({bufferSize:i,orientation:"row",index:0,used:new Set,matrixSize:e.length}),e,t)}(e,i,a)[0]||{seq:[],matchedIndices:[]},n={};return t.seq.forEach((([e,t],i)=>{n[`${e},${t}`]=i})),{chosenBytes:n,matched:new Set(t.matchedIndices)}}return{chosenBytes:{},matched:new Set}}),[e,t,a,c,l]);if(!l)throw Error("OCR result unacceptable");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",Object.assign({style:{margin:"8px 16px"}},{children:[(0,n.jsx)("label",{children:"BUFFER SIZE:"},void 0),(0,n.jsx)("input",{type:"number",min:2,max:10,name:"buffer-size",style:{marginLeft:8},value:a,onChange:e=>{const t=Math.min(Math.max(parseInt(e.target.value,10),4),8);o(t),window.localStorage.setItem("buffer_size",`${t}`)}},void 0)]}),void 0),(0,n.jsxs)("div",Object.assign({style:{margin:16,marginTop:0,border:"1px solid #cfed5780",backgroundColor:"#120f18",paddingBottom:8}},{children:[(0,n.jsx)("div",Object.assign({style:{backgroundColor:"#cfed57",color:"black",padding:"4px 16px",marginBottom:8}},{children:"BEST ROUTE"}),void 0),e.map(((e,t)=>(0,n.jsx)("div",Object.assign({style:{display:"flex",justifyContent:"center"}},{children:e.map(((e,i)=>{const r=h.chosenBytes[`${t},${i}`];return(0,n.jsxs)("span",Object.assign({style:{position:"relative",display:"inline-flex",color:void 0!==r?"#ccee70":"#ccee7060",fontSize:"1.2em",textTransform:"uppercase",width:40,height:32,justifyContent:"center",alignItems:"center"}},{children:[e,void 0!==r&&(0,n.jsx)("span",Object.assign({style:{position:"absolute",fontSize:"0.6em",top:0,right:0}},{children:r+1}),void 0)]}),`${e}-${i}`)}))}),`${e.join("-")}-${t}`)))]}),void 0),(0,n.jsxs)("div",Object.assign({style:{margin:16,marginTop:0,border:"1px solid #cfed5780",backgroundColor:"#120f18",paddingBottom:8}},{children:[(0,n.jsx)("div",Object.assign({style:{color:"#cfed57",padding:"4px 16px",marginBottom:8,borderBottom:"1px solid #cfed5780"}},{children:"TARGET SEQUENCES"}),void 0),t.filter((e=>!c.has(e.join("-")))).map(((e,t)=>(0,n.jsxs)("div",Object.assign({style:{paddingLeft:16}},{children:[e.map(((e,i)=>(0,n.jsx)("div",Object.assign({style:{display:"inline-flex",color:h.matched.has(t)?"#cfed57":"#FFFFFF40",fontSize:"1.1em",textTransform:"uppercase",width:32,height:28,justifyContent:"center",alignItems:"center"}},{children:e}),`${e}-${i}`))),(0,n.jsx)("a",Object.assign({style:{display:"float",float:"right",marginRight:16,color:"#cfed57"},onClick:()=>{d(new Set(c).add(e.join("-")))},href:"#"},{children:"Remove"}),void 0)]}),e.join("-"))))]}),void 0),(0,n.jsx)("button",Object.assign({style:{margin:"auto",marginBottom:24},onClick:i,className:"main"},{children:"START OVER"}),void 0)]},void 0)}var x=i(2238);const j=i.p+"lib/crop-example.e9de0e49471f69deefc6b011e4a57fa1.jpg";const b=({handleFile:e,toCameraMode:t})=>{const[i,s]=(0,r.useState)(!1),[a,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",Object.assign({style:Object.assign({margin:16,flexBasis:300,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center",padding:"0 48px"},i&&{backgroundColor:"#ff606020"}),className:"dropzone",onDragOver:e=>{e.preventDefault()},onDragEnter:e=>{e.target===e.currentTarget&&s(!0)},onDragLeave:e=>{e.target===e.currentTarget&&s(!1)},onDrop:t=>{return i=void 0,n=void 0,a=function*(){var i,n;s(!1),t.preventDefault();const r=null===(n=null===(i=t.dataTransfer)||void 0===i?void 0:i.items)||void 0===n?void 0:n[0],a="file"===r.kind?r.getAsFile():null;a&&e(a).catch((()=>{o("Invalid image")}))},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(a.next(e))}catch(e){t(e)}}function o(e){try{c(a.throw(e))}catch(e){t(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(s,o)}c((a=a.apply(i,n||[])).next())}));var i,n,r,a}},{children:[(0,n.jsxs)("div",Object.assign({style:{pointerEvents:"none"}},{children:[(0,n.jsx)("div",{children:"To start, you can:"},void 0),(0,n.jsx)("div",{children:"- Drag an image into the box"},void 0),(0,n.jsx)("div",{children:"- or click the box to upload an image"},void 0),(0,n.jsx)("div",{children:"- or make an in-game screenshot using WIN + SHIFT + S, then CTRL + V here"},void 0)]}),void 0),(0,n.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:t=>{var i;const n=null===(i=t.target.files)||void 0===i?void 0:i[0];n&&e(n).catch((()=>{o("Invalid image")}))}},void 0)]}),void 0),a&&(0,n.jsxs)("div",Object.assign({style:{marginLeft:16}},{children:["Error: ",a]}),void 0),(0,n.jsxs)("div",Object.assign({style:{margin:"0 16px"}},{children:["Please crop the screenshot before uploading.",(0,n.jsxs)("a",Object.assign({style:{marginLeft:4},href:"#",onClick:()=>{d(!c)}},{children:[c?"Hide":"Show"," the example"]}),void 0),c&&(0,n.jsx)("div",{children:(0,n.jsx)("img",{style:{maxHeight:240,maxWidth:"100%"},src:j},void 0)},void 0)]}),void 0),(0,n.jsxs)("div",Object.assign({style:{margin:"8px 16px"}},{children:["Alternatively, you can"," ",(0,n.jsx)("a",Object.assign({href:"#",onClick:t},{children:"use the camera"}),void 0)]}),void 0)]},void 0)};var y,w=function(e,t,i,n){return new(i||(i=Promise))((function(r,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,o)}c((n=n.apply(e,t||[])).next())}))};const S={matrixProgress:0,targetsProgress:0,status:""},O={matrix:[],targets:[],finished:!1},k=null===(y=(new x.UAParser).getDevice())||void 0===y?void 0:y.type;function C(){const e=(0,r.useRef)(),[t,i]=(0,r.useState)(O),[s,a]=(0,r.useState)(S),[d,h]=(0,r.useState)(!0),[g,u]=(0,r.useState)("mobile"===k||"tablet"===k),f=(0,r.useCallback)((({name:e,status:t,progress:i=0})=>{"recognizing text"===t&&a((n=>({status:t,matrixProgress:"matrix"===e?i:n.matrixProgress,targetsProgress:"targets"===e?i:n.targetsProgress})))}),[]);(0,r.useEffect)((()=>(e.current=new v(f),()=>{var t;null===(t=e.current)||void 0===t||t.terminate()})),[]);const m=(0,r.useCallback)((t=>w(this,void 0,void 0,(function*(){h(!1),a(S),i(O);const n=yield e.current.recognize(t,t.width,t.height),{lines:r,chars:s}=function(e){const t=e.split("\n").map(o).filter((e=>e.length)),i=function(e){var t;const i={};return e.forEach((e=>{i[e.length]=i[e.length]||0,i[e.length]++})),parseInt((null===(t=Object.entries(i).sort(((e,t)=>t[1]-e[1]))[0])||void 0===t?void 0:t[0])||"0",10)}(t),n=t.filter((e=>e.length===i)),r=new Set;return n.forEach((e=>{e.forEach((e=>{r.add(e)}))})),{lines:n,chars:r}}(n.matrixData.text),c=(d=n.targetsData.text,l=s,d.split("\n").map(o).filter((e=>e.length>=2&&e.length<=4&&e.every((e=>l.has(e))))));var d,l;i({matrix:r,targets:c,finished:!0})}))),[]),x=(0,r.useCallback)((e=>w(this,void 0,void 0,(function*(){const t=yield createImageBitmap(e),i=document.createElement("canvas"),n=i.getContext("2d");i.width=Math.min(t.width,1280),i.height=i.width/t.width*t.height,n.drawImage(t,0,0,t.width,t.height,0,0,i.width,i.height),c(n,!0),m(i)}))),[m]);return(0,r.useEffect)((()=>{const e=e=>{var t,i;if(g)return;e.preventDefault();const n=null===(i=null===(t=e.clipboardData)||void 0===t?void 0:t.items)||void 0===i?void 0:i[0],r="file"===(null==n?void 0:n.kind)?n.getAsFile():null;r&&x(r)};return document.addEventListener("paste",e),()=>{document.removeEventListener("paste",e)}}),[x,g]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",Object.assign({style:{display:"flex",flexDirection:"column",height:"calc(100% - 16px)",border:"1px solid #ff606080"}},{children:d?g?(0,n.jsx)(l,{onCapture:m},void 0):(0,n.jsx)(b,{handleFile:x,toCameraMode:()=>{u(!0)}},void 0):t.finished?(0,n.jsx)(p,{matrix:t.matrix,targets:t.targets,onStartOver:()=>{h(!0)}},void 0):(0,n.jsx)("progress",{style:{margin:"auto"},value:"recognizing text"===s.status?(s.matrixProgress+s.targetsProgress)/2:0},void 0)}),void 0),(0,n.jsxs)("div",Object.assign({style:{height:16,fontSize:"0.6em",display:"flex",color:"#ff6060a0"}},{children:[(0,n.jsx)("span",Object.assign({style:{marginRight:4}},{children:"OPTICAL BREACHER MK.1 Rev 1.5"}),void 0),(0,n.jsx)("a",Object.assign({style:{marginLeft:"auto",color:"inherit"},href:"https://github.com/govizlora/optical-breacher",rel:"noopener",target:"_blank"},{children:"GITHUB"}),void 0),(0,n.jsx)("a",Object.assign({style:{marginLeft:4,color:"inherit"},href:"#",onClick:()=>{u(!g),h(!0)}},{children:g?"SCREENSHOT MODE":"CAMERA MODE"}),void 0)]}),void 0)]},void 0)}}}]);