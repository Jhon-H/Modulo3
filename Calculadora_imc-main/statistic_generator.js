let div = document.getElementById("main-divS");
let object = JSON.parse(localStorage.getItem("userData"));
let array = [];

if(object){
  object.forEach(element => {
    array.push({
      y: element["Sexo"],
      IMC: element["IMC"]
    });
  });
  
  console.log(array);
  console.log(array.length);
  
  var data = object,

  config = {
    data: array,
    xkey: "y",
    ykeys: ['IMC'],
    labels: ['IMC'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors:['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors:['gray','red']
  };

  config.element = 'main-divS';
  config.stacked = true;
  Morris.Bar(config);
}
else{
  Swal.fire("Aún no hay datos :(");
}