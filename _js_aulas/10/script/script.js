console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// tag

const listItens = document.getElementsByTagName("li");

console.log(listItens); 


// Classe
const products = document.getElementsByClassName("product");

console.log(products); 

// ID

const title = document.getElementById("title"); 
console.log(title); 


const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer); 

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title)

// appendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild

const h2 = document.querySelector("h2");

h2.textContent = "Meu novo título"; 

header.replaceChild(h2, title);

// - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais uma título");

const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

// Atributos

const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.sp.senac.br");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// Altura e largura

const footer = document.querySelector("footer");
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// Posição de elementos

const product1 = products[0]; 
console.log(product1.getBoundingClientRect());

// Css em js

mainContainer.style.color = "red";  
mainContainer.style.backgroundColor = "#333";  
mainContainer.style.paddingBottom = "15px";  


for (const li of listItens) {
    li.style.backgroundColor = "red"
}