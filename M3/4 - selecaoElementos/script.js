// Seleção de Elementos

// ID
// getElementById seleciona e retorna elementos do DOM (método antigo)

// Seleciona pelo ID
const animais = document.getElementById("animais");
console.log(animais);

console.log("-------------------");

// Classe e Tag

// getElementByClassName e getElementByTagName
// selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
// Seleciona todas as UL's retorna uma HTMLColletion
const ul = document.getElementsByTagName("ul");
console.log(ul);
// Retorna o primeiro Elemento

console.log("-------------------");

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinam com o seu seletor CSS.

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

console.log("-------------------");

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

console.log("-------------------");

const linkInternos = document.querySelector("[href^='#']");
console.log(linkInternos);

console.log("-------------------");

// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
console.log(animaisImg[0]);

console.log("-------------------");

// HTMLColletion vs NodeList

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

console.log("-------------------");

// Array-Like
// HTMLColletion e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo existe apenas em NodeList.

gridSectionNode.forEach((item) => {
  console.log(item);
});

console.log("-------------------");

// Transforma array-like em array (Arrays são estáticas).
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

console.log("-------------------");

// Exercícios:

// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll("img");
console.log(allImages);
allImages.forEach((img) => {
  console.log(img);
});

console.log("-------------------");

// Retorne no console apenas as imagens que começaram com a palavra imagem

const allImagesName = document.querySelectorAll('img[src^="img/imagem"]');
console.log(allImagesName);
allImagesName.forEach((imgName) => {
  console.log(imgName);
});

console.log("-------------------");

// Selecione todos os links internos (onde o href começa com #)
const allLinksIntern = document.querySelectorAll('a[href^="#"]');
console.log(allLinksIntern);
allLinksIntern.forEach((link) => {
  console.log(link);
});

console.log("-------------------");

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

console.log("-------------------");

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]); // Legal

console.log("-------------------");