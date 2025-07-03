document.addEventListener("DOMContentLoaded", () => {
  const checkmark = document.querySelector(".checkmark");
  const amount = document.getElementById("amount");
  const details = document.getElementById("details");

  // Animasi centang
  setTimeout(() => {
    checkmark.style.transform = "scale(1)";
  }, 100);

  // Data dummy transaksi (bisa diambil dari backend atau localStorage)
  const transaksi = {
    harga: "20.000",
    item: "Free fire - 75 Diamonds (69 + 6 Bonus)",
    username: "JensenKSA",
    tanggal: "02-06-2025",
    metode: "Dana"
  };

  // Tampilkan harga
  amount.textContent = `IDR ${transaksi.harga}`;

  // Tampilkan detail
  details.innerHTML = `
    <p><span>Item</span>${transaksi.item}</p>
    <p><span>Nama pengguna</span>${transaksi.username}</p>
    <p><span>Tanggal Transaksi</span>${transaksi.tanggal}</p>
    <p><span>Metode Pembayaran</span>${transaksi.metode}</p>
  `;
});
