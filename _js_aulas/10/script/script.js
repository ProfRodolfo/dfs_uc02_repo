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

// const promessa = Promise.resolve(5 + 10); 

// console.log("Código ... blá blá ...")

// promessa
//     .then((value) => {
//         console.log(`A soma é ${value}`);
//         return value;
//     })
//     .then((value) => value +3)
//     .then((value) => console.log(`Agora o valor é:  ${value}`));

// Promise.resolve(4 * "adg") 
//     .then ((n) => {
//         if (Number.isNaN(n)) {
//             throw new Error("Valores inválidos")
//         }
//     } )
//     .catch((err) => console.log(`Um erro ocorreu: ${err}`));

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10){
            resolve(`O numero é maior que 10!`);
        } else {
            reject(new Error("Numero abaixo do esperado"));
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(5);


a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);


b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);