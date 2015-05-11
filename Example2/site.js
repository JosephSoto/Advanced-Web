


/*Shows Modal*/
function showModal(item) {
   $(".modal").empty();
   
  
   var $img = $("<img>").attr("src",item.Images);
   var $p = $("<p class='description'>").text(item.Description);

   $(".modal").append($img,$p);
   
   $(".overlay").show();
   $(".modal").show();

}

/*Hides Modal*/
function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}



/*Adds an item for that attribute*/
function addItem(item) {
  var $li = $("<li>").addClass("item");

  $li.attr("data-category",item.Genre);


  
  var $img = $("<img>").attr("src",item.Images);


  
  var $hover = $("<div class='hoverstate'>")
  
  var $h2 = $("<h2 class='name'>").text(item.Name);
  //var $p = $("<p class='description'>").text(item.Description);
  
  $hover.append($h2)

  $li.append($img).append($hover);

  $li.on("click",function(e) {
      showModal(item);
  });

  $(".collection").append($li);
};



/*Does this for every item*/
function addItems(data) {
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
}

function callback(data) { 

  addItems(data);

/*packery stuff*/
  var $container = $('.collection');
  $container.packery({
    itemSelector: '.item',
    gutter: 0
  });

  var myCollection = $(".item").collection({
    filters: { 
      "title": "h2",
      "category": "[data-category]"
    },

    update: function() { 
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },
  });
  
  /*when click, unclick all other categories*/

  $(".category").on("click",function(e) {
      var category = $(this).data("category");
      $("#filter-bar button").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("category",category);
  });

  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });

  $(".overlay").on("click",function(e) {
      hideModal();
  });

}


  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1wOdICvug2kqarWWZ8W1NN2rBITJzIaWWqKTo2babNhw/pubhtml",
                   callback: callback,
                   simpleSheet: true } )



	