const question1 = document.querySelector('.question1')
const question2 = document.querySelector('.question2')
const question3 = document.querySelector('.question3')
const question4 = document.querySelector('.question4')
const question5 = document.querySelector('.question5')
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
const answer5 = document.querySelector('.answer5')



question1.addEventListener('click', () => {

    if (answer1.style.display === 'none') {
        question1.children[0].style.color = '#1E1F36';
        question1.children[0].style.fontWeight = '700';
        question1.children[1].style.transform = 'rotate(180deg)';
        answer1.style.display = 'flex';
    } else {
        question1.children[0].style.color = '#4B4C5F';
        question1.children[0].style.fontWeight = '400';
        question1.children[1].style.transform = 'rotate(0deg)';
        answer1.style.display = 'none';
    }
});

question2.addEventListener('click', () => {

    if (answer2.style.display === 'none') {
        question2.children[0].style.color = '#1E1F36';
        question2.children[0].style.fontWeight = '700';
        question2.children[1].style.transform = 'rotate(180deg)';
        answer2.style.display = 'flex';
    } else {
        question2.children[0].style.color = '#4B4C5F';
        question2.children[0].style.fontWeight = '400';
        question2.children[1].style.transform = 'rotate(0deg)';
        answer2.style.display = 'none';
    }
});

question3.addEventListener('click', () => {

    if (answer3.style.display === 'none') {
        question3.children[0].style.color = '#1E1F36';
        question3.children[0].style.fontWeight = '700';
        question3.children[1].style.transform = 'rotate(180deg)';
        answer3.style.display = 'flex';
    } else {
        question3.children[0].style.color = '#4B4C5F';
        question3.children[0].style.fontWeight = '400';
        question3.children[1].style.transform = 'rotate(0deg)';
        answer3.style.display = 'none';
    }
});

question4.addEventListener('click', () => {

    if (answer4.style.display === 'none') {
        question4.children[0].style.color = '#1E1F36';
        question4.children[0].style.fontWeight = '700';
        question4.children[1].style.transform = 'rotate(180deg)';
        answer4.style.display = 'flex';
    } else {
        question4.children[0].style.color = '#4B4C5F';
        question4.children[0].style.fontWeight = '400';
        question4.children[1].style.transform = 'rotate(0deg)';
        answer4.style.display = 'none';
    }
});

question5.addEventListener('click', () => {

    if (answer5.style.display === 'none') {
        question5.children[0].style.color = '#1E1F36';
        question5.children[0].style.fontWeight = '700';
        question5.children[1].style.transform = 'rotate(180deg)';
        answer5.style.display = 'flex';
    } else {
        question5.children[0].style.color = '#4B4C5F';
        question5.children[0].style.fontWeight = '400';
        question5.children[1].style.transform = 'rotate(0deg)';
        answer5.style.display = 'none';
    }
});






