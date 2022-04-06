let cr1 = document.getElementById("cr1"),
  cr2 = document.getElementById("cr2"),
  cr3 = document.getElementById("cr3");
setTimeout(() => {
  cr1.style.strokeDashoffset = `${440 - (440 * 90) / 100}`;
}, 1000);

setTimeout(() => {
  cr2.style.strokeDashoffset = `${440 - (440 * 80) / 100}`;
}, 2000);

setTimeout(() => {
  cr3.style.strokeDashoffset = `${440 - (440 * 60) / 100}`;
}, 3000);
