"use strict";
let products = JSON.parse(localStorage.getItem("compra"));

class Carrito {
  constructor(){

  }

  agregarProducto(id){
    /* mirar que id me pasan, mirar cuanto tiene en el local storage
    y sumar*/

  }

  eliminarProducto(id){
    /* mirar que id me pasan, mirar cuanto tiene en el local storage
    y restar*/
  }

  vaciarCarrito(){
    /* eliminar localStorage */
  }

  sumaTotal(){
    /*por cada producto en comprar, total += valor * cantidad*/
  }

  listarProductos(){
    /*mostrar productso*/

  }



}