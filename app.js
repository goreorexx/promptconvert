const tasadecambio = 1300;

function convertCurrency(pesos) {
    return pesos / tasadecambio;
}

function menu() {
    while (true) {
        let opcion = prompt(`1) Divisa\n2) Salir\n(ARS -> USD)`).trim();
        if (opcion === "1") {
            let pesos = parseFloat(prompt("Ingrese la cantidad de ARS a convertir."));
            const USD = convertCurrency(pesos);
            alert(`Su resultado es de ${USD.toFixed(2)} USD.`);
        }
        else if (opcion === "2") {
            alert("Programa finalizado.");
            console.log("Historial de conversiones:", history);
            return;
        }
        else {
            alert("Opción no válida.");
            return;
        }
    }
}

menu();