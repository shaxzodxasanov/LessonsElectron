window.addEventListener("DOMContentLoaded", ()=> {
	let el = document.getElementById("test");
	if(el) {
		el.innerText = "electronning versiyasi : " + process.versions["electron"];
	}
});
