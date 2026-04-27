// Object

// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu protótipo.

const pessoa = new Object({
	nome: "Jonathan",
	idade: 24,
});

// Métodos de Object

// Object.create(obj, defineProperties)retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
	rodas: 4,
	init(valor) {
		this.marca = valor;
		return this;
	},
	acelerar() {
		return this.marca + " acelerou";
	},
	buzinar() {
		this.marca + " buzinou";
	},
};

const honda = Object.create(carro).init("Honda");
const ferrari = Object.create(carro).init("Ferrari");

// Object.assign()

// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
	acelerar() {
		return "acelerou";
	},
	buzinar() {
		return "buzinou";
	},
};

const moto = {
	rodas: 2,
	capacete: true,
};

Object.assign(moto, funcaoAutomovel);
console.log(moto);

const moto2 = {
	capacete: true,
};

const moto3 = {
	capacete: true,
};

// Object.defineProperties()

// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

Object.defineProperties(moto2, {
	rodas: {
		value: 2,
		configurable: false, // não deixa excluir a propriedade rodas
		writable: false, // não deixa mudar o valor da propriedade rodas
		enumerable: false,
	},
});

moto2.rodas = 5;

// get e set

// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

Object.defineProperties(moto3, {
	rodas: {
		get() {
			return this._rodas;
		},
		set(valor) {
			this._rodas = valor * 4;
		},
	},
});

console.log("---------------------");

// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptor(window, "innerHeight"));

console.log("---------------------");

// Object.keys(obj), Object.values(obj) Object.entries(obj)

// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

console.log(Object.keys(Array));
console.log(Object.values(moto));
console.log(Object.entries(moto));

console.log("---------------------");

// Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Function.prototype));

console.log("---------------------");

// Object.getPrototypeOf() e Object.is()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ["Banana", "Maçã"];
const novaFruta = frutas;

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);
console.log("---------------------");
console.log(Object.is(frutas, novaFruta));
console.log("---------------------");

// Object.freeze(), Object.seal(), Object.preventExtensions()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro2 = {
	marca: "Ford",
	ano: 2018,
};

Object.freeze(carro2);
// Object.seal(), impede que delete ou adicione propriedades, mas deixa editar as propriedades

// Object.preventExtensions(), mesma coisa do seal, porém permite deletar

carro2.marca = "Honda";
console.log(carro2);
console.log(Object.isFrozen(carro2)); // verifica se o objecto está congelado
console.log(Object.isExtensible(carro2));
console.log(Object.isSealed(carro2));
console.log("---------------------");

// Propriedades e Métodos do Protótipo:

// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')

// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

console.log(frutas.hasOwnProperty("map")); // false
console.log(Array.hasOwnProperty("map")); // false
console.log(Array.prototype.hasOwnProperty("map")); // true

console.log("---------------------");

// {}.isPrototypeOf(valor)
// Verifica se é o protótipo do valor passado.

console.log(Array.prototype.isPrototypeOf(frutas));
console.log("---------------------");

// {}.toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

console.log(frutas.toString());

console.log(Object.prototype.toString.call(frutas));

console.log("---------------------");

// Exercícios:

// Crie uma função que verifique
// corretamente o tipo de dado

function verificaDado(dado) {
	return Object.prototype.toString.call(dado);
}

console.log(verificaDado(10));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
	area() {
		return this.lado * this.lado;
	},
};

// Object.freeze(quadrado);

Object.defineProperties(quadrado, {
	lado: {
		value: 4,
		configurable: false, // não deixa excluir a propriedade lado
		writable: false, // não deixa mudar o valor da propriedade lado
		enumerable: false,
	},
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
	width: 800,
	height: 600,
	background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
