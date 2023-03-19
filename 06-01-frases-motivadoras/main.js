/*GENERADOR DE FRASES*/
// Paso #1 Declaro mi arreglo de elementos con la información de las frases
const frases = [
    { frase: "El conocimiento es poder", autor: "Francis Bacon", imagen: "https://www.biografiasyvidas.com/biografia/b/imgs/francis_bacon.jpg" },
    { frase: "La peor lucha es la que no se hace", autor: "Karl Max", imagen: "https://www.biografiasyvidas.com/biografia/k/imgs/karl_marx.jpg" },
    { frase: "El que no arriesga no gana", autor: "Anónimo", imagen: "https://www.biografiasyvidas.com/biografia/a/imgs/anonimo.jpg" },
    { frase: " Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos", autor: "Confuncio", imagen: "https://www.biografiasyvidas.com/biografia/c/imgs/confucio.jpg" },
    { frase: "La vida es un viaje, no un destino", autor: "Ralph Waldo Emerson", imagen: "https://www.biografiasyvidas.com/biografia/r/imgs/ralph_waldo_emerson.jpg" },
    { frase: "Pocas veces pensamos en lo que tenemos; pero siempre en lo que nos falta", autor: "Schopenhauer", imagen: "https://www.biografiasyvidas.com/biografia/s/imgs/schopenhauer.jpg" },
    { frase: "Nuestra vida siempre expresa el resultado de nuestros pensamientos dominantes", autor: "Søren Kierkegaard", imagen: "https://www.biografiasyvidas.com/biografia/s/imgs/soren_kierkegaard.jpg" },
    { frase: "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace", autor: "Tolstoi", imagen: "https://www.biografiasyvidas.com/biografia/t/imgs/tolstoi.jpg" },
    { frase: "Hace falta una vida para aprender a vivir", autor: "Séneca", imagen: "https://www.biografiasyvidas.com/biografia/s/imgs/seneca.jpg" },
    { frase: " La vida es muy simple, pero insistimos en hacerla complicada", autor: "Confucio", imagen: "https://www.biografiasyvidas.com/biografia/c/imgs/confucio.jpg" },
    {frase: " Nadie debería creerse perfecto, ni preocuparse demasiado por el hecho de no serlo ", autor: "Bertrand Russell", imagen: "https://www.biografiasyvidas.com/biografia/b/imgs/bertrand_russell.jpg"},
  ];
  // Paso #2 Crear una función que me genere una frase de forma aleatoria
    function generaFrase() {
    // Calcular de forma aleatoria el indice para cada arreglo de frases
    const posicion = Math.floor(Math.random() * frases.length);
    // Hacemos que mi función devuelva la frase generada
    return frases[posicion];
    }
    // Paso #3 Crear una función que me muestre la frase en el HTML
    function colocaFrase() {
    const frase = generaFrase();
    document.getElementById("frase").innerHTML = frase.frase;
    document.getElementById("autor").innerHTML = frase.autor;
    document.getElementById("imagen").src = frase.imagen;
    }
    colocaFrase();