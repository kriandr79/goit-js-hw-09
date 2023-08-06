const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const ACTION_INTERVAL = 1000;
let isStopped = true;   // можливо, можно зробити привязку до статусу кнопки замість додаткової змінної

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

refs.stopBtn.disabled=true; // деактивуємо кнопку Stop


function onStartBtnClick() {
  isStopped = false;
  refs.startBtn.disabled = true; // деактивуємо кнопку Start
  refs.stopBtn.disabled = false; // активуємо кнопку Stop

  const timerId = setInterval(() => {
    if (isStopped) {
      clearInterval(timerId);
      refs.startBtn.disabled = false; // активуємо кнопку Start
      return;
    }

    document.body.style.backgroundColor = getRandomHexColor();
  }, ACTION_INTERVAL);
}

function onStopBtnClick() {
  isStopped = true;
  refs.stopBtn.disabled = true; // деактивуємо кнопку Stop
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
