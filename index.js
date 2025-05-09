const startBtn = document.querySelector('.str');
const content = document.querySelector('.hold');
const inp = document.querySelector('#userInput');

//array with random sentences
const randomSen = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is fun to learn.",
    "Practice makes perfect.",
    "Never stop learning new things.",
    "Coding challenges build skill."
]


let storeInput = [];

function getRandomSen(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i]; 
}



//start button
startBtn.addEventListener('click', function(){

    content.textContent = "";
    const sentenceText = getRandomSen(randomSen);
    content.textContent = sentenceText;
    
   
 
//check input in real time
   inp.addEventListener("input" , function() {

    if(inp.value === sentenceText){
        alert("youwin")
        } 
});

});



