// To show nav menu on small screen devices 
function show() {
  const showMenu = document.querySelector("#menu");
  const nav = document.getElementById("navbar")

  nav.classList.toggle("active")
  if (nav.classList.contains("active")) {
    showMenu.classList.remove("fa-bars");
    showMenu.classList.add("fa-x");
  } else {
    showMenu.classList.remove("fa-x");
    showMenu.classList.add("fa-bars");
  }
}


// To change the main images when clicked on small images 
const smallImg = document.querySelectorAll(".small-img")
const mainImg = document.querySelector("#onlyvans")

smallImg.forEach((currentImg) => {
  currentImg.addEventListener("click", (e) => {
    let spec = e.target.src;
    mainImg.src = spec;
  })
})
