let result = 0;
let a = 0;
let b = 0;

/* Event Listeners */ 

// Numbers
document.querySelector('#zero').addEventListener('click', zero);
document.querySelector('#one').addEventListener('click', one);
document.querySelector('#two').addEventListener('click', two);
document.querySelector('#three').addEventListener('click', three);
document.querySelector('#four').addEventListener('click', four);
document.querySelector('#five').addEventListener('click', five);
document.querySelector('#six').addEventListener('click', six);
document.querySelector('#seven').addEventListener('click', seven);
document.querySelector('#eight').addEventListener('click', eight);
document.querySelector('#nine').addEventListener('click', nine);

// Operators
// document.querySelector('#add').addEventListener('click', );
// document.querySelector('#subtract').addEventListener('click', );
// document.querySelector('#multiply').addEventListener('click', );
// document.querySelector('#divide').addEventListener('click', );

// Additional
document.querySelector('#clear').addEventListener('click', clear);
// document.querySelector('#sign').addEventListener('click', );
// document.querySelector('#percent').addEventListener('click', );

function clear() {
    result = 0
    a = 0;
    b = 0;
    document.querySelector('#result').innerText = result;
}

function zero() {
    a *= 10;
    document.querySelector('#result').innerText = a;
}

function one() {
    if (a === 0) {
        a = 1;
    } else {
        a = a * 10 + 1;
    }

    document.querySelector('#result').innerText = a;
}

function two() {
    if (a === 0) {
        a = 2;
    } else {
        a = a * 10 + 2;
    }

    document.querySelector('#result').innerText = a;
}

function three() {
    if (a === 0) {
        a = 3;
    } else {
        a = a * 10 + 3;
    }

    document.querySelector('#result').innerText = a;
}

function four() {
    if (a === 0) {
        a = 4;
    } else {
        a = a * 10 + 4;
    }

    document.querySelector('#result').innerText = a;
}

function five() {
    if (a === 0) {
        a = 5;
    } else {
        a = a * 10 + 5;
    }

    document.querySelector('#result').innerText = a;
}

function six() {
    if (a === 0) {
        a = 6;
    } else {
        a = a * 10 + 6;
    }

    document.querySelector('#result').innerText = a;
}

function seven() {
    if (a === 0) {
        a = 7;
    } else {
        a = a * 10 + 7;
    }

    document.querySelector('#result').innerText = a;
}

function eight() {
    if (a === 0) {
        a = 8;
    } else {
        a = a * 10 + 8;
    }

    document.querySelector('#result').innerText = a;
}

function nine() {
    if (a === 0) {
        a = 9;
    } else {
        a = a * 10 + 9;
    }

    document.querySelector('#result').innerText = a;
}
