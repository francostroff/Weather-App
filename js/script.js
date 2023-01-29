


//function handles events where one button is clicked
$("button").on("click", function(event) {
  event.preventDefault();
// grab the text from the input box
  var city = $("#search-input").val();
  $("#form-input").append();
  {
   var cityButton = $("<button>");
   var saveBtn = $("<button>");
   cityButton.addClass("input-group");
   cityButton.attr("today", city);
   cityButton.text(city);
   $("aside").append(cityButton);
   console.log(city);
   localStorage.setItem("city", city);

}
// build Url based on user input
 var APIKey = "1c1b77b2320a7c40bf8fdaca828e562a";
 var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric";
console.log(queryURL);
// ajax call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
   
  //////////////////////////////////////////
  
  var todayDate = moment().format("dddd, MMMM Do YYYY");
  var imageUrl = ["http://openweathermap.org/img/wn/10d@2x.png"]
  var weatherIcon= $("<img>");  
  weatherIcon.attr("src", imageUrl);
  weatherIcon.attr("alt", "Icon");
  $("#today").prepend(weatherIcon);
  $("#today").show();
  $("#forecast").show();
  $("#row-mt-3").show();
  $("#today").html("<h1>" + response.name + "  <h1>");
  $("#today").append("<h2>"  + todayDate +"<h2>");
  $("#today").append("<h3>Temperature  :  " + response.main.temp + " C˚<h3>");
  $("#today").append("<h3>Wind Speed  :  " + response.wind.speed + "km/h<h3>");
  $("#today").append("<h3>Humidity  :  " + response.main.humidity + "%" + "</h3>");
  $("#forecast").html("<h2>" + "5 Day Forecast  :  " + "</h2>");
 });
});
///////////////////////////////////////////////////////////////////


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // // Here we construct our URL
  // var APIKey = "1c1b77b2320a7c40bf8fdaca828e562a";
  // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + APIKey;

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(response);
  //   console.log(queryURL);
  //   let K = response.main.temp;
  //   let C = K - 273.15;
  //   console.log(C);
  //   // Create CODE HERE to calculate the temperature (converted from Kelvin)
  //   // Create CODE HERE to transfer content to HTML
  //    document.querySelector('#today').innerText = 'Forecast: ' + response.weather[0].description;
  //   // // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  //   // document.querySelector('.temp').innerText = 'Temperature: ${C}'
  //   $("#today").show();
  //   $("#today").html("<h1>" + (C)+"C"+ "</h1>");
  //   $("#today").append("<h2>" + response.main.humidity+ "%" + "</h2>");
  //   $("#today").append("<h2>" + response.name + "</h2>");
  // });



  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).done(function(data) {
  //   // $('#forecast').append(JSON.stringify(data))
  // });


  // // need to create a click event for the buttons with the city name
  // // when button is clicked, we need to get the weather data for that city
  // // and display it on the page

  // $(".search-button").on("click", function(event) {
  //   event.preventDefault();
  //   // var cityName = $(this).siblings(".city-name").val();
  //   var userSearch = $(".city-name");
   
    
  // });

  // var cities = []

  // // // Function for displaying movie data
  // function renderButtons() {
  
  //   // Deleting the buttons prior to adding new movies
  //   // (this is necessary otherwise you will have repeat buttons)
  //   $("#buttons-view").empty();
  
  //   // Looping through the array of movies
  //   for (var i = 0; i < cities.length; i++) {
  
  //     // Then dynamicaly generating buttons for each movie in the array
  //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  //     var a = $("<button>");
  //     // Adding a class of movie to our button
  //     a.addClass("form");
  //     // Adding a data-attribute
  //     a.attr("form-label", cities[i]);
  //     // Providing the initial button text
  //     a.text(cities[i]);
  //     // Adding the button to the buttons-view div
  //     $("#search-form").append(a);
  //   }
  // }
