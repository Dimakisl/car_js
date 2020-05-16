let start = false;
const engine = new Audio('./audio/engine.mp3');
const gaz = new Audio('./audio/car.mp3');
engine.loop = true;
engine.volume = 0.4;
let t1, t2;

document.querySelector('.start').addEventListener('click', function(){
    if(start === false){
        start = true;
        this.innerHTML = 'stop';
        engine.play();
        document.querySelector('.treadle').addEventListener('click', pushTreadle);
        document.querySelector('.progress-line').style.width = '100px';
    
    }else{
        start = false;
        this.innerHTML = 'start';
        engine.pause();
        document.querySelector('.treadle').removeEventListener('click', pushTreadle);
        document.querySelector('.progress-line').style.width = '0px';
        document.querySelector('.treadle').classList.remove('treadle-push');
        t1 = clearTimeout(t1);
        t2 = clearTimeout(t2);
        gaz.pause();
        gaz.currentTome = 0;
    }
});

function stopTreadle(){
    t1 = setTimeout(() => {
        document.querySelector('.treadle').classList.remove('treadle-push');
        document.querySelector('.progress-line').style.width = '100px';
    }, 1000);

    t2 = setTimeout(() => {
        gaz.pause();
        gaz.currentTome = 0;
    }, 1500);
}

function pushTreadle(){
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    this.classList.add('treadle-push');
    document.querySelector('.progress-line').style.width = '300px';
    gaz.play();
    stopTreadle();
}
