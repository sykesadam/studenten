function updateTimer(deadline) {
  const time = deadline - new Date();
  return {
    weeks: Math.floor(time / (1000 * 60 * 60 * 24) / 7),
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60),
    total: time,
  };
}

function startTimer(deadline) {
  const timerInterval = setInterval(() => {
    const clock = document.getElementById('clock');
    const weeks = document.getElementById('weeks');
    const cont = document.getElementById('del-countdown');
    const timer = updateTimer(deadline);

    clock.innerHTML = `<span>${timer.days}</span>
                      <span>${timer.hours}</span>
                      <span>${timer.minutes}</span>
                      <span>${timer.seconds}</span>`;

    weeks.innerHTML = `<span>${timer.weeks} weeks</span>`;

    //  check for end of timer
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
                            <source src="assets/music/celebrate.ogg" type="audio/ogg">
                            <source src="assets/music/celebrate.mp3" type="audio/mpeg">
                          </audio>`;
      const myAudio = document.getElementById('myAudio');
      const btn = document.getElementById('btn');

      function toggleSound() {
        if (myAudio.paused) {
          return myAudio.play();
        }
        return myAudio.pause();
      }

      btn.addEventListener('click', toggleSound);
    }
  });
}

window.onload = () => {
  const deadline = new Date('June 9, 2017 07:00:00');
  startTimer(deadline);

  [].forEach.call(document.querySelectorAll('img[data-src]'), (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
      img.removeAttribute('data-src');
    };
  });
};

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running
  audio.currentTime = 0; // rewind to the start baby
  audio.play();
  key.classList.add('playing');
}

function removeTransitions(e) {
  if (e.propertyName !== 'transform') return; // skip it if its not a transofrm
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransitions));

window.addEventListener('keydown', playSound);