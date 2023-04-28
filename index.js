let formInfo = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phone");
  let message = document.getElementById("msg");
  

  if (fname.value == "" || lname.value == "" || email.value =="" || phoneNumber.value=="") {
    alert("Please input all required fields!");
  } else {
   

    alert("This form has been successfully submitted");
    console.log(
      "First Name: " + firstName.value + " Last Name: " + lastName.value + " Email Address: " + email.value + " Phone Number: " + 
      phoneNumber.value+ " Message: "+message.value);

  }
});