//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

fetch('../assets/furniture.json')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json);
        const cards = json
        let output = "";
        // for (let i = 0; i < json.length; i++) {
        for (let i = 0; i < 4; i++) {
            output +=

    `<div class="card p-1">
        <img class="card-img-top animate__animated animate__fadeIn" src="${json[i].image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${json[i].name}</h5>
            <p class="card-text">${json[i].price}</p>
            <button id="addToCart" type="button" class="btn btn-warning">Add to cart</button>
        </div>
    </div>`
        document.getElementById("cards").innerHTML = output;
        }
    })