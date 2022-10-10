function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name field must be filled out");
        return false;
    }
    else if (email == "") {
        alert("Email field must be filled out");
        return false;
    }
    else if (subject == "") {
        alert("Subject field must be filled out");
        return false;
    }
    else if (message == "") {
        alert("Message field must be filled out");
        return false;
    }
}

function validateFormLogin() {
    let fname = document.forms["myLoginForm"]["fname"].value;
    let lname = document.forms["myLoginForm"]["lname"].value;
    let email = document.forms["myLoginForm"]["email"].value;
    let address = document.forms["myLoginForm"]["address"].value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log("gender",gender)
    let multiselected = document.querySelectorAll('#education option:checked').length;
    let phonemethod = document.getElementById('methodphone');
    let emailmethod = document.getElementById('methodemail');
    let callmethod = document.getElementById('methodcall');
    if (fname == "") {
        alert("First Name field must be filled out");
        return false;
    }
    else if (lname == "") {
        alert("Last Name field must be filled out");
        return false;
    }
    else if (email == "") {
        alert("Email field must be filled out");
        return false;
    }
    else if (address == "") {
        alert("Address field must be filled out");
        return false;
    }
    // else if (gender !== "Male" || gender !== "Female") {
    //     alert("Gender must be select");
    //     return false;
    // }
    else if (multiselected == 0 || multiselected == null || multiselected == undefined) {
        alert("Edcuation must be select");
        return false;
    }
    else if (!phonemethod.checked && !emailmethod.checked && !callmethod.checked) {
        alert("Contact Method must be select");
        return false;
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  var modal = document.getElementById('ticketModal');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }