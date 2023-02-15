//Ternary operator
function ternCheck() {
    let input = document.getElementById("ternInput1").value;
    let result = (input < 18) ? "<p id='ternNo'>Sorry</p> you're too young" : "<p id='ternOk'>Good</p> you are eligible";
    document.getElementById("result1").innerHTML = result + " to vote and drink alcohol.";
}

//Constructors
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
let Soma = new Vehicle("Vauxhall", "Corsa", 2018, "White");

function myFunction () {
    document.getElementById("result2").innerHTML = 
    "Erik drives a "+Erik.Vehicle_Color+"-colored "+
    Erik.Vehicle_Model+" manufactured in "+Erik.Vehicle_Year;
}

//Utilizing "new" keyword
function myFunction2 () {
    document.getElementById("result2").innerHTML = 
    "Soma drives a "+Soma.Vehicle_Color+"-colored "+
    Soma.Vehicle_Make+" "+Soma.Vehicle_Model;
}

//Attempt to display a reserved word
function keywordFunc () {
    //let const = "const";
    document.getElementById("result4").innerHTML = something;
}

//Own constructor
function Movie (title, genre, year) {
    this.title = title;
    this.genre = genre;
    this.year = year;
}

//Storing new entry
let mov = new Movie("Arrival", "Drama", 2016);

function displayMovie () {
    document.getElementById("result3").innerHTML = 
    "My favourite movie is "+mov.title+", which is a "+mov.genre+" from "+mov.year+"."
}

//Nested functions
let base = 0;
function nestFunc () {
    document.getElementById("result5").innerHTML = addRand();
    function addRand () {
        let randNum = Math.round(Math.random()*100);
        base += randNum;
        return base;
    }
}