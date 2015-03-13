
  speed(0);
  lineWidth(1);
  angle(45);
  hide();



function shape(size) {


  forward(size);
  rotate(60);
  forward(size);
  rotate(90);
  forward(size);
  rotate(30);


}






for(var x = 10; x < 650; x++) {
  moveTo(850,365);
  rotate(60);
  shape(x);

  
}




