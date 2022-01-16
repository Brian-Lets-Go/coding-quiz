var questionIndex = 0;
var time = 75;
var timer

var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start-button");
var submitBtn = document.querySelector("#submit-button");
var initialsEl = document.querySelector("#initials");
var responseEl = document.querySelector("#response");

var startSection = document.querySelector("#start-section");
var quizSection = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#high-score-section");
var highScorePageEl = document.querySelector("#high-score-display");

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");



//function to begin quiz
//start timer, switch screens, call pullQuestion()
function quizStart() {
    
    startSection.setAttribute("class", "hide");

    quizSection.setAttribute("class", "show");

    timer = setInterval(second, 1000);

    timeEl.textContent = time;

    pullQuestion();

}

//set function for setInterval
function second() {
    
    if (time <= 0) {
        
        endQuiz();
    
    } else {
        
        time--;
        timeEl.textContent = time;

    }
}


startBtn.onclick = quizStart();