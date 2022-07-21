// Game Variables
var score = 0;
var questionsIndex = 0;

// Time Clock Variables
var startTime = 120;
var pauseInterval = 0;
var timeDeduct = 5;

// HTML Elements
var timerEl = document.getElementById("timer");
var timeLeftEl = document.getElementById("timeLeft");
var quizBoxEl = document.getElementById("quizBox"); // links to "quizBox" ID in HTML
var gameContentEl = document.getElementById("gameContent"); // links to "gameContent" ID in HTML
var createUl = document.createElement("ul"); // creates unordered list element in HTML

// Questions Array
var gameQuestions = [
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "A. Answer 1",
  },
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "D. Answer 4",
  },
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "B. Answer 2",
  },
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "C. Answer 3",
  },
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "B. Answer 2",
  },
  {
    question: "Question 1",
    choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
    answer: "A. Answer 1",
  },
];

// Event Listener to start the timer and start game
timerEl.addEventListener("click", function () {
  if (pauseInterval === 0) {
    pauseInterval = setInterval(function () {
      startTime--;
      timeLeftEl.textContent = "Time: " + startTime;
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
    listItem.addEventListener("click", compare);
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
  if (questionIndex >= gameQuestions.length) {
    endGame();
  } else {
    displayQuiz(questionsIndex);
  }
  quizBoxEl.appendChild(createDiv);
}

// endGame function saves initials and score
function endGame() {
  quizBoxEl.innerHTML = "";
  timeLeftEl.innerHTML = "";
  var createH1 = document.createElement("h1");
  createH1.id = "createH1";
  createH1.textContent = "All Done!"
  quizBoxEl.appendChild(createH1);
  var createP = document.createElement("p");
  createP.id = "createP";
  quizBoxEl.appendChild(createP);

  // Calculates time remaining, correct questions and score
  if (startTime >= 0) {
      var timeRemaining = startTime;
      var createP2 = document.createElement("p");
      clearInterval(pauseInterval);
      createP.textContent = "Your score is: " + timeRemaining * 2;
      questionsContainer.appendChild(createP2);
  }
  var infoPrompt = document.createElement("label");
  infoPrompt.id = "createLabel";
  infoPrompt.textContent = "Enter your initials: ";
  questionsContainer.appendChild(infoPrompt);

  // Input initials
  var userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "initials";
  userInitials.textContent = "";
  questionsContainer.appendChild(userInitials);

  // Submit score and initials
  var saveInfo = document.createElement("button");
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
          window.location.replace("scores.html");
      }
  })
};
