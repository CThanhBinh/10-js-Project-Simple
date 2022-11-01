const container = document.querySelector('#container');
const img = document.querySelector('img')

const movePointer = (e)=>{
    let x = e.offsetX
    let y = e.offsetY
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = 'scale(3)'
}
img.addEventListener('mousemove',(e)=>{movePointer(e)})
container.addEventListener('mouseout',()=>{
    img.style.transform = 'scale(1)'
})


