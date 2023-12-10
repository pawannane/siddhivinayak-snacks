const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".navbar a");
const html = document.querySelector("html");
const header = document.querySelector(".header");

/************************************ Hamburger logic ***********************************************/
//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active-nav");
  html.classList.toggle("html-scroll"); // prevent scrolling
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active-nav");
    html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
  })
});

// slider logic start

let slideIndex = 0;

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll('.item');
  let testBtns = document.querySelectorAll('.test-btns a');

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'flex';
  // slides[slideIndex].style.width = '100%';

  for (let i = 0; i < testBtns.length; i++) {
    testBtns[i].classList.remove('active');
  }
  testBtns[slideIndex].classList.add('active');
}

showSlides(slideIndex);

// slider logic end