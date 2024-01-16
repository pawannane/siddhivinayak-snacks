const hamburger = document.querySelector(".hamburger"),
  navContainer = document.querySelector(".navbar"),
  navLink = document.querySelectorAll(".navbar a"),
  html = document.querySelector("html"),
  navItems = document.querySelectorAll(".filter-list li"),
  imageItems = document.querySelectorAll(".images-list li"),
  header = document.querySelector(".header"),
  browse = document.querySelector(".browse"),
  menuModal = document.querySelector(".menu-modal");


window.addEventListener('load', () => {
  /************************************ Hamburger logic ***********************************************/
  //add active
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navContainer.classList.toggle("active-nav");
    html.classList.toggle("html-scroll"); // prevent scrolling
    browse.classList.toggle('hide-browse');
  })

  //remove active
  navLink.forEach(e => {
    e.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navContainer.classList.remove("active-nav");
      html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
      browse.classList.remove('hide-browse');
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

  /************************************ filter food logic ***********************************************/
  const filterImage = () => {
    const handleNavigationClick = (e) => {
      e.preventDefault();

      const selectedFood = e.currentTarget.querySelector("a").getAttribute("data-food");

      // Toggle active class on navigation items
      navItems.forEach((item) => {
        item.classList.toggle("active-data", item === e.currentTarget);
      });

      // Show/hide images based on selected food type
      imageItems.forEach((image) => {
        const foodType = image.getAttribute("data-food-type");
        image.style.display = (selectedFood === "all" || selectedFood === foodType) ? "block" : "none";
      });
    };

    // Attach event listeners to navigation items
    navItems.forEach((nav) => {
      nav.addEventListener("click", handleNavigationClick);
    });
  };

  filterImage();

  /************************************ menu modal logic ***********************************************/
  // When the user clicks the button, open the modal 
  browse.onclick = function () {
    gsap.to(menuModal, { duration: 0.2, opacity: 1, display: "block", ease: "power2.inOut" });
    html.classList.add("html-scroll");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == menuModal) {
      gsap.to(menuModal, { duration: 0.2, opacity: 0, display: "none", ease: "power2.inOut" });
      html.classList.remove("html-scroll");
    }
  }

  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 2200,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          loop: true
        },
        600: {
          items: 1,
          nav: true,
          loop: true
        },
        1000: {
          items: 3,
          nav: true,
          loop: true
        }
      }
    })
  })
})

