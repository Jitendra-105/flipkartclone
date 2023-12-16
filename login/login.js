const emailErr = document.querySelector(".emailErr")
const passErr = document.querySelector(".passErr")

const emailField = document.querySelector(".email")
const passField = document.querySelector(".password")
const LoginBtn = document.querySelector("#continue")

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

const remarks = document.querySelector(".remarks")

LoginBtn.addEventListener("click", (e) => {
    e.preventDefault()
     if (emailField.value === "" || !emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        remarks.innerText = "please enter valid email"
      }
      else if ( passField.value === "" || !passField.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        remarks.innerText = "please create strong password"
      }  else {
        remarks.innerText = ""
        window.location.href = "/index/index.html"; 
      }
})

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