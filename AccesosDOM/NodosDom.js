var elementosP = document.getElementsByTagName("p");
//elementoP[0]
//elementoP[0].innerHTML;
//elementoP[0].innerHTML="Ingresando nueva informacion dentro del elemento 0"

var segundoParrafo = document.getElementById("segundo");

var creandoNodos = function () {

  //Pasos para crear Nodos
  //1.-Crear el elemento
  var elemento = document.createElement("h2");
  //2.-Crear un nodo de texto
  var contenido = document.createTextNode("Creando h2 con nodos desde Javascript")
  //3.-Añadir el nodo de texto al elemento
  elemento.appendChild(contenido);
  //4.-Agregar atributos al elemento
  elemento.setAttribute("align", "center");
  //5.-Agregar el elemento al documento
  document.getElementById("subtitulo").appendChild(elemento);

  //agrega el nodo dentro del body
  // document.body.appendChild(elemento);

};

creandoNodos();

function AgregandoNodos() {
  var elemento = document.createElement("li");
  var contenido = document.createTextNode("Nuevo texto agregado desde javascript a la lista");
  elemento.appendChild(contenido);

  //obtenemos el elemento padre por medio de su id
  var padre = document.getElementById("listaOrdenada");
  padre.appendChild(elemento);
};

function AgregandoNodosSinConocerNodoPadre() {
  var elemento = document.createElement("li");
  var contenido = document.createTextNode("Nuevo texto agregado sin conocer id nodo padre desde javascript a la lista");
  elemento.appendChild(contenido);

  //Me trae el elemento que funge como nodo padre caundo no tenemos acceso al elemento
  var padreli = document.getElementsByTagName("li")[0].parentNode;
  padreli.appendChild(elemento);

}
AgregandoNodos();
AgregandoNodosSinConocerNodoPadre();

function AgregarNodosDesdeDeterminadaPosiscion() {
  var elemento = document.createElement("li");
  var contenido = document.createTextNode("Creando nuevo texto desde javascript en posicion 2");
  elemento.appendChild(contenido);

  //   var padre=document.getElementsByTagName("li")[0].parentNode;
  //   var elementoHijo=document.getElementsByTagName("li")[1];
  //   padre.insertBefore(elemento,elementoHijo);


  var padre = document.getElementsByTagName("li")[0].parentNode;
  var elementoHijo = document.getElementById("liDos");
  padre.insertBefore(elemento, elementoHijo);
}

AgregarNodosDesdeDeterminadaPosiscion();

function CambiandoContenidoDOM() {
  var elementoLi = document.getElementById("liPrimero");
  elementoLi.innerHTML = "Cambio con letra en negrita usando innerHTML <b>Prueba</b>";

  var padre = document.getElementById("lista2")
  var elementoLi2 = padre.getElementsByTagName("li")[1];
  elementoLi2.textContent = "Cambio de texto usando textContent, aqui las etiqutas no se interpretan " +
    " <b>Prueba</b>"

}

CambiandoContenidoDOM();

function ReemplazarCodigoDOM() {

  var elemento = document.createElement("li");
  var contenido = document.createTextNode("Reemplazando elemento li por este otro elemento li texto");
  elemento.appendChild(contenido);

  var padre = document.getElementById("lista3");
  var elementoLi3 = padre.getElementsByTagName("li")[0];

  //reemplaza argumento1= elemento por el que sustituira (nuevo )
  //          argumento2= elemento a sustituir (ra existente)           
  padre.replaceChild(elemento, elementoLi3);

}
ReemplazarCodigoDOM();

function EliminarElementosDOM() {
  var padre = document.getElementById("lista4");
  var referencia = padre.getElementsByTagName("li")[0];
  padre.removeChild(referencia);
};
EliminarElementosDOM();

function AccesoAtributosDOM() {
  var elemento = document.createElement("div");
  // agumentos: argumento1= el atributo
  //            argumento2= el nombre del atributo
  elemento.setAttribute("class", "rojo");
  // document.body.appendChild(elemento);

  var padre = document.getElementById("contenedor");
  var referencia = padre.getElementsByTagName("div")[1];
  padre.insertBefore(elemento, referencia);

};

AccesoAtributosDOM();

function CambiarValoresAtributos()
{
  var elemento=document.getElementById("con2div");
  elemento.setAttribute("class","azul");

  var elemento2= document.getElementById("con2div2");
  elemento2.id="con2_id2";
  elemento2.setAttribute("class","rojo");

  var padre=document.getElementById("contenedor2");
  var elementoDiv=padre.getElementsByTagName("div")[2];
  elementoDiv.setAttribute("class","azul");
  elementoDiv.setAttribute("id","id3");
  
  var elementoDiv3=padre.getElementsByTagName("div")[3];
  elementoDiv3.className="verde";

  var enlace=document.getElementById("enlace");
  enlace.href="http://www.google.com";
}

CambiarValoresAtributos();