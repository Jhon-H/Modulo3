"use strict";
import {products1} from "../data/products.js";
import {products2} from "../data/products.js";

let btn = document.getElementById("sumbit");
btn.addEventListener('click', ()=>{
  // event.preventDefault();
  mensaje();
  
});

function mensaje(){
  let values = [document.getElementById("f-name"), 
                document.getElementById("f-email"),
                document.getElementById("f-tajeta"),
                document.getElementById("f-venc"),
                document.getElementById("f-cvv")];
  let valid = 0;

  values.forEach(obj =>{ valid += (obj.checkValidity()) });
  if(valid != 5) return;
  
  let compra = JSON.parse(localStorage.getItem("compra"));
  if(!compra || JSON.stringify(compra).length == 2){
    // Swal.fire("Tu compra está vacía");
    alert("----------------------------------------------------------------\n" +
          ">>>>>>>>> Tu compra está vacía <<<<<<<<\n" +
           "----------------------------------------------------------------")
  }
  else{
    // Swal.fire("Compras 1000% dolares");
    alert(template(compra));
    localStorage.clear();
  }
}


function template(compra){
  let ids = Object.keys(compra);
  let total = 0;
  let div = "--------------VENTA------------------\n\n";

  ids.forEach(id => {
    let product = (id[0] == 'A' ? products1 :products2);
    let pr = product[Number([id[1]])-1];
  
    div += 
    `Producto: ${id} \n` +
    `Cantidad: ${compra[id]} \n` +
    `Valor U: ${pr["price"]} \n` +
    `SubTotal: ${pr["price"] * compra[id]} \n\n`;

    total += pr["price"] * compra[id];
  });
  div += "\n\n Total " + total + "\n\n--------------------------------";

  return div;
}





