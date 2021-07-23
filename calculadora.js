let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let botonesNumero = document.getElementsByClassName("btn-js");
let botonBorrar = document.getElementById("btn-borrar");
let botonesCalculo = document.getElementsByClassName("btn-js-calculo");
let botonCalcular = document.getElementById("btn-calcular");
let botonSuma = document.getElementById("btn-suma");
let botonResta = document.getElementById("btn-resta");
let botonDivision = document.getElementById("btn-division");
let botonMultiplicacion = document.getElementById("btn-multiplicacion");

let primerNumero;
let segundoNumero;

function anotarCalculo() {
    resultadoCalculo.innerText += resultadoCalculo.dataset.numero;
}

function borrarUltimoNumero() {
    let contenido = resultadoCalculo.innerText;
    resultadoCalculo.innerText = contenido.substring(0, contenido.length - 1);
}

function setSegundoNumero() {
    segundoNumero = getNumero();
}

function setPrimerNumero() {
    primerNumero = getNumero();
}

function getNumero() {
    return resultadoCalculo.innerText;
}

function borrarResultadoCalculo() {
    resultadoCalculo.innerText = "";
}

function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

function division(a,b) {
    return a/b;
}

function multiplicacion(a,b) {
    return a*b;
}

Array.from(botonesNumero).forEach(botonNumero => {
    botonNumero.addEventListener('click', function () {
        resultadoCalculo.dataset.numero = botonNumero.textContent;
        anotarCalculo();
    });
});

botonBorrar.addEventListener('click', function() {
    borrarUltimoNumero();
});

Array.from(botonesCalculo).forEach(botonCalculo => {
    botonCalculo.addEventListener('click', function() {
        primerNumero = getNumero();
        borrarResultadoCalculo();
    });
});

botonCalcular.addEventListener('click', function() {
    suma(primerNumero,segundoNumero);
});

botonCalcular.addEventListener('click', function() {
    segundoNumero = getNumero();
    borrarResultadoCalculo();
});

