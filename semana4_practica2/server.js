const express = require("express")

const app = express()
const puerto = 3000

app.use(express.text())
app.use(express.static("public"))

app.get("/api/campania", (req, res) => {
    res.send("Campaña: comunicación clara, convivencia digital y participación ciudadana.")
})

app.get("/api/avisos", (req, res) => {
    res.send("Aviso comunitario: Verifica la fuente,confirma la fecha y usa lenguaje respetuoso.")
})

app.post("/api/propuestas", (req, res) => {
    const propuesta = req.body

    console.log("Propuesta recibida desde el cliente web:")
    console.log(propuesta)

    res.send("Propuesta recibida por la plataforma comunitaria:" + propuesta)
})

app.use((req, res) => {
    res.status(404).send("Ruta no encontrada. Revisa la direcció solicitada.")
})

app.listen(puerto, () => {
    console.log(`Servidor express funcionando en http://localhost:${puerto}`)
    console.log(`Abre http://localhost:${puerto} en el navegador`)
})