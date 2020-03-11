const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 
// Вариант 1

const setMarkup = elements => {

  const createArrMarkup = (arrMarkup, ingredient) => {
    const element = document.createElement('li');
    element.textContent = ingredient;
    arrMarkup.push(element);
    return arrMarkup;
  };

  const listElementMarkup = elements.reduce(createArrMarkup, []);

  const ingredientsRef = document.querySelector('ul#ingredients');
  ingredientsRef.append(...listElementMarkup);
};

// Вариант 2

// const setMarkup = (elements) => {
//   const ingredientsRef = document.querySelector('ul#ingredients');

//   ingredients.forEach(ingredient => {
//     const element = document.createElement('li');
//     element.textContent = ingredient;
//     ingredientsRef.appendChild(element);
//   });
// };

setMarkup(ingredients);
