const url = "https://dog.ceo/api/breeds/image/random";

const PruebaApi = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    // Obtener una referencia al div
    let imagenCont = document.getElementById("imagenCont");

    // Crear un nuevo elemento para la imagen
    let Imagen = document.createElement("img");

    imagenCont.innerHTML = '';

    Imagen.src = resultado.message;

    // Agregar la imagen al contenedor en el HTML
    imagenCont.appendChild(Imagen);
}

// Asignar evento al botón para llamar a la función PruebaApi al hacer clic
document.getElementById("obtenerPerroBtn").addEventListener("click", PruebaApi);

// Llamar a PruebaApi al cargar la página
PruebaApi();
