
const body = document.querySelector('body');
const button = document.querySelector('button');
const color = ['red', 'blue', 'green', 'gray', 'yellow', 'violet'];

body.style.backgroundColor = 'orange';
button.addEventListener = ('click', changeColor);

function changeColor (){
	const colorIndex = parseInt(Math.random() * color.length);
	body.style.backgroundColor = color[colorIndex];
}



