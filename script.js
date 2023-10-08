const body = document.body;

// preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
  body.style.overflow = "auto";
});
