const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

const ACTION_INTERVAL = 1000;
let isStopped = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    isStopped = false;
    refs.startBtn.setAttribute('disabled', 'disabled'); // деактивуємо кнопку Старт

  const timerId = setInterval(() => {
    if (isStopped) {
      clearInterval(timerId);
      refs.startBtn.removeAttribute('disabled'); // активуємо кнопку Старт
      return;
    }
    
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, ACTION_INTERVAL);
}

function onStopBtnClick() {
    if (isStopped) {
        return;
    }
    isStopped = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
