var nombreDiaDelaSemana= function(numeroDia){
    var dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    var nombreDia;
    nombreDia=dias[numeroDia];
  return nombreDia;
};

var nombreDiaDelMes=function(numeroMes){
    var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    var nombreMes=mes[numeroMes];
    return nombreMes;
};

var formatosDosDigitos=function(valor){   

    return valor.toString().padStart(2,"0");           
};

//Para el DOM
var crearNodoSaltoLinea=function(){
    var cSalto=document.createElement("br");
    return cSalto;
};

var crearNodo=function(etiqueta,contenidoEtiqueta,nombreIdEtiqueta){

    var cElemento=document.createElement(etiqueta);
    var contenido=document.createTextNode(contenidoEtiqueta);
    cElemento.appendChild(contenido);
    cElemento.setAttribute("id",nombreIdEtiqueta); 
    return cElemento;
};
