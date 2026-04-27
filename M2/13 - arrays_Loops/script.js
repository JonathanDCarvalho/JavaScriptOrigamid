// Arrays e Loops

// Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["Switch", "PS4", "Xbox"];

console.log(videoGames[0]);
console.log(videoGames.pop()); // Remove o último item da array e retorna ele
console.log(videoGames.push("3DS")); // Adiciona um item ao final do array
console.log(videoGames);
console.log(videoGames.length);
console.log("---------------");

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais a frente.

// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.

var number = 10;

for (let i = 0; i <= number; i++) {
  console.log(i);
}

// o for loop possui 3 partes.
// inicio, condição e incremento.

console.log("---------------");

// While Loop
var j = 0;
while (j <= number) {
  console.log(j);
  j++;
}

console.log("---------------");

// Arrays e Loops
var sabrina = ["Bruxa", "Salem", "Molhada"];

for (let item = 0; item < sabrina.length; item++) {
  console.log(sabrina[item]);
}

console.log("---------------");

// Break
// o loop irá parar caso encontrar a palavra break

for (let y = 0; y < videoGames.length; y++) {
  console.log(videoGames[y]);
  if (videoGames[y] === "PS4") {
    break;
  }
}

console.log("---------------");

// forEach
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

videoGames.forEach((item) => {
  console.log(item);
});

console.log("---------------");

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];

frutas.forEach((frutas, index, array) => {
  console.log(frutas, index, array);
});

console.log("---------------");

// Exercícios:

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anosCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anosCopa.forEach((ano) => {
  console.log(`O brasil ganhou a copa de ${ano}`);
});

console.log("---------------");

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

console.log("---------------");

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta);

console.log("---------------");