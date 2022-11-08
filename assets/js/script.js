$(document).ready(function() {
    $('nav a').click(function(e) {
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});

// Project carousel buttons

const carouselContainer = document.getElementById("carousel-container");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = window.innerWidth;
    carouselContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = window.innerWidth;
    carouselContainer.scrollLeft -= slideWidth;
});