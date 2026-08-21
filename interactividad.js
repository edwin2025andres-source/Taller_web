console.log("Pizarrón cargado correctamente");

function mostrarBienvenida() {
  alert("Bienvenido a tu pizarrón: arrastra tus ideas de Plantear a Construir");
}

document.addEventListener("DOMContentLoaded", mostrarBienvenida);

function resaltarColumnaActiva() {
  console.log("Resaltando la columna donde estas trabajando");
}

let yaSeMostroBienvenida = false;
function mostrarBienvenidaUnaVez() {
  if (!yaSeMostroBienvenida) { mostrarBienvenida(); yaSeMostroBienvenida = true; }
}