const element = document.querySelector('#categories');
const categoryOfElement = element.children.length;
const category = document.querySelectorAll('ul > li.item');

console.log(`В списке ${categoryOfElement} категории.`);

category.forEach((el) => {
    const titleOfCategory = el.querySelector('h2');
    const countElementOfCategory = el.querySelectorAll('li');
    console.log(
        `Категория: ${titleOfCategory.textContent}`,
        `Количество элементов: ${countElementOfCategory.length}`
    )
});