// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const content2 = document.createElement('p');
content2.classList.add('p');
content2.textContent = "Hey!! I'm red";
container.appendChild(content2);
content2.style.color = 'red';

const content3 = document.createElement('h3');
content3.classList.add('h3');
content3.textContent = "I'm in Blue";
content3.style.color = 'blue';
container.appendChild(content3);

const content4 = document.createElement('div');
content4.classList.add('div');
content4.style.border = '1px solid black';
content4.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p = document.createElement('p');
p.textContent = 'ME TOO!';

content4.appendChild(h1);
content4.appendChild(p);

container.appendChild(content4);

