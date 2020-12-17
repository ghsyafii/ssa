//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

fetch('furniture.json')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json);
        const cards = json
        let output = "";
        for (let i = 0; i < json.length; i++) {
            output +=

    `<div class="card p-1">
        <img class="card-img-top animate__animated animate__fadeIn" src="${json[i].image}" alt="">
    
        <div class="card-body">
            <h5 class="card-title">${json[i].name}</h5>
            <p class="card-text">${json[i].price}</p>
        </div>
    </div>`
            document.getElementById("cards").innerHTML = output;
        }
    })