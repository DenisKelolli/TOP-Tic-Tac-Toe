const itemAtIndex1 = document.querySelector('.grid-item[data-index="1"]');
const itemAtIndex2 = document.querySelector('.grid-item[data-index="2"]');
const itemAtIndex3 = document.querySelector('.grid-item[data-index="3"]');
const itemAtIndex4 = document.querySelector('.grid-item[data-index="4"]');
const itemAtIndex5 = document.querySelector('.grid-item[data-index="5"]');
const itemAtIndex6 = document.querySelector('.grid-item[data-index="6"]');
const itemAtIndex7 = document.querySelector('.grid-item[data-index="7"]');
const itemAtIndex8 = document.querySelector('.grid-item[data-index="8"]');
const itemAtIndex9 = document.querySelector('.grid-item[data-index="9"]');
const counter = document.querySelector(".counter");
counter.style.display = "none"; //Hides the counter from showing on the screen
const winner = document.querySelector(".winner");
const playAgainButton = document.querySelector(".play_again_button");
const gridItems = document.querySelectorAll('.grid-item');

let count = 0;




const playGame = function() {
  
  gridItems.forEach((item) => {
    item.addEventListener('click', function(event) {
      // Check if the grid item already has a background color
      const hasBackgroundColor = event.target.style.backgroundColor !== '';


      if (!hasBackgroundColor) {
        count++;
        counter.textContent = count;
        if (parseInt(counter.textContent) % 2 === 0) {
          event.target.style.backgroundColor = 'red';
        } else {
          event.target.style.backgroundColor = 'green';
        }
      }

      // Win conditions for player (Green)
      if (
        (itemAtIndex1.style.backgroundColor === "green" && itemAtIndex2.style.backgroundColor === "green" && itemAtIndex3.style.backgroundColor === "green") ||
        (itemAtIndex4.style.backgroundColor === "green" && itemAtIndex5.style.backgroundColor === "green" && itemAtIndex6.style.backgroundColor === "green") ||
        (itemAtIndex7.style.backgroundColor === "green" && itemAtIndex8.style.backgroundColor === "green" && itemAtIndex9.style.backgroundColor === "green") ||
        (itemAtIndex1.style.backgroundColor === "green" && itemAtIndex4.style.backgroundColor === "green" && itemAtIndex7.style.backgroundColor === "green") ||
        (itemAtIndex2.style.backgroundColor === "green" && itemAtIndex5.style.backgroundColor === "green" && itemAtIndex8.style.backgroundColor === "green") ||
        (itemAtIndex3.style.backgroundColor === "green" && itemAtIndex6.style.backgroundColor === "green" && itemAtIndex9.style.backgroundColor === "green") ||
        (itemAtIndex1.style.backgroundColor === "green" && itemAtIndex5.style.backgroundColor === "green" && itemAtIndex9.style.backgroundColor === "green") ||
        (itemAtIndex3.style.backgroundColor === "green" && itemAtIndex5.style.backgroundColor === "green" && itemAtIndex7.style.backgroundColor === "green")
      ) {
        winner.textContent = "player1 wins!";
      //Win conditions for player2 (Red)
      } else if (
        (itemAtIndex1.style.backgroundColor === "red" && itemAtIndex2.style.backgroundColor === "red" && itemAtIndex3.style.backgroundColor === "red") ||
        (itemAtIndex4.style.backgroundColor === "red" && itemAtIndex5.style.backgroundColor === "red" && itemAtIndex6.style.backgroundColor === "red") ||
        (itemAtIndex7.style.backgroundColor === "red" && itemAtIndex8.style.backgroundColor === "red" && itemAtIndex9.style.backgroundColor === "red") ||
        (itemAtIndex1.style.backgroundColor === "red" && itemAtIndex4.style.backgroundColor === "red" && itemAtIndex7.style.backgroundColor === "red") ||
        (itemAtIndex2.style.backgroundColor === "red" && itemAtIndex5.style.backgroundColor === "red" && itemAtIndex8.style.backgroundColor === "red") ||
        (itemAtIndex3.style.backgroundColor === "red" && itemAtIndex6.style.backgroundColor === "red" && itemAtIndex9.style.backgroundColor === "red") ||
        (itemAtIndex1.style.backgroundColor === "red" && itemAtIndex5.style.backgroundColor === "red" && itemAtIndex9.style.backgroundColor === "red") ||
        (itemAtIndex3.style.backgroundColor === "red" && itemAtIndex5.style.backgroundColor === "red" && itemAtIndex7.style.backgroundColor === "red")
      ) {
        winner.textContent = "player2 wins!";
      }
      //Tie if either player has not won in 9 clicks
      else if(count === 9){
        winner.textContent = "Its a tie!";
      }


    });
  });
};

playGame();

playAgainButton.addEventListener("click", function(){
//Clears board once either the player or player2 wins or there is a tie.
  if (winner.textContent === "Player wins!" || winner.textContent === "player2 wins!" || winner.textContent === "Its a tie!") {
    gridItems.forEach((item) => {
      item.style.backgroundColor = '';
    });
    winner.textContent = "";
    count = 0; //restart counter once the play again button is clicked.
    counter.textContent = count;
 }
})

 
