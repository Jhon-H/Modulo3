const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const peliculas = document.querySelector('#templatePelis').content;
const items = document.querySelector('#items');
const fragmento = document.createDocumentFragment();

const tomaPelis = (url) => {

    const peticion = fetch(url)
    peticion.then(res=> res.json()) 
            .then(data => muestraPelis(data.results))
}

tomaPelis(API_URL)

function muestraPelis(data) {

    data.forEach((datos) =>{
        const{title, poster_path, id,vote_average, overview} = datos
        peliculas.querySelector('h5').textContent = title;
        peliculas.querySelector('img').setAttribute('src', `${IMG_PATH+poster_path}`);
        peliculas.querySelector('p').textContent = vote_average;
        peliculas.querySelector('#boton').dataset.id = id;
        peliculas.querySelector('#boton').dataset.img = poster_path;
        peliculas.querySelector('#boton').dataset.title = title;
        peliculas.querySelector('#boton').dataset.overview = overview;

         if(vote_average>=1 && vote_average<=4 ){
            peliculas.querySelector('p').setAttribute('class', `text-danger`)
        }else if(vote_average>4 && vote_average<7){
            peliculas.querySelector('p').setAttribute('class', `text-warning`)
        }else{
            peliculas.querySelector('p').setAttribute('class', `text-success`)
        }

        const clone = peliculas.cloneNode(true);
        fragmento.appendChild(clone);  
        console.log(datos);
    });
    items.appendChild(fragmento);
}


/* --------------------------- butto +info --------------------------- */

items.addEventListener('click', e => {
  if(e.target.classList.contains('btn-press')){
    putData(e.target.dataset);
  }
});

function putData(e){
  localStorage.setItem("currInfo", JSON.stringify({
    "id": e.id,
    "title": e.title,
    "img": e.img,
    "over": e.overview
  }));
}