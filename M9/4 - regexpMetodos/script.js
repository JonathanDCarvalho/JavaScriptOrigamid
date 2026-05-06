// Regexp Métodos

// regexp constructor
// Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

const regexp = /\w+/gi;

const regexp1 = new RegExp("\\d+", "gi");

const frase = "JavaScript Linguagem 101";
console.log(frase.replace(regexp1, "X"));

console.log("-------------------");

// Propriedades
// Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.

console.log(regexp.flags); // gi
console.log(regexp.global); // true
console.log(regexp.ignoreCase); // true
console.log(regexp.multiline); // false
console.log(regexp.source); // '\w+'

console.log("-------------------");

// regexp.test()
// O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

const regexp2 = /Java/g;
const frase2 = "JavaScript e Java Linguagem 101, Java";

let i = 1;
while (regexp2.test(frase2)) {
	console.log(i++, regexp2.lastIndex);
}

console.log("-------------------");

console.log(regexp2.lastIndex);
console.log(regexp2.test(frase2));
console.log(regexp2.lastIndex);
console.log(regexp2.test(frase2));
console.log(regexp2.lastIndex);
console.log(regexp2.test(frase2));
console.log(regexp2.lastIndex);

console.log("-------------------");

// regexp.exec()
// O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

const regexp3 = /\w+/g;
const frase3 = "JavaScript, TypeScript, CoffeScript, Java";

let regexpResult;
while ((regexpResult = regexp3.exec(frase3)) !== null) {
	console.log(regexpResult[0]);
}

console.log("-------------------");

// str.match()
// O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.

const regexp4 = /\w+/g;
const frase4 = "JavaScript, TypeScript, CoffeScript, Java";

const resultados = frase4.match(regexp4);
console.log(resultados);

console.log("-------------------");

// str.split()
// O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.

const regexp5 = new RegExp(/Script/g);
const frase5 = "JavaScript, TypeScript, CoffeScript, Java";

const resultado2 = frase5.split(regexp5);
console.log(resultado2);

console.log("-------------------");

// str.replace()
// O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexpReplace = new RegExp(/<li/g);

const resultado3 = tags.replace(regexpReplace, "$& class='ativa'");
console.log(resultado3);

console.log("-------------------");

// Grupos de Captura
// É possível definirmos quantos grupos de captura quisermos.

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

console.log(emails.replace(/(\w+@)[\w.]+/g, "$1gmail.com"));

console.log("-------------------");

// Callback
// Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.

const emails1 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;
