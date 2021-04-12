const myHeading = document.createElement('h2');
myHeading.textContent = "div-donis";
document.querySelector('body').appendChild(myHeading);
document.getElementsByTagName("h2")[0].setAttribute("id", "header"); 
particlesJS("particles-js", {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 800} },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: { enable: false, speed: 40, opacity_min: 0.8, sync: false }
      },
      size: {
        value: 0,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#abc",
        opacity: 0.9,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: { enable: false, rotateX: 1200, rotateY: 1200 }
      }
    },
      interactivity: {
        detect_on: "canvas",
        events: {
        resize: true
      },
      modes: {
        grab: { distance: 0, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
