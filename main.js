// add active class to selected item
let list = document.querySelectorAll(".list");
let h2 = document.querySelector(".h2");
let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");
let li4 = document.querySelector(".li4");
let li5 = document.querySelector(".li5");
let li6 = document.querySelector(".li6");
let li7 = document.querySelector(".li7");
h2.innerHTML = `Home`;
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
    if (li1.classList.contains("active")) {
      h2.innerHTML = `Home`;
    } else if (li2.classList.contains("active")) {
      h2.innerHTML = `Profile`;
    } else if (li3.classList.contains("active")) {
      h2.innerHTML = `Messages`;
    } else if (li4.classList.contains("active")) {
      h2.innerHTML = `Setting`;
    } else if (li5.classList.contains("active")) {
      h2.innerHTML = `Help`;
    } else if (li6.classList.contains("active")) {
      h2.innerHTML = `Password`;
    } else if (li7.classList.contains("active")) {
      h2.innerHTML = `Sign out`;
    } else {
      h2.innerHTML = `Home`;
    }
  };
}
// toggle
let menuToggle = document.querySelector(".toggle");
let container = document.querySelector(".container");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  container.classList.toggle("active");
};
// change the text on the screen
