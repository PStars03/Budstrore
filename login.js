document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    console.log("Form ditemukan");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form disubmit");

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const validUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (validUser) {
        alert("Login berhasil, selamat datang " + validUser.nama + "!");
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        setTimeout(() => {
          window.location.href = "index.html";
        }, 100);
      } else {
        alert("Email atau password salah!");
      }
    });
  } else {
    console.warn(
      "Form login tidak ditemukan. Pastikan form punya id='loginForm'"
    );
  }

  // ========== UBAH LOGIN > LOGOUT & REGISTER > PROFIL ==========
  const loginLink = document.querySelector('.navbar-nav a[href="login.html"]');
  const registerLink = document.querySelector(
    '.navbar-nav a[href="register.html"]'
  );
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    if (loginLink) {
      loginLink.textContent = "Logout";
      loginLink.href = "#";
      loginLink.onclick = function () {
        if (confirm("Yakin ingin logout?")) {
          localStorage.removeItem("loggedInUser");
          window.location.reload();
        }
      };
    }

    if (registerLink) {
      registerLink.textContent = "Profil";
      registerLink.href = "profile.html";
    }

    const userIcon = document.querySelector(
      '.navbar-extra i[data-feather="user"]'
    );
    if (userIcon) {
      userIcon.setAttribute("title", loggedInUser.nama);
    }
  }

  // ========== TOGGLE NAVBAR / SEARCH / CART ==========
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const searchButton = document.querySelector("#search-button");

  const shoppingCart = document.querySelector(".shopping-cart");
  const cartButton = document.querySelector("#shopping-cart-button");

  if (hamburgerMenu && navbarNav) {
    hamburgerMenu.onclick = () => {
      navbarNav.classList.toggle("active");
    };
  }

  if (searchButton && searchForm && searchBox) {
    searchButton.onclick = (e) => {
      searchForm.classList.toggle("active");
      searchBox.focus();
      e.preventDefault();
    };
  }

  if (cartButton && shoppingCart) {
    cartButton.onclick = (e) => {
      shoppingCart.classList.toggle("active");
      e.preventDefault();
    };
  }

  // ========== KLIK DI LUAR NAVBAR, SEARCH, CART ==========
  document.addEventListener("click", function (e) {
    if (
      hamburgerMenu &&
      navbarNav &&
      !hamburgerMenu.contains(e.target) &&
      !navbarNav.contains(e.target)
    ) {
      navbarNav.classList.remove("active");
    }

    if (
      searchButton &&
      searchForm &&
      !searchButton.contains(e.target) &&
      !searchForm.contains(e.target)
    ) {
      searchForm.classList.remove("active");
    }

    if (
      cartButton &&
      shoppingCart &&
      !cartButton.contains(e.target) &&
      !shoppingCart.contains(e.target)
    ) {
      shoppingCart.classList.remove("active");
    }
  });

  // ========== MODAL PRODUK ==========
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  const closeIcon = document.querySelector(".modal .close-icon");

  if (itemDetailModal && itemDetailButtons.length > 0) {
    itemDetailButtons.forEach((btn) => {
      btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
      };
    });
  }

  if (closeIcon && itemDetailModal) {
    closeIcon.onclick = (e) => {
      itemDetailModal.style.display = "none";
      e.preventDefault();
    };

    window.onclick = (e) => {
      if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
      }
    };
  }
});
