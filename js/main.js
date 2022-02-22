let result = 0;
let a = 0;
let b = 0;
let operator;

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
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#equals').addEventListener('click', equals);

// Additional
document.querySelector('#clear').addEventListener('click', clear);
// document.querySelector('#sign').addEventListener('click', );
// document.querySelector('#percent').addEventListener('click', );

function clear() {
    result = 0
    a = 0;
    b = 0;
    operator = undefined;
    document.querySelector('#computed').innerText = result;
    document.querySelector('#result').innerText = result;
}

function add() {
    document.querySelector('#computed').innerText = `${a} + `;
    operator = "+";
    b = a;
    a = 0;
    document.querySelector('#result').innerText = a;
}

function subtract() {
    document.querySelector('#computed').innerText = `${a} - `;
    operator = "-";
    b = a;
    a = 0;
    document.querySelector('#result').innerText = a;
}

function multiply() {
    document.querySelector('#computed').innerText = `${a} * `;
    operator = "*"
    b = a;
    a = 0;
    document.querySelector('#result').innerText = a;
}

function divide() {
    document.querySelector('#computed').innerText = `${a} / `;
    operator = "/"
    b = a;
    a = 0;
    document.querySelector('#result').innerText = a;
}

function equals() {
    // switch(operator) {
    //     case null:
    //         document.querySelector('#result').innerText = a;
    //         break;
    //     case '+':
    //         a +
    //         document.querySelector('#result').innerText = a;
    // }
}

function zero() {
    a *= 10;

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function one() {
    shift(1)
}

function two() {
    shift(2);
}

function three() {
    shift(3);
}

function four() {
    shift(4);
}

function five() {
    shift(5);
}

function six() {
    shift(6);
}

function seven() {
    shift(7);
}

function eight() {
    shift(8);
}

function nine() {
    shift(9);
}

function shift(val) {
    if (a === 0) {
        a = val;
    } else {
        a = a * 10 + val;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}