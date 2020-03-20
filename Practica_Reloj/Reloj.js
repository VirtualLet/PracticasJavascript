var formatosDosDigitosVersionLarga=function(valor){
    var formato;
    if(valor <10)
    {
        formato="0"+valor;
    }
    else{
        formato=valor;
    }         
    return formato;
};


var formatosDosDigitos=function(valor){   

    return valor.toString().padStart(2,"0");           
};




(function () {

    var reloj = function () {
        var cNombreDia = document.getElementById("nombreDia");
        var cNumeroDia = document.getElementById("numeroDia");
        var cNombreMes = document.getElementById("nombreMes");
        var cNumeroAnio = document.getElementById("numeroAnio");

        var cHora = document.getElementById("hora");
        var cMinutos = document.getElementById("minutos");
        var cTipoAmPm = document.getElementById("tipoAmPm");
        var cSegundos = document.getElementById("segundos");

        var oFecha = new Date();
        var dia = oFecha.getDay();
        var diaDeLaSemana = oFecha.getDate();
        var mes = oFecha.getMonth();
        var anio = oFecha.getFullYear();

        var hora = oFecha.getHours();
        var minutos = oFecha.getMinutes();
        var segundos = oFecha.getSeconds();

        var tipoAmPm;      

        if (hora > 12) {
            hora=hora-12;
            tipoAmPm = "PM";
        }
        else {
            tipoAmPm = "AM";
        };      

        var listaDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

        cNombreDia.textContent = listaDias[dia];
        cNumeroDia.textContent = diaDeLaSemana;
        var listaMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        cNombreMes.textContent = listaMeses[mes];
        cNumeroAnio.textContent = anio;
        cHora.textContent = formatosDosDigitosVersionLarga(hora);
        cMinutos.textContent = formatosDosDigitos(minutos);
        cTipoAmPm.textContent = tipoAmPm;
        cSegundos.textContent = formatosDosDigitos(segundos);
    };


    var intervaloSegundo = setInterval(reloj, 1000);

}());

