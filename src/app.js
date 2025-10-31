import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let split = SplitText.create(".abc", {
    type: "chars, words, lines"
});

gsap.from(split.lines, {
    y:30,
    // rotateZ:20,
    autoAlpha:0,
    stagger:0.08,
    duration:0.5,
    ease:"power2.out",
    opacity:0,

    scrollTrigger: {
        trigger:'.trig',
        start:'top botttom',
        toggleActions: 'play none none none'
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


// gsap.to('.change', {
//     backgroundColor:"#008C50",
//     duration:0.8,
//     ease:"power2.out",

//     scrollTrigger: {
//         trigger: '.trigger',
//         start: 'top center',
//         toggleActions: 'play none reverse reverse'
//         }
// });

//scrolling banner 

    const spacer = document.getElementById('spacer')

    gsap.to(spacer, {
        display:"none",
        duration:0.2,
        ease:"power2.out",

        scrollTrigger: {
            trigger: '.fixed-nav-trigger',
            start: 'top center',
            toggleActions: 'play none reverse reverse',
            markers:true
            }
    });

    const text = document.getElementById('banner');

    text.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text.innerHTML

    const scroll = gsap.to(text, {
        xPercent:-50,
        repeat:-1,
        ease:'linear',
        duration:24
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
        markers:true
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
        hi.play();
        document.body.classList.add('overflow-hidden');    
        document.body.classList.remove('overflow-visible');
        closeNav.classList.replace('opacity-0', 'opacity-100')
        openNav.classList.replace('opacity-100', 'opacity-0')  
       


    }
    else {
        hi.reverse();
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


gsap.from('.abc', {
    y:50,
    duration:3,
    ease:"power2.out",

    text: {
        value: "Something new",
        newClass: "class2",
        delimiter: " ",
    }
    
})

const lg = window.matchMedia("(min-width:1024px)")

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

