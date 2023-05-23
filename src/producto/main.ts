import { llenarData, productos } from "./producto.service";

llenarData({
  price: 12,
  name: "algo",
  stock: 12
})
console.log(productos[0]);

llenarData({
  price: 25,
  name: "papa",
  stock: 600
})
console.log(productos[1]);

console.log(productos[0]);
llenarData({
    price: 1000,
    name: "laptop",
    stock: 3
});
console.log(productos[2]);
