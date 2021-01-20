const productName = document.querySelector('#productName');

const productPrice = document.querySelector('#productPrice')

const form = document.querySelector('form');

const cards = document.querySelector('#cards');

const display = document.querySelector('.display');

//Function to add products

const addProducts = (furniture, id) => {
    let html = `<div data-id="${id}" class="col-sm-3"><div class="card p-1">
        <img class="card-img-top animate__animated animate__fadeIn" src="https://ssafurniture.netlify.app/images/furniture/blackchair.jpg" alt="">
        <div class="card-body">
            <h5 class="card-title">${furniture.name}</h5>
            <p class="card-text">$${furniture.price}</p>
            <button id="delete" type="button" class="btn btn-danger btn-sm">Delete</button>
        </div>
    </div></div>`;
    cards.innerHTML += html;
}

//firebase - fetch from server

db.collection('furniture').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        addProducts(doc.data(), doc.id);
    })
}).catch(error => {
    console.log(error);
})

//firebase - submit event listener

form.addEventListener('submit', event => {
    event.preventDefault();

    const now = new Date();

    const furniture = {
        name: productName.value,
        price: productPrice.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('furniture').add(furniture).then(() => {
        console.log('furniture added');
    }).catch(error => console.log(error));
    form.reset();
    setTimeout(function(){window.location.reload();},1000)
});

//delete button

cards.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
    const id = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    db.collection('furniture').doc(id).delete().then(() => {
        console.log('furniture deleted');
        setTimeout(function(){window.location.reload();},1000);
    })
    }
})

// Ignore below: they're personal notes for final project tasks 4 to 7 - Syafii

//task 4
//products listing page
//Add, remove and clear products to html page based on 10 hard-coded json products

class ModelController{
    static addItem(item){
        //adds a new card layout to the div where you display product cards
        console.log('item added');
    }
    static removeItem(itemId){
        //removes the item from the div and the data structure if the item exists with the given id
        console.log('item removed');
    }
    static clearAllItems(){
        //removes all items from the div list and items in data structure
        console.log('all items cleared');
    }
}

//task 5
//form page to submit products as json objects to product listings page

class Form {
    static loadItemDetails(){
        //sets the item information from the form fields
    }
    static validateForm(){
        //validates input from form, displaying error if wrong
    }
}

//there should be submit button that fires loadItemDetails(item), creating a JSON object that is saved

//Not sure what this is about: create a class ModelController inside the JavaScript file that contains a data structure (what is this?) to store in memory the model items and support CRUD operations

//??

//task 6
//user registration form

class UserController {
    static storeUser(user){
        //store registered user to memory (local storage? spring boot/mysql?)
    }
    static verifyUser(user){
        //verify login credentials with users saved in memory
    }
}

//once user clicks 'submit', UserController.storeUser(user) is fired, storing registered user to memory

//task 7
//user login

//once user clicks 'register', UserController.verifyUser(user) is fired, checking user against stored user to see if registered already or not






