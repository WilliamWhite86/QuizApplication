var i = 0;
var score = 0;
var timer = document.querySelector("#time");
var secondsLeft = 20;
var messageDiv = document.querySelector("#message");
var usernameSpan = document.querySelector("#name");
var scoreSpan = document.querySelector("#score");


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
        document.getElementById("question").textContent = "you're done";
        document.getElementById("answerOne").textContent = "your score: " + score;
        document.getElementById("answerTwo").textContent = "";
        document.getElementById("answerThree").textContent = "";
        document.getElementById("answerFour").textContent = "";
        var inputTag = document.createElement("input");
        document.body.appendChild(inputTag);
        var submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        document.body.appendChild(submitButton);

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            // create object from submission

            var quizTaker = {
                name: inputTag.value.trim(),
                finalScore: score
            };

            console.log(quizTaker);

            // validate input

            if (quizTaker.inputTag === "") {
                displayMessage("error", "enter your name");
            }
            else {
                displayMessage("success", "well done");

                // set new submission

                localStorage.setItem("quizTaker", JSON.stringify(quizTaker));

                // get most recent submission
                var lastInput = JSON.parse(localStorage.getItem("quizTaker"));
                console.log(lastInput.name);
                usernameSpan.textContent = lastInput.name;
                scoreSpan.textContent = lastInput.score;
            }

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

document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        alert("correct");
        score++;
    }
    else {
        alert("wrong");
        secondsLeft -= 5;
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
        secondsLeft -= 5;
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
        secondsLeft -= 5;
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
        secondsLeft -= 5;
    }
    i++;
    questionSetter();
})