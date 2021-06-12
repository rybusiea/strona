import { showSlides, plusSlides, currentSlide, carousel } from "./utils.js";

$(document).ready(() => {
    showSlides(1);
    carousel();
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelector('.prev').onclick = () => plusSlides(-1);
    document.querySelector('.next').onclick = () => plusSlides(1);
    const dots = document.getElementsByClassName('dot');
    for (const dot of dots) {
        dot.onclick = () => currentSlide(dot.getAttribute('data-slide'));
    }
}
