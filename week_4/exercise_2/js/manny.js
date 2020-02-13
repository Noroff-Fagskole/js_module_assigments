const apiUrl3 = "https://api.rawg.io/api/games";
const wrapperDiv = document.querySelector(".wrapper");

let pageNumber = 2;
let pageSize = 26;

let genre = "";

const queryString = document.location.search;
const combinedApiUrl = `${apiUrl3}${queryString}`;
let giveMeQueryStrings = new URLSearchParams(queryString);

if (giveMeQueryStrings.get("genre") !== null) {
  genre = giveMeQueryStrings.get("genre");
}

fetch(combinedApiUrl)
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("oops error happened");
    }
  })
  .then(function(json) {
    const results = json;
    console.log(results);
    getImage(json);
  })
  .catch(function(error) {
    console.log(error);

  });

// resultsArray is a parameter, waiting for
// and array to be passed in.
function getName(resultArray) {
  for (let i = 0; i < resultArray.length; i++) {
    let returnHTML = ``;
    let userFirstName = resultArray[i].name.first;
    let userLastName = resultArray[i].name.last;

    returnHTML += `${userFirstName} ${userLastName}`;

    let heading = document.createElement("h1");
    let addNameToFigure = wrapperDiv.appendChild(heading);
    addNameToFigure.innerHTML = returnHTML;
  }
}

function getImage(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    let returnHTML = ``;
    let photo = imageArray[i].picture.large;

    returnHTML += `<img src="${photo}" />`;

    let photoDiv = document.createElement("figure");
    let addPhotoToDiv = wrapperDiv.appendChild(photoDiv);
    addPhotoToDiv.innerHTML = returnHTML;
  }
}
