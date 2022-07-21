// Game Variables
var score = 0;
var questions = 0;

// Time Clock Variables
var startTime = 120;
var pauseInterval = 0;
var timeDeduct = 5;

// HTML Elements
var timerEl = document.getElementById("timer");
var timeLeftEl = document.getElementById("timeLeft");
var quizBoxEl = document.getElementById("quizBox");
var gameContentEl = document.getElementById("gameContent");
var createUl = document.createElement("ul");

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


