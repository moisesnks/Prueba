// abre el formulario de Google al hacer clic en el botón "Contáctanos"
document.getElementById("mostrar-formulario").addEventListener("click", function(){
  document.getElementById("formulario").innerHTML='<iframe id="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSeQUHxjc9tMrrofGivkkzbMe7LlYS4Dsv1TmJ_P5t9bT73qoQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0" title="Formulario de Google"></iframe>';
});

// efecto para el navbar al desplazarse por la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbarNav").style.backgroundColor = "#f8f9fa";
  } else {
    document.getElementById("navbarNav").style.backgroundColor = "transparent";
  }
}
