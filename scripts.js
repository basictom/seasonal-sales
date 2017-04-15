// alert("hello world");
console.log("Open");

var productOutput = document.getElementById("data-output");
var selector = document.getElementById("seasons");

function failedExecution() {
    alert("Error loading page. Please refresh.")
};

var productData = [];
var categoriesData = [];

function categoriesLoaded(){
  categoriesData = JSON.parse(this.responseText).categories;
  // console.log(categoriesData);
}

function productsLoaded(){
  productData = JSON.parse(this.responseText).products;
  handleData();
}


function printToDom(disc){
    var newProduct = "";
    // console.log("newproduct", newProduct);
    for(var i=0;i<productData.length;i++){
      // currentProduct = discount.products[i];
      newProduct += `<div class="col-sm-6 col-md-4">`;
      newProduct += `<h3>${productData[i].name}</h3>`;
      newProduct += `<div class="thumbnail">`;
      newProduct += `<div class="caption">`;
      newProduct += `<p>${productData[i].name}</p>`;
      if(disc === productData[i].season_discount){
      newProduct += `<p>${productData[i].season_price.toFixed(2)}</p>`;
      }else{
      newProduct += `<p>${productData[i].price}</p>`;
      }
      newProduct += `</div></div></div>`;
      }
    productOutput.innerHTML = newProduct;
}

function handleData(){
  productData.forEach(function(product){
    for(var i=0;i<categoriesData.length;i++){
      if(product.category_id === categoriesData[i].id){
        product["name"] = categoriesData[i].name;
        product["discount"] = categoriesData[i].discount;
        product["season_discount"] = categoriesData[i].season_discount;
        product["season_price"] = product.price -  (product.price * categoriesData[i].discount);
      }
    }
  })
  console.log(categoriesData);
  console.log(productData);
  printToDom('null');
}

selector.addEventListener("change", function(e){
  var selectedSeason = event.target.value;
  printToDom(selectedSeason);
})


var categoriesRequest = new XMLHttpRequest();
categoriesRequest.addEventListener("load", categoriesLoaded);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();

var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", productsLoaded);
productsRequest.open("GET", "products.json");
productsRequest.send();



console.log("close");
