// DOM
const $display = document.querySelector('.display');
const $leftBtn = document.querySelector('.leftButton');
const $rightBtn = document.querySelector('.rightButton');
const $laps = document.querySelector('.laps');

let on = 1;
let mm = 0;
let ss = 0;
let ms = 0;
let startTimer = null;
let lapCount = 0;

$leftBtn.addEventListener('click', () => {
  if (on) {
    $leftBtn.textContent = 'Stop';
    $rightBtn.textContent = 'Lap';
    $rightBtn.removeAttribute('disabled');
    on = 0;

    startTimer = null;
    if (startTimer) return;

    startTimer = setInterval(() => {
      ms++;
      if (ms > 99) {
        ss++;
        ms = 0;
      }
      if (ss > 59) {
        mm++;
        ss = 0;
      }
      $display.textContent = `${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}:${ms < 10 ? '0' + ms : ms}`;
    }, 10);

    return;
  }

  $leftBtn.textContent = 'Start';
  $rightBtn.textContent = 'Reset';
  clearInterval(startTimer);
  on = 1;
});

$rightBtn.addEventListener('click', () => {
  const $fragment = document.createDocumentFragment();
  const $lap = document.createElement('div');
  const $lapTime = document.createElement('div');

  if (!on) {
    $lap.textContent = ++lapCount;
    $lapTime.textContent = $display.textContent;
    $fragment.appendChild($lap);
    $fragment.appendChild($lapTime);
    $laps.appendChild($fragment);

    return;
  }
  lapCount = 0;
  mm = 0;
  ss = 0;
  ms = 0;
  $display.textContent = `${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}:${ms < 10 ? '0' + ms : ms}`;
  $laps.innerHTML = '';
  $rightBtn.setAttribute('disabled', '');
});