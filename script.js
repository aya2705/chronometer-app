var sp,btn_start,btn_stop,t,ms,s,mn,h;


//todo: fonction pour initialiser les variables quand la page se charge

window.onload=function(){
  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('start');
  btn_stop = document.getElementById('stop');
  t;
  ms=0,s=0,mn=0,h=0;
  
}
btn_stop.addEventListener('click',function(){
  alert("vous avez cliquer sur start");
})

//todo: mettre en place le compteur

function update_chronometre(){
  ms+=1;
  if(ms==10){
    ms=1;
    s+=1;
  }
  if(s==60){
    s=0;
    mn+=1;
  }
  if(mn == 60){
    mn=0;
    h+=1;
  }
  
  //todo = insertion des valeurs dans les spans [0] permet de selectionner le premier span

  sp[0].innerHTML=h + "h";
  sp[1].innerHTML=mn +"min";
  sp[2].innerHTML=s +"s";
  sp[3].innerHTML=ms +"ms";
}

//todo: mettre en place la fonction du button start

function start() {
  t = setInterval(update_chronometre, 100);
  btn_start.disabled = true;
}



//todo:stopper le chronometre

function stop() {
  clearInterval(t); //?suppression de l'interval t que nous avions creer
  btn_start.disabled = false; 
}

//todo:initialiser les valeurs du compteur a 0

function restart() {
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0;
  s = 0;
  mn = 0;
  h = 0;
  // Insert the new values into the spans

  sp[0].innerHTML = h + " h";
  sp[1].innerHTML = mn + " min";
  sp[2].innerHTML = s + " s";
  sp[3].innerHTML = ms + " ms";
}