// Rest e Spread

// Parâmetros
// Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.

function perimetroForma(lado, totalLados = 4) {
	const argArray = Array.from(arguments);
	argArray.forEach((arg) => {
		console.log(arg);
	});
	console.log(argArray);
	return lado * totalLados;
}

perimetroForma(10, 20);

console.log("--------------------");

// Arguments
// A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.

// Parâmetro Rest
// É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.

// Só é possível ter um único parâmetro rest e ele deve ser o último.
function anunciarGanhadores(...ganhadores) {
	ganhadores.forEach((ganhador) => {
		console.log(ganhador + " ganhou.");
	});
}

const ganhadores = ["Pedro", "Marta", "Maria"];
anunciarGanhadores(...ganhadores);

console.log("--------------------");

// Rest vs Arguments
// Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.

// Operador Spread
// Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, "Pizza", ...legumes];
console.log(comidas);

console.log("--------------------");

// Spread Argument
// O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMax = Math.max(...listaNumeros);
console.log(numeroMax);

console.log("--------------------");

// Transformar em Array
// É possível transformar itens iteráveis em uma array real com o spread.

const btns = document.querySelectorAll("button");
const btnsArray = [...btns];
console.log(btnsArray);

const frase = "Isso é JavaScript";
const fraseArray = [...frase];

console.log(fraseArray);

console.log("--------------------");

// Exercícios
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color = "red") {
	const buttonElement = document.createElement("button");
	buttonElement.innerText = "Comprar2";
	buttonElement.style.background = background;
	buttonElement.style.color = color;
	return buttonElement;
}

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas1 = ["Banana", "Uva", "Morango"];
const comidas1 = ["Pizza", "Batata"];
comidas1.push(...frutas1);
console.log(comidas1);
