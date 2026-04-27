// Traversing e Manipulação

const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

// Transversing
// Como navegar pelo DOM, utilizando suas propriedades e métodos.

// parentElement = pai

const lista = document.querySelector(".animais-lista");
console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

// Element vs Node
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

console.log(lista.childNodes);
console.log(lista.previousSibling);

// Manipulando Elementos
// É possível mover elementos no dom com métodos de Node.

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

contato.insertBefore(animais, mapa); // move para o final da lista
// insertBefore = insere a lista antes
// removeChild = remove da lista
// replaceChild = substitui por outro
contato.replaceChild(mapa, titulo);

// Novos Elementos
// Podemos criar novos elementos com o método createElemen()

const novoh1 = document.createElement('hi');
novoh1.innerText = "Novo Títutlo";
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);
console.log(novoh1);

// Clonar Elementos
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const primeiroh1 = document.querySelector('hi');
const faq = document.querySelector('.faq');

const cloneh1 = primeiroh1.cloneNode(true);
cloneh1.classList.add('azul');
faq.appendChild(cloneh1);

console.log('---------------------');

// Execícios:

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const novoMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');
copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDT = faq.querySelector('dt');
console.log(primeiroDT.innerText);

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;
console.log(proximoDD.innerText);

// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML;