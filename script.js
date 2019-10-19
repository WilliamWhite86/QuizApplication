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
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

setTime();

questionSetter();

function displayMessage(type, message) {
    messageDiv.textContent = message;
    messageDiv.setAttribute("class", type);
}

function questionSetter() {

    if (i === questions.length) {
        score += secondsLeft * .1;
        score = score.toFixed(2);
        document.getElementById("question").textContent = "All Done!";
        //document.getElementById("answerOne").textContent = "your score: " + score;
        answerOne.remove();
        //document.getElementById("answerTwo").textContent = "";
        answerTwo.remove();
        //document.getElementById("answerThree").textContent = "";
        answerThree.remove();
        //document.getElementById("answerFour").textContent = "";
        answerFour.remove();
        var scoreTag = document.createElement("h1");
        document.body.appendChild(scoreTag);
        document.getElementsByTagName("h1")[0].setAttribute("id","score");
        document.getElementById("score").textContent = "Your Score: " + score;
        var inputTag = document.createElement("input");
        document.body.appendChild(inputTag);
        var submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        document.body.appendChild(submitButton);

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            var highScoreText  = new Object();
            highScoreText.name = inputTag.value.trim();
            highScoreText.newScore = score;
            console.log(highScoreText);
            storeScores(highScoreText);
        });

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

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        alert("correct");
        score++;
    }
    else {
        alert("wrong");
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        alert("correct");
        score++;
    }
    else {
        alert("wrong");
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        alert("correct");
        score++;
    }
    else {
        alert("wrong");
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        alert("correct");
        score++;
    }
    else {
        alert("wrong");
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})