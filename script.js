// XTra Tech v1.0

document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector(".start-btn");

const cards = document.querySelectorAll(".feature-card");

// Fade animation
cards.forEach((card,index)=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";

    setTimeout(()=>{
        card.style.transition="0.6s ease";
        card.style.opacity="1";
        card.style.transform="translateY(0)";
    },200*index);
});

// Button click
button.addEventListener("click",()=>{

    button.innerHTML="Loading...";

    button.disabled=true;

    setTimeout(()=>{

        window.scrollTo({
            top:document.querySelector(".features").offsetTop-20,
            behavior:"smooth"
        });

        button.innerHTML="Explore Tools";
        button.disabled=false;

    },700);

});

// Card click animation

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.95)";

        setTimeout(()=>{
            card.style.transform="";
        },150);

        alert(card.querySelector("h3").innerText+" page coming soon!");

    });

});

// Floating logo effect

const logo=document.querySelector(".logo");

let deg=0;

setInterval(()=>{
    deg+=1;
    logo.style.transform=`rotate(${Math.sin(deg/20)*5}deg)`;
},30);

});
