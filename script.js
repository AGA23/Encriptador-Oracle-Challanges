
function encriptar() {
    var textoentrada = document.getElementById("texto-entrada").value;
    let textomin = textoentrada.toLowerCase();
    if (textomin == "" || textomin == +textomin) {

        alert ("Ingrese el texto para encriptar");

    }else {

    let texto = textomin.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
      
    document.getElementById("texto-entrada").value = texto;
 }
}

function desencriptar() {
    var textoentrada = document.getElementById("texto-entrada").value;
    let textomin = textoentrada.toLowerCase();
  
    if (textomin == "" || textomin == +textomin) {

        alert ("Ingrese el texto para desencriptar");

    }else {

    let texto = textomin.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById("texto-entrada").value = texto; }
}

function copiartexto() {
    var resultado = document.getElementById("texto-entrada");

    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("El contenido ha sido copiado al portapapeles");
}