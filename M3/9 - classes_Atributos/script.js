// Classes e Atributos

// classList
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");
console.log(menu);

console.log(menu.classList); // Lista de classes de menu
menu.classList.add("ativo"); // Adicionou a classe ativo no menu
console.log(menu.classList);
menu.classList.toggle("azul"); // adiciona a classe azul se não tiver ou remove se tiver
console.log(menu.classList);
console.log(menu.classList.contains("azul")); // verifica se contem uma classe.

menu.classList.replace("azul", "vermelho"); // Método que substitui algo por outro nesse caso trocou a classe azul por vermelho
console.log(menu.classList);

// Existem o className também, mas é uma merda, caso tenha curiosidade pesquise. Método antigo.

console.log("------------------");

const animais = document.querySelector(".animais");
console.log(animais);

console.log(animais.attributes); // Lista de atributos NamedNodeMap
console.log(animais.attributes[0]);
console.log(animais.attributes.id);
console.log(animais.attributes["data-texto"]); // datasets

console.log("------------------");

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado.

const img = document.querySelector("img");
const srcImg = img.getAttribute("alt");
console.log(srcImg);

img.setAttribute("alt", "É uma Raposa");
console.log(img.getAttribute("alt"));

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);

const removeAlt = img.removeAttribute("alt");
console.log(img.getAttribute("alt"));

console.log("------------------");

// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}km`);
  },
};

// Exercícios:

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
  console.log(item, item.classList);
});

console.log("------------------");

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
  console.log(item, item.classList);
});

itensMenu[0].classList.add("ativo");

console.log("------------------");

// Verifique se as imagens possuem o atributo alt

const allImgs = document.querySelectorAll("img");
allImgs.forEach((img) => {
  const possuiTag = img.hasAttribute("alt");
  console.log(possuiTag);
});

console.log("------------------");

// Modifique o href do link externo no menu

const linkExterno = document.querySelectorAll('a[href^="https"]');
linkExterno.forEach((link) => {
  link.href = "https://www.google.com";
  console.log(link);
});

console.log("------------------");