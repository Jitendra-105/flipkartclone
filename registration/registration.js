// Form Validtion 

const nameErr  = document.querySelector("#nameErr")
const emailErr = document.querySelector(".emailErr")
const passErr = document.querySelector(".passErr")
const repeatErr = document.querySelector("#repeatErr")


const nameField = document.querySelector("#name")
const emailField = document.querySelector(".email")
const passField = document.querySelector(".password")
const repeatField = document.querySelector("#repeatPassword")

const registerBtn = document.querySelector(".register")

nameField.addEventListener("keyup", () => {
  if(nameField.value === "") {
    nameErr.innerText = "name cannot be blank"
    return false;
  } else if (!nameField.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErr.innerText = "enter valid name"
    return false;
  } else {
    nameErr.innerText = ""
    return true;
  }
})

emailField.addEventListener("keyup", () => {
  if(emailField.value === "") {
    emailErr.innerText = "email cannot be blank"
    return false;
  } else if (!emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailErr.innerText = "enter correct email"
    return false;
  } else {
    emailErr.innerText = ""
    return true;
  }
})

passField.addEventListener("keyup", () => {
  if(passField.value === "") {
    passErr.innerText = "please generate password"
    return false;
  } else if (!passField.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    passErr.innerText = "generate strong password"
    return false;
  } else {
    passErr.innerText = "";
    return true;
  }
})

repeatField.addEventListener("keyup", () => {
  if(repeatField.value === "") {
    repeatErr.innerText = "confirm password"
    return false;
  } else if (repeatField.value !== passField.value) {
    repeatErr.innerText = "enter correct password"
    return false;
  } else {
    repeatErr.innerText = "password matched"
    return true;
  }
})


// validation on submit button 

const submitBtn = document.querySelector(".register")
const remarks = document.querySelector(".remarks")

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if(nameField.value === "" || !nameField.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    remarks.innerText = "please enter valid name"
  } else if (emailField.value === "" || !emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    remarks.innerText = "please enter valid email"
  }
   else if ( passField.value === "" || !passField.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    remarks.innerText = "please create strong password"
  } else if (repeatField.value === "" || repeatField.value !== passField.value) {
    remarks.innerText = "password does not match kindly recheck"
  }
  else {
    remarks.innerText = ""
    window.location.href = "/index.html"; 
  }
  
})

// To Show the password 
const showPassword = document.querySelector(".showPassword");
const hidePassword = document.querySelector(".hidePassword")
const iconContainer = document.querySelector(".icon-container")
hidePassword.addEventListener("click", () => {
  if(passField.type === "password" ) {
    passField.type = "text"
    hidePassword.style.display = "none"
    showPassword.style.display = "block"
  } else {
    passField.type = "password"
  }
})

// To hide the Password 
showPassword.addEventListener("click", () => {
  if(passField.type === "text" ) {
    passField.type = "password"
    hidePassword.style.display = "block"
    showPassword.style.display = "none"
  } else {
    passField.type = "text"
  }
   
  })