var checkscore = document.getElementById("highscore");
var timer = document.getElementById("time-left");
var triviaMain = document.getElementById("trivia-section");
var triviaStart = document.getElementById("start-trivia");
var startButton = document.getElementById("start");
var questionContainer = document.getElementById("question-container");
var questionTitle = document.getElementsByClassName("trivia-title");
var triviaQuestions = document.getElementById("trivia-questions");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var triviaSubmit = document.getElementById("trivia-submit");
var submitbutton = document.getElementById("initials-submit");
var retakeTrivia = document.getElementById("retake-trivia");
var userInput = document.getElementById("userinput");
var home = document.getElementById("return");
var questions = [
    {
        title: "What was the original team name before becoming The Yankees in 1913",
        choices:["Senators", "Pirates", "Americans", "Highlanders"],
        answer: "Highlanders"
    },
    {
        title: "Who did the Yankees defeat to win their first world series?",
        choices: ["Boston", "Giants", "Tigers", "Senators"],
        answer: "Giants"
    },
    {
        title: "How many world series championships do The Yankees have currently?",
        choices: ["10", "25", "7", "27"],
        answer: "27"
    },
    {
        title: "Who is The Yankees single season homerun leader?",
        choices: ["Ruth", "Judge", "Maris", "Gehrig"],
        answer: "Judge"
    },
    {
        title: "Who holds The Yankees single season saves record?",
        choices: ["Chapman", "Lyle", "Rivera", "Gossage"],
        answer: "Rivera"
    },
    {
        title: "Who holds The Yankees single season strikeout record?",
        choices: ["Cole", "Guidry", "Cone", "Sabathia"],
        answer: "Cole"
    },
    {
        title: "Who holds The Yankees team homerun record?",
        choices: ["Judge", "Maris", "Ruth", "Mantle"],
        answer: "Ruth"
    },
    {
        title: "What division do The Yankees play?",
        choices: ["NL East", "AL West", "AL Central", "AL East"],
        answer: "AL East"
    },
    {
        title: "When was the last season The Yankees posted a losing record?",
        choices: ["1992", "2008", "2010", "1986"],
        answer: "1992"
    },
    {
        title: "When did The Yankees win their first World Series?",
        choices: ["1914", "1920", "1932", "1923"],
        answer: "1923"
    }
    
]

document.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("#choices button")) {
        console.log("CLICK BUTTON");
        // MOVE CURSOR
        // CHECK FOR CORRECT ANSWER
        // IF WRONG, SUBTRACT TIME
        // IF NO MORE QUESTIONS, SHOW END SCREEN
    }
});

startButton.addEventListener('click', function(event) {
    // SHOW TRIVIA QUESTIONS
    var element = event.target;
    if (element.matches("#start")) {
        console.log("Start Game")
    }
});

submitbutton.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#submit")) {
        console.log("Submit Initials")
    }
});

retakeTrivia.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#retake")) {
        console.log("Retake Trivia")
    }
});

checkscore.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#highscore")) {
        console.log("Check Highscore")
    }
});

home.addEventListener('click', function(event) {
    var element = event.target;
    if (element.matches("#return")) {
        console.log("Home page")
    }
});