const w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
alert(x + ' × ' + y);

const citationSlide = document.getElementsByClassName("stars__slider__citations");
const starsPhotoSlides = document.getElementsByClassName("slider__star-photo");
const dots = document.getElementsByClassName("slider-dot");