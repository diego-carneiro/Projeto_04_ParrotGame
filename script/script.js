let qtdCartas;
let todasAsCartas = [];
let cardOrderRandom = [];
let cartasSelecionadas = [];
let acertos =0;

const cardOrder = [
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/bobrossparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/bobrossparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/explodyparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/explodyparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/fiestaparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/fiestaparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/metalparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/metalparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/revertitparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/revertitparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/tripletsparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/tripletsparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/unicornparrot.gif"/>
</div>
</div>`,
`<div class="card" onclick="armazenarCarta(this)">
<div class="front-face face">
  <img class="front-parrot" src="parrots/front.png"/>
</div>
<div class="back-face face">
  <img src="parrots/unicornparrot.gif"/>
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

function virarCarta(cartavirada) {
    cartavirada.classList.toggle("virada")
   
}

function armazenarCarta(cartavirada) {

    virarCarta(cartavirada);
    if(cartasSelecionadas.length<2){
      cartasSelecionadas.push(cartavirada)
      console.log(cartasSelecionadas);
    }

    if(cartasSelecionadas.length === 2){

      validarCartas();
    }
}

function validarCartas() {
  
  if(cartasSelecionadas[0].innerHTML === cartasSelecionadas[1].innerHTML){
    cartasSelecionadas = [];
    acertos += 2;
    console.log(acertos)

      if(acertos === Number(qtdCartas)){
        alert("Game Over");
      }

   } else{
     
    virarCarta(cartasSelecionadas[0]);
    virarCarta(cartasSelecionadas[1]);
    cartasSelecionadas = [];
   }

}