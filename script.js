
document.getElementById("question").innerHTML = questions[0]["title"];
document.getElementById("answerOne").innerHTML = questions[0]["choices"][0];
document.getElementById("answerTwo").innerHTML = questions[0]["choices"][1];
document.getElementById("answerThree").innerHTML = questions[0]["choices"][2];
document.getElementById("answerFour").innerHTML = questions[0]["choices"][3];

document.getElementById("answerOne").addEventListener("click", function(){
    if (questions[0]["choices"][0] === questions[0]["answer"]){
        alert("correct");}
    else {
        alert("wrong");
    }
})

document.getElementById("answerTwo").addEventListener("click", function(){
    if (questions[0]["choices"][1] === questions[0]["answer"]){
        alert("correct");}
    else {
        alert("wrong");
    }
})

document.getElementById("answerThree").addEventListener("click", function(){
    if (questions[0]["choices"][2] === questions[0]["answer"]){
        alert("correct");}
    else {
        alert("wrong");
    }
})

document.getElementById("answerFour").addEventListener("click", function(){
    if (questions[0]["choices"][3] === questions[0]["answer"]){
        alert("correct");}
    else {
        alert("wrong");
    }
})