/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js"
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Accordion List

function initAccordion() {
	const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
	const activeClass = "ativo";

	function activeAccordion() {
		this.classList.toggle(activeClass);
		this.nextElementSibling.classList.toggle(activeClass);
	}

	if (accordionList.length) {
		accordionList[0].classList.add(activeClass);
		accordionList[0].nextElementSibling.classList.add(activeClass);
		accordionList.forEach((item) => {
			item.addEventListener("click", activeAccordion);
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAccordion);


/***/ },

/***/ "./js/modules/anima-numeros.js"
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initAnimaNumeros() {
	function animaNumeros() {
		const numeros = document.querySelectorAll("[data-numero]");
		numeros.forEach((numero) => {
			const total = Number(numero.innerText);
			const incremento = Math.floor(total / 100);

			let start = 0;
			const timer = setInterval(() => {
				start += incremento;
				numero.innerText = start;
				if (start > total) {
					numero.innerText = total;
					clearInterval(timer);
				}
			}, 25 * Math.random());
		});
	}

	function handleMutation(mutation) {
		if (mutation[0].target.classList.contains("ativo")) {
			observer.disconnect();
			animaNumeros();
		}
	}

	const observeTarget = document.querySelector(".numeros");
	const observer = new MutationObserver(handleMutation);

	observer.observe(observeTarget, { attributes: true });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimaNumeros);


/***/ },

/***/ "./js/modules/dropdown-menu.js"
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");

function initDropDownMenu() {
	const dropdownMenus = document.querySelectorAll("[data-dropdown]");
	dropdownMenus.forEach((menu) => {
		["touchstart", "click"].forEach((userEvent) => {
			menu.addEventListener(userEvent, handleClick);
		});
	});

	function handleClick(e) {
		e.preventDefault();
		this.classList.add("active");
		(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ["touchstart", "click"], () => {
			this.classList.remove("active");
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropDownMenu);


/***/ },

/***/ "./js/modules/fetch-animais.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ "./js/modules/anima-numeros.js");


function initFetchAnimais() {
	async function fetchAnimais(url) {
		try {
			const animaisResponse = await (await fetch(url)).json();
			const numerosGrid = document.querySelector(".numeros-grid");
			animaisResponse.forEach((animal) => {
				const divAnimal = createAnimail(animal);
				numerosGrid.appendChild(divAnimal);
			});
			(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
		} catch (error) {
			console.log(Error(error));
		}
	}

	function createAnimail(animal) {
		const div = document.createElement("div");
		div.classList.add("numero-animal");
		div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
		return div;
	}

	fetchAnimais("./animaisapi.json");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchAnimais);


/***/ },

/***/ "./js/modules/fetch-bitcoin.js"
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		const btcPreco = document.querySelector(".btc-preco");
		btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
	})
	.catch((error) => {
		console.log(Error(error));
	});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchBitcoin);


/***/ },

/***/ "./js/modules/funcionamento.js"
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initFuncionamento() {
	const funcionamento = document.querySelector("[data-semana]");
	const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
	const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

	const dataAgora = new Date();
	const diaAgora = dataAgora.getDay() + 1;
	const horarioAgora = dataAgora.getHours();

	const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

	const horarioAberto = horarioAgora >= horarioSemana[0] || horarioAgora < horarioSemana[1];

	if (semanaAberto && horarioAberto) {
		funcionamento.classList.add("aberto");
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFuncionamento);

// Object Date

// new Date()
// O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

// const now = new Date();
// console.log(now); // Semana Mês Dia Ano HH:MM:SS GMT

// console.log(now.getDate()); // Dia
// console.log(now.getDay()); // Dia da semana ex: 0 = Saturday
// console.log(now.getMonth()); // Número dia do mês ex: abril: 3
// console.log(now.getFullYear()); // Ano
// console.log(now.getHours()); // Hora
// console.log(now.getMinutes()); // Minutos
// console.log(now.getTime()); // ms desde 1970
// console.log(now.getUTCHours() - 3); // Brasilia

// const futuro = new Date("Dec 24 2026 23:59");
// console.log(futuro);

// // getTime()
// // O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

// // Dias até
// // Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.

// function transformarDias(tempo) {
// 	return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(now.getTime());
// const diasFuturos = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturos - diasAgora)); // faltam 242 pro natal


/***/ },

/***/ "./js/modules/menu-mobile.js"
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ "./js/modules/outsideClick.js");


