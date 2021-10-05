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
const secondItems=document.querySelector(".secondSliderAbsoulteItems")
const firstIndex=document.querySelector(".secondSliderImageInsidefirst")
const secondIndex=document.querySelector(".secondSliderImageInsideSecond")
const thirdIndex=document.querySelector(".secondSliderImageInsideThird")
const blackLogo=document.querySelector(".landingPageLogoBlack")
const whiteLogo=document.querySelector(".landingPageLogoWhite")
const svgBgImg=document.querySelector(".svgSection")
 function onload(){
  var theDelay = 1.5;
  var timer = setTimeout("showText()",theDelay*1000)
}
function showText(){
  document.querySelector(".secondSliderFirstItem").style.visibility = "visible";
  document.querySelector(".secondSliderSecondItem").style.visibility = "visible";
  document.querySelector(".secondSliderThirdItem").style.visibility = "visible";
  document.querySelector(".secondSliderFourthItem").style.visibility = "visible";
}
document.addEventListener("mousewheel", function(event){
  if(swiper1.realIndex > 4){
    Svg.classList.add("svgTopMove")
  }else{
    Svg.classList.remove("svgTopMove")
  }
})
document.addEventListener("mousewheel", function(event){
  if (swiper1.realIndex ==0){

  } if(swiper1.realIndex ==1){
  }else{   
  }
  if (swiper1.realIndex==2){
    
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
  onload(); 
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
});









      
                                                                                                                                                                               