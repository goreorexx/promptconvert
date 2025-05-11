let opcion;
const tasadecambio = 1300;

while (opcion !== "2") {
    opcion = prompt(`1) Divisa
    2) Salir
    (ARS -> USD)`);
}


if (opcion = "2") {
    alert("Programa finalizado.");
}

function convertCurrency(pesos) {
    return pesos / tasadecambio;
}

const USD = convertCurrency(pesos);

if (opcion = "1") {
    pesos = prompt("Ingrese la cantidad de ARS a convertir.");
    alert(`Su resultado es de ${USD}`);
}