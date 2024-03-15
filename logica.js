const IconBurger = document.getElementById("burger");
const navbarRight = document.querySelector(".navbar-right ul");

IconBurger.addEventListener("click", function () {
  navbarRight.classList.toggle("active"); // Alternar la clase "active" para mostrar/ocultar el menú
});
