// Prototype

// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return "Pessoa andou";
};

const jonathan = new Pessoa("Jonathan", 24);
console.log(jonathan.prototype);
console.log(Pessoa.prototype);

// Acesso ao Protótipo:
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Herança de Protótipo:
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

// toString(), isPrototypeOf(), valueOf(), etc...

// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

const pais = "Brasil";
const cidade = new String("Campinas");

pais.charAt(0); // B
cidade.charAt(0); // C

const listaAnimais = ["Dog", "Cat", "Horse"];

const lista = document.querySelectorAll("li");

// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log("------------------");

const carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

// Verifique o nome do construtor com .constructor.name

// Exercícios:

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

const joao = new Pessoas('João', 'Paulo', 18);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLCollection
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String

