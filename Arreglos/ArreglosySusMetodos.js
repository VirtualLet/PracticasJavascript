const limpiarCaja = idElemento => {
  var valor = document.getElementById(idElemento);
  valor.value = "";
};

const metodoFrom = () => {
  var valorCaja = document.getElementById("valorCaja");
  var muestraValorCaja = document.getElementById("muestraValorCaja");

  const arrayGenerado = Array.from(valorCaja.value);
  muestraValorCaja.textContent = arrayGenerado;
  console.log("metodoFrom");
  console.log(arrayGenerado);
  limpiarCaja("valorCaja");
};

const metodoFromConArreglo = () => {
  var muestraValorCaja2 = document.getElementById("muestraValorCaja2");
  var muestraValorCaja3 = document.getElementById("muestraValorCaja3");
  var numeros = [1, 2, 3, 4, 5];
  const arrayGenerado = Array.from(numeros, valor => valor * 2);

  muestraValorCaja2.textContent = "Arreglo original: " + numeros;
  muestraValorCaja3.textContent =
    "Arreglo original multiplicado x 2 : " + arrayGenerado;
  console.log("metodoFromConArreglo");
  console.log(arrayGenerado);
};
metodoFromConArreglo();

const metodoIsArray = () => {
  const frutas = ["naranja", "pera", "piña", "fresa"];
  var saludo = "Hola";
  var muestraValorCaja4 = document.getElementById("muestraValorCaja4");
  var muestraValorCaja5 = document.getElementById("muestraValorCaja5");
  var muestraValorCaja6 = document.getElementById("muestraValorCaja6");
  muestraValorCaja4.textContent = "Arreglo original: " + frutas;
  muestraValorCaja5.textContent =
    "Arreglo original es un array?:" + Array.isArray(frutas);
  muestraValorCaja6.textContent =
    "Palabra Hola es un array?:" + Array.isArray(saludo);
  console.log("MetodoIsArray");
  console.log(Array.isArray(frutas));
  console.log(Array.isArray(saludo));

  //Otra forma de preguntar si es un array es haciendo lo siguiente
  console.log(frutas instanceof Array);
  console.log(saludo instanceof Array);
};

metodoIsArray();

metodoArrayOf = () => {
  const array = Array.of(1, 2, 3, 4, 5);
  const array2 = Array.of(null, undefined);
  console.log("MetodoArrayOf");
  console.log(array);
  console.log(array2);
};
metodoArrayOf();

metodoArrayConcat = () => {
  const array1 = ["a", "e", "i"];
  const array2 = ["o", "u"];
  const array3 = ["1", "2", "3"];

  const arrayUnido = array1.concat(array2, array3);

  //a partir de Javascript6 otra manera de definir la concatenación
  const arrayUnido2 = [...array1, ...array2];
  const arrayPruebaUnionVarios = [...array1, ...array2, ...array3];
  console.log("metodoArrayConcat");
  console.log(arrayUnido);
  console.log(arrayUnido2);
  console.log(arrayPruebaUnionVarios);
};
metodoArrayConcat();

metodoArrayEntries = () => {
  const vocales = ["a", "e", "i", "o", "u"];
  const iterar = vocales.entries();

  console.log("metodoArrayEntries");
  //Devolvera el indice y su valor
  console.log(iterar.next().value);
  console.log(iterar.next().value);
  console.log(iterar.next().value);
  console.log(iterar.next().value);
  console.log(iterar.next().value);
};
metodoArrayEntries();

metodoArrayEvery = () => {
  const numeros = [1, 5, 8, 11, 50];

  var esMenorADiez = function(valor) {
    return valor < 10;
  };

  var esMayorACero = function(valor) {
    return valor > 0;
  };

  console.log("metodoArrayEvery");
  console.log(numeros.every(esMenorADiez));
  //Otra manera de escribir usando función flecha
  console.log(numeros.every(e => e < 10));

  console.log(numeros.every(esMayorACero));
  //Otra manera de escribir usando función flecha
  console.log(
    numeros.every(elemento => {
      return elemento > 0;
    })
  );
};
metodoArrayEvery();

