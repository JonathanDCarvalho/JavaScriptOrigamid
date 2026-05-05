// Regexp Substituição

// Referência da Seleção
// É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

// Procura: Java

const regexpSelecao = /Java/gi;

console.log("PHP e Java são linguagens diferentes".replace(regexpSelecao, "--$&Script"));
// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java

console.log("---------------------");

// Grupo de Captura
// É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
const regexpCaptura = /(\w+)@[\w.]+/g;

console.log("andre@email.com.br".replace(regexpCaptura, "$1@gmail.com"));
// andre@gmail.com

console.log("---------------------");

// Mais de um grupo
// Podemos definir quantos grupos de captura quisermos.

// Procura: sequência alfanumérica, seguida
// de , seguido espaço de sequência alfanumérica.
const regexpGrupo = /(\w+),\s(\w+)/g;

console.log("Rafael, Andre".replace(regexpGrupo, "$2 $1"));
// Andre Rafael

console.log("---------------------");

// Mais do que Captura apenas
// Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.

// Procura: qualquer sequência de ta
const regexpRep = /(ta)+/gi;

console.log("Tatata, tata, ta".replace(regexpRep, "Pá"));
// Pá, Pá, Pá

console.log("---------------------");

// Ignorar Captura
// Utilize o (?:) para ignorar a captura.

// Procura: qualquer sequência de ta
const regexpIgnore = /(?:ta)+/gi;

console.log("Tatata, tata, ta".replace(regexpIgnore, "Pá"));
// Pá, Pá, Pá

console.log("---------------------");

// Positive Lookahead
// Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexPositive = /\d(?=px)/g;

console.log("2em, 4px, 5%, 2px, 1px".replace(regexPositive, "X"));
// 2em, Xpx, 5%, Xpx, Xpx
console.log("---------------------");

// Negative Lookahead
// Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.

// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexpNegative = /\d(?!px)/g;

console.log("2em, 4px, 5%, 5px, 1px".replace(regexpNegative, "X"));
// Xem, 4px, X%, 5px, 1px
console.log("---------------------");

// Positive Lookbehind
// Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.

// Procura: dígitos que possuírem R$
// na frente dos mesmos
const regexpBehind = /(?<=R\$)[\d]+/g;

console.log("R$99, 100, 200, R$20".replace(regexpBehind, "X"));
// R$X, 100, 200, R$X
