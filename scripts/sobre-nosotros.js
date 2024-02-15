document.addEventListener("DOMContentLoaded", function () {
  const quienesSomos = document.getElementById("quienes-somos");
  const nuestraHistoria = document.getElementById("nuestra-historia");

  // Función para aplicar el efecto al pasar el ratón sobre la sección
  function aplicarEfecto(seccion) {
    seccion.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f0f0f0"; // Color de fondo más claro
      this.style.transition = "background-color 0.3s"; // Agrega transición suave
    });

    seccion.addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Restaura el color de fondo
    });
  }

  // Aplica el efecto a las secciones correspondientes
  aplicarEfecto(quienesSomos);
  aplicarEfecto(nuestraHistoria);
});
