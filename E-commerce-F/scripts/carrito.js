"use strict";
import {products1} from "../data/products.js";
import {products2} from "../data/products.js";


class Carrito {
  constructor(){}

  agregarProducto(id){
    let compra = JSON.parse(localStorage.getItem("compra"));
    compra[id]++;
    localStorage.setItem("compra", JSON.stringify(compra)); 
    this.listarProductos();
  }

  eliminarProducto(id){
    let compra = JSON.parse(localStorage.getItem("compra"));
    // compra[id]--;
    if(!--compra[id]) delete compra[id];
    localStorage.setItem("compra", JSON.stringify(compra));
    this.listarProductos();
  }

  vaciarCarrito(){
    localStorage.removeItem("compra");
    localStorage.setItem("compra", JSON.stringify({}));
    this.listarProductos();
  }

  sumaTotal(){
    let compra = JSON.parse(localStorage.getItem("compra"));
    let ids = Object.keys(compra);
    let Total = 0;

    ids.forEach(id => {
      let productValue;

      if(id[0] == 'A') productValue = products1[Number(id[1]) - 1];
      else productValue = products2[Number(id[1]) - 1];
      Total += productValue * compra[id];
    });

    return Total;
  }

  listarProductos(){
    let compra = JSON.parse(localStorage.getItem("compra"));
  
    if(!compra || JSON.stringify(compra).length == 2){
      Swal.fire("Tu carrito está vacio :( ");
      this.resize();
    }
    else{ 
      let ids = Object.keys(compra);
      let div_info = document.getElementById("info-product");
      ids.forEach(id => {
        let product = (id[0] == 'A' ? products1[Number(id[1]) - 1] : products2[Number(id[1]) - 1]);
        div_info.innerHTML += this.template(product, compra[id]);
      });
    }
  }

  template(obj, cant){
    return  `
    <div id="car-product">
      <img src="${obj["img"]}" alt="" title="${obj["name"]}" id="car-img" />
      <div>
        <p id="car-cant"> ${cant} </p> 
        <p id="car-price"> ${obj["price"]} </p>
        <p id="subtotal">  ${obj["price"] * cant} </p>
        <div id="car-btns"> <p> ***ACA VAN BOTONES *** </p></div>
      </div>
    </div>`;
  }

  resize(){
    let info_product = document.getElementById("info-product");
    info_product.style.height = "60vh";
  }
}


let ObjetoCarrit = new Carrito();
ObjetoCarrit.listarProductos();