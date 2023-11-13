// console.log("Ainda não executou!")

// setTimeout(function () {
//     console.log("Requisição assíncrona!")
// }, 2000);

// console.log("Ainda não executou 2")

// console.log("Ainda não!")

// setInterval(function () {
//     console.log("Requisição assíncrona!")
// }, 3000);

// console.log("Ainda não 2")

const promessa = Promise.resolve(5 + 10); 

console.log("Código ... blá blá ...")

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value +3)
    .then((value) => console.log(`Agora o valor é:  ${value}`));