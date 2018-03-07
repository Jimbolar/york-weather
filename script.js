function toCelsius(f) {
    return ((5/9) * (f-32)).toFixed(0);
}

fetch('https://5dayweather.org/api.php?city=York').then(data => data.json()).then(weatherJSON => {

console.log('WEATHER_RECEIVED');

document.getElementById("york-weather").innerHTML = 'York Weather';
document.getElementById("weather").innerHTML = toCelsius(weatherJSON.data.temperature) + '&#8451';
document.getElementById("wind").innerHTML = (weatherJSON.data.wind);

console.log('TEMP_CALC_COMPLETE');

});
