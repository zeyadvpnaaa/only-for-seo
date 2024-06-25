const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const imagesContainer = document.getElementById('images-container');
const body = document.body;

let sadEmojiAdded = false;
let clickCountNo = 0;
let buttonTextIndex = 0;

const buttonTexts = [
  'YOU REALLY SURE?',
  'I\'ll give you a kiss if you say no ;)',
  'You\'re really mad at me a lot, sorry :(',
  'Even for me?',
  'ALSO FOR THE CAT SEO??!!',
  'PLS SEO IM SORRY'
];

// Set initial text for buttons
yesButton.innerText = 'YES';
noButton.innerText = 'NO';

noButton.addEventListener('click', () => {
  if (noButton.style.display !== 'none') {
    displayLoveMessage();
  }
});

yesButton.addEventListener('click', () => {
  if (!sadEmojiAdded) {
    const sadEmoji = document.createElement('img');
    sadEmoji.src = 'R.gif'; // Replace with your sad emoji image URL
    sadEmoji.alt = 'Sad emoji';
    sadEmoji.style.width = '150px'; // Adjust width as needed
    sadEmoji.style.height = 'auto'; // Maintain aspect ratio
    imagesContainer.appendChild(sadEmoji);
    sadEmojiAdded = true;
  }

  if (buttonTextIndex < buttonTexts.length) {
    yesButton.innerText = buttonTexts[buttonTextIndex];
    buttonTextIndex++;
  }

  // After reaching the end of buttonTexts, start making noButton visible
  if (buttonTextIndex === buttonTexts.length) {
    noButton.style.display = 'inline-block';
    noButton.style.fontSize = `${18 + clickCountNo * 5}px`; // Increase size of noButton on each click
    clickCountNo++;
    if (clickCountNo === 10) {
      yesButton.style.display = 'none'; // Hide yesButton after 10 clicks on yesButton
      noButton.style.fontSize = '68px'; // Final size of noButton
    }
  }
});

function displayLoveMessage() {
  body.innerHTML = `
    <h1>I knew u love me <3</h1>
    <img src="https://i.pinimg.com/736x/c2/5a/a7/c25aa7f3fe1b3dd244dfe43580f7fec8.jpg" alt="Happy Photo" style="width: 300px; height: auto;">
  `;
}
