const header = document.querySelector(".header");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(){

        nav.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});
const animatedElements = document.querySelectorAll(".animate");

function revealOnScroll(){

    animatedElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();