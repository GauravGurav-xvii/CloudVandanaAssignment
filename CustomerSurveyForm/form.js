function validateForm() {
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var genderCheckboxes = document.getElementsByName("gender");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Basic validation: Check if the required fields are empty
    if (firstName === "" || lastName === "" || dob === "" || country === "" || profession === "" || email === "" || mobile === "") {
        alert("All fields are required");
        return false;
    }

    // Validation for email format using regular expression
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address")
    }

    showPopup();
    return false; 
}

function showPopup() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = [];
    var genderCheckboxes = document.getElementsByName("gender");
    for (var i = 0; i < genderCheckboxes.length; i++) {
        if (genderCheckboxes[i].checked) {
            gender.push(genderCheckboxes[i].value);
        }
    }
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var popupContent = "First Name: " + firstName + "<br>" +
        "Last Name: " + lastName + "<br>" +
        "Date of Birth: " + dob + "<br>" +
        "Country: " + country + "<br>" +
        "Gender: " + gender.join(", ") + "<br>" +
        "Profession: " + profession + "<br>" +
        "Email: " + email + "<br>" +
        "Mobile Number: " + mobile;

    document.getElementById("popupContent").innerHTML = popupContent;
    document.getElementById("resultPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}