// libreria que son soporatdas por TSC

import {format, compareAsc} from "date-fns";

console.log(format(new Date(2000, 11, 10), "dd/MM/yyyy")); // se entiende los meses desde el N° 0

const fechas = [
    new Date(2000, 11, 22),
    new Date(2004, 3, 29),
    new Date(1994, 1, 28),
    new Date(2004,3,28),
    new Date(2010, 9, 30),
    new Date(1974, 5, 22),
]
fechas.sort(compareAsc);
console.log(fechas[0]);
console.log(fechas[1]);
console.log(fechas[2]);
console.log(fechas[3]);
console.log(fechas[4]);
console.log(fechas[5]);

