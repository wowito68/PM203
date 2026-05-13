console.log("Hola mundo js desde el servidor");


console.time("mi proceso");
for (i = 0; i < 100000000; i++) {

}
console.timeEnd("mi proceso");

let usuarios = [
    { nombre: "Juan", edad: 25, },
    { nombre: "Pedro", edad: 26, },
    { nombre: "Maria", edad: 27, },
]

console.table(usuarios)