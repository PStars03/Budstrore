document.addEventListener("DOMContentLoaded", function () {
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
});
