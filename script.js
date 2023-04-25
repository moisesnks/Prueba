// Seleccione los fieldsets y los títulos de la sección
const fieldsets = document.querySelectorAll('fieldset');
const sectionTitles = document.querySelectorAll('h2');

// Inicie en la primera sección
let currentSectionIndex = 0;
showSection(currentSectionIndex);

// Agregar manejador de eventos al botón "Siguiente" en cada sección
document.querySelectorAll('.next-section').forEach(button => {
  button.addEventListener('click', event => {
    // Validar la sección actual antes de avanzar
    const inputs = fieldsets[currentSectionIndex].querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
      if (input.checkValidity() === false || (input.required && !input.value.trim())) {
        isValid = false;
        input.reportValidity();
        console.log(`El campo ${input.name} es inválido: ${input.validationMessage}`);
      } else {
        console.log(`El campo ${input.name} es válido.`);
      }
    });
    
    if (isValid) {
      // Avanzar a la siguiente sección
      currentSectionIndex++;
      showSection(currentSectionIndex);
    }
  });
});



// Ocultar todas las secciones excepto la actual
function showSection(sectionIndex) {
  fieldsets.forEach((fieldset, index) => {
    if (index === sectionIndex) {
      fieldset.style.display = 'block';
      sectionTitles[index].style.display = 'block';
    } else {
      fieldset.style.display = 'none';
      sectionTitles[index].style.display = 'none';
    }
  });
}

function onSubmit() {
  // Obtener los valores del formulario
  console.log("La función onSubmit se está ejecutando");
  var companyName = document.getElementById("company-name").value;
  var companyType = document.getElementById("company-type").value;
  var companyWebsite = document.getElementById("company-website").value;
  var businessModel = document.getElementById("business-model").value;
  var productsServices = document.getElementById("products-services").value;
  var targetMarket = document.getElementById("target-market").value;
  var competitors = document.getElementById("competitors").value;
  var competitiveAdvantage = document.getElementById("competitive-advantage").value;
  var advantage = document.getElementById("advantage").value;
  var siteColors = document.getElementById("site-colors").value;
  var siteDesign = document.getElementById("site-design").value;
  var siteFeatures = document.getElementById("site-features").value;
  var siteReference = document.getElementById("site-reference").value;
  var contactName = document.getElementById("contact-name").value;
  var contactEmail = document.getElementById("contact-email").value;
  var contactPhone = document.getElementById("contact-phone").value;
  var contactMessage = document.getElementById("contact-message").value;
  
  // Cargar la API de Google Sheets
  gapi.load('client', function() {
    gapi.client.init({
      apiKey: process.env.API_KEY,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
      // Configurar la hoja de cálculo y la fila de encabezado
      var spreadsheetId = process.env.SHEET_ID;
      var range = 'Sheet1!A1:P1';
      var values = [
        [ 'Nombre de la empresa', 'Tipo de empresa', 'Sitio web de la empresa', 'Modelo de negocio', 'Productos/Servicios', 'Mercado objetivo', 'Competidores', 'Ventaja competitiva', 'Ventaja', 'Colores del sitio', 'Diseño del sitio', 'Características del sitio', 'Referencia del sitio', 'Nombre de contacto', 'Correo electrónico de contacto', 'Teléfono de contacto', 'Mensaje de contacto' ]
      ];
      var body = {
        range: range,
        values: values
      };
      
      // Agregar los datos del formulario a la hoja de cálculo
      gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'USER_ENTERED',
        resource: body
      }).then((response) => {
        console.log(response.result);
      }, function(reason) {    }).then((response) => {
        console.log(response.result);
      }, function(reason) {
        console.error('Error: ' + reason.result.error.message);
      });
      
      // Enviar correo electrónico de confirmación
    Email.send({
      Host: "smtp.gmail.com",
      Username: process.env.EMAIL,
      Password: process.env.PASSWORD,
      To: contactEmail,
      From: process.env.EMAIL,
      Subject: "Confirmación de envío de formulario",
      Body: "Hola " + contactName + ",<br><br>Tu formulario ha sido enviado correctamente.<br><br>Gracias por contactarnos,<br> Lumonidy Studio"
    }).then(
      message => console.log(message)
    );
      
      // Redirigir al usuario a la página de confirmación
      window.location.href = "confirmation.html";
    }, function(reason) {
      console.error('Error: ' + reason.result.error.message);
    });
  });
}