function dialogo() {
    let timerInterval
    Swal.fire({
        title: 'Bienvenido a Nuestro Boletín',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
            window.location.href = "contacto.html";
        }
    })
}

function cargado() {
    setTimeout(function (){
        Swal.fire({
            title: '¡Bienvenido!',
            text: 'Hora de adquirir más conocimiento.',
            imageUrl: 'img/ciencia.png',
            imageWidth: 320,
            imageHeight: 275,
            imageAlt: 'Imagen Bienvenida',
          })
        console.log('Pagina cargada')
    }, 4000);
}

function estacopiando() {
    Swal.fire('No es bueno copiar') //solo funciona para los input de tipo text
}

function salio() {
    Swal.fire('Has Vuelto, te Extrañamos') //funciona en caso de que se salga de la pagina
}

setTimeout(function (){
    accionesboton();
    console.log('Han pasado los 5 segundos');
}, 5000);

function accionesboton() {
    const suscritoselect = document.getElementById("suscribete");
    suscritoselect.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "jeff-bezos.html" > Empresario multimillonario quiere vivir para siempre.</a></h5>';
    suscritoselect.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
    console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recoanillo();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recoanillo() {
  const anillo = document.getElementById("invanillo");
  anillo.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "transformacion.html" > Mercado de la Telemedicina crece por la pandemia rapidamente.</a></h5>';
  anillo.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recaudifonos();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recaudifonos() {
  const audifonos = document.getElementById("invaudifonos");
  audifonos.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "brazalete.html" > Brazalete que ayuda a desinfectar objetos.</a></h5>';
  audifonos.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recbrazalete();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recbrazalete() {
  const brazalete = document.getElementById("invbrazalete");
  brazalete.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "home-office.html" > Consejos para mejorar tu Home-Office</a></h5>';
  brazalete.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recces();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recces() {
  const ces = document.getElementById("invces");
  ces.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "mente.html" > Peliculas que te harán entender el funcionamiento de la mente. </a></h5>';
  ces.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  reccinco();
  console.log('Han pasado los 5 segundos');
}, 5000);

function reccinco() {
  const cinco = document.getElementById("invcinco");
  cinco.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "importancia-telemedicina.html" > Lo que debes saber sobre la Telemedicina.</a></h5>';
  cinco.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  reccontrasenia();
  console.log('Han pasado los 5 segundos');
}, 5000);

function reccontrasenia() {
  const contrasenia = document.getElementById("invcontrasenia");
  contrasenia.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "ces.html" > Festival de Tecnología Presenta Nuevas Innovaciones.</a></h5>';
  contrasenia.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recdeterioro();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recdeterioro() {
  const deterioro = document.getElementById("invdeterioro");
  deterioro.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "millenials.html" > Los Jóvenes cada ves se Preocupan mas por su Salud.</a></h5>';
  deterioro.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recgymchess();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recgymchess() {
  const gymchess = document.getElementById("invgymchess");
  gymchess.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "soledad.html" > La epidemia silenciosa de la soledad.</a></h5>';
  gymchess.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  rechome();
  console.log('Han pasado los 5 segundos');
}, 5000);

function rechome() {
  const home = document.getElementById("invhome");
  home.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "audifonos.html" > Consejos para Limpiar y Desinfectar tus Audifonos.</a></h5>';
  home.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recimportancia();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recimportancia() {
  const importancia = document.getElementById("invimportancia");
  importancia.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "tendencias.html" > 5 tendencias de TI en el cuidado de la salud que los empresarios deben observar en 2022. </a></h5>';
  importancia.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recjeff();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recjeff() {
  const jeff = document.getElementById("invjeff");
  jeff.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "gymchess.html" > Aplicación para el ejercicio mental se vuelve muy popular. </a></h5>';
  jeff.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recmente();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recmente() {
  const mente = document.getElementById("invmente");
  mente.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "anillo.html" > Novedoso Anillo que toma signos vitales es presentado en el CES. </a></h5>';
  mente.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recmercado();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recmercado() {
  const mercado = document.getElementById("invmercado");
  mercado.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "deterioro-cognitivo.html" > Las nuevas tecnologías contribuyen a retrasar el deterioro cognitivo en los mayores. </a></h5>';
  mercado.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recmillenials();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recmillenials() {
  const millenials = document.getElementById("invmillenials");
  millenials.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "brazalete.html" > Se crea brazalete que desinfecta objetos y superficies. </a></h5>';
  millenials.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recradiacion();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recradiacion() {
  const radiacion = document.getElementById("invradiacion");
  radiacion.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "ces.html" > Se presentan nuevas innovaciones en el festival tecnológico CES. </a></h5>';
  radiacion.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recsmart();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recsmart() {
  const smart = document.getElementById("invsmarthwatch");
  smart.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "gymchess.html" > Aplicación para ejercitar la mente se hace popular. </a></h5>';
  smart.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  recsoledad();
  console.log('Han pasado los 5 segundos');
}, 5000);

function recsoledad() {
  const soledad = document.getElementById("invsoledad");
  soledad.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "tatuaje.html" > Tatuaje Oled para determinar el estado de salud. </a></h5>';
  soledad.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  rectendencias();
  console.log('Han pasado los 5 segundos');
}, 5000);

function rectendencias() {
  const tendencias = document.getElementById("invtendencias");
  tendencias.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "transformacion.html" > La pandemia está acelerando la transformación del sector salud. </a></h5>';
  tendencias.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

setTimeout(function (){
  rectransformacion();
  console.log('Han pasado los 5 segundos');
}, 5000);

function rectransformacion() {
  const transformacion = document.getElementById("invtransformacion");
  transformacion.innerHTML = '<h5> Gracias por visitar nuestro sitio, talvez te interesa leer esta otra nota: <a href = "soledad.html" >  La epidemia silenciosa de la soledad.</a></h5>';
  transformacion.className += "row d-flex justify-content-center separacion animate__animated animate__pulse";
  console.log('Se ha ejecutado el boton')
}

function suscribetemensaje() {
    setTimeout(function (){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Quieres suscribirte a nuestro sitio?',
            text: "Solo te Tomará un Momento",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '¡Claro!',
            cancelButtonText: '¡No, gracias!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                '¡Bienvenido!',
                '¡Recibirás Noticias de Nosotros Muy Pronto!',
                'success',
                setTimeout(function () {
                    window.location.href = "contacto.html"
                }, 1500)  
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                '¡Que mal! :(',
                'Esperamos convencerte próximamente',
                'error'
              )
            }
          })
        console.log('Mensaje de suscribete');
    }, 6000);
}
