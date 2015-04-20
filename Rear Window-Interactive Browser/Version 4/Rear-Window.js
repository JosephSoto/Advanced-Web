// listen to all element with class='scrolling'
$(".scrolling").scrollFlight();

// Add a class of on-page when #container1 arrives
$("h3").on("arrived",function(e) {
  $(this).addClass("on-page");
});

$("h1").on("arrived",function(e) {
  $(this).addClass("on-page");
});

$("h2").on("arrived",function(e) {
  $(this).addClass("on-page");
});


// Add a class of on-page when #container1 arrives
$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("on-page");
});




/*Nav*/

