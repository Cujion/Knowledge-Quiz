// VARIABLES
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
var triviaSubmit = document.getElementById("trivia-submit");
var submitbutton = document.getElementById("initials-submit");
var retakeTrivia = document.getElementById("retake-trivia");
var userInput = document.getElementById("userinput");
var usersScores = document.getElementById("usersscores");
var initials = document.getElementById("initials");
var home = document.getElementById("return");
var timeCount;
var timerStart = 90;
var usersScores = [];
// var usersinitials = [];
// QUESTIONS VARIABLE TABLE WITH EACH QUESTION, CHOICES AND ANSWER 
var questions = [
    {
        question: "What was the original team name before becoming The Yankees in 1913?",
        choices:["Senators", "Pirates", "Americans", "Highlanders"],
        answer: "Highlanders",
    },
    {
        question: "Who did the Yankees defeat to win their first world series?",
        choices: ["Boston Red Soxs", "San Francisco Giants", "Detroit Tigers", "Senators"],
        answer: "San Francisco Giants",
    },
    {
        question: "How many world series championships do The Yankees have currently?",
        choices: ["10", "25", "7", "27"],
        answer: "27",
    },
    {
        question: "Who is The Yankees single season homerun leader?",
        choices: ["Babe Ruth", "Aaron Judge", "Roger Maris", "Lou Gehrig"],
        answer: "Aaron Judge",
    },
    {
        question: "Who holds The Yankees single season saves record?",
        choices: ["Aroldis Chapman", "Sparky Lyle", "Mariano Rivera", "Goose Gossage"],
        answer: "Mariano Rivera",
    },
    {
        question: "Who holds The Yankees single season strikeout record?",
        choices: ["Gerrit Cole", "Ron Guidry", "David Cone", "CC Sabathia"],
        answer: "Gerrit Cole",
    },
    {
        question: "Who holds The Yankees team homerun record?",
        choices: ["Aaron Judge", "Roger Maris", "Babe Ruth", "Mickey Mantle"],
        answer: "Babe Ruth",
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
        choices: ["1914", "1923", "1932", "1920"],
        answer: "1923",
    }
    
]
// SETTING THE STARTING QUESTION
var qIndex = 0;
// FUNCTION TO DISPLAY EACH QUESTION
function displayQuestion() {
    var currQuest = questions[qIndex];
    var triviaQuestions = document.getElementById("trivia-questions");

    triviaQuestions.textContent = currQuest.question;

    choices.innerHTML = "";
// FOR LOOP TO CYCLE THROUGH EACH QUESTION
    for (let i = 0; i < currQuest.choices.length; i++) {
        var choice = currQuest.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "button");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = `${i+1}. ${choice}`;
        choices.appendChild(choiceButton);
    }
}
// EVENT LISTENER FOR WHEN START BUTTON IS CLICKED
startButton.addEventListener('click', function(event) {
    // SHOW TRIVIA QUESTIONS
    var element = event.target; 
    if (element) {
        // ADDING/REMOVING "HIDDEN" TO SHOW CORRECT SECTIONS
        triviaStart.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        choices.classList.remove("hidden");
    }
    displayQuestion();
    timeCount = setInterval(clockTimer, 1000);
});
// CLOCK TIMER FUNCTION 
function clockTimer() {
    timerStart--;
    timer.textContent = `Timer: ${timerStart}`;
    if (timerStart <= 0) {
        endTrivia();
        clearInterval(timeCount);
    }
}
// LOGIC FOR CHOICE SELECTION
function choiceSelect(event) {
    var element = event.target;
    if (element.value !== questions[qIndex].answer) {
        // TIME DEDUCTION IF WRONG
        timerStart -= 15
        if (timeCount <= 0 || qIndex === questions.length) {
            clearInterval(timeCount);
            endTrivia();
        } 
        // REMOVE HIDDEN CLASS AND ADD TEXT TO SHOW INCORRECT
        answerNotify.classList.remove("hidden");
        answerNotify.textContent = "INCORRECT!";
    }  else {
        usersScores = timerStart + questions[qIndex].answer;
        // REMOVE HIDDEN CLASS AND ADD TEXT TO SHOW CORRECT       
        answerNotify.classList.remove("hidden");
        answerNotify.textContent = "CORRECT!";
    } 
}
// LOGIC FOR CORRECT/INCORRECT CHOICE SELECTION
choices.onclick = choiceSelect;

// EVENT LISTENER TO KNOW WHEN A CHOICE HAS BEEN CLICKED ON
choices.addEventListener("click", function() {
    if (qIndex++ < 9) {
        displayQuestion();
    } else {
        // RESETTING QUESTIONS INDEX FOR RETAKE
        endTrivia(),
        qIndex = 0,
        answerNotify.classList.add("hidden");
        questionContainer.classList.add("hidden");
        choices.classList.add("hidden");
        triviaSubmit.classList.remove("hidden");
    }

});
// EVENT LISTENER FOR WHEN SUBMIT BUTTON IS CLICKED
submitbutton.addEventListener('click', function(event) {
    event.preventDefault();
    // CREATING VARIABLES FOR PLAYERS INITIALS AND SCORES
    var playersResults = {
        initials: initials.value,
        score: usersScores.value,
    }
    // SENDING PLAYERS RESULTS TO LOCAL STORAGE
    localStorage.setItem("playersResults", JSON.stringify(playersResults));
    renderMessage()
    var element = event.target;
    if (element.matches("#submit")) {
        triviaSubmit.classList.add("hidden");
        retakeTrivia.classList.remove("hidden");
    }
});
// RENDERING PLAYER RESULTS LEADERBOARD/HIGHSCORES PAGE
function renderMessage() {
    var highscores = JSON.parse(localStorage.getItem("playersResults"));
    // GRABBING THE INFORMATION FROM LOCAL STORAGE AND CONVERTING IT INTO BACK INTO A STRING
    document.getElementById("usersinitials").innerHTML = highscores.initials;
    document.getElementById("users-score").innerHTML = highscores.score;
  }
// EVENT LISTENER FOR WHEN RETAKE TRIVIA IS CLICKED TO BRING BACK START PAGE
retakeTrivia.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#retake")) {
        triviaStart.classList.remove("hidden");
        retakeTrivia.classList.add("hidden");
    }
});
// EVENT LISTENER FOR WHEN HIGHSCORES IS CLICKED TO DISPLAY LEADERBOARD
checkscore.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#highscore")) {
        endTrivia(),
        clearInterval(timeCount);
        triviaStart.classList.add("hidden");
        questionContainer.classList.add("hidden");
        choices.classList.add("hidden");
        triviaSubmit.classList.add("hidden");
        retakeTrivia.classList.add("hidden");
        userInput.classList.remove("hidden");
    }
});
// EVENT LISTENER FOR WHEN HOME BUTTON IS CLICKED TO DISPLAY START PAGE
home.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#return")) {
        userInput.classList.add("hidden");
        triviaStart.classList.remove("hidden");
    }
});

function endTrivia() {
    triviaSubmit.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    choices.classList.add("hidden");
    answerNotify.classList.add("hidden");
    timerStart = 90;
    qIndex = 0;
    clearInterval(timeCount);
}