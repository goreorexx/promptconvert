let opcion = prompt(`1) Divisa
2) Salir
    (ARS -> USD)`);

const tasadecambio = 1300;

function convertCurrency(pesos) {
    return pesos / tasadecambio;
}

if (opcion === "1") {
    pesos = prompt("Ingrese la cantidad de ARS a convertir.");
    const USD = convertCurrency(pesos);
    alert(`Su resultado es de ${USD.toFixed(2)}`);
} else if (opcion === "2") {
    alert("Programa finalizado.");
} else {
    alert("Opción no válida.");
}