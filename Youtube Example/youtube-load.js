/*function addVideo(video) {
  var title = video.snippet.title;
  var thumbnail = video.snippet.thumbnails.default.url;
  
  var $div = $("<div>").addClass("video");
  
  var $title = $("<h4>").text(title);
  var $image = $("<img>").attr("src", thumbnail);
  
  $div.append($title).append($image);
  
  $(".container").append($div);
}


*/
function showModal(video) {
   $(".modal").empty();
   
   // All your code to add stuff in 
   var title = video.snippet.title;
   var thumbnail = video.snippet.thumbnails.default.url;
  
   var $div = $("<div>")
  
   var $title = $("<h4>").text(title);
   var $image = $("<img>").attr("src", thumbnail);
  
   $div.append($title).append($image);
  
   $(".container").append($div);
   
   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}


function loadYoutube(videosData) {
 /* for(var i = 0; i < videosData.items.length; i++) {
    addVideo(videosData.items[i]);
  }
} */




showModal(videosData.items[0]);

}