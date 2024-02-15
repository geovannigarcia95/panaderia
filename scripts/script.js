document.addEventListener("DOMContentLoaded", function () {
  const productos = document.querySelectorAll(".producto");

  productos.forEach((producto) => {
    producto.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f0f0f0"; // Color de fondo más claro
      this.style.transform = "scale(1.1)"; // Amplía la imagen al 110%
      this.style.transition = "background-color 0.3s, transform 0.3s"; // Agrega transición suave
    });

    producto.addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Restaura el color de fondo
      this.style.transform = "scale(1)"; // Restaura el tamaño original
    });
  });
});
