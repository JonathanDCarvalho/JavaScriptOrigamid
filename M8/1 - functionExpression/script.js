// Function Declaration
// São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.

function somarDeclaration(a, b) {
	return a + b;
}

console.log(somarDeclaration(2, 4));

// Function Expression
// É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

const somarExpression = function (a, b) {
	return a + b;
};

console.log(somarExpression(5, 6));

// Hoisting
// Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.

// Arrow Function

const somarArrow = (a, b) => a + b;
const quadrado = (a) => a * a;

console.log(somarArrow(10, 15));
console.log(quadrado(4));

// Estrutura / Preferência
// Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

function dividir(a, b) {
	return a / b;
}

// IIFE - Immediately Invoked Function Expression
// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

const instrumento = "Violão";

(() => {
	console.log(instrumento);
})();

console.log(instrumento);

// Exercícios:

// Remova o erro
const priceNumber = (n) => Number(n.replace("R$ ", "").replace(",", "."));
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const instrumentos = ["Guitarra", "Baixo", "Violão", "Flauta"];

(() => {
	const nome = "Jonathan";
	console.log(nome);
	instrumentos.forEach((element) => {
		console.log(element);
	});
})();

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
	console.log("Teste de Active");
});
