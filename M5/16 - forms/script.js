// Forms

// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.

const contato = document.querySelector("#contato");

console.log(contato.elements[0]);
console.log(contato.elements.nome);
console.log(document.forms[0].elements[0].value);

// Values
// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

// Validação
// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')

// Pegando Todos os Valores
// Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.

const dados = {};

function handleChange(e) {
	dados[e.target.name] = e.target.value;
	console.log(dados);
	// if (e.target.checked) {
	// 	console.log(e.target.value);
	// }
	// document.body.style.backgroundColor = e.target.value;

	// const target = e.target;

	// if (!target.checkValidity()) {
	// 	target.classList.add("invalido");
	// 	target.setCustomValidity("Esse campo é super importante");
	// 	target.nextElementSibling.innerText = target.validationMessage;
	// }

	// texto.innerText = target.value;
}

contato.addEventListener("change", handleChange);
