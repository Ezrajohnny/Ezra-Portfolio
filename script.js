const flowers = [
    "flower1.jpg",
    "flower2.jpg",
    "flower3.jpg",
    "flower4.jpg"
];

let index = 0;

function changeBackground() {
    document.body.style.backgroundImage =
        `url('${flowers[index]}')`;

    index++;

    if(index >= flowers.length){
        index = 0;
    }
}

changeBackground();
setInterval(changeBackground, 10000);

function toggleSkill(id){

const content = document.getElementById(id);

if(content.style.display === "block"){
content.style.display = "none";
}
else{
content.style.display = "block";
}

}

const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.display === "block"){
content.style.display = "none";
}
else{
content.style.display = "block";
}

});

});