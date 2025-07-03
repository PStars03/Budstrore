document.addEventListener("DOMContentLoaded", function () {
  const data = JSON.parse(localStorage.getItem("transaksiData"));

  if (!data || !data.idGame || !data.diamond || !data.metode || !data.harga) {
    document.body.innerHTML =
      "<p style='color:red;text-align:center;'>❌ Data transaksi tidak ditemukan atau tidak lengkap.</p>";
    return;
  }

  // Format harga dalam Rupiah
  const rupiah = (angka) => {
    if (!angka || isNaN(angka)) return "IDR 0";
    return "IDR " + angka.toLocaleString("id-ID");
  };

  // Tampilkan total di header
  const amountElem = document.getElementById("amount");
  if (amountElem) {
    amountElem.textContent = rupiah(data.harga);
  }

  // Rincian Transaksi
  const detailsHTML = `
    <p><strong>ID Game:</strong> ${data.idGame}</p>
    <p><strong>Diamond:</strong> ${data.diamond}</p>
    <p><strong>Metode Pembayaran:</strong> ${data.metode}</p>
    <p><strong>Total Bayar:</strong> ${rupiah(data.harga)}</p>
  `;

  const detailsElem = document.getElementById("details");
  if (detailsElem) {
    detailsElem.innerHTML = detailsHTML;
  }

  console.log("Transaksi berhasil ditampilkan:", data);
});
