var contadorCaracteres= 0;

function contadoraCaracteres() {
  contadorCaracteres++;
  var areaTexto= document.getElementById("areaTexto").value;
  var caracteres= 139 - areaTexto.length;
  var areaContador= document.getElementById("areaContador");
  areaContador.innerHTML= caracteres + "/" + 140; //aqui es dinde se cambia el 0/140, hay que jalarlo de un elemento
}

function twetear() {
  var areaImpresion= document.getElementById("areaImpresion");

  var areaTexto= document.getElementById("areaTexto").value;
  var inputAutor= document.getElementById("inputAutor").value;

  var tweet= document.createElement("p");
  var autor= document.createElement("p");

  tweet.innerHTML= areaTexto;
  areaTexto= "";
  
  autor.innerHTML=inputAutor;

  areaImpresion.appendChild(autor);
  areaImpresion.appendChild(tweet);


}
