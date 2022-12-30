const categories = document.querySelector('#categories')
console.log("Number of categories:", categories.children.length);

const category = document.querySelectorAll('.item')

category.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.querySelectorAll("li").length);
});