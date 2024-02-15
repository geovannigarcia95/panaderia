document.addEventListener("DOMContentLoaded", function () {
    const preguntas = document.querySelectorAll(".pregunta");
  
    // Función para aplicar el efecto al pasar el ratón sobre la pregunta
    function aplicarEfecto(pregunta) {
      pregunta.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#f0f0f0"; // Color de fondo más claro
        this.style.transition = "background-color 0.3s"; // Agrega transición suave
      });
  
      pregunta.addEventListener("mouseout", function () {
        this.style.backgroundColor = ""; // Restaura el color de fondo
      });
    }
  
    // Aplica el efecto a todas las preguntas
    preguntas.forEach(aplicarEfecto);
  });
  