const questions = document.querySelector('.questions')
const awnsers = document.querySelector('.anwsers')

questions.addEventListener('click', () => {
    // questions.children[0].style.color = '#1E1F36';
    // questions.children[0].style.fontWeight = '700';

    console.dir(questions)
    if (awnsers.classList.contains('anwsers')) {
        awnsers.classList.remove('anwsers');
    } else {
        awnsers.classList.add('anwsers');
    }
});