function ValidSignup() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  var namereg = /^[a-zA-Z]+$/;
  var emailreg = /^[a-zA-Z0-9]+@\.(gmail|yahoo|outlook)\.com$/;
  var phonereg = /^(\+88)?-?01[3-9]\d{8}$/;
  var passreg = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%_*+&<>])).{6,20}/;

  if (name == "" || email == "" || phone == "" || password == "" || confirmPassword == "") {
    alert("Please try again");
    return false;
  }

  if (!name.match(namereg)) {
    alert("Name should contain only alphabets.");
    return false;
  }

  if (!email.match(emailreg)) {
    alert("Invalid Email...Please enter a valid email");
    return false;
  }

  if (!phone.match(phonereg)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (!password.match(passreg)) {
    alert("Password should contain 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be 6-20 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  alert("SignUp Successfully!");
  return true;
}




function ValidLogin() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var emailreg = /^[a-zA-Z0-9]+@\.(gmail|yahoo|outlook)\.com$/;
  var passreg = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%_*+&<>])).{6,20}/;


  if (email == "" || password == "") {
    alert("Please try again")
    return false;
  }

  if (!email.match(emailreg)) {
    alert("Invalid Email...Please enter a valid email");
    return false;
  }
  if (!password.match(passreg)) {
    alert("Password should contain 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be 6-20 characters long.");
    return false;
  }
  alert("Login Successfully!");
  return true;
}


function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myContact(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  var namereg = /^[a-zA-Z]+$/;
  var emailreg = /^[a-zA-Z0-9]+@\.(gmail|yahoo|outlook)\.com$/;

  if (name == "" || email == "") {
    alert("Please try again");
    return false;
  }

  if (!name.match(namereg)) {
    alert("Name should contain only alphabets.");
    return false;
  }

  if (!email.match(emailreg)) {
    alert("Invalid Email...Please enter a valid email");
    return false;
  }
  alert("Message send successfully!");
  return true;
}

