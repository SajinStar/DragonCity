// jQuery(window).mousewheel(function(event, delta, deltaX, deltaY){
//   if(delta < 0) page.scrollTop(page.scrollTop() + 65);
//   else if(delta > 0) page.scrollTop(page.scrollTop() - 65);
//   return false;
// })

var swiper1 = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheelControl: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true 
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  speed : 1000,
  // delayBetweenSlides: 700,
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
const bgSlider=document.querySelector(".landingPageImageBgText" )
const bgicon=document.querySelector( ".logoContainer" )
const BgInsideImg=document.querySelector(".landingPageImage")
const firstIndex=document.querySelector(".secondSliderImageInsidefirst")
const secondIndex=document.querySelector(".secondSliderImageInsideSecond")
const thirdIndex=document.querySelector(".secondSliderImageInsideThird")
const blackLogo=document.querySelector(".landingPageLogoBlack")
const whiteLogo=document.querySelector(".landingPageLogoWhite")
const svgBgImg=document.querySelector(".svgSection")

document.addEventListener("mousewheel", function(event){
  if(swiper1.realIndex > 4){
    Svg.classList.add("svgTopMove")
  }else{
    Svg.classList.remove("svgTopMove")
  }
})
document.addEventListener("mousewheel", function(event){
  

  if (swiper1.realIndex ==0){
    gsap.from(".landingSectionApp", { 
      duration:2,
      transformOrigin:"left",
      opacity:1,
      scaleX:0,
      delay:1,
    });
    gsap.from(".landingPageImageBgText", { 
      opacity: .2,
       duration:1, 
       y:-200 ,
       delay:1,
    });
    gsap.from(".landingPageBotText", {
      duration:2,
      transformOrigin:"left",
      opacity:1,
      scaleX:0,
      delay:1,
      });
    gsap.from(".landingPageStore", {
      duration:2,
      transformOrigin:"left",
      opacity:1,
      scaleX:0,
      delay:1,
      });

  }
  
  if(swiper1.realIndex ==1){
    gsap.from(".secondSliderAbsoulteItems ", { 
      duration:1,
      transformOrigin:"left",
      opacity:1,
      scaleX:0,
      delay:1,
    });  
    gsap.from(".landingPageImageBgText", { 
      opacity: .2,
       duration:1, 
       y:-200 
    });
  }
  if (swiper1.realIndex==2){
      gsap.from(".thirdSliderIcons",{
        duration:1,
      transformOrigin:"left",
      opacity:1,
      scaleX:0,
      delay:1,
      })
      gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:1, 
         y:-200 ,
         delay:1,
      });
    
    } 
})


  swiper1.on("transitionEnd", function () {
if (swiper1.realIndex > 2){
  BgInsideImg.style.display="none"
} else {
  BgInsideImg.style.display="flex"
}
if (swiper1.realIndex > 4){
  bgSlider.style.display="none"
  bgicon.style.display="none"
  // Svg.classList.add("svgTopMove")
} else {
  bgSlider.style.display="block"
  bgicon.style.display="block"
  // Svg.classList.remove("svgTopMove")
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
  gsap.to(".secondSliderImageInsideThird", { 
  });
}if(swiper1.realIndex ==3){
  blackLogo.style.display="none"
  whiteLogo.style.display="flex"
  Svg.classList.remove("activeEven") 
  Svg.classList.add("activeR")  
  BgInsideImg.style.overFlow="visible"
}if (swiper1.realIndex ==4) {
  blackLogo.style.display="flex"
  whiteLogo.style.display="none"
  Svg.classList.add("activeEven")
  Svg.classList.remove("activeR")
}
    // if (swiper1.realIndex ==0){
    //   gsap.from(".landingSectionApp", { 
    //     opacity: .2,
    //      duration:1, 
    //      y:-200 ,
    //   });
    //   gsap.from(".landingPageImageBgText", { 
    //     opacity: .2,
    //      duration:1, 
    //      y:-200 
    //   });
    //   gsap.from(".landingPageBotText", {
    //      opacity: .2, 
    //      duration:1, 
    //      x:-300 
    //     });
    //   gsap.from(".landingPageStore", {
    //      opacity: .2,
    //       duration:1,
    //        y:300 
    //     });
   
    // }
    if (swiper1.realIndex==1){
      // gsap. from(".secondSliderAbsoulteItems", {
      //   opacity: 0,
      //    duration:1,
      //     y:200 , 
      //  });
      //  gsap.from(".landingPageImageBgText", { 
      //   opacity: .2,
      //    duration:2, 
      //    y:-200 
      // });
     
       
    // }else if (swiper1.realIndex==2){
    //   gsap.from(".thirdSliderIcons",{
    //     opacity:0,
    //     duration:1,
        
    //   })
      // gsap.from(".landingPageImageBgText", { 
      //   opacity: .2,
      //    duration:1, 
      //    y:-200 
      // });
    
    } 
  });









      
                                                                                                                                                                               