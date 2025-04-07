// script.js

let slideIndex = 1;
let slideTimer;

showSlide(slideIndex);
autoSlide();

function changeSlide(n) {
  showSlide(slideIndex += n);
  resetTimer();
}

function currentSlide(n) {
  showSlide(slideIndex = n);
  resetTimer();
}

function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function autoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 3000);
}

function resetTimer() {
  clearInterval(slideTimer);
  autoSlide();
}
