//Question 1

const cars = [
  {
    type: "BMW",
    age: 4,
    beenInAccident: false
  },
  {
    type: "Toyota",
    beenInAccident: true
  },
  {
    type: "Ford",
    beenInAccident: true
  }
];

for (let i = 0; i < cars.length; i++) {
    const age = cars[i].age;
    
    if(typeof age === 'number') {
        console.log('car age is:', age)
    } else {
        console.log('Unknown')
    }
}

cars.forEach(car => {
    let carAge = 'Unknown age';

    if(car.age) {
        carAge = car.age;
    } 
    console.log(carAge);
    }
);

//Question 2
const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

function elephantsFunction(elephants) {
    let html = '';
    
    elephants.forEach(elephant => {
        html += `<img src='${elephant.image}' alt='${elephant.note}'>`
    });

    return html;
}
const hmlObj = elephantsFunction(elephants);
console.log(hmlObj)

//Question 3
const elephants = [{
        image: "https://elephant-api.herokuapp.com/pictures/001.jpg",
        note: null
    },
    {
        note: "From the Mysore Dasara procession."
    },
    {
        image: null,
        note: "Known for her tightrope walking act."
    }
];

function replaceMissinValues(elephants) {
    let html = '<div>';

    elephants.forEach(elephant => {

        let src = (elephant.image) ? elephant.image : 'https://via.placeholder.com/250';
        let alt = (elephant.note) ? elephant.note : 'Elephant picture';

        html += `<img src='${src}' alt='${alt}'>`
    });
    return html += '</div>'
}

console.log(replaceMissinValues(elephants))

//Question 4

const baseUrl =
  "https://cors-anywhere.herokuapp.com/elephant-api.herokuapp.com/elephants";

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.dir(json);
    createElephantNames(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createElephantNames(json) {
  const results = document.querySelector(".results");

  json.forEach(elephantName => {

    let name = elephantName.name ? elephantName.name : "Unknown";

    results.innerHTML += `<h4>${name}</h4>`;
  });
}

//Question 5

const elephUrl =
  "https://cors-anywhere.herokuapp.com/elephant-api.herokuapp.com/elephants/random";

fetch(elephUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    displayElephantDetails(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

function displayElephantDetails(json) {
  console.dir(json);
  const elephant = json[0];

  const container = document.querySelector(".elephant-container");
  const noResult = document.querySelector(".no-result");

  // check if the object has all required properties
  if (elephant.name && elephant.image && elephant.note) {
    const heading = document.querySelector("h1");
    heading.innerHTML = elephant.name;

    const img = document.querySelector("img");
    img.src = elephant.image;
    img.alt = elephant.name;

    const note = document.querySelector(".note");
    note.innerHTML = elephant.note;

    container.classList.remove("hidden");
  } else {
    noResult.classList.remove("hidden");
  }
}



//Question 6
const form = document.querySelector("form");


form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName');
    const firstNameValue = firstName.value.trim()
    const firstNameError = document.querySelector('#firstNameError');

    const email = document.querySelector('#email');
    const emailValue = email.value.trim()
    const emailError = document.querySelector('#emailError');
    const invalidEmailError = document.querySelector('#invalidEmailError');

    const message = document.querySelector('#message');
    const messageValue = message.value.trim()
    const messageError = document.querySelector('#messageError');

   if(firstNameValue === '') {
    firstNameError.style.display = 'block'
   } else {
    firstNameError.style.display = 'none'
   }

   if(emailValue === '') {
    emailError.style.display = 'block'
   } else {
    emailError.style.display = 'none'
    console.log(emailValue)
   }

   if(!validateEmail(emailValue)) {
    invalidEmailError.style.display = 'block'
   } else {
    invalidEmailError.style.display = 'none'
    console.log(emailValue)
   }

   if(messageValue === '') {
    messageError.style.display = 'block'
   } else {
    messageError.style.display = 'none'
   }

}

function validateEmail(email) {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email)
}

