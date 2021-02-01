var toggleBtn = document.getElementById('toggle-theme');
var toggleBtnIcon = document.querySelector('#toggle-theme > span > i');

function toggleMode(mode){
	if (mode == true) {
		console.log('ToggleButton dark theme: on');
		document.body.classList.add('is-dark');
		toggleBtnIcon.classList.remove('fa-moon');
		toggleBtnIcon.classList.add('fa-sun');
		toggleBtn.setAttribute('title','Light Mode');
	} else {
		console.log('ToggleButton dark theme: off');
		document.body.classList.remove('is-dark');
		toggleBtnIcon.classList.remove('fa-sun');
		toggleBtnIcon.classList.add('fa-moon');
		toggleBtn.setAttribute('title','Dark Mode');
	}
}

toggleBtn.addEventListener('click', function() {
	document.body.classList.toggle('is-dark');
	if (document.body.classList.contains('is-dark')) {
		localStorage.setItem('dark_mode', true);
		toggleMode(true);
	} else {
		localStorage.setItem('dark_mode', false);
		toggleMode(false);
	}
});

if (localStorage.getItem('dark_mode') == 'true') {
	toggleMode(true);
} else {
	toggleMode(false);	
}
