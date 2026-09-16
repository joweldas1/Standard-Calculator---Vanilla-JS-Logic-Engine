const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval এর নিরাপত্তা নিশ্চিত করতে সাধারণ রিপ্লেস ব্যবহার করা যেতে পারে
        let sanitizedValue = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(sanitizedValue);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// কম্পিউটার কিবোর্ড দিয়ে চালানোর জন্য ইভেন্ট লিসেনার
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});