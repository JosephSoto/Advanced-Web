function addVideo(video) {
  var title = video.snippet.title;
  var thumbnail = video.snippet.thumbnails.default.url;
  
  var $div = $("<div>").addClass("video");
  
  var $title = $("<h4>").text(title);
  var $image = $("<img>").attr("src", thumbnail);
  
  $div.append($title).append($image);
  
  $(".container").append($div);
}

function loadYoutube(videosData) {
  for(var i = 0; i < videosData.items.length; i++) {
    addVideo(videosData.items[i]);
  }
}


showModal(videoData.item[0]);
