var lista_materos=[];
var sizeMateros=0;
var nextMatero=0;
function addMatero(){
    let nombre_matero= prompt("Ingrese el nombre del Matero:");
    lista_materos.push(nombre_matero);
    sizeMateros++;
}

function whosnext(){
    let contenido;
    if(nextMatero < sizeMateros)
    {
        contenido=lista_materos[nextMatero];
        nextMatero++;
        document.getElementById("botonSays").value="¡Siguiente en la ronda!";
        document.getElementById("materoTurno").innerText = `¡Le toca a ${contenido} tomar un mate!`;
    }else{
        contenido="¡Comienza de nuevo la ronda!";
        document.getElementById("botonSays").value="¡Comienza la ronda!";
        nextMatero=0;
        document.getElementById("materoTurno").innerText = contenido;
    }
   
}