function alertFunc(e){
	alert(e);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunc);
