const apiUrl = 'https://api.rawg.io/api/creators';

fetch(apiUrl)
.then(function(response) {
    return response.json()
})
.then(function(json) {
    let results = json.results;

    let body = document.querySelector('body');

    results.forEach(result => {
        let photo = document.createElement('img');
        photo.src = result.image;

        console.log(result.name);

        body.appendChild(photo)
    });
    
    
})
.catch(function(error) {
    console.log(error)
})


