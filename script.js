const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
});

nav.addEventListener('mouseover', (e) => {
	if (e.target.tagName === 'A') {
		e.target.style.color = '#FF0000';
	}
});

nav.addEventListener('mouseout', (e) => {
	if (e.target.tagName === 'A') {
		e.target.style.color = '#0000FF';
	}
});
