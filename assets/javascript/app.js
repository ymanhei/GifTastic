// Initial array of movies
var movies = ["Australia", "USA", "China", "Japan"];
var text = "";
var limit = 20;

// Function for displaying movie data
function renderButtons() {
  $("#buttons-view").empty();
  for (i=0;i<movies.length;i++){
    $("#buttons-view").append('<input type="button" id="btn1" class="btn btn-dark" value="' + movies[i] + '" />');
  }
// YOUR CODE GOES HERE

}

// This function handles events where one button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var inputgif = $("#gif-input").val();
  var inputgif = $("#gif-input").val().trim();
  console.log(inputgif);
  if (inputgif == "") {
    alert("Please fill something in the box!");
  }
  else {
    movies.push(inputgif);
    renderButtons();
  }
  
  
  // YOUR CODE GOES HERE

});


$("#add-10more-gif").on("click", function(event) {
    event.preventDefault();
  $("#gif-view").empty();
  limit = limit + 10;
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=" + limit + "&q=" + text;
  
  console.log(this.value);
  console.log(queryURL);
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
console.log(response);

console.log(still);

var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var still = results[i].images.original_still.url;
            var animate = results[i].images.original.url;
            var rating = results[i].rating;
//$("#gif-view").prepend('<img data-animate="' + animate + '" data-still="' + still + '" data-state="still" src="' + still + '"/>');
$("#gif-view").prepend('<div class="card  m-3" style="width: 18rem;"><img src="'+still+'" data-animate="' + animate + '"  data-state="still" data-still="' + still + '" class="card-img-top"><div class="card-body"><h5 class="card-title">Rating:</h5><p class="rating">' + rating + '</p></div></div>');
          }

          

});
  
  });

$(document).on("click", ".btn", function(event) {
  event.preventDefault();
  $("#gif-view").empty();
  text = this.value;
  limit = 10;
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=" + limit + "&q=" + text;
  console.log(this.value);
  console.log(queryURL);
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
console.log(response);

console.log(still);

var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var still = results[i].images.original_still.url;
            var animate = results[i].images.original.url;
            var rating = results[i].rating;
            var title = results[i].title;
//$("#gif-view").prepend('<img data-animate="' + animate + '" data-still="' + still + '" data-state="still" src="' + still + '"/>');
$("#gif-view").prepend('<div class="card  m-3" style="width: 18rem;"><img src="'+still+'" data-animate="' + animate + '"  data-state="still" data-still="' + still + '" class="card-img-top"><div class="card-body"><span class="card-title"><strong>Rating:</strong></span><p class="rating">' + rating + '</p><span class="card-title"><strong>Title:</strong></span><p class="title">' + title + '</p></div></div>');
          }

          

});
  
  // YOUR CODE GOES HERE

});

$(document).on("click", "img", function(event) {

console.log(this);
    if ($(this).attr("data-state") == "still") {
    var da = $(this).attr("data-animate");
    $(this).attr("src",da);
    $(this).attr("data-state","animate");
    }
    else {
      var st = $(this).attr("data-still");
    $(this).attr("src",st);
    $(this).attr("data-state","still");

    }

    
  });

renderButtons();

