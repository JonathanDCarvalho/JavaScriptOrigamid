// Factory Function
// São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.

function createButton(text) {
	function element() {
		const buttonElement = document.createElement("button");
		buttonElement.innerText = text;
		return buttonElement;
	}
	return {
		text,
		element,
	};
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

console.log(btnComprar, btnVender);

// Métodos / Variáveis Privadas
// Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.

function criarPessoa(nome, sobrenome) {
	const nomeCompleto = `${nome} ${sobrenome}`; // variável privada

	function andar() {
		return `${nomeCompleto} andou`;
	}

	function nadar() {
		return `${nomeCompleto} nadou`;
	}

	return Object.freeze({
		nome,
		sobrenome,
		andar,
		nadar,
	});
}

const designer = criarPessoa("Jonathan", "Carvalho");

// Ice Factory
// Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.

// Constructor Function / Factory Function
// Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.

function Pessoa(nome) {
	if (!(this instanceof Pessoa)) return new Pessoa(nome);

	this.nome = nome;
}

Pessoa.prototype.andar = function () {
	return `${this.nome} andou`;
};

const designer2 = Pessoa("André");
console.log(designer2);

// Exemplo Real

function $$(selectedElements) {
	const elements = document.querySelectorAll(selectedElements);

	function hide() {
		elements.forEach((element) => {
			element.style.display = "none";
		});
		return this;
	}

	function show() {
		elements.forEach((element) => {
			element.style.display = "initial";
		});

		return this;
	}

	function on(onEvent, callback) {
		elements.forEach((element) => {
			element.addEventListener(onEvent, callback);
		});

		return this;
	}

	function addClass(className) {
		elements.forEach((element) => {
			element.classList.add(className);
		});

		return this;
	}

	function removeClass(className) {
		elements.forEach((element) => {
			element.classList.remove(className);
		});

		return this;
	}

	return {
		elements,
		hide,
		show,
		on,
		addClass,
		removeClass,
	};
}

const btns = $$("button");
console.log(btns.hide().show());

function handleClick(e) {
	console.log(e.target);
	btns.addClass("active");
}

btns.on("click", handleClick);
