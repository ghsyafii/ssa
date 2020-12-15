var myModal = document.getElementById("myModal");
var clickLogin = document.getElementById("loginclick");
var span = document.getElementsByClassName("closetag")[0];

clickLogin.addEventListener('click', function () {
  if (myModal.style.display == "none" || myModal.style.display == '') {
    myModal.style.display = "block";
  } else
    myModal.style.display = "none";
});

span.addEventListener('click', function () {
  if (myModal.style.display == "block")
    myModal.style.display = "none";
})

window.addEventListener('click', function (event) {
  if (event.target == myModal) { myModal.style.display = "none"; }
})

// adding info to SIGNUP

var inputFirstName = document.getElementById("inputFname");
var inputLastName = document.getElementById("inputLname");
var inputEmail = document.getElementById("inputEmail4");
var inputPassword = document.getElementById("inputPassword4");
var inputAddress = document.getElementById("inputAddress");
var countryCode = document.getElementById("inputState");
var inputPhone = document.getElementById("inputPhone");
var inputPostal = document.getElementById("inputCity");
var enterInfo = document.getElementById("info-enter");
var checkBox = document.getElementById("gridCheck");
var signUpForm = document.getElementById("signupform");
var userName = document.getElementById("uname");
var userPass = document.getElementById("upass");
var users = [];


addToLocalStorage = () => {
  if (inputEmail.value == "" || inputEmail.value == " ") {
    alert("Please fill in your email.")
  }
  else if (inputFirstName.value == "" || inputFirstName.value == " ") {
    alert("Please fill in your first name.")

  }
  else if (inputLastName.value == "" || inputLastName.value == " ") {
    alert("Please fill in your last name.")
  }
  else if (inputPassword.value == "" || inputPassword.value == " ") {
    alert("Please fill in your last name.")
  }
  else if (inputAddress.value == "" || inputAddress.value == " ") {
    alert("Please fill in your last name.")
  }
  else if (inputPhone.value == "" || inputPhone.value == " ") {
    alert("Please fill in your last name.")
  }
  else if (inputPostal.value == "" || inputPostal.value == " ") {
    alert("Please fill in your last name.")
  }
  else if (countryCode.value == "" || countryCode.value == " ") {
    alert("Please fill in your last name.")
  }
  else { 
    addInfo();
    passUsers();
   }
}

enterInfo.addEventListener('click', (event) => {
  event.preventDefault();
  if (checkBox.checked == false) {
    alert("Kindly check the terms and condition.")
  }
  else {

    addToLocalStorage();
    signUpForm.reset();
  }

});

function addInfo() {
  const addStuff = {
    firstname: inputFirstName.value,
    lastname: inputLastName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    address: inputAddress.value,
    countrycode: countryCode.value,
    phone: inputPhone.value,
    postal: inputPostal.value
  }


  // infoStore.push(addStuff);
  // localStorage.setItem('listInfo', JSON.stringify(infoStore));
  var infoStore = JSON.parse(localStorage.getItem('listInfo')) || []; // a default setting
  infoStore.push(addStuff);
  localStorage.setItem('listInfo', JSON.stringify(infoStore));


}

//end of signup


//login validation with local storage
function passUsers (){
  const userLogin = {
    username: inputEmail.value,
    userpass: inputPassword.value
  }
  users.push(userLogin);
  localStorage.setItem('loginInfo', JSON.stringify(users));
}

function validUser() {
  var tempUsers = localStorage.getItem("loginInfo");
  users = JSON.parse(tempUsers);
  for (var i =0; i < users.length; i++){
      if (userName.value !== users[i].username)
      {alert("Wrong username or password. Please try again!");}
      else if (userPass.value !== users[i].userpass)
      {alert("Wrong username or password. Please try again!");}
      else if (userName.value == users[i].username && userPass.value == users[i].userpass)
      {alert("Login successful!");}
  }
}
//     if (userName.value !== users.username) 
// {
//   alert("Wrong username or password. Please try again!");
// }
// else if (userName.value === users.username && userPass.value === users.userpass)
// { alert("Login successful!");
// }



//foreach method try later
// for(var i = 0; i < cubes.length; i++) {
//   var cube = cubes[i];
//   for(var j = 0; j < cube.length; j++) {
//       display("cube[" + i + "][" + j + "] = " + cube[j]);
//   }
// }
