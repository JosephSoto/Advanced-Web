// listen to all element with class='scrolling'
$(".scrolling").scrollFlight();

// Add a class of on-page when #container1 arrives
$("div").on("arrived",function(e) {
  $(this).addClass("on-page");
});

// Add a class of on-page when #container1 arrives
$("h2").on("arrived",function(e) {
  $(this).addClass("on-page");
});



// Add a class of on-page when #container1 arrives
$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("on-page");
});
