(()=>{"use strict";document.addEventListener("DOMContentLoaded",(async()=>{document.getElementById("szerzo-input").style.display="none",e().then((e=>{console.log(e.planets)})),document.getElementById("all-area").addEventListener("click",(()=>{document.getElementById("szerzo-input").style.display="none",e().then((e=>{let t=document.getElementById("output"),n=document.createElement("ul");t.innerHTML="",console.log(e),e.planets.sort(((e,t)=>e.name.localeCompare(t.name))).forEach((e=>{let t=document.createElement("li");e.dwarf?t.innerHTML="Bolygó: <i>"+e.name+"</i><br>terület: "+e.area:t.innerHTML="Bolygó: "+e.name+"<br>terület: "+e.area,n.append(t)})),t.append(n)}))})),document.getElementById("kozt").addEventListener("click",(async()=>{let e=await fetch("../planets.json");console.log(e);let t=await e.json(),n=document.getElementById("min").value,a=document.getElementById("max").value,l=[];l.push(t.planets.filter((e=>e.area>=n&&e.area<=a))),console.log(l);let o=document.getElementById("inbetween");o.textContent="";for(let e of l[0]){let t=document.createElement("li");o.appendChild(t),t.innerHTML=e.name}})),document.getElementById("atmero").addEventListener("click",(async()=>{let e=await fetch("../planets.json");console.log(e);let t=await e.json(),n="",a=[];for(let e of t.planets){let t=Math.sqrt(e.area/4*Math.PI);a.push(t)}for(let e of a)n+=e+"; ";document.getElementById("atmeroki").innerHTML=n})),document.getElementById("darabszam").addEventListener("click",(async()=>{let e=await fetch("../planets.json");console.log(e);let t=await e.json(),n=document.getElementById("torpe").checked,a=0,l=[];l.push(t.planets.filter((e=>e.dwarf==n)));for(let e of l[0])a+=e.area,console.log(e.area);document.getElementById("darab").value=a}))}));const e=async()=>await(await fetch("../planets.json")).json()})();