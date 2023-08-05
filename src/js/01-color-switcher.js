const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const ACTION_INTERVAL = 1000;
let isStopped = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

refs.stopBtn.setAttribute('disabled', 'disabled'); // деактивуємо кнопку Stop


function onStartBtnClick() {
  isStopped = false;
  refs.startBtn.setAttribute('disabled', 'disabled'); // деактивуємо кнопку Start
  refs.stopBtn.removeAttribute('disabled'); // активуємо кнопку Stop

  const timerId = setInterval(() => {
    if (isStopped) {
      clearInterval(timerId);
      refs.startBtn.removeAttribute('disabled'); // активуємо кнопку Start
      return;
    }

    document.body.style.backgroundColor = getRandomHexColor();
  }, ACTION_INTERVAL);
}

function onStopBtnClick() {
  if (isStopped) {
    return;
  }
  isStopped = true;
  refs.stopBtn.setAttribute('disabled', 'disabled'); // деактивуємо кнопку Stop
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
