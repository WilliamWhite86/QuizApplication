var i = 0;
var score = 0;
var timer = document.querySelector("#time");
var secondsLeft = 20;
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");



function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}
function questionEnder(){

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += secondsLeft * .1;
    score = score.toFixed(2);
    document.getElementById("question").textContent = "All Done!";
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    document.body.appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id","score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.appendChild(inputTag);
    submitButton.textContent = "Submit";
    document.body.appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText  = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        console.log(highScoreText);
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });
}
function questionSetter() {

    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if(tempArray === null){
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        document.getElementById("message").textContent = "Correct!";
        score++;
    }
    else {
        document.getElementById("message").textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})