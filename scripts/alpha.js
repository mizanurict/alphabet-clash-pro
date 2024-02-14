// function play() {
//     const homeScreen = document.getElementById("home-screen");
//     homeScreen.classList.add("hidden");
//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
// }

function handleKeyboard(event) {
    const playerPress = event.key;
    
    if (playerPress === 'Escape') {
        gameOver();
    }

  const expectedAlphabet = document.getElementById("display");
  const expectedValue = expectedAlphabet.innerText;
  const expectedAlphabetPress = expectedValue.toLowerCase();

  if (playerPress === expectedAlphabetPress) {
    const currentScore = getElementScoreById("current-score");
    const updateScore = currentScore + 1;

    setTextElement("current-score", updateScore);

    // ------------------
    // const currentScoreElement = document.getElementById('current-score');
    // const scoreText = currentScoreElement.innerText;
    // const scoreValue = parseInt(scoreText);

    // const newScore = scoreValue + 1;

    // currentScoreElement.innerText = newScore;

    removeBackgroundColor(expectedAlphabetPress);
    continueGame();
  } else {
    const currentLife = getElementScoreById("current-life");
    const updateLife = currentLife - 1;

      setTextElement("current-life", updateLife);
      
      if (updateLife === 0) {
          gameOver();
      }

    // --------------
    // const currentLifeElement = document.getElementById('current-life');
    // const lifeText = currentLifeElement.innerText;
    // const lifeValue = parseInt(lifeText);

    // const newLife = lifeValue - 1;

    // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener("keyup", handleKeyboard);

function continueGame() {
  const alphabet = getRandomAlphabet();

  const display = document.getElementById("display");
  display.innerText = alphabet;

  setBackgroundColor(alphabet);
}

function play() {
    hideElement("home-screen");
    hideElement('final-score')
    addElement("play-ground");
    
    setTextElement("current-life", 5);
    setTextElement("current-score", 0);

  continueGame();
}

function gameOver() {
    hideElement('play-ground');
    addElement("final-score");

    const totalScore = getElementScoreById("current-score");
    setTextElement("total-score", totalScore);

    const currentAlphabet = setBackgroundElementById("display");

    removeBackgroundColor(currentAlphabet);

}