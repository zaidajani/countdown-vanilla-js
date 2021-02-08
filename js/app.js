let tl = document.getElementById('time-left');
let audioPlay = document.getElementById('alarm-audio');
let enter = document.getElementById('enter');
let timer = document.getElementById('timer-sec');
let cd = document.getElementById('cd');
let timeleft = 5;

enter.addEventListener('click', () => {
  timeleft = timer.value;
  let fun = setInterval(system, 1000);

  function system() {
    tl.innerText = timeleft;
    timeleft -= 1;
    if (timeleft < 0) {
      stop();
      audioPlay.play();
    } 
  }
  
  function stop() {
    clearInterval(fun);
  }
});