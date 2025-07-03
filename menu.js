const selectedData = {
  idGame: "",
  diamond: "",
  harga: 0,
  metode: "",
};

const idInput = document.getElementById("input-idpemain");

// Diamond
const topupButtons = document.querySelectorAll(".topup-item");
topupButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    topupButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    selectedData.diamond = btn.getAttribute("data-diamond");
    selectedData.harga = parseInt(btn.getAttribute("data-harga"));

    console.log("Diamond dipilih:", selectedData.diamond);
    console.log("Harga terbaca:", selectedData.harga);
  });
});

// Metode Pembayaran
const paymentItems = document.querySelectorAll(".payment-item");
paymentItems.forEach((item) => {
  item.addEventListener("click", () => {
    paymentItems.forEach((p) => p.classList.remove("selected"));
    item.classList.add("selected");

    selectedData.metode = item.getAttribute("data-metode");
  });
});

// Tombol Beli
document.getElementById("btn-beli").addEventListener("click", () => {
  const idValue = idInput.value.trim();

  if (
    !idValue ||
    !selectedData.diamond ||
    !selectedData.metode ||
    !selectedData.harga ||
    isNaN(selectedData.harga)
  ) {
    alert("Lengkapi semua pilihan terlebih dahulu!");
    return;
  }

  selectedData.idGame = idValue;

  console.log("Data akhir dikirim ke transaksi.html:", selectedData);

  localStorage.setItem("transaksiData", JSON.stringify(selectedData));
  window.location.href = "transaksi.html";
});
