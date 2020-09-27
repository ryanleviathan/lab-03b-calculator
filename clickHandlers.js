import { add, subtract, multiply, divide } from './mathUtils.js';

const addResults = document.getElementById('add-results');
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');

export function handleAddClick() {
    const addValue1 = addInput1.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;
    const sum = add(addValue1, addValue2);
    addResults.textContent = sum;
}

const subResults = document.getElementById('sub-results');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');

export function handleSubClick() {
    const subValue1 = subInput1.valueAsNumber;
    const subValue2 = subInput2.valueAsNumber;
    const sum = subtract(subValue1, subValue2);
    subResults.textContent = sum;
}

const divResults = document.getElementById('div-results');
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');

export function handleDivClick() {
    const divValue1 = divInput1.valueAsNumber;
    const divValue2 = divInput2.valueAsNumber;
    const sum = divide(divValue1, divValue2);
    divResults.textContent = sum;
}

const mulResults = document.getElementById('mul-results');
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');

export function handleMulClick() {
    const mulValue1 = mulInput1.valueAsNumber;
    const mulValue2 = mulInput2.valueAsNumber;
    const sum = multiply(mulValue1, mulValue2);
    mulResults.textContent = sum;
}