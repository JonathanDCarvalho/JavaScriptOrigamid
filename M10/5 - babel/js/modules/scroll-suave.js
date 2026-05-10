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

export default initScrollSuave;
