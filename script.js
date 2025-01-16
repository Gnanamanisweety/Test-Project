// Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');  // Make sure your menu has the 'menu' class

menuBtn?.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Slideshow Logic
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (if any)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("carousel-item");
  const prevControl = document.querySelector(".carousel-control-prev");
  const nextControl = document.querySelector(".carousel-control-next");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Remove active class from all slides and controls
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Update controls' active state
  prevControl?.classList.toggle("active", slideIndex > 1);
  nextControl?.classList.toggle("active", slideIndex < slides.length);

  slides[slideIndex - 1].classList.add("active");
}

// Testimonials Slider
let currentIndex = 0;

function goToSlide(index) {
  const track = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".testimonials-card");
  const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);
  
  // Adjust the index for wraparound
  if (index < 0) {
    currentIndex = cards.length - 1; 
  } else if (index >= cards.length) {
    currentIndex = 0; 
  } else {
    currentIndex = index;
  }

  // Move the slider
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  const dots = document.querySelectorAll(".testimonials-sections .dots .dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".testimonials-sections .dots .dot");
  dots[0]?.classList.add("active");

  // Ensure the first card is visible
  const track = document.querySelector(".slider-track");
  if (track) track.style.transform = "translateX(0)";
});

// Handle Dot Navigation
const testimonialDots = document.querySelectorAll(".testimonials-sections .dots .dot");
testimonialDots.forEach((dot, i) => {
  dot.addEventListener("click", () => goToSlide(i));
});

// Testimonials Slider Auto-Slide (every 3 seconds)
setInterval(() => {
  goToSlide(currentIndex + 1); 
}, 3000); 

// Toggle Menu (For other button interactions like 'nav-menu')
function toggleMenu() {
  const menu = document.getElementById('nav-menu'); // Ensure this element exists
  menu?.classList.toggle('active');
}
