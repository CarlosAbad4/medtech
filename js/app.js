setTimeout(function (){
    modificarDom();
}, 2000);

function modificarDom(){
    var form = document.getElementById("myForm");
    form.style.backgroundColor = "Green";

    let map = document.getElementById("map");
    map.style.backgroundColor = "Blue";

    /* nombreFormulario = document.getElementById("nombreForm"); 
    nombreFormulario.style.backgroundColor = "FF0000"; */

    const inputs = document.getElementsByClassName("common-input");
    for(var i = 0; i < inputs.length; i++){
        console.log(inputs[i]);
        inputs[i].style.textAlign = "center"; 
    }
   

    const nombres = document.getElementsByName("nombre");
    nombres[0].style.fontSize = "90px";

    const parrafos = document.getElementsByTagName("p");
    for(var i = 0; i < parrafos.length; i++){
        setTimeout(function(){
            parrafos[i].style.fontStyle = "italic";
        }, 5000);
    }

    /* const parrafos = document.getElementsByTagName("p");
    for(var i = 0; i < parrafos.length; i++){
        parrafos[i].style.fontStyle = "italic";
    } */

    const querys = document.querySelector(".common-input");
    querys.style.fontSize = "90px";

    const avanzado = document.querySelector("#myForm .row #nombreId");
    avanzado.style.borderColor = "blue";
    avanzado.style.borderWith = "3px";

    const divs = document.querySelectorAll("div");
    const clases = document.querySelectorAll(".common-input");
    const nicknames = document.querySelectorAll('[name="nombre"]')
    //divs[6].style.textShadow = "3px 3px 3px red";
    clases[1].style.textShadow = "3px 3px 3px blue";
    nicknames[0].style.textShadow = "3px 3px 3px green";



    const parrafo = document.createElement("p");
    parrafo.id = "parrafo_node"; 
    parrafo.className = "contact-details";
    parrafo.style = "color:red; fontSize:25px;"
    parrafo.textContent = "Esto es un parrafo creado con JS"; //
    const div = document.getElementById("seleccionado"); //
    div.appendChild(parrafo); ////////////////

    //parrafo.remove(); //Quita el elemento del DOM

    div.innerHTML += "<b>Hola</b>";
    div.innerHTML += "<p>Parrafo nuevo en DIV</p>";
    div.innerHTML +='<span style="color:red;">Un span de color rojo.</span>';

    const span = document.createElement("span");
    span.innerHTML = '<p>My mother has <span style="color:blue">blue</span> eyes.</p>'; //Puedo usar comilla simple, combinarlas
    span.innerHTML; //Deberia insertar codigo html

    const imagen = document.createElement("img");
    imagen.src = "https:/picarts.com/imagen.png";
    imagen.alt = "La imagen no ha cargado";
    div.appendChild(imagen); //Se utiliza appendchild cuando se insertan nodos

    //imagen.remove(); //Quita el elemento del DOM

    const boton = document.getElementById("bloque");
    boton.addEventListener("click", function(e){
        e.preventDefault();
        aparecerImagen();
    });

    const texto = document.createTextNode("Hey hey yo da yoh");
    const app = document.getElementById("seleccionado");
    //app.insertAdvanceElement("afterbegin", texto); error

    const comentario = document.createComment("Aqui un comentario");
    //app.insertAdjacentElement("afterend", comentario); error

    const clon = parrafo.cloneNode();
    clon.textContent = "Clon del primer parrafo, creado antes"; //Reemplazara la categoria ya que es <p>
    app.insertAdjacentElement("afterbegin", clon); //

    //console.log(parrafo.isConnected()); error

    const menu = document.getElementById("menu-select");
    console.log(menu);
    menu.children[3].innerText = "Contacto";
    menu.firstElementChild.style = "color:blue;";
    menu.lastElementChild.style = "color:red;";
    menu.parentElement.style = "background-color: #AAAAAA;";
    menu[3].previousElementSibling.style = "color:yellow;";
    menu[3].nextElementSibling.style = "color:pink;";
    document.getElementById("active").nextElementSibling.style = "color:purple;";
};


function aparecerImagen(){
    const boton = document.getElementById("bloque");
    const grafico = document.createElement("img");
    grafico.src = "img/ces.png";
    grafico.alt = "La imagen del brazalete no ha cargado";
    boton.appendChild(grafico); 

    const borrar = document.createElement("input");
    borrar.type = "button";
    borrar.value = "Borrar imagen";
    borrar.id = "borrar-button";
    boton.appendChild(borrar); //
    const borrar_button = document.getElementById("borrar-button");
    borrar_button.addEventListener("click", function(e){
        e.preventDefault();
        borrando();
    });
};

function borrando(){
    const borrar_button = document.getElementById("borrar-button");

    grafico.remove();
    borrar.remove();
};

function ponerEstilo(){
    const parrafo = document.querySelector(".estilo1");
    console.log(parrafo);
    parrafo.className = "estilo1 estilo2 estilo3";
    console.log(parrafo.className);
}

function quitarEstilo(){
    const classess = document.querySelector(".estilo1");
    console.log(classess);
    classess.classList.remove("estilo3");
    classess.classList.add("estilo2"); //añadir clases a ese elemento (.estilo1)
    classess.classList.toggle("estilo3"); //Funciona para si lo tiene quitar la clase, y si no la tiene la va a poner
    classess.classList.replace("estilo2","estilo3"); //Reemplaza la primera con la segunda
    classess.classList.contains("estilo3"); //Devuelve tru o false si contiene estilo 3 o no
    console.log(classess.classList.item(0)); //Para acceder a los items de la clase
    console.log(classess);
}


//Cambio de parrafos en el dom, no se usa
/* setTimeout(function (){
    primerP();
}, 5000);

setTimeout(function (){
    segundoP();
}, 10000);

setTimeout(function (){
    tercerP();
}, 15000);

function primerP(){
    var form = document.getElementById("p1");
    form.style.backgroundColor = "Green";
    form.style.fontSize = "20px";
}

function segundoP(){
    var form = document.getElementById("p2");
    form.style.fontSize = "30px";
}

function tercerP(){
    var form = document.getElementById("p3");
    form.style.fontSize = "40px";
} */

// Tarea 
// Revisar que la plantilla incluya o incluir JQuery en la plantilla
//Buscar como insertar las etiquetas creadas, insertar los elementos en el documento DOM


