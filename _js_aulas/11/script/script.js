const btn = document.querySelector("#my-button");
btn.addEventListener("click", function (){
    console.log("Clicou no botão!");
}); 


const secondBtn = document.querySelector("#btn"); 

function imprimirMensagem (){
    console.log("Teste"); 
}

secondBtn.addEventListener("click", imprimirMensagem);