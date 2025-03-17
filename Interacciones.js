function abrirRegalo() {
    // Muestra el fondo de cumpleaños con globos
    const fondoGlobos = document.getElementById("fondoGlobos");
    
    // Muestra el fondo de globos
    fondoGlobos.style.display = "flex"; // Cambia display de none a flex
    
    // Agrega una clase para animar el mensaje de cumpleaños
    setTimeout(() => {
        fondoGlobos.classList.add("mostrar"); // Activa la animación de la opacidad del mensaje
    }, 100); // Pequeño retraso para asegurar que el fondo se muestre primero
    
    // Oculta la caja de regalo
    const contenedor = document.getElementById("contenedor");
    contenedor.style.display = "none";
    
    // Después de 4 segundos, puedes redirigir a otra pantalla (si lo deseas)
    setTimeout(function() {
        window.location.href = "Pantalla1.html"; // Cambia esto a la URL de la próxima página
    }, 6000);
}


let respuestasNo = [
    "¿Estas Seguro?",    
    "¿Enserio no lo quieres ver?", 
    "¡No te preocupes, no muerdo!",   
    "¡Vamos, no seas aburrido!",  
    "Se que quieres verlo, ¡Vamos!",  
    "Se pondra ¡Peor! si no lo ves",   
    "¡Te lo adverti!"
];

var Respuesta = 0;
var ultimoMensaje = false

// Función para mostrar ventana emergente 
function Rp_No() {
    // Mostrar la ventana 
    var popup = document.getElementById("popupOverlay")
    var mensaje = document.getElementById("popupMessage")

    // mensaje diferente
    mensaje.textContent = respuestasNo[Respuesta]

    
    Respuesta = (Respuesta + 1) % respuestasNo.length

    // último mensaje, activa interacción para mover el botón
    if (Respuesta === 0 && !ultimoMensaje) {
        ultimoMensaje = true;
        activarMovimientoBoton()
    }

    popup.style.display = "flex" // Mostrar la ventana emergente
}

//  cerrar la ventana 
function cerrarPopup() {
    document.getElementById("popupOverlay").style.display = "none"
}

// Función para redirigir al segundo formulario y reiniciar el índice cuando se presiona "Sí"
function Rp_Si() {
    // Reiniciar el índice
    Respuesta = 0
    ultimoMensaje = false; // Reseteamos el estado al presionar "Sí"
    
    // Cerrar la ventana emergente si está abierta
    cerrarPopup()

    // Redirigir al segundo formulario (Pantalla2.html)
    window.location.href = "Pantalla2.html"
}

// Función para activar el movimiento del botón 
function activarMovimientoBoton() {
    var noButton = document.getElementById('noButton');
    
    // Función para mover el botón 
    function moverBoton() {
        var maxWidth = window.innerWidth - noButton.offsetWidth
        var maxHeight = window.innerHeight - noButton.offsetHeight

       
        var randomX = Math.random() * maxWidth
        var randomY = Math.random() * maxHeight

        noButton.style.left = `${randomX}px`
        noButton.style.top = `${randomY}px`
    }

    //  el botón se mueva al pasar el mouse sobre él
    noButton.addEventListener('mouseover', moverBoton)

    //  el botón se mueva al presionar el dedo en el móvil
    noButton.addEventListener('touchstart', moverBoton)
}


// Segunda pantalla

document.addEventListener('DOMContentLoaded', function() {
   
   
   
   
    const pinInput = document.getElementById('pinInput')
    const unlockButton = document.getElementById('unlockButton')
    const message = document.getElementById('message')
    const correctPIN = '112819'; // Cambia esto por tu PIN
    const botonesNumericos = document.querySelectorAll('.teclado button[data-numero]')
    const botonBorrar = document.getElementById('borrar')

    botonesNumericos.forEach(boton => {
        boton.addEventListener('click', function() {
            pinInput.value += this.dataset.numero
        });
    });

    botonBorrar.addEventListener('click', function() {
        pinInput.value = pinInput.value.slice(0, -1)
    });

    unlockButton.addEventListener('click', function() {
        const enteredPIN = pinInput.value;

        if (enteredPIN === correctPIN) {
            message.textContent = 'Desbloqueo exitoso!'
            message.style.color = 'green'
            // Aquí puedes agregar la funcionalidad para desbloquear contenido
             window.location.href = "Pantalla3.html"
        } else {
            message.textContent = 'PIN incorrecto. Intente nuevamente.'
            message.style.color = 'red'
        }

        pinInput.value = '' // Limpiar el campo de entrada
    });
});



// Pantalla #3

const audio = document.getElementById("audio");

// Intentar reproducir automáticamente cuando la página carga
window.addEventListener("load", function() {
    audio.muted = false; // Desmutear
    audio.play().catch(error => {
        console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
    });
});

// Funciones para manipular el audio con los botones
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reiniciar la canción al inicio
}





//Fotos


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item'); // Seleccionamos todas las imágenes del carrusel

// Ocultar todas las imágenes al principio
items.forEach(item => {
    item.style.display = 'none';
});

// Función para mover el carrusel
function moverCarrusel(direction) {
    items[currentIndex].style.display = 'none'; // Ocultar la imagen actual

    // Calcular el nuevo índice
    currentIndex = (currentIndex + direction + items.length) % items.length;

    items[currentIndex].style.display = 'block'; // Mostrar la nueva imagen
}

// Mostrar la primera imagen al cargar la página
window.onload = () => {
    items[currentIndex].style.display = 'block'; // Mostrar la primera imagen

    // Hacer que el carrusel se desplace automáticamente cada 3 segundos (3000 ms)
    setInterval(() => {
        moverCarrusel(1); // Mover hacia la siguiente imagen
    }, 3000); // 3000 milisegundos (3 segundos)
};





















// function validarPIN() {
    
//     var pin = document.getElementById("pin")
//     var pinevaluar = pin.value;

//     // Verifica si el PIN tiene 4 o 6 dígitos
//     if (pinevaluar .length === 4 || pinevaluar .length === 6) {
//         // Compara el PIN ingresado con el PIN correcto
//         if (pinevaluar  === pinCorrecto) {
           
//             window.location.href = "Pantalla3.html"
//         } else {
            
//             alert("PIN incorrecto. Intenta de nuevo.")
//             pin.classList.add("error")
//         }
//     } else {
      
//         pin.classList.add("error")
//     }
// }


