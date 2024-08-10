const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');



function show() {
    sidebar.classList.toggle('show');
}

bar.addEventListener('click', show);
closeBtn.addEventListener('click', show);