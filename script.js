const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secsE1 = document.getElementById('secs');


//input
var birthDay = prompt("Enter your birthday date in dd month yyyy format, for instance: 28 september 2022");

function cd(){
    const birthDayDate = new Date (birthDay);
    const currentDate = new Date();
    
    const totalSeconds = (birthDayDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins= Math.floor(totalSeconds / 60 % 60);
    const secs = Math.floor(totalSeconds % 60);
    
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secsE1.innerHTML = secs;
}


cd();

setInterval(cd,1000);
