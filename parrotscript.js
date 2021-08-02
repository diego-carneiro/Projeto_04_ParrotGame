let qtdCartas;
let todasAsCartas = [];
let cardOrderRandom = [];
const cardOrder = [`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="bobrossparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="bobrossparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="unicornparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="explodyparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="explodyparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="fiestaparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="fiestaparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="metalparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="metalparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="revertitparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="revertitparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="tripletsparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="tripletsparrot.gif"/>
</div>
</div>`,
`<div class="card">
<div class="front-face face">
  <img class="front-parrot" src="front.png"/>
</div>
<div class="back-face face">
  <img src="unicornparrot.gif"/>
</div>
</div>`]

numeroDeCartas();

for(let i = 0; i < qtdCartas ; i++){
cardOrderRandom.push(cardOrder[i]);

}
shuffle(cardOrderRandom);



function numeroDeCartas() {
    
        qtdCartas = prompt("Com quantas cartas deseja jogar?\nRegras:\nA quantidade de cartas deve ser par\nA quantidade mínima de cartas é 4 e o máximo é 14") ;
    
    while (!(qtdCartas % 2===0 && qtdCartas >=4 && qtdCartas <= 14)){
        
        qtdCartas = prompt("Com quantas cartas deseja jogar?\n\nRegras:\nA quantidade de cartas deve ser par\nA quantidade mínima de cartas é 4 e o máximo é 14");
    } 
}

function distribuirCartas(){
    let cardbox = document.querySelector(".cardbox");
   
    for(let i = 0; i < qtdCartas; i++ ){
    cardbox.innerHTML += cardOrderRandom[i];
    
    }
}
distribuirCartas();

function shuffle(array) { 
    let currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

/*
function virarCarta(card) {
    card.classlist
}
*/


  