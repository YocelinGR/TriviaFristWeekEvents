// Variables globales
var contCorrectFristQuiz = 0;
var contIncorrectFirtsQuiz = 0;
var contCorrectSecondQuiz = 0;
var contIncorrectSecondQuiz = 0;
var total = document.getElementById("total");
var eleccion = document.getElementById("eleccion");
var usuario = document.getElementById("usuario");
var hola = document.getElementById("hola");
var formularioMenu = document.getElementById("formularioMenu");
var primerTrivia = document.getElementById("primer-trivia");
var primerPregunta1 =document.getElementById("primer-pregunta1");
var segundaPregunta1 =document.getElementById("segunda-pregunta1");
var tercerPregunta1 =document.getElementById("tercer-pregunta1");
var cuartaPregunta1 =document.getElementById("cuarta-pregunta1");
var segundaTrivia = document.getElementById("segunda-trivia");
var primerPregunta2 =document.getElementById("primer-pregunta2");
var segundaPregunta2 =document.getElementById("segunda-pregunta2");
var tercerPregunta2 =document.getElementById("tercer-pregunta2");
var cuartaPregunta2 =document.getElementById("cuarta-pregunta2");
var respuestasCorrectas1 = document.getElementById("respuestasCorrectas1");
var respuestasCorrectas2 = document.getElementById("respuestasCorrectas2");
var respuestasIncorrectas1 = document.getElementById("respuestasIncorrectas1");
var respuestasIncorrectas2 = document.getElementById("respuestasIncorrectas2");
var results = document.getElementById("results");

function ingresaNombre () {
  var jugador = (document.getElementById("userName").value).toUpperCase();
  hola.innerHTML = "Seas bienvenidx: " + jugador;
  usuario.style.display = "none";
  eleccion.style.display = "block";
}
function siJuego(){
  eleccion.style.display = "none";
  formularioMenu.style.display = "inline-block";
}

function triviaUno(){
  formularioMenu.style.display = "none";
  primerPregunta1.style.display = "inline-block";
  console.log("que");
}
function triviaUnoPrimerPregunta () {
  var respuesta11 = document.getElementById("respuesta11").value;
  if (respuesta11 == 3) {
    contCorrectFristQuiz += 1;
  }else {
    contIncorrectFirtsQuiz +=1;
  }
  primerPregunta1.style.display = "none";
  segundaPregunta1.style.display ="inline-block"
}

function triviaUnoSegundaPregunta () {
  var respuesta12 = document.getElementById("respuesta12").value;
  if (respuesta12 == 3) {
    contCorrectFristQuiz += 1;
  }else {
    contIncorrectFirtsQuiz +=1;
  }
  segundaPregunta1.style.display = "none";
  tercerPregunta1.style.display ="inline-block"
}

function triviaUnoTercerPregunta () {
  var respuesta13 = document.getElementById("respuesta13").value;
  if (respuesta13 == 4) {
    contCorrectFristQuiz += 1;
  }else {
    contIncorrectFirtsQuiz +=1;
  }
  tercerPregunta1.style.display = "none";
  cuartaPregunta1.style.display ="inline-block"
}

function triviaUnoCuartaPregunta () {
  var respuesta14 = document.getElementById("respuesta14").value;
  if (respuesta14 == 2) {
    contCorrectFristQuiz += 1;
  }else {
    contIncorrectFirtsQuiz +=1;
  }
  cuartaPregunta1.style.display = "none";
  results.style.display = "inline-block";
  respuestasCorrectas1.innerHTML = "Bien hecho, acertaste: " + contCorrectFristQuiz;
  respuestasIncorrectas1.innerHTML = "Upsi, te equivocaste en: " + contIncorrectFirtsQuiz;
}

function triviaDos(){
  formularioMenu.style.display = "none";
  primerPregunta2.style.display = "inline-block";
}
function triviaDosPrimerPregunta () {
  var respuesta21 = document.getElementById("respuesta21").value;
  if (respuesta21 == 3) {
    contCorrectSecondQuiz += 1;
  }else {
    contIncorrectSecondQuiz +=1;
  }
  primerPregunta2.style.display = "none";
  segundaPregunta2.style.display ="inline-block"
}

function triviaDosSegundaPregunta () {
  var respuesta22 = document.getElementById("respuesta22").value;
  if (respuesta22 == 4) {
    contCorrectSecondQuiz += 1;
  }else {
    contIncorrectSecondQuiz +=1;
  }
  segundaPregunta2.style.display = "none";
  tercerPregunta2.style.display ="inline-block"
}

function triviaDosTercerPregunta () {
  var respuesta23 = document.getElementById("respuesta23").value;
  if (respuesta23 == 1) {
    contCorrectSecondQuiz += 1;
  }else {
    contIncorrectSecondQuiz +=1;
  }
  tercerPregunta2.style.display = "none";
  cuartaPregunta2.style.display ="inline-block"
}

function triviaDosCuartaPregunta () {
  var respuesta24 = document.getElementById("respuesta24").value;
  if (respuesta24 == 1) {
    contCorrectSecondQuiz += 1;
  }else {
    contIncorrectSecondQuiz +=1;
  }
  cuartaPregunta2.style.display = "none";
  results.style.display = "inline-block";
  respuestasCorrectas2.innerHTML = "Bien hecho, acertaste: " + contCorrectSecondQuiz;
  respuestasIncorrectas2.innerHTML = "Upsi, te equivocaste en: " + contIncorrectSecondQuiz;
}

function noJuego(){
  total.innerHTML = "Okidoki. Jugamos pronto";
}
