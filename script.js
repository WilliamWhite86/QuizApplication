    
var i = 0;
var score = 0;

function questionSetter(){
    
    if (i === 2){
        document.getElementById("question").textContent = "you're done";
        document.getElementById("answerOne").textContent = "your score: " + score;

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
    }
    i++;
    questionSetter();
})