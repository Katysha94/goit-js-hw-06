function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector("#controls");
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]');