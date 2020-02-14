/* const cars = [
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
 */
//for loop
/* for (let i = 0; i < cars.length; i++){
    if (cars[i].age){
        console.log(cars[i].age);
    } else {
        console.log("NA");
    }
} */

//changed to for each loop
/* cars.forEach(function(car) {
    if (car.age){
        console.log(car.age);
    } else {
        console.log("NA");
    }
}) */

/* const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
]; */

/* function updateHtml(elephants){
    let html = "";

    for (let i = 0; i < elephants.length; i++){
        html +=  `<img src"${elephants[i].image}" alt="${elephants[i].note}">`;
    }
    return html;
}
const updatedHtml = updateHtml(elephants);
console.log(updatedHtml); */

//Question 3
const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null},
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

function createHtml(elephants){
    let html = "<div>";

    for (let i = 0; i < elephants.length; i++){
        let imgUrl = "https://via.placeholder.com/250";
        if (elephants[i].image){
            imgUrl = elephants[i].image;
        }

        let altValue = "Elephant Picture";

        if (elephants[i].note){
            altValue = elephants[i].note;
        }

        html += `<img src="${imgUrl}" alt="${altValue}">`;
    }
    html += "</div>";
    return html;
}
const createdHtml = createHtml(elephants);
console.log(createdHtml);