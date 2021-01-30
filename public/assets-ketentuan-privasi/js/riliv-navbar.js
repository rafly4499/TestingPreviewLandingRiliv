// Script For Navbar Scroll
window.onscroll = function() {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById("navbar-custom").classList.remove("fixed");
		document.getElementById("navbar-custom").classList.add("sticky-top");
		document.getElementById("navbar-custom").classList.add("shadow");
	} else {
		document.getElementById("navbar-custom").classList.remove("sticky-top");
		document.getElementById("navbar-custom").classList.add("fixed");
		document.getElementById("navbar-custom").classList.remove("shadow");
	}
}

// Script for navbar active
let header = document.getElementById("navbarText");
let btns = header.getElementsByClassName("nav-item");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
