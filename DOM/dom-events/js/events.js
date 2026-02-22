// Option 2 for event handler 
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}

function makeRed(){
    document.body.style.backgroundColor='red';
}

const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function () {
    document.body.style.backgroundColor='blue';
}

// option 3: different version
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick=makePurple;
function makePurple (){

    document.body.style.backgroundColor = 'purple';
}