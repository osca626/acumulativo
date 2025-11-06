// Proyecto 4 - Generar PDF con jsPDF
const { jsPDF } = window.jspdf
const btn = document.getElementById('btnPdf')
const btnBack = document.getElementById('btnBack')

btn.addEventListener('click', () => {
 const nombre = document.getElementById('nombre').value || 'Alumno'
 const doc = new jsPDF({ unit: 'pt', format: 'a4' })
 doc.setFontSize(18)
 doc.text('Comprobante de Entrega', 40, 60)
 doc.setFontSize(12)
 doc.text(`Alumno: ${nombre}`, 40, 100)
 doc.text(`Curso: 10-1`, 40, 120)
 doc.text(`Fecha: ${new Date().toLocaleString()}`, 40, 140)
 doc.text('Firma: ____________________', 40, 200)
 doc.save(`Comprobante_${nombre.replace(/\s+/g, '_')}.pdf`)
})

btnBack.addEventListener('click', () => {
 alert('Simulando regreso (history.back())')
 if (history.length > 1) history.back()
})
