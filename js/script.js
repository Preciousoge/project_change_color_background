
const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'blue', 'green', 'gray', 'yellow', 'violet'];

body.style.backgroundColor = 'orange';
button.addEventListener ('click', changeBgColor);

function changeBgColor (){
	const colorIndex = parseInt(Math.random() * colors.length);
	body.style.backgroundColor = colors[colorIndex];
}




//Choose a random color
/*const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}


