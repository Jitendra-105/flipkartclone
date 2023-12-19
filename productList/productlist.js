const searchInput = document.getElementById('search-bar');
const productContainers = document.querySelectorAll('.pro-container');
// const productContainers = document.querySelectorAll('.product-content'); =>  we can use this code as well but output will be appeared vertically but we want our product to be displayed horizontally hence used above code
 
// Add event listener to the search input
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();

  // Loop through each product container and toggle visibility based on search text
  productContainers.forEach(container => {
    const productName = container.querySelector('.product-name').textContent.toLowerCase();
    if (productName.includes(searchText)) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
      searchText.innerHTML = ""
});

// To sort product from low to high price 
 const lowToHightBtn = document.querySelector(".lowBtn")
 lowToHightBtn.addEventListener("click", () => {

    // Get all product containers
    let productContainers = document.querySelectorAll('.pro-container');

    // Convert NodeList to an array for easier manipulation
    let productArray = Array.from(productContainers);

    // Sort the array based on product price
    productArray.sort(function (a, b) {
      let priceA = parseInt(a.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);
      let priceB = parseInt(b.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);

      return priceA - priceB;
    });

    // Remove existing product containers from the DOM
    productContainers.forEach(function (container) {
      container.remove();
    });

    // Append sorted product containers to the products-wrapper
    let productsWrapper = document.querySelector('.products-wrapper');
    productArray.forEach(function (container) {
      productsWrapper.appendChild(container);
    });
   });

// To sort product from high to low price 
const highToLowBtn = document.querySelector(".highBtn")
highToLowBtn.addEventListener("click", () => {

   let productContainers = document.querySelectorAll('.pro-container');
   let productArray = Array.from(productContainers);

   productArray.sort(function (a, b) {
    let priceA = parseInt(a.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);
    let priceB = parseInt(b.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);

    return priceB - priceA;

   });

   productContainers.forEach(function (container) {
     container.remove();
   });

   let productsWrapper = document.querySelector('.products-wrapper');
   productArray.forEach(function (container) {
     productsWrapper.appendChild(container);
   });
  });































// note  below code was written before we added product-content div in our html file 

//  // Get the search input element
//  const searchInput = document.getElementById('search-bar');
//  // Get the product wrapper
//  const productWrapper = document.getElementById('product-wrapper');
//  // Get all product containers
//  const productContainers = productWrapper.querySelectorAll('.pro-container');

//  // Add event listener to the search input
//  searchInput.addEventListener('input', function () {
//    const searchText = searchInput.value.toLowerCase();

//    // Loop through each product container and toggle visibility based on search text
//    productContainers.forEach(container => {
//      const productName = container.querySelector('.product-name').textContent.toLowerCase();
//      if (productName.includes(searchText)) {
//        container.style.display = 'block' ;
//      } else {
//        container.style.display = 'none';
//      }
//    });
//  });


// this code was written after we use product-coantiner div so refer this code 

// const searchInput = document.getElementById('search-bar');
// const productContainers = document.querySelectorAll('.pro-container');
// // const productContainers = document.querySelectorAll('.product-content'); =>  we can use this code as well but output will be appeared vertically but we want our product to be displayed horizontally hence used above code
 
// // Add event listener to the search input
// searchInput.addEventListener('input', function () {
//   const searchText = searchInput.value.toLowerCase();

//   // Loop through each product container and toggle visibility based on search text
//   productContainers.forEach(container => {
//     const productName = container.querySelector('.product-name').textContent.toLowerCase();
//     if (productName.includes(searchText)) {
//       container.style.display = 'block';
//     } else {
//       container.style.display = 'none';
//     }
//   });
//       searchText.innerHTML = ""
// });
