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

});