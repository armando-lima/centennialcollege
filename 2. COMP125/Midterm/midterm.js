// JavaScript source code
// validate check
function validateCheck() {
  if (document.getElementById('sameAsBilling').checked == true) {
    errorMessage();
  }
  else {
    document.getElementById("shippingName").innerHTML = '';
    document.getElementById("shippingAddress").innerHTML = '';
    document.getElementById("shippingCity").innerHTML = '';
    document.getElementById("shippingPostalCode").innerHTML = '';
    document.getElementById("shippingProvince").innerHTML = '';
    document.getElementById("shippingEmail").innerHTML = '';
  }

}

// validate Name
function validateName() {
  let nameInput = document.getElementById("name");
  // copy valid username value to shipping object
  shipping.name = nameInput.value;
  // copy shipping.username value to shipping section
  document.getElementById("shippingName").innerHTML = shipping.name;
}

// validate address
function validateAddress() {
  let addInput = document.getElementById("address");
  shipping.address = addInput.value;
  document.getElementById("shippingAddress").innerHTML = shipping.address;
}

// validate city
function validateCity() {
  let cityInput = document.getElementById("city");
  shipping.city = cityInput.value;
  document.getElementById("shippingCity").innerHTML = shipping.city;
}


//validate postal code
function validatePostalCode() {
  var postalInput = document.getElementById("pcode");
  shipping.pcode = postalInput.value;
  if (!postalInput.checkValidity())
    document.getElementById("shippingPostalCode").innerHTML = '';
  else
    document.getElementById("shippingPostalCode").innerHTML = shipping.pcode;
}

//validate Province
function validateProvince() {
  let provInput = document.getElementById("province");
  shipping.province = provInput.value;
  document.getElementById("shippingProvince").innerHTML = shipping.province;
}


// validate entered email
function validateEmail() {
  let emailInput = document.getElementById("emailbox");
  emailInput.value = emailInput.value.toLowerCase();
  shipping.email = emailInput.value;
  if (!emailInput.checkValidity())
    document.getElementById("shippingEmail").innerHTML = '';
  else
    document.getElementById("shippingEmail").innerHTML = shipping.email;
}

function errorMessage() {
  let nameInput = document.getElementById("name");
  let addInput = document.getElementById("address");
  let cityInput = document.getElementById("city");
  let postalInput = document.getElementById("pcode");
  let provInput = document.getElementById("province");
  let emailInput = document.getElementById("emailbox");
  validateName();
  validateAddress();
  validateCity();
  validateProvince()
  validatePostalCode();
  validateEmail();
  if (nameInput.value === "" || addInput.value === "" || cityInput.value === "" || postalInput.value === ""
    || provInput.value === "" || emailInput.value === "") {
    document.getElementById('sameAsBilling').checked = '';
    document.getElementById("form").className = "submitted";
    alert('Please fill all required fields')
  }
  else {
    alert("Thanks for the registration, your customer record is created successfully!")
  }
}