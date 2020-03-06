//Handels information that displays at the top of the page 
var forecast;
$("#find-city").on("click", function(event) {

    var scity = $.trim($("#city-input").val());
  console.log("your looking at the weather in: " + scity);

   event.preventDefault();

  var ApiKey = "60cd8f1a2d119cd70b98f1936f0a3ded"

  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + scity +"&units=imperial&appid=" + ApiKey;
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    //  $("#temp-view").html(JSON.stringify(response));
    //  forecast = response.list
     var city = response.city.name;
     var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

     var ctemp = response.list[0].main.temp;
     var we = response.list[0].weather[0].main
     var des = response.list[0].weather[0].description
     var hum = response.list[0].weather[0].main.humidity
     var img = response.list[0].weather[0].icon
     var ccity = $("#current_city");
     var td = $("#time");
     var pic = "https://openweathermap.org/img/w/" + img +".png";
    //  console.log(response)
     ;

     var title = $("#current_city")
     var sum = $("#info")
     
     
     ccity.empty();
     sum.empty();
    
     $(ccity).html("<h1>" + city + " Current Weather</h1>");
     $(td).html("<h2>" + time + " current time</h2>");
     $(sum).html("<p1>" + des + " </p1>");
     $("#wicon").attr('src', pic)

     fiveday(response.list)
   
    //  images(response.list.weather.icon)
    
  })

})

// function images(img4){
//   for (let i = 0;i < img4.length i++) {
    
//   }
// }
function fiveday(arr) {
  // console.log(arr[3].dt_txt)

  for (let i = 0; i < arr.length; i++) {
    if(arr[i].dt_txt.indexOf("15:00:00")!==-1){
      // console.log(arr[i])
      var five = $("#fiveday")
      // var dicon = $("#dicon").attr('src', pic + arr[i].weather.icon)
      var card = $("<div>").addClass("card")
     var title = $("<h2>").text(new Date(arr[i].dt_txt))
     var temp = $("<p>").text("temp: " + arr[i].main.temp_max + " F")
     var desc =$("<p1>").text("humidity " + arr[i].main.humidity + "%")
     
    five.append(card.append(title, temp, desc))
    
     console.log("the humidity is " + desc)
    }
    // console.log(arr[i])
  }
}
  

// function fiveday() {

//   var jcity = $.trim($("#city-input").val());
//   console.log("your looking at the weather in: " + jcity);

//    event.preventDefault();

//   var ApiKey = "60cd8f1a2d119cd70b98f1936f0a3ded"

//   var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + jcity +"&units=imperial&appid=" + ApiKey;
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(respon) {

//       console.log(respon)
  
// var cud = $("<div>");
// var d1 = $("<div>");
// var i1 = $("#i1")
// var d2 = $("<div>");
// var i2 = $("#i2")
// var d3 = $("<div>");
// var i3 = $("#i3");
// var d4 = $("<div>");
// var i4 = $("#i4");
// var d5 = $("<div>");
// var i5 = $("#i5");

// var img1 = response.list[1].weather[0].icon
// var img2 = response.list[2].weather[0].icon
// var img3 = response.list[3].weather[0].icon
// var img4 = response.list[4].weather[0].icon
// var img5 = response.list[5].weather[0].icon

// var btemp = response.list[0].main.temp;
// var wea = response.list[1].weather[0].main
// var desc = response.list[1].weather[0].description
// var humi = response.list[1].weather[0].main.humidity
// var img0 = response.list[1].weather[0].icon
// var fdf = $("#fiveday");
// var pic2 = "http://openweathermap.org/img/w/" + img +".png";

// $(fdf).html("<h1>" + city + " Current Weather</h1>");
//   $(sum).html("<p1>" + des + " </p1>");
//   $("#wicon").attr('src', pic)

// // console.log(wea)

// current_day = response.list[0].dt
// day1 = response.list[1].dt
// day2 = response.list[2].dt
// day3 = response.list[3].dt
// day4 = response.list[4].dt
// day5 = response.list[5].dt

// fdf.empty()


// })}