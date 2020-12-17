//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

// fetch('furniture.json')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         const cards = json
//         let output = "";
//         for (let i = 0; i < json.length; i++) {
//             output += "<p>" + json[i].name + ", " + json[i].price + "<p>";
//             document.getElementById("cards").innerHTML = output;
//         }
//     })

fetch('furniture.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const cards = json
        let output = "";
        for (let i = 0; i < json.length; i++) {
            output += 
            '<img class="card-img-top animate__animated animate__fadeIn" src="'
            +
            json[i].image +
            '" alt="Card image cap">\n' +

            '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + json[i].name + '</h5>\n' +
        '        <p class="card-text">' + json[i].price + '</p>\n'  +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
            document.getElementById("cards").innerHTML = output;
        }
    })


