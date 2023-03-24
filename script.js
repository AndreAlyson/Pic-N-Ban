const team1 = "FalleN";
const team2 = "Trybe";
let turn = team1;

let mapPool = ["Train", "Mirage", "Cache", "Inferno", "Cobblestone"];


const turnText = document.querySelector("#turnText");

turnText.innerText = `É a vez da equipe ${turn} banir o mapa`; 

const maps = document.querySelectorAll(".card");


function chooseMap(event) {
  if(turn == team1) {
    turn = team2
  }else {
    turn = team1
  }
  turnText.innerText = `É a vez da equipe ${turn} banir o mapa`; 

  event.currentTarget.classList.add("selected");
  
  event.currentTarget.removeEventListener("click",chooseMap);
  
  event.currentTarget.querySelector(".accept").innerText = "Vetado";
  
  const clickedMap = event.currentTarget.querySelector(".map-name").innerText;
  
  mapPool = mapPool.filter(map => map != clickedMap);
  console.log(mapPool);
  
  if(mapPool.length==1) {
  const decidedMap = document.querySelector(".card:not(.selected)");
  decidedMap.classList.add("picked");
  decidedMap.removeEventListener("click",chooseMap);
  decidedMap.classList.add("disable-hover");
  turnText.innerText = `O mapa da partida será ${mapPool[0]}`
}

}


for(let index =0; index < maps.length; index++){
  maps[index].addEventListener("click", chooseMap);
}



