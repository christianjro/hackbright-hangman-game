const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;


const createDivsForChars = (word) => {
  for (const letter of word) {
    const newDiv = `<div class="letter-box ${letter}"></div>`;
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', newDiv);
  }
};


const generateLetterButtons = () => {
  for (const letter of ALPHABET) {
    const newBtn = `<button class=${letter}">${letter}</button>`;
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', newBtn);
  }
};


const disableLetterButton = (buttonEl) => {
  buttonEl.setAttribute('disabled', "True")
};


const isLetterInWord = (letter, word) => {
  return word.includes(letter);
};


const handleCorrectGuess = (letter) => {
  // Replace this with your code
  const word = document.querySelectorAll(".letter-box")
  for (const char of word){
    const [name1, name2] = char.className.split(" ")
    // console.log(name2)
    if (letter === name2){
      char.innerHTML = `${letter}`
    }
  }
};


const handleWrongGuess = () => {
  numWrong += 1;

  if (numWrong === 5){
    const buttons = document.querySelectorAll("button")
    for (const button of buttons){
      disableLetterButton(button)
    }
    const message = document.querySelector("#play-again")
    message.style.display = "block"

  } else {
    sharkImage = document.querySelector("#shark-img img")
    sharkImage.setAttribute('src', `/static/images/guess${numWrong}.png`)
    // sharkImage.innerHTML = `<img src="static/images/guess${numWrong}.png">`
  }
};


const handleButtonClick = (event) => {
  const button = event.target;
  const letter = button.innerText;
  const word = 'hello';

  if(isLetterInWord(letter, word)){
    handleCorrectGuess(letter)
  } else {
    handleWrongGuess()
  }

  disableLetterButton(button)
  isGameOver()
}


//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};


const isGameOver = () => {
  let counter = 0;
  letter_boxes = document.querySelectorAll(".letter-box")
  for (const box of letter_boxes) {
    if (box.innerText) {
      counter += 1;
    }
  }
  if (counter === letter_boxes.length) {
    const message = document.querySelector("#win")
    message.style.display = "block"
    message.addEventListener('click', resetGame)
  }
}


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', (event) => {handleButtonClick(event)})
  }

  const playAgain = document.querySelector("#play-again")
  playAgain.addEventListener('click', resetGame)
})();
