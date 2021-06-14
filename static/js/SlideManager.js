export default class SlideManager {
    constructor(containerSelector, slideSelector = '.myslides', dotSelector = '.dot', slideIndex = 0) {
        this.container = document.querySelector(containerSelector);
        this.slides = document.querySelectorAll(`${containerSelector} ${slideSelector}`);
        this.slideCount = this.slides.length;
        this.dots = document.querySelectorAll(`${containerSelector} ${dotSelector}`);
        this.prev = document.querySelector(`${containerSelector} .prev`);
        this.next = document.querySelector(`${containerSelector} .next`);
        this.slideIndex = slideIndex;

        this.setupEventListeners();
        this.setCarousel();
        this.showSlides();
    }

    setupEventListeners = () => {
        this.prev.onclick = () => this.nextSlide(-1);
        this.next.onclick = () => this.nextSlide(1);
        for (const dot of this.dots) {
            dot.onclick = () => this.setSlide(dot.getAttribute('data-slide'));
        }
    }

    setCarousel = () => {
        window.setInterval(() => this.nextSlide(1), 3000);
    }

    nextSlide = (n) => {
        this.slideIndex += n;
        this.showSlides();
    }

    setSlide = (n) => {
        this.slideIndex = n;
        this.showSlides();
    }

    showSlides = () => {
        for (const slide of this.slides) {
            slide.classList.add('hidden');
        }
        this.slides[this.adjustedSlideIndex].classList.remove('hidden');

        for (const dot of this.dots) {
            dot.classList.remove('active');
        }
        this.dots[this.adjustedSlideIndex].classList.add('active');
    }

    get adjustedSlideIndex() {
        return this.slideIndex % this.slideCount;
    }
}