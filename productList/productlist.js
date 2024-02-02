const searchInput = document.getElementById('search-bar');
const productContainers = document.querySelectorAll('.pro-container');

 
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();

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

 const lowToHightBtn = document.querySelector(".lowBtn")
 lowToHightBtn.addEventListener("click", () => {

    let productContainers = document.querySelectorAll('.pro-container');

    let productArray = Array.from(productContainers);

    productArray.sort(function (a, b) {
      let priceA = parseInt(a.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);
      let priceB = parseInt(b.querySelector('.prod-price').innerText.replace(/[^\d]/g, ''), 10);

      return priceA - priceB;
    });

    productContainers.forEach(function (container) {
      container.remove();
    });

    let productsWrapper = document.querySelector('.products-wrapper');
    productArray.forEach(function (container) {
      productsWrapper.appendChild(container);
    });
   });

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

  
  // Reset the Filter 
  const resetBtn = document.querySelector(".resetBtn")
  resetBtn.addEventListener("click", () => {

  })