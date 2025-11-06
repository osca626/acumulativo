const boton = document.getElementById('modoBtn')
const icono = document.getElementById('icono')

boton.addEventListener('click', () => {
 document.body.classList.toggle('modo-oscuro')
 const oscuro = document.body.classList.contains('modo-oscuro')

 boton.textContent = oscuro ? '☀️ Activar modo claro' : '🌙 Activar modo oscuro'
 icono.src = oscuro
  ? 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png'
  : 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
})
