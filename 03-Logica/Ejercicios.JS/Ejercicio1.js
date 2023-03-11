function verTarea() {
    let tarea = prompt("¿Hiciste la tarea?");
  
    if (tarea.toLowerCase() === "si") {
      document.write("¡Bien hecho!");
    } 
    else if (tarea.toLowerCase() === "no") {
      document.write("No te rindas, ¡empieza ya mismo!");
    } 
    else {
    }
    document.write("Por favor, ingresa un valor válido >>'si' o 'no'<<");
  }
  verTarea();
  
