
const counter = document.querySelector("#value");
console.log(counter);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
})