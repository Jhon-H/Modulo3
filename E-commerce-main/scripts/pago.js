import {products1} from "../data/productos.js";
import {products2} from "../data/productos.js";
import {compra} from "../data/compra.js";
import {users} from "../data/users.js";

let button = document.querySelector("#main__form__div-button__button");
button.addEventListener('click', ()=>{
  // if(! validar()) return false;
  
  let userObject = {};
  userObject["Nombre"] = document.getElementById("main__form__data__name").value;
  userObject["Email"] = document.getElementById("main__form__data__email").value;
  userObject["Card"] = document.getElementById("main__form__data__no-card").value;
  userObject["Fecha"] = document.getElementById("main__form__data__ot__date").value;
  userObject["Cvv"] = document.getElementById("main__form__data__ot__cvv").value;
  guardaCompra(products1);
  guardaCompra(products2);

  function guardaCompra(product){
    product.forEach(element => {
      if(compra[element["group"] + element["id"]] != 0){
        userObject["product " + element["group"] + element["id"]] = {
          "Nombre": element["name"],
          "Precio": element["price"],
          "Cantidad": compra["id"],
          "Subtotal": compra["id"] * element["price"]
        };
      }
    });
  }

  users.push(userObject);

});