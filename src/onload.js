import { gsap } from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);
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
    
    // const scram = document.getElementById('scramble')
    gsap.to('#scramble', {
        opacity:1,
        ease:'power2.out',
        duration:2,
        scrambleText:{
            text:'Find a problem in a local or community, then work with them to engineer a solution. ',
            chars:'DEPOT#17'
        }
    })
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

