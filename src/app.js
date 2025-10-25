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


var tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});

tl.to("#scramble", {duration: 3, scrambleText:{text:"Lorem ipsum text blurb wow look here theres stuff continue reading there is even more stuff ", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})


const scriptURL ="https://script.google.com/macros/s/AKfycbwg3qWCELhFNx4MeGwGhXARYLqD7PRK8KqGVKQTYi-ZoL40rzcNIZw0-wqqDNooSXfIdw/exec";

gsap.from(".text-dgreen", {
    y: 40, 
    });


gsap.to('.change', {
    backgroundColor:"#008C50",
    duration:0.8,
    ease:"power2.out",

    scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        toggleActions: 'play none reverse reverse'
        }
});



gsap.to('.nav-fixed', {
    opacity:1,
    duration:0.2,
    ease:"power2.out",

    scrollTrigger: {
        trigger: '.fixed-nav-trigger',
        start: 'top center',
        toggleActions: 'play none reverse reverse',
        markers:true
        }
});


// gsap.from('.abc', {
//     y:50,
//     duration:3,
//     ease:"power2.out",

//     text: {
//         value: "Something new",
//         newClass: "class2",
//         delimiter: " ",
//     }
    
// })


gsap.fromTo(".spotlight-xs",
  { backgroundSize: "20% 100%" },
  { backgroundSize: "85% 100%", duration: 1.5, ease: "power2.out" }
);

gsap.fromTo(".spotlight-lg",
  { backgroundSize: "10% 100%" },
  { backgroundSize: "35% 100%", duration: 1.5, ease: "power2.out" }
);


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

