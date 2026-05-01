// Get e Set
// Podemos definir comportamentos diferentes de get e set para um método.

const button = {
	get tamanho() {
		return this._numero;
	},
	set tamanho(numero) {
		this._numero = numero;
	},
};

// Valor estático
// Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.

// Set
// Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.

const frutas = {
	lista: [],
	set nova(fruta) {
		this.lista.push(fruta);
	},
};

// Class
// Assim como em um objeto, as classes podem ter métodos de get e set também.

class Button {
	constructor(text, color) {
		this.text = text;
		this.color = color;
	}

	get element() {
		const type = this._elementType || "button";
		const buttonElement = document.createElement(type);
		buttonElement.innerText = this.text;
		buttonElement.style.color = this.color;
		return buttonElement;
	}

	set element(type) {
		this._elementType = type;
	}
}

const blueButton = new Button("Comprar", "blue");
