const display = document.getElementById('display');

function appendValue(value) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    if (operators.includes(value) && operators.includes(lastChar)) return;
    if (value === '.' && display.value.includes('.') && !operators.some(op => display.value.includes(op))) return;

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Error') {
        clearDisplay();
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value;
        if (!expression) return;

        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        const compute = new Function('return ' + expression);
        const result = compute();

        if (!isFinite(result)) {
            throw new Error("Math Error");
        }
        
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
        
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    
    if (key === 'Enter') event.preventDefault();

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        let val = key;
        if (key === '*') val = '×';
        if (key === '/') val = '÷';
        appendValue(val);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});