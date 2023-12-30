const field = document.createElement("div");
document.body.appendChild(field);
field.classList.add("field");

let numberOfPairs = 2;
const cardsArray = [];
let firstOnenedCard = 0;
let secondOpenedCard = 0;
let tempOne;
let tempTwo;
let counter = 0;

for (let i = 1; i <= numberOfPairs; i++) {
  cardsArray.push(i, i);
}

//mix number in array
for (let i = 0; i < cardsArray.length; i++) {
  let randomNumber = Math.floor(Math.random() * cardsArray.length);
  let temp = cardsArray[i];
  cardsArray[i] = cardsArray[randomNumber];
  cardsArray[randomNumber] = temp;
}

for (let i = 0; i < cardsArray.length; i++) {
  let card = document.createElement("div");
  field.appendChild(card);
  card.classList.add("card");
  card.setAttribute("pictureNumber", cardsArray[i]);
}

const cards = document.getElementsByClassName("card");

function game() {
  for (let card of cards) {
    card.addEventListener("click", () => {
      if (!firstOnenedCard) {
        firstOnenedCard = +card.getAttribute("pictureNumber");
        card.classList.add(`image-${firstOnenedCard}`);
        tempOne = card;
        tempOne.style.pointerEvents = "none";
      } else if (!secondOpenedCard) {
        secondOpenedCard = +card.getAttribute("pictureNumber");
        card.classList.add(`image-${secondOpenedCard}`);
        tempTwo = card;
        if (firstOnenedCard === secondOpenedCard) {
          tempTwo.style.pointerEvents = "none";
          firstOnenedCard = 0;
          secondOpenedCard = 0;
          counter += 2;
        }
      } else {
        tempOne.style.pointerEvents = "auto";
        tempOne.classList.remove(`image-${firstOnenedCard}`);
        tempTwo.classList.remove(`image-${secondOpenedCard}`);
        firstOnenedCard = 0;
        secondOpenedCard = 0;
      }
    });
    console.log(cards.length);
    console.log(counter);
  }
  // if(counter = cards.length){
  //   setTimeout(() => {alert('you win!')}, 300)
  // }

}

game();
