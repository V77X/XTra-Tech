/* ==========================================
   XTRA TECH PREMIUM SCRIPT
   Part 1
========================================== */

// Sidebar

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");

if(menuBtn){
menuBtn.onclick=()=>{
sidebar.classList.add("active");
overlay.classList.add("active");
};
}

if(closeBtn){
closeBtn.onclick=closeSidebar;
}

if(overlay){
overlay.onclick=closeSidebar;
}

function closeSidebar(){

sidebar.classList.remove("active");
overlay.classList.remove("active");

}

/* Search */

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(
".feature-card,.category,.quick-card,.trend-card,.favorite-card,.recent-card"
).forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/* Hero Button */

const heroBtn=document.querySelector(".primary");

if(heroBtn){

heroBtn.onclick=()=>{

document.querySelector(".featured-grid").scrollIntoView({

behavior:"smooth"

});

};

}

/* Secondary Button */

const secondBtn=document.querySelector(".secondary");

if(secondBtn){

secondBtn.onclick=()=>{

document.querySelector(".category-grid").scrollIntoView({

behavior:"smooth"

});

};

}

/* Quick Cards */

document.querySelectorAll(".quick-card").forEach(card=>{

card.onclick=()=>{

alert(card.innerText.trim()+" Coming Soon 🚀");

};

});

/* Featured Cards */

document.querySelectorAll(".feature-card").forEach(card=>{

card.onclick=()=>{

card.classList.toggle("glow-border");

};

});

/* Category Cards */

document.querySelectorAll(".category").forEach(card=>{

card.onclick=()=>{

card.style.transform="scale(.95)";

setTimeout(()=>{

card.style.transform="";

},120);

};

});

/* Trending */

document.querySelectorAll(".trend-card").forEach(card=>{

card.onclick=()=>{

alert(card.innerText.trim());

};

});

/* Floating Button */

const fab=document.querySelector(".fab");

if(fab){

fab.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* Bottom Navigation */

document.querySelectorAll(".bottom-nav a").forEach(item=>{

item.onclick=()=>{

document.querySelectorAll(".bottom-nav a").forEach(i=>{

i.classList.remove("active");

});

item.classList.add("active");

};

});

/* Footer Year */

const footer=document.querySelector("footer");

if(footer){

const year=document.createElement("p");

year.innerHTML="© "+new Date().getFullYear()+" XTra Tech";

footer.appendChild(year);

}

/* Page Animation */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition=".5s";

/* Coming Soon */

document.querySelectorAll(".coming-card").forEach(card=>{

card.onclick=()=>{

alert("This feature will be available in a future update.");

};

});

/* Recent Tools */

document.querySelectorAll(".recent-card").forEach(card=>{

card.onclick=()=>{

card.classList.toggle("glow-border");

};

});/* ==========================================
   XTRA TECH PREMIUM SCRIPT
   Part 2
========================================== */

/* ===========================
   Local Storage Favorites
=========================== */

let favorites = JSON.parse(localStorage.getItem("xtraFavorites")) || [];

function saveFavorites() {
    localStorage.setItem(
        "xtraFavorites",
        JSON.stringify(favorites)
    );
}

document.querySelectorAll(".feature-card").forEach(card => {

    card.addEventListener("dblclick", () => {

        const name = card.querySelector("h3").innerText;

        if (!favorites.includes(name)) {

            favorites.push(name);

            saveFavorites();

            alert(name + " added to Favorites ❤️");

        } else {

            alert(name + " already exists.");

        }

    });

});

/* ===========================
   Notification
=========================== */

function notify(message){

const note=document.createElement("div");

note.className="notify-box";

note.innerHTML=message;

document.body.appendChild(note);

setTimeout(()=>{

note.classList.add("show");

},100);

setTimeout(()=>{

note.classList.remove("show");

setTimeout(()=>{

note.remove();

},400);

},2500);

}

/* ===========================
   Theme
=========================== */

const themeKey="xtra-theme";

if(localStorage.getItem(themeKey)=="light"){

document.body.classList.add("light");

}

function toggleTheme(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem(themeKey,"light");

notify("Light Mode Enabled");

}else{

localStorage.setItem(themeKey,"dark");

notify("Dark Mode Enabled");

}

}

