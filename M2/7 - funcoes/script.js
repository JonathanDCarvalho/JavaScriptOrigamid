// Funções:

// Uma funções é um bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(6)); // 36;

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total.toFixed(2));

// Parâmetros e Argumentos
// Ao criar uma função podemos definir parâmetros.
// Ao executar uma função podemos passar argumentos.
// Os argumentos só podem ser passados se a função tiver parâmetros, o argumento é uma resposta do parâmetro passado na função. (depende da lógica da função)

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(83, 1.77).toFixed(2));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto do mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita("verde"));

// Argumentos podem ser funções.
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

// Exemplo: addEventListener('click', function())
// A função possui dois argumentos: Primeiro é a string 'click'
// Segundo é uma função anônima.

// addEventListener("click", function () {
//   console.log("Oi");
// });

// Uma função pode ou não retornar um valor
// Quando não definimos um return, ela irá retornar undefined. Porém o código interno da função continuará sendo executado normalmente.

// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("Morte aos velhos"));

// Escopo
// Variáveis e funções definidas dentro de um bloco, não são visíveis fora dele.

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(3));
// console.log(totalPaises); // Erro is not defined. Não é possível acessar variáveis que estão dentro de um bloco.

// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto Pai

var profissao = "Designar";

function dados() {
  var nome = "Jonathan";
  var idade = 24;
  function outrosDados() {
    var endereco = "Campinas";
    var idade = 25;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }

  return outrosDados();
}

console.log(dados());
// outrosDados(); Erro, outrosDados is not defined.

// ---------------------------------------------------------- //

// Exercícios:

// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}

console.log(isTruthy(""));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4;
}

console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Jonathan", "Carvalho");

// Crie uma função que verifica se um número é par

function isEven(num) {
  if (num % 2 === 0) {
    return "É par";
  } else {
    return "Não é par";
  }
}

console.log(isEven(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado(""));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function nomeCompleto2() {
  console.log("Jonathan Carvalho");
}

addEventListener("scroll", nomeCompleto2);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
