// Regexp Padrões

// CEP
console.log("CEP");
const regexpCEP = /\d{5}[\s-]?\d{3}/g;
const ceps = ["00000-000", "00000 000", "00000000"];

for (cep of ceps) {
	console.log(cep, cep.match(regexpCEP));
}

console.log("--------------------");

// CPF
console.log("CPF");
const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/;

const cpfs = ["000.000.000-00", "000-000-000-00", "000.000.000.00", "000000000-00", "00000000000"];

for (cpf of cpfs) {
	console.log(cpf, cpf.match(regexpCPF));
}

console.log("--------------------");

// CNPJ
console.log("CNPJ");
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[/]?\d{4}[-.]?\d{2}/;

const cnpjs = ["00.000.000/0000-00", "00000000000000", "00-000-000-0000-00", "00.000.000/000000", "00.000.000.000000", "00.000.000.0000.00"];

for (cnpj of cnpjs) {
	console.log(cnpj, cnpj.match(regexpCNPJ));
}

console.log("--------------------");

// Telefone
console.log("Telefone");
const regexpTelefone = /(?:\+?55\s?)?(?:\(?\d{2}\)?)?[-\s]?\d{4,5}[-\s]?\d{4}/;

const telefones = [
	"+55 11 98888-8888",
	"+55 11 98888 8888",
	"+55 11 988888888",
	"+55 11988888888",
	"+5511988888888",
	"5511988888888",
	"11 98888-8888",
	"11 98888 8888",
	"(11) 98888 8888",
	"(11) 98888-8888",
	"11-98888-8888",
	"11 98888 8888",
	"11988888888",
	"11988888888",
	"988888888",
	"(11)988888888",
	"98888 8888",
	"8888 8888",
];

for (telefone of telefones) {
	console.log(telefone, telefone.match(regexpTelefone));
}

console.log("--------------------");

// Email
console.log("Email");

const regexpEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = [
	"email@email.com",
	"email@email.com.org",
	"email-email@email.com",
	"email_email@email.com",
	"email.email23@email.com.br",
	"email.email23@empresa-sua.com.br",
	"c@contato.cc",
];

for (email of emails) {
	console.log(email, email.match(regexpEmail));
}

// site de referência pra email regex.
// http://emailregex.com/

console.log("--------------------");

// Tag
console.log("Tag");

const regexpTag = /<\/?[\w\s="']+\/?>/;

const tags = [
	"<div>Isso é uma div</div>",
	'<div class="ativa">Essa está ativa</div>',
	'<img src="imagem" />',
	'<img src="imagem">',
	'<ul class="ativa">',
	"<li>Essa está ativa</li>",
	"</ul>",
];

for (tag of tags) {
	console.log(tag, tag.match(regexpTag));
}

console.log("--------------------");

// Tag Apenas o Nome
console.log("Tag Apenas o Nome");

const regexpTagName = /(?<=<\/?)[\w]+/gi;

const tagsName = [
	"<div>Isso é uma div</div>",
	'<div class="ativa">Essa está ativa</div>',
	'<img src="imagem" />',
	'<img src="imagem">',
	'<ul class="ativa">',
	"<li>Essa está ativa</li>",
	"</ul>",
];

for (tag of tagsName) {
	console.log(tag, tag.match(regexpTagName));
}

console.log("--------------------");
