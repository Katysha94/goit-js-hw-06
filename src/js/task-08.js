const formEl = document.querySelector(".login-form");
console.log(formEl);

function handleSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    
    if (email.value === "" || password.value === "") {
        return alert("Fill in all the fields!")
    }

    console.log(`email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);