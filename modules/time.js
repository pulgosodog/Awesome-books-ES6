import { DateTime } from './luxon.js';

const currentDate = () => {
  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const timeTag = document.querySelector('.time');
  timeTag.textContent = currentTime;
};

export default currentDate;