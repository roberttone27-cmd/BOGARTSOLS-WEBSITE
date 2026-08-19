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

/* ==========================================================
   RO / FR LANGUAGE SWITCH
========================================================== */

const translations = {
    ro: {
        "nav.home": "Acasă",
        "nav.about": "Despre",
        "nav.services": "Servicii",
        "nav.projects": "Proiecte",
        "nav.contact": "Contact",

        "hero.kicker": "BOGARTSOLS • PARDOSERI PROFESIONALE",
        "hero.title1": "Construim",
        "hero.title2": "Performanță.",
        "hero.description": "Soluții profesionale de pardoseli pentru spitale, școli, universități și proiecte comerciale.",
        "hero.projects": "Vezi proiectele",
        "hero.quote": "Solicită o ofertă",
        "hero.countries": "ROMÂNIA • FRANȚA",
        "hero.scroll": "SCROLL",

        "ticker.pvc": "Pardoseli PVC",
        "ticker.linoleum": "Linoleum",
        "ticker.carpet": "Mochetă profesională",
        "ticker.epoxy": "Pardoseli epoxidice",
        "ticker.installation": "Montaj profesional",
        "ticker.measurements": "Măsurători precise",

        "stats.area": "m² executați",
        "stats.projects": "Proiecte finalizate",
        "stats.countries": "România • Franța",
        "stats.experience": "Ani de experiență",

        "about.kicker": "DESPRE BOGARTSOLS",
        "about.title": "Experiență care se vede în fiecare <span>suprafață.</span>",
        "about.titleAccent": "suprafață.",
        "about.lead": "BOGARTSOLS oferă soluții complete pentru montajul pardoselilor profesionale, de la pregătirea suprafeței până la finisajul final.",
        "about.description": "Lucrăm pentru proiecte în care precizia, rezistența și aspectul final contează. Experiența acumulată în România și Franța ne permite să abordăm proiecte diverse, cu atenție la fiecare detaliu.",
        "about.point1": "Execuție profesională",
        "about.point2": "Materiale și soluții adaptate proiectului",
        "about.point3": "Respectarea termenelor",
        "about.point4": "Proiecte în România și Franța",
        "about.badge": "ANI DE<br>EXPERIENȚĂ",
        "about.cta": "Hai să discutăm despre proiectul tău",

        "services.kicker": "SERVICII",
        "services.title": "Soluții pentru fiecare<br><span>proiect.</span>",
        "services.titleAccent": "proiect.",
        "services.description": "Alegem soluția potrivită în funcție de spațiu, trafic, cerințele tehnice și nivelul de finisare dorit.",
        "service.epoxy.title": "Pardoseli epoxidice",
        "service.epoxy.text": "Soluții rezistente pentru spații industriale, comerciale și zone cu trafic intens.",
        "service.pvc.title": "Pardoseli PVC",
        "service.pvc.text": "Montaj profesional pentru spații medicale, comerciale, birouri și proiecte complexe.",
        "service.linoleum.title": "Linoleum",
        "service.linoleum.text": "Suprafețe durabile și ușor de întreținut, ideale pentru proiecte cu cerințe ridicate.",
        "service.carpet.title": "Mochetă profesională",
        "service.carpet.text": "Confort și finisaje premium pentru birouri, hoteluri și spații reprezentative.",
        "services.cta": "Nu știi ce soluție se potrivește proiectului tău?",
        "services.ctaLink": "Vorbește cu noi",

        "advantages.kicker": "DE CE NOI",
        "advantages.title": "De ce să alegi BOGARTSOLS?",
        "advantages.description": "Experiență, seriozitate și calitate în fiecare proiect.",
        "adv.1.title": "10+ ani experiență",
        "adv.1.text": "Experiență în proiecte rezidențiale, comerciale și medicale.",
        "adv.2.title": "200.000+ m² executați",
        "adv.2.text": "Mii de metri pătrați montați cu atenție la fiecare detaliu.",
        "adv.3.title": "România & Franța",
        "adv.3.text": "Proiecte realizate atât în țară, cât și în străinătate.",
        "adv.4.title": "Calitate garantată",
        "adv.4.text": "Materiale premium și execuție la cele mai înalte standarde.",
        "adv.5.title": "Respectarea termenelor",
        "adv.5.text": "Planificare eficientă și livrare conform angajamentelor.",
        "adv.6.title": "Echipă profesionistă",
        "adv.6.text": "Specialiști cu experiență în montajul pardoselilor profesionale.",

        "projects.kicker": "PORTOFOLIU",
        "projects.title": "Proiectele <span>noastre</span>",
        "projects.description": "O selecție de lucrări realizate de echipa BOGARTSOLS, cu atenție pentru fiecare detaliu și fiecare suprafață.",
        "project.1.title": "Spitale și clinici",
        "project.1.type": "PROIECTE MEDICALE",
        "project.2.title": "Scări PVC",
        "project.2.type": "FINISAJE PROFESIONALE",
        "project.3.title": "Pardoseli LVT",
        "project.3.type": "LVT",
        "project.4.title": "Cămine și școli",
        "project.4.type": "EDUCAȚIONAL",
        "project.5.title": "Cinema",
        "project.5.type": "SPAȚII COMERCIALE",

        "contact.kicker": "CONTACT",
        "contact.title": "Hai să discutăm despre proiectul tău",
        "contact.button": "Contactează-ne",

        "footer.description": "Pardoseli profesionale pentru spitale, școli, universități și proiecte comerciale.",
        "footer.contact": "Contact",
        "footer.navigation": "Navigare",
        "footer.countries": "România • Franța",
        "footer.copyright": "© 2026 BOGARTSOLS. Toate drepturile rezervate."
    },

    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.services": "Services",
        "nav.projects": "Réalisations",
        "nav.contact": "Contact",

        "hero.kicker": "BOGARTSOLS • REVÊTEMENTS DE SOL PROFESSIONNELS",
        "hero.title1": "Nous créons",
        "hero.title2": "la performance.",
        "hero.description": "Solutions professionnelles de revêtements de sol pour les hôpitaux, les écoles, les universités et les projets commerciaux.",
        "hero.projects": "Voir nos réalisations",
        "hero.quote": "Demander un devis",
        "hero.countries": "ROUMANIE • FRANCE",
        "hero.scroll": "DÉFILER",

        "ticker.pvc": "Revêtements PVC",
        "ticker.linoleum": "Linoléum",
        "ticker.carpet": "Moquette professionnelle",
        "ticker.epoxy": "Revêtements époxy",
        "ticker.installation": "Pose professionnelle",
        "ticker.measurements": "Mesures précises",

        "stats.area": "m² réalisés",
        "stats.projects": "Projets réalisés",
        "stats.countries": "Roumanie • France",
        "stats.experience": "Années d'expérience",

        "about.kicker": "À PROPOS DE BOGARTSOLS",
        "about.title": "Une expérience qui se voit sur chaque <span>surface.</span>",
        "about.titleAccent": "surface.",
        "about.lead": "BOGARTSOLS propose des solutions complètes pour la pose de revêtements de sol professionnels, de la préparation de la surface jusqu'à la finition finale.",
        "about.description": "Nous réalisons des projets où la précision, la résistance et la qualité de finition comptent. Notre expérience en Roumanie et en France nous permet d'aborder des projets variés avec une attention particulière portée à chaque détail.",
        "about.point1": "Exécution professionnelle",
        "about.point2": "Matériaux et solutions adaptés au projet",
        "about.point3": "Respect des délais",
        "about.point4": "Projets en Roumanie et en France",
        "about.badge": "ANNÉES<br>D'EXPÉRIENCE",
        "about.cta": "Parlons de votre projet",

        "services.kicker": "SERVICES",
        "services.title": "Des solutions pour chaque<br><span>projet.</span>",
        "services.titleAccent": "projet.",
        "services.description": "Nous choisissons la solution adaptée selon l'espace, le trafic, les exigences techniques et le niveau de finition souhaité.",
        "service.epoxy.title": "Revêtements époxy",
        "service.epoxy.text": "Des solutions résistantes pour les espaces industriels, commerciaux et les zones à fort trafic.",
        "service.pvc.title": "Revêtements PVC",
        "service.pvc.text": "Pose professionnelle pour les espaces médicaux, commerciaux, les bureaux et les projets complexes.",
        "service.linoleum.title": "Linoléum",
        "service.linoleum.text": "Des surfaces durables et faciles à entretenir, idéales pour les projets aux exigences élevées.",
        "service.carpet.title": "Moquette professionnelle",
        "service.carpet.text": "Confort et finitions haut de gamme pour les bureaux, hôtels et espaces représentatifs.",
        "services.cta": "Vous ne savez pas quelle solution convient à votre projet ?",
        "services.ctaLink": "Parlons-en",

        "advantages.kicker": "POURQUOI NOUS",
        "advantages.title": "Pourquoi choisir BOGARTSOLS ?",
        "advantages.description": "Expérience, sérieux et qualité dans chaque projet.",
        "adv.1.title": "10+ ans d'expérience",
        "adv.1.text": "Une expérience solide dans les projets résidentiels, commerciaux et médicaux.",
        "adv.2.title": "200 000+ m² réalisés",
        "adv.2.text": "Des milliers de mètres carrés posés avec une attention particulière à chaque détail.",
        "adv.3.title": "Roumanie & France",
        "adv.3.text": "Des projets réalisés en Roumanie comme à l'étranger.",
        "adv.4.title": "Qualité garantie",
        "adv.4.text": "Des matériaux haut de gamme et une exécution selon les standards les plus exigeants.",
        "adv.5.title": "Respect des délais",
        "adv.5.text": "Une planification efficace et une livraison conforme à nos engagements.",
        "adv.6.title": "Équipe professionnelle",
        "adv.6.text": "Des spécialistes expérimentés dans la pose de revêtements de sol professionnels.",

        "projects.kicker": "PORTFOLIO",
        "projects.title": "Nos <span>réalisations</span>",
        "projects.description": "Une sélection de réalisations de l'équipe BOGARTSOLS, avec une attention particulière portée à chaque détail et à chaque surface.",
        "project.1.title": "Hôpitaux et cliniques",
        "project.1.type": "PROJETS MÉDICAUX",
        "project.2.title": "Escaliers PVC",
        "project.2.type": "FINITIONS PROFESSIONNELLES",
        "project.3.title": "Revêtements LVT",
        "project.3.type": "LVT",
        "project.4.title": "Résidences et écoles",
        "project.4.type": "ÉDUCATIF",
        "project.5.title": "Cinéma",
        "project.5.type": "ESPACES COMMERCIAUX",

        "contact.kicker": "CONTACT",
        "contact.title": "Parlons de votre projet",
        "contact.button": "Contactez-nous",

        "footer.description": "Revêtements de sol professionnels pour les hôpitaux, écoles, universités et projets commerciaux.",
        "footer.contact": "Contact",
        "footer.navigation": "Navigation",
        "footer.countries": "Roumanie • France",
        "footer.copyright": "© 2026 BOGARTSOLS. Tous droits réservés."
    }
};

