/* Your JS here. */

/* nav bar */
const navbar = document.getElementById("navbar");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function scrollFunction(){
    if(document.documentElement.scrollTop > 100){
        navbar.classList.add("shrink");
    }
    else{
        navbar.classList.remove("shrink");
    }
    const navbarBottom = navbar.getBoundingClientRect().bottom;
    let currentSection = sections[0];
    for(const section of sections){
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop <= (navbarBottom + 20)){
            currentSection = section;
        }
    }
    for(const item of navItems){
        item.classList.remove("active");
    }
    const currentItem = document.querySelector(
        `.nav-item[href="#${currentSection.id}"]`
    );
    if(currentItem){
        currentItem.classList.add("active");
    }
}
window.onscroll = scrollFunction;
scrollFunction();


/* carousel */
const slides = document.querySelectorAll(".slide");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let currentSlide = 0;
slides[currentSlide].classList.add("active");
next.onclick = function(){
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].classList.add("active");
};
previous.onclick = function(){
    slides[currentSlide].classList.remove("active");
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.add("active");
};


/* experiences */
const uiucButton = document.getElementById("uiuc-button");
const goldmanButton = document.getElementById("goldman-button");
const gwcButton = document.getElementById("gwc-button");
const uiucModal = document.getElementById("uiuc-modal");
const goldmanModal = document.getElementById("goldman-modal");
const gwcModal = document.getElementById("gwc-modal");
const uiucClose = document.getElementById("uiuc-close");
const goldmanClose = document.getElementById("goldman-close");
const gwcClose = document.getElementById("gwc-close");

uiucButton.onclick = function(){
    uiucModal.style.display = "flex";
};
goldmanButton.onclick = function(){
    goldmanModal.style.display = "flex";
};
gwcButton.onclick = function(){
    gwcModal.style.display = "flex";
};
uiucClose.onclick = function(){
    uiucModal.style.display = "none";
};
goldmanClose.onclick = function(){
    goldmanModal.style.display = "none";
};
gwcClose.onclick = function(){
    gwcModal.style.display = "none";
};