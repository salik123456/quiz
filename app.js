

function check(){
    var score=0
var right_ans_1=document.getElementById('q1-a2');
var q1op1=document.getElementById('q1-a1');
var q1op3=document.getElementById('q1-a3');
var q1op4=document.getElementById('q1-a4');
if(right_ans_1.checked==true){
score++
alert("You have chosen Q1 right answer")
}else{
    alert("You have chosen Q1 wrong answer");
}


var right_ans2=document.getElementById("q2-a1");
var q2op1=document.getElementById("q2-a2")
var q2op3=document.getElementById("q2-a3")
var q2op4=document.getElementById("q2-a4")
if(right_ans2.checked==true){
score++;
alert("You have chosen Q2 right answer")
}else{
    alert("You have chosen Q2 wrong answer");
}



var right_ans3=document.getElementById("q3-a3");
var q3op1=document.getElementById("q3-a1")
var q3op2=document.getElementById("q3-a2")
var q3op4=document.getElementById("q3-a4")
if(right_ans3.checked==true){
score++
alert("You have chosen Q3 right answer")
}else{
    alert("You have chosen Q3 wrong answer");
}

alert(" Your score is "+score + " /3")
}