function setLanguage(lang, updateUrl = true) {
    const selected = translations[lang] ? lang : "ro";

    document.documentElement.lang = selected;
    document.title = selected === "fr"
        ? "BOGARTSOLS | Revêtements de sol professionnels"
        : "BOGARTSOLS | Pardoseli Profesionale";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (translations[selected][key] !== undefined) {
            element.innerHTML = translations[selected][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        const active = button.dataset.lang === selected;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem("bogartsols-language", selected);

    if (updateUrl) {
        const url = new URL(window.location.href);
        if (selected === "fr") {
            url.searchParams.set("lang", "fr");
        } else {
            url.searchParams.delete("lang");
        }
        window.history.replaceState({}, "", url);
    }
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("bogartsols-language");
setLanguage(urlLanguage || savedLanguage || "ro", false);



/* Development helper: run checkFrenchPage() in the console to spot obvious Romanian leftovers. */
function checkFrenchPage() {
    const roWords = [
        " și ", " pentru ", " proiect", " pardos", " experien", " contact",
        " servicii", " realizate", " echipă", " ani ", " România", " Franța",
        " școli", " spitale", " moche", " linoleum", " scări", " calitate",
        " termen", " ofertă", " discutăm", " noi"
    ];

    const text = document.body.innerText.toLowerCase();
    const found = roWords.filter(word => text.includes(word.toLowerCase()));

    console.log(found.length
        ? "Posibile texte românești rămase: " + found.join(", ")
        : "Nu am găsit expresiile românești urmărite.");
}
