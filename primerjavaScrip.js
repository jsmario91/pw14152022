 function quitarsitec(){
  let quitar = confirm ("¿Seguro quitar sitec?")
  if(quitar == true) {
    alert("Se fue sitec");
  let arti = DOCUMENT.GETELEMENTBYID("SITEC")
  arti.innerHTML = "CHALE";
  console.log("rdno se se ve en la pagina, pero chale");
  }else{
    alert("Nose fue sitec")
  }
}

function darClick(){
alert("Le di click")

}

async function traerpersonas(){
 const respuesta = await fetch ("https://randomuser.me/api/");
//  console.log(respuesta);
  const datos = await respuesta.json ();
//  console.log(datos);  
console.log(datos.results[0].name.last); 

}