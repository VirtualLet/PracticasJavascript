creacionObjetos = () => {
  const animal = {
    nombre: "Royo",
    correr: function() {
      console.log("Estoy jugando");
    }
  };

  console.log(animal.nombre);
  //como no tiene un return retorna un define
  console.log(animal.correr());
};

creacionObjetos();

factorias = () => {
  function crearPerro(valorNombre) {
    return {
      nombre: valorNombre,
      correr: function() {
        console.log("Estoy jugando");
      }
    };
  }

  const pastorAleman = crearPerro("Royo");
  const pitbull = crearPerro("Bombon");

  console.log("factoria");
  console.log(pastorAleman.nombre);
  console.log(pastorAleman.correr());
  console.log(pitbull.nombre);
};
factorias();

factoriasEjemplo2 = () => {
  function crearCirculo(radio) {
    return {
      radio,
      coordenada: {
        x: 1,
        y: 1
      },
      draw: function() {
        console.log("Dibujo");
      }
    };
  }

  const circulo1 = crearCirculo(5);
  const circulo2 = crearCirculo(10);

  console.log("factoriasEjemplo2");
  console.log(circulo1.radio);
  console.log(circulo1.coordenada);
  console.log(circulo2.radio);
};
factoriasEjemplo2();

EjemploConstrutores = () => {
  //El nombre de la función inicia en mayusculas porque es una función de primera clase
  function Circulo(radio) {
    this.radio = radio;
    this.cordenadas = {
      x: 1,
      y: 1
    };
    this.draw = function() {
      console.log("Dibujo");
    };
  }

  const circulo = new Circulo(4);
  console.log("EjemploConstructores");
  console.log(circulo.radio);
};

EjemploConstrutores2 = () => {
  //El mismo ejemplo de constructor pero ahora como clase a partir de Jscript 6

  class Circulo {
    constructor(radio) {
      this.radio = radio;
      this.cordenadas = {
        x: 1,
        y: 1
      };
    }
    draw() {
      console.log("Dibujo");
    }
  }

  const circulo = new Circulo(5);
  console.log("EjemploConstructores2");
  console.log(circulo.radio);
  console.log(circulo.draw);
};

EjemploConstrutores();
EjemploConstrutores2();

funcionesContructivas = () => {
  function Animal(nombre) {
    this.nombre = nombre;
  }

  const perro = new Animal("Royito");
  console.log("funcionesConstructivas");
  console.log(perro);
  //En consola si tecleamos perro.constructor , nos mostrara la funcion responsaable de crear este objeto

  //En cambio si usamos funciores de factoria no nos mostrara el constructor ya que estamos utilizando valores
  //primitivos
  function crearAnimal() {
    return {
      nombre: "Royo2"
    };
  }

  const gato = crearAnimal();
  console.log(gato);

  console.log("Ejemplos para entender mejor el funcionamiento");
  const dog = {};
  //seria igual a decir
  const x = new Object();
  //y pasa lo mismo con
  const cadena = "";
  const valorBoleano = false;
  //si tecleara el nombre de la constante.constructor  , no lo podria ver ya que son objetos primitivos
};
funcionesContructivas();

verficandoFuncionesSonObjetos = () => {
  function Animal(nombre) {
    this.nombre = nombre;
  }
  const Animal1 = new Function("nombre", "this.nombre=nombre;");
  const dog = new Animal1("Royooo");
  console.log("verficandoFuncionesSonObjetos");
  console.log(dog.nombre);
};
verficandoFuncionesSonObjetos();

valoryReferencia = () => {
  /**
   * Valor: Number, String, Boolean, Symbol,undefined, null
   * Referencia:Object,Function,Array
   */
  //Ejemplo por valor
  let a = 10;
  let b = a;

  a = 40;
  console.log("ValoryReferencia- Ejemplo1 por valor");
  console.log(a, b); // resultado 40 10

  //Ejemplo por referencia =Comparten el mismo espacio de memoria
  let elementoA = { valor: 10 };
  let elementoB = elementoA;
  elementoA.valor = 40;
  console.log("ValoryReferencia- Ejemplo1 por referencia");
  console.log(elementoA, elementoB); //resultado 40 40

  //Ejemplo2 del mismo caso pero ahora con una función
  let valorA = 10;
  function incrementar(valorA) {
    valorA++;
  }
  incrementar(valorA);
  console.log("ValoryReferencia- Ejemplo2 por valor");
  console.log(valorA); //resultado 10;

  let valorB = { valor: 10 };
  function incrementar(valorB) {
    valorB.valor++;
  }
  incrementar(valorB);
  console.log("ValoryReferencia- Ejemplo2 por referencia");
  console.log(valorB); //resultado 11; al apuntar al mismo espacio de memoria se esta hablando del mismo objeto
};

valoryReferencia();

manipulandoPropiedades = () => {
  const animal = {
    color: "negro"
  };
  animal.height = 30; //utilizando con el dot notation

  animal["nombre"] = "SuperRoyo"; //utlizando el bracket notation

  animal["nombre mas apellido !"] =
    "forma para que pueda un key usar espacio o signos";

  console.log("manipulandoPropiedades -Agregando propiedades");
  console.log(animal.color);
  console.log(animal.height);
  console.log(animal["nombre"]);
  console.log(animal["nombre mas apellido !"]);

  delete animal.color;
  //Para eliminar una propiedad
  console.log("eliminando la propiedad color");
  console.log(animal.color);
};

manipulandoPropiedades();

propiedadesPrivadas = () => {
  function Car(numeroPuertas) {
    this.puertas = numeroPuertas;
    this.precio = 1500;

    this.getPrice = function() {
      return this.puertas * this.precio;
    };
  }

  const tesla = new Car(4);
  tesla.precio = 100; //podemos cambiar el comportamiento
  console.log("propiedadesPrivadas- Ejemplo1 acceso publico");
  console.log(tesla.puertas);
  console.log(tesla.getPrice());

  function CarPrivado(numeroPuertas) {
    //para hacer privado en lugar de this usamos variables let
    //utlizamos la abstracción
    let puertas = numeroPuertas;
    let precio = 1500;

    this.getPrice = function() {
      return puertas * precio;
    };
  }
  const bmv = new CarPrivado(2);
  console.log("propiedadesPrivadas- Ejemplo2 acceso privado");
  console.log(bmv.getPrice());
 
};

propiedadesPrivadas();
