    
var i = 0;
var score = 0;
var timer = document.querySelector("#time");
var secondsLeft = 20;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
        }

        else if(i === questions.length){
            clearInterval(timerInterval);
        }
    }, 1000)
return(score)
}

setTime();

function questionSetter(){
    
    if (i === questions.length){
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


    }
    else {document.getElementById("question").textContent = questions[i]["title"];
    document.getElementById("answerOne").textContent = questions[i]["choices"][0];
    document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
    document.getElementById("answerThree").textContent = questions[i]["choices"][2];
    document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

questionSetter();

document.getElementById("answerOne").addEventListener("click", function(){
    if (questions[i]["choices"][0] === questions[i]["answer"]){
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

document.getElementById("answerTwo").addEventListener("click", function(){
    if (questions[i]["choices"][1] === questions[i]["answer"]){
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

document.getElementById("answerThree").addEventListener("click", function(){
    if (questions[i]["choices"][2] === questions[i]["answer"]){
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

document.getElementById("answerFour").addEventListener("click", function(){
    if (questions[i]["choices"][3] === questions[i]["answer"]){
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

function scoreSetter(){
    
}