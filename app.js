

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


const frameImg=document.querySelector(".landingPageImageInside")
const Svg=document.querySelector(".landingRotatingSvg")

  swiper1.on("transitionEnd", function () {
   
    if (isOdd(swiper1.realIndex)) {
      Svg.classList.add("activeR")

    } else {
      Svg.classList.remove("activeR")

     
    }

  


    if (swiper1.realIndex==0){
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
       frameImg.src="./Img/landingpageImg/1 page image.png"
       
   
    }
    if (swiper1.realIndex==1){
      gsap.from(".secondSliderIcon", {
        opacity: 1,
         duration:3,
          y:100 ,
       });
       gsap.from(".landingPageImageBgText", { 
        opacity: .2,
         duration:2, 
         y:-200 
      });
       frameImg.src="./Img/secondSlider/2nd page image.png"
       
    }else if (swiper1.realIndex==2){
      gsap.from(".thirdSliderIcons",{
        opacity:0.2,
        duration:2,
        x:50,
        y:50,
        stagger:0.2,
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
  