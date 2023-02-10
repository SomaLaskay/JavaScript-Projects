//Basic dictionary + Duplicate key
function dictRead() {
    let dicto = {
        Job:"Project1",
        Quantity:10,
        Type:"basic",
        Type:"advanced"
    };
    document.getElementById("result").innerHTML = dicto.Type;
}

//Basic dictionary with key deletion
function del () {
    let dicto = {
        Job:"Project1",
        Quantity:10,
        Type:"basic",
        Type:"advanced"
    };
    delete dicto.Type;
    document.getElementById("result").innerHTML = dicto.Type;
}