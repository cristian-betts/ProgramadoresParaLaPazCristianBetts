const fs = require("fs")

const archivoAvisos = fs.readFileSync("data/avisos.json", "utf-8")
const avisos = JSON.parse(archivoAvisos)

console.log("Lectura del archivo JSON")
console.log("Cantidad de archivos encontrados:", avisos.length)

for (const aviso of avisos) {
    console.log("Título:", aviso.titulo)
    console.log("Mensaje:", aviso.mensaje)
    console.log("Categoría:", aviso.categoria)
    console.log("---")
}