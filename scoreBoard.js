var highScoreList = document.querySelector("#highScores");

initScores();

function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}

function renderScores() {

    scoreList.sort(function(a,b){
        return a.newScore - b.newScore;
    });
    scoreList.reverse(function(a,b){
        return a.newScore - b.newScore
    })
    
    for (i = 0; i < scoreList.length; i++) {
        var scoreListItem = scoreList[i];
        var tr = document.createElement("tr");
        var nameCell = document.createElement("td");
        var nameCellText = document.createTextNode(scoreListItem.name);
        var scoreCell = document.createElement("td");
        var scoreCellNum = document.createTextNode(scoreListItem.newScore);

        tr.setAttribute("tr-index", i);
        document.getElementById("highScores").appendChild(tr);
        tr.appendChild(nameCell);
        nameCell.appendChild(nameCellText);
        tr.appendChild(scoreCell);
        tr.appendChild(scoreCellNum);

    }
}