
function validateForm(){

let valid = true;

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("passError").innerHTML="";

if(name==""){
document.getElementById("nameError").innerHTML="Name is required";
valid=false;
}

if(email==""){
document.getElementById("emailError").innerHTML="Email is required";
valid=false;
}

if(password==""){
document.getElementById("passError").innerHTML="Password is required";
valid=false;
}

return valid;

}