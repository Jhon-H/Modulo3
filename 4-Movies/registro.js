let btn = document.getElementById("btnEnviar");
btn.addEventListener('click', () =>{ f() });

function f(){
  let name = document.getElementById("inputNombre").value;
  let apell = document.getElementById("inputApellido").value;
  let tel = document.getElementById("inputTelefono").value;
  let direc = document.getElementById("inputDireccion").value;
  
  localStorage.setItem("dataUser", JSON.stringify({
    "nombre": name,
    "apellido": apell,
    "telefono": tel,  
    "direccion": direc
  }));
}