
(function () {
    var contador = 0;
    var mensaje = function () {

        var cMensaje = document.getElementById("lblMensaje");
        var textoMensaje = "Se muestra despues de 1 segundos: número de veces invocada: " + contador;
        cMensaje.innerText = textoMensaje;
        console.log(textoMensaje);

        if(contador===5 )
        {
            clearInterval(tiempoIntervalo);
        }
        contador++;
    };

    //Se ejecuta la funcion sólo una vez
    //setTimeout(mensaje,1000);

    //Interval, se ejecuta varias veces cada tiempo determinado
    var tiempoIntervalo= setInterval(mensaje, 3000);


}());