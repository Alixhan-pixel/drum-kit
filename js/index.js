let key = document.getElementById('key1');




window.addEventListener('keydown', function(e){
    if(e.keyCode == 65){
        const audio = document.querySelector(".key-65");
        const colorBack = document.querySelector('.key65')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 83){
        const audio = document.querySelector(".key-83");
        const colorBack = document.querySelector('.key83')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 68){
        const audio = document.querySelector(".key-68");
        const colorBack = document.querySelector('.key68')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 70){
        const audio = document.querySelector(".key-70");
        const colorBack = document.querySelector('.key70')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 71){
        const audio = document.querySelector(".key-71");
        const colorBack = document.querySelector('.key71')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 72){
        const audio = document.querySelector(".key-72");
        const colorBack = document.querySelector('.key72')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 74){
        const audio = document.querySelector(".key-74");
        const colorBack = document.querySelector('.key74')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 75){
        const audio = document.querySelector(".key-75");
        const colorBack = document.querySelector('.key75')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);
        audio.currentTime = 0;
        audio. play();
    }else if(e.keyCode == 76){
        const audio = document.querySelector(".key-76");
        const colorBack = document.querySelector('.key76')
        colorBack.classList.add('active');
        setTimeout(function(){
            colorBack.classList.remove('active');
        }, 200);    
        audio.currentTime = 0;
        audio. play();
    }else{
        return;
    }
})


// BackGround Video Pause Button
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    }else {
        video.pause();
        btn.innerHTML = "Play";
    }
} 