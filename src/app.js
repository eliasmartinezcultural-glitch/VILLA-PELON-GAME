const MISSIONS=[
{id:1,title:"CONOCER EL TERRITORIO",intro:"Antes de cambiar, hay que mirar.",theme:"territory",time:"MUCHO ANTES",phrase:"Primero… mirá.",story:"Luna llega a un paisaje abierto. Hay viento, bardas, un río y un árbol pequeño. Todavía no hay un pueblo como el que conocemos.",objects:[
{id:"river",name:"RÍO NEUQUÉN",text:"El río Neuquén es una de las claves de esta historia. El agua después ayudará a transformar la tierra.",icon:"≈",kind:"river",reaction:"El agua está cerca… sigámosla.",voice:"El río Neuquén. El agua será muy importante en esta historia."},
{id:"wind",name:"EL VIENTO",text:"El viento también forma parte del paisaje. Se siente, mueve las ramas y acompaña a Luna.",icon:"〰",kind:"wind",reaction:"Escuchá… el viento cuenta cosas.",voice:"El viento. Siempre está acá, aunque no lo veamos."},
{id:"chanar",name:"EL CHAÑAR",text:"El nombre Chañar se relaciona con este árbol, presente históricamente en la zona.",icon:"✦",kind:"tree",reaction:"Encontramos al árbol que da nombre al lugar.",voice:"El chañar. Un árbol que forma parte del nombre del lugar."}]},
{id:2,title:"SEGUIR LAS HUELLAS",intro:"Mucho antes del pueblo, ya había historias.",theme:"tracks",time:"HACE MUCHOS AÑOS",phrase:"Busquemos las huellas.",story:"Luna encuentra señales de un territorio que ya había sido recorrido. Algunas historias quedaron en mapas y mensuras; otras quedaron en la tierra.",objects:[
{id:"tratayen",name:"TRATAYEN",text:"Hacia 1913, una mensura registró una colonia llamada Tratayen, con un núcleo urbano que habría llegado a unas 20 manzanas.",icon:"⌂",kind:"ruins",reaction:"Acá hubo gente antes.",voice:"Tratayen. Hacia mil novecientos trece, una mensura registró esta colonia."},
{id:"path",name:"EL CAMINO",text:"Los caminos conectan lugares, personas y trabajos. La historia también se puede seguir caminando.",icon:"↝",kind:"path",reaction:"Las historias dejan huellas.",voice:"Un camino. Cada camino conecta una historia con otra."},
{id:"flood",name:"EL RÍO TAMBIÉN CAMBIA",text:"Según la historia municipal, una gran crecida del río habría hecho desaparecer la colonia Tratayen. Es un episodio que se presenta como hipótesis histórica.",icon:"≈",kind:"flood",reaction:"La naturaleza también escribe.",voice:"Una crecida del río. La historia municipal señala que pudo haber cambiado aquel lugar para siempre."}]},
{id:3,title:"ENCONTRAR EL AGUA",intro:"La transformación empieza siguiendo el agua.",theme:"water",time:"1969 → 1971",phrase:"¿Cómo llevamos el agua?",story:"Ahora aparece una idea enorme: llevar el agua del río hacia las tierras. En 1969 comenzaron obras de sistematización y los primeros cultivos se regaron bombeando agua del Neuquén.",objects:[
{id:"pump",name:"LAS BOMBAS",text:"En 1969 se regaron los primeros cultivos bombeando agua del río Neuquén. El agua empezó a viajar.",icon:"↥",kind:"pump",reaction:"¡El agua puede llegar más lejos!",voice:"Las bombas llevaron agua desde el río hasta los primeros cultivos."},
{id:"canal",name:"EL CANAL",text:"Los canales hicieron posible que el agua siguiera caminos preparados hacia las tierras productivas.",icon:"≈",kind:"canal",reaction:"Ahora el agua tiene un camino.",voice:"El canal. El agua deja de ir solamente por donde quiere: ahora tiene un camino."},
{id:"intake",name:"LA BOCATOMA",text:"En 1971 se construyó una primera bocatoma para ampliar el riego.",icon:"▣",kind:"intake",reaction:"La tierra empieza a cambiar.",voice:"La bocatoma. Un lugar donde el agua del río entra al sistema de riego."}]},
{id:4,title:"CAMBIAR LA TIERRA",intro:"Agua y trabajo convierten el paisaje.",theme:"farm",time:"1969 → 1970s",phrase:"¡Mirá lo que crece!",story:"Donde antes dominaba el monte, aparecen parcelas trabajadas. Las primeras cosechas incluyeron papas y después la fruticultura tomó un lugar central.",objects:[
{id:"potato",name:"LAS PRIMERAS PAPAS",text:"Las primeras cosechas del área piloto incluyeron distintas variedades de papa, según la historia municipal.",icon:"●",kind:"potato",reaction:"¡La tierra respondió!",voice:"Papas. Fueron parte de las primeras cosechas del área piloto."},
{id:"chacra",name:"LA CHACRA",text:"La tierra se sistematizó y se organizó en parcelas productivas. Nació un paisaje de chacras.",icon:"▦",kind:"farm",reaction:"El desierto empieza a tener otros colores.",voice:"Una chacra. Tierra, agua, trabajo y tiempo juntos."},
{id:"fruit",name:"LOS FRUTALES",text:"La producción frutícola se convirtió en una parte central de la transformación del territorio.",icon:"●",kind:"orchard",reaction:"¡Ahora aparecen frutos!",voice:"Los frutales. Con ellos cambió también el paisaje."}]},
{id:5,title:"ENCONTRAR A LAS PERSONAS",intro:"Donde hay trabajo, aparecen historias.",theme:"people",time:"AÑOS 70",phrase:"¿Quiénes están acá?",story:"El agua sola no alcanza. Hacen falta manos, familias, herramientas, casas, caminos y muchas decisiones pequeñas.",objects:[
{id:"worker",name:"EL TRABAJO",text:"La producción necesitó personas, herramientas, organización y esfuerzo cotidiano.",icon:"✦",kind:"worker",reaction:"Nadie transforma un lugar solo.",voice:"Personas trabajando. Un paisaje también se construye con manos."},
{id:"family",name:"LAS FAMILIAS",text:"Trabajadores y familias fueron dando vida al nuevo territorio productivo.",icon:"⌂",kind:"family",reaction:"Una casa es más que una casa.",voice:"Una familia. Un lugar empieza a ser hogar cuando hay personas que lo habitan."},
{id:"parcel",name:"LAS PARCELAS",text:"Las tierras productivas fueron parceladas y ocupadas por productores de la región.",icon:"▦",kind:"parcel",reaction:"Cada parcela guarda una historia.",voice:"Las parcelas. Cada una puede guardar años de trabajo."}]},
{id:6,title:"CONSTRUIR COMUNIDAD",intro:"Una comunidad también se construye.",theme:"town",time:"1973 → 1976",phrase:"Ahora hay lugares para encontrarse.",story:"El paisaje productivo necesita una comunidad. Aparecen instituciones, escuela, club y nuevas formas de encontrarse.",objects:[
{id:"town",name:"EL PUEBLO",text:"El 21 de mayo de 1973 se creó la Comisión de Fomento de San Patricio del Chañar.",icon:"⌂",kind:"town",reaction:"Ya no es solo territorio: es comunidad.",voice:"Veintiuno de mayo de mil novecientos setenta y tres. Nace la Comisión de Fomento."},
{id:"school",name:"LA ESCUELA",text:"La Escuela Nº 273 comenzó a funcionar en 1975, según la cronología local.",icon:"▤",kind:"school",reaction:"Acá también se aprende juntos.",voice:"La escuela. Un lugar para aprender juntos."},
{id:"club",name:"EL CLUB",text:"El Club Atlético San Patricio fue creado en 1976, según la cronología local.",icon:"◇",kind:"club",reaction:"Acá se juega y se comparte.",voice:"El club. Un lugar para jugar, encontrarse y hacer comunidad."}]},
{id:7,title:"LLEGAR AL CHAÑAR DE HOY",intro:"La historia no termina: sigue creciendo.",theme:"today",time:"AYER → HOY",phrase:"Ahora mirá todo junto.",story:"Luna mira hacia atrás. El río, el agua, las chacras, las personas y la comunidad quedaron unidos en una misma historia.",objects:[
{id:"orchards",name:"LOS FRUTALES",text:"La fruticultura forma parte de la identidad productiva que transformó el paisaje.",icon:"●",kind:"orchard",reaction:"El trabajo dejó un paisaje.",voice:"Los frutales. Una parte importante de la historia productiva."},
{id:"vineyard",name:"LOS VIÑEDOS",text:"La vitivinicultura llegó después. A fines de los años 90 comenzaron experiencias con vides en la zona.",icon:"●",kind:"vineyard",reaction:"La historia siguió cambiando.",voice:"Los viñedos. Otra etapa de una historia que siguió creciendo."},
{id:"today",name:"VILLA PELÓN",text:"Ahora podés mirar el recorrido completo: río, viento, agua, tierra, trabajo, familias y comunidad.",icon:"✦",kind:"today",reaction:"Ahora entiendo un poquito más.",voice:"Villa Pelón. Una historia de tierra y agua que todavía continúa."}]}
];

