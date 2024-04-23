// Arreglo de objetos con información de personas famosas para personas jóvenes
var personasFamosas = [
    {
        tipo: "artista",
        nombre: "Billie Eilish",
        profesion: "Cantante y compositora",
        exitos: ["Bad Guy", "Therefore I Am"]
    },
    {
        tipo: "deportista",
        nombre: "Simone Biles",
        deporte: "Gimnasia artística",
        logros: ["Medallas olímpicas", "Campeonatos mundiales"]
    },
    {
        tipo: "cantante",
        nombre: "Harry Styles",
        genero: "Pop",
        exitos: ["Watermelon Sugar", "Adore You"]
    },
    {
        tipo: "personaje",
        nombre: "Elon Musk",
        profesion: "Empresario e inventor",
        empresa: "SpaceX",
        logros: ["Fundador de Tesla", "Co-fundador de PayPal"]
    },
    {
        tipo: "artista",
        nombre: "Ariana Grande",
        profesion: "Cantante y actriz",
        exitos: ["Thank U, Next", "7 Rings"]
    },
    {
        tipo: "deportista",
        nombre: "Naomi Osaka",
        deporte: "Tenis",
        logros: ["Títulos de Grand Slam"]
    },
    {
        tipo: "cantante",
        nombre: "Shawn Mendes",
        genero: "Pop",
        exitos: ["Senorita", "Stitches"]
    },
    {
        tipo: "personaje",
        nombre: "Mark Zuckerberg",
        profesion: "Empresario",
        empresa: "Facebook",
        logros: ["Co-fundador de Facebook"]
    },
    {
        tipo: "artista",
        nombre: "BTS",
        profesion: "Grupo musical",
        exitos: ["Dynamite", "Boy With Luv"]
    },
    {
        tipo: "deportista",
        nombre: "Alex Morgan",
        deporte: "Fútbol",
        logros: ["Campeona del mundo", "Medallas olímpicas"]
    }
];

// Función para generar dinámicamente las filas de la tabla
function generarFilasTabla() {
    var tablaHTML = "";
    personasFamosas.forEach(function(persona) {
        tablaHTML += "<tr>";
        tablaHTML += "<td>" + persona.nombre + "</td>";
        tablaHTML += "<td>" + persona.tipo + "</td>";
        tablaHTML += "<td>";
        if (persona.profesion) {
            tablaHTML += "Profesión: " + persona.profesion + "<br>";
        }
        if (persona.deporte) {
            tablaHTML += "Deporte: " + persona.deporte + "<br>";
        }
        if (persona.genero) {
            tablaHTML += "Género musical: " + persona.genero + "<br>";
        }
        if (persona.exitos) {
            tablaHTML += "Éxitos:<br>";
            persona.exitos.forEach(function(exito) {
                tablaHTML += "- " + exito + "<br>";
            });
        }
        if (persona.empresa) {
            tablaHTML += "Empresa: " + persona.empresa + "<br>";
        }
        if (persona.logros) {
            tablaHTML += "Logros:<br>";
            persona.logros.forEach(function(logro) {
                tablaHTML += "- " + logro + "<br>";
            });
        }
        tablaHTML += "</td>";
        tablaHTML += "</tr>";
    });
    document.getElementById("tabla-personas").innerHTML = tablaHTML;
}

// Llamar a la función para generar las filas de la tabla
generarFilasTabla();
