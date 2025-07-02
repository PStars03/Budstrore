let slideIndex = 0;
const slides = document.querySelectorAll(".hero-img .slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// event tombol
prevButton.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

// event klik titik navigasi
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    showSlide(i);
    startAutoSlide();
  });
});

startAutoSlide();

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Register
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasiPassword").value;

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      alert("Nama harus lebih dari 2 karakter!");
      e.preventDefault();
      return;
    }

    if (!emailReg.test(email)) {
      alert("Email tidak valid!");
      e.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert("Passwordnya kurang panjang, minimal 8 karakter");
      e.preventDefault();
      return;
    }

    if (konfirmasiPassword !== password) {
      alert(
        "Password kamu beda nih, perbaiki lagi! perasan yang beda aja sakit😊💔💔"
      );
      e.preventDefault();
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert(
        "Email sudah terdaftar! Sama kaya hati jangan sampai berisi dua orang💔"
      );
      return;
    }

    users.push({ nama, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert(
      "Selamat akun kamu sudah diterima, semoga perasanmu juga diterima sama dia🤗"
    );
    window.location.href = "login.html";
  });

// Login
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (validUser) {
    alert("Login berhasil, selamat datang " + validUser.nama + "!");
    localStorage.setItem("loggedInUser", JSON.stringify(validUser));
    window.location.href = "home.html";
  } else {
    alert("Email atau password salah!");
  }
});
