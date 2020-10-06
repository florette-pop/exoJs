// console.log(document.querySelector('.container').getBoundingClientRect());
//   // La méthode Element.getBoundingClientRect() renvoie la taille d'un élément et
//   //sa position relative par rapport à la zone d'affichage (viewport).
//
// document.addEventListener('keypress', function(e){
//   console.log(e.key);
// })

var carre = document.querySelector('.carre').getBoundingClientRect();
console.log(carre);

document.addEventListener('keypress', function(e){
  var dep = 50;
  if (e.key == 'd')
  {
    console.log(e.key);
    carre.x += dep;
    console.log(carre);
  }
})

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
