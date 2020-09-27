import { handleAddClick, handleSubClick, handleDivClick, handleMulClick} from './clickHandlers.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const divButton = document.getElementById('div-button');
const mulButton = document.getElementById('mul-button');

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
divButton.addEventListener('click', handleDivClick);
mulButton.addEventListener('click', handleMulClick);