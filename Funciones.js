// variables locales

var usuarios = new Array();
var contador=0;

function agregarUsuario(entrada){
    var usuario = entrada.value.trim();
    usuarios[contador++] = usuario;
    // desplegamos el catalogo actual de usuarios
    mostrarUsuarios();
    //limpiamos la caja de texto y la seleccionamos
    entrada.value="";
    entrada.focus();
}

function mostrarUsuarios(){
    limpiar("listado");
    var usuario = null;
    for (var i =0;i < usuarios.length; i++) {
        usuario = usuarios[i];
        var resultado = i + " - "+ usuario;
        imprimir(resultado,"listado");
    }
}

function buscarUsuario(entrada){
    for (var i = 0; i <= usuarios.length; i++) {
        if ((usuarios[i] == entrada.value)) {
            document.getElementById("busqueda").innerHTML = "El usuario tiene la posicion" + [i];
            entrada.value =""
            break;
        }
        else {
            document.getElementById("busqueda").innerHTML = "No se encontro ningun resultado";
            
        }
        
    }
}


function imprimir(valor,campo){
 var resultado = document.getElementById(campo);
 resultado.innerHTML += valor + "<br>";
}

function limpiar(campo){
    document.getElementById(campo).innerHTML = "";
}