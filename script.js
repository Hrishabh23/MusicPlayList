console.log("Welcome to Spotify")
// Initialize the Variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"},
    {songName: "Attitude Adjustment", filePath:"1.mp3", coverPath: "cover.png"}
    
]

//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
   
    //seek Bar Update;
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    
})