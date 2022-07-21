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
