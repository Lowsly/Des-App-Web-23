function conversion() {
    let fahren = prompt("Ingresa los grados Fahrenhit que desees convertir a celsius: ");
    let cels = (fahren - 32) * 5 / 9;

    alert("Conversión realizada con éxito.")
    document.write(fahren + " grados Fahrenheit equivalen a " + cels + " grados Celsius.");
  }
  conversion();