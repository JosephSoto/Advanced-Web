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
	lineColor("black");
	lineWidth(width);
})



$("#button-star").on("click",function(e){
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
 	lineColor("yellow");
 	lineWidth(100);

})


/*weight sizes*/

$("#button-small").on("click",function(e){
	$(this).addClass("selected");
	lineWidth(10);

})


$("#button-medium").on("click",function(e){
	$(this).addClass("selected");
	lineWidth(50);

})



$("#button-large").on("click",function(e){
	$(this).addClass("selected");
	lineWidth(100);

})

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


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" ) { 
    drawing = true;
  } else if(tool == "flag") {
    flag();
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


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" ) { 
    drawing = true;
  } else if(tool == "trapezoid") {
    trapezoid();
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


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" ) { 
    drawing = true;
  } else if(tool == "wave") {
    wave();
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


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" ) { 
    drawing = true;
  } else if(tool == "whale") {
    whale();
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






/*color:red*/

$("#button-red").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("red");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "red") { 
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



/*color:orange*/

$("#button-orange").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("orange");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "orange") { 
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


/*color:yellow*/

$("#button-yellow").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("yellow");
	lineWidth(100);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "yellow") { 
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



/*color:green*/

$("#button-green").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("green");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "green") { 
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



/*color:blue*/

$("#button-blue").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("blue");
	lineWidth(4);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "blue") { 
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




/*color:purple*/

$("#button-purple").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("purple");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "purple") { 
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



/*color:pink*/

$("#button-pink").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("pink");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pink") { 
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




/*color:brown*/

$("#button-brown").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("brown");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "brown") { 
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


/*color:grey*/

$("#button-grey").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("grey");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "grey") { 
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




/*color:black*/

$("#button-black").on("click",function(e){
	$(".tool").removeClass("selected");
  	$(this).addClass("selected");
	lineColor("black");
	lineWidth(width);
})

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "black") { 
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