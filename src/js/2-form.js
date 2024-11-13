const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
        formData.email = value.trim();
    } else if (name === 'message') {
        formData.message = value.trim();
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';
});