// window.open("", "MsgWindow", "width=200,height=100");

var Switch = document.querySelector("#toggle");
var Status = document.querySelector('.status');
var workOrRest = document.querySelector('#work-or-rest');
var minuteDisplay = document.querySelector('#minute-display');
var secondDisplay = document.querySelector('#second-display');
var playBtn = document.querySelector('#play');
var pauseBtn = document.querySelector('#pause');
var stopBtn = document.querySelector('#stop');
var pauseBtn = document.querySelector('#pause');
var stopBtn = document.querySelector('#stop');
var workInput = document.querySelector("#work-input");
var restInput = document.querySelector("#rest-input");
var minUpBtn = document.querySelector('#timeUpBtn');
var minDownBtn = document.querySelector('#timeDownBtn');
var timer;
var totalSeconds;

function statusToggle(){
    if(Switch.checked === true){
        workOrRest.textContent = 'Study Timer';
        minuteDisplay.textContent = workInput.value;
    }else{
        workOrRest.textContent = 'Rest Timer';
        minuteDisplay.textContent = restInput.value;
    }
}
function minuteCal(){
    var minute = Math.floor(totalSeconds/60);
    minuteDisplay.textContent = minute;
    if(minute<10){
        minuteDisplay.textContent = '0' + minute;
    }
}
function secondCal(){
    var second = totalSeconds%60;
    secondDisplay.textContent = second;
    if(second<10){
        secondDisplay.textContent = '0' + second;
    }
}
function timerCal(){
    if(Switch.checked === true){
        totalSeconds = (workInput.value)*60;
    }else{
        totalSeconds = (restInput.value)*60;
    }
    timer = setInterval(function(){
        totalSeconds--;
        if(totalSeconds<1){
            clearInterval(timer);
        }
        minuteCal();
        secondCal();
    },1000)
}
function play(){
    clearInterval(timer);
    timerCal();
}
function pause(){
    clearInterval(timer);
}
function stop(){
    clearInterval(timer);
    minuteDisplay.textContent = workInput.value;
    secondDisplay.textContent = '00';
    totalSeconds = workInput.value;
}
function timesUp(){
    if(Switch.checked === true){
        workInput.value++;
    }else{
        restInput.value++;
    }
}
function timesDown(){
    if(Switch.checked === true){
        workInput.value--;
    }else{
        restInput.value--;
    }
}

Switch.addEventListener('click', statusToggle);
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);
minUpBtn.addEventListener('click', timesUp);
minDownBtn.addEventListener('click', timesDown);
