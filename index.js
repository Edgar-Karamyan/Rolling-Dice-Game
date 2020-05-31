var dice1;
var dice2;

function randomDice() {
  var randomDice = Math.floor((Math.random() * 6) + 1);
  return randomDice;
}

function judge() {
  if (dice1 === dice2) {
    document.querySelector(".container p").innerHTML = "DRAW!"
  } else {
    if (dice1 > dice2) {
      document.querySelector(".container p").innerHTML = "Player 1 Win!"
    } else {
      document.querySelector(".container p").innerHTML = "Player 2 Win!"
    }
  }

}

function playFunction() {
  dice1 = randomDice();
  document.querySelector("#img1").setAttribute("src", "images/dice" + dice1 + ".png");
  dice2 = randomDice();
  document.querySelector("#img2").setAttribute("src", "images/dice" + dice2 + ".png");

  judge();
}
