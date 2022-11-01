const div = document.querySelector('div');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let PlayingSong;

sounds.forEach(sound => {
    const btn = document.createElement('button')
    const song = document.querySelector('.'+ sound)
    btn.innerHTML = sound
    
    btn.addEventListener('click', () =>{
        if(PlayingSong){
            PlayingSong.pause()
            PlayingSong.currentTime = 0
        }
        song.play()
        PlayingSong = song
    })

    div.appendChild(btn)
});


