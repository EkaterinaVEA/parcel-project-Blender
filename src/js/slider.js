$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    speed: 1000,
    easing: 'ease',
    infinite: true,     
    waitForAnimate: false,
    autoplay:true,
    autoplaySpeed: 4000,
    pauseOnHover: true,    
          pauseOnFocus:true,
     responsive: [
      {
         breakpoint: 768,
        settings: {
          arrows:false,
          dots: false,
          waitForAnimate: false,
          asNavFor: ".small-slider",
        },
      }
    ],
    
  });
  $('.small-slider').slick({
     responsive: [
      {
         breakpoint: 768,
         settings: {
          adaptiveHeight: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 20,
          speed: 1000,
          easing: 'ease',     
          waitForAnimate: false,
           focusOnSelect: true, 
           pauseOnHover: true,
          pauseOnFocus:true,
          asNavFor: ".slider",
        },
      }
    ],
  });
});

// slide-1---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-1]")
          const mobileMenuRef = document.querySelector("[reviews-text-1]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-2---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-2]")
          const mobileMenuRef = document.querySelector("[reviews-text-2]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-3---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-3]")
          const mobileMenuRef = document.querySelector("[reviews-text-3]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-4---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-4]")
          const mobileMenuRef = document.querySelector("[reviews-text-4]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-5---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-5]")
          const mobileMenuRef = document.querySelector("[reviews-text-5]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-6---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-6]")
          const mobileMenuRef = document.querySelector("[reviews-text-6]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()
//  -------------------------------
// slide-7---------------------------------------------------------------
; (() => {
          const menuBtnRef = document.querySelector("[reviews-switch-button-7]")
          const mobileMenuRef = document.querySelector("[reviews-text-7]")

          menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

            menuBtnRef.classList.toggle("feedback-open")
            menuBtnRef.setAttribute("aria-expanded", !expanded)

            mobileMenuRef.classList.toggle("feedback-open")
          })
})()