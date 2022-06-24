// Global Variables

var startBtnEl = document.getElementById("gameStart")
var startBoxEl = document.getElementById("startBox")
var scoresEl = document.getElementById("highscores")
var timeEl = document.querySelector(".timer")
var containerEl = document.querySelector(".container")
var questionIndex = 0
var secondsLeft = 120;

// Game Variables
var questionEl = document.getElementById("question")
var choicesEl = document.getElementById("answers")


// Start Game with Timer
startBtnEl.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);

displayGame(questions)

})

function displayGame (questions) {
  containerEl.innerHTML="";
  choicesEl.innerHTML="";
  for(var i=0;i < questions.length; i++) {
    let userQuestion = questions[questionIndex].question;
    var userAnswers = questions[questionIndex].options;
   containerEl.textContent=userQuestion;
  }
  
  userAnswers.forEach(function(nextQuestion){
    let listItem=document.createElement("li");
    listItem.textContent=nextQuestion;
    containerEl.appendChild(choicesEl);
    choicesEl.appendChild(listItem);
    // listItem.addEventListener("click", compareAnswers());


  })
}

  // Q & A Object Arrays
  var questions = [
    {
      numb: 1,
      question: "Question A",
      answer: "Correct Answer 1",
      options: [
        "Wrong 1a",
        "Correct 1",
        "Wrong 2a",
        "Wrong 3a"
      ]
    },
    {
      numb: 2,
      question: "Question B",
      answer: "Correct Answer 2",
      options: [
        "Correct Answer 2",
        "Wrong Answer 1b",
        "Wrong Answer 2b",
        "Wrong Answer 3b"
      ]
    },
    {
      numb: 3,
      question: "Question C",
      answer: "Correct Answer 3",
      options: [
        "Wrong Answer 1c",
        "Wrong Answer 2c",
        "Wrong Answer 3c",
        "Correct Answer 3"
      ]
    },
    {
      numb: 4,
      question: "Question D",
      answer: "Correct Answer 4",
      options: [
        "Wrong Answer 1d",
        "Wrong Answer 2d",
        "Correct Answer 4",
        "Wrong Answer 3d"
      ]
    },
    {
      numb: 5,
      question: "Question E",
      answer: "Correct Answer 5",
      options: [
        "Wrong Answer 1e",
        "Correct Answer 5",
        "Wrong Answer 2e",
        "Wrong Answer 3e"
      ]
    }
  ]
  

  