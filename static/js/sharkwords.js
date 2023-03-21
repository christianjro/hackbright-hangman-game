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

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  // for (const letter of word){
  //   const newDiv = document.createElement("div");
  //   newDiv.className = "letter-box";
  //   newDiv.classList.add(`${letter}`);
  //   document.getElementById('word-container').appendChild(newDiv)
  // }

  for (const letter of word) {
    const newDiv = `<div class="letter-box ${letter}"></div>`;
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', newDiv);
  }
  
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  // Replace this with your code
  for (const letter of ALPHABET) {
    const newBtn = `<button class=${letter}">${letter}</button>`;
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', newBtn);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.setAttribute('disabled', "True")
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

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

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
    button.addEventListener('click', () => {
      const letter = button.innerText
      if(isLetterInWord(letter, word)){
        handleCorrectGuess(letter)
      } else {
        handleWrongGuess()
      }
      disableLetterButton(button)
    })
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
