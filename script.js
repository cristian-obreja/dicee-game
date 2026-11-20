var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var image1 = document
  .querySelector(".img1")
  .setAttribute("src", imageRandomLeft());

function imageRandomLeft() {
  if (randomNumber1 === 1) {
    return "./images/dice1.png";
  } else if (randomNumber1 === 2) {
    return "./images/dice2.png";
  } else if (randomNumber1 === 3) {
    return "./images/dice3.png";
  } else if (randomNumber1 === 4) {
    return "./images/dice4.png";
  } else if (randomNumber1 === 5) {
    return "./images/dice5.png";
  } else if (randomNumber1 === 6) {
    return "./images/dice6.png";
  }
}
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = document
  .querySelector(".img2")
  .setAttribute("src", imageRandomRight());

function imageRandomRight() {
  if (randomNumber2 === 1) {
    return "./images/dice1.png";
  } else if (randomNumber2 === 2) {
    return "./images/dice2.png";
  } else if (randomNumber2 === 3) {
    return "./images/dice3.png";
  } else if (randomNumber2 === 4) {
    return "./images/dice4.png";
  } else if (randomNumber2 === 5) {
    return "./images/dice5.png";
  } else if (randomNumber2 === 6) {
    return "./images/dice6.png";
  }
}
var title = document.querySelector("h1");
function changeTitle() {
  if (randomNumber1 > randomNumber2) {
    return "🚩Jucătorul 1 câștigă!";
  } else if (randomNumber1 < randomNumber2) {
    return "Jucătorul 2 câștigă!🚩";
  } else if (randomNumber1 === randomNumber2) {
    return "Egalitate!";
  }
}
title.innerHTML = changeTitle();
