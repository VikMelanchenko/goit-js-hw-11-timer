const timerCount = document.getElementById("timer-1");
const countDays = document.querySelector('[data-value="days"]');
const countHours = document.querySelector('[data-value="hours"]');
const countMins = document.querySelector('[data-value="mins"]');
const countSecs = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.time = 0;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.updateClockface(time);
    }, 1000);
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    // timerCount.textContent = `${days}:${hours}:${mins}:${secs}`;
    countDays.textContent = `${days}`;
    countHours.textContent = `${hours}`;
    countMins.textContent = `${mins}`;
    countSecs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Nov 30, 2020"),
}).start();
