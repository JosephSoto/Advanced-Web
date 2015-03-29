speed(0);
record();
reset();
hide();


$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});



var drawing = false;
var tool = "pen";
var eraser = false;

var color = "black";
var color = "white";





$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen") { 
    drawing = true;

  } else if(tool == "eraser") {
  eraser = true;

}

});

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
  
  
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});





$("#button-eraser").on("click",function(e){
 	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	lineColor("white");
	lineWidth(70);

})


$("#button-pen").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineWidth(width);
})



$("#button-star").on("click",function(e){
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
 	lineColor("yellow");
 	lineWidth(100);

})


/*weight sizes*/



/*flag*/

$("#button-flag").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "flag";
 lineWidth(width);
 lineColor(color);
});


function flag() {
  angle(0);
  forward(150);
  rotate(120);
  forward(50);
  rotate(120);
  forward(50);
  rotate(120);
}




/*sand castle*/

$("#button-trapezoid").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "trapezoid";
 lineWidth(width);
 lineColor(color);
});


function trapezoid() {
  angle(0);
  angle(45);
  forward(50);
  rotate(45);
  forward(50);
  rotate(45);
  forward(50);
  rotate(-180);
  forward(50);
  rotate(80);
}







/*wave*/

$("#button-wave").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "wave";
 lineWidth(width);
 lineColor(color);
});


function wave() {
    angle(90);
    forward(20);
    rotate(-45);
    forward(20);
    rotate(45);
    forward(20);
    rotate(45);
    forward(20);
    rotate(-45);
    forward(20);
    skip(20);
    forward(20);
    rotate(-45);
    forward(20);
    rotate(45);
    forward(20);
    rotate(45);
    forward(20);
    rotate(-45);
    forward(20);

}






/*whale*/

$("#button-whale").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "whale";
 lineWidth(width);
 lineColor(color);
});


function whale() {
	  angle(10);
	  forward(50);
	  angle(150);
	  forward(50);
	  angle(90);
	  forward(50);
	  angle(-150);
	  forward(50);

}




$(".weight").on("click",function(e) {
  var width = $(this).data("weight");
  $(".weight").removeClass("selected");
  $(this).addClass("selected");
  lineWidth(width);
});





$(".color").on("click",function(e) {
  var col = $(this).data("color");
  $(".color.selected").removeClass("selected");
  $(this).addClass("selected");
  lineColor(col);
});
