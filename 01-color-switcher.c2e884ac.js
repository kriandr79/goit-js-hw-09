const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let n=!0;t.startBtn.addEventListener("click",(function(){n=!1,t.startBtn.disabled=!0,t.stopBtn.disabled=!1;const e=setInterval((()=>{if(n)return clearInterval(e),void(t.startBtn.disabled=!1);document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){n=!0,t.stopBtn.disabled=!0})),t.stopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.c2e884ac.js.map
