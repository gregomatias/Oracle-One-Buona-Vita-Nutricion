var inputFiltro = document.querySelector("#filtrar-tabla");

inputFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            //La i de la RegEx quita case sensitive
            var expresion = new RegExp(this.value, "i");
            //Expresion.test valida si el input esta dentro de nombre
            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible");

            } else {

                paciente.classList.remove("invisible");
            }
        }

    } else {
        for (i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }

});