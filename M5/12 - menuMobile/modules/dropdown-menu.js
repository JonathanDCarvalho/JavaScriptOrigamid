import outsideClick from "./outsideClick.js";
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
		outsideClick(this, ["touchstart", "click"], () => {
			this.classList.remove("active");
		});
	}
}

export default initDropDownMenu;
