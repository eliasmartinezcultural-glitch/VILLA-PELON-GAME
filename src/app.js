const MISSIONS=[
{id:1,title:"CONOCER EL TERRITORIO",intro:"Antes de cambiar, hay que mirar.",theme:"territory",phrase:"¿Qué habrá acá?",objects:[
{id:"river",name:"RÍO NEUQUÉN",text:"El río está junto al territorio que vamos a conocer.",icon:"≈",kind:"river",reaction:"¿Y si seguimos el agua?"},
{id:"wind",name:"EL VIENTO",text:"El viento también forma parte de este paisaje.",icon:"〰",kind:"wind",reaction:"¡Escuchá cómo pasa!"},
{id:"chanar",name:"EL CHAÑAR",text:"El chañar es parte del nombre histórico del paraje.",icon:"✦",kind:"tree",reaction:"Mirá ese árbol."}]},
{id:2,title:"SEGUIR LAS HUELLAS",intro:"Mucho antes del pueblo, ya había historias.",theme:"tracks",phrase:"Hay huellas por acá.",objects:[
{id:"tratayen",name:"TRATAYEN",text:"Hacia 1913, una mensura registró la colonia Tratayen.",icon:"⌂",kind:"ruins",reaction:"¿Quiénes habrán vivido acá?"},
{id:"path",name:"EL CAMINO",text:"El territorio fue recorrido y trabajado mucho antes del pueblo actual.",icon:"↝",kind:"path",reaction:"Las historias dejan huellas."},
{id:"flood",name:"EL RÍO TAMBIÉN CAMBIA",text:"Las crecidas del Neuquén forman parte de la historia del lugar.",icon:"≈",kind:"flood",reaction:"La naturaleza también escribe."}]},
{id:3,title:"ENCONTRAR EL AGUA",intro:"La transformación empieza siguiendo el agua.",theme:"water",phrase:"¿Cómo llega el agua hasta la tierra?",objects:[
{id:"pump",name:"LAS BOMBAS",text:"En 1969 los primeros cultivos se regaron bombeando agua del río.",icon:"↥",kind:"pump",reaction:"¡El agua puede llegar más lejos!"},
{id:"canal",name:"EL CANAL",text:"Las obras de riego llevaron agua hacia las tierras productivas.",icon:"≈",kind:"canal",reaction:"Ahora el agua tiene un camino."},
{id:"intake",name:"LA BOCATOMA",text:"En 1971 una primera bocatoma permitió ampliar el riego.",icon:"▣",kind:"intake",reaction:"El paisaje empieza a cambiar."}]},
{id:4,title:"CAMBIAR LA TIERRA",intro:"Agua y trabajo convierten el paisaje.",theme:"farm",phrase:"Mirá lo que empieza a crecer.",objects:[
{id:"potato",name:"LAS PRIMERAS PAPAS",text:"Las primeras cosechas incluyeron papas en el área piloto.",icon:"●",kind:"potato",reaction:"¡La tierra respondió!"},
{id:"chacra",name:"LA CHACRA",text:"La tierra sistematizada empezó a organizarse para producir.",icon:"▦",kind:"farm",reaction:"Ahora aparecen nuevos colores."},
{id:"fruit",name:"LOS FRUTALES",text:"Con el tiempo, la fruticultura ocupó un lugar central.",icon:"●",kind:"orchard",reaction:"¡Hay frutos por todas partes!"}]},
{id:5,title:"ENCONTRAR A LAS PERSONAS",intro:"Donde hay trabajo, aparecen historias.",theme:"people",phrase:"¿Quiénes están haciendo todo esto?",objects:[
{id:"worker",name:"EL TRABAJO",text:"La producción necesitó personas, herramientas y organización.",icon:"✦",kind:"worker",reaction:"Nadie transforma un lugar solo."},
{id:"family",name:"LAS FAMILIAS",text:"Familias y trabajadores fueron dando vida al nuevo territorio productivo.",icon:"⌂",kind:"family",reaction:"Una casa es más que una casa."},
{id:"parcel",name:"LAS PARCELAS",text:"Las tierras productivas comenzaron a dividirse y ocuparse.",icon:"▦",kind:"parcel",reaction:"Cada parcela guarda una historia."}]},
{id:6,title:"CONSTRUIR COMUNIDAD",intro:"Una comunidad también se construye.",theme:"town",phrase:"Ahora hay lugares para encontrarse.",objects:[
{id:"school",name:"LA ESCUELA",text:"La Escuela Nº 273 comenzó a funcionar en 1975, según la cronología local.",icon:"▤",kind:"school",reaction:"Acá también se aprende juntos."},
{id:"club",name:"EL CLUB",text:"El Club Atlético San Patricio fue creado en 1976, según la cronología local.",icon:"◇",kind:"club",reaction:"Acá se juega y se comparte."},
{id:"town",name:"EL PUEBLO",text:"El 21 de mayo de 1973 se creó la Comisión de Fomento.",icon:"⌂",kind:"town",reaction:"Ya no es solo territorio: es comunidad."}]},
{id:7,title:"LLEGAR AL CHAÑAR DE HOY",intro:"La historia no termina: sigue creciendo.",theme:"today",phrase:"Ahora puedo mirar todo junto.",objects:[
{id:"orchards",name:"LOS FRUTALES",text:"La producción frutícola forma parte de la identidad productiva local.",icon:"●",kind:"orchard",reaction:"El trabajo dejó un paisaje."},
{id:"vineyard",name:"LOS VIÑEDOS",text:"La vitivinicultura llegó después, con experiencias de fines de los años 90.",icon:"●",kind:"vineyard",reaction:"La historia siguió cambiando."},
{id:"today",name:"VILLA PELÓN",text:"Un lugar se entiende mejor cuando recordamos todo lo que lo transformó.",icon:"✦",kind:"today",reaction:"Ahora entiendo un poquito más."}]}
];

