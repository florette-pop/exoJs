// console.log(document.querySelector('.container').getBoundingClientRect());
//   // La méthode Element.getBoundingClientRect() renvoie la taille d'un élément et
//   //sa position relative par rapport à la zone d'affichage (viewport).
//
// document.addEventListener('keypress', function(e){
//   console.log(e.key);
// })

/*var carre = document.querySelector('.carre').getBoundingClientRect();
console.log(carre);

document.addEventListener('keypress', function(e){
  var dep = 50;
  if (e.key == 'd')
  {
    console.log(e.key);
    carre.x += dep;
    console.log(carre);
  }
}) */

const monCarre = document.querySelector(".carre");
const monBaton = document.querySelector(".baton");
let x = 10;
let y = 10;
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    console.log("up");
    y = y - 5;
    monCarre.style.top = y + "px";
  }
  if (event.key === "ArrowDown") {
    console.log("down");
    y = y + 5;
    monCarre.style.top = y + "px";
  }
  if (event.key === "ArrowLeft") {
    x = x - 5;
    monCarre.style.left = x + "px";
  }
  if (event.key === "ArrowRight") {
    x = x + 5;
    monCarre.style.left = x + "px";
  }
});

console.log(document.querySelector('.carre').getBoundingClientRect());
console.log(document.querySelector('.baton').getBoundingClientRect());

// move('#carre')
// .add('margin-left', 200)
//   .end();
/*
dep=10,leftPos=0;

function avancer(){
    leftPos+=dep;
    console.log(leftPos);
    document.getElementById("carre").style.left=leftPos;
}

function avancer(){

    var dep = 10;
    jeu = setInterval(avancer, 100);

    if(direction === DROITE){
        document.getElementByClassName("serpent").top += dep ;
    }
    if(direction === GAUCHE){
        possitionSerpent.left += dep ;
    }
    if(direction === HAUT){
        possitionSerpent.top += dep ;
    } else {
        possitionSerpent.top -= dep ;
    }

}
setInterval(avancer,50);
*/
