//Inicializar el jquery
$(document).ready(function() {
    ocultar();
    mostrar();
    flecha();
});

//Callback
function ocultar() {
    setTimeout(function() {
        $('#img_derecha').hide(2000, function() {
            alert("Ya se Oculto");
        });
    }, 3000)
}

function mostrar() {
    setTimeout(function() {
        $('#img_derecha').show(3000);
            alert("Ya Aparecio");
    }, 3000);
}

function flecha() {
    const saludar = ()=>{
        alert("Hola mundo! HEy hey hey");
    };
    setTimeout(saludar, 2000);
    promesa1("https://www.google.com/search?q=fenecc");
}

//Promesas
function promesa1(url) {
    const promise = fetch(url);
    promise.then(resultado => {
        console.log("Resultado: " + resultado)
        ocultar();
    })
    //Puedo hacer los .then que quiera o .catch es el error
    .catch(error => {
        console.log("Error AE: " + error);
    })
}