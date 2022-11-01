const imgChain = document.querySelector('.image-container');
// let currentLeft = window.getComputedStyle(imgChain).getPropertyValue('left')
let reverse = false
let currentLeft = 0;

const timer = setInterval(()=>{
    if(!reverse){
        currentLeft -=20
        if(currentLeft === -60) reverse = true
    }else{
        currentLeft += 20
        if(currentLeft === 0) reverse = false
    }
    imgChain.style.left = `${currentLeft}vw`
},2000)

