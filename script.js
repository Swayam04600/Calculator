// script.js
let display = document.getElementById('display');
const soundEffect = new Audio('click-sound.mp3'); // Add a path to your click sound file

function playSound() {
    soundEffect.currentTime = 0;
    soundEffect.play();
}

function inputNumber(number) {
    playSound();
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function inputOperation(operation) {
    playSound();
    display.innerText += ` ${operation} `;
}

function calculateResult() {
    playSound();
    try {
        let result = eval(display.innerText);
        display.innerText = result;
        highlightDisplay();
    } catch (e) {
        display.innerText = 'Error';
    }
}

function clearDisplay() {
    playSound();
    display.innerText = '0';
}

function deleteLast() {
    playSound();
    if (display.innerText !== '0') {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText.length === 0) {
            display.innerText = '0';
        }
    }
}

function highlightDisplay() {
    display.classList.add('highlight');
    setTimeout(() => {
        display.classList.remove('highlight');
    }, 500);
}
