let result = 0;
let b = 0;
let a = 0;
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
    reset();
    document.querySelector('#computed').innerText = result;
    document.querySelector('#result').innerText = result;
}

function reset() {
    a = 0;
    b = 0;
    operator = undefined;
}

function add() {
    operator = '+';
    document.querySelector('#computed').innerText = `${b} ${operator} `;
    
    moveVal();
}

function subtract() {
    operator = '-';
    document.querySelector('#computed').innerText = `${b} ${operator} `;
    
    moveVal();
}

function multiply() {
    operator = '*';
    document.querySelector('#computed').innerText = `${b} ${operator} `;
    
    moveVal();
}

function divide() {
    operator = '/';
    document.querySelector('#computed').innerText = `${b} ${operator} `;
    
    moveVal();
}

function moveVal() {
    a = b;
    b = 0;
    document.querySelector('#result').innerText = b;
}

function equals() {
    switch(operator) {
        case undefined:
            document.querySelector('#result').innerText = b;
            break;
        case '+':
            result = a + b;
            document.querySelector('#computed').innerText = `${a} + ${b} =`
            document.querySelector('#result').innerText = result;
            reset();
            break;
        case '-':
            result = a - b;
            document.querySelector('#computed').innerText = `${a} - ${b} =`
            document.querySelector('#result').innerText = result;
            reset();
            break;
        case '*':
            result = a * b;
            document.querySelector('#computed').innerText = `${a} * ${b} =`
            document.querySelector('#result').innerText = result;
            reset();
            break;
        case '/':
            result = a / b;
            document.querySelector('#computed').innerText = `${a} / ${b} =`
            document.querySelector('#result').innerText = result;
            reset();
            break;
    }
}

function zero() {
    b *= 10;
    
    update();
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

// Reusable functions

function shift(val) {
    if (b === 0) {
        b = val;
    } else {
        b = b * 10 + val;
    }

    update();
}

function update() {
    if (operator === undefined) {
        document.querySelector('#computed').innerText = b; 
    }

    document.querySelector('#result').innerText = b;
}