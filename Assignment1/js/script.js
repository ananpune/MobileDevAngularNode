/*jshint esversion: 6 */

const saveName = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var room = document.getElementById("room").value;
    var width = document.getElementById("width").value;
    var length = document.getElementById("length").value;
    var colour = document.getElementById("colour").value;
    var paint = document.getElementById("paint").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("room", room);
    localStorage.setItem("width", width);
    localStorage.setItem("length", length);
    localStorage.setItem("colour", colour);
    localStorage.setItem("paint", paint);


};

const loadQuota = () => {
    var name = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var room = localStorage.getItem("room");
    var width = localStorage.getItem("width");
    var length = localStorage.getItem("length");
    var colour = localStorage.getItem("colour");
    var paint = localStorage.getItem("paint");

    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("room").innerHTML = room;

    var squarefeet = width * length;

    document.getElementById("squarefoot").innerHTML = squarefeet;
    document.getElementById("colour").value = colour;

    var paintCans = squarefeet / 400;
    var paintCansRounded = Math.ceil(paintCans);


    document.getElementById("paintcans").innerHTML = paintCansRounded;

    var paintCost = (paintCansRounded * 24.99) * 1.13;
    var paintCostRounded = paintCost.toFixed(2);
    var paintCost2 = (paintCansRounded * 39.99) * 1.13;
    var paintCostRounded2 = paintCost2.toFixed(2);

    if (paint == "Standard") {
        document.getElementById("cost").innerHTML = paintCostRounded;
    } else if (paint == "Premium") {
        document.getElementById("cost").innerHTML = paintCostRounded2;
    }
};