const hamburger = document.querySelector(".hamburger"),
  navContainer = document.querySelector(".navbar"),
  navLink = document.querySelectorAll(".navbar a"),
  html = document.querySelector("html"),
  navItems = document.querySelectorAll(".filter-list li"),
  imageItems = document.querySelectorAll(".images-list li"),
  loadMoreBtn = document.querySelector('.load'),
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

  /************************************ modal logic ***********************************************/
  // When the user clicks the button, open the modal 
  browse.onclick = function() {
    menuModal.style.display = "block";
    html.classList.add("html-scroll"); // prevent scrolling or user can scroll
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == menuModal) {
      menuModal.style.display = "none";
      html.classList.remove("html-scroll"); // prevent scrolling or user can scroll
    }
  }
})

<<<<<<< HEAD


=======
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
>>>>>>> 9bab77877babc11dbf3a3fe9ac04eada5eb3e023
