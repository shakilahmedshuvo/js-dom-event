// console.log("this is a separate file");

// option 1: directly set on the HTML element
/* <button onclick="console,console.log(65);">Another Button</button> */


//option 2:add onclick function on the htmol elemenet..... 

// {------------important------------}

// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
//option 3:add onclick function on the html element..... 
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue(params) {
    document.body.style.backgroundColor = 'blue';
}

// option 3.5(another option):add onclick function on the html element.....

// {------------ for some time use ------------}

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4:add onclick function on the html element.....
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4.5:add onclick function on the html element.....
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option 4 (final):add onclick function on the html element......................................
// {------------important------------}
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = "goldenrod";
})