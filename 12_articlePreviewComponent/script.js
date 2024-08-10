const shareBtn = document.querySelector('.share-btn');
const hidden = document.querySelector('.hidden');



shareBtn.addEventListener('click', () => {
    hidden.classList.toggle('active');
})