function verificarEdad() {
    let currentYear = new Date().getFullYear();
    let yearInput = document.getElementById("year").value;
    let age = currentYear - yearInput;
  
    let imageElement = document.getElementById("image");
    let messageElement = document.getElementById("message");
  
    if (yearInput === "") {
      imageElement.src = "https://i.imgur.com/qsifZzm.png";
      messageElement.textContent = "Debes introducir el año de nacimiento."; // No funciona
    } else if (age >= 18) {
      imageElement.src = "https://i.imgur.com/GZnlct0.png";
      messageElement.textContent = "Adelante, puedes pasar.";
    } else {
      imageElement.src = "https://i.imgur.com/3YWpFBW.png";
      messageElement.textContent = "Lo siento, no puedes pasar.";
    }
  
    document.getElementById("result").style.display = "block";
    return false;
  }