/* ===========================
   Install Button
=========================== */

let deferredPrompt;

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

const install=document.createElement("button");

install.innerHTML="📲 Install App";

install.className="install-btn";

document.body.appendChild(install);

install.onclick=async()=>{

install.style.display="none";

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt=null;

};

});

/* ===========================
   Online Offline
=========================== */

window.addEventListener("online",()=>{

notify("🟢 Internet Connected");

});

window.addEventListener("offline",()=>{

notify("🔴 Offline Mode");

});

/* ===========================
   Ripple Effect
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================
   Scroll Animation
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".feature-card,.category,.trend-card,.favorite-card,.recent-card,.coming-card,.stat-card"

).forEach(el=>{

observer.observe(el);

});

/* ===========================
   Time Greeting
=========================== */

const heroTitle=document.querySelector(".hero h2");

if(heroTitle){

const hour=new Date().getHours();

if(hour<12){

heroTitle.innerHTML="🌅 Good Morning";

}else if(hour<17){

heroTitle.innerHTML="☀️ Good Afternoon";

}else{

heroTitle.innerHTML="🌙 Good Evening";

}

}

/* ===========================
   Loading Complete
=========================== */

window.addEventListener("load",()=>{

notify("Welcome to XTra Tech 🚀");

});

/* ===========================
   Version
=========================== */

console.log(

"XTra Tech v1.0 Loaded Successfully"
  

);/* ==========================================
   XTRA TECH PREMIUM SCRIPT
   Part 3 (Final)
========================================== */

/* ===========================
   AI Tool Launcher
=========================== */

function openTool(tool){

notify("Opening " + tool + "...");

switch(tool){

case "AI":
location.hash="ai";
break;

case "Translator":
location.hash="translator";
break;

case "PDF":
location.hash="pdf";
break;

case "Images":
location.hash="images";
break;

case "QR":
location.hash="qr";
break;

case "Calculator":
location.hash="calculator";
break;

default:
location.hash="home";

}

}

/* ===========================
   Click Launcher
=========================== */

document.querySelectorAll(
".feature-card,.category,.quick-card"
).forEach(card=>{

card.addEventListener("click",()=>{

const title=card.querySelector("h3");

if(title){

openTool(title.innerText);

}

});

});

/* ===========================
   Sidebar Navigation
=========================== */

document.querySelectorAll(".side-links a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

closeSidebar();

notify(link.innerText.trim());

});

});

/* ===========================
   Search Suggestions
=========================== */

const toolList=[
"AI",
"Translator",
"PDF",
"Image",
"QR",
"Calculator",
"Text",
"Utilities",
"Study",
"Audio",
"Video"
];

if(searchInput){

searchInput.addEventListener("input",()=>{

let value=searchInput.value.toLowerCase();

toolList.forEach(item=>{

if(item.toLowerCase()==value){

notify(item+" Found");

}

});

});

}

/* ===========================
   Keyboard Shortcuts
=========================== */

document.addEventListener("keydown",e=>{

if(e.key=="/"){

e.preventDefault();

searchInput.focus();

}

if(e.key=="Escape"){

closeSidebar();

}

});

/* ===========================
   Back To Top
=========================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

fab.style.display="block";

}else{

fab.style.display="none";

}

});

/* ===========================
   Page Loader
=========================== */

const loader=document.createElement("div");

loader.className="page-loader";

loader.innerHTML="⚡";

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

},800);

});

/* ===========================
   Performance
=========================== */

window.addEventListener("pageshow",()=>{

console.log("Fast Loaded");

});

/* ===========================
   Service Worker
=========================== */

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js")

.then(()=>{

console.log("Service Worker Registered");

})

.catch(err=>{

console.log(err);

});

});

}

/* ===========================
   Welcome
=========================== */

setTimeout(()=>{

notify("Welcome Back 🚀");

},1200);

/* ===========================
   App Version
=========================== */

const APP={

name:"XTra Tech",

version:"1.0.0",

author:"Vaibhav"

};

console.table(APP);

console.log(
"%cXTra Tech Ready",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);

/* ===========================
   End
=========================== */

console.log("All Features Loaded Successfully.");
