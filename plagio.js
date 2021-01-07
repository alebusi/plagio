ind = 0;

function generaTesto() {
  risposte = ["risp0"];
  sequenza = [];
  ind=0;
  generaSequenza(); 
  testo="Titolo del libro "+document.getElementById("titolo").value+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").value+"...<br>";
  testo=testo+"Ecco le proposte...<br>";
  txtIncipit=document.getElementById("incipit").value;
  for (x=0; x < sequenza.length; x++) {
      testo=testo+(x+1)+": "+txtIncipit+" "+document.getElementById(sequenza[x]).value+"...<br>";
  }
  testo=testo+"Ripetiamo per i meno attenti...<br>";
  testo=testo+document.getElementById("titolo").value+"...<br>";
  testo=testo+"di "+document.getElementById("autore").value+"...<br>";
  testo=testo+document.getElementById("incipit").value+"...<br>";
  for (x=0; x < sequenza.length; x++) {
      testo=testo+(x+1)+": "+document.getElementById(sequenza[x]).value+"...<br>";
  }
  testo=testo+"Ora tocca a voi dare la risposta corretta!";
  if (document.getElementById("accenti").checked == true) {
     testo=sistemaTesto(testo);
  }
  document.getElementById("testo").innerHTML = testo;
}

function generaSequenza() {
  x=0;
  for (i = 1; i < 9; i++) {
    if (document.getElementById("risp"+i).value != "") {
      x++; 
      risposte[x]="risp"+i;
    }
  }
  while (risposte.length > 0) {
    el = risposte.splice(randomIntFromInterval(0,risposte.length-1),1);
    sequenza[ind]=el;
    ind=ind+1;
  }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function onoff(div) {
  var className = div.getAttribute("class");
  if (className=="abilita") {
     div.className = "disabilita";
  }
  else {
     div.className = "abilita";
  }
}

function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ih");
  testo = testo.replace(/ù/ig,"uh");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}
