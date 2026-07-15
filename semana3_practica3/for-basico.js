const comunidades = ["Barrio La Paz", "Comunidad Escolar", "Junta Juvenil"]

console.log("Recorrido de un array con un for tradicional")

//.lenght es para determinar la magnitud del vector 
for (let i = 0; i < comunidades.length; i = i + 1) {
  console.log("Posición:", i)
  console.log("Comunidad:", comunidades[i])
}

console.log("Recorrido con for finalizado")