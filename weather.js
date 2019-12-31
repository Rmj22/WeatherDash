$("#find-city").on("click", function(event) {

    event.preventDefault();

    var movie = $("#movie-input").val();

    var ApiKey = "60cd8f1a2d119cd70b98f1936f0a3ded"

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?"+"q=city&appid=" + ApiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
       $("#temp-view").text(JSON.stringify(response));

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Converts the temp to Kelvin with the below formula
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".tempF").text("Temperature (Kelvin) " + tempF);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
})