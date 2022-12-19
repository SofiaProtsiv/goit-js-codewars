//
//
//
//
//
//
//
// // const galleryEl = document.querySelector('.gallery');
// // const bannerImgEl = document.querySelector('.banner__img');
// // const galleryImgRef = document.querySelectorAll('.gallery__img');
// const galleryListRef = document.querySelector('.gallery');
// const bannerRef = document.querySelector('.banner__img');

// const changeBannetImg = event => {
//   event.preventDefault();
//   const { target } = event;
//   if (target.nodeName !== 'IMG') {
//     return;
//   }

//   bannerRef.src = target.dataset.bannerUrl;

//   bannerRef.alt = target.alt;
// };

// galleryListRef.addEventListener('click', changeBannetImg);

// // galleryImgRef.forEach(img =>
// //   img.addEventListener(
// //     'load',
// //     event => {
// //       event.target.classList.add('appear');
// //     },
// //     { once: true }
// //   )
// // );

// // const setSouce = () => {
// //   galleryImgRef.forEach(img => {
// // const source = img.dataset.src;
// // img.src = source;
// //   });
// // };

// // const createLazyScript = () => {
// //   const script = document.createElement('script');
// //   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
// //   script.setAttribute(
// //     'integrity',
// //     'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
// //   );
// //   script.setAttribute('crossorigin', 'anonymous');
// //   script.setAttribute('referrerpolicy', 'no-referrer');

// //   document.body.append(script);
// // };

// // if ('loading' in HTMLImageElement.prototype) {
// //   //   console.log('Атрибут loading підтримується!');
// //   setSouce();
// // } else {
// //   console.log('Атрибут loading не підтримується!');
// //   createLazyScript();
// // }

// // galleryEl.addEventListener('click', event => {
// //   event.preventDefault();

// //   const target = event.target;

// //   if (target.nodeName !== 'IMG') {
// //     return;
// //   }

// //   const bannerUrl = target.dataset.bannerUrl;
// //   bannerImgEl.src = bannerUrl;
// // });

// // const galleryImgRef = document.querySelectorAll('.gallery__img');

// // lasyLoad(galleryImgRef);
// // function lasyLoad(targets) {
// //   const option = {
// //     rootMargin: '100px',
// //   };
// //   const onEntry = (entries, observer) => {
// //     entries.forEach(entry => {
// //       if (entry.isIntersecting) {
// //         const image = entry.target;
// //         const src = image.dataset.src;
// //         image.src = src;
// //         image.classList.add('appear');
// //         observer.unobserve(image);
// //       }
// //     });
// //   };
// //   const io = new IntersectionObserver(onEntry, option);
// //   targets.forEach(target => io.observe(target));
// // }

// const galleryImgRef = document.querySelectorAll('.gallery__img');

// const lasyLoad = targets => {
//   const options = {
//     rootMargin: '150px',
//   };

//   const onEntry = (entries, observer) => {
//     entries.forEach(({ target, isIntersecting }) => {
//       if (isIntersecting) {
//         const source = target.dataset.src;
//         target.src = source;
//         target.classList.add('appear');
//         observer.unobserve(target);
//       }
//     });
//   };

//   const io = new IntersectionObserver(onEntry, options);

//   targets.forEach(target => io.observe(target));
// };

// lasyLoad(galleryImgRef);

//
//
//
//
//
//
//
// const refs = {
//   searchInputRef: document.querySelector('#search-box'),
//   errorTextRef: document.querySelector('.output-error'),
//   listRef: document.querySelector('.country-list'),
// };

// const { searchInputRef, errorTextRef, listRef } = refs;

// const handleInput = event => {
//   let { value } = event.target;

//   value = value.trim().toLowerCase();

//   if (value === '') {
//     errorTextRef.textContent = '';
//     listRef.innerHTML = '';
//     return;
//   }

//   const countryInfo = countries.filter(
//     ({ name }) => name.toLowerCase().includes(value)
//     // name.toLowerCase().startsWith(value)
//   );

