function calcArea() {   //Creating the function

    var w = document.getElementById("width").value;     //Declaring and assigning
    var h = document.getElementById("height").value;    //the values of the elements

    var result = w*h;     //Assigning the result of the operation
    result += " is the area.";      //Concatenating the string to the result
    alert(result);      //Showing the result as an alert
}