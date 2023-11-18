const btn = document.querySelector("#my-button");
btn.addEventListener("click", function (){
    console.log("Clicou no botão!");
}); 


const secondBtn = document.querySelector("#btn"); 

function imprimirMensagem (){
    console.log("Teste"); 
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", ()=> {
    console.log("Evento Removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
}); 


// const title = document.querySelector("#my-title");

// title.addEventListener("click", (event) => {
//     console.log(event);
// });

const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.offsetX);
    console.log(e.pointerType);
});

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation(); 
    console.log("Evento 2");
});

const a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Não Alterou a página!");
});

document.addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla ${e.key}`);
}); 

document.addEventListener("keydown", (e) =>{
    console.log(`Pressionou a tecla ${e.key}`);
}); 


const mouseEvents = document.querySelector("#mouse"); 
    
    mouseEvents.addEventListener("mousedown", () =>{
        console.log("Pressionou o botão");
    });
    mouseEvents.addEventListener("mouseup", () =>{
        console.log("Soltou o botão");
    });
    mouseEvents.addEventListener("dblclick", () =>{
        console.log("Duplo clique");
    });

    mouseEvents.addEventListener("mousemove", (e) =>{
        // console.log(`No eixo x: ${e.x}`);
        // console.log(`No eixo y: ${e.y}`);
    });


    window.addEventListener("scroll", (e) => {
        if(window.scrollY > 200){
            console.log("Passamos de 200px");
        }
    });


const input = document.querySelector("#my-input");

input.addEventListener("focus", () => {
    console.log("Entrou no input");
    
})
input.addEventListener("blur", () => {
    console.log("Saiu no input");
    
})