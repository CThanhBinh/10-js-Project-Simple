const text= "My viewer on Twitch are the best !! <3" 

let i = 0;
const div = document.querySelector('div');

const writeAuto = ()=>{
    div.innerHTML = text.slice(0, i)
    i++ 
    if(i > text.length) i = 0
}
const timer = setInterval(writeAuto, 100)


