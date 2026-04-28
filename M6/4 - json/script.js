// JSON
// JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

// {
//   "id": 1,
//   "nome": "Andre",
//   "email": "andre@origamid.com"
// }

// Valores
// Os valores podem ser números, strings, boolean, arrays, objetos e null.

// {
//   "id": 1,
//   "faculdade": true,
//   "pertences": [
//     "lapis",
//     "caneta",
//     "caderno"
//   ],
//   "endereco": {
//     "cidade": "Rio de Janeiro",
//     "pais": "Brasil"
//   },
//   "casado": null
// }

// Arrays e Objetos
// É comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array.

// [
//   {
//     id: 1,
//     aula: 'JavaScript',
//     tempo: '25min',
//   },
//   {
//     id: 2,
//     aula: 'HTML',
//     tempo: '15min',
//   },
//   {
//     id: 3,
//     aula: 'CSS',
//     tempo: '10min',
//   },
// ];

fetch("./dados.json")
	.then((response) => {
		return response.text();
	})
	.then((jsonText) => {
		const jsonFinal = JSON.parse(jsonText);
		// console.log(jsonFinal);
	});

// JSON.parse() e JSON.stringify()
// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.

const configuracoes = {
	player: "Google",
	tempo: 25.5,
	aula: "2.1 JavaScript",
};

const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);

// console.log(JSON.parse(stringConfig));

// Exemplo Real
localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));
