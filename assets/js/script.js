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
var answerNotify = document.getElementById("notify");
// var textCorrect = document.createTextNode("CORRECT!");
// var textIncorrect = document.createTextNode("INCORRECT!");
var triviaSubmit = document.getElementById("trivia-submit");
var submitbutton = document.getElementById("initials-submit");
var retakeTrivia = document.getElementById("retake-trivia");
var userInput = document.getElementById("userinput");
var usersScores = document.getElementById("usersscores");
var initials = document.getElementById("initials");
var home = document.getElementById("return");
var timeCount;
var timerStart = 120;
var usersScores = [];
// var usersinitials = [];
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

var qIndex = 0;

function displayQuestion() {
    var currQuest = questions[qIndex];
    var triviaQuestions = document.getElementById("trivia-questions");

    triviaQuestions.textContent = currQuest.question;

    choices.innerHTML = "";

    for (let i = 0; i < currQuest.choices.length; i++) {
        var choice = currQuest.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "button");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = `${i+1}. ${choice}`;
        choices.appendChild(choiceButton);
    }
}

startButton.addEventListener('click', function(event) {
    // SHOW TRIVIA QUESTIONS
    var element = event.target; 
    if (element) {
        triviaStart.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        choices.classList.remove("hidden");
    }
    displayQuestion();
    timeCount = setInterval(clockTimer, 1000);
});

function clockTimer() {
    timerStart--;
    timer.textContent = `Timer: ${timerStart}`;
    if (timerStart <= 0) {
        clearInterval(timeCount);
        // endTrivia();
    }
}

function choiceSelect(event) {
    var element = event.target;
    console.log(element)
    if (element.value !== questions[qIndex].answer) {
        timerStart -= 15
        if (timerStart < 0) {
            timerStart = 0
        } 
        answerNotify.classList.remove("hidden");
        answerNotify.textContent = "INCORRECT!";
    }  else {
        answerNotify.classList.remove("hidden");
        answerNotify.textContent = "CORRECT!";
    } 
}

// function finalScore() {
// usersScores = 
 

}

choices.onclick = choiceSelect;
choices.addEventListener("click", function() {
    if (qIndex++ < 9) {
        displayQuestion();
        console.log(qIndex)
    } else {
        clockTimer()
        qIndex = 0,
        console.log(qIndex)
        answerNotify.classList.add("hidden");
        questionContainer.classList.add("hidden");
        choices.classList.add("hidden");
        triviaSubmit.classList.remove("hidden");
    }

});

submitbutton.addEventListener('click', function(event) {
    event.preventDefault();
    var playersResults = {
        initials: initials.value,
        score: usersScores.value,
    }
    
    localStorage.setItem("playersResults", JSON.stringify(playersResults));
    renderMessage()
    var element = event.target;
    if (element.matches("#submit")) {
        triviaSubmit.classList.add("hidden");
        retakeTrivia.classList.remove("hidden");
    }
});

function renderMessage() {
    var highscores = JSON.parse(localStorage.getItem("playersResults"));
    document.getElementById("usersinitials").innerHTML = highscores.initials;
    document.getElementById("users-score").innerHTML = highscores.score;
  }

retakeTrivia.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#retake")) {
        triviaStart.classList.remove("hidden");
        retakeTrivia.classList.add("hidden");
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