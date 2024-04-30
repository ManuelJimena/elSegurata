// Cambiado a Ternario
const imagenFija = "./assets/qsifZzm.png";

function verificarEdad() {
  let currentYear = new Date().getFullYear(); //Añadir mes, getMonth????
  let yearInput = document.getElementById("year").value; 
  let age = currentYear - yearInput;

  let imageElement = document.getElementById("image");
  let messageElement = document.getElementById("message");

  /* if (yearInput === "") {
    imageElement.src = imagenFija;
    messageElement.textContent = "Debes introducir el año de nacimiento.";
  } else if (age >= 18) {
    imageElement.src = "https://i.imgur.com/GZnlct0.png";
    messageElement.textContent = "Adelante, puedes pasar.";
  } else {
    imageElement.src = "https://i.imgur.com/3YWpFBW.png";
    messageElement.textContent = "Lo siento, no puedes pasar.";
  } */

  imageElement.src = yearInput === ""
    ? imagenFija
    : age >= 18
      ? "./assets/GZnlct0.png"
      : "./assets/3YWpFBW.png";

  messageElement.textContent = yearInput === ""
    ? "Debes introducir el año de nacimiento."
    : age >= 18
      ? "Adelante, puedes pasar."
      : "Lo siento, no puedes pasar.";

  document.getElementById("result").style.display = "block";
  return false;
}

   /* Revisar como poner la imagen fija cuando no se han introducido
   caracteres en la caja y después, cambie según el resultado */
