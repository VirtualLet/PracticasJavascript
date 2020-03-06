
var amigos = ["Carlos", "Cesar", "Alex", "Manuel"];
amigos[amigos.length] = "Leticia";

var vListaAmigos = document.getElementById("lblListaAmigos");
vListaAmigos.innerText = amigos;

var amigos2 = ["Let2", "Edith2", "Raul2"];
var vListaAmigos2 = document.getElementById("lblListaAmigos2");
vListaAmigos2.innerText = amigos2;
//document.write("Tienes "+amigos.length +"amigos");

var vAmigosUnidos = amigos.concat(amigos2);
var cMuestraListaAmigos= document.getElementById("lblListaAmigosUnidos");
cMuestraListaAmigos.innerText=vAmigosUnidos;

function AgregarElementos(inputAgregarAmigo, arregloAmigo, lblMensaje) {

    var cNombreAmigo = document.getElementById(inputAgregarAmigo);
    var vNombre = cNombreAmigo.value;

    arregloAmigo.push(vNombre);

    var cAmigosAgregados = document.getElementById(lblMensaje);
    cNombreAmigo.value = "";
    cAmigosAgregados.innerText = "Ahora tienes:" + arregloAmigo.length + " amigos" +
        "\n Los cuales son:" + arregloAmigo;

}


function AgregarAmigo() {
    var cNombreAmigo = document.getElementById("iNombreAmigo");
    var vNombre = cNombreAmigo.value;
    amigos.push(vNombre);

    var cAmigosAgregados = document.getElementById("lblMuestraAmigosAgregados");
    cNombreAmigo.value = "";
    cAmigosAgregados.innerText = "Ahora tienes:" + amigos.length + " amigos" +
        "\n Los cuales son:" + amigos;
}



function AgregarAmigo2() {
    var cNombreAmigo = document.getElementById("iNombreAmigo2");
    var vNombre = cNombreAmigo.value;
    amigos2.push(vNombre);

    var cAmigosAgregados = document.getElementById("lblMuestraAmigosAgregados2");
    cNombreAmigo.value = "";
    cAmigosAgregados.innerText = "Ahora tienes:" + amigos2.length + " amigos" +
        "\n Los cuales son:" + amigos2;
}


function UnirAmigos() {
    var vAmigosUnidos = amigos.concat(amigos2);
    var cAmigosUnidos = document.getElementById("lblMuestraAmigosUnidos");
    cAmigosUnidos.innerText = "Tus amigos estan unidos \n" + vAmigosUnidos;

}

function SeparadorElementos(){
    var vAmigosUnidos = amigos.concat(amigos2);
    var vSeparador= document.getElementById("iSeparador");   
    var amigos3= vAmigosUnidos.join(vSeparador.value); 
    var cMuestraSeparador= document.getElementById("lblMuestraSeparador");
    cMuestraSeparador.innerText=amigos3;
}

function OrdenarAscendente(){ 
    var ordenar=vAmigosUnidos.sort();    
    var cMuestraMensaje= document.getElementById("lblMuestraOrdenAsc");
    cMuestraMensaje.innerText=ordenar;
}

function OrdenDescendente(){
    var ordenar=vAmigosUnidos.reverse();   
    var cMuestraMensaje= document.getElementById("lblMuestraOrdenDesc");
    cMuestraMensaje.innerText=ordenar;
}