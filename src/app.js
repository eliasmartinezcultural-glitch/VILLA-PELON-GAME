const MISSIONS = [
  {id:1,title:"CONOCER EL TERRITORIO",intro:"Luna conoce el lugar antes de que exista el pueblo que hoy conocemos.",theme:"territory",time:"MUCHO ANTES",story:"Primero hay que mirar: río, viento y chañar. Todo lo que vendrá nace de este territorio.",bridge:"El río queda atrás, pero su agua será la pista para seguir.",objects:[
    {id:"river",name:"RÍO NEUQUÉN",text:"El río Neuquén será una de las claves de esta historia: más adelante, su agua ayudará a transformar la tierra.",icon:"≈",kind:"river",reaction:"El agua va a ser nuestra gran pista.",voice:"El río Neuquén. Su agua será muy importante en esta historia."},
    {id:"wind",name:"EL VIENTO",text:"El viento forma parte del paisaje y acompaña a Luna mientras recorre el territorio.",icon:"〰",kind:"wind",reaction:"Escuchá el viento. Estamos en casa.",voice:"El viento también cuenta dónde estamos."},
    {id:"chanar",name:"EL CHAÑAR",text:"El nombre Chañar se relaciona con este árbol, presente históricamente en la zona.",icon:"✦",kind:"tree",reaction:"Encontramos al árbol del nombre.",voice:"El chañar. Un árbol que forma parte del nombre del lugar."}
  ]},
  {id:2,title:"SEGUIR LAS HUELLAS",intro:"El territorio ya tenía historias antes del pueblo actual.",theme:"tracks",time:"HACE MUCHOS AÑOS",story:"Luna sigue señales: una mensura, un camino y una historia de cambios del río. El lugar no empezó de cero.",bridge:"Ahora sabemos que hubo huellas. Para seguirlas, necesitamos encontrar cómo el agua llegó a la tierra.",objects:[
    {id:"tratayen",name:"TRATAYEN",text:"Hacia 1913, una mensura registró una colonia llamada Tratayen, con un núcleo urbano que habría llegado a unas 20 manzanas.",icon:"⌂",kind:"ruins",reaction:"Acá hubo una historia antes.",voice:"Tratayen. Hacia mil novecientos trece, una mensura registró esta colonia."},
    {id:"path",name:"EL CAMINO",text:"Los caminos conectan lugares, personas y trabajos. Luna puede seguir la historia como si siguiera un camino.",icon:"↝",kind:"path",reaction:"Las historias también dejan caminos.",voice:"Un camino conecta una historia con otra."},
    {id:"flood",name:"EL RÍO CAMBIA",text:"La historia municipal señala que una gran crecida pudo haber hecho desaparecer aquella colonia. Se presenta como una hipótesis histórica.",icon:"≈",kind:"flood",reaction:"La naturaleza también cambia los lugares.",voice:"Una crecida del río pudo haber cambiado aquel lugar para siempre."}
  ]},
  {id:3,title:"ENCONTRAR EL AGUA",intro:"La gran transformación comienza cuando el agua puede viajar hasta la tierra.",theme:"water",time:"1969 → 1971",story:"Luna descubre bombas, canales y una bocatoma. El río ya no queda lejos de las tierras: el agua empieza a tener un camino.",bridge:"El agua llegó. Ahora podemos mirar qué ocurre cuando una tierra recibe agua y trabajo.",objects:[
    {id:"pump",name:"LAS BOMBAS",text:"En 1969 se regaron los primeros cultivos bombeando agua del río Neuquén. El agua empezó a viajar.",icon:"↥",kind:"pump",reaction:"¡El agua puede llegar más lejos!",voice:"Las bombas llevaron agua desde el río hasta los primeros cultivos."},
    {id:"canal",name:"EL CANAL",text:"Los canales permitieron conducir el agua por caminos preparados hacia las tierras productivas.",icon:"≈",kind:"canal",reaction:"Ahora el agua tiene un camino.",voice:"El canal. Ahora el agua tiene un camino preparado."},
    {id:"intake",name:"LA BOCATOMA",text:"En 1971 se construyó una primera bocatoma para ampliar el sistema de riego.",icon:"▣",kind:"intake",reaction:"La tierra está lista para cambiar.",voice:"La bocatoma. Por aquí el agua del río entra al sistema de riego."}
  ]},
  {id:4,title:"CAMBIAR LA TIERRA",intro:"Cuando llegan agua y trabajo, el paisaje empieza a transformarse.",theme:"farm",time:"1969 → 1970s",story:"Aparecen parcelas trabajadas. Primero hubo cultivos como la papa y después los frutales ocuparon un lugar central.",bridge:"La tierra cambió. Pero una chacra necesita algo más que agua: necesita personas.",objects:[
    {id:"potato",name:"LAS PRIMERAS PAPAS",text:"Las primeras cosechas del área piloto incluyeron distintas variedades de papa, según la historia municipal.",icon:"●",kind:"potato",reaction:"¡La tierra respondió!",voice:"Las papas fueron parte de las primeras cosechas del área piloto."},
    {id:"chacra",name:"LA CHACRA",text:"La tierra fue sistematizada y organizada en parcelas productivas. Apareció un paisaje de chacras.",icon:"▦",kind:"farm",reaction:"El paisaje está cambiando.",voice:"Una chacra reúne tierra, agua, trabajo y tiempo."},
    {id:"fruit",name:"LOS FRUTALES",text:"La producción frutícola se convirtió en una parte central de la transformación del territorio.",icon:"●",kind:"orchard",reaction:"¡Mirá cómo aparece otro paisaje!",voice:"Los frutales cambiaron también el paisaje."}
  ]},
  {id:5,title:"ENCONTRAR A LAS PERSONAS",intro:"La transformación del territorio también es una historia de familias y trabajo.",theme:"people",time:"AÑOS 70",story:"Luna descubre que el paisaje no se construye solo. Hay manos, familias, parcelas, casas y decisiones cotidianas.",bridge:"Ya hay personas viviendo y trabajando. Ahora necesitan lugares para encontrarse y construir comunidad.",objects:[
    {id:"worker",name:"EL TRABAJO",text:"La producción necesitó personas, herramientas, organización y esfuerzo cotidiano.",icon:"✦",kind:"worker",reaction:"Nadie transforma un lugar solo.",voice:"Personas trabajando. Un paisaje también se construye con manos."},
    {id:"family",name:"LAS FAMILIAS",text:"Trabajadores y familias fueron dando vida al nuevo territorio productivo.",icon:"⌂",kind:"family",reaction:"Una casa también es una historia.",voice:"Una familia convierte un lugar en hogar."},
    {id:"parcel",name:"LAS PARCELAS",text:"Las tierras productivas fueron parceladas y ocupadas por productores de la región.",icon:"▦",kind:"parcel",reaction:"Cada parcela guarda años de trabajo.",voice:"Las parcelas guardan historias de trabajo."}
  ]},
  {id:6,title:"CONSTRUIR COMUNIDAD",intro:"Cuando las personas se quedan, aparecen lugares para aprender, jugar y encontrarse.",theme:"town",time:"1973 → 1976",story:"El territorio productivo se convierte también en comunidad: pueblo, escuela y club. La historia empieza a tener lugares cotidianos.",bridge:"La comunidad ya tiene memoria propia. Ahora Luna puede mirar cómo ese camino llega hasta el presente.",objects:[
    {id:"town",name:"EL PUEBLO",text:"El 21 de mayo de 1973 se creó la Comisión de Fomento de San Patricio del Chañar.",icon:"⌂",kind:"town",reaction:"Ya no es solo territorio: es comunidad.",voice:"Veintiuno de mayo de mil novecientos setenta y tres. Nace la Comisión de Fomento."},
    {id:"school",name:"LA ESCUELA",text:"La Escuela Nº 273 comenzó a funcionar en 1975, según la cronología local.",icon:"▤",kind:"school",reaction:"Acá también se construye futuro.",voice:"La escuela. Un lugar para aprender juntos."},
    {id:"club",name:"EL CLUB",text:"El Club Atlético San Patricio fue creado en 1976, según la cronología local.",icon:"◇",kind:"club",reaction:"Acá se juega, se comparte y se hace comunidad.",voice:"El club. Un lugar para jugar, encontrarse y hacer comunidad."}
  ]},
  {id:7,title:"LLEGAR AL CHAÑAR DE HOY",intro:"Luna conecta todas las pistas y llega al presente.",theme:"today",time:"AYER → HOY",story:"Río, agua, tierra, chacras, trabajo, familias y comunidad forman una sola historia. El paisaje actual es resultado de ese recorrido.",bridge:"La aventura termina, pero la historia no. Ahora el lugar también te pertenece para seguir mirándolo.",objects:[
    {id:"orchards",name:"LOS FRUTALES",text:"La fruticultura forma parte de la identidad productiva que transformó el paisaje.",icon:"●",kind:"orchard",reaction:"El trabajo dejó un paisaje.",voice:"Los frutales son parte de la historia productiva."},
    {id:"vineyard",name:"LOS VIÑEDOS",text:"La vitivinicultura llegó después. A fines de los años 90 comenzaron experiencias con vides en la zona.",icon:"●",kind:"vineyard",reaction:"La historia siguió cambiando.",voice:"Los viñedos muestran otra etapa de una historia que continuó creciendo."},
    {id:"today",name:"VILLA PELÓN",text:"Ahora podés mirar todo junto: río, viento, agua, tierra, trabajo, familias y comunidad.",icon:"✦",kind:"today",reaction:"Ahora entiendo el camino.",voice:"Villa Pelón. Una historia de tierra y agua que todavía continúa."}
  ]}
];

