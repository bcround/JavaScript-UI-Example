// DOM
const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');

let secDeg = 0;
let minDeg = 0;
let hourDeg = 0;

const second = setInterval(() => {
  if (secDeg !== 0) {
    $second.style.transform = `rotate(${secDeg}deg)`;
  }
  secDeg += 6;
}, 1000);

const minute = setInterval(() => {
  if (minDeg !== 0) {
    $minute.style.transform = `rotate(${minDeg}deg)`;
  }
  if (secDeg % 360 === 0) minDeg += 6;
}, 1000)

const hour = setInterval(() => {
  if (hourDeg !== 0) {
    $hour.style.transform = `rotate(${hourDeg}deg)`;
  }
  hourDeg += 30 / 3600;
}, 1000)