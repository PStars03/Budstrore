const isLoggedIn = localStorage.getItem("loggedInUser") !== null;

document.addEventListener("DOMContentLoaded", () => {
  if (!isLoggedIn) {
    const protectedLinks = document.querySelectorAll(
      'a[href]:not([href*="login"]):not([href*="register"])'
    );
    const clickableElements = document.querySelectorAll(
      "button, .game-card, .slide, .prev-slide, .next-slide"
    );

    const elementsToDisable = [...protectedLinks, ...clickableElements];

    elementsToDisable.forEach((el) => {
      el.style.pointerEvents = "none";
      el.style.opacity = "0.5";
      el.style.cursor = "not-allowed";
      el.title = "Silakan login terlebih dahulu";
    });

    document.main.addEventListener(
      "click",
      (e) => {
        alert("⚠️ Anda harus login terlebih dahulu untuk mengakses fitur ini.");
      },
      { once: true }
    );
  }
});
