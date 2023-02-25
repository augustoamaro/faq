const questions = document.querySelector('.questions')
const awnsers = document.querySelector('.anwsers')

questions.addEventListener('click', () => {
    if (awnsers.classList.contains('anwsers')) {
        awnsers.classList.remove('anwsers');
    } else {
        awnsers.classList.add('anwsers');
    }
})