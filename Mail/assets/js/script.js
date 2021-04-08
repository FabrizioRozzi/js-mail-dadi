var email = [
  "ferfyugeyu@gmail.com",
  "wuichbui@libero.it",
  "svcerver78vg@gmail.com",
  "wcygwyugdyg@gmail.it",
  "cuiwheuiwh@hotmail.com",
  "dew78dh78weh@sonofigo.com",
  "dewyugd@durello.it",
  "rozzi458@gmail.com",
  "pistolino@live.it",
  "Bimb3tt0-_paxxerello89@netlog.com"
];

var emailCiclo= "";
var tuaEmail = prompt("Inserire la propria e-mail:");

for(var i = 0; i < email.length; i++){
  
  if(email[i] === tuaEmail ){
    document.getElementById('risposta').innerHTML = "L' email:" + " " + tuaEmail + " " + "é presente nel nostro database."
  }
}

document.getElementById('risposta').innerHTML = "L' email:" + " " + tuaEmail + " " + "non é presente nel nostro database."