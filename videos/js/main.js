//***************************************************************************************************************/
let darkMode = sessionStorage.getItem("darkMode");
let divC = document.querySelectorAll(".dark_color");
let flCard = document.querySelectorAll(".flcard");

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggleMobile = document.querySelector("#dark-mode-toggle-mobile");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  divC.forEach((singlee) => {
    singlee.classList.add("other_darkmode");
  });
  flCard.forEach((o) => {
    o.classList.add("flcard_dark");
  });
  sessionStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  divC.forEach((singlee) => {
    singlee.classList.remove("other_darkmode");
  });
  flCard.forEach((o) => {
    o.classList.remove("flcard_dark");
  });
  sessionStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("fa-sun");
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
darkModeToggleMobile .addEventListener("click", () => {
  darkModeToggleMobile .classList.toggle("fa-sun");
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


//****************************************************************************************************************/
// This Function is to control the scroll to top button *//

let ads_one = document.querySelector(".ads_one");
let fixed_arrow = document.querySelector(".fixed-arrow");
window.onscroll = function () {
  if (window.scrollY >= ads_one.offsetTop - 500) {
    fixed_arrow.style.display = "flex";
    fixed_arrow.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrow.style.display = "none";
  }
};

// //*************************************************************************************************************/
// //**This Function  */
const products = document.querySelectorAll(".product");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;

  products.forEach((product) => {
    const top = product.getBoundingClientRect().top;

    if (trigger > top) {
      product.classList.add("show_content");
    } else {
      product.classList.remove("show_content");
    }
  });
}

//********************************************************************************************************************/
//*** This is For Carousel Slider **********************************************************************/
$(document).ready(function(){
  $('.owl-carousel-basic').owlCarousel({
    margin:15,
    loop:true,      
    autoplay:true,  
    item: 4,
    autoplayTimeout:3000,     
    autoplayHoverPause:true,  
    nav:true,       
    responsive:{  
      0:{
        items:1
      },
      500: {
        items:1,
        nav:false,
        margin: 50
      },
      600:{
        items:2,
        nav:false,
        margin: 50
      },
      1000:{
        items:3
      }
    }
  })
  
  
});

// history slider
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mouseWheel: {
    invert: false,
  },
  // autoHeight: true
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
});

/**********************************************************************************************************/
// This Function is to control the scroll to top button *//

let sectionTwo = document.querySelector(".section_two");
let fixedArrow = document.querySelector(".fixed-arrow");
console.log(sectionTwo);
console.log(fixedArrow);
window.onscroll = function () {
  if (window.scrollY >= sectionTwo.offsetTop - 500) {
    fixedArrow.style.display = "flex";
    fixedArrow.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixedArrow.style.display = "none";
  }
};

/*******************************************************************************************************/