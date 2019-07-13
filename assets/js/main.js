const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');

let showNav = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showNav) {
		menuBtn.classList.add('close');
		nav.classList.add('show');
		navList.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		showNav = true;
	} else {
		menuBtn.classList.remove('close');
		nav.classList.remove('show');
		navList.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		showNav = false;
	}
}

particlesJS.load('particles-js', 'assets/js/particles.json');
