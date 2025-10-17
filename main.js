///////////////// MAIN

// CSS ANIMATION
let animation1 = document.querySelector('#p1');
let animation2 = document.querySelector('#p2');
let animation3 = document.querySelector('#p3');

function myFunction1() {
    animation1.style.display = 'block';
}

function myFunction2() {
    animation2.style.display = 'block';
}

function myFunction3() {
    animation3.style.display = 'block';
}

// this delays the css animation until the user is looking at its section
document.getElementById("story").addEventListener('mouseover', function() {
    myFunction1();
    myFunction2();
    myFunction3();
});


///////////////// GSAP

// SCROLL INTERACTION (2b)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    let sections = gsap.utils.toArray(".container .panel");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 0.1,
        end: "+=2000"
    }
  });


// JAVASCRIPT ANIMATION USING GSAP (2a)
    gsap.registerPlugin(Draggable, InertiaPlugin);

    Draggable.create("#citrus", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#apple", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#chocolate", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#cinnamon", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#floral", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#chilli", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#coffeebean", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#coconut", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#peach", {
        bounds: "#custom",
        inertia: true
    });

    Draggable.create("#vanilla", {
        bounds: "#custom",
        inertia: true
    });

});


///////////////// SHOELACE

// SHOELACE UI COMPONENT - DRAWER (1a)
const drawer = document.querySelector('.drawer-contained');
const openButton = document.querySelector('.click-me');
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => (drawer.open = !drawer.open));
closeButton.addEventListener('click', () => drawer.hide());
