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

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const updateCounter = () => {

            current += increment;

            if(current >= target){

                current = target;

            }

        if(target === 200000){

    counter.innerText = current.toLocaleString("ro-RO") + "+";

}else if(target === 40){

    counter.innerText = current + "+";

}else if(target === 10){

    counter.innerText = current + "+";

}else{

    counter.innerText = current;

}

            if(current < target){

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

    });

};

let countersStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if(!stats || countersStarted) return;

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        countersStarted = true;

        animateCounters();

    }

});