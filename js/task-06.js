const inputEl = document.querySelector("#validation-input")
console.log(inputEl)

const greetingHandler = evt => {
    const enteredValue = evt.currentTarget.value;
    const inputLength = inputEl.getAttribute("data-length");

    if (enteredValue.length === Number(inputLength)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    
}

inputEl.addEventListener("blur", greetingHandler)