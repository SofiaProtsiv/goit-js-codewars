const inputField = document.querySelector('.search-bar');
const locationBtn = document.querySelector('#get_location_btn');
const searchBtn = document.querySelector('#search_btn');
const infoTxt = document.querySelector('.info_text');
const content = document.querySelector('.content');

let api;

inputField.addEventListener('keyup', e => {
  // if user pressed enter btn and input value is not empty
  if (e.key === 'Enter' && inputField.value !== '') {
    requestApi(inputField.value);
  }
});

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    // if browser support geolocation api
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert('Your browser not support geolocation api');
  }
});

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=522f7ec766b55c89fccbc47a4e7a72c0`;
  fetchData();
}
function onSuccess(position) {
  const { latitude, longitude } = position.coords; // getting lat and lon of the user device from coords obj
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=522f7ec766b55c89fccbc47a4e7a72c0`;
  fetchData();
}

// function onError(error) {
//   // if any error occur while getting user location then we'll show it in infoText
//   content.innerHTML = '';
//   infoTxt.innerText = error.message;
//   infoTxt.classList.add('error');
//   infoTxt.classList.remove('pending');
// }

function fetchData() {
  content.innerHTML = '';
  infoTxt.innerText = 'Getting weather details...';
  infoTxt.classList.add('pending');
  infoTxt.classList.remove('error');
  // getting api response and returning it with parsing into js obj and in another
  // then function calling weatherDetails function with passing api result as an argument
  fetch(api)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        // if user entered city name isn't valid
        setTimeout(() => {
          content.innerHTML = '';
          infoTxt.classList.replace('pending', 'error');
          infoTxt.innerText = `❌ ${inputField.value.toLocaleUpperCase()} isn't a valid city name`;
          throw new Error(`${inputField.value} isn't a valid city name`);
        }, 1000);
      }
    })
    .then(result => {
      setTimeout(() => {
        weatherDetails(result);
        inputField.value = '';
      }, 1000);
    })
    .catch(error => {
      console.log(error);
    });
}

function weatherDetails(data) {
  //getting required properties value from the whole weather information
  const { name } = data;
  const { country } = data.sys;
  const { icon, description } = data.weather[0];
  const { temp, humidity, feels_like } = data.main;
  const { speed } = data.wind;

  infoTxt.classList = 'info_text';
  //passing a particular weather info to a particular element

  return (content.innerHTML = ` <div class="weather">
    <h2 class="city">Weather in ${name}, ${country}</h2>
    <h1 class="temp">${Math.floor(temp)}°C</h1>
    <div class="flex">
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon" />
      <div class="description">${description}</div>
    </div>
    <div class="feels_like">Feels like: ${Math.floor(feels_like)}°C</div>
    <div class="humidity">Humidity: ${humidity}%</div>
    <div class="wind">Wind speed: ${speed} km/h</div>
  </div>`);
}
