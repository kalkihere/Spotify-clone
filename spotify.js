console.log("welcome to spotify");
let songindex= 0;
let audioElement = new Audio ('1.mp3');
let masterplay = document.getElementById('masterplay');
let progress_bar = document.getElementById('progress_bar');

let songs = [
    {songname:"suzumi" , filepath: "Suzume-No-Tojimari-Title-Track(PaglaSongs) - Copy.mp3" , coverpath:"images\Spotify-background.png"},

]

masterplay.addEventListener('click',()=>{
    if(AudioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }});
    progress_bar.addEventListener('timeupdate', ()=>
{console.log("timeupdate");})