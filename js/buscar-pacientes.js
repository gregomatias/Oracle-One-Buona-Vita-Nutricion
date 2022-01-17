var botonBuscar = document.querySelector("#buscar-paciente");
botonBuscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function () {
        var errorAjax = document.querySelector("#error-ajax");

        
        //Status 200 significa que no hay errores
        if (xhr.status == 200) {
           errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function (paciente) {
                adicionarPacienteEnLaTabla(paciente);
            });

        } else {
            console.log("Entro");
           errorAjax.classList.remove("invisible");

        }


    });

    xhr.send();
});