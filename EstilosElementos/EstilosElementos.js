var encabezado= document.getElementById("encabezado");
// encabezado.style.color="red";
// encabezado.style.background="black";
// encabezado.style.paddingTop= "20px";

// encabezado.className="titulo";


//Con dos clases invocadas
encabezado.className="titulo tituloGrande";

//Para quitar la ultima clase 
encabezado.className=encabezado.className.replace("tituloGrande", "");