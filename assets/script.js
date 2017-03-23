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
      const cont = document.getElementById('del-countdown');
      const timer = updateTimer(deadline);

      clock.innerHTML = '<span>' + timer.days + '</span>'
                      + '<span>' + timer.hours + '</span>'
                      + '<span>' + timer.minutes + '</span>'
                      + '<span>' + timer.seconds + '</span>';

      //check for end of timer
      if (timer.total < 1){
        clearInterval(timerInterval);
        cont.innerHTML = `<h1>🎉STUDENTEN🎉</h1>
                          <h3>2017</h3>
                          <div class="pyro">
                            <div class="before"></div>
                            <div class="after"></div>
                          </div>
                          <div class="dance">
                            <img src="assets/music/dancing.gif">
                          </div>
                          <audio autoplay loop>
                            <source src="assets/music/celebrate.mp3" type="audio/mpeg">
                          </audio>`;
      }
    });
}

window.onload = () => {
  const deadline = new Date("June 8, 2017 00:00:00");
  startTimer("clock", deadline);
  // const clock = document.getElementById('clock');
  // const units = document.getElementById('units');

  // clock.style.animation = "10s ease-out clockAnim";
}

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
    img.removeAttribute('data-src');
	};
});

document.getElementById("tickTock").volume = 0.40;