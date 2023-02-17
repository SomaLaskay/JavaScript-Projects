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