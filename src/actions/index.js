import axios from 'axios';

const API_KEY = '0cd95e5aef300a8493b5da3af5fb337f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;
  const req = axios.get(url);
  
  console.log(req);
  
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}