const discoveries={
  river:{title:"RÍO NEUQUÉN",text:"El agua del río será parte de la historia de este lugar.",icon:"≈",speech:"¿Y si seguimos el agua?"},
  wind:{title:"EL VIENTO",text:"El viento también forma parte del paisaje del Chañar.",icon:"〰",speech:"¡Escuchá! El paisaje también se mueve."},
  chanar:{title:"EL CHAÑAR",text:"El nombre del lugar está ligado a este árbol.",icon:"✦",speech:"¡Mirá ese árbol!"},
};

const state={
  discovered:new Set(JSON.parse(localStorage.getItem("pc_discovered")||"[]")),
  sound:localStorage.getItem("pc_sound")!=="off"
};

const $=s=>document.querySelector(s);
const home=$("#home"),game=$("#game"),start=$("#startBtn"),cont=$("#continueBtn");
const progress=$("#progressBar"),card=$("#discovery"),finish=$("#finish"),speech=$("#speech");

function save(){
  localStorage.setItem("pc_discovered",JSON.stringify([...state.discovered]));
  localStorage.setItem("pc_sound",state.sound?"on":"off");
  cont.classList.toggle("hidden",state.discovered.size===0);
  updateSoundButtons();
}

function updateSoundButtons(){
  const icon=state.sound?"🔊":"🔇";
  $("#soundBtn").textContent=icon;
  $("#gameSoundBtn").textContent=icon;
}

function tone(freq=520,duration=.08){
  if(!state.sound)return;
  try{
    const C=window.AudioContext||window.webkitAudioContext;
    const ctx=new C(),o=ctx.createOscillator(),g=ctx.createGain();
    o.frequency.value=freq;o.type="sine";g.gain.value=.035;
    o.connect(g);g.connect(ctx.destination);o.start();
    g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);
    o.stop(ctx.currentTime+duration);
  }catch{}
}

function updateProgress(){
  const n=Math.min(state.discovered.size,3);
  progress.style.width=(n/3*100)+"%";
  if(n===3)setTimeout(()=>finish.classList.remove("hidden"),450);
}

function showDiscovery(id){
  const d=discoveries[id];
  state.discovered.add(id);save();updateProgress();tone(640,.12);
  $("#discoveryIcon").textContent=d.icon;
  $("#discoveryTitle").textContent=d.title;
  $("#discoveryText").textContent=d.text;
  card.classList.remove("hidden");
  speech.textContent=d.speech;
  speech.classList.remove("hidden");
  setTimeout(()=>speech.classList.add("hidden"),2200);
}

document.querySelectorAll(".discover").forEach(el=>{
  el.addEventListener("click",()=>showDiscovery(el.dataset.id));
  el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")showDiscovery(el.dataset.id)});
});

$("#closeDiscovery").onclick=()=>card.classList.add("hidden");
$("#nextBtn").onclick=()=>{
  finish.classList.add("hidden");
  speech.textContent="El agua, la tierra y las personas todavía tienen mucho para contarnos.";
  speech.classList.remove("hidden");
  setTimeout(()=>speech.classList.add("hidden"),2600);
};

function openGame(){
  home.classList.add("hidden");game.classList.remove("hidden");updateProgress();updateSoundButtons();
}
start.onclick=openGame;
cont.onclick=openGame;
$("#menuBtn").onclick=()=>{game.classList.add("hidden");home.classList.remove("hidden");save()};
$("#soundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};
$("#gameSoundBtn").onclick=()=>{state.sound=!state.sound;save();tone(700,.07)};
$("#resetBtn").onclick=()=>{
  if(confirm("¿Querés borrar el progreso y empezar de nuevo?")){
    state.discovered.clear();save();progress.style.width="0%";finish.classList.add("hidden");
  }
};

updateSoundButtons();
save();
