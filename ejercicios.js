// ==========================================
// TALLER #9 - INGENIERÍA WEB
// Fundamentos de JavaScript
// ==========================================

// BLOQUE 1
// ==========================================

// Ejercicio 1.1 – Datos personales
// const se usa porque estos valores no cambian durante el ejercicio.
const nombre = "Sebastián González";
const edad = 21;
const semestre = 3;

console.log("Ejercicio 1.1");
console.log("nombre:", nombre, "- tipo:", typeof nombre);
console.log("edad:", edad, "- tipo:", typeof edad);
console.log("semestre:", semestre, "- tipo:", typeof semestre);

// Ejercicio 1.2 – Conversión de tipos
const texto = "25";

// Antes de la conversión:
// == compara permitiendo conversión implícita de tipos.
const resultado1 = texto == 25;
// === compara valor y tipo, por eso string !== number.
const resultado2 = texto === 25;

const numero = Number(texto);

// Después de la conversión:
const resultado3 = numero == 25;
const resultado4 = numero === 25;

console.log("Ejercicio 1.2");
console.log('Antes: "25" == 25 ->', resultado1);
console.log('Antes: "25" === 25 ->', resultado2);
console.log('Después: Number("25") == 25 ->', resultado3);
console.log('Después: Number("25") === 25 ->', resultado4);

// La diferencia es que == permite conversión implícita de tipos,
// mientras que === exige que coincidan tanto el valor como el tipo.

// Ejercicio 1.3 – Precio con IVA
const precioProducto = 80000;
const IVA = 0.19;
const totalConIVA = precioProducto * (1 + IVA);

console.log("Ejercicio 1.3");
console.log("Total con IVA:", totalConIVA); // 95200

// Ejercicio 1.4 – Par o impar
const numero7 = 7;
const numero10 = 10;

const resultado7 = numero7 % 2 === 0 ? "par" : "impar";
const resultado10 = numero10 % 2 === 0 ? "par" : "impar";

console.log("Ejercicio 1.4");
console.log(`${numero7} es ${resultado7}`);
console.log(`${numero10} es ${resultado10}`);

// Ejercicio 1.5 – Pregunta de análisis
// typeof null devuelve "object". Se considera un error histórico de JavaScript
// que se mantuvo por compatibilidad con código existente.
// Una variable declarada con const no puede ser reasignada. Intentar hacerlo
// produce un TypeError en tiempo de ejecución.
console.log("Ejercicio 1.5");
console.log('typeof null ->', typeof null);
console.log("Una variable const no puede ser reasignada.");


// BLOQUE 2
// ==========================================

// Ejercicio 2.1 – Tabla de multiplicar
console.log("Ejercicio 2.1 - Tabla del 7");

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Ejercicio 2.2 – Rango de edad
const entradaEdad = prompt(
  "Ejercicio 2.2 - Ingrese su edad:"
) ?? "";

const edadIngresada = Number(entradaEdad);

console.log("Ejercicio 2.2");

if (entradaEdad.trim() === "" || Number.isNaN(edadIngresada)) {
  console.log("Error: debe ingresar un número válido.");
} else if (edadIngresada < 18) {
  console.log("Menor de edad");
} else if (edadIngresada < 60) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}

// Ejercicio 2.3 – FizzBuzz
console.log("Ejercicio 2.3 - FizzBuzz");

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Ejercicio 2.4 – Contraseña
const contraseñaCorrecta = "JavaScript2026";
let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && !accesoConcedido) {
  const contraseñaIngresada = prompt(
    `Ejercicio 2.4 - Ingrese la contraseña (intento ${intentos + 1} de 3):`
  );

  intentos++;

  if (contraseñaIngresada === contraseñaCorrecta) {
    accesoConcedido = true;
    console.log("Acceso concedido");
  } else if (intentos < 3) {
    console.log("Contraseña incorrecta.");
  }
}

if (!accesoConcedido) {
  console.log("Cuenta bloqueada");
}

// Ejercicio 2.5 – Horario y recorrido
const dia = (
  prompt(
    "Ejercicio 2.5 - Ingrese un día de la semana (lunes, martes, miércoles, jueves o viernes):"
  ) ?? ""
).toLowerCase();
console.log("Ejercicio 2.5 - Horario");

switch (dia) {
  case "lunes":
    console.log("Ingeniería Web");
    break;
  case "martes":
    console.log("Bases de Datos");
    break;
  case "miércoles":
  case "miercoles":
    console.log("Matemáticas");
    break;
  case "jueves":
    console.log("Redes");
    break;
  case "viernes":
    console.log("Programación");
    break;
  default:
    console.log("Sin clase");
}

console.log("Recorrido de UMB:");

for (const letra of "UMB") {
  console.log(letra);
}
