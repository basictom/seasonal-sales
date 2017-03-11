// alert("hello world");
console.log("Hello world");
var productOutput = document.getElementById("data-output");

function productsLoop(product){
  var newProduct = "";
  var currentProduct = "";
  for(var i=0;i<product.products.length;i++){
    currentProduct = product.products[i];
    newProduct += `<div class="col-sm-6 col-md-4">`;
    newProduct += `<h3>${currentProduct.name}</h3>`
    newProduct += `<div class="thumbnail">`;
    newProduct += `<img src="..." alt="...">`;
    newProduct += `<div class="caption">`;
    newProduct += `<p>${currentProduct.name}</p>`;
    newProduct += `<p>${currentProduct.price}</p>`;
    newProduct += `</div></div></div>`;
  }
  productOutput.innerHTML = newProduct;
}



function categoriesLoaded(){
  var categoriesData = JSON.parse(this.responseText)
  console.log(categoriesData);
}

function productsLoaded(){
  var productData = JSON.parse(this.responseText)
  console.log(productData);
  productsLoop(productData);
}

var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", productsLoaded);
productsRequest.open("GET", "products.json");
productsRequest.send();
console.log("Running...");

var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", categoriesLoaded);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();
console.log("Running...");
