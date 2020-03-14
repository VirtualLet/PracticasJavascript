

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


var nombreDiaDelaSemana= function(numeroDia){
    var dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    var nombreDia;
    nombreDia=dias[numeroDia];
//   for(var i=0; i<= dias.length; i++)
//     {
//         if (numeroDia===i)
//         {
//           nombreDia=  dias[numeroDia];
//         }
//     }
  return nombreDia;
};

var nombreDiaDelMes=function(numeroMes){
    var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    var nombreMes=mes[numeroMes];
    return nombreMes;
};


(function () {

    // var fecha=Date();   
    // document.write(fecha);
    // document.write("<br>");

    var oFecha = new Date();
    var cFecha = document.getElementById("fecha");
    cFecha.innerText = oFecha;
    // document.write(oFecha);

    var cHoras=document.getElementById("horas");
    var cMinutos=document.getElementById("minutos");
    var cSegundos=document.getElementById("segundos");
    cHoras.innerText=oFecha.getHours();
    cMinutos.innerText=oFecha.getMinutes();
    cSegundos.innerText=oFecha.getSeconds();
   

    var SegundaParteFechas=function(){

        var vDiaDeLaSemana= oFecha.getDay();
        var vDiaDelMes=oFecha.getDate();
        var vMes= oFecha.getMonth();
        var vAnio=oFecha.getFullYear();

        var nombreDia=" el dia es: "+nombreDiaDelaSemana(vDiaDeLaSemana);
        var nombreMes= " el mes es: "+ nombreDiaDelMes(vMes);
        var cPosicion=document.getElementById("segundaParte");
      
        
        //Se crea solo la etiqueta para mostrar la leyenda Dia
        var lblDia=document.createElement("label");
        var lblDiaContenidoD=document.createTextNode("Dia de la semana: ");
        lblDia.appendChild(lblDiaContenidoD);
        
        //Se crea otra etiqueta para mostrar el contenido de Dia
        var lblValorDia=document.createElement("label");
        var lblValorDiaContenido=document.createTextNode(vDiaDeLaSemana + nombreDia);
        lblValorDia.appendChild(lblValorDiaContenido);
        lblValorDia.setAttribute("id","lblDiaDeLaSemana"); 
            
        // var cSalto=document.createElement("br");

        cPosicion.appendChild(lblDia);
        cPosicion.appendChild(lblValorDia);              
        cPosicion.appendChild(crearNodoSaltoLinea());

        //Utilizando función crearNodo que se hizo para no repetir código
        //etiqueta,contenidoEtiqueta,nombreIdEtiqueta
      

        cPosicion.appendChild(crearNodo("label","Dia del Mes: ","lblDiaDelMes"));
        cPosicion.appendChild(crearNodo("label",vDiaDelMes,"lblDiaDelMesValor"));
        cPosicion.appendChild(crearNodoSaltoLinea());
        cPosicion.appendChild(crearNodo("label","Mes: ","lblMes")); 
        cPosicion.appendChild(crearNodo("label",vMes + nombreMes,"lblMesValor"));
        cPosicion.appendChild(crearNodoSaltoLinea());
        cPosicion.appendChild(crearNodo("label","Año: ","lblAnio"));
        cPosicion.appendChild(crearNodo("label",vAnio,"lblAnioValor"));
    };


   

    SegundaParteFechas();
}());