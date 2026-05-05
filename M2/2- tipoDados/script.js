// Tipos de Dados
// 7 Tipos de Dados Primitivos:
// String, Number, Boolean, Undefined, Null, Symbol, Object

// Primitivos são dados imutáveis.

var nome = "Jonathan"; // String
console.log(typeof nome);

var idade = 24; // Number
console.log(typeof idade);

var isTrue = true; // Boolean
console.log(typeof isTrue);

var time = null; // Object
console.log(typeof time);
// null é tratado como object no javascript (é um bug da linguagem)

var simbolo = Symbol(); // Symbol
console.log(typeof simbolo);

var indefinido = undefined; // undefined
console.log(typeof indefinido);

var objeto = {}; // Object
console.log(typeof objeto);

// ------------------------ //
// Strings:
// Operações com string:

var nome = "Jonathan";
var sobrenome = "Carvalho";

var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Tipo Number somado com String sempre vira uma String

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);
console.log(typeof frase);

var ano = "2018";
var mes = 8;
var anoMes = ano + mes;
console.log(anoMes);
console.log(typeof anoMes);

// Template String

var templateString = `Romário fez ${gols} gols nessa porra`;
console.log(templateString);

// Exercícios:

// Declare uma variável contendo uma string
var exemplo = "Não sei";
// Declare uma variável contendo um número dentro de uma string
var exemplo2 = 2;
// Declare uma variável com a sua idade
var myAge = 24;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var myName = "Jonathan";
var sobrenome = "Carvalho";
console.log(myName + " " + sobrenome);
console.log(`${myName} ${sobrenome}`);
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);
var frase2 = "It's time";
console.log(frase2);
// Verifique o tipo da variável que contém o seu nome
console.log(typeof myName);

// ------------------------ //
// Numbers

// Operadores Aritméticos com Numbers

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; // 50;
var modulo = 100 % 3; // 1 (Resto da Divisão)

console.log(modulo);

// NaN = Not a Number
// isNaN() = função para verificar se é um NaN

var texto = "Isso 100" / 2;
console.log(texto);
console.log(isNaN(texto));

// incremento e decremento

var x = 5;
console.log(x++);
console.log(x);
console.log(++x);

var y = 5;
console.log(y--);
console.log(y);
console.log(--y);

var idade = "28";
var somaIdade = 5;
console.log(+idade + somaIdade); // o '+' na frente transformou a string '28' em Number e ai foi feita a operação normal 28 + 5 = 33;

// Exercício:

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var texto = "100kg" - 5;
console.log(texto);

var texto2 = "Qualquer coisa" / 3;
console.log(texto2);

// Somar a string '200' com o número 50 e retornar 250
var numeroString = "200";
var numero2 = 50;
console.log(+numeroString + numero2);

// Incremente o número 5 e retorne o seu valor incrementado
var z = 5;
console.log(++z);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'

console.log(peso);

// ------------------------ //
// Boolean e Condicionais

// Existem dois valores booleanos 'false' e 'true'

// Condicionais If e Else
// Verificar se uma expressão é verdadeira com 'IF', caso contrário o 'ELSE' será ativado.

// Truthy e Falsy

// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Todo o resto é truthy

// Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// Operador Lógico de Negação !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de Comparação
// Vão sempre retornar um valor booleano

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 > 5; // true
10 < 5; // false
10 == 5; // false
10 == "10"; // true
10 == 10; // true
10 === 10; // true
10 === "10"; // false
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

10 >= 5; // true
10 >= 11; // false
10 <= 8; // false
10 <= 11; // true
10 <= 10; // true
10 >= 10; // true

// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// Operadores Lógicos ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// Retorna o primeiro valor true que encontrar

// --------------------------- //
// Exercício:

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var myAge = 24;
var myParentAge = 50;

if (myAge > myParentAge) {
  console.log("É maior");
} else if (myAge === myParentAge) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
// 3 (verdadeiro)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

var comparacao = brasil > china ? 'Brasil tem mais habitantes' : 'Brasil tem menos habitantes';

console.log(comparacao);

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// Cão

let media = 6;
if (media >= 6) {
  console.log('Aprovado')
} else {
  console.log('Reprovado')
}

console.log(media >= 6 ? 'Aprovado' : 'Reprovado');