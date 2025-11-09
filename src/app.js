import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

import Lenis from "lenis";
import 'lenis/dist/lenis.css';
import { Features } from "tailwindcss";
const lenis = new Lenis({
// autoRaf: true,
duration:1.8,
});

lenis.on('scroll', (e) => {
console.log(e);
});
	

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time *1000)
})


gsap.ticker.lagSmoothing(0)

gsap.to('.imgs', {
    x:0,
    ease:'none',
    scrollTrigger:{
        trigger:'#imgslide',
        start: 'top top',
        scrub: 0.25,

    }

})
gsap.to('.quote', {
    ease:'power1.out',
    y:0,

    scrollTrigger:{
        trigger:'.imgs',
        start: 'top-=100 top',
        end: '+=500',
        scrub: true,
    }
})
gsap.to('.scramble', {
    ease:'power2.out',
    duration:2,
    scrambleText:{
        text:'We help the next generation build a communal future.',
        chars:'DEPOT#17',
        scrub:true,
    },
    scrollTrigger:{
        trigger: '.quote',
        start:'top 80%',
         
    }
})

gsap.to('.footer', {
    y:0,
    ease:'power1.out',
    scrollTrigger:{
        trigger:'.trig',
        start:'top center',
        toggleActions: 'play reverse play reverse',

        markers:true

    }
})
const navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach(link => {
    const splitNav = SplitText.create(link, {
        type: "chars, words, lines"
    });

    const animNav = gsap.from(splitNav.chars, {
        y:30,
        rotateY:20,
        autoAlpha:0,
        stagger:0.01,
        duration:0.3,
        ease:"power2.out",
    })

    link.addEventListener('mouseenter', () => {
        animNav.restart();
    })

    link.addEventListener("mouseleave", () => {
        gsap.to(splitNav.chars, {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: "power1.inOut"
        });
    });
});
const scriptURL ="https://script.google.com/macros/s/AKfycbwg3qWCELhFNx4MeGwGhXARYLqD7PRK8KqGVKQTYi-ZoL40rzcNIZw0-wqqDNooSXfIdw/exec";

gsap.from(".text-dgreen", {
    y: 40, 
    });


//scrolling banner, it take the contents of banner.md and displays it (so it's easy to change announcements)
//it currently doesn't loop, oops will fix this

    const spacer = document.getElementById('spacer')
    const donate = document.getElementById('donate')

    // gsap.to([spacer, donate], {
    //     display:"none",
    //     duration:0.2,
    //     ease:"power2.out",
    //     markers:true,

    //     scrollTrigger: {
    //         trigger: '.fixed-nav-trigger',
    //         start: 'top top ',
    //         toggleActions: 'play reverse play reverse',
    //         }
    // });
    const lg = window.matchMedia("(min-width:1024px)")

    ScrollTrigger.create({
        trigger:'.fixed-nav-trigger',
        start:'top top',
        onEnter: () => gsap.to([spacer, donate], {
            display:'none',
            duration:0.2,
            ease:'power2.out'
        }),

        onLeaveBack: () => {
            if(lg.matches) {
                gsap.to([spacer, donate], {
    
                display:'inline-flex',
                duration:0.2,
                ease:'power2.out'
                });
         
            } else {
                return
            }
        }
        })
    

    const text = document.getElementById('banner');

    //i'm aware this is not efficient whatsoever oops
    text.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text.innerHTML;

    const scroll = gsap.to(text, {
        xPercent:-50,
        repeat:-1,
        ease:'linear',
        duration:110,
  
    })

    spacer.addEventListener("mouseenter", () => scroll.pause());
    spacer.addEventListener("mouseleave", () => scroll.resume());


gsap.to('.nav-list', {
    display:"none",
    duration:0.2,
    ease:"power2.out",

    scrollTrigger: {
        trigger: '.fixed-nav-trigger',
        start: 'top center',
        toggleActions: 'play none reverse reverse',
        }
});

const navButton = document.getElementById('nav-button');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');

const nav = document.getElementById('nav');
const navBg = document.getElementById('nav-bg');

gsap.set(nav, { x: '400%', opacity: 0, pointerEvents: "none" });
gsap.set(navBg, { opacity: 0, pointerEvents: "none" });

const hi = gsap.timeline({ paused: true, reversed:true });

hi.to(navBg, {
  opacity: 1,
  duration: 0.1,
  ease: "power2.out",
})
.to(nav, {
    x: 0,
    opacity: 1,
    pointerEvents: "auto",

    // stagger: 0.05,
    duration: 0.2,
    ease: "power3.out",
  },
  "<");

window.addEventListener('DOMContentLoaded', () => {
  const openNav = document.getElementById('open-nav');
  openNav.classList.replace('opacity-0', 'opacity-100');
});

navButton.addEventListener("click", () => {
  console.log("clicked!");
    if(hi.reversed()){
        lenis.stop();
        hi.play();
        document.querySelector('.slot').style.pointerEvents = 'none';

        document.body.classList.add('overflow-hidden');    
        document.body.classList.remove('overflow-visible');
        closeNav.classList.replace('opacity-0', 'opacity-100')
        openNav.classList.replace('opacity-100', 'opacity-0')  
       


    }
    else {
        lenis.start()
        hi.reverse();
        document.querySelector('.slot').style.pointerEvents = 'auto';
        document.body.classList.remove('overflow-hidden');    
        document.body.classList.add('overflow-visible');
        openNav.classList.replace('opacity-0', 'opacity-100')
        closeNav.classList.replace('opacity-100', 'opacity-0')
     

    }
    }
);

hi.eventCallback('onReverseComplete', () => {
    gsap.set(nav, {pointerEvents: 'none'});
    gsap.set(navBg, {opacity:0, pointerEvents:'none'})
    document.body.classList.remove('overflow-hidden')
})




const form = document.forms["email-form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var formData = new FormData(form);

    fetch(scriptURL, {method: "POST", body: formData})
    .then((response) => {
        console.log("yaay");
        form.reset();
    })

    .catch((error) => {
        console.log("boooo");
    });
})


const featured = gsap.utils.toArray('.featured');


    featured.forEach((proj) => {

        ScrollTrigger.create({
            trigger: proj,
            start:'top 90%',
            end:'bottom 20%',
            scrub:true,
            markers:true,
            onUpdate: (self) => {
                gsap.to(proj, {
                    scale:1,
                    ease:'power3.out'
                })
            }
        })
    }
    )

