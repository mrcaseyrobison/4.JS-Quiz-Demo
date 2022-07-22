// Game Variables
var score = 0;
var questionsIndex = 0;

// Time Clock Variables
var startTime = 60; 
var pauseInterval = 0;
var timeDeduct = 5;

// HTML Elements
const timerEl = document.getElementById("timer"); // timer display in HTML
const timeLeftEl = document.getElementById("timeLeft"); // time remaining display in HTML
const quizBoxEl = document.getElementById("quizBox"); // links to "quizBox" ID in HTML
const gameContentEl = document.getElementById("gameContent"); // links to "gameContent" ID in HTML
const createUl = document.createElement("ul"); // creates unordered list element in HTML

// Questions Array
const gameQuestions = [
  {
    question: "What HTML element link a .JS to an HTML file?",
    choices: ["A. <script>", "B. <div>", "C. <style>", "D. <head>"],
    answer: "A. <script>",
  },
  {
    question: "What does DOM mean?",
    choices: ["A. Do Open Menu", "B. Don't Open Me", "C. Document Object Menu", "D. Document Object Model"],
    answer: "D. Document Object Model",
  },
  {
    question: "How do you add a comment to JavaScript",
    choices: ["A. <!--This is a comment-->", "B. //This is a comment", "C. `This is a comment", "D. *This is a comment*"],
    answer: "B. //This is a comment",
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: ["A. function = myFunction()", "B. function: myFunction()", "C. function myFunction()", "D. create.function = (function)"],
    answer: "C. function myFunction()",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    choices: ["A. if i = 5", "B. if (i == 5)", "C. if i = 5 then", "D. if i = x (then)"],
    answer: "B. if (i == 5)",
  },
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["A. var myVariable", "B. variable myVariable", "C. create.var myVariable", "D. append.var = myVariable"],
    answer: "A. var myVariable",
  },
];

// Event Listener to start the timer and begin game
timerEl.addEventListener("click", function () {
  if (pauseInterval === 0) {
    pauseInterval = setInterval(function () {
      startTime--;
      timeLeftEl.textContent = "Time: " + startTime + " Seconds Remaining";
      if (startTime <= 0) {
        clearInterval(pauseInterval);
        finished();
        timeLeftEl.textContent = "Game Over";
      }
    }, 1000);
  }
  displayQuiz(questionsIndex);
});

// Function to Display Q & A to HTML
function displayQuiz(questionsIndex) {
  quizBoxEl.innerHTML = "";
  createUl.innerHTML = "";
  for (var i = 0; i < gameQuestions.length; i++) {
    var userQuestions = gameQuestions[questionsIndex].question;
    var userAnswers = gameQuestions[questionsIndex].choices;
    quizBoxEl.textContent = userQuestions;
  }
  userAnswers.forEach(function (nextQuestion) {
    var listItem = document.createElement("li");
    listItem.textContent = nextQuestion;
    quizBoxEl.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  });
}

// Compares the user choice with the correct answer
function compare(event) {
  var element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.id = "createDiv";
    if (element.textContent == gameQuestions[questionsIndex].answer) {
      score++;
      createDiv.textContent =
        "Correct!  " + gameQuestions[questionsIndex].answer;
    } else {
      startTime = startTime - timeDeduct;
      createDiv.textContent =
        "Incorrect! The correct answer is:  " +
        gameQuestions[questionsIndex].answer;
    }
  }
  questionsIndex++;
  if (questionsIndex >= gameQuestions.length) {
    endGame();
    $("createDiv").hide();
  } else {
    displayQuiz(questionsIndex);
  }
  quizBoxEl.appendChild(createDiv);
}

// endGame function saves initials and score
function endGame() {
  quizBoxEl.innerHTML = "";
  timeLeftEl.innerHTML = "";
  const createH1 = document.createElement("h1");
  createH1.id = "createH1";
  createH1.textContent = "Game Over!"
  quizBoxEl.appendChild(createH1);
  const createP = document.createElement("p");
  createP.id = "createP";
  quizBoxEl.appendChild(createP);

  // Calculates time remaining, correct questions and score
  if (startTime >= 0) {
      var timeRemaining = startTime;
      const createP2 = document.createElement("p");
      clearInterval(pauseInterval);
      createP.textContent = "Your score is: " + timeRemaining * 2;
      quizBoxEl.appendChild(createP2);
  }
  const infoPrompt = document.createElement("label");
  infoPrompt.id = "createLabel";
  infoPrompt.textContent = "Enter your initials: ";
  quizBoxEl.appendChild(infoPrompt);

  // Input initials
  const userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "initials";
  userInitials.textContent = "";
  quizBoxEl.appendChild(userInitials);

  // Submit score and initials
  const saveInfo = document.createElement("button");
  saveInfo.type = "submit";
  saveInfo.id = "Submit";
  saveInfo.textContent = "Submit";
  quizBoxEl.appendChild(saveInfo);

  // Stores initials and score in local storage
  saveInfo.addEventListener("click", function() {
      var initials = userInitials.value;
      if (initials === "") {
          console.log("No value entered!");
      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining * 2
          }
          console.log(finalScore);
          var allScores = localStorage.getItem("allScores");
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.parse(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem("allScores", newScore);
          window.location.replace("highscores.html");
      }
  })
};

