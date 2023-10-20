function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao()


const minhaFuncaoEmVariavel = function (){
    console.log("Função em variável")
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("DEVFull - Boa noite")
funcaoComParametro("DEVFull - Boa tarde")
funcaoComParametro("DEVFull - Bom dia")

const a = 10
const b = 20
const c = 30
const d = 40

function soma (n1, n2) {
    return n1 + n2
} 

const resultado = soma(a, b)
console.log(resultado)
const resultado1 = soma(c, b)
console.log(resultado1)
const resultado2 = soma(d, c)
console.log(resultado2)

function subtracao (k1, k2){
    return k1 - k2
}
const result = subtracao(10, 5) 
console.log(result)


 const testeArrow = () => {
    console.log("Sou uma Arrow function")
 }

 testeArrow()

 const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par")
        return
    }
    console.log("Impar")
 }

 parOuImpar(5)
 parOuImpar(4)
 parOuImpar(100)

 const raizQuadrada = (x) => {
    return x * x
 }

 console.log(raizQuadrada(4))
 console.log(raizQuadrada(3))
 console.log(raizQuadrada(13))

 const multiplicacao1 = function (n, m){
    if (m === undefined){
        return n * 2
    } else {
        return n * m
    }
 } 

 console.log(multiplicacao1(4,20))
 console.log(multiplicacao1(4))