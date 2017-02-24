require('./styles.scss');
import data from './data.json';

function template({img, headline, text}, index) {
  return `<section class="section-exercise" style="z-index:${100-index};">
    <h2>${headline}</h2>
    <div class="exercise-body">
      <p>${text}</p>
      <img src="${img}" alt="${headline}">
    </div>
  </section>`;
}

document.getElementById('exercisesContainer').innerHTML = data
  .map((x, i) => (x.html = template(x, i)) && x)
  .reduce((a,b) => a + b.html, '');

let counter = 10;
let countdown = document.getElementById('countdown');
countdown.addEventListener('animationiteration', function () {
  countdown.innerText = --counter;
  if (!counter) {
    nextExercise();
    startTimer();
  }
});
countdown.innerText = counter;
countdown.style.animationIterationCount = counter + 1;
let timer = document.createElement('div');
timer.className = 'timer';
timer.addEventListener('animationend', function (e) {
  if(e.animationName === 'rotate2') {
    stopTimer();
    if(nextExercise()) {
      startTimer();
    } else {
      exerciseFinnished();
    };
  }
});
timer.addEventListener('dblclick', function () {
  window.location.reload();
});
function startTimer() {
  document.body.prepend(timer);
  document.getElementById('nextExercise').play();
}
function stopTimer() {
  timer.remove();
}
function exerciseFinnished() {
  document.getElementById('exerciseFinished').play();
}

let height = 0;
function nextExercise() {
  height += -70;
  document.getElementById('wrapper').style.transform = `translateY(${height}vh)`;
  return (height > -70 * (data.length + 1));
}

document.getElementById('restart').addEventListener('click', () => {
  window.location.reload();
});
