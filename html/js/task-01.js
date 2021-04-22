const element = document.getElementById('categories');
const categoryOfElement = element.children.length;
const category = document.querySelectorAll('ul > li.item');

console.log(`В списке ${categoryOfElement} категории.`);

category.forEach((el) => {
    console.log(
        `Категория: ${el.querySelector('h2').textContent}`,
        `Количество элементов: ${el.querySelectorAll('li').length}`
    )
});