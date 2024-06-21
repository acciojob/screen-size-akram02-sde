const container = document.getElementById("sizeInfo");
let x = window.innerWidth;
let y = window.innerHeight;

renderXY();

function renderXY() {
	container.innerText = ""
	let str = document.createElement("h1");
	str.innerText = `Width: ${x} and Height: ${y}`;
	container.append(str);
}

window.addEventListener("resize", (e) => {
	x = window.innerWidth;
	y = window.innerHeight;
	renderXY()
})


