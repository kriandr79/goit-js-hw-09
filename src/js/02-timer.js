import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.startBtn.disabled = true; // деактивуємо кнопку Start

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = new Date(selectedDates[0]);
    const currentDate = Date.now(); // поточний час

    if (selectedDate.getTime() < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true; // деативуємо кнопку Start
    } else {
      Notiflix.Notify.success('You choose a right date');
      refs.startBtn.disabled = false; // активуємо кнопку Start
    }
  },
};

flatpickr(refs.input, options);

function onStartBtnClick() {
  refs.startBtn.disabled = true; // деактивуємо кнопку Start

  const selectedTime = new Date(
    refs.input._flatpickr.selectedDates[0]
  ).getTime(); // беремо час який вибрано в інпуті

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedTime - currentTime;

    // Перевірка коли таймер дійде до 0
    if (deltaTime <= 0) {
      clearInterval(intervalId);
      Notiflix.Notify.info('The time is gone');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


