import {products1} from "../data/productos.js";
import {products2} from "../data/productos.js";

document.addEventListener('load', generator(products1));

let categoryA = document.querySelector(".main__categories__A");
let categoryB = document.querySelector(".main__categories__B");
categoryA.addEventListener('click', () =>{ generator(products1); });
categoryB.addEventListener('click', () =>{ generator(products2); });

function generator(products){
  let section_products = document.querySelector(".main__products-section__grid");
  section_products.innerHTML = "";
  products.forEach(element => {
    section_products.innerHTML += plantilla(element["name"], element["price"],
                                            element["img"], element["id"], element["group"]);
  });
}

function plantilla(name, price, url, id, group){
  let tmp = group  + id;

  return `
  <div class="producto">
    <a href="../html/producto_template.html">
    <img src="${url}" alt="" class="producto__img" onclick="saveId('${tmp}')">
    </a>
      
    <p class="producto__name"> ${name} </p>
    <p class="producto__price"> ${price} </p>
  </div>
  `
}