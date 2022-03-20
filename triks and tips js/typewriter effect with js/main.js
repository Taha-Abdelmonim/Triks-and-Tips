let info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat",
  i = 0;

window.onload = function () {
  let typeWriter = setInterval(() => {
    document.getElementById("type").textContent += info[i];
    i += 1;
    // i > info.length - 1 ? clearInterval(typeWriter) : "";
    if (i > info.length) {
      i = 0;
      document.getElementById("type").textContent = "";
    }
  }, 100);
};
