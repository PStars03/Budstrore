document.addEventListener("DOMContentLoaded", function () {
  // Toggle Hamburger
  const navbarNav = document.querySelector(".navbar-nav");
  const hm = document.querySelector("#hamburger-menu");
  if (hm && navbarNav) {
    hm.onclick = () => {
      navbarNav.classList.toggle("active");
    };
  }

  // Toggle Search
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const sb = document.querySelector("#search-button");
  if (sb && searchForm && searchBox) {
    sb.onclick = (e) => {
      searchForm.classList.toggle("active");
      searchBox.focus();
      e.preventDefault();
    };
  }

  // Toggle Cart
  const shoppingCart = document.querySelector(".shopping-cart");
  const sc = document.querySelector("#shopping-cart-button");
  if (sc && shoppingCart) {
    sc.onclick = (e) => {
      shoppingCart.classList.toggle("active");
      e.preventDefault();
    };
  }

  // Klik di luar elemen
  document.addEventListener("click", function (e) {
    if (
      hm &&
      navbarNav &&
      !hm.contains(e.target) &&
      !navbarNav.contains(e.target)
    ) {
      navbarNav.classList.remove("active");
    }
    if (
      sb &&
      searchForm &&
      !sb.contains(e.target) &&
      !searchForm.contains(e.target)
    ) {
      searchForm.classList.remove("active");
    }
    if (
      sc &&
      shoppingCart &&
      !sc.contains(e.target) &&
      !shoppingCart.contains(e.target)
    ) {
      shoppingCart.classList.remove("active");
    }
  });

  // Modal Box
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  if (itemDetailModal && itemDetailButtons.length > 0) {
    itemDetailButtons.forEach((btn) => {
      btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
      };
    });

    const closeIcon = document.querySelector(".modal .close-icon");
    if (closeIcon) {
      closeIcon.onclick = (e) => {
        itemDetailModal.style.display = "none";
        e.preventDefault();
      };
    }

    window.onclick = (e) => {
      if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
      }
    };
  }

  // Form Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const konfirmasi = document.getElementById("konfirmasiPassword").value;

      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nama.length < 3) {
        alert("Nama harus lebih dari 2 karakter!");
        return;
      }

      if (!emailReg.test(email)) {
        alert("Email tidak valid!");
        return;
      }

      if (password.length < 8) {
        alert("Password minimal 8 karakter.");
        return;
      }

      if (konfirmasi !== password) {
        alert("Konfirmasi password tidak cocok.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.find((user) => user.email === email);

      if (userExists) {
        alert("Email sudah terdaftar!");
        return;
      }

      users.push({ nama, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registrasi berhasil!");
      window.location.href = "login.html";
    });
  }
});
