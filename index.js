const wrapper_shopping=document.getElementById("wrapper-shopping");
const wrapper_discover=document.getElementById("wrapper-discover");
const wrapper_services=document.getElementById("wrapper-services");

const container_shopping=document.getElementById("models-container");
const container_discover=document.getElementById("discover-container");
const container_services=document.getElementById("services-container");


wrapper_shopping.onclick=()=>{
    container_shopping.scrollIntoView({behavior:"smooth",
        block: "nearest"});
}

wrapper_discover.onclick=()=>{
    container_discover.scrollIntoView({behavior:"smooth",
        block: "nearest"});
}

wrapper_services.onclick=()=>{
    container_services.scrollIntoView({behavior:"smooth",
        block: "nearest"});
}



//scroll-button


const scroll_button=document.getElementById("scroll-button");
const scroll_des=document.getElementById("background-video");

scroll_button.onclick=()=>{
    scroll_des.scrollIntoView({behavior:"smooth",
        block: "start"});
}




//nav-slider
const nav_bar=document.getElementById("nav-bar");
//old nav
function show(){
    document.getElementById("home").style.display="block";
    document.getElementById("models").style.display="block";
    document.getElementById("services").style.display="block";
    document.getElementById("contact").style.display="block";
}
function hide(){
    document.getElementById("home").style.display="none";
    document.getElementById("models").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("contact").style.display="none";
}
//
const nav_slider=document.getElementById("side-container");
const nav_button=document.getElementById("navigations-button");
const main=document.getElementById("main");
const footer=document.getElementById("footer");
const opn=document.getElementById("open");
const cls=document.getElementById("close");
opn.style.display="block";
cls.style.display="none";
let display=false;

nav_button.addEventListener("click",()=>{
    if(display===false){
        nav_slider.style.transform="translateX(-35em)";
        main.style.filter="blur(40px)";
        footer.style.filter="blur(40px)";
        scroll_button.style.filter="blur(40px)";
        opn.style.display="none";
        cls.style.display="block";
        hide();
        display=true;
    }
    else{
        nav_slider.style.transform="translateX(35em)";
        main.style.filter="blur(0px)";
        footer.style.filter="blur(0px)";
        scroll_button.style.filter="blur(0px)";
        opn.style.display="block";
        cls.style.display="none";
        show();
        display=false;
    }
});

