require('../styles.scss');
import data from '../data.json';



function template({img, headline, text}, index) {
  return `<section class="section-exercise"
    style="
      z-index:${100-index};
      animation-delay:${59+30*index}s;">
    <h2>${headline}</h2>
    <div class="exercise-body">
      <p>${text}</p>
      <img src="${img}" alt="${headline}">
    </div>
  </section>`;
}

let container = document.getElementById('exercisesContainer');
const exercises = data.map((x, i) => (x.html = template(x, i)) && x);
container.innerHTML = exercises.reduce((a,b) => a + b.html, '');


let countdown = document.getElementById('countdown');
countdown.addEventListener('animationiteration', function () {
  countdown.innerText = countdown.innerText - 1;
});
countdown.addEventListener('animationend', startExercise);
function startExercise() {
  countdown.removeEventListener('animationend', startExercise);
  countdown.style.animationIterationCount = 61;
  countdown.innerText = countdown.innerText - 1;
  nextExercise();
  startTimer();
}

let timer = document.createElement('div');
timer.className = 'timer';
timer.addEventListener('animationend', function (e) {
  if(e.animationName === 'rotate2') {
    stopTimer();
    if(nextExercise()) {
      startTimer();
    };
  }
});
function startTimer() {
  document.body.prepend(timer);
}
function stopTimer() {
  timer.remove();
}


let height = 0;
function nextExercise() {
  height += -70;
  document.getElementById('wrapper').style.transform = `translateY(${height}vh)`;
  return (height > -70 * (data.length + 1));
}