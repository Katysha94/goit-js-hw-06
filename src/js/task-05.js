const inputEL = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");


const logHandler = evt => {
    if (evt.currentTarget.value === "") {
        outputEl.textContent = "Anonymous"
    } else {
    outputEl.textContent = evt.currentTarget.value;

    }
};

inputEL.addEventListener("input", logHandler);