//   if (countryInfo.length > 1) {
//     const listMarkup = createCountryList(countryInfo).join('');
//     listRef.innerHTML = listMarkup;
//     errorTextRef.textContent = '';
//   }

//   if (countryInfo.length === 1) {
//     const listMarkup = createCountryCard(countryInfo[0]);
//     listRef.innerHTML = listMarkup;
//     errorTextRef.textContent = '';
//   }

//   if (countryInfo.length === 0) {
//     listRef.innerHTML = '';
//     errorTextRef.textContent = `Countri ${value} not found!`;
//   }
// };
// const debouncedHandleInput = _.debounce(handleInput, 1000);
// searchInputRef.addEventListener('input', debouncedHandleInput);

// const createCountryList = counrtiesList => {
//   return counrtiesList.map(({ flag, name }) => {
//     return `<li>
//       <div class="countryFlag"">
//       <p class="countryName">${name} ${flag}</p>
//   </li>`;
//   });
// };

// const createCountryCard = ({ flag, name, capital, population, area }) => {
//   return `<div class="previewCard">
//       <div class="countryFlag">
//       <p class="countryName">${name} ${flag}</p>
//   </div>
//   <p class="countryCapital"><b>Capital:</b> ${capital}</p>
//   <p class="countryPopulation"><b>Population:</b> ${population}</p>
//   <p class="countryArea"><b>Area:</b> ${area}</p>`;
// };

// // const searchInputRef = document.querySelector('.search-input');
// // const errorTextRef = document.querySelector('.output-error');
// // const listRef = document.querySelector('.country-card');

// // const handleInput = event => {
// //   const { value } = event.target;

// //   if (value.trim() === '') {
// //     errorTextRef.textContent = '';
// //     return;
// //   }

// //   const countryInfo = countries.find(country => country.name === value.trim());

// //   if (!countryInfo) {
// //     errorTextRef.textContent = `Countri ${value} not found!`;
// //     listRef.innerHTML = '';
// //   }

// //   if (countryInfo) {
// //     errorTextRef.textContent = '';
// //     listRef.innerHTML = createCountryCard(countryInfo);
// //   }
// // };
// // const debouncedHandleInput = _.debounce(handleInput, 300);
// // searchInputRef.addEventListener('input', debouncedHandleInput);

// // const createCountryCard = ({ name, capital, area, population }) => {
// //   return `<li>
// //   <h3> Country name: ${name}</h3>
// //   <p>Country capital: ${capital}</p>
// //   <p>population: ${population}</p>
// //   <p>area: ${area}</p>
// //   </li>`;
// // };
//

//
//
//
// const markup = movies.map(
//   ({ id, poster_path, title, release_date, vote_average, genre_ids }) => {
//     return `<div class="movies__thumb">
//     <li class="movies__item" id="${id}">
//                 <img class="movies__poster" src=${poster_path} alt="${title} poster" loading="lazy" />
//             <p class="movies__name">${title}</p>
//             <p class="movies__genre">${genre_ids} | ${release_date}<span class="movies__ratinge">${vote_average}</span></p>
//     </li>
//     </div>`;
//   }
// );

// document
//   .querySelector('.container--gallery')
//   .insertAdjacentHTML('beforeend', markup);
//
//
//
//
//
//
// const onDocumentScroll = () => {
//   console.log(window.pageYOffset);

//   console.log(window);
//   if (window.pageYOffset > 800) {
//     console.log('4 section');
//     const animateSectionREf = document.querySelector('.animated-section');
//     animateSectionREf.classList.add('active');
//     document.removeEventListener('scroll', throttledScroll);
//   }
// };
// const handleScrollToTop = _ => {
//   window.pageYOffset >= 800
//     ? (document.querySelector('button').style.display = 'block')
//     : (document.querySelector('button').style.display = 'none');
// };

// document.querySelector('button').addEventListener('click', function () {
//   document.querySelector('body').scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//   });
// });
// window.addEventListener('scroll', _.throttle(handleScrollToTop, 300));

