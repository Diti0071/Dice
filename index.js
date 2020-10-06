//Left image random generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var leftImageRandomSource = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelector(".img1").setAttribute("src", leftImageRandomSource);

//Right image random generator
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var rightImageRandomSource = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelector(".img2").setAttribute("src", rightImageRandomSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! ";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}