import { gsap } from "gsap";

const isTouchDevice = 'ontouchstart' in window;

if (!isTouchDevice){

    const $el = document.querySelector('.click');

window.addEventListener('mousemove', (e) => {
    const { target,x ,y } = e;
    const clickMe = target.closest('.clickme');
    // const isClickable = target?.closest('a') || target?.closest('button');
    
    gsap.to($el, {
        x: x + 3,
        y: y +3,
        duration:0.7,
        ease: 'power4',
        opacity: clickMe ? 1 : 0,

    })
})

document.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
        opacity:0,
        duration:0.7,
    })
})

}