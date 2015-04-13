// listen to all element with class='scrolling'
$(".scrolling").scrollFlight();

// Add a class of on-page when #container1 arrives
$("h1").on("arrived",function(e) {
  $(this).addClass("on-page");
});


$("h4").on("arrived",function(e) {
  $(this).addClass("on-page");
});



// Add a class of on-page when #container1 arrives
$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("on-page");
});



$(document).ready(function() {

	// Adds title attributes and classnames to list items
	 
	$("ul#nav li a:contains('Dashboard')").addClass("dashboard").attr('title', 'Dashboard');
	$("ul#nav li a:contains('Pages')").addClass("pages").attr('title', 'Pages');
	$("ul#nav li a:contains('Assets')").addClass("assets").attr('title', 'Assets');
	$("ul#nav li a:contains('Comments')").addClass("comments").attr('title', 'Comments');
	$("ul#nav li a:contains('Widgets')").addClass("widgets").attr('title', 'Widgets');
	$("ul#nav li a:contains('Maps')").addClass("maps").attr('title', 'Maps');
	$("ul#nav li a:contains('Search')").addClass("search").attr('title', 'Search');
	$("ul#nav li a:contains('Trash')").addClass("trash").attr('title', 'Trash');
	$("ul#nav li a:contains('Settings')").addClass("settings").attr('title', 'Settings');
	
	// Animate sidebar navigation
	

	
	$('ul#nav li:has(ul)').hover(function(){
		$('.flyoutBg').stop().animate({ left : '175px' }, 300);
		$(this).find('ul').stop().animate({'left' : '175px'}, 300);
		}, function() {
		$('.flyoutBg').stop().animate({ left : '25px' }, 300);
		$(this).find('ul').stop().animate({'left' : '25px'}, 300);
	});
});