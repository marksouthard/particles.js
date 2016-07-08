/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value":  50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#1EC185", "#2DA9D7", "#212A3E", "#1EC185", "#2DA9D7"]
      },
      "shape": {
        "type": ["circle", "image"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "image": {
          "src": "http://f.cl.ly/items/1Z3I2r0a0F3A3t3X1R0V/logobit.svg",
          "width": 80,
          "height": 220
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "move": {
        "enable": true,
        "speed": 0.25,
        "direction": "top-right",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 400,
          "rotateY": 800
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": .5,
          "speed": 5
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    // "config_demo": {
    //   "hide_card": false,
    //   "background_color": "#b61924",
    //   "background_image": "",
    //   "background_position": "50% 50%",
    //   "background_repeat": "no-repeat",
    //   "background_size": "cover"
    // }
  }

);
