// Array

// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

console.log(dados[2]("Ford"));
console.log(dados[1][2].cor); // azul

// Construção de Arrays
// Toda array herda os métodos e propriedades do protótipo do construtor Array.

const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";
console.log(carros.length); // 11

console.log("----------------------");

// Array.from()
// Array.from() é um método utilizado para transformar array-like objects, em uma array.

const li = document.querySelectorAll("li");
console.log(li);
const arrayLi = Array.from(li); // Array
console.log(arrayLi);

// construindo uma array-like

const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 3,
};

const arrayObj = Array.from(obj);
console.log(obj);

console.log("----------------------");

// isArray()
// Verifica se o valor passado é uma array e retorna um valor booleano.
console.log(Array.isArray(obj)); // false porque é array-like
console.log(Array.isArray(arrayObj)); // true

console.log("----------------------");

// Array.of(), Array(), new Array()
// A palavra chave new não é necessária para utilizar o construtor Array.

console.log(Array.of(10)); // [10]
console.log(Array.of(1, 2, 3, 4)); // [1,2,3,4]
console.log(new Array(5)); // [,,,,]
console.log(Array(5)); // [,,,,]
console.log(Array(1, 2, 3, 4)); // [1,2,3,4]

console.log("----------------------");

// Propriedades e Métodos do Prototype

// length = retorna o tamanho da array.
const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
console.log(frutas.length); // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2

console.log("----------------------");

// Métodos Modificadores

// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original.

// [].sort() = organiza a pelo unicode.

console.log(instrumentos.sort()); // organiza em ordem alfabética

const idades = [32, 21, 33, 43, 1, 12, 8];

console.log(idades.sort()); // // [1, 12, 21, 32, 33, 43, 8]
// não modifica certo na ordem do números e sim de caracter.

console.log("----------------------");

// unshift() e push()
// [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros1 = ["Ford", "Fiat", "VW"];
carros1.unshift("Honda", "Kia"); // 5
console.log(carros1); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros1.push("Ferrari"); // 6
console.log(carros1); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

console.log("----------------------");

// shift() e pop()
// [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

const primeiroCarro = carros1.shift(); // 'Honda'
console.log(carros1); // ['Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

const ultimoCarro = carros1.pop(); // 'Ferrari'
console.log(carros1); // ['Kia', 'Ford', 'Fiat', 'VW'];

console.log("----------------------");

// reverse()
// [].reverse() inverte os itens da array e retorna a nova array.

carros1.reverse(); // ['VW', 'Fiat', 'Ford', 'Kia']
console.log(carros1); // ['VW', 'Fiat', 'Ford', 'Kia']

console.log("----------------------");

// splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

carros1.splice(1, 0, "Lamburguini", "Camaro");
console.log(carros1); // ['VW', 'Lamburguini', 'Camaro', 'Fiat', 'Ford', 'Kia']

carros1.splice(4, 2, "Exemplo1", "Exemplo2");
console.log(carros1); // ['VW', 'Lamburguini', 'Camaro', 'Fiat', 'Exemplo1', 'Exemplo2']

console.log("----------------------");

// copyWithin()
// [].copyWithin(alvo, inicio, final)a partir do alvo, ele irá copiar um array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele deverá usar como inicio o 0 e final o valor total do array.

console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(-1));

console.log("---------------------");

// fill()
// [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana"));
// ['Banana', 'Banana', 'Banana', 'Banana']

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2));
// ['Item1', 'Item2', 'Banana', 'Banana']

console.log(["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3));
// ['Item1', 'Banana', 'Banana', 'Item4']

console.log("---------------------");

// Métodos de Acesso
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada.

// .concat()
// [].concat() irá concatenar a array com o valor passado.

const transportes1 = ["Barco", "Avião"];
const transportes2 = ["Carro", "Moto"];
const transportesAll = transportes1.concat(transportes2, "Vans");
console.log(transportesAll);

console.log("---------------------");

// [].includes(), [].indexOf() e [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ["html", "css", "js", "php", "python", "js"];

console.log(linguagens.includes("css")); // true
console.log(linguagens.includes("ruby")); // false
console.log(linguagens.indexOf("python")); // 4
console.log(linguagens.indexOf("js")); // 2
console.log(linguagens.lastIndexOf("js")); // 5

console.log("---------------------");

// join();
// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

console.log(linguagens.join()); // 'html,css,js,php,python'
console.log(linguagens.join(" ")); // 'html css js php python'
console.log(linguagens.join("-_-")); // 'html-_-css-_-js-_-php-_-python'
let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

console.log("---------------------");

// .slice()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

console.log(linguagens.slice(3)); // ['php', 'python, js']
console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice(); // tecnica comum de clonar array's

console.log("---------------------");

// Exercícios:

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const firstValue = comidas.shift();
console.log(firstValue);
console.log("---------------------");
// Remova o último valor de comidas e coloque em uma variável
const lastValue = comidas.pop();
console.log(lastValue);
console.log("---------------------");
// Adicione 'Arroz' ao final da array
const addArroz = comidas.push("Arroz");
console.log(comidas);
console.log("---------------------");
// Adicione 'Peixe' e 'Batata' ao início da array
const addFirst = comidas.unshift("Peixe", "Batata");
console.log(comidas);
console.log("---------------------");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
console.log("---------------------");
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
console.log("---------------------");
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
console.log("---------------------");
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));
console.log("---------------------");

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
console.log(html.split("section").join("ul").split("div").join("li"));
console.log("---------------------");

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice();
console.log(cloneCarros);
cloneCarros.pop();
console.log(cloneCarros);
console.log(carros);
