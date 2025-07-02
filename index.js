// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("nav-active");
});

let slideIndex = 0;
const slides = document.querySelectorAll(".hero-img .slide");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// tombol navigasi manual
prevButton.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

startAutoSlide(); // mulai auto slide
