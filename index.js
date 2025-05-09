const startBtn = document.querySelector('.str');
const content = document.querySelector('.hold');
const input = document.querySelector('#userInput');

//array with random sentences

const randomSen = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is fun to learn.",
    "Practice makes perfect.",
    "Never stop learning new things.",
    "Coding challenges build skill."
]



function getRandomSen(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i]; 
}

startBtn.addEventListener('click', function(){
    
    content.textContent = "";
    content.append(getRandomSen(randomSen));
   
});

