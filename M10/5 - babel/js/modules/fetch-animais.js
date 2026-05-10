import initAnimaNumeros from "./anima-numeros.js";

function initFetchAnimais() {
	async function fetchAnimais(url) {
		try {
			const animaisResponse = await (await fetch(url)).json();
			const numerosGrid = document.querySelector(".numeros-grid");
			animaisResponse.forEach((animal) => {
				const divAnimal = createAnimail(animal);
				numerosGrid.appendChild(divAnimal);
			});
			initAnimaNumeros();
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

export default initFetchAnimais;
