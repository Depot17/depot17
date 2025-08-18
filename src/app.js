import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.from(".box", {
    x: 800, 
    duration: 1,
});

const scriptURL ="https://script.google.com/macros/s/AKfycbwg3qWCELhFNx4MeGwGhXARYLqD7PRK8KqGVKQTYi-ZoL40rzcNIZw0-wqqDNooSXfIdw/exec";

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
