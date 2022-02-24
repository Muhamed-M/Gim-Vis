const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const slideshow = document.querySelector('.header__slideshow');
const images = document.querySelectorAll('.header__slideshow-images');
const firstImg = document.getElementById('first-clone');
const endImg = document.getElementById('last-clone');
let slideIndex = 1;

slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

let timer = setInterval(() => {
    if (slideIndex > images.length - 2) return;
    slideIndex++;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
}, 7000);

btnLeft.addEventListener('click', () => {
    if (slideIndex < 1) return;
    slideIndex--;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
});

btnRight.addEventListener('click',  () => {
    if (slideIndex > images.length - 2) return;
    slideIndex++;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
});

slideshow.addEventListener('transitionend', () => {
    if (images[slideIndex].id === 'first-clone') {
        slideIndex = 1;
        slideshow.style.transition = 'none';
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    if (images[slideIndex].id === 'last-clone') {
        slideIndex = images.length - 2;
        slideshow.style.transition = 'none';
        slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});

// NAVBAR MENU
const hamburgerMenu = document.getElementById('hamburger-menu');
const bars = document.querySelectorAll('.bar');

hamburgerMenu.addEventListener('click', () => {
    bars.forEach((bar) => {
        bar.classList.toggle('active');
    });
});