const btnAvisos = document.getElementById("btnAvisos")
const btnCampanias = document.getElementById("btnCampanias")

const contenedorAvisos = document.getElementById("contenedorAvisos")
const contenedorCampanias = document.getElementById("contenedorCampanias")

btnAvisos.addEventListener("click", async () => {
    const respuesta = await fetch("/api/avisos")
    const avisos = await respuesta.json()

    contenedorAvisos.innerHTML = ""

    for (const aviso of avisos) {
        const bloque = document.createElement("div")

        bloque.innerHTML = `
            <h3>${aviso.titulo}</h3>
            <p>${aviso.mensaje}</p>
            <p>Categoría: ${aviso.categoria}
        `

        contenedorAvisos.appendChild(bloque)
    }
})

btnCampanias.addEventListener("click", async () => {
    const respuesta = await fetch("/api/campanias")
    const campanias = await respuesta.json()

    contenedorCampanias.innerHTML = ""

    for (const campania of campanias) {
        const bloque = document.createElement("div")

        bloque.innerHTML = `
            <h3>${campania.nombre}</h3>
            <p>Objetiv: ${campania.objetivo}</p>
            <p>Público: ${campania.publico}</p>
        `

        contenedorCampanias.appendChild(bloque)
    }
})