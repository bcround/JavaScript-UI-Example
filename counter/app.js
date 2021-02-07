// DOM
const $incBtn = document.querySelector('.increase');
const $decBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (() => {
  let count = 0;

  return cb => {
    count = cb(count);
    return count;
  }
})();

const increase = num => ++num;

const decrease = num => num <= 0 ? 0 : --num;

$incBtn.addEventListener('click', () => {
  $counter.textContent = counter(increase);
})

$decBtn.addEventListener('click', () => {
  $counter.textContent = counter(decrease);
})