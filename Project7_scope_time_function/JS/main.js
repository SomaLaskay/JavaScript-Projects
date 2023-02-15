//Global variable
let globalThing;

//Local variable
function someFunc () {
    let localThing;
}

//Intentional error to console.log
console.log(localThing);

//IF Statements, Time methods
function ifTime () {
    if (new Date().getHours() > 18) {
        document.getElementById("result1").innerHTML = "Good evening!";
    }
}

//IF+ELSE Statement by Myself
function pwCheck () {
    let pass = document.getElementById("pw").value;
    if ( pass.length < 6 ) {
        Result = 
        "Your password is too short, just <b>"+pass.length+"</b> charadter(s)! Should be 6 at least.";
    }
    else {
        Result = 
        "Good! Your password is made of <b>"+pass.length+"</b> charadters! Now it has military-grade encryption!";
    }
    document.getElementById("result2").innerHTML = Result;
}

//Time function
function Time_function () {
    let Time = new Date().getHours();
    let Reply;
    if ( Time < 12 == Time > 0 ) {
        Reply = "It is morning time.";
    }
    else if ( Time > 12 == Time < 18 ) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("result3").innerHTML = Reply;
}