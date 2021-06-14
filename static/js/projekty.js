import { manageSlides, setupScrollReveal } from "./utils.js";

$(document).ready(() => {
    setupScrollReveal();
    manageSlides('#slideshow-container-1');
    manageSlides('#slideshow-container-2');

});
