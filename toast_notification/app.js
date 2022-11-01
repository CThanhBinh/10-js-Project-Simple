const btn =  document.querySelector('button');
const section = document.querySelector('section')


const displayDiv = (setDisplay, operand) =>{
    let numDiv = operand;
    const timer =setInterval(() =>{
        const div = document.querySelector(`div:nth-of-type(${numDiv})`)
        div.style.display = setDisplay;
        if(numDiv >= 7) clearInterval(timer)
        numDiv +=1;
    },150)
}
btn.addEventListener('click', ()=>{ 
    displayDiv('block',1) 
    setTimeout(()=>{displayDiv('none', 1)},2000)
})


