const itemListContainer = document.querySelector('#itemsListContainer');
const inputBox = document.querySelector('#item');
const addItemButton = document.querySelector('#addItemButton');

function addItemButtonIsPressed(){
	itemText = inputBox.value;
	inputBox.value = "";
	
	const element = document.createElement('li');
	const elementText = document.createElement('span');
	const elementDeleteButton = document.createElement('button');
	
	element.setAttribute("id","aListElement");
	elementDeleteButton.setAttribute("id","aElementDeleteButton");

	elementText.textContent = itemText;
	elementDeleteButton.textContent = 'Delete';
	element.appendChild(elementText);
	element.appendChild(elementDeleteButton);
	itemListContainer.appendChild(element);
	elementDeleteButton.addEventListener('click',deleteButtonIsPressed);
}

addItemButton.addEventListener('click',addItemButtonIsPressed);

function deleteButtonIsPressed(event){
	const deleteButton = event.target;
	const spanItem = deleteButton.parentElement;

	spanItem.remove();
}

