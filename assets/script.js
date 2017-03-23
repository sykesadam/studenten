function updateTimer(deadline){
  const time = deadline - new Date();
  return {
    'days': Math.floor( time/(1000*60*60*24) ),
    'hours': Math.floor( (time/(1000*60*60)) % 24 ),
    'minutes': Math.floor( (time/1000/60) % 60 ),
    'seconds': Math.floor( (time/1000) % 60 ),
    'total': time
  };
}

function startTimer(id, deadline){
  const timerInterval = setInterval( () => {
    const clock = document.getElementById(id);
    const timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';

    //check for end of timer
    if (timer.total < 1){
      clearInterval(timerInterval);
      clock.innerHTML = '<h1>DAX O DRICKA!!</h1>';
    }

  }, 1000);
}

window.onload = () => {
  const deadline = new Date("Juni 9, 2017 12:00:00");
  startTimer("clock", deadline);
}
