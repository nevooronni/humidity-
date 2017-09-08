//cusotm js file

var apiKey = "f831c760fcc8e27b5ef8c874c5e08fe6";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      //console.log(response);//api request
      //console.log(JSON.stringify(response));//json request to js object json object to json dat displayed in string
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});