const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    question.addEventListener('click', (e) => {
        console.log(e)

        if (e.target.style.display === 'none') {
            question.children[0].style.color = '#1E1F36';
            question.children[0].style.fontWeight = '700';
            question.children[1].style.transform = 'rotate(180deg)';
            e.target.style.display = 'flex';
        } else {
            question.children[0].style.color = '#4B4C5F';
            question.children[0].style.fontWeight = '400';
            question.children[1].style.transform = 'rotate(0deg)';
            e.target.style.display = 'none';
        }




    });



}



