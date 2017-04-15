function updateTimer(deadline) {
  const time = deadline - new Date();
  return {
    'days': Math.floor(time / (1000 * 60 * 60 * 24)),
    'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
    'minutes': Math.floor((time / 1000 / 60) % 60),
    'seconds': Math.floor((time / 1000) % 60),
    'total': time
  };
}

function startTimer(id, deadline) {
  const timerInterval = setInterval(() => {
    const clock = document.getElementById(id);
    const cont = document.getElementById('del-countdown');
    const timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
      + '<span>' + timer.hours + '</span>'
      + '<span>' + timer.minutes + '</span>'
      + '<span>' + timer.seconds + '</span>';

    //check for end of timer
    if (timer.total < 1) {
      clearInterval(timerInterval);

      cont.innerHTML = `<h1>🎉<span>STUDENTEN</span>🎉</h1>                         
                          <h3>Hämta skumpan, dax att fira</h3>
                          <div class="pyro">
                            <div class="before"></div>
                            <div class="after"></div>
                          </div>
                          <div class="dance" id="btn">
                            <img src="assets/music/dancing.gif">
                          </div>
                          <audio id="myAudio" loop autoplay>
                            // <source src="assets/music/celebrate.ogg" type="audio/ogg">
                            <source src="assets/music/celebrate.mp3" type="audio/mpeg">
                          </audio>`;
      const myAudio = document.getElementById("myAudio");
      const btn = document.getElementById("btn");

      btn.addEventListener("click", toggleSound);

      function toggleSound() {
        if (myAudio.paused) {
          return myAudio.play();
        } else {
          return myAudio.pause();
        }
      }
    }
  });
}


window.onload = () => {
  const deadline = new Date("January 8, 2017 00:00:00");
  startTimer("clock", deadline);
}

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
});