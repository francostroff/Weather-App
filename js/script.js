
///////// create variables to store data /////////
var searchForm = $("#search-form");
var searchInput = $("#search-input");
var currentContainer = $("#today");
var foreCastContainer= $("#forecast");
var historyContainer = $("#history");

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

///// api query builder 
  var APIKey2 = "1c1b77b2320a7c40bf8fdaca828e562a";
  var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey2 + "&units=metric";
  console.log(queryURL2);
  var APIKey = "1c1b77b2320a7c40bf8fdaca828e562a";
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=metric";
  console.log(queryURL);
// ajax call
  $.ajax({
  url: queryURL,queryURL2,
  method: "GET"
  }).then(function(response) {
  console.log(response);
  renderForeCast(city,response);
  

//display moment.js 
  var todayDate = moment().format("dddd, MMMM Do YYYY");
  
//append to current weather container
  $("#today").html("<h1>" + response.city.name + "<h1>"+  response.city.country + "</h1>");
  $("#today").append("<h2>"  + todayDate +"<h2>");
  $("#today").append("<h3>Temperature  :  " + response.list[0].main.temp + "C<h3>");
  $("#today").append("<h3>Wind Speed  :  " + response.list[0].wind.speed + "km/h<h3>");
  $("#today").append("<h3>Humidity  :  " + response.list[0].main.humidity + "%" + "<h3>");

  var iconcode = a.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
 
  var weatherIcon= $("<img>");  
  console.log(response.list[0].weather[0].icon);
  weatherIcon.attr("src", iconurl);
  weatherIcon.attr("alt", "Icon");
  $("#today").prepend(weatherIcon);
  $("#today").show(weatherIcon);
  });
   
  $("#forecast").show();
  $("#forecast").html("<h2>" + "5 Day Forecast  :  " + "<h2>");
 });
 
 // function to  the forecast
  function foreCastCard (forecast) {

  ///create our div and elements to display
  var col= $("<div>");
  var card= $("<div>");
  var cardBody= $("<div>");
  var cardTitle= $("<h2>");
  var temp = $("<p>");
  var wind = $("<p>");
  var humidity = $("<p>");

  ////append forecast elements to display
  col.append(card);
  card.append(cardBody);
  cardBody.append(cardTitle,temp,wind,humidity);
  col.attr("class", "col-md");
  col.addClass("5-day-forecast")
  card.attr("class", "card bg-primary h-100 text-white");
  cardBody.attr("class", "card-body p-2");
  cardTitle.attr("class", "card-title");
  temp.attr("class", "card-text");
  wind.attr("class", "card-text");
  humidity.attr("class", "card-text");

  //// forecast
  cardTitle.text(moment(forecast.dt_txt).format("D/M/YYYY"));
  temp.text("Temperature: " + forecast.main.temp + "C");
  wind.text("Wind Speed: " + forecast.wind.speed + "km/h");
  humidity.text("Humidity: " + forecast.main.humidity + "%");
  $("#forecast").append(col);
  }  

  
//// function to render the forecast card elements
 function renderForecastCard (fiveDayForecast) {
    var headingDiv= $("<div>");
    var heading = $("<h3>");
    headingDiv.attr("class","col-12");
    heading.text("5-Day Forecast");
    headingDiv.append(heading);
    foreCastContainer.html("");
    foreCastContainer.append(headingDiv);
    function noonTime (forecast){
      return forecast.dt_txt.includes("12");
    }
    var futureCast = fiveDayForecast.filter(noonTime);
    console.log(futureCast);
    for (var i = 0; i < futureCast.length; i++) {
      foreCastCard(futureCast[i]);

    }
}
 
function renderForeCast (city,data){
  renderForecastCard(data.list);
  
}
 