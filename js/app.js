// ELEMENT SELECTOR
$ = (q) => {
  let els = document.querySelectorAll(q);

  if (els.length > 1) return els;
  else if (els.length === 1) return els[0];
};

// SLIDER
// RENDER SLIDESHOW
$(".header__slideshow").innerHTML = `
    <div class="slider-content" id="last-clone">
        <img class="header__slideshow-images" src="./assets/images/gim-1.jpg" alt="school">
    </div>
    <div class="slider-content">
        <img class="header__slideshow-images" src="./assets/images/gim-1.jpg" alt="school">
    </div>
    <div class="slider-content">
        <img class="header__slideshow-images" src="./assets/images/gim-1.jpg" alt="school">
    </div>
    <div class="slider-content">
        <img class="header__slideshow-images" src="./assets/images/gim-1.jpg" alt="school">
    </div>
    <div class="slider-content" id="first-clone">
        <img class="header__slideshow-images" src="./assets/images/gim-1.jpg" alt="school">
    </div>
`;

const slideshow = $(".header__slideshow");
const slideItem = $(".slider-content");

let slideIndex = 1;
slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

const autoSlide = () => {
  if (slideIndex > slideItem.length - 2) return;
  slideIndex++;
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideshow.style.transition = ".8s ease-in-out";
};

let timer = setInterval(autoSlide, 5000);

$("#btn-left").addEventListener("click", () => {
  if (slideIndex < 1) return;
  slideIndex--;
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideshow.style.transition = ".8s ease-in-out";
  clearInterval(timer);
  timer = setInterval(autoSlide, 5000);
});

$("#btn-right").addEventListener("click", () => {
  if (slideIndex > slideItem.length - 2) return;
  slideIndex++;
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideshow.style.transition = ".8s ease-in-out";
  clearInterval(timer);
  timer = setInterval(autoSlide, 5000);
});

slideshow.addEventListener("transitionend", () => {
  if (slideItem[slideIndex].id === "first-clone") {
    slideIndex = 1;
    slideshow.style.transition = "none";
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  if (slideItem[slideIndex].id === "last-clone") {
    slideIndex = images.length - 2;
    slideshow.style.transition = "none";
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
});

// NAVBAR MENU
const hamburgerMenu = document.getElementById("hamburger-menu");
const bars = document.querySelectorAll(".bar");

hamburgerMenu.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("active");
  });
});

// STICKY HEADER
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const navHeight = nav.offsetHeight + "px";

function stickyNav() {
  if (window.scrollY >= 80) {
    body.style.paddingTop = navHeight;
    nav.classList.add("sticky");
  } else if (window.scrollY <= 1) {
    body.style.paddingTop = 0;
    nav.classList.remove("sticky");
  }
  if (window.scrollY >= 100) {
    nav.classList.add("inView");
  } else if (window.scrollY <= 1) {
    nav.classList.remove("inView");
  }
}

window.addEventListener("scroll", stickyNav);
