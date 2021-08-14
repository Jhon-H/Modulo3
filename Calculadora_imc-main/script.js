/* Variables Globales */
let m_tumbnail = document.getElementById("m_tumbnail");
let w_tumbnail = document.getElementById("w_tumbnail");
let res = document.getElementById("res");
let button = document.getElementById("btn");
let sex = "";

/* Eventos */
m_tumbnail.addEventListener('click', () =>{ sex = "man" });
w_tumbnail.addEventListener('click', () =>{ sex = "woman" });
button.addEventListener('click', ()=>{ calculate() });


/* Funciones */
const validar = (weigth, age, heigth) => {
  return (isNaN(Number(weigth)) || isNaN(Number(age)) || isNaN(Number(heigth))
          || weigth <= 0 || age <= 0 || heigth <= 0 || sex == "");
}

const calculate = () =>{
  let weigth = document.getElementById("inputPeso").value;
  let age = document.getElementById("inputEdad").value;
  let heigth = document.getElementById("inputAltura").value;

  if(validar(weigth, age, heigth)){
    Swal.fire("Por favor, revisa tus datos");
  }
  else{
    let value = (weigth / Math.pow(heigth/100, 2)).toFixed(4);
    let util_style1 = "style='display:inline-block;'";    
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
 
    if(userData.length == 15) userData.shift();
    userData.push({
      "Sexo": sex,
      "Edad": age,
      "Peso": weigth,
      "Altura": heigth,
      "IMC": value
    });
    
    localStorage.setItem("userData", JSON.stringify(userData));
    

    res.style.backgroundColor = nivel(value);
    res.innerHTML = `
    <h2> Resultado </h2>
    <p> ${value} </p>
    <div id="barra"> </div>
    <hr>
    <div class="mb-3" id="table">
      <i class="fas fa-weight" style="color:royalblue;"></i><p ${util_style1}> Bajo peso</p><br>
      <i class="fas fa-weight" style="color:seagreen;"></i><p ${util_style1}> Saludable</p><br>
      <i class="fas fa-weight" style="color:gold;"></i><p ${util_style1}> Exceso de peso</p><br>
      <i class="fas fa-weight" style="color:tomato;"></i><p ${util_style1}> Obeso</p><br>
      <i class="fas fa-weight" style="color:blueviolet;"></i><p ${util_style1}>Obeso Extremo</p><br>
    </div>
    `
  }
  sex = "";
}

const nivel = (value) =>{
  if(value < 18.5) return "rgba(65, 105, 225, .6)";
  else if(value < 24.9) return "rgba(46, 139, 87, .6)";
  else if(value < 29.9) return "rgba(255, 215, 0, .6)";
  else if(value < 39.9) return "rgba(255, 99, 71, .6)";
  else return "rgba(138, 43, 226, .6)";
}