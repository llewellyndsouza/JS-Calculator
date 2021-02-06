let operand1 = NaN;
let operand2 = NaN;
let isError = true;
let disp = document.getElementsByClassName('screen')[0];

function setListeners() {
    let btns = document.getElementsByClassName('button');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', event => {
            buttonClick(event.target);
        });
    }
}

setListeners();

function buttonClick(btn) {

    if (btn.id == 'digit') {
        appendDigit(btn.textContent);
    } else if (btn.id == 'operator') {
        disp.innerHTML = 'operator';
        isError = true;
    } else if (btn.id == 'clear') {
        clear();
    } else {
        disp.innerHTML = 'somehtin glse';
        isError = true;
    }
}

function appendDigit(digit) {
    if (isError) clear();
    disp.innerHTML += digit;
}

function clear() {
    disp.innerHTML = '';
    operand1 = NaN;
    operand2 = NaN;
    isError = false;
}