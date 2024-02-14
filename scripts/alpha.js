// function play() {
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
// }

function continueGame() {
    const alphabet = getRandomAlphabet();
    
    const display = document.getElementById('display');
    display.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play() {
    hideElement('home-screen');
    addElement("play-ground");
    continueGame();
}


