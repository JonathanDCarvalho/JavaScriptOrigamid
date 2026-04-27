// Constructor Function

// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

// const carro = {
//   marca: "Honda",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = "Fiat";
// fiat.preco = 3000;

// carro, fiat e honda apontam para o mesmo objeto.

// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("Honda", 4000);
const fiat = new Carro("Fiat", 2000);

// new Keyword
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

// Parâmetros e Argumentos
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.

// this Keyword
// O this faz referência ao próprio objeto construído com a Constructor Function

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);

// Exemplo Real

// const Dom = {
//   seletor: "li",
//   elemento() {
//     return document.querySelectorAll(this.seletor);
//   },
//   adicionaClasse(e) {
//     e.currentTarget.classList.add("ativo");
//   },
//   ativar() {
//     const elementoSelecionado = this.elemento();
//     elementoSelecionado.forEach((element) => {
//       element.addEventListener("click", this.adicionaClasse);
//     });
//   },
// };

// Dom.ativar();

function Dom(seletor) {
  this.elemento = function () {
    return document.querySelectorAll(seletor);
  };
  this.adicionaClasse = function (e) {
    e.currentTarget.classList.add("ativo");
  };
  this.ativar = function () {
    const elementoSelecionado = this.elemento();
    elementoSelecionado.forEach((element) => {
      element.addEventListener("click", this.adicionaClasse);
    });
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
ul.ativar();
li.ativar();

console.log("----------------");

// Exercícios:

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${this.nome} Andou`);
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom2(seletor) {
  this.elements = function () {
    return document.querySelectorAll(seletor);
  };
  const elementos = this.elements();
  this.addClass = function (classe) {
    elementos.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementos.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const lista = new Dom2('li');