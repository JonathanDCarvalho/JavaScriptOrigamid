// Number e Math

// Number
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018;
const preco = new Number(99);

console.log(ano);
console.log(preco);

console.log("----------------------");

// isNaN e isInteger
// isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral (inteiro).

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

console.log("----------------------");

// parseFloat() e parseInt()
// parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(parseFloat("10.90"));
console.log(parseInt("11.50"));
console.log(Number.parseFloat("10.80"));
console.log(Number.parseInt("10.75"));

// Float possui decimal, Integer não.
// parseInt recebe como segundo parâmetro o tipo do número, se é decimal, hexadecimal, etc..., basta passar como segundo parâmetro, caso não passe nada, por padrão ele vai usar o modelo 10(decimal);

console.log("----------------------");

// toFixed(decimais)
// Arredonda o número com base no total de casas decimais do argumento.
// além de arredondar ele retorna uma string ao invés de um número.

const preco1 = 2.99;
console.log(preco1.toFixed()); // 3

const carro = 1000.455;
console.log(carro.toFixed(2)); // 1000.46

const preco2 = 1499.49;
console.log(preco2.toFixed()); // 1499

console.log("----------------------");

// toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99;
console.log(preco3.toString()); // '2.99'

console.log("----------------------");

// toLocaleString(language, options)
// Formata o número de acordo com a língua e opções passadas.

const preco4 = 59.49;
console.log(
  preco4.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
);

console.log("----------------------");

// Math
// É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

// abs(), ceil(), floor(), round()

// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

console.log(Math.abs(-5.5)); // 5.5
console.log(Math.ceil(-3.4)); // - 3
console.log(Math.ceil(5.87)); // 6
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.floor(4.3)); // 4
console.log(Math.round(4.8)); // 5
console.log(Math.round(4.3)); // 4

console.log("----------------------");

// max(), min(), random()

// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

console.log(Math.max(5, 3, 10, 42, 2)); // 42
console.log(Math.min(5, 3, 10, 42, 2)); // 2

console.log(Math.random());
console.log(Math.floor(Math.random() * 100)); // entre 0 e 100
console.log(Math.floor(Math.random() * 500)); // entre 0 e 500

// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log("----------------------");

// Exercícios:

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

console.log("----------------------");

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const newNumbers = numeros.split(", ");
console.log(Math.max(...newNumbers)); // spreed;

console.log("----------------------");

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

let total = 0;
listaPrecos.forEach((preco) => {
  let format = Number(
    preco.toUpperCase().replace("R$ ", "").replace(",", ".").trim(),
  ).toFixed(2);
  format = Number(format);
  total += format;
});

const totalFormatado = total.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(totalFormatado);
