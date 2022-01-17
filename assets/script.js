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

//Questions
var questions = [
    {
        title: "Commonly Used data types do not include:",
        choices: ["stings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed with _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
        answer: "all the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly braces", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
]

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
        
        finishQuiz();
    
    } else {
        
        time--;
        timeEl.textContent = time;

    }
}

//pull question from array and display in questionEl
function pullQuestion() {
    
    //find corresponding question in array
    var question = questions[questionIndex];

    //find corresponding quesition title element in HTML
    var titleEl = document.getElementById("question");

    //display title of current question in title element
    titleEl.textContent = question.title;

    //clear choices element
    choicesEl.innerHTML = "";

    //display choices
    question.choices.forEach(function (answer, i) {
        
         var answerButton = document.createElement("button");
        
         answerButton.setAttribute("class", "choice");
        
         answerButton.setAttribute("value", answer);

         answerButton.textContent = i + 1 + " - " + answer;

         answerButton.onClick = answerSelect;

         choicesEl.appendChild(answerButton);
     });
}

//click on question answer
//if wrong deduct time, display response and go to next question 
function answerSelect() {
    if (this.value !== questions[questionIndex].answer) {
        
        time -= 15;

    if (time < 0) {
        time = 0;
    }

    timeEl.textContext = time;

    responseEl.textContent = "Last Question Incorrect";

    //If correct
    } else {

    responseEl.textContent = "Last Question Correct";    

    }

    //display response for 3 seconds
    responseEl.setAttribute("class", "response show");

    setTimeout(function() {
        responseEl.setAttribute("class", "response hide");
    }, 3000);

    //advance question
    questionIndex++;

    //end quiz after last question
    if (questionIndex === questions.length) {
        finishQuiz();
    } else {
        pullQuestion();
    }
}

startBtn.onclick = quizStart;