/*Se que es redundante que dentro de mis funciones llame a los elementos de HTML
si al final de este docu las declaro como variables globales para asignarles los
eventos, pero en general no me gusta tener variables globales porque si quito una
que uso en todas mis funciones ya vali, prefiero en general el scope local para que
al compartir el codigo y modificarlo cada funcion corra lo más independientemente
posible, pero la verdad no se, preguntare en clase si esto es buena practica o solo es redundante*/

function contadoraCaracteres() {
  var contadorCaracteres= 0;
  contadorCaracteres++;
  var areaTexto= document.getElementById("areaTexto").value;
  var caracteres= 140 - areaTexto.length;
  var areaContador= document.getElementById("areaContador");
  areaContador.innerHTML= caracteres + "/" + 140;
}

function twetear() {
  var areaImpresion= document.getElementById("areaImpresion");

  var areaTexto= document.getElementById("areaTexto");
  var inputAutor= document.getElementById("inputAutor");

  var tweet= document.createElement("p");
  var autor= document.createElement("p");

  tweet.innerHTML= areaTexto.value;
  autor.innerHTML= inputAutor.value;

  areaImpresion.appendChild(autor);
  areaImpresion.appendChild(tweet);
  areaTexto.value= "";
  inputAutor.value="";
  contadorCaracteres=0;
}

/*Eventos*/
var areaTexto= document.getElementById("areaTexto");
var botonEnviar= document.getElementById("botonEnviar");

areaTexto.addEventListener("keyup",contadoraCaracteres);
botonEnviar.addEventListener("click",twetear);
