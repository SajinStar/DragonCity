// jQuery(window).mousewheel(function(event, delta, deltaX, deltaY){
//   if(delta < 0) page.scrollTop(page.scrollTop() + 65);
//   else if(delta > 0) page.scrollTop(page.scrollTop() - 65);
//   return false;
// })

var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true 
  },
  mousewheel: {
    releaseOnEdges: true,
  }
});

var swiper2 = new Swiper(".mySwiper3", {
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

var swiper3 = new Swiper(".mySwiper4", {
  slidesPerView: 3,
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
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  
});



  //  gsap anime
const Svg=document.querySelector(".svgContent")
const bgSlider=document.querySelector(".firstSlideWrapper")
const BgInsideImg=document.querySelector(".landingPageImage")
const thirdOnlyShow=document.querySelector(".tirdSliderShopAdd")
const thirdOnlyShowSecond=document.querySelector(".tirdSliderShopAddItoys")
const firstIndex=document.querySelector(".secondSliderImageInsidefirst")
const secondIndex=document.querySelector(".secondSliderImageInsideSecond")
const thirdIndex=document.querySelector(".secondSliderImageInsideThird")
const blackLogo=document.querySelector(".landingPageLogoBlack")
const whiteLogo=document.querySelector(".landingPageLogoWhite")

  swiper1.on("transitionEnd", function () {
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
if (swiper1.realIndex ==0){
  blackLogo.style.display="flex"
  whiteLogo.style.display="none"
  Svg.classList.remove("activeR")
  Svg.classList.remove("activeEven")
  firstIndex.classList.add("highIndex")
  firstIndex.classList.remove("lowIndex")
  gsap.from(".secondSliderImageInsidefirst", { 
    duration:1,
    transformOrigin:"left",
    opacity:1,
    scaleX:0,
    
  }); 
} else {
  firstIndex.classList.add("lowIndex")
  firstIndex.classList.remove("highIndex")
  gsap.to(".secondSliderImageInsidefirst", { 
  });
} 
if(swiper1.realIndex ==1){
  blackLogo.style.display="none"
  whiteLogo.style.display="flex"
  Svg.classList.add("activeR")
  Svg.classList.remove("activeEven")
  secondIndex.classList.add("highIndex")
  secondIndex.classList.remove("lowIndex")
  gsap.from(".secondSliderImageInsideSecond", {
   duration:1,
    transformOrigin:"left",
    opacity:1,
    scaleX:0,
});
}else{
  secondIndex.classList.add("lowIndex")
  secondIndex.classList.remove("highIndex")
  gsap.to(".secondSliderImageInsideSecond",{
  });
}if (swiper1.realIndex ==2) {
  blackLogo.style.display="flex"
  whiteLogo.style.display="none"
  Svg.classList.add("activeEven")
  Svg.classList.remove("activeR")
  thirdOnlyShow.style.display="block"
  thirdOnlyShowSecond.style.display="block"
  thirdIndex.classList.add("highIndex")
  thirdIndex.classList.remove("lowIndex")
  gsap.from(".secondSliderImageInsideThird", { 
    duration:1,
    transformOrigin:"left",
    opacity:1,
    scaleX:0,
  });
}else {
  thirdIndex.classList.add("lowIndex")
  thirdIndex.classList.remove("highIndex")
  thirdOnlyShow.style.display="none"
  thirdOnlyShowSecond.style.display="none"
  gsap.to(".secondSliderImageInsideThird", { 
  });
}if(swiper1.realIndex ==3){
  blackLogo.style.display="none"
  whiteLogo.style.display="flex"
  Svg.classList.remove("activeEven") 
  Svg.classList.add("activeR")  
}if (swiper1.realIndex ==4) {
  blackLogo.style.display="flex"
  whiteLogo.style.display="none"
  Svg.classList.add("activeEven")
  Svg.classList.remove("activeR")
}
    if (swiper1.realIndex ==0){
      gsap.from(".landingSectionApp", { 
        opacity: .2,
         duration:1, 
         y:-200 ,
      });
      gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:1, 
         y:-200 
      });
      gsap.from(".landingPageBotText", {
         opacity: .2, 
         duration:1, 
         x:-300 
        });
      gsap.from(".landingPageStore", {
         opacity: .2,
          duration:1,
           y:300 
        });
   
    }
    if (swiper1.realIndex==1){
      gsap.from(".secondSliderAbsoulteItems", {
        opacity: 0.2,
         duration:1,
          y:200 ,
       });
       gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:2, 
         y:-200 
      });
     
       
    }else if (swiper1.realIndex==2){
      gsap.from(".thirdSliderIcons",{
        opacity:0,
        duration:1,
        
      })
      gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:1, 
         y:-200 
      });
    
    } 
  });

  


gsap.from(".secondSliderIcon", {
   opacity: 1,
    duration:1,
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



                                                                                                                                                                                