const btnToggle = document.querySelector('#toggleMode')
const body = document.body
btnToggle.addEventListener('click', ()=>{
    body.classList.toggle('colorBody')
    btnToggle.classList.toggle('colorBtn')
})


