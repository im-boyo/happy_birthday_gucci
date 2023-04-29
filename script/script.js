
gsap.registerPlugin(ScrollTrigger);

let anim = gsap.timeline().to(".scroll-down", {y: "10vmin", ease: "none", yoyo: true, repeat: -1, duration: 3})

anim.play(0);

const body = document.querySelector(".body");
const section = document.querySelector("#chapitre-1")



//Animations GSAP

const animCh2 = gsap.timeline()
.fromTo(".arm",  {rotate: "-100deg"}, {rotate: "0", duration: 5, ease: "elastic", scrollTrigger: {
    start: '25% 50%',
    end: 'center center',
    trigger: '#chapitre-1',
    toggleActions: 'restart complete reverse reset',
    scrub: true
  }})
.fromTo(".capered", {rotate: "10deg"}, {rotate: "0", duration: 2, ease: "none", yoyo: true, repeat: -1}, "<")