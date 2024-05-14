

console. log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('music1.mp3' );
let masterPlay = document.getElementById( 'masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById ('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"TVARI-Tokyo Cafe", filePath: "music1.mp3"},
    {songName:"Happy Day", filePath: "music2,mp3"},
    {songName:"Beyond Horizons", filePath:"music3.mp3"},
    {songName:"Dancing in the Stardust", filePath:"music4.mp3"},
    {songName:"On top of the Charts- V2", filePath:"music5.mp3"},
]




masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        serious.style.opacity=0;   
        boylisten.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        boylisten.style.opacity=0;
        serious.style.opacity=1;
    }
})


audioElement.addEventListener('timeupdate', ()=>{

    
//updating seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);    

    myProgressBar.value = progress;
myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

})

Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    songIndex = parseInt(e.target.id);
    console.log(e.target)
    audioElement.src=`music${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1; 
    serious.style.opacity=0;   
    boylisten.style.opacity=1;

    
})}
)

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`music${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
    serious.style.opacity=0;   
     boylisten.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`music${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1;
    serious.style.opacity=0;   
    boylisten.style.opacity=1;
})