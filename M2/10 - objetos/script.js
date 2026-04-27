// Objetos
// Conjunto de variáveis e funções, que são chamados de propriedades e métodos.

var pessoa = {
  nome: "Jonathan",
  idade: 24,
  profissao: "Desenvolvedor Júnior",
  possuiFaculdade: true,
};

// Métodos
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimento: function (lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

// Objetos servem para organizar o código em pequenas partes reutilizáveis.

// Dot Notation Get: Acesso as propriedades do objeto utilizando 'ponto' '.'

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

console.log(menu.backgroundColor);

// Protótipo e Herança
// O objeto herda propriedade e métodos do objeto que foi utilizado para criar o mesmo.

// --------------------------------------- //

// Exercício:

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var meusDados = {
  nome: "Jonathan",
  sobrenome: "Carvalho",
  idade: 24,
  endereco: {
    cidade: "Campinas",
    estado: "SP",
  },
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(meusDados.endereco.cidade);

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(meusDados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var tipoCachorro = {
  id: 1,
  animal: "cachorro",
  raca: "labrador",
  idade: 10,
  cor: "preto",
  late(genero) {
    if (genero === "homem") {
      return "auau";
    } else {
      return "Não é um homem";
    }
  },
};

console.log(tipoCachorro.late("mulher"));

// --------------------------------------- //

// Tudo é objeto

// Strings, Numbers, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = "Jonathan";

nome.length; // 5
nome.charAt(1); // 'o'
nome.replace("na", "ra"); // Jorathan

// uma string herda propriedades e métodos do construtor String();

// Elementos do DOM

var link = document.querySelector(".btn");

link.addEventListener("click", function () {
  console.log("Oi");
});

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM

// Objetos revolucionaram a programação
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// Exercícios:

// nomeie 3 propriedades ou métodos de strings
var texto = 'Meu texto'
var texto2 = " Meu outro texto"
console.log(texto.length);
console.log(texto.concat(texto2));
console.log(texto.toUpperCase());

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// addEventListener
// appendChild
// innerHTML
// id
// innerText
// classList

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
