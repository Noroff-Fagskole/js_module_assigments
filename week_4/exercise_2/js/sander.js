const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
const apiUrl2 = "https://randomuser.me/api/";
const apiUrl3 = "https://api.rawg.io/api/games";

let pageNumber = 2;
let pageSize = 26;

let genre = "";
const queryString = document.location.search;
const combinedApiUrl = `${apiUrl3}${queryString}`;
let giveMeQueryStrings = new URLSearchParams(queryString);

console.log("A", giveMeQueryStrings.has("genre"));
console.log("B", giveMeQueryStrings.get("genre"));

if (giveMeQueryStrings.has("genre") !== null) {
	genre = giveMeQueryStrings.get("genre");
	console.log(genre);
}

const wrapperDiv = document.querySelector(".wrapper");

fetch(combinedApiUrl)
	.then(function(response) {
		if (response.status === 200) {
			return response.json();
		} else {
			console.log("Ooops, error happened");
		}
	})
	.then(function(json) {
		const results = json;
		//console.log(results);
		//pass in results array into function as an argument
		//getName(results);
		//getImage(results);
	})
	.catch(function(error) {
		console.log(error);
	});

//resultsArray is a parameter, waiting for an array to be passed in.
function getName(resultArray) {
	for (let i = 0; i < resultArray.length; i++) {
		let returnHTML = ``;
		let userFirstName = resultArray[i].name.first;
		let userLastName = resultArray[i].name.last;

		returnHTML += `<h1>${userFirstName} ${userLastName}</h1>`;

		let heading = document.createElement("h1");
		let photoArea = document.querySelector("figure");
	}
}

function getImage(imageArray) {
	for (let i = 0; i < imageArray.length; i++) {
		let returnHTML = ``; //Using back-ticks instead of "" to show its gonna be used in a template literal later
		let photo = imageArray[i].picture.large;

		returnHTML += `<img src="${photo}"/>`;

		let photoDiv = document.createElement("figure");
		let addPhotoToDiv = (wrapperDiv.appendChild(
			photoDiv
		).innerHTML = returnHTML);
	}
}
