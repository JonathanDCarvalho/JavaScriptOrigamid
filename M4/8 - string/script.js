// String
// É a construtora de strings, toda string possui as propriedades e métodos do prototype String

const comida = "Pizza";
const agua = new String("Água");

// Todos as propriedades e métodos abaixo não modificam o object string

// length = total de caracteres

console.log(comida.length); // tamanho total
console.log(comida[0]); // podemos acessar como array
console.log(comida[comida.length - 1]); // ultimo caracter

console.log("-----------------------");

// charAt(n) = caracter em alguma posição (indice);
console.log(comida.charAt(0)); // P
console.log(comida.charAt(comida.length - 1)); // a

console.log("-----------------------");

// concat(str2, str3), concatena strings (soma), junta
const frase = "A Melhor Linguagem é ";
const linguagem = "JavaScript ";
const linguagem2 = "e C#";
const fraseFinal = frase + linguagem;
console.log(fraseFinal);

const fraseConcat = frase.concat(linguagem, linguagem2);
console.log(fraseConcat);

// melhor jeito, template string
console.log(`${frase}${linguagem}${linguagem2}`);

console.log("-----------------------");

// includes() = procura na string a se contem, podemos passar o indice

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 4)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log("-----------------------");

// endsWith e startsWith = termina com e inicia com

console.log(fruta.startsWith("Ba")); // true
console.log(fruta.startsWith("B")); // true
console.log(fruta.endsWith("nana")); // true
console.log(fruta.startsWith("na")); // false
console.log(fruta.endsWith("na")); // true

console.log("-----------------------");

// slice() = Corta a string de acordo com os valores de start e end.

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao1.slice(3, 8)); // ósito
console.log(transacao1.slice(-5)); // iente

console.log("-----------------------");

// substring(start, end)
// Corta a string de acordo com os valores de start e end. Não funciona com valores negativos igual ao slice(), ou seja é um slice() limitado, se for usar use o slice()

console.log(linguagem.substring(-1)); // Retorna a string completa, porque não funciona número negativo igual o slice()

console.log("-----------------------");

// indexOf() e lastIndexOf()
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = "Guitarra";

console.log(instrumento.indexOf("r")); // 5
console.log(instrumento.lastIndexOf("r")); // 6
console.log(instrumento.indexOf("ta")); // 3

console.log("-----------------------");

// padStart(n, str) e padEnd(n, str);
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];
listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

console.log(listaPrecos[0].padStart(10, "."));
console.log(listaPrecos[0].padEnd(10, "."));

console.log("-----------------------");

// repeat(n)
const frase2 = "Ta";
console.log(frase2.repeat(20));

console.log("-----------------------");

// replace(regexp|subsstr, newstr|function);
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'
console.log(preco);

// Se você não passar uma regular expression o replace apenas vai alterar o primeiro item encontrado e não todos.
// Veremos mais sobre Regular Expression

console.log("-----------------------");

// split
// Divide a string de acordo com o padrão passado e retorna uma array.

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlArray);

const htmlNovo = htmlArray.join("section");
console.log(htmlNovo);

console.log("-----------------------");

// toLowerCase e toUpperCase
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toLowerCase() === "feminino"); // true
console.log(sexo2.toLowerCase() === "feminino"); // true
console.log(sexo3.toLowerCase() === "feminino"); // true

console.log("-----------------------");

// trim(), trimstart(), trimend()
// Remove espaço em branco do início ou final de uma string.

const valor = "  R$ 23.00   ";
console.log(valor.trim()); // 'R$ 23.00'
console.log(valor.trimStart()); // 'R$ 23.00   '
console.log(valor.trimEnd()); // '  R$ 23.00'

console.log("-----------------------");

// Exercícios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let total = 0;

transacoes1.forEach((item) => {
  const formato = Number(item.valor.replace("R$ ", ""));
  total += formato;
});

console.log(total);

console.log("-----------------------");

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

console.log("-----------------------");

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo1 = html.replaceAll("span", "a");
console.log(htmlNovo1);

console.log("-----------------------");

// Retorne o último caracter da frase
const frase3 = "Melhor do ano!";
console.log(frase3.charAt(frase3.length - 1));
console.log(frase3.charAt(--frase3.length));
console.log(frase3.slice(-1));
console.log(frase3.slice(frase3.length - 1));
console.log(frase3.slice(--frase3.length));

console.log("-----------------------");

// Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxa = 0;
transacoes.forEach((taxa) => {
  const taxaFormat = taxa.trim().toLowerCase();
  if (taxaFormat.startsWith("taxa")) totalTaxa++;
  console.log(taxaFormat);
});

console.log(totalTaxa);

console.log("-----------------------");
