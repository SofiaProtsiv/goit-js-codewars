// const sample = document.querySelector('#sample');
// sample.innerHTML = sample.innerText
//   .trim()
//   .split(' ')
//   .map(word => {
//     if (word.length > 8) {
//       return '<span class="hightlight">' + word + '</span>';
//     } else {
//       return word;
//     }
//   })
//   .join(' ');

// EXAMPLE 3
// 1.   const listItem = document.createElement('li');
//      listItem.innerHTML = listItem.innerText = '24/7 Phone support';
//      const list = document.querySelector('ul');
//      list.appendChild(listItem);

// 2.   const basic = document.querySelector('#basic-plan');
//      const pro = document.querySelector('#pro-plan');
//      const parent = basic.parentNode;
//      parent.insertBefore(basic, pro);
//      document.querySelector('.card-deck').style['flex-direction'] = 'row-reverse';

// 3.   const proCTA = document.querySelector('#pro-plan button');
//      proCTA.style.backgroundColor = '#007bff';
//      proCTA.style.color = '#fff';
//      proCTA.innerText = 'Buy Now';
//      proCTA.classList.add('btn-new');
//      proCTA.classList.remove('btn');

// 4.      const basicPlanStorage = document.querySelector('#basic-plan .storage-amount');
//         const proPlanStorage = document.querySelector('#pro-plan .storage-amount');
//         basicPlanStorage.innerText = basicPlanStorage.innerText * 1.5;
//         proPlanStorage.innerText - proPlanStorage.innerText * 1.25;

//5
// document.querySelector('.container').insertAdjacentHTML(
//   'afterBegin',
//   `
// <div class="select">
//     <label id="monthly" class="checked">
//         Monthly
//         <input id="monthlyPricing" type="radio" name="pricing"
//         value="monthly" checked>
//     </label>
//     <label id="annual">
//         Annual
//         <input
//         id="annualPricing"
//         type="radio"
//         name="pricing"
//         value="annual"
//         />
//     </label>
// </div>
// `
// );

// const pricing = {
//   monthly: { basic: '10 / month', pro: '30 / month' },
//   annual: { basic: '100 / year', pro: '300 / year' },
// };

// const changePricing = event => {
//   const option = event.target.value;

//   if (option === 'monthly') {
//     document.querySelector('#annual').classList.remove('checked');
//     document.querySelector('#monthly').classList.add('checked');
//   } else {
//     document.querySelector('#monthly').classList.remove('checked');
//     document.querySelector('#annual').classList.add('checked');
//   }

//   document.querySelector('#basic-plan .pricing').innerHTML =
//     pricing[option].basic;
//   document.querySelector('#pro-plan .pricing').innerHTML = pricing[option].pro;
// };
// // console.log('NodeList', document.querySelectorAll('input[type="radio"]'));

// Array.from(document.querySelectorAll('input[type="radio"]')).forEach(radio =>
//   radio.addEventListener('change', changePricing)
// );

// const appendFruitList = ['apple🍎', 'banana🍌'];
// const prependFruitList = ['grapes🍇', 'orange🍊'];
// const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
// const afterFruitList = ['peach🍑', 'kiwi🥝'];

// const ulEl = document.createElement('ul');
// document.querySelector('body').appendChild(ulEl);

// const listOfIngridients = array => {
//   return array.map(fruit => {
//     let item = document.createElement('li');
//     item.classList.add('item');
//     item.textContent = fruit;
//     return item;
//   });
// };

// ulEl.append(...listOfIngridients(appendFruitList));
// ulEl.prepend(...listOfIngridients(prependFruitList));
// ulEl.after(...listOfIngridients(afterFruitList));
// ulEl.before(...listOfIngridients(beforeFruitList));

// ulEl.addEventListener('click', e => console.log(e.target.innerText));

// // ulEl.removeChild(ulEl.querySelector('li'));
// const arrOfItemsInList = Array.from(ulEl.querySelectorAll('li'));
// const lastChildInList = arrOfItemsInList.length - 1;

// ulEl.removeChild(arrOfItemsInList[0]);
// ulEl.removeChild(arrOfItemsInList[lastChildInList]);
// //
//
//
//
//
// const pictures = [
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     width: 700,
//     height: 460,
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/
// const galleryListRef = document.querySelector('.gallery');

// const itemsList = pictures.map(
//   ({ preview, description, original, width, height }) => {
//     const liEl = document.createElement('li');
//     liEl.classList.add('gallery__item');

//     const imgEl = document.createElement('img');
//     imgEl.src = preview;
//     imgEl.alt = description;
//     imgEl.width = width;
//     imgEl.height = height;

//     liEl.append(imgEl);
//     return liEl;
//   }
// );

// galleryListRef.append(...itemsList);

// const galleryListRef = document.querySelector('.gallery');

// const itemsList = pictures
//   .map(({ preview, description }) => {
//     return `<li class="gallery__item">
//   <img src=${preview} alt=${description}>
// </li>`;
//   })
//   .join('');

// galleryListRef.innerHTML = itemsList;

const elP = document.createElement('p');

document.querySelector('body').prepend(elP);

const text = `Об'єктна модель документа (Document Object Model) - 
незалежний від мови інтерфейс для роботи з HTML-документом. 

Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
elP.innerText = text;
elP.innerHTML = elP.innerText
  .split(' ')
  .map(word => {
    if (word.length > 8) {
      const spanEl = document.createElement('span');
      spanEl.textContent = word;
      spanEl.style.backgroundColor = 'blue';
      console.log(spanEl);
      console.log(spanEl.outerHTML);
      return spanEl.outerHTML;

      // return '<span style="background-color:red">' + word + "</span>";
    }
    return word;
  })
  .join(' ');

// const mylinks = document.querySelector('#mylinks');

// console.log('textContent => ', mylinks.textContent);
// console.log('innerText => ', mylinks.innerText);
// console.log('innerHTML => ', mylinks.innerHTML);
// console.log('outerHTML => ', mylinks.outerHTML);

// console.log('textContent => ', elP.textContent);
// console.log('innerText => ', elP.innerText);
// console.log('innerHTML => ', elP.innerHTML);
// console.log('outerHTML => ', elP.outerHTML);

// const div = document.querySelector('#div');
// console.log('textContent => ', div.textContent); // Element.innerHTMLповертає HTML, як вказує його назва. Іноді люди використовують innerHTMLдля отримання або написання тексту всередині елемента, але textContentмає кращу продуктивність, оскільки його значення не аналізується як HTML.
// console.log('innerText => ', div.innerText);
// console.log('innerHTML => ', div.innerHTML);
// console.log('outerHTML => ', div.outerHTML);
