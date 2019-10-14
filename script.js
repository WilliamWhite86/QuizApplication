
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


document.getElementById("answers").addEventListener("click", function(){

    var i = 1;

    document.getElementById("question").innerHTML = questions[i]["title"];
    document.getElementById("answerOne").innerHTML = questions[i]["choices"][0];
    document.getElementById("answerTwo").innerHTML = questions[i]["choices"][1];
    document.getElementById("answerThree").innerHTML = questions[i]["choices"][2];
    document.getElementById("answerFour").innerHTML = questions[i]["choices"][3];

    document.getElementById("answerOne").addEventListener("click", function(){
        if (questions[i]["choices"][0] === questions[i]["answer"]){
            alert("correct");}
        else {
            alert("wrong");
        }
    })

    document.getElementById("answerTwo").addEventListener("click", function(){
        console.log(i);
        if (questions[i]["choices"][1] === questions[i]["answer"]){
            alert("correct");
            }
        else {
            alert("wrong");
        }
    })

    document.getElementById("answerThree").addEventListener("click", function(){
        if (questions[i]["choices"][2] === questions[i]["answer"]){
            alert("correct");}
        else {
            alert("wrong");
        }
    })

    document.getElementById("answerFour").addEventListener("click", function(){
        if (questions[i]["choices"][3] === questions[i]["answer"]){
            alert("correct");}
        else {
            alert("wrong");
        }
    })
})