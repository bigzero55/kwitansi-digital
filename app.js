const kwit = document.getElementById('kwitansi');
const tgl = new Date();
const skrg = tgl.toLocaleDateString('id-ID',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
kwit.addEventListener('submit', (e) => {
  e.preventDefault();
  var doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [1280, 482]
  });
  doc.addImage(blangko, 'JPEG', 0, 0, 1280, 482)
  doc.setFont('times', 'italic');
  doc.setFontSize(45);
  doc.text(kwit['dari'].value, 511, 113);
  doc.text(kwit['uang'].value, 500, 175);
  doc.text(kwit['untuk'].value, 511, 211);
  doc.text(skrg, 825, 319)
  doc.setFont('arial', 'bold');
  doc.setFontSize(60);
  doc.text(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(kwit['angka'].value), 343, 420);
  doc.save(`kuitansi-${kwit.dari.value}`);
  kwit.reset()
  document.getElementById('wadah').style.display = 'block';
});

kwit.addEventListener('change', () => {
  document.getElementById('wadah').style.display = 'none';
})

