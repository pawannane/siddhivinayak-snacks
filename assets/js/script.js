const hamburger = document.querySelector(".hamburger"),
  navContainer = document.querySelector(".navbar"),
  navLink = document.querySelectorAll(".navbar a"),
  html = document.querySelector("html"),
  navItems = document.querySelectorAll(".filter-list li"),
  imageItems = document.querySelectorAll(".images-list li"),
  loadMoreBtn = document.querySelector('.load'),
  header = document.querySelector(".header"),
  browse = document.querySelector(".browse"),
  menuModal = document.querySelector(".menu-modal"),
  subHeading = document.querySelectorAll('.sub-heading'),
  socials = document.querySelectorAll('.social');

gsap.registerPlugin(ScrollTrigger);

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
    gsap.to(menuModal, { duration: 0.5, opacity: 1, display: "block", ease: "power2.inOut" });
    html.classList.add("html-scroll");
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == menuModal) {
      gsap.to(menuModal, { duration: 0.5, opacity: 0, display: "none", ease: "power2.inOut" });
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

  /************************************ animation logic  ***********************************************/
  animateHeader();
  animateBanner();
  animateSubheading();
  animateSpecialities();
  animateBlogSection();
})

// Wrap your header animation code in a function
function animateHeader() {
  // Animation for the logo
  gsap.from(".logo img", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power2.out",
  });

  // Animation for the navigation links
  gsap.from(".navbar li", {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2, // Add stagger for a nice sequential effect
    ease: "power2.out",
  });

  // Animation for the call-to-action button
  gsap.from(".call-btn", {
    duration: 0.5,
    x: 500,
    ease: "power2.out",
  });

  // gsap.to(".call-btn", {
  //   // duration: 1,
  //   opacity: 1,
  //   x: 0,
  //   ease: "power2.out",
  // });
}

// Wrap your banner animation code in a function
function animateBanner() {
  // Animation for the heading
  gsap.from(".heading", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });

  // Animation for the info
  gsap.from(".info", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });
}

// Function to animate skills on scroll
function animateSpecialities() {
  // Animation for the browse button
  gsap.from(browse, {
    duration: .5,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  });

  gsap.to(browse, {
    duration: .5,
    opacity: 1,
    y: 0,
    ease: "power2.out",
  });


  // Animation for the WhatsApp container
  gsap.from(".whatsapp-container a", {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out",
  });

  // Animation for the filter list
  navItems.forEach((nav, index) => {
    gsap.from(nav, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: nav,
        start: 'top 90%', // Adjust the start trigger as needed
        stagger: 0.2,
        end: '+=500', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Animation for the images in the list
  imageItems.forEach((image, index) => {
    gsap.from(image, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: image,
        start: 'top 90%', // Adjust the start trigger as needed
        stagger: 0.2,
        end: '+=500', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
}

// Wrap your blog section animation code in a function
function animateBlogSection() {
  gsap.from(".slider", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".slider",
      start: 'top 90%', // Adjust the start trigger as needed
      stagger: 0.2,
      end: '+=500', // Adjust the end trigger as needed
      toggleActions: 'play none none reverse',
    },
  });
}

function animateSubheading() {
  subHeading.forEach((heading, index) => {
    gsap.from(heading, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: heading,
        start: 'top 90%', // Adjust the start trigger as needed
        stagger: 0.2,
        end: '+=500', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
}