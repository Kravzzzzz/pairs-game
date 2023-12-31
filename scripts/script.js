function game() {
  const field = document.createElement("div");
  document.body.appendChild(field);
  field.classList.add("field");

  let numberOfPairs = prompt("enter the number of pairs of cards", 6);
  const cardsArray = [];
  let firstOnenedCard = 0;
  let secondOpenedCard = 0;
  let tempOne;
  let tempTwo;
  let counter = 0;
  let colums = 2;
  if(numberOfPairs >= 16){colums = 8}
  else if (numberOfPairs % 5 == 0){colums = 5}
  else if (numberOfPairs >= 9){colums = 6}
  else if (numberOfPairs >= 4){colums = 4}
  else if (numberOfPairs == 3){colums = 3}


  field.style=`grid-template-columns: repeat(${colums}, 1fr)`

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
          if (counter === cards.length) {
            setTimeout(() => {
              alert("you win!");
              field.innerHTML = "";
              game();
            }, 300);
          }
        }
      } else {
        tempOne.style.pointerEvents = "auto";
        tempOne.classList.remove(`image-${firstOnenedCard}`);
        tempTwo.classList.remove(`image-${secondOpenedCard}`);
        firstOnenedCard = 0;
        secondOpenedCard = 0;
      }
    });
  }
}

game();
