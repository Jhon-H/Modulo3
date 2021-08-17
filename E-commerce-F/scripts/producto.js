"use strict";

import {products1} from "../data/products.js";
import {products2} from "../data/products.js";

gen_product();

function gen_product(){
  let id = localStorage.getItem("id");
  let img = document.getElementById("product-img");
  let info = document.getElementById("product-info");
  let products = (id[0]== "A" ? products1 : products2);
  let product_data = products[Number(id[1])-1];
  console.log(product_data);

  img.style.background = "url('../img/default.jpg')";
  info.innerHTML = template(product_data);
}

function template(data){
  return `
    <h2 id="p-title"> ${data["name"]} </h2>
    <p id="p-stars"> ${data["stars"]} <p>

    <p id="p-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus blanditiis, sit quam dolore aliquid ex obcaecati nam veritatis fuga magni quo! At minus mollitia quo doloribus? Ut, dignissimos iure.</p>
    <div id="p-cesta">
      <div id="p-value-div">
        <input type="text" id="p-value" value="0" disabled>
      </div>
      <div id="p-button-div">
        <input type="submit" id="p-button-add" value="Agregar al carrito">
        <input type="submit" id="p-button-res" value="Eliminar del carrito">
      </div>
    </div>`
}

/* Listen button */
let btn_add = document.getElementById("p-button-add");
let btn_res = document.getElementById("p-button-res");
let compra = JSON.parse(localStorage.getItem("compra"));
let currValue = document.getElementById("p-value");

function change_value(val, btn1, btn2){
  if(val){
    compra[localStorage.getItem("id")] = ++currValue.value;
    if(currValue.value == 10) desactive(btn1);
    if(currValue.value == 1) active(btn2);
  }else{
    compra[localStorage.getItem("id")] = --currValue.value;
    if(currValue.value == 0){
      delete compra[localStorage.getItem("id")];
      desactive(btn1);
    }
    if(currValue.value == 9) active(btn2);
  }

  localStorage.setItem("compra", JSON.stringify(compra));
}

function desactive(btn){
  btn.style.opacity = .5;
  btn.style.pointerEvents = "none";
}

function active(btn){
  btn.style.opacity = 1;
  btn.style.pointerEvents = "initial";
}


if(!compra[localStorage.getItem("id")]) compra[localStorage.getItem("id")] = 0;
if(!compra[localStorage.getItem("id")]) desactive(btn_res);

currValue.value = compra[localStorage.getItem("id")];
btn_add.addEventListener('click', () => { change_value(1, btn_add, btn_res)});
btn_res.addEventListener('click', () => { change_value(0, btn_res, btn_add)});
