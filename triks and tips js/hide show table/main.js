let userName = document.getElementById("user-id"),
  tr = document.querySelectorAll("table tbody tr");
let searchFunction = () => {
  let filter = userName.value;
  if (filter) {
    tr.forEach((el) => {
      el.style.display = "none";
    });
    tr.forEach((el) => {
      if (el.firstElementChild.lastElementChild.textContent.includes(filter)) {
        el.style.display = "contents";
      }
    });
  }
};

userName.oninput = () => {
  if (userName.value.length == 0) {
    tr.forEach((el) => {
      el.style.display = "";
    });
  }
};

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
};
