
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function (event) {


    event.preventDefault(); //evita que el formulario actualice la pagina

    //Capturo valores del formulario
    var formulario = document.querySelector("#form-adicionar");
    //Recibe un objeto paciente creado dentro de la funcion:
    var paciente = capturoDatosDelPaciente(formulario);

    var errores = validaPaciente(paciente);


    //Si el paciente es incorrecto retorna la funcion anonima vacia y no continua la carga
    if (errores.length > 0) {


        muestraMensajesDeError(errores);

        return;


    }
    //Agrego el registro a la tabla

    adicionarPacienteEnLaTabla(paciente);
    formulario.reset() // Borra los datos del formulario una vez ingresados
    mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";


});

function adicionarPacienteEnLaTabla(paciente) {
    var registroNuevo = creaRegistroNuevo(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(registroNuevo);

}

function capturoDatosDelPaciente(formulario) {
    var paciente = {
        nombre: formulario.nombre.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value) //Funcion creada en calcular-imc.js
    }
    return paciente;
}

function creaRegistroNuevo(paciente) {
    //Creo HTML nuevo registro de tabla
    var registroNuevo = document.createElement("tr");
    registroNuevo.style.backgroundColor = "green";
    registroNuevo.classList.add("paciente");

    //Agrego los datos del paciente a un Tr y Td nuevos 
    registroNuevo.appendChild(creaTd(paciente.nombre, "info-nombre"));
    registroNuevo.appendChild(creaTd(paciente.peso, "info-peso"));
    registroNuevo.appendChild(creaTd(paciente.altura, "info-altura"));
    registroNuevo.appendChild(creaTd(paciente.gordura, "info-gordura"));
    registroNuevo.appendChild(creaTd(paciente.imc, "info-imc"));

    return registroNuevo;

}

function creaTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;

}

function validaPaciente(paciente) {
    var errores = [];

    if (!paciente.nombre.length > 0) {
        errores.push("El campo nombre esta vacio");

    }
    if (!paciente.peso.length > 0) {
        errores.push("El campo peso esta vacio");

    }
    if (!paciente.altura.length > 0) {
        errores.push("El campo altura esta vacio");

    }
    if (!paciente.gordura.length > 0) {
        errores.push("El campo gordura esta vacio");

    }
    if (!validaPeso(paciente.peso)) {
        errores.push("El peso es incorrecto");

    }
    if (!validaAltura(paciente.altura)) {
        errores.push("La altura es incorrecta");

    }
    return errores;

}

function muestraMensajesDeError(errores) {
    ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function (error) {
        li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);


    });

}

