/*JAVASCRIPT*/


(function($){

	var $container = $(".parallax");
	var $divs = $container.find("div.parallax-bg");
	var thingBeingScrolled = document.body;
	var liHeight = $divs.eq(0).closest("li").height();
	var diffHeight = $divs.eq(0).height() - liHeight;
	var len = $divs.length;

	var i, div, li, offset, scroll, top, transform;

	//catching initial offsets
	var offsets  = $divs.get().map(function(div,d){
		return $(div).offset();
	});

	var render = function(){

		top = thingBeingScrolled.scrollTop;

		for(i=0;i<len;i++){
			//get the DOM object
			div = $divs[i];

			//our offset
			offset = top - offsets[i].top;

			//our transform string
			scroll = ~~(offset / liHeight * diffHeight);

			//our transform string
			transform = 'translate3d(0px, ' + scroll + 'px , 0px)';

			//apply
			div.style.webkitTransform = transform;
			div.style.MozTransform = transform;
			div.style.msTransform = transform;
			div.style.OTransform = transform;
			div.style.transform = transform;
		}

	 
	};

	(function loop(){
		requestAnimationFrame(loop);
		render();
	})();

	(function() {
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	        window.cancelAnimationFrame =
	          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	    }

	    if (!window.requestAnimationFrame)
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };

	    if (!window.cancelAnimationFrame)
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	}());

})(jQuery);


//Easing Scroll Effect
$(function(){	

  var $window = $(window);
	var scrollTime = 1.2;
	var scrollDistance = 170;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});