const KEY="villa_pelon_v4";
const UX_KEY="villa_pelon_ux_41";
const old=JSON.parse(localStorage.getItem(KEY)||"null");
const state=old&&typeof old==="object"?Object.assign({mission:0,found:[],sound:true,answers:{},journalOpen:false},old):{mission:0,found:[],sound:true,answers:{},journalOpen:false};
state.answers=state.answers&&typeof state.answers==="object"?state.answers:{};
state.mission=Math.max(0,Math.min(6,Number(state.mission)||0));
state.found=Array.isArray(state.found)?state.found:[];
let activeObject=null,audio=null,voiceTimer=null,finishTimer=null,transitioning=false;

const $=s=>document.querySelector(s);
function save(){localStorage.setItem(KEY,JSON.stringify(state));updateSound();const c=$("#continueBtn");if(c)c.classList.toggle("hidden",state.mission===0&&state.found.length===0);}
function updateSound(){const x=state.sound?"🔊":"🔇";if($("#soundBtn"))$("#soundBtn").textContent=x;if($("#gameSoundBtn"))$("#gameSoundBtn").textContent=x;}
function getAudio(){if(!state.sound)return null;try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;if(!audio)audio=new A();if(audio.state==="suspended")audio.resume();return audio;}catch{return null;}}
function tone(freq=560,d=.08,type="sine",gain=.035){const A=getAudio();if(!A)return;try{const o=A.createOscillator(),g=A.createGain();o.type=type;o.frequency.value=freq;o.connect(g);g.connect(A.destination);g.gain.setValueAtTime(.0001,A.currentTime);g.gain.exponentialRampToValueAtTime(gain,A.currentTime+.015);g.gain.exponentialRampToValueAtTime(.0001,A.currentTime+d);o.start();o.stop(A.currentTime+d+.02);}catch{}}
function soundDiscovery(n){tone(420,.08);setTimeout(()=>tone(560,.1),70);if(n>=3)setTimeout(()=>tone(760,.2,"triangle",.05),150);}
function speak(text){if(!("speechSynthesis"in window)||!text)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="es-AR";u.rate=.9;u.pitch=1.05;speechSynthesis.speak(u);}catch{}}
function introVoice(){speak("Bienvenido a Villa Pelón. Acompañá a Luna. Tocá lo que quieras explorar. Mirá, escuchá y descubrí la historia.");}
function mission(){return MISSIONS[state.mission]}
function keyFor(m,o){return m.id+"-"+o.id}
function missionFound(){const m=mission();return m.objects.filter(o=>state.found.includes(keyFor(m,o))).length}
function updateDots(){let h="";MISSIONS.forEach((m,i)=>h+=`<span class="${i<state.mission?"done":i===state.mission?"current":"locked"}">${i<state.mission?"✓":i+1}</span>`);$("#missionDots").innerHTML=h}
function renderMission(){
 clearTimeout(finishTimer);transitioning=false;activeObject=null;
 const m=mission();$("#missionNumber").textContent="MISIÓN "+m.id;$("#missionTitle").textContent=m.title;$("#timeBadge").textContent=m.time;$("#world").className="world theme-"+m.theme;$("#sceneArt").innerHTML=art(m.theme);
 $("#objects").innerHTML=m.objects.map(o=>`<button class="discover object-${o.kind} ${state.found.includes(keyFor(m,o))?"found":""}" data-id="${o.id}" aria-label="Explorar ${o.name}"><span>${o.icon}</span><b>${o.name}</b><i>+</i></button>`).join("");
 $("#luna").className="luna luna-"+m.theme;$("#discovery").classList.add("hidden");$("#finish").classList.add("hidden");$("#nextBtn").disabled=false;$("#hint").classList.remove("hidden");
 $("#hint b").textContent=missionFound()?"TOCÁ OTRA COSA PARA SEGUIR":"TOCÁ ALGO PARA EXPLORAR";updateProgress();updateDots();save();
 if(missionFound()===0){$("#speech").textContent=m.story;$("#speech").classList.remove("hidden");setTimeout(()=>$("#speech").classList.add("hidden"),4300)}else $("#speech").classList.add("hidden");
}
function art(theme){
 const water=["water","farm","people","town","today"].includes(theme);
 const orchard=["farm","people","town","today"].includes(theme);
 const town=["town","today"].includes(theme);
 const farm=["farm","people","today"].includes(theme);
 const old=["territory","tracks"].includes(theme);
 return `
 <i class="sky"></i><i class="sun"></i>
 <i class="cloud cloud-a"></i><i class="cloud cloud-b"></i>
 <i class="barda barda-a"></i><i class="barda barda-b"></i><i class="far"></i><i class="ground"></i>
 <i class="distant-shrub shrub-a"></i><i class="distant-shrub shrub-b"></i>
 ${water?'<i class="scene-river"></i><i class="scene-canal"></i><i class="water-glint glint-a"></i><i class="water-glint glint-b"></i>':""}
 ${orchard?'<i class="scene-trees"></i><i class="tree-detail tree-a"></i><i class="tree-detail tree-b"></i><i class="tree-detail tree-c"></i>':""}
 ${farm?'<i class="furrows"></i><i class="fence fence-a"></i><i class="fence fence-b"></i><i class="haystack"></i>':""}
 ${town?'<i class="scene-houses"></i><i class="house-detail house-a"></i><i class="house-detail house-b"></i><i class="utility-pole"></i>':""}
 ${old?'<i class="old-fence"></i><i class="stone stone-a"></i><i class="stone stone-b"></i>':""}
 <i class="bush bush-a"></i><i class="bush bush-b"></i><i class="bush bush-c"></i>
 <i class="reeds reeds-a"></i><i class="reeds reeds-b"></i>
 <i class="bird bird-a">⌁</i><i class="bird bird-b">⌁</i>
 <i class="scene-wind"></i><i class="dust dust-a"></i><i class="dust dust-b"></i>
 ${theme==="today"?'<i class="vine-lines"></i><i class="orchard-row"></i>':""}
 `;
}
function moveLunaTo(btn){if(!btn)return;const luna=$("#luna"),world=$("#world").getBoundingClientRect(),r=btn.getBoundingClientRect();const x=Math.max(5,Math.min(80,((r.left+r.width/2-world.left)/world.width)*100-5));luna.style.left=x+"%";luna.classList.add("walking");setTimeout(()=>luna.classList.remove("walking"),620)}
function discover(id){
 if(transitioning)return;const m=mission(),o=m.objects.find(x=>x.id===id);if(!o)return;const btn=document.querySelector(`[data-id="${id}"]`);moveLunaTo(btn);activeObject=o;
 const k=keyFor(m,o);const first=!state.found.includes(k);if(first)state.found.push(k);
 $("#hint").classList.add("hidden");$("#discoveryIcon").textContent=o.icon;$("#discoveryTitle").textContent=o.name;$("#discoveryText").textContent=o.text;$("#discovery").classList.remove("hidden");$("#speech").textContent=o.reaction;$("#speech").classList.remove("hidden");
 document.querySelectorAll(".discover").forEach(x=>x.classList.remove("selected"));if(btn)btn.classList.add("selected");soundDiscovery(missionFound());save();updateProgress();
 clearTimeout(voiceTimer);voiceTimer=setTimeout(()=>$("#speech").classList.add("hidden"),2600);
 if(first&&missionFound()===3){clearTimeout(finishTimer);finishTimer=setTimeout(showFinish,900)}
}
const QUIZZES=[
 {q:"¿Qué elemento será una de las claves de toda esta historia?",options:["El viento","El agua","La nieve"],correct:1},
 {q:"¿Qué quedó registrado en una mensura de 1913?",options:["La colonia Tratayen","El club del pueblo","Los primeros viñedos"],correct:0},
 {q:"¿Qué comenzó a ocurrir en 1969?",options:["Se fundó la escuela","Se construyeron los primeros viñedos","Se regaron los primeros cultivos bombeando agua del río"],correct:2},
 {q:"¿Qué cultivo aparece entre las primeras cosechas del área piloto?",options:["Papa","Café","Arroz"],correct:0},
 {q:"¿Qué necesita una transformación del territorio además de agua?",options:["Personas y trabajo","Un puerto","Una estación de tren"],correct:0},
 {q:"¿Qué ocurrió el 21 de mayo de 1973?",options:["Se creó la Comisión de Fomento","Se construyó la primera bocatoma","Se fundó el club"],correct:0},
 {q:"¿Qué une las pistas de toda la aventura?",options:["Solo los edificios","Río, agua, tierra, trabajo y comunidad","Solo los cultivos"],correct:1}
];
const TIMELINE=[
 ["1913","Una mensura registra la colonia Tratayen."],
 ["1969","Comienzan experiencias de riego con bombeo de agua del río."],
 ["1971","Se construye una primera bocatoma."],
 ["1973","Se crea la Comisión de Fomento de San Patricio del Chañar."],
 ["1975","Comienza a funcionar la Escuela Nº 273."],
 ["1976","Se crea el Club Atlético San Patricio."],
 ["Fines de los 90","Comienzan experiencias con vides en la zona."]
];
const PEOPLE=[
 ["💧","El agua","La gran pista que conecta buena parte del recorrido."],
 ["🌳","El chañar","Un árbol que forma parte de la identidad del lugar."],
 ["🏫","La escuela","Uno de los espacios donde la comunidad construye futuro."],
 ["⚽","El club","Un lugar de encuentro, juego y comunidad."]
];
function openJournal(tab="discoveries"){
 const box=$("#journal");if(!box)return;
 box.classList.remove("hidden");box.setAttribute("aria-hidden","false");state.journalOpen=true;
 document.querySelectorAll(".jtab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 const body=$("#journalBody");
 if(tab==="timeline"){
   body.innerHTML=TIMELINE.map(x=>`<article class="timeline-item"><b>${x[0]}</b><span>${x[1]}</span></article>`).join("");
 }else if(tab==="people"){
   body.innerHTML=PEOPLE.map(x=>`<article class="people-item"><div>${x[0]}</div><section><b>${x[1]}</b><span>${x[2]}</span></section></article>`).join("");
 }else{
   const found=[];
   MISSIONS.forEach(m=>m.objects.forEach(o=>{if(state.found.includes(keyFor(m,o)))found.push([m.id,o.name,o.text,o.icon]);}));
   body.innerHTML=found.length?found.map(x=>`<article class="journal-item"><div class="jicon">${x[3]}</div><section><small>MISIÓN ${x[0]}</small><b>${x[1]}</b><span>${x[2]}</span></section></article>`).join(""):`<div class="empty-journal"><strong>El cuaderno está esperando.</strong><span>Explorá el mundo y tocá objetos para convertirlos en recuerdos.</span></div>`;
 }
}
function closeJournal(){const box=$("#journal");if(!box)return;box.classList.add("hidden");box.setAttribute("aria-hidden","true");state.journalOpen=false;}
function updateProgress(){const n=missionFound();$("#progressBar").style.width=(n/3*100)+"%";if(n===3)$("#hint b").textContent="¡MISIÓN COMPLETA!";else $("#hint b").textContent=n?"TOCÁ OTRA COSA PARA SEGUIR":"TOCÁ ALGO PARA EXPLORAR"}
function showFinish(){if(missionFound()!==3||transitioning)return;$("#discovery").classList.add("hidden");$("#speech").classList.add("hidden");const m=mission();$("#finishKicker").textContent="MISIÓN "+m.id+" COMPLETA";$("#finishTitle").textContent=m.title;$("#finishText").textContent=m.bridge;$("#finishFact").textContent=factFor(m.id);
 const quiz=QUIZZES[m.id-1], answered=state.answers[m.id];
 $("#quiz").classList.remove("hidden");$("#quizQuestion").textContent=quiz.q;$("#quizFeedback").textContent="";
 $("#quizOptions").innerHTML=quiz.options.map((x,i)=>`<button class="quiz-option ${answered===i?"chosen":""}" data-answer="${i}" ${answered!==undefined?"disabled":""}>${x}</button>`).join("");
 if(answered!==undefined) $("#quizFeedback").textContent=answered===quiz.correct?"✓ Luna lo anotó en su cuaderno.":"Podés revisarlo en el cuaderno antes de continuar.";
 $("#nextBtn").disabled=answered===undefined;$("#nextBtn").textContent=m.id===7?"↺ VOLVER A RECORRER":"SEGUIR LA HISTORIA ▶";$("#finish").classList.remove("hidden");tone(660,.09,"triangle",.04);setTimeout(()=>tone(880,.22,"triangle",.045),100)}
function factFor(id){return ["El río es el hilo que une gran parte de la aventura.","Una mensura de 1913 registró la colonia Tratayen.","En 1969 comenzaron obras de sistematización y riego.","Las primeras cosechas incluyeron papas; después crecieron los frutales.","Un paisaje productivo también necesita personas y hogares.","El 21 de mayo de 1973 se creó la Comisión de Fomento.","La historia continúa: el paisaje y sus producciones siguieron cambiando."][id-1]}
function answerQuiz(index){
 const m=mission(),quiz=QUIZZES[m.id-1];if(!quiz)return;
 state.answers[m.id]=index;save();tone(index===quiz.correct?760:300,.16,index===quiz.correct?"triangle":"sawtooth",.04);
 $("#quizOptions").querySelectorAll(".quiz-option").forEach((b,i)=>{b.disabled=true;b.classList.toggle("correct",i===quiz.correct);b.classList.toggle("wrong",i===index&&i!==quiz.correct);});
 $("#quizFeedback").textContent=index===quiz.correct?"✓ Correcto. Luna agregó la respuesta a su cuaderno.":"No pasa nada. La respuesta queda marcada y podés seguir investigando.";
 $("#nextBtn").disabled=false;
}
function next(){
 if(transitioning)return;transitioning=true;clearTimeout(finishTimer);$("#finish").classList.add("hidden");
 if(state.mission<6){state.mission++;save();renderMission();setTimeout(()=>{transitioning=false},250);return}
 state.mission=0;state.found=[];save();renderMission();setTimeout(()=>{transitioning=false},250);
}
function openGame(){$("#home").classList.add("hidden");$("#game").classList.remove("hidden");renderMission();tone(480,.08)}
$("#objects").addEventListener("click",e=>{const b=e.target.closest(".discover");if(b)discover(b.dataset.id)});
$("#startBtn").onclick=()=>{state.mission=0;state.found=[];save();openGame()};
$("#continueBtn").onclick=openGame;
$("#menuBtn").onclick=()=>{$("#game").classList.add("hidden");$("#home").classList.remove("hidden");save()};
$("#closeDiscovery").onclick=()=>{$("#discovery").classList.add("hidden");if(missionFound()===3)showFinish()};
$("#listenDiscovery").onclick=()=>{if(activeObject)speak(activeObject.voice);tone(720,.06)};
$("#nextBtn").onclick=next;
$("#soundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};
$("#gameSoundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};
$("#voiceBtn").onclick=introVoice;
$("#journalBtn").onclick=()=>openJournal();
$("#closeJournal").onclick=closeJournal;
document.querySelectorAll(".jtab").forEach(b=>b.addEventListener("click",()=>openJournal(b.dataset.tab)));
$("#quizOptions").addEventListener("click",e=>{const b=e.target.closest(".quiz-option");if(b)answerQuiz(Number(b.dataset.answer));});
$("#journal").addEventListener("click",e=>{if(e.target.id==="journal")closeJournal();});
$("#resetBtn").onclick=()=>{if(confirm("¿Borrar todo el progreso?")){state.mission=0;state.found=[];state.answers={};save();$("#game").classList.add("hidden");$("#home").classList.remove("hidden")}};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(state.journalOpen){closeJournal();return}if(!$("#game").classList.contains("hidden"))$("#menuBtn").click()}});
updateSound();save();


