const WEATHER_APIKEY = "bd1f3c86bc32c3515e3f9417d009412b";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_APIKEY}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const CityContainer = document.querySelector("#weather span:last-child");
            CityContainer.innerText = data.name;
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoFail(){
    alert("Cannot Find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, () => {alert("Cannot Find You");});


// weahterapi key = bd1f3c86bc32c3515e3f9417d009412b