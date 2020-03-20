var coleccionArrays = function() {
  const frutas = ["melon", "sandia", 2];

  const frutasExoticas = new Array("frambuesa", "kiwui", "Zarzamora", 3);

  const verduras = new Array();
  verduras[0] = "calabazas";
  verduras[1] = "cebollas";
  verduras[3] = 2;

  var coleccion1 = document.getElementById("coleccion1");
  var coleccion2 = document.getElementById("coleccion2");
  var coleccion3 = document.getElementById("coleccion3");

  coleccion1.textContent = frutas;
  coleccion2.textContent = frutasExoticas;
  coleccion3.textContent = verduras;

  console.log(frutas);
  console.log(frutasExoticas);
  console.log(verduras);
  
};

const coleccionMap = () => {
  const diccionarioMap = new Map();
  //Excluye los elementos repetidos

  diccionarioMap.set(1, "NARANJA");
  diccionarioMap.set("2", "Sandia");
  diccionarioMap.set(() => {}, 1);
  diccionarioMap.set("2", "Sandia");

  var elementoMap1 = document.getElementById("map1");

  elementoMap1.textContent =
    diccionarioMap.get(1) + " ," + diccionarioMap.get("2");

  console.log(diccionarioMap);

  //para saber el tamaño
  var elementoMap3 = document.getElementById("map3");
  elementoMap3.textContent =
    "La cantidad de elementos totales de la coleccion diccionarioMap son:" +
    diccionarioMap.size;
  console.log(diccionarioMap.size);

  //para que muestre todos los elementos que posee

  const elements = diccionarioMap.entries();
  var elementoMap4 = document.getElementById("map4");
  elementoMap4.textContent = "Muestra elementos" + elements;
  console.log(elements);

  //Para mostrar los elementos con un forEach
  var elementoMap5 = document.getElementById("map5");
  var almacenarElementos = "";
  diccionarioMap.forEach(elemento => {
    almacenarElementos += ",";
    almacenarElementos += elemento;
    console.log(elemento);
  });

  elementoMap5.textContent =
    "Los elementos son: " + almacenarElementos.substring(1);

  //Limpiando coleccion
  var elementoMap6 = document.getElementById("map6");
  diccionarioMap.clear();
  elementoMap6.textContent =
    "Se ha limpiado la coleccion diccionarioMap, sus elementos ahora son:" +
    diccionarioMap.size;
};

const coleccionSet = () => {
  const ListSet = new Set();
  ListSet.add(1);
  ListSet.add("segundo");
  ListSet.add(1);
  ListSet.add(() => 1);
  ListSet.add("Hola");

  var valorListSet = "";
  for (let elemento of ListSet) {
    valorListSet += ",";
    valorListSet += elemento;
    console.log(elemento);
  }

  var set1 = document.getElementById("set1");
  set1.textContent = valorListSet.substring("1");
  console.log(ListSet);

  //para sacar el tamaño de la colección
  var set2 = document.getElementById("set2");
  set2.textContent =
    "Se obtiene el tamaño de la colección ListSet" + ListSet.size;
  console.log(ListSet.size);

  //Obtiene los valores
  var set3 = document.getElementById("set3");
  set3.textContent = "Obtiene los valores con values(): " + ListSet.values();
  console.log(ListSet.values);

  //Verificar que exista un elemento dentro de la lista
  var set4 = document.getElementById("set4");
  set4.textContent =
    "Se verifica si el elemento 'Hola' exite en la lista, usando el método has que devuelve true o false " +
    "El elemento se encontro en la lista: " +
    ListSet.has("Hola");
  console.log(ListSet.has("Hola"));

// imprimir valores usando forEach
  
  var contenedorElementos="";
  ListSet.forEach((elemento) =>{
    contenedorElementos+=",";
    contenedorElementos+=elemento;    
    console.log("valoresForeach "+ elemento);
    
  });

  var set5 =document.getElementById("set5");
  set5.textContent= "Usando forEach: "+contenedorElementos.substring(1);



};

coleccionArrays();

coleccionMap();
coleccionSet();

const muestraCodigoArray=(nombreColeccion)=>{

  alert(nombreColeccion);
  
};
