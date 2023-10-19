
// let nota1 = parseFloat(prompt("nota01"))
// let nota2 = parseFloat(prompt("nota02"))
// let nota3 = parseFloat(prompt("nota03"))

// let media = (nota1 + nota2 + nota3) /3

// if(media < 5){
//     console.log(`Aluno(a) reprovado(a) com média ${media}`)
// } else if (media >= 5 && media < 7) {
//     console.log(`Aluno(a) em recuperação com média ${media}`)
// } else {
//     console.log(`Aluno(a) aprovado com média ${media}`)
// }

// let numero = parseInt(prompt("Digite um número de 1 até 12"))

// if(numero === 1){
//     console.log("O mês digitado foi: janeiro")
// }
//  else if (numero === 2){
//     console.log("O mês digitado foi: fevereiro")
// }
//  else if (numero === 3){
//     console.log("O mês digitado foi: março")
// }
//  else if (numero === 4){
//     console.log("O mês digitado foi: abril")
// }
//  else if (numero === 5){
//     console.log("O mês digitado foi: maio")
// }
//  else if (numero === 6){
//     console.log("O mês digitado foi: junho")
// }
//  else if (numero === 7){
//     console.log("O mês digitado foi: julho")
// }
//  else if (numero === 8){
//     console.log("O mês digitado foi: agosto")
// }
//  else if (numero === 9){
//     console.log("O mês digitado foi: setembro")
// }
//  else if (numero === 10){
//     console.log("O mês digitado foi: outubro")
// }
//  else if (numero === 11){
//     console.log("O mês digitado foi: novembro")
// }
//  else if (numero === 12){
//     console.log("O mês digitado foi: dezembro")
// } else{
//     console.log("Número inválido")
// }

// let numero = parseInt(prompt("Digite um número de 1 até 12"))

// switch (numero) {
//     case 1:
//         console.log("jan")
//         break;
//     case 2:
//         console.log("fev")
//         break;
//     case 3:
//         console.log("mar")
//         break;
//     case 4:
//         console.log("abr")
//         break;
//     case 5:
//         console.log("mai")
//         break;
//     case 6:
//         console.log("jun")
//         break;
//     case 7:
//         console.log("jul")
//         break;
//     case 8:
//         console.log("ago")
//         break;
//     case 9:
//         console.log("set")
//         break;
//     case 10:
//         console.log("out")
//         break;
//     case 11:
//         console.log("nov")
//         break;
//     case 12:
//         console.log("dez")
//         break;
//     default:
//         //console.log("Mês inválido")
// }

// let contador = 1;

// while (contador <= 50){
//     console.log(contador)
//     // contador++; 
//     contador = contador + 1
// }

// let contador = 5;

// do {
//     console.log(contador)
//     contador--
// } while (contador > 0)

// for (let i = 0; i <= 50; i+=5){
//     console.log(i)
// }

// Escreva um programa em js que solicte um número ao usuário e exiba todos os número ímpares entre 1 e o número informado. Utilize um estrutura de repetição "laço for" para verificar se cada número entre 1 e o número informado é ímpar, e exiba os números ímpares no console

let numero = parseInt(prompt("Digite um número:"))

console.log("Numeros ímpares entre 1 e " + numero + ":")

for(let i = 1; i<= numero; i++ ) {
    if(i % 2 !== 0){
        console.log(i)
    }
}