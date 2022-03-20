function showTime() {
  let now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    mlisecond = now.getMilliseconds(),
    clock = document.getElementById("clock");
  hours < 10
    ? (hours = `0${hours}`)
    : minutes < 10
    ? (minutes = `0${minutes}`)
    : seconds < 10
    ? (seconds = `0${seconds}`)
    : "";
  clock.textContent = `${hours}:${minutes}:${seconds}:${mlisecond}`;
}

setInterval(showTime, 450);
