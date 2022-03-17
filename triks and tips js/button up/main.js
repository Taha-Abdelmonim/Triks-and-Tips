let span = document.querySelector(".up");

window.onscroll = () => {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
