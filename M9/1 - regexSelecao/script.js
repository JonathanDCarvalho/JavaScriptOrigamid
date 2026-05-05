// Regular Expression
// https://regexr.com/
// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

// Procure: a
const padraoRegexp = /a/; // seleciona o primeiro 'a' que encontrar

const texto = "JavaScript";
const texto2 = "JAvaScript";
const novoTexto = texto.replace(padraoRegexp, "B"); // JBvaScript
console.log(novoTexto);

console.log("-------------------");

// Literal
// Utilizar um caracter literal irá realizar uma busca específica deste caracter.

// // Procura: J seguido de a, v e a
const literalRegexp = /Java/;
const literalTexto = texto.replace(literalRegexp, "Type");
console.log(literalTexto);

console.log("-------------------");

// Flag:g
// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão

const regexpGlobal = /a/g;
const novoTextoGlobal = texto.replace(regexpGlobal, "i");
console.log(novoTextoGlobal); // JiviScript

console.log("-------------------");

// Flag:i
// Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

const regexIgnore = /a/gi;
const novoTextoIgnore = texto2.replace(regexIgnore, "B");
console.log(novoTextoIgnore); // JBvBScript

console.log("-------------------");

// Character Class
// Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

const regexpCharacter = /[ai]/gi;
const novoTextoCharacter = texto.replace(regexpCharacter, "T");
console.log(novoTextoCharacter); // JTvTScrTpt

console.log("-------------------");

// Character Class e Especiais
// Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

const regexpEspacial = /[-.]/g; // da pra fazer assim também: /\-./g, barra invertida ao invés de []
const cpfFormatado = "111.222-333-44";
const novocpf = cpfFormatado.replace(regexpEspacial, "");
console.log(novocpf);

console.log("-------------------");

// Um ou outro
// Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

const regexpSome = /Bra[sz]il/g;
// vai selecionar Brasil ou Brazil, ou com 's' ou com 'z'

console.log("-------------------");

// De A à Z
// O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

// Busca por itens de a à az
const regexpA = /[a-z]/g;
const textoA = "JavaScript é uma Linguagem";
const novoTextoA = textoA.replace(regexpA, "0");
console.log(novoTextoA);

console.log("-------------------");

// Busca por itens de à a z e A à Z
const regexpB = /[a-z]/gi;
const novoTextoB = textoA.replace(regexpB, "1");
console.log(novoTextoB);

console.log("-------------------");

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;
const novocpfFormatado = cpfFormatado.replace(regexpNumero, "X");
console.log(novocpfFormatado);

console.log("-------------------");

// Negar
// Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

const regexpN = /[^a-z]/g;
const brasil = "Brasil é com z: Brazil";
const novoTextoBrasil = brasil.replace(regexpN, " ");
console.log(novoTextoBrasil);
console.log("-------------------");

// Ponto
// O ponto . irá selecionar qualquer caracter, menos quebras de linha.

// Procura: todos os caracteres menos quebra de linha
const regexpPonto = /./g;
const novoTextoPonto = textoA.replace(regexpPonto, "0");
console.log(novoTextoPonto);

console.log("-------------------");

// Escapar Especiais
// Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

const regexpBarra = /\./g;
const regexpBarraColchete = /[.]/g;

console.log(cpfFormatado.replace(regexpBarra, "-"));
console.log(cpfFormatado.replace(regexpBarraColchete, "-"));

console.log("-------------------");

// Word
// O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

// Procura: todos os alfanuméricos
const regexpW = /\w/g;
const novoTextoW = textoA.replace(regexpW, "1");
console.log(novoTextoW);

console.log("-------------------");

// Not Word
// O \W irá selecionar tudo o que não for caracter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].

// Procura: o que não for caracter alfanuméricos
const regexpWNegative = /\W/g;
const novoTextoWNegative = textoA.replace(regexpWNegative, "1");
console.log(novoTextoWNegative);

console.log("-------------------");

// Digit
// O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].

// Procura: todos os dígitos
// Procura: todos os dígitos
const regexpDigitt = /\d/g;

console.log("+55 (21) 2222-2222".replace(regexpDigitt, "X"));
// +XX (XX) XXXX-XXXX.

console.log("-------------------");

// Not Digit
// O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].

// Procura: o que não for dígito
// Procura: o que não for dígito
const regexpNotDigit = /\D/g;

console.log("+55 (21) 2222-2222".replace(regexpNotDigit, ""));
// 552122222222

console.log("-------------------");

// WhiteSpace
// O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

// Procura: espaços em branco
const regexpSpace = /\s/g;

console.log("+55 (21) 2222-  2222  ".replace(regexpSpace, ""));
// +55(21)2222-2222

console.log("-------------------");

// Not WhiteSpace
// O \S irá selecionar qualquer caracter que não for espaço em branco.

// Procura: o que não for espaço em branco
const regexpNotSpace = /\S/g;

