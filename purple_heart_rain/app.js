
for(let i=0; i<300; i++){
    const position = Math.random()*100+'vw'
    const heart = document.createElement('div')
    heart.innerHTML = '❤'
    heart.classList.add('heart')
    heart.style.left = position
    document.body.appendChild(heart)
}
const createHeart = ()=>{
    let oderHeart = Math.floor(Math.random()*150)
    const ordered = document.querySelector(`div:nth-of-type(${oderHeart})`)
    if(ordered) {
        ordered.classList.add('heartRain')
        setTimeout(()=>{
            ordered.classList.remove('heartRain')
        },6000)
    }
}

const timer = setInterval(createHeart,200)

