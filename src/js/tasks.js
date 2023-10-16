import Swiper from "swiper";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
// Import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Иконки heart /
const hearts = document.querySelectorAll(".card-heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("heart-active");
  });
});

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  modules: [ Navigation, Pagination, Autoplay ],
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 800,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
