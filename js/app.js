const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const slideshow = document.querySelector('.header__slideshow');
const images = document.querySelectorAll('.header__slideshow-images');
const firstImg = document.getElementById('first-clone');
const endImg = document.getElementById('last-clone');
let slideIndex = 1;

slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

const autoSlide = () => {
    if (slideIndex > images.length - 2) return;
    slideIndex++;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
};

let timer = setInterval(autoSlide, 5000);

btnLeft.addEventListener('click', () => {
    if (slideIndex < 1) return;
    slideIndex--;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
    clearInterval(timer);
    timer = setInterval(autoSlide, 5000);
});

btnRight.addEventListener('click',  () => {
    if (slideIndex > images.length - 2) return;
    slideIndex++;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideshow.style.transition = '.8s ease-in-out';
    clearInterval(timer);
    timer = setInterval(autoSlide, 5000);
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

// STICKY HEADER
const nav = document.querySelector('.navbar');
const body = document.querySelector('body');
const navHeight = nav.offsetHeight + 'px';
const header = document.querySelector('.header');

function stickyNav() {
    if (window.scrollY >= 80) {
        body.style.paddingTop = navHeight;
        nav.classList.add('sticky');
    } else if (window.scrollY <= 1) {
        body.style.paddingTop = 0;
        nav.classList.remove('sticky');
    }
    if (window.scrollY >= 100) {
        nav.classList.add('inView');
    } else if (window.scrollY <= 1) {
        nav.classList.remove('inView');
    }
}

window.addEventListener('scroll', stickyNav);