function initMenuMobile() {
	const menuButton = document.querySelector('[data-menu="button"]');
	const menuList = document.querySelector('[data-menu="list"]');
	const eventos = ["click", "touchstart"];

	function openMenu(e) {
		menuList.classList.add("active");
		menuButton.classList.add("active");
		(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menuList, eventos, () => {
			menuList.classList.remove("active");
			menuButton.classList.remove("active");
		});
	}

	if (menuButton) {
		eventos.forEach((userEvent) => {
			menuButton.addEventListener(userEvent, openMenu);
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);


/***/ },

/***/ "./js/modules/modal.js"
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initModal() {
	const botaoAbrir = document.querySelector("[data-modal='abrir']");
	const botaoFechar = document.querySelector("[data-modal='fechar']");
	const containerModal = document.querySelector("[data-modal='container']");

	function toggleModal(e) {
		e.preventDefault();
		containerModal.classList.toggle("ativo");
	}

	function clickOutsideModal(e) {
		if (e.target === this) {
			toggleModal(e);
		}
	}

	if (botaoAbrir && botaoFechar && containerModal) {
		botaoAbrir.addEventListener("click", toggleModal);
		botaoFechar.addEventListener("click", toggleModal);
		containerModal.addEventListener("click", clickOutsideModal);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);


/***/ },

/***/ "./js/modules/outsideClick.js"
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function outsideClick(element, events, callback) {
	const html = document.documentElement;
	const outside = "data-outside";

	if (!element.hasAttribute(outside)) {
		events.forEach((userEvent) => {
			setTimeout(() => {
				html.addEventListener(userEvent, handleOutsideClick);
			});
		});
		element.setAttribute(outside, "");
	}

	function handleOutsideClick(e) {
		if (!element.contains(e.target)) {
			element.removeAttribute(outside);
			events.forEach((userEvent) => {
				html.removeEventListener(userEvent, handleOutsideClick);
			});
			callback();
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);


/***/ },

/***/ "./js/modules/scroll-animacao.js"
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Animação ao Scroll

function initAnimacaoScroll() {
	const sections = document.querySelectorAll("[data-anime='scroll']");
	const windowMetade = window.innerHeight * 0.6;
	function animaScroll() {
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const isSectionVisible = sectionTop - windowMetade < 0;
			if (isSectionVisible) {
				section.classList.add("ativo");
			} else if (section.classList.contains("ativo")) {
				section.classList.remove("ativo");
			}
		});
	}
	if (sections.length) {
		animaScroll();

		window.addEventListener("scroll", animaScroll);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimacaoScroll);


/***/ },

/***/ "./js/modules/scroll-suave.js"
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Scroll Suave Link Interno

function initScrollSuave() {
	const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

	function scrollToSection(e) {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const section = document.querySelector(href);

		section.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

		// forma alternativa
		// const topo = section.offsetTop;
		// window.scrollTo({
		//   top: topo,
		//   behavior: "smooth",
		// });
	}

	if (linksInternos.length) {
		linksInternos.forEach((link) => {
			link.addEventListener("click", scrollToSection);
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initScrollSuave);


/***/ },

/***/ "./js/modules/tab-nav.js"
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Navegação por Tabs

function initTabNav() {
	const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
	const tabContent = document.querySelectorAll("[data-tab='content'] section");

	function activeTab(index) {
		tabContent.forEach((content) => {
			content.classList.remove("ativo");
		});

		tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
	}
	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add("ativo");

		tabMenu.forEach((itemMenu, index) => {
			itemMenu.addEventListener("click", () => {
				activeTab(index);
			});
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTabNav);


/***/ },

/***/ "./js/modules/tooltip.js"
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initTooltip() {
	const tooltips = document.querySelectorAll("[data-tooltip]");

	tooltips.forEach((item) => {
		item.addEventListener("mouseover", onMouseOver);
	});

	function onMouseOver(e) {
		const tooltipBox = criarTooltipBox(this);
		tooltipBox.style.top = e.pageY + "px";
		tooltipBox.style.left = e.pageX + "px";

		onMouseMove.tooltipBox = tooltipBox;
		this.addEventListener("mousemove", onMouseMove);

		onMouseLeave.tooltipBox = tooltipBox;
		onMouseLeave.element = this;
		this.addEventListener("mouseleave", onMouseLeave);
	}

	const onMouseLeave = {
		handleEvent() {
			this.tooltipBox.remove();
			this.element.removeEventListener("mouseleave", onMouseLeave);
			this.element.removeEventListener("mousemove", onMouseMove);
		},
	};

	const onMouseMove = {
		handleEvent(e) {
			this.tooltipBox.style.top = e.pageY + 20 + "px";
			this.tooltipBox.style.left = e.pageX + 20 + "px";
		},
	};

	function criarTooltipBox(element) {
		const tooltipBox = document.createElement("div");
		const text = element.getAttribute("aria-label");
		tooltipBox.classList.add("tooltip");
		tooltipBox.innerText = text;
		document.body.appendChild(tooltipBox);
		return tooltipBox;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ "./js/modules/scroll-suave.js");
/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ "./js/modules/scroll-animacao.js");
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./js/modules/accordion.js");
/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ "./js/modules/tab-nav.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");
/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./js/modules/tooltip.js");
/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ "./js/modules/dropdown-menu.js");
/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ "./js/modules/menu-mobile.js");
/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ "./js/modules/funcionamento.js");
/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ "./js/modules/fetch-animais.js");
/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ "./js/modules/fetch-bitcoin.js");












(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map