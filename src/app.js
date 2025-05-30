import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateCard() {
    const suit = ["♦", "♥", "♠", "♣"];
    const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const cardSuit = Math.floor(Math.random() * suit.length);
    const randomNumber = Math.floor(Math.random() * number.length);
  }

  function cardRed() {
    let suitCard = document.querySelectorAll(".suit");
    suitCard.forEach(element => {
      if (element.innerHTML === "♦" || element.innerHTML === "♥") {
        element.style.color = "red";
      } else {
        element.style.color = "";
      }
    });
  }

  console.log("Hello Rigo from the console!");
};
