
/*IMAGE ONE*/
function addImage(image, likes, link, comment) {


var $list = $("div.box1");
var $li = $("<li>");

var $image = $("<img>").attr("src",image);
var $likes = $("<h4>").text(likes);
var $link = $("<h5>").text(link);
var $comment = $("<h6>").text(comment);



$li.append($image).append($likes).append($link).append($comment);

$list.append($li); 
  
  
}

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg", "720", "https://instagram.com/p/0lOFZ0g8gA/", "منشن الي تبيه يشوف المقطع");




/*IMAGE TWO*/
function addImage(image, likes, link, comment) {


var $list = $("div.box2");
var $li = $("<li>");

var $image = $("<img>").attr("src",image);
var $likes = $("<h4>").text(likes);
var $link = $("<h5>").text(link);
var $comment = $("<h6>").text(comment);



$li.append($image).append($likes).append($link).append($comment);

$list.append($li); 
  
  
}

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg", "432", "https://instagram.com/p/0lS-LWTbw9/", "RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits");


















/*
function addItem(name, city, image, sub) {


var $list = $("ul.people-list");
var $li = $("<li>");

var $name = $("<h4>").text(name);
var $city = $("<h5>").text(city);
var $sub = $("<h6>").text(sub);

var $img = $("<img>").attr("src",image);

$li.append($name).append($img).append($city).append($sub);

$list.append($li); 
  
  
}

addItem("Bob Johnson","Boston, MA", "http://lorempixel.com/200/200/people/2/", "Am I good enough");
addItem("Frank Scott","San Diego, CA", "http://lorempixel.com/200/200/people/3/");
addItem("Amy Smith","New York, NY", "http://lorempixel.com/200/200/people/4/");




*/