// Global Variables
var highScoreBtn = document.getElementById("highScore");
var clearBtn = document.getElementById("clearScores");
var retakeBtn = document.getElementById("gameReset");

// Option to Clear Scores from Local Storage
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
// Reset the game entirely
retakeBtn.addEventListener("click", function() {
    window.location.replace("index.html");
});
// Retrieves local storage and displays scores
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.id = "myScore";
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScoreBtn.appendChild(createLi);
    }
}