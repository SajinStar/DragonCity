

var swiper1 = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: false,
  mousewheelControl: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    450: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },

});



  //  gsap anime


const frameImg=document.querySelector(".landingPageImageInside")
const Svg=document.querySelector(".landingRotatingSvg")
const bgSlider=document.querySelector(".firstSlideWrapper")
const BgInsideImg=document.querySelector(".landingPageImage")
  swiper1.on("transitionEnd", function () {
    gsap.to(".landingPageImageInside", { 
      opacity:1,
      duration:2,
      width:"300px",
    });

if (swiper1.realIndex > 2){
  BgInsideImg.style.display="none"
} else {
  BgInsideImg.style.display="flex"
}
if (swiper1.realIndex > 4){
  bgSlider.style.display="none"
} else {
  bgSlider.style.display="block"
}
if(swiper1.realIndex ==1){
  Svg.classList.add("activeR")
  Svg.classList.remove("activeEven")
  frameImg.style.width="1px"
  gsap.to(".landingPageImageInside", { 
    opacity:1,
    duration:.5,
    width:"300px",
  });
} else if (swiper1.realIndex ==2) {
  Svg.classList.add("activeEven")
  Svg.classList.remove("activeR")
  frameImg.style.width="1px"
  gsap.to(".landingPageImageInside", { 
    opacity:1,
    duration:0.5,
    width:"300px",
  });
  
} if(swiper1.realIndex ==3){
  Svg.classList.add("activeR")
  Svg.classList.remove("activeEven")
 
  
}else if (swiper1.realIndex ==4) {
  Svg.classList.add("activeEven")
  Svg.classList.remove("activeR")

  
}



else if (swiper1.realIndex ==0){
  Svg.classList.remove("activeR")
  Svg.classList.remove("activeEven")
  frameImg.src="./Img/landingpageImg/1 page image.png"     

} 




    // if (isOdd(swiper1.realIndex)) {
    //   Svg.classList.add("activeR")
    //   Svg.classList.remove("activeEven") 
     

    // } else {
    //   Svg.classList.add("activeEven") 
    //   Svg.classList.remove("activeR")
    // }
    // if(swiper.realIndex == 0){
    //   Svg.classList.remove("activeEven") 
    // }
    
    if (swiper1.realIndex ==0){
      gsap.from(".landingSectionApp", { 
        opacity: .2,
         duration:2, 
         y:-200 ,yoyo:true,
      });
      gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:2, 
         y:-200 
      });
      gsap.from(".landingPageBotText", {
         opacity: .2, 
         duration:2, 
         x:-300 
        });
      gsap.from(".landingPageStore", {
         opacity: .2,
          duration:2,
           y:300 
        });
   
    }
    if (swiper1.realIndex==1){
      gsap.from(".secondSliderAbsoulteItems", {
        opacity: 0.2,
         duration:2,
          y:200 ,
       });
       gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:2, 
         y:-200 
      });
       frameImg.src="./Img/secondSlider/2nd page image.png"
       
    }else if (swiper1.realIndex==2){
      gsap.from(".thirdSliderIcons",{
        opacity:0,
        duration:2,
        
      })
      gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:2, 
         y:-200 
      });
      frameImg.src="./Img/thirdSlider/thirdsliderMblImg.png"
    } 
  });

  function isOdd(num) {
    return num % 2;
  }


gsap.from(".secondSliderIcon", {
  // scrollTrigger:".secondSliderIcon",
   opacity: 1,
    duration:3,
     y:100 ,
  });

//   const myImgs = document.querySelectorAll('.animate-me');

// let observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       console.log('in the view');
//     } else {
//       console.log('out of view');
//     }
//   });
// });

// myImgs.forEach(image => {
//   observer.observe(image);
// });


  // if (isOdd(swiper1.realIndex)) {
    // gsap.to(".landingRotatingSvg", { left: 0, rotate: 180, top: 0 , duration:2,  });

//       var tl = gsap.timeline({ defaults: {duration: 3,} } );
// tl.to(".landingRotatingSvg", {left: -270}) 
//   .to(".landingRotatingSvg", {rotate: 180 ,top: 0, transformOrigin:"left"})
//   .to(".landingRotatingSvg", {left:"100%"});
  // } else {
    // gsap.to(".landingRotatingSvg", {
    //   left: 0,
    //   rotate:0,
    //   bottom: -100,
    //   top: "initial",
    //   duration:1.5,

    // });


  