var pacientes = document.querySelectorAll(".paciente");

/*  Codigo viejo con ID y QuerySelector, que solo toma el primer TD
/var paciente = document.querySelector("#primer-paciente");
var tdPeso = paciente[0].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente[0].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente[0].querySelector(".info-imc"); */


for (i = 0; i < pacientes.length; i++) {

    tdPeso = pacientes[i].querySelector(".info-peso");
    peso = tdPeso.textContent;

    tdAltura = pacientes[i].querySelector(".info-altura");
    altura = tdAltura.textContent;

    tdIMC = pacientes[i].querySelector(".info-imc");


    esPesoValido = validaPeso(peso);
    esAlturaValida = validaAltura(altura);
 

    //Si el peso no es valido
    if (!esPesoValido) {

        tdIMC.textContent = "Peso incorrecto";
        // pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-incorrecto");
    }

    //Si la altura no es valida
    if (!esAlturaValida) {
        tdIMC.textContent = "Altura incorrecta";
        //pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-incorrecto");
    }


    if (esPesoValido && esAlturaValida) {
        tdIMC.textContent = calcularIMC(peso, altura)
    }

}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function validaPeso(peso) {
    if (peso > 10 && peso < 600) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if ((altura > 0.50) && (altura <= 3.0)) {
        return true;

    } else {
        return false;
    }
}