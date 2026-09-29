// ==========================================
// TALLER #9 - PARTE 3
// Mini-proyecto: Calculadora de nota definitiva
// ==========================================

let aprobados = 0;

// Función auxiliar para pedir y validar una nota.
// La guía exige que la validación se realice con while.
function pedirNota(numeroCorte) {
  let nota = Number(
    prompt(`Nota del corte ${numeroCorte} (0 a 5):`)
  );

  while (Number.isNaN(nota) || nota < 0 || nota > 5) {
    nota = Number(
      prompt(
        `Nota inválida. Ingrese un valor entre 0 y 5 para el corte ${numeroCorte}:`
      )
    );
  }

  return nota;
}

// Reto extra: calcula la nota necesaria en el tercer corte
// para llegar a una definitiva de 3.0.
function calcularNotaNecesaria(corte1, corte2) {
  const notaNecesaria =
    (3.0 - (corte1 * 0.3 + corte2 * 0.3)) / 0.4;

  if (notaNecesaria > 5) {
    return "Ya no es posible aprobar con el tercer corte.";
  }

  if (notaNecesaria <= 0) {
    return "Ya tiene la nota asegurada.";
  }

  return `Necesita ${notaNecesaria.toFixed(1)} en el tercer corte para obtener 3.0.`;
}

// Se repite el proceso para exactamente 3 estudiantes.
for (let i = 1; i <= 3; i++) {
  const nombreEstudiante = prompt(
    `Estudiante ${i} de 3 - Ingrese el nombre:`
  );

  const corte1 = pedirNota(1);
  const corte2 = pedirNota(2);
  const corte3 = pedirNota(3);

  const definitiva =
    corte1 * 0.3 +
    corte2 * 0.3 +
    corte3 * 0.4;

  const definitivaFormateada = definitiva.toFixed(1);

  let clasificacion;

  if (definitiva >= 4.5) {
    clasificacion = "Excelente";
  } else if (definitiva >= 3.0) {
    clasificacion = "Aprobado";
  } else {
    clasificacion = "Reprobado";
  }

  if (clasificacion === "Aprobado" || clasificacion === "Excelente") {
    aprobados++;
  }

  console.log(
    `${nombreEstudiante}: ${definitivaFormateada} · ${clasificacion}`
  );

  // Reto extra
  console.log(
    `Reto extra - ${nombreEstudiante}:`,
    calcularNotaNecesaria(corte1, corte2)
  );
}

console.log(`Aprobados: ${aprobados} de 3`);
