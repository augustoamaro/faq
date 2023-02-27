const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        if (answers[index].style.display === 'none') {
            question.children[0].style.color = '#1E1F36';
            question.children[0].style.fontWeight = '700';
            question.children[1].style.transform = 'rotate(180deg)';
            answers[index].style.display = 'flex';
        } else {
            question.children[0].style.color = '#4B4C5F';
            question.children[0].style.fontWeight = '400';
            question.children[1].style.transform = 'rotate(0deg)';
            answers[index].style.display = 'none';
        }
    });
});

