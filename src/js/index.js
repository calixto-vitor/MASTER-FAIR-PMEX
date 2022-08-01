const btnGo = document.getElementById("btn-avancar");
const btnBack = document.getElementById("btn-voltar");
const cards = document.querySelectorAll(".cartao");

let current = 0;

function hideCardSelect(){
    const cardSelect = document.querySelector(".selecionado");
    cardSelect.classList.remove("selecionado");
}

function showCard (index){
    cards[index].classList.add("selecionado");
}


btnGo.addEventListener("click", function(){
    if(current === cards.length -1) return;
  
    hideCardSelect();

    current++;
    showCard(current);
       
})


btnBack.addEventListener('click', function(){ 
    if(current === 0) return;
  
    hideCardSelect();

    current--;
    showCard(current);    
})