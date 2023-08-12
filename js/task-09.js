function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const bgBtnColor = document.querySelector(".color");

const changeColor = evt => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bgBtnColor.textContent = randomColor;
};

changeBtn.addEventListener("click", changeColor)