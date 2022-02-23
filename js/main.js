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
document.querySelector('#sign').addEventListener('click', sign);
document.querySelector('#percent').addEventListener('click', percent);
document.querySelector('#decimal').addEventListener('click', decimal);

/* Variables */

let a = '0'
let b = '0';
let result = '0';
let storedVal = '0';
let operator;
let equalsWasPressed = false;

/* Functions */

// Number Button Functions

function zero() {
    append('0');
}

function one() {
    append('1')
}

function two() {
    append('2');
}

function three() {
    append('3');
}

function four() {
    append('4');
}

function five() {
    append('5');
}

function six() {
    append('6');
}

function seven() {
    append('7');
}

function eight() {
    append('8');
}

function nine() {
    append('9');
}

function append(val) {
    if (val !== '0') {
        if(b === '0') {
            b = val.toString();
        } else {
            b += val.toString();
        }
    } else {
        if (b !== '0') {
            b += '0';
        }
    }

    if (operator === undefined) {
        document.querySelector('#computed').innerText = Number(b); 
    }

    document.querySelector('#result').innerText = Number(b);
}

// Special Button Functions

function clear() {
    a = '0';
    b = '0';
    result = '0';
    operator = undefined;
    equalsWasPressed = false;
    document.querySelector('#computed').innerText = Number(b);
    document.querySelector('#result').innerText = Number(b);
}

function sign() {
    b = String(Number(b) * -1);

    document.querySelector('#result').innerText = Number(b);
}

function percent() {
    b = String(Number(b) / 100);
    document.querySelector('#computed').innerText = Number(b);
    document.querySelector('#result').innerText = Number(b);
}

function decimal() {
    if (!b.includes('.')) {
        b += '.';
    }

    if(operator === undefined) {
        document.querySelector('#computed').innerText = b;
    }

    document.querySelector('#result').innerText = b;
}

// Operation Button Functions

function add() {
    operator = '+';

    if (equalsWasPressed) {
        b = result;
        document.querySelector('#computed').innerText = `${Number(storedVal)} ${operator} `;
    } else {
        document.querySelector('#computed').innerText = `${Number(b)} ${operator} `;
    }

    moveVal();
}

function subtract() {
    operator = '-';

    if (equalsWasPressed) {
        b = result;
        document.querySelector('#computed').innerText = `${Number(storedVal)} ${operator} `;
    } else {
        document.querySelector('#computed').innerText = `${Number(b)} ${operator} `;
    }

    moveVal();
}

function multiply() {
    operator = '*';

    if (equalsWasPressed) {
        b = result;
        document.querySelector('#computed').innerText = `${Number(storedVal)} ${operator} `;
    } else {
        document.querySelector('#computed').innerText = `${Number(b)} ${operator} `;
    }

    moveVal();
}

function divide() {
    operator = '/';

    if (equalsWasPressed) {
        b = result;
        document.querySelector('#computed').innerText = `${Number(storedVal)} ${operator} `;
    } else {
        document.querySelector('#computed').innerText = `${Number(b)} ${operator} `;
    }

    moveVal();
}

function moveVal() {
    a = b;
    b = '0';
    document.querySelector('#result').innerText = Number(b);
}

function equals() {
    let temp;

    if(equalsWasPressed) {
        temp = storedVal;
    } else {
        temp = a;
    }

    console.log("temp:", temp);

    switch(operator) {
        case undefined:
            // if () {
            //     document.querySelector('#result').innerText = Number(b);
            // }
            reset();
            break;
        case '+':
            result = String(Number(temp) + Number(b));
            storedVal = result;

            if (Math.sign(Number(b)) === -1) {
                document.querySelector('#computed').innerText = `${Number(temp)} + (${Number(b)}) =`
            } else {
                document.querySelector('#computed').innerText = `${Number(temp)} + ${Number(b)} =`
            }

            document.querySelector('#result').innerText = Number(result);

            reset();
            break;
        case '-':
            result = String(Number(temp) - Number(b));
            storedVal = result;

            if (Math.sign(Number(b)) === -1) {
                document.querySelector('#computed').innerText = `${Number(temp)} - (${Number(b)}) =`
            } else {
                document.querySelector('#computed').innerText = `${Number(temp)} - ${Number(b)} =`
            }
            
            document.querySelector('#result').innerText = Number(result);
            reset();
            break;
        case '*':
            result = String(Number(temp) * Number(b));
            storedVal = result;

            document.querySelector('#computed').innerText = `${Number(temp)} * ${Number(b)} =`
            document.querySelector('#result').innerText = Number(result);
            reset();
            break;
        case '/':
            result = temp / b;
            storedVal = result;

            document.querySelector('#computed').innerText = `${Number(temp)} / ${Number(b)} =`
            document.querySelector('#result').innerText = Number(result);
            reset();
            break;
    }

    equalsWasPressed = true;

    console.log ("a", a,"\nb", b, "\nresult", result, "\nstoredVal", storedVal, "\nequalsWasPressed", equalsWasPressed);
}

function reset() {
    a = result;
    b = '0';
    result = '0';
    operator = undefined;
}