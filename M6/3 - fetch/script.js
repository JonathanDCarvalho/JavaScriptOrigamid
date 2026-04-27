// Fetch API

// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

// const doc = fetch("./doc.txt");
// doc.then((r) => {
// 	return r.text().then((body) => {
// 		const conteudo = document.querySelector(".conteudo");
// 		conteudo.innerText = body;
// 	});
// });

// console.log(doc);

// Response
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

// .json()
// Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.

// const cep = fetch("https://viacep.com.br/ws/13059690/json/");
// cep.then((response) => {
// 	return response.json().then((body) => {
// 		console.log(body);
// 		const conteudo = document.querySelector(".conteudo");
// 		conteudo.innerText = body.logradouro;
// 	});
// });

//.text()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

// const styles = fetch("./style.css");

// styles.then((response) => {
// 	return response.text().then((body) => {
// 		const conteudo = document.querySelector(".conteudo");
// 		const style = document.createElement("style");
// 		style.innerHTML = body;
// 		conteudo.appendChild(style);
// 	});
// });

// HTML e .text()
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.

// const sobre = fetch("./sobre.html");
// const div = document.createElement("div");
// console.log(div);
// sobre.then((response) => {
// 	return response.text().then((body) => {
// 		div.innerHTML = body;
// 		const titulo = div.querySelector("h1");
// 		document.querySelector("h1").innerText = titulo.innerText;
// 		console.log(titulo);
// 	});
// });

// .blob()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

// const imagem = fetch("./imagem.jpg");

// imagem.then((response) => {
// 	return response.blob().then((body) => {
// 		const blobUrl = URL.createObjectURL(body);
// 		const imagemDom = document.querySelector("img");
// 		imagemDom.src = blobUrl;
// 		imagemDom.alt = "Raposa";
// 	});
// });

// .clone()
// Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.

// const viacep = fetch("https://viacep.com.br/ws/13059690/json/");

// viacep
// 	.then((response) => {
// 		const r2 = response.clone();
// 		response.text().then((text) => {
// 			console.log(text);
// 		});
// 		r2.json().then((json) => {
// 			console.log(json);
// 		});
// 	})
// 	.then((body) => {
// 		console.log(body);
// 	});

// .headers
// É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

// const viacep2 = fetch("https://viacep.com.br/ws/13059690/json/");

// viacep2.then((response) => {
// 	response.headers.forEach(console.log);
// 	console.log(response.status);
// 	console.log(response.url);
// 	console.log(response.type);
// });

// .status e .ok
// Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

// url e type
// .url retorna o url da requisição. .type retorna o tipo da reposta.

// type:
// cors = requisição feita pra um servidor externo, porém ela é permitida
// basic = requisição feita de um servidor interno (seu servidor)

// Exercícios:

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector("#cep");
const btncep = document.querySelector("#btncep");
const resultadoCep = document.querySelector(".resultadoCep");

btncep.addEventListener("click", handleClick);
function handleClick(e) {
	e.preventDefault();
	const cep = inputCep.value;
	buscaCep(cep);
}

function buscaCep(cep) {
	fetch(`https://viacep.com.br/ws/${cep}/json`).then((response) =>
		response.text().then((body) => {
			resultadoCep.innerText = body;
		}),
	);
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
	fetch("https://blockchain.info/ticker")
		.then((response) => response.json())
		.then((btcJson) => {
			btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
		});
}
// setInterval(fetchBtc, 1000 * 30);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector(".proxima");
const piadaP = document.querySelector(".piada");

function puxarPiada() {
	fetch("https://api.chucknorris.io/jokes/random")
		.then((response) => response.json())
		.then((body) => {
			piadaP.innerText = body.value;
		});
}

btnProxima.addEventListener("click", puxarPiada);
