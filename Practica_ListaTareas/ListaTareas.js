var eliminarElemento = function() {
  var padre = this.parentNode;
  padre.remove();
  // this.parentNode.removeChild(this);
};

var limpiarCaja = function(elemento) {
  elemento.value = "";
};

var validacionCaja = function(elemento) {
  if (elemento.value == "") {
    elemento.setAttribute("placeholder", "Necesitas agregar una tarea");
    elemento.setAttribute("class", "error");
    return false;
  }
};

var comprobarInput = function() {
  cTarea.className = "";
  cTarea.setAttribute("placeholder", "Agrega una tarea");
};

var AgregarTarea = function() {

  var cTarea = document.getElementById("inputTarea");

  cTarea.addEventListener("click", comprobarInput);

  if (cTarea.value == "") {
    cTarea.setAttribute("placeholder", "Necesita escribir una tarea");
    cTarea.className = "error";
    // cTarea.setAttribute("class","error"); 
    return false;
  }

  var contenedorLista = document.getElementById("contenedorLista");

  var crearNodo_li = document.createElement("li");
  var crearNodo_a = document.createElement("a");
  crearNodo_a.setAttribute("href", "#");

  var crearContenido_a = document.createTextNode(cTarea.value);
  crearNodo_a.appendChild(crearContenido_a);
  crearNodo_li.appendChild(crearNodo_a);

  var getElemento_ul = document.getElementById("ulLista");

  if (getElemento_ul == null) {
    var crearNodo_ul = document.createElement("ul");
    crearNodo_ul.setAttribute("id", "ulLista");
    crearNodo_ul.appendChild(crearNodo_li);
    contenedorLista.appendChild(crearNodo_ul);
  } else {
    getElemento_ul.appendChild(crearNodo_li);
  }

  crearNodo_a.addEventListener("click", eliminarElemento);

  limpiarCaja(cTarea);
};

//inicializo con funcion autoinvocada al inicio
(function() {
  //Variables
  var cAgregar = document.getElementById("btnAgregar");
  //Funciones

  //Eventos
  cAgregar.addEventListener("click", AgregarTarea);
})();
