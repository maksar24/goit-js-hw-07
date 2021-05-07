const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const preparedIngredients = ingredients.map(component => {
    const row = document.createElement('li');
    row.textContent = component;
  return row;
});

ingredientsList.append(...preparedIngredients);