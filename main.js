const firstNameInput = document.querySelector('#first-name')
const firstNamecheck = document.querySelector('#first-name-check')
firstNameInput.addEventListener('blur', () => {
    if (firstNameInput.value.length === 0) {
        firstNameInput.classList.add('is-danger')
        firstNameInput.classList.remove('is-primary')
        firstNamecheck.classList.add('fa-xmark', 'has-text-danger')
        firstNamecheck.classList.remove('fa-check', 'has-text-primary')
    } else {
        firstNameInput.classList.remove('is-danger')
        firstNameInput.classList.add('is-primary')
        firstNamecheck.classList.remove('fa-xmark', 'has-text-danger')
        firstNamecheck.classList.add('fa-check', 'has-text-primary')
    }
})

const lastNameInput = document.querySelector('#last-name')
const lastNamecheck = document.querySelector('#last-name-check')
lastNameInput.addEventListener('blur', () => {
    if (lastNameInput.value.length === 0) {
        lastNameInput.classList.add('is-danger')
        lastNameInput.classList.remove('is-primary')
        lastNamecheck.classList.add('fa-xmark', 'has-text-danger')
        lastNamecheck.classList.remove('fa-check', 'has-text-primary')
    } else {
        lastNameInput.classList.remove('is-danger')
        lastNameInput.classList.add('is-primary')
        lastNamecheck.classList.remove('fa-xmark', 'has-text-danger')
        lastNamecheck.classList.add('fa-check', 'has-text-primary')
    }
})

const emailValidator = require("email-validator/")
const emailInput = document.querySelector('#email')
const emailCheck = document.querySelector('#email-check')
emailInput.addEventListener('blur', () => {
    if (emailValidator.validate(emailInput.value)) {
        emailInput.classList.remove('is-danger')
        emailInput.classList.add('is-primary')
        emailCheck.classList.remove('fa-xmark', 'has-text-danger')
        emailCheck.classList.add('fa-check', 'has-text-primary')
    } else {
        emailInput.classList.remove('is-primary')
        emailInput.classList.add('is-danger')
        emailCheck.classList.remove('fa-check', 'has-text-primary')
        emailCheck.classList.add('fa-xmark', 'has-text-danger')
    }
})

const passwordRules = require('./password-rules')
const passwordInput = document.querySelector('#password')
const passWordCheck = document.querySelector('#password-check')
const passwordMessage = document.querySelector('#message-content')
passwordInput.addEventListener('blur', () => {
    if (passwordRules(passwordInput.value)) {
        passwordInput.classList.remove('is-primary')
        passwordInput.classList.add('is-danger')
        passWordCheck.classList.add('fa-xmark', 'has-text-danger')
        passWordCheck.classList.remove('fa-check', 'has-text-primary')
        passwordMessage.innerHTML = `${passwordRules(passwordInput.value).sentence}`
    } else {
        passwordInput.classList.add('is-primary')
        passwordInput.classList.remove('is-danger')
        passWordCheck.classList.remove('fa-xmark', 'has-text-danger')
        passWordCheck.classList.add('fa-check', 'has-text-primary')
        passwordMessage.innerHTML = ``
    }
})