const PRODUCTS_URL = "https://github.com/josefinaotto/api-alternativo/blob/af368f216873442cb0ef39d4a7dd98af8785b478/Productos.json";

//const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";

/*
var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
} 
*/

var getJSONData = function(url){
    var result = {};
    //showSpinner();
    return fetch(url)
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
          //hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        //hideSpinner();
        return result;
    });
}


/*
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  let idUsuario = document.getElementById("mostrarUsuario");
  let nombreUsuario = localStorage.getItem("user");
  idUsuario.innerHTML = "Mail: " + nombreUsuario; 

});
*/

document.addEventListener("DOMContentLoaded", function(e){
});