//Fetch JSON to HTML page
//Insert JSON items to paragraph with #cards id

function addProductPage(){
    fetch('../assets/furniture.json')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json);
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
        console.log(cartItems);
        if(cartItems == null){
                var y = {
                    name: productInStore.name,
                    price: productInStore.price,
                    inCart: productInStore.inCart +=1
                }
            var x = JSON.parse(localStorage.getItem("itemsInCart")) || [];
            x.push(y);
            localStorage.setItem('itemsInCart', JSON.stringify(x));

        }
        else{
            var y = {
                name: productInStore.name,
                price: productInStore.price,
                inCart: productInStore.inCart +=1
            }
            console.log(Object.values(y) + "line 70")
            var x = JSON.parse(localStorage.getItem("itemsInCart")) || [];
            var itemLocation = x.map(item => item.name).indexOf(y.name);
            if(itemLocation != -1){
            x.splice(itemLocation, 1);
            console.log(x);
            console.log(itemLocation+ " it is here");
            x.push(y);
            localStorage.setItem('itemsInCart', JSON.stringify(x));
            }
            else{
                console.log("its new");
                x.push(y);
                localStorage.setItem('itemsInCart', JSON.stringify(x));}
            }
            (localStorage.getItem("itemsInCart")) || [];
            //     x.push(b);
            //     localStorage.setItem('itemsInCart', JSON.stringify(x));

            console.log("here is the else");
    }
    
    //setitem en

    //price starts
    function calCost(productInStore){
        let cartCost = localStorage.getItem("totalCost");
        
        if (cartCost != null){
            cartCost = parseInt(cartCost); //conversion required for math
            localStorage.setItem("totalCost", cartCost+= productInStore.price);
        }else{
            localStorage.setItem("totalCost", productInStore.price);
        }
    }
    //price ends



    }
    )

    
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
    // var itemDisplay = document.querySelector('.item-image');
    // var itemName = document.querySelector('.item-name');
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
        <small class="text-muted">Total Amount: ${cartItems[i].inCart * cartItems[i].price} </small>
    </div>
        </div>`
       }

        let totalCost = localStorage.getItem("totalCost");
        totalCost = JSON.parse(totalCost);
        var totalPricePage = document.querySelector('.totalPrice');
        totalPricePage.innerHTML +=  `$${totalCost}`;

        var removeCart = document.querySelectorAll("#removecart");
        removeCart.forEach(item => {
            item.addEventListener('click', (event) => {
                let itemId = event.target.parentElement.parentElement.id;
                var cartItems = localStorage.getItem('itemsInCart');
                cartItems = JSON.parse(cartItems);
                console.log(cartItems);
                cartItems = Object.values(cartItems);
                    var itemLocation = cartItems.map(item => item.name).indexOf(itemId);
                    var x= cartItems.splice(itemLocation, 1);
                    localStorage.setItem("testing", JSON.stringify(x));
                    x= JSON.parse(localStorage.getItem('testing'));
                    console.log(x);
                    console.log(itemId);
                    const array=[];

                    let totalCost = localStorage.getItem("totalCost");
                    totalCost = JSON.parse(totalCost);
                  for (var i =0; i<cartItems.length;i++){
                    cartItems[cartItems[i].name]={name: cartItems[i].name, price: cartItems[i].price};
                        console.log(cartItems[cartItems[i].name]);


                        //localStorage.setItem("itemsInCart", JSON.stringify(item));
                  }


                    console.log("worked");
                    event.target.parentElement.parentElement.remove();
                    calCost(productInStore);
                    console.log("hello");

                cartPrice();


                    })

        })

        // let totalCost = localStorage.getItem("totalCost");
        // totalCost = JSON.parse(totalCost);
        // var totalPricePage = document.querySelector('.totalPrice');
        // totalPricePage.innerHTML +=  `$${totalCost}`;


         //remove starts

    // var removeCart = document.querySelectorAll("#removecart"); 
    // for(let i =0; i< removeCart.length; i++){
    //     removeCart[i].addEventListener('click', () =>{
    //     console.log("remove exist");
    //     removeItems(cartItems);
    //         });
    //     }

    //remove ends

     //setitem start
    //  var removeCart = document.querySelectorAll("#removecart");
    //  removeCart.forEach(item => {
    //         item.addEventListener('click', (event) => {
    //             let itemId = event.target.parentElement.parentElement.id;
    //             var cartItems = localStorage.getItem('itemsInCart');
    //             cartItems = JSON.parse(cartItems);
    //             cartItems =Object.values(cartItems);
    //             var check = false;
    //             for(var i=0; i<cartItems.length;i++){
    //                 if(cartItems[i].name == itemId){
    //                     check = true;
    //                     cartItems[i].inCart--;
    //                     cartItems= {
    //                         [cartItems.name] : cartItems
    //                     }

    //                 }
    //                 localStorage.setItem("itemsInCart", JSON.stringify(cartItems))
    //                 console.log("done");

    //             }
    //             if (check == false){
    //                 console.log("nothing");
    //             }









    //             // var itemLocation = cartItems.map(item => item.name).indexOf(itemId);
    //             //    cartItems.splice(itemLocation, 1);
    //             //     cartItems.forEach(item => {
    //             //             item ={
    //             //             [item.name]: item}
    //             //             console.log(item);
    //             //             let x = JSON.parse(localStorage.getItem("itemsInCart")) || [];
    //             //             x.push(item);
    //             //             localStorage.setItem('itemsInCart', JSON.stringify(x));
    //             //         })

    //             // var itemLocation = cartItems.map(item => item.name).indexOf(itemId);
    //             // var x = cartItems.splice(itemLocation, 1);
    //             // cartItems.forEach(item => {
    //             //     item ={
    //             //     [item.name]: item}
    //             //     console.log(item);
    //             //     let x = [];
    //             //     x.push([item]);
    //             //     console.log(x);
    //             // })

    //             // x.forEach(item => {
    //             //     item.inCart -=1;

    //             //     item ={
    //             //         [item.name]: item
    //             //     }
    //             //     console.log(item);
    //             //     //localStorage.setItem('itemsInCart', JSON.stringify(item));


    //             // });
    //         })
    //     })


   //to clear page and local storage
   //to confirm whether to clear
function ClearStorage(){
    var itemContainer = document.getElementById("items-container");
    var totalPricePage = document.querySelector('.totalPrice');
    var confirmClear = document.getElementById("confirmclear");
    if (totalPricePage.innerHTML != ""){
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

    }




}
}}
