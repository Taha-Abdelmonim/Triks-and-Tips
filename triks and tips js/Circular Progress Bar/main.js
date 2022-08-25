let inside = document.querySelector(".inside");
let value = document.querySelector(".value");
let input = document.querySelector(".range input");
let btn = document.querySelector(".btn");
let i = 1;

btn.addEventListener("click", () => {
  if (input.value != "") {
    let x = setInterval(() => {
      if (i < input.value) {
        value.innerHTML = ++i + "%";
        inside.style.background = `conic-gradient(#880bea ${i}deg , #DDD 0deg)`;
      } else {
        value.innerHTML = --i + "%";
        inside.style.background = `conic-gradient(#880bea ${i}deg , #DDD 0deg)`;
      }
      if (i == 360) {
        value.innerHTML = `<img src="accept.png" alt="">`;
        clearInterval(x);
      }
      if (i == input.value) {
        clearInterval(x);
      }
    }, 10);
  } else {
    alert("you have to fill the input");
  }
});
