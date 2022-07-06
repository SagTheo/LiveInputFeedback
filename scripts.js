const emailRegex = new RegExp(/\w+@\w+\.[a-z]{2,}/) 

const input = document.querySelector('#email')
const check = document.querySelector('.bi-check2')

input.addEventListener('input', () => {
    if (emailRegex.test(input.value)) {
        if (!check.classList.contains('show') && !input.classList.contains('valid')) {
            check.classList.add('show')
            input.classList.add('valid')
        }
    } else {
        if (check.classList.contains('show') && input.classList.contains('valid')) {
            check.classList.remove('show')
            input.classList.remove('valid')
        }
    }
})