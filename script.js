const flowers = [

"images/flower1.jpg",

"images/flower2.jpg",

"images/flower3.jpg",

"images/flower4.jpg"

];

let index = 0;

const hero = document.getElementById("hero");

function changeBackground(){

hero.style.backgroundImage =
`url(${flowers[index]})`;

index++;

if(index >= flowers.length){

index = 0;

}

}

changeBackground();

setInterval(changeBackground,5000);