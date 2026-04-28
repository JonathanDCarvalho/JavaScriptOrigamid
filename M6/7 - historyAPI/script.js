// History API

// É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

console.log(window.history);
// window.history.back() => volta todo o histórico pra trás
// window.history.foward() => avança todo o histórico de navegação pra frente.

// A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url)

// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

// window.history.pushState(null, null, "sobre.html");

// popstate
// O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.

// só funciona se tiver também o efeito do pushState()
window.addEventListener("popstate", () => {
	console.log("teste");
});

// Fetch e History
// Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

const links = document.querySelectorAll("a");

function handleClick(e) {
	e.preventDefault();
	fetchPage(e.target.href);
	window.history.pushState(null, null, e.target.href);
}

async function fetchPage(url) {
	document.querySelector(".content").innerHTML = "Carregando...";
	const pageResponse = await (await fetch(url)).text();
	replaceContent(pageResponse);
}

function replaceContent(newText) {
	const newHtml = document.createElement("div");
	newHtml.innerHTML = newText;

	const oldContent = document.querySelector(".content");
	const newContent = newHtml.querySelector(".content");
	oldContent.innerHTML = newContent.innerHTML;
	document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
	fetchPage(window.location.href);
});

links.forEach((link) => {
	link.addEventListener("click", handleClick);
});
