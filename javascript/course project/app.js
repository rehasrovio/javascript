import * as ELEMENTS from 'elements.js';
import {Http} from 'http.js'
import { WEATHER_PROXY_HANDLER, weatherData } from './weather.js';
// app.js:15 Uncaught TypeError: Cannot read properties of undefined (reading 'fetchData')
//     at HTMLButtonElement.searchWeather (app.js:15:8)
// searchWeather @ app.js:15
const APP_ID = 'bbb97d144b2d578b97741214de02a334';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
function searchWeather(){
    console.log('inside search');
     const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
     console.log(CITY_NAME)
    if(CITY_NAME.length == 0){
        return alert('please enter a city name!');
    }
    console.log(CITY_NAME);
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME+ '&units=metric&appid='+ APP_ID ;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new weatherData(CITY_NAME, responseData.weather[0].description);
            const WEATHER_PROXY = new Promise(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert('ERROR!!'))
}

function updateWeather(weatherData){
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}