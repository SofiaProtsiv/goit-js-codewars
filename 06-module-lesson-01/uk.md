# Модуль 6. Заняття 11. DOM i events

## Example 1 - Список фруктів

Вам надано кілька назв різних фруктів і невпорядкований html-елемент списку;
додати елемент списку для кожного до невпорядкованого списку. Потім видали 1
елемент списку і останній.

```js
const appendFruitList = ['apple🍎', 'banana🍌'];
const prependFruitList = ['grapes🍇', 'orange🍊'];
const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
const afterFruitList = ['peach🍑', 'kiwi🥝'];

const ulElement;

const listOfIngridients = array => {};

ulElement.append(...listOfIngridients(appendFruitList));
ulElement.prepend(...listOfIngridients(prependFruitList));
ulElement.after(...listOfIngridients(afterFruitList));
ulElement.before(...listOfIngridients(beforeFruitList));
```

## Example 2 - Highlight

Вставте даний текст в html документ, а потім иділіть усі слова, які мають більше
8 символів у тексті абзацу (наприклад, жовтим фоном).

```js
const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
```

## Example 3 - Plans

Use template from file [plans.html](./example_3.html).

1. A new feature has been added to the Pro plan: '24/7 Phone support'. Add this
   using JavaScript to the list features of the Pro plan.

2. To make the ordering of the plans more logical, using JavaScript, move the
   basic plan to be before (to the left) of the pro plan.

3. To make the Pro plan have a stronger call to action, update the current 'Get
   started' button to be blue (#007bff) with white text and have the text 'Buy
   Now'

4. There is a special offer on at the moment offering 50% more storage on the
   Basic plan and 25% more on the Pro plan. Update the basic and pro plan cards
   to reflect the new storage amount being offered.

5. You have been asked to add ask a toggle / radio box for annual and monthly
   payments for the basic and pro plans. Add a radio button to toggle between
   monthly and annual payment options and adjust the prices shown for both
   plans. Use code below.

```js
const toggleTemplate = `
<div class="select">
    <label id="monthly" class="checked">
        Monthly 
        <input id="monthlyPricing" type="radio" name="pricing"
        value="monthly" checked>
    </label>
    <label id="annual">
        Annual
        <input
        id="annualPricing"
        type="radio"
        name="pricing"
        value="annual"
        />
    </label>
</div>
`;

const pricing = {
  monthly: { basic: '10 / month', pro: '30 / month' },
  annual: { basic: '100 / year', pro: '300 / year' },
};

const changePricing = event => {};

// console.log('NodeList', document.querySelectorAll('input[type="radio"]'));
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(radio =>
  radio.addEventListener('change', changePricing)
);
```

## Example - Gallery

Use template from file [gallery.html](./gallery.html).
