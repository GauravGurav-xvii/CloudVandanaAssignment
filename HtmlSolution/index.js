let display = document.getElementById('result');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    if (!isNaN(event.key) || ['+', '-', '*', '/', '.', '=', 'Enter'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

