var tarea = prompt("¿Hiciste la tarea?"); // si, no

	if(tarea=="Si"|| tarea=='si'){
		document.write("¡Bien hecho!");
	}else if(tarea=="No" || tarea=='no'){
		document.write("No te rindas, ¡empieza ya mismo!");
	}
    else{
    document.write("Por favor, ingresa un valor válido, responde si o no");
}