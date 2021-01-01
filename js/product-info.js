var product = {};
var coments = "";
let impHtml = "";
let infoHtml = " ";
var d = new Date();
var dia = d.getDate();
var mes = d.getMonth();
var anio = d.getUTCFullYear();
var hora = d.getHours();
var min = d.getMinutes();
var seg = d.getSeconds();




mes = mes + 1;
if (mes < 10) {
    mes = "0" + mes;
}
if (dia < 10) {
    dia = "0" + dia;
}
if (hora < 10) {
    hora = "0" + hora;
}
if (min < 10) {
    min = "0" + min;
}
if (seg < 10) {
    seg = "0" + seg;
}

var stringFechas = ` ` + dia + `-` + mes + `-` + anio + `  ` + hora + `:` + min + `:` + seg + ``;
var fechas = document.getElementById("fechaHoy");
var puntaje = document.getElementById("puntaje");
var comentario = document.getElementById("comentario");
var usuarioC = localStorage.getItem('usuario');



// agrego nuevos comentarios a los que ya estan impresos 
function agregarComentario() {


    if (puntaje.value == null || puntaje.value == "") {

        alert("Debe ingresar un valor en Puntaje...")
    }

    else if (puntaje.value < 1 || puntaje.value > 5) {
        alert("El puntaje debe estar entre 1 y 5 ")
    }
    else if (comentario.value == null || comentario.value == "") {
        alert("Debe ingresar un comentario...")
    } else {



        infoHtml += `
            <strong> Puntuacion:  </strong> `+ puntaje.value + `<br>
            <strong> Descripcion: </strong>`+ comentario.value + `<br>
            <strong> Usuario:     </strong> ` + usuarioC + `<br>
            <strong> Fecha:       </strong> `+ stringFechas + `<br><br>

               `
        document.getElementById("contenedor-info").innerHTML = infoHtml;
        puntaje.value = "";
        comentario.value = "";

    }


}


function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
/*
function imprimirCarrusell(imprimir) {

    let indicador = document.getElementById("indicador");
    let contenedorImagenes = document.getElementById("productImagenes")
    let nombre = document.getElementById("nombre");
    let descripcion = document.getElementById("descripcion");
    indicador = ``;
    contenedorImagenes = ``;
    for (var i = 1; i < imprimir.length; i++) {

        if (i === 0) {
            indicador.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`;
            continue;
        }
        indicador.innerHTML += i;//`<li data-target="#carouselExampleIndicators" data-slide-to=`+i+`></li>`;
    }

    for (var i = 0; i < imprimir.length; i++) {
        let img = imprimir[i];
        alert(img)
        if (i === 0) {
            contenedorImagenes.innerHTML += `<div class="carousel-item active">
         <img class="d-block w-100" src=`+img[0]+` alt="First slide" style="max-width:100%;height:auto;">
      </div>`;
            continue;
        }
        contenedorImagenes.innerHTML += `<div class="carousel-item">
     <img class="d-block w-100" src=`+img[i]+` alt="Second slide" style="max-width:100%;height:auto;">
  </div>`
    }

}*/

const request = new XMLHttpRequest();
request.open('GET', PRODUCT_INFO_URL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const productosInfo = request.response;

    let productNameHTML = document.getElementById("productName");
    let productDescriptionHTML = document.getElementById("productDescription");
    let productCostHTML = document.getElementById("productCost");
    let productCurrencyHTML = document.getElementById("productCurrency");
    let productSoldCountHTML = document.getElementById("producSoldtCount");
    let productCategoryHTML = document.getElementById("productCategory");

    productNameHTML.innerHTML = productosInfo.name;
    productDescriptionHTML.innerHTML = productosInfo.description;
    productCostHTML.innerHTML = productosInfo.cost;
    productCurrencyHTML.innerHTML = productosInfo.currency;
    productSoldCountHTML.innerHTML = productosInfo.soldCount;
    productCategoryHTML.innerHTML = productosInfo.category;

    showImagesGallery(productosInfo.images);



}
let productos = {};
let realted = {};
const req = new XMLHttpRequest();
req.open('GET', PRODUCTS_URL);
req.responseType = 'json';
req.send();
req.onload = function () {
    productos = req.response;
    let html = " ";
    for (let i = 0; i < productos.length; i++) {
        let realted = productos[i];


        html += `
        
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src=`+ realted.imgSrc + ` class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <a href="products.html" class="badge "><h5 class="card-title"> <strong>`+ realted.name + `</strong></h5></a> 
        <p class="card-text">`+ realted.description + `</p>
        </div>
    </div>
  </div>
</div>
        
        
        
        `







        /* `
        <div class="card border-info mb-3" style="width: 13rem;">
          <img class="img-thumbnail" src=`+ realted.imgSrc + ` alt="">
          <div class="card-body">
          <h5 class="card-title"> <strong>`+ realted.name + `</strong></h5>
          <p class="card-text">`+ realted.description + `</p>
          <a href="products.html" class="btn btn-primary">Go to Products</a>
         </div>
       </div> 
       <br>
        `*/





        document.getElementById("relatedProducts").innerHTML = html;

    }
}

const reque = new XMLHttpRequest();
reque.open('GET', PRODUCT_INFO_COMMENTS_URL);
reque.responseType = 'json';
reque.send();
reque.onload = function () {
    const productosInfoComments = reque.response;
    for (let i = 0; i < productosInfoComments.length; i++) {
        let com = productosInfoComments[i];

        infoHtml += `
    <strong> Puntuacion:  </strong> `+ com.score + `<br>
    <strong> Descripcion: </strong>`+ com.description + `<br>
    <strong> Usuario:     </strong> ` + com.user + `<br>
    <strong> Fecha:       </strong> `+ com.dateTime + `<br><br>

       `
        document.getElementById("contenedor-info").innerHTML = infoHtml;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productSoldCountHTML = document.getElementById("producSoldtCount");
            let productCategoryHTML = document.getElementById("productCategory");


            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;


            //showRelatedProducts(product.images);
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

        }
    });
});
*/

//const request = new XMLHttpRequest();






//Muestro los productos relacionados
/*
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (res) {
        let html = " ";
        if (res.status === "ok") {
            let array = res.data;
            for (let i = 1; i < array.length; i++) {
                let realted = array[i];

                html +=
                    `
             <div class="card border-info mb-3" style="width: 13rem;">
               <img class="img-thumbnail" src=`+ realted.imgSrc + ` alt="">
               <div class="card-body">
               <h5 class="card-title"> <strong>`+ realted.name + `</strong></h5>
               <p class="card-text">`+ realted.description + `</p>
               <a href="products.html" class="btn btn-primary">Go to Products</a>
              </div>
            </div>
             `

                document.getElementById("relatedProducts").innerHTML = html;

            }
        }
    })
});*/











/*
//Imprimo los comentarios
document.addEventListener("DOMContentLoaded", function (ex) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            coments = resultado.data;
            for (let i = 0; i < coments.length; i++) {
                let com = coments[i];

                infoHtml += `
            <strong> Puntuacion:  </strong> `+ com.score + `<br>
            <strong> Descripcion: </strong>`+ com.description + `<br>
            <strong> Usuario:     </strong> ` + com.user + `<br>
            <strong> Fecha:       </strong> `+ com.dateTime + `<br><br>

               `
                document.getElementById("contenedor-info").innerHTML = infoHtml;
            }

        }

    })


});*/



