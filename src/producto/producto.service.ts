import { Data, Sizes, Product } from './producto.model';

export let user: Data[] = [];
export let productos: Product[] = [];
export let contador: number = 0;

export function llenarData(producto: Product):void{
  contador += producto.stock
  productos.push(producto);
}


