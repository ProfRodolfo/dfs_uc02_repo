const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const itens = ["aluno", true, 2, 4.75]
console.log(itens)

const arr = ["a", "b", "c", "d"]

console.log(arr)
console.log(arr[0])
console.log(arr[3])
console.log(arr[10])

const numbers = [5,12,4,22]
console.log(numbers.length)

const myName = "Rodox"
console.log(myName.length)

const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase())

console.log(text.indexOf("t"))

const person = {
    name: "Rodox",
    age: 37,
    job: "programador"
}

console.log(person)

console.log(person.name)
console.log(person.age)
console.log(person.job)

console.log(typeof person.name)
console.log(typeof person.age)
console.log(typeof person.job)

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
}

console.log(car)
car.doors = 4;
console.log(car)

delete car.km 
console.log(car)

const obj ={
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: [],
}
console.log(obj2 instanceof Object)

Object.assign(obj2, obj)

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(person))


const users = ["Rodox", "Pedro", "Miguel", "Solange", "Episcopaulo"]

for(let i = 0; i<users.length;i++){
    console.log(`Listando usuários ${users[i]}`)
}

const array = ["a", "b", "c"]
array.push("d")

console.log(array)
console.log(array.length)

array.pop()
const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)
console.log(array.length)

array.push("Dá", "para", "inserir", "vários")

console.log(array)

const letters = ["a", "b", "c"]
const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("z", "x", "y")
letters.unshift("p")
console.log(letters)

const myElements = ["morango", "maça", "abacate", "Pera", "abacate"]

console.log(myElements.indexOf("maça"))
console.log(myElements.indexOf("abacate"))
console.log(myElements[2])

console.log(myElements[myElements.indexOf("abacate")])

console.log(myElements.lastIndexOf("abacate"))

