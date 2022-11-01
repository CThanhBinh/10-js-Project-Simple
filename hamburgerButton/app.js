const btn = document.querySelector('#btn')
const sideBar = document.querySelector('#toggleSideBar')

btn.addEventListener('click', ()=>{
    sideBar.classList.toggle('toggleDisplay')
    btn.classList.toggle('btnRight')
})