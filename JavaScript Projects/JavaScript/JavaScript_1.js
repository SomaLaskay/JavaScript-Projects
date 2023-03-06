// SWITCH statement
function mySwitch () {
    let input = document.getElementById("myInput").value;
    let result = "";
    switch (input) {
        case "Coke" :
            result = "Zero, Diet or Classic?";
        break;
        case "Fanta" :
            result = "Orange, Grape or Pineapple?";
        break;
        case "Sprite" :
            result = "Lime or Cucumber?";
        break;
        default:
            result = "Unfortunately, we don't have it."
    }
    document.getElementById("switchMe").innerHTML = result;
}

// getElementsByClassName()
function gebcnOne() {   // Apply to one.
    let stuff = document.getElementsByClassName("myClass");
        stuff[0].innerHTML = "Rule Britannia!";
}

function gebcnAll() {   // Apply to All.
    let stuff = document.getElementsByClassName("myClass");
    for (i = 0; i < stuff.length; i++) {
        stuff[i].innerHTML = "Rule Britannia!";
    };
}

// Drawing
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.moveTo(200, 0);
ctx.lineTo(0, 200);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();

// Linear Gradient
function makeGrad () {
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "tan");
    grd.addColorStop(1, "green");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 200);
}