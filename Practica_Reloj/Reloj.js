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
        var formatoSegundos;
        var formatoMinutos;
        var formatoHoras;

        if (hora > 12) {
            hora=hora-12;
            tipoAmPm = "PM";
        }
        else {
            tipoAmPm = "AM";
        };

        


        if(hora <10){
            formatoHoras="0"+hora;
        }else{
            formatoHoras=hora;
        }

        if(minutos<10)
        {
            formatoMinutos="0"+minutos;
        }else{
            formatoMinutos=minutos;
        }

        if (segundos < 10)
        {  
            formatoSegundos="0"+segundos;
        }
        else{   
            formatoSegundos=segundos;
        };

        var listaDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        cNombreDia.textContent = listaDias[dia];
        cNumeroDia.textContent = diaDeLaSemana;
        var listaMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        cNombreMes.textContent = listaMeses[mes];
        cNumeroAnio.textContent = anio;
        cHora.textContent = formatoHoras;
        cMinutos.textContent = formatoMinutos;
        cTipoAmPm.textContent = tipoAmPm;
        cSegundos.textContent = formatoSegundos;
    };


    var intervaloSegundo = setInterval(reloj, 1000);

}());