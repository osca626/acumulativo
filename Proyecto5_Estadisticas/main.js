// Proyecto 5 - Tarjeta de Estadísticas Interactiva
// Autor: Oscar Rondón - Grado 10-1

// Seleccionamos todos los botones
const botonesMas = document.querySelectorAll('.mas')
const botonesMenos = document.querySelectorAll('.menos')

// Función para cambiar valor
function cambiarValor(boton, operacion) {
 boton.addEventListener('click', () => {
  // Selecciona el span valor del mismo contenedor
  const valorElemento = boton.parentElement.querySelector('.valor')
  let valor = parseInt(valorElemento.textContent)

  // Sumar o restar según la operación
  if (operacion === 'sumar' && valor < 100) valor += 5
  if (operacion === 'restar' && valor > 0) valor -= 5

  valorElemento.textContent = valor
 })
}

// Asignamos eventos a todos los botones
botonesMas.forEach((boton) => cambiarValor(boton, 'sumar'))
botonesMenos.forEach((boton) => cambiarValor(boton, 'restar'))
