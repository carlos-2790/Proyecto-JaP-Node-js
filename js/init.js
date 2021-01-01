const CATEGORIES_URL ='http://localhost:3000/category';//"https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL ='http://localhost:3000/category-info'; //"https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL ="http://localhost:3000/product"; //"https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = 'http://localhost:3000/product-info';//"https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = 'http://localhost:3000/comment-product';//"https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
//const ARTICLES_CART ="http://localhost:3000/cart";//"https://japdevdep.github.io/ecommerce-api/cart/654.json";
const DATOS_ENVIOS = "http://localhost:3000/envio";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
     fetch(url)
     .then(response => {
      if (response.ok) { 
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});