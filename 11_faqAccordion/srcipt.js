const allAccordion = document.querySelectorAll(".accordion");
const faqContainer = document.querySelector('.faq-container');




allAccordion.forEach(element => {
    element.addEventListener('click', (e) => {
        const plusIcon = element.querySelector(".plus-icon");
        const minusIcon = element.querySelector(".minus-icon");
        const answer = element.querySelector(`.answer`);
        answer.classList.toggle('active');
        minusIcon.classList.toggle('active');
        plusIcon.classList.toggle('in-active');
  
    })
});
