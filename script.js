// =========================
// XTra Tech v1
// =========================

document.addEventListener("DOMContentLoaded",()=>{

// Welcome (only first time)

if(!localStorage.getItem("visited")){

setTimeout(()=>{

alert("👋 Welcome to XTra Tech!\n\nTech Made Simple 🚀");

},700);

localStorage.setItem("visited","yes");

}

// Explore Button

const start=document.querySelector(".start-btn");

start.onclick=()=>{

document.querySelector(".grid-tools").scrollIntoView({

behavior:"smooth"

});

};

// Card Animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".6s";

observer.observe(card);

});

// Click Animation

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.95)";

setTimeout(()=>{

card.style.transform="scale(1)";

},150);

const tool=card.querySelector("h3").innerText;

alert(tool+" will open here in next update 🚀");

});

});

// Live Search

const search=document.querySelector("input");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

// Bottom Navigation

document.querySelectorAll("nav div").forEach(item=>{

item.addEventListener("click",()=>{

document.querySelectorAll("nav div").forEach(i=>{

i.style.color="white";

});

item.style.color="#00E5FF";

});

});

// Floating Logo

const logo=document.querySelector(".logo-icon");

let angle=0;

setInterval(()=>{

angle++;

logo.style.transform=

`rotate(${Math.sin(angle/15)*8}deg)`;

},30);

});

// Register Service Worker

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js");

});

}
