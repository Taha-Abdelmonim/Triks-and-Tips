let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
  let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charsCount = 10;
  let randomSerial = "";

  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
};
