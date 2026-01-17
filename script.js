function simular() {
    let produccionHora = Number(document.getElementById("produccion").value);
    let demanda = Number(document.getElementById("demanda").value);
    let inventario = Number(document.getElementById("inventario").value);

    let horasTrabajo = 8;
    let produccionDiaria = produccionHora * horasTrabajo;

    let inventarioFinal = inventario + produccionDiaria - demanda;

    let eficiencia = (Math.min(produccionDiaria, demanda) / demanda) * 100;

    document.getElementById("resultadoProduccion").innerHTML =
        "Producción diaria: <b>" + produccionDiaria + " unidades</b>";

    document.getElementById("resultadoInventario").innerHTML =
        "Inventario final: <b>" + inventarioFinal + " unidades</b>";

    document.getElementById("resultadoEficiencia").innerHTML =
        "Eficiencia del sistema: <b>" + eficiencia.toFixed(2) + "%</b>";
}
