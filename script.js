var xObj = new XMLHttpRequest();
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
    sendData();

}

function sendData()
 {
    try{
        const url = "http://dummy.com";
        xObj.open(url, {
            method : "POST",
            body: new FormData(document.getElementById("myForm"))
        });
        xObj.onreadystatechange = () => {
            console.log("done");
        };
        xObj.send(null);
    } catch(err) {
        console.log(err)
    }  finally {
        return true;
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

function showBrandbar(val) {
    if(!sessionStorage.getItem("data")) {
       setData();
    }
    let res = "";
    JSON.parse(sessionStorage.getItem("data")).forEach(function (item) {
        res = res + `<a href="${item.href}" class="w3-bar-item nav-padding w3-hide-small ${ item.name == val  ? "active" : "" }">${item.name}</a>`
      });
    let data = `
        <div class="w3-bar w3-card">
            <a class="w3-bar-item nav-padding w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)"
                onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
            <a class="logo" href="./index.html"><img src="./logo1.png" alt="logo"></a>
            ${res}
        </div>`;
    document.getElementById("header_replacement").innerHTML = data;
}

function setData() {
    try{
        xObj.open("GET", "data.json", false);
        xObj.onreadystatechange = () => {
            if (xObj.readyState === 4 && xObj.status === 200) {
                sessionStorage.setItem("data", xObj.response);
            }
        };
        xObj.send(null);
    } catch(rr) {
        // set default when issue occurs
        let data = [
            {
                "href" : "./index.html",
                "name": "HOME"
            },
            {
                "href" : "./Introduction.html",
                "name": "INTRODUCTION"
            },
            {
                "href" : "./Contact us.html",
                "name": "CONTACT US"
            },
            {
                "href" : "./Login_Registration.html",
                "name": "LOGIN/REGISTRATION"
            },
            {
                "href" : "./About us.html",
                "name": "ABOUT US"
            },
            {
                "href" : "./privacy_policy.html",
                "name": "PRIVACY POLICY"
            }
        ];
        sessionStorage.setItem("data", JSON.stringify(data))
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