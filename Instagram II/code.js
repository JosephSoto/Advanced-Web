function drawImages(data) {
	console.log(data);
	var item = data.data[3];
	console.log(item);
	
	var likes = item.likes.count;
	console.log(likes);
	
	var image = item.images.standard_resolution.url;
	console.log(image);
	
	
	var caption = item.caption.text;
	console.log(caption);
	
	
	var link = item.link;
	console.log(link);
	
	
	
	addImage (image, likes, link, caption)	

}




function addImage(image, likes, link, comment) {


	for(var i = 0; i < data.data.length; i++){ 
	  var item = data.data[i];
	  
	  
var $list = $("ul.people-list");
var $li = $("<li>");

var $image = $("<img>").attr("src",image);
var $likes = $("<h4>").text(likes);
var $link = $("<h5>").text(link);
var $comment = $("<h6>").text(comment);



$li.append($image).append($likes).append($link).append($comment);

$list.append($li); 
 
}
 
 
  
}

