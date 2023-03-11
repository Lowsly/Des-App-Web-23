function mostrarMay() {
    let num1 = parseInt(prompt("Por favor, ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa el segundo número: "));
    let num3 = parseInt(prompt("Ingresa el tercer número: "));
  
    let numeroMayor;
    
    if (num1 >= num2 && num1 >= num3) {
      numeroMayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
      numeroMayor = num2;
    } else {
      numeroMayor = num3;
    }
  
    document.write("El número mayor de los ingresados es: " + numeroMayor);
  }
  
  mostrarMay();
