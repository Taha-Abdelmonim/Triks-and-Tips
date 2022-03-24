let container = document.querySelector(".container"),
  slides = document.querySelectorAll(".slide"),
  index = 0,
  deg = 0;

setInterval(() => {
  if (index == 4) {
    index = 0;
    // deg = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  container.style.transform = `rotateY(${deg}deg)`;
  slides[index].classList.add("active");
  index++;
  deg += 90;
}, 3000);
