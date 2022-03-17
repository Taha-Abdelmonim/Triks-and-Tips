let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  count.innerHTML == 0 ? (progress.style.backgroundColor = "red") : (progress.style.backgroundColor = "#2196f3");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
