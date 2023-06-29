// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed =document.querySelector('#windspeed');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Quito&units=imperial&appid=5736c1d2e697ad882d7f471c5aff64d5"


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = (desc);


  
  windspeed.textContent = weatherData.wind.speed.toFixed(1);

  const t = weatherData.main.t;
  const wind = weatherData.wind.speed;

  

  // if temp is below 50 and wind is higher than 3 do this
if (t <= 50 && wind > 3) 
{
  // calc the windchill
  let windchill = 35.74 + 0.6215 * t -35.75 * wind **0.16 + 0.4275 * t * wind ** 0.16;
  // display the windchill on the page
  document.querySelector('#windchill').textContent = windchill.toFixed(1);

}
}

function capitalize(s) {
  const words = s.split(" ");
  //console.log(words);

  // loop array to change the first letter in each array itme to cap
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

apiFetch();