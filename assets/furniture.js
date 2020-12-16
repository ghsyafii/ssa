//Get JSON date to HTML page

let output = document.getElementById('output');
output.innerHTML = 'new content';

fetch('https://jsonkeeper.com/b/SVYS')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });