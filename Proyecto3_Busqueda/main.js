// Proyecto 3 - Calculadora de Promedios (Sistema Cavirey)
// Autor: Oscar Rondón - Grado 10-1

document.getElementById('calcular').addEventListener('click', function () {
 // Obtener las notas ingresadas
 let n1 = parseFloat(document.getElementById('nota1').value)
 let n2 = parseFloat(document.getElementById('nota2').value)
 let n3 = parseFloat(document.getElementById('nota3').value)
 let resultado = document.getElementById('resultado')

 // Validar entradas
 if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  resultado.textContent = '⚠️ Ingresa las tres notas antes de calcular.'
  resultado.style.background = 'rgba(255,0,0,0.3)'
  return
 }

 // Validar rango de notas
 if (n1 < 45 || n1 > 100 || n2 < 45 || n2 > 100 || n3 < 45 || n3 > 100) {
  resultado.textContent = '❗ Las notas deben estar entre 45 y 100.'
  resultado.style.background = 'rgba(255,0,0,0.3)'
  return
 }

 // Calcular promedio
 let promedio = (n1 + n2 + n3) / 3

 // Mostrar resultado con color según aprobación
 if (promedio >= 70) {
  resultado.textContent = `✅ Aprobado con promedio ${promedio.toFixed(
   1
  )} — ¡Buen trabajo!`
  resultado.style.background = 'rgba(0,255,0,0.3)'
 } else {
  resultado.textContent = `❌ Reprobado con promedio ${promedio.toFixed(
   1
  )} — Debes mejorar.`
  resultado.style.background = 'rgba(255,0,0,0.3)'
 }
})
