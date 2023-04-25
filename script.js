$(document).ready(function() {
    // Cambiar la fuente a Montserrat
    $("body").css("font-family", "Montserrat, sans-serif");
  
    // Cambiar el color de fondo
    $("body").css("background-color", "#f5e5d8");
  
    // Cambiar los estilos de los botones
    $('iframe').contents().find('.goog-inline-block, .quantumWizButtonPaperbuttonContent, .quantumWizButtonPaperbuttonFocusOverlay').css({
      "border-radius": "30px",
      "border": "none",
      "box-shadow": "none",
      "font-weight": "500",
      "font-size": "16px",
      "padding": "12px 32px",
      "margin": "16px",
      "cursor": "pointer",
      "transition": "background-color 0.2s"
    });
  
    $('iframe').contents().find('.goog-inline-block:hover, .quantumWizButtonPaperbuttonContent:hover, .quantumWizButtonPaperbuttonFocusOverlay:hover').css({
      "background-color": "#fff",
      "color": "#000"
    });
  
    // Esperar a que el iframe cargue
    $('#google-form').on('load', function() {
      // Cambiar el estilo del iframe
      $(this).css({
        "border": "none",
        "border-radius": "8px",
        "box-shadow": "0px 2px 20px rgba(0, 0, 0, 0.15)",
        "overflow": "hidden",
        "margin-top": "50px",
        "margin-bottom": "50px",
        "width": "100%",
        "height": "calc(100vh - 150px)" // ajustar a la altura de tu encabezado y pie de página

    });
});
})

