///////////////// MAIN

// CSS ANIMATION
// setting my hidden paragraphs as variables
let animation1 = document.querySelector('#p1');
let animation2 = document.querySelector('#p2');
let animation3 = document.querySelector('#p3');

// creating a function that makes them appear
function myFunction1() {
    animation1.style.display = 'block';
}

function myFunction2() {
    animation2.style.display = 'block';
}

function myFunction3() {
    animation3.style.display = 'block';
}

// this event listener delays the css animation until the user is looking at its section
document.getElementById("story").addEventListener('mouseover', function() {
    myFunction1();
    myFunction2();
    myFunction3();
});

// SOUND
// first sound effect
const clinkSound = new Audio('audio/clinking.wav'); // setting the sound as a variable (sound effect from: Pixabay)
const soundBtn = document.querySelector('#sound-btn'); // setting the button as a variable

// conditional statement function that toggles the sound on and off
function playAudio() {
  if (clinkSound.paused) {
    clinkSound.play();
  } else {
    clinkSound.pause();
  }
}

// attaching this function to a button
soundBtn.addEventListener('click', () => {
    playAudio();
});

// second sound effect
const socialSound = new Audio('audio/social.wav'); // setting the sound as a variable (sound effect from: Pixabay)
const soundBtn2 = document.querySelector('#sound-btn-2'); // setting the button as a variable

// conditional statement function that toggles the sound on and off
function playAudio2() {
  if (socialSound.paused) {
    socialSound.play();
  } else {
    socialSound.pause();
  }
}

// attaching this function to a button
soundBtn2.addEventListener('click', () => {
    playAudio2();
});


///////////////// GSAP

// SCROLL INTERACTION (2b)
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    let homeSections = gsap.utils.toArray(".container .panel"); // creating the panels that will move horizontally as variables

    gsap.to(homeSections, { // defines where the scroll effect will take place (home section)
        xPercent: -100 * (homeSections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container", // defines the element where the viewport will pin; this will start the horizontal scrolling
            pin: true,
            scrub: 0.1,
            end: "+=2000"
        }
  });

    // additional scroll effect
    let quoteSections = gsap.utils.toArray("#quote .call-out"); // creating the panels that will move horizontally as variables

    gsap.to(quoteSections, { // defines where the scroll effect will take place (quote section)
        xPercent: -100 * (quoteSections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#quote", // defines the element where the viewport will pin; this will start the horizontal scrolling
            pin: true,
            scrub: 0.1,
            end: "+=2000"
        }
  });

// JAVASCRIPT ANIMATION USING GSAP (2a)
    gsap.registerPlugin(Draggable, InertiaPlugin);

    // making each icon moveable for the customise section; must be done seperately otherwise the code breaks
    Draggable.create("#citrus", {
        bounds: "#custom", // ensures the user can't drag the icon across the entire website
        inertia: true // allows icons to be thrown and behave more fluidly; increases immersion
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

// SVG ANIMATION (2a)
    gsap.registerPlugin(MorphSVGPlugin);
    
    // first animation
    gsap.to("#circle", {
        duration: 1, 
        morphSVG: "#bird",
    });

    let morph1 = gsap.to("#circle", { duration: 1, morphSVG:"#bird", repeat:1, yoyo:true, repeatDelay:0.2});

    // attaching an event listener to the button that will start the morph 
    document.getElementById("circle").addEventListener("click", () => morph1.restart(true));

    //second animation
        gsap.to("#circle-2", { 
        duration: 1, 
        morphSVG: "#bird-2",
    });

    let morph2 = gsap.to("#circle-2", { duration: 1, morphSVG:"#bird-2", repeat:1, yoyo:true, repeatDelay:0.2});

    // attaching an event listener to the button that will start the morph 
    document.getElementById("circle-2").addEventListener("click", () => morph2.restart(true));
});


///////////////// SHOELACE

// SHOELACE UI COMPONENT - DRAWER (1a)
const drawer = document.querySelector('.drawer-contained'); // setting the drawer as a variable

// setting the open & close buttons
const openButton = document.querySelector('#drawer-btn');
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

// attaching event listeners to the button to allow the user to open and close the drawer
openButton.addEventListener('click', () => (drawer.open = !drawer.open));
closeButton.addEventListener('click', () => drawer.hide());