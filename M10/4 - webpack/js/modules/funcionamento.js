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

export default initFuncionamento;

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
