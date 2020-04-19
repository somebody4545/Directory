$(document).ready(function(){

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      } else {
        console.log = "Geolocation is not supported by this browser.";
      }

    function success(pos) {
        var lat = pos.coords.latitude
        var long = pos.coords.longitude
        weather(lat, long);
    }

    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        $.getJSON(URL, function(data){
            console.log(data);
            updateDOM(data);
        });
    }



    function updateDOM(data){
        
        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);

    }


});
