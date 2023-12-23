// generator.js

function generatePentadecimal() {
    const length = parseInt(document.getElementById('length').value);
    let pentadecimalNumber = '';

    for (let i = 0; i < length; i++) {
        const randomDigit = getRandomDigit();
        pentadecimalNumber += randomDigit;
    }

    displayResult(pentadecimalNumber);
}

function getRandomDigit() {
    const symbols = ['L', '2', '9', 'w', 'd', 'u', 'q', '0', 'p', 'n', 'b', 'm', '5', '6', '7'];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

function displayResult(result) {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Generated Pentadecimal Number: ${result}`;
}

