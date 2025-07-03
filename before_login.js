document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedInUser") !== null;

  // Khusus hero-link (slider klik)
  const heroLink = document.querySelector(".hero-link-cover");
  if (heroLink) {
    if (!isLoggedIn) {
      heroLink.style.pointerEvents = "none";
      heroLink.title = "Silakan login untuk mengakses";
    } else {
      heroLink.setAttribute("href", "menu.html");
    }
  }

  if (!isLoggedIn) {
    // 🔒 Seleksi SEMUA <a> KECUALI login, register, dan hero slider
    const protectedLinks = document.querySelectorAll(
      'a[href]:not([href*="login"]):not([href*="register"]):not(.hero-link-cover)'
    );

    // 🔒 Elemen-elemen lain yang harus dibekukan
    const protectedOthers = document.querySelectorAll(
      ".game-card, button, #shopping-cart-button"
    );

    // Gabungkan semua yang perlu dibekukan
    const elementsToDisable = [...protectedLinks, ...protectedOthers];

    elementsToDisable.forEach((el) => {
      el.style.pointerEvents = "none";
      el.style.opacity = "0.5";
      el.style.cursor = "not-allowed";
      el.title = "Silakan login terlebih dahulu";
    });

    // 🔔 Alert sekali saat klik pertama
    document.getElementById("main").addEventListener(
      "click",
      () => {
        alert(
          "⚠️ Anda harus login terlebih dahulu untuk menggunakan fitur ini."
        );
      },
      { once: true }
    );
  }
});
