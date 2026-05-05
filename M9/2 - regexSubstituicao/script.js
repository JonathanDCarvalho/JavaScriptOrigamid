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

