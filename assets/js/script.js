const hamburger = document.querySelector(".hamburger"),
  navContainer = document.querySelector(".navbar"),
  navLink = document.querySelectorAll(".navbar a"),
  html = document.querySelector("html"),
  navItems = document.querySelectorAll(".filter-list li"),
  imageItems = document.querySelectorAll(".images-list li"),
  header = document.querySelector(".header");


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


  //remove active
  navLink.forEach(e => {
    e.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navContainer.classList.remove("active-nav");
      html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
    })
  });

  /************************************ scroll logic ***********************************************/
  var specificPixel = 80;

  // Function to be called when the user scrolls to the specific pixel
  function handleScroll() {
    var scrollPosition = window.scrollY || window.scrollY;

    if (scrollPosition >= specificPixel) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  }

  // Attach the 'handleScroll' function to the 'onscroll' event
  window.onscroll = handleScroll;

})



