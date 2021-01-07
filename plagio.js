ind = 0;

function generaTesto() {
  risposte = ["risp0"];
  sequenza = [];
  ind=0;
  generaSequenza(); 
  ind=0;
  testo="Titolo del libro "+document.getElementById("titolo").value+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").value+"...<br>";
  testo=testo+"Ecco le proposte...<br>";
  txtIncipit=document.getElementById("incipit").value;
  testo=testo+"Uno: "+txtIncipit+" "+recRisp()+"...<br>";
  testo=testo+"Due: "+txtIncipit+" "+recRisp()+"...<br>";
  testo=testo+"Tre: "+txtIncipit+" "+recRisp()+"...<br>";
  testo=testo+"Quattro: "+txtIncipit+" "+recRisp()+"...<br>";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+txtIncipit+" "+recRisp()+"...<br>";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+txtIncipit+" "+recRisp()+"...<br>";
  }
  if (document.getElementById("risp7").value != "") {
    testo=testo+"Sette: "+txtIncipit+" "+recRisp()+"...<br>";
  }
  testo=testo+"Ripetiamo per i meno attenti...<br>";
  testo=testo+"Titolo del libro "+document.getElementById("titolo").value+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").value+"...<br>";
  testo=testo+document.getElementById("incipit").value+"...<br>";
  testo=testo+"Uno: "+document.getElementById(sequenza[0]).value+"...<br>";
  testo=testo+"Due: "+document.getElementById(sequenza[1]).value+"...<br>";
  testo=testo+"Tre: "+document.getElementById(sequenza[2]).value+"...<br>";
  testo=testo+"Quattro: "+document.getElementById(sequenza[3]).value+"...<br>";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById(sequenza[4]).value+"...<br>";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById(sequenza[5]).value+"...<br>";
  }
  if (document.getElementById("risp7").value != "") {
    testo=testo+"Sette: "+document.getElementById(sequenza[6]).value+"...<br>";
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

function recRisp() {
    txt=document.getElementById(sequenza[ind]).value;
    ind=ind+1;
    return txt;
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
