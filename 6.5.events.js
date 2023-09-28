function alertFunc(btn){
	alert(btn.id);
}

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
	btn.addEventListener('click', alertFunc(btn));
})
