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