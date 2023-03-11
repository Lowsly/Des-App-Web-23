function evaluateLetter() {

    let letra = prompt("Ingresa una letra");

    if (letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
        document.write("Ingresa una letra válida");
      }
    else if (letra.toUpperCase() === "A" || letra.toUpperCase()=== "E" || letra.toUpperCase()==="I" || letra.toUpperCase()==="O" ||letra.toUpperCase() === "U") {
        document.write("Has ingresado una vocal");
      } 
    else {
        document.write("Haz ingresado una consonante.");
      }

}
  evaluateLetter();
