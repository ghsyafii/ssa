//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

fetch('furniture.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const cards = json
        let output = "";
        for (let i = 0; i < json.length; i++) {
            output += "<p>" + json[i].name + ", " + json[i].price + "<p>";
            document.getElementById("cards").innerHTML = output;
        }
    })


