//generate random number
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const boxes = ["a","b","c","d","e","f","g","h","i"];

function color(x) {
    for (let index = 0; index < boxes.length; index++) {
        let element = boxes[index];
        if (x.matches) {
            document.getElementById(element).style.backgroundColor = getRandomColor();
          } else {
              document.getElementById(element).style.backgroundColor = getRandomColor();
          }
    }
  }

  let x = window.matchMedia("(max-width: 767px)");
  color(x);
  x.addListener(color);