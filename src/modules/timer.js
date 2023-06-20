const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.count_1>span')
  const timerHours = document.querySelectorAll('.count_2>span')
  const timerMinutes = document.querySelectorAll('.count_3>span')
  const timerSecondes = document.querySelectorAll('.count_4>span')

  const divTime = document.querySelectorAll('.countdown-text')

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let secondes = Math.floor(timeRemaining % 60)

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      secondes
    }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()

    timerDays.forEach(timerDay => timerDay.textContent = getTime.days < 10 ? "0" + getTime.days : getTime.days)
    timerHours.forEach(timerHour => timerHour.textContent = getTime.hours < 10 ? "0" + getTime.hours : getTime.hours)
    timerMinutes.forEach(timerMinute => timerMinute.textContent = getTime.minutes < 10 ? "0" + getTime.minutes : getTime.minutes)
    timerSecondes.forEach(timerSeconde => timerSeconde.textContent = getTime.secondes < 10 ? "0" + getTime.secondes : getTime.secondes)

  }

   const timerInterval = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      setInterval(() => {
        updateClock();
      }, 1000);
    }
    if (getTime.timeRemaining < 0) {
      divTime.forEach(div => div.innerHTML = "Акция закончилась");
    }
  };

  timerInterval()

};

export default timer;
