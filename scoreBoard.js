var highScoreList = document.querySelector("#highScores");

console.log(highScoreList);

initScores();
function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}

function renderScores() {
    //highScoreList.innerHTML = "";
    // Render new li for each highscore
    console.log(scoreList);
    for (var i = 0; i < scoreList.length; i++) {
        var scoreListItem = scoreList[i];

        var li = document.createElement("li");
        li.textContent = scoreListItem;
        console.log(scoreListItem);
        //li.setAttribute("data-index", i);
        highScoreList.appendChild(li);
    }
}