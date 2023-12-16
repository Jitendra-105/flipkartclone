// to add the product to the cart 

const product =  {
    name: "Black Vans",
    tag: "Vans",
    price: 1000,
    inCart: 0,
  }


const cartBtn = document.querySelectorAll(".addToCart")

// Loop through each button and add the event listener
cartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    numberOfItems(product);
    totalCost(product)
  });
});

// To store the counts 
function numberOfItems(product) {
  let itemCount = parseInt(localStorage.getItem("cartNumbers"));
  if (itemCount) {
    localStorage.setItem("cartNumbers", itemCount + 1);
    document.querySelector(".cart-btn span").textContent = itemCount + 1;
  } else {
    localStorage.setItem("cartNumbers", 1)
    document.querySelector(".cart-btn span").textContent = 1;
  }
  setItems(product)
}

// to store the counts on web page 
function onLoadItemCount() {
  let itemCount = parseInt(localStorage.getItem("cartNumbers"));
  if (itemCount) {
    document.querySelector(".cart-btn span").textContent = itemCount;
  }
}
onLoadItemCount();

// To store the item in the localStorage 
function setItems(product) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart")) || {};

  if (cartItems[product.tag] === undefined) {
    cartItems[product.tag] = { ...product, inCart: 1 };
  } else {
    cartItems[product.tag].inCart += 1;
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


// To store and calculate total cost 
function totalCost(product) {
  let cartCost = parseInt(localStorage.getItem("totalCost")) || 0; // Initialize as 0 if null

  localStorage.setItem("totalCost", cartCost + product.price);
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost")
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  let productContainer = document.querySelector(".products");

  if(cartItems && productContainer) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
          productContainer.innerHTML += `
          <div class="product">
          <span class="pro-name">${item.name}</span>
          <div class="cart-img">
          <span class="removeItem">x</span>
          <img src="/flipkart images/${item.tag}.jpg" alt="">
          </div>
      <div class ="price">${item.price}</div>
      <div class ="quantity">${item.inCart}</div>
      <div class ="total">${item.inCart * item.price}</div>
  </div>
          `
      })
      productContainer.innerHTML += `
      <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">Basket Total: </h4>
      <h4 class="basketTotal">${cartCost}</h4>
  </div>`
  }
}
displayCart()