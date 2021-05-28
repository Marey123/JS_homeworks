
const refs = 
{
    days : document.querySelector('span[data-value="days"]'),
    hours : document.querySelector('span[data-value="hours"]'),
    minutes : document.querySelector('span[data-value="mins"]'),
    seconds : document.querySelector('span[data-value="secs"]')

};
class Timer{
    constructor(days,hours,minutes,seconds){
       this.days = days;
       this.hours = hours;
       this.minutes = minutes;
       this.seconds = seconds;
      
      
      
    }
   

    StartTimer(){
      let thisData = Date.now();

      let countDownDate = thisData + (this.days * 1000 * 60 * 60 * 24)+(this.hours * 1000 * 60 * 60)+(this.minutes * 1000 * 60)+(this.seconds * 1000)
       
        let interval = setInterval(function() {
          
            thisData = Date.now();
            let distance = countDownDate - thisData;
            
            let new_days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let new_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let new_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let new_seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
            refs.days.innerHTML = new_days;
            refs.hours.innerHTML = new_hours;
            refs.minutes.innerHTML = new_minutes;
            refs.seconds.innerHTML = new_seconds;
 
              
          
            if (distance < 0) {
              clearInterval(interval);
              refs.days.innerHTML = 0;
              refs.hours.innerHTML = 0;
              refs.minutes.innerHTML = 0;
              refs.seconds.innerHTML = 0;
            }
          }, 1000);
    }

}


const MyTimer = new Timer(100,20,20,20)
MyTimer.StartTimer();


