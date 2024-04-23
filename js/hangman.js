const wordE1 = document.getElementById('Word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = words[selectedIndex]

const correctLetters = []
const wrongLetters = []

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
    </span>
    ` ).join('')
    }
    `
const innerWord = wordEl.innerText.replace(/\n/g, '')

if (innerWord == selectedWord) {
    finalMessage.innerText = 'Congratulations! You Won!"
    popup.style.display = 'flex'
}
}

// Update the wrong letters
function updateWrongLettersEl {

}

// Show Notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {

    })
}


// Keydown Letter Press
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keycode <=90)
    const letter = e.key

     if(selectedWord.includes(letter)) {
        if( !correctLetters.includes(letter)) {
            correctletters.push(letter)

        } displayWorld() {
            showNotification()
        }
     }
})


displayworld()
