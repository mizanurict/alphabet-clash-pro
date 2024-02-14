function hideElement(removeElementId) {
    const hideElementClass = document.getElementById(removeElementId);
    hideElementClass.classList.add("hidden");
}

function addElement(addElementId) {
    const addElementClass = document.getElementById(addElementId);
    addElementClass.classList.remove("hidden");
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