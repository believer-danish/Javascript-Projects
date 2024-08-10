const links = document.querySelector('.header-links');
const cross = document.querySelector('.cross');
const bar = document.querySelector('.bar');





cross.addEventListener('click', () => {
    console.log('h');
    links.classList.toggle('active');
    bar.classList.toggle("inactive");

})

bar.addEventListener('click', () => {
    console.log('h');
    links.classList.toggle('active');
      bar.classList.toggle("inactive");
})

