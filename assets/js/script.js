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