//Concat method
function conc () {
    let part1 = "This is a ";
    let part2 = "concatenated sentence ";
    let part3 = "made up of three parts.";
    document.getElementById("result1").innerHTML = 
    part1.concat(part2, part3);
}

//Slice method
let cut;
let pizza = "8 slices of a loaded pepperoni, cheese pizza!";

function katana () {
    cut = pizza.slice(2, 7);
    document.getElementById("result2").innerHTML = cut;
}

//toUpperCase method
function stuffIt () {
    cut = cut.toUpperCase();
    document.getElementById("result2").innerHTML = cut;
}

//Search method
function findIt () {
    let lookFor = document.getElementById("keyword").value;
    let result = pizza.search(lookFor);
    document.getElementById("result2").innerHTML = 
    "The word <b>\""+lookFor.toUpperCase()+"</b>\" you're looking for is on index "+result+".";
}

//Number methods: toString()
function makeItString () {
    let input = document.getElementById("myNumber").value;
    let result = input.toString();
    document.getElementById("result3").innerHTML = result;
}

//Number methods: toPrecision()
function makeItPrecise() {
    let input = parseFloat(document.getElementById("myNumber").value);
    let result = input.toPrecision(3);
    document.getElementById("result3").innerHTML = 
    "3-digit precision format is: "+result;
}

//Number methods: toFixed()
function makeItFix () {
    let input = parseFloat(document.getElementById("yourNumber").value);
    let result = input.toFixed(2);
    document.getElementById("result4").innerHTML = 
    "To fixed: "+result;
}

//Number methods: valueOf()
function getValue () {
    let input = document.getElementById("yourNumber").value;
    let result = input.valueOf();
    document.getElementById("result4").innerHTML = 
    "The primitive value of the string: "+result;
}