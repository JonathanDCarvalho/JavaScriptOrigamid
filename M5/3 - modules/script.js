// Module

import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import { teste, teste2 as i } from "./modules/teste.js";
import * as tudo from "./modules/teste.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();

// Named Exports
// Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

teste();
i();

console.log(tudo);
tudo.teste();
tudo.teste2();

console.log("--------------------");

// Valores do Export

// Podemos exportar objetos, funções, classes, números, strings e mais.

console.log(tudo.senha);

// Cacacterísticas:
/**
 * Strict mode
 * 'use strict' por padrão em todos os arquivos.

 * Variáveis ficam no module apenas
 * Não vazam para o escopo globo.

 * This fora de um objeto faz referência a undefined
 * Ao invés de fazer referência ao window.

 * Assíncrono
 */

// use strict
// O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.