const KEY="villa_pelon_v3";
const state=Object.assign({mission:0,found:[],sound:true},JSON.parse(localStorage.getItem(KEY)||"{}"));
let activeObject=null, audio=null, voiceTimer=null;

const $=s=>document.querySelector(s);
function save(){localStorage.setItem(KEY,JSON.stringify(state));$("#continueBtn").classList.toggle("hidden",state.found.length===0&&state.mission===0);updateSound();}
function updateSound(){const x=state.sound?"🔊":"🔇";$("#soundBtn").textContent=x;$("#gameSoundBtn").textContent=x;}
function getAudio(){
 if(!state.sound)return null;
 try{
  if(!audio){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;audio=new A();}
  if(audio.state==="suspended")audio.resume();
  return audio;
 }catch{return null}
}
function tone(freq=560,d=.08,type="sine",gain=.035){
 const A=getAudio();if(!A)return;
 try{const o=A.createOscillator(),g=A.createGain();o.type=type;o.frequency.value=freq;o.connect(g);g.connect(A.destination);g.gain.setValueAtTime(.0001,A.currentTime);g.gain.exponentialRampToValueAtTime(gain,A.currentTime+.015);g.gain.exponentialRampToValueAtTime(.0001,A.currentTime+d);o.start();o.stop(A.currentTime+d+.02);}catch{}
}
function soundDiscovery(n){tone(420,.08,"sine",.035);setTimeout(()=>tone(560,.1,"sine",.035),70);if(n>=3)setTimeout(()=>tone(760,.2,"triangle",.05),150);}
function speak(text){
 if(!("speechSynthesis" in window)||!text)return;
 try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="es-AR";u.rate=.9;u.pitch=1.05;u.volume=1;speechSynthesis.speak(u);}catch{}
}
function introVoice(){speak("Bienvenido a Villa Pelón. Acompañá a Luna. Tocá lo que quieras explorar. Mirá, escuchá y descubrí la historia.");}
function mission(){return MISSIONS[state.mission]}
function missionFound(){return mission().objects.filter(o=>state.found.includes(mission().id+"-"+o.id)).length}
function updateDots(){let h="";MISSIONS.forEach((m,i)=>h+=`<span class="${i<state.mission?"done":i===state.mission?"current":"locked"}" title="Misión ${m.id}">${i<state.mission?"✓":i+1}</span>`);$("#missionDots").innerHTML=h}
function renderMission(){
 const m=mission();
 $("#missionNumber").textContent="MISIÓN "+m.id;
 $("#missionTitle").textContent=m.title;
 $("#timeBadge").textContent=m.time;
 $("#world").className="world theme-"+m.theme;
 $("#sceneArt").innerHTML=art(m.theme);
 $("#objects").innerHTML=m.objects.map(o=>`<button class="discover object-${o.kind} ${state.found.includes(m.id+"-"+o.id)?"found":""}" data-id="${o.id}" aria-label="Explorar ${o.name}"><span>${o.icon}</span><b>${o.name}</b><i>+</i></button>`).join("");
 $("#luna").className="luna luna-"+m.theme;
 $("#speech").classList.add("hidden");
 $("#discovery").classList.add("hidden");
 $("#finish").classList.add("hidden");
 $("#hint").classList.remove("hidden");
 $("#hint b").textContent=missionFound()?"TOCÁ OTRA COSA PARA SEGUIR":"TOCÁ ALGO PARA EXPLORAR";
 m.objects.forEach(o=>{
  const e=document.querySelector('[data-id="'+o.id+'"]');
  e.onclick=()=>discover(o.id);
 });
 updateProgress();updateDots();save();
 setTimeout(()=>{if(missionFound()===0){$("#speech").textContent=m.story;$("#speech").classList.remove("hidden");setTimeout(()=>$("#speech").classList.add("hidden"),4200)}},450);
}
function art(theme){
 const water=["water","farm","people","town","today"].includes(theme);
 const orchard=["farm","people","town","today"].includes(theme);
 const town=["town","today"].includes(theme);
 return `<i class="sky"></i><i class="sun"></i><i class="barda barda-a"></i><i class="barda barda-b"></i><i class="ground"></i><i class="far"></i>
 ${water?'<i class="scene-river"></i><i class="scene-canal"></i>':""}
 ${orchard?'<i class="scene-trees"></i>':""}
 ${town?'<i class="scene-houses"></i>':""}
 <i class="scene-wind"></i>`;
}
function moveLunaTo(btn){
 const luna=$("#luna"),world=$("#world").getBoundingClientRect(),r=btn.getBoundingClientRect();
 const x=Math.max(5,Math.min(80,((r.left+r.width/2-world.left)/world.width)*100-5));
 luna.style.left=x+"%";luna.classList.add("walking");setTimeout(()=>luna.classList.remove("walking"),620);
}
function discover(id){
 const m=mission(),o=m.objects.find(x=>x.id===id);if(!o)return;
 const btn=document.querySelector('[data-id="'+id+'"]');if(btn)moveLunaTo(btn);
 activeObject=o;
 const k=m.id+"-"+o.id;
 if(!state.found.includes(k))state.found.push(k);
 $("#hint").classList.add("hidden");
 $("#discoveryIcon").textContent=o.icon;
 $("#discoveryTitle").textContent=o.name;
 $("#discoveryText").textContent=o.text;
 $("#discovery").classList.remove("hidden");
 $("#speech").textContent=o.reaction;
 $("#speech").classList.remove("hidden");
 document.querySelectorAll(".discover").forEach(x=>x.classList.remove("selected"));
 if(btn)btn.classList.add("selected");
 soundDiscovery(missionFound());
 save();updateProgress();
 clearTimeout(voiceTimer);
 voiceTimer=setTimeout(()=>$("#speech").classList.add("hidden"),2600);
}
function updateProgress(){
 const n=missionFound();
 $("#progressBar").style.width=(n/3*100)+"%";
 if(n===3)setTimeout(showFinish,520);
}
function showFinish(){
 if(missionFound()!==3)return;
 const m=mission();
 $("#finishTitle").textContent=m.title;
 $("#finishText").textContent=m.intro;
 $("#finishFact").textContent=factFor(m.id);
 $("#finish").classList.remove("hidden");
 tone(660,.09,"triangle",.04);setTimeout(()=>tone(880,.22,"triangle",.045),100);
}
function factFor(id){
 const facts={
 1:"PISTA: El río será el hilo que une gran parte de esta aventura.",
 2:"PISTA: Una mensura de 1913 registró la colonia Tratayen.",
 3:"PISTA: En 1969 comenzaron las primeras obras de sistematización.",
 4:"PISTA: Las primeras cosechas incluyeron papas; después crecieron los frutales.",
 5:"PISTA: Un paisaje productivo también necesita personas y hogares.",
 6:"PISTA: La fecha oficial de fundación reconocida es el 21 de mayo de 1973.",
 7:"PISTA: La historia sigue: nuevas producciones cambiaron otra vez el paisaje."
 };
 return facts[id];
}
function next(){
 if(state.mission<MISSIONS.length-1){state.mission++;save();renderMission();}
 else{
  $("#finishTitle").textContent="HISTORIA COMPLETA";
  $("#finishText").textContent="Ahora podés volver a mirar Villa Pelón y reconocer el hilo que une agua, tierra, trabajo y comunidad.";
  $("#finishFact").textContent="DESAFÍO FINAL: ¿Podés recordar qué apareció primero: el agua, las chacras o el pueblo?";
  $("#nextBtn").textContent="↺ VOLVER A RECORRER";
  $("#finish").classList.remove("hidden");tone(520,.1);setTimeout(()=>tone(740,.25),110);
  $("#nextBtn").onclick=()=>{state.mission=0;state.found=[];save();renderMission();$("#nextBtn").onclick=next;};
 }
}
function openGame(){state.mission=Math.min(state.mission,6);$("#home").classList.add("hidden");$("#game").classList.remove("hidden");renderMission();tone(480,.08);}
$("#startBtn").onclick=()=>{state.mission=0;state.found=[];save();openGame();};
$("#continueBtn").onclick=openGame;
$("#menuBtn").onclick=()=>{$("#game").classList.add("hidden");$("#home").classList.remove("hidden");save();};
$("#closeDiscovery").onclick=()=>{$("#discovery").classList.add("hidden");$("#speech").classList.add("hidden");};
$("#listenDiscovery").onclick=()=>{if(activeObject)speak(activeObject.voice);tone(720,.06);};
$("#nextBtn").onclick=next;
$("#soundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07);};
$("#gameSoundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07);};
$("#voiceBtn").onclick=()=>introVoice();
$("#resetBtn").onclick=()=>{if(confirm("¿Borrar todo el progreso?")){state.mission=0;state.found=[];save();$("#game").classList.add("hidden");$("#home").classList.remove("hidden");}};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#game")&&!$("#game").classList.contains("hidden"))$("#menuBtn").click();});
updateSound();save();