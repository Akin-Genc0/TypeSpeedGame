const startBtn = document.querySelector('.str');
const content = document.querySelector('.hold');
const inp = document.querySelector('#userInput');
const timer =  document.querySelector("p");
 const winerScreen = document.getElementById("winnerMsg");


//array with random sentences
const randomSen = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is fun to learn.",
    "Practice makes perfect.",
    "Never stop learning new things.",
    "Coding challenges build skill."
]


//creaeting reset button
const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset"



let storeInput = [];

function getRandomSen(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i]; 
}

 
let setTime;  //global varibal

//timer function
    function myTimer() {
        let text = timer.textContent;
        let increment  =  Number(text) + 1 
        timer.textContent > 0 ? timer.textContent = increment : 0;
    }




//start button
startBtn.addEventListener('click', function(){

    content.textContent = "";
    const sentenceText = getRandomSen(randomSen);
    content.textContent = sentenceText;

    timer.textContent = 1;
    setTime = setInterval(myTimer, 1000);

 
//check input in real time
   inp.addEventListener("input" , function() {

    

    if(inp.value === sentenceText){

        let timeTaken = timer.textContent;
        winerScreen.textContent = `You WinTime: ${timeTaken} seconds`;
        winerScreen.append(resetBtn);
        winerScreen.style.color = "green";
        clearInterval(setTime);
       
        } 
});

});


resetBtn.addEventListener('click', function(){

  
    const sentenceText = getRandomSen(randomSen);
    content.textContent = sentenceText;
    inp.value = "";
    timer.textContent = 1;
    setTime = setInterval(myTimer, 1000)
     winerScreen.textContent = "";


});


