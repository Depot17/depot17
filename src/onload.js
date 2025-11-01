import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
//animates on page load:
window.addEventListener('load', () => {
    const navBar = document.getElementById('navbar');

    gsap.to(navBar, {
        y: 0,
        opacity:1,
        duration: 0.7,
        ease: 'power2.out',
        delay:0.6
    }
    );
//     const title = document.querySelectorAll(".title");

//     title.forEach(link => {
//         const splitTitle = SplitText.create(link, {
//             type: "chars, words, lines"
//         });

//         gsap.from(splitTitle.chars, {
//             y:30,
//             rotateY:20,
//             autoAlpha:0,
//             stagger:0.01,
//             duration:0.3,
//             delay:1,
//             ease:"power2.out",
//         })
// })
    
    const left = document.getElementById('from-left');

    gsap.to(left, {
        x: 0,
        opacity:1,
        duration: 0.2,
        ease: 'power2.out' 
    }
    );
    const right = document.getElementById('from-right');

    gsap.to(right, {
        x: 0,
        opacity:1,
        duration: 0.7,
        ease: 'power2.out' 
    }
    );

    const landingCenter = document.getElementById('landing-center');

    gsap.to(landingCenter, {
        opacity:1,
        duration:0.8,
        ease:'power1.out',
        delay:1
    })




    const lg = window.matchMedia("(min-width:1024px)")

    const landing = document.getElementById('landing')
    landing.classList.toggle("md:bg-[url('/images/spotlight.webp')]")

    function spotlightSize(e) {
        if (e.matches) {
    gsap.fromTo(".spotlight",
    { backgroundSize: "10% 100%" },
    { backgroundSize: "35% 100%", duration: 1.5, ease: "power2.out" }
    );
        }

    else {

    gsap.fromTo(".spotlight",
    { backgroundSize: "20% 100%" },
    { backgroundSize: "55% 100%", duration: 1.5, ease: "power2.out" }
    );
    }

    }

    spotlightSize(lg)
    lg.addEventListener("change", spotlightSize);

});

