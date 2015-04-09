// listen to all element with class='scrolling'
$(".scrolling").scrollFlight();

// Add a class of on-page when #container1 arrives
$("p.body").on("arrived",function(e) {
  $(this).addClass("on-page");
});


// Add a class of on-page when #container1 arrives
$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("on-page");
});



lineColor(white)
angle(45)
forward(200)
angle(180)
forward(200)
angle(-67)
forward(150)