metodoArrayFind = () => {
  const numeros = [4, 5, 6, 7, 9, 10, 23];
  console.log("metodoArrayFind");
  console.log(numeros.find(elemento => elemento > 8));
  //si no encuentra el numero en la colección entonces regresara undefined
  console.log(numeros.find(elemento => elemento > 24));
};
metodoArrayFind();

metodoArrayFilter = () => {
  const numeros = [3, 55, 7, 8, 98, 88];
  console.log("metodoArrayFilter");
  console.log(numeros.filter(elemento => elemento > 10));
};
metodoArrayFilter();

metodoArrayForEach = () => {
  const numeros = [7, 8, 9, 15, 17, 23];

  console.log("metodoArrayForEach");

  numeros.forEach(elemento => {
    console.log(elemento);
  });

  numeros.forEach((elemento, indice, arregloCompleto) => {
    console.log(elemento, indice, arregloCompleto);
  });
};
metodoArrayForEach();

metodoArrayIncludes = () => {
  const animal = { nombre: "leo" };
  const animales = [
    "vaca",
    "perro",
    "gato",
    "elefante",
    undefined,
    { nombre: "leo" },
    animal
  ];
  const existeElemento = animales.includes("vaca");
  console.log("metodoArrayIncludes");
  console.log(existeElemento);
  console.log(animales.includes("león"));
  //retorna false porque son dos objetos diferentes ya que apuntan a dos espacios de memoria distintos
  console.log(animales.includes({ name: "leo" }));
  //retorna true, porque ahora apuntan al mismo objeto
  console.log(animales.includes(animal));
};
metodoArrayIncludes();

metodoArrayJoin = () => {
  const animales = ["vaca", "perro", "gato", "elefante"];
  const cadena = animales.join();
  console.log("metodoArrayJoin");
  console.log(cadena);
  //separado por guiones
  console.log(animales.join("--"));
};
metodoArrayJoin();

metodoArrayIndexOf = () => {
  const animales = ["vaca", "perro", "gato", "elefante"];
  const cadenaSeparador = animales.indexOf("gato");
  console.log("metodoArrayIndexOf");
  console.log(cadenaSeparador);
  //Si no encuentra el elemento devolvera un -1
  console.log(animales.indexOf("rana"));
};
metodoArrayIndexOf();

metodoArrayMap = () => {
  const numeros = [2, 4, 6, 8, 10];
  //cualquier instruccion que se pase dentro de map, devolvera la modificacion de los elementos del arreglo
  const impares = numeros.map(numeros => numeros + 1);
  console.log("metodoArrayMap");
  console.log(impares);
};
metodoArrayMap();

metodoArraySome = () => {
  const numeros = [2, 4, 6, 8, 10];

  console.log("metodoArraySome");
  //si hay un numero o varios que sean mayores a  8 dentro de la colección
  console.log(numeros.some(elementos => elementos > 8));
  //si hay un numero o varios que sean menores a  16 dentro de la colección
  console.log(numeros.some(elementos => elementos > 16));
};
metodoArraySome();

metodoArrayReduce = () => {
  const numeros = [2, 4, 6,8];
  function suma(...args) {
    return args.reduce((prev, next) => prev + next);
  };
  
  //Lo que hacer el emtodo Reduce es permitirnos manipular los elementos de un array  como si fueran dos arrays, ya que
  //tenemos una variable  que definimos que hace alusion al primer elemento y el otro a su elemento siguiente seria algo como esto
  //prev    next    con la operación
  //2       4       2+4+6+8=20
  //6       8
  console.log("metodoArrayReduce");
  //usando la funcion suma
  console.log(suma(1,2,3,4,5));
  //El mismo ejemplo pero ahora usando directamente el arreglo numeros
  console.log(numeros.reduce((elementoAnterior,elementoPosterior)=>{return elementoAnterior+elementoPosterior}));

};
metodoArrayReduce();
