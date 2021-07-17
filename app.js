

var swiper1 = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  //  gsap anime

  swiper1.on("transitionEnd", function () {
    if (isOdd(swiper1.realIndex)) {
      gsap.to(".landingRotatingSvg", { left: 0, rotate: 180, top: 0 });
    } else {
      gsap.to(".landingRotatingSvg", {
        left: 0,
        rotate: 0,
        bottom: -100,
        top: "initial",
      });
    }
  });
  
  function isOdd(num) {
    return num % 2;
  }

gsap.from(".secondSliderIcon", { opacity: 1, duration: 3, x: -500 });

