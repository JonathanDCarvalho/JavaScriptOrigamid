// Async Await

// A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

async function puxarDados() {
	const responseDados = await fetch("./dados.json");
	const jsonDados = await responseDados.json();

	document.body.innerText = jsonDados.aula;

	console.log(jsonDados.aula);
}

// then vs async
// A diferença é uma sintaxe mais limpa.

// Sintaxe mais complexa
function iniciarFetch() {
	fetch("./dados.json")
		.then((dadosResponse) => {
			return dadosResponse.json();
		})
		.then((dadosJSON) => {
			document.body.innerText = dadosJSON.aula;
			console.log(dadosJSON.aula);
		});
}

iniciarFetch();

// Sintaxe mais limpa
async function iniciarAsync() {
	const dadosResponse = await fetch("./clientes.json");
	const dadosJSON = await dadosResponse.json();
	document.body.innerText = dadosJSON.nome;
	console.log(dadosJSON.nome);
}

iniciarAsync();

// Try / Catch
// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

async function puxarDados() {
	try {
		const dadosResponse = await fetch("./dados.json");
		const dadosJSON = await dadosResponse.json();
		// document.body.innerText = dadosJSON.titulo;
		// console.log(dadosJSON.titulo);
	} catch (error) {
		console.log(error);
	}
}

puxarDados();

// Iniciar Fetch ao Mesmo Tempo
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.

async function iniciarAsync2() {
	const dadosResponse = fetch("./dados.json");
	const clienteResponse = fetch("./clientes.json");

	// ele espera o que está dentro da expressão () ocorrer primeiro
	const dadosJSON = await (await dadosResponse).json();
	console.log(JSON.stringify(dadosJSON));
	const clientesJSON = await (await clienteResponse).json();
	console.log(JSON.stringify(clientesJSON));
}

iniciarAsync2();

// Promise
// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.

async function asyncSemPromise() {
	// Console não irá esperar.
	await setTimeout(() => console.log("Depois de 1s"), 1000);
	console.log("acabou");
}
asyncSemPromise();

async function iniciarAsync3() {
	await new Promise((resolve) => {
		setTimeout(() => resolve(), 1000);
	});
	console.log("Depois de 1s");
}
iniciarAsync3();
