// Array e Iteração

// forEach()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros = ["Ford", "Fiat", "Honda"];
carros.forEach((carro, index, array) => {
	console.log(carro);
	console.log(index);
	console.log(array);
	console.log("-----------------------");
});

// O método sempre retorna undefined

console.log("-----------------------");

// map()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const newCarros = carros.map((item) => "Carro " + item);
// const newCarros = carros.map((item) => {
//   return 'Carro ' + item;
// });
console.log(newCarros);
console.log(carros);

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2);
console.log(numeros);

console.log("-----------------------");

// map() vs forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// map() com objetos
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
	{
		nome: "HTML 1",
		min: 15,
	},
	{
		nome: "HTML 2",
		min: 10,
	},
	{
		nome: "CSS 1",
		min: 20,
	},
	{
		nome: "JS 1",
		min: 25,
	},
];

const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);
// [15, 10, 20, 25];

const puxarNomes = (aula) => aula.nome;

function puxarNomes2(aula) {
	return aula.nome;
}

const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

console.log("-----------------------");

// reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas1 = [10, 25, 30];

const reduceAulas = aulas1.reduce((acc, item, index, array) => {
	console.log(acc, item, index);
	return acc + item;
}, 0);

console.log(reduceAulas);

console.log("-----------------------");

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((acc, number) => (acc > number ? acc : number), 0);

console.log(maiorNumero);

console.log("-----------------------");

const aulas3 = [
	{
		nome: "HTML 1",
		min: 15,
	},
	{
		nome: "HTML 2",
		min: 10,
	},
	{
		nome: "CSS 1",
		min: 20,
	},
	{
		nome: "JS 1",
		min: 25,
	},
];

const listaAulas = aulas3.reduce((acumulador, atual, index) => {
	acumulador[index] = atual.nome;
	return acumulador;
}, {});

console.log(listaAulas);

console.log("-----------------------");

// reduceRight()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas = ["Banana", "Pêra", "Uva", ""];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

console.log("-----------------------");

// some() (OU)
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const temUva = frutas.some((item) => {
	return item === "Uva";
});

console.log(temUva);

console.log("-----------------------");

// every() (E)
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const every = frutas.every((item) => {
	return item;
});

console.log(every);

console.log("-----------------------");

const numeros1 = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros1.every((n) => n > 7);
console.log(maiorQue3);

console.log("-----------------------");

// find() e findIndex()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const indexUva = frutas.findIndex((item) => {
	return item === "Uva";
});

console.log(indexUva);

console.log("-----------------------");

const findFruta = frutas.find((item) => {
	return item;
});

console.log(findFruta);

console.log("-----------------------");

// filter()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas.filter((fruta) => {
	return fruta;
}); // ['Banana', 'Uva', 'Maçã']

console.log(arrayLimpa);
console.log("-----------------------");

const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros3.filter((x) => x > 45); // [88, 101]
console.log(buscaMaior45);
console.log("-----------------------");

const aulas2 = [
	{
		nome: "HTML 1",
		min: 15,
	},
	{
		nome: "HTML 2",
		min: 10,
	},
	{
		nome: "CSS 1",
		min: 20,
	},
	{
		nome: "JS 1",
		min: 25,
	},
];

const aulasMaiores = aulas2.filter((aula) => {
	return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

console.log(aulasMaiores);
console.log("-----------------------");

// Exercícios:

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
	const titulo = curso.querySelector("h1").innerText;
	const descricao = curso.querySelector("p").innerText;
	const aulas = curso.querySelector(".aulas").innerText;
	const horas = curso.querySelector(".horas").innerText;
	return {
		titulo,
		descricao,
		aulas,
		horas,
	};
});

console.log(objetosCurso);
console.log("-----------------------");

// Retorne uma lista com os
// números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];
console.log(numeros4.filter((x) => x > 100));

console.log("-----------------------");

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

console.log(instrumentos.some((instrumento) => instrumento === "Baixo"));

// Retorne o valor total das compras
const compras = [
	{
		item: "Banana",
		preco: "R$ 4,99",
	},
	{
		item: "Ovo",
		preco: "R$ 2,99",
	},
	{
		item: "Carne",
		preco: "R$ 25,49",
	},
	{
		item: "Refrigerante",
		preco: "R$ 5,35",
	},
	{
		item: "Quejo",
		preco: "R$ 10,60",
	},
	{
		item: "Arroz",
		preco: "R$ 50,90",
	},
];

const total = compras.reduce((acc, item) => {
	const valorLimpo = Number(item.preco.replace("R$", "").replace(",", ".").trim());
	return acc + valorLimpo;
}, 0);

console.log(total);
