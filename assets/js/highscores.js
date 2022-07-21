// Global Variables
var highScoreBtn = document.getElementById("highScore");
var resetBtn = document.getElementById("gameReset");
var clearScoresBtn = document.getElementById("clearScores");

// Option to Clear Scores from Local Storage
clearScoresBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Reset the game entirely
resetBtn.addEventListener("click", function() {
    window.location.replace("index.html");
});

// Retrieves local storage and displays scores
var highScores = localStorage.getItem("allScores");
allScores.JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScoreBtn.appendChild(createLi);
    }
}