console.log("+55 (21) 2222-  2222  ".replace(regexpNotSpace, "X"));
// XXX XXXX XXXXX  XXXX

// /[\s\S]/g irá selecionar tudo.

console.log("-------------------");

// Quantificador
// É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

// Procura: 4 a's seguidos
const regexpQuant = /aaaa/g;
const regexpAlt = /a{3,4}/g;

console.log("Vaaaai ali por favor.".replace(regexpAlt, "a"));
// Vai ali por favor.

console.log("-------------------");

// Mais +
// O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

// Procura: dígitos em ocorrência de um ou mais
const regexpMais = /\d+/g;
console.log("222.333.222.42".replace(regexpMais, "X"));

// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetras = /d\w+/g;

console.log("Dígitos, dados, desenhos, Dito, d".replace(regexpLetras, "X"));
// Dígitos, X, X, Dito, d

console.log("-------------------");

// Asterisco *
// O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

// Procura: Começa com d, seguido por zero ou mais letras.
const regexpAst = /d\w*/g;

console.log("Dígitos, dados, desenhos, Dito, d".replace(regexpAst, "X"));
// Dígitos, X, X, Dito, X

console.log("-------------------");

// Opcional ?
// O sinal ? significa que o caracter é opcional, pode ou não existir.

// Procura: Por regex com p opcional
const regexpOp = /regexp?/g;

console.log("Qual é o certo, regexp ou regex?".replace(regexpOp, "Regular Expression"));
// Qual é o certo, Regular Expression ou Regular Expression?

console.log("-------------------");

// Alternado |
// O sinal | irá selecionar um ou outro. java|php

// Procura: java ou php (case insensitive)
const regexpAlternado = /java|php/gi;

console.log("PHP e Java são linguagens diferentes".replace(regexpAlternado, "X"));
// X e X são linguagens diferente

console.log("-------------------");

// Word Boundary \b
// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

// Procura: java (case insensitive)
const regexpBoundar = /java/gi;
console.log("Java não é JavaScript.".replace(regexpBoundar, "X"));
// X não é XScript.

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
console.log("Java não é JavaScript.".replace(regexpBoundary, "X"));
// X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito = /\b\d+\b/gi;
console.log("O Restaurante25 na Rua 3, custa R$ 32,00".replace(regexpDigito, "X"));
// O Restaurante25 na Rua X, custa R$ X,X

console.log("11_22 33-44 55é66 77e88".replace(regexpDigito, "X"));
// 11_22 X-X XéX 77e88

console.log("-------------------");

// Not Word Boundary \B
// É o contrário do \b.

const regexpDigitos = /\B\d+\B/gi;

console.log("11_22 33-44 55é66 77e88".replace(regexpDigitos, "X"));
// 1X_X2 33-44 55é66 7XeX8

console.log("-------------------");

// Anchor Beginning
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

// Procura: sequência de alfanuméricos
// no início da linha.
const regexpInitial = /^\w+/g;

console.log(
	`andre@origamid.com
contato@origamid.com`.replace(regexpInitial, "X"),
);
// X@origamid.com
// contato@origamid.com

console.log("-------------------");

// Anchor End
// Com o $ é possível informar que a busca deve ser iniciada no final da linha.

// Procura: sequência de alfanuméricos
// no final da linha.
const regexpFinal = /\w+$/g;

console.log(
	`andre@origamid.com
contato@origamid.com`.replace(regexpFinal, "X"),
);
// andre@origamid.com
// contato@origamid.X

console.log("-------------------");

// Flag: M
// Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.

// Procura: sequência de alfanuméricos
// no final da linha.
const regexpMFinal = /\w+$/gm;

console.log(
	`andre@origamid.com
contato@origamid.com`.replace(regexpMFinal, "X"),
);
// andre@origamid.X
// contato@origamid.X

console.log("-------------------");

// Procura: sequência de alfanuméricos
// no início da linha.
const regexpMInitial = /^\w+/gm;

console.log(
	`andre@origamid.com
contato@origamid.com`.replace(regexpMInitial, "X"),
);
// X@origamid.com
// X@origamid.com

console.log("-------------------");

// Line Feed \n
// O \n irá selecionar o final de uma linha, quando criamos uma nova.

const regexpLine = /\n/g;

console.log(`andre@origamid.com\ncontato@origamid.com`.replace(regexpLine, "---"));
// andre@origamid.com---contato@origamid.com

console.log(
	`andre@origamid.com
contato@origamid.com`.replace(regexpLine, "X"),
);
// andre@origamid.com---contato@origamid.com

// \t seleciona tabs
console.log("-------------------");

// Unicode \u
// O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

// Procura: @ ou ©
const regexpUnicode = /\u0040|\u00A9/g;

console.log("andre@origamid.com ©".replace(regexpUnicode, "---"));
// andre---origamid.com ---
