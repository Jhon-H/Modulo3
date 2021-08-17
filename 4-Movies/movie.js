const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const div  = document.getElementById("i-movie");
const template = document.getElementById("i-template").content;

function addInfo(){
  let dataMovie = JSON.parse(localStorage.getItem("currInfo"));
  template.querySelector("img").setAttribute("src",
    `${IMG_PATH + dataMovie["img"]}`);
  
  template.querySelector("h2").textContent = dataMovie["title"];
  template.querySelector("p").textContent = dataMovie["over"];
  div.appendChild(template);
}

addInfo();