/* V4.1 — JUGABILIDAD FAMILIAR Y SIMPLE */
(function initV41UX(){
  const ux=JSON.parse(localStorage.getItem(UX_KEY)||"{}");
  function hint(){
    const m=mission();
    const next=m.objects.find(o=>!state.found.includes(keyFor(m,o)));
    if(!next){ speak("Ya encontraste todo. ¡Misión completa!"); return; }
    const hints={river:"Buscá donde se mueve el agua.",wind:"Mirá alrededor: el viento también deja pistas.",tree:"Hay una planta que tiene mucho que ver con este lugar.",ruins:"Buscá una huella de algo que existió antes.",path:"Seguí la pista del camino.",flood:"Pensá qué puede cambiar cuando el río crece.",pump:"Buscá algo que ayude al agua a subir.",canal:"El agua necesita un camino.",intake:"Hay un lugar donde el agua entra al sistema.",potato:"Buscá algo pequeño que salió de la tierra.",farm:"Mirá cómo está dividida la tierra.",orchard:"Hay árboles que cuentan una historia productiva.",worker:"Buscá la huella de las personas.",family:"Una casa puede guardar una historia.",parcel:"Mirá cómo se organiza la tierra.",town:"Buscá el lugar donde la comunidad se encuentra.",school:"Hay un lugar donde se aprende juntos.",club:"Hay un lugar para jugar y encontrarse.",vineyard:"Buscá las líneas de cultivo que llegaron después.",today:"Mirá el presente como una suma de todas las pistas."};
    $("#speech").textContent="PISTA · "+(hints[next.kind]||("Todavía falta descubrir: "+next.name+"."));
    $("#speech").classList.remove("hidden");
    setTimeout(()=>$("#speech")?.classList.add("hidden"),3600);
    tone(620,.08,"triangle",.035);
  }
  function center(){const l=$("#luna");if(!l)return;l.style.left="46%";l.classList.add("walking");setTimeout(()=>l.classList.remove("walking"),420);tone(520,.06);}
  $("#hintBtn")?.addEventListener("click",hint);
  $("#centerBtn")?.addEventListener("click",center);
  $("#missionDots")?.addEventListener("click",e=>{const dot=e.target.closest("span");if(!dot)return;const i=[...$("#missionDots").children].indexOf(dot);if(i<0||i>=state.mission||transitioning)return;state.mission=i;save();renderMission();tone(500,.06);});
  function showTutorial(){
    if(ux.seen)return;
    const tip=document.createElement("div");tip.className="micro-tutorial";
    tip.innerHTML='<div class="micro-tutorial-card"><span class="tutorial-mark">✦</span><small>ASÍ SE JUEGA</small><h2>Mirar → tocar → descubrir</h2><p>No hay que saber jugar. Seguí tu curiosidad y Luna te va a acompañar.</p><button>ENTENDIDO · EMPECEMOS</button></div>';
    document.body.appendChild(tip);
    tip.querySelector("button").onclick=()=>{tip.remove();localStorage.setItem(UX_KEY,JSON.stringify({seen:true}));tone(620,.08);};
  }
  $("#startBtn")?.addEventListener("click",()=>setTimeout(showTutorial,100),{once:true});
})();