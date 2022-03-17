
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now 
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // days
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000); // Seconds

  document.querySelector(".days").innerHTML =
    days < 10 ? `Days : 0${days}` : `Days: ${days}`;
  document.querySelector(".hours").innerHTML =
    hours < 10 ? `Hours :0${hours}` : `Hours :${hours}`;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `Minutes:0${minutes}` : `Minutes:${minutes}`;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `Seconds:0${seconds}` : `Seconds:${seconds}`;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
