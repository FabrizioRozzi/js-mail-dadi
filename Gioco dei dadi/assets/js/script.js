var mioN = (Math.floor(Math.random() * 6) + 1);
var pcN = (Math.floor(Math.random() * 6) + 1);
console.log(mioN)
console.log(pcN)
if(mioN > pcN){
  document.getElementById('risposta').innerHTML("Tuo punteggio:" + " " + mioN + " " + "Punteggio computer:" + " " +pcN +"<br>" + "Mi dipiace, <br> hai perso!")
}else{
  document.getElementById('risposta').innerHTML("Tuo punteggio:" + " " + mioN + " " + "Punteggio computer:" + " " +pcN +"<br>" + "Complimenti, <br> hai vinto!")
}
