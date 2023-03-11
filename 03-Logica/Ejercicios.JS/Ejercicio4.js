function evaluateLetter() {

    let letra = prompt("Ingrese alguna letra del abecedario, por favor: ");

    if (letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
        document.write("Por favor, ingrese una letra válida");
      }
    else if (letra.toUpperCase() === "A" || letra.toUpperCase()=== "E" || letra.toUpperCase()==="I" || letra.toUpperCase()==="O" ||letra.toUpperCase() === "U") {
        document.write("Has ingresado una vocal");
      } 
    else {
        document.write("Has ingresado una consonante.");
      }

}
  evaluateLetter();
