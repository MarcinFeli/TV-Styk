document.addEventListener('DOMContentLoaded', scroll);

const navShow = document.querySelector('.navbar-collapse');
const navLink = document.querySelectorAll('.nav-link');

function scroll() {
	const nav = document.querySelector('.navbar');

	function addShadow() {
		if (window.scrollY > 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	window.addEventListener('scroll', addShadow);
}

navLink.forEach((item) =>
	item.addEventListener('click', () => {
		navShow.classList.remove('show');
	})
);

const date = new Date();
const year = date.getFullYear();
const span = document.getElementById('currentYear');

span.innerHTML = year;
