import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const scriptURL ="https://script.google.com/macros/s/AKfycbwg3qWCELhFNx4MeGwGhXARYLqD7PRK8KqGVKQTYi-ZoL40rzcNIZw0-wqqDNooSXfIdw/exec";

gsap.from(".text-dgreen", {
			y: 40, 
			});


gsap.to('.change', {
    backgroundColor:"white",
    duration:0.6,
    ease:"power2.out",

    scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        toggleActions: 'play none reverse reverse',
        markers:true
    }
});


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

