// Loops e Iterable

// Iterable
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.

const frutas = ["Banana", "Morango", "Uva"];
console.log(frutas);
const frase = "Isso é JavaScript";
console.log(frase.__proto__);

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) => console.log(headers));

// for...of
// É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

for (const fruta of frutas) {
	console.log(fruta);
}

console.log("---------------");

for (const char of frase) {
	console.log(char);
}

// Spread e for...of
// Com o for loop podemos manipular cada um dos elementos do objeto iterável.

// Spread só pode ser utilizado em objetos iteráveis.

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
	btn.style.color = "blue";
}

console.log(...buttons); // console log em cada um dos botões.

// Apenas Iteráveis
// O for...of não irá funcionar em um objeto comum que não seja iterável.

const carro = {
	marca: "Civic",
	ano: 2018,
};

// for (const chave of carro) {
// 	console.log(chave);
// }

console.log("------------------------");

// for...in
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

Object.defineProperties(carro, {
	rodas: {
		value: 4,
		enumerable: false,
	},
});

for (const prop in carro) {
	console.log(prop, carro[prop]);
}

// for...in só vai puxar todas as propriedades (chaves) do objeto que foram enumerable = true

console.log("------------------------");

// Array e for...in
// Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

for (const f in frutas) {
	console.log(f, frutas[f]);
}

console.log("------------------------");

// Chave e Valor
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.

const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
	console.log(`${style}: ${btnStyles[style]}`);
}

console.log("------------------------");

// Do / While
// Outro tipo de loop é o Do / While. Não é muito utilizado.

let i = 0;
do {
	console.log(i++);
} while (i <= 5);

console.log("------------------------");

// Exercícios:

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const items = document.querySelectorAll("li");

for (const li of items) {
	li.classList.add("active");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const windowKey in window) {
	console.log(windowKey + ": " + window[windowKey]);
}
