  // Here we construct our URL
  var APIKey = "1c1b77b2320a7c40bf8fdaca828e562a";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
  });