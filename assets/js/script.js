const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".navbar a");
const html = document.querySelector("html");
const navItems = document.querySelectorAll(".filter-list li");
const imageItems = document.querySelectorAll(".images-list li");
const header = document.querySelector(".header");


window.addEventListener('load', () => {
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

  const filterImage = () => {
    navItems.forEach((nav) => {
      nav.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedFood = nav.querySelector("a").getAttribute("data-food");

        // Toggle active class on navigation items
        navItems.forEach((item) => {
          item.classList.toggle("active-data");
        });

        // Show/hide images based on selected food type
        imageItems.forEach((image) => {
          const foodType = image.getAttribute("data-food-type");
          image.style.display = (selectedFood === "all" || selectedFood === foodType) ? "block" : "none";
        });
      });
    });
  };

  filterImage();
})



