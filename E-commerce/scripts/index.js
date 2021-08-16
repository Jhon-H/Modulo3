"use strict";
localStorage.setItem("categorie", "man");
localStorage.setItem("compra", JSON.stringify({}));

let div_man = document.getElementById("man");
let div_women = document.getElementById("women");

div_man.addEventListener('click', () => {
  localStorage.setItem("categorie", "man");
  window.open("../html/menu.html", "_self");
});

div_women.addEventListener('click', () => {
  localStorage.setItem("categorie", "woman");
  window.open("../html/menu.html", "_self");
});