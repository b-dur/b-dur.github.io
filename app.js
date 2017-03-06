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

let progress = document.getElementById('progress')
let currentExercise = 1;

document.getElementById('exercisesContainer').innerHTML = data
  .map((x, i) => (x.html = template(x, i)) && x)
  .reduce((a,b) => a + b.html, '');

let counter = 10;
let countdown = document.getElementById('countdown');
countdown.addEventListener('animationiteration', function () {
  countdown.innerText = --counter;
  if (!counter) {
    startExercise();
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

function startExercise() {
  moveContent();
  progress.steps = data.length;
  progress.nextStep(0);
  return (currentExercise <= data.length);
}

function nextExercise() {
  currentExercise++;
  moveContent();
  progress.nextStep();

  return (currentExercise <= data.length);
}

function moveContent() {
  document.getElementById('wrapper').style.transform = `translateY(${-70 * currentExercise}vh)`;
}

document.getElementById('restart').addEventListener('click', window.location.reload);

class ProgressBar extends HTMLElement {
  constructor(){
    super();
    this.steps = 0;
    this.step = 0;
  }

  nextStep(value) {
    if (typeof value === 'undefined') {
      this.step++;
    } else {
      this.step = value;
    }
    this.render();
  }

  render() {
    let classes = [];
    for (let i = 0; i < this.steps; i++) {
      if (i < this.step) {
        classes.push('done');
      } else if (i === this.step) {
        classes.push('current');
      } else {
        classes.push('');
      }
    }
    let lis = classes.map(x => `<li class="${x}"></li>`).reduce((a,b) => a + b, '');
    this.innerHTML = `<ul id="progress">${lis}</ul>`;
  }

  connectedCallback() {
    this.steps = this.getAttribute('steps');
    this.step = this.getAttribute('step');
    this.render();
  }
}
window.customElements.define("progress-bar", ProgressBar);
