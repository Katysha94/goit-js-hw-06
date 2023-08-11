const inputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text")

const inputChange = evt => {
    const newFontSize = inputEl.value + "px";
    spanEL.style.fontSize = newFontSize
}

inputEl.addEventListener("input", inputChange)