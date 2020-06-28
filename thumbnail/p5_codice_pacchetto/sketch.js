/* Progetto degli studenti del lab. di design dei sistemi del corso di laurea magistrale in design
della Università degli studi della Repubblica di San Marino, con la supervisione editoriale del
Sole 24 Ore 
Design e sviluppo: Fabrizio De Donatis, M. Gabriella Milinci e Barbara Sabato 
Docente: Matteo Moretti
*/

let parole=["#allerta","#chiusura","#sanificare","#peste", "#untori", "#multa", "#decreto", "#quarantena", "#bloccare", "#mascherina", "#psicosi", "#coronavirus"];
let w=480;
let h=360;
let cicli = 1000;
let contatore= 0;
let incremento= 1;

function preload() {
  sansRegular24 = loadFont('font/Sole24Sans-Regular.ttf');
  serifRegular24 = loadFont('font/Sole24SerifText-Regular.ttf');
  
}


function setup() {
  createCanvas(w, h);
  textFont(serifRegular24);
  background("#ECF1F4");
  //frameRate(1);
}

function draw() {
  
  
  if(contatore<cicli) {
    for (i=0; i<incremento; i++){
    var randomword = random(parole);
        textSize(random(12,58));
        fill("#1e1e24");
        text(randomword, random(-30,w-70), random(h));
      contatore++;
    }
    //contatore++;
    
  } else {
    
    textAlign(CENTER);
    fill("#ECF1F4;");
    textSize(62);
    text("#Infodemia", w/2, h/2);
    noLoop();
  }
  
  if (contatore<80) {
  frameRate(contatore*0.8)
  } else {frameRate(60);
         incremento=4;
         }
}