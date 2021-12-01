var productosArray = [];


function mostrarProductos(array) {
    let contenido = "<hr> <br>";
    for (let i = 0; i < array.length; i++) {
        let producto = array[i];

        contenido += `

                <h4>`+ producto.nombre + `</h4> 
                <p> En stock: `+ producto.stock + `</p> 
                <small> Precio: $` + producto.precio + ` </small>  
  
            <br> <br> <hr> <br> `

    }
    document.getElementById("listado").innerHTML = contenido;
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado){
        if (resultado.status === "ok") {
            productosArray = resultado.data;
            mostrarProductos(productosArray);
        }
    });
});