// question 1
(a, b) => a - b;

// question 2
const gamesUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(gamesUrl)
  .then(response => response.json())
  .then(json => gamesfunctionLoop(json))
  .catch(error => console.dir(error));

function gamesfunctionLoop(json) {
  const games = json.results;
  games.forEach(game => {
    console.log(game.name);
  });
}

// question 3
const sentence1 = "These cats are outrageous.";
const sentence2 = sentence1.replace("cats", "giraffes");

// question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if(!params.has('userId')) {
   // document.location.href = 'third.html';
} else if(params.get("userId") < 10) {
    //document.location.href = 'first.html' ;
} else {
    //document.location.href = 'second.html';
}

// question 5
const button = document.querySelector(".btn");
button.parentNode.removeChild(button);

// question 6
const li = document.createElement("li");
li.className = "parrots";
li.textContent = "Parrots";

const parentList = document.querySelector(".animals");
const listchildren = parentList.children;

listchildren[0].after(li);


// question 7
const ratingsUrl = "https://api.rawg.io/api/games/3801";

fetch(ratingsUrl)
  .then(response => response.json())
  .then(json => displayRating(json))
  .catch(error => console.dir(error));

function displayRating(json) {
  const ratingContainer = document.querySelector(".rating");
  ratingContainer.innerText = json.rating;
}