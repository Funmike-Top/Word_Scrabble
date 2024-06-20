// how to select html element.
// id selector
const wordElement = document.getElementById('word')
// alert('Come play Scrabble with me!')
const userInput = document.getElementById('userinput')
// wordElement.textContent = 'Apple'
//How to use an array
const words = [
    'Dove', 
    'Descendants',
    'Mal',
    'Evie',
    'Carlos',
    'Jay',
   'Jane',
   'Godmother',
   'Sofia',
   'Cameron'
]
// How to use sound or audio in Javascript
const audio=new Audio()
// audio.play()
// audio.loop = true
function tone(sound){
    audio.src=sound
    audio.load()
    audio.play()
    // audio.loop = true
}

let word, shuffleWord
// wordElement.textContent = words[Math.floor(Math.random() * words.length)]
// Generate Randow Words
function getRandomWord(text){
    return words[Math.floor(Math.random() * words.length)]
}
// Generate shuffle word
function getScrambleWord(scramble){
    const sword =scramble.split('')
    sword.sort(() => 0.5 - Math.random())
    return sword.join('')
}
// word=getRandomWord(words) 
// shuffleWord=getScrambleWord(word)
// console.log(word)
// console.log(shuffleWord)
// new word 
function newWord(){
    word=getRandomWord(words)
    shuffleWord=getScrambleWord(word)
    wordElement.textContent=shuffleWord
}
newWord()
function playGame(){
    console.log(wordElement.textContent, word)
    if(  userInput.value.toLowerCase() === word.toLowerCase()){
        alert('correct answer👍❤️')
        tone('correct-answer.wav')
        newWord()
    }else{
        alert('Incorrect Answer! 👎😢')
        tone('incorrect.wav')
    }
}