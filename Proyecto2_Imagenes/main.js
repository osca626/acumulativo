const imgs = document.querySelectorAll('.galeria img')
const lista = document.getElementById('lista')

imgs.forEach((img) => {
 img.addEventListener('click', () => {
  const nombre = img.alt
  const li = document.createElement('li')
  li.textContent = nombre
  li.addEventListener('click', () => li.remove())
  lista.appendChild(li)
 })
})
