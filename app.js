// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulButton = document.getElementById('mul-button');
const mulResults = document.getElementById('mul-results');

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResults = document.getElementById('div-results');

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber + value2AsNumber;
    addResults.textContent = sum;
});

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber - value2AsNumber;
    subResults.textContent = sum;
});

mulButton.addEventListener('click', () => {
    const value1 = mulInput1.value;
    const value2 = mulInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber * value2AsNumber;
    mulResults.textContent = sum;
});

divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    const sum = value1AsNumber / value2AsNumber;
    divResults.textContent = sum;
});