// Eventos

// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector("img");
console.log(img);

// img.addEventListener('click', () => {
//     console.log('Clicou')
// });

// Callback
// É uma boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.

function callback(e) {
  console.log(e);
}

// img.addEventListener('click', callback);

// Event
// O primeiro parâmetro do callback é referente ao evento que ocorreu.

// Propriedades do Event

// currentTarget = this
// target = onde o clique ocorreu
// type = tipo do evento
// path = caminho

// const animaisLista = document.querySelector(".animais-lista");

// function callbackLista(e) {
//   console.log(e.currentTarget);
//   console.log(e.target);
//   console.log(e.type);
// }

// animaisLista.addEventListener("click", callbackLista);

// console.log("---------------");

// event.preventDefault()
// Previne o comportamento padrão do evento do browser. No caso de um link externo, por exemplo, irá prevenir que o link seja ativado.

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log(e.currentTarget);
// }

// linkExterno.addEventListener("click", handleLinkExterno);

// this
// A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

// const h1 = document.querySelector("h1");

// function handleEvent(e) {
//   console.log(e.type, e);
// }

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

// Keyboard
// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

// function handleKeyboard(e) {
//     if(e.key === 'i') {
//         document.body.classList.toggle('fullscreen');
//     }
// }

// window.addEventListener('keydown', handleKeyboard);

// forEach e Eventos
// O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

// const imgs = document.querySelectorAll('img');

// function handleImg(e) {
//     console.log(e.target.getAttribute('src'));
// }

// imgs.forEach((img) => {
//     img.addEventListener('click', handleImg);
// });

// Exercícios:

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinksInternos(e) {
  e.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  e.target.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLinksInternos);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");

function handleElement(e) {
  e.currentTarget.remove();
}

todosElementos.forEach((element) => {
  element.addEventListener("click", handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(e) {
  if (e.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
