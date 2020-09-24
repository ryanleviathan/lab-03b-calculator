// import functions and grab DOM elements
const Input1 = document.getElementById('input-1');
const Input2 = document.getElementById('input-2');

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const mulButton = document.getElementById('mul-button');
const divButton = document.getElementById('div-button');

const Results = document.getElementById('results');


// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = Input1.value;
    const value2 = Input2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber + value2AsNumber;
    results.textContent = sum;
});

subButton.addEventListener('click', () => {
    const value1 = Input1.value;
    const value2 = Input2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber - value2AsNumber;
    results.textContent = sum;
});

mulButton.addEventListener('click', () => {
    const value1 = Input1.value;
    const value2 = Input2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber * value2AsNumber;
    results.textContent = sum;
});

divButton.addEventListener('click', () => {
    const value1 = Input1.value;
    const value2 = Input2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber / value2AsNumber;
    results.textContent = sum;
});