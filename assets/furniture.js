//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

function addProductPage(){
    fetch('../assets/furniture.json')
    .then((response) => response.json())
    .then((json) => {
        const cards = json;
        let output = "";
        const products = JSON.stringify(json);
        var itemsInLocal= localStorage.setItem('products', products);
        var itemsInStore = localStorage.getItem('products');
        var productInStore = JSON.parse(itemsInStore); //resonate products
        for (let i = 0; i < json.length; i++) {
            output +=
    `<div class="col-sm-3"><div class="card p-1">
        <img class="card-img-top animate__animated animate__fadeIn" src="${json[i].image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${json[i].name}</h5>
            <p class="card-text">$${json[i].price}</p>
            <button id="addToCart" type="button" class="btn btn-warning">Add to cart</button>
        </div>
    </div></div>`
        document.getElementById("cards").innerHTML = output;
    }

    var carts = document.querySelectorAll('#addToCart'); 
    for(let i =0; i< carts.length; i++){
        carts[i].addEventListener('click', () =>{
        cartNumbers(productInStore[i]);
            })
               
    }
    //cartNmber starts
    function cartNumbers(productInStore){
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1)
        } else {
            localStorage.setItem('cartNumbers', 1);
        }
        setItems(productInStore);

    }
    //cartNumber ends

    //setitem start
    function setItems(productInStore){
        var cartItems = localStorage.getItem('itemsInCart');
        cartItems = JSON.parse(cartItems);
        var setItem = {
            name: productInStore.name,
            price: productInStore.price,
            image: productInStore.image,
            inCart: productInStore.inCart +=1
        }
        if(cartItems == null || cartItems == undefined){
            var storedItem = JSON.parse(localStorage.getItem("itemsInCart")) || [];
            storedItem.push(setItem);
            localStorage.setItem('itemsInCart', JSON.stringify(storedItem));
        }
        else{
            var storedItem = JSON.parse(localStorage.getItem("itemsInCart")) || [];
            var setItem = {
                name: productInStore.name,
                price: productInStore.price,
                image: productInStore.image,
                inCart: productInStore.inCart
            }
            var itemLocation = storedItem.map(item => item.name).indexOf(setItem.name);
            {if (itemLocation != -1) {
                storedItem.forEach((item) => {
                        if (item.name === setItem.name) {
                           item.inCart +=1;
                            storedItem.splice(itemLocation, 1, item);
                            console.log("this is item2+++++" + item.inCart);
                        }
                        console.log(itemLocation + " it is here");
                        localStorage.setItem('itemsInCart', JSON.stringify(storedItem));
                    });
                } else {
                    console.log("its new");
                    storedItem.push(setItem);
                    localStorage.setItem('itemsInCart', JSON.stringify(storedItem))
                }}
            }}


    })

}

addProductPage();
displayItems();

//for printing cart items to cart page
function displayItems(){
    let cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);
    cartItems = Object.values(cartItems);
    let totalPrice = localStorage.getItem('totalCost');
    totalPrice = JSON.parse(totalPrice);
    var itemContainer = document.getElementById("items-container");
if(cartItems && itemContainer){
       for (let i = 0; i < cartItems.length; i++) {
        itemContainer.innerHTML +=
        `<div class="card card-cart" id="${cartItems[i].name}">
        <div class ="card-horizontal">
        <div class="resize-cart-image">
        <img class="img-fluid" src="${cartItems[i].image}" alt="Card image cap">
        </div>
        <div class ="card-body">
            <h4 class="card-title">${cartItems[i].name}</h4>
             <p class="card-text">$${cartItems[i].price}</p>
        </div>
        </div>
        <div class="card-footer">
        <small class="text-muted">Quantity: ${cartItems[i].inCart} </small><br>
        <button id="removecart">Remove</button>
        <button id="addToCart" type="button" class="btn btn-warning">Add to cart</button>
        <small class="text-muted">Total Amount: $${cartItems[i].inCart * cartItems[i].price} </small>
    </div>
        </div>`
       }

        var removeCart = document.querySelectorAll("#removecart");
        removeCart.forEach(item => {
            item.addEventListener('click', (event) => {
                let itemId = event.target.parentElement.parentElement.id;
                var cartItems = localStorage.getItem('itemsInCart');
                cartItems = JSON.parse(cartItems);
                console.log(cartItems);
                cartItems = Object.values(cartItems);
                var itemLocation = cartItems.map(item => item.name).indexOf(itemId);
                {if (itemLocation != -1) {
                    cartItems.forEach((item) => {
                        if (item.name === itemId) {
                            item.inCart -=1;
                            cartItems.splice(itemLocation, 1, item);
                        }
                        console.log(itemLocation + " it is here");
                        localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
                        window.location.reload();
                    });
                }}
                var cartItems = localStorage.getItem('itemsInCart');
                cartItems = JSON.parse(cartItems);
               cartItems.forEach((item) => {
               if (item.inCart === 0) {
                   var itemLocation = cartItems.map(item => item).indexOf(item);
                   cartItems.splice(itemLocation, 1);
                   event.target.parentElement.parentElement.remove();
                   localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
               }})

                    })

        })

    var carts = document.querySelectorAll('#addToCart');
    carts.forEach(item => {
        item.addEventListener('click', (event) => {
            let itemId = event.target.parentElement.parentElement.id;
            var cartItems = localStorage.getItem('itemsInCart');
            cartItems = JSON.parse(cartItems);
            console.log(cartItems);
            cartItems = Object.values(cartItems);
            var itemLocation = cartItems.map(item => item.name).indexOf(itemId);
            {if (itemLocation != -1) {
                cartItems.forEach((item) => {
                    if (item.name === itemId) {
                        item.inCart +=1;
                        cartItems.splice(itemLocation, 1, item);
                        console.log("this is item3+++++" + item.inCart);
                    }
                    console.log(itemLocation + " it is here");
                    localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
                    window.location.reload();
                });
            }}
            var cartItems = localStorage.getItem('itemsInCart');
            cartItems = JSON.parse(cartItems);
            cartItems.forEach((item) => {
                if (item.inCart === 0) {
                    var itemLocation = cartItems.map(item => item).indexOf(item);
                    cartItems.splice(itemLocation, 1);
                    event.target.parentElement.parentElement.remove();
                    localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
                }})

        })

    })


    }

    cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);
    var sum =0;
    cartItems.forEach((item) => {
        sum += item.inCart * item.price;
        console.log(sum);
    });
    var totalPricePage = document.querySelector('.totalPrice');
    totalPricePage.innerHTML += `$${sum}`;
}


//to clear page and local storage
//to confirm whether to clear
function ClearStorage(){
    var itemContainer = document.getElementById("items-container");
    var totalPricePage = document.querySelector('.totalPrice');
    var confirmClear = document.getElementById("confirmclear");
    if (totalPricePage.innerHTML !== ""){
        console.log("the clearing box")
        confirmClear.innerHTML =
            `<div class="my-modal-content">
        <h5>Clearing the cart will remove <strong>ALL</strong> items. Proceed?</h5>
  <div class = "buttons-align">
  <label for = "confirm"><button id="confirmed">Yes</button></label>
  <label for = "not-confirmed"><button id="not-confirmed">No</button></label>
      </div>
    
    </div>`
        var confirmedClear = document.getElementById('confirmed');
        var notConfirmed = document.getElementById('not-confirmed');

        confirmedClear.addEventListener('click', ()=> {
            var itemContainer = document.getElementById("items-container");
            var totalPricePage = document.querySelector('.totalPrice');
            var confirmClear = document.getElementById("confirmclear");
            confirmClear.innerHTML = "";
            totalPricePage.innerHTML = "";
            itemContainer.innerHTML = "";
            localStorage.removeItem("itemsInCart");
            localStorage.removeItem("cartNumbers");
            localStorage.removeItem("totalCost");
        })

        notConfirmed.addEventListener('click', ()=> {
            var confirmClear = document.getElementById("confirmclear");
            confirmClear.innerHTML = "";
        })
    }

    else {
        confirmClear.innerHTML =
            `<div class="my-modal-content">
        <h5>Cart is empty.</h5>
        <label for = "not-confirmed"><button id="not-confirmed">Close</button></label>
      </div>
    
    </div>`
        var notConfirmed = document.getElementById('not-confirmed');

        notConfirmed.addEventListener('click', ()=> {
            confirmClear.innerHTML = "";
        })

    }}

