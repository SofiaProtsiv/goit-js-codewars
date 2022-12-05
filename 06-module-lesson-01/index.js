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

const appendFruitList = ['apple🍎', 'banana🍌'];
const prependFruitList = ['grapes🍇', 'orange🍊'];
const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
const afterFruitList = ['peach🍑', 'kiwi🥝'];

const ulEl = document.createElement('ul');
document.querySelector('body').appendChild(ulEl);

const listOfIngridients = array => {
  const nodeList = [];
  array.forEach(fruit => {
    const item = document.createElement('li');
    item.textContent = fruit;
    nodeList.push(item);
  });
  return nodeList;
};
ulEl.append(...listOfIngridients(appendFruitList));
ulEl.prepend(...listOfIngridients(prependFruitList));
ulEl.after(...listOfIngridients(afterFruitList));
ulEl.before(...listOfIngridients(beforeFruitList));

//first
// ulEl.removeChild(ulEl.querySelector('li'));
// //last
// const arrOfItemsInList = Array.from(document.querySelectorAll('li'));
// const lastChildInList = arrOfItemsInList.length - 1;
// ulEl.removeChild(arrOfItemsInList[lastChildInList]);
