// Function

// Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

const perimento = new Function("lado", "return lado * 4");
console.log(perimento(5));

// Propriedades
// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.

function somar(n1, n2) {
	return n1 + n2;
}

console.log(somar.length);
console.log(somar.name);

// function.call
// function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

function darOi() {
	console.log("Oi para você");
}

darOi.call();

const carro = {
	marca: "Ford",
	ano: 2018,
};

function descricaoCarro() {
	console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

// This
// O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Uva", "Pêra"];

carros.forEach.call(carros, (item) => {
	console.log(item);
});

// Exemplo Real

function Dom(seletor) {
	this.element = document.querySelector(seletor);
}

// Dom.prototype.ativo = function (classe) {
// 	console.log(this);
// 	this.element.classList.add(classe);
// };

// const ul = new Dom("ul");

// const li = {
// 	element: document.querySelector("li"),
// };

// ul.ativo.call(li, "ativo");

// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

console.log("-------------------");

// Array's e Call
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like).

Array.prototype.mostrarThis = function () {
	console.log(this);
};

Array.prototype.pop.call(frutas);

// Array-Like
// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

const li1 = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li1, (item) => {
	return item.classList.contains("ativo");
});

console.log(filtro);
console.log(li1);

// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [33, 2, 23, 45, 80, 73];

console.log(Math.max.apply(null, numeros));
console.log("-------------------");

// Apply vs Call
// A única diferença é a array como segundo argumento.

// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const filtrarLi = Array.prototype.filter.bind(li1, function (item) {
	return item.classList.contains("ativo");
});

console.log(filtrarLi());
console.log("-------------------");

const $ = document.querySelectorAll.bind(document);

// Argumentos e Bind
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

const carro1 = {
	marca: "Ford",
	ano: 2018,
	acelerar: function (aceleracao, tempo) {
		return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
	},
};

const honda = {
	marca: "Honda",
};

const acelerarHonda = carro1.acelerar.bind(honda);

console.log(carro1);

// Argumentos Comuns:
// Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
	return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);
console.log(imc(1.8, 70)); // 21.6
console.log(imc180(70)); // 21.6

// Exercícios:

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll("p");

// Solução 1:

// const novaArray = Array.from(p);
// const totalCaractere = novaArray.reduce((acc, item) => {
// 	return acc + item.innerText.length;
// }, 0);

// console.log(totalCaractere);

// Solução 2:

const totalCaractere = Array.prototype.reduce.call(
	p,
	function (acc, item) {
		return acc + item.innerText.length;
	},
	0,
);

console.log(totalCaractere);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElement(tag, classe, content) {
	const elemento = document.createElement(tag);
	classe ? elemento.classList.add(classe) : "";
	content ? (elemento.innerHTML = content) : "";
	return elemento;
}

console.log(createElement("li", "azul", "Esse é o conteúdo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const createH1 = createElement.bind(null, "h1", "titulo");
console.log(createH1("Título Principal"));
console.log(createH1("Cursos de JavaScript"));
