import SlideManager from "./SlideManager.js";

export function manageSlides(containerSelector) {
    new SlideManager(containerSelector);
}

var slideIndex = 1;
export function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");

    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "inline-block";

    dots[slideIndex - 1].className += " active";
}

export function plusSlides(n) {
    showSlides(slideIndex += n);
}

export function currentSlide(n) {
    showSlides(slideIndex = n);
}

export function carousel() {
    var i;
    var x = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "inline-block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

export function setupScrollReveal() {
    window.sr = ScrollReveal();
    sr.reveal('.podzial', {
        reset: false,
        delay: 200,
        duration: 1500
    });

    sr.reveal('.podzialcontainer', {
        reset: false,
        delay: 200,
        duration: 1500,
        origin: "top",
    })

    sr.reveal('.blokpusty', {
        reset: false,
        delay: 400,
        duration: 1500
    });

    sr.reveal('.blokiinfocontainer1', {
        distance: '25%',
        reset: false,
        delay: 200,
        duration: 3000,
        origin: 'left'
    });

    sr.reveal('.blokiinfocontainer2', {
        distance: '25%',
        reset: false,
        delay: 200,
        duration: 3000,
        origin: 'right'
    });

    sr.reveal('.zakresblok1', {
        distance: '10%',
        reset: false,
        delay: 300,
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.zakresblok2', {
        distance: '10%',
        reset: false,
        delay: 400,
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.zakresblok3', {
        distance: '10%',
        reset: false,
        delay: 600,
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.zakresblok4', {
        distance: '10%',
        reset: false,
        delay: 800,
        duration: 2000,
        origin: 'bottom'
    });
}
