// alert("hello world");
console.log("Open");

var productOutput = document.getElementById("data-output");
var selector = document.getElementById("seasons");


var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", productsLoaded);
productsRequest.open("GET", "products.json");
productsRequest.send();

function failedExecution() {
    alert("Error loading page. Please refresh.")
};

function productsLoaded(){
  var productData = JSON.parse(this.responseText);
  loadCategories(productData);
}

function loadCategories(prod){
  var categoriesRequest = new XMLHttpRequest();
  categoriesRequest.addEventListener("load", categoriesLoaded);
  categoriesRequest.open("GET", "categories.json");
  categoriesRequest.send();

  function categoriesLoaded(){
    var categoriesData = JSON.parse(this.responseText)
    printToDom(productData, categoriesData);
  }
}

// function categoriesLoop(){
//   var newCategory = "";
//   for(var i=0;i<.categories;i++){
//
//   }
// }

function printToDom(prod,cat){
    var newProduct = "";
    var currentProduct = "";
    for(var i=0;i<prod.products.length;i++){
      currentProduct = prod.products[i];
      newProduct += `<div class="col-sm-6 col-md-4">`;
      newProduct += `<h3>${currentProduct.name}</h3>`;
      newProduct += `<div class="thumbnail">`;
      newProduct += `<div class="caption">`;
      newProduct += `<p>${currentProduct.name}</p>`;
      newProduct += `<p>${currentProduct.price}</p>`;
      newProduct += `</div></div></div>`;
      // Categories

      }
    productOutput.innerHTML = newProduct;
}

console.log("close");
