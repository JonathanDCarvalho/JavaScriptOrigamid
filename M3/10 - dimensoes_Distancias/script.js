// Dimensões e Distâncias

// Height e Width
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

// clientHeight = height + padding
// offsetHeight = height + padding + border
// scrollHeight = height total, mesmo dentro de scroll

const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais);

console.log(listaAnimais.clientHeight);
console.log(listaAnimais.offsetHeight);
console.log(listaAnimais.scrollHeight);

console.log("-----------------");

// offsetTop e offsetLeft.
// offsetTop = distância entre o topo do elemento e o topo da página.
// offsetLeft = distância entre o canto esquerdo do elemento e o canto esquerdo da página.

const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;
console.log(animaisTop);
console.log(animaisLeft);

console.log("-----------------");

// getBoundingClientRect()

// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const primeiroh2 = document.querySelector("h2");

const rect = primeiroh2.getBoundingClientRect();

if (rect.top < 0) {
  console.log("Passou do elemento");
}

console.log("-----------------");

// Window
// innerWidth
// innerHeight

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset,
);

// Essa forma não é a ideal para se usar. O ideal é a próxima forma abaixo.
if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

console.log("-----------------");

// matchMedia();
// Utiliza um media-querie como no CSS para verificar a largura do browser.

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário Mobile");
} else {
  console.log("Usuário Desktop");
}

console.log(small);

console.log("-----------------");

// Exercícios:

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

console.log("-----------------");

// Retorne a soma da largura de todas as imagens

const todasImagens = document.querySelectorAll("img");
let total = 0;
const Alllargura = todasImagens.forEach((img) => {
  const largura = img.offsetWidth;
  total += largura;
});
console.log(total);

console.log("-----------------");

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const allLinks = document.querySelectorAll("a");
allLinks.forEach((link, index) => {
  const allValues = link.getBoundingClientRect();
  const allWidth = allValues.width;
  const allHeight = allValues.height;

  if (allWidth >= 48 && allHeight >= 48) {
    console.log(
      `link ${index + 1}: Largura e Altura aprovadas pelo Google em Sistemas Mobile`,
    );
  } else {
    console.log(
      `link ${index + 1}: Largura e Altura reprovadas pelo Google em Sistemas Mobile`,
    );
  }
});

console.log("-----------------");

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small2 = window.matchMedia("(max-width: 719px)").matches;
const menu = document.querySelector(".menu");

if (small2) {
  menu.classList.toggle("menu-mobile");
}

console.log(menu);

console.log("-----------------");
