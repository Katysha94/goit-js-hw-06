const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ulEl = document.querySelector('#ingredients')
  console.log(ulEl);
const list = ingredients.map((item) => {
  const liEl = document.createElement('li');
  liEl.textContent =  item;
  liEl.classList.add("item");

  liEl.style.listStyle = "none"

  return liEl;
});

ulEl.append(...list)

