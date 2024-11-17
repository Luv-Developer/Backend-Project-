const searchBox = document.querySelector('.search-box');
const cart = document.querySelector('.cart');
const userForm = document.querySelector('.user'); // Selecting the user login form

document.querySelector('#search-icon').onclick = () => {
  searchBox.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
  userForm.classList.remove('active'); // Hide other forms
};

document.querySelector('#cart').onclick = () => {
  cart.classList.toggle('active');
  searchBox.classList.remove('active');
  userForm.classList.remove('active'); 
  navbar.classList.remove('active');
};

document.querySelector('#user').onclick = () => {
  userForm.classList.toggle('active');
  searchBox.classList.remove('active');
  cart.classList.remove('active'); // Hide other forms
  navbar.classList.remove('active');
};

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  searchBox.classList.remove('active');
  cart.classList.remove('active');
  userForm.classList.remove('active');
};

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
  });

window.onscroll = () => {
  searchBox.classList.remove('active');
  cart.classList.remove('active');
  userForm.classList.remove('active');
  navbar.classList.remove('active');
};

// Initialize Swiper with slidesPerView set to 3 for three products per page
var swiper = new Swiper(".new-arrival", {
  slidesPerView: 3, // Show three slides per view
  spaceBetween: 20,
  loop: true,
  centeredSlides: false, // Adjust to align slides to the left rather than center
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Responsive breakpoints to adjust slides per view
    
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

