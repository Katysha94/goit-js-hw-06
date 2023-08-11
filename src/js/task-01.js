const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);

const itemList = categoriesList.querySelectorAll('.item');
// console.log(itemList);

itemList.forEach(item => {
    const h2El = item.querySelector('h2').innerHTML;
    console.log('Category:', h2El);
    const itemslendth = item.querySelectorAll('li').length
    console.log(itemslendth);

});



