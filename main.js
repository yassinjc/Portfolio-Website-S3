// Alle code voor het animeren van de welkomsttekst //

const mainText = new SplitType('#main-text')
const mainTexthigh = new SplitType('#main-text-high')
const mainTexthighest = new SplitType('#main-text-highest')
const mainTextlow = new SplitType('#main-text-low')
const mainTextlowest = new SplitType('#main-text-lowest')

gsap.to('#main-text .word', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})

gsap.to('#main-text-low .word', {
    y: 0,
    stagger: 0.05,
    delay: 0.9,
    duration: .1
})

gsap.to('#main-text-lowest .word', {
    y: 0,
    stagger: 0.05,
    delay: 0.9,
    duration: .1
})

gsap.to('#main-text-high .word', {
    y: 0,
    stagger: 0.05,
    delay: 0.9,
    duration: .1
})

gsap.to('#main-text-highest .word', {
    y: 0,
    stagger: 0.05,
    delay: 0.9,
    duration: .1
})

// Alle code voor de projecten-slider //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Alle code voor de reveal animatie voor de sections //

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Alle code voor de back-to-top button //

const toTop = document.querySelector(".to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Alle code voor het cirkeltje die de cursor volgt //

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});