//Basic arithmetic operations
function addition () {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);
    var result = a + b;
    document.getElementById("Math").innerHTML = "The result this addition is " + result;
}

function subtract () {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);
    var result = a - b;
    document.getElementById("Math").innerHTML = "The result of this subtraction is " + result;
}

function multiply () {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);
    var result = a * b;
    document.getElementById("Math").innerHTML = "The result of this multiplication is " + result;
}

function divide () {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);
    var result = a / b;
    document.getElementById("Math").innerHTML = "The result of this division is " + result;
}

function modulo () {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);
    var result = a % b;
    document.getElementById("Math").innerHTML = "The remainder of this division is " + result;
}

//Negation: show the negative value on the button itself
function negateA () {
    var a = parseInt(document.getElementById("alpha").value);
    document.getElementById("nA").innerHTML = -a;
}

function negateB () {
    var a = parseInt(document.getElementById("beta").value);
    document.getElementById("nB").innerHTML = -a;
}

//Increment and Decrement
function incrA () {
    var a = parseInt(document.getElementById("alpha").value);
    a++;
    document.getElementById("alpha").value = a;
}

function incrB () {
    var b = parseInt(document.getElementById("beta").value);
    b++;
    document.getElementById("beta").value = b;
}

function decrA () {
    var a = parseInt(document.getElementById("alpha").value);
    a--;
    document.getElementById("alpha").value = a;
}

function decrB () {
    var b = parseInt(document.getElementById("beta").value);
    b--;
    document.getElementById("beta").value = b;
}

//Random numbers and rounding
function randA () {
    var a = Math.random()*100;
    a = Math.round(a);
    document.getElementById("alpha").value = a;
}

function randB () {
    var b = Math.random()*100;
    b = Math.round(b);
    document.getElementById("beta").value = b;
} 