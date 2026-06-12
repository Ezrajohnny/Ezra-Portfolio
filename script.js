const flowers = [
  "flower1.jpg",
  "flower2.jpg",
  "flower3.jpg",
  "flower4.jpg"
];

let index = 0;

const hero = document.getElementById("hero");

function changeBackground() {
  hero.style.backgroundImage = `url(${flowers[index]})`;

  index++;

  if (index >= flowers.length) {
    index = 0;
  }
}

changeBackground();

setInterval(changeBackground, 5000);