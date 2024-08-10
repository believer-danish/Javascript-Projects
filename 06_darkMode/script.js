const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('yes');
  document.body.classList.toggle('dark')
})