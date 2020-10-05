// console.log(document.querySelector('.container').getBoundingClientRect());
//   // La méthode Element.getBoundingClientRect() renvoie la taille d'un élément et
//   //sa position relative par rapport à la zone d'affichage (viewport).
//
// document.addEventListener('keypress', function(e){
//   console.log(e.key);
// })

console.log(document.querySelector('.carre').getBoundingClientRect());

document.addEventListener('keypress', function(e){
   console.log(e.keyCode);
   })

// move('#carre')
// .add('margin-left', 200)
//   .end();

dep=10,leftPos=0;

function avancer(){
    leftPos+=dep
    console.log(leftPos)
   document.getElementById("carre").style.left=leftPos+"px"
}
setInterval(avancer,50);
