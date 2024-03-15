const json = [
  {
    "id": 1,
    "nombre_apellido": "Juan García",
    "dni": "12345678A",
    "fecha": "1990-05-15"
  },
  {
    "id": 2,
    "nombre_apellido": "María López",
    "dni": "98765432B",
    "fecha": "1988-09-20"
  },
  {
    "id": 3,
    "nombre_apellido": "Pedro Martínez",
    "dni": "54321678C",
    "fecha": "1978-03-10"
  },
  {
    "id": 4,
    "nombre_apellido": "Ana Sánchez",
    "dni": "87654321D",
    "fecha": "2000/11/25"
  }
];

const contenedor = document.getElementById("contenedor");
const tabla = crearTabla("tabla-padrones", json, "simple", true);
console.log(tabla)
cambiarCabecera(tabla, "nombre_apellido", "nombre y apelldio");
ocultarCabecera(tabla, "id");
ocultarCabecera(tabla, "nombre_apellido");
contenedor.append(tabla);
const boton = document.getElementById("boton");
boton.addEventListener("click", ()=> {
  const objFila = capturarFilas("tabla-padrones");
  console.log(objFila);
})
