//TypeOf operator
function typeCheck() {
    let something = "Chicken";
    document.getElementById("result").innerHTML = "The type of something is a " + typeof something + ".";
}

//Display NaN
function divO () {
    document.getElementById("result").innerHTML = 0/0;
}

//Check isNaN
function checkNan () {
    let data = document.getElementById("entry").value;
    let result = isNaN(data);
    document.getElementById("result2").innerHTML = "Is "+data+" a NaN?: <b>"+result+ "!</b";
}

//Display infinity
function posInf () {
    document.getElementById("result2").innerHTML = 5E309;
}

function negInf () {
    document.getElementById("result2").innerHTML = -5E309;
}

//Check Boolean, console.log
function checkGreater () {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result3").innerHTML = n1 > n2;
    document.getElementById("relate").innerHTML = " > ";
    console.log(n1+n2);
}

function checkLess () {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result3").innerHTML = n1 < n2;
    document.getElementById("relate").innerHTML = " < ";
    console.log(n1+n2);
}

//Coercion
function coert() {
    let a = document.getElementById("data").value;
    document.getElementById("result4").innerHTML = "Adding \"10\" to the end of your input: "+a+"10";
}

//Boolean value to the Console
function booleConsole () {
    document.getElementById("result5").innerHTML = "Go, check the Console if the 14 is bigger than 16. :)";
    console.log(14>16);
}

//Double == Boolean
function booleCheq () {
    let one = document.getElementById("input1").value;
    let two = document.getElementById("input2").value;
    let result = one == two;
    document.getElementById("result6").innerHTML = "Is "+one+" equals to "+two+"? "+result;
}

//Triple === Boolean
function booleCheqTriple () {
    let one = document.getElementById("Trinput1").value;
    let two = document.getElementById("Trinput2").value;
    let result = one === two;
    document.getElementById("result7").innerHTML = "So, are <b>"+one+"</b>'s and <b>"+two+"</b>'s values and types are the same? "+result;
}

//AND and OR operators
function checkAND () {
    let box1 = document.getElementById("cb1");
    let box2 = document.getElementById("cb2");
    let result = box1.checked && box2.checked;
    document.getElementById("result8").innerHTML = result;
}

function checkOR () {
    let box1 = document.getElementById("cb1");
    let box2 = document.getElementById("cb2");
    let result = box1.checked || box2.checked;
    document.getElementById("result8").innerHTML = result;
}

//NOT operator
function checkNOT () {
    let box3 = document.getElementById("cb3");
    let result = !box3.checked;
    document.getElementById("result8").innerHTML = result;
}