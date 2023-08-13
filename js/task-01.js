const categoriesList = document.querySelector('#categories');
const itemList = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', itemList.length);

itemList.forEach(item => {
    const h2El = item.querySelector('h2').innerHTML;
    console.log('Category:', h2El);
    const itemslendth = item.querySelectorAll('li').length
    console.log('Elements:', itemslendth);

});



