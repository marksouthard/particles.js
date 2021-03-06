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
        "value":  10
      },
      "color": {
        "value": ["#1EC185", "#2DA9D7", "#212A3E", "#1EC185", "#2DA9D7"]
      },
      "shape": {
        "type": ["image", "circle"],
        "image": {
          "src": "http://f.cl.ly/items/1Z3I2r0a0F3A3t3X1R0V/logobit.svg",
          "width": 80,
          "height": 220
        }
      },
      "opacity": {
        "value": 1,
        "random": false
      },
      "size": {
        "value": 5,
        "random": false
      },
      "move": {
        "enable": true,
        "speed": 2,
        "random": true,
        "straight": true
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "resize": true
      }
    },
    "retina_detect": true
  }

);
