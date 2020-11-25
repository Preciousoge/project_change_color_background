
/*const body = document.querySelector('body');
const button = document.querySelector('button');
const color = ['red', 'blue', 'green', 'gray', 'yellow', 'violet'];

body.style.backgroundColor = 'orange';
button.addEventListener ('click', changeColor);

function changeColor (){
	const colorIndex = parseInt(Math.random() * color.length);
	body.style.backgroundColor = color[colorIndex];
}*/




//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}


