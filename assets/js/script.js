var checkscore = document.getElementById("highscore");
var timer = document.getElementById("time-left");
var triviaMain = document.getElementById("trivia-section");
var triviaStart = document.getElementById("start-trivia");
var startButton = document.getElementById("start");
var questionContainer = document.getElementById("question-container");
var questionTitle = document.getElementsByClassName("trivia-title");
var triviaQuestions = document.getElementById("trivia-questions");
var choices = document.getElementById("choices");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var notify = document.getElementsByClassName("notify")
var triviaSubmit = document.getElementById("trivia-submit");
var submitbutton = document.getElementById("initials-submit");
var retakeTrivia = document.getElementById("retake-trivia");
var userInput = document.getElementById("userinput");
var home = document.getElementById("return");
var timerStart = 120;
var usersscores = [];
var usersinitials = [];
var questions = [
    {
        question: "What was the original team name before becoming The Yankees in 1913?",
        choices:["Senators", "Pirates", "Americans", "Highlanders"],
        answer: "Highlanders",
    },
    {
        question: "Who did the Yankees defeat to win their first world series?",
        choices: ["Boston", "Giants", "Tigers", "Senators"],
        answer: "Giants",
    },
    {
        question: "How many world series championships do The Yankees have currently?",
        choices: ["10", "25", "7", "27"],
        answer: "27",
    },
    {
        question: "Who is The Yankees single season homerun leader?",
        choices: ["Ruth", "Judge", "Maris", "Gehrig"],
        answer: "Judge",
    },
    {
        question: "Who holds The Yankees single season saves record?",
        choices: ["Chapman", "Lyle", "Rivera", "Gossage"],
        answer: "Rivera",
    },
    {
        question: "Who holds The Yankees single season strikeout record?",
        choices: ["Cole", "Guidry", "Cone", "Sabathia"],
        answer: "Cole",
    },
    {
        question: "Who holds The Yankees team homerun record?",
        choices: ["Judge", "Maris", "Ruth", "Mantle"],
        answer: "Ruth",
    },
    {
        question: "What division do The Yankees play?",
        choices: ["NL East", "AL West", "AL Central", "AL East"],
        answer: "AL East",
    },
    {
        question: "When was the last season The Yankees posted a losing record?",
        choices: ["1992", "2008", "2010", "1986"],
        answer: "1992",
    },
    {
        question: "When did The Yankees win their first World Series?",
        choices: ["1914", "1920", "1932", "1923"],
        answer: "1923",
    }
    
]
startButton.addEventListener('click', function(event) {
    // SHOW TRIVIA QUESTIONS
    var element = event.target; 
    if (element) {
        triviaStart.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        choices.classList.remove("hidden");
    }
    displayQuestion();
});

var qIndex = 0;

function displayQuestion() {
    if (qIndex === choices.length) {
        triviaSubmit.classList.remove("hidden");
        questionContainer.classList.add("hidden");

    } else {
        triviaQuestions.innerText = questions[qIndex].question;
        button1.innerHTML = questions[qIndex].choices[0];
        button2.innerHTML = questions[qIndex].choices[1];
        button3.innerHTML = questions[qIndex].choices[2];
        button4.innerHTML = questions[qIndex].choices[3];
    }
}

function choiceSelect() {
    if (element.matches("#choices button") === questions[qIndex].answer) {
        notify.classList.remove("hidden" + "CORRECT!");
    }  else {
        notify.classList.remove("hidden" + "INCORRECT!");
    } 
    choiceSelect()
    displayQuestion();
}

// console.log(questions)
// function showQuestion() {
//     // console.log(questions[9].answer)
//     for (var i = 0; i < questions[0].choices.length; i++) {
//         var button = document.createElement("button")
//         button.innerHTML = questions[i].choices
//         console.log(button)
        
//     }
// }

// showQuestion();
// document.addEventListener("click", function(event) {
//     var element = event.target;
//     if (element.matches("#choices button")) {

//         // MOVE CURSOR
//         // CHECK FOR CORRECT ANSWER
//         // IF WRONG, SUBTRACT TIME
//         // IF NO MORE QUESTIONS, SHOW END SCREEN
//     }
// });

submitbutton.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#submit")) {
        questionContainer.classList.add("hidden");
        triviaSubmit.classList.remove("hidden");
    }
});

retakeTrivia.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#retake")) {
        triviaSubmit.classList.add("hidden");
        submitbutton.classList.remove("hidden");
    }
});

checkscore.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#highscore")) {
        triviaStart.classList.add("hidden");
        questionContainer.classList.add("hidden");
        choices.classList.add("hidden");
        triviaSubmit.classList.add("hidden");
        userInput.classList.remove("hidden");
    }
});

home.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#return")) {
        userInput.classList.add("hidden");
        triviaStart.classList.remove("hidden");
    }
});