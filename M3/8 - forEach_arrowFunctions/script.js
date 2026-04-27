// forEach e Arrow Function

// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach

const imgs = document.querySelectorAll("img");

console.log("-----------------------");

// Parâmetros do forEach
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array.

imgs.forEach((img, indice, array) => {
  console.log(img);
});

console.log("-----------------------");

// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array usando Array.from()

const titulos = document.getElementsByClassName("titulo");
console.log(titulos);

const titulosArray = Array.from(titulos);
console.log(titulosArray);

titulosArray.forEach((titulo) => {
  console.log(titulo);
});

console.log("-----------------------");

// Arrow Function
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs2 = document.querySelectorAll('img');
imgs2.forEach((img) => {
    console.log(img)
});
// Método Arrow Function (=>)

console.log("-----------------------");

imgs2.forEach((img) => console.log(img));
// Quando só tiver uma linha de código na função podemos retornar direto em uma linha tudo junto sem quebrar com as chaves. Igual uma função normal.

console.log("-----------------------");

// Exercícios:

// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p');
allP.forEach((p) => console.log(p));

console.log("-----------------------");

// Mostre o texto dos parágrafos no console
const allTextP = document.querySelectorAll('p');
allTextP.forEach((text) => console.log(text.innerText));

console.log("-----------------------");

// Como corrigir os erros abaixo:
const imgs3 = document.querySelectorAll('img');

imgs3.forEach((item, index) => {
  console.log(item, index);
});

console.log("-----------------------");

let i = 0;
imgs3.forEach(() => {
  console.log(i++);
});

console.log("-----------------------");

imgs3.forEach(() => i++);

