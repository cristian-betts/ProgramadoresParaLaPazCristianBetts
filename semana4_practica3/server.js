const express = require("express")
const fs = require("fs")

const app = express()
const puerto = 3000

app.use(express.static("public"))

function leerArchivoJson(ruta) {
    const contenido = fs.readFileSync(ruta, "utf-8")
    return JSON.parse(contenido)
}

app.get("/api/avisos", (req, res) => {
    const avisos = leerArchivoJson("data/avisos.json")
    res.json(avisos)
})

app.get("/api/campanias", (req, res) => {
    const campanias = leerArchivoJson("data/campanias.json")
    res.json(campanias)
})

app.use((req, res) => {
    res.status(404).send("Ruta no encontrada. Revisa la dirección solicitada.")
})

app.listen(puerto, () => {
    console.log(`Servidor Express funcionando en http://localhost:${puerto}`)
    console.log("Rutas disponibles: ")
    console.log("GET /api/avisos")
    console.log("GET /api/campanias")
})