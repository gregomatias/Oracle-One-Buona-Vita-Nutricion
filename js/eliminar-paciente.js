var tablaPacientes = document.querySelectorAll("#tabla-pacientes");


tablaPacientes = addEventListener("dblclick", function (event) {
    //llama a la clase de opacity con transition
    event.target.parentNode.classList.add("fadeOut");
    //Espera medio segundo,500 ms antes de eliminar el registro hijo
    setTimeout(function () {
        event.target.parentNode.remove();

    }, 500);


    //this.remove();

});