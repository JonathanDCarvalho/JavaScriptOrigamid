console.log("Variáveis...")

// Variáveis: são responsáveis por guardar dados na memória, no javascript existem 3 maneiras de criar uma variável: var, let, const

// const = Não pode ser alterado o valor e nem redeclarada
// let = Não pode ser redeclarada mas pode ser alterada o valor
// var = pode ser redeclarada e pode ser alterado o valor, problema: vaza o valor nos escopos causando várias confusões, não é recomendado ser usado.

// Exemplos:

var nome = "Jonathan";
let nome2 = "Jonathan Carvalho"
const nome3 = "Jonathan Carvalho";

console.log(nome, nome2, nome3);

// Exercício:

// Declarar uma variável com o seu nome
var name = "Jonathan Carvalho";
// Declarar uma variável com a sua idade
var age = 24;
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var myFavoriteFood;
// Atribuir valor a sua comida favorita
myFavoriteFood = "Pizza"
// Declarar 5 variáveis diferentes sem valores
var valor1;
var valor2;
var valor3;
var valor4;
var valor5;

console.log(name);
console.log(age);
console.log(myFavoriteFood);
console.log({ valor1, valor2, valor3, valor4, valor5 })
