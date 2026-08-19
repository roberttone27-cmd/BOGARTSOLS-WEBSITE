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

function revealOnScroll() {

    animatedElements.forEach((element, index) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.style.transitionDelay = (index * 0.1) + "s";
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

// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");

    // Clear the image after the fade-out so it cannot remain visible.
    window.setTimeout(() => {
        if (!lightbox.classList.contains("active") && lightboxImg) {
            lightboxImg.src = "";
        }
    }, 350);
}

function openLightbox(src, alt = "") {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("active");
    document.body.classList.add("lightbox-open");
}

if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
    });
}

if (lightbox) {
    lightbox.addEventListener("click", function (e) {
        // Clicking the dark area closes it; clicking the image does not.
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// ESC always closes the active lightbox.
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
        e.preventDefault();
        closeLightbox();
    }
});

// Supports all project images, including the new editorial portfolio.
document.addEventListener("click", function (e) {
    const image = e.target.closest(".project-image img, .project-card img");

    if (!image) return;

    e.preventDefault();
    openLightbox(image.currentSrc || image.src, image.alt || "");
});

