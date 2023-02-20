// WHILE loop
function callLoop () {
    let counter = 0;
    let thing = "";
    while (counter <= 12) {
        thing += "<br>"+counter+" Mississippi";
        counter ++;
    }
    document.getElementById("Loop").innerHTML = thing;
}

// String length property
function howLong () {
    let word = "Mississippi";
    document.getElementById("result1").innerHTML = 
    word.length+" characters long. :)"
}

// FOR loop
function verticalize () {
    let word = document.getElementById("myWord").value;
    let result = "";
    let i;
    for (i = 0; i < word.length; i++) {
        result += word[i].toUpperCase()+"<br>";
    }
    document.getElementById("result2").innerHTML = result;
}

// My own Array
let shoppingList = ["Milk", "Tortilla", "Cereals", "Cheese"];
function lister () {
    let result = "";
    for (i = 0; i < shoppingList.length; i++) {
        result += shoppingList[i]+"<br>";
    }
    document.getElementById("result3").innerHTML = 
    result;
}

// Const function
function constant_function () {
    const myCake = {
        size: 12, 
        shape:"square", 
        flavour:"orange-cocoa",
        decoration: "sugar flowers"
    };
    document.getElementById("result4").innerHTML = 
    myCake.size+"-inch cake with "+myCake.flavour+" flavour. This beautiful "+
    myCake.shape+"-shaped cake has additional "+myCake.decoration+" on the top.";
}

// Let keyword with method
function printJob () {
    let myPrint = {
        size: "A4",
        frontColors: 4,
        backColors: 4,
        pages: 2,
        plates: function() {
            return (this.frontColors+this.backColors);
        }
    };
    document.getElementById("result5").innerHTML = 
    "Next job is: <br> - "+myPrint.pages+" pages<br> - "+
    myPrint.size+" size<br> - "+myPrint.frontColors+"+"+myPrint.backColors+" colors<br> - "+
    myPrint.plates()+" plates will be needed."
}

// Break
function breakMyHeart () {
    let word = "heart";
    let result = "";
    for (i = 0; i < word.length; i++) {
        if (word[i] === "r") {
            result += " ";
            break;
        };
        result += word[i];
    };
    document.getElementById("result6").innerHTML = 
    result;
}

// Continue
function contMyHeart () {
    let word = "heart";
    let result = "";
    for (i = 0; i < word.length; i++) {
        if (word[i] === "r") {
            result += " ";
            continue; 
        };
        result += word[i];
    };
    document.getElementById("result6").innerHTML = 
    result;
}

