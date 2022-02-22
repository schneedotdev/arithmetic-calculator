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
    if (a === 0) {
        a = 1;
    } else {
        a = a * 10 + 1;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function two() {
    if (a === 0) {
        a = 2;
    } else {
        a = a * 10 + 2;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function three() {
    if (a === 0) {
        a = 3;
    } else {
        a = a * 10 + 3;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function four() {
    if (a === 0) {
        a = 4;
    } else {
        a = a * 10 + 4;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function five() {
    if (a === 0) {
        a = 5;
    } else {
        a = a * 10 + 5;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function six() {
    if (a === 0) {
        a = 6;
    } else {
        a = a * 10 + 6;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function seven() {
    if (a === 0) {
        a = 7;
    } else {
        a = a * 10 + 7;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function eight() {
    if (a === 0) {
        a = 8;
    } else {
        a = a * 10 + 8;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}

function nine() {
    if (a === 0) {
        a = 9;
    } else {
        a = a * 10 + 9;
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = a; 
    }

    document.querySelector('#result').innerText = a;
}
