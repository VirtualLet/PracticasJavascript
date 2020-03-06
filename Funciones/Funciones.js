
//function suma(numero1, numero2) {
//    var vNumero1 = numero1;
//    var vNumero2 = numero2;
//    return vNumero1 + vNumero2;
//}

var suma=function (numero1, numero2) {
    var vNumero1 = numero1;
    var vNumero2 = numero2;
    return vNumero1 + vNumero2;
}


function ObtenerValorSuma() {
    var cResultado = document.getElementById("lblResultado");
    cResultado.innerText =  suma(10, 15);
}

var NumerooMaximo= function(numero1,numero2)
{
    var resNumeroMaximo
    if (numero1>numero2)
    {
      resNumeroMaximo=numero1;
    }
    else{
        resNumeroMaximo=numero2;
    }
    return resNumeroMaximo;
}

function ObtenerNumeroMaximo(){
  var cMostrarNumeroMaximo=document.getElementById("lblMostrarNumeroMaximo");
    cMostrarNumeroMaximo.innerText="El número máximo es: "+NumerooMaximo(10,15);
}

//Ejemplo de función anónima autoinvocada de la función ObtenerNumeroMaximo()
// (function (){
//     var cMostrarNumeroMaximo=document.getElementById("lblMostrarNumeroMaximo");
//       cMostrarNumeroMaximo.innerText="El número máximo es: "+NumerooMaximo(10,15);
//   }());


ObtenerValorSuma();
ObtenerNumeroMaximo();

//Sintaxis de una función anónima
var producto1 = function (a,b){return a*b; };

function ObtenrProducto1 ()
{
    var cResultadoProducto=document.getElementById("ResultadoProducto1");
    cResultadoProducto.innerText=producto1(3,6);
}

//El constructor FUNTION()
var producto2=new Function("a","b","return a*b;");
function ObtenrProducto2 ()
{
    var cResultadoProducto=document.getElementById("ResultadoProducto2");
    cResultadoProducto.innerText=producto2(5,7);
}

ObtenrProducto1 ();
ObtenrProducto2 ();
//Funciones anónimas autoinvocadas

(function(){
    var numero1=10; 
    var numero2=40;

    var cResultadoProducto=document.getElementById("ResultadoProducto3");
    cResultadoProducto.innerText=numero1+numero2;
}());
