const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(component => {
    const row = document.createElement('li');
    row.textContent = component;
    ingredientsList.append(row);
});