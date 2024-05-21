const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');


let hrs=mins=sec=ms=0,startTimer;

btnStart.addEventListener('click',()=>{



    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
 
    startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            mins++;
            sec=0;
        }
        if(mins==60){
            hrs++;
            mins=0;
        }
        updateDisplay();

    },10);
    
});

btnStop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
 
});

btnReset.addEventListener('click',()=>{
    hrs=mins=sec=ms=0;
    updateDisplay();
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
    
});

function updateDisplay(){

    ahrs=hrs<10?'0'+hrs:hrs;
    amins=mins<10?'0'+mins:mins;
    asec=sec<10?'0'+sec:sec;
    ams=ms<10?'0'+ms:ms;




    document.querySelector('.hrs').innerText=ahrs;
    document.querySelector('.mins').innerText=amins;
    document.querySelector('.sec').innerText=asec;
    document.querySelector('.ms').innerText=ams;
}