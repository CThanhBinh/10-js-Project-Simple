const button = document.querySelector('button');
const body = document.body
const rainBow = ()=>{
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
    

const color = ()=>{
    body.style.backgroundColor = rainBow()
}
button.addEventListener('click',color)