// const throttledScroll = _.throttle(onDocumentScroll, 300);

// document.addEventListener('scroll', throttledScroll);

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// const sectionsListRef = document.querySelectorAll('.section');

// sectionsListRef.forEach(
//   item => (item.style.backgroundColor = getRangomColor())
// );
//
//
//
//
//
//

//
//
//
//
//
//
// //
// const weatherBlock = document.querySelector('#weather');
// const input = document.querySelector('#input-field');
// const message = document.querySelector('#error-text');

// const weatherData = [
//   {
//     main: 'Clouds',
//     description: 'overcast clouds',
//     icon: '04n',
//     temp: 2.12,
//     feels_like: -3.06,
//     temp_min: 2.12,
//     temp_max: 2.12,
//     location: 'Ukraine',
//   },
//   {
//     main: 'Clouds',
//     description: 'overcast clouds',
//     icon: '04d',
//     temp: 11.69,
//     feels_like: 11.32,
//     temp_min: 11.14,
//     temp_max: 11.69,
//     location: 'Spain',
//   },
//   {
//     main: 'Clear',
//     description: 'clear sky',
//     icon: '01d',
//     temp: 4.07,
//     feels_like: 3.11,
//     temp_min: 2.84,
//     temp_max: 5.75,
//     location: 'Italy',
//   },

//   {
//     main: 'Clouds',
//     description: 'scattered clouds',
//     icon: '03d',
//     temp: -1.26,
//     feels_like: -1.26,
//     temp_min: -6.42,
//     temp_max: -0.18,
//     location: 'Germany',
//   },
//   {
//     main: 'Mist',
//     description: 'mist',
//     icon: '50d',
//     temp: -0.61,
//     feels_like: -5.45,
//     temp_min: -1.36,
//     temp_max: 0.88,
//     location: 'Poland',
//   },

//   {
//     main: 'Clear',
//     description: 'clear sky',
//     icon: '01d',
//     temp: 0.96,
//     feels_like: -3.46,
//     temp_min: 0.15,
//     temp_max: 2.22,
//     location: 'England',
//   },
//   {
//     main: 'Clouds',
//     description: 'broken clouds',
//     icon: '04d',
//     temp: 13.92,
//     feels_like: 12.86,
//     temp_min: 13.44,
//     temp_max: 14.78,
//     location: 'Cañada',
//   },
// ];

// const handleInput = event => {
//   let { value } = event.target;

//   value = value.trim().toLowerCase();

//   if (value === '') {
//     message.textContent = '';
//     weatherBlock.style.dispay = 'none';
//     return;
//   }

//   const weatherInfo = weatherData.filter(({ location }) =>
//     location.toLowerCase().includes(value)
//   );

//   if (weatherInfo.length > 1) {
//     message.textContent = `Too many results found, please refine your search...`;
//     weatherBlock.style.display = 'none';
//   }

//   if (weatherInfo.length === 1) {
//     weatherBlock.style.display = 'block';
//     weatherBlock.innerHTML = getWeather(weatherInfo[0]);
//     message.textContent = '';
//   }

//   if (weatherInfo.length === 0) {
//     weatherBlock.style.display = 'none';
//     message.textContent = `Country ${value} not found!`;
//   }
// };
// const debouncedHandleInput = _.debounce(handleInput, 1000);
// input.addEventListener('input', debouncedHandleInput);

// function getWeather({ location, icon, feels_like, temp, main, description }) {
//   return `
// 	<div class="weather__header">
// 		<div class="weather__main">
// 			<div class="weather__city">${location}</div>
// 			<div class="weather__status">${main}</div>
// 		</div>
// 		<div class="weather__icon">
// 			<img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
// 		</div>
// 	</div>
// 	<div class="weather__temp">${Math.round(temp)}</div>
// 	<div class="weather__feels-like">Feels like: ${Math.round(feels_like)}</div>`;
// }
//
//
//
//
//
