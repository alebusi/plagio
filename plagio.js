var ind = 0;
var colori = ["white","Cyan","magenta","yellow","red","lime","Pink","orange","LightSkyBlue"];

var spreadsheetID = "1crcNoslrLEwIsvLCKMl7ZYjesNYDcibVt0PQQzylZf0";
var tab_name = "giocatori";
var api_key = "AIzaSyBcrsTED6onwU-aKRLom06W_LuQJvLd2xw";

//var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";
//var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetID + "/values/Sheet1!A1:A8?alt=json";

var url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
           spreadsheetID + '/values/' + tab_name +
           '?alt=json&key=' + api_key;

$.getJSON(url, function(data) {
    for (var i = 0; i < data.values.length; i++) {
      document.getElementById("r"+(i+1)).innerHTML = data.values[i];
      document.getElementById("r"+(i+1)).style.color=colori[i+1];
    }        
});
/*
$.getJSON(url, function(data) {                   
    for (var i = 0; i < data.feed.entry.length; i++) {
      document.getElementById("r"+(i+1)).innerHTML = data.feed.entry[i].title.$t;
      document.getElementById("r"+(i+1)).style.color=colori[i+1];
    }        
});
*/
function generaTesto() {
  //document.getElementById("testo").style.zIndex=0;
  risposte = ["risp0"];
  sequenza = [];
  ind=0;
  generaSequenza(); 
  testo="Titolo del libro "+document.getElementById("titolo").innerHTML+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").innerHTML+"...<br><br>";
  testo=testo+"Ecco le proposte...<br>";
  txtIncipit=document.getElementById("incipit").innerHTML;
  for (x=0; x < sequenza.length; x++) {
      var str = sequenza[x].toString();
      var colRisp = colori[str.substr(-1)];
      var colorePos="<span style='color: "+colRisp+"'>"+(x+1)+"</span>";
      testo=testo+colorePos+": "+txtIncipit+" "+document.getElementById(sequenza[x]).innerHTML+"...<br>";
  }
  testo=testo+"<br>Ripetiamo per i meno attenti...<br>";
  testo=testo+document.getElementById("titolo").innerHTML+"...<br>";
  testo=testo+"di "+document.getElementById("autore").innerHTML+"...<br>";
  testo=testo+document.getElementById("incipit").innerHTML+"...<br>";
  for (x=0; x < sequenza.length; x++) {
      var str = sequenza[x].toString();
      var colRisp = colori[str.substr(-1)];
      var colorePos="<span style='color: "+colRisp+"'>"+(x+1)+"</span>";
      testo=testo+colorePos+": "+document.getElementById(sequenza[x]).innerHTML+"...<br>";
  }
  testo=testo+"Ora tocca a voi dare la risposta corretta!";
  if (document.getElementById("accenti").checked == true) {
     testo=sistemaTesto(testo);
  }
  document.getElementById("completo").innerHTML = testo;
}

function generaSequenza() {
  x=0;
  for (i = 1; i < 9; i++) {
    var risposta = document.getElementById("risp"+i).innerHTML;
    if (risposta.trim().length != 0) {
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
  if (className=="etichetta") {
     div.className = "riposo";
  }
  else {
     div.className = "etichetta";
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
