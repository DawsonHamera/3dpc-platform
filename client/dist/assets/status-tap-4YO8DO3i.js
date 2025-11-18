<<<<<<<< HEAD:client/dist/assets/status-tap-B0AbpIKa.js
import{e as a,j as i,k as c,w as d,s as l}from"./index-MldPZI9U.js";/*!
========
import{e as a,j as i,k as c,w as d,s as l}from"./index-DMvyd0ws.js";/*!
>>>>>>>> 61f9b02bbfb2a16cc2ee0e9c55f246e03b2d0eee:client/dist/assets/status-tap-4YO8DO3i.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
