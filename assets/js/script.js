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

// Event Listener to start the timer and start game
timerEl.addEventListener("click", function() {
  if (pauseInterval === 0) {
      pauseInterval = setInterval(function() {
        startTime--;
        timeLeftEl.textContent = "Time: " + startTime;
        if (startTime <= 0) {
          clearInterval(pauseInterval);
          finished();
          timeLeftEl.textContent = "Game Over";
        }
      }, 1000);
  }
  displayQuiz(questionsIndex)
}
)
// Questions Array
var gameQuestions = [
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "A. Answer 1"
  },
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "D. Answer 4"
  },
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "B. Answer 2"
  },
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "C. Answer 3"
  },
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "B. Answer 2"
  },
  {
  question: "Question 1",
  choices: ["A. Answer 1", "B. Answer 2", "C. Answer 3", "D. Answer 4"],
  answer: "A. Answer 1"
  }
]

// Function to Display Q & A to HTML
function displayQuiz(questions) {
  quizBoxEl.innerHTML = "";
  createUl.innerHTML = "";
  for (var i = 0; i < gameQuestions.length; i++) {
    var userQuestions = gameQuestions(questionsIndex).question;
    var userAnswers = gameQuestions(questionIndex).choices;
    quizBoxEl.textContent = userQuestions;
    }
  userAnswers.forEach(function(nextQuestion) {
    var listItem = document.createElement("li")
    listItem.textContent = nextQuestion;
    quizBoxEl.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  })
};



