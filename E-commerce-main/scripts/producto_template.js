import {products1} from "../data/productos.js";
import {products2} from "../data/productos.js";
import {compra} from "../data/compra.js";

let product_img = document.querySelector(".main__product-img");
let product_info = document.querySelector(".main__product-info");
showProduct(products1);
showProduct(products2);

function showProduct(products){
  console.log(localStorage.getItem("IdLastImgPress"));
  
  products.forEach(element => {
    if(element["group"] + element["id"] == localStorage.getItem("IdLastImgPress")){
      product_img.innerHTML += generate_img_product(element["img"]);
      product_info.innerHTML += generate_info_product(element["name"], element["price"]);
      console.log(generate_info_product(element["name"], element["price"]));
    }
});
}

function generate_img_product(img){
  return ` <img src="${img}" alt="" class="main__product-img__item">`
}

function generate_info_product(name, price){
  return `
  <h1 class="main__product-info__title"> ${name} </h1>
  <h2 class="main__product-info__price"> ${price} </h2>
  <p class="main__product-info__description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptatibus blanditiis, sit quam dolore aliquid ex obcaecati nam veritatis fuga magni quo! At minus mollitia quo doloribus? Ut, dignissimos iure.
  </p>
  <div class="main__product-info__cesta">
    <div class="main__product-info__cesta__button">
      <input type="submit" id="main__product-info__cesta__button__add" value="Agregar al carrito">
      <input type="submit" id="main__product-info__cesta__button__res" value="Eliminar del carrito">
    </div>
    <div class="main__product-info__cesta__value-div">
      <input type=number" id="main__product-info__cesta__value-div__value" value="0" disabled>
    </div>
  </div>
  `
}


/* Listener para botones*/
let currValue = document.getElementById("main__product-info__cesta__value-div__value");
let buttonAdd = document.getElementById("main__product-info__cesta__button__add");
let buttonRes = document.getElementById("main__product-info__cesta__button__res");
currValue.value = compra[localStorage.getItem("IdLastImgPress")];
deshabilitar(buttonRes);

buttonAdd.addEventListener('click', ()=>{  
  // let currValue = document.getElementById("main__product-info__cesta__value-div__value");

  if(currValue.value <= 499) compra[localStorage.getItem("IdLastImgPress")] = ++currValue.value;
  if(currValue.value == 500) deshabilitar(buttonAdd);
  else habilitar(buttonRes);
  
  compra[localStorage.getItem("IdLastImgPress")] = 3;
  console.log(compra[localStorage.getItem("IdLastImgPress")]);
});

buttonRes.addEventListener('click', ()=>{
  // let currValue = document.getElementById("main__product-info__cesta__value-div__value");

  if(currValue.value >= 1) compra[localStorage.getItem("IdLastImgPress")] = --currValue.value;
  if(currValue.value == 0) deshabilitar(buttonRes);
  else habilitar(buttonAdd);

  console.log(compra[localStorage.getItem("IdLastImgPress")]);
});


function deshabilitar(button){
  button.style.opacity = .5;
  button.style.pointerEvents = "none";
}

function habilitar(button){
  button.style.opacity = 1;
  button.style.pointerEvents = "initial";
}