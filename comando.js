// Obtener referencias a los elementos del DOM
const div = document.getElementById("desaparece");
const text_derecho = document.getElementById("textoDerecho");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonCopiar = document.getElementById("botonCopiar");
const text_izquierdo = document.getElementById("textoIzquierdo");

const divContenedor = document.querySelector(".contenedor");
const divRectangulo = document.querySelector(".rectangulo");
const footer = document.getElementById("pie")

divContenedor.classList.add("mostrarDerecha");
divContenedor.addEventListener("animationend", () => {
    // Cuando la animación del primer contenedor ha terminado
    // Agregamos la clase para activar la animación del segundo contenedor
    divRectangulo.classList.add("mostrarIzquierda");
  });

  divRectangulo.addEventListener("animationend", () => {
    // Cuando la animación del primer contenedor ha terminado
    // Agregamos la clase para activar la animación del segundo contenedor
    footer.classList.add("mostrarArriba");
  });


// Función para mostrar el textarea y ocultar la imagen
function MostrarTextarea() {
  text_derecho.style.display = "block";
  botonCopiar.style.display = "block"
  div.style.display = "none";
}

function tieneMayusculasOAcentos(texto) {
    // Expresión regular para buscar letras mayúsculas
    const regexMayusculas = /[A-ZÁÉÍÓÚÜ]/;
  
    // Expresión regular para buscar letras con acentos
    const regexAcentos = /[ÁÉÍÓÚÜáéíóúü]/;
  
    // Comprobar si el texto contiene mayúsculas o acentos
    const tieneMayusculas = regexMayusculas.test(texto);
    const tieneAcentos = regexAcentos.test(texto);
  
    // Devolver true si el texto tiene mayúsculas o acentos, de lo contrario, devolver false
    return tieneMayusculas || tieneAcentos;
  }

  let indice = 0;
  function mostrarLetraPorLetra(textarea, textoCompleto) {
    if (indice < textoCompleto.length) {
      textarea.value = textoCompleto.substr(0, indice + 1); // Mostrar el texto completo hasta el índice actual
      indice++;
      setTimeout(() => mostrarLetraPorLetra(textarea, textoCompleto), 50);
    }
  }

  function Codificar() {
    var texto = text_izquierdo.value;
    if (tieneMayusculasOAcentos(texto) == true) {
      alert("No use mayúsculas o acentos");
    } else {
      MostrarTextarea();
      // Codificar texto reemplazando las vocales
      let code = texto.replace(/e/g, "enter");
      code = code.replace(/i/g, "imes");
      code = code.replace(/a/g, "ai");
      code = code.replace(/o/g, "ober");
      code = code.replace(/u/g, "ufat");
  
      text_derecho.style.textAlign = "left"; // Establecer el texto alineado a la izquierda
      text_derecho.value = ""; // Limpiar el textarea de salida antes de mostrar el nuevo texto
      indice = 0; // Reiniciar la variable 'indice' antes de comenzar la animación
      mostrarLetraPorLetra(text_derecho, code);
    }
  }

function Decodificar() {

    var texto = text_izquierdo.value;
    if (tieneMayusculasOAcentos(texto) == true) {
        alert("No use mayúsculas o acentos");
    }
    else{
        MostrarTextarea()
        decode = texto.replace(/enter/g, "e");
        decode = decode.replace(/imes/g, "i");
        decode = decode.replace(/ai/g, "a");
        decode = decode.replace(/ober/g, "o");
        decode = decode.replace(/ufat/g, "u");
        text_derecho.value = ""; // Limpiamos el textarea de salida antes de mostrar el nuevo texto
        indice = 0;
        mostrarLetraPorLetra(text_derecho, decode)
    }
}

function copy() {
    let copyText = document.querySelector("#textoDerecho");
    copyText.select();
    document.execCommand("copy");
  }

// Asociar la función a un clic en el botón "botonDesencriptar"
botonEncriptar.addEventListener("click", Codificar);
botonDesencriptar.addEventListener("click", Decodificar);
document.querySelector("#botonCopiar").addEventListener("click", copy);