const KEY="villa_pelon_v2";
const state=JSON.parse(localStorage.getItem(KEY)||'{"mission":0,"found":[],"sound":true}');
const $=s=>document.querySelector(s);
let activeObject=null;

function save(){localStorage.setItem(KEY,JSON.stringify(state));$("#continueBtn").classList.toggle("hidden",state.found.length===0&&state.mission===0);updateSound();}
function updateSound(){const x=state.sound?"🔊":"🔇";$("#soundBtn").textContent=x;$("#gameSoundBtn").textContent=x;}
function tone(freq=560,d=.08){if(!state.sound)return;try{const A=AudioContext||webkitAudioContext,c=new A(),o=c.createOscillator(),g=c.createGain();o.frequency.value=freq;o.connect(g);g.connect(c.destination);g.gain.value=.025;o.start();g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.stop(c.currentTime+d)}catch{}}
function mission(){return MISSIONS[state.mission]}
function missionFound(){return mission().objects.filter(o=>state.found.includes(mission().id+"-"+o.id)).length}
function updateDots(){let h="";MISSIONS.forEach((m,i)=>h+=`<span class="${i<state.mission?"done":i===state.mission?"current":"locked"}" title="Misión ${m.id}">${i<state.mission?"✓":i+1}</span>`);$("#missionDots").innerHTML=h}
function renderMission(){
 const m=mission();$("#missionNumber").textContent="MISIÓN "+m.id;$("#missionTitle").textContent=m.title;
 $("#world").className="world theme-"+m.theme;$("#sceneArt").innerHTML=art(m.theme);
 $("#objects").innerHTML=m.objects.map(o=>`<button class="discover object-${o.kind}" data-id="${o.id}" aria-label="Descubrir ${o.name}"><span>${o.icon}</span><b>${o.name}</b></button>`).join("");
 $("#luna").className="luna luna-"+m.theme;$("#speech").classList.add("hidden");$("#discovery").classList.add("hidden");$("#finish").classList.add("hidden");
 m.objects.forEach(o=>{const e=document.querySelector('[data-id="'+o.id+'"]');e.onclick=()=>discover(o.id);e.onkeydown=x=>{if(x.key==="Enter"||x.key===" ")discover(o.id)}});updateProgress();updateDots();save();
}
function art(theme){return '<i class="sky"></i><i class="sun"></i><i class="barda barda-a"></i><i class="barda barda-b"></i><i class="ground"></i><i class="far"></i>'}
function discover(id){
 const m=mission(),o=m.objects.find(x=>x.id===id);if(!o)return;
 activeObject=o;const k=m.id+"-"+o.id;if(!state.found.includes(k))state.found.push(k);
 $("#discoveryIcon").textContent=o.icon;$("#discoveryTitle").textContent=o.name;$("#discoveryText").textContent=o.text;$("#discovery").classList.remove("hidden");
 $("#speech").textContent=o.reaction;$("#speech").classList.remove("hidden");tone(600+missionFound()*70,.12);updateProgress();save();
 setTimeout(()=>$("#speech").classList.add("hidden"),2300);
}
function updateProgress(){const n=missionFound();$("#progressBar").style.width=(n/3*100)+"%";if(n===3)setTimeout(showFinish,350)}
function showFinish(){if(missionFound()!==3)return;const m=mission();$("#finishTitle").textContent=m.title;$("#finishText").textContent=m.intro;$("#finish").classList.remove("hidden");tone(760,.18)}
function next(){if(state.mission<MISSIONS.length-1){state.mission++;save();renderMission()}else{$("#finishTitle").textContent="HISTORIA COMPLETA";$("#finishText").textContent="Villa Pelón te enseñó a mirar un lugar de otra manera.";$("#nextBtn").textContent="VOLVER A RECORRER";$("#finish").classList.remove("hidden");$("#nextBtn").onclick=()=>{state.mission=0;save();renderMission()};}}
function openGame(){state.mission=Math.min(state.mission,6);$("#home").classList.add("hidden");$("#game").classList.remove("hidden");renderMission()}
$("#startBtn").onclick=()=>{state.mission=0;state.found=[];save();openGame()};$("#continueBtn").onclick=openGame;
$("#menuBtn").onclick=()=>{$("#game").classList.add("hidden");$("#home").classList.remove("hidden");save()};
$("#closeDiscovery").onclick=()=>$("#discovery").classList.add("hidden");
$("#nextBtn").onclick=next;
$("#soundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};$("#gameSoundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};
$("#resetBtn").onclick=()=>{if(confirm("¿Borrar todo el progreso?")){state.mission=0;state.found=[];save();renderMission()}};
updateSound();save();