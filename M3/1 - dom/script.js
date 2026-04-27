// DOM
// Document Object Model (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// window é o objeto global do browser
// possui diferentes métodos e propriedades

// window.alert('Bianca é uma arrombada');
const href = window.location.href
console.log(href);

// window e document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades

const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);

// Node
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

// Exercício:

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroElemento = document.querySelector('.ativo');
console.log(primeiroElemento);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);