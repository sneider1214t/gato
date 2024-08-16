const opcionesEdad = ["1 mes", "2 meses", "3 meses"];
const opcionesColorOjos = ["Verde", "Azul Cielo", "Marrón"];
const opcionesSexo = ["Macho", "Hembra", "Extraterrestre"];

const respuestaCorrecta = {
    edad: "2 meses",
    colorOjos: "Azul Cielo",
    sexo: "Macho"
};

function crearSeleccion(opciones, correcta, id, labelId) {
    const botones = opciones.map(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.addEventListener("click", () => {
            if (opcion === correcta) {
                document.getElementById(labelId).textContent = correcta; 
                document.getElementById(id).innerHTML = ""; 
            } else {
                alert("Incorrecto, intenta de nuevo.");
            }
        });
        return boton;
    });

    const contenedor = document.getElementById(id);
    contenedor.innerHTML = ""; 
    botones.forEach(boton => contenedor.appendChild(boton));
}

document.getElementById("edad-btn").addEventListener("click", () => {
    crearSeleccion(opcionesEdad, respuestaCorrecta.edad, "edad-btn", "edad-label");
});

document.getElementById("color-ojos-btn").addEventListener("click", () => {
    crearSeleccion(opcionesColorOjos, respuestaCorrecta.colorOjos, "color-ojos-btn", "color-ojos-label");
});

document.getElementById("sexo-btn").addEventListener("click", () => {
    crearSeleccion(opcionesSexo, respuestaCorrecta.sexo, "sexo-btn", "sexo-label");
});

document.getElementById("close-btn").addEventListener("click", () => {
    document.querySelector(".card").style.display = "none";
});
