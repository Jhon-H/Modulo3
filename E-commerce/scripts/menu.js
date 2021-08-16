import {products1} from "../data/products.js";
import {products2} from "../data/products.js";
generate(localStorage.getItem("categorie"));


/* Variables globales */
let man = document.getElementById("man");
let women = document.getElementById("women");
localStorage
man.addEventListener('click', () =>{ generate("man");});
women.addEventListener('click', () =>{ generate("women");});


/* Funciones */
function generate(categorie){
  let products = (categorie == "man" ? products1 : products2);
  let main_products = document.getElementById("main-products");
  main_products.innerHTML = "";

  products.forEach( product =>{
    main_products.innerHTML += template(product);
  });
}

function template(product){
  return `
  <div id="product">
    <a href="../html/producto.html"><img src="${product['img']}" id="img"
    onclick="fun('${product["id"]}')" /></a>
    <div id="info">
      <p id="name"> ${product["name"]}  <span id="start"> ${product["stars"]} </span>
      <span id="price">  $ ${product["price"]} </span></p>
    </div>
  </div>
  `
}