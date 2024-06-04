var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mobile-menu
let open_icon = document.querySelector("#menu-icon");
let close_btn = document.querySelector("#close-btn");
let menu_mobile = document.querySelector(".menu-mobile");
open_icon.addEventListener("click", () => {
  menu_mobile.style.transform = "translateY(0)";
});
close_btn.addEventListener("click", () => {
  menu_mobile.style.transform = "translateY(-100%)";
});

var swiper = new Swiper(".coming-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
let home = document.querySelector("#home");
let movies = document.querySelector("#movies");
let coming = document.querySelector("#coming");
let newsletter = document.querySelector("#newsletter");

home.addEventListener("click", (e) => {
  window.scrollTo({ top: "5", behavior: "smooth" });
  e.preventDefault();
});

movies.addEventListener("click", (e) => {
  window.scrollTo({ top: "800", behavior: "smooth" });
  e.preventDefault();
});
coming.addEventListener("click", (e) => {
  window.scrollTo({ top: "1637", behavior: "smooth" });
  e.preventDefault();
});
newsletter.addEventListener("click", (e) => {
  window.scrollTo({ top: "1924", behavior: "smooth" });
  e.preventDefault();
});
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
