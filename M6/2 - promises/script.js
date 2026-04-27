// Promises
// new Promise()

// Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

const promesa = new Promise((resolve, reject) => {
	let condicao = true;
	if (condicao) {
		setTimeout(() => {
			resolve({ nome: "Jonathan", idade: 24 });
		}, 1000);
	} else {
		reject(Error("Um erro ocorreu na promise"));
	}
});

// then()
// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

const retorno = promesa
	.then((resolve) => {
		console.log(resolve);
		resolve.profissao = "Designer";
		return resolve;
	})
	.then(
		(resolve) => {
			console.log(resolve);
		},
		(reject) => {
			console.log(reject);
		},
	)
	.catch((reject) => {
		console.log(reject);
	})
	.finally(() => {
		console.log("Acabou");
	});

console.log(retorno);

// Assíncrono
// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele.

// then().then()
// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

// catch()
// O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

// then(resolve, reject)
// Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento.

// finally
// finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.

// Promise.all()
// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.

const login = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Usuário Logado");
	}, 2000);
});

const dados = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Dados Carregados");
	}, 2500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolve) => {
	console.log(resolve);
});

// Promise.race()
// Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.

