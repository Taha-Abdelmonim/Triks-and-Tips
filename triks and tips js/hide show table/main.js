let userName = document.getElementById("user-id"),
  tr = document.querySelectorAll("table tbody tr");
let searchFunction = () => {
  let filter = userName.value;
  let re = new RegExp(filter, "ig");
  if (filter) {
    tr.forEach((el) => {
      el.style.display = "none";
    });
    tr.forEach((el) => {
      if (el.firstElementChild.lastElementChild.textContent.match(re)) {
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
