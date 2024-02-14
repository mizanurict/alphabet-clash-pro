function hideElement(removeElementId) {
    const hideElementClass = document.getElementById(removeElementId);
    hideElementClass.classList.add("hidden");
}

function addElement(addElementId) {
    const addElementClass = document.getElementById(addElementId);
    addElementClass.classList.remove("hidden");
}
function getElementScoreById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElement(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function setBackgroundElementById(colorId) {
    const element = document.getElementById(colorId);
    const text = element.innerText;
    return text;
}

function removeBackgroundColor(colorId) {
    const color = document.getElementById(colorId);
    color.classList.remove("bg-orange-500");
}

function setBackgroundColor(colorId) {
    const color = document.getElementById(colorId);
    color.classList.add("bg-orange-500");
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    
    return alphabet;
}