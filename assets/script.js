var myModal = document.getElementById("myModal");
var clickLogin = document.getElementById("loginclick");
var span = document.getElementsByClassName("closetag")[0];

clickLogin.addEventListener('click', function(){
  if (myModal.style.display == "none" || myModal.style.display ==''){
    myModal.style.display = "block";
  } else
  myModal.style.display = "none";
});

span.addEventListener('click', function(){
  if (myModal.style.display == "block")
  myModal.style.display = "none";
})

window.addEventListener('click', function(event){
  if (event.target == myModal)
  {myModal.style.display = "none";}
})