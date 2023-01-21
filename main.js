const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__content__close");

const darkButton = document.querySelector(".dark-mode-button");
const navbar = document.querySelector(".navbar");
const loader = document.querySelector(".loader");
const modalStyle = document.querySelector(".modal__content");

button1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  console.log("close");
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  navbar.classList.toggle("dark-nav");
  loader.classList.toggle("dark");
  modalStyle.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

const getMode = () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    navbar.classList.add("dark-nav");
    loader.classList.add("dark");
    modalStyle.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    navbar.classList.remove("dark-nav");
    loader.classList.remove("dark");
    modalStyle.classList.remove("dark");
  }
};

getMode();
