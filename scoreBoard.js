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
    
    for (var i = 0; i < scoreList.length; i++) {
        var scoreListItem = scoreList[i];

        var tr = document.createElement("tr");
        tr.setAttribute("tr-index", i);
        document.getElementById("highScores").appendChild(tr);

        var nameCell = document.createElement("td");
        tr.appendChild(nameCell);

        var nameCellText = document.createTextNode(scoreListItem.name);
        nameCell.appendChild(nameCellText);

        var scoreCell = document.createElement("td");
        tr.appendChild(scoreCell);

        var scoreCellNum = document.createTextNode(scoreListItem.newScore);
        tr.appendChild(scoreCellNum);